import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import gzip from 'rollup-plugin-gzip'
import { uglify } from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import fs from 'fs'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/wallet-module.js',
    format: 'iife',
    moduleName: 'WalletModule',
    sourcemap: true,
  },
  plugins: [
    json(),
    sass({
      processor: css =>
        postcss([autoprefixer])
          .process(css)
          .then(result => result.css),
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',
    }),
    typescript({
      // On windows typescript resolver favors POSIX path,
      // while commonjs plugin (and maybe others?) uses native path
      // as module id. This can result in namedExports being ignored
      // if rollup happened to use typescript's resolution.
      //
      // Set to true to pass resolved module path
      // through resolve() to match up with rollup-plugin-commonjs.
      rollupCommonJSResolveHack: true,
    }),
    resolve({
      module: true,
      jsnext: true,
      main: true,

      // some package.json files have a `browser` field which
      // specifies alternative files to load for people bundling
      // for the browser. If that's you, use this option, otherwise
      // pkg.browser will be ignored
      browser: true, // Default: false
    }),
    vue(),
    buble(),
    uglify(),
    gzip(),
  ],
}

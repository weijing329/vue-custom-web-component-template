<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <h1>{{ name }}</h1>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-content>
      <transition name="router" mode="out-in">
        <router-view class="view router-view"></router-view>
      </transition>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./app.scss" scoped></style>
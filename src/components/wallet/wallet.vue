<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>My Wallet</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <h1>{{ prop1 }}</h1>
        <p>
          privateKey
          <pre>{{ privateKey }}</pre>
        </p>
        <p>
          ethereumKeyJson
          <pre>{{ ethereumKeyJson }}</pre>
        </p>
        <p>
          decryptWalletObj
          <pre>{{ decryptWalletObj }}</pre>
        </p>
        <p>
          decryptPrivateKey
          <pre>{{ decryptPrivateKey }}</pre>
        </p>
      </v-container>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./wallet.scss" scoped></style>
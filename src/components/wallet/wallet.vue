<template>
  <v-container fluid>
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
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./wallet.scss" scoped></style>
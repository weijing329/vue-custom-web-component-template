import Vue from "vue";
import { Component } from "vue-property-decorator";

declare global {
  interface Window {
    EthKeyLibBrowser: EthKeyLibBrowser
  }
}

@Component({
  components: {}
})
export default class WalletModule extends Vue {
  _privateKey: string = "";

  _ethereumKeyJson: any = {};

  _decryptWalletObj: any = {};

  get privateKey(): string {
    return this._privateKey;
  }

  get ethereumKeyJson(): any {
    return this._ethereumKeyJson;
  }

  get decryptWalletObj(): any {
    return this._decryptWalletObj;
  }

  get decryptPrivateKey(): string {
    return `0x${this._decryptWalletObj.privateKeyBuffer.toString('hex')}`;
  }

  created() {
    // See: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    this.init();
  }

  init(): void {
    this._privateKey = window.EthKeyLibBrowser.CreatePrivateKeyHexString();
    this._ethereumKeyJson = window.EthKeyLibBrowser.CreateEthereumKeyJson('1234', this._privateKey);
    this._decryptWalletObj = window.EthKeyLibBrowser.DecryptEthereumKeyJson('1234', this._ethereumKeyJson);
  }
}
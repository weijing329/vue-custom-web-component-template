declare class EthKeyLibBrowser {
  CreateEthereumKeyJson(passphrase: any, privateKeyHexString: any): {
    version: number;
    id: string;
    address: string;
    crypto: {
      [x: string]: any;
      ciphertext: string;
      cipherparams: {
        [x: string]: any;
        iv: string;
      };
      cipher: string;
      kdf: string;
      kdfparams: {
        [x: string]: any;
        c: number;
        dklen: number;
        prf: string;
        salt: string;
      };
    mac: any;
    };
  }

  CreatePrivateKeyHexString(): string

  DecryptEthereumKeyJson(passphrase: any, keyJson: any): {
    privateKeyBuffer: any;
    addressString: string;
    checksumAddressString: string;
  }

  SignTransaction(privateKeyBuffer: any, transactionObject: any): string
}
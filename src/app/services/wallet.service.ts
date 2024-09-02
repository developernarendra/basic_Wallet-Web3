import { Injectable } from '@angular/core';
import * as bip39 from 'bip39';
import { v4 as uuidv4 } from 'uuid'; // Use this for generating unique IDs if you need more compatibility.

export interface Wallet {
  id: string;
  name: string;
  mnemonic: string;
  publicKey: string;
  privateKey: string;
}

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private wallets: Wallet[] = [];

  constructor() {}

  generateMnemonic(): string {
    return bip39.generateMnemonic();
  }

  createWallet(name: string): Wallet {
    const mnemonic = this.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);

    // Using Buffer to handle binary data and conversion
    const publicKey = Buffer.from(seed.slice(0, 32)).toString('hex');
    const privateKey = Buffer.from(seed.slice(32, 64)).toString('hex');

    const newWallet: Wallet = {
      id: crypto.randomUUID(), // Use uuidv4() if you need more browser support.
      name,
      mnemonic,
      publicKey,
      privateKey,
    };

    this.wallets.push(newWallet);
    return newWallet;
  }

  getWallets(): Wallet[] {
    return this.wallets;
  }

  deleteWallet(id: string): void {
    this.wallets = this.wallets.filter(wallet => wallet.id !== id);
  }
}

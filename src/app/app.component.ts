import { Component } from '@angular/core';
import { WalletService, Wallet } from './services/wallet.service';
import { RouterOutlet } from '@angular/router';
import { WalletCreateComponent } from './components/wallet-create/wallet-create.component';
import { WalletListComponent } from './components/wallet-list/wallet-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WalletCreateComponent, WalletListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  wallets: Wallet[] = [];

  constructor(private walletService: WalletService) {
    this.wallets = this.walletService.getWallets();
  }

  onCreateWallet(name: string) {
    this.walletService.createWallet(name);
    this.wallets = this.walletService.getWallets(); // Update wallets after creation
  }

  onDeleteWallet(id: string) {
    this.walletService.deleteWallet(id);
    this.wallets = this.walletService.getWallets(); // Update wallets after deletion
  }
}

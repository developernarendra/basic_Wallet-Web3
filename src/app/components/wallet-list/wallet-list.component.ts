import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Wallet } from '../../services/wallet.service';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet-list',
  standalone: true,
  imports: [MatCardHeader,MatCard, MatCardTitle, MatCardContent, MatCardActions, CommonModule],
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss'] // Changed to styleUrls
})
export class WalletListComponent {
  @Input() wallets: Wallet[] = [];
  @Output() deleteWallet = new EventEmitter<string>();

  onDelete(id: string) {
    this.deleteWallet.emit(id);
  }
}

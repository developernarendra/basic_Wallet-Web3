import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Correct import

@Component({
  selector: 'app-wallet-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, // Corrected Import
    MatError,
    MatLabel,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    CommonModule,
    MatCardHeader
  ],
  templateUrl: './wallet-create.component.html',
  styleUrl: './wallet-create.component.scss',
})
export class WalletCreateComponent {
  @Output() createWallet = new EventEmitter<string>();
  walletForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.walletForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onCreate() {
    debugger
    if (this.walletForm.valid) {
      this.createWallet.emit(this.walletForm.value.name);
      this.walletForm.reset();
    }
  }
}

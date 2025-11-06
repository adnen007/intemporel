import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
type Transactions = { method: string; currentAmount: number; date: string; methodId: string }[];

@Component({
  selector: 'app-payment',
  imports: [MatIconModule, CommonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  paymentMethods: Transactions = [];

  addMethod(method: string) {
    this.paymentMethods.push({
      method,
      currentAmount: 0,
      date: new Date().toDateString(),
      methodId: crypto.randomUUID(),
    });
  }

  cancelMethod(id: string) {
    this.paymentMethods = this.paymentMethods.filter(({ methodId }) => {
      return !(methodId === id);
    });
  }
}

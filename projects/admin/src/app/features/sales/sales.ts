import { Component } from '@angular/core';
import { Order } from './order/order';
import { SalesToolbar } from './sales-toolbar/sales-toolbar';
@Component({
  selector: 'app-sales',
  imports: [Order, SalesToolbar],
  templateUrl: './sales.html',
  styleUrl: './sales.css',
})
export class Sales {}

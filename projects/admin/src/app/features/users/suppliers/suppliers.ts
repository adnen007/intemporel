import { Component } from '@angular/core';
import { Supplier } from './supplier/supplier';
import { SupplierToolbar } from './supplier-toolbar/supplier-toolbar';
@Component({
  selector: 'app-suppliers',
  imports: [Supplier, SupplierToolbar],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css',
})
export class Suppliers {}

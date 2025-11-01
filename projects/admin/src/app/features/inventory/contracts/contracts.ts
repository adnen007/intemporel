import { Component } from '@angular/core';
import { ContractToolbar } from '../contract-toolbar/contract-toolbar';
import { Contract } from '../contract/contract';
@Component({
  selector: 'app-contracts',
  imports: [ContractToolbar, Contract],
  templateUrl: './contracts.html',
  styleUrl: './contracts.css',
})
export class Contracts {}

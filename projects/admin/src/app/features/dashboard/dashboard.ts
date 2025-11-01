import { Component } from '@angular/core';
import { DashboardNav } from './dashboard-nav/dashboard-nav';
import { CommonModule } from '@angular/common';
import { Chart } from './chart/chart';
import { ContractChart } from './contract-chart/contract-chart';
import { AddOrder } from './add-order/add-order';
import { AddContract } from './add-contract/add-contract';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [DashboardNav, CommonModule, Chart, AddOrder, ContractChart, AddContract, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  navs = [
    {
      name: 'Utilisateurs',
      imgUrl: 'images/sidebar-images/profile.svg',
      numbers: 788,
      link: 'users/clients',
    },
    {
      name: 'articles',
      imgUrl: 'images/sidebar-images/articles.svg',
      numbers: 324,
      link: 'inventory/products',
    },
    {
      name: 'contrats',
      imgUrl: 'images/sidebar-images/shopping-bag.svg',
      numbers: 324,
      link: 'inventory/contracts',
    },
    {
      name: 'commandes',
      imgUrl: 'images/sidebar-images/commandes.svg',
      numbers: 324,
      link: 'sales',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatIcon } from '@angular/material/icon';
import { LayoutService } from '../layout-service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatIcon, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = [
    {
      title: 'Tableau de board',
      subtitle: 'Statistiques, Raccourcis...',
      icon: 'images/sidebar-images/shop.svg',
      link: '/admin',
    },
    {
      title: 'Utilisateurs',
      subtitle: 'Admins, Vendeurs, Clients...',
      icon: 'images/sidebar-images/profile.svg',
      expanded: false,
      submenu: [
        { label: 'Admins', link: '/admin/users/admins' },
        { label: 'Clients', link: '/admin/users/clients' },
        { label: 'Fournisseurs', link: '/admin/users/suppliers' },
        { label: "Demandes d'adhésion", link: '/admin/users/join-requests' },
      ],
    },
    {
      title: 'Point de vente',
      subtitle: 'Commandes, Ventes...',
      icon: 'images/sidebar-images/commandes.svg',
      link: '/admin/sales',
    },
    {
      title: 'Contrat de dépôt',
      subtitle: 'Articles, Fournisseurs...',
      icon: 'images/sidebar-images/shopping-bag.svg',
      expanded: false,
      submenu: [
        { label: 'Contrats', link: '/admin/inventory/contracts' },
        { label: 'Articles', link: '/admin/inventory/products' },
      ],
    },
    {
      title: 'Dressing',
      subtitle: 'Modes, Catégories, Marques...',
      icon: 'images/sidebar-images/articles.svg',
      expanded: false,
      submenu: [
        { label: 'Modes', link: '/admin/dressing/modes' },
        { label: 'Catégories', link: '/admin/dressing/categories' },
        { label: 'Sous catégories', link: '/admin/dressing/subcategories' },
        { label: 'Marques', link: '/admin/dressing/brands' },
        { label: 'États', link: '/admin/dressing/conditions' },
        { label: 'Tailles', link: '/admin/dressing/sizes' },
        { label: 'Couleurs', link: '/admin/dressing/colors' },
        { label: 'Images exemplaires', link: '/admin/dressing/sample-images' },
      ],
    },
    {
      title: 'Réglages interfaces',
      subtitle: 'Slides, Bannières...',
      icon: 'images/sidebar-images/articles.svg',
      expanded: false,
      submenu: [
        { label: 'Sliders', link: '/admin/appearance/sliders' },
        { label: 'Bannières', link: '/admin/appearance/banners' },
      ],
    },
    {
      title: 'Messagerie',
      subtitle: 'Discussion instantanée...',
      icon: 'images/sidebar-images/shop.svg',
      link: '/admin/messages',
    },
  ];

  constructor(private layoutService: LayoutService) {}

  closeSidebar() {
    this.layoutService.closeSideBar();
  }

  toggleSubmenu(index: number) {
    this.menuItems[index].expanded = !this.menuItems[index].expanded;
  }
}

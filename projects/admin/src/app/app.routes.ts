import { Routes } from '@angular/router';

// Core feature imports
import { Dashboard } from './features/dashboard/dashboard';

// Dressing feature imports
import { Modes } from './features/dressing/modes/modes';
import { Categories } from './features/dressing/categories/categories';
import { SubCategories } from './features/dressing/sub-categories/sub-categories';
import { Brands } from './features/dressing/brands/brands';
import { Conditions } from './features/dressing/conditions/conditions';
import { Sizes } from './features/dressing/sizes/sizes';
import { Colors } from './features/dressing/colors/colors';
import { SampleImages } from './features/dressing/sample-images/sample-images';

// Users feature imports
import { Admins } from './features/users/admins/admins';
import { Clients } from './features/users/clients/clients';
import { Suppliers } from './features/users/suppliers/suppliers';
import { JoinRequests } from './features/users/join-requests/join-requests';

// Inventory feature imports
import { Contracts } from './features/inventory/contracts/contracts';
import { Products } from './features/inventory/products/products';

// Appearance feature imports
import { Sliders } from './features/appearance/sliders/sliders';
import { Banner } from './features/appearance/banner/banner';

// Sales feature imports
import { Sales } from './features/sales/sales';
import { AddOrderPage } from './features/sales/add-order-page/add-order-page';

// Messages feature imports
import { Messages } from './features/messages/messages';
import { AddContractPage } from './features/inventory/add-contract-page/add-contract-page';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },

  { path: 'admin', component: Dashboard },

  {
    path: 'admin/users',
    children: [
      { path: 'admins', component: Admins },
      { path: 'clients', component: Clients },
      { path: 'suppliers', component: Suppliers },
      { path: 'join-requests', component: JoinRequests },
    ],
  },

  {
    path: 'admin/sales',
    children: [
      { path: '', component: Sales },
      { path: 'add-order', component: AddOrderPage },
    ],
  },

  {
    path: 'admin/inventory',
    children: [
      {
        path: 'contracts',
        children: [
          { path: '', component: Contracts },
          { path: 'add-contract', component: AddContractPage },
        ],
      },
      { path: 'products', component: Products },
    ],
  },
  {
    path: 'admin/dressing',
    children: [
      { path: 'modes', component: Modes },
      { path: 'categories', component: Categories },
      { path: 'subcategories', component: SubCategories },
      { path: 'brands', component: Brands },
      { path: 'conditions', component: Conditions },
      { path: 'sizes', component: Sizes },
      { path: 'colors', component: Colors },
      { path: 'sample-images', component: SampleImages },
    ],
  },

  {
    path: 'admin/appearance',
    children: [
      { path: 'sliders', component: Sliders },
      { path: 'banner', component: Banner },
    ],
  },

  {
    path: 'admin/messages',
    component: Messages,
  },

  { path: '**', redirectTo: 'admin' },
];

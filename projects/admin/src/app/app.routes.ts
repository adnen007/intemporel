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

// Appearance feature imports
import { Slides } from './features/appearance/slides/slides';
import { Banners } from './features/appearance/banners/banners';

// Sales feature imports
import { Sales } from './features/sales/sales';
import { AddOrderPage } from './features/sales/add-order-page/add-order-page';

// Messages feature imports
import { Messages } from './features/messages/messages';
import { AddContractPage } from './features/inventory/add-contract-page/add-contract-page';

import { ProductsList } from './shared/shared-pages/products-list/products-list';
import { ProductDetail } from './shared/shared-pages/product-detail/product-detail';
import { AddProduct } from './shared/shared-pages/add-product/add-product';
import { AddProductPhotos } from './shared/shared-pages/add-product/add-product-photos/add-product-photos';
import { AddProductInfo } from './shared/shared-pages/add-product/add-product-info/add-product-info';
import { AddProductFeatures } from './shared/shared-pages/add-product/add-product-features/add-product-features';
import { AddProductPrice } from './shared/shared-pages/add-product/add-product-price/add-product-price';
import { AddProductDescription } from './shared/shared-pages/add-product/add-product-description/add-product-description';
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
      {
        path: 'products',

        children: [
          { path: '', component: ProductsList },
          {
            path: 'add-product',
            component: AddProduct,
            children: [
              { path: '', component: AddProductInfo },
              { path: 'photos', component: AddProductPhotos },
              { path: 'features', component: AddProductFeatures },
              { path: 'description', component: AddProductDescription },
              { path: 'price', component: AddProductPrice },
            ],
          },
        ],
      },
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
      { path: 'sliders', component: Slides },
      { path: 'banners', component: Banners },
    ],
  },

  {
    path: 'admin/messages',
    component: Messages,
  },
  { path: 'admin/products-list', component: ProductsList },
  { path: 'admin/products-list/product-detail', component: ProductDetail },
  { path: '**', redirectTo: 'admin' },
];

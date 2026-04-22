import {Routes} from '@angular/router';
import {ProductsGrid} from './pages/products-grid/products-grid';
import {MyWishlist} from './pages/my-wishlist/my-wishlist';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsGrid
  },
  {
    path: 'wishlist',
    component: MyWishlist
  }
];

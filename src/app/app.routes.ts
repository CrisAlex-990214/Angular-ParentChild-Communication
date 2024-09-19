import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shopping-cart/shopping-cart.component').then(c => c.ShoppingCartComponent)
    }
];

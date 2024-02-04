import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'product',
        loadChildren: () => import('./pages/product/product.module').then(m=>m.ProductModule)
    },
    {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module').then(m=>m.CategoryModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m=>m.UserModule)
    }
];

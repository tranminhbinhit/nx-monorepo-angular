import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import * as fromproductReducer from './state/product.reducer';
import { ProductFacade } from './state/product.facade';

const route: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(route), 
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromproductReducer.featureKey, fromproductReducer.reducer),
  ],
  providers: [ProductFacade]
})
export class ProductModule {}

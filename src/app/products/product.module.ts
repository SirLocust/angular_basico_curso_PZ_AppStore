import {ProductComponent} from './components/product/product.component'
import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import { ProductsComponent} from './components/products/products.component'

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductDetailComponent,
    ProductsComponent,
    ProductComponent
  ]
})
export class ProductModule { }

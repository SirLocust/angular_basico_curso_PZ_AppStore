import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';




const routes : Routes = [
    {
    path: '',
    component: ProductsComponent
    },
    {
     path:':id',
     component: ProductDetailComponent   
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProductRoutingModule{}






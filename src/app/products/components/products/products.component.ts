import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../components/product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  
  constructor( public productService: ProductsService) { }




  ngOnInit(): void {
    this.fetch();
  }
  clickProduct(){

  }

  fetch(): void {
    this.productService.getAllProducts()
    .subscribe( prod => {
      this.products = prod;
    });
  }

}

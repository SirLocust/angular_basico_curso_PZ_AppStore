import { ProductsService } from './../products.service';
import { Product } from './../components/product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  constructor( public productService: ProductsService) { }




  ngOnInit(): void {
  }
  clickProduct(){

  }

}

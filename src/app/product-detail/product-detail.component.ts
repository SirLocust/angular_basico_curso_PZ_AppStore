import { Product } from './../components/product/product.model';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  myProduct:Product
  constructor(
    private route: ActivatedRoute,
    private productService:ProductsService    
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Product) => {
      this.myProduct = this.productService.getProduct(params.id)
    });
  }
}
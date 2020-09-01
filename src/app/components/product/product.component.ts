import { Product } from './product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() producClicked: EventEmitter<any> = new EventEmitter();

  today:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  addCart(){
    
  }

}

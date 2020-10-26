import { environment } from './../../../../environments/environment';
import { Product } from '../../../products/components/product/product.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [];

  constructor( private http: HttpClient) { 

  }



  getAllProducts(){
    return this.http.get<Product[]>(environment.url_Api);
  }
  getProduct(id:string){
    return this.http.get<Product>(`${environment.url_Api}${id}`);
  }
}

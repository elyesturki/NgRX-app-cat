import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private host = environment.host;

  constructor( private httpClient: HttpClient) { }

  getProductsList(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.host + "/products")
  }

  getSelectedProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.host + "/products?selected=true")
  }

  getAvailableProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.host + "/products?available=true")
  }

  searchProducts(keyword: string) : Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.host + `/products?name_like=${keyword}`)
  }

  checkSelectProduct(product: IProduct) : Observable<IProduct> {
    product.selected = !product.selected;
    return this.httpClient.put<IProduct>(this.host+'/products/' + product.id,product)
  }

  deleteProduct(product: IProduct) : Observable<void> {
    return this.httpClient.delete<void>(this.host+'/products/' + product.id)
  }

  addProduct(product: IProduct) : Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.host+'/products/',product)
  }

  getProduct(id: number) : Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.host+'/products/'+id)
  }

  updateProduct(product: IProduct) : Observable<IProduct> {
    return this.httpClient.put<IProduct>(this.host+'/products/' + product.id,product)
  }

}

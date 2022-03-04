import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IProductsState, ProductsStateEnum } from '../../ngrx/products.reducer';
import { IProduct } from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsState$: Observable<IProductsState> | null = null;
  readonly DataStateEnum = ProductsStateEnum

  constructor( private store: Store<any>) { } // injecter le store dans le comonent pour le dispasher par la suite

  ngOnInit(): void {
   this.productsState$ = this.store.pipe(
      map( (state) => {
          console.log(state);
          return state.catalogState
        })
    )
  }

  onSelect(product: IProduct) {

  }

  onDelete(product: IProduct) {

  }

  onEdit(product: IProduct) {

  }


}

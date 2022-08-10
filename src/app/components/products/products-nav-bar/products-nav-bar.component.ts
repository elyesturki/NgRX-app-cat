import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { GetAllProductsActions, GetSelectedProductsActions } from '../../../ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.scss']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store: Store) {  } // injecter le store dans le comonent pour le dispasher par la suite

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsActions({})) // object vide car il a besoin de payload comme parametre
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsActions({}))
  }

}

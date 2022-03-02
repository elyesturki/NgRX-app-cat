import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IActionEvent, ProductsActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.scss']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() navbarProductsActionEventEmit: EventEmitter<IActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onGetProductsList() {
    this.navbarProductsActionEventEmit.emit({type:ProductsActionTypes.GET_ALL_PRODUCTS})
  }

  onSelectedProducts() {
    this.navbarProductsActionEventEmit.emit({type:ProductsActionTypes.GET_SELECTED_PRODUCTS})
  }

  onAvailableProducts() {
    this.navbarProductsActionEventEmit.emit({type:ProductsActionTypes.GET_AVAILABLE_PRODUCTS})
  }

  onNewProduct() {
    this.navbarProductsActionEventEmit.emit({type:ProductsActionTypes.NEW_PRODUCTS})
  }

  onSearch(dataForm: string) {
    this.navbarProductsActionEventEmit.emit({type:ProductsActionTypes.SEARCH_PRODUCTS, payload: dataForm})
  }

}

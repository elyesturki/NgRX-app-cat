import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStateEnum, IActionEvent, IAppDataState, ProductsActionTypes } from 'src/app/state/product.state';
import { IProduct } from '../../../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$: Observable<IAppDataState<IProduct[]>> | null = null;
  dataStateEnum = DataStateEnum;

  @Output() productActionEventEmitter: EventEmitter<IActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: IProduct) {
    this.productActionEventEmitter.emit({type: ProductsActionTypes.SELECT_PRODUCT, payload: product})
  }

  onDelete(product: IProduct) {
    this.productActionEventEmitter.emit({type: ProductsActionTypes.DELETE_PRODUCT, payload: product})
  }

  onEdit(product: IProduct) {
    this.productActionEventEmitter.emit({type: ProductsActionTypes.EDIT_PRODUCT, payload: product})
  }

}

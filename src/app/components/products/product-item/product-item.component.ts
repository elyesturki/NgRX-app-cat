import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IActionEvent, ProductsActionTypes } from 'src/app/state/product.state';
import { IProduct } from '../../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productInput: IProduct | null = null;
  @Output() actionProductEventEmit: EventEmitter<IActionEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: IProduct) {
    this.actionProductEventEmit.emit({type: ProductsActionTypes.SELECT_PRODUCT, payload: product})
  }

  onDelete(product: IProduct) {
    this.actionProductEventEmit.emit({type: ProductsActionTypes.DELETE_PRODUCT, payload: product})
  }

  onEdit(product: IProduct) {
    this.actionProductEventEmit.emit({type: ProductsActionTypes.EDIT_PRODUCT, payload: product})
  }

}

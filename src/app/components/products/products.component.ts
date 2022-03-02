import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../model/product.model';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataStateEnum, IAppDataState, ProductsActionTypes } from 'src/app/state/product.state';
import { Router } from '@angular/router';
import { IActionEvent } from '../../state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<IAppDataState<IProduct[]>> | null = null;
  dataStateEnum = DataStateEnum;

  constructor( private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.onGetProductsList();
  }

  onGetProductsList() {
    this.products$ = this.productsService.getProductsList()
    .pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})), // quand la liste de produit est chargé
      startWith({dataState: DataStateEnum.LOADING}), // return une valeur avant même que la requette soit envoyé
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})) // en cas d'erreur, opéreteur 'of' utilisé pour les observable
    )
  }

  onSelectedProducts() {
    this.products$ = this.productsService.getSelectedProducts()
    .pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})), // quand la liste de produit est chargé
      startWith({dataState: DataStateEnum.LOADING}), // return une valeur avant même que la requette soit envoyée
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})) // en cas d'erreur, opéreteur 'of' utilisé pour les observable
    )
  }

  onAvailableProducts() {
    this.products$ = this.productsService.getAvailableProducts()
    .pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})), // quand la liste de produit est chargé
      startWith({dataState: DataStateEnum.LOADING}), // return une valeur avant même que la requette soit envoyée
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})) // en cas d'erreur, opéreteur 'of' utilisé pour les observable
    )
  }

  onSearch(dataForm: any) {
    this.products$ = this.productsService.searchProducts(dataForm.keyword)
    .pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})), // quand la liste de produit est chargé
      startWith({dataState: DataStateEnum.LOADING}), // return une valeur avant même que la requette soit envoyée
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})) // en cas d'erreur, opéreteur 'of' utilisé pour les observable
    )
  }

  onSelect(prd: IProduct) {
    this.productsService.checkSelectProduct(prd)
    .subscribe(
      data=>prd.selected=data.selected // mise à jours que la valeur selected
    )
  }

  onDelete(prd: IProduct) {
    let validateAction=confirm('Etes-vous sûre?');
    if(validateAction) {
      this.productsService.deleteProduct(prd)
        .subscribe(
          data=>this.onGetProductsList()
      )
    }
  }

  onNewProduct() {
    this.router.navigateByUrl('/new-product');
  }

  onEdit(prd: IProduct) {
    this.router.navigateByUrl('/edit-product/'+ prd.id)
  }

  // event action from nav bar and prd list
  onActionEvent(event: IActionEvent) {
    console.log("Action emit reçue: ", event.type);
    switch (event.type) {
      case ProductsActionTypes.GET_ALL_PRODUCTS:
        this.onGetProductsList();
          break;
      case ProductsActionTypes.GET_SELECTED_PRODUCTS:
          this.onSelectedProducts();
          break;
      case ProductsActionTypes.GET_AVAILABLE_PRODUCTS:
          this.onAvailableProducts();
          break;
      case ProductsActionTypes.NEW_PRODUCTS:
          this.onNewProduct();
          break;
      case ProductsActionTypes.SEARCH_PRODUCTS:
          this.onSearch(event.payload)
          break;
      case ProductsActionTypes.SELECT_PRODUCT:
          this.onSelect(event.payload)
          break;
      case ProductsActionTypes.DELETE_PRODUCT:
          this.onDelete(event.payload)
          break;
      case ProductsActionTypes.EDIT_PRODUCT:
          this.onEdit(event.payload);
          break;
    }
  }

}

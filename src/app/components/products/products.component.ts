import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../model/product.model';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataStateEnum, IAppDataState } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<IAppDataState<IProduct[]>> | null = null;
  dataStateEnum = DataStateEnum;

  constructor( private productsService: ProductsService) { }

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

  onSelected(prd: IProduct) {
    this.productsService.checkSelectProduct(prd)
    .subscribe(
      data=>prd.selected=data.selected
    )
  }

}


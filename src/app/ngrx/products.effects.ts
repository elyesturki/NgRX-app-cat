import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from '../services/products.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from "@ngrx/store";
import { ProductsActionsTypes, GetAllProductsActionsSuccess, GetAllProductsActionsError, GetSelectedProductsActionsSuccess, GetSelectedProductsActionsError } from './products.actions';
import { IProduct } from '../model/product.model';

@Injectable ( {
  providedIn: "root"
})

export class ProductsEffects {

  constructor( private productsService: ProductsService, private effectActions:Actions ) {}

  getAllProductsEffect:Observable<Action> = createEffect ( // creation d'un effect de type observable
    ()=>{
      return this.effectActions.pipe( // pipe sur l'action (observable)
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS), // tester le type action recu
        mergeMap ((action) => { // transformer l'observable
          return this.productsService.getProductsList() // appel service concerné par cette action
            .pipe(
              map((productsList: IProduct[]) => new GetAllProductsActionsSuccess(productsList)), // return new action success to send to reducer
              catchError((err) => of(new GetAllProductsActionsError(err.message))) // return action error to send to reducer
            )
        })
      )
    }
  )

  getSelectedProductsEffect:Observable<Action> = createEffect ( // creation d'un effect de type observable
    ()=>{
      return this.effectActions.pipe( // pipe sur l'action (observable)
        ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS), // tester le type action recu
        mergeMap ((action) => { // transformer l'observable
          return this.productsService.getSelectedProducts() // appel service concerné par cette action
            .pipe(
              map((productsList: IProduct[]) => new GetSelectedProductsActionsSuccess(productsList)), // return new action success to send to reducer
              catchError((err) => of(new GetSelectedProductsActionsError(err.message))) // return action error to send to reducer
            )
        })
      )
    }
  )

}

import { Action } from "@ngrx/store";
import { IProduct } from '../model/product.model';

export enum ProductsActionsTypes {
  GET_ALL_PRODUCTS = "[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get All products Error",
}

export class GetAllProductsActions implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {}

}

export class GetAllProductsActionsSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) {}
}

export class GetAllProductsActionsError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

// type de l'action
export type ProductsActions =
        GetAllProductsActions | GetAllProductsActionsSuccess | GetAllProductsActionsError ;


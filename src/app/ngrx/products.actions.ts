import { Action } from "@ngrx/store";
import { IProduct } from '../model/product.model';

export enum ProductsActionsTypes {
  /* Get All Products */
  GET_ALL_PRODUCTS = "[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get All products Error",
  /* Get Selected Products */
  GET_SELECTED_PRODUCTS = "[Products] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Products] Get Selected products Success",
  GET_SELECTED_PRODUCTS_ERROR = "[Products] Get Selected products Error",
}

/* Get Selected Products Actions -------------------------------- */
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

/* Get Selected Products Actions -------------------------------- */
export class GetSelectedProductsActions implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {}
}
export class GetSelectedProductsActionsSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) {}
}
export class GetSelectedProductsActionsError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

// type de l'action
export type ProductsActions =
        GetAllProductsActions | GetAllProductsActionsSuccess | GetAllProductsActionsError
        | GetSelectedProductsActions | GetSelectedProductsActionsSuccess | GetSelectedProductsActionsError;


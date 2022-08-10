import { IProduct } from '../model/product.model';
import { ProductsActions, ProductsActionsTypes } from './products.actions';
import { Action } from '@ngrx/store';

// enumerateur des différents status (valeurs possibles)
export enum ProductsStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial"
}

// state (structure de mon state)
export interface IProductsState {
  products :      IProduct[],
  errorMessage :  string,
  dataState :     ProductsStateEnum
}

// initialiser le state (1er etat qu'on va demarrer)
const initState : IProductsState = {
  products : [],
  errorMessage : "",
  dataState :  ProductsStateEnum.INITIAL
}

// reducer => c'est une fonction prend 2 params (state, actions) return un state
export function productsReducer(state:IProductsState = initState , action:Action) : IProductsState {
  console.log('action---:',action);
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS :
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS :
      return {...state, dataState:ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR :
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS :
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS :
      return {...state, dataState:ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR :
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
    default : return {...state}
  }
}

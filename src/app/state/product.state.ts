export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

// <T> type génériqaue qui s'adapte au produit et n'impporte quel type
export interface IAppDataState<T> {
  dataState: DataStateEnum,
  data?: T,
  errorMessage?: string
}

export enum ProductsActionTypes {
  GET_ALL_PRODUCTS = "[Products] Get All products",
  GET_SELECTED_PRODUCTS = "[Products] Get Selected products",
  GET_AVAILABLE_PRODUCTS = "[Products] Get Available products",
  SEARCH_PRODUCTS = "[Products] Search products",
  NEW_PRODUCTS = "[Products] New products",
  SELECT_PRODUCT = "[Products] Select product",
  DELETE_PRODUCT = "[Products] Delete product",
  EDIT_PRODUCT = "[Products] Edit product",
  PRODUCT_ADDED = "[Products] product added",
  PRODUCT_UPDATED = "[Products] product updated",
}
export interface IActionEvent {
  type : ProductsActionTypes,
  payload? : any
}

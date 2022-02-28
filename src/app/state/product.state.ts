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

declare interface RootAction<T = {}> {
  type: string;
  payload?: T;
}

declare interface RootState {}

declare module "redux-actions";

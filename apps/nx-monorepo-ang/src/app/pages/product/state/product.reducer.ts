import { createReducer, on } from "@ngrx/store";
import * as fromProductAction from "./product.action";

export const featureKey = "productStore";
export interface ProductState {
  title: string;
  description: string;
}

const initialState: ProductState = {
  title: "",
  description: "",
};

export const reducer = createReducer(
  initialState,
  on(fromProductAction.title, (): ProductState => initialState),
  on(
    fromProductAction.titleUpdate,
    (state, action): ProductState => ({
      ...state,
      title: action.title,
    })
  )
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProductReducer from './product.reducer';

const selectProductState = createFeatureSelector<fromProductReducer.ProductState>(fromProductReducer.featureKey);
export const title = createSelector(selectProductState, (state) => state.title);
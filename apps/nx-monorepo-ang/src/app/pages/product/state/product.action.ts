import { createAction, props } from "@ngrx/store";

export const title = createAction('[OMNI-discovery] change title', props<{title: string}>());
export const titleUpdate = createAction('[OMNI-discovery] method get api title success', props<{title: string}>());
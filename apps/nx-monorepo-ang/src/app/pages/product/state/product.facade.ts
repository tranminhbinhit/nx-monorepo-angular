import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromProductSelector from "./product.selector";
import * as fromProductActions from './product.action';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductFacade {
  constructor(private store: Store) {}
  title$: Observable<string | null> = this.store.select(
    fromProductSelector.title
  );
  setTitle(title: string): void {
    this.store.dispatch(fromProductActions.titleUpdate({ title }));
  }
}

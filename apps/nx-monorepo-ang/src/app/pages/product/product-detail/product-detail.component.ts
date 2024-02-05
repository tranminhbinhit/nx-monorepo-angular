import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "../../../services/user/user.service";
import { UserModel } from "../../../models/user/user.model";
import { Subject, takeUntil } from "rxjs";
import { ProductFacade } from "../state/product.facade";

@Component({
  selector: "nx-monorepo-ang-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
  // providers: [ProductFacade]
})
export class ProductDetailComponent implements OnInit {
  userInfo: UserModel = {};
  private readonly unsubscribe = new Subject<void>();
  constructor(
    public readonly productFacade: ProductFacade
  ) {}
  ngOnInit(): void {
  }

  onChangeTitleFromStore(){
    this.productFacade.setTitle('test' + new Date().toISOString());
  }
}

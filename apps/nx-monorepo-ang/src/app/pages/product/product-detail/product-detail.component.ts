import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "../../../services/user/user.service";
import { UserModel } from "../../../models/user/user.model";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "nx-monorepo-ang-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
  //providers: [HomeService]
})
export class ProductDetailComponent implements OnInit {
  userInfo: UserModel = {};
  private readonly unsubscribe = new Subject<void>();
  constructor(
  ) {}
  ngOnInit(): void {
  }
}

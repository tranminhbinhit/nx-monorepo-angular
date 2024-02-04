import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "../../../services/user/user.service";
import { UserModel } from "../../../models/user/user.model";
import { Subject, takeUntil } from "rxjs";
import { HomeService } from "../../../services/webiste/home.service";

@Component({
  selector: "nx-monorepo-ang-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
  //providers: [HomeService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  userInfo: UserModel = {};
  private readonly unsubscribe = new Subject<void>();
  constructor(
    private userService: UserService,
    private homeService: HomeService
  ) {}
  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    // this.userService
    //   .getUserInfo()
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe((m) => {
    //     this.userInfo = m?.result;
    //     console.log(this.userInfo);
    //   });
    this.homeService.userInfo.subscribe(m=> {
      this.userInfo = m;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

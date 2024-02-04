import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WebUserService } from "../../../services/webiste/web.user.service";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { UserModel } from "../../../models/user/user.model";

@Component({
  selector: "nx-monorepo-ang-user-info",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-info.component.html",
  styleUrl: "./user-info.component.scss",
})
export class UserInfoComponent implements OnInit, OnDestroy{
  private readonly unsubscribe = new Subject<void>();
  userInfo: UserModel = {};
  constructor(private webUserService: WebUserService){ 

  }

  ngOnInit(): void {
    this.onInitUser();
  }

  onInitUser() {
    this.webUserService.userInfo.pipe(takeUntil(this.unsubscribe)).subscribe(m=> {
      this.userInfo = m;
    })
  }

  ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }
}

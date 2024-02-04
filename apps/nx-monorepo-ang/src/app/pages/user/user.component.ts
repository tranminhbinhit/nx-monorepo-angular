import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserService } from "../../services/user/user.service";
import { WebUserService } from "../../services/webiste/web.user.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "nx-monorepo-ang-user",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
  providers: [UserService]
})
export class UserComponent implements OnInit, OnDestroy{
  private readonly unsubscribe = new Subject<void>();
  constructor(private userService: UserService, private webUserService: WebUserService){

  }

  ngOnInit(): void {
      this.onLoadUser();
  }

  onLoadUser() {
    this.userService.getUserInfo().pipe(takeUntil(this.unsubscribe)).subscribe(m=> {
      this.webUserService.setUserInfo(m?.result);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

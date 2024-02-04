import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { MenuComponent } from "./layout/menu/menu.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from "./services/webiste/home.service";
import { UserService } from "./services/user/user.service";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent, HttpClientModule],
  selector: "nx-monorepo-ang-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  //providers: [HomeService]
})
export class AppComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private userService: UserService
  ) {}
  title = "nx-monorepo-ang";

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((m) => {
      this.homeService.setUserInfo(m.result);
    });
  }
}

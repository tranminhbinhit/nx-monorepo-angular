import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { MenuComponent } from "./layout/menu/menu.component";
import { HttpClientModule } from "@angular/common/http";

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
  ) {}
  title = "nx-monorepo-ang";
    ngOnInit(): void {
        
    }
}

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductFacade } from "./state/product.facade";

@Component({
  selector: "nx-monorepo-ang-product",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
})
export class ProductComponent implements OnInit {
  constructor(public readonly productFacade: ProductFacade) {}

  ngOnInit(): void {
    
  }
}

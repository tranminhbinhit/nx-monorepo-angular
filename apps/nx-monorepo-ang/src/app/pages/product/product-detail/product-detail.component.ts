import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'nx-monorepo-ang-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
      this.getUserInfo();
  }

  getUserInfo(){
    var test = this.userService.getUserInfo().subscribe(m=> {
      console.log(m);
    });
    
  }
}

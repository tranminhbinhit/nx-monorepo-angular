import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';

const route: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'info',
        component: UserInfoComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UserModule { }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _userInfo$: BehaviorSubject<UserModel> = new BehaviorSubject({});

  userInfo = this._userInfo$.asObservable();
  // get userInfo() {
  //   return this._userInfo$.asObservable();
  // }

  setUserInfo(userInfo: any) {
    this._userInfo$.next(userInfo);
  }
}

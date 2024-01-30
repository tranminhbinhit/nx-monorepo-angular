import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../../models/user/user.model';
import { RequestNodeService } from '../base/request-node.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestNodeService: RequestNodeService) { }

  public getUserInfo() : Observable<UserModel[]> {
    return this.requestNodeService.get<UserModel[]>('api/get-user');
  }
}

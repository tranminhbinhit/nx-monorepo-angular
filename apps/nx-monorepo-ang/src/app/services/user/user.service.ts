import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../../models/user/user.model';
import { RequestNodeService } from '../base/request-node.service';
import { NodeResponseModel } from '../../models/base/nodeResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestNodeService: RequestNodeService) { }

  public getUserInfo() : Observable<NodeResponseModel> {
    return this.requestNodeService.get<NodeResponseModel>('api/get-user');
  }
}

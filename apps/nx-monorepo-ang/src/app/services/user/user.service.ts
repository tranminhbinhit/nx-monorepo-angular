import { Injectable } from '@angular/core';
import { Observable, of, takeUntil } from 'rxjs';
import { RequestNodeService } from '../request-node.service';
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

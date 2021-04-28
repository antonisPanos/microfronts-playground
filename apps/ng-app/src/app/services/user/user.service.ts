import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MaestroWindow, UserDetails} from '../../../../../../libs/models/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: BehaviorSubject<UserDetails>;

  constructor() {
    this.user$ = (window as MaestroWindow).maestro?.user$;
  }
}

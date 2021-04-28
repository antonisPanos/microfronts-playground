import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {
  name: string;
  sub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.sub = this.userService.user$.subscribe(({name}) => {
      this.name = name;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateUserName = (name: string) => this.userService.user$.next({name});
}

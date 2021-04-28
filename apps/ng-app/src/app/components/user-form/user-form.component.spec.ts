import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserFormComponent} from './user-form.component';
import {UserService} from '../../services/user/user.service';
import {BehaviorSubject} from 'rxjs';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      providers: [{provide: UserService, useValue: {user$: new BehaviorSubject({name: 'foo'})}}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

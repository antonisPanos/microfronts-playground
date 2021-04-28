import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteInfoComponent} from './components/route-info/route-info.component';
import {UserFormComponent} from './components/user-form/user-form.component';

const routes: Routes = [
  {path: 'ng', redirectTo: '/'},
  {path: 'ng-route-info', component: RouteInfoComponent},
  {path: 'ng-user-form', component: UserFormComponent},
  {path: 'ng-subdomain/ng-route-info', component: RouteInfoComponent},
  {path: '**', component: RouteInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

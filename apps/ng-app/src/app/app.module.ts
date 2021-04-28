import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteInfoComponent} from './components/route-info/route-info.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {appContainer} from '../main';
import {createCustomElement} from '@angular/elements';

const local = false;

@NgModule({
  declarations: [AppComponent, RouteInfoComponent, UserFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  entryComponents: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector, private router: Router) {
    const micro = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define(appContainer, micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    // https://stackoverflow.com/questions/60548137/angular-router-ignores-url-when-using-custom-ngdobootstrap-and-createcustomelem
    this.router.initialNavigation();
  }
}

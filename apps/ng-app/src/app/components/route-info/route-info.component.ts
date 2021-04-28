import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html'
})
export class RouteInfoComponent implements OnInit {
  urlSegment: UrlSegment[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe(urlSegment => {
      this.urlSegment = urlSegment;
    });
  }
}

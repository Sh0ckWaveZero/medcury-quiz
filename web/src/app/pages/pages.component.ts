import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pages',
  template: `
  <app-slidemenu>
    <router-outlet></router-outlet>
  </app-slidemenu>`,
  styleUrls: ['./pages.component.scss'],

})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

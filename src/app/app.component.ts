
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab
import { MenuItem } from 'primeng/api';              // api

import { TabViewModule } from 'primeng/tabview';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(http: HttpClient) {
    console.log(http);
}
}

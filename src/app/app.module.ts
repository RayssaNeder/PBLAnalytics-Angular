import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

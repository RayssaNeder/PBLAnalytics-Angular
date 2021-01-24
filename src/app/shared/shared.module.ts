import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';

import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent, DropdownModule,  FormsModule]
})
export class SharedModule { }

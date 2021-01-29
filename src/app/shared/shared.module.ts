import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ListboxModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,

  ],
  declarations: [MessageComponent],
  exports: [MessageComponent, ListboxModule, DropdownModule,  FormsModule,
    InputTextModule, TableModule, TooltipModule, SelectButtonModule]
})
export class SharedModule { }

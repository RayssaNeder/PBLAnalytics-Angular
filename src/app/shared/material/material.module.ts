import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatButtonModule} from '@angular/material/button';
//import {MatCardModule} from '@angular/material/card';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatSelectModule} from '@angular/material/select';
//import {MatTableModule} from '@angular/material/table';
//import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatInputModule } from '@angular/material/input';
import { SelectButtonModule } from 'primeng/selectbutton'

import {AutoCompleteModule} from 'primeng/autocomplete';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    SelectButtonModule,
    AutoCompleteModule

  ]
})
export class MaterialModule { }

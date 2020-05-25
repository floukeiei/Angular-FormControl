import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { PanelModule } from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';

import {InputTextModule} from 'primeng/inputtext';
import { ResultListComponent } from './result-list/result-list.component';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [SearchComponent, ResultListComponent],
  imports: [
    CommonModule,
    PanelModule,
    DropdownModule,
    FormsModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }

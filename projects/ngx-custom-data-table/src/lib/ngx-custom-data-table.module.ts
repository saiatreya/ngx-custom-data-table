import { NgModule } from '@angular/core';
import { NgxCustomDataTableComponent } from './ngx-custom-data-table.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NgxCustomDataTableComponent],
  imports: [
    RadioButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  exports: [NgxCustomDataTableComponent]
})
export class NgxCustomDataTableModule { }

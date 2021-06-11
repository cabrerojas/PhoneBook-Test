import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  exports: [
    ButtonModule,
    DropdownModule,
    InputTextModule,
    RippleModule,
    TableModule,
    MultiSelectModule
  ]
})
export class PrimeNgModule { }

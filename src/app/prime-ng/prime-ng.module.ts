import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  exports: [
    TableModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }

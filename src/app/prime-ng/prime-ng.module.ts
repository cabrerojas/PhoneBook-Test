import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  exports: [
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ]
})
export class PrimeNgModule { }

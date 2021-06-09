import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
import { IonicModule } from '@ionic/angular';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    IonicModule,
    PrimeNgModule
  ]
})
export class UsersModule { }

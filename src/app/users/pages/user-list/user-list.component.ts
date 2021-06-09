import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Persona } from '../../interfaces/users.interfaces';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  users: Persona[] = [];

  constructor(private userService:UserService,
              private modalCtlr: ModalController) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      resp => {

        this.users = resp.filter(user => user.activo == 1);
      
      }
    )
  }


  async verDetalle( user: Persona) {
    const modal = await this.modalCtlr.create({
      component: UserDetailComponent,
      componentProps: {
        user
      }
    });

    modal.present();

  }


}

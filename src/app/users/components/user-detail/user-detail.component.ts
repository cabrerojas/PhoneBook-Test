import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Persona } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  @Input () user: Persona;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}

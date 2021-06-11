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
    
   console.log(this.validRut(this.user.rut)
   );
   
    

  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  userRutInvalid(): boolean{
    return !this.validRut(this.user.rut)
  }

  userPhoneInvalid(): boolean{
    if(this.user.telefono.toString().length < 11) {
      return true;
    } else {
      return false;
    }

  }


  validRut(rutCompleto) {
        if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (this.dv(rut) == digv);
    }

  dv(T) {
        var M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }


}

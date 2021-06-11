import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Persona, Region, Comuna } from '../../interfaces/users.interfaces';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  users: Persona[] = [];
  regions: Region[] = [];
  comunas: Comuna[] = [];

  filterForm: FormGroup = this.fb.group({
    regiones  : ['', Validators.required ],
    comunas    : ['', Validators.required ]
  });


  constructor(private fb: FormBuilder,
              private userService:UserService,
              private modalCtlr: ModalController) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      users => { this.users = users }
    )

    this.userService.getRegions().subscribe(
      regions => { this.regions = regions }
    )

    //Detecata cambio en el select de regiones para filtar
    this.filterForm.get('regiones')?.valueChanges
          .pipe(
            tap( ( _ ) => {
              this.filterForm.get('comunas')?.reset('');
            } ),
          )
          .subscribe( id => {

            if(id){

              this.comunas = this.regions.filter(region => region.id == id).map( region => region.comunas )[0];
              this.userService.getUsers().subscribe(
                users => { this.users = users.filter(users => this.comunas.map(comuna => comuna.id ).includes(users.direccion.comuna.id)) }
              )
            }
            else{

              this.comunas = []

              this.userService.getUsers().subscribe(
                users => { this.users = users }
              )

            }
            


            //this.comunas = this.regions.filter(region => region.id == id).comunas;
            
            
          });


    //Detecata cambio en el select de comunas para filtar
    this.filterForm.get('comunas')?.valueChanges
    .subscribe( id => {

      if(id){
        
        this.userService.getUsers().subscribe(
          users => { this.users = users.filter(users => users.direccion.comuna.id == id) }
        )
       
      }else{

        this.userService.getUsers().subscribe(
          users => { this.users = users.filter(users => this.comunas.map(comuna => comuna.id ).includes(users.direccion.comuna.id)) }
        )

      }


      //this.comunas = this.regions.filter(region => region.id == id).comunas;
      
      
    });

    


  }


  async details( user: Persona) {
    const modal = await this.modalCtlr.create({
      component: UserDetailComponent,
      componentProps: {
        user
      }
    });

    modal.present();

  }


}

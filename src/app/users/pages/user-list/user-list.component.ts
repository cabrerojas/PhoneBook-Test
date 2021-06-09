import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Persona } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  users: Persona[] = [];
  cols: any[];

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      resp => {
        this.users = resp;
        console.log(this.users);
        
      }
    )

    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'rut', header: 'Rut' }
    ];

  }

}

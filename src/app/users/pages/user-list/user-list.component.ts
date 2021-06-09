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

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      resp => {
        this.users = resp;

      }
    )

  }

}

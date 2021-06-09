import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<Persona[]>{
    return this.http.get<Persona[]>('https://private-anon-eb1abdb24d-testphonebook.apiary-mock.com/persona');
  }



}

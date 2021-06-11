import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, Region, Comuna } from '../interfaces/users.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlBase = environment.UrlBase;
  private comunas: Comuna[];

  constructor(private http: HttpClient) { }


  getUsers(): Observable<Persona[]>{

    const url = `${this.urlBase}/persona`;

    return this.http.get<Persona[]>(url);
  }

  getRegions(): Observable<Region[]>{

    const url = `${this.urlBase}/region`;

    return this.http.get<Region[]>(url);
  }


  



}

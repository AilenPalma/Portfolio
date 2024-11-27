import { inject,Injectable } from '@angular/core';
import { Contacto } from '../interface/contacto.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  http = inject(HttpClient)
  urlBase: string = 'http://localhost:3000/nombre'

  getContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.urlBase)
  }

}

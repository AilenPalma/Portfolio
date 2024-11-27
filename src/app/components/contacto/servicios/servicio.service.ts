import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../interface/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  http = inject(HttpClient)
  urlBase: string = 'http://localhost:3000/nombre'

  getContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.urlBase)
  }
}

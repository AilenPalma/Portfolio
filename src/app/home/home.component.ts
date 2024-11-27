import { Component } from '@angular/core';
//import { ContactoComponent } from '../contacto/contacto.component';

import { NavComponent } from './navbar/nav/nav.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent],          //ContactoComponent
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
 yo:string='Me llamo Ailen, soy una apasionada por la enseñanza, la tecnología y el diseño. Desde pequeña descubrí mi amor por los desafíos y las ideas poco convencionales, que siempre me han llevado a explorar nuevos caminos. Mi vida profesional refleja un equilibrio entre mi vocación por enseñar y mi constante curiosidad por la programación y el diseño.'

}

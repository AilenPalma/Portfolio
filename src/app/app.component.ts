import { Component } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
//import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,FormsModule,],// ContactoComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';



}

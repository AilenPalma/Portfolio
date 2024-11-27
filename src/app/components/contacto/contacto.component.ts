import { Component, EventEmitter, inject, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { Contacto } from './interface/contacto.interface';
import { HttpClient } from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';
import { Router } from '@angular/router';
import { ServicioService } from './servicios/servicio.service';
import { ContactService } from './servicios/contact.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contacto',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,ContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})

 export class ContactoComponent implements OnInit{


  // router = inject(Router);

  // lista:Contacto[]=[];

  // contactService = inject(this.contactService);

  ngOnInit(): void {

    this.contactService.getContacto().subscribe(
      {
        next: (contacts: Contacto[]) => {
          this.lista = contacts
        },
        error: (err: Error) => {
          console.log(err.message)
        }
      }
    )
  }

  contactService = inject(ContactService);
  lista: Contacto[]=[];
}
  // @Output()
  // emitirContactos = new EventEmitter<Contacto>();

  // fb = inject(FormBuilder);

  // formContacto = this.fb.nonNullable.group({
  //   nombre: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(60)]],
  //   email : [0, [Validators.required, Validators.min(100)]],
  //   mensaje: [0, [Validators.required]]
  // })

  //Servicio products
  // contactService = inject(this.ContactService)

  // @if(this.formContact.invalid) rerturn

  // const listadoContacto=this.formContacto.getRawValue();
  // this.emitirContacto.emitir(contacto);

  // this.altaBd(Contacto);

  // this.formContact.reset({
  //   nombre: '',
  //   email:'',
  //   mensaje: ''
  // })


 //   this.lista=[...this.lista,contacts]
//     // const contactoCopiado={...contacto}
//     // this.lista.push(structuredClone(contacto))
//   }

//   // {
//   //   nombre:'',
//   //   email:'',
//   //   mensaje:''
//   // }

//   // fb = inject(FormBuilder)
//   // contactoService= inject(ContactoService)

//   // formulario =

//   // @output(){
//   //   console.log()
//   // }
// // enviar(){
// //   console.log(this.contacto);
// // }

// //   userInput: string = "";

// //   onInputChange(event: any) {
// //     if (event.target.value.length > 4) {
// //       this.userInput = event.target.value;
// //     }
// //   }
//

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaComponent } from '../../../pages/meta-page/meta.component';


@Component({
  selector: 'app-nav',
  imports: [CommonModule,RouterLink,MetaComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  public active : boolean = false

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

}



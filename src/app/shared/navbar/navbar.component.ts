import { Component, OnInit,Renderer2 } from '@angular/core';
import { SkillsComponent } from '../../features/components/skills/skills.component';
import { AboutComponent } from '../../features/components/about/about.component';
import { Router, RouterModule,NavigationEnd } from '@angular/router';
import { HostListener } from '@angular/core';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  isNavbarHidden= true; // Estado inicial: la barra está oculta.

  constructor(private renderer: Renderer2) {}

  // Alternar visibilidad de la barra lateral
  toggleNavbar(): void {

    this.isNavbarHidden = !this.isNavbarHidden;

  }

  // Cerrar la barra lateral al hacer clic fuera de ella
  closeNavbarOnOutsideClick(event: Event): void {
    const sidebar = this.renderer.selectRootElement('#sidebar', true);
    const toggleButton = this.renderer.selectRootElement('.menu-toggle', true);

    if (
      !sidebar.contains(event.target as Node) &&
      !toggleButton.contains(event.target as Node)
    ) {
      this.isNavbarHidden = true;
    }
  }
}
//
// @HostListener('window:scroll', []);
// onWindowScroll()!: void {
//   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//
//   if (currentScrollTop > this.lastScrollTop) {
//     // Ocultar la navbar al hacer scroll hacia abajo
//     this.isNavbarHidden = true;
//   } else {
//     // Mostrar la navbar al hacer scroll hacia arriba
//     this.isNavbarHidden = false;
//   }
//
//   this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Evitar valores negativos
// }
//
//

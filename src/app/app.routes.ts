import { Routes } from '@angular/router';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { MetaComponent } from './pages/meta-page/meta.component';
import { MotivacionComponent } from './pages/motivacion-page/motivacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MasDeMiComponent } from './components/mas-de-mi/mas-de-mi.component';

export const routes: Routes = [

  {
    path:'aptitudes:/idAptitudes',
    component: AptitudesComponent

  },

  {
    path:'motivacion:/idMotivacion',
    component: MotivacionComponent

  },

  {
    path:'proyectos:/idProyectos',
    component: ProyectosComponent

  },
  {
    path:'meta:/idMeta',
    component: MetaComponent

  },
  {
    path:'mas-de-mi:/idMasdemi',
    component: MasDeMiComponent

  },
  {
    path:'contacto:/idContacto',
    component: ContactoComponent

  }
];

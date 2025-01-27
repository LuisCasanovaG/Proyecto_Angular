import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { PalindromoComponent } from './palindromo/palindromo.component';
import { MaterialTestComponent } from './material-test/material-test.component';

export const routes: Routes = [
    /*{
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    },
   {
    path:'',
    component: HelloComponent
   },
   {
    path:'world',
    component: WorldComponent
   },
   {
    path:'palindromo',
    component: PalindromoComponent
   },
   {
    path:'',
    component: MaterialTestComponent
   },*/
   {
    path: '',
    loadComponent: () => import('./core/components/home/home.component').then(m => m.HomeComponent), 
    },
   {
    path:'pipes',
    loadComponent:()=>import('./core/components/ejemplos-pipes/ejemplos-pipes.component').then(m => m.EjemplosPipesComponent)
    },
    {
     path:'observers',
     loadComponent:()=>import('./shared/components/observables/observables.component').then(m => m.ObservablesComponent)
     },
     {
      path:'personajes',
      loadComponent:()=>import('./core/components/personajes/personajes.component').then(m => m.PersonajesComponent)
      }
];

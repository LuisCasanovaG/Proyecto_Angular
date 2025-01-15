import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { PalindromoComponent } from './palindromo/palindromo.component';

export const routes: Routes = [
   /* {
        path: '',
        loadComponent: () => import('./hello/hello.component').then(m => m.HelloComponent)
    }*/
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
   }
];

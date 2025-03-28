import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { Practice1Component } from './practices/practice1/practice1.component';
import { Practice2Component } from './practices/practice2/practice2.component';
import { Practice3Component } from './practices/practice3/practice3.component';
import { Practice4Component } from './practices/practice4/practice4.component';
import { Practice5Component } from './practices/practice5/practice5.component';
import { Practice6Component } from './practices/practice6/practice6.component';
import { Practice7Component } from './practices/practice7/practice7.component';
import { Practice8Component } from './practices/practice8/practice8.component';
import { Practice9Component } from './practices/practice9/practice9.component';
import { Practice10Component } from './practices/practice10/practice10.component';
import { Practice11Component } from './practices/practice11/practice11.component';
import { Practice12Component } from './practices/practice12/practice12.component';
import { Practice12HomeComponent } from './practices/practice12-home/practice12-home.component';
import { Practice12UserComponent } from './practices/practice12-user/practice12-user.component';


import { Tarea1Component } from './tareas/tarea1/tarea1.component';
import { Tarea2Component } from './tareas/tarea2/tarea2.component';
import { Tarea3Component } from './tareas/tarea3/tarea3.component';
import { Tarea4Component } from './tareas/tarea4/tarea4.component';
import { Tarea5Component } from './tareas/tarea5/tarea5.component';
import { Tarea6Component } from './tareas/tarea6/tarea6.component';
import { Tarea7Component } from './tareas/tarea7/tarea7.component';
import { Tarea8Component } from './tareas/tarea8/tarea8.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent},
    { path: 'practice1', component: Practice1Component },
    { path: 'practice2', component: Practice2Component },
    { path: 'practice3', component: Practice3Component },
    { path: 'practice4', component: Practice4Component },
    { path: 'practice5', component: Practice5Component },
    { path: 'practice6', component: Practice6Component },
    { path: 'practice7', component: Practice7Component },
    { path: 'practice8', component: Practice8Component },
    { path: 'practice9', component: Practice9Component },
    { path: 'practice10', component: Practice10Component },
    { path: 'practice11', component: Practice11Component },
    { path: 'practice12', component: Practice12Component, 
      children:[
        { path: 'home', component: Practice12HomeComponent },
        { path: 'user', component: Practice12UserComponent }, 
      ]
    },
    { path: 'tarea1', component: Tarea1Component },
    { path: 'tarea2', component: Tarea2Component },
    { path: 'tarea3', component: Tarea3Component },
    { path: 'tarea4', component: Tarea4Component },
    { path: 'tarea5', component: Tarea5Component },
    { path: 'tarea6', component: Tarea6Component },
    { path: 'tarea7', component: Tarea7Component },
    { path: 'tarea8', component: Tarea8Component },
];

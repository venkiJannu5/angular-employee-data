import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeRouterModule } from './employees/employees.router.module';

//This is my case 
const appRoutes: Routes = [
   /* {
        path: '',
        component: HomeComponent
    },*/
    
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),EmployeeRouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
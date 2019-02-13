import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeeCustomComponent } from './employee-custom/employee-custom.component';
const EmployeeRoutes: Routes = [
  { path: '',
    redirectTo: '/employeelist',
    pathMatch: 'full'
  },
  { path: 'employeelist', component: EmployeeDetailsComponent },
  { path: 'empsalary',component: EmployeeSalaryComponent },
  { path: 'emp-detail', component: EmployeeCustomComponent }
 

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      EmployeeRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class EmployeeRouterModule { }
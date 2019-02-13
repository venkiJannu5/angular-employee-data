import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MaterialModule } from '../material.module';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeeCustomComponent } from './employee-custom/employee-custom.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [EmployeeDetailsComponent, EmployeeSalaryComponent, EmployeeCustomComponent]
})
export class EmployeesModule { }

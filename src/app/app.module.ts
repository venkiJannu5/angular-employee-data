import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalServiceService } from './global-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { EmployeeSalaryComponent } from './employees/employee-salary/employee-salary.component';
import { EmployeeCustomComponent } from './employees/employee-custom/employee-custom.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeSalaryComponent,
    EmployeeCustomComponent
  ],
  imports: [
  	RouterModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule
    
  ],
  entryComponents:[
    EmployeeDetailsComponent,
    EmployeeSalaryComponent,
    EmployeeCustomComponent
  ],
  providers: [GlobalServiceService,
  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

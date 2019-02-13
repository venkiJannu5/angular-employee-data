import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GlobalServiceService } from '../../global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {
	displayedColumns= ['id','employee._id','salary'];
  	dataSource= new MatTableDataSource;
  	data: any;

  constructor(
  	public globalService: GlobalServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  	 this.empSalary()
  }
  empSalary(){
   var params = { service: 'displaysal' }
   this.globalService.get(params)
    .subscribe(data => {
     this.data = data;
     this.dataSource.data = data;     
    });
  }
  menu(val) {
    if (val  == 'list') {
      this.router.navigate(['/employeelist']);
    }
    else if(val == 'sal'){
      this.router.navigate(['/empsalary']);
    }
    else
      this.router.navigate(['/emp-detail']);
  } 

}

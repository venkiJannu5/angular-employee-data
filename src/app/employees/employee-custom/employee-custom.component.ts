import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GlobalServiceService } from '../../global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-custom',
  templateUrl: './employee-custom.component.html',
  styleUrls: ['./employee-custom.component.css']
})
export class EmployeeCustomComponent implements OnInit {
	displayedColumns= ['employee._id','fullName','salary'];
  	dataSource= new MatTableDataSource;
  	data: any;
  constructor(
  	public globalService: GlobalServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  	this.empData();
  }
  empData(){
   var params = { service: 'displaysal' }
   this.globalService.get(params)
    .subscribe(data => {
     this.data = data;
     console.log(data);
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

import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GlobalServiceService } from '../../global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  displayedColumns= ['id','firstName','lastName'];
  dataSource= new MatTableDataSource;
  data: any;
  constructor(
    public globalService: GlobalServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  	this.emplyeDetails();
  }

  emplyeDetails(){
   var params = { service: 'displayemp' }
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

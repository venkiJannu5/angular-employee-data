import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { GlobalServiceService } from './global-service.service';
//@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	

  title = 'demo-posts';
  someMethod() {
    //this.trigger.openMenu();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  public vallue:any;
  public icons:boolean=false;
  constructor(private router: Router, private service: AppService) { }

  ngOnInit(): void {
    this.logOut()
    
  }
  
  logOut(){
    swal({
      title: "Hey!!",
      text: "Do you want to logout really??",//"User with "+this.loginForm.get("userName")?.value,
      icon: "warning",
      buttons: ["No", "Yes"]
      
      
    });
    this.router.navigate(['/']);
    // clears local storage
    localStorage.clear();
    // makes service data empty 
    this.service.tempData=[];
    // clears console data
    console.clear();
    this.service.icon.next(this.icons=false);
  }

}

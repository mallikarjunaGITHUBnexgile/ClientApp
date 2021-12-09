import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router, private service: AppService) { }

  ngOnInit(): void {
    this.logOut()
    
  }
  
  logOut(){
    this.router.navigate(['/']);
    // clears local storage
    localStorage.clear();
    // makes service data empty 
    this.service.tempData=[];
    // clears console data
    console.clear();
  }

}

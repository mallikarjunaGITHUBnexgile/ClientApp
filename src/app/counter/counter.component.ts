import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private router: Router, private service: AppService, private _location: Location) { }
  public currentCount = 0;
  public firstName:any;
  public lastName:any;
  public mailId:any;
  public phoneNumber:any;
  public profileLetter:any;

  public incrementCounter() {
    this.currentCount++;
  }
  ngOnInit(): void{
  var x = JSON.parse(localStorage.getItem('signindata') || '{}');
  console.log(x);
  this.firstName=x.firstName;
  this.lastName=x.lastName;
  this.phoneNumber=x.phoneNumber;
  this.mailId=x.mailId;
  this.profileLetter=localStorage.getItem("ProfileLetter");
  this.service.icon.next(true);
}
back(){
  this._location.back();
}

}


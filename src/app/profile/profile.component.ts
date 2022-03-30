import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router, private service: AppService, private _location: Location) { }
  public currentCount = 0;
  public profileLetter:any;
  public firstName:any;
  public lastName:any;
  public mailId:any;
  public phoneNumber:any;
  public role:any;
  public manager:any;



  // public firstName="Hello";
  // public lastName="Hell";
  // public phoneNumber=7895641230;
  // public mailId="hello@hel.com";
  // public role=0;
  // public password="Hh@1234*";
  // public confirmPassword="Hh@1234*";
  public name="mailId";

  public incrementCounter() {
    this.currentCount++;
  }
  ngOnInit(): void{
  var x = JSON.parse(this.service.loginUserData[0]/*localStorage.getItem('signindata')*/ || '{}');
  console.log(x.phoneNumber+" role");
  this.firstName=x.firstName;
  this.lastName=x.lastName;
  this.phoneNumber=x.phoneNumber;
  this.mailId=x.mailId;
  this.role=x.role;
  if(x.manager!==""){
    this.manager="Your Manager is "+x.manager;
    //console.log("manager"+this.manager)
  }else{ 
    this.manager="You are a Manager";
    //console.log("manager"+this.manager)
  }
  console.log("manager"+this.manager)
  this.profileLetter=localStorage.getItem("ProfileLetter");
  this.service.icon.next(true);
}
back(){
  this._location.back();
}
editProfile(){
  this.router.navigate(['/editProfile']);
}

}


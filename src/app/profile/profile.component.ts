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
  public firstName:any;
  public lastName:any;
  public mailId:any;
  public phoneNumber:any;
  public profileLetter:any;
  public role:any;

  public incrementCounter() {
    this.currentCount++;
  }
  ngOnInit(): void{
  var x = JSON.parse(localStorage.getItem('signindata') || '{}');
  console.log(x.role);
  this.firstName=x.firstName;
  this.lastName=x.lastName;
  this.phoneNumber=x.phoneNumber;
  this.mailId=x.mailId;
  this.role=x.role;
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


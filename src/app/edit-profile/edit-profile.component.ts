import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit,SignUpComponent {
  
  constructor(public formBuilder: FormBuilder,public router: Router, public service: AppService,public datepipe: DatePipe) {
    
  }
  public name="mailId";
  signUp(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    throw new Error('Method not implemented.');
  }
  public maxDate: any;
  public latest_date: any;
  public firstName=" ";
  public lastName="";
  public phoneNumber=1234568567;
  public mailId= "hello@hel.com";
  public role= 2;
  public password= "Hh@1234*";
  public confirmPassword="Hh@1234*";
  public signUpForm: any;
  public passwordValidator: any;
  public icons: boolean = false;
  public showPassword: boolean = false;
  public showConfPassword: boolean = false;
  

  ngOnInit(): void {
  }

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CustomValidators } from '../custom-validators';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: '[app-edit-profile]',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public router: Router, public service: AppService, public datepipe: DatePipe) {

  }
  public name = "mailId";

  public maxDate: any;
  public latest_date: any;
  public signUpForm: any;
  public passwordValidator: any;
  public icons: boolean = false;
  public showPassword: boolean | undefined;
  public showConfPassword: boolean | undefined;

  public firstName="";
  public lastName = "";
  public phoneNumber: any;
  public mailId = "hello@hel.com";
  public role = 2;
  public password = "Hh@1234*";
  public confirmPassword = "Hh@1234*";


  ngOnInit(): void {
    this.maxDate = new Date();
    this.latest_date = this.datepipe.transform(this.maxDate, 'yyyy-MM-dd');

    var x = JSON.parse(localStorage.getItem('signindata') || '{}')
    // this.firstName=x.firstName+"96";
    // console.log(x.firstName+"89");
    this.phoneNumber = x.phoneNumber;
  }

  onSubmit() {
    console.log("Update")
  }

  signUp() {
    this.signUpForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      mailId: new FormControl("", [Validators.required, Validators.pattern(new RegExp('^[a-zA-Z0-9][a-zA-Z0-9._]{1,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}$'))]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
      role: new FormControl("", [Validators.required, Validators.pattern('^[1,2]{1}$')]),
      dateOfBirth: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,}$')]),
      confirmPassword: new FormControl("", [Validators.required,]),
      addressLine1: new FormControl(""),
      addressLine2: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      country: new FormControl(""),
      zipcode: new FormControl("")
      //adress:new FormGroup("")
    }, { validator: CustomValidators("password", "confirmPassword") }
    )
  }

}

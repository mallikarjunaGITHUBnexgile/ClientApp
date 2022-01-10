import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CustomValidators } from '../custom-validators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: any;
  public passwordValidator: any;
  public icons:boolean=false;
  public showPassword! :boolean;
  public showConfPassword! : boolean;

  constructor(public formBuilder: FormBuilder,public router: Router, public service: AppService) { }

  ngOnInit(): void {
    
    this.signUp();
    
  }
  signUp() {
    this.signUpForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      mailId: new FormControl("", [Validators.required, Validators.pattern(new RegExp('^[a-zA-Z0-9][a-zA-Z0-9._]{1,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}$'))]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
      role:new FormControl("",Validators.required),
      dateOfBirth:new FormControl("",Validators.required),
      password: new FormControl("", [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,}$')]),
      confirmPassword: new FormControl("", [Validators.required,]),
      addressLine1:new FormControl(""),
      addressLine2: new FormControl(""),
      city:new FormControl(""),
      state:new FormControl(""),
      country:new FormControl(""),
      zipcode:new FormControl("")
      //adress:new FormGroup("")
    },{validator : CustomValidators("password","confirmPassword")} 
    )
  }
  onSubmit() {
    localStorage.setItem('signindata',JSON.stringify( this.signUpForm.value));
    //console.log(this.signUpForm.get("firstName")?.value);
    //console.log(this.signUpForm.get("password")?.value === this.signUpForm.get("confirmPassword")?.value);
    // this.passwordValidator =! (this.signUpForm.get("password")?.value === this.signUpForm.get("confirmPassword")?.value);
    // console.log(this.passwordValidator);
    
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      return;
    }else {
      //this.service.icon.next(this.icons=true);
      this.service.tempData.push(this.signUpForm.value)
      //console.log(this.service.tempData);
      this.router.navigate(['/login']);
    }


  }
}
export class DatepickerDisabledExample {}


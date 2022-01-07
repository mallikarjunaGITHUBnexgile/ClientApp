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

  constructor(public formBuilder: FormBuilder,public router: Router, public service: AppService) { }
  public signUpForm: any;
  public passwordValidator: any;
  public icons: boolean = false;
  public showPassword: boolean = false;
  public showConfPassword: boolean = false;
  signUp(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

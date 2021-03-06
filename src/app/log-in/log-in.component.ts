import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import swal from 'sweetalert';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public loginForm: any;
  public type = "password";
  public name: any;
  public loginObj: any[] = [];
  public flag = 0;
  public icons: boolean = false;
  public profile: any;
  public showPassword!: boolean;
  hide: any;

  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router) {

  }



  ngOnInit(): void {

    this.createForm();
    var x = localStorage.getItem('signindata');
    console.log(JSON.parse(x || '{}').firstName);
    //console.log(x)
    this.hide = "password"

    //this.type=password("")

    //this.password(this.type);


  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required,/*Validators.pattern('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$')*/]),
    })
  }



  onSubmit() {
    //this.serviceObject = Object.create(this.service)

    //console.log(this.service.tempData[0].firstName);
    //console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      //   this.service.tempData[0] = {
      //     confirmPassword: "Hello@123",
      //     firstName: "Hello",
      //     lastName: "Hel",
      //     mailId: "hello@hell.com",
      //     password: "Hello@123",
      //     phoneNumber: "7894561230",
      //   }
      for (let i = 0; i < this.service.tempData.length; i++) {
        //  console.log(this.service.tempData[i].mailId == this.loginForm.get("userName")?.value && this.service.tempData[i].password == this.loginForm.get("password")?.value && this.service.tempData.length > i);
        if (this.service.tempData[i].mailId == this.loginForm.get("userName")?.value && this.service.tempData[i].password == this.loginForm.get("password")?.value) {
          console.log(this.flag);
          this.flag++;
          //alert("Welcome " + this.service.tempData[i].firstName);
          // this.loginObj[0] = this.service.tempData[i]
          this.service.loginUserData[0] = this.service.tempData[i]
          console.log(this.loginObj);
          /* ***Changing value for enabling icons*** */
          this.service.icon.next(this.icons = true);

          //console.log(JSON.stringify(this.service.profileIcon=this.service.tempData[i].firstName.charAt[0]));
          this.router.navigate(['/mainPanel']);


        }
        // WRONG LOGIC
        // else if( i == this.service.tempData.length){
        //   swal({
        //     title: "User Not Found",
        //     //text: "User with "+this.loginForm.get("userName")?.value,
        //     icon: "error",
        //     buttons: ['Cancel', 'Ok'] ,
        //   });
        // }
      }
    }
    if (this.flag < 1) {
      swal({
        title: "Not Found",
        text: "User details Not Found, please sign up"/*"User with "+this.loginForm.get("userName")?.value*/,
        icon: "error",
        buttons: ['cancel', 'Ok'],
      });
      this.flag = 0;
    }


  }


  //    function dataObj(item: any) {
  //   if (item.mailId == this.loginForm.get("userName")?.value) {
  //     alert("Welcome " + item.firstName);
  //   }
  // }
  public password() {
    //var type:any;
    // if(data=="password"){
    //   this.type="text";
    // }
    // else{
    //   this.type="password";
    // }
    // //this.ngOnInit();
    // return this.type;

    //this.hide ? this.type="text" : this.type="password";

    if (this.hide === 'password') {
      this.hide = 'text';
      //this.show = true;
    } else {
      this.hide = 'password';
      //this.show = false;
    }
  }

}


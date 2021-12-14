import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
//import swal from 'sweetalert';
import * as _swal from 'sweetalert';
import swal from 'sweetalert';
import { Location } from '@angular/common';


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  public vallue: any;
  public icons: boolean = false;
  constructor(private router: Router, private service: AppService, private _location: Location) { }

  ngOnInit(): void {
    this.logOut()

  }

  logOut() {
    swal({
      title: "Hey!!",
      text: "Do you want to logout really??",//"User with "+this.loginForm.get("userName")?.value,
      icon: "warning",
      buttons: {

        cancel: {
          text: "Stay",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Yes, logout",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        },

      }
    })
      .then((redirectToHome) => {
        //console.log("SWAL" + redirectToHome);
        if (redirectToHome) {
          this.router.navigate(['/']);
          /* ***clears local storage*** */
          localStorage.clear();
          /* ***makes service data empty*** */
          this.service.tempData = [];
          /* ***clears console data*** */
          console.clear();
          this.service.icon.next(this.icons = false);
        }
        else{
          this._location.back();
        }
      });


    //this.router.navigate(['/']);

  }

}

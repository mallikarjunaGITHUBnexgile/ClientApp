import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  mailId: string;
  phoneNumber: string;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //name = this.service.tempData[i].firstName;
  showFiller = false;
  icons=false;
  public letter!: String;
  //@Output() LogOutBtn: any;
  public x = JSON.parse(localStorage.getItem('signindata') || '{}')

  ELEMENT_DATA: PeriodicElement[] = [
    { firstName: this.x.firstName, lastName: this.x.lastName, mailId: this.x.mailId, phoneNumber: this.x.phoneNumber }
  ];

  displayedColumns: string[] = ['firstName', 'lastName', 'mailId', 'phoneNumber'];
  dataSource = this.ELEMENT_DATA;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    var x = JSON.parse(localStorage.getItem('signindata') || '{}');
    console.log(x.firstName);
     this.letter=x.firstName;
     localStorage.setItem("ProfileLetter",this.letter.charAt(0));
     this.service.profileicon.next(this.icons=true);
    console.log(this.letter.charAt(0));
   // console.log(this.service.profileIcon=(x.firstName).charAt[0]);
    //this.service.logOutButtonFlag=true;
    //this.LogOutBtn=true;
    //this.router.navigate(['/nav-menu']);
  }


}

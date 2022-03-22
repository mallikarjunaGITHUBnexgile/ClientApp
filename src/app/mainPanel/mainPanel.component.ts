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
  selector: 'app-mainPanel',
  templateUrl: './mainPanel.component.html',
  styleUrls: ['./mainPanel.component.css']
})
export class MainPanelComponent implements OnInit {
  //name = this.service.tempData[i].firstName;
  showPassword=false;
  showFiller = false;
  icons=true;
  public firstName!: String;
  public lastName!: String;
  public width:any;
  public margin:any;
  public widthLeft:any;
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
     this.firstName=x.firstName;
    //  this.firstName=this.firstName.toUpperCase();
    //  this.lastName=(x.lastName).toUpperCase();
     //localStorage.setItem("ProfileLetter",this.firstName.charAt(0));
     this.service.profileicon.next(this.icons);
   /// console.log(this.firstName.charAt(0));
   // console.log(this.service.profileIcon=(x.firstName).charAt[0]);
    //this.service.logOutButtonFlag=true;
    //this.LogOutBtn=true;
    //this.router.navigate(['/nav-menu']);
  }

  sidebar(value: any){
    if(value){
      //this.widthLeft=2;
      this.width=85;
      //this.margin=3;
    }else{
      //this.widthLeft=15;
      this.width=80;
      this.margin=0;
      //this.ngOnInit();
    }
  }


}

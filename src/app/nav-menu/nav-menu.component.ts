import { Component, Input, OnChanges, SimpleChanges, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnChanges {
  isExpanded = false;
  //public logOutEnable: any;
  public logOutIcon: boolean = false;
  public homeIcon: boolean = false;
  public profileIcon: boolean = false;
  public profile:any;
  public letter:any;
  constructor(private service: AppService) { }
  @Input() player: AppService | undefined;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.player);
  }

  ngOnInit(): void {
    //console.log("asdf")
    //this.logOutEnable = this.serviceLogOut.logOutButtonFlag;
    this.letter="abc";
    this.service.icon.subscribe((res: any) => {
      console.log(res);
      this.homeIcon = res;
      this.logOutIcon = res;
      this.profileIcon = res;
    });
    this.service.profileicon.subscribe((res: any) => {
      this.profile=localStorage.getItem("ProfileLetter");
      //console.log("nav_ic")
      //console.log(res);
      //console.log(localStorage.getItem("ProfileLetter"));
            
    });

  }
  
  getNotification(data: any) {
    console.log("nav bar" + data);
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

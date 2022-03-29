import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnChanges {

  expand!: boolean;
  subscription!: Subscription;
  
  isExpanded = false;
  //public logOutEnable: any;
  public logOutIcon: boolean = false;
  public homeIcon: boolean = false;
  public profileIcon: boolean = false;
  public profile:any;
  public letter:any;
  //public expand=false;
  //message=this.expand;

  constructor(private service: AppService, private data: AppService) { }
  public currentItem:any;
  @Input() player: AppService | undefined;

  //@Output() showSidePanel: EventEmitter<boolean>=new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.player);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.data.sidepanelEnable.subscribe(expand => this.expand = expand)
    
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

  sidePanelShowHide() {
    this.data.changeSidepanelToggle(this.expand = !this.expand)
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

  menu(value:any){
    this.expand=!this.expand;
    console.log(this.expand+" from menu");
    //this.showSidePanel.emit(value);
    console.log(value+" From value nav cmp");  
  }
}

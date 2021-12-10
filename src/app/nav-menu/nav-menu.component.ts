import { Component, Input, OnChanges, SimpleChanges, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnChanges{
  isExpanded = false;
  public logOutEnable: any;
  public icondata:boolean=false;
  constructor(private serviceLogOut: AppService){}
  @Input() player: AppService | undefined;
  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes.player);
  }
  
  ngOnInit(): void {
    console.log("asdf")
    this.logOutEnable = this.serviceLogOut.logOutButtonFlag;
    
    
  }
  getNotification(data:any){
     console.log("nav bar"+data);
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

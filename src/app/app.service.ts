import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public tempData: any[] = [];
  public managersList: any[] = []
  //public logOutButtonFlag!: boolean;
  /* ***For Enabling Icons*** */
  public icon = new BehaviorSubject<any>(false);
  //public show = new BehaviorSubject<any>(false);
  public profileicon = new BehaviorSubject<any>(false);

  //For sidepanel toggle
  private sidepanel = new BehaviorSubject<boolean>(false);
  sidepanelEnable = this.sidepanel.asObservable();

  constructor() { }

  changeSidepanelToggle(message: boolean) {
    this.sidepanel.next(message)
  }

}

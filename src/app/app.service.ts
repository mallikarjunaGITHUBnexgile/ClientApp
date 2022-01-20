import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 public tempData: any[] = [];
 //public logOutButtonFlag!: boolean;
 /* ***For Enabling Icons*** */ 
 public icon = new BehaviorSubject<any>(false);
 //public show = new BehaviorSubject<any>(false);
 public profileicon=new BehaviorSubject<any>(false);
  constructor() { }

}

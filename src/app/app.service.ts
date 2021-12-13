import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 public tempData: any[] = [];
 //public logOutButtonFlag!: boolean;
 public icon = new BehaviorSubject<any>(false);
 public profileIcon:any="";
  constructor() { }

}

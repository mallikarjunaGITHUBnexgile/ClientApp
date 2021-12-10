import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 public tempData: any[] = [];
 public logOutButtonFlag!: boolean;
 public data = new BehaviorSubject<any>(false);
  constructor() { }
  sendicondata(){
    this.data.next(this.data);
  }
}

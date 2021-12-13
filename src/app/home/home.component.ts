import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  public icons:boolean=false;
  constructor(private router: Router, private service:AppService){}

  ngOnInIt(){
    this.service.icon.next(this.icons=false);
  }

  login(){
    this.router.navigate(['/login']);
  }

  signUp(){
    this.router.navigate(['/signUp']);
  }
}

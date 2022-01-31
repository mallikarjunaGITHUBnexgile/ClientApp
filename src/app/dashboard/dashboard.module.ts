import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
    ])
  ]
})
export class DashboardModule { }

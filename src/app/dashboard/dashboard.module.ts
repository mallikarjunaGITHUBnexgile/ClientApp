import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent1 } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    ProfileComponent1,
    AboutComponent,
    //SidePanelComponent
  ],
  imports: [
    CommonModule, DashboardRoutingModule
    // RouterModule.forRoot([
    //   { path: 'profile1', component: ProfileComponent1, pathMatch: 'full' },
    //   { path: 'about', component: AboutComponent },
    // ])
  ]
})
export class DashboardModule { }

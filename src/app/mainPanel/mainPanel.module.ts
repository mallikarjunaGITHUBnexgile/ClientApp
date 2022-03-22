import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent1 } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { mainPanelRoutingModule } from './mainPanel-routing.module';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';



@NgModule({
  declarations: [
    ProfileComponent1,
    AboutComponent,
    //LeftpanelComponent,
    //RightpanelComponent,
    //SidePanelComponent
  ],
  imports: [
    CommonModule, mainPanelRoutingModule
    // RouterModule.forRoot([
    //   { path: 'profile1', component: ProfileComponent1, pathMatch: 'full' },
    //   { path: 'about', component: AboutComponent },
    // ])
  ]
})
export class MainPanelModule { }

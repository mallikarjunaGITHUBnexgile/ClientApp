import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProfileComponent1 } from "./profile/profile.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";

const routes: Routes=[
    { path: '',redirectTo:'profile1',pathMatch:'full'},
    { path: 'profile1', component: ProfileComponent1, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashboardRoutingModule{}
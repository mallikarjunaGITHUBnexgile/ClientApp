import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import {  ProfileComponent } from './profile/profile.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LogOutComponent } from './log-out/log-out.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AboutComponent } from './dashboard/about/about.component';
import { ProfileComponent1 } from './dashboard/profile/profile.component';
import { SidePanelComponent } from './dashboard/side-panel/side-panel.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProfileComponent,
    FetchDataComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    LogOutComponent,
    EditProfileComponent,
    AboutComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,TooltipModule,TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    FormsModule, ReactiveFormsModule, MatTableModule, MatProgressBarModule, MatCardModule, MatProgressSpinnerModule,
    MatSidenavModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatTooltipModule,MatInputModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'nav-menu', component: NavMenuComponent },
      { path: 'login', component: LogInComponent },
      { path: 'logout', component: LogOutComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'editProfile', component: EditProfileComponent },
      {path:'about',component:AboutComponent},
      {path:'profile1',component:ProfileComponent1},
      {path:'sidePanel',component:SidePanelComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [MatNativeDateModule,DatePipe],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

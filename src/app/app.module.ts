import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { MaintenanceComponent } from './components/common/maintenance/maintenance.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/route';
import { ThemeProfileComponent } from './components/theme-profile/theme-profile.component';
import { CreateResumeComponent } from './components/dashboard/create-resume/create-resume.component';
import { LoaderService } from './services/loader.service';
import { SharedService } from './services/shared.service';

import {
  ForgotFlowGuard, DashboardFlowGuard,
  CreateResumeFlowGuard,
  LoginFlowGuard, ProfileFlowGuard,
  RegisterFlowGuard, ThemeProfileFlowGuard
} from './guards/flow-gaurd';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotComponent,
    FooterComponent,
    NavbarComponent,
    MaintenanceComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ThemeProfileComponent,
    CreateResumeComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    LoaderService,
    SharedService,
    ForgotFlowGuard,
    DashboardFlowGuard,
    CreateResumeFlowGuard,
    LoginFlowGuard,
    ProfileFlowGuard,
    RegisterFlowGuard,
    ThemeProfileFlowGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import {
  ForgotFlowGuard, DashboardFlowGuard,
  CreateResumeFlowGuard,
  LoginFlowGuard, ProfileFlowGuard,
  RegisterFlowGuard, ThemeProfileFlowGuard,
} from './guards/flow-gaurd';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

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
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    LoaderService,
    SharedService,
    AuthService,
    ForgotFlowGuard,
    DashboardFlowGuard,
    CreateResumeFlowGuard,
    LoginFlowGuard,
    ProfileFlowGuard,
    RegisterFlowGuard,
    ThemeProfileFlowGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

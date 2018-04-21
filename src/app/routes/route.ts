import { Routes } from '@angular/router';
import {
    ForgotFlowGuard, DashboardFlowGuard,
    CreateResumeFlowGuard,
    LoginFlowGuard, ProfileFlowGuard,
    RegisterFlowGuard, ThemeProfileFlowGuard
} from '../guards/flow-gaurd';
import { AuthComponent } from '../components/auth/auth.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { CreateResumeComponent } from '../components/dashboard/create-resume/create-resume.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ThemeProfileComponent } from '../components/theme-profile/theme-profile.component';
import { PageNotFoundComponent } from '../components/common/page-not-found/page-not-found.component';
import { ForgotComponent } from '../components/auth/forgot/forgot.component';

export const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [LoginFlowGuard],
                data: { title: 'Login' }
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [RegisterFlowGuard],
                data: { title: 'Register' }

            },
            {
                path: 'forgot',
                component: ForgotComponent,
                canActivate: [ForgotFlowGuard],
                data: { title: 'Forgot Password' }
            },

        ]
    },
    {
        path: 'profile/:user-id', component: ThemeProfileComponent,
        canActivate: [ThemeProfileFlowGuard],
        data: { title: 'View Profile' }
    },
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [DashboardFlowGuard],
        data: { title: 'Customers' },
        children: [
            {
                path: 'resume',
                component: CreateResumeComponent,
                canActivate: [CreateResumeFlowGuard],
                data: { title: 'Profile' }
            },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page not Found' }

    }
];

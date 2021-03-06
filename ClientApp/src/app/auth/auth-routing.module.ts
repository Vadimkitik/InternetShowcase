import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { LoggedInGuard } from '../shared/services/guards/loggedIn-guard.service';

const authRoutes: Routes = [    
    { path: '', component: AuthComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'forgotpassword', component: ForgotPasswordComponent },
            { path: 'resetpassword', component: ResetPasswordComponent },
            { path: 'confirmemail', component: ConfirmEmailComponent }
        ], canActivate: [LoggedInGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

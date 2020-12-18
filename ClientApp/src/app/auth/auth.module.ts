import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        AuthComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule {}
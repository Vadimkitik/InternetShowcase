import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { AdminPanelRoutingModule } from './adminPanel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        AuthComponent,
        PanelComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AdminPanelRoutingModule,
        SharedModule
    ]
})
export class AdminPanelModule {}
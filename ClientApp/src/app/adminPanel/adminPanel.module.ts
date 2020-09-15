import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { AdminPanelRoutingModule } from './adminPanel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { PanelComponent } from './panel/panel.component';
import { UploadComponent } from './panel/product-form/upload/upload.component';
import { ProductCreateComponent } from './panel/product-form/product-create/product-create.component';
import { ProductEditComponent } from './panel/product-form/product-edit/product-edit.component';
import { ProductFormComponent } from './panel/product-form/product-form.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        AuthComponent,
        PanelComponent,
        ProductFormComponent,
        ProductCreateComponent,
        ProductEditComponent,
        UploadComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AdminPanelRoutingModule,
        SharedModule
    ]
})
export class AdminPanelModule {}
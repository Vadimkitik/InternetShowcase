


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminPanelRoutingModule } from './adminPanel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './products/panel.component';
import { UploadComponent } from './products/product-form/upload/upload.component';
import { ProductCreateComponent } from './products/product-form/product-create/product-create.component';
import { ProductEditComponent } from './products/product-form/product-edit/product-edit.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { TestJsonComponent } from './test-json/test-json.component';
import { AdminPanelComponent } from './adminPanel.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersCreateComponent } from './users/users-form/users-create/users-create.component';
import { UsersEditComponent } from './users/users-form/users-edit/users-edit.component';

@NgModule({
    declarations: [
        AdminPanelComponent,
        PanelComponent,
        ProductFormComponent,
        ProductCreateComponent,
        ProductEditComponent,
        UploadComponent,
        TestJsonComponent,
        UsersComponent,
        CategoriesComponent,
        UsersFormComponent,
        UsersCreateComponent,
        UsersEditComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AdminPanelRoutingModule,
        SharedModule
    ]
})
export class AdminPanelModule {
}

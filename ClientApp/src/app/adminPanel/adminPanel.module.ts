


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminPanelRoutingModule } from './adminPanel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './panel/panel.component';
import { UploadComponent } from './panel/product-form/upload/upload.component';
import { ProductCreateComponent } from './panel/product-form/product-create/product-create.component';
import { ProductEditComponent } from './panel/product-form/product-edit/product-edit.component';
import { ProductFormComponent } from './panel/product-form/product-form.component';
import { TestJsonComponent } from './test-json/test-json.component';
import { UsersFormComponent } from './panel/users-form/users-form.component';
import { CategoryFormComponent } from './panel/category-form/category-form.component';


@NgModule({
    declarations: [
        PanelComponent,
        ProductFormComponent,
        ProductCreateComponent,
        ProductEditComponent,
        UploadComponent,
        TestJsonComponent,
        UsersFormComponent,
        CategoryFormComponent
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

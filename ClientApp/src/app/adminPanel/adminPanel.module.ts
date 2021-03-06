import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminPanelRoutingModule } from './adminPanel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { UploadComponent } from './products/product-form/upload/upload.component';
import { ProductCreateComponent } from './products/product-form/product-create/product-create.component';
import { ProductEditComponent } from './products/product-form/product-edit/product-edit.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { TestJsonComponent } from './test-json/test-json.component';
import { AdminPanelComponent } from './adminPanel.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersCreateComponent } from './users/users-form/users-create/users-create.component';
import { UsersEditComponent } from './users/users-form/users-edit/users-edit.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { CategoriesCreateComponent } from './categories/categories-form/categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories/categories-form/categories-edit/categories-edit.component';
import { UserRolesComponent } from './users/users-form/user-roles/user-roles/user-roles.component';
import { UserResetpasswordComponent } from './users/users-form/user-resetpassword/user-resetpassword.component';

@NgModule({
    declarations: [
        AdminPanelComponent,
        ProductsComponent,
        ProductFormComponent,
        ProductCreateComponent,
        ProductEditComponent,
        UploadComponent,
        TestJsonComponent,
        UsersComponent,
        CategoriesComponent,
        UsersCreateComponent,
        UsersEditComponent,
        CategoriesFormComponent,
        CategoriesCreateComponent,
        CategoriesEditComponent,
        UserRolesComponent,
        UserResetpasswordComponent        
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './adminPanel.component';
import { CategoriesCreateComponent } from './categories/categories-form/categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories/categories-form/categories-edit/categories-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { PanelComponent } from "./products/panel.component";
import { ProductCreateComponent } from './products/product-form/product-create/product-create.component';
import { ProductEditComponent } from './products/product-form/product-edit/product-edit.component';
import { TestJsonComponent } from './test-json/test-json.component';
import { UsersCreateComponent } from './users/users-form/users-create/users-create.component';
import { UsersEditComponent } from './users/users-form/users-edit/users-edit.component';
import { UsersComponent } from './users/users.component';

const adminRoutes: Routes = [
    
    { path: '', component: AdminPanelComponent, children: [
        { path: 'product', component: PanelComponent },
        { path: 'product/create', component: ProductCreateComponent },
        { path: 'product/edit/:productLine', component: ProductEditComponent },
        { path: 'users', component: UsersComponent },
        { path: 'users/create', component: UsersCreateComponent },
        { path: 'users/edit/:email', component: UsersEditComponent },
        { path: 'categories', component: CategoriesComponent },
        { path: 'categories/create', component: CategoriesCreateComponent },
        { path: 'categories/edit/:email', component: CategoriesEditComponent }
    ] },
    
    { path: 'testjson', component: TestJsonComponent }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

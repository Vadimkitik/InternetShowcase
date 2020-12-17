import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../shared/services/guards/admin-guard.service';
import { AuthGuard } from '../shared/services/guards/auth-guard.service';
import { ManagerGuard } from '../shared/services/guards/manager-guard.service';

import { AdminPanelComponent } from './adminPanel.component';
import { CategoriesCreateComponent } from './categories/categories-form/categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories/categories-form/categories-edit/categories-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from "./products/products.component";
import { ProductCreateComponent } from './products/product-form/product-create/product-create.component';
import { ProductEditComponent } from './products/product-form/product-edit/product-edit.component';
import { TestJsonComponent } from './test-json/test-json.component';
import { UserRolesComponent } from './users/users-form/user-roles/user-roles/user-roles.component';
import { UsersCreateComponent } from './users/users-form/users-create/users-create.component';
import { UsersEditComponent } from './users/users-form/users-edit/users-edit.component';
import { UsersComponent } from './users/users.component';

const adminRoutes: Routes = [
    
    { path: '', component: AdminPanelComponent, children: [
        { path: 'products', component: ProductsComponent },
        { path: 'products/create', component: ProductCreateComponent, canActivate: [ManagerGuard] },
        { path: 'products/edit/:productLine', component: ProductEditComponent, canActivate: [ManagerGuard] },
        { path: 'users', component: UsersComponent  }, // , canActivate: [AdminGuard]
        { path: 'users/roles/:userId', component: UserRolesComponent }, // , canActivate: [AdminGuard]
        { path: 'users/create', component: UsersCreateComponent }, // , canActivate: [AdminGuard]
        { path: 'users/edit/:email', component: UsersEditComponent }, // , canActivate: [AdminGuard]
        { path: 'categories', component: CategoriesComponent },
        { path: 'categories/create', component: CategoriesCreateComponent, canActivate: [ManagerGuard] },
        { path: 'categories/edit/:categoryLine', component: CategoriesEditComponent, canActivate: [ManagerGuard] }
    ] , canActivate: [AuthGuard] },
    
    { path: 'test', component: TestJsonComponent }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

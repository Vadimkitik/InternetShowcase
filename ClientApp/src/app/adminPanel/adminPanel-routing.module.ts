import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { AuthComponent } from "./auth/auth.component";
import { PanelComponent } from "./panel/panel.component";
import { ProductCreateComponent } from './panel/product-form/product-create/product-create.component';
import { ProductEditComponent } from './panel/product-form/product-edit/product-edit.component';

const adminRoutes: Routes = [
    { path: 'admin-panel', component: PanelComponent },    
    { path: 'admin-panel/create', component:  ProductCreateComponent },
    { path: 'admin-panel/edit/:id', component:  ProductEditComponent },
    { path: 'auth', component: AuthComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule {}

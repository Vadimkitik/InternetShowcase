import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { AuthComponent } from "./auth/auth.component";
import { PanelComponent } from "./panel/panel.component";

const productsRoutes: Routes = [
    { path: 'admin-panel', component: PanelComponent },
    { path: 'auth', component: AuthComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent}
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule {}

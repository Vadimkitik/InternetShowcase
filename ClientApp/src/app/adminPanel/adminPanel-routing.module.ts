import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelComponent } from "./panel/panel.component";
import { ProductCreateComponent } from './panel/product-form/product-create/product-create.component';
import { ProductEditComponent } from './panel/product-form/product-edit/product-edit.component';

const adminRoutes: Routes = [
    { path: 'admin-panel', component: PanelComponent },
    { path: 'admin-panel/create', component: ProductCreateComponent },
    { path: 'admin-panel/edit/:productLine', component: ProductEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

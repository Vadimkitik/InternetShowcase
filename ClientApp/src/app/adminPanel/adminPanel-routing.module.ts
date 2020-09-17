import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelComponent } from "./panel/panel.component";
import { ProductCreateComponent } from './panel/product-form/product-create/product-create.component';
import { ProductEditComponent } from './panel/product-form/product-edit/product-edit.component';

const adminRoutes: Routes = [
    { path: '', component: PanelComponent },
    { path: 'create', component: ProductCreateComponent },
    { path: 'edit/:productLine', component: ProductEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-form/product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const productsRoutes: Routes = [
    { path: 'products/:categoryName',  component: ProductListComponent },
    { path: 'products/:categoryName/:id', component: ProductViewComponent },
    { path: 'create', component:  ProductCreateComponent },
    { path: 'edit/:id', component:  ProductEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}

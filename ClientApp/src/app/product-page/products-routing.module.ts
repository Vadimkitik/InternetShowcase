import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products.component';

const productsRoutes: Routes = [
    { path: 'products/:categoryLine',  component: ProductsComponent },
    { path: 'product/:productLine', component: ProductViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-page/product-list/product-list.component';
import { ShopComponent } from './shop/shop.component';
import { ProductViewComponent } from './product-page/product-view/product-view.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductCreateComponent } from './product-page/product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-page/product-form/product-edit/product-edit.component';



const appRoutes: Routes = [
    { path: 'products/:categoryName',  component: ProductListComponent },
    { path: 'products/:categoryName/:id', component: ProductViewComponent },
    { path: 'create', component:  ProductCreateComponent },
    { path: 'edit/:id', component:  ProductEditComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
      
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
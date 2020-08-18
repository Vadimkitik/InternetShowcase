import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-page/product-list/product-list.component';
import { ShopComponent } from './shop/shop.component';
import { ProductViewComponent } from './product-page/product-view/product-view.component';


const appRoutes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'product/view/:id', component: ProductViewComponent }
   // { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
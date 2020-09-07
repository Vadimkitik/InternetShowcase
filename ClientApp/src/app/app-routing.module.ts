import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';


const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
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
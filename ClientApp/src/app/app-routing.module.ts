import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';


const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
    { 
        path: 'admin-panel',
        loadChildren: () => import('./adminPanel/adminPanel.module').then(m => m.AdminPanelModule)
    },
    { 
         path: 'auth',
         loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    { path: 'shop', component: ShopComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
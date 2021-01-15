import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr/';;

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import  {AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './product-page/products.module';
import { MainPageComponent } from './main-page/main-page.component';
import { TestPageComponent } from './test-page/test-page.component';

export function tokenGetter(){
    return localStorage.getItem("jwt");
}

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        SharedModule,
        ProductsModule,
        HttpClientModule,
        AppRoutingModule,
        JwtModule.forRoot({
           config: {
               tokenGetter: tokenGetter,
               whitelistedDomains: ["52.174.48.125/api"],
               blacklistedRoutes: []
           } 
        })
        ],
    declarations:
        [
            AppComponent,
            MainPageComponent,
            TestPageComponent
        ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
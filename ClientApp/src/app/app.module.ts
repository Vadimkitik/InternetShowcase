import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import  {AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsModule } from './product-page/products.module';
import { MainPageComponent } from './main-page/main-page.component';

export function tokenGetter(){
    return localStorage.getItem("jwt");
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        ProductsModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
        JwtModule.forRoot({
           config: {
               tokenGetter: tokenGetter,
               whitelistedDomains: ["localhost:5000"],
               blacklistedRoutes: []
           } 
        })
        ],
    declarations:
        [
            AppComponent,
            ShopComponent,
            HeaderComponent,
            FooterComponent,
            MainPageComponent
        ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
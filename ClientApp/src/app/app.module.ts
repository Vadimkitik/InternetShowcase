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
import { MenuNavComponent } from './shared/components/menu-nav/menu-nav.component';
import { ProductsModule } from './product-page/products.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ToastrModule } from 'ngx-toastr/';;
import { TestPageComponent } from './test-page/test-page.component'
import { AccordionComponent } from './shared/components/menu-nav/accordion/accordion.component';
import { AccordionItemComponent } from './shared/components/menu-nav/accordion/accordion-item/accordion-item.component';;
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

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
               whitelistedDomains: ["localhost:5000"],
               blacklistedRoutes: []
           } 
        })
        ],
        providers: [
            SpinnerService
        ],
    declarations:
        [
            AppComponent,
            ShopComponent,
            MenuNavComponent,
            HeaderComponent,
            FooterComponent,
            MainPageComponent,
            TestPageComponent,
            AccordionComponent, 
            AccordionItemComponent, 
            SpinnerComponent
        ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
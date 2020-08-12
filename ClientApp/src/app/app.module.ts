import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from './material/material.module';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import  {AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { ProductCreateComponent } from './product-page/product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-page/product-form/product-edit/product-edit.component';
import { ProductFormComponent } from './product-page/product-form/product-form.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ShopComponent } from './shop/shop.component';;
import { ProductViewComponent } from './product-page/product-view/product-view.component';

export function tokenGetter(){
    return localStorage.getItem("jwt");
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
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
            NotFoundComponent,
            ProductListComponent,
            ProductFormComponent,
            ProductCreateComponent,
            ProductEditComponent,
            HeaderComponent,
            FooterComponent
,
            ShopComponent
,
            ProductViewComponent        ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
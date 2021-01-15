import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductService } from './services/product.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/guards/auth-guard.service';
import { AdminGuard } from './services/guards/admin-guard.service';
import { ManagerGuard } from './services/guards/manager-guard.service';
import { LoggedInGuard } from './services/guards/loggedIn-guard.service';
import { CategoryService } from './services/category.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UploadService } from './services/upload.service';
import { TreeService} from './services/tree.service';
import { RolesService} from './services/roles.service';
import { TokenIntersepterService } from './services/intersepters/token-intersepter.service';
import { ErrorIntersepterService } from './services/intersepters/error-intersepter.service';
import { UserValidateService } from './services/userValidate.service';
import { EmailService } from './services/email.service';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { MaterialModule } from '../material/material.module';
import { ShopComponent } from '../shop/shop.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AccordionItemComponent } from './components/menu-nav/accordion/accordion-item/accordion-item.component';
import { AccordionComponent } from './components/menu-nav/accordion/accordion.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './components/spinner/spinner.service';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        MaterialModule,
        CommonModule
    ],
    providers: [
        ProductService, 
        UsersService,
        AuthService,
        EmailService,
        AuthGuard,
        AdminGuard,
        ManagerGuard,
        CategoryService,
        UploadService,
        RolesService,
        UserValidateService,
        LoggedInGuard,
        SpinnerService,
        TreeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenIntersepterService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorIntersepterService,
            multi: true
        }        
    ],
    declarations: [
        NotFoundComponent,
        MenuNavComponent,
        HeaderComponent,
        FooterComponent,
        ShopComponent,
        AccordionComponent, 
        AccordionItemComponent, 
        SpinnerComponent
    ],
    exports: [
        ReactiveFormsModule, 
        FormsModule,
        HeaderComponent,
        FooterComponent,
        MenuNavComponent, 
        SpinnerComponent
    ]
})
export class SharedModule {}
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductService } from './services/product.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { TokenStorageService } from './services/token-storage.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [ ReactiveFormsModule, FormsModule ],
    exports: [ ReactiveFormsModule, FormsModule],
    providers: [
        ProductService, 
        UsersService,
        AuthService,
        AuthGuard,
        TokenStorageService
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule {}
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductService } from './services/product.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { TokenStorageService } from './services/token-storage.service';
import { CategoryService } from './services/category.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UploadService } from './services/upload.service';
import { TreeService} from './services/tree.service';
import { TokenIntersepterService } from './services/token-intersepter.service';
import { ErrorIntersepterService } from './services/error-intersepter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        ProductService, 
        UsersService,
        AuthService,
        AuthGuard,
        TokenStorageService,
        CategoryService,
        UploadService,
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
    declarations: [NotFoundComponent],
    exports: [ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
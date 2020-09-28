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
import { SubCategoryService } from './services/subCategory.service';
import { UnderSubCategoryService } from './services/underSubCategory.service';

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
        SubCategoryService,
        UnderSubCategoryService
    ],
    declarations: [NotFoundComponent],
    exports: [ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
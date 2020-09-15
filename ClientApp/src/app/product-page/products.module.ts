import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductViewComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MaterialModule,
        SharedModule
    ]
})
export class ProductsModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DialogOverviewformComponent } from './dialog-overviewform/dialog-overviewform.component';
import { ProductsComponent } from './products.component';


@NgModule({
    declarations: [
        ProductViewComponent,
        ProductListComponent,
        DialogOverviewformComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MaterialModule,
        SharedModule
    ]
})
export class ProductsModule {}
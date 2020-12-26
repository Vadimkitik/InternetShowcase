import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/models/product.model';
import { FeedbackForm } from 'src/app/shared/models/feedbackForm.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { DialogOverviewformComponent } from '../dialog-overviewform/dialog-overviewform.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productLine: string;
  product: Product;
  loaded: boolean = false;
  oldPrice: boolean = false;
  public errorMsg;
  animal: string;
  name: string;
  feedbackForm: FeedbackForm;

  constructor(
    public productService: ProductService,
    activeRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { 
    this.productLine = activeRoute.snapshot.params["productLine"];
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewformComponent, {
      width: '780px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
      this.productService.getProduct(this.productLine)
          .subscribe((data: Product) => {
            this.product = data;
            if(this.product.oldPrice != null) this.oldPrice = true;
            this.loaded = true;
          }, error => this.errorMsg = error);
  }
}

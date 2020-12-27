import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/models/product.model';
import { FeedbackForm } from 'src/app/shared/models/feedbackForm.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { DialogOverviewformComponent } from '../dialog-overviewform/dialog-overviewform.component';
import { EmailService } from 'src/app/shared/services/email.service';
import { ToastrService } from 'ngx-toastr';

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
  feedbackForm: FeedbackForm;

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private emailService: EmailService,
    private toastrService: ToastrService
  ) { 
    this.productLine = activeRoute.snapshot.params["productLine"];
  }
  
  openDialog(): void {
    
    const dialogRef = this.dialog.open(DialogOverviewformComponent, {
      width: '780px',
      data: {
        productName: this.product.name,
        imageUrl: this.product.imageUrl,
        checkAvailability: false,
        checkPrice: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != null) {        
        this.emailService
        this.toastrService.success("Email sent!");
      }
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

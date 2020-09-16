import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productLine: string;
  Category: Category[];
  product: Product;
  loaded: boolean = false;
  public errorMsg;

  constructor(
    public productService: ProductService,
    activeRoute: ActivatedRoute
  ) { 
    this.productLine = activeRoute.snapshot.params["productLine"];
  }

  ngOnInit() {
    if (this.productLine != null){
      this.productService.getProduct(this.productLine)
          .subscribe((data: Product) => {
            this.product = data;
            if(this.product.oldPrice != null) this.loaded = true;
          }, error => this.errorMsg = error);
    }
  }
}

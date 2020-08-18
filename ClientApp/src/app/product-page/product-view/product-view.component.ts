import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  id: number;
  product: Product;
  loaded: boolean = false;

  constructor(
    public productService: ProductService,
    activeRoute: ActivatedRoute
  ) { 
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  ngOnInit() {
    if (this.id != null){
      this.productService.getProduct(this.id)
          .subscribe((data: Product) => {
            this.product = data;
            if(this.product != null) this.loaded = true;
          });
    }
  }

}
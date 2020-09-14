import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PanelComponent implements OnInit {

  dataSource;
  columnsToDisplay = ['name', 'price', 'oldPrice', 'isFavourite', 'available', 'categoryID', 'category'];
  expandedElement: Product | null;
  errorMsg: string;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.dataSource = data;
    }, error => this.errorMsg = error);
  }

  createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
}

}

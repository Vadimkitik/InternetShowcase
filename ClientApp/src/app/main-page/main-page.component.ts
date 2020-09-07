import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  @Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  @Input() categories: Category[];
  constructor() { }

  ngOnInit(): void {
  }

}

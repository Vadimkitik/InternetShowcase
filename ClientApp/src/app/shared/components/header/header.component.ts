import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[];
  products: Product[];

  constructor(
    private categoryService: CategoryService) { }  

  ngOnInit() { 
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log(categories);
      });
     
  }
}

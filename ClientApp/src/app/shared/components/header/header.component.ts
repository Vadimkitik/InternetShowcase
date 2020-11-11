import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[];
  constructor(
    private categoryService: CategoryService
  ) { }  

  ngOnInit() { 
   this.categoryService.getCategories().subscribe((data:Category[]) => {
     this.categories = data;
   })
  }
}

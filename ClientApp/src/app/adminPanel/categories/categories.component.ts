import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  errorMsg: string;
  categories: Category[];
  categoriesParant = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      this.catReplace(data);
      console.log(this.categoriesParant);
    }, error => this.errorMsg = error
    )
  }

  catReplace(data: Category[]){
    for(let i=0;; i++)
    {
      if(data[i] == null) break;
      
      this.categoriesParant.push({
        id: data[i].id,
        line: data[i].categoryLine,
        name: data[i].categoryName                
      });
        
    }  
  }

}

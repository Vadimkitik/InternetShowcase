import { Component, OnInit } from '@angular/core';
import { Category } from './shared/models/category.model';
import { CategoryService } from './shared/services/category.service';
import { TreeService } from './shared/services/tree.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    showFiller = false;
    categories: Category[];
  
    constructor(
      private categoryService: CategoryService,
      private treeService: TreeService
    ) {}
  
    ngOnInit() { 
      this.categoryService.getCategories().subscribe((data:Category[]) => {
        this.categories = this.treeService.list_to_tree(data);
      });
     }
  }
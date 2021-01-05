import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { TreeService } from '../../services/tree.service';

@Component({
  selector: 'menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit{

  showFiller = false;
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private treeService: TreeService
  ) {}

  ngOnInit() { 
    this.categoryService.getCategories().subscribe((data:Category[]) => {
      this.categories = this.treeService.list_to_tree(data);
      console.log(this.categories);
    })
   } 
}

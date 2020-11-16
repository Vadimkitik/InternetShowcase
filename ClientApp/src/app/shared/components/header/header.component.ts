import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { TreeService } from '../../services/tree.service';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private treeService: TreeService
  ) { }  

  ngOnInit() { 
   this.categoryService.getCategories().subscribe((data:Category[]) => {
     this.categories = this.treeService.list_to_tree(data);
   })
  }

  
}

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
     this.categories = this.list_to_tree(data);
   })
  }

  list_to_tree(list) {
    let map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      
      if (node.parent_Id != 0) {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parent_Id]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}

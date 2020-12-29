import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { User } from '../../models/user-role/user.model';
import { AuthService } from '../../services/auth.service';
import { CategoryService } from '../../services/category.service';
import { TreeService } from '../../services/tree.service';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  isAdminOrManager = false;
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private treeService: TreeService,
    private authService: AuthService
  ) { }  

  ngOnInit() { 
    this.user = this.authService.getUser();
    if (this.user != null) {
      if (this.user.roles.includes('admin')
          && this.user.roles.includes('manager')){
        this.isAdminOrManager = true;
      }
    }    
   this.categoryService.getCategories().subscribe((data:Category[]) => {
     this.categories = this.treeService.list_to_tree(data);
   })
  }

  
}

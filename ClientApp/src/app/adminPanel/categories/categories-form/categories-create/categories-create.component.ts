import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent {

    @Input() category: Category = new Category;    // добавляемый объект
    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private toastrService: ToastrService) { }

    save() {
        console.log(this.category);
        this.categoryService.createCategory(this.category).subscribe(() => {
          this.toastrService.success(`Category ${this.category.name} is Created`);
          this.router.navigateByUrl("/admin-panel/categories")
        });
     }

}

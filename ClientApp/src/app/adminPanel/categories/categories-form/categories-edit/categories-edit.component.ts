import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  categoryLine: string;
    @Input() category: Category;    // изменяемый объект
    loaded: boolean = false;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private toastrService: ToastrService,
        activeRoute: ActivatedRoute
        ) 
    {
        this.categoryLine = activeRoute.snapshot.params["categoryLine"];
    }

    ngOnInit() {
        if (this.categoryLine)
            this.categoryService.getCategory(this.categoryLine)
                .subscribe((data: Category) => {
                    this.category = data;
                    if (this.category != null) this.loaded = true;
                });
    }

    save() {
       console.log(this.category);
        this.categoryService.updateCategory(this.category).subscribe(() => { 
            this.toastrService.success(`Category changed`);
            this.router.navigateByUrl("/admin-panel/categories")
        });
    }
}

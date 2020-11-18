import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    errorMsg: string;
    message: string;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
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
                    console.log(this.category);
                    if (this.category != null) this.loaded = true;
                }, error => this.errorMsg = error);
    }

    save() {
       console.log(this.category);
        this.categoryService.updateCategory(this.category).subscribe(() => { 
            this.router.navigateByUrl("/admin-panel/categories")
        }, error => this.errorMsg = error);
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  @Input() category: Category;
  @Input() categories: Category[];
  loaded: boolean = false;
  hide = true;
  name = new FormControl('', [Validators.required]);
  line = new FormControl('', [Validators.required]);


  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      this.categories.push({
        children: null,
        id: 0,
        line: "",
        name: "Родительская категория",
        parent_Id: null,
        products: null
      })
    });
  }
  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
  }
}

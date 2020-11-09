import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  @Input() category: Category;
  public errorMsg;
  loaded: boolean = false;
  hide = true;
  name = new FormControl('', [Validators.required]);
  line = new FormControl('', [Validators.required]);

  
  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
  }
}

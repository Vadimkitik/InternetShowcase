import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  dataSource: MatTableDataSource<Category>;
  columnsToDisplay = [
    'id', 
    'line', 
    'name',
    'parent_Id', 
    'button'
  ];
  expandedElement: Category | null;
  errorMsg: string;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => this.errorMsg = error);
  }

  delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(data => { 
      if(data) {
        console.log(`Category with ID "${id}" is Deleted!`);
      }
      else {
        this.errorMsg =`Category with ID "${id}" is NOT Deleted!`;
      }      
      console.log(data)
      this.load();
    }, error => this.errorMsg = error);    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 
}

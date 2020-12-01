import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

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
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(res => { 
      this.toastrService.success(`Category with ID "${id}" is Deleted!`);
      this.load();
    });    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 
}

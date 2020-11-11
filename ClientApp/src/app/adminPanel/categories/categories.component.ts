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

  categoriesAll = [];
  dataSource: MatTableDataSource<any[]>;
  columnsToDisplay = [
    'id', 
    'line', 
    'name', 
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
      this.catReplace(data);
      this.dataSource = new MatTableDataSource(this.categoriesAll);
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

  
  catReplace(data: any[]) {
    data.forEach(element => {

      this.categoriesAll.push({
        id: element.id,
        line: element.categoryLine,
        name: element.categoryName                
      });

      for(let key in element) {

        if(Array.isArray(element[key]) && element[key].length != 0) {
          this.catReplace(element[key]);
        }
      }
    });
  }

  // catReplace(data: Category[]){
  //   for(let i=0;; i++)
  //   {
  //     if(data[i] == null) { break; }

  //     this.categoriesAll.push({
  //       id: data[i].id,
  //       line: data[i].categoryLine,
  //       name: data[i].categoryName                
  //     });
      
  //     if(data[i].subCategories) {
  //       for(let j = 0; j < data[i].subCategories.length; j++) {
  //         this.categoriesAll.push({
  //           id: data[i].subCategories[j].id,
  //           line: data[i].subCategories[j].categoryLine,
  //           name: data[i].subCategories[j].categoryName                
  //         });

  //         if(data[i].subCategories[j].underSubCategories) {
  //           for(let x = 0; x < data[i].subCategories[j].underSubCategories.length; x++) {
  //             this.categoriesAll.push({
  //               id: data[i].subCategories[j].underSubCategories[x].id,
  //               line: data[i].subCategories[j].underSubCategories[x].categoryLine,
  //               name: data[i].subCategories[j].underSubCategories[x].categoryName                
  //             });
  //           }
  //         }
  //       }
  //     } 
  //   }  
  // }
}

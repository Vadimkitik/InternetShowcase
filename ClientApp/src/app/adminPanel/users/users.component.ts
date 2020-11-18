import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/shared/models/category.model';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  columnsToDisplay = [
    'email', 
    'name', 
    'role',
    'button'
  ];
  expandedElement: User | null;
  errorMsg: string;
  categories: Category;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => this.errorMsg = error);
  }

  delete(id: number) {
    this.usersService.deleteUser(id).subscribe(data => { 
      console.log(`User with ID "${id}" is Deleted!`);
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

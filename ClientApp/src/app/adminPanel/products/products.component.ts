import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { UploadService } from 'src/app/shared/services/upload.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user-role/user.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProductsComponent implements OnInit {

  accessRights = false;
  user: User;
  dataSource: MatTableDataSource<Product>;
  columnsToDisplay = [ 
    'name', 
    'price', 
    'oldPrice', 
    'isFavourite',
    'available',
    'category',
    'button'
  ];
  expandedElement: Product | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private productService: ProductService,
    private uploadService: UploadService,
    private toastrService: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    if(this.user.roles.includes('admin') || this.user.roles.includes('manager')){
      this.accessRights = true;
    }
    this.load();
  }

  load() {    
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(data => { 
      this.toastrService.success(`Removal product with id ${id} successful`)
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

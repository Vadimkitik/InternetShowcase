import { NgModule } from '@angular/core';

import {TextFieldModule} from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MaterialComponents =[
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatRadioModule,
  TextFieldModule,
  MatCheckboxModule,
  MatMenuModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

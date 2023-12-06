import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SeatingItemsComponent } from './seating-items.component';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Route, RouterModule, Routes } from '@angular/router';
import { SeatingDataComponent } from './seating-data/seating-data.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEditSeatingItemComponent } from './add-edit-seating-item/add-edit-seating-item.component';
import { MatIconModule } from '@angular/material/icon';

const routes:Routes=[
  {
    path:'',
    component:SeatingDataComponent
  }
]

@NgModule({
  declarations: [
    SeatingItemsComponent,
    SeatingDataComponent,
    AddEditSeatingItemComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgIf,
    RouterModule.forChild(routes)
  ]
})
export class SeatingItemsModule { }

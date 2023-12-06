import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { DiscountComponent } from './discount.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DiscountDataComponent } from './discount-data/discount-data.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEditDiscountComponent } from './add-edit-discount/add-edit-discount.component';

const routes:Routes = [
  {
    path:'',
    component:DiscountDataComponent
  }
]

@NgModule({
  declarations: [
    DiscountComponent,
    DiscountDataComponent,
    AddEditDiscountComponent
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
    NgIf,
    RouterModule.forChild(routes)
  ]
})
export class DiscountModule { }

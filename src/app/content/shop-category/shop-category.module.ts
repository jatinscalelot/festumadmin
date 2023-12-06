import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCategoryComponent } from './shop-category.component';
import { ShopCategoryDataComponent } from './shop-category-data/shop-category-data.component';
import { AddEditShopCategoryComponent } from './add-edit-shop-category/add-edit-shop-category.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes:Routes=[
  {
    path:'',
    component:ShopCategoryDataComponent
  }
]

@NgModule({
  declarations: [
    ShopCategoryComponent,
    ShopCategoryDataComponent,
    AddEditShopCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class ShopCategoryModule { }

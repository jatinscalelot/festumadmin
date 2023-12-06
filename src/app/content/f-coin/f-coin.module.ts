import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FCoinComponent } from './f-coin.component';
import { AddEditFCoinComponent } from './add-edit-f-coin/add-edit-f-coin.component';
import { RouterModule, Routes } from '@angular/router';
import { FCoinDataComponent } from './f-coin-data/f-coin-data.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes:Routes = [
  {
    path:'',
    component:FCoinDataComponent
  }
]

@NgModule({
  declarations: [
    FCoinComponent,
    AddEditFCoinComponent,
    FCoinDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatPaginatorModule,
  ]
})
export class FCoinModule { }

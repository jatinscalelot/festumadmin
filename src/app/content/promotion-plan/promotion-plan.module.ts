import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { PromotionPlanComponent } from './promotion-plan.component';
import { PremotionPlanDataComponent } from './premotion-plan-data/premotion-plan-data.component';
import { AddEditPremotionPlanComponent } from './add-edit-premotion-plan/add-edit-premotion-plan.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes:Routes=[
  {
    path:'',
    component:PremotionPlanDataComponent
  },
]

@NgModule({
  declarations: [
    PromotionPlanComponent,
    PremotionPlanDataComponent,
    AddEditPremotionPlanComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterModule.forChild(routes)
  ]
})
export class PromotionPlanModule { }

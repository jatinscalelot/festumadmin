import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponsComponent } from './coupons.component';
import { CouponsDataComponent } from './coupons-data/coupons-data.component';
import { AddEditNotificationCouponsComponent } from './add-edit-notification-coupons/add-edit-notification-coupons.component';
import { AddEditEventbookingCouponsComponent } from './add-edit-eventbooking-coupons/add-edit-eventbooking-coupons.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';

const routes:Routes = [
  {
    path:'',
    component:CouponsDataComponent
  }
]

@NgModule({
  declarations: [
    CouponsComponent,
    CouponsDataComponent,
    AddEditNotificationCouponsComponent,
    AddEditEventbookingCouponsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers : [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class CouponsModule { }

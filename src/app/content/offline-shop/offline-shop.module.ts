import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineShopDataComponent } from './offline-shop-data/offline-shop-data.component';
import { OfflineShopOverviewComponent } from './offline-shop-overview/offline-shop-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { SwiperModule } from 'swiper/angular';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps'
import { OfflineShopComponent } from './offline-shop.component';

const routes: Routes = [
  {
    path: '',
    component: OfflineShopDataComponent
  },
  {
    path: ':index',
    component: OfflineShopOverviewComponent,
    data: { title: 'Offline Shop' }
  }
]


@NgModule({
  declarations: [
    OfflineShopDataComponent,
    OfflineShopOverviewComponent,
    OfflineShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatExpansionModule,
    SwiperModule,
    RatingModule,
    ImageModule,
    PaginatorModule,
    ProgressBarModule,
    GoogleMapsModule
  ],
  providers : [
    GoogleMap
  ]
})
export class OfflineShopModule { }

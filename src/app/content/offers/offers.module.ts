import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OffersDataComponent } from './offers-data/offers-data.component';
import { AddEditOffersDataComponent } from './add-edit-offers-data/add-edit-offers-data.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OfflineOffersOverviewComponent } from './offline-offers-overview/offline-offers-overview.component';
import { OnlineOffersOverviewComponent } from './online-offers-overview/online-offers-overview.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SwiperModule } from 'swiper/angular';
import { ImageAndVideoPreviewComponent } from './image-and-video-preview/image-and-video-preview.component';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps'

const routes: Routes = [
  {
    path: '',
    component: OffersDataComponent
  },
  {
    path: 'online-offers/:index',
    component: OnlineOffersOverviewComponent,
    data: { title: 'Offers' }
  },
  {
    path: 'offline-offers/:index',
    component: OfflineOffersOverviewComponent,
    data: { title: 'Offers' }
  },

]

@NgModule({
  declarations: [
    OffersComponent,
    OffersDataComponent,
    AddEditOffersDataComponent,
    OfflineOffersOverviewComponent,
    OnlineOffersOverviewComponent,
    ImageAndVideoPreviewComponent
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
export class OffersModule { }

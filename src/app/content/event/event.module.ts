import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { EventDataComponent } from './event-data/event-data.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { ModalModule, ModalService } from '../../_modal';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ImageAndVideoPreviewComponent } from './image-and-video-preview/image-and-video-preview.component';
import { ImageModule } from 'primeng/image';
import { SwiperModule } from 'swiper/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddEditEventcategoryComponent } from './add-edit-eventcategory/add-edit-eventcategory.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { AgmCoreModule } from '@agm/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps'
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';


const routes: Routes = [
  {
    path: '',
    component: EventDataComponent
  },
  {
    path: 'event-overview',
    component: EventOverviewComponent,
    data: { title: 'Event' }
  },
  { path: ":index", component: EventOverviewComponent,data: { title: 'Event' } }
]

@NgModule({
  declarations: [
    EventComponent,
    EventDataComponent,
    EventOverviewComponent,
    ImageAndVideoPreviewComponent,
    AddEditEventcategoryComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    ModalModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes),
    RatingModule,
    FormsModule,
    ImageModule,
    SwiperModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDLgr8YB5IK8dBIEWClexZGzXaB7UlVm7Q',
    //   libraries: ['places']
    // }),
    GoogleMapsModule,
    PaginatorModule,
    ProgressBarModule
  ],
  exports: [ImageAndVideoPreviewComponent],
  providers: [
    ModalService,
    GoogleMap
  ]
})
export class EventModule { }


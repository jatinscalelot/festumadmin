import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveStreamComponent } from './live-stream.component';
import { LiveStreamDataComponent } from './live-stream-data/live-stream-data.component';
import { LiveStreamOverviewComponent } from './live-stream-overview/live-stream-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { ImageAndVideoPreviewComponent } from './image-and-video-preview/image-and-video-preview.component';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { SwiperModule } from 'swiper/angular'
import { FormsModule } from '@angular/forms';
import { Time24to12Pipe } from 'src/app/pipe/time24to12.pipe';
import { PaginatorModule } from 'primeng/paginator';

const routes:Routes = [
  {
    path:'',
    component:LiveStreamDataComponent
  },
  {
    path:':index',
    component:LiveStreamOverviewComponent,
    data: { title: 'Live Stream' }
  }
]

@NgModule({
  declarations: [
    LiveStreamComponent,
    LiveStreamDataComponent,
    LiveStreamOverviewComponent,
    ImageAndVideoPreviewComponent,
    Time24to12Pipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTabsModule,
    RatingModule,
    ImageModule,
    SwiperModule,
    FormsModule,
    PaginatorModule
  ],
  exports: [ImageAndVideoPreviewComponent],
})
export class LiveStreamModule { }

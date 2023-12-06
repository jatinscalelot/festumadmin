import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentModule } from './content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './auth/log-in/log-in.component';
import { GlobalFunctions } from './common/global-functions';
// import { SnotifyService, ToastDefaults,SnotifyModule } from 'ng-snotify';
import { TranslateModule, TranslateLoader, TranslateService } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { GlobalService } from './services/global.service';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { SwiperModule } from 'swiper/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';

// Loader of Translate language module
export function HttpLoaderFactory(http:  HttpClient) {
  return new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    RatingModule,
    FormsModule,
    ImageModule,
    SwiperModule,
    MatExpansionModule,
    PaginatorModule,
    ProgressBarModule
  ],
  providers: [
    GlobalFunctions,
    GlobalService,
    DatePipe,
    { provide: Window, useValue: window },
    TranslateService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  exports: [
    AppComponent,
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

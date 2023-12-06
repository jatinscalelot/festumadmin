import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { EventService } from '../event.service';
import { CONSTANTS } from 'src/app/common/constants';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css']
})
export class EventOverviewComponent implements OnInit {

  eventId: any;
  isLoading: boolean = false;
  eventByIdData: any;
  constants: any = CONSTANTS;
  overview: boolean = false;
  reviews: boolean = false;
  aboutevent: boolean = false;
  isOpenPopup: boolean = false;
  isImage: boolean = false;
  companyIAndV: boolean = false;
  isSingleVideo: boolean = false;
  imagesOrVideosArr: Array<any> = [];
  cancelEventPop: boolean = false;
  showMore: boolean = false;
  tandcShow: boolean = false;
  zoom: number = CONSTANTS.defaultMapZoom;
  // initial center position for the map
  lat: number = 0;
  lng: number = 0;


  //map
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers: any;

  page: number = 1;
  pageSize: number = 5;
  attendeesOpenState: boolean = false;
  loadingAttendees: boolean = false;
  hasMoreAttendeesRecords: boolean = true;
  bookedAttendees: Array<any> = [];
  scanAttendees: Array<any> = [];
  loadingBookedAttendees: boolean = false;
  loadingScanAttendees: boolean = false;
  hasMoreBookedAttendeesRecords: boolean = true;
  hasMoreScanAttendeesRecords: boolean = true;
  paging: any;
  isExportLoading: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private _eventService: EventService,
    private _router: Router,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    //Get current location
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    // });

    this.eventId = this._activatedRoute.snapshot.paramMap.get('index');
    let param = {
      eventid: this.eventId
    }

    this._eventService.eventById(param).subscribe((result: any) => {
      if (result && result.IsSuccess) {

        this.eventByIdData = result.Data;
        setTimeout(() => {
          if (this.eventByIdData?.accept_booking && !this.eventByIdData?.iseditable) {
            this.getAttendees();
            this.getAttendeesWithScan();
          }
          this._globalFunctions.loadAccordion();
        }, 0);

        //map value set
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: this.eventByIdData?.event_location?.location?.coordinates[1],
            lng: this.eventByIdData?.event_location?.location?.coordinates[0],
          };
        });
        this.markers = [{
          position: {
            lat: this.eventByIdData?.event_location?.location?.coordinates[1],
            lng: this.eventByIdData?.event_location?.location?.coordinates[0],
          },
          // label: {
          //   color: 'red',
          //   text: 'Marker label ',
          // },
          title: this.eventByIdData?.event_location ? this.eventByIdData?.event_location?.flat_no + ' - ' +
            this.eventByIdData?.event_location?.street_name + ', ' + this.eventByIdData?.event_location?.area_name + ', ' +
            this.eventByIdData?.event_location?.city + ', ' + this.eventByIdData?.event_location?.state : 'Location Not Found..',
          options: { animation: google.maps.Animation.BOUNCE },
        }];


        this.isLoading = false;
      } else {
        this.isLoading = false;
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.isLoading = false;
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  openImageAndVideoDialog(imagesOrVideosArr: Array<any>, isImage: boolean, companyIAndV: boolean, isSingleVideo: boolean = false): void {
    this.imagesOrVideosArr = imagesOrVideosArr;
    this.isImage = isImage;
    this.companyIAndV = companyIAndV;
    this.isSingleVideo = isSingleVideo;
    this.isOpenPopup = true;
  }

  closePop(flag: boolean = false): void {
    this.isOpenPopup = flag;
    this.cancelEventPop = false;
  }

  getAttendees(): void {
    // this.isLoading = true;
    const filterObj: any = {
      eventid: this.eventId,
      page: this.page,
      limit: this.pageSize
    };
    this._eventService.getBookedAttendeesByEventId(filterObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        //this.attendees = result.Data.docs;
        if (result.Data.docs.length === 0) {
          // No more records, set the flag to stop further API requests
          this.hasMoreBookedAttendeesRecords = false;
        } else {
          this.bookedAttendees = [...this.bookedAttendees, ...result.Data.docs];
        }
        this.loadingBookedAttendees = false;
        // this.isLoading = false;
      } else {
        // this._globalFunctions.successErrorHandling(result, this, true);
        // this.isLoading = false;
      }
    }, (error: any) => {
      // this._globalFunctions.errorHanding(error, this, true);
      // this.isLoading = false;
    });
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const container = this.elementRef.nativeElement;
    const scrollPosition = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;

    // Check if the user has scrolled to the bottom
    if (scrollPosition === maxScroll && !this.loadingAttendees && this.hasMoreAttendeesRecords) {
      this.loadMoreData();
    }
  }

  loadMoreData() {
    this.loadingAttendees = true;
    this.page++; // Increment the page number
    this.getAttendees();

  }

  getAttendeesWithScan(event: any = {}) {
    this.loadingScanAttendees = true;
    const page = event ? (event.page + 1) : 1;
    const filterObj: any = {
          eventid: this.eventId,
          page: page || 1,
          limit: event?.rows || 10
    };
    this._eventService.getAttendeesByEventId(filterObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.scanAttendees = this._globalFunctions.copyObject(result.Data.docs);
        this.paging = result.Data;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
      this.loadingScanAttendees = false;
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.loadingScanAttendees = false;
    });

  }
  toggleAccordion(event: any, index: any): void {
    const element: any = event.target;
    const panel: any = element.nextElementSibling;

    if (panel && panel.style) {
      element.classList.toggle("active");
      this.bookedAttendees[index].isActive = !this.bookedAttendees[index].isActive;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }

  exportAttendees(): void {
    if (this.isExportLoading) {
      return;
    }
    this.isExportLoading = true;
    this._eventService.exportAttendees({ eventid: this.eventId }).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        window.open(result.Data, '_blank');
        this.isExportLoading = false;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
        this.isExportLoading = false;
      }
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isExportLoading = false;
    });
  }

}

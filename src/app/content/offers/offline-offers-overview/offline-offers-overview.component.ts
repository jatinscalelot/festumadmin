import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { OffersService } from '../offers.service';
import { CONSTANTS } from 'src/app/common/constants';

@Component({
  selector: 'app-offline-offers-overview',
  templateUrl: './offline-offers-overview.component.html',
  styleUrls: ['./offline-offers-overview.component.css']
})
export class OfflineOffersOverviewComponent {

  offlineOfferId: any;
  shopId: any;
  isLoading: boolean = false;
  offlineOfferByIdData: any;
  constants: any = CONSTANTS;
  offerdesc: boolean = false;
  tAndc: boolean = false;
  isOpenPopup: boolean = false;
  isImage: boolean = false;
  companyIAndV: boolean = false;
  isSingleVideo: boolean = false;
  imagesOrVideosArr: Array<any> = [];
  cancelEventPop: boolean = false;
  showMore: boolean = false;
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
  obj: any = [];
  isExportLoading: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private offersService: OffersService,
    private _router: Router,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.offlineOfferId = this._activatedRoute.snapshot.paramMap.get('index');
    let param = {
      offerid: this.offlineOfferId
    }

    this.offersService.getOffineOfferById(param).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.offlineOfferByIdData = result.Data;
        this.obj = { url: this.offlineOfferByIdData.video };
        this.shopId = this.offlineOfferByIdData?.shopid?._id;
        setTimeout(() => {
          this.getAttendees();
          // this.getAttendeesWithScan();
          this._globalFunctions.loadAccordion();
        }, 0);
        //map value set
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: this.offlineOfferByIdData?.shopid?.location?.coordinates[1],
            lng: this.offlineOfferByIdData?.shopid?.location?.coordinates[0],
          };
        });
        this.markers = [{
          position: {
            lat: this.offlineOfferByIdData?.shopid?.location?.coordinates[1],
            lng: this.offlineOfferByIdData?.shopid?.location?.coordinates[0],
          },
          // label: {
          //   color: 'red',
          //   text: 'Marker label ',
          // },
          // title: this.offlineOfferByIdData?.shopid ? this.offlineOfferByIdData?.shopid?.flat_no + ' - ' +
          //   this.offlineOfferByIdData?.event_location?.street_name + ', ' + this.offlineOfferByIdData?.event_location?.area_name + ', ' +
          //   this.offlineOfferByIdData?.event_location?.city + ', ' + this.offlineOfferByIdData?.event_location?.state : 'Location Not Found..',
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


  getAttendees(event: any = {}) {
    const page = event ? (event.page + 1) : 1;
    const filterObj: any = {
      shopid: this.shopId,
      offlineofferid: this.offlineOfferId,
      page: page || 1,
      limit: event?.rows || 10
    };
    this.offersService.getAttendeesByShopAndOfferId(filterObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        //this.attendees = result.Data.docs;
        if (result.Data.docs.length === 0) {
          // No more records, set the flag to stop further API requests
          this.hasMoreBookedAttendeesRecords = false;
        } else {
          this.bookedAttendees = result.Data.docs;
          this.paging = result.Data;
        }
        this.loadingBookedAttendees = false;
        this.isLoading = false;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
        this.isLoading = false;
      }
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isLoading = false;
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

  exportAttendees(): void {
    if (this.isExportLoading && !this.shopId) {
      return;
    }

    this.isExportLoading = true;
    let resObj = {
      shopid: this.shopId,
      offlineofferid: this.offlineOfferId
    }
    this.offersService.exportAttendees(resObj).subscribe((result: any) => {
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

  closePop(flag: boolean = false): void {
    this.isOpenPopup = flag;
    this.cancelEventPop = false;
  }

  openImageAndVideoDialog(imagesOrVideosArr: Array<any>, isImage: boolean, companyIAndV: boolean, isSingleVideo: boolean = false): void {
    this.imagesOrVideosArr = imagesOrVideosArr;
    this.isImage = isImage;
    this.companyIAndV = companyIAndV;
    this.isSingleVideo = isSingleVideo;
    this.isOpenPopup = true;
  }

}

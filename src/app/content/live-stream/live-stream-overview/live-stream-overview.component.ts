import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { LiveStreamService } from '../live-stream.service';
import { CONSTANTS } from 'src/app/common/constants';

@Component({
  selector: 'app-live-stream-overview',
  templateUrl: './live-stream-overview.component.html',
  styleUrls: ['./live-stream-overview.component.css']
})
export class LiveStreamOverviewComponent implements OnInit {
  liveStreamId: any;
  isLoading: boolean = false;
  liveStreamByIdData: any;
  constants: any = CONSTANTS;
  isOpenPopup: boolean = false;
  isImage: boolean = false;
  companyIAndV: boolean = false;
  isSingleVideo: boolean = false;
  imagesOrVideosArr: Array<any> = [];
  cancelEventPop: boolean = false;
  showMore: boolean = false;
  tandcShow: boolean = false;
  aboutlivestream: boolean = false;

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
    private liveStreamService: LiveStreamService,
    private _router: Router,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {

    this.liveStreamId = this._activatedRoute.snapshot.paramMap.get('index');
    let param = {
      livestreamid: this.liveStreamId
    }

    this.liveStreamService.getLiveStreamById(param).subscribe((result: any) => {
      if (result && result.IsSuccess) {

        this.liveStreamByIdData = result.Data;

        setTimeout(() => {
          this.getAttendees();
        }, 0);

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
  getAttendees(event: any = {}): void {
    const page = event ? (event.page + 1) : 1;
    const filterObj: any = {
      livestreamid: this.liveStreamId,
      page: page || 1,
      limit: event?.rows || 10
    };
    this.liveStreamService.getAttendeesByLiveStreamId(filterObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        if (result.Data.docs.length === 0) {
          // No more records, set the flag to stop further API requests
          this.hasMoreBookedAttendeesRecords = false;
        } else {
          this.paging = result.Data;
          this.bookedAttendees = [...result.Data.docs];
        }
        this.loadingBookedAttendees = false;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  exportAttendees(): void {
    if (this.isExportLoading) {
      return;
    }
    this.isExportLoading = true;
    this.liveStreamService.exportAttendees({ livestreamid: this.liveStreamId }).subscribe((result: any) => {
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

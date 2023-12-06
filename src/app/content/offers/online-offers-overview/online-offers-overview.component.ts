import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { OffersService } from '../offers.service';
import { CONSTANTS } from 'src/app/common/constants';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-online-offers-overview',
  templateUrl: './online-offers-overview.component.html',
  styleUrls: ['./online-offers-overview.component.css']
})
export class OnlineOffersOverviewComponent implements OnInit {
  onlineOfferId: any;
  isLoading: boolean = false;
  onlineOfferByIdData: any;
  constants: any = CONSTANTS;
  aboutevent: boolean = false;
  isOpenPopup: boolean = false;
  isImage: boolean = false;
  companyIAndV: boolean = false;
  isSingleVideo: boolean = false;
  imagesOrVideosArr: Array<any> = [];
  cancelEventPop: boolean = false;
  showMore: boolean = false;
  tandcShow: boolean = false;
  tAndc2: boolean = false;
  tAndc1: boolean = false;
  tAndc: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private offersService: OffersService,
    private _router: Router,
    private elementRef: ElementRef,
    private _clipboard: Clipboard,) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.onlineOfferId = this._activatedRoute.snapshot.paramMap.get('index');
    let param = {
      onlineofferid: this.onlineOfferId
    }

    this.offersService.getOnlineOfferById(param).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.onlineOfferByIdData = result.Data;
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

  copyLink(copyText: any) {
    this._clipboard.copy(copyText);
    this._toastr.clear();
    this._toastr.success("Link Copied!", "Success");
  }
}

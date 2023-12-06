import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { OfflineShopService } from '../offline-shop.service';
import { CONSTANTS } from 'src/app/common/constants';

@Component({
  selector: 'app-offline-shop-overview',
  templateUrl: './offline-shop-overview.component.html',
  styleUrls: ['./offline-shop-overview.component.css']
})
export class OfflineShopOverviewComponent implements OnInit {
  offlineShopId: any;
  isLoading: boolean = false;
  aboutShop:boolean = false;
  aboutCompany:boolean=false;
  offlineShopByIdData: any;
  constants: any = CONSTANTS;
  currentDayName: any = new Date().toLocaleDateString('en-us', { weekday: 'short' });
  zoom: number = CONSTANTS.defaultMapZoom;
  // initial center position for the map
  lat: number = 0;
  lng: number = 0;
  isShopOpen:any;
  isSocialMedia:any;
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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private offlineShopService: OfflineShopService,
    private _router: Router,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.offlineShopId = this._activatedRoute.snapshot.paramMap.get('index');
    let param = {
      shopid: this.offlineShopId
    }

    this.offlineShopService.getOfflineShopById(param).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        [result.Data].map((item:any)=>{
          item.shop_days.map((days:any)=>{
            if (days.open) {
              this.isShopOpen = true;
            } else {
              this.isShopOpen = false
            }
          });
        })
        this.offlineShopByIdData = result.Data;
        //map value set
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: this.offlineShopByIdData?.location?.coordinates[1],
            lng: this.offlineShopByIdData?.location?.coordinates[0],
          };
        });
        this.markers = [{
          position: {
            lat: this.offlineShopByIdData?.location?.coordinates[1],
            lng: this.offlineShopByIdData?.location?.coordinates[0],
          },
          // label: {
          //   color: 'red',
          //   text: 'Marker label ',
          // },
          // title: this.offlineShopByIdData?.shopid ? this.offlineShopByIdData?.shopid?.flat_no + ' - ' +
          //   this.offlineShopByIdData?.event_location?.street_name + ', ' + this.offlineShopByIdData?.event_location?.area_name + ', ' +
          //   this.offlineShopByIdData?.event_location?.city + ', ' + this.offlineShopByIdData?.event_location?.state : 'Location Not Found..',
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

}

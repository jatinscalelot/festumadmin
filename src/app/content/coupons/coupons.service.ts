import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(
    private _http:HttpClient,
    private _globalFunction:GlobalFunctions
  ) { }

  getNotificationCouponsList(filter:any = {}):any{
    return this._http.post(environment.FEAppURL + 'superadmin/notificationcoupons/' , filter,this._globalFunction.getFileAuthorizationHeader());
  }

  addEditNotificationData(itemObj:any = {}):any{
    return this._http.post(environment.FEAppURL + 'superadmin/notificationcoupons/save' , itemObj,this._globalFunction.getAuthorizationHeader());
  }

  getEventBookingCouponsList(filter:any = {}){
    return this._http.post(environment.FEAppURL + 'superadmin/eventbookingcoupons/' ,filter,this._globalFunction.getFileAuthorizationHeader());
  }

  addEditEventBookingCoupons(itemObj:any = {}){
    return this._http.post(environment.FEAppURL + 'superadmin/eventbookingcoupons/save' , itemObj,this._globalFunction.getAuthorizationHeader());
  }
}

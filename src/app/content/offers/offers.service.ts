import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }

  //Offline Offers APIs

  getOfflineOfferList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopoffer', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  getOffineOfferById(OfflineOfferId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopoffer/getone', OfflineOfferId, this._globalFunctions.getAuthorizationHeader());
  }

  approveOfflineOffer(OfflineOfferId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopoffer/approve', OfflineOfferId, this._globalFunctions.getAuthorizationHeader());
  }

  disapproveOfflineOffer(OfflineOfferId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopoffer/reject', OfflineOfferId, this._globalFunctions.getAuthorizationHeader());
  }

  getAttendeesByShopAndOfferId(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopoffer/attendees', data, this._globalFunctions.getAuthorizationHeader());
  }

  exportAttendees(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopoffer/exportattendees', data, this._globalFunctions.getAuthorizationHeader());
  }


  //Online Offer APIs

  getOnlineOfferList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/onlineoffer', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  getOnlineOfferById(onlineOfferId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/onlineoffer/getone', onlineOfferId, this._globalFunctions.getAuthorizationHeader());
  }

  approveOnlineOffer(onlineOfferId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/onlineoffer/approve', onlineOfferId, this._globalFunctions.getAuthorizationHeader());
  }

  disapproveOnlineOffer(onlineOfferId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/onlineoffer/reject', onlineOfferId, this._globalFunctions.getAuthorizationHeader());
  }

}

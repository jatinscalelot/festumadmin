import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfflineShopService {

  constructor(private http: HttpClient, private _globalFunctions: GlobalFunctions) { }

  getOfflineShopList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shop', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  getOfflineShopById(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shop/getone', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  approveOfflineShop(shopId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shop/approve', shopId, this._globalFunctions.getAuthorizationHeader());
  }

  disapproveOfflineShop(shopId: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shop/reject', shopId, this._globalFunctions.getAuthorizationHeader());
  }
}

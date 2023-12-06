import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalFunctions } from '../../common/global-functions';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }

  discountList(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/discount', data, this._globalFunctions.getAuthorizationHeader());
  }

  discountById(discountId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/discount/getone', discountId, this._globalFunctions.getAuthorizationHeader());
  }

  discountAddEdit(params: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/discount/save', params, this._globalFunctions.getAuthorizationHeader());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from './../../common/global-functions';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeatingItemsService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }
  
  getSeatingItemsList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/item', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  getSeatingItemsById(itemid: any = null): any {
    return this.http.post(environment.FEAppURL + 'superadmin/item/getone', itemid, this._globalFunctions.getFileAuthorizationHeader());
  }

  addEditSeatingItem(itemsObj: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/item/save', itemsObj, this._globalFunctions.getAuthorizationHeader());
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalFunctions } from '../../common/global-functions';

@Injectable({
  providedIn: 'root'
})
export class ShopCategoryService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }

  getShopCategoryList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopcategories', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  addEditShopCategory(shopcategoriesObj: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/shopcategories/save', shopcategoriesObj, this._globalFunctions.getAuthorizationHeader());
  }
}

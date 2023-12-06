import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from './../../common/global-functions';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private http:HttpClient,
    private _globalFunction:GlobalFunctions
  ) { }

  getPlateFormList(filter:any = {}):any{
    return this.http.post(environment.FEAppURL + 'superadmin/platform',filter,this._globalFunction.getFileAuthorizationHeader());
  }

  addEditPlateForm(itemObj:any = ''):any {
    return this.http.post(environment.FEAppURL + 'superadmin/platform/save',itemObj, this._globalFunction.getAuthorizationHeader())
  } 
}

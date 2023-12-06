import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionPlanService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }
  
  getPromotionPlanList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/promotionplans', filter, this._globalFunctions.getFileAuthorizationHeader());
  }

  addEditPromtionPlan(promotionplansObj: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/promotionplans/save', promotionplansObj, this._globalFunctions.getAuthorizationHeader());
  }
}

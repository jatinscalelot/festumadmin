import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FCoinService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }

  getCoinBalance(): any {
    return this.http.get(environment.FEAppURL + 'superadmin/fcoin/coinbalance', this._globalFunctions.getFileAuthorizationHeader());
  }

  getCoinsIn(filterObj: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/fcoin/coinsin', filterObj, this._globalFunctions.getAuthorizationHeader());
  }

  getCoinsOut(filterObj: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/fcoin/coinsout', filterObj, this._globalFunctions.getAuthorizationHeader());
  }
  
  generateCoins(generateCoinsObj: any = ''): any {
    return this.http.post(environment.FEAppURL + 'superadmin/fcoin/generatecoins', generateCoinsObj, this._globalFunctions.getFileAuthorizationHeader());
  }
}

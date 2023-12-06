import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveStreamService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }
  
  getLiveStreamList(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/livestream', filter, this._globalFunctions.getAuthorizationHeader());
  }

  getLiveStreamById(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/livestream/getone', filter, this._globalFunctions.getAuthorizationHeader());
  }

  approveLiveStream(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/livestream/approve', filter, this._globalFunctions.getAuthorizationHeader());
  }

  disapproveLiveStream(filter: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/livestream/reject',filter, this._globalFunctions.getAuthorizationHeader());
  }

  getAttendeesByLiveStreamId(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/livestream/attendees', data, this._globalFunctions.getAuthorizationHeader());
  }

  exportAttendees(liveStreamId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/livestream/exportattendees', liveStreamId, this._globalFunctions.getAuthorizationHeader());
  }

}

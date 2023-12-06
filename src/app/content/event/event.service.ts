import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalFunctions } from '../../common/global-functions';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }

  //Events
  eventsList(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/event/', data, this._globalFunctions.getAuthorizationHeader());
  }

  eventById(eventId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/event/getone', eventId, this._globalFunctions.getAuthorizationHeader());
  }

  approveEvent(eventId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/event/approve', eventId, this._globalFunctions.getAuthorizationHeader());
  }

  disapproveEvent(eventId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/event/disapprove', eventId, this._globalFunctions.getAuthorizationHeader());
  }

  deleteEvent(eventId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/event/remove', eventId, this._globalFunctions.getAuthorizationHeader());
  }

  getBookedAttendeesByEventId(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventattendees/booked', data, this._globalFunctions.getAuthorizationHeader());
  }

  getAttendeesByEventId(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventattendees', data, this._globalFunctions.getAuthorizationHeader());
  }

  exportAttendees(eventId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventattendees/export', eventId, this._globalFunctions.getAuthorizationHeader());
  }

  //Event Category
  eventCategoryList(data: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventcategories/', data, this._globalFunctions.getAuthorizationHeader());
  }

  eventCategoryById(categoryId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventcategories/getone', categoryId, this._globalFunctions.getAuthorizationHeader());
  }

  eventCategoryAddEdit(params: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventcategories/save', params, this._globalFunctions.getAuthorizationHeader());
  }

  deleteEventCategory(categoryId: any = {}): any {
    return this.http.post(environment.FEAppURL + 'superadmin/eventcategories/remove', categoryId, this._globalFunctions.getAuthorizationHeader());
  }
}

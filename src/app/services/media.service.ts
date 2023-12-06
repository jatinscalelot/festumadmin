import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalFunctions } from './../common/global-functions';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient,private _globalFunctions: GlobalFunctions) { }

  // Upload Image
  uploadImage(fileObj: any): any {
    return this.http.post(environment.FEAppURL + 'superadmin/media/image', fileObj, this._globalFunctions.getFileAuthorizationHeader());
  }

  // Upload Video
  uploadVideo(fileObj: any): any {
    return this.http.post(environment.FEAppURL + 'superadmin/media/video', fileObj, this._globalFunctions.getFileAuthorizationHeader());
  }

  // Upload Banner
  uploadBanner(fileObj: any): any {
    return this.http.post(environment.FEAppURL + 'superadmin/media/banner', fileObj, this._globalFunctions.getFileAuthorizationHeader());
  }

  // Upload Document
  uploadDocument(fileObj: any): any {
    return this.http.post(environment.FEAppURL + 'superadmin/media/document', fileObj, this._globalFunctions.getFileAuthorizationHeader());
  }
}

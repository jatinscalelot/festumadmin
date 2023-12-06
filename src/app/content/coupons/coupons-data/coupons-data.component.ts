import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditNotificationCouponsComponent } from '../add-edit-notification-coupons/add-edit-notification-coupons.component';
import { AddEditEventbookingCouponsComponent } from '../add-edit-eventbooking-coupons/add-edit-eventbooking-coupons.component';
import { CouponsService } from '../coupons.service';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { result } from 'lodash';

export interface notificationCouponsDataElement {
  position: number;
  description: string;
  code: number;
  amount: number;
  percentage:number;
  limit:number;
  expiry_date:string;
  expiry_time:string;
  status:boolean;
  actions:string;
}
export interface eventBookingDataElement {
  position: number;
  description: string;
  code: number;
  amount: number;
  percentage:number;
  limit:number;
  expiry_date:string;
  expiry_time:string;
  status:boolean;
  actions:string;
}
@Component({
  selector: 'app-coupons-data',
  templateUrl: './coupons-data.component.html',
  styleUrls: ['./coupons-data.component.css']
})
export class CouponsDataComponent implements OnInit {

  isTableLoading:boolean = false;
  datashowNumber: any[] = [10, 20, 50];
  
  searchNotificationCouponsData:any;
  totalNotificationCouponsData:any;
  totalNotificationCouponsDataList:any;
  NOTIFICATION_COUPONS: notificationCouponsDataElement[] = [];

  searchEventBookingCoupons:any;
  totalEventBookingCoupons:any;
  totalEventBookingCouponsList:any;
  EVENT_BOOKING_COUPONS:eventBookingDataElement [] = []

  notificationCouponsColumns:string[] = ['select','code','description','amount','percentage','limit','expiry_date','expiry_time','status','actions'];
  notification_coupons_data = new MatTableDataSource<notificationCouponsDataElement>(this.NOTIFICATION_COUPONS);
  selection = new SelectionModel<notificationCouponsDataElement>(true,[]);

  eventBookingCouponsColumns:string[] = ['select','code','description','amount','percentage','limit','expiry_date','expiry_time','status','actions'];
  eventBokking_couponds_data = new MatTableDataSource<eventBookingDataElement>(this.EVENT_BOOKING_COUPONS);
  eventBooking_selection = new SelectionModel<eventBookingDataElement>(true,[]);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.notification_coupons_data.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.notification_coupons_data.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: notificationCouponsDataElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor(
    private _matDialog:MatDialog,
    private _couponsServices:CouponsService,
    private _globalFunctions:GlobalFunctions
  ){}

  ngOnInit():void{
    this.getNotificationCounpons();
    this.getEventBookingCoupons();
  }

  onKeySearch(event:any){
    this.searchNotificationCouponsData = event.target.value;
    this.getNotificationCounpons();
  }
  getNotificationCounpons(event:any = ''){
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page:page || '1',
      limit:event.pageSize || '10',
      search:this.searchNotificationCouponsData
    }
    this._couponsServices.getNotificationCouponsList(filter).subscribe((result:any)=>{
      if(result && result.IsSuccess){
        this.totalNotificationCouponsData = result.Data.totalDocs;
        this.totalNotificationCouponsDataList = result.Data.totalnotificationcoupons;
        this.NOTIFICATION_COUPONS = result.Data.docs;
        this.notification_coupons_data = new MatTableDataSource<notificationCouponsDataElement>(this.NOTIFICATION_COUPONS);
        this.isTableLoading = false;
      } else {
        this.isTableLoading = false;
        this._globalFunctions.successErrorHandling(result,this,true);
      }
    },(error:any)=>{
      this.isTableLoading = false;
      this._globalFunctions.errorHanding(error,this,true)
    }
    )
  }

  onEventBookingCouponsSearch(event:any){
    this.searchEventBookingCoupons = event.target.value;
    this.getEventBookingCoupons();
  }
  getEventBookingCoupons(event:any = ''){
    this.isTableLoading = true;
    const Page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page:Page || '1',
      limit:event.pageSize || '10',
      search:this.searchEventBookingCoupons
    }
    this._couponsServices.getEventBookingCouponsList(filter).subscribe((result:any)=>{
      if(result && result.IsSuccess){
        this.totalEventBookingCoupons = result.Data.totalDocs;
        this.totalEventBookingCouponsList = result.Data.totaleventbookingcoupons;
        this.EVENT_BOOKING_COUPONS = result.Data.docs;
        this.eventBokking_couponds_data = new MatTableDataSource<eventBookingDataElement>(this.EVENT_BOOKING_COUPONS);
        this.isTableLoading = false;
      } else {
        this.isTableLoading = false;
        this._globalFunctions.successErrorHandling(result,this,true);
      }
    },(error:any)=>{
      this.isTableLoading = false;
      this._globalFunctions.errorHanding(error,this,true)
    }
    )
  }

  addNotificationCoupons(){
    const dialog = this._matDialog.open(AddEditNotificationCouponsComponent,{
      width:'900px',
      data:[
        {result:null},
        {btnName:'Add'}
      ]
    });
    dialog.afterClosed().subscribe((result) => {
      this.getNotificationCounpons();
    })
  }

  editNotificationCoupons(event:any,resultData:any){
    event.stopPropagation();
    const dialog = this._matDialog.open(AddEditNotificationCouponsComponent,{
      width:'900px',
      data:[
        {result:resultData},
        {btnName:'Edit'}
      ]
    });
    dialog.afterClosed().subscribe((result) => {
      this.getNotificationCounpons();
    })
  }

  addEventBookingCoupons(){
    const dialog = this._matDialog.open(AddEditEventbookingCouponsComponent,{
      width:'900px',
      data:[
        {result:null},
        {btnName:'Add'}
      ]
    });
    dialog.afterClosed().subscribe((result)=>{
      this.getEventBookingCoupons();
    })
  }

  editEventBookingCoupons(event:any,resultData:any){
    event.stopPropagation();
    const dialog = this._matDialog.open(AddEditEventbookingCouponsComponent,{
      width:'900px',
      data:[
        {result:resultData},
        {btnName:'Edit'}
      ]
    });
    dialog.afterClosed().subscribe((result) => {
      this.getEventBookingCoupons();
    })
  }

}

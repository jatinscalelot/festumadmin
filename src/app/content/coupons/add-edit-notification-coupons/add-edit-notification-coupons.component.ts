import { Component,OnInit,Inject,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CouponsService } from '../coupons.service';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateTime } from 'ts-luxon';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit-notification-coupons',
  templateUrl: './add-edit-notification-coupons.component.html',
  styleUrls: ['./add-edit-notification-coupons.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddEditNotificationCouponsComponent implements OnInit{
  
  addEditNotificationCoupons:any;
  @ViewChild('notificationCouponsNgForm') notificationCouponsNgForm:any;

  date: any;

  setDate(date: string) {
    // this.date = date ? date : '';
    this.addEditNotificationCoupons.expiry_date = date ? date : '';
  }

  maxTime: DateTime = DateTime.local().set({
    hour: 16,
  });
  minTime: DateTime = DateTime.local().set({
    hour: 14,
  });
  required: boolean = !1;

  @ViewChild('timepicker') timepicker: any;

  /**
   * Lets the user click on the icon in the input.
   */
  openFromIcon(timepicker: { open: () => void }) {
    if (!this.addEditNotificationCoupons.expiry_time.disabled) {
      timepicker.open();
    }
  }

  /**
   * Function to clear FormControl's value, called from the HTML template using the clear button
   *
   * @param $event - The Event's data object
   */
  onClear($event: Event) {
    this.addEditNotificationCoupons.get('expiry_time').setValue(null)
  }

  constructor(
    private _formBuilder:FormBuilder,
    private _matDialogRef:MatDialogRef<AddEditNotificationCouponsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _toastr:ToastrService,
    private _couponsServices:CouponsService,
    private _globalFunction:GlobalFunctions,
    private datePipe:DatePipe,
  ){}

  ngOnInit():void {
    this.addEditNotificationCoupons = this._formBuilder.group({
      code        :['',[Validators.required]],
      amount      :['',[Validators.required,Validators.pattern(/^[.\d]+$/)]],
      percentage  :['',[Validators.required,Validators.max(100), Validators.min(0),Validators.pattern(/^[.\d]+$/)]],
      expiry_date :['',[Validators.required,this.dateValidator]],
      expiry_time :['',[Validators.required]],
      limit       :['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      description :['',[Validators.required]],
      status      :[false,[Validators.required]],
    });
    if(this.data[0].result){
      this.setNotificationValue();
    }
  }

  dateValidator(control:any) {
    
    // // Implement your custom date validation logic here
    // const inputDate = new Date(control.value);
    // const currentDate = new Date();
    
    // if (isNaN(inputDate.getTime())) {
    //   return { invalidDate: true };
    // }

    // if (inputDate < currentDate) {
    //   return { pastDate: true };
    // }

    // // No validation errors
    // return null;

    const inputDate = new Date(control.value);

    // Check if the input date is not in the past and is a valid date
    if (isNaN(inputDate.getTime()) || inputDate < new Date()) {
      return { invalidExpiryDate: true };
    }

    // No validation errors
    return null;
  }

  get NotificationCouponsControls(){
    return this.addEditNotificationCoupons.controls;
  }

  setNotificationValue(){
    this.addEditNotificationCoupons.get('code').setValue(this.data[0].result.code);
    this.addEditNotificationCoupons.get('amount').setValue(this.data[0].result.amount);
    this.addEditNotificationCoupons.get('percentage').setValue(this.data[0].result.percentage);
    this.addEditNotificationCoupons.get('expiry_date').setValue(this.data[0].result.expiry_date);
    this.addEditNotificationCoupons.get('expiry_time').setValue(this.data[0].result.expiry_time);
    this.addEditNotificationCoupons.get('limit').setValue(this.data[0].result.limit);
    this.addEditNotificationCoupons.get('description').setValue(this.data[0].result.description);
    this.addEditNotificationCoupons.get('status').setValue(this.data[0].result.status);
  }

  OnSubmitAction(){
    if (this.addEditNotificationCoupons.invalid) {
      Object.keys(this.addEditNotificationCoupons.controls).forEach((key)=> {
        this.addEditNotificationCoupons.controls[key].touched = true;
        this.addEditNotificationCoupons.controls[key].markAsDirty();
      });
      return;
    }
    if(!this.addEditNotificationCoupons.valid){
      this._toastr.clear();
      this._toastr.error('Please enter valid data.','Oopps!');
      return;
    }
    let notificatiuonCoupons = {
      notificationcouponid:this.data[0].result ? this.data[0].result?.id : "",
      code:this.addEditNotificationCoupons.value.code,
      amount:this.addEditNotificationCoupons.value.amount,
      percentage:this.addEditNotificationCoupons.value.percentage,
      expiry_date:this.addEditNotificationCoupons.value.expiry_date ? moment(this.addEditNotificationCoupons.value.expiry_date).format('YYYY-MM-DD') : null,
      expiry_time:this.addEditNotificationCoupons.value.expiry_time,
      limit:this.addEditNotificationCoupons.value.limit,
      description:this.addEditNotificationCoupons.value.description,
      status:this.addEditNotificationCoupons.value.status
    }
    this.addEditNotificationCoupons.disable();
    this._couponsServices.addEditNotificationData(notificatiuonCoupons).subscribe((result:any)=>{
      if(result && result.IsSuccess){
        this._toastr.clear();
        this._toastr.success(result.Massage, 'Success');
        this._matDialogRef.close();
      } else {
        this.addEditNotificationCoupons.enable();
        this._globalFunction.successErrorHandling(result,this,true);
      }
    },(error:any)=>{
      this.addEditNotificationCoupons.enable();
      this._globalFunction.errorHanding(error,this,true);
    });
  }

  closeDialog(){
    this._matDialogRef.close()
  }
} 

import { Component,OnInit,Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CouponsService } from '../coupons.service';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { ToastrService } from 'ngx-toastr';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit-eventbooking-coupons',
  templateUrl: './add-edit-eventbooking-coupons.component.html',
  styleUrls: ['./add-edit-eventbooking-coupons.component.css'],
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
export class AddEditEventbookingCouponsComponent  implements OnInit{

  addEditEventBookingCoupons:any;
  @ViewChild('notificationCoupons') notificationCoupons:any;

  date: any;

  setDate(date: string) {
    this.date = date ? date : '';
  }

  constructor(
    private _formBuilder:FormBuilder,
    private _dialogRef:MatDialogRef<AddEditEventbookingCouponsComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,
    private _CouponsServices:CouponsService,
    private _globalFunctions:GlobalFunctions,
    private toastr:ToastrService
  ){}

  ngOnInit():void{
    this.addEditEventBookingCoupons = this._formBuilder.group({
      code        :['',[Validators.required]],
      amount      :['',[Validators.required,Validators.pattern(/^[.\d]+$/)]],
      percentage  :['',[Validators.required,Validators.max(100), Validators.min(0),Validators.pattern(/^[.\d]+$/)]],
      expiry_date :['',[Validators.required,this.dateValidator]],
      expiry_time :['',[Validators.required]],
      limit       :['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      description :['',[Validators.required]],
      status      :[false,[Validators.required]],
    })

    if(this.data[0].result){
      this.setEventBookingCounpons();
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

  get FormControls(){
    return this.addEditEventBookingCoupons.controls;
  }

  setEventBookingCounpons(){
    this.addEditEventBookingCoupons.get('code').setValue(this.data[0].result.code);
    this.addEditEventBookingCoupons.get('amount').setValue(this.data[0].result.amount);
    this.addEditEventBookingCoupons.get('percentage').setValue(this.data[0].result.percentage);
    this.addEditEventBookingCoupons.get('expiry_date').setValue(this.data[0].result.expiry_date);
    this.addEditEventBookingCoupons.get('expiry_time').setValue(this.data[0].result.expiry_time);
    this.addEditEventBookingCoupons.get('limit').setValue(this.data[0].result.limit);
    this.addEditEventBookingCoupons.get('description').setValue(this.data[0].result.description);
    this.addEditEventBookingCoupons.get('status').setValue(this.data[0].result.status);
  }

  onSubmitAction():void{
    if (this.addEditEventBookingCoupons.invalid) {
      Object.keys(this.addEditEventBookingCoupons.controls).forEach((key)=> {
        this.addEditEventBookingCoupons.controls[key].touched = true;
        this.addEditEventBookingCoupons.controls[key].markAsDirty();
      });
      return;
    }
    if(!this.addEditEventBookingCoupons.valid){
      this.toastr.clear()
      this.toastr.error("Please eneter valid data.","Opops!");
      return;
    }
    const eventBookingCouponsObj:any = {
      eventbookingcouponid:this.data[0].result ? this.data[0].result?.id : "",
      code:this.addEditEventBookingCoupons.value.code,
      amount:this.addEditEventBookingCoupons.value.amount,
      percentage:this.addEditEventBookingCoupons.value.percentage,
      expiry_date:this.addEditEventBookingCoupons.value.expiry_date ? moment(this.addEditEventBookingCoupons.value.expiry_date).format('YYYY-MM-DD') : null,
      expiry_time:this.addEditEventBookingCoupons.value.expiry_time,
      limit:this.addEditEventBookingCoupons.value.limit,
      description:this.addEditEventBookingCoupons.value.description,
      status:this.addEditEventBookingCoupons.value.status
    };
    this.addEditEventBookingCoupons.disable();
    this._CouponsServices.addEditEventBookingCoupons(eventBookingCouponsObj).subscribe((result:any)=>{
      if(result && result.IsSuccess){
        this.toastr.clear();
        this.toastr.success(result.Massage, 'Success');
        this._dialogRef.close();
      } else {
        this.addEditEventBookingCoupons.enable();
        this._globalFunctions.successErrorHandling(result,this,true);
      }
    }, (error:any) => {
      this.addEditEventBookingCoupons.enable();
      this._globalFunctions.errorHanding(error,this,true);
    });
  }

  

  closeDialog(){
    this._dialogRef.close();
  }
}

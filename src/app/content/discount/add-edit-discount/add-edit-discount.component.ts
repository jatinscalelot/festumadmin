import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DiscountService } from '../discount.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 
import { GlobalFunctions } from 'src/app/common/global-functions';

@Component({
  selector: 'app-add-edit-discount',
  templateUrl: './add-edit-discount.component.html',
  styleUrls: ['./add-edit-discount.component.css']
})
export class AddEditDiscountComponent implements OnInit{
  discountform: any = FormGroup;
  @ViewChild('discountNgForm') discountNgForm: any;

  constructor(
    private matDialogRef:MatDialogRef<AddEditDiscountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private discountService: DiscountService,
    private toastr: ToastrService,
    private _router: Router,
    private _globalFunctions: GlobalFunctions

  ){}

  ngOnInit(){
    this.init();
    if (this.data[0].result) {
      this.setDiscountData();
    }
  }

  init(): void {
    this.discountform = this.fb.group({
      discountname: [null, Validators.required],
      discounttype: ['discount_on_total_bill', Validators.required],
      description: [null, Validators.required],
      discount: [null, Validators.required],
      status: [false, Validators.required],
      tandc: [null, Validators.required],
    });
  }

  get f() {
    return this.discountform.controls;
  }

  setDiscountData() {
    this.discountform.get('discountname').setValue(this.data[0].result.discountname);
    this.discountform.get('discounttype').setValue(this.data[0].result.discounttype);
    this.discountform.get('description').setValue(this.data[0].result.description);
    this.discountform.get('discount').setValue(this.data[0].result.discount);
    this.discountform.get('status').setValue(this.data[0].result.status);
    this.discountform.get('tandc').setValue(this.data[0].result.tandc);
  }

  onSubmitAction(): void {
    if (!this.discountform.valid) {
      this.toastr.clear();
      this.toastr.error("Please enter valid data.", 'Oops!');
      return;
    }

    const discountDataObj: any = {
      discountid: this.data[0].result ? this.data[0].result?.id : "",
      discountname: this.discountform.value.discountname,
      discounttype: this.discountform.value.discounttype,
      description: this.discountform.value.description,
      discount: this.discountform.value.discount,
      status: this.discountform.value.status,
      tandc: this.discountform.value.tandc
    };
    this.discountform.disable();
    this.discountService.discountAddEdit(discountDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.clear();
        this.toastr.success(result.Message, 'Success');
        this.matDialogRef.close();
      } else {
        this.discountform.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.discountform.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  closeDailog(){
    this.matDialogRef.close()
  }
}


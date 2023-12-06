import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PromotionPlanService } from '../promotion-plan.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 
import { GlobalFunctions } from 'src/app/common/global-functions';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit-premotion-plan',
  templateUrl: './add-edit-premotion-plan.component.html',
  styleUrls: ['./add-edit-premotion-plan.component.css']
})
export class AddEditPremotionPlanComponent implements OnInit {
  promotionPlanForm: any = FormGroup;
  @ViewChild('promotionPlanNgForm') promotionPlanNgForm: any;

  constructor(
    private matDialogRef:MatDialogRef<AddEditPremotionPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private promotionPlanService: PromotionPlanService,
    private toastr: ToastrService,
    private _router: Router,
    private _globalFunctions: GlobalFunctions
  ){}

  ngOnInit(){
    this.init();
    if (this.data[0].result) {
      this.setPromotionPlan();
    }
  }

  init(): void {
    this.promotionPlanForm = this.fb.group({
      planname            : ['', [Validators.required]],
      description         : ['', [Validators.required]],
      notification_amount : ['', [Validators.required]],
      sms_amount          : ['', [Validators.required]],
      email_amount        : ['', [Validators.required]],
      combo_amount        : ['', [Validators.required]],
      total_users         : ['', [Validators.required]],
      status              : [false,[Validators.required]],
    });
  }

  get f() {
    return this.promotionPlanForm.controls;
  }
 
  setPromotionPlan() {
    this.promotionPlanForm.get('planname').setValue(this.data[0].result.planname);
    this.promotionPlanForm.get('description').setValue(this.data[0].result.description);
    this.promotionPlanForm.get('notification_amount').setValue(this.data[0].result.notification_amount);
    this.promotionPlanForm.get('sms_amount').setValue(this.data[0].result.sms_amount);
    this.promotionPlanForm.get('email_amount').setValue(this.data[0].result.email_amount);
    this.promotionPlanForm.get('combo_amount').setValue(this.data[0].result.combo_amount);
    this.promotionPlanForm.get('total_users').setValue(this.data[0].result.total_users);
    this.promotionPlanForm.get('status').setValue(this.data[0].result.status);
  }

  onSubmitAction(): void {
    if (!this.promotionPlanForm.valid) {
      this.toastr.clear();
      this.toastr.error("Please enter valid data.", 'Oops!');
      return;
    }

    const discountDataObj: any = {
      planid: this.data[0].result ? this.data[0].result?.id : "",
      planname: this.promotionPlanForm.value.planname,
      description: this.promotionPlanForm.value.description,
      notification_amount: this.promotionPlanForm.value.notification_amount,
      sms_amount: this.promotionPlanForm.value.sms_amount,
      email_amount: this.promotionPlanForm.value.email_amount,
      combo_amount: this.promotionPlanForm.value.combo_amount,
      total_users: this.promotionPlanForm.value.total_users,
      status: this.promotionPlanForm.value.status
    };
    this.promotionPlanForm.disable();
    this.promotionPlanService.addEditPromtionPlan(discountDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.clear();
        this.toastr.success(result.Message, 'Success');
        this.matDialogRef.close();
      } else {
        this.promotionPlanForm.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.promotionPlanForm.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  closeDialog(){
    this.matDialogRef.close()
  }

}

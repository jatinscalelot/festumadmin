import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../event.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalFunctions } from 'src/app/common/global-functions';

@Component({
  selector: 'app-add-edit-eventcategory',
  templateUrl: './add-edit-eventcategory.component.html',
  styleUrls: ['./add-edit-eventcategory.component.css']
})
export class AddEditEventcategoryComponent {

  eventCategoryform: any = FormGroup;
  @ViewChild('eventCategoryNgForm') eventCategoryNgForm: any;

  constructor(public dialogRef: MatDialogRef<AddEditEventcategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private eventService: EventService,
    private toastr: ToastrService,
    private _router: Router,
    private _globalFunctions: GlobalFunctions) { }

  ngOnInit() {
    this.init();
    if (this.data[0].result) {
      this.setCategoryData();
    }
  }
  
  init(): void {
    this.eventCategoryform = this.fb.group({
      categoryname: [null, Validators.required],
      description: [null, Validators.required],
      event_type: [null, Validators.required],
      status: [true, Validators.required]
    });
  }

  get f() {
    return this.eventCategoryform.controls;
  }


  setCategoryData() {
    this.eventCategoryform.get('categoryname').setValue(this.data[0].result.categoryname);
    this.eventCategoryform.get('description').setValue(this.data[0].result.description);
    this.eventCategoryform.get('event_type').setValue(this.data[0].result.event_type);
    this.eventCategoryform.get('status').setValue(this.data[0].result.status);
  }


  onSubmitAction(): void {
    if (!this.eventCategoryform.valid) {
      return;
    }

    const categoiryDataObj: any = {
      categoryid: this.data[0].result ? this.data[0].result?.id : "",
      categoryname: this.eventCategoryform.value.categoryname,
      description: this.eventCategoryform.value.description,
      event_type: this.eventCategoryform.value.event_type,
      status: this.eventCategoryform.value.status
    };
    this.eventCategoryform.disable();
    this.eventService.eventCategoryAddEdit(categoiryDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.success(result.Message, 'Success');
        this.dialogRef.close();
      } else {
        this.eventCategoryform.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.eventCategoryform.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}

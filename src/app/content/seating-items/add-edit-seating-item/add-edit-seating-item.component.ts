import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SeatingItemsService } from '../seating-items.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { MediaService } from 'src/app/services/media.service';
import { CONSTANTS } from './../../../common/constants';


@Component({
  selector: 'app-add-edit-seating-item',
  templateUrl: './add-edit-seating-item.component.html',
  styleUrls: ['./add-edit-seating-item.component.css']
})
export class AddEditSeatingItemComponent implements OnInit {

  seatingItemform: any = FormGroup;
  @ViewChild('seatingItemNgForm') seatingItemNgForm: any;
  selectedItemImg: any;
  constants: any = CONSTANTS;

  constructor(
    private matDialogRef: MatDialogRef<AddEditSeatingItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private seatingItemsService: SeatingItemsService,
    private toastr: ToastrService,
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.init();
    if (this.data[0].result) {
      this.setSeatingItemData();
    }
  }

  init(): void {
    this.seatingItemform = this.fb.group({
      itemname: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
      itemimage: ['', Validators.required],
      description: ['', Validators.required],
      isonlyperperson: [false, Validators.required],
      status: [false, Validators.required]
    });
  }

  setSeatingItemData() {
    this.selectedItemImg = this.data[0].result.itemimage ? this.data[0].result.itemimage : '';
    this.seatingItemform.get('itemimage').setValue(this.data[0].result.itemimage);
    this.seatingItemform.get('itemname').setValue(this.data[0].result.itemname);
    this.seatingItemform.get('description').setValue(this.data[0].result.description);
    this.seatingItemform.get('isonlyperperson').setValue(this.data[0].result.isonlyperperson);
    this.seatingItemform.get('status').setValue(this.data[0].result.status);
  }


  onSubmitAction(): void {
    if (!this.seatingItemform.valid) {
      this.toastr.clear();
      this.toastr.error("Please enter valid data.", 'Oops!');
      return;
    }

    const seatingDataObj: any = {
      itemid: this.data[0].result ? this.data[0].result?.id : "",
      itemname: this.seatingItemform.value.itemname,
      itemimage: this.seatingItemform.value.itemimage,
      description: this.seatingItemform.value.description,
      isonlyperperson: this.seatingItemform.value.isonlyperperson,
      status: this.seatingItemform.value.status,
    };
    this.seatingItemform.disable();
    this.seatingItemsService.addEditSeatingItem(seatingDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.clear();
        this.toastr.success(result.Message, 'Success');
        this.matDialogRef.close();
      } else {
        this.seatingItemform.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.seatingItemform.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  get f() {
    return this.seatingItemform.controls;
  }


  uploadItemImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileObj: any = new FormData();
      fileObj.append('file', file);
      this.mediaService.uploadImage(fileObj).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.selectedItemImg = result.Data.url;
          const itemImageFormControl = this.seatingItemform.get('itemimage');
          itemImageFormControl.setValue(result.Data.url);
          this.toastr.clear();
          this.toastr.success(result.Message, 'Success');
        } else {
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this._globalFunctions.errorHanding(error, this, true);
      });
    }
  }

  removeAvatar(): void {
    // Get the form control for 'avatar'
    const itemImageFormControl = this.seatingItemform.get('itemimage');
    // Set the avatar as null
    itemImageFormControl.setValue(null);
    // Update the contact
    this.selectedItemImg = null;
  }

  closeDailog() {
    this.matDialogRef.close();
  }
}


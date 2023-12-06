import { Component,Inject,OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlatformService } from '../platform.service';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { MediaService } from 'src/app/services/media.service';
import { CONSTANTS } from 'src/app/common/constants';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-platform-data',
  templateUrl: './add-edit-platform-data.component.html',
  styleUrls: ['./add-edit-platform-data.component.css']
})
export class AddEditPlatformDataComponent implements OnInit{
  platformForm:any = FormGroup;
  @ViewChild('platFormNgForm') platFormNgForm: any;
  selectedImage:any;
  constants:any = CONSTANTS;

  constructor(
    private _formBuilder:FormBuilder,
    private _dialogRef:MatDialogRef<AddEditPlatformDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _plaFormServices:PlatformService,
    private _globalFunctions:GlobalFunctions,
    private mediaservices:MediaService,
    private toastr:ToastrService
  ){}

  ngOnInit(): void {
    this.init();
    if(this.data[0].result){
      this.setPlatFormData();
    }
  }
  
  init():void{
    this.platformForm = this._formBuilder.group({
      name          :['',[Validators.required]],
      platformimage :['',[Validators.required]],
      status        :[false,[Validators.required]],
      description   :['',[Validators.required]],
    })
  } 

  setPlatFormData() {
    this.selectedImage = this.data[0].result.platformimage ? this.data[0].result.platformimage : '';
    this.platformForm.get('name').setValue(this.data[0].result.name);
    this.platformForm.get('platformimage').setValue(this.data[0].result.platformimage);
    this.platformForm.get('status').setValue(this.data[0].result.status);
    this.platformForm.get('description').setValue(this.data[0].result.description);
  }

  onSubmitAction(): void {
    if (!this.platformForm.valid) {
      this.toastr.clear();
      this.toastr.error("Please enter valid data.", 'Oops!');
      return;
    }

    const platFormDataObj: any = {
      platformid: this.data[0].result ? this.data[0].result?.id : "",
      name: this.platformForm.value.name,
      platformimage: this.platformForm.value.platformimage,
      status: this.platformForm.value.status,
      description: this.platformForm.value.description,
    };
    this.platformForm.disable();
    this._plaFormServices.addEditPlateForm(platFormDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.clear();
        this.toastr.success(result.Message, 'Success');
        this._dialogRef.close();
      } else {
        this.platformForm.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.platformForm.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  get f() {
    return this.platformForm.control;
  }

  uploadItemImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileObj: any = new FormData();
      fileObj.append('file', file);
      this.mediaservices.uploadImage(fileObj).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.selectedImage = result.Data.url;
          const itemImageFormControl = this.platformForm.get('platformimage');
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
    const itemImageFormControl = this.platformForm.get('platformimage');
    // Set the avatar as null
    itemImageFormControl.setValue(null);
    // Update the contact
    this.selectedImage = null;
  }


  closePlatformData(){
    this._dialogRef.close()
  }

  imageOnError(event:any) {
    event.target.src = this.constants.defaultImage;
  }

}

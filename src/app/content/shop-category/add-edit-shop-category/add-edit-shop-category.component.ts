import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShopCategoryService } from '../shop-category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 
import { GlobalFunctions } from 'src/app/common/global-functions';

@Component({
  selector: 'app-add-edit-shop-category',
  templateUrl: './add-edit-shop-category.component.html',
  styleUrls: ['./add-edit-shop-category.component.css']
})
export class AddEditShopCategoryComponent implements OnInit {
  shopCategoryForm: any = FormGroup;
  @ViewChild('shopCategoryNgForm') shopCategoryNgForm: any;

  constructor(
    private matDialogRef:MatDialogRef<AddEditShopCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private shopCategoryService: ShopCategoryService,
    private toastr: ToastrService,
    private _router: Router,
    private _globalFunctions: GlobalFunctions
  ){}

  ngOnInit(){
    this.init();
    if (this.data[0].result) {
      this.setShopCategoryData();
    }
  }

  init(): void {
    this.shopCategoryForm = this.fb.group({
      categoryname: [null, Validators.required],
      description: [null, Validators.required],
      status: [false, Validators.required],
    });
  }

  get f() {
    return this.shopCategoryForm.controls;
  }

  setShopCategoryData() {
    this.shopCategoryForm.get('categoryname').setValue(this.data[0].result.categoryname);
    this.shopCategoryForm.get('description').setValue(this.data[0].result.description);
    this.shopCategoryForm.get('status').setValue(this.data[0].result.status);
  }

  onSubmitAction(): void {
    if (!this.shopCategoryForm.valid) {
      this.toastr.clear();
      this.toastr.error("Please enter valid data.", 'Oops!');
      return;
    }

    const categoryDataObj: any = {
      categoryid: this.data[0].result ? this.data[0].result?.id : "",
      categoryname: this.shopCategoryForm.value.categoryname,
      description: this.shopCategoryForm.value.description,
      status: this.shopCategoryForm.value.status,
    };
    this.shopCategoryForm.disable();
    this.shopCategoryService.addEditShopCategory(categoryDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.clear();
        this.toastr.success(result.Message, 'Success');
        this.matDialogRef.close();
      } else {
        this.shopCategoryForm.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.shopCategoryForm.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  closeDailog(){
    this.matDialogRef.close()
  }

}

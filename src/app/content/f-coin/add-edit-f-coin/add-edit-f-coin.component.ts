import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FCoinService } from '../f-coin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalFunctions } from 'src/app/common/global-functions';

@Component({
  selector: 'app-add-edit-f-coin',
  templateUrl: './add-edit-f-coin.component.html',
  styleUrls: ['./add-edit-f-coin.component.css']
})
export class AddEditFCoinComponent implements OnInit {
  fCoinform: any = FormGroup;
  @ViewChild('fCoinNgForm') fCoinNgForm: any;

  constructor(
    private matDialogRef: MatDialogRef<AddEditFCoinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fCoinService: FCoinService,
    private toastr: ToastrService,
    private _router: Router,
    private _globalFunctions: GlobalFunctions
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.fCoinform = this.fb.group({
      transaction_reference_id: ['', [Validators.required]],
      chequeno: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
      ifsc_code: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      coin_amount: ['', [Validators.required]],
      description: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      document_file: [''],
    });
  }

  get f() {
    return this.fCoinform.controls;
  }

  calculateCoinAmount(): void {
    const amount = this.fCoinform?.get('amount')?.value || 0;
    this.fCoinform.get('coin_amount').setValue((amount || 0) * 25);
  }

  // checkFile(files: any) {
  //   if (files.currentTarget.files.length > 0) {
  //     let ext = files.currentTarget?.files[0]?.name.split('.')[1].toString();

  //     if (ext == "pdf" || ext == "jpeg" || ext == "png") {
  //       files.clear();
  //     } else {
  //       this.toastr.clear();
  //       this.toastr.error("File must be PDF or Image.", "Oops!");
  //       return;
  //     }
  //   }
  // }

  onSubmitAction(): void {
    if (!this.fCoinform.valid) {
      this.toastr.clear();
      this.toastr.error("Please enter valid data.", 'Oops!');
      return;
    }

    const preparedItemsObj: any = this.prepareItemsObj(this.fCoinform.value);
    this.fCoinform.disable();
    this.fCoinService.generateCoins(preparedItemsObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.toastr.clear();
        this.toastr.success(result.Message, 'Success');
        this.matDialogRef.close();
      } else {
        this.fCoinform.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.fCoinform.enable();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  prepareItemsObj(generateCoinObj: any): any {
    let coinDataObj = new FormData();
    for (const key in generateCoinObj) {
      if (key !== 'document_file') {
        coinDataObj.append(key, generateCoinObj[key]);
      }
    }

    const documentInput: any = document.getElementById('upload_type');
    const documentFile = documentInput.files[0];
    if (documentFile !== undefined) {
      coinDataObj.append('file', documentFile);
    }

    return coinDataObj;
  }

  closeDialog() {
    this.matDialogRef.close();
  }
}

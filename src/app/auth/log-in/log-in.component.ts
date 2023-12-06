import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { SnotifyService } from 'ng-snotify';
import {ToastrService} from 'ngx-toastr'
import { GlobalFunctions } from '../../common/global-functions';
import { AuthService } from '../auth.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  @ViewChild('logInNgForm') logInNgForm: any;
  logInForm: any=FormGroup;

  constructor(
    // private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private toastr:ToastrService,
    private _authService:AuthService
  ) {

  }

  ngOnInit(){
    localStorage.clear();
    this.logInForm = this._formBuilder.group({
      adminid: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  validate(): boolean {
    let flag: boolean = true;
    const errorFields: any = [];
    if (!this.logInForm.value.adminid || this.logInForm.value.adminid === "") {
      // this._sNotify.error('Email or mobile is required!', 'Oops!');

      errorFields.push('Username');
      flag = false;
      // return false;
    }
    if (!this.logInForm.value.password || this.logInForm.value.password === "") {
      // this._sNotify.error('Password is required!', 'Oops!');
      errorFields.push('Password');
      flag = false;
      // return false;
    }
    if (!flag) {
      let errorString: string = '';
      errorString = errorFields.join(' & ');
      this.toastr.error(errorString + ' must be filled!', 'Oops!');
    }
    return flag;
    // return true;
  }

  logIn():void{
    if (!this.validate()) {
      return;
    }
    const loginDataObj: any = {
      adminid: this.logInForm.value.adminid.toString(),
      password: this.logInForm.value.password
    };
    this.logInForm.disable();
    this._authService.logIn(loginDataObj).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        localStorage.setItem('accessToken', result.Data.token);
        this.toastr.success(result.Message, 'Success');
        this._router.navigate(['dashboard']);
      } else {
        this.logInForm.enable();
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.logInForm.enable();
      this.logInNgForm.resetForm();
      this._globalFunctions.errorHanding(error, this, true);
    });
  }
}

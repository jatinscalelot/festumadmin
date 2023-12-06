import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { FCoinService } from '../f-coin.service';
import { AddEditFCoinComponent } from '../add-edit-f-coin/add-edit-f-coin.component';
import { CONSTANTS } from 'src/app/common/constants';

export interface fCoinInElement {
  transaction_reference_id: number;
  chequeno: number;
  bank_name: string;
  ifsc_code: string;
  amount: number;
  coin_amount: number;
  timestamp: string;
  created_by: string;
  document_file: string;
}


export interface fCoinOutElement {
  transaction_type:string;
  receiver_sender_name:string;
  refer_form:string;
  refer_to:string;
  f_coins:number;
  timestamp:string;
}


@Component({
  selector: 'app-f-coin-data',
  templateUrl: './f-coin-data.component.html',
  styleUrls: ['./f-coin-data.component.css']
})
export class FCoinDataComponent implements OnInit{
  totalFCoinBalance:any;
  F_COIN_IN_DATA: fCoinInElement[] = [
  ];
  F_COIN_OUT_DATA: fCoinOutElement[] = [
  ];
  isTableLoading: boolean = false;
  constants: any = CONSTANTS;

  datashowNumber: any[] = [10, 20, 50];
  totalFCoinInData: any;
  searchFCoinIn: any;
  displayedColumns: string[] = ['select','transaction_reference_id','chequeno','bank_name','ifsc_code','amount','coin_amount','timestamp','created_by','document_file'];
  fCoinInData = new MatTableDataSource<fCoinInElement>(this.F_COIN_IN_DATA);
  selection = new SelectionModel<fCoinInElement>(true, []);
  @ViewChild(MatSort) fCoinInSort!: MatSort;

  totalFCoinOutData: any;
  searchFCoinOut: any;
  displayColumOfFCoinOut: string[] = ['select', 'transaction_type','receiver_sender_name','refer_form','refer_to','f_coins','timestamp']
  fCoinOutData = new MatTableDataSource<fCoinOutElement>(this.F_COIN_OUT_DATA);
  fCoinOutSelection = new SelectionModel<fCoinOutElement>(true, []);
  @ViewChild(MatSort) fCoinOutSort!: MatSort;


  constructor(
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private fCoinService: FCoinService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.fCoinService.getCoinBalance().subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalFCoinBalance = result.Data?.fcoins;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
    });

    this.getFCoinInData();
    this.getFCoinOutData();
  }

  onKeySearch(event: any, type: any) { // without type info
    if (type == "fCoinIn") {
      this.searchFCoinIn = event.target.value;
      this.getFCoinInData();
    } else {
      this.searchFCoinOut = event.target.value;
      this.getFCoinOutData();
    }

  }

  getFCoinInData(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchFCoinIn
    };

    this.fCoinService.getCoinsIn(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalFCoinInData = result.Data.totalDocs;
        result.Data.docs.map((item: any) => {
          item.created_by = item.createdBy ? item.createdBy?.name : "";
        });
        this.F_COIN_IN_DATA = result.Data.docs;
        this.fCoinInData = new MatTableDataSource<fCoinInElement>(this.F_COIN_IN_DATA);
        this.fCoinInData.sort = this.fCoinInSort;
        this.isTableLoading = false;
      } else {
        this.isTableLoading = false;
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.isTableLoading = false;
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  getFCoinOutData(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchFCoinOut
    };

    this.fCoinService.getCoinsOut(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalFCoinOutData = result.Data.totalDocs;
        result.Data.docs.map((item: any) => {
          item.receiver_sender_name = item.receiver_id ? item.receiver_id?.name : item.sender_id?.name;
          item.refer_form = item.refer_data?.from_refer ? item.refer_data?.from_refer?.name : '';
          item.refer_to = item.refer_data?.from_refer ? item.refer_data?.from_refer?.name : '';
        });
        this.F_COIN_OUT_DATA = result.Data.docs;
        this.fCoinOutData = new MatTableDataSource<fCoinOutElement>(this.F_COIN_OUT_DATA);
        this.fCoinOutData.sort = this.fCoinOutSort;
        this.isTableLoading = false;
      } else {
        this.isTableLoading = false;
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.isTableLoading = false;
      this._globalFunctions.errorHanding(error, this, true);
    });
  }

  addEditFCoin(){
    const dialogRef = this.dialog.open(AddEditFCoinComponent,{
      width:'900px',
      disableClose:true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getFCoinInData();
    })
  }
  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length && this.selection.selected.length;
    const numRows = this.fCoinInData.data.length && this.fCoinInData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.fCoinInData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: fCoinInElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.chequeno + 1}`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedForFCoinOut() {
    const numSelected = this.fCoinOutSelection.selected.length && this.fCoinOutSelection.selected.length;
    const numRows = this.fCoinOutData.data.length && this.fCoinInData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRowsForFCoinOut() {
    if (this.isAllSelected()) {
      this.fCoinOutSelection.clear();
      return;
    }

    this.fCoinOutSelection.select(...this.fCoinOutData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabeForFCoinOut(row?: fCoinOutElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.fCoinOutSelection.isSelected(row) ? 'deselect' : 'select'} row ${row.transaction_type + 1}`;
  }

}

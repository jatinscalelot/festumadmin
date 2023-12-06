import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { DiscountService } from '../discount.service';
import { AddEditDiscountComponent } from '../add-edit-discount/add-edit-discount.component';


export interface DiscountElement {
  discountname: string;
  discounttype: number;
  description: string;
  discount: number;
  status: boolean;
  tandc: string;
  action: any;
}



@Component({
  selector: 'app-discount-data',
  templateUrl: './discount-data.component.html',
  styleUrls: ['./discount-data.component.css']
})
export class DiscountDataComponent implements OnInit, OnChanges {
  isTableLoading: boolean = false;
  DISCOUNT_DATA: DiscountElement[] = [
  ];
  totalDiscountData: any;
  datashowNumber: any[] = [10, 20, 50];
  searchDiscount: any;
  displayedColumns: string[] = ['select', 'discountname', 'discounttype', 'description', 'discount', 'tandc', 'status', 'action'];
  discountData = new MatTableDataSource<DiscountElement>(this.DISCOUNT_DATA);
  selection = new SelectionModel<DiscountElement>(true, []);
  name: string = "";
  @ViewChild(MatSort) discountSort!: MatSort;

  constructor(
    private matDailog: MatDialog,
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private _discountService: DiscountService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getDiscount();
    this.discountData.sort = this.discountSort;
  }

  ngOnChanges() {
    setTimeout(() => {
      this.discountData.sort = this.discountSort;
    })

  }

  onKeySearch(event: any) { // without type info
    this.searchDiscount = event.target.value;
    this.getDiscount();
  }

  getDiscount(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchDiscount,
      sortfield: "_id",
      sortoption: -1
    };

    this._discountService.discountList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalDiscountData = result.Data.totalDocs;
        this.DISCOUNT_DATA = result.Data.docs;
        this.discountData = new MatTableDataSource<DiscountElement>(this.DISCOUNT_DATA);
        this.discountData.sort = this.discountSort;
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

  editDiscount(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(AddEditDiscountComponent, {
      width: '700px',
      data: [{ result: resData },
      { btnName: "Edit" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getDiscount();
    });
  }


  addDiscount() {
    const dialogRef = this.dialog.open(AddEditDiscountComponent, {
      width: '700px',
      data: [{ result: null },
      { btnName: "Add" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getDiscount();
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.discountData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.discountData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DiscountElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.discountname + 1}`;
  }

}

import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditPlatformDataComponent } from '../add-edit-platform-data/add-edit-platform-data.component';
import { PlatformService } from '../platform.service';
import { CONSTANTS } from 'src/app/common/constants';
import { GlobalFunctions } from 'src/app/common/global-functions';

export interface platFormDataList {
  name: string;
  item_img: string;
  description: string;
  position: number;
  status: boolean;
  action: string;
}

@Component({
  selector: 'app-platform-data',
  templateUrl: './platform-data.component.html',
  styleUrls: ['./platform-data.component.css']
})
export class PlatformDataComponent implements OnInit {

  isTableLoading:boolean=false;
  searchPlatForm: any;
  totalPlatFormData:any;
  dataShowNumber:any[] = [10,20,50];
  PLATFORM_DATA: platFormDataList[] = [];
  displayedColumns: string[] = ['select', 'item_img', 'name', 'description', 'status', 'action'];
  plateFormData = new MatTableDataSource<platFormDataList>(this.PLATFORM_DATA);
  selection = new SelectionModel<platFormDataList>(true, []);
  constants: any = CONSTANTS;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.plateFormData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.plateFormData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: platFormDataList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor(
    private _dialog: MatDialog,
    private _plateFormServices: PlatformService,
    private _globalFunction: GlobalFunctions
  ) { }

  ngOnInit(): void {
    this.getPlatFormData();
  }

  onKeySearch(event: any) {
    this.searchPlatForm = event.target.value;
    this.getPlatFormData();
  }

  getPlatFormData(event: any = '') {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchPlatForm
    }
    this._plateFormServices.getPlateFormList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalPlatFormData = result.Data.totalDocs;
        this.PLATFORM_DATA = result.Data.docs;
        this.plateFormData = new MatTableDataSource<platFormDataList>(this.PLATFORM_DATA);
        this.isTableLoading = false;
      } else {
        this.isTableLoading = false;
        this._globalFunction.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.isTableLoading = false;
      this._globalFunction.errorHanding(error, this, true);
    }
    )
  }

  addPlatformData() {
    const dialogRef = this._dialog.open(AddEditPlatformDataComponent, {
      width: '700px',
      data:[
        {result:null},
        {btnName:'Add'}
      ],
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPlatFormData();
    })
  }

  editPlateForm(event: any, resData: any) {
    event.stopPropagation()
    const dialogRef = this._dialog.open(AddEditPlatformDataComponent, {
      width: '700px',
      data:[
        {result:resData},
        {btnName:'Edit'}
      ],
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPlatFormData();
    })
  }

  imageOnError(event:any) {
    event.target.src = this.constants.defaultImage;
  }
}

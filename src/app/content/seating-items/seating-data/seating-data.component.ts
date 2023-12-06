import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { ToastrService } from 'ngx-toastr';
import { SeatingItemsService } from '../seating-items.service';
import { AddEditSeatingItemComponent } from '../add-edit-seating-item/add-edit-seating-item.component';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/common/constants';

export interface SeatingItemElement {
  itemimage: string;
  itemname: number;
  description: string;
  status:boolean;
  action:any;
}

@Component({
  selector: 'app-seating-data',
  templateUrl: './seating-data.component.html',
  styleUrls: ['./seating-data.component.css']
})
export class SeatingDataComponent {
  isTableLoading: boolean = false;
  SEATING_ITEM_DATA: SeatingItemElement[] = [
  ];
  totalSeatingData: any;
  datashowNumber: any[] = [10, 20, 50];
  searchSeatingItem: any;
  displayedColumns: string[] = ['select', 'itemimage', 'itemname', 'description','status','action'];
  seatingItemsData = new MatTableDataSource<SeatingItemElement>(this.SEATING_ITEM_DATA);
  selection = new SelectionModel<SeatingItemElement>(true, []);
  name: string = "";
  @ViewChild(MatSort) seatingSort!: MatSort;
  constants: any = CONSTANTS;

  constructor(
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private _seatingItemsService: SeatingItemsService,
    private dialog: MatDialog,
    
  ){}

  ngOnInit() {
    this.getSeatingItems();
    this.seatingItemsData.sort = this.seatingSort;
  }

  ngOnChanges() {
    setTimeout(() => {
      this.seatingItemsData.sort = this.seatingSort;
    })

  }

  onKeySearch(event: any) { // without type info
    this.searchSeatingItem = event.target.value;
    this.getSeatingItems();
  }

  getSeatingItems(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchSeatingItem,
      sortfield: "_id",
      sortoption: -1
    };

    this._seatingItemsService.getSeatingItemsList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalSeatingData = result.Data.totalDocs;
        this.SEATING_ITEM_DATA = result.Data.docs;
        this.seatingItemsData = new MatTableDataSource<SeatingItemElement>(this.SEATING_ITEM_DATA);
        this.seatingItemsData.sort = this.seatingSort;
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

  editSeatingItem(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(AddEditSeatingItemComponent, {
      width: '700px',
      data: [{ result: resData },
      { btnName: "Edit" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getSeatingItems();
    });
  }


  addSeatingItem() {
    const dialogRef = this.dialog.open(AddEditSeatingItemComponent, {
      width: '700px',
      data: [{ result: null },
      { btnName: "Add" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getSeatingItems();
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.seatingItemsData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.seatingItemsData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SeatingItemElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.itemname + 1}`;
  }


}

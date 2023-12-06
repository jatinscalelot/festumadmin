import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { ShopCategoryService } from '../shop-category.service';
import { AddEditShopCategoryComponent } from '../add-edit-shop-category/add-edit-shop-category.component';

export interface shopCategoryElement {
  categoryname: string;
  description: string;
  status: boolean;
  action: string;
}

@Component({
  selector: 'app-shop-category-data',
  templateUrl: './shop-category-data.component.html',
  styleUrls: ['./shop-category-data.component.css']
})
export class ShopCategoryDataComponent implements OnInit{
  isTableLoading: boolean = false;
  SHOP_CATEGORY_DATA: shopCategoryElement[] = [
  ];
  totalShopCategoryData: any;
  datashowNumber: any[] = [10, 20, 50];
  searchShopCategory: any;
  displayedColumns: string[] = ['select','categoryname','description','status','action'];
  shopCategorydata = new MatTableDataSource<shopCategoryElement>(this.SHOP_CATEGORY_DATA);
  selection = new SelectionModel<shopCategoryElement>(true, []);
  name: string = "";
  @ViewChild(MatSort) shopCategorydataSort!: MatSort;

  constructor(
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private shopCategoryService: ShopCategoryService,
    private dialog: MatDialog
  ){}

  ngOnInit(){
    this.getShopCategory();
    this.shopCategorydata.sort = this.shopCategorydataSort;
  }

  ngOnChanges() {
    setTimeout(() => {
      this.shopCategorydata.sort = this.shopCategorydataSort;
    })

  }

  onKeySearch(event: any) { // without type info
    this.searchShopCategory = event.target.value;
    this.getShopCategory();
  }

  getShopCategory(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchShopCategory,
    };

    this.shopCategoryService.getShopCategoryList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalShopCategoryData = result.Data.totalDocs;
        this.SHOP_CATEGORY_DATA = result.Data.docs;
        this.shopCategorydata = new MatTableDataSource<shopCategoryElement>(this.SHOP_CATEGORY_DATA);
        this.shopCategorydata.sort = this.shopCategorydataSort;
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

  editShopCategory(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(AddEditShopCategoryComponent, {
      width: '700px',
      data: [{ result: resData },
      { btnName: "Edit" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getShopCategory();
    });
  }


  addShopCategory() {
    const dialogRef = this.dialog.open(AddEditShopCategoryComponent, {
      width: '700px',
      data: [{ result: null },
      { btnName: "Add" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getShopCategory();
    });
  }


   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.shopCategorydata.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.shopCategorydata.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: shopCategoryElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.categoryname + 1}`;
  }


}

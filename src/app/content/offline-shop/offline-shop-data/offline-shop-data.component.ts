import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service'
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { OfflineShopService } from '../offline-shop.service';
import { MatSort } from '@angular/material/sort';


export interface OfflineShopDataElement {
  shop_name: string;
  shop_category: string;
  organizers: string;
  is_approved: boolean;
  status: boolean;
  actions: string;
}

@Component({
  selector: 'app-offline-shop-data',
  templateUrl: './offline-shop-data.component.html',
  styleUrls: ['./offline-shop-data.component.css']
})
export class OfflineShopDataComponent implements OnInit {
  isTableLoading: boolean = false;

  OFFLINE_SHOP_DATA: OfflineShopDataElement[] = [];
  offlineShopDataDisplayedColumns: string[] = ['select', 'shop_name', 'shop_category', 'organizers', 'is_approved', 'status', 'actions'];
  offlineShopData = new MatTableDataSource<OfflineShopDataElement>(this.OFFLINE_SHOP_DATA);
  OfflineShopSelection = new SelectionModel<OfflineShopDataElement>(true, []);
  totalOfflineShopData: any;
  totalOfflineShopDataList: any;
  datashowNumber: any[] = [10, 20, 50];
  searchOfflineShop: any;
  @ViewChild(MatSort) offlineShopSort!: MatSort;

  constructor(
    private _router: Router,
    private _modalService: ModalService,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private offlineShopService: OfflineShopService
  ) { }

  ngOnInit(): void {
    this.getOfflineShop();
  }

  onKeySearch(event: any) { // without type info
      this.searchOfflineShop = event.target.value;
      this.getOfflineShop();
  }

  getOfflineShop(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchOfflineShop
    };

    this.offlineShopService.getOfflineShopList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalOfflineShopData = result.Data.totalDocs;
        this.totalOfflineShopDataList = result.Data.totalshops;
        result.Data.docs.map((item: any) => {
          item.organizers = item.createdBy ? item.createdBy?.name : "";
          item.shop_category = item.shop_category ? item.shop_category?.categoryname : "";
        });
        this.OFFLINE_SHOP_DATA = result.Data.docs;
        this.offlineShopData = new MatTableDataSource<OfflineShopDataElement>(this.OFFLINE_SHOP_DATA);
        this.offlineShopData.sort = this.offlineShopSort;
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

  ngAfterViewInit() {
    this.offlineShopData.sort = this.offlineShopSort;
    // this.eventCategory.sort = this.eventCategorySort;
  }

  viewOfflineShop(event: any, id: any) {
    event.stopPropagation();
    this._router.navigate(['offlineshop/', id])
  }

  approvedStatusOfflineShop(event: any) {
    let param = {
      shopid: event.id
    }
    if (event.is_approved == false) {
      this.offlineShopService.approveOfflineShop(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getOfflineShop();
          this.isTableLoading = false;
        } else {
          this.getOfflineShop();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getOfflineShop();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    } else {
      this.offlineShopService.disapproveOfflineShop(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getOfflineShop();
          this.isTableLoading = false;
        } else {
          this.getOfflineShop();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getOfflineShop();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    }

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllOfflineShopSelected() {
    const numSelected = this.OfflineShopSelection.selected.length;
    const numRows = this.offlineShopData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllOfflineShopRows() {
    if (this.isAllOfflineShopSelected()) {
      this.OfflineShopSelection.clear();
      return;
    }

    this.OfflineShopSelection.select(...this.offlineShopData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelForOffineShop(row?: OfflineShopDataElement): string {
    if (!row) {
      return `${this.isAllOfflineShopSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.OfflineShopSelection.isSelected(row) ? 'deselect' : 'select'} row ${row.shop_name + 1}`;
  }

  checkedClick(e: any) {
    e.stopPropagation();
  }

}

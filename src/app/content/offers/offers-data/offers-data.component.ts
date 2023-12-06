import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service'
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { OffersService } from '../offers.service';
import { MatSort } from '@angular/material/sort';

export interface OfflineOffersDataElement {
  position: number;
  offer_title: string;
  shop_name: string;
  organizers: string;
  is_approved: boolean;
  status: boolean;
  actions: string;
}

export interface OnlineOffersDataElement {
  position: number;
  product_name: string;
  shop_name: string;
  organizers: string;
  is_approved: boolean;
  status: boolean;
  actions: string;
}

@Component({
  selector: 'app-offers-data',
  templateUrl: './offers-data.component.html',
  styleUrls: ['./offers-data.component.css']
})
export class OffersDataComponent implements OnInit {
  isTableLoading: boolean = false;

  OFFLINE_OFFERS_DATA: OfflineOffersDataElement[] = [];
  offlineDataDisplayedColumns: string[] = ['select', 'offer_title', 'shop_name', 'organizers', 'is_approved', 'status', 'actions'];
  offlineOffersData = new MatTableDataSource<OfflineOffersDataElement>(this.OFFLINE_OFFERS_DATA);
  OfflineOfferSelection = new SelectionModel<OfflineOffersDataElement>(true, []);
  totalOfflineData: any;
  totalOfflineDataList: any;
  datashowNumber: any[] = [10, 20, 50];
  searchOfflineOffer: any;
  @ViewChild(MatSort) offlineOfferSort!: MatSort;

  ONLINE_OFFERS_DATA: OnlineOffersDataElement[] = []
  onlineOFferesDataDisplay: string[] = ['select', 'product_name', 'shop_name', 'organizers', 'is_approved', 'status', 'actions'];
  onlineOffersData = new MatTableDataSource<OnlineOffersDataElement>(this.ONLINE_OFFERS_DATA);
  onlineOfferSelection = new SelectionModel<OnlineOffersDataElement>(true, []);
  totalOnlineData: any;
  totalOnlineDataList: any;
  searchOnlineOffer: any;
  @ViewChild(MatSort) onlineOfferSort!: MatSort;

  constructor(
    private _router: Router,
    private _modalService: ModalService,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private offersService: OffersService
  ) { }

  ngOnInit(): void {
    this.getOfflineOffer();
    this.getOnlineOffer();
  }

  onKeySearch(event: any, type: any) { // without type info
    if (type == "offlineOffer") {
      this.searchOfflineOffer = event.target.value;
      this.getOfflineOffer();
    } else {
      this.searchOfflineOffer = event.target.value;
      this.getOnlineOffer();
    }

  }

  getOnlineOffer(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchOfflineOffer,
      platform : ""
    };

    this.offersService.getOnlineOfferList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalOnlineData = result.Data.totalDocs;
        this.totalOnlineDataList = result.Data.totalonlineoffers;
        result.Data.docs.map((item: any) => {
          item.organizers = item.createdBy ? item.createdBy?.name : "";
        });
        this.ONLINE_OFFERS_DATA = result.Data.docs;
        this.onlineOffersData = new MatTableDataSource<OnlineOffersDataElement>(this.ONLINE_OFFERS_DATA);
        this.onlineOffersData.sort = this.onlineOfferSort;
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


  getOfflineOffer(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchOfflineOffer
    };

    this.offersService.getOfflineOfferList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalOfflineData = result.Data.totalDocs;
        this.totalOfflineDataList = result.Data.totalofflineoffers;
        result.Data.docs.map((item: any) => {
          item.organizers = item.createdBy ? item.createdBy?.name : "";
          item.shop_name = item.shopid?.shop_name ? item.shopid?.shop_name : "";
        });
        this.OFFLINE_OFFERS_DATA = result.Data.docs;
        this.offlineOffersData = new MatTableDataSource<OfflineOffersDataElement>(this.OFFLINE_OFFERS_DATA);
        this.offlineOffersData.sort = this.offlineOfferSort;
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
    this.offlineOffersData.sort = this.offlineOfferSort;
    // this.eventCategory.sort = this.eventCategorySort;
  }

  viewOfflineOffers(event: any, id: any) {
    event.stopPropagation();
    this._router.navigate(['offers/offline-offers/', id])
  }

  viewOnlineOffers(event: any, id: any) {
    event.stopPropagation();
    this._router.navigate(['offers/online-offers/', id])
  }

  checkedClick(e: any) {
    e.stopPropagation();
  }

  approvedStatusOfflineOffer(event: any) {
    let param = {
      offerid: event.id
    }
    if (event.is_approved == false) {
      this.offersService.approveOfflineOffer(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getOfflineOffer();
          this.isTableLoading = false;
        } else {
          this.getOfflineOffer();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getOfflineOffer();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    } else {
      this.offersService.disapproveOfflineOffer(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getOfflineOffer();
          this.isTableLoading = false;
        } else {
          this.getOfflineOffer();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getOfflineOffer();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    }

  }

  approvedStatusOnlineOffer(event: any) {
    let param = {
      onlineofferid: event.id
    }
    if (event.is_approved == false) {
      this.offersService.approveOnlineOffer(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getOnlineOffer();
          this.isTableLoading = false;
        } else {
          this.getOnlineOffer();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getOnlineOffer();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    } else {
      this.offersService.disapproveOnlineOffer(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getOnlineOffer();
          this.isTableLoading = false;
        } else {
          this.getOnlineOffer();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getOnlineOffer();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    }

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllOfflineOfferSelected() {
    const numSelected = this.OfflineOfferSelection.selected.length;
    const numRows = this.offlineOffersData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllOfflineOfferRows() {
    if (this.isAllOfflineOfferSelected()) {
      this.OfflineOfferSelection.clear();
      return;
    }

    this.OfflineOfferSelection.select(...this.offlineOffersData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelForOffineOffer(row?: OfflineOffersDataElement): string {
    if (!row) {
      return `${this.isAllOfflineOfferSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.OfflineOfferSelection.isSelected(row) ? 'deselect' : 'select'} row ${row.offer_title + 1}`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllOnlineOfferSelected() {
    const numSelected = this.onlineOfferSelection.selected.length;
    const numRows = this.onlineOffersData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllOnlineOfferRows() {
    if (this.isAllOnlineOfferSelected()) {
      this.onlineOfferSelection.clear();
      return;
    }

    this.onlineOfferSelection.select(...this.onlineOffersData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelForOnlineOffer(row?: OnlineOffersDataElement): string {
    if (!row) {
      return `${this.isAllOnlineOfferSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.onlineOfferSelection.isSelected(row) ? 'deselect' : 'select'} row ${row.shop_name + 1}`;
  }

}

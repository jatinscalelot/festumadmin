import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { PromotionPlanService } from '../promotion-plan.service';
import { AddEditPremotionPlanComponent } from '../add-edit-premotion-plan/add-edit-premotion-plan.component';

export interface promotionPlanElement {
  planname: string;
  description: string;
  notification_amount: number;
  sms_amount: number;
  email_amount: number;
  combo_amount: number;
  total_users: number;
  status: boolean;
  actions:string;
}


@Component({
  selector: 'app-premotion-plan-data',
  templateUrl: './premotion-plan-data.component.html',
  styleUrls: ['./premotion-plan-data.component.css']
})
export class PremotionPlanDataComponent {
  isTableLoading: boolean = false;
  PROMOTION_PLAN_DATA: promotionPlanElement[] = [
  ];
  totalPromotionData: any;
  datashowNumber: any[] = [10, 20, 50];
  searchPromotion: any;
  displayedColumns: string[] = ['select','planname','description','notification_amount','sms_amount', 'email_amount','combo_amount','total_users','status','actions'];
  promotionPlandata = new MatTableDataSource<promotionPlanElement>(this.PROMOTION_PLAN_DATA);
  selection = new SelectionModel<promotionPlanElement>(true, []);
  name: string = "";
  @ViewChild(MatSort) discountSort!: MatSort;


  constructor(
    private matDailog: MatDialog,
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private promotionPlanService: PromotionPlanService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPromotionPlan();
    this.promotionPlandata.sort = this.discountSort;
  }

  ngOnChanges() {
    setTimeout(() => {
      this.promotionPlandata.sort = this.discountSort;
    })

  }

  onKeySearch(event: any) { // without type info
    this.searchPromotion = event.target.value;
    this.getPromotionPlan();
  }

  getPromotionPlan(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchPromotion,
    };

    this.promotionPlanService.getPromotionPlanList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalPromotionData = result.Data.totalDocs;
        this.PROMOTION_PLAN_DATA = result.Data.docs;
        this.promotionPlandata = new MatTableDataSource<promotionPlanElement>(this.PROMOTION_PLAN_DATA);
        this.promotionPlandata.sort = this.discountSort;
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

  editPromotionData(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(AddEditPremotionPlanComponent, {
      width: '700px',
      data: [{ result: resData },
      { btnName: "Edit" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getPromotionPlan();
    });
  }


  addPromotionData() {
    const dialogRef = this.dialog.open(AddEditPremotionPlanComponent, {
      width: '700px',
      data: [{ result: null },
      { btnName: "Add" }
      ],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getPromotionPlan();
    });
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.promotionPlandata.data.length;
    return numSelected === numRows;
  }



  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.promotionPlandata.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: promotionPlanElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.planname + 1}`;
  }
}

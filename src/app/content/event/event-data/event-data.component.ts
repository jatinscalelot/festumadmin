import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service'
import { ToastrService } from 'ngx-toastr'
import { GlobalFunctions } from '../../../common/global-functions';
import { EventService } from '../event.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CommonModalComponent } from 'src/app/_modal/common-modal/common-modal.component';
import { AddEditEventcategoryComponent } from '../add-edit-eventcategory/add-edit-eventcategory.component';

export interface EventDataElement {
  event_type: string;
  event_name: string;
  organizers: string;
  is_live: string;
  is_approved: string;
  status: string;
  action: any;
}

export interface eventCategoryData {
  categoryname: string;
  description: string;
  event_type: string;
  status: string;
  action: any;
}



@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.component.html',
  styleUrls: ['./event-data.component.css']
})
export class EventDataComponent implements OnInit {
  isTableLoading: boolean = false;
  EVENT_DATA: EventDataElement[] = [
    //  {event_name: 'Birthday Party', event_type: 'Hydrogen', organizers:'John Doe', is_live: 'Live', is_approved: 'Reject', status: 'Active' , action:''},
  ];
  EVENT_CATEGORY: eventCategoryData[] = [
    // {category_name: 'Birthday Party', description: 'Hydrogen', event_type:'John Doe', status: 'Active' , action:''},
  ]
  totalEvent: any;
  totalEventList: any;
  datashowNumber: any[] = [10, 20, 50];
  isChecked: boolean = false;
  searchEvent: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) eventSort!: MatSort;
  @ViewChild(MatSort) eventCategorySort!: MatSort;

  totalEventCategory: any;
  totalEventCategoryList: any;
  searchEventCategory: any;

  constructor(
    private _router: Router,
    private _modalService: ModalService,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
    private _eventService: EventService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEvent();
    this.getEventCategory();
  }

  onKeySearch(event: any, type: any) { // without type info
    if (type == "event") {
      this.searchEvent = event.target.value;
      this.getEvent();
    } else {
      this.searchEventCategory = event.target.value;
      this.getEventCategory();
    }

  }

  getEvent(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchEvent,
      organizerid: "",
      event_category: "",
      sortfield: "_id",
      sortoption: -1,
      status: true
    };

    this._eventService.eventsList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalEvent = result.Data.totalDocs;
        this.totalEventList = result.Data.totalEvents;
        result.Data.docs.map((item: any) => {
          item.organizers = item.createdBy ? item.createdBy?.name : "";
          item.event_name = item.name;
        });
        this.EVENT_DATA = result.Data.docs;
        this.eventData = new MatTableDataSource<EventDataElement>(this.EVENT_DATA);
        this.eventData.sort = this.eventSort;
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

  getEventCategory(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchEventCategory,
      sortfield: "_id",
      sortoption: -1,
    };

    this._eventService.eventCategoryList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalEventCategory = result.Data.totalDocs;
        this.totalEventCategoryList = result.Data.totaleventcategories;

        this.EVENT_CATEGORY = result.Data.docs;
        this.eventCategory = new MatTableDataSource<eventCategoryData>(this.EVENT_CATEGORY);
        this.eventCategory.sort = this.eventCategorySort;
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
    // this.eventData.paginator = this.paginator;
    this.eventData.sort = this.eventSort;
    this.eventCategory.sort = this.eventCategorySort;
  }

  displayedColumns: string[] = ['select', 'event_name', 'event_type', 'organizers', 'is_live', 'is_approved', 'status', 'action'];
  eventCategoryColumns: string[] = ['select', 'categoryname', 'description', 'event_type', 'status', 'action'];
  eventData = new MatTableDataSource<EventDataElement>(this.EVENT_DATA);
  selection = new SelectionModel<EventDataElement>(true, []);
  eventCategory = new MatTableDataSource<eventCategoryData>(this.EVENT_CATEGORY);
  selectEvent_category = new SelectionModel<eventCategoryData>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.eventData.data.length;
    const CategorySelect = this.selectEvent_category.selected.length;
    const categoryRows = this.eventCategory.data.length;
    return numSelected === numRows && CategorySelect === categoryRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selectEvent_category.clear();
      return;
    }
    this.selection.select(...this.eventData.data);
    this.selectEvent_category.select(...this.eventCategory.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EventDataElement, ec_checkbox?: eventCategoryData): string {
    if (!row || !ec_checkbox) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.event_name + 1}` && `${this.selectEvent_category.isSelected(ec_checkbox) ? 'deselect' : 'select'} ec_checkbox ${ec_checkbox.categoryname + 1}`
  }

  viewEvent(e: any, index: any) {
    e.stopPropagation();
    this._router.navigate(['event/', index])
  }

  editEvent(e: any) {
    e.stopPropagation();
  }

  deleteEvent(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(CommonModalComponent, {
      width: '600px',
      data: {
        title: "Confirmation",
        message: "Are you sure you want to delete this data?",
        buttonNames: [{ firstBtn: "Delete", secondBtn: "Cancel" }]
      }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        let param = {
          eventid: resData.id
        }
        this._eventService.deleteEvent(param).subscribe((result: any) => {
          if (result && result.IsSuccess) {
            this._toastr.success("Event deleted successfully.", "Success");
            this.getEvent();
            this.isTableLoading = false;
          } else {
            this.getEvent();
            this.isTableLoading = false;
            this._globalFunctions.successErrorHandling(result, this, true);
          }
        }, (error: any) => {
          this.getEvent();
          this.isTableLoading = false;
          this._globalFunctions.errorHanding(error, this, true);
        });
      }
    });
  }


  checkedClick(e: any) {
    e.stopPropagation();
  }

  approvedStatusChnage(event: any) {
    let param = {
      eventid: event.id
    }
    if (event.is_approved == false) {
      this._eventService.approveEvent(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getEvent();
          this.isTableLoading = false;
        } else {
          this.getEvent();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getEvent();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    } else {
      this._eventService.disapproveEvent(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getEvent();
          this.isTableLoading = false;
        } else {
          this.getEvent();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getEvent();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    }

  }



  editEventCategory(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(AddEditEventcategoryComponent, {
      width: '550px',
      data: [{ result: resData },
      { btnName: "Edit" }
      ]
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getEventCategory();
    });
  }


  addCreateEventCategory() {
    const dialogRef = this.dialog.open(AddEditEventcategoryComponent, {
      width: '550px',
      data: [{ result: null },
      { btnName: "Add" }
      ]
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getEventCategory();
    });
  }

  deleteEventCategory(e: any, resData: any) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(CommonModalComponent, {
      width: '400px',
      data: {
        title: "Confirmation",
        message: "Are you sure you want to delete this data?",
        buttonNames: [{ firstBtn: "Delete", secondBtn: "Cancel" }]
      }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        let param = {
          categoryid: resData.id
        }
        this._eventService.deleteEventCategory(param).subscribe((result: any) => {
          if (result && result.IsSuccess) {
            this._toastr.success(result.Message, "Success");
            this.getEventCategory();
            this.isTableLoading = false;
          } else {
            this.getEventCategory();
            this.isTableLoading = false;
            this._globalFunctions.successErrorHandling(result, this, true);
          }
        }, (error: any) => {
          this.getEventCategory();
          this.isTableLoading = false;
          this._globalFunctions.errorHanding(error, this, true);
        });
      }
    });
  }

  changeEventCategoryStatus(event: any, data: any) {
    let param = {
      categoryid: data.id,
      categoryname: data.categoryname,
      description: data.description,
      event_type: data.event_type,
      status: data.status === true ? false : true
    }
    this._eventService.eventCategoryAddEdit(param).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this._toastr.clear();
        this._toastr.success(result.Message, "Success");
        this.getEventCategory();
        this.isTableLoading = false;
      } else {
        this.getEventCategory();
        this.isTableLoading = false;
        this._globalFunctions.successErrorHandling(result, this, true);
      }
    }, (error: any) => {
      this.getEventCategory();
      this.isTableLoading = false;
      this._globalFunctions.errorHanding(error, this, true);
    });

  }

}

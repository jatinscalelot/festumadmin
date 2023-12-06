import {SelectionModel} from '@angular/cdk/collections';
import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { LiveStreamService } from '../live-stream.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalFunctions } from 'src/app/common/global-functions';
import { Router } from '@angular/router';

export interface LiveStreamDataElement {
  event_name: string;
  event_type: string;
  organizers: string;
  is_live: boolean;
  is_approved: boolean;
  status: boolean;
  actions:string;
}

@Component({
  selector: 'app-live-stream-data',
  templateUrl: './live-stream-data.component.html',
  styleUrls: ['./live-stream-data.component.css']
})
export class LiveStreamDataComponent {
  isTableLoading: boolean = false;

  totalLiveStreamData: any;
  totalLiveStreamDataList: any;
  datashowNumber: any[] = [10, 20, 50];
  searchLiveStreamData: any;
  LIVE_STREAM_DATA: LiveStreamDataElement[] = [];
  displayedColumns: string[] = ['select','event_name','event_type','organizers','is_live','is_approved','status','actions'];
  liveStreamData = new MatTableDataSource<LiveStreamDataElement>(this.LIVE_STREAM_DATA);
  liveStreamSelection = new SelectionModel<LiveStreamDataElement>(true, []);
  @ViewChild(MatSort) liveStreamSort!: MatSort;


  constructor(
    private _router: Router,
    private _globalFunctions: GlobalFunctions,
    private _toastr: ToastrService,
     private liveStreamService: LiveStreamService,
  ){}

  ngOnInit() {
    this.getLiveStreamData();
    this.liveStreamData.sort = this.liveStreamSort;
  }

  ngOnChanges() {
    setTimeout(() => {
      this.liveStreamData.sort = this.liveStreamSort;
    })
  }

  onKeySearch(event: any) { // without type info
    this.searchLiveStreamData = event.target.value;
    this.getLiveStreamData();
  }

  getLiveStreamData(event: any = ''): void {
    this.isTableLoading = true;
    const page = event ? (event.pageIndex + 1) : 1;
    let filter = {
      page: page || '1',
      limit: event.pageSize || '10',
      search: this.searchLiveStreamData,
    };

    this.liveStreamService.getLiveStreamList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.totalLiveStreamData = result.Data.totalDocs;
        this.totalLiveStreamDataList = result.Data.totallivestreams;
        result.Data.docs.map((item: any) => {
          item.organizers = item.createdBy ? item.createdBy?.name : "";
        });
        this.LIVE_STREAM_DATA = result.Data.docs;
        this.liveStreamData = new MatTableDataSource<LiveStreamDataElement>(this.LIVE_STREAM_DATA);
        this.liveStreamData.sort = this.liveStreamSort;
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


  /** Whether the number of selected elements matches the total number of rows. */
  isLiveStreamSelected() {
    const numSelected = this.liveStreamSelection.selected.length;
    const numRows = this.liveStreamData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear liveStreamSelection. */
  toggleLiveStreamRows() {
    if (this.isLiveStreamSelected()) {
      this.liveStreamSelection.clear();
      return;
    }
    this.liveStreamSelection.select(...this.liveStreamData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLiveStreamLabel(row?: LiveStreamDataElement): string {
    if (!row) {
      return `${this.isLiveStreamSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.liveStreamSelection.isSelected(row) ? 'deselect' : 'select'} row ${row.event_name + 1}`;
  }

  viewLiveStream(event:any,id:number){
    event.stopPropagation()
    this._router.navigate(['live-stream/',id])
  }

  checkedClick(e: any) {
    e.stopPropagation();
  }

  approvedStatusChnage(event: any) {
    let param = {
      livestreamid: event.id
    }
    if (event.is_approved == false) {
      this.liveStreamService.approveLiveStream(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getLiveStreamData();
          this.isTableLoading = false;
        } else {
          this.getLiveStreamData();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getLiveStreamData();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    } else {
      this.liveStreamService.disapproveLiveStream(param).subscribe((result: any) => {
        if (result && result.IsSuccess) {
          this.getLiveStreamData();
          this.isTableLoading = false;
        } else {
          this.getLiveStreamData();
          this.isTableLoading = false;
          this._globalFunctions.successErrorHandling(result, this, true);
        }
      }, (error: any) => {
        this.getLiveStreamData();
        this.isTableLoading = false;
        this._globalFunctions.errorHanding(error, this, true);
      });
    }

  }


}

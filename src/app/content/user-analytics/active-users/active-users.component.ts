import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface  activeUserData {
  user_name:string;
  email:string;
  phone_number:string;
  status:boolean;
  installed_date:string;
  last_login:string;
}

const ACTIVE_USER_DATA:activeUserData[] = [
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
  {user_name:'John Doe',email:'olivia1213@gmail.com',phone_number:'+91 8976543254',status:true,installed_date:'10, Mar 2022',last_login:'20, Jan 2022'},
]

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  isChecked = false;

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['user_name','email','phone_number','status','installed_date','last_login']
  activeUserData = new MatTableDataSource<activeUserData>(ACTIVE_USER_DATA);
  selection = new SelectionModel<activeUserData>(true,[]);

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.activeUserData.data.length;
    return numSelected === numRows;
  }

  toggleAllRows(){
    if(this.isAllSelected()){
      this.selection.clear();
      return;
    }
    this.selection.select(...this.activeUserData.data);
  }

  checkboxLabel(row?: activeUserData) {
    if(!row){
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.user_name +1}`
  }

  checkedClick(e:any){
    e.stopPropagation();
  }

}

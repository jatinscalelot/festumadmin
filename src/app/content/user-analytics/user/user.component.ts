import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export interface UserDataElement {
  product_name: string;
  user_name: string;
  user_img: string;
  user_email: string;
  phone_mobile: string;
  installed_date: string;
  status: string;
  last_login: any;
}

const USERS_DATA: UserDataElement[] = [
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Hydrogen', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Bouquet Garni Events', user_img: './assets/images/user.png', product_name: 'Helium', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Basket of Gold Events', user_img: './assets/images/user.png', product_name: 'Lithium', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Slate & Crystal Events', user_img: './assets/images/user.png', product_name: 'Beryllium', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Boron', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Carbon', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Nitrogen', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Oxygen', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
  { user_name: 'Birthday Party', user_img: './assets/images/user.png', product_name: 'Fluorine', user_email: 'olivia1213@gmail.com', phone_mobile: '+91 8976543254', installed_date: '10, Mar 2022', status: 'Active', last_login: '20, Jan 2022' },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isChecked = false;
  userDataContext!: CanvasRenderingContext2D;
  userDataOnlineOfflineContext!: CanvasRenderingContext2D;
  userDataActiveDeActiveContext!: CanvasRenderingContext2D;

  @ViewChild('userChartData') userChartData!: ElementRef;
  @ViewChild('userDataOnlineOffline') userDataOnlineOffline!: ElementRef;
  @ViewChild('userDataActiveDeActive') userDataActiveDeActive!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.userDataContext = this.userChartData.nativeElement.getContext('2d');
      var firstGradient = this.userDataContext.createLinearGradient(0, 0, 0, 800);
      firstGradient.addColorStop(0, 'rgba(80, 180, 50, 1)');
      firstGradient.addColorStop(1, 'rgba(255, 255, 255, 0.00)');

      var secondGradient = this.userDataContext.createLinearGradient(0, 0, 0, 800);
      secondGradient.addColorStop(0, 'rgba(5,141,199,1)');
      secondGradient.addColorStop(1, 'rgba(255, 255, 255, 0.00)');

      let totalUser = new Chart(this.userDataContext, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'All Users',
              backgroundColor: firstGradient,
              borderColor: 'rgba(80, 180, 50, 1)',
              pointRadius: 0,
              fill: true,
              tension: 0.4,
              data: [
                { x: 0, y: 2 },
                { x: 1, y: 1 },
                { x: 2, y: 2.5 },
                { x: 3, y: 5 },
                { x: 4, y: 3 },
                { x: 5, y: 4 },
                { x: 6, y: 9 },
                { x: 7, y: 7 },
                { x: 8, y: 12 },
              ],
            },
            {
              label: 'Data02',
              backgroundColor: secondGradient,
              borderColor: 'rgba(5, 141, 199, 1)',
              pointRadius: 0,
              fill: true,
              tension: 0.4,
              data: [
                { x: 0, y: 1 },
                { x: 1, y: 4 },
                { x: 2, y: 8 },
                { x: 3, y: 12 },
                { x: 4, y: 1 },
                { x: 5, y: 5 },
                { x: 6, y: 2 },
                { x: 7, y: 3 },
                { x: 8, y: 1 },
              ],
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false
          },
          animations: {
            radius: {
              duration: 400,
              easing: 'linear',
              loop: (context) => context.active
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Users',

            },
            tooltip: {
              enabled: true,
              position: 'nearest',
              //external: externalTooltipHandler
            }
          },
          scales: {
            xAxes: {
              type: 'linear',
              display: true,
              position: 'bottom',

            },
            yAxes: {
              type: 'linear',
              display: true,

              // grid line settings
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            },
          }
        },

      });
    }, 1000);

    setTimeout(() => {
      this.userDataOnlineOfflineContext = this.userDataOnlineOffline.nativeElement.getContext('2d');

      let totalUser = new Chart(this.userDataOnlineOfflineContext, {
        type: 'pie',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64, 1)'
              ]
            }
          ]
        },
        options: {
          
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: ''
              }
            }
        }

      });
    }, 1000);

    setTimeout(() => {
      this.userDataActiveDeActiveContext = this.userDataActiveDeActive.nativeElement.getContext('2d');

      let totalUser = new Chart(this.userDataActiveDeActiveContext, {
        type: 'pie',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64, 1)'
              ]
            }
          ]
        },
        options: {
          
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: ''
              }
            }
        }

      });
    }, 1000);
  }

  displayedColumns: string[] = ['select', 'user_name', 'product_name', 'user_email', 'phone_mobile', 'status', 'installed_date', 'last_login'];
  userData = new MatTableDataSource<UserDataElement>(USERS_DATA);
  selection = new SelectionModel<UserDataElement>(true, []);


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.userData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.userData.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserDataElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.user_name + 1}`
  }

  checkedClick(e: any) {
    e.stopPropagation();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintManagementComponent } from './complaint-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintManagementOverviewComponent } from './complaint-management-overview/complaint-management-overview.component';
import { AllTicketComponent } from './all-ticket/all-ticket.component';
import { PendingTicketComponent } from './pending-ticket/pending-ticket.component';
import { ResolvedTicketComponent } from './resolved-ticket/resolved-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TicketComponent } from './ticket/ticket.component';

const routes:Routes = [
  {
    path:'',
    component:ComplaintManagementOverviewComponent
  },
  {
    path:'ticket',
    component:TicketComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'all-ticket'
      },
      {
        path:'all-ticket',
        component:AllTicketComponent,
        data: { title: 'Complaint Management' }
      },
      {
        path:'new-ticket',
        component:NewTicketComponent,
        data: { title: 'Complaint Management' }
      },
      {
        path:'pending-ticket',
        component:PendingTicketComponent,
        data: { title: 'Complaint Management' }
      },
      {
        path:'resolved-ticket',
        component:ResolvedTicketComponent,
        data: { title: 'Complaint Management' }
      },
    ]
  },
  // {
  //   path:'complaint-overview',  
  //   component:ComplaintManagementOverviewComponent,
  //   // children:[
  //   //   {
  //   //     path:'all-ticket',
  //   //     component:AllTicketComponent,
  //   //   }
  //   // ]
  // },
  // {
  //   path:'complaint-overview/all-ticket',
  //   component:AllTicketComponent,
  //   // children:[
  //   //   // {
  //   //   //   path:'',
  //   //   //   pathMatch:'full',
  //   //   //   redirectTo:'all-ticket'
  //   //   // },
  //   //   // {
  //   //   //   path:'all-ticket',
  //   //   //   component:AllTicketComponent
  //   //   // },
  //   //   // {
  //   //   //   path:'resolved-ticket',
  //   //   //   component:ResolvedTicketComponent
  //   //   // },
  //   //   // {
  //   //   //   path:'new-ticket',
  //   //   //   component:NewTicketComponent
  //   //   // },
  //   //   // {
  //   //   //   path:'pending-ticket',
  //   //   //   component:PendingTicketComponent
  //   //   // },
  //   // ]
  // }
]

@NgModule({
  declarations: [
    ComplaintManagementComponent,
    ComplaintManagementOverviewComponent,
    AllTicketComponent,
    PendingTicketComponent,
    ResolvedTicketComponent,
    NewTicketComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComplaintManagementModule { }

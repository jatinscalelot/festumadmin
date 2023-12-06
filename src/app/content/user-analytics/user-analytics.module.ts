import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAnalyticsComponent } from './user-analytics.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { OfflineUsersComponent } from './offline-users/offline-users.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { AgentUsersComponent } from './agent-users/agent-users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TotalUserComponent } from './total-user/total-user.component';
import { OrganizerUserComponent } from './organizer-user/organizer-user.component';
import { DropdownModule } from 'primeng/dropdown';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule,_MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes:Routes = [
  {
    path:'',
    component:UserComponent
  },
  {
    path:'total-users',
    component:TotalUserComponent,
    children:[
      {
        path:"",
        pathMatch:'full',
        redirectTo:'active-users'
      },
      {
        path:'active-users',
        component:ActiveUsersComponent,
        data: { title: 'User Analytics' }
      },
      {
        path:'inactive-user',
        component:InactiveUsersComponent,
        data: { title: 'User Analytics' }
      },
      {
        path:'offline-user',
        component:OfflineUsersComponent,
        data: { title: 'User Analytics' }
      },
      {
        path:'online-user',
        component:OnlineUsersComponent,
        data: { title: 'User Analytics' }
      },
    ]
  },
  {
    path:'agent-user',
    component:AgentUsersComponent,
    data: { title: 'User Analytics' }
  },
  {
    path:'new-user',
    component:NewUsersComponent,
    data: { title: 'User Analytics' }
  },
  {
    path:'organizer-user',
    component:OrganizerUserComponent,
    data: { title: 'User Analytics' }
  },
]

@NgModule({
  declarations: [
    UserAnalyticsComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    OnlineUsersComponent,
    OfflineUsersComponent,
    NewUsersComponent,
    AgentUsersComponent,
    UserComponent,
    TotalUserComponent,
    OrganizerUserComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes),
  ]
})
export class UserAnalyticsModule { }

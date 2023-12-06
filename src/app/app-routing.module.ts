import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthGuard } from './auth/auth-guard/auth.guard';
import { NoAuthGuard } from './auth/auth-guard/no-auth.guard';
import { EventComponent } from './content/event/event.component';

const routes: Routes = [
  { path: '',component:LogInComponent,canActivate: [NoAuthGuard], },
  //{ path: 'log-in',component:LogInComponent,canActivate: [NoAuthGuard], },
  //{ path: '', redirectTo: 'log-in', pathMatch: 'full' },
  {
    path:'',
    canActivate: [AuthGuard],
    component:ContentComponent,
    loadChildren: () => import('./content/content.module').then(m =>m.ContentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
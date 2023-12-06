import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAnalyticsModule } from './user-analytics/user-analytics.module';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { UserAnalyticsComponent } from './user-analytics/user-analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EarningAndExpensesModule } from './earning-and-expenses/earning-and-expenses.module';
import { EarningAndExpensesComponent } from './earning-and-expenses/earning-and-expenses.component';
import { ComplaintManagementComponent } from './complaint-management/complaint-management.component';
import { EventComponent } from './event/event.component';
import { SeatingItemsComponent } from './seating-items/seating-items.component';
import { DiscountComponent } from './discount/discount.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { PromotionPlanComponent } from './promotion-plan/promotion-plan.component';
import { PlatformComponent } from './platform/platform.component';
import { FCoinComponent } from './f-coin/f-coin.component';
import { OffersComponent } from './offers/offers.component';
import { CouponsComponent } from './coupons/coupons.component';
import { OfflineShopComponent } from './offline-shop/offline-shop.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { Title } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
const routes: Routes = [
  // {
  //   path:"",
  //   pathMatch:'full',
  //   redirectTo:'/dashboard',
  // },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: "event",
    component: EventComponent,
    loadChildren: () => import('./event/event.module').then(m => m.EventModule),
    data: { title: 'Event' }
  },
  {
    path: "seating-items",
    component: SeatingItemsComponent,
    loadChildren: () => import('./seating-items/seating-items.module').then(m => m.SeatingItemsModule),
    data: { title: 'Seating Items' }
  },
  {
    path: "shop-category",
    component: ShopCategoryComponent,
    loadChildren: () => import('./shop-category/shop-category.module').then(m => m.ShopCategoryModule),
    data: { title: 'Shop Category' }
  },
  {
    path: "user-analytics",
    component: UserAnalyticsComponent,
    loadChildren: () => import('./user-analytics/user-analytics.module').then(m => m.UserAnalyticsModule),
    data: { title: 'User Analytics' }
  },
  {
    path: "earning-expenses",
    component: EarningAndExpensesComponent,
    loadChildren: () => import('./earning-and-expenses/earning-and-expenses.module').then(m => m.EarningAndExpensesModule),
    data: { title: 'Earning Expenses' }
  },
  {
    path: "complaint-management",
    component: ComplaintManagementComponent,
    loadChildren: () => import('./complaint-management/complaint-management.module').then(m => m.ComplaintManagementModule),
    data: { title: 'Complaint Management' }
  },
  {
    path: "discount",
    component: DiscountComponent,
    loadChildren: () => import('./discount/discount.module').then(m => m.DiscountModule),
    data: { title: 'Discount' }
  },
  {
    path: "promotion-plan",
    component: PromotionPlanComponent,
    loadChildren: () => import('./promotion-plan/promotion-plan.module').then(m => m.PromotionPlanModule),
    data: { title: 'Promotion Plan' }
  },
  {
    path: 'platform',
    component: PlatformComponent,
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule),
    data: { title: 'Platform' }
  },
  {
    path: 'f-coin',
    component: FCoinComponent,
    loadChildren: () => import('./f-coin/f-coin.module').then(m => m.FCoinModule),
    data: { title: 'F-Coin' }
  },
  {
    path: 'offers',
    component: OffersComponent,
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule),
    data: { title: 'Offers' }
  },
  {
    path: 'coupons',
    component: CouponsComponent,
    loadChildren: () => import('./coupons/coupons.module').then(m => m.CouponsModule),
    data: { title: 'Coupons' }
  },
  {
    path: 'offlineshop',
    component: OfflineShopComponent,
    loadChildren: () => import('./offline-shop/offline-shop.module').then(m => m.OfflineShopModule),
    data: { title: 'Offline Shop' }
  },
  {
    path: 'live-stream',
    component: LiveStreamComponent,
    loadChildren: () => import('./live-stream/live-stream.module').then(m => m.LiveStreamModule),
    data: { title: 'Live Stream' }
  },
  // { path: '**', redirectTo: 'dashboard' }
]

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    UserAnalyticsModule,
    DashboardModule,
    EarningAndExpensesModule,
    RouterModule.forChild(routes),
    MatSelectModule
  ],
  providers: [Title]
})
export class ContentModule { }

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningAndExpensesComponent } from './earning-and-expenses.component';
import { RouterModule, Routes } from '@angular/router';
import { TotalEarningComponent } from './total-earning/total-earning.component';
import { UserTransactionComponent } from './user-transaction/user-transaction.component';
import { RevenueFromAdsComponent } from './revenue-from-ads/revenue-from-ads.component';
import { GiftCouponsComponent } from './gift-coupons/gift-coupons.component';
import { PromotionComponent } from './promotion/promotion.component';
import { OfferPromotionComponent } from './offer-promotion/offer-promotion.component';
import { MembershipPlansComponent } from './membership-plans/membership-plans.component';
import { SpacePlanComponent } from './space-plan/space-plan.component';
import { LivestreamPlanOrganizerComponent } from './livestream-plan-organizer/livestream-plan-organizer.component';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';
import { EarningExpensesOverviewComponent } from './earning-expenses-overview/earning-expenses-overview.component';
import { LivestreamUsersComponent } from './livestream-users/livestream-users.component';
import { MassagesComponent } from './massages/massages.component';
import { CoinGenerateAdsComponent } from './coin-generate-ads/coin-generate-ads.component';
import { ServerComponent } from './server/server.component';
import { EmployeesComponent } from './employees/employees.component';
import { OtherExpensesComponent } from './other-expenses/other-expenses.component';

const routes:Routes = [
 {
  path:'',
  component:EarningExpensesOverviewComponent
 },
 {
  path:'total-earning',
  component:TotalEarningComponent,
  children:[
    {
      path:'',
      pathMatch:'full',
      redirectTo:'user-transaction'
    },
    {
      path:'user-transaction',
      component:UserTransactionComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'revenue-ads',
      component:RevenueFromAdsComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'gift-coupons',
      component:GiftCouponsComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'promotion',
      component:PromotionComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'offer-promotion',
      component:OfferPromotionComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'livestream-users',
      component:LivestreamUsersComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'membership-plans',
      component:MembershipPlansComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'space-plan',
      component:SpacePlanComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'livestream-plan-organizer',
      component:LivestreamPlanOrganizerComponent,
      data: { title: 'Earning Expenses' }
    },
  ]
 },
 {
  path:'total-expenses',
  component:TotalExpensesComponent,
  children:[
    {
      path:'',
      pathMatch:'full',
      redirectTo:'massages'
    },
    {
      path:'massages',
      component:MassagesComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'coin-generaated-ads',
      component:CoinGenerateAdsComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'server',
      component:ServerComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'employees',
      component:EmployeesComponent,
      data: { title: 'Earning Expenses' }
    },
    {
      path:'other-expenses',
      component:OtherExpensesComponent,
      data: { title: 'Earning Expenses' }
    },
  ]
 }
 
]

@NgModule({
  declarations: [
    EarningAndExpensesComponent,
    TotalEarningComponent,
    UserTransactionComponent,
    RevenueFromAdsComponent,
    GiftCouponsComponent,
    PromotionComponent,
    OfferPromotionComponent,
    MembershipPlansComponent,
    SpacePlanComponent,
    LivestreamPlanOrganizerComponent,
    TotalExpensesComponent,
    EarningExpensesOverviewComponent,
    LivestreamUsersComponent,
    MassagesComponent,
    CoinGenerateAdsComponent,
    ServerComponent,
    EmployeesComponent,
    OtherExpensesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EarningAndExpensesModule { }

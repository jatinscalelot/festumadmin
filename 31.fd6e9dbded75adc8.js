"use strict";(self.webpackChunkadmin_FE=self.webpackChunkadmin_FE||[]).push([[31],{9031:(W,y,n)=>{n.r(y),n.d(y,{ShopCategoryModule:()=>K});var m=n(6814),Z=n(8337),p=n(5313),A=n(3566),l=n(6223),g=n(7700),t=n(5879),x=n(553),D=n(9862),h=n(9179);let C=(()=>{class o{constructor(e,a){this.http=e,this._globalFunctions=a}getShopCategoryList(e={}){return this.http.post(x.N.FEAppURL+"superadmin/shopcategories",e,this._globalFunctions.getFileAuthorizationHeader())}addEditShopCategory(e=""){return this.http.post(x.N.FEAppURL+"superadmin/shopcategories/save",e,this._globalFunctions.getAuthorizationHeader())}static#t=this.\u0275fac=function(a){return new(a||o)(t.LFG(D.eN),t.LFG(h.E))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var v=n(2425),u=n(4828),_=n(2599),f=n(4170),b=n(2032);const F=["shopCategoryNgForm"];function N(o,s){1&o&&(t.TgZ(0,"mat-error",17),t._uU(1," Name is required."),t.qZA())}function k(o,s){1&o&&(t.TgZ(0,"mat-error",17),t._uU(1," Description is required."),t.qZA())}let S=(()=>{class o{constructor(e,a,r,i,c,d,V){this.matDialogRef=e,this.data=a,this.fb=r,this.shopCategoryService=i,this.toastr=c,this._router=d,this._globalFunctions=V,this.shopCategoryForm=l.cw}ngOnInit(){this.init(),this.data[0].result&&this.setShopCategoryData()}init(){this.shopCategoryForm=this.fb.group({categoryname:[null,l.kI.required],description:[null,l.kI.required],status:[!1,l.kI.required]})}get f(){return this.shopCategoryForm.controls}setShopCategoryData(){this.shopCategoryForm.get("categoryname").setValue(this.data[0].result.categoryname),this.shopCategoryForm.get("description").setValue(this.data[0].result.description),this.shopCategoryForm.get("status").setValue(this.data[0].result.status)}onSubmitAction(){if(!this.shopCategoryForm.valid)return this.toastr.clear(),void this.toastr.error("Please enter valid data.","Oops!");const e={categoryid:this.data[0].result?this.data[0].result?.id:"",categoryname:this.shopCategoryForm.value.categoryname,description:this.shopCategoryForm.value.description,status:this.shopCategoryForm.value.status};this.shopCategoryForm.disable(),this.shopCategoryService.addEditShopCategory(e).subscribe(a=>{a&&a.IsSuccess?(this.toastr.clear(),this.toastr.success(a.Message,"Success"),this.matDialogRef.close()):(this.shopCategoryForm.enable(),this._globalFunctions.successErrorHandling(a,this,!0))},a=>{this.shopCategoryForm.enable(),this._globalFunctions.errorHanding(a,this,!0)})}closeDailog(){this.matDialogRef.close()}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(g.so),t.Y36(g.WI),t.Y36(l.qu),t.Y36(C),t.Y36(v._W),t.Y36(u.F0),t.Y36(h.E))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-shop-category"]],viewQuery:function(a,r){if(1&a&&t.Gf(F,5),2&a){let i;t.iGM(i=t.CRH())&&(r.shopCategoryNgForm=i.first)}},decls:28,vars:8,consts:[[1,"max-w-4xl","w-full","rounded-[50px]","bg-white","p-9"],[1,"flex","items-center","justify-between"],[1,"block","text-32","font-semibold"],[1,"block","icon-add","rotate-45","text-3xl","font-extrabold","cursor-pointer",3,"click"],[1,"flex","flex-wrap","mt-9","-mx-2.5",3,"formGroup","ngSubmit"],["shopCategoryNgForm","ngForm"],[1,"w-1/2","p-2.5","-mb-4"],["for","item_name",1,"block","text-sm","font-medium","text-gray_2"],["appearance","outline","color","primary",1,"example-full-width","addDiscount","w-full","mt-2"],["type","text","matInput","","placeholder","Name",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],["class","error-message",4,"ngIf"],[1,"flex","items-center","mt-[18px]"],["formControlName","status",1,"block","custom-slide-toggle"],[1,"w-full","p-2.5","-mb-4"],["matInput","","name","questionText","placeholder","Description...",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],[1,"flex","items-center","justify-center","mt-4","p-2.5","mx-auto"],["type","button","mat-flat-button","","mat-flat-button","",1,"block","text-xs","sm:text-sm","font-medium","whitespace-nowrap","text-white","hover:text-primary","bg-primary","hover:bg-white","anim","border","border-primary","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","md:px-8","lg:px-10","xl:px-12",3,"click"],[1,"error-message"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t.NdJ("click",function(){return r.closeDailog()}),t.qZA()(),t.TgZ(5,"form",4,5),t.NdJ("ngSubmit",function(){return r.onSubmitAction()}),t.TgZ(7,"div",6)(8,"label",7),t._uU(9,"Name"),t.qZA(),t.TgZ(10,"mat-form-field",8),t._UZ(11,"input",9),t.YNc(12,N,2,0,"mat-error",10),t.qZA()(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15,"Product Status"),t.qZA(),t.TgZ(16,"div",11)(17,"mat-slide-toggle",12),t._uU(18),t.qZA()()(),t.TgZ(19,"div",13)(20,"label",7),t._uU(21,"Description"),t.qZA(),t.TgZ(22,"mat-form-field",8),t._UZ(23,"textarea",14),t.YNc(24,k,2,0,"mat-error",10),t.qZA()(),t.TgZ(25,"div",15)(26,"button",16),t.NdJ("click",function(){return r.onSubmitAction()}),t._uU(27),t.qZA()()()()),2&a&&(t.xp6(3),t.hij("",r.data[1].btnName," Shop"),t.xp6(2),t.Q6J("formGroup",r.shopCategoryForm),t.xp6(6),t.Q6J("formControlName","categoryname"),t.xp6(1),t.Q6J("ngIf",r.shopCategoryForm.get("categoryname").hasError("required")&&(r.shopCategoryForm.get("categoryname").dirty||r.shopCategoryForm.get("categoryname").touched)),t.xp6(6),t.hij(" ",!0===r.shopCategoryForm.get("status").value?"Active":"Disabled"," "),t.xp6(5),t.Q6J("formControlName","description"),t.xp6(1),t.Q6J("ngIf",r.shopCategoryForm.get("description").hasError("required")&&(r.shopCategoryForm.get("description").dirty||r.shopCategoryForm.get("description").touched)),t.xp6(3),t.hij("",r.data[1].btnName," Shop"))},dependencies:[m.O5,_.Rr,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,f.KE,f.TO,b.Nt]})}return o})();var T=n(5986),w=n(3365);function Y(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"th",42)(1,"mat-checkbox",43),t.NdJ("change",function(r){t.CHM(e);const i=t.oxw(4);return t.KtG(r?i.toggleAllRows():null)}),t.qZA()()}if(2&o){const e=t.oxw(4);t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function E(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",44)(1,"mat-checkbox",45),t.NdJ("click",function(r){return r.stopPropagation()})("change",function(r){const c=t.CHM(e).$implicit,d=t.oxw(4);return t.KtG(r?d.selection.toggle(c):null)}),t.qZA()()}if(2&o){const e=s.$implicit,a=t.oxw(4);t.xp6(1),t.Q6J("checked",a.selection.isSelected(e))("aria-label",a.checkboxLabel(e))}}function J(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1," Category Name "),t.qZA())}function U(o,s){if(1&o&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.categoryname," ")}}function Q(o,s){1&o&&(t.TgZ(0,"th",42),t._uU(1," Shop Category "),t.qZA())}function q(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function I(o,s){1&o&&(t.TgZ(0,"th",42),t._uU(1," Status "),t.qZA())}function R(o,s){if(1&o&&(t.TgZ(0,"td",44),t._UZ(1,"mat-slide-toggle",48),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("disabled",!0)("checked",e.status)}}function H(o,s){1&o&&(t.TgZ(0,"th",42),t._uU(1," Action "),t.qZA())}function O(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",44)(1,"div",49)(2,"span",50),t.NdJ("click",function(r){const c=t.CHM(e).$implicit,d=t.oxw(4);return t.KtG(d.editShopCategory(r,c))}),t.qZA()()()}}function j(o,s){1&o&&t._UZ(0,"tr",51)}function G(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw(4);return t.KtG(c.selection.toggle(i))}),t.qZA()}}function L(o,s){if(1&o&&(t.TgZ(0,"table",30),t.ynx(1,31),t.YNc(2,Y,2,3,"th",32),t.YNc(3,E,2,2,"td",33),t.BQk(),t.ynx(4,34),t.YNc(5,J,2,0,"th",35),t.YNc(6,U,2,1,"td",33),t.BQk(),t.ynx(7,36),t.YNc(8,Q,2,0,"th",32),t.YNc(9,q,2,1,"td",37),t.BQk(),t.ynx(10,38),t.YNc(11,I,2,0,"th",32),t.YNc(12,R,2,2,"td",33),t.BQk(),t.ynx(13,39),t.YNc(14,H,2,0,"th",32),t.YNc(15,O,3,0,"td",33),t.BQk(),t.YNc(16,j,1,0,"tr",40),t.YNc(17,G,1,0,"tr",41),t.qZA()),2&o){const e=t.oxw(3);t.Q6J("dataSource",e.shopCategorydata),t.xp6(16),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function z(o,s){1&o&&(t.TgZ(0,"div",53)(1,"div",54),t._UZ(2,"div",55),t.TgZ(3,"p",56),t._uU(4,"Plase wait"),t.qZA()()())}function B(o,s){if(1&o&&(t.TgZ(0,"div",27),t.YNc(1,L,18,3,"table",28),t.YNc(2,z,5,0,"div",29),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.shopCategorydata.filteredData.length>0),t.xp6(1),t.Q6J("ngIf",e.isTableLoading)}}function M(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",12),t.YNc(1,B,3,2,"div",24),t.TgZ(2,"mat-paginator",25,26),t.NdJ("page",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.getShopCategory(r))}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.shopCategorydata.filteredData.length>0),t.xp6(1),t.Q6J("length",e.totalShopCategoryData)("pageSizeOptions",e.datashowNumber)}}function P(o,s){1&o&&(t.TgZ(0,"div",57)(1,"div",58)(2,"strong",59),t._uU(3,"Categories not found..!"),t.qZA()()())}const $=[{path:"",component:(()=>{class o{constructor(e,a,r,i,c){this._router=e,this._globalFunctions=a,this._toastr=r,this.shopCategoryService=i,this.dialog=c,this.isTableLoading=!1,this.SHOP_CATEGORY_DATA=[],this.datashowNumber=[10,20,50],this.displayedColumns=["select","categoryname","description","status","action"],this.shopCategorydata=new p.by(this.SHOP_CATEGORY_DATA),this.selection=new Z.Ov(!0,[]),this.name=""}ngOnInit(){this.getShopCategory(),this.shopCategorydata.sort=this.shopCategorydataSort}ngOnChanges(){setTimeout(()=>{this.shopCategorydata.sort=this.shopCategorydataSort})}onKeySearch(e){this.searchShopCategory=e.target.value,this.getShopCategory()}getShopCategory(e=""){this.isTableLoading=!0,this.shopCategoryService.getShopCategoryList({page:(e?e.pageIndex+1:1)||"1",limit:e.pageSize||"10",search:this.searchShopCategory}).subscribe(i=>{i&&i.IsSuccess?(this.totalShopCategoryData=i.Data.totalDocs,this.SHOP_CATEGORY_DATA=i.Data.docs,this.shopCategorydata=new p.by(this.SHOP_CATEGORY_DATA),this.shopCategorydata.sort=this.shopCategorydataSort,this.isTableLoading=!1):(this.isTableLoading=!1,this._globalFunctions.successErrorHandling(i,this,!0))},i=>{this.isTableLoading=!1,this._globalFunctions.errorHanding(i,this,!0)})}editShopCategory(e,a){e.stopPropagation(),this.dialog.open(S,{width:"700px",data:[{result:a},{btnName:"Edit"}],disableClose:!0}).afterClosed().subscribe(i=>{this.getShopCategory()})}addShopCategory(){this.dialog.open(S,{width:"700px",data:[{result:null},{btnName:"Add"}],disableClose:!0}).afterClosed().subscribe(a=>{this.getShopCategory()})}isAllSelected(){return this.selection.selected.length===this.shopCategorydata.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.shopCategorydata.data)}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.categoryname+1}`:(this.isAllSelected()?"deselect":"select")+" all"}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(u.F0),t.Y36(h.E),t.Y36(v._W),t.Y36(C),t.Y36(g.uw))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop-category-data"]],viewQuery:function(a,r){if(1&a&&t.Gf(A.YE,5),2&a){let i;t.iGM(i=t.CRH())&&(r.shopCategorydataSort=i.first)}},features:[t.TTD],decls:28,vars:2,consts:[[1,"w-full","h-full","overflow-y-auto","space-y-5","lg:space-y-7","xl:space-y-9","p-5","xl:p-8","2xl:p-10"],[1,"flex","flex-wrap","sm:flex-nowrap","justify-end"],[1,"flex","flex-wrap","sm:justify-end","-mx-2"],[1,"p-2"],[1,"border","border-gray_1","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","lg:px-6","xl:px-8"],[1,"flex","items-center","space-x-2","sm:space-x-2.5","md:space-x-3"],[1,"icon-document_upload","sm:text-[18px]","lg:text-[20px]","font-medium"],[1,"text-xs","sm:text-sm","font-medium","whitespace-nowrap"],[1,"p-2","group"],[1,"bg-primary","group-hover:bg-white","anim","border","border-primary","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","lg:px-6","xl:px-8",3,"click"],[1,"icon-add","sm:text-[18px]","lg:text-[20px]","font-medium","text-white","group-hover:text-primary","anim"],[1,"text-xs","sm:text-sm","font-medium","whitespace-nowrap","text-white","group-hover:text-primary","anim"],[1,"w-full"],[1,"flex","flex-wrap","xl:flex-nowrap","items-center","justify-between"],[1,"text-xl","lg:text-2xl","whitespace-nowrap","py-4","pr-2"],[1,"flex","flex-wrap","md:flex-nowrap","items-center","float-right","-mx-2"],[1,"relative","p-2"],["for","search_two",1,"icon-search","absolute","top-1/2","-translate-y-1/2","left-6","text-lg","md:text-xl","text-gray_1","z-10"],["type","text","name","search_two","id","search_two","placeholder","Search",1,"w-full","text-xs","sm:text-sm","text-gray_1","bg-transparent","border","border-gray_5","outline-none","rounded-lg","py-2.5","pr-5","pl-11",3,"keyup"],[1,"relative","cursor-pointer","p-2"],[1,"icon-filter","absolute","top-1/2","-translate-y-1/2","left-6","text-lg","md:text-xl","text-gray_1","pointer-events-none"],["type","text","placeholder","Filter",1,"text-xs","sm:text-sm","text-gray_1","bg-transparent","border","border-gray_5","cursor-pointer","outline-none","rounded-lg","py-2.5","pr-5","pl-11"],["class","w-full",4,"ngIf"],["class","w-full flex justify-center p-5 mt-5",4,"ngIf"],["class","w-full relative overflow-x-auto mt-6",4,"ngIf"],["showFirstLastButtons","","showFirstLastButtons","","aria-label","Select page of periodic elements",1,"pt-5",3,"length","pageSizeOptions","page"],["paginator",""],[1,"w-full","relative","overflow-x-auto","mt-6"],["mat-table","","class","mat-elevation-z8","matSort","",3,"dataSource",4,"ngIf"],["class","absolute inset-0 w-full h-full flex items-center justify-center bg-slate-300/30 backdrop-blur-sm z-10",4,"ngIf"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","","class","whitespace-nowrap",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","categoryname"],["mat-header-cell","","class","whitespace-nowrap","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","description"],["mat-cell","","class","min-w-[320px]",4,"matCellDef"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"whitespace-nowrap"],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header","",1,"whitespace-nowrap"],["mat-cell","",1,"min-w-[320px]"],["color","primary",3,"disabled","checked"],[1,"w-fit","relative","flex","items-center","space-x-5","z-[1]"],[1,"icon-edit-square","text-gray_1","text-2xl","cursor-pointer",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],[1,"absolute","inset-0","w-full","h-full","flex","items-center","justify-center","bg-slate-300/30","backdrop-blur-sm","z-10"],[1,"flex","flex-col","items-center","justify-center"],[1,"w-12","h-12","rounded-full","animate-spin","border-4","border-solid","border-primary","border-t-transparent"],[1,"block","text-base","font-medium","pt-2"],[1,"w-full","flex","justify-center","p-5","mt-5"],[1,"max-w-8xl","w-full","shadow-one","rounded-2xl","p-10"],[1,"block","text-xl","lg:text-2xl","2xl:text-2xl","text-center"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"span",6),t.TgZ(7,"span",7),t._uU(8,"Export Data"),t.qZA()()()(),t.TgZ(9,"div",8)(10,"div",9),t.NdJ("click",function(){return r.addShopCategory()}),t.TgZ(11,"div",5),t._UZ(12,"span",10),t.TgZ(13,"span",11),t._uU(14,"Add"),t.qZA()()()()()(),t.TgZ(15,"div",12)(16,"div",13)(17,"strong",14),t._uU(18,"Shop Category"),t.qZA(),t.TgZ(19,"form",15)(20,"div",16),t._UZ(21,"label",17),t.TgZ(22,"input",18),t.NdJ("keyup",function(c){return r.onKeySearch(c)}),t.qZA()(),t.TgZ(23,"div",19),t._UZ(24,"span",20)(25,"input",21),t.qZA()()(),t.YNc(26,M,4,3,"div",22),t.YNc(27,P,4,0,"div",23),t.qZA()()),2&a&&(t.xp6(26),t.Q6J("ngIf",r.shopCategorydata.filteredData.length>0),t.xp6(1),t.Q6J("ngIf",0==r.shopCategorydata.filteredData.length))},dependencies:[m.O5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk,T.oG,_.Rr,l._Y,l.JL,w.NW]})}return o})()}];let K=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[m.ez,u.Bz.forChild($),p.p0,T.p9,_.rP,l.UX,f.lN,b.c,w.TU]})}return o})()}}]);
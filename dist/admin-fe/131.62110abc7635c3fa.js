"use strict";(self.webpackChunkadmin_FE=self.webpackChunkadmin_FE||[]).push([[131],{6131:(jt,C,_)=>{_.r(C),_.d(C,{FCoinModule:()=>Qt});var m=_(6814),g=_(4828),x=_(8337),s=_(5313),v=_(3566),c=_(6223),p=_(7700),t=_(5879),f=_(553),A=_(9862),h=_(9179);let b=(()=>{class e{constructor(n,i){this.http=n,this._globalFunctions=i}getCoinBalance(){return this.http.get(f.N.FEAppURL+"superadmin/fcoin/coinbalance",this._globalFunctions.getFileAuthorizationHeader())}getCoinsIn(n=""){return this.http.post(f.N.FEAppURL+"superadmin/fcoin/coinsin",n,this._globalFunctions.getAuthorizationHeader())}getCoinsOut(n=""){return this.http.post(f.N.FEAppURL+"superadmin/fcoin/coinsout",n,this._globalFunctions.getAuthorizationHeader())}generateCoins(n=""){return this.http.post(f.N.FEAppURL+"superadmin/fcoin/generatecoins",n,this._globalFunctions.getFileAuthorizationHeader())}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(A.eN),t.LFG(h.E))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Z=_(2425),T=_(2032),F=_(4170);const w=["fCoinNgForm"];function N(e,o){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," Transaction Id / Reference Id is required."),t.qZA())}function q(e,o){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," Cheque No is required."),t.qZA())}function I(e,o){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," Bank Name is required."),t.qZA())}function k(e,o){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," IFSC Code is required."),t.qZA())}function U(e,o){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," Amount is required."),t.qZA())}function O(e,o){1&e&&(t.TgZ(0,"mat-error",25),t._uU(1," Coin Amount is required."),t.qZA())}let Y=(()=>{class e{constructor(n,i,a,r,l,d,Et){this.matDialogRef=n,this.data=i,this.fb=a,this.fCoinService=r,this.toastr=l,this._router=d,this._globalFunctions=Et,this.fCoinform=c.cw}ngOnInit(){this.init()}init(){this.fCoinform=this.fb.group({transaction_reference_id:["",[c.kI.required]],chequeno:["",[c.kI.required]],bank_name:["",[c.kI.required]],ifsc_code:["",[c.kI.required]],amount:["",[c.kI.required]],coin_amount:["",[c.kI.required]],description:["",[c.kI.required]],notes:["",[c.kI.required]],document_file:[""]})}get f(){return this.fCoinform.controls}calculateCoinAmount(){const n=this.fCoinform?.get("amount")?.value||0;this.fCoinform.get("coin_amount").setValue(25*(n||0))}onSubmitAction(){if(!this.fCoinform.valid)return this.toastr.clear(),void this.toastr.error("Please enter valid data.","Oops!");const n=this.prepareItemsObj(this.fCoinform.value);this.fCoinform.disable(),this.fCoinService.generateCoins(n).subscribe(i=>{i&&i.IsSuccess?(this.toastr.clear(),this.toastr.success(i.Message,"Success"),this.matDialogRef.close()):(this.fCoinform.enable(),this._globalFunctions.successErrorHandling(i,this,!0))},i=>{this.fCoinform.enable(),this._globalFunctions.errorHanding(i,this,!0)})}prepareItemsObj(n){let i=new FormData;for(const l in n)"document_file"!==l&&i.append(l,n[l]);const r=document.getElementById("upload_type").files[0];return void 0!==r&&i.append("file",r),i}closeDialog(){this.matDialogRef.close()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(p.so),t.Y36(p.WI),t.Y36(c.qu),t.Y36(b),t.Y36(Z._W),t.Y36(g.F0),t.Y36(h.E))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-edit-f-coin"]],viewQuery:function(i,a){if(1&i&&t.Gf(w,5),2&i){let r;t.iGM(r=t.CRH())&&(a.fCoinNgForm=r.first)}},decls:74,vars:17,consts:[[1,"max-w-4xl","w-full","rounded-[50px]","bg-white","p-9"],[1,"flex","items-center","justify-between"],[1,"block","text-32","font-semibold"],[1,"block","icon-add","rotate-45","text-3xl","font-extrabold","cursor-pointer",3,"click"],[1,"flex","flex-wrap","mt-9","-mx-2.5",3,"formGroup","ngSubmit"],["fCoinNgForm","ngForm"],[1,"w-1/2","p-2.5","-mb-4"],["for","item_name",1,"block","text-sm","font-medium","text-gray_2"],["appearance","outline","color","primary",1,"example-full-width","addDiscount","w-full","mt-2"],["type","text","matInput","","placeholder","Transaction Id / Reference Id",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],["class","error-message",4,"ngIf"],["type","text","matInput","","placeholder","Cheque No",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],["type","text","matInput","","placeholder","Bank Name",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],["type","text","matInput","","placeholder","IFSC Code",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],["type","text","matInput","","placeholder","Amount",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName","keyup"],["type","text","matInput","","placeholder","Coin Amount",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],[1,"block","text-sm","font-medium","text-gray_2"],[1,"relative","flex","items-center","justify-center","w-full","h-[52px]","rounded-lg","overflow-hidden","group","mt-2.5"],[1,"absolute","inset-0","w-full","flex","items-center","justify-center","z-20"],["for","upload_type",1,"cursor-pointer","flex","space-x-2","items-center","justify-center","w-full","h-full","inset-0","absolute"],[1,"icon-document_align_left","text-lg","text-gray_2","inline-block"],["type","file","name","upload_type","id","upload_type",1,"max-w-[120px]","whitespace-nowrap","text-ellipsis",3,"multiple","accept"],[1,"w-full","h-full","bg-gray_4","border","border-dashed","border-gray_1","overflow-hidden","rounded-lg","relative","z-[1]"],[1,"object-cover","w-full","h-full"],["type","text","matInput","","placeholder","Notes",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],[1,"error-message"],[1,"w-full","p-2.5","-mb-4"],["matInput","","name","questionText","placeholder","Description...",1,"font-medium","text-gray_3","placeholder:text-gray_3",3,"formControlName"],[1,"flex","items-center","justify-center","mt-4","p-2.5","mx-auto","space-x-4"],["type","button","mat-flat-button","","mat-flat-button","",1,"block","text-xs","sm:text-sm","font-medium","whitespace-nowrap","text-white","hover:text-primary","bg-primary","hover:bg-white","anim","border","border-primary","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","md:px-8","lg:px-10","xl:px-12",3,"click"],["type","button","mat-flat-button","","mat-flat-button","",1,"block","text-xs","sm:text-sm","font-medium","whitespace-nowrap","border","border-gray_2","hover:text-white","hover:bg-dark","anim","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","md:px-8","lg:px-10","xl:px-12",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Add F-Coin"),t.qZA(),t.TgZ(4,"span",3),t.NdJ("click",function(){return a.closeDialog()}),t.qZA()(),t.TgZ(5,"form",4,5),t.NdJ("ngSubmit",function(){return a.onSubmitAction()}),t.TgZ(7,"div",6)(8,"label",7),t._uU(9,"Transaction Id / Reference Id"),t.qZA(),t.TgZ(10,"mat-form-field",8),t._UZ(11,"input",9),t.YNc(12,N,2,0,"mat-error",10),t.qZA()(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15,"Cheque No"),t.qZA(),t.TgZ(16,"mat-form-field",8),t._UZ(17,"input",11),t.YNc(18,q,2,0,"mat-error",10),t.qZA()(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21,"Bank Name"),t.qZA(),t.TgZ(22,"mat-form-field",8),t._UZ(23,"input",12),t.YNc(24,I,2,0,"mat-error",10),t.qZA()(),t.TgZ(25,"div",6)(26,"label",7),t._uU(27,"IFSC Code"),t.qZA(),t.TgZ(28,"mat-form-field",8),t._UZ(29,"input",13),t.YNc(30,k,2,0,"mat-error",10),t.qZA()(),t.TgZ(31,"div",6)(32,"label",7),t._uU(33,"Amount"),t.qZA(),t.TgZ(34,"mat-form-field",8)(35,"input",14),t.NdJ("keyup",function(){return a.calculateCoinAmount()}),t.qZA(),t.YNc(36,U,2,0,"mat-error",10),t.qZA()(),t.TgZ(37,"div",6)(38,"label",7),t._uU(39,"Coin Amount"),t.qZA(),t.TgZ(40,"mat-form-field",8),t._UZ(41,"input",15),t.YNc(42,O,2,0,"mat-error",10),t.qZA()(),t.TgZ(43,"div",6)(44,"span",16),t._uU(45,"Choose File "),t.TgZ(46,"small"),t._uU(47,"(This can be image or pdf file(upload option))"),t.qZA()(),t.TgZ(48,"div",17)(49,"div",18)(50,"label",19),t._UZ(51,"span",20)(52,"input",21),t.qZA()(),t.TgZ(53,"div",22),t._UZ(54,"img",23),t.qZA()()(),t.TgZ(55,"div",6)(56,"label",7),t._uU(57,"Notes"),t.qZA(),t.TgZ(58,"mat-form-field",8),t._UZ(59,"input",24),t.TgZ(60,"mat-error",25),t._uU(61," Notes is required."),t.qZA()()(),t.TgZ(62,"div",26)(63,"label",7),t._uU(64,"Description"),t.qZA(),t.TgZ(65,"mat-form-field",8),t._UZ(66,"textarea",27),t.TgZ(67,"mat-error",25),t._uU(68," Description is required."),t.qZA()()(),t.TgZ(69,"div",28)(70,"button",29),t.NdJ("click",function(){return a.onSubmitAction()}),t._uU(71,"Add Coin"),t.qZA(),t.TgZ(72,"button",30),t.NdJ("click",function(){return a.closeDialog()}),t._uU(73,"Cancel"),t.qZA()()()()),2&i&&(t.xp6(5),t.Q6J("formGroup",a.fCoinform),t.xp6(6),t.Q6J("formControlName","transaction_reference_id"),t.xp6(1),t.Q6J("ngIf",a.fCoinform.get("transaction_reference_id").hasError("required")&&(a.fCoinform.get("transaction_reference_id").dirty||a.fCoinform.get("transaction_reference_id").touched)),t.xp6(5),t.Q6J("formControlName","chequeno"),t.xp6(1),t.Q6J("ngIf",a.fCoinform.get("chequeno").hasError("required")&&(a.fCoinform.get("chequeno").dirty||a.fCoinform.get("chequeno").touched)),t.xp6(5),t.Q6J("formControlName","bank_name"),t.xp6(1),t.Q6J("ngIf",a.fCoinform.get("bank_name").hasError("required")&&(a.fCoinform.get("bank_name").dirty||a.fCoinform.get("bank_name").touched)),t.xp6(5),t.Q6J("formControlName","ifsc_code"),t.xp6(1),t.Q6J("ngIf",a.fCoinform.get("ifsc_code").hasError("required")&&(a.fCoinform.get("ifsc_code").dirty||a.fCoinform.get("ifsc_code").touched)),t.xp6(5),t.Q6J("formControlName","amount"),t.xp6(1),t.Q6J("ngIf",a.fCoinform.get("amount").hasError("required")&&(a.fCoinform.get("amount").dirty||a.fCoinform.get("amount").touched)),t.xp6(5),t.Q6J("formControlName","coin_amount"),t.xp6(1),t.Q6J("ngIf",a.fCoinform.get("coin_amount").hasError("required")&&(a.fCoinform.get("coin_amount").dirty||a.fCoinform.get("coin_amount").touched)),t.xp6(10),t.Q6J("multiple",!1)("accept","application/pdf,image/jpeg, image/png"),t.xp6(7),t.Q6J("formControlName","notes"),t.xp6(7),t.Q6J("formControlName","description"))},dependencies:[m.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,T.Nt,F.KE,F.TO],styles:["input#upload_type[_ngcontent-%COMP%]::-webkit-file-upload-button{display:none}"]})}return e})();var S=_(9140),u=_(4104),y=_(5986),D=_(3365);function J(e,o){1&e&&(t._UZ(0,"span",42),t.TgZ(1,"span",43),t._uU(2,"F-coin Added"),t.qZA())}function Q(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"th",68)(1,"mat-checkbox",69),t.NdJ("change",function(a){t.CHM(n);const r=t.oxw(4);return t.KtG(a?r.toggleAllRows():null)}),t.qZA()()}if(2&e){const n=t.oxw(4);t.xp6(1),t.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())("aria-label",n.checkboxLabel())}}function E(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",70)(1,"mat-checkbox",71),t.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const l=t.CHM(n).$implicit,d=t.oxw(4);return t.KtG(a?d.selection.toggle(l):null)}),t.qZA()()}if(2&e){const n=o.$implicit,i=t.oxw(4);t.xp6(1),t.Q6J("checked",i.selection.isSelected(n))("aria-label",i.checkboxLabel(n))}}function j(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Ref No "),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.transaction_reference_id," ")}}function R(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Cheque No "),t.qZA())}function L(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.chequeno," ")}}function H(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Bank Name "),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.bank_name," ")}}function M(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," IFSC NO "),t.qZA())}function z(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.ifsc_code," ")}}function G(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Amount "),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.amount," ")}}function P(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Coin "),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.coin_amount," ")}}function X(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Data & Time "),t.qZA())}function W(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.timestamp,"dd - MMM, yyyy")," ")}}function tt(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Created By "),t.qZA())}function et(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.created_by," ")}}function nt(e,o){1&e&&(t.TgZ(0,"th",74),t._uU(1," Documents "),t.qZA())}function ot(e,o){if(1&e&&(t.TgZ(0,"a",78),t.NdJ("click",function(i){return i.stopPropagation()}),t._UZ(1,"span",79),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw(4);t.s9C("href",i.constants.FEBaseImageURL+n.document_file,t.LSH)}}function it(e,o){1&e&&(t.TgZ(0,"div",80),t._UZ(1,"span",79),t.qZA())}function at(e,o){if(1&e&&(t.TgZ(0,"td",73)(1,"div",75),t.YNc(2,ot,2,1,"a",76),t.YNc(3,it,2,0,"div",77),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Q6J("ngIf",n.document_file),t.xp6(1),t.Q6J("ngIf",""==n.document_file)}}function rt(e,o){1&e&&t._UZ(0,"tr",81)}function lt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr",82),t.NdJ("click",function(){const r=t.CHM(n).$implicit,l=t.oxw(4);return t.KtG(l.selection.toggle(r))}),t.qZA()}}function _t(e,o){if(1&e&&(t.TgZ(0,"table",50),t.ynx(1,51),t.YNc(2,Q,2,3,"th",52),t.YNc(3,E,2,2,"td",53),t.BQk(),t.ynx(4,54),t.YNc(5,j,2,0,"th",55),t.YNc(6,B,2,1,"td",56),t.BQk(),t.ynx(7,57),t.YNc(8,R,2,0,"th",55),t.YNc(9,L,2,1,"td",56),t.BQk(),t.ynx(10,58),t.YNc(11,H,2,0,"th",55),t.YNc(12,$,2,1,"td",56),t.BQk(),t.ynx(13,59),t.YNc(14,M,2,0,"th",55),t.YNc(15,z,2,1,"td",56),t.BQk(),t.ynx(16,60),t.YNc(17,G,2,0,"th",55),t.YNc(18,K,2,1,"td",56),t.BQk(),t.ynx(19,61),t.YNc(20,P,2,0,"th",55),t.YNc(21,V,2,1,"td",56),t.BQk(),t.ynx(22,62),t.YNc(23,X,2,0,"th",55),t.YNc(24,W,3,4,"td",56),t.BQk(),t.ynx(25,63),t.YNc(26,tt,2,0,"th",55),t.YNc(27,et,2,1,"td",56),t.BQk(),t.ynx(28,64),t.YNc(29,nt,2,0,"th",65),t.YNc(30,at,4,2,"td",56),t.BQk(),t.YNc(31,rt,1,0,"tr",66),t.YNc(32,lt,1,0,"tr",67),t.qZA()),2&e){const n=t.oxw(3);t.Q6J("dataSource",n.fCoinInData),t.xp6(31),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}function ct(e,o){1&e&&(t.TgZ(0,"div",83)(1,"div",84),t._UZ(2,"div",85),t.TgZ(3,"p",86),t._uU(4,"Plase wait"),t.qZA()()())}function st(e,o){if(1&e&&(t.TgZ(0,"div",47),t.YNc(1,_t,33,3,"table",48),t.YNc(2,ct,5,0,"div",49),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.fCoinInData.filteredData.length>0),t.xp6(1),t.Q6J("ngIf",n.isTableLoading)}}function dt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",26),t.YNc(1,st,3,2,"div",44),t.TgZ(2,"mat-paginator",45,46),t.NdJ("page",function(a){t.CHM(n);const r=t.oxw();return t.KtG(r.getFCoinInData(a))}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.fCoinInData.filteredData.length>0),t.xp6(1),t.Q6J("length",n.totalFCoinInData)("pageSizeOptions",n.datashowNumber)}}function mt(e,o){1&e&&(t.TgZ(0,"div",87)(1,"div",88)(2,"strong",89),t._uU(3,"F-Coins not added..!"),t.qZA()()())}function pt(e,o){1&e&&(t._UZ(0,"span",42),t.TgZ(1,"span",43),t._uU(2,"F-coin Out"),t.qZA())}function ft(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"th",68)(1,"mat-checkbox",69),t.NdJ("change",function(a){t.CHM(n);const r=t.oxw(4);return t.KtG(a?r.toggleAllRowsForFCoinOut():null)}),t.qZA()()}if(2&e){const n=t.oxw(4);t.xp6(1),t.Q6J("checked",n.fCoinOutSelection.hasValue()&&n.isAllSelectedForFCoinOut())("indeterminate",n.fCoinOutSelection.hasValue()&&!n.isAllSelectedForFCoinOut())("aria-label",n.checkboxLabeForFCoinOut())}}function ut(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",70)(1,"mat-checkbox",71),t.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const l=t.CHM(n).$implicit,d=t.oxw(4);return t.KtG(a?d.fCoinOutSelection.toggle(l):null)}),t.qZA()()}if(2&e){const n=o.$implicit,i=t.oxw(4);t.xp6(1),t.Q6J("checked",i.fCoinOutSelection.isSelected(n))("aria-label",i.checkboxLabeForFCoinOut(n))}}function gt(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Transaction Type "),t.qZA())}function ht(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.transaction_type," ")}}function Ct(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Sender / Receiver Name "),t.qZA())}function xt(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.receiver_sender_name," ")}}function vt(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Refer Form "),t.qZA())}function bt(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.refer_form," ")}}function Zt(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Refer To "),t.qZA())}function Tt(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.refer_to," ")}}function Ft(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Coin Amount "),t.qZA())}function yt(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.f_coins," ")}}function Dt(e,o){1&e&&(t.TgZ(0,"th",72),t._uU(1," Date & Time "),t.qZA())}function At(e,o){if(1&e&&(t.TgZ(0,"td",73),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.timestamp,"dd - MMM, yyyy")," ")}}function wt(e,o){1&e&&t._UZ(0,"tr",81)}function Nt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr",82),t.NdJ("click",function(){const r=t.CHM(n).$implicit,l=t.oxw(4);return t.KtG(l.fCoinOutSelection.toggle(r))}),t.qZA()}}function qt(e,o){if(1&e&&(t.TgZ(0,"table",50),t.ynx(1,51),t.YNc(2,ft,2,3,"th",52),t.YNc(3,ut,2,2,"td",53),t.BQk(),t.ynx(4,93),t.YNc(5,gt,2,0,"th",55),t.YNc(6,ht,2,1,"td",56),t.BQk(),t.ynx(7,94),t.YNc(8,Ct,2,0,"th",55),t.YNc(9,xt,2,1,"td",56),t.BQk(),t.ynx(10,95),t.YNc(11,vt,2,0,"th",55),t.YNc(12,bt,2,1,"td",56),t.BQk(),t.ynx(13,96),t.YNc(14,Zt,2,0,"th",55),t.YNc(15,Tt,2,1,"td",56),t.BQk(),t.ynx(16,97),t.YNc(17,Ft,2,0,"th",55),t.YNc(18,yt,2,1,"td",56),t.BQk(),t.ynx(19,62),t.YNc(20,Dt,2,0,"th",55),t.YNc(21,At,3,4,"td",56),t.BQk(),t.YNc(22,wt,1,0,"tr",66),t.YNc(23,Nt,1,0,"tr",67),t.qZA()),2&e){const n=t.oxw(3);t.Q6J("dataSource",n.fCoinOutData),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayColumOfFCoinOut),t.xp6(1),t.Q6J("matRowDefColumns",n.displayColumOfFCoinOut)}}function It(e,o){1&e&&(t.TgZ(0,"div",83)(1,"div",84),t._UZ(2,"div",85),t.TgZ(3,"p",86),t._uU(4,"Plase wait"),t.qZA()()())}function kt(e,o){if(1&e&&(t.TgZ(0,"div",91),t.YNc(1,qt,24,3,"table",92),t.YNc(2,It,5,0,"div",49),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.fCoinOutData.filteredData.length>0),t.xp6(1),t.Q6J("ngIf",n.isTableLoading)}}function Ut(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",26),t.YNc(1,kt,3,2,"div",90),t.TgZ(2,"mat-paginator",45,46),t.NdJ("page",function(a){t.CHM(n);const r=t.oxw();return t.KtG(r.getFCoinOutData(a))}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.fCoinOutData.filteredData.length>0),t.xp6(1),t.Q6J("length",n.totalFCoinOutData)("pageSizeOptions",n.datashowNumber)}}function Ot(e,o){1&e&&(t.TgZ(0,"div",87)(1,"div",88)(2,"strong",89),t._uU(3,"F-Coins not Out..!"),t.qZA()()())}let Yt=(()=>{class e{constructor(n,i,a,r,l){this._router=n,this._globalFunctions=i,this._toastr=a,this.fCoinService=r,this.dialog=l,this.F_COIN_IN_DATA=[],this.F_COIN_OUT_DATA=[],this.isTableLoading=!1,this.constants=S.t,this.datashowNumber=[10,20,50],this.displayedColumns=["select","transaction_reference_id","chequeno","bank_name","ifsc_code","amount","coin_amount","timestamp","created_by","document_file"],this.fCoinInData=new s.by(this.F_COIN_IN_DATA),this.selection=new x.Ov(!0,[]),this.displayColumOfFCoinOut=["select","transaction_type","receiver_sender_name","refer_form","refer_to","f_coins","timestamp"],this.fCoinOutData=new s.by(this.F_COIN_OUT_DATA),this.fCoinOutSelection=new x.Ov(!0,[])}ngOnInit(){this.fCoinService.getCoinBalance().subscribe(n=>{n&&n.IsSuccess?this.totalFCoinBalance=n.Data?.fcoins:this._globalFunctions.successErrorHandling(n,this,!0)},n=>{this._globalFunctions.errorHanding(n,this,!0)}),this.getFCoinInData(),this.getFCoinOutData()}onKeySearch(n,i){"fCoinIn"==i?(this.searchFCoinIn=n.target.value,this.getFCoinInData()):(this.searchFCoinOut=n.target.value,this.getFCoinOutData())}getFCoinInData(n=""){this.isTableLoading=!0,this.fCoinService.getCoinsIn({page:(n?n.pageIndex+1:1)||"1",limit:n.pageSize||"10",search:this.searchFCoinIn}).subscribe(r=>{r&&r.IsSuccess?(this.totalFCoinInData=r.Data.totalDocs,r.Data.docs.map(l=>{l.created_by=l.createdBy?l.createdBy?.name:""}),this.F_COIN_IN_DATA=r.Data.docs,this.fCoinInData=new s.by(this.F_COIN_IN_DATA),this.fCoinInData.sort=this.fCoinInSort,this.isTableLoading=!1):(this.isTableLoading=!1,this._globalFunctions.successErrorHandling(r,this,!0))},r=>{this.isTableLoading=!1,this._globalFunctions.errorHanding(r,this,!0)})}getFCoinOutData(n=""){this.isTableLoading=!0,this.fCoinService.getCoinsOut({page:(n?n.pageIndex+1:1)||"1",limit:n.pageSize||"10",search:this.searchFCoinOut}).subscribe(r=>{r&&r.IsSuccess?(this.totalFCoinOutData=r.Data.totalDocs,r.Data.docs.map(l=>{l.receiver_sender_name=l.receiver_id?l.receiver_id?.name:l.sender_id?.name,l.refer_form=l.refer_data?.from_refer?l.refer_data?.from_refer?.name:"",l.refer_to=l.refer_data?.from_refer?l.refer_data?.from_refer?.name:""}),this.F_COIN_OUT_DATA=r.Data.docs,this.fCoinOutData=new s.by(this.F_COIN_OUT_DATA),this.fCoinOutData.sort=this.fCoinOutSort,this.isTableLoading=!1):(this.isTableLoading=!1,this._globalFunctions.successErrorHandling(r,this,!0))},r=>{this.isTableLoading=!1,this._globalFunctions.errorHanding(r,this,!0)})}addEditFCoin(){this.dialog.open(Y,{width:"900px",disableClose:!0}).afterClosed().subscribe(i=>{this.getFCoinInData()})}isAllSelected(){return(this.selection.selected.length&&this.selection.selected.length)===(this.fCoinInData.data.length&&this.fCoinInData.data.length)}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.fCoinInData.data)}checkboxLabel(n){return n?`${this.selection.isSelected(n)?"deselect":"select"} row ${n.chequeno+1}`:(this.isAllSelected()?"deselect":"select")+" all"}isAllSelectedForFCoinOut(){return(this.fCoinOutSelection.selected.length&&this.fCoinOutSelection.selected.length)===(this.fCoinOutData.data.length&&this.fCoinInData.data.length)}toggleAllRowsForFCoinOut(){this.isAllSelected()?this.fCoinOutSelection.clear():this.fCoinOutSelection.select(...this.fCoinOutData.data)}checkboxLabeForFCoinOut(n){return n?`${this.fCoinOutSelection.isSelected(n)?"deselect":"select"} row ${n.transaction_type+1}`:(this.isAllSelected()?"deselect":"select")+" all"}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(g.F0),t.Y36(h.E),t.Y36(Z._W),t.Y36(b),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-f-coin-data"]],viewQuery:function(i,a){if(1&i&&(t.Gf(v.YE,5),t.Gf(v.YE,5)),2&i){let r;t.iGM(r=t.CRH())&&(a.fCoinInSort=r.first),t.iGM(r=t.CRH())&&(a.fCoinOutSort=r.first)}},decls:65,vars:5,consts:[[1,"w-full","h-full","overflow-y-auto","space-y-5","lg:space-y-7","xl:space-y-9","p-5","xl:p-8","2xl:p-10"],[1,"flex","flex-wrap","sm:flex-nowrap","justify-between","space-y-3","sm:space-y-0","sm:space-x-3"],[1,"max-w-[288px]","flex","flex-col","w-full","border","border-gray_5","rounded-xl","p-3.5","md:p-4","lg:p-5"],[1,"flex","items-center","justify-between"],[1,"block","text-sm","whitespace-nowrap","text-gray_1","pr-1"],[1,"bg-light_primary","rounded-lg"],[1,"icon-f_coin","text-sm","lg:text-base","w-7","md:w-8","lg:w-9","h-7","md:h-8","lg:h-9","flex","items-center","justify-center","text-primary"],[1,"w-full","pt-4","mt-auto"],[1,"block","text-xl","md:text-22","lg:text-2xl","xl:text-28","font-bold"],[1,"flex","items-center","space-x-2","mt-2"],[1,"flex","items-center","space-x-1","bg-gray_6","rounded-md","p-1"],[1,"icon-up_arrow","text-10","text-persion_green"],[1,"block","text-xs","text-persion_green"],[1,"flex","items-center"],[1,"block","text-sm","text-gray_1"],[1,"icon-down_arrow1","text-gray_1"],[1,"flex","flex-wrap","sm:justify-end","-mx-2"],[1,"p-2"],[1,"border","border-gray_1","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","lg:px-6","xl:px-8"],[1,"flex","items-center","space-x-2","sm:space-x-2.5","md:space-x-3"],[1,"icon-document_upload","sm:text-[18px]","lg:text-[20px]","font-medium"],[1,"text-xs","sm:text-sm","font-medium","whitespace-nowrap"],[1,"p-2","group"],[1,"bg-primary","group-hover:bg-white","anim","border","border-primary","cursor-pointer","rounded-lg","py-2.5","sm:py-2.5","2xl:py-3.5","px-5","lg:px-6","xl:px-8",3,"click"],[1,"icon-add","sm:text-[18px]","lg:text-[20px]","font-medium","text-white","group-hover:text-primary","anim"],[1,"text-xs","sm:text-sm","font-medium","whitespace-nowrap","text-white","group-hover:text-primary","anim"],[1,"w-full"],["animationDuration","0ms"],["mat-tab-label",""],[1,"w-full","overflow-hidden","pt-5"],[1,"flex","flex-wrap","xl:flex-nowrap","items-center","justify-between"],[1,"text-xl","lg:text-2xl","whitespace-nowrap","py-4","pr-2"],[1,"flex","flex-wrap","md:flex-nowrap","items-center","float-right","-mx-2"],[1,"relative","p-2"],["for","search_two",1,"icon-search","absolute","top-1/2","-translate-y-1/2","left-6","text-lg","md:text-xl","text-gray_1","z-10"],["type","text","name","search_two","id","search_two","placeholder","Search",1,"w-full","text-xs","sm:text-sm","text-gray_1","bg-transparent","border","border-gray_5","outline-none","rounded-lg","py-2.5","pr-5","pl-11",3,"keyup"],[1,"relative","cursor-pointer","p-2"],[1,"icon-filter","absolute","top-1/2","-translate-y-1/2","left-6","text-lg","md:text-xl","text-gray_1","pointer-events-none"],["type","text","placeholder","Filter",1,"text-xs","sm:text-sm","text-gray_1","bg-transparent","border","border-gray_5","cursor-pointer","outline-none","rounded-lg","py-2.5","pr-5","pl-11"],["class","w-full",4,"ngIf"],["class","w-full flex justify-center p-5 mt-5",4,"ngIf"],[1,"flex","flex-wrap","items-center","justify-between"],[1,"block","icon-f_coin","text-xl"],[1,"block","pl-3"],["class","w-full relative overflow-x-auto pt-8",4,"ngIf"],["showFirstLastButtons","","showFirstLastButtons","","aria-label","Select page of periodic elements",1,"pt-5",3,"length","pageSizeOptions","page"],["paginator",""],[1,"w-full","relative","overflow-x-auto","pt-8"],["mat-table","","class","mat-elevation-z8","matSort","",3,"dataSource",4,"ngIf"],["class","absolute inset-0 w-full h-full flex items-center justify-center bg-slate-300/30 backdrop-blur-sm z-10",4,"ngIf"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","transaction_reference_id"],["mat-header-cell","","class","whitespace-nowrap",4,"matHeaderCellDef"],["mat-cell","","class","whitespace-nowrap",4,"matCellDef"],["matColumnDef","chequeno"],["matColumnDef","bank_name"],["matColumnDef","ifsc_code"],["matColumnDef","amount"],["matColumnDef","coin_amount"],["matColumnDef","timestamp"],["matColumnDef","created_by"],["matColumnDef","document_file"],["mat-header-cell","","class","whitespace-nowrap text-center",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","",1,"whitespace-nowrap"],["mat-cell","",1,"whitespace-nowrap"],["mat-header-cell","",1,"whitespace-nowrap","text-center"],[1,"flex","items-center","justify-center","space-x-3"],["target","_blank","class","block text-green-500",3,"href","click",4,"ngIf"],["class","block text-red-600",4,"ngIf"],["target","_blank",1,"block","text-green-500",3,"href","click"],[1,"block","icon-document_align_left","text-xl","font-medium","cursor-pointer"],[1,"block","text-red-600"],["mat-header-row",""],["mat-row","",3,"click"],[1,"absolute","inset-0","w-full","h-full","flex","items-center","justify-center","bg-slate-300/30","backdrop-blur-sm","z-10"],[1,"flex","flex-col","items-center","justify-center"],[1,"w-12","h-12","rounded-full","animate-spin","border-4","border-solid","border-primary","border-t-transparent"],[1,"block","text-base","font-medium","pt-2"],[1,"w-full","flex","justify-center","p-5","mt-5"],[1,"max-w-8xl","w-full","shadow-one","rounded-2xl","p-10"],[1,"block","text-xl","lg:text-2xl","2xl:text-2xl","text-center"],["class","w-full overflow-x-auto pt-8",4,"ngIf"],[1,"w-full","overflow-x-auto","pt-8"],["mat-table","","class","mat-elevation-z8","matSort","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],["matColumnDef","transaction_type"],["matColumnDef","receiver_sender_name"],["matColumnDef","refer_form"],["matColumnDef","refer_to"],["matColumnDef","f_coins"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5,"Total F-Coin Balance"),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"span",6),t.qZA()(),t.TgZ(8,"div",7)(9,"span",8),t._uU(10),t.qZA(),t.TgZ(11,"div",9)(12,"div",10),t._UZ(13,"span",11),t.TgZ(14,"span",12),t._uU(15,"16.24 %"),t.qZA()(),t.TgZ(16,"div",13)(17,"span",14),t._uU(18,"This Month"),t.qZA(),t._UZ(19,"span",15),t.qZA()()()(),t.TgZ(20,"div",16)(21,"div",17)(22,"div",18)(23,"div",19),t._UZ(24,"span",20),t.TgZ(25,"span",21),t._uU(26,"Export Data"),t.qZA()()()(),t.TgZ(27,"div",22)(28,"div",23),t.NdJ("click",function(){return a.addEditFCoin()}),t.TgZ(29,"div",19),t._UZ(30,"span",24),t.TgZ(31,"span",25),t._uU(32,"Add Coin"),t.qZA()()()()()(),t.TgZ(33,"div",26)(34,"mat-tab-group",27)(35,"mat-tab"),t.YNc(36,J,3,0,"ng-template",28),t.TgZ(37,"div",29)(38,"div",30)(39,"strong",31),t._uU(40,"F-Coin Added"),t.qZA(),t.TgZ(41,"form",32)(42,"div",33),t._UZ(43,"label",34),t.TgZ(44,"input",35),t.NdJ("keyup",function(l){return a.onKeySearch(l,"fCoinIn")}),t.qZA()(),t.TgZ(45,"div",36),t._UZ(46,"span",37)(47,"input",38),t.qZA()()(),t.YNc(48,dt,4,3,"div",39),t.YNc(49,mt,4,0,"div",40),t.qZA()(),t.TgZ(50,"mat-tab"),t.YNc(51,pt,3,0,"ng-template",28),t.TgZ(52,"div",29)(53,"div",41)(54,"strong",31),t._uU(55,"F-Coin Out"),t.qZA(),t.TgZ(56,"form",32)(57,"div",33),t._UZ(58,"label",34),t.TgZ(59,"input",35),t.NdJ("keyup",function(l){return a.onKeySearch(l,"fCoinOut")}),t.qZA()(),t.TgZ(60,"div",36),t._UZ(61,"span",37)(62,"input",38),t.qZA()()(),t.YNc(63,Ut,4,3,"div",39),t.YNc(64,Ot,4,0,"div",40),t.qZA()()()()()),2&i&&(t.xp6(10),t.Oqu(a.totalFCoinBalance),t.xp6(38),t.Q6J("ngIf",a.fCoinInData.filteredData.length>0),t.xp6(1),t.Q6J("ngIf",0==a.fCoinInData.filteredData.length),t.xp6(14),t.Q6J("ngIf",a.fCoinOutData.filteredData.length>0),t.xp6(1),t.Q6J("ngIf",0==a.fCoinOutData.filteredData.length))},dependencies:[m.O5,u.uD,u.uX,u.SP,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,y.oG,c._Y,c.JL,c.F,D.NW,m.uU],styles:[".mdc-data-table__header-cell.text-center[_ngcontent-%COMP%]{text-align:center!important}"]})}return e})();var St=_(2599);const Jt=[{path:"",component:Yt}];let Qt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[m.ez,g.Bz.forChild(Jt),u.Nh,s.p0,y.p9,c.u5,c.UX,T.c,p.Is,St.rP,D.TU]})}return e})()}}]);
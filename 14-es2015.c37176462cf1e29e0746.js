(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{YekW:function(t,e,a){"use strict";a.r(e),a.d(e,"CarTypesModule",function(){return rt});var i=a("tyNb"),s=a("bTqV"),n=a("bSwM"),o=a("FKr1"),r=a("iadO"),c=a("kmnG"),l=a("NFeN"),d=a("qFsG"),u=a("STbY"),m=a("+0xr"),p=a("/t3+"),b=a("wZkO"),h=a("5HBU"),g=a("LPQX"),f=a("3Pt+"),x=a("XNiG"),w=a("1G5W"),C=a("Kj3r"),v=a("/uUt"),R=a("PVWW"),y=a("0IaG"),D=a("fXoL"),S=a("rCGI"),_=a("XiUz"),X=a("EwFO");let q=(()=>{class t{constructor(t,e,a){this.matDialogRef=t,this._data=e,this.apis=a,this.composeForm=this.createComposeForm(),this.showExtraToFields=!1,this.image="assets/images/upload-image.png"}createComposeForm(){return new f.h({name_ar:new f.e(""),name_en:new f.e(""),seat_number:new f.e("")})}toggleExtraToFields(){this.showExtraToFields=!this.showExtraToFields}callAddAPi(){this.apis.addCarType(this.composeForm.value).subscribe(t=>{},t=>{console.log(t)})}onFileSelected(t){if(t.target.files&&t.target.files[0]){var e=new FileReader;e.onload=t=>{this.image=t.target.result},e.readAsDataURL(t.target.files[0])}}}return t.\u0275fac=function(e){return new(e||t)(D.Rb(y.f),D.Rb(y.a),D.Rb(S.a))},t.\u0275cmp=D.Lb({type:t,selectors:[["add-component"]],decls:26,vars:2,consts:[[1,"dialog-content-wrapper"],[1,"mat-accent","m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title"],["mat-icon-button","","aria-label","Close dialog",3,"click"],["mat-dialog-content","","fusePerfectScrollbar","",1,"p-24","m-0"],["name","composeForm","fxLayout","column","fxFlex","",1,"compose-form",3,"formGroup"],["appearance","outline"],["matInput","","name","name_ar","formControlName","name_ar"],["matInput","","name","name_en","formControlName","name_en"],["matInput","","name","seat_number","formControlName","seat_number"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-between center",1,"m-0","p-16"],["mat-raised-button","","color","accent","aria-label","SAVE",1,"save-button",3,"disabled","click"]],template:function(t,e){1&t&&(D.Xb(0,"div",0),D.Xb(1,"mat-toolbar",1),D.Xb(2,"mat-toolbar-row",2),D.Xb(3,"span",3),D.Nc(4,"Add New"),D.Wb(),D.Xb(5,"button",4),D.fc("click",function(){return e.matDialogRef.close()}),D.Xb(6,"mat-icon"),D.Nc(7,"close"),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Xb(8,"div",5),D.Xb(9,"form",6),D.Xb(10,"mat-form-field",7),D.Xb(11,"mat-label"),D.Nc(12,"Name in arabic"),D.Wb(),D.Sb(13,"input",8),D.Wb(),D.Xb(14,"mat-form-field",7),D.Xb(15,"mat-label"),D.Nc(16,"Name in english"),D.Wb(),D.Sb(17,"input",9),D.Wb(),D.Xb(18,"mat-form-field",7),D.Xb(19,"mat-label"),D.Nc(20,"Seat Number"),D.Wb(),D.Sb(21,"input",10),D.Wb(),D.Wb(),D.Wb(),D.Xb(22,"div",11),D.Xb(23,"div"),D.Xb(24,"button",12),D.fc("click",function(){return e.matDialogRef.close(["send",e.composeForm]),e.callAddAPi()}),D.Nc(25," Save "),D.Wb(),D.Wb(),D.Wb(),D.Wb()),2&t&&(D.Fb(9),D.pc("formGroup",e.composeForm),D.Fb(15),D.pc("disabled",e.composeForm.invalid))},directives:[p.a,p.c,_.a,_.c,_.b,s.b,l.a,X.a,f.u,f.o,f.i,c.b,c.e,d.b,f.c,f.n,f.g],styles:["@media screen and (max-width:599px){.dialog{width:100%}}@media screen and (min-width:600px){.dialog{width:100rem}}.dialog .mat-dialog-container{padding:0}.dialog .mat-dialog-container .compose-form .mat-form-field{width:100%}.dialog .mat-dialog-container .compose-form .show-hide-extra-fields{text-align:right;cursor:pointer;font-size:12px}.dialog .mat-dialog-container .compose-form .attachment-list{font-size:13px}.dialog .mat-dialog-container .compose-form .attachment-list .attachment{border:1px solid;border-radius:20px;padding-left:16px;margin-top:8px}.dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename{font-weight:600}.dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child{margin-bottom:0}.dialog .dialog-content-wrapper{max-height:85vh;display:flex;flex-direction:column}.dialog .dialog-upload-image-container{display:flex;align-items:center;justify-content:center;padding:0 25px 25px}.dialog .dialog-upload-image-container img:hover{cursor:pointer;opacity:.7}.dialog .dialog-upload-image-container img{height:108px;border-radius:16%;width:100px}"],encapsulation:2}),t})();var W=a("2Vo4"),F=a("jD4G");class N{constructor(t){this.id=t.id||F.a.generateGUID(),this.name=t.name||"",this.nameAr=t.name_ar||"",this.nameEn=t.name_en||"",this.seatNumber=t.seat_number||""}}var k=a("tk/3");let A=(()=>{class t{constructor(t){this._httpClient=t,this.selectedContacts=[],this.onContactsChanged=new W.a([]),this.onSelectedContactsChanged=new W.a([]),this.onUserDataChanged=new W.a([]),this.onSearchTextChanged=new x.a,this.onFilterChanged=new x.a}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.getData(),this.getUserData()]).then(([e])=>{this.onSearchTextChanged.subscribe(t=>{this.searchText=t,this.getData()}),this.onFilterChanged.subscribe(t=>{this.filterBy=t,this.getData()}),t()},e)})}getData(){return new Promise((t,e)=>{this._httpClient.post("https://dashboard.wingz.app/vt_wingz_v2_web_dashboard_apis/public/api/car_type",null).subscribe(e=>{this.data=e.data,this.data=this.data.map(t=>new N(t)),this.onContactsChanged.next(this.data),t(this.data)},e)})}getUserData(){return new Promise((t,e)=>{this._httpClient.get("api/contacts-user/5725a6802d10e277a0f35724").subscribe(e=>{this.user=e,this.onUserDataChanged.next(this.user),t(this.user)},e)})}toggleSelectedContact(t){if(this.selectedContacts.length>0){const e=this.selectedContacts.indexOf(t);if(-1!==e)return this.selectedContacts.splice(e,1),void this.onSelectedContactsChanged.next(this.selectedContacts)}this.selectedContacts.push(t),this.onSelectedContactsChanged.next(this.selectedContacts)}toggleSelectAll(){this.selectedContacts.length>0?this.deselectContacts():this.selectContacts()}selectContacts(t,e){this.selectedContacts=[],void 0!==t&&void 0!==e||(this.selectedContacts=[],this.data.map(t=>{this.selectedContacts.push(t.id)})),this.onSelectedContactsChanged.next(this.selectedContacts)}updateContact(t){return new Promise((e,a)=>{this._httpClient.post("api/contacts-contacts/"+t.id,Object.assign({},t)).subscribe(t=>{this.getData(),e(t)})})}updateUserData(t){return new Promise((e,a)=>{this._httpClient.post("api/contacts-user/"+this.user.id,Object.assign({},t)).subscribe(t=>{this.getUserData(),this.getData(),e(t)})})}deselectContacts(){this.selectedContacts=[],this.onSelectedContactsChanged.next(this.selectedContacts)}deleteContact(t){const e=this.data.indexOf(t);this.data.splice(e,1),this.onContactsChanged.next(this.data)}deleteSelectedContacts(){for(const t of this.selectedContacts){const e=this.data.find(e=>e.id===t),a=this.data.indexOf(e);this.data.splice(a,1)}this.onContactsChanged.next(this.data),this.deselectContacts()}}return t.\u0275fac=function(e){return new(e||t)(D.bc(k.b))},t.\u0275prov=D.Nb({token:t,factory:t.\u0275fac}),t})();var L=a("HX77"),E=a("B9zo"),T=a("znSr"),O=a("0EQZ"),P=a("2nsM");let j=(()=>{class t{constructor(t,e,a){this.matDialogRef=t,this._data=e,this.apis=a,this.composeForm=this.createComposeForm(),this.showExtraToFields=!1,this.image="assets/images/upload-image.png"}createComposeForm(){return new f.h({id:new f.e(""),name_ar:new f.e(""),name_en:new f.e(""),seat_number:new f.e("")})}toggleExtraToFields(){this.showExtraToFields=!this.showExtraToFields}callEditAPi(){this.apis.EditCarType(this.composeForm.value).subscribe(t=>{},t=>{console.log(t)})}onFileSelected(t){if(t.target.files&&t.target.files[0]){var e=new FileReader;e.onload=t=>{this.image=t.target.result},e.readAsDataURL(t.target.files[0])}}ngAfterViewInit(){this.composeForm.patchValue({id:this.contact.id,name_ar:this.contact.nameAr,name_en:this.contact.nameEn,seat_number:this.contact.seatNumber})}}return t.\u0275fac=function(e){return new(e||t)(D.Rb(y.f),D.Rb(y.a),D.Rb(S.a))},t.\u0275cmp=D.Lb({type:t,selectors:[["edit-component"]],decls:26,vars:3,consts:[[1,"dialog-content-wrapper"],[1,"mat-accent","m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title"],["mat-icon-button","","aria-label","Close dialog",3,"click"],["mat-dialog-content","","fusePerfectScrollbar","",1,"p-24","m-0"],["name","composeForm","fxLayout","column","fxFlex","",1,"compose-form",3,"formGroup"],["appearance","outline"],["matInput","","name","name_ar","formControlName","name_ar"],["matInput","","name","name_en","formControlName","name_en"],["matInput","","name","seat_number","formControlName","seat_number"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-between center",1,"m-0","p-16"],["mat-raised-button","","color","accent","aria-label","SAVE",1,"save-button",3,"disabled","click"]],template:function(t,e){1&t&&(D.Xb(0,"div",0),D.Xb(1,"mat-toolbar",1),D.Xb(2,"mat-toolbar-row",2),D.Xb(3,"span",3),D.Nc(4),D.Wb(),D.Xb(5,"button",4),D.fc("click",function(){return e.matDialogRef.close()}),D.Xb(6,"mat-icon"),D.Nc(7,"close"),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Xb(8,"div",5),D.Xb(9,"form",6),D.Xb(10,"mat-form-field",7),D.Xb(11,"mat-label"),D.Nc(12,"Name in arabic"),D.Wb(),D.Sb(13,"input",8),D.Wb(),D.Xb(14,"mat-form-field",7),D.Xb(15,"mat-label"),D.Nc(16,"Name in english"),D.Wb(),D.Sb(17,"input",9),D.Wb(),D.Xb(18,"mat-form-field",7),D.Xb(19,"mat-label"),D.Nc(20,"Seat Number"),D.Wb(),D.Sb(21,"input",10),D.Wb(),D.Wb(),D.Wb(),D.Xb(22,"div",11),D.Xb(23,"div"),D.Xb(24,"button",12),D.fc("click",function(){return e.matDialogRef.close(["send",e.composeForm]),e.callEditAPi()}),D.Nc(25," SEND "),D.Wb(),D.Wb(),D.Wb(),D.Wb()),2&t&&(D.Fb(4),D.Pc("Edit ",e.contact.name," Data"),D.Fb(5),D.pc("formGroup",e.composeForm),D.Fb(15),D.pc("disabled",e.composeForm.invalid))},directives:[p.a,p.c,_.a,_.c,_.b,s.b,l.a,X.a,f.u,f.o,f.i,c.b,c.e,d.b,f.c,f.n,f.g],styles:["@media screen and (max-width:599px){.dialog{width:100%}}@media screen and (min-width:600px){.dialog{width:100rem}}.dialog .mat-dialog-container{padding:0}.dialog .mat-dialog-container .compose-form .mat-form-field{width:100%}.dialog .mat-dialog-container .compose-form .show-hide-extra-fields{text-align:right;cursor:pointer;font-size:12px}.dialog .mat-dialog-container .compose-form .attachment-list{font-size:13px}.dialog .mat-dialog-container .compose-form .attachment-list .attachment{border:1px solid;border-radius:20px;padding-left:16px;margin-top:8px}.dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename{font-weight:600}.dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child{margin-bottom:0}.dialog .dialog-content-wrapper{max-height:85vh;display:flex;flex-direction:column}.dialog .dialog-upload-image-container{display:flex;align-items:center;justify-content:center;padding:0 25px 25px}.dialog .dialog-upload-image-container img:hover{cursor:pointer;opacity:.7}.dialog .dialog-upload-image-container img{height:108px;border-radius:16%;width:100px}"],encapsulation:2}),t})();var I=a("ofXK");const U=["dialogContent"];function M(t,e){1&t&&(D.Xb(0,"mat-header-cell"),D.Nc(1,"Name"),D.Wb())}function V(t,e){if(1&t&&(D.Xb(0,"mat-cell"),D.Xb(1,"p",9),D.Nc(2),D.Wb(),D.Wb()),2&t){const t=e.$implicit;D.Fb(2),D.Oc(t.name)}}function z(t,e){1&t&&(D.Xb(0,"mat-header-cell"),D.Nc(1,"Seat Number"),D.Wb())}function G(t,e){if(1&t&&(D.Xb(0,"mat-cell"),D.Xb(1,"p",9),D.Nc(2),D.Wb(),D.Wb()),2&t){const t=e.$implicit;D.Fb(2),D.Oc(t.seatNumber)}}function B(t,e){1&t&&D.Sb(0,"mat-header-cell")}function H(t,e){if(1&t){const t=D.Yb();D.Xb(0,"mat-cell"),D.Xb(1,"div",10),D.Xb(2,"button",11),D.fc("click",function(t){return t.stopPropagation()}),D.Xb(3,"mat-icon",12),D.Nc(4,"more_vert"),D.Wb(),D.Wb(),D.Xb(5,"mat-menu",null,13),D.Xb(7,"button",14),D.fc("click",function(){D.Bc(t);const a=e.$implicit;return D.jc().editDialog(a)}),D.Xb(8,"mat-icon"),D.Nc(9,"edit"),D.Wb(),D.Xb(10,"span"),D.Nc(11,"Edit"),D.Wb(),D.Wb(),D.Xb(12,"button",15),D.fc("click",function(){D.Bc(t);const a=e.$implicit;return D.jc().deleteContact(a)}),D.Xb(13,"mat-icon"),D.Nc(14,"delete"),D.Wb(),D.Xb(15,"span"),D.Nc(16,"Remove"),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Wb()}if(2&t){const t=D.xc(6);D.Fb(2),D.pc("matMenuTriggerFor",t)}}function $(t,e){1&t&&D.Sb(0,"mat-header-row")}const Y=function(t){return{"accent-50":t}},K=function(){return{y:"100%"}},Q=function(t){return{value:"*",params:t}};function J(t,e){if(1&t&&D.Sb(0,"mat-row",16),2&t){const t=e.$implicit,a=D.jc();D.pc("ngClass",D.tc(2,Y,a.checkboxes[t.id]))("@animate",D.tc(5,Q,D.sc(4,K)))}}const Z=function(){return{value:"50"}};let tt=(()=>{class t{constructor(t,e,a){this._contactsService=t,this.apis=e,this._matDialog=a,this.displayedColumns=["name","seatNumber","buttons"],this._unsubscribeAll=new x.a}ngOnInit(){this.dataSource=new et(this._contactsService),this._contactsService.onContactsChanged.pipe(Object(w.a)(this._unsubscribeAll)).subscribe(t=>{this.contacts=t,this.checkboxes={},t.map(t=>{this.checkboxes[t.id]=!1})}),this._contactsService.onSelectedContactsChanged.pipe(Object(w.a)(this._unsubscribeAll)).subscribe(t=>{for(const e in this.checkboxes)this.checkboxes.hasOwnProperty(e)&&(this.checkboxes[e]=t.includes(e));this.selectedContacts=t}),this._contactsService.onUserDataChanged.pipe(Object(w.a)(this._unsubscribeAll)).subscribe(t=>{this.user=t}),this._contactsService.onFilterChanged.pipe(Object(w.a)(this._unsubscribeAll)).subscribe(()=>{this._contactsService.deselectContacts()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}editDialog(t){this.dialogRef=this._matDialog.open(j,{panelClass:"dialog"}),this.dialogRef.componentInstance.contact=t}deleteContact(t){this.confirmDialogRef=this._matDialog.open(P.a,{disableClose:!1}),this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete?",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&(this.callDeleteAPi(t),this._contactsService.deleteContact(t)),this.confirmDialogRef=null})}callDeleteAPi(t){this.apis.DeleteCarType({id:t.id}).subscribe(t=>{},t=>{console.log(t)})}onSelectedChange(t){this._contactsService.toggleSelectedContact(t)}toggleStar(t){this.user.starred.includes(t)?this.user.starred.splice(this.user.starred.indexOf(t),1):this.user.starred.push(t),this._contactsService.updateUserData(this.user)}}return t.\u0275fac=function(e){return new(e||t)(D.Rb(A),D.Rb(S.a),D.Rb(y.b))},t.\u0275cmp=D.Lb({type:t,selectors:[["list-component"]],viewQuery:function(t,e){if(1&t&&D.Rc(U,!0),2&t){let t;D.wc(t=D.gc())&&(e.dialogContent=t.first)}},decls:13,vars:5,consts:[[3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","seatNumber"],["matColumnDef","buttons"],[4,"matHeaderRowDef"],["class","contact",3,"ngClass",4,"matRowDef","matRowDefColumns"],[1,"text-truncate","font-weight-600"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],[1,"secondary-text"],["moreMenu","matMenu"],["mat-menu-item","","aria-label","edit",3,"click"],["mat-menu-item","","aria-label","remove",3,"click"],[1,"contact",3,"ngClass"]],template:function(t,e){1&t&&(D.Xb(0,"mat-table",0,1),D.Vb(2,2),D.Lc(3,M,2,0,"mat-header-cell",3),D.Lc(4,V,3,1,"mat-cell",4),D.Ub(),D.Vb(5,5),D.Lc(6,z,2,0,"mat-header-cell",3),D.Lc(7,G,3,1,"mat-cell",4),D.Ub(),D.Vb(8,6),D.Lc(9,B,1,0,"mat-header-cell",3),D.Lc(10,H,17,1,"mat-cell",4),D.Ub(),D.Lc(11,$,1,0,"mat-header-row",7),D.Lc(12,J,1,7,"mat-row",8),D.Wb()),2&t&&(D.pc("dataSource",e.dataSource)("@animateStagger",D.sc(4,Z)),D.Fb(11),D.pc("matHeaderRowDef",e.displayedColumns),D.Fb(1),D.pc("matRowDefColumns",e.displayedColumns))},directives:[m.j,m.c,m.e,m.b,m.g,m.i,m.d,m.a,_.a,_.b,s.b,u.d,l.a,u.a,u.b,m.f,m.h,I.q,T.a],styles:["list-component{display:flex;flex:1 1 auto;width:100%}list-component .mat-table{width:100%;background:transparent;box-shadow:none}list-component .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}list-component .mat-table .mat-column-avatar{flex:0 1 64px}list-component .mat-table .mat-column-buttons{flex:0 1 80px}list-component .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}list-component .mat-table .mat-row .mat-cell{min-width:0}list-component .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){list-component .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:R.a}}),t})();class et extends O.b{constructor(t){super(),this._contactsService=t}connect(){return this._contactsService.onContactsChanged}disconnect(){}}const at=function(){return{delay:"50ms",scale:"0.2"}},it=function(t){return{value:"*",params:t}},st=function(){return{delay:"100ms",x:"-25px"}},nt=function(){return{delay:"300ms",scale:".2"}},ot=[{path:"**",component:(()=>{class t{constructor(t,e,a){this._contactsService=t,this._fuseSidebarService=e,this._matDialog=a,this.searchInput=new f.e(""),this._unsubscribeAll=new x.a}ngOnInit(){this._contactsService.onSelectedContactsChanged.pipe(Object(w.a)(this._unsubscribeAll)).subscribe(t=>{this.hasSelectedContacts=t.length>0}),this.searchInput.valueChanges.pipe(Object(w.a)(this._unsubscribeAll),Object(C.a)(300),Object(v.a)()).subscribe(t=>{this._contactsService.onSearchTextChanged.next(t)})}ngOnDestroy(){this._contactsService.onSearchTextChanged.next(""),this._unsubscribeAll.next(),this._unsubscribeAll.complete()}toggleSidebar(t){this._fuseSidebarService.getSidebar(t).toggleOpen()}addDialog(){this.dialogRef=this._matDialog.open(q,{panelClass:"dialog"})}}return t.\u0275fac=function(e){return new(e||t)(D.Rb(A),D.Rb(L.a),D.Rb(y.b))},t.\u0275cmp=D.Lb({type:t,selectors:[["carTypes"]],decls:26,vars:13,consts:[["id","contacts",1,"page-layout","simple","left-sidebar","inner-sidebar","inner-scroll"],["fxLayout","column","fxLayoutAlign","start","fxLayout.gt-xs","row","fxLayoutAlign.gt-xs","space-between center",1,"header","accent","p-16","p-sm-24"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","fxHide.gt-sm","",1,"sidebar-toggle","mr-12",3,"click"],["fxLayout","row","fxLayoutAlign","start center",1,"logo"],[1,"logo-icon","mr-16"],[1,"logo-text","h1"],["fxLayout","row","fxLayoutAlign","center center","fxFlex","",1,"ml-sm-32"],[1,"search-wrapper","mt-16","mt-sm-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Search",3,"formControl"],[1,"content"],["fusePerfectScrollbar","",1,"center","p-24","pb-56","pr-sm-92"],["dynamicHeight",""],["label","ALL"],["mat-fab","","id","add-contact-button","aria-label","add contact",1,"accent",3,"click"]],template:function(t,e){1&t&&(D.Xb(0,"div",0),D.Xb(1,"div",1),D.Xb(2,"div",2),D.Xb(3,"button",3),D.fc("click",function(){return e.toggleSidebar("contacts-main-sidebar")}),D.Xb(4,"mat-icon"),D.Nc(5,"menu"),D.Wb(),D.Wb(),D.Xb(6,"div",4),D.Xb(7,"mat-icon",5),D.Nc(8,"account_box "),D.Wb(),D.Xb(9,"span",6),D.Nc(10," Car Types "),D.Wb(),D.Wb(),D.Wb(),D.Xb(11,"div",7),D.Xb(12,"div",8),D.Xb(13,"div",9),D.Xb(14,"mat-icon"),D.Nc(15,"search"),D.Wb(),D.Sb(16,"input",10),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Xb(17,"div",11),D.Xb(18,"div",12),D.Xb(19,"div",11),D.Xb(20,"mat-tab-group",13),D.Xb(21,"mat-tab",14),D.Sb(22,"list-component"),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Wb(),D.Xb(23,"button",15),D.fc("click",function(){return e.addDialog()}),D.Xb(24,"mat-icon"),D.Nc(25,"person_add"),D.Wb(),D.Wb()),2&t&&(D.Fb(7),D.pc("@animate",D.tc(5,it,D.sc(4,at))),D.Fb(2),D.pc("@animate",D.tc(8,it,D.sc(7,st))),D.Fb(7),D.pc("formControl",e.searchInput),D.Fb(7),D.pc("@animate",D.tc(11,it,D.sc(10,nt))))},directives:[E.a,_.c,_.b,s.b,T.b,l.a,_.a,f.c,f.n,f.f,X.a,b.b,b.a,tt],styles:["#contacts .header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#contacts .header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}#contacts .header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}#contacts .content{overflow:hidden}#contacts .content .sidebar:not(.locked-open){background:#fff}contacts-contact-list{display:flex;flex:1 1 auto;width:100%}contacts-contact-list .mat-table{width:100%;background:transparent;box-shadow:none}contacts-contact-list .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}contacts-contact-list .mat-table .mat-column-avatar{flex:0 1 64px}contacts-contact-list .mat-table .mat-column-buttons{flex:0 1 80px}contacts-contact-list .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}contacts-contact-list .mat-table .mat-row .mat-cell{min-width:0}contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:R.a}}),t})(),resolve:{contacts:A}}];let rt=(()=>{class t{}return t.\u0275mod=D.Pb({type:t}),t.\u0275inj=D.Ob({factory:function(e){return new(e||t)},providers:[A],imports:[[i.j.forChild(ot),s.c,n.b,r.c,c.d,l.b,d.c,u.c,o.p,m.k,p.b,b.c,h.a,g.a,g.f]]}),t})()},rCGI:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var i=a("tk/3"),s=a("fXoL");let n=(()=>{class t{constructor(t){this.http=t,this.domain="https://dashboard.wingz.app/vt_wingz_v2_web_dashboard_apis/public/api",this.headers=(new i.d).set("Accept","application/json")}postRequest(t,e){return this.http.post(`${this.domain}/${t}`,e,this.headers)}getMembers(t=null){return this.postRequest("members",t)}getClubs(t=null){return this.postRequest("clubs",t)}getSchools(t=null){return this.postRequest("schools",t)}getDrivers(t=null){return this.postRequest("drivers",t)}allowedDriversForAddTrip(t=null){return this.postRequest("allowedDriversForAddTrip",t)}addTrip(t=null){return this.postRequest("addTrip",t)}assignDriversToRequest(t=null){return this.postRequest("assignDriversToRequest",t)}allowedDriversForAssign(t=null){return this.postRequest("allowedDriversForAssign?childId=1",t)}getMemberDetails(t=null){return this.postRequest("memberDetails",t)}getCountries(t=null){return this.postRequest("countries",t)}addCountry(t=null){return this.postRequest("add-country",t)}addClub(t=null){return this.postRequest("addClub",t)}getBranches(t=null){return this.postRequest("branches",t)}addBranch(t=null){return this.postRequest("addBranch",t)}editBranch(t=null){return this.postRequest("editBranch",t)}editClub(t=null){return this.postRequest("editClub",t)}DeleteCountry(t){return this.postRequest("delete-country",t)}addCity(t){return this.postRequest("add-city",t)}addDistrict(t){return this.postRequest("add-district",t)}EditDistricts(t){return this.postRequest("details-district",t)}DeleteDistrict(t){return this.postRequest("delete-district",t)}addRelation(t){return this.postRequest("add-relation",t)}addSlider(t){return this.postRequest("add-slider",t)}EditSlider(t){return this.postRequest("details-slider",t)}DeleteSlider(t){return this.postRequest("delete-slider",t)}addOpenScreen(t){return this.postRequest("add-open-screen",t)}DeleteOpenScreen(t){return this.postRequest("delete-open-screen",t)}EditOpenScreen(t){return this.postRequest("details-open-screen",t)}addSchool(t){return this.postRequest("add-school",t)}DeleteSchool(t){return this.postRequest("delete-school",t)}EditSchool(t){return this.postRequest("details-school",t)}addEducationType(t){return this.postRequest("add-education-type",t)}EditEducationType(t){return this.postRequest("details-education-type",t)}deleteEducationType(t){return this.postRequest("delete-education-type",t)}addEducationLevel(t){return this.postRequest("add-education-level",t)}EditEducationLevel(t){return this.postRequest("details-education-level",t)}deleteEducationLevel(t){return this.postRequest("delete-education-level",t)}addStage(t){return this.postRequest("add-stage",t)}editStage(t){return this.postRequest("details-stage",t)}DeleteStage(t){return this.postRequest("delete-stage",t)}getCarNames(t){return this.postRequest("car-names",t)}addCarName(t){return this.postRequest("add-car-name",t)}EditCarName(t){return this.postRequest("details-car-name",t)}DeleteCarName(t){return this.postRequest("delete-car-name",t)}addCarType(t){return this.postRequest("add-car-type",t)}EditCarType(t){return this.postRequest("details-car-type",t)}DeleteCarType(t){return this.postRequest("delete-car-type",t)}addManufacturingYear(t){return this.postRequest("add-manufacturing-year",t)}EditManufacturingYear(t){return this.postRequest("details-manufacturing-year",t)}DeleteManufacturingYear(t){return this.postRequest("delete-manufacturing-year",t)}EditCity(t){return this.postRequest("details-city",t)}DeleteCity(t){return this.postRequest("delete-city",t)}EditRelation(t){return this.postRequest("details-relation",t)}DeleteRelation(t){return this.postRequest("delete-relation",t)}getVoucherTypes(t){return this.postRequest("voucher-types",t)}DeleteVoucher(t){return this.postRequest("delete-voucher",t)}addNewVoucher(t){return this.postRequest("add-voucher",t)}assignPromoCodeToUsers(t){return this.postRequest("assign-voucher-to-users",t)}EditVoucher(t){return this.postRequest("details-voucher",t)}getEducationTypes(t=null){return this.postRequest("education-type",t)}DeletePlan(t=null){return this.postRequest("delete-plan",t)}addPlan(t=null){return this.postRequest("add-plan",t)}EditPlan(t=null){return this.postRequest("details-plan",t)}driverDetails(t){return this.postRequest("driver-details",t)}BlockDriver(t){return this.postRequest("block-driver",t)}UnBlockDriver(t){return this.postRequest("unblock-driver",t)}activeDriverAccount(t){return this.postRequest("active-driver",t)}activeDrivers(t=null){return this.postRequest("drivers",t)}blockedDrivers(t=null){return this.postRequest("blocked-drivers",t)}waitingDrivers(t=null){return this.postRequest("waiting-drivers",t)}sharingDrivers(t=null){return this.postRequest("sharing-drivers",t)}}return t.\u0275fac=function(e){return new(e||t)(s.bc(i.b))},t.\u0275prov=s.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
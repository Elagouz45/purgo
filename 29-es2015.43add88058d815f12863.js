(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{dVk9:function(t,e,s){"use strict";s.r(e),s.d(e,"AssignUsersModule",function(){return Z});var a=s("tyNb"),n=s("bTqV"),i=s("bSwM"),o=s("FKr1"),r=s("iadO"),c=s("kmnG"),l=s("NFeN"),d=s("qFsG"),u=s("STbY"),h=s("+0xr"),p=s("/t3+"),b=s("wZkO"),m=s("5HBU"),g=s("LPQX"),f=s("3Pt+"),x=s("XNiG"),C=s("PVWW"),R=s("fXoL"),w=s("2Vo4"),v=s("dP8c"),q=s("tk/3"),y=s("rCGI");let D=(()=>{class t{constructor(t,e){this._httpClient=t,this.apis=e,this.selectedContacts=[],this.onContactsChanged=new w.a([]),this.onSelectedContactsChanged=new w.a([]),this.onUserDataChanged=new w.a([]),this.onSearchTextChanged=new x.a,this.aboutOnChanged=new w.a({}),this.onFilterChanged=new x.a}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.getData()]).then(([e])=>{this.onSearchTextChanged.subscribe(t=>{this.searchText=t,this.getData()}),this.onFilterChanged.subscribe(t=>{this.filterBy=t,this.getData()}),t()},e)})}getAbout(){return new Promise((t,e)=>{this._httpClient.get("api/profile-about").subscribe(e=>{this.about=e,this.aboutOnChanged.next(this.about),t(this.about)},e)})}getData(){return new Promise((t,e)=>{this.apis.getMembers().subscribe(e=>{this.data=e.data,this.data=this.data.map(t=>new v.a(t)),this.onContactsChanged.next(this.data),t(this.data)},e)})}getUserData(){return new Promise((t,e)=>{this._httpClient.get("api/contacts-user/5725a6802d10e277a0f35724").subscribe(e=>{this.user=e,this.onUserDataChanged.next(this.user),t(this.user)},e)})}toggleSelectedContact(t){if(this.selectedContacts.length>0){const e=this.selectedContacts.indexOf(t);if(-1!==e)return this.selectedContacts.splice(e,1),void this.onSelectedContactsChanged.next(this.selectedContacts)}this.selectedContacts.push(t),this.onSelectedContactsChanged.next(this.selectedContacts)}toggleSelectAll(){this.selectedContacts.length>0?this.deselectContacts():this.selectContacts()}selectContacts(t,e){this.selectedContacts=[],void 0!==t&&void 0!==e||(this.selectedContacts=[],this.data.map(t=>{this.selectedContacts.push(t.id)})),this.onSelectedContactsChanged.next(this.selectedContacts)}updateContact(t){return new Promise((e,s)=>{this._httpClient.post("api/contacts-contacts/"+t.id,Object.assign({},t)).subscribe(t=>{this.getData(),e(t)})})}updateUserData(t){return new Promise((e,s)=>{this._httpClient.post("api/contacts-user/"+this.user.id,Object.assign({},t)).subscribe(t=>{this.getUserData(),this.getData(),e(t)})})}deselectContacts(){this.selectedContacts=[],this.onSelectedContactsChanged.next(this.selectedContacts)}deleteContact(t){const e=this.data.indexOf(t);this.data.splice(e,1),this.onContactsChanged.next(this.data)}deleteSelectedContacts(){for(const t of this.selectedContacts){const e=this.data.find(e=>e.id===t),s=this.data.indexOf(e);this.data.splice(s,1)}this.onContactsChanged.next(this.data),this.deselectContacts()}}return t.\u0275fac=function(e){return new(e||t)(R.bc(q.b),R.bc(y.a))},t.\u0275prov=R.Nb({token:t,factory:t.\u0275fac}),t})();var S=s("HX77"),k=s("0IaG"),X=s("B9zo"),L=s("XiUz"),W=s("znSr"),_=s("EwFO"),O=s("1G5W"),A=s("ofXK");function F(t,e){1&t&&R.Sb(0,"mat-header-cell")}function N(t,e){if(1&t){const t=R.Yb();R.Xb(0,"mat-cell"),R.Xb(1,"mat-checkbox",12),R.fc("ngModelChange",function(s){R.Bc(t);const a=e.$implicit;return R.jc().checkboxes[a.id]=s})("ngModelChange",function(){R.Bc(t);const s=e.$implicit;return R.jc().onSelectedChange(s.id)})("click",function(t){return t.stopPropagation()}),R.Wb(),R.Wb()}if(2&t){const t=e.$implicit,s=R.jc();R.Fb(1),R.pc("ngModel",s.checkboxes[t.id])}}function T(t,e){1&t&&R.Sb(0,"mat-header-cell")}function E(t,e){if(1&t&&R.Sb(0,"img",14),2&t){const t=R.jc().$implicit;R.pc("alt",t.name)("src",t.image,R.Dc)}}function P(t,e){if(1&t&&(R.Xb(0,"mat-cell"),R.Lc(1,E,1,2,"img",13),R.Wb()),2&t){const t=e.$implicit;R.Fb(1),R.pc("ngIf",t.image)}}function U(t,e){1&t&&(R.Xb(0,"mat-header-cell"),R.Nc(1,"User Name"),R.Wb())}function M(t,e){if(1&t&&(R.Xb(0,"mat-cell"),R.Xb(1,"p",15),R.Nc(2),R.Wb(),R.Wb()),2&t){const t=e.$implicit;R.Fb(2),R.Oc(t.name)}}function I(t,e){1&t&&(R.Xb(0,"mat-header-cell"),R.Nc(1,"Register date"),R.Wb())}function B(t,e){if(1&t&&(R.Xb(0,"mat-cell"),R.Xb(1,"p",15),R.Nc(2),R.Wb(),R.Wb()),2&t){const t=e.$implicit;R.Fb(2),R.Oc(t.registerDate)}}function V(t,e){1&t&&R.Sb(0,"mat-header-row")}const j=function(){return{y:"100%"}},$=function(t){return{value:"*",params:t}};function z(t,e){1&t&&R.Sb(0,"mat-row",16),2&t&&R.pc("@animate",R.tc(2,$,R.sc(1,j)))}const G=function(){return{value:"50"}};let H=(()=>{class t{constructor(t,e,s){this._contactsService=t,this.apis=e,this._matDialog=s,this.displayedColumns=["checkbox","image","name","registerDate"],this._unsubscribeAll=new x.a}ngOnInit(){this._contactsService.onContactsChanged.subscribe(t=>{this.dataSource=t,this.checkboxes={},t.map(t=>{this.checkboxes[t.id]=!1})}),this._contactsService.onSelectedContactsChanged.pipe(Object(O.a)(this._unsubscribeAll)).subscribe(t=>{for(const e in this.checkboxes)this.checkboxes.hasOwnProperty(e)&&(this.checkboxes[e]=t.includes(e));this.selectedContacts=t})}onSelectedChange(t){this._contactsService.toggleSelectedContact(t)}initRequest(){const t=new FormData;return t.append("usersIds",JSON.stringify(this.selectedContacts)),t.append("requestId","1"),t}assignUsers(){console.log("initRequest"),console.log(this.initRequest()),this.apis.assignPromoCodeToUsers(this.initRequest()).subscribe(t=>{console.log(t)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(R.Rb(D),R.Rb(y.a),R.Rb(k.b))},t.\u0275cmp=R.Lb({type:t,selectors:[["list-component"]],decls:19,vars:5,consts:[[3,"dataSource"],["table",""],["matColumnDef","checkbox"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","image"],["matColumnDef","name"],["matColumnDef","registerDate"],[4,"matHeaderRowDef"],["class","item",4,"matRowDef","matRowDefColumns"],[1,"button"],["mat-raised-button","","color","primary","aria-label","More",3,"click"],[3,"ngModel","ngModelChange","click"],["class","avatar",3,"alt","src",4,"ngIf"],[1,"avatar",3,"alt","src"],[1,"text-truncate","font-weight-600"],[1,"item"]],template:function(t,e){1&t&&(R.Xb(0,"mat-table",0,1),R.Vb(2,2),R.Lc(3,F,1,0,"mat-header-cell",3),R.Lc(4,N,2,1,"mat-cell",4),R.Ub(),R.Vb(5,5),R.Lc(6,T,1,0,"mat-header-cell",3),R.Lc(7,P,2,1,"mat-cell",4),R.Ub(),R.Vb(8,6),R.Lc(9,U,2,0,"mat-header-cell",3),R.Lc(10,M,3,1,"mat-cell",4),R.Ub(),R.Vb(11,7),R.Lc(12,I,2,0,"mat-header-cell",3),R.Lc(13,B,3,1,"mat-cell",4),R.Ub(),R.Lc(14,V,1,0,"mat-header-row",8),R.Lc(15,z,1,4,"mat-row",9),R.Wb(),R.Xb(16,"div",10),R.Xb(17,"button",11),R.fc("click",function(){return e.assignUsers()}),R.Nc(18," Assign "),R.Wb(),R.Wb()),2&t&&(R.pc("dataSource",e.dataSource)("@animateStagger",R.sc(4,G)),R.Fb(14),R.pc("matHeaderRowDef",e.displayedColumns),R.Fb(1),R.pc("matRowDefColumns",e.displayedColumns))},directives:[h.j,h.c,h.e,h.b,h.g,h.i,n.b,h.d,h.a,i.a,f.n,f.q,A.t,h.f,h.h],styles:["list-component{display:flex;flex:1 1 auto;width:100%;flex-direction:column}list-component .mat-table{width:100%;background:transparent;box-shadow:none}list-component .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}list-component .mat-table .mat-column-avatar{flex:0 1 64px}list-component .mat-table .mat-column-buttons{flex:0 1 80px}list-component .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}list-component .mat-table .mat-row .mat-cell{min-width:0}list-component .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){list-component .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:C.a}}),t})();const Y=function(){return{delay:"50ms",scale:"0.2"}},J=function(t){return{value:"*",params:t}},K=function(){return{delay:"100ms",x:"-25px"}},Q=[{path:"**",component:(()=>{class t{constructor(t,e,s){this._contactsService=t,this._fuseSidebarService=e,this._matDialog=s,this.searchInput=new f.e(""),this._unsubscribeAll=new x.a}ngOnInit(){}ngOnDestroy(){this._contactsService.onSearchTextChanged.next(""),this._unsubscribeAll.next(),this._unsubscribeAll.complete()}toggleSidebar(t){this._fuseSidebarService.getSidebar(t).toggleOpen()}}return t.\u0275fac=function(e){return new(e||t)(R.Rb(D),R.Rb(S.a),R.Rb(k.b))},t.\u0275cmp=R.Lb({type:t,selectors:[["assign"]],decls:23,vars:9,consts:[["id","contacts",1,"page-layout","simple","left-sidebar","inner-sidebar","inner-scroll"],["fxLayout","column","fxLayoutAlign","start","fxLayout.gt-xs","row","fxLayoutAlign.gt-xs","space-between center",1,"header","accent","p-16","p-sm-24"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","fxHide.gt-sm","",1,"sidebar-toggle","mr-12",3,"click"],["fxLayout","row","fxLayoutAlign","start center",1,"logo"],[1,"logo-icon","mr-16"],[1,"logo-text","h1"],["fxLayout","row","fxLayoutAlign","center center","fxFlex","",1,"ml-sm-32"],[1,"search-wrapper","mt-16","mt-sm-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Search",3,"formControl"],[1,"content"],["fusePerfectScrollbar","",1,"center","p-24","pb-56","pr-sm-92"],["dynamicHeight",""],["label","ALL"]],template:function(t,e){1&t&&(R.Xb(0,"div",0),R.Xb(1,"div",1),R.Xb(2,"div",2),R.Xb(3,"button",3),R.fc("click",function(){return e.toggleSidebar("contacts-main-sidebar")}),R.Xb(4,"mat-icon"),R.Nc(5,"menu"),R.Wb(),R.Wb(),R.Xb(6,"div",4),R.Xb(7,"mat-icon",5),R.Nc(8,"account_box "),R.Wb(),R.Xb(9,"span",6),R.Nc(10," Users "),R.Wb(),R.Wb(),R.Wb(),R.Xb(11,"div",7),R.Xb(12,"div",8),R.Xb(13,"div",9),R.Xb(14,"mat-icon"),R.Nc(15,"search"),R.Wb(),R.Sb(16,"input",10),R.Wb(),R.Wb(),R.Wb(),R.Wb(),R.Xb(17,"div",11),R.Xb(18,"div",12),R.Xb(19,"div",11),R.Xb(20,"mat-tab-group",13),R.Xb(21,"mat-tab",14),R.Sb(22,"list-component"),R.Wb(),R.Wb(),R.Wb(),R.Wb(),R.Wb(),R.Wb()),2&t&&(R.Fb(7),R.pc("@animate",R.tc(4,J,R.sc(3,Y))),R.Fb(2),R.pc("@animate",R.tc(7,J,R.sc(6,K))),R.Fb(7),R.pc("formControl",e.searchInput))},directives:[X.a,L.c,L.b,n.b,W.b,l.a,L.a,f.c,f.n,f.f,_.a,b.b,b.a,H],styles:["#contacts .button{text-align:right;padding:1rem 2rem}#contacts .header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#contacts .header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}#contacts .header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}#contacts .content{overflow:hidden}#contacts .content .sidebar:not(.locked-open){background:#fff}contacts-contact-list{display:flex;flex:1 1 auto;width:100%}contacts-contact-list .mat-table{width:100%;background:transparent;box-shadow:none}contacts-contact-list .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}contacts-contact-list .mat-table .mat-column-avatar{flex:0 1 64px}contacts-contact-list .mat-table .mat-column-buttons{flex:0 1 80px}contacts-contact-list .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}contacts-contact-list .mat-table .mat-row .mat-cell{min-width:0}contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:C.a}}),t})(),resolve:{contacts:D}}];let Z=(()=>{class t{}return t.\u0275mod=R.Pb({type:t}),t.\u0275inj=R.Ob({factory:function(e){return new(e||t)},providers:[D],imports:[[a.j.forChild(Q),n.c,i.b,r.c,c.d,l.b,d.c,u.c,o.p,h.k,p.b,b.c,m.a,g.a,g.f]]}),t})()},rCGI:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var a=s("tk/3"),n=s("fXoL");let i=(()=>{class t{constructor(t){this.http=t,this.domain="https://dashboard.wingz.app/vt_wingz_v2_web_dashboard_apis/public/api",this.headers=(new a.d).set("Accept","application/json")}postRequest(t,e){return this.http.post(`${this.domain}/${t}`,e,this.headers)}getMembers(t=null){return this.postRequest("members",t)}getClubs(t=null){return this.postRequest("clubs",t)}getSchools(t=null){return this.postRequest("schools",t)}getDrivers(t=null){return this.postRequest("drivers",t)}allowedDriversForAddTrip(t=null){return this.postRequest("allowedDriversForAddTrip",t)}addTrip(t=null){return this.postRequest("addTrip",t)}assignDriversToRequest(t=null){return this.postRequest("assignDriversToRequest",t)}allowedDriversForAssign(t=null){return this.postRequest("allowedDriversForAssign?childId=1",t)}getMemberDetails(t=null){return this.postRequest("memberDetails",t)}getCountries(t=null){return this.postRequest("countries",t)}addCountry(t=null){return this.postRequest("add-country",t)}addClub(t=null){return this.postRequest("addClub",t)}getBranches(t=null){return this.postRequest("branches",t)}addBranch(t=null){return this.postRequest("addBranch",t)}editBranch(t=null){return this.postRequest("editBranch",t)}editClub(t=null){return this.postRequest("editClub",t)}DeleteCountry(t){return this.postRequest("delete-country",t)}addCity(t){return this.postRequest("add-city",t)}addDistrict(t){return this.postRequest("add-district",t)}EditDistricts(t){return this.postRequest("details-district",t)}DeleteDistrict(t){return this.postRequest("delete-district",t)}addRelation(t){return this.postRequest("add-relation",t)}addSlider(t){return this.postRequest("add-slider",t)}EditSlider(t){return this.postRequest("details-slider",t)}DeleteSlider(t){return this.postRequest("delete-slider",t)}addOpenScreen(t){return this.postRequest("add-open-screen",t)}DeleteOpenScreen(t){return this.postRequest("delete-open-screen",t)}EditOpenScreen(t){return this.postRequest("details-open-screen",t)}addSchool(t){return this.postRequest("add-school",t)}DeleteSchool(t){return this.postRequest("delete-school",t)}EditSchool(t){return this.postRequest("details-school",t)}addEducationType(t){return this.postRequest("add-education-type",t)}EditEducationType(t){return this.postRequest("details-education-type",t)}deleteEducationType(t){return this.postRequest("delete-education-type",t)}addEducationLevel(t){return this.postRequest("add-education-level",t)}EditEducationLevel(t){return this.postRequest("details-education-level",t)}deleteEducationLevel(t){return this.postRequest("delete-education-level",t)}addStage(t){return this.postRequest("add-stage",t)}editStage(t){return this.postRequest("details-stage",t)}DeleteStage(t){return this.postRequest("delete-stage",t)}getCarNames(t){return this.postRequest("car-names",t)}addCarName(t){return this.postRequest("add-car-name",t)}EditCarName(t){return this.postRequest("details-car-name",t)}DeleteCarName(t){return this.postRequest("delete-car-name",t)}addCarType(t){return this.postRequest("add-car-type",t)}EditCarType(t){return this.postRequest("details-car-type",t)}DeleteCarType(t){return this.postRequest("delete-car-type",t)}addManufacturingYear(t){return this.postRequest("add-manufacturing-year",t)}EditManufacturingYear(t){return this.postRequest("details-manufacturing-year",t)}DeleteManufacturingYear(t){return this.postRequest("delete-manufacturing-year",t)}EditCity(t){return this.postRequest("details-city",t)}DeleteCity(t){return this.postRequest("delete-city",t)}EditRelation(t){return this.postRequest("details-relation",t)}DeleteRelation(t){return this.postRequest("delete-relation",t)}getVoucherTypes(t){return this.postRequest("voucher-types",t)}DeleteVoucher(t){return this.postRequest("delete-voucher",t)}addNewVoucher(t){return this.postRequest("add-voucher",t)}assignPromoCodeToUsers(t){return this.postRequest("assign-voucher-to-users",t)}EditVoucher(t){return this.postRequest("details-voucher",t)}getEducationTypes(t=null){return this.postRequest("education-type",t)}DeletePlan(t=null){return this.postRequest("delete-plan",t)}addPlan(t=null){return this.postRequest("add-plan",t)}EditPlan(t=null){return this.postRequest("details-plan",t)}driverDetails(t){return this.postRequest("driver-details",t)}BlockDriver(t){return this.postRequest("block-driver",t)}UnBlockDriver(t){return this.postRequest("unblock-driver",t)}activeDriverAccount(t){return this.postRequest("active-driver",t)}activeDrivers(t=null){return this.postRequest("drivers",t)}blockedDrivers(t=null){return this.postRequest("blocked-drivers",t)}waitingDrivers(t=null){return this.postRequest("waiting-drivers",t)}sharingDrivers(t=null){return this.postRequest("sharing-drivers",t)}}return t.\u0275fac=function(e){return new(e||t)(n.bc(a.b))},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Cupa:function(t,e,a){"use strict";a.r(e),a.d(e,"SingleModule",function(){return dt});var c=a("tyNb"),n=a("bTqV"),s=a("bSwM"),i=a("FKr1"),o=a("iadO"),r=a("kmnG"),l=a("NFeN"),b=a("qFsG"),d=a("STbY"),h=a("+0xr"),u=a("/t3+"),m=a("wZkO"),p=a("5HBU"),f=a("LPQX"),g=a("3Pt+"),x=a("XNiG"),C=a("1G5W"),w=a("Kj3r"),v=a("/uUt"),S=a("PVWW"),y=a("fXoL"),X=a("2Vo4"),W=a("jD4G");class k{constructor(t){this.id=t.id||W.a.generateGUID(),this.driver=t.driver||"",this.tripNumber=t.tripNumber||"",this.lastName=t.lastName||"",this.isSubscribed=t.isSubscribed||"",this.avatar=t.avatar||"assets/images/avatars/profile.jpg",this.nickname=t.nickname||"",this.company=t.company||"",this.jobTitle=t.jobTitle||"",this.extra=t.extra||"",this.email=t.email||"",this.phone=t.phone||"",this.address=t.address||"",this.birthday=t.birthday||"",this.notes=t.notes||"",this.status=t.status||"",this.statusBackground="red"}}var _=a("tk/3");let D=(()=>{class t{constructor(t){this._httpClient=t,this.selectedContacts=[],this.onContactsChanged=new X.a([]),this.onSelectedContactsChanged=new X.a([]),this.onUserDataChanged=new X.a([]),this.onSearchTextChanged=new x.a,this.onFilterChanged=new x.a}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.getData(),this.getUserData()]).then(([e])=>{this.onSearchTextChanged.subscribe(t=>{this.searchText=t,this.getData()}),this.onFilterChanged.subscribe(t=>{this.filterBy=t,this.getData()}),t()},e)})}getData(){return new Promise((t,e)=>{this._httpClient.get("api/table").subscribe(e=>{this.data=e,"starred"===this.filterBy&&(this.data=this.data.filter(t=>this.user.starred.includes(t.id))),"frequent"===this.filterBy&&(this.data=this.data.filter(t=>this.user.frequentContacts.includes(t.id))),this.searchText&&""!==this.searchText&&(this.data=W.a.filterArrayByString(this.data,this.searchText)),this.data=this.data.map(t=>new k(t)),this.onContactsChanged.next(this.data),t(this.data)},e)})}getUserData(){return new Promise((t,e)=>{this._httpClient.get("api/contacts-user/5725a6802d10e277a0f35724").subscribe(e=>{this.user=e,this.onUserDataChanged.next(this.user),t(this.user)},e)})}toggleSelectedContact(t){if(this.selectedContacts.length>0){const e=this.selectedContacts.indexOf(t);if(-1!==e)return this.selectedContacts.splice(e,1),void this.onSelectedContactsChanged.next(this.selectedContacts)}this.selectedContacts.push(t),this.onSelectedContactsChanged.next(this.selectedContacts)}toggleSelectAll(){this.selectedContacts.length>0?this.deselectContacts():this.selectContacts()}selectContacts(t,e){this.selectedContacts=[],void 0!==t&&void 0!==e||(this.selectedContacts=[],this.data.map(t=>{this.selectedContacts.push(t.id)})),this.onSelectedContactsChanged.next(this.selectedContacts)}updateContact(t){return new Promise((e,a)=>{this._httpClient.post("api/contacts-contacts/"+t.id,Object.assign({},t)).subscribe(t=>{this.getData(),e(t)})})}updateUserData(t){return new Promise((e,a)=>{this._httpClient.post("api/contacts-user/"+this.user.id,Object.assign({},t)).subscribe(t=>{this.getUserData(),this.getData(),e(t)})})}deselectContacts(){this.selectedContacts=[],this.onSelectedContactsChanged.next(this.selectedContacts)}deleteContact(t){const e=this.data.indexOf(t);this.data.splice(e,1),this.onContactsChanged.next(this.data)}deleteSelectedContacts(){for(const t of this.selectedContacts){const e=this.data.find(e=>e.id===t),a=this.data.indexOf(e);this.data.splice(a,1)}this.onContactsChanged.next(this.data),this.deselectContacts()}}return t.\u0275fac=function(e){return new(e||t)(y.bc(_.b))},t.\u0275prov=y.Nb({token:t,factory:t.\u0275fac}),t})();var L=a("HX77"),N=a("0IaG"),O=a("B9zo"),F=a("XiUz"),j=a("znSr"),A=a("EwFO"),U=a("0EQZ"),T=a("2nsM"),R=a("ofXK");const M=["dialogContent"];function P(t,e){1&t&&y.Sb(0,"mat-header-cell")}function B(t,e){if(1&t){const t=y.Yb();y.Xb(0,"mat-cell"),y.Xb(1,"mat-checkbox",12),y.fc("ngModelChange",function(a){y.Bc(t);const c=e.$implicit;return y.jc().checkboxes[c.id]=a})("ngModelChange",function(){y.Bc(t);const a=e.$implicit;return y.jc().onSelectedChange(a.id)})("click",function(t){return t.stopPropagation()}),y.Wb(),y.Wb()}if(2&t){const t=e.$implicit,a=y.jc();y.Fb(1),y.pc("ngModel",a.checkboxes[t.id])}}function I(t,e){1&t&&y.Sb(0,"mat-header-cell")}function $(t,e){if(1&t&&y.Sb(0,"img",14),2&t){const t=y.jc().$implicit;y.pc("alt",t.name)("src",t.avatar,y.Dc)}}function V(t,e){if(1&t&&(y.Xb(0,"mat-cell"),y.Lc(1,$,1,2,"img",13),y.Wb()),2&t){const t=e.$implicit;y.Fb(1),y.pc("ngIf",t.avatar)}}function G(t,e){1&t&&(y.Xb(0,"mat-header-cell"),y.Nc(1,"Status"),y.Wb())}function H(t,e){if(1&t&&(y.Xb(0,"mat-cell"),y.Xb(1,"label"),y.Nc(2),y.Wb(),y.Wb()),2&t){const t=e.$implicit;y.Fb(1),y.Ib("text-truncate  font-weight-600 ",t.statusBackground,""),y.Fb(1),y.Oc(t.status)}}function q(t,e){1&t&&(y.Xb(0,"mat-header-cell"),y.Nc(1,"Driver"),y.Wb())}function z(t,e){if(1&t&&(y.Xb(0,"mat-cell"),y.Xb(1,"p",15),y.Nc(2),y.Wb(),y.Wb()),2&t){const t=e.$implicit;y.Fb(2),y.Oc(t.driver)}}function K(t,e){1&t&&(y.Xb(0,"mat-header-cell"),y.Nc(1,"Trip Number"),y.Wb())}function Q(t,e){if(1&t&&(y.Xb(0,"mat-cell"),y.Xb(1,"p",15),y.Nc(2),y.Wb(),y.Wb()),2&t){const t=e.$implicit;y.Fb(2),y.Oc(t.tripNumber)}}function Y(t,e){1&t&&y.Sb(0,"mat-header-cell")}function E(t,e){if(1&t){const t=y.Yb();y.Xb(0,"mat-cell"),y.Xb(1,"div",16),y.Xb(2,"button",17),y.fc("click",function(t){return t.stopPropagation()}),y.Xb(3,"mat-icon",18),y.Nc(4,"more_vert"),y.Wb(),y.Wb(),y.Xb(5,"mat-menu",null,19),y.Xb(7,"button",20),y.fc("click",function(){y.Bc(t);const a=e.$implicit;return y.jc().deleteContact(a)}),y.Xb(8,"mat-icon"),y.Nc(9,"delete"),y.Wb(),y.Xb(10,"span"),y.Nc(11,"Remove"),y.Wb(),y.Wb(),y.Wb(),y.Wb(),y.Wb()}if(2&t){const t=y.xc(6);y.Fb(2),y.pc("matMenuTriggerFor",t)}}function J(t,e){1&t&&y.Sb(0,"mat-header-row")}const Z=function(t){return{"accent-50":t}},tt=function(){return{y:"100%"}},et=function(t){return{value:"*",params:t}};function at(t,e){if(1&t&&y.Sb(0,"mat-row",21),2&t){const t=e.$implicit,a=y.jc();y.pc("ngClass",y.tc(2,Z,a.checkboxes[t.id]))("@animate",y.tc(5,et,y.sc(4,tt)))}}const ct=function(){return{value:"50"}};let nt=(()=>{class t{constructor(t,e){this._contactsService=t,this._matDialog=e,this.displayedColumns=["checkbox","avatar","tripNumber","driver","status","buttons"],this._unsubscribeAll=new x.a}ngOnInit(){this.dataSource=new st(this._contactsService),this._contactsService.onContactsChanged.pipe(Object(C.a)(this._unsubscribeAll)).subscribe(t=>{this.contacts=t,this.checkboxes={},t.map(t=>{this.checkboxes[t.id]=!1})}),this._contactsService.onSelectedContactsChanged.pipe(Object(C.a)(this._unsubscribeAll)).subscribe(t=>{for(const e in this.checkboxes)this.checkboxes.hasOwnProperty(e)&&(this.checkboxes[e]=t.includes(e));this.selectedContacts=t}),this._contactsService.onUserDataChanged.pipe(Object(C.a)(this._unsubscribeAll)).subscribe(t=>{this.user=t}),this._contactsService.onFilterChanged.pipe(Object(C.a)(this._unsubscribeAll)).subscribe(()=>{this._contactsService.deselectContacts()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}deleteContact(t){this.confirmDialogRef=this._matDialog.open(T.a,{disableClose:!1}),this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete?",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this._contactsService.deleteContact(t),this.confirmDialogRef=null})}onSelectedChange(t){this._contactsService.toggleSelectedContact(t)}toggleStar(t){this.user.starred.includes(t)?this.user.starred.splice(this.user.starred.indexOf(t),1):this.user.starred.push(t),this._contactsService.updateUserData(this.user)}}return t.\u0275fac=function(e){return new(e||t)(y.Rb(D),y.Rb(N.b))},t.\u0275cmp=y.Lb({type:t,selectors:[["list-component"]],viewQuery:function(t,e){if(1&t&&y.Rc(M,!0),2&t){let t;y.wc(t=y.gc())&&(e.dialogContent=t.first)}},decls:22,vars:5,consts:[[3,"dataSource"],["table",""],["matColumnDef","checkbox"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","avatar"],["matColumnDef","status"],["matColumnDef","driver"],["matColumnDef","tripNumber"],["matColumnDef","buttons"],[4,"matHeaderRowDef"],["class","contact",3,"ngClass",4,"matRowDef","matRowDefColumns"],[3,"ngModel","ngModelChange","click"],["class","avatar",3,"alt","src",4,"ngIf"],[1,"avatar",3,"alt","src"],[1,"text-truncate","font-weight-600"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],[1,"secondary-text"],["moreMenu","matMenu"],["mat-menu-item","","aria-label","remove",3,"click"],[1,"contact",3,"ngClass"]],template:function(t,e){1&t&&(y.Xb(0,"mat-table",0,1),y.Vb(2,2),y.Lc(3,P,1,0,"mat-header-cell",3),y.Lc(4,B,2,1,"mat-cell",4),y.Ub(),y.Vb(5,5),y.Lc(6,I,1,0,"mat-header-cell",3),y.Lc(7,V,2,1,"mat-cell",4),y.Ub(),y.Vb(8,6),y.Lc(9,G,2,0,"mat-header-cell",3),y.Lc(10,H,3,4,"mat-cell",4),y.Ub(),y.Vb(11,7),y.Lc(12,q,2,0,"mat-header-cell",3),y.Lc(13,z,3,1,"mat-cell",4),y.Ub(),y.Vb(14,8),y.Lc(15,K,2,0,"mat-header-cell",3),y.Lc(16,Q,3,1,"mat-cell",4),y.Ub(),y.Vb(17,9),y.Lc(18,Y,1,0,"mat-header-cell",3),y.Lc(19,E,12,1,"mat-cell",4),y.Ub(),y.Lc(20,J,1,0,"mat-header-row",10),y.Lc(21,at,1,7,"mat-row",11),y.Wb()),2&t&&(y.pc("dataSource",e.dataSource)("@animateStagger",y.sc(4,ct)),y.Fb(20),y.pc("matHeaderRowDef",e.displayedColumns),y.Fb(1),y.pc("matRowDefColumns",e.displayedColumns))},directives:[h.j,h.c,h.e,h.b,h.g,h.i,h.d,h.a,s.a,g.n,g.q,R.t,F.a,F.b,n.b,d.d,l.a,d.a,d.b,h.f,h.h,R.q,j.a],styles:["list-component{display:flex;flex:1 1 auto;width:100%}list-component .mat-table{width:100%;background:transparent;box-shadow:none}list-component .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}list-component .mat-table .mat-column-avatar{flex:0 1 64px}list-component .mat-table .mat-column-buttons{flex:0 1 80px}list-component .mat-table label{height:10px;width:10px;border-radius:50%}list-component .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}list-component .mat-table .mat-row .mat-cell{min-width:0}list-component .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){list-component .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:S.a}}),t})();class st extends U.b{constructor(t){super(),this._contactsService=t}connect(){return this._contactsService.onContactsChanged}disconnect(){}}const it=function(){return{delay:"50ms",scale:"0.2"}},ot=function(t){return{value:"*",params:t}},rt=function(){return{delay:"100ms",x:"-25px"}},lt=function(){return{delay:"300ms",scale:".2"}},bt=[{path:"**",component:(()=>{class t{constructor(t,e,a){this._contactsService=t,this._fuseSidebarService=e,this._matDialog=a,this.searchInput=new g.e(""),this._unsubscribeAll=new x.a}ngOnInit(){this._contactsService.onSelectedContactsChanged.pipe(Object(C.a)(this._unsubscribeAll)).subscribe(t=>{this.hasSelectedContacts=t.length>0}),this.searchInput.valueChanges.pipe(Object(C.a)(this._unsubscribeAll),Object(w.a)(300),Object(v.a)()).subscribe(t=>{this._contactsService.onSearchTextChanged.next(t)})}ngOnDestroy(){this._contactsService.onSearchTextChanged.next(""),this._unsubscribeAll.next(),this._unsubscribeAll.complete()}toggleSidebar(t){this._fuseSidebarService.getSidebar(t).toggleOpen()}}return t.\u0275fac=function(e){return new(e||t)(y.Rb(D),y.Rb(L.a),y.Rb(N.b))},t.\u0275cmp=y.Lb({type:t,selectors:[["single"]],decls:28,vars:13,consts:[["id","contacts",1,"page-layout","simple","left-sidebar","inner-sidebar","inner-scroll"],["fxLayout","column","fxLayoutAlign","start","fxLayout.gt-xs","row","fxLayoutAlign.gt-xs","space-between center",1,"header","accent","p-16","p-sm-24"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","fxHide.gt-sm","",1,"sidebar-toggle","mr-12",3,"click"],["fxLayout","row","fxLayoutAlign","start center",1,"logo"],[1,"logo-icon","mr-16"],[1,"logo-text","h1"],["fxLayout","row","fxLayoutAlign","center center","fxFlex","",1,"ml-sm-32"],[1,"search-wrapper","mt-16","mt-sm-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Search ",3,"formControl"],[1,"content"],["fusePerfectScrollbar","",1,"center","p-24","pb-56","pr-sm-92"],["dynamicHeight",""],["label","Active Trips"],["label","Closed Trips"],["mat-fab","","id","add-contact-button","aria-label","add contact",1,"accent"]],template:function(t,e){1&t&&(y.Xb(0,"div",0),y.Xb(1,"div",1),y.Xb(2,"div",2),y.Xb(3,"button",3),y.fc("click",function(){return e.toggleSidebar("contacts-main-sidebar")}),y.Xb(4,"mat-icon"),y.Nc(5,"menu"),y.Wb(),y.Wb(),y.Xb(6,"div",4),y.Xb(7,"mat-icon",5),y.Nc(8,"account_box "),y.Wb(),y.Xb(9,"span",6),y.Nc(10," Children "),y.Wb(),y.Wb(),y.Wb(),y.Xb(11,"div",7),y.Xb(12,"div",8),y.Xb(13,"div",9),y.Xb(14,"mat-icon"),y.Nc(15,"search"),y.Wb(),y.Sb(16,"input",10),y.Wb(),y.Wb(),y.Wb(),y.Wb(),y.Xb(17,"div",11),y.Xb(18,"div",12),y.Xb(19,"div",11),y.Xb(20,"mat-tab-group",13),y.Xb(21,"mat-tab",14),y.Sb(22,"list-component"),y.Wb(),y.Xb(23,"mat-tab",15),y.Sb(24,"list-component"),y.Wb(),y.Wb(),y.Wb(),y.Wb(),y.Wb(),y.Wb(),y.Xb(25,"button",16),y.Xb(26,"mat-icon"),y.Nc(27,"person_add"),y.Wb(),y.Wb()),2&t&&(y.Fb(7),y.pc("@animate",y.tc(5,ot,y.sc(4,it))),y.Fb(2),y.pc("@animate",y.tc(8,ot,y.sc(7,rt))),y.Fb(7),y.pc("formControl",e.searchInput),y.Fb(9),y.pc("@animate",y.tc(11,ot,y.sc(10,lt))))},directives:[O.a,F.c,F.b,n.b,j.b,l.a,F.a,g.c,g.n,g.f,A.a,m.b,m.a,nt],styles:["#contacts .header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#contacts .header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}#contacts .header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}#contacts .content{overflow:hidden}#contacts .content .sidebar:not(.locked-open){background:#fff}contacts-contact-list{display:flex;flex:1 1 auto;width:100%}contacts-contact-list .mat-table{width:100%;background:transparent;box-shadow:none}contacts-contact-list .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}contacts-contact-list .mat-table .mat-column-avatar{flex:0 1 64px}contacts-contact-list .mat-table .mat-column-buttons{flex:0 1 80px}contacts-contact-list .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}contacts-contact-list .mat-table .mat-row .mat-cell{min-width:0}contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:S.a}}),t})(),resolve:{contacts:D}}];let dt=(()=>{class t{}return t.\u0275mod=y.Pb({type:t}),t.\u0275inj=y.Ob({factory:function(e){return new(e||t)},providers:[D],imports:[[c.j.forChild(bt),n.c,s.b,o.c,r.d,l.b,b.c,d.c,i.p,h.k,u.b,m.c,p.a,f.a,f.f]]}),t})()}}]);
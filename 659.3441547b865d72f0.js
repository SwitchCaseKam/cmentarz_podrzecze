"use strict";(self.webpackChunkcemetery=self.webpackChunkcemetery||[]).push([[659],{8659:(O,u,a)=>{a.r(u),a.d(u,{ListModule:()=>c});var p=a(6895),m=a(7676),b=a(2654),d=a(2198),f=a(2868),h=a(7545),t=a(5062),Z=a(2250),T=a(4984),v=a(4668);function x(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr",5),t.NdJ("click",function(){const g=t.CHM(o).$implicit,M=t.oxw();return t.KtG(M.onRowClick(g.tombId,g.id))}),t.TgZ(1,"td",6),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"b"),t._uU(5),t.qZA()(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()}if(2&n){const o=e.$implicit,l=e.index;t.xp6(2),t.Oqu(l+1),t.xp6(3),t.AsE("",o.surname," ",o.name,""),t.xp6(2),t.Oqu(o.birthDate),t.xp6(2),t.Oqu(o.deathDate)}}class r{constructor(e){this.tombMarkerService=e}onRowClick(e){this.tombMarkerService.redirectToMapAndMarkTomb(e,500)}}function y(n,e){if(1&n&&(t.ynx(0),t._uU(1,"Stan na dzie\u0144: "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t.BQk()),2&n){const o=t.oxw(2);t.xp6(3),t.Oqu(o.dbDate)}}function C(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"h1",3),t._uU(2,"Lista zmar\u0142ych"),t.qZA(),t.TgZ(3,"div",4),t._uU(4," Lista zmar\u0142ych zosta\u0142a uporz\u0105dkowana alfabetycznie."),t._UZ(5,"br"),t._uU(6," Klikni\u0119cie na dany wiersz w tabeli przekierowuje na map\u0119 cmentarza z zaznaczonym grobem, w kt\xf3rym spoczywa zmar\u0142y."),t._UZ(7,"br"),t.YNc(8,y,4,1,"ng-container",5),t.qZA(),t._UZ(9,"app-people-table",6),t.BQk()),2&n){const o=t.oxw();t.xp6(8),t.Q6J("ngIf",o.dbDate),t.xp6(1),t.Q6J("allPeople",o.allPeople)}}function P(n,e){1&n&&(t.TgZ(0,"div",7),t._UZ(1,"app-spinner"),t.qZA())}r.\u0275fac=function(e){return new(e||r)(t.Y36(v.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-people-table"]],inputs:{allPeople:"allPeople"},decls:14,vars:1,consts:[["id","people-table-list"],[1,"table","table-hover"],[1,"thead-dark"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["scope","row"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr")(4,"th",3),t._uU(5,"Nr"),t.qZA(),t.TgZ(6,"th",3),t._uU(7,"Nazwisko i imi\u0119"),t.qZA(),t.TgZ(8,"th",3),t._uU(9,"Data urodzenia"),t.qZA(),t.TgZ(10,"th",3),t._uU(11,"Data \u015bmierci"),t.qZA()()(),t.TgZ(12,"tbody"),t.YNc(13,x,10,5,"tr",4),t.qZA()()()),2&e&&(t.xp6(13),t.Q6J("ngForOf",o.allPeople))},dependencies:[p.sg],styles:["#people-table-list[_ngcontent-%COMP%]{padding-top:1.5em;padding-bottom:1em;animation-name:fade-in;animation-duration:1s}.table-hover[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#379bc2;color:#fff}.table[_ngcontent-%COMP%]{background-color:#ecebeb99;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border:1px solid rgb(83,82,82)}"]});class s{constructor(e){this.dataService=e,this.dataSubscription=new b.w}ngOnInit(){this.fetchListDataToDisplay()}ngOnDestroy(){this.dataSubscription?.unsubscribe()}fetchListDataToDisplay(){this.dataSubscription=this.dataService.getAllPeopleSubject().pipe((0,d.h)(e=>e?.length>0),(0,f.b)(e=>{this.allPeople=e.sort((o,l)=>o.surname.localeCompare(l.surname,"pl",{ignorePunctuation:!0}))}),(0,h.w)(()=>this.dataService.getDatabaseDateSubject()),(0,d.h)(e=>""!==e)).subscribe(e=>this.dbDate=e)}}s.\u0275fac=function(e){return new(e||s)(t.Y36(Z.D))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-list"]],decls:4,vars:2,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["noData",""],[1,"title"],["id","people-list-box"],[4,"ngIf"],[3,"allPeople"],[1,"no-data-container"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,10,2,"ng-container",1),t.YNc(2,P,2,0,"ng-template",null,2,t.W1O),t.qZA()),2&e){const l=t.MAs(3);t.xp6(1),t.Q6J("ngIf",o.allPeople)("ngIfElse",l)}},dependencies:[p.O5,T.O,r],styles:["#people-list-box[_ngcontent-%COMP%]{margin-top:1em;animation-name:fade-in;animation-duration:1s}.title[_ngcontent-%COMP%]{margin-top:1em}.no-data-container[_ngcontent-%COMP%]{padding-top:1em;display:flex;justify-content:center;text-align:center;height:40vh}"]});const z=[{path:"",component:s}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(z),m.Bz]});var A=a(4466);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[p.ez,i,A.m]})}}]);
!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkcemetery=self.webpackChunkcemetery||[]).push([[140],{58140:function(n,i,a){a.r(i),a.d(i,{ListModule:function(){return T}});var o=a(38583),r=a(19516),c=a(75319),u=a(45435),l=a(93342),p=a(43190),s=a(33018),f=a(27182),d=a(17590);function b(t,n){if(1&t){var e=s.EpF();s.TgZ(0,"tr",5),s.NdJ("click",function(){var t=s.CHM(e).$implicit;return s.oxw().onRowClick(t.tombId,t.id)}),s.TgZ(1,"td",6),s._uU(2),s.qZA(),s.TgZ(3,"td"),s.TgZ(4,"b"),s._uU(5),s.qZA(),s.qZA(),s.TgZ(6,"td"),s._uU(7),s.qZA(),s.TgZ(8,"td"),s._uU(9),s.qZA(),s.qZA()}if(2&t){var i=n.$implicit,a=n.index;s.xp6(2),s.Oqu(a+1),s.xp6(3),s.AsE("",i.surname," ",i.name,""),s.xp6(2),s.Oqu(i.birthDate),s.xp6(2),s.Oqu(i.deathDate)}}var g,m=((g=function(){function n(e){t(this,n),this.tombMarkerService=e}return e(n,[{key:"onRowClick",value:function(t){this.tombMarkerService.redirectToMapAndMarkTomb(t,500)}}]),n}()).\u0275fac=function(t){return new(t||g)(s.Y36(d.N))},g.\u0275cmp=s.Xpm({type:g,selectors:[["app-people-table"]],inputs:{allPeople:"allPeople"},decls:14,vars:1,consts:[["id","people-table-list"],[1,"table","table-hover"],[1,"thead-dark"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["scope","row"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"table",1),s.TgZ(2,"thead",2),s.TgZ(3,"tr"),s.TgZ(4,"th",3),s._uU(5,"Nr"),s.qZA(),s.TgZ(6,"th",3),s._uU(7,"Nazwisko i imi\u0119"),s.qZA(),s.TgZ(8,"th",3),s._uU(9,"Data urodzenia"),s.qZA(),s.TgZ(10,"th",3),s._uU(11,"Data \u015bmierci"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"tbody"),s.YNc(13,b,10,5,"tr",4),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(13),s.Q6J("ngForOf",n.allPeople))},directives:[o.sg],styles:["#people-table-list[_ngcontent-%COMP%]{padding-top:1.5em;padding-bottom:1em;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:1s;animation-duration:1s}.table-hover[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#379bc2;color:#fff}.table[_ngcontent-%COMP%]{background-color:rgba(236,235,235,.6);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border:1px solid rgb(83,82,82)}"]}),g),Z=a(52173);function h(t,n){if(1&t&&(s.ynx(0),s._uU(1,"Stan na dzie\u0144: "),s.TgZ(2,"b"),s._uU(3),s.qZA(),s.BQk()),2&t){var e=s.oxw(2);s.xp6(3),s.Oqu(e.dbDate)}}function v(t,n){if(1&t&&(s.ynx(0),s.TgZ(1,"h1",3),s._uU(2,"Lista zmar\u0142ych"),s.qZA(),s.TgZ(3,"div",4),s._uU(4," Lista zmar\u0142ych zosta\u0142a uporz\u0105dkowana alfabetycznie."),s._UZ(5,"br"),s._uU(6," Klikni\u0119cie na dany wiersz w tabeli przekierowuje na map\u0119 cmentarza z zaznaczonym grobem, w kt\xf3rym spoczywa zmar\u0142y."),s._UZ(7,"br"),s.YNc(8,h,4,1,"ng-container",5),s.qZA(),s._UZ(9,"app-people-table",6),s.BQk()),2&t){var e=s.oxw();s.xp6(8),s.Q6J("ngIf",e.dbDate),s.xp6(1),s.Q6J("allPeople",e.allPeople)}}function k(t,n){1&t&&(s.TgZ(0,"div",7),s._UZ(1,"app-spinner"),s.qZA())}var y=[{path:"",component:function(){var n=function(){function n(e){t(this,n),this.dataService=e,this.dataSubscription=new c.w}return e(n,[{key:"ngOnInit",value:function(){this.fetchListDataToDisplay()}},{key:"ngOnDestroy",value:function(){var t;null===(t=this.dataSubscription)||void 0===t||t.unsubscribe()}},{key:"fetchListDataToDisplay",value:function(){var t=this;this.dataSubscription=this.dataService.getAllPeopleSubject().pipe((0,u.h)(function(t){return(null==t?void 0:t.length)>0}),(0,l.b)(function(n){t.allPeople=n.sort(function(t,n){return t.surname.localeCompare(n.surname,"pl",{ignorePunctuation:!0})})}),(0,p.w)(function(){return t.dataService.getDatabaseDateSubject()}),(0,u.h)(function(t){return""!==t})).subscribe(function(n){return t.dbDate=n})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(f.D))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-list"]],decls:4,vars:2,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["noData",""],[1,"title"],["id","people-list-box"],[4,"ngIf"],[3,"allPeople"],[1,"no-data-container"]],template:function(t,n){if(1&t&&(s.TgZ(0,"div",0),s.YNc(1,v,10,2,"ng-container",1),s.YNc(2,k,2,0,"ng-template",null,2,s.W1O),s.qZA()),2&t){var e=s.MAs(3);s.xp6(1),s.Q6J("ngIf",n.allPeople)("ngIfElse",e)}},directives:[o.O5,m,Z.O],styles:["#people-list-box[_ngcontent-%COMP%]{margin-top:1em;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:1s;animation-duration:1s}.title[_ngcontent-%COMP%]{margin-top:1em}.no-data-container[_ngcontent-%COMP%]{padding-top:1em;display:flex;justify-content:center;text-align:center;height:40vh}"]}),n}()}],w=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[r.Bz.forChild(y)],r.Bz]}),n}(),A=a(90754),T=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,w,A.U]]}),n}()}}])}();
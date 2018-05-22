(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/5FP":function(l,n,a){"use strict";a.r(n);var u=a("LoAr"),e=function(){},t=a("g8z+"),i=["html","typescript","css"],o=function(){},c=function(){return function(l,n){this.codeHtml=t.highlightAuto('\n  <cb-social>\n    <mat-icon svgIcon="linkedin"></mat-icon>\n  </cb-social>\n  <cb-social>\n    <mat-icon svgIcon="github"></mat-icon>\n  </cb-social>\n  <cb-social>\n    <mat-icon svgIcon="twitter"></mat-icon>\n  </cb-social>\n  <cb-social>\n    <mat-icon svgIcon="instagram"></mat-icon>\n  </cb-social>',i).value,this.codeTs=t.highlightAuto("\n  import {Component} from '@angular/core';\n\n  /**\n   * @title Basic social media\n   */\n  @Component({\n    selector: 'social-overview-example',\n    templateUrl: 'social-overview-example.html',\n    styleUrls: ['social-overview-example.css']\n  })\n  export class SocialOverviewExample {\n    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {\n      iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));\n      iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));\n      iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));\n      iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));\n    }\n  }\n  ",i).value,this.codeCss=t.highlightAuto("\n  /** No CSS for this example */\n  ",i).value,l.addSvgIcon("linkedin",n.bypassSecurityTrustResourceUrl("assets/icons/linkedin.svg")),l.addSvgIcon("github",n.bypassSecurityTrustResourceUrl("assets/icons/github.svg")),l.addSvgIcon("twitter",n.bypassSecurityTrustResourceUrl("assets/icons/twitter.svg")),l.addSvgIcon("instagram",n.bypassSecurityTrustResourceUrl("assets/icons/instagram.svg"))}}(),s=function(){return function(){this.import_content=t.highlightAuto("\n  import { CbSocialModule } from 'cubo-ui';\n\n  @NgModule({\n    imports: [\n      CbSocialModule\n    ]\n  })\n  export class ExampleModule { }\n  ",["nohighlight"]).value}}(),r=a("NHnc"),b=a("Cuw9"),d=a("Bm1t"),p=a("qu1y"),g=a("Hc9t"),m=a("rXXt"),h=a("7NyU"),v=a("CZ/t"),f=a("PVb+"),P=a("0xYh"),y=a("YpLM"),x=a("w9fW"),S=a("SeAg"),I=u.Na({encapsulation:2,styles:[],data:{}});function w(l){return u.gb(0,[],null,null)}var O=u.La("page-social-component",o,function(l){return u.gb(0,[(l()(),u.Pa(0,0,null,null,1,"page-social-component",[],null,null,null,w,I)),u.Oa(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),X=u.Na({encapsulation:2,styles:[],data:{}});function _(l){return u.gb(0,[(l()(),u.Pa(0,0,null,null,34,"app-content",[],null,null,null,r.b,r.a)),u.Oa(1,49152,null,0,b.a,[],null,null),(l()(),u.Pa(2,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Pa(3,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["cb-social"])),(l()(),u.fb(-1,null,[" makes it easier to integrate icons from social media."])),(l()(),u.Pa(6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Select Social Media"])),(l()(),u.Pa(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["It is possible to add the social media icons through the MatIconRegistry module, if you opt to use the MatIcon."])),(l()(),u.Pa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["In this example, we decided to use the icons from the MatIconModule, so to register then we used the MatIconRegistry module, but this is not mandatory, it is possible to user your own icons without the material library."])),(l()(),u.Pa(12,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Themings"])),(l()(),u.Pa(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["The default color for all the items is gray, it changes to the original social media color when the user hovers the icon."])),(l()(),u.Pa(16,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Examples"])),(l()(),u.Pa(18,0,null,0,16,"div",[],null,null,null,null,null)),(l()(),u.Pa(19,0,null,null,3,"cb-social",[["class","cb-social"],["role","button"]],null,null,null,d.B,d.n)),u.Oa(20,49152,null,0,p.q,[],null,null),(l()(),u.Pa(21,0,null,0,1,"mat-icon",[["class","mat-icon"],["role","img"],["svgIcon","linkedin"]],[[2,"mat-icon-inline",null]],null,null,g.b,g.a)),u.Oa(22,638976,null,0,m.a,[u.k,m.c,[8,null]],{svgIcon:[0,"svgIcon"]},null),(l()(),u.Pa(23,0,null,null,3,"cb-social",[["class","cb-social"],["role","button"]],null,null,null,d.B,d.n)),u.Oa(24,49152,null,0,p.q,[],null,null),(l()(),u.Pa(25,0,null,0,1,"mat-icon",[["class","mat-icon"],["role","img"],["svgIcon","github"]],[[2,"mat-icon-inline",null]],null,null,g.b,g.a)),u.Oa(26,638976,null,0,m.a,[u.k,m.c,[8,null]],{svgIcon:[0,"svgIcon"]},null),(l()(),u.Pa(27,0,null,null,3,"cb-social",[["class","cb-social"],["role","button"]],null,null,null,d.B,d.n)),u.Oa(28,49152,null,0,p.q,[],null,null),(l()(),u.Pa(29,0,null,0,1,"mat-icon",[["class","mat-icon"],["role","img"],["svgIcon","twitter"]],[[2,"mat-icon-inline",null]],null,null,g.b,g.a)),u.Oa(30,638976,null,0,m.a,[u.k,m.c,[8,null]],{svgIcon:[0,"svgIcon"]},null),(l()(),u.Pa(31,0,null,null,3,"cb-social",[["class","cb-social"],["role","button"]],null,null,null,d.B,d.n)),u.Oa(32,49152,null,0,p.q,[],null,null),(l()(),u.Pa(33,0,null,0,1,"mat-icon",[["class","mat-icon"],["role","img"],["svgIcon","instagram"]],[[2,"mat-icon-inline",null]],null,null,g.b,g.a)),u.Oa(34,638976,null,0,m.a,[u.k,m.c,[8,null]],{svgIcon:[0,"svgIcon"]},null),(l()(),u.Pa(35,0,null,null,36,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),u.Oa(36,16384,null,0,h.a,[],null,null),(l()(),u.Pa(37,16777216,null,null,34,"mat-expansion-panel",[["class","panel mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"mat-expansion-panel-spacing",null]],null,null,v.d,v.a)),u.Oa(38,1753088,null,1,h.c,[[2,h.a],u.h,f.b,u.O],null,null),u.db(335544320,1,{_lazyContent:0}),(l()(),u.Pa(40,0,null,0,4,"mat-expansion-panel-header",[["class","panel__header mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(l,n,a){var e=!0;return"click"===n&&(e=!1!==u.Za(l,41)._toggle()&&e),"keydown"===n&&(e=!1!==u.Za(l,41)._keydown(a)&&e),e},v.c,v.b)),u.Oa(41,180224,null,0,h.d,[h.c,u.k,P.b,u.h],null,null),u.bb(42,{collapsedHeight:0,expandedHeight:1}),u.bb(43,{value:0,params:1}),(l()(),u.fb(-1,2,[" View Code "])),(l()(),u.Pa(45,0,null,1,26,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,y.c,y.b)),u.Oa(46,3325952,null,1,x.e,[u.k,u.h],null,null),u.db(603979776,2,{_tabs:1}),(l()(),u.Pa(48,16777216,null,null,7,"mat-tab",[["label","HTML"]],null,null,null,y.d,y.a)),u.Oa(49,770048,[[2,4]],2,x.b,[u.O],{textLabel:[0,"textLabel"]},null),u.db(335544320,3,{templateLabel:0}),u.db(335544320,4,{_explicitContent:0}),(l()(),u.Pa(52,0,null,0,3,"pre",[["class","panel__code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["          "])),(l()(),u.Pa(54,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.fb(-1,null,["\n        "])),(l()(),u.Pa(56,16777216,null,null,7,"mat-tab",[["label","TS"]],null,null,null,y.d,y.a)),u.Oa(57,770048,[[2,4]],2,x.b,[u.O],{textLabel:[0,"textLabel"]},null),u.db(335544320,5,{templateLabel:0}),u.db(335544320,6,{_explicitContent:0}),(l()(),u.Pa(60,0,null,0,3,"pre",[["class","panel__code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["          "])),(l()(),u.Pa(62,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.fb(-1,null,["\n        "])),(l()(),u.Pa(64,16777216,null,null,7,"mat-tab",[["label","CSS"]],null,null,null,y.d,y.a)),u.Oa(65,770048,[[2,4]],2,x.b,[u.O],{textLabel:[0,"textLabel"]},null),u.db(335544320,7,{templateLabel:0}),u.db(335544320,8,{_explicitContent:0}),(l()(),u.Pa(68,0,null,0,3,"pre",[["class","panel__code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["          "])),(l()(),u.Pa(70,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.fb(-1,null,["\n        "]))],function(l,n){l(n,22,0,"linkedin"),l(n,26,0,"github"),l(n,30,0,"twitter"),l(n,34,0,"instagram"),l(n,49,0,"HTML"),l(n,57,0,"TS"),l(n,65,0,"CSS")},function(l,n){var a=n.component;l(n,21,0,u.Za(n,22).inline),l(n,25,0,u.Za(n,26).inline),l(n,29,0,u.Za(n,30).inline),l(n,33,0,u.Za(n,34).inline),l(n,37,0,u.Za(n,38).expanded,u.Za(n,38)._hasSpacing()),l(n,40,0,u.Za(n,41).panel._headerId,u.Za(n,41).panel.disabled?-1:0,u.Za(n,41)._getPanelId(),u.Za(n,41)._isExpanded(),u.Za(n,41).panel.disabled,u.Za(n,41)._isExpanded(),l(n,43,0,u.Za(n,41)._getExpandedState(),l(n,42,0,u.Za(n,41).collapsedHeight,u.Za(n,41).expandedHeight))),l(n,45,0,u.Za(n,46).dynamicHeight,"below"===u.Za(n,46).headerPosition),l(n,54,0,a.codeHtml),l(n,62,0,a.codeTs),l(n,70,0,a.codeCss)})}var k=u.La("page-social-example",c,function(l){return u.gb(0,[(l()(),u.Pa(0,0,null,null,1,"page-social-example",[],null,null,null,_,X)),u.Oa(1,49152,null,0,c,[m.c,S.c],null,null)],null,null)},{},{},[]),L=u.Na({encapsulation:2,styles:[],data:{}});function C(l){return u.gb(0,[(l()(),u.Pa(0,0,null,null,18,"app-content",[],null,null,null,r.b,r.a)),u.Oa(1,49152,null,0,b.a,[],null,null),(l()(),u.Pa(2,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["API reference"])),(l()(),u.Pa(4,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),u.Pa(5,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.Pa(6,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.Pa(7,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Directives"])),(l()(),u.Pa(9,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),u.Pa(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Selector: "])),(l()(),u.Pa(12,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["cb-social"])),(l()(),u.Pa(14,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),u.Pa(15,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Exported as: "])),(l()(),u.Pa(17,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["CbSocial"]))],null,function(l,n){l(n,6,0,n.component.import_content)})}var T=u.La("page-social-api",s,function(l){return u.gb(0,[(l()(),u.Pa(0,0,null,null,1,"page-social-api",[],null,null,null,C,L)),u.Oa(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]),M=a("WT9V"),Z=a("SPdK"),H=a("y7gG"),R=a("981U"),U=a("C7Lb"),V=a("UelK"),z=a("WgBV"),N=a("LxDK"),A=a("V7OE"),B=a("LYzL"),E=a("abkR"),W=a("WV+C"),j=a("5neO"),q=a("PCNd"),D=function(){},K=a("PODb");a.d(n,"PageSocialModuleNgFactory",function(){return Y});var Y=u.Ma(e,[],function(l){return u.Wa([u.Xa(512,u.j,u.Ba,[[8,[k,T,O]],[3,u.j],u.v]),u.Xa(4608,M.l,M.k,[u.s,[2,M.s]]),u.Xa(4608,Z.h,Z.g,[Z.c,Z.e]),u.Xa(5120,u.b,function(l,n){return[Z.k(l,n)]},[M.c,u.z]),u.Xa(4608,H.b,H.b,[]),u.Xa(1073742336,R.n,R.n,[[2,R.s],[2,R.k]]),u.Xa(1073742336,M.b,M.b,[]),u.Xa(1073742336,Z.d,Z.d,[]),u.Xa(1073742336,U.a,U.a,[]),u.Xa(1073742336,V.a,V.a,[]),u.Xa(1073742336,z.b,z.b,[]),u.Xa(1073742336,N.a,N.a,[]),u.Xa(1073742336,A.a,A.a,[[2,Z.i],u.z]),u.Xa(1073742336,B.i,B.i,[[2,B.c]]),u.Xa(1073742336,E.c,E.c,[]),u.Xa(1073742336,W.b,W.b,[]),u.Xa(1073742336,B.s,B.s,[]),u.Xa(1073742336,H.c,H.c,[]),u.Xa(1073742336,x.i,x.i,[]),u.Xa(1073742336,j.c,j.c,[]),u.Xa(1073742336,h.b,h.b,[]),u.Xa(1073742336,q.a,q.a,[]),u.Xa(1073742336,D,D,[]),u.Xa(1073742336,p.r,p.r,[]),u.Xa(1073742336,m.b,m.b,[]),u.Xa(1073742336,K.a,K.a,[]),u.Xa(1073742336,e,e,[]),u.Xa(1024,R.i,function(){return[[{path:"",component:c,outlet:"example"},{path:"",component:s,outlet:"api"},{path:"",component:o}]]},[])])})},cQOC:function(l,n,a){"use strict";a.d(n,"a",function(){return r});var u=a("D57K"),e=a("HnWI"),t=a("snle"),i=a("d9YI"),o=a("Lh+r"),c=a("leiK"),s=a("Jg5f");function r(){for(var l,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return"function"==typeof n[n.length-1]&&(l=n.pop()),1===n.length&&Object(t.a)(n[0])&&(n=n[0]),0===n.length?i.a:l?r(n).pipe(Object(s.a)(function(n){return l.apply(void 0,n)})):new e.a(function(l){return new b(l,n)})}var b=function(l){function n(n,a){var u=l.call(this,n)||this;u.sources=a,u.completed=0,u.haveValues=0;var e=a.length;u.values=new Array(e);for(var t=0;t<e;t++){var i=a[t],c=Object(o.a)(u,i,null,t);c&&u.add(c)}return u}return u.b(n,l),n.prototype.notifyNext=function(l,n,a,u,e){this.values[a]=n,e._hasValue||(e._hasValue=!0,this.haveValues++)},n.prototype.notifyComplete=function(l){var n=this.destination,a=this.haveValues,u=this.values,e=u.length;l._hasValue?(this.completed++,this.completed===e&&(a===e&&n.next(u),n.complete())):n.complete()},n}(c.a)}}]);
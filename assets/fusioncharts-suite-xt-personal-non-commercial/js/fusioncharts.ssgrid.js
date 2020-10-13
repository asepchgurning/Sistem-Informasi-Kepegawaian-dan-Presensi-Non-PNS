/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.11.3
*/
(function(m,n){"object"===typeof module&&module.exports?module.exports=m.document?n(m):function(m){if(!m.document)throw Error("Window with document not present");return n(m,!0)}:m.FusionCharts=n(m,!0)})("undefined"!==typeof window?window:this,function(m,n){FusionCharts.register("module",["private","modules.renderer.js-ssgrid",function(){var m=this,q=m.hcLib,n=q.BLANKSTRING,g=q.pluck,d=q.pluckNumber,F=q.chartAPI,z=q.graphics.convertColor,r=q.getFirstColor,P=q.setLineHeight,x=Math,Q=x.min,H=x.max,R=
x.ceil,S=x.round,T=q.toRaphaelColor,L=q.POSITION_START,M=q.HUNDREDSTRING,N=q.COLOR_TRANSPARENT;F("ssgrid",{standaloneInit:!0,creditLabel:!1,friendlyName:"ssgrid Chart",defaultDatasetType:"ssgrid",canvasBorderThickness:1,singleseries:!0,bgColor:"#FFFFFF",bgAlpha:100,_drawCaption:function(){},_drawCanvas:function(){},_createAxes:function(){},_feedAxesRawData:function(){},_setCategories:function(){},_setAxisLimits:function(){},_spaceManager:function(){var e=this.components.dataset[0];e._manageSpace&&
this._allocateSpace(e._manageSpace())}},F.sscartesian);FusionCharts.register("component",["dataset","ssgrid",{init:function(e){var a=this.chart;if(!e)return!1;this.JSONData=e;this.chartGraphics=a.chartGraphics;this.components={};this.config={};this.graphics={};this.visible=1===d(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.configure()},configure:function(){var e=this.chart,a=this.config,b=e.jsonData.chart||{},l=e.components.colorManager;a.plotFillAngle=d(360-b.plotfillangle,
e.isBar?180:90);a.plotFillAlpha=g(b.plotfillalpha,M);a.plotBorderAlpha=g(b.plotborderalpha,M);a.plotBorderColor=g(b.plotbordercolor,l.getColor("plotBorderColor"));a.plotDashLen=d(b.plotborderdashlen,5);a.plotDashGap=d(b.plotborderdashgap,4);a.showPercentValues=d(b.showpercentvalues,0);a.numberItemsPerPage=d(b.numberitemsperpage)||void 0;a.showShadow=d(b.showshadow,0);a.baseFont=g(b.basefont,"Verdana,sans");a.baseFontSize=g(b.basefontsize,10)+"px";a.baseFontColor=r(g(b.basefontcolor,l.getColor("baseFontColor")));
a.alternateRowBgColor=r(g(b.alternaterowbgcolor,l.getColor("altHGridColor")));a.alternateRowBgAlpha=g(b.alternaterowbgalpha,l.getColor("altHGridAlpha"))+n;a.listRowDividerThickness=d(b.listrowdividerthickness,1);a.listRowDividerColor=r(g(b.listrowdividercolor,l.getColor("borderColor")));a.listRowDividerAlpha=d(d(b.listrowdivideralpha,l.getColor("altHGridAlpha")+15))+n;a.colorBoxWidth=d(b.colorboxwidth,8);a.colorBoxHeight=d(b.colorboxheight,8);a.navButtonRadius=d(b.navbuttonradius,7);a.navButtonColor=
r(g(b.navbuttoncolor,l.getColor("canvasBorderColor")));a.navButtonHoverColor=r(g(b.navbuttonhovercolor,l.getColor("altHGridColor")));a.textVerticalPadding=d(b.textverticalpadding,3);a.navButtonPadding=d(b.navbuttonpadding,5);a.colorBoxPadding=d(b.colorboxpadding,10);a.valueColumnPadding=d(b.valuecolumnpadding,10);a.nameColumnPadding=d(b.namecolumnpadding,5);a.shadow=d(b.showshadow,0)?{enabled:!0,opacity:a.plotFillAlpha/100}:!1;this.currentPage=0;this._setConfigure()},_setConfigure:function(){var e=
this.chart,a=this.config,b=this.JSONData,l=e.jsonData&&e.jsonData.data,b=H(l&&l.length||0,b&&b.data&&b.data.length||0),p=e.components,e=p.colorManager,t=p.numberFormatter,k=a.plotColor=e.getPlotColor(this.index||this.positionIndex),D=q.parseUnsafeString,c=a.plotBorderThickness,J=a.plotBorderDashStyle,h,f,m=q.getDashStyle,v=this.components.data,u,O,y,G,A=p=0,I;v||(v=this.components.data=[]);for(G=0;G<b&&l;G++)if(h=l[G])if(k=t.getCleanValue(h.value),f=D(g(h.label,h.name)),null!=k||f!=n)f=v[p]||(v[p]=
{config:{}}),f=f.config,f.tooltext=h.tooltext,f.showValue=d(h.showvalue,a.showValues),f.setValue=k=t.getCleanValue(h.value),f.setLink=g(h.link),f.toolTipValue=t.dataLabels(k),f.setDisplayValue=D(h.displayvalue),f.displayValue=t.dataLabels(k)||n,f.dataLabel=D(g(h.label,h.name))||n,u=d(h.dashed),O=d(h.dashlen,void 0),y=d(h.dashgap,a.plotDashGap),A+=k,p+=1,f.plotBorderDashStyle=1===u?m(O,y,c):0===u?"none":J,k=g(h.color,e.getPlotColor(d(I-b,G))),g(h.ratio,a.plotFillRatio),u=g(h.alpha,a.plotFillAlpha),
f.color=z(k,u),f.borderColor=z(a.plotBorderColor,g(h.alpha,a.plotBorderAlpha).toString()),I++;l={fontFamily:a.baseFont,fontSize:a.baseFontSize,color:a.baseFontColor};P(l);a.textStyle=l;a.actualDataLen=p;a.sumOfValues=A},_manageSpace:function(){var e=this.chart,a=this.config,b=e.linkedItems.smartLabel,l=this.components.data,p=e.config,t=e.jsonData.chart||{},t=p.borderThickness=d(t.showborder,1)?d(t.borderthickness,1):0,k=p.height-2*t,t=p.width-2*t,D=a.textStyle,c=a.actualDataLen,J=a.sumOfValues,h=
e.components.numberFormatter,e=0,f,g;b.useEllipsesOnOverflow(p.useEllipsesWhenOverflow);b.setStyle(D);g=l.length;for(p=0;p<g;p++)if(f=l[p])f=f&&f.config,a.showPercentValues&&(f.displayValue=h.percentValue(f.setValue/J*100)),f=b.getOriSize(f.displayValue),e=H(e,f.width+a.valueColumnPadding);b=parseInt(D.lineHeight,10);b+=2*a.textVerticalPadding;b=H(b,a.colorBoxHeight+a.listRowDividerThickness);l=k/b;a.numberItemsPerPage&&l>=a.numberItemsPerPage?a.numberItemsPerPage>=c?(a.numberItemsPerPage=c,k/=a.numberItemsPerPage):
(k-=2*(a.navButtonPadding+a.navButtonRadius),c=a.numberItemsPerPage,k/=c):(l>=c||(k-=2*(a.navButtonPadding+a.navButtonRadius),c=Math.floor(k/b)),k/=c);t=t-a.colorBoxPadding-a.colorBoxWidth-a.nameColumnPadding-e-a.valueColumnPadding;a.labelX=a.colorBoxPadding+a.colorBoxWidth+a.nameColumnPadding;a.valueX=a.colorBoxPadding+a.colorBoxWidth+a.nameColumnPadding+t+a.valueColumnPadding;a.valueColumnPadding=a.valueColumnPadding;a.rowHeight=k;a.itemsPerPage=c;a.listRowDividerAttr={"stroke-width":a.listRowDividerThickness,
stroke:z(a.listRowDividerColor,a.listRowDividerAlpha)};a.alternateRowColor=z(a.alternateRowBgColor,a.alternateRowBgAlpha);return{top:0,bottom:0}},draw:function(){var e=this.config,a=this.chart,b=a.linkedItems.smartLabel,l=a.components.paper,p=a.graphics.datasetGroup,t=this.components.data,k=a.jsonData&&a.jsonData.data,k=k&&k.length||0,d=H(k,t.length),c=this.graphics,g,c=a.config,h=c.borderThickness,f=h,a=a.config.width-c.borderThickness,m=T(e.alternateRowColor),v=e.rowHeight,u=e.listRowDividerAttr,
q=u["stroke-width"]%2/2,y=e.colorBoxPadding+h,n=e.colorBoxHeight,A=e.colorBoxWidth,I=e.labelX+h,E=e.valueX+h,r=e.textStyle,z=e.itemsPerPage,B=0,x=this.currentPage||(this.currentPage=0),K={},F,C,w;this.graphics.container||(this.graphics.container=[]);this.currentPage=x=Q(R(d/z)-1,x);for(C=0;C<d;C++)if(1!=(C+1)%z&&1!=z&&g||(f=h,(g=this.graphics.container[B])||(g=this.graphics.container[B]=l.group("grid-"+B,p)),B!==x?g.hide():g.show(),B+=1,K={pageId:B,data:[]},g.data("eventArgs",K)),c=t[C])w=c&&c.config,
c=c&&(c.graphics||(c.graphics={})),C>=k?(c.alternateRow&&c.alternateRow.remove(),c.alternateRow=void 0,c.listRowDivideElem&&c.listRowDivideElem.remove(),c.listRowDivideElem=void 0,c.element&&c.element.remove(),c.element=void 0,c.label&&c.label.remove(),c.label=void 0,c.displayValue&&c.displayValue.remove(),c.displayValue=void 0,c.listRowDivideElem&&c.listRowDivideElem.remove(),c.listRowDivideElem=void 0):(0===C%2&&(c.alternateRow||(c.alternateRow=l.rect()),g.appendChild(c.alternateRow),c.alternateRow.attr({x:h,
y:f+.5*e.listRowDividerThickness,width:a-h,height:v,fill:m,"stroke-width":0})),c.element||(c.element=l.rect()),g.appendChild(c.element),c.element.attr({x:y,y:f+v/2-n/2,width:A,height:n,fill:w.color,"stroke-width":0,stroke:"#000000"}).shadow(e.shadow),F=b.getSmartText(w.displayValue).width||0,c.displayValue||(c.displayValue=l.text()),g.appendChild(c.displayValue),c.displayValue.attr({text:w.displayValue,x:E,y:f+v/2,fill:r.color,direction:e.textDirection,"text-anchor":L}).css(r),c.label||(c.label=l.text()),
w.label=b.getSmartText(w.dataLabel,a-(F+A+y),v),g.appendChild(c.label),c.label.attr({text:w.label.text,x:I,y:f+v/2,fill:r.color,direction:e.textDirection,"text-anchor":L}).css(r),K.data.push({color:w.color,displayValue:w.displayValue,label:w.dataLabel,originalText:w.label.text,y:f+v/2}),f+=v,w=S(f)+q,c.listRowDivideElem||(c.listRowDivideElem=l.path()),g.appendChild(c.listRowDivideElem),c.listRowDivideElem.attr("path",["M",h,w,"L",a,w]).attr(u));for(d=this.graphics.container.length-1;d>=B;--d)g=this.graphics.container,
g[d].remove(),g.splice(d,1);this._drawSSGridNavButton()},_drawSSGridNavButton:function(){var e=this,a=e.chart,b=e.config,l=b.actualDataLen,g=b.itemsPerPage,d=e.graphics,k=a.components.paper,m=a.config.borderThickness,c=b.navButtonColor,q=b.navButtonHoverColor,h=b.navButtonRadius,f=.67*h,b=m+b.navButtonPadding+f+b.itemsPerPage*b.rowHeight+.5*h,m=20+m,n=a.config.width-m,a=a.graphics,v=a.trackerGroup,u=a.pageNavigationLayer,r=a.pagePreNavigationLayer,y=a.pageNextNavigationLayer,z=d.container.length,
A=e.currentPage,x,E;u||(u=a.pageNavigationLayer=k.group("page-nav",v));r||(r=a.pagePreNavigationLayer=k.group("page-prev-nav",u));y||(y=a.pageNextNavigationLayer=k.group("page-next-nav",u));l>g?(u.show(),d.navElePrv||(d.navElePrv=k.path(r)),x=d.navElePrv.attr({path:["M",m,b,"L",m+h+f,b-f,m+h,b,m+h+f,b+f,"Z"],fill:c,"stroke-width":0,cursor:"pointer"}),d.navTrackerPrv||(d.navTrackerPrv=k.circle(r).mouseover(function(){x.attr({fill:q,cursor:"pointer"})}).mouseout(function(){x.attr({fill:c})}).click(function(){e._nenagitePage(-1)})),
d.navTrackerPrv.attr({cx:m+h,cy:b,r:h,fill:N,"stroke-width":0,cursor:"pointer"}),d.navEleNxt||(E=d.navEleNxt=k.path(y)),E=d.navEleNxt.attr({path:["M",n,b,"L",n-h-f,b-f,n-h,b,n-h-f,b+f,"Z"],fill:c,"stroke-width":0,cursor:"pointer"}),d.navTrackerNxt||(d.navTrackerNxt=k.circle(y).mouseover(function(){E.attr({fill:q})}).mouseout(function(){E.attr({fill:c})}).click(function(){e._nenagitePage(1)})),d.navTrackerNxt.attr({cx:n-h,cy:b,r:h,fill:N,"stroke-width":0,cursor:"pointer"}),0===A?r.hide():r.show(),
A===z-1?y.hide():y.show()):u.hide()},_nenagitePage:function(e){var a=this.chart,b=this.graphics.container,d=this.currentPage,g=a.graphics,n=g.pagePreNavigationLayer,g=g.pageNextNavigationLayer,k=b.length;b[d+e]&&(b[d].hide(),b[d+e].show(),d=this.currentPage+=e);e=b[d].data("eventArgs");m.raiseEvent("pageNavigated",{pageId:d,data:e.data},a.chartInstance);0===d?n.hide():n.show();d===k-1?g.hide():g.show()}}])},[3,2,0,"sr2"]]);n&&(m.FusionCharts=FusionCharts);return FusionCharts});

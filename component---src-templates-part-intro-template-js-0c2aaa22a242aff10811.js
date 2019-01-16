(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{130:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return C}),t.d(a,"partInfoQuery",function(){return j});t(290),t(67),t(46),t(165),t(292);var n=t(228),r=t.n(n),l=t(166),o=t.n(l),c=t(159),i=t.n(c),s=t(304),u=t.n(s),m=t(224),p=t.n(m),f=t(0),d=t.n(f),k=t(146),b=t(162),g=t(164),v=t(139),E=t(144),h=t(157),w=t(225),N=t(156),y=t(149),_=t.n(y),x=t(227);function C(e){var a=e.data.markdownRemark,t=a.frontmatter,n=a.html,l=t.mainImage,c=t.part,s=u()(_.a[c])?[]:Object.keys(_.a[c]),m={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"intro"===t.class)return d.a.createElement("div",{className:"col-7"},i()(n,m))}};return d.a.createElement(h.a,null,d.a.createElement(N.a,{title:"Fullstack osa"+c,keywords:Object.values(_.a[c])}),d.a.createElement(g.a,{style:{backgroundImage:"url("+r.a.resolve(l.publicURL)+")",backgroundPosition:"center right",backgroundSize:"80%",backgroundRepeat:"no-repeat",backgroundColor:k[x.a[c]]},className:"spacing spacing--after"},d.a.createElement(v.a,{className:"container"},d.a.createElement(b.a,{className:"breadcrumb",content:[{backgroundColor:k[x.a[c]],text:"Fullstack",link:"/about"},{backgroundColor:k.black,text:"osa "+c}]}),d.a.createElement("div",{className:"part-intro col-7 spacing--after-small"},o()(n,m)),s&&d.a.createElement(b.a,{className:"spacing--mobile",stack:!0,content:s.map(function(e){return{backgroundColor:k.white,letter:e,path:"/osa"+c+"/"+p()(_.a[c][e]),text:_.a[c][e]}})}))),d.a.createElement(w.a,{prev:c-1,next:c+1}),d.a.createElement(E.a,null))}var j="2600260727"},144:function(e,a,t){"use strict";t(145);var n=t(138),r=t(0),l=t.n(r),o=t(154),c=t.n(o),i=t(155),s=t.n(i),u=t(139),m=t(148),p=t(158),f=[{src:c.a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:s.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){return l.a.createElement(u.a,{id:"footer",className:"container spacing--after",flex:!0},l.a.createElement(u.a,{className:"col-5 col-10--mobile order-2--mobile footer__links",flex:!0,spaceBetween:!0},f.map(function(e){return l.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(m.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),l.a.createElement(u.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile footer__navigation"},p.b.map(function(e){return l.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover col-10--mobile",style:{marginLeft:"4.5rem"}},e.text)})))}},145:function(e,a,t){},146:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},149:function(e,a){e.exports={0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{},4:{},5:{},6:{},7:{}}},162:function(e,a,t){"use strict";t(28),t(163),t(192);var n=t(140),r=t.n(n),l=(t(169),t(138)),o=t(4),c=t.n(o),i=t(0),s=t.n(i),u=t(146),m=t(139),p=function(e){var a,t=e.className,n=e.link,o=e.content,c=e.stack,i=e.bold,p=e.thickBorder,f=e.upperCase,d=r()(e,["className","link","content","stack","bold","thickBorder","upperCase"]),k=s.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},o.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===u.black?"white":u.black};return s.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},d),s.a.createElement("div",{className:"arrow__rectangle "+(i?"bold":"")+" "+(p?"arrow__rectangle--thick-border":""),style:t},e.link?s.a.createElement(l.Link,{to:e.link},f?e.text.toUpperCase():e.text):f?e.text.toUpperCase():e.text),s.a.createElement("div",{className:"arrow__point "+(p?"arrow__point--thick-border":""),style:t}))}));return c||n?!c&&n?a=s.a.createElement("div",{className:"spacing--small spacing--after-small auto-bottom-margin"},s.a.createElement(l.Link,{to:n,style:{display:"inline-block"}},k)):c&&(a=s.a.createElement("div",{className:"col-10 spacing--after"},s.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},o.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===u.black?"white":u.black};return s.a.createElement(l.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},d),s.a.createElement(m.a,{flex:!0,className:"arrow__rectangle",style:a},s.a.createElement("p",{className:"arrow--stacked-letter"},e.letter),s.a.createElement("p",{className:"arrow--stacked-title"},e.text)),s.a.createElement("div",{className:"arrow__point",style:a}))})))):a=s.a.createElement("div",{className:"col-10 spacing--after"},k),a};p.propTypes={className:c.a.string,link:c.a.string,content:c.a.array.isRequired,stack:c.a.bool,upperCase:c.a.bool,bold:c.a.bool,thickBorder:c.a.bool},p.defaultProps={className:""},a.a=p},164:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(28);var n=t(140),r=t.n(n),l=(t(170),t(4)),o=t.n(l),c=t(0),i=t.n(c),s=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return i.a.createElement("div",Object.assign({className:"banner "+a,style:l},n))};s.defaultProps={className:""},s.propTypes={className:o.a.string}},169:function(e,a,t){},170:function(e,a,t){},225:function(e,a,t){"use strict";t(272),t(274),t(275),t(67),t(46),t(165),t(226);var n=t(138),r=t(4),l=t(0),o=t.n(l),c=t(149),i=t.n(c),s=t(139),u=Object.keys(i.a),m=function(e){var a=e.prev,t=e.next,r=u.includes(a.toString()),l=u.includes(t.toString());return o.a.createElement(s.a,{className:"container spacing spacing--after-large prev-next__container"},r?o.a.createElement(o.a.Fragment,null,o.a.createElement(n.Link,{to:"/osa"+a,className:"col-4--mobile push-right-1 prev"},o.a.createElement(s.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Osa ",a),o.a.createElement("b",null,"Edellinen osa"))),l&&o.a.createElement("div",{className:"col-1--mobile separator"})):o.a.createElement(s.a,{className:"push-right-1"}),l?o.a.createElement(n.Link,{to:"/osa"+t,className:"col-4--mobile push-left-1 next"},o.a.createElement(s.a,{flex:!0,dirColumn:!0},o.a.createElement("p",null,"Osa ",t),o.a.createElement("b",null,"Seuraava osa"))):o.a.createElement(s.a,{className:"push-left-1"}))};m.defaultProps={prev:void 0,next:void 0},m.propTypes={prev:r.PropTypes.number,next:r.PropTypes.number},a.a=m},226:function(e,a,t){},227:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},290:function(e,a,t){var n=t(21),r=t(291)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},291:function(e,a,t){var n=t(29),r=t(31),l=t(71).f;e.exports=function(e){return function(a){for(var t,o=r(a),c=n(o),i=c.length,s=0,u=[];i>s;)l.call(o,t=c[s++])&&u.push(e?[t,o[t]]:o[t]);return u}}},292:function(e,a,t){},304:function(e,a,t){var n=t(197)("isEmpty",t(426),t(223));n.placeholder=t(177),e.exports=n},426:function(e,a,t){var n=t(213),r=t(161),l=t(183),o=t(142),c=t(214),i=t(184),s=t(185),u=t(209),m="[object Map]",p="[object Set]",f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||u(e)||l(e)))return!e.length;var a=r(e);if(a==m||a==p)return!e.size;if(s(e))return!n(e).length;for(var t in e)if(f.call(e,t))return!1;return!0}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-0c2aaa22a242aff10811.js.map
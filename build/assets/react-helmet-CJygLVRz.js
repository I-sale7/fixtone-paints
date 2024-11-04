import{P as m}from"./prop-types-CPFGWeO_.js";import{w as z}from"./react-side-effect-DjEcQAHi.js";import{i as Q}from"./react-fast-compare-DXccnIJV.js";import{R as w}from"./react-tIXwT9E7.js";import{o as V}from"./object-assign-HcTy4hza.js";var S={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},c={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(c).map(function(a){return c[a]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},W=Object.keys(M).reduce(function(a,e){return a[M[e]]=e,a},{}),J=[c.NOSCRIPT,c.SCRIPT,c.STYLE],g="data-react-helmet",Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},K=function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")},ee=function(){function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,r,t){return r&&a(e.prototype,r),t&&a(e,t),e}}(),h=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},te=function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)},k=function(a,e){var r={};for(var t in a)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t]);return r},re=function(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:a},_=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ne=function(e){var r=O(e,c.TITLE),t=O(e,H.TITLE_TEMPLATE);if(t&&r)return t.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var n=O(e,H.DEFAULT_TITLE);return r||n||void 0},ae=function(e){return O(e,H.ON_CHANGE_CLIENT_STATE)||function(){}},N=function(e,r){return r.filter(function(t){return typeof t[e]<"u"}).map(function(t){return t[e]}).reduce(function(t,n){return h({},t,n)},{})},oe=function(e,r){return r.filter(function(t){return typeof t[c.BASE]<"u"}).map(function(t){return t[c.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var i=Object.keys(n),T=0;T<i.length;T++){var s=i[T],o=s.toLowerCase();if(e.indexOf(o)!==-1&&n[o])return t.concat(n)}return t},[])},I=function(e,r,t){var n={};return t.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]<"u"&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,T){var s={};T.filter(function(d){for(var p=void 0,C=Object.keys(d),A=0;A<C.length;A++){var E=C[A],y=E.toLowerCase();r.indexOf(y)!==-1&&!(p===v.REL&&d[p].toLowerCase()==="canonical")&&!(y===v.REL&&d[y].toLowerCase()==="stylesheet")&&(p=y),r.indexOf(E)!==-1&&(E===v.INNER_HTML||E===v.CSS_TEXT||E===v.ITEM_PROP)&&(p=E)}if(!p||!d[p])return!1;var R=d[p].toLowerCase();return n[p]||(n[p]={}),s[p]||(s[p]={}),n[p][R]?!1:(s[p][R]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var o=Object.keys(s),u=0;u<o.length;u++){var l=o[u],f=V({},n[l],s[l]);n[l]=f}return i},[]).reverse()},O=function(e,r){for(var t=e.length-1;t>=0;t--){var n=e[t];if(n.hasOwnProperty(r))return n[r]}return null},ie=function(e){return{baseTag:oe([v.HREF,v.TARGET],e),bodyAttributes:N(S.BODY,e),defer:O(e,H.DEFER),encode:O(e,H.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:N(S.HTML,e),linkTags:I(c.LINK,[v.REL,v.HREF],e),metaTags:I(c.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:I(c.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:ae(e),scriptTags:I(c.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:I(c.STYLE,[v.CSS_TEXT],e),title:ne(e),titleAttributes:N(S.TITLE,e)}},j=function(){var a=Date.now();return function(e){var r=Date.now();r-a>16?(a=r,e(r)):setTimeout(function(){j(e)},0)}}(),D=function(e){return clearTimeout(e)},se=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||j:global.requestAnimationFrame||j,ue=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||D:global.cancelAnimationFrame||D,ce=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},L=null,le=function(e){L&&ue(L),e.defer?L=se(function(){Y(e,function(){L=null})}):(Y(e),L=null)},Y=function(e,r){var t=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,T=e.linkTags,s=e.metaTags,o=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;F(c.BODY,n),F(c.HTML,i),Te(d,p);var C={baseTag:P(c.BASE,t),linkTags:P(c.LINK,T),metaTags:P(c.META,s),noscriptTags:P(c.NOSCRIPT,o),scriptTags:P(c.SCRIPT,l),styleTags:P(c.STYLE,f)},A={},E={};Object.keys(C).forEach(function(y){var R=C[y],x=R.newTags,X=R.oldTags;x.length&&(A[y]=x),X.length&&(E[y]=C[y].oldTags)}),r&&r(),u(e,A,E)},q=function(e){return Array.isArray(e)?e.join(""):e},Te=function(e,r){typeof e<"u"&&document.title!==e&&(document.title=q(e)),F(c.TITLE,r)},F=function(e,r){var t=document.getElementsByTagName(e)[0];if(t){for(var n=t.getAttribute(g),i=n?n.split(","):[],T=[].concat(i),s=Object.keys(r),o=0;o<s.length;o++){var u=s[o],l=r[u]||"";t.getAttribute(u)!==l&&t.setAttribute(u,l),i.indexOf(u)===-1&&i.push(u);var f=T.indexOf(u);f!==-1&&T.splice(f,1)}for(var d=T.length-1;d>=0;d--)t.removeAttribute(T[d]);i.length===T.length?t.removeAttribute(g):t.getAttribute(g)!==s.join(",")&&t.setAttribute(g,s.join(","))}},P=function(e,r){var t=document.head||document.querySelector(c.HEAD),n=t.querySelectorAll(e+"["+g+"]"),i=Array.prototype.slice.call(n),T=[],s=void 0;return r&&r.length&&r.forEach(function(o){var u=document.createElement(e);for(var l in o)if(o.hasOwnProperty(l))if(l===v.INNER_HTML)u.innerHTML=o.innerHTML;else if(l===v.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=o.cssText:u.appendChild(document.createTextNode(o.cssText));else{var f=typeof o[l]>"u"?"":o[l];u.setAttribute(l,f)}u.setAttribute(g,"true"),i.some(function(d,p){return s=p,u.isEqualNode(d)})?i.splice(s,1):T.push(u)}),i.forEach(function(o){return o.parentNode.removeChild(o)}),T.forEach(function(o){return t.appendChild(o)}),{oldTags:i,newTags:T}},U=function(e){return Object.keys(e).reduce(function(r,t){var n=typeof e[t]<"u"?t+'="'+e[t]+'"':""+t;return r?r+" "+n:n},"")},fe=function(e,r,t,n){var i=U(t),T=q(r);return i?"<"+e+" "+g+'="true" '+i+">"+_(T,n)+"</"+e+">":"<"+e+" "+g+'="true">'+_(T,n)+"</"+e+">"},de=function(e,r,t){return r.reduce(function(n,i){var T=Object.keys(i).filter(function(u){return!(u===v.INNER_HTML||u===v.CSS_TEXT)}).reduce(function(u,l){var f=typeof i[l]>"u"?l:l+'="'+_(i[l],t)+'"';return u?u+" "+f:f},""),s=i.innerHTML||i.cssText||"",o=J.indexOf(e)===-1;return n+"<"+e+" "+g+'="true" '+T+(o?"/>":">"+s+"</"+e+">")},"")},G=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[M[n]||n]=e[n],t},r)},pe=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[W[n]||n]=e[n],t},r)},me=function(e,r,t){var n,i=(n={key:r},n[g]=!0,n),T=G(t,i);return[w.createElement(c.TITLE,T,r)]},ve=function(e,r){return r.map(function(t,n){var i,T=(i={key:n},i[g]=!0,i);return Object.keys(t).forEach(function(s){var o=M[s]||s;if(o===v.INNER_HTML||o===v.CSS_TEXT){var u=t.innerHTML||t.cssText;T.dangerouslySetInnerHTML={__html:u}}else T[o]=t[s]}),w.createElement(e,T)})},b=function(e,r,t){switch(e){case c.TITLE:return{toComponent:function(){return me(e,r.title,r.titleAttributes)},toString:function(){return fe(e,r.title,r.titleAttributes,t)}};case S.BODY:case S.HTML:return{toComponent:function(){return G(r)},toString:function(){return U(r)}};default:return{toComponent:function(){return ve(e,r)},toString:function(){return de(e,r,t)}}}},$=function(e){var r=e.baseTag,t=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,T=e.linkTags,s=e.metaTags,o=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,d=f===void 0?"":f,p=e.titleAttributes;return{base:b(c.BASE,r,n),bodyAttributes:b(S.BODY,t,n),htmlAttributes:b(S.HTML,i,n),link:b(c.LINK,T,n),meta:b(c.META,s,n),noscript:b(c.NOSCRIPT,o,n),script:b(c.SCRIPT,u,n),style:b(c.STYLE,l,n),title:b(c.TITLE,{title:d,titleAttributes:p},n)}},he=function(e){var r,t;return t=r=function(n){te(i,n);function i(){return K(this,i),re(this,n.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(s){return!Q(this.props,s)},i.prototype.mapNestedChildrenToProps=function(s,o){if(!o)return null;switch(s.type){case c.SCRIPT:case c.NOSCRIPT:return{innerHTML:o};case c.STYLE:return{cssText:o}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(s){var o,u=s.child,l=s.arrayTypeChildren,f=s.newChildProps,d=s.nestedChildren;return h({},l,(o={},o[u.type]=[].concat(l[u.type]||[],[h({},f,this.mapNestedChildrenToProps(u,d))]),o))},i.prototype.mapObjectTypeChildren=function(s){var o,u,l=s.child,f=s.newProps,d=s.newChildProps,p=s.nestedChildren;switch(l.type){case c.TITLE:return h({},f,(o={},o[l.type]=p,o.titleAttributes=h({},d),o));case c.BODY:return h({},f,{bodyAttributes:h({},d)});case c.HTML:return h({},f,{htmlAttributes:h({},d)})}return h({},f,(u={},u[l.type]=h({},d),u))},i.prototype.mapArrayTypeChildrenToProps=function(s,o){var u=h({},o);return Object.keys(s).forEach(function(l){var f;u=h({},u,(f={},f[l]=s[l],f))}),u},i.prototype.warnOnInvalidChildren=function(s,o){return!0},i.prototype.mapChildrenToProps=function(s,o){var u=this,l={};return w.Children.forEach(s,function(f){if(!(!f||!f.props)){var d=f.props,p=d.children,C=k(d,["children"]),A=pe(C);switch(u.warnOnInvalidChildren(f,p),f.type){case c.LINK:case c.META:case c.NOSCRIPT:case c.SCRIPT:case c.STYLE:l=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:l,newChildProps:A,nestedChildren:p});break;default:o=u.mapObjectTypeChildren({child:f,newProps:o,newChildProps:A,nestedChildren:p});break}}}),o=this.mapArrayTypeChildrenToProps(l,o),o},i.prototype.render=function(){var s=this.props,o=s.children,u=k(s,["children"]),l=h({},u);return o&&(l=this.mapChildrenToProps(o,l)),w.createElement(e,l)},ee(i,null,[{key:"canUseDOM",set:function(s){e.canUseDOM=s}}]),i}(w.Component),r.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var n=e.rewind();return n||(n=$({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n},t},ge=function(){return null},Ae=z(ie,le,$)(ge),B=he(Ae);B.renderStatic=B.rewind;export{B as H};
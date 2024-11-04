import{r as oe}from"./react-tIXwT9E7.js";var A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ke(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Re(r){if(r.__esModule)return r;var a=r.default;if(typeof a=="function"){var _=function n(){return this instanceof n?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};_.prototype=a.prototype}else _={};return Object.defineProperty(_,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var u=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(_,n,u.get?u:{enumerable:!0,get:function(){return r[n]}})}),_}var Oe={};(function(r){var a=oe,_=function(){return _=Object.assign||function(E){for(var S,t=1,C=arguments.length;t<C;t++){S=arguments[t];for(var f in S)Object.prototype.hasOwnProperty.call(S,f)&&(E[f]=S[f])}return E},_.apply(this,arguments)};typeof SuppressedError=="function"&&SuppressedError;var n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof A<"u"?A:typeof self<"u"?self:{},u={},d={};Object.defineProperty(d,"__esModule",{value:!0}),d.BLOCKS=void 0;var p;(function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"})(p||(d.BLOCKS=p={}));var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.INLINES=void 0;var b;(function(e){e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline",e.ENTRY_HYPERLINK="entry-hyperlink",e.HYPERLINK="hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink"})(b||(B.INLINES=b={}));var T={};Object.defineProperty(T,"__esModule",{value:!0}),T.MARKS=void 0;var h;(function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript",e.STRIKETHROUGH="strikethrough"})(h||(T.MARKS=h={}));var l={};(function(e){var E=n&&n.__spreadArray||function(v,K,M){if(M||arguments.length===2)for(var N=0,R=K.length,L;N<R;N++)(L||!(N in K))&&(L||(L=Array.prototype.slice.call(K,0,N)),L[N]=K[N]);return v.concat(L||Array.prototype.slice.call(K))},S;Object.defineProperty(e,"__esModule",{value:!0}),e.V1_MARKS=e.V1_NODE_TYPES=e.TEXT_CONTAINERS=e.HEADINGS=e.CONTAINERS=e.VOID_BLOCKS=e.TABLE_BLOCKS=e.LIST_ITEM_BLOCKS=e.TOP_LEVEL_BLOCKS=void 0;var t=d,C=B,f=T;e.TOP_LEVEL_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE,t.BLOCKS.TABLE],e.LIST_ITEM_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],e.TABLE_BLOCKS=[t.BLOCKS.TABLE,t.BLOCKS.TABLE_ROW,t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],e.VOID_BLOCKS=[t.BLOCKS.HR,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],e.CONTAINERS=(S={},S[t.BLOCKS.OL_LIST]=[t.BLOCKS.LIST_ITEM],S[t.BLOCKS.UL_LIST]=[t.BLOCKS.LIST_ITEM],S[t.BLOCKS.LIST_ITEM]=e.LIST_ITEM_BLOCKS,S[t.BLOCKS.QUOTE]=[t.BLOCKS.PARAGRAPH],S[t.BLOCKS.TABLE]=[t.BLOCKS.TABLE_ROW],S[t.BLOCKS.TABLE_ROW]=[t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],S[t.BLOCKS.TABLE_CELL]=[t.BLOCKS.PARAGRAPH,t.BLOCKS.UL_LIST,t.BLOCKS.OL_LIST],S[t.BLOCKS.TABLE_HEADER_CELL]=[t.BLOCKS.PARAGRAPH],S),e.HEADINGS=[t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6],e.TEXT_CONTAINERS=E([t.BLOCKS.PARAGRAPH],e.HEADINGS,!0),e.V1_NODE_TYPES=[t.BLOCKS.DOCUMENT,t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.LIST_ITEM,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,C.INLINES.HYPERLINK,C.INLINES.ENTRY_HYPERLINK,C.INLINES.ASSET_HYPERLINK,C.INLINES.EMBEDDED_ENTRY,"text"],e.V1_MARKS=[f.MARKS.BOLD,f.MARKS.CODE,f.MARKS.ITALIC,f.MARKS.UNDERLINE]})(l);var c={};Object.defineProperty(c,"__esModule",{value:!0});var o={};Object.defineProperty(o,"__esModule",{value:!0});var I={};Object.defineProperty(I,"__esModule",{value:!0}),I.EMPTY_DOCUMENT=void 0;var s=d;I.EMPTY_DOCUMENT={nodeType:s.BLOCKS.DOCUMENT,data:{},content:[{nodeType:s.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var G={};Object.defineProperty(G,"__esModule",{value:!0}),G.isInline=te,G.isBlock=Ee,G.isText=ue;var re=d,ne=B;function V(e,E){for(var S=0,t=Object.keys(e);S<t.length;S++){var C=t[S];if(E===e[C])return!0}return!1}function te(e){return V(ne.INLINES,e.nodeType)}function Ee(e){return V(re.BLOCKS,e.nodeType)}function ue(e){return e.nodeType==="text"}function ae(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.getSchemaWithNodeType=Le;function Le(e){try{return ae("./generated/".concat(e,".json"))}catch{throw new Error('Schema for nodeType "'.concat(e,'" was not found.'))}}(function(e){var E=n&&n.__createBinding||(Object.create?function(L,O,D,H){H===void 0&&(H=D);var m=Object.getOwnPropertyDescriptor(O,D);(!m||("get"in m?!O.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return O[D]}}),Object.defineProperty(L,H,m)}:function(L,O,D,H){H===void 0&&(H=D),L[H]=O[D]}),S=n&&n.__setModuleDefault||(Object.create?function(L,O){Object.defineProperty(L,"default",{enumerable:!0,value:O})}:function(L,O){L.default=O}),t=n&&n.__exportStar||function(L,O){for(var D in L)D!=="default"&&!Object.prototype.hasOwnProperty.call(O,D)&&E(O,L,D)},C=n&&n.__importStar||function(L){if(L&&L.__esModule)return L;var O={};if(L!=null)for(var D in L)D!=="default"&&Object.prototype.hasOwnProperty.call(L,D)&&E(O,L,D);return S(O,L),O};Object.defineProperty(e,"__esModule",{value:!0}),e.getSchemaWithNodeType=e.helpers=e.EMPTY_DOCUMENT=e.MARKS=e.INLINES=e.BLOCKS=void 0;var f=d;Object.defineProperty(e,"BLOCKS",{enumerable:!0,get:function(){return f.BLOCKS}});var v=B;Object.defineProperty(e,"INLINES",{enumerable:!0,get:function(){return v.INLINES}});var K=T;Object.defineProperty(e,"MARKS",{enumerable:!0,get:function(){return K.MARKS}}),t(l,e),t(c,e),t(o,e);var M=I;Object.defineProperty(e,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return M.EMPTY_DOCUMENT}});var N=C(G);e.helpers=N;var R=k;Object.defineProperty(e,"getSchemaWithNodeType",{enumerable:!0,get:function(){return R.getSchemaWithNodeType}})})(u);function _e(e,E){return a.isValidElement(e)&&e.key===null?a.cloneElement(e,{key:E}):e}function le(e,E){return e.map(function(S,t){return _e(q(S,E),t)})}function q(e,E){var S=E.renderNode,t=E.renderMark,C=E.renderText,f=E.preserveWhitespace;if(u.helpers.isText(e)){var v=C?C(e.value):e.value;if(f&&!C){v=v.replace(/ {2,}/g,function(R){return" ".repeat(R.length)});var K=v.split(`
`),M=[];K.forEach(function(R,L){M.push(R),L!==K.length-1&&M.push(a.createElement("br",null))}),v=M}return e.marks.reduce(function(R,L){return t[L.type]?t[L.type](R):R},v)}else{var N=le(e.content,E);return!e.nodeType||!S[e.nodeType]?a.createElement(a.Fragment,null,N):S[e.nodeType](e,N)}}var i,y,Se=(i={},i[u.BLOCKS.DOCUMENT]=function(e,E){return E},i[u.BLOCKS.PARAGRAPH]=function(e,E){return a.createElement("p",null,E)},i[u.BLOCKS.HEADING_1]=function(e,E){return a.createElement("h1",null,E)},i[u.BLOCKS.HEADING_2]=function(e,E){return a.createElement("h2",null,E)},i[u.BLOCKS.HEADING_3]=function(e,E){return a.createElement("h3",null,E)},i[u.BLOCKS.HEADING_4]=function(e,E){return a.createElement("h4",null,E)},i[u.BLOCKS.HEADING_5]=function(e,E){return a.createElement("h5",null,E)},i[u.BLOCKS.HEADING_6]=function(e,E){return a.createElement("h6",null,E)},i[u.BLOCKS.EMBEDDED_ENTRY]=function(e,E){return a.createElement("div",null,E)},i[u.BLOCKS.EMBEDDED_RESOURCE]=function(e,E){return a.createElement("div",null,E)},i[u.BLOCKS.UL_LIST]=function(e,E){return a.createElement("ul",null,E)},i[u.BLOCKS.OL_LIST]=function(e,E){return a.createElement("ol",null,E)},i[u.BLOCKS.LIST_ITEM]=function(e,E){return a.createElement("li",null,E)},i[u.BLOCKS.QUOTE]=function(e,E){return a.createElement("blockquote",null,E)},i[u.BLOCKS.HR]=function(){return a.createElement("hr",null)},i[u.BLOCKS.TABLE]=function(e,E){return a.createElement("table",null,a.createElement("tbody",null,E))},i[u.BLOCKS.TABLE_ROW]=function(e,E){return a.createElement("tr",null,E)},i[u.BLOCKS.TABLE_HEADER_CELL]=function(e,E){return a.createElement("th",null,E)},i[u.BLOCKS.TABLE_CELL]=function(e,E){return a.createElement("td",null,E)},i[u.INLINES.ASSET_HYPERLINK]=function(e){return w(u.INLINES.ASSET_HYPERLINK,e)},i[u.INLINES.ENTRY_HYPERLINK]=function(e){return w(u.INLINES.ENTRY_HYPERLINK,e)},i[u.INLINES.RESOURCE_HYPERLINK]=function(e){return Q(u.INLINES.RESOURCE_HYPERLINK,e)},i[u.INLINES.EMBEDDED_ENTRY]=function(e){return w(u.INLINES.EMBEDDED_ENTRY,e)},i[u.INLINES.EMBEDDED_RESOURCE]=function(e,E){return Q(u.INLINES.EMBEDDED_RESOURCE,e)},i[u.INLINES.HYPERLINK]=function(e,E){return a.createElement("a",{href:e.data.uri},E)},i),ie=(y={},y[u.MARKS.BOLD]=function(e){return a.createElement("b",null,e)},y[u.MARKS.ITALIC]=function(e){return a.createElement("i",null,e)},y[u.MARKS.UNDERLINE]=function(e){return a.createElement("u",null,e)},y[u.MARKS.CODE]=function(e){return a.createElement("code",null,e)},y[u.MARKS.SUPERSCRIPT]=function(e){return a.createElement("sup",null,e)},y[u.MARKS.SUBSCRIPT]=function(e){return a.createElement("sub",null,e)},y[u.MARKS.STRIKETHROUGH]=function(e){return a.createElement("s",null,e)},y);function w(e,E){return a.createElement("span",{key:E.data.target.sys.id},"type: ",E.nodeType," id: ",E.data.target.sys.id)}function Q(e,E){return a.createElement("span",{key:E.data.target.sys.urn},"type: ",E.nodeType," urn: ",E.data.target.sys.urn)}function ce(e,E){return E===void 0&&(E={}),e?q(e,{renderNode:_(_({},Se),E.renderNode),renderMark:_(_({},ie),E.renderMark),renderText:E.renderText,preserveWhitespace:E.preserveWhitespace}):null}r.documentToReactComponents=ce})(Oe);var de={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.BLOCKS=void 0;var $;(function(r){r.DOCUMENT="document",r.PARAGRAPH="paragraph",r.HEADING_1="heading-1",r.HEADING_2="heading-2",r.HEADING_3="heading-3",r.HEADING_4="heading-4",r.HEADING_5="heading-5",r.HEADING_6="heading-6",r.OL_LIST="ordered-list",r.UL_LIST="unordered-list",r.LIST_ITEM="list-item",r.HR="hr",r.QUOTE="blockquote",r.EMBEDDED_ENTRY="embedded-entry-block",r.EMBEDDED_ASSET="embedded-asset-block",r.EMBEDDED_RESOURCE="embedded-resource-block",r.TABLE="table",r.TABLE_ROW="table-row",r.TABLE_CELL="table-cell",r.TABLE_HEADER_CELL="table-header-cell"})($||(P.BLOCKS=$={}));var g={};Object.defineProperty(g,"__esModule",{value:!0});g.INLINES=void 0;var X;(function(r){r.ASSET_HYPERLINK="asset-hyperlink",r.EMBEDDED_ENTRY="embedded-entry-inline",r.EMBEDDED_RESOURCE="embedded-resource-inline",r.ENTRY_HYPERLINK="entry-hyperlink",r.HYPERLINK="hyperlink",r.RESOURCE_HYPERLINK="resource-hyperlink"})(X||(g.INLINES=X={}));var U={};Object.defineProperty(U,"__esModule",{value:!0});U.MARKS=void 0;var F;(function(r){r.BOLD="bold",r.ITALIC="italic",r.UNDERLINE="underline",r.CODE="code",r.SUPERSCRIPT="superscript",r.SUBSCRIPT="subscript",r.STRIKETHROUGH="strikethrough"})(F||(U.MARKS=F={}));var J={};(function(r){var a=A&&A.__spreadArray||function(p,B,b){if(b||arguments.length===2)for(var T=0,h=B.length,l;T<h;T++)(l||!(T in B))&&(l||(l=Array.prototype.slice.call(B,0,T)),l[T]=B[T]);return p.concat(l||Array.prototype.slice.call(B))},_;Object.defineProperty(r,"__esModule",{value:!0}),r.V1_MARKS=r.V1_NODE_TYPES=r.TEXT_CONTAINERS=r.HEADINGS=r.CONTAINERS=r.VOID_BLOCKS=r.TABLE_BLOCKS=r.LIST_ITEM_BLOCKS=r.TOP_LEVEL_BLOCKS=void 0;var n=P,u=g,d=U;r.TOP_LEVEL_BLOCKS=[n.BLOCKS.PARAGRAPH,n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6,n.BLOCKS.OL_LIST,n.BLOCKS.UL_LIST,n.BLOCKS.HR,n.BLOCKS.QUOTE,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,n.BLOCKS.EMBEDDED_RESOURCE,n.BLOCKS.TABLE],r.LIST_ITEM_BLOCKS=[n.BLOCKS.PARAGRAPH,n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6,n.BLOCKS.OL_LIST,n.BLOCKS.UL_LIST,n.BLOCKS.HR,n.BLOCKS.QUOTE,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,n.BLOCKS.EMBEDDED_RESOURCE],r.TABLE_BLOCKS=[n.BLOCKS.TABLE,n.BLOCKS.TABLE_ROW,n.BLOCKS.TABLE_CELL,n.BLOCKS.TABLE_HEADER_CELL],r.VOID_BLOCKS=[n.BLOCKS.HR,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,n.BLOCKS.EMBEDDED_RESOURCE],r.CONTAINERS=(_={},_[n.BLOCKS.OL_LIST]=[n.BLOCKS.LIST_ITEM],_[n.BLOCKS.UL_LIST]=[n.BLOCKS.LIST_ITEM],_[n.BLOCKS.LIST_ITEM]=r.LIST_ITEM_BLOCKS,_[n.BLOCKS.QUOTE]=[n.BLOCKS.PARAGRAPH],_[n.BLOCKS.TABLE]=[n.BLOCKS.TABLE_ROW],_[n.BLOCKS.TABLE_ROW]=[n.BLOCKS.TABLE_CELL,n.BLOCKS.TABLE_HEADER_CELL],_[n.BLOCKS.TABLE_CELL]=[n.BLOCKS.PARAGRAPH,n.BLOCKS.UL_LIST,n.BLOCKS.OL_LIST],_[n.BLOCKS.TABLE_HEADER_CELL]=[n.BLOCKS.PARAGRAPH],_),r.HEADINGS=[n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6],r.TEXT_CONTAINERS=a([n.BLOCKS.PARAGRAPH],r.HEADINGS,!0),r.V1_NODE_TYPES=[n.BLOCKS.DOCUMENT,n.BLOCKS.PARAGRAPH,n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6,n.BLOCKS.OL_LIST,n.BLOCKS.UL_LIST,n.BLOCKS.LIST_ITEM,n.BLOCKS.HR,n.BLOCKS.QUOTE,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,u.INLINES.HYPERLINK,u.INLINES.ENTRY_HYPERLINK,u.INLINES.ASSET_HYPERLINK,u.INLINES.EMBEDDED_ENTRY,"text"],r.V1_MARKS=[d.MARKS.BOLD,d.MARKS.CODE,d.MARKS.ITALIC,d.MARKS.UNDERLINE]})(J);var Z={};Object.defineProperty(Z,"__esModule",{value:!0});var x={};Object.defineProperty(x,"__esModule",{value:!0});var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.EMPTY_DOCUMENT=void 0;var z=P;Y.EMPTY_DOCUMENT={nodeType:z.BLOCKS.DOCUMENT,data:{},content:[{nodeType:z.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var j={};Object.defineProperty(j,"__esModule",{value:!0});j.isInline=Ce;j.isBlock=De;j.isText=Ie;var Be=P,Te=g;function ee(r,a){for(var _=0,n=Object.keys(r);_<n.length;_++){var u=n[_];if(a===r[u])return!0}return!1}function Ce(r){return ee(Te.INLINES,r.nodeType)}function De(r){return ee(Be.BLOCKS,r.nodeType)}function Ie(r){return r.nodeType==="text"}function fe(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var W={};Object.defineProperty(W,"__esModule",{value:!0});W.getSchemaWithNodeType=Ae;function Ae(r){try{return fe("./generated/".concat(r,".json"))}catch{throw new Error('Schema for nodeType "'.concat(r,'" was not found.'))}}(function(r){var a=A&&A.__createBinding||(Object.create?function(l,c,o,I){I===void 0&&(I=o);var s=Object.getOwnPropertyDescriptor(c,o);(!s||("get"in s?!c.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return c[o]}}),Object.defineProperty(l,I,s)}:function(l,c,o,I){I===void 0&&(I=o),l[I]=c[o]}),_=A&&A.__setModuleDefault||(Object.create?function(l,c){Object.defineProperty(l,"default",{enumerable:!0,value:c})}:function(l,c){l.default=c}),n=A&&A.__exportStar||function(l,c){for(var o in l)o!=="default"&&!Object.prototype.hasOwnProperty.call(c,o)&&a(c,l,o)},u=A&&A.__importStar||function(l){if(l&&l.__esModule)return l;var c={};if(l!=null)for(var o in l)o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)&&a(c,l,o);return _(c,l),c};Object.defineProperty(r,"__esModule",{value:!0}),r.getSchemaWithNodeType=r.helpers=r.EMPTY_DOCUMENT=r.MARKS=r.INLINES=r.BLOCKS=void 0;var d=P;Object.defineProperty(r,"BLOCKS",{enumerable:!0,get:function(){return d.BLOCKS}});var p=g;Object.defineProperty(r,"INLINES",{enumerable:!0,get:function(){return p.INLINES}});var B=U;Object.defineProperty(r,"MARKS",{enumerable:!0,get:function(){return B.MARKS}}),n(J,r),n(Z,r),n(x,r);var b=Y;Object.defineProperty(r,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return b.EMPTY_DOCUMENT}});var T=u(j);r.helpers=T;var h=W;Object.defineProperty(r,"getSchemaWithNodeType",{enumerable:!0,get:function(){return h.getSchemaWithNodeType}})})(de);export{Ke as a,A as c,de as d,Re as g,Oe as r};
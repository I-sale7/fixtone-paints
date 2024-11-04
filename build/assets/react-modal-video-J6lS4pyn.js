import"./core-js-CBhirNVY.js";import{r as w}from"./react-BufILVt8.js";import{r as _}from"./react-transition-group-BXKg_3iX.js";var p={};function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d(t)}Object.defineProperty(p,"__esModule",{value:!0});var k=p.default=void 0,u=v(w),S=v(_);function v(t){return t&&t.__esModule?t:{default:t}}function V(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function y(t,o){for(var i=0;i<o.length;i++){var n=o[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,P(n.key),n)}}function O(t,o,i){return o&&y(t.prototype,o),i&&y(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t){var o=W(t,"string");return d(o)==="symbol"?o:String(o)}function W(t,o){if(d(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,o);if(d(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function M(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&f(t,o)}function f(t,o){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},f(t,o)}function E(t){var o=F();return function(){var n=c(t),e;if(o){var r=c(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return N(this,e)}}function N(t,o){if(o&&(d(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}function m(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},c(t)}var g=function(t){M(i,t);var o=E(i);function i(n){var e;return V(this,i),e=o.call(this,n),e.state={isOpen:!1,modalVideoWidth:"100%"},e.closeModal=e.closeModal.bind(m(e)),e.updateFocus=e.updateFocus.bind(m(e)),e.timeout,e}return O(i,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),typeof this.props.onClose=="function"&&this.props.onClose()}},{key:"keydownHandler",value:function(e){e.keyCode===27&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this)),this.setState({modalVideoWidth:this.getWidthFulfillAspectRatio(this.props.ratio,window.innerHeight,window.innerWidth)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){this.state.isOpen&&(e.preventDefault(),e.stopPropagation(),e.keyCode===9&&(this.modal===document.activeElement?this.modaliflame.focus():this.modalbtn===document.activeElement&&this.modal.focus()))}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){var r=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=r&&e.setState({modalVideoWidth:r})},10)}},{key:"getQueryString",value:function(e){var r="";for(var a in e)e.hasOwnProperty(a)&&e[a]!==null&&(r+="".concat(a,"=").concat(e[a],"&"));return r.substr(0,r.length-1)}},{key:"getYoutubeUrl",value:function(e,r){var a=this.getQueryString(e);return"//www.youtube.com/embed/".concat(r,"?").concat(a)}},{key:"getVimeoUrl",value:function(e,r){var a=this.getQueryString(e);return"//player.vimeo.com/video/".concat(r,"?").concat(a)}},{key:"getYoukuUrl",value:function(e,r){var a=this.getQueryString(e);return"//player.youku.com/embed/".concat(r,"?").concat(a)}},{key:"getVideoUrl",value:function(e,r){if(e.channel==="youtube")return this.getYoutubeUrl(e.youtube,r);if(e.channel==="vimeo")return this.getVimeoUrl(e.vimeo,r);if(e.channel==="youku")return this.getYoukuUrl(e.youku,r);if(e.channel==="custom")return e.url}},{key:"getPadding",value:function(e){var r=e.split(":"),a=Number(r[0]),s=Number(r[1]),l=s*100/a;return"".concat(l,"%")}},{key:"getWidthFulfillAspectRatio",value:function(e,r,a){var s=e.split(":"),l=Number(s[0]),h=Number(s[1]),b=a*(h/l);return r<b?Math.floor(l/h*r):"100%"}},{key:"render",value:function(){var e=this,r={width:this.state.modalVideoWidth},a={paddingBottom:this.getPadding(this.props.ratio)};return u.default.createElement(S.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?u.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","area-modal":"true","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(l){e.modal=l},onKeyDown:e.updateFocus},u.default.createElement("div",{className:e.props.classNames.modalVideoBody},u.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:r},u.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:a},e.props.children||u.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,onKeyDown:e.updateFocus,ref:function(l){e.modaliflame=l},tabIndex:"-1"}),u.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(l){e.modalbtn=l},onKeyDown:e.updateFocus}))))):null})}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),i}(u.default.Component);k=p.default=g;g.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}};export{k as _};
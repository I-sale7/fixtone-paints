import{a as h}from"./@contentful-D8OdFKiS.js";import{r as y}from"./react-BufILVt8.js";function _(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var s=y,U=_(s);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var D=!!(typeof window<"u"&&window.document&&window.document.createElement);function M(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function E(p){return p.displayName||p.name||"Component"}return function(d){if(typeof d!="function")throw new Error("Expected WrappedComponent to be a React component.");var i=[],o;function l(){o=e(i.map(function(u){return u.props})),f.canUseDOM?t(o):n&&(o=n(o))}var f=function(u){v(r,u);function r(){return u.apply(this,arguments)||this}r.peek=function(){return o},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var m=o;return o=void 0,i=[],m};var a=r.prototype;return a.UNSAFE_componentWillMount=function(){i.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var m=i.indexOf(this);i.splice(m,1),l()},a.render=function(){return U.createElement(d,this.props)},r}(s.PureComponent);return w(f,"displayName","SideEffect("+E(d)+")"),w(f,"canUseDOM",D),f}}var b=M;const N=h(b);export{N as w};

function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{eLfv:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_checkbox",(function(){return c}));var o=i("c1op"),n=(i("AfW+"),i("aiEM")),r=i("Dl6n"),c=function(){function e(t){var i=this;_classCallCheck(this,e),Object(o.l)(this,t),this.inputId="ion-cb-".concat(a++),this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){i.setFocus(),i.checked=!i.checked,i.indeterminate=!1},this.onFocus=function(){i.ionFocus.emit()},this.onBlur=function(){i.ionBlur.emit()},this.ionChange=Object(o.e)(this,"ionChange",7),this.ionFocus=Object(o.e)(this,"ionFocus",7),this.ionBlur=Object(o.e)(this,"ionBlur",7),this.ionStyle=Object(o.e)(this,"ionStyle",7)}return _createClass(e,[{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"checkedChanged",value:function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}},{key:"setFocus",value:function(){this.buttonEl&&this.buttonEl.focus()}},{key:"render",value:function(){var e,t=this,i=this.inputId,c=this.indeterminate,a=this.disabled,s=this.checked,h=this.value,d=this.color,l=this.el,b=i+"-lbl",u=Object(o.d)(this),k=Object(n.f)(l);k&&(k.id=b),Object(n.a)(!0,l,this.name,s?h:"",a);var p=c?Object(o.i)("path",{d:"M6 12L18 12"}):Object(o.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===u&&(p=c?Object(o.i)("path",{d:"M2 12H22"}):Object(o.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(o.i)(o.a,{onClick:this.onClick,role:"checkbox","aria-disabled":a?"true":null,"aria-checked":"".concat(s),"aria-labelledby":b,class:Object.assign(Object.assign({},Object(r.a)(d)),(e={},_defineProperty(e,u,!0),_defineProperty(e,"in-item",Object(r.c)("ion-item",l)),_defineProperty(e,"checkbox-checked",s),_defineProperty(e,"checkbox-disabled",a),_defineProperty(e,"checkbox-indeterminate",c),_defineProperty(e,"interactive",!0),e))},Object(o.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},p),Object(o.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}}))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"watchers",get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}}]),e}(),a=0}}]);
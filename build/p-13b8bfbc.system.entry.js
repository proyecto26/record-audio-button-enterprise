var __awaiter=this&&this.__awaiter||function(e,t,a,o){function r(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,i){function n(e){try{d(o.next(e))}catch(t){i(t)}}function s(e){try{d(o["throw"](e))}catch(t){i(t)}}function d(e){e.done?a(e.value):r(e.value).then(n,s)}d((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(e){return function(t){return d([e,t])}}function d(n){if(o)throw new TypeError("Generator is already executing.");while(a)try{if(o=1,r&&(i=n[0]&2?r["return"]:n[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,n[1])).done)return i;if(r=0,i)n=[n[0]&2,i.value];switch(n[0]){case 0:case 1:i=n;break;case 4:a.label++;return{value:n[1],done:false};case 5:a.label++;r=n[1];n=[0];continue;case 7:n=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(n[0]===6||n[0]===2)){a=0;continue}if(n[0]===3&&(!i||n[1]>i[0]&&n[1]<i[3])){a.label=n[1];break}if(n[0]===6&&a.label<i[1]){a.label=i[1];i=n;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(n);break}if(i[2])a.ops.pop();a.trys.pop();continue}n=t.call(e,a)}catch(s){n=[6,s];r=0}finally{o=i=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-eba2f7b9.system.js","./p-a7653bbc.system.js","./p-babd758f.system.js","./p-0de14d41.system.js","./p-5aeee87a.system.js","./p-2709412d.system.js","./p-00b3eaa0.system.js","./p-91c1f7a0.system.js","./p-ef2985f4.system.js","./p-3cb15478.system.js","./p-c50dc49a.system.js"],(function(e){"use strict";var t,a,o,r,i,n,s,d,l,c,m,p,f,h,u,b,v,y,w,x,g,k;return{setters:[function(e){t=e.r;a=e.d;o=e.w;r=e.h;i=e.H;n=e.c},function(e){s=e.g;d=e.c},function(e){l=e.g},function(e){c=e.c},function(e){m=e.c},function(e){p=e.d},function(e){f=e.g},function(e){h=e.createGesture},function(){},function(e){u=e.B;b=e.p;v=e.a;y=e.c;w=e.d;x=e.e},function(e){g=e.a;k=e.d}],execute:function(){var E={MIN_PRESENTING_SCALE:.93};var S=function(e,t,a){var o=e.offsetHeight;var r=false;var i=function(e){var t=e.event.target;if(t===null||!t.closest){return true}var a=t.closest("ion-content");if(a===null){return true}return false};var n=function(){t.progressStart(true,r?1:0)};var s=function(e){var a=e.deltaY/o;if(a<0){return}t.progressStep(a)};var d=function(e){var i=e.velocityY;var n=e.deltaY/o;if(n<0){return}var s=(e.deltaY+i*1e3)/o;var d=s>=.5;var c=d?-.001:.001;if(!d){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=f([0,0],[1,0],[.68,.28],[1,1],n)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=f([0,0],[.32,.72],[0,1],[1,1],n)[0]}var m=d?D(n*o,i):D((1-n)*o,i);r=d;l.enable(false);t.onFinish((function(){if(!d){l.enable(true)}})).progressEnd(d?1:0,c,m);if(d){a()}};var l=h({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i,onStart:n,onMove:s,onEnd:d});return l};var D=function(e,t){return c(400,e/Math.abs(t*1.1),500)};var _=function(e,t){var a=m().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var o=m().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var r=m().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(t){var i=window.innerWidth<768;var n=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var s=m().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var d=document.body;if(i){var l=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var c=n?"-10px":l;var p=E.MIN_PRESENTING_SCALE;var f="translateY("+c+") scale("+p+")";s.afterStyles({transform:f}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:f,borderRadius:"10px 10px 0 0"}]);r.addAnimation(s)}else{r.addAnimation(a);if(!n){o.fromTo("opacity","0","1")}else{var p=n?E.MIN_PRESENTING_SCALE:1;var f="translateY(-10px) scale("+p+")";s.afterStyles({transform:f}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:f}]);var h=m().afterStyles({transform:f}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:f}]);r.addAnimation([s,h])}}}else{r.addAnimation(a)}return r};var A=function(e,t,a){if(a===void 0){a=500}var o=m().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var r=m().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var i=m().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(r);if(t){var n=window.innerWidth<768;var s=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var d=m().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","");var a=Array.from(l.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(a<=1){l.style.setProperty("background-color","")}}));var l=document.body;if(n){var c=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var p=s?"-10px":c;var f=E.MIN_PRESENTING_SCALE;var h="translateY("+p+") scale("+f+")";d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);i.addAnimation(d)}else{i.addAnimation(o);if(!s){r.fromTo("opacity","1","0")}else{var f=s?E.MIN_PRESENTING_SCALE:1;var h="translateY(-10px) scale("+f+")";d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var u=m().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([d,u])}}}else{i.addAnimation(o)}return i};var T=function(e){var t=m();var a=m();var o=m();a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,o])};var C=function(e){var t=m();var a=m();var o=m();var r=e.querySelector(".modal-wrapper");a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);o.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,o])};var Y=".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";var M=".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";var P=e("ion_modal",function(){function e(e){var o=this;t(this,e);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.onBackdropTap=function(){o.dismiss(undefined,u)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();o.dismiss()};this.onLifecycle=function(e){var t=o.usersElement;var a=I[e.type];if(t&&a){var r=new CustomEvent(a,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(r)}};b(this.el);this.didPresent=a(this,"ionModalDidPresent",7);this.willPresent=a(this,"ionModalWillPresent",7);this.willDismiss=a(this,"ionModalWillDismiss",7);this.didDismiss=a(this,"ionModalDidDismiss",7)}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,a;var r=this;return __generator(this,(function(i){switch(i.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});a=this;return[4,g(this.delegate,e,this.component,["ion-page"],t)];case 1:a.usersElement=i.sent();return[4,p(this.usersElement)];case 2:i.sent();o((function(){return r.el.classList.add("show-modal")}));return[4,v(this,"modalEnter",_,T,this.presentingElement)];case 3:i.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(s(this)!=="ios"){return}var t=this.leaveAnimation||d.get("modalLeave",A);var a=this.animation=t(this.el,this.presentingElement);this.gesture=S(this.el,a,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var a,o;return __generator(this,(function(r){switch(r.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}a=y.get(this)||[];return[4,w(this,e,t,"modalLeave",A,C,this.presentingElement)];case 1:o=r.sent();if(!o)return[3,3];return[4,k(this.delegate,this.usersElement)];case 2:r.sent();if(this.animation){this.animation.destroy()}a.forEach((function(e){return e.destroy()}));r.label=3;case 3:this.animation=undefined;return[2,o]}}))}))};e.prototype.onDidDismiss=function(){return x(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return x(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e;var t=s(this);return r(i,{"no-router":true,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[t]=true,e["modal-card"]=this.presentingElement!==undefined&&t==="ios",e),l(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},r("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t==="ios"&&r("div",{class:"modal-shadow"}),r("div",{role:"dialog",class:"modal-wrapper"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:true,configurable:true});return e}());var I={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};P.style={md:M}}}}));
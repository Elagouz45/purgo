(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pxUr:function(e,t,i){"use strict";function n(e,t){return function(i,n){t(i,n,e)}}function r(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}i.d(t,"a",function(){return d});var o=i("fXoL");i("HDdC"),i("2Vo4"),i("Cfvw"),i("PqYM"),i("XNiG"),i("DH7j"),i("n6bG"),i("lJxs"),i("VRyK"),i("jtHE"),i("quSY"),i("8Qeq"),i("z+Ro"),i("LRne"),i("z6cu"),i("5+tZ"),i("zx2A"),i("eIep"),i("UXun"),i("/uUt"),i("1G5W"),i("JX91"),i("zP0r"),i("oB13"),i("ofXK");let c=(()=>{let e=class{};return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Nb({token:e,factory:function(t){return e.\u0275fac(t)}}),e})();class s{getNativeWindow(){return window}}class a{getNativeDocument(){return document}}const l=[s,a];var u=function(e){return e[e.HTTP=1]="HTTP",e[e.HTTPS=2]="HTTPS",e[e.AUTO=3]="AUTO",e}({});const f=new o.t("angular-google-maps LAZY_MAPS_API_CONFIG");let g=(()=>{let e=class extends c{constructor(e=null,t,i,n){super(),this.localeId=n,this._SCRIPT_ID="agmGoogleMapsApiScript",this.callbackName="agmLazyMapsAPILoader",this._config=e||{},this._windowRef=t,this._documentRef=i}load(){const e=this._windowRef.getNativeWindow();if(e.google&&e.google.maps)return Promise.resolve();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;const t=this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);if(t)return this._assignScriptLoadingPromise(t),this._scriptLoadingPromise;const i=this._documentRef.getNativeDocument().createElement("script");return i.type="text/javascript",i.async=!0,i.defer=!0,i.id=this._SCRIPT_ID,i.src=this._getScriptSrc(this.callbackName),this._assignScriptLoadingPromise(i),this._documentRef.getNativeDocument().body.appendChild(i),this._scriptLoadingPromise}_assignScriptLoadingPromise(e){this._scriptLoadingPromise=new Promise((t,i)=>{this._windowRef.getNativeWindow()[this.callbackName]=()=>{t()},e.onerror=e=>{i(e)}})}_getScriptSrc(e){let t;switch(this._config&&this._config.protocol||u.HTTPS){case u.AUTO:t="";break;case u.HTTP:t="http:";break;case u.HTTPS:t="https:"}const i={v:this._config.apiVersion||"quarterly",callback:e,key:this._config.apiKey,client:this._config.clientId,channel:this._config.channel,libraries:this._config.libraries,region:this._config.region,language:this._config.language||"en-US"!==this.localeId?this.localeId:null};return`${t}//${this._config.hostAndPath||"maps.googleapis.com/maps/api/js"}?${Object.keys(i).filter(e=>null!=i[e]).filter(e=>!Array.isArray(i[e])||Array.isArray(i[e])&&i[e].length>0).map(e=>{let t=i[e];return Array.isArray(t)?{key:e,value:t.join(",")}:{key:e,value:i[e]}}).map(e=>`${e.key}=${e.value}`).join("&")}`}};return e.\u0275fac=function(t){return new(t||e)(o.bc(f,8),o.bc(s),o.bc(a),o.bc(o.x))},e.\u0275prov=o.Nb({token:e,factory:function(t){return e.\u0275fac(t)}}),e=function(e,t,i,n){var r,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(o<3?r(c):o>3?r(t,i,c):r(t,i))||c);return o>3&&c&&Object.defineProperty(t,i,c),c}([n(0,Object(o.E)()),n(0,Object(o.q)(f)),n(3,Object(o.q)(o.x)),r("design:paramtypes",[Object,s,a,String])],e),e})();var p;let d=(()=>{let e=p=class{static forRoot(e){return{ngModule:p,providers:[...l,{provide:c,useClass:g},{provide:f,useValue:e}]}}};return e.\u0275mod=o.Pb({type:e}),e.\u0275inj=o.Ob({factory:function(t){return new(t||e)}}),e})()}}]);
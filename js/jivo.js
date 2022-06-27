!function(){"use strict";function e(){return document.currentScript?document.currentScript:document.querySelector("script[jv-id]")||document.querySelector("script[data-jv-id]")}function t(e){return e&&e.match(/https?:\/\/(\S+(\.com|\.ru|\.tech))\/(widget\.js|widget\/[A-Za-z0-9]+)/)}function n(e){return e&&e.match(/^https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)}function o(e){return e&&e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)}function r(){var e=window.location&&window.location.protocol;return-1===["http","https"].indexOf(e||"")&&(e="https:"),e}function i(){return window.jivo_config&&window.jivo_config.shard_id||"main"}function a(){return window.jivo_config&&window.jivo_config.telemetry_host||null}function d(e,t,n){var o;e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e.attachEvent("on"+t,(o=e,function(){n.call(o,window.event)})),e=null)}function s(e){try{d(window,"scroll",e),d(document.body,"mousemove",e)}catch(t){e&&e()}}function c(e,t,n){if(window.removeEventListener)e.removeEventListener(t,n,!1);else{if(!window.detachEvent)return!1;e.detachEvent("on"+t,(function(){n.call(e)}))}}function l(e){try{c(window,"scroll",e),c(document.body,"mousemove",e)}catch(e){console.warn(e)}}function u(){var e=navigator.userAgent.toLowerCase();return-1==e.search(/google/gi)&&-1==e.search(/\+http:\/\/yandex\.com\/bots/gi)&&-1==e.search(/\+http:\/\/www\.cloudflare\.com\/always-online/gi)&&-1==e.search(/linespider\//gi)}function g(e,t,n,o,r){r&&r.error&&(r=r.error),r&&r instanceof Error||(r={}),r.stack=r.stack||"empty",r.message="Bundle init error: "+e+" error.message: "+r.message,r.columnNumber=o,r.lineNumber=n,r.url=t,window.parent.__jivoOnError(r)}var f="loader_loaded",v="no_widget_id_or_confighost",m="error_code_1015",h="widget_deleted";window.__jivoOnError=function(e){if(u())try{var t=window.jivo_config&&window.jivo_config.err_host?"//"+window.jivo_config.err_host+"/widget":"//err.jivosite.com/widget",n={widget:"true",widget_version:window.jivo_version,level:2,url:(o=window.location,o.protocol+"//"+o.host+o.pathname),lineNumber:e&&e.lineNumber,fileName:e&&e.fileName,column:e&&e.columnNumber,full_message:e&&e.stack,short_message:e&&e.message,shard:i()};window.navigator&&window.navigator.sendBeacon&&navigator.sendBeacon(r()+t,JSON.stringify(n))}catch(e){}var o},function(){var c=.1;window.__hasStorage=!1;try{localStorage.setItem("testLocalStorage","ok"),localStorage.removeItem("testLocalStorage"),window.__hasStorage=!0}catch(e){}function p(c,p,w,_){var b=c.console;if(b||(b={log:function(){},error:function(){}}),function(){if(c.google&&c.google.translate&&0==c.location.href.search(/(http(s?)).+\.translate\.goog/gi))return!1;return!!c.WebSocket}()){if(void 0===c.jivo_magic_var){c.jivo_magic_var=!0;var y,S,j,C,I,E,L,T,N,O,A,B={hasStorage:c.__hasStorage,jivoLoaderVersion:w,loadScript:function(e,t){var n=t||p,o=n.getElementsByTagName("script")[0],r=n.createElement("script");pe(r),o.parentNode.insertBefore(r,o).src=e},currentLoaderVersionCache:_,scriptSrc:null},k=navigator.userAgent.toLowerCase(),W=/iPhone|iPad|iPod|Android|Windows Phone/i.test(k),x=p.createElement("iframe"),H=p.createElement("div"),M=0,U=0,J=0,R=[],q=!1,D=ae(),P=JSON.parse('["AF","CG","CF","GW","ER","IR","IQ","KP","LR","LB","LY","ML","CU","PS","SO","SD","SY","ZW","YE"]')||null,z=JSON.parse('["127-129-12k-12i-12c-12h","12e-12i-12e-124-12c-12h","131-12e-12l-12m-124-12b-12c","124-12g-12o-129-12m-124-12g-12c-12h","127-124-12s-12c-12s","12g-124-12k-12c-12p-12n-124-12h-124","3n-12j-124-12d-12l","12g-129-12o-129-128-12k-12i-12h"]')||null,G=!1;ye("Initialization"),c.__jivoBundleOnLoad=function(e){clearTimeout(I),E=e;var t=((new Date).getTime()-L)/1e3;t>6&&de("loadTime",t);de("bundleLoaded",!0),de("buildNumber",y.build_number),ye("Bundle is loaded"),function(){C=p.body.lastChild,H.style&&(H.style.opacity="0",H.style.visibility="hidden",H.style.width=0,H.style.height=0,H.style.overflow="hidden");H.setAttribute("id","jivo-iframe-container"),H.appendChild(x),C?C.parentNode.insertBefore(H,C.nextSibling):p.body.appendChild(H);ie()}()},c.__jivoBundleInit=function(e){e.loaderContext=B,function(){E=null;var e=function(e){if(e){var t=e.querySelectorAll&&e.querySelectorAll(".js-jivo-bundle");return t&&t.length>0?t:e.getElementsByClassName("js-jivo-bundle")}}(Se());if(!e)throw b.error("Cannot get bundle script element"),new Error("Cannot get bundle script element");for(var t=0;t<e.length;t++)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);e=null}()},c.jivo_init=function(){M=0;var e=p.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),c.dispatchEvent(e),oe()},c.jivo_destroy=function(){M=0;var e=p.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),c.dispatchEvent(e),delete c.jivo_magic_var,setTimeout((function(){H.parentNode.removeChild(H)}),10)},B.getHostURL=be,B.store=D,B.setInStore=de;var V,X=!1,F=function(e){try{e.blockedURI&&-1!==e.blockedURI.indexOf("jivosite")&&(X=!0,p.removeEventListener("securitypolicyviolation",F))}catch(e){}}.bind(this);try{d(p,"securitypolicyviolation",F)}catch(e){}ue(),!(!(V=N)||!/^\d+$/.test(V)&&10!=V.length)||(N=null,T=null,b.error("Widget id is not valid.")),Q(f,5),function(){(D=ae()).geoWidgetInfo.widgetId&&(N=D.geoWidgetInfo.widgetId,D=ae(),T=D.configHost);de("isNewCode",q),B.store=D}();var Z=null,Y=!1;O&&(A=O.getAttribute("nonce"))&&(c.jivo_cspNonce=A),N&&T?(ye("widgetId:",N,"configHost:",T),$(le())):N&&T||(Q(v,5),b.error("Failed to evaluate the widgetId or configHost"))}}else b.log("Not supported browser");function $(e,t){if(R.push(e),++J>4){ye("Config load limit is exceeded"),B.hasStorage&&localStorage.removeItem("jv_loader_info_"+N);var n=new Error("Config load limit is exceeded"),o="Config urls: "+R.join(";\r\n");try{n.stack=o}catch(e){n=new Error("Config load limit is exceeded. "+o)}c.__jivoOnError(n)}else if(ye("Loading config from",e),D.deletedInfo.widgetId&&D.deletedInfo.widgetId===N&&D.deletedInfo.resolveTime&&parseInt(D.deletedInfo.resolveTime)>=(new Date).getTime())b.error("This widget is permanently removed");else{var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=Ee(we(i));e?(ye("Config is loaded",e),e.isDeleted?ve():t?(e.chat_mode=t.chat_mode,e.options=t.options,e.botmode=t.botmode,e.geoip=t.geoip,e.maintenance=!!t.maintenance,ee(e,null)):(e.disable_loader_void&&(G=!0),function(e,t){var n=new XMLHttpRequest;function o(){return!1}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var o=Ee(we(n));if(!o)throw new Error("Load widget status error");var r=n.getResponseHeader("X-BotMode"),i=n.getResponseHeader("X-GeoIP"),a=o.agents&&o.agents.length;ye("Status is loaded",o,r,i,a),e.lastStatus=o,e.botmode="yes"===r?"yes":null,e.geoip=i||";;;",e.chat_mode=a?"online":"offline",e.options=o.premium?888:0,o.bots&&o.bots.length&&(e.bots=o.bots),e.maintenance=!!o.maintenance,t(o.config_updated_ts)}else if(0!==n.status)throw e.botmode=null,e.geoip=";;;",e.chat_mode="offline",e.options=0,t(null),480==n.status&&ye("Site is under maintenance, try again later."),new Error("Load widget status error: "+n.status)};var i="/configs/development/status.json",a=o()?i:r()+"//"+e.chat_host+"/widget/status/"+e.site_id+"/"+e.widget_id+"?rnd="+Math.random();n.open("GET",a,!0),n.send(null)}(e,(function(t){ee(e,t)})))):me(!0)}else 0!==i.status&&me()},i.open("GET",e,!0),i.send(null)}}function K(e){var t={event:e,widget_id:N,t:(new Date).getTime(),param1:"63.18.0",shard:i()};if(u()&&c.navigator&&c.navigator.sendBeacon)try{var n=a(),o=r();o+=n?"//"+n+"/w":"//telemetry.jivosite.com/w",c.navigator.sendBeacon&&navigator.sendBeacon(o,JSON.stringify(t))}catch(e){}}function Q(e,t){Math.random()<=.01*t&&K(e)}function ee(e,t){if(ye("checkConfig",e.config_updated_ts,t),e.isDeleted)ve();else if(function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")}())ye("ie11 blocked");else{if(t&&e.config_updated_ts&&e.config_updated_ts!=t)return ye("update configUpdatedTs in store",t),de("configUpdatedTs",t),$(le(),e);if(e.regions&&!D.isChatStarted){var n=function(e){var t,n,o=e.regions,r=fe(e.geoip);if(o){for(var i=Object.keys(o),a=0;a<i.length;a++)for(var d=o[i[a]],s=0;s<d.length;s++)if(1!=d.length||"default"!==d[s]){var c=fe(d[s]);if(r.country===c.country){if(r.region===c.region)return ge(i[a],d[s],e.geoip);n||c.region||(n=ge(i[a],d[s],e.geoip))}}else t=i[a];if(n)return n;if(t)return ge(t,"default",e.geoip)}}(e);if(n.widgetId!==N)return ye("Wrong geo-widget widgetId",N),de("geoWidgetInfo",n),N=n.widgetId,void $(le())}if((Z=e.ab_segment)&&Z.name&&Z.host&&Z.staticHost&&1!==e.site_id)if(ye("AB-testing segmentation is enabled in config"),Y=function(e,t){var n=D.abTesting,o=!1;o=n&&n.name===e.name?n.match:function(e,t){if(ye('Check for criteria match of test "'+e.name+'"'),e.device){if(!function(e){if("desktop"===e)return Ce()&&!Ie();if("mobile"===e)return Ie();if("all"===e)return Ce()||Ie();return!1}(e.device))return ye('Segment "'+e.name+'" is NOT matched. Criteria: device'),!1}if(e.locale){if(!(e.locale===t.locale))return ye('Segment "'+e.name+'" is NOT matched. Criteria: locale'),!1}if(e.percentage){if(!(n=e.percentage,Math.random()<=.01*n))return ye('Segment "'+e.name+'" is NOT matched. Criteria: percentage'),!1}var n;return ye('Segment "'+e.name+'" is matched!'),!0}(e,t);return de("abTesting",{name:e.name,match:o}),o}(Z,e),Y){ye("Ab-testing segment match! Segment:",Z.name);var o="//"+Z.host;ye('Setting new base_url. Was: "'+e.base_url+'". New: "'+o+'".'),e.base_url=o}else ye("Ab-testing segment is NOT matched");else de("abTesting",null),ye("AB-testing segmentation is NOT enabled in config"),de("configHost",T);!function(e){if(de("log",!!e.logs),c.jivo_config=y=e,function(){if(y.host_blacklist)for(var e=y.host_blacklist.split(","),t=0;t<e.length;t++)if(c.location.host.indexOf(e[t].replace(" ",""))>=0)return!0;return!1}())throw ye("Host is blacklisted",c.location.host),new Error("Placing widget is forbidden on "+c.top.location.host);if(t=y.geoip.split(";")[0],P.indexOf(t)>=0)return b.log("[Jivo]: Service unavailable for country");if(!e.disable_stop_words&&function(){var e=!1,t=(d=z,d.map((function(e){return e.split("-").map((function(e){return String.fromCharCode(parseInt(e,32)-20)})).join("")}))),n=p.querySelector('meta[name="description"]'),o=p.querySelector('meta[name="keywords"]'),r=p.title,i=n&&n.content?n.content:"",a=o&&o.content?o.content:"";var d;(_e(r,t)||_e(i,t)||_e(a,t))&&(e=!0);return e}())return K(m),void ye("Init error, code 1015.");if(W&&y.disable_mobile)return void ye("Mobile widget is disabled");var t;"complete"==p.readyState?te():D.bundleLoaded&&D.buildNumber==y.build_number?"interactive"==p.readyState?te():d(c,"DOMContentLoaded",te):(de("bundleLoaded",!1),d(c,"load",te))}(e)}}function te(){ye("Widget initialization"),function(){ye("Iframe initialization"),x.src=G?"":"javascript:void(0)",x.role="presentation",x.allow="autoplay",x.title="Jivochat",x.setAttribute("name","jivo_container"),x.setAttribute("id","jivo_container"),x.setAttribute("frameborder","no"),A&&x.setAttribute("nonce",A);c.atob&&"complete"!==p.readyState?d(c,"load",oe):oe();d(c,"message",(function(e){if(e&&e.data&&"object"==typeof e.data){var t=e.data;"in_node_webkit"==t.name&&(c.jivo_cobrowse={source:e.source,origin:e.origin}),"iframe_url_changed"!=t.name&&"iframe_url_changed"!=t||ie()}else y&&1===y.logs&&b&&b.log&&b.log("Error receive postMessage, window message event is empty.")}))}()}function ne(){var e=be();ye("loadBundleAfterWait",e,B),l(ne),re(e)}function oe(){var e=be();if(!B.store.isChatStarted&&y.enable_bundle_wait){ye("addWaitActions");try{s(ne),setTimeout((function(){ye("5s load",B.store),c.jivo_api||ne()}),5e3)}catch(t){re(e)}}else ye("startLoadBundle",e),re(e)}function re(e){ye("Insertion of bundle code from",e);var t=Se(),n=p.createElement("script"),o=function(e){var t=y.bundle_folder?y.bundle_folder:"";return e+t+"/js/bundle_"+y.locale+".js?rand="+y.build_number}(e);L=(new Date).getTime(),pe(n),n.className="js-jivo-bundle",n.src=r()+o,B.bundleSrc=o,n.onerror=function(){ye("loadBundle errorBundle",e),p.getElementById("jcont")&&function(e,t,n){if(clearTimeout(I),++U>=3){if(ye("Bundle load retries count is exceeded"),X)return void b.error("Widget not loaded due CSP security policy.");var o=new Error("Bundle NOT loaded. Type: "+e+(t?". Host: "+t:"")+(n?". Status code: "+n:""));return void c.__jivoOnError(o)}oe()}("errorBundle",e)},t.appendChild(n)}function ie(){if(!(M++>3)){if(!E)return M--,oe();try{j=x.contentWindow.document}catch(e){S=p.domain,x.src=G?"":"javascript:var d=document.open();d.domain='"+S+"';void(0);",j=x.contentWindow.document}var e='<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />',t="";try{t="window.onerror = "+g.toString()+";"}catch(e){}var n=(y&&!y.disable_error_reporting?t:"")+E,o=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;if(G&&o)try{j=x.contentDocument}catch(e){}if(!o&&j.head&&j.body){j.body.class="notranslate",j.head.innerHTML=e;var r=p.createElement("script");r.type="text/javascript",A&&r.setAttribute("nonce",A),r.innerHTML=n,j.head.appendChild(r)}else{var i='<body class="notranslate"></body>',a='<script type="text/javascript"'+(A?'nonce="'+A+'"':"")+">"+n+"<\/script>",d="<head>"+e+a+"</head>";j.write("<!doctype HTML>"+d+i),a=null,i=null,d=null}j.close(),n=null}}function ae(){var e={isChatStarted:null,geoWidgetInfo:{widgetId:null,clientLocation:null,region:null},configHost:null,deletedInfo:{widgetId:null,resolveTime:null},abTesting:null,buildNumber:null,bundleLoaded:null,isNewCode:null,loadTime:null,log:null,configUpdatedTs:null};if(B.hasStorage&&(localStorage.removeItem("jv_loader_info"),N)){var t=Ee(localStorage.getItem("jv_loader_info_"+N));t&&se(t,e)}return e}function de(e,t){if(D[e]=t,B.hasStorage&&N){var n={};se(D,n),localStorage.setItem("jv_loader_info_"+N,(o=n,c.MooTools&&void 0===JSON.stringify?JSON.encode(o):JSON.stringify(o)))}var o}function se(e,t){Object.keys(e).forEach((function(n){(function(e){if(ce(e))return!0;if("object"==typeof e){for(var t=Object.keys(e),n=0;n<t.length;n++)if(!ce(e[t[n]]))return!1;return!0}})(e[n])||(t[n]=e[n])}))}function ce(e){return null===e&&"object"==typeof e}function le(){var e="";return ye("getConfigUrl",D.configUpdatedTs),D.configUpdatedTs&&(e="?v="+D.configUpdatedTs),r()+T+"/script/widget/config/"+N+e}function ue(){var r=function(e){if(e)return e.src;try{throw new Error("Get script URL")}catch(e){var r=e.stack;if(r){var i=t(r),a=n(r),d=o(r);return i?i[0]:a?a[0]:d?d[0]:null}}}(O=e());if(B.scriptSrc=r,r&&r.match(/&lt;/))ye("Invalid codeHost",r);else{var i,a=t(r),d=n(r),s=o(r);T||(a?(T="//"+a[1],q=!0):d?T="//"+d[1]:s&&(T="//"+s[1])),N||(d&&d[2]?(N=d[2],q=!1):s&&s[2]?(N=s[2],q=!1):(q=!0,O&&(N=O.getAttribute("jv-id")||O.getAttribute("data-jv-id")),N||(i=r&&r.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/),N=i?i[1]:null))),ye("getWidgetIdAndConfigHost",N,T)}}function ge(e,t,n){return{widgetId:e,region:t,clientLocation:n}}function fe(e){if("string"==typeof e&&""!==e){var t=e.split(";");return{country:t[0],region:t[1],city:t[2]}}}function ve(){ye("Widget was removed",N),de("configHost",null),D.geoWidgetInfo.widgetId||D.isChatStarted?(de("geoWidgetInfo",ge(null,null,null)),de("isChatStarted",null),he()):(de("deletedInfo",{widgetId:N,resolveTime:((new Date).getTime()+864e5).toString()}),b.error("Widget "+N+" is permanently removed. Host: "+T),K(h))}function me(e){ye("Config loading error:",e?"parse":"request"),de("geoWidgetInfo",ge(null,null,null)),de("isChatStarted",null),de("configHost",null),e||he()}function he(){N=null,T=null,ue(),$(le())}function pe(e){if(e)return e.type="text/javascript",e.async=!0,e.charset="UTF-8",A&&e.setAttribute("nonce",A),e}function we(e){return e.responseType&&"text"!==e.responseType?"document"===e.responseType?e.responseXML:e.response:e.responseText}function _e(e,t){for(var n=!1,o=0;o<t.length;o++){var r=t[o].toLowerCase(),i=new RegExp("([, .]|^)"+r+"([, .]|$)","gi");if(e.toLowerCase().search(i)>-1){n=!0;break}}return n}function be(){return y.base_url}function ye(){if(D.log){var e=Array.prototype.slice.call(arguments||[]);e.unshift("Loader:"),b.log.apply(b,e)}}function Se(){var e=p.head||p.getElementsByTagName("head")[0];if(!e)throw new Error("Cannot get document head element");return e}function je(e){return-1!==k.indexOf(e)}function Ce(){return je("chrome")&&!je("opr/")&&"Google Inc."===c.navigator.vendor}function Ie(){return!je("windows")&&je("android")}function Ee(e){try{return c.MooTools&&void 0===JSON.parse?JSON.decode(e):JSON.parse(e)}catch(e){return e.message="Config parse error: "+N+"\n\n"+e.message,c.__jivoOnError(e),null}}}var w=p,_=null;if(window.__hasStorage){try{_=JSON.parse(localStorage.getItem("__jivoLoader"))}catch(e){jivoLog("Loader cache parse error.")}_&&_.version>c&&(w=new Function("window","document","broswerCacheLoaderVersion","currentLoaderVersionCache","("+_.code+")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))}try{w(window,document,c,_?_.version:c)}catch(e){e.message=e.message?"Loader error. "+e.message:"Loader error",window.__jivoOnError(e),delete window.jivo_magic_var,(w=p)(window,document,c,c)}}()}();

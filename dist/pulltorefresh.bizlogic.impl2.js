/*! pulltorefresh 2.0.0 @copyright dailc https://github.com/dailc/pullToRefresh-h5-iscroll */
!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://github.com/dailc/pullToRefresh-h5-iscroll/dist/",t(t.s=6)}([function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){!function(){e.uuid=function(e,t){var o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];if(t=t||n.length,e)for(o=0;o<e;o++)r[o]=n[0|Math.random()*t];else{var s;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",o=0;o<36;o++)r[o]||(s=0|16*Math.random(),r[o]=n[19==o?3&s|8:s])}return r.join("")},e.noop=function(){},e.extend=function(){var t,o,r,s,i,a,u=arguments[0]||{},l=1,c=arguments.length,p=!1;for("boolean"==typeof u&&(p=u,u=arguments[l]||{},l++),"object"===(void 0===u?"undefined":n(u))||e.isFunction(u)||(u={}),l===c&&(u=this,l--);l<c;l++)if(null!=(t=arguments[l]))for(o in t)r=u[o],s=t[o],u!==s&&(p&&s&&(e.isPlainObject(s)||(i=e.isArray(s)))?(i?(i=!1,a=r&&e.isArray(r)?r:[]):a=r&&e.isPlainObject(r)?r:{},u[o]=e.extend(p,a,s)):void 0!==s&&(u[o]=s));return u},e.isFunction=function(t){return"function"===e.type(t)},e.isPlainObject=function(t){return e.isObject(t)&&!e.isWindow(t)&&Object.getPrototypeOf(t)===Object.prototype},e.isArray=Array.isArray||function(e){return e instanceof Array},e.isWindow=function(e){return null!=e&&e===e.window},e.isObject=function(t){return"object"===e.type(t)},e.type=function(e){return null==e?String(e):t[{}.toString.call(e)]||"object"},e.each=function(e,t,o){if(!e)return this;if("number"==typeof e.length)[].every.call(e,function(e,o){return t.call(e,o,e)!==!1});else for(var n in e)if(o){if(e.hasOwnProperty(n)&&t.call(e[n],n,e[n])===!1)return e}else if(t.call(e[n],n,e[n])===!1)return e;return this};var t={};e.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],function(e,o){t["[object "+o+"]"]=o.toLowerCase()}),function(){function t(t){this.os={},this.os.name="browser";var o=[function(){var e=t.match(/(Android);?[\s\/]+([\d.]+)?/);return e&&(this.os.android=!0,this.os.version=e[2],this.os.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion),this.os.name+="_Android",this.os.name+="_mobile"),this.os.android===!0},function(){var e=t.match(/(iPhone\sOS)\s([\d_]+)/);if(e)this.os.ios=this.os.iphone=!0,this.os.version=e[2].replace(/_/g,"."),this.os.name+="_iphone",this.os.name+="_mobile";else{var o=t.match(/(iPad).*OS\s([\d_]+)/);o&&(this.os.ios=this.os.ipad=!0,this.os.version=o[2].replace(/_/g,"."),this.os.name+="_iOS",this.os.name+="_mobile")}return this.os.ios===!0}];[].every.call(o,function(t){return!t.call(e)})}t.call(e,navigator.userAgent)}(),function(){function t(e){this.os=this.os||{},e.match(/EpointEJS/i)&&(this.os.ejs=!0,this.os.name+="_ejs"),e.match(/DingTalk/i)&&(this.os.dd=!0,this.os.name+="_dd")}t.call(e,navigator.userAgent)}()}(),function(){var t=!1,o=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,n=function(){};n.extend=function(e){function n(){!t&&this.init&&this.init.apply(this,arguments)}var r=this.prototype;t=!0;var s=new this;t=!1;for(var i in e)s[i]="function"==typeof e[i]&&"function"==typeof r[i]&&o.test(e[i])?function(e,t){return function(){var o=this._super;this._super=r[e];var n=t.apply(this,arguments);return this._super=o,n}}(i,e[i]):e[i];return n.prototype=s,n.prototype.constructor=n,n.extend=this.extend,n},e.Clazz=n}()}(e.exports={})},function(e,t,o){"use strict";e.exports={namespace:"PullToRefreshTools.",generateGlobalObj:function(e,t,o){if(o){var n=o.split("."),r=n.length;this.getNameSpaceObj(e,n,r-1)[n[r-1]]=t}},getNameSpaceObj:function(e,t,o){for(var n=e,r=0;r<o;r++){var s=t[r];n[s]=n[s]||{},n=n[s]}return n}}},,function(e,t,o){"use strict";!function(e){function t(e,t,o){var n={type:"V6数据格式"};if(e&&e.ReturnInfo&&"1"==e.ReturnInfo.Code)if(e&&e.BusinessInfo&&"1"==e.BusinessInfo.Code){n.errorType="null";var r="接口请求成功,后台业务逻辑处理成功!";if(e&&e.BusinessInfo&&e.BusinessInfo.Description&&(r=e.BusinessInfo.Description),o.message=r,0===t||"0"===t)o.code=1,o.data=e.UserArea;else if(1===t||"1"===t)if(e&&e.UserArea)if(o.code=1,Array.isArray(e.UserArea))o.data=e.UserArea;else if(e.UserArea.InfoList&&e.UserArea.InfoList[0]&&e.UserArea.InfoList[0].Info){for(var s=[],i=0,a=e.UserArea.InfoList.length;i<a;i++)s.push(e.UserArea.InfoList[i].Info);o.data=s}else{o.data=null;for(var u in e.UserArea)if(Array.isArray(e.UserArea[u])){if(o.data=e.UserArea[u],"InfoList"===u)break}else if("InfoList"===u){e.UserArea[u]&&e.UserArea[u].Info?o.data=e.UserArea[u].Info:o.data=e.UserArea[u];break}}else o.code=0,o.message="接口返回列表数据格式不符合规范!";else if(2===t||"2"===t)if(e&&e.UserArea){o.code=1;var l=0;for(var u in e.UserArea)l++,o.data=e.UserArea[u];l>1&&(o.data=e.UserArea)}else o.code=0,o.message="接口返回详情数据格式不符合规范!";else o.code=0,o.message="处理接口数据错误,传入类别不在处理范围!"}else{n.errorType="2",o.code=0;var r="接口请求错误,后台业务逻辑处理出错!";e&&e.BusinessInfo&&e.BusinessInfo.Description&&(r=e.BusinessInfo.Description),o.message=r}else{n.errorType="1",o.code=0;var r="接口请求错误,后台程序处理出错!";e&&e.ReturnInfo&&e.ReturnInfo.Description&&(r=e.ReturnInfo.Description),o.message=r}return o.status=o.code,o.debugInfo=n,o}function o(e,t,o){var n={type:"V7数据格式"};return o.status=0,e&&e.status?(o.status=e.status.code,o.message=e.status.text,"200"==e.status.code?(o.code=1,1==t?e.custom&&(e.custom.list||e.custom.infolist)?o.data=e.custom.list||e.custom.infolist:(o.code=0,o.message="列表接口返回数据不符合标准规范！"):2==t?e.custom?o.data=e.custom:(o.code=0,o.message="详情接口返回的数据为空！"):o.data=e.custom):o.code=0):(o.code=0,o.message="接口请求错误,缺少status节点!"),o.debugInfo=n,o}e.handleStandardResponse=function(e,n){var r={code:0,message:"",data:null,debugInfo:{type:"未知数据格式"}};return n=n||0,e?(e&&e.ReturnInfo?r=t(e,n,r):e&&e.custom&&e.status?r=o(e,n,r):(r.code=0,r.message="接口数据返回格式不正确,不是V6也不是V7!",r.debugInfo.data=e),r):(r.message="接口返回数据为空!",r)}}(e.exports={})},,,function(e,t,o){"use strict";var n;!function(t){function r(e){if(null==e||"string"!=typeof e)return null;var t,o=document.createElement("div"),n=document.createDocumentFragment();for(o.innerHTML=e;t=o.firstChild;)n.appendChild(t);return n}function s(e){var t=this,o=e.setting;o.element=document.querySelector(e.pullrefreshSelector),o.down&&(o.down.callback=function(){t.pullDownCallback()}),o.up&&(o.up.callback=function(){t.pullUpCallback()}),t.pullRefreshContainer=o.element,t.respnoseEl=t.pullRefreshContainer.querySelector(e.listSelector),t.options=e,t.setting=o,t.isShouldNoMoreData=!0,t.currPage=t.options.initPageIndex,t.setting.up&&t.setting.up.auto&&t.currPage--,t.initAllEventListeners(),t.pullToRefreshInstance=i.initPullToRefresh(e.setting)}var i,a=o(0),u=o(3),l=o(1),c="ontouchstart"in document,p=c?"tap":"click",f={isDebug:!1,setting:{down:{height:75,contentdown:"下拉可以刷新",contentover:"释放立即刷新",contentrefresh:"正在刷新",contentrefreshsuccess:"刷新成功",contentrefresherror:"刷新失败",isSuccessTips:!0},up:{auto:!0,offset:100,show:!0,contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}},method:"POST",initPageIndex:0,pageSize:10,url:null,litemplate:null,requestData:null,changeData:null,itemClick:null,success:null,error:null,refresh:null,autoRender:!0,itemSelector:"li",listSelector:"#listdata",pullrefreshSelector:"#pullrefresh",delyTime:0,timeOut:6e3,accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},contentType:"application/x-www-form-urlencoded",headers:null};s.prototype.pullDownCallback=function(){var e=this;e.loadingDown||(e.isPullDown=!0,e.loadingDown=!0,e.currPage=e.options.initPageIndex,setTimeout(function(){e.ajaxRequest()},e.options.delyTime),e.options.refresh&&e.options.refresh(!0))},s.prototype.pullUpCallback=function(){var e=this;e.loadingUp||(e.isPullDown=!1,e.loadingUp=!0,e.currPage++,setTimeout(function(){e.ajaxRequest()},e.options.delyTime))},s.prototype.initAllEventListeners=function(){var e=this;e.setElemListeners()},s.prototype.setElemListeners=function(){var e=this;e.options.itemClick&&mui(e.options.listSelector).on(p,e.options.itemSelector,e.options.itemClick)},s.prototype.refresh=function(){var e=this;e.setting.up?e.loadingUp||(e.clearResponseEl(),e.currPage=e.options.initPageIndex-1,e.loadingMore()):(e.clearResponseEl(),e.pullDownCallback())},s.prototype.loadingMore=function(e){var t=this;t.loadingMoreSuccess=e,t.pullToRefreshInstance.finished&&(t.pullToRefreshInstance.refresh(!0),t.isShouldNoMoreData=!0),t.pullToRefreshInstance.pullupLoading()},s.prototype.disablePullupToRefresh=function(){this.pullToRefreshInstance.disablePullupToRefresh()},s.prototype.enablePullupToRefresh=function(){this.pullToRefreshInstance.enablePullupToRefresh()},s.prototype.ajaxRequest=function(){var e=this;if(!e.options.url)return e.options.isDebug&&console.error("error***url无效,无法访问"),void e.errorRequest(null,null,"请求url为空!");var t=function(t){var o="";o="function"==typeof e.options.url?e.options.url():e.options.url,mui.ajax(o,{data:t,dataType:"json",timeout:e.options.timeOut,type:e.options.method,accepts:e.options.accepts,headers:e.options.headers,contentType:e.options.contentType,success:function(t){e.successRequest(t)},error:function(t,o){e.errorRequest(t,o,"请求失败!")}})};if(e.options.requestData){var o=e.options.requestData(e.currPage,function(e){t(e)});void 0!==o&&t(o)}else e.options.isDebug&&console.warn("warning***请注意getData不存在,默认数据为空"),t()},s.prototype.errorRequest=function(e,t,o){var n=this;n.isShouldNoMoreData=!1,n.refreshState(!1),n.currPage--,n.currPage=n.currPage>=n.options.initPageIndex?n.currPage:n.options.initPageIndex,n.options.error&&n.options.error(e,t,o)},s.prototype.successRequest=function(e,t){var o=this;if(!e)return o.options.isDebug&&console.log("warning***返回的数据为空,请注意！"),o.isShouldNoMoreData=!1,void o.refreshState(!1);if(o.options.isDebug&&console.log("下拉刷新返回数据:"+JSON.stringify(e)),e=o.options.changeData?o.options.changeData(e):o.defaultChangeResponseData(e),o.options.autoRender){o.isPullDown&&o.clearResponseEl();var n=0;if(window.Mustache)if(e&&Array.isArray(e)&&e.length>0){for(var s="",i=0;i<e.length;i++){var a=e[i],u="";o.options.litemplate&&("string"==typeof o.options.litemplate?u=o.options.litemplate:"function"==typeof o.options.litemplate&&(u=o.options.litemplate(a)));var l=Mustache.render(u,a);s+=l,n++}""!=s&&o.respnoseEl.appendChild(r(s))}else o.isShouldNoMoreData=!1;else o.isShouldNoMoreData=!1,1==o.options.isDebug&&console.error("error***没有包含mustache.min.js,无法进行模板渲染")}o.options.success&&"function"==typeof o.options.success&&o.options.success(e,o.isPullDown||o.currPage==o.options.initPageIndex),t||o.refreshState(!0,n)},s.prototype.defaultChangeResponseData=function(e){return u.handleStandardResponse(e,1).data},s.prototype.refreshState=function(e,t){var o=this;t=t||0,o.pullToRefreshInstance.setSuccessTips&&o.pullToRefreshInstance.setSuccessTips("更新"+t+"条数据"),o.isPullDown&&(o.pullToRefreshInstance.endPullDownToRefresh(e),o.pullToRefreshInstance.finished&&(o.pullToRefreshInstance.refresh(!0),o.isShouldNoMoreData=!0)),o.isShouldNoMoreData?o.pullToRefreshInstance.endPullUpToRefresh(!1,e):o.pullToRefreshInstance.endPullUpToRefresh(!0,e),o.loadingDown=!1,o.loadingUp=!1},s.prototype.clearResponseEl=function(){var e=this;e.options.autoRender&&e.respnoseEl&&(e.respnoseEl.innerHTML="")},t.initPullDownRefresh=function(e,t){e=e||{};var o=document.querySelector(e.listSelector||"#listdata"),n=o.getAttribute("data-tpl")||"",r=document.querySelector(n);if(e.initPageIndex=e.initPageIndex||o.getAttribute("initPageIndex")||void 0,e.pageSize=e.pageSize||o.getAttribute("pageSize")||void 0,e.method=e.method||o.getAttribute("method")||void 0,e.url=e.url||o.getAttribute("url")||"",r&&(e.litemplate=e.litemplate||r.innerHTML.toString()||""),e=a.extend(!0,{},f,e),!e.targetPullToRefresh)return void console.error("错误:传入的下拉刷新皮肤错误,超出范围!");i=e.targetPullToRefresh;var u=new s(e);return t&&t(u),u},void 0!==e&&e.exports?e.exports=t:void 0!==(n=function(){return t}.call(t,o,t,e))&&(e.exports=n),l.generateGlobalObj(window,t,l.namespace+"bizlogic")}({})}]);
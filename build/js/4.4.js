webpackJsonp_name_([4],{"5UkA":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("span",{on:{click:t.goBack}},[a("v-icon",{staticClass:"back-icon",attrs:{name:"angle-left"}})],1),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},n=[],o={render:i,staticRenderFns:n};e.a=o},"6NJx":function(t,e,a){"use strict";function i(t){a("nbFN")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("eORV"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var r=a("p8Jy"),l=a("VU/8"),c=i,p=l(o.a,r.a,!1,c,"data-v-9f8178c4",null);e.default=p.exports},"73l8":function(t,e,a){var i=a("xbya");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7cf59a8e",i,!0,{})},BTfB:function(t,e,a){"use strict";function i(t){a("73l8")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("dbm7"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var r=a("5UkA"),l=a("VU/8"),c=i,p=l(o.a,r.a,!1,c,"data-v-5fafd526",null);e.default=p.exports},dbm7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}}},eORV:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),o=i(n),s=a("exGp"),r=i(s),l=a("Dd8w"),c=i(l),p=a("BTfB"),d=i(p),f=a("n95b"),v=(i(f),a("NYxO")),m=a("gIJc"),x=i(m),u=a("HMpe"),b=i(u),g=x.default.getBCXWithState();e.default={components:{Navigation:d.default},data:function(){return{orderDeatil:{},memo:!1,transactionsScroller:null}},computed:(0,c.default)({},(0,v.mapState)(["cocosAccount"])),created:function(){var t=this;return(0,r.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.orderDeatil=t.$route.params,!t.orderDeatil.memo){e.next=8;break}return e.next=4,g.decodeMemo(t.orderDeatil.memo);case 4:t.orderDeatil.memo=e.sent,t.memo=!0,e.next=17;break;case 8:if(!t.orderDeatil.raw_data.memo){e.next=14;break}return e.next=11,g.decodeMemo(t.orderDeatil.raw_data.memo);case 11:e.t0=e.sent,e.next=15;break;case 14:e.t0="";case 15:t.orderDeatil.memo=e.t0,t.orderDeatil.memo&&(t.memo=!0);case 17:console.log(t.orderDeatil);case 18:case"end":return e.stop()}},e,t)}))()},mounted:function(){this.transactionsScroller=new b.default("#perfect-scroll-detail",{minScrollbarLength:40,maxScrollbarLength:40})},methods:{copySuccess:function(){this.$kalert({message:this.$i18n.t("alert.copySuccess")})},copyError:function(){this.$kalert({message:this.$i18n.t("alert.copyFail")})}}}},fSyq:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'\nmain[data-v-9f8178c4]{background-color:#fff\n}\n.eos-info[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:60px;margin:0 auto\n}\n.eos-main[data-v-9f8178c4]{padding-top:20px;text-align:center;border-top:1px dashed #e6e6e6\n}\n.eos-main .eos-logo[data-v-9f8178c4]{margin-top:20px;border-radius:100%\n}\n.eos-main .eos-logo-small[data-v-9f8178c4]{width:80px;height:80px\n}\n.eos-main .go-active a[data-v-9f8178c4]{color:#ff5b5b;text-decoration:underline\n}\n.eos-main a.active-btn[data-v-9f8178c4]{display:block;width:100px;height:30px;margin:10px auto;line-height:30px;text-align:center;color:#fff;border-radius:4px;background-color:#ff5b5b;text-decoration:none\n}\n.eos-main .translate-log-title[data-v-9f8178c4]{position:relative;z-index:1\n}\n.eos-main .translate-log-title .log-line[data-v-9f8178c4]{width:100%;height:1px;background-color:#e6e6e6;position:absolute;top:50%;left:0;-webkit-transform:translate(0, -50%);transform:translate(0, -50%);z-index:-1\n}\n.eos-main .translate-log-title .log-title[data-v-9f8178c4]{width:80px;background-color:#fff;text-align:center;color:#666;margin:0 auto;font-size:14px\n}\n.eos-main .translate-log-title .log-option[data-v-9f8178c4]{position:absolute;top:50%;right:0;-webkit-transform:translate(0, -50%);transform:translate(0, -50%);background-color:#fff;width:100px\n}\n.no-result[data-v-9f8178c4]{font-size:12px;padding-bottom:15px;margin-bottom:15px;color:#999\n}\n.account[data-v-9f8178c4]{width:160px;position:relative;height:40px;line-height:40px\n}\n.account .avatar[data-v-9f8178c4]{position:absolute;top:5px;left:0;width:30px;height:30px\n}\n.account .current-account[data-v-9f8178c4]{text-align:center;font-size:18px;overflow:hidden;width:150px;white-space:nowrap;text-overflow:ellipsis\n}\n.account .account-arrow[data-v-9f8178c4]{position:absolute;width:10px;height:30px;line-height:30px;top:5px;right:0\n}\nul[data-v-9f8178c4],li[data-v-9f8178c4]{margin:0;padding:0\n}\nli[data-v-9f8178c4]{list-style:none\n}\n.account-container[data-v-9f8178c4]{position:relative;width:160px;height:40px;margin-top:10px;cursor:pointer\n}\n.account-container i[data-v-9f8178c4]{font-size:20px\n}\n.account-container .account-list[data-v-9f8178c4]{position:absolute;background-color:rgba(0,0,0,0.7);border-radius:8px;padding:0 10px;top:40px;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);width:190px;max-height:240px;z-index:99\n}\n.account-container .account-list ul[data-v-9f8178c4]{margin:0;padding:0\n}\n.account-container .account-list li[data-v-9f8178c4]{width:100%;position:relative;margin:0;padding:0;font-size:16px;height:40px;line-height:40px;color:#fff;cursor:pointer\n}\n.account-container .account-list li .selected[data-v-9f8178c4]{position:absolute;top:0;left:0;width:20px;line-height:47px\n}\n.account-container .account-list li .account-item[data-v-9f8178c4]{position:relative;width:100%;padding:0 0 0 25px\n}\n.account-container .account-list li .account-item .avatar-small[data-v-9f8178c4]{top:10px;left:25px;position:absolute;width:20px;height:20px\n}\n.account-container .account-list li .account-item .account-name[data-v-9f8178c4]{width:100%;padding-left:25px;font-size:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden\n}\n.account-container .account-list li .is-import[data-v-9f8178c4]{position:absolute;width:35px;top:0;right:5px;color:#4679fe\n}\n.account-container .account-list .operate-item[data-v-9f8178c4]{height:30px;line-height:30px\n}\n.dashed-line[data-v-9f8178c4]{width:100%;height:0;border-bottom:1px dashed #e6e6e6\n}\n.more[data-v-9f8178c4]{position:relative;margin-top:10px\n}\n.more span[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:40px;height:40px;cursor:pointer;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center\n}\n.more span i[data-v-9f8178c4]{font-size:20px\n}\n.more-btn[data-v-9f8178c4]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end\n}\n.more .more-list[data-v-9f8178c4]{position:absolute;background-color:rgba(0,0,0,0.7);top:40px;right:0;width:160px;padding:0 10px;border-radius:8px\n}\n.more .more-list .icon-img[data-v-9f8178c4]{vertical-align:middle\n}\n.more .more-list li[data-v-9f8178c4]{width:100%;margin:0;padding:0;line-height:40px;color:#fff;font-size:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer\n}\n.more .more-list li a[data-v-9f8178c4]{color:#fff;text-decoration:none\n}\n.btn-group[data-v-9f8178c4]{position:relative;z-index:9;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px\n}\n.btn-group .charge[data-v-9f8178c4]{width:130px\n}\n.action-group[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;margin-bottom:10px\n}\n.action-group .button[data-v-9f8178c4]{width:130px\n}\n.translate-container[data-v-9f8178c4]{margin:0 -15px\n}\n.translate-list[data-v-9f8178c4]{position:relative;height:200px;padding:0 15px\n}\n.eos-style[data-v-9f8178c4]{line-height:1.6;font-size:20px;margin-bottom:20px;font-weight:normal;color:#7046fe\n}\n.warning-tip[data-v-9f8178c4]{font-size:12px;color:#ff5b5b\n}\n.key-container[data-v-9f8178c4]{margin-top:15px;background:rgba(70,121,254,0.2);border-radius:8px;padding:10px 5px;line-height:1.6\n}\n.copy-btn[data-v-9f8178c4]{width:132px;font-size:14px;height:36px;line-height:26px\n}\n.token-title[data-v-9f8178c4]{position:relative;height:60px;line-height:60px;text-align:center;border-bottom:1px dashed #e6e6e6\n}\n.token-title .token-user[data-v-9f8178c4]{display:inline-block;font-size:18px;width:100%;padding-right:40px;padding-left:15px\n}\n.token-title .close-drawer[data-v-9f8178c4]{position:absolute;right:15px;top:10px;width:15px;line-height:35px;height:30px;cursor:pointer\n}\n.assets[data-v-9f8178c4]{position:relative;height:440px\n}\n.assets ul[data-v-9f8178c4]{padding:0 15px;margin-top:20px\n}\n.assets li[data-v-9f8178c4]{list-style:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(70,121,254,0.2);margin-bottom:15px;padding:0 15px;height:50px;cursor:pointer;border-radius:4px\n}\n.assets li[data-v-9f8178c4]:last-child{margin-bottom:0\n}\n.assets li .asset-value[data-v-9f8178c4]{color:#7046fe\n}\n.assets li .asset-name[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center\n}\n.assets li .asset-name span[data-v-9f8178c4]{font-size:13px;padding-left:10px\n}\n.cocos[data-v-9f8178c4]{font-size:22px;font-family:NotoSansHans-Medium;font-weight:500;color:#4679fe\n}\n.eos-style[data-v-9f8178c4]{margin-bottom:0 !important\n}\n.eos-main[data-v-9f8178c4]{border-top:none !important\n}\n.des[data-v-9f8178c4]{color:#8c9097;font-size:15px;font-family:NotoSansHans-Regular;font-weight:400;color:#8c9097\n}\n.mt40[data-v-9f8178c4]{margin-top:40px\n}\n.running[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.running .key[data-v-9f8178c4]{min-width:100px\n}\n.running .title[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#8c9097;font-size:15px\n}\n.running .name[data-v-9f8178c4]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:15px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center\n}\n.running .name.memo[data-v-9f8178c4]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3\n}\n.running .name p[data-v-9f8178c4]{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.running .name div[data-v-9f8178c4]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1\n}\n.running .name button[data-v-9f8178c4]{height:16px;width:16px;background:url("/icons/copy.png") no-repeat center;background-size:100% 100%;margin-left:5px;margin:0;padding:0;border:none;outline:none\n}\n',""])},nbFN:function(t,e,a){var i=a("fSyq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("9df63662",i,!0,{})},p8Jy:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-container"},[a("navigation",{attrs:{title:t.$t("title.sendDetail")}}),t._v(" "),a("div",{attrs:{id:"perfect-scroll-detail"}},["transfer"===t.orderDeatil.type?a("section",{staticClass:"eos-main"},[a("h2",{staticClass:"eos-style cocos mt20"},[t._v(t._s(t.cocosAccount.accounts===t.orderDeatil.parse_operations.from?"-":"+")+t._s(t.orderDeatil.parse_operations.amount)+"("+t._s(t.$t("title.test"))+")")]),t._v(" "),a("div",{staticClass:"des"},[t._v(t._s(t.$t("alert.tranferSuccess")))]),t._v(" "),t._m(0)]):t._e(),t._v(" "),"transfer"===t.orderDeatil.type?a("section",{staticClass:"running"},[a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.send"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.from))]),t._v(" "),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderDeatil.parse_operations.from,expression:"orderDeatil.parse_operations.from",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticStyle:{"margin-left":"10px"},attrs:{type:"button"}})])]),t._v(" "),a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.receive"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.to))]),t._v(" "),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderDeatil.parse_operations.to,expression:"orderDeatil.parse_operations.to",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticStyle:{"margin-left":"10px"},attrs:{type:"button"}})])])]):t._e(),t._v(" "),"transfer_nh_asset"===t.orderDeatil.type?a("section",{staticClass:"eos-main"},[a("h2",{staticClass:"eos-style cocos"},[t._v(t._s(t.$t("label.nhTitle")))]),t._v(" "),t._m(1)]):t._e(),t._v(" "),"transfer_nh_asset"===t.orderDeatil.type?a("section",{staticClass:"running"},[a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.send"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.from))]),t._v(" "),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderDeatil.parse_operations.from,expression:"orderDeatil.parse_operations.from",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticStyle:{"margin-left":"10px"},attrs:{type:"button"}})])]),t._v(" "),a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.receive"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.to))]),t._v(" "),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderDeatil.parse_operations.to,expression:"orderDeatil.parse_operations.to",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticStyle:{"margin-left":"10px"},attrs:{type:"button"}})])]),t._v(" "),a("div",{staticClass:"title mt10"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.nhId"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.nh_asset))])])])]):t._e(),t._v(" "),"call_contract_function"===t.orderDeatil.type?a("section",{staticClass:"eos-main"},[a("h2",{staticClass:"eos-style cocos"},[t._v(t._s(t.$t("label.contract"))+t._s(t.$t("label.operation")))]),t._v(" "),t._m(2)]):t._e(),t._v(" "),"call_contract_function"===t.orderDeatil.type?a("section",{staticClass:"running"},[a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.user"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.caller))]),t._v(" "),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderDeatil.parse_operations.caller,expression:"orderDeatil.parse_operations.caller",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],staticStyle:{"margin-left":"10px"},attrs:{type:"button"}})])]),t._v(" "),a("div",{staticClass:"title mt10"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.contract"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.contract_name))])])]),t._v(" "),a("div",{staticClass:"title mt10"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.operation"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s(t.orderDeatil.parse_operations.function_name))])])]),t._v(" "),a("div",{staticClass:"title mt10"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.json"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("div",{staticClass:"json"},[t._v(t._s(JSON.stringify(t.orderDeatil.parse_operations.arg_list)))])])])]):t._e(),t._v(" "),t._m(3),t._v(" "),a("section",{staticClass:"running mt15"},[a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.charge"))+":")]),t._v(" "),a("div",{staticClass:"name"},[a("p",[t._v(t._s("-1"===t.orderDeatil.parse_operations.fees[0].indexOf("GAS")?t.orderDeatil.parse_operations.fees[0]:0)+"("+t._s(t.$t("title.test"))+")")])])]),t._v(" "),a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.hash"))+":")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.orderDeatil.id))])]),t._v(" "),a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.blockHeight"))+":")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.orderDeatil.block_num))])]),t._v(" "),a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("label.tradeTime"))+":")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.orderDeatil.date))])]),t._v(" "),t.memo?a("div",{staticClass:"title mt20"},[a("div",{staticClass:"key memo"},[t._v(t._s(t.$t("label.memo"))+":")]),t._v(" "),a("div",{staticClass:"name memo"},[t._v(t._s(t.orderDeatil.memo.data.text))])]):t._e()])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"translate-log-title mt40"},[a("div",{staticClass:"log-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"translate-log-title mt20"},[a("div",{staticClass:"log-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"translate-log-title mt20"},[a("div",{staticClass:"log-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"eos-main"},[a("div",{staticClass:"translate-log-title mt10"},[a("div",{staticClass:"log-line"})])])}],o={render:i,staticRenderFns:n};e.a=o},xbya:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\nnav[data-v-5fafd526]{position:relative;padding:0 50px;border-bottom:1px dashed #e6e6e6\n}\n.back-icon[data-v-5fafd526]{position:absolute;top:10px;left:0;width:15px;height:30px;text-align:center;cursor:pointer\n}\n.title[data-v-5fafd526]{display:inline-block;width:100%;line-height:50px;text-align:center;font-size:18px\n}\n",""])}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,7,8,9,10,11],{537:function(t,e,r){"use strict";r.r(e);var n=r(539),o=n.b.reactiveProp,l={extends:n.a,mixins:[o],props:{options:{type:Object,required:!0}},mounted:function(){this.renderChart(this.chartData,this.options)}},c=r(42),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},538:function(t,e,r){var map={"./af":402,"./af.js":402,"./ar":403,"./ar-dz":404,"./ar-dz.js":404,"./ar-kw":405,"./ar-kw.js":405,"./ar-ly":406,"./ar-ly.js":406,"./ar-ma":407,"./ar-ma.js":407,"./ar-sa":408,"./ar-sa.js":408,"./ar-tn":409,"./ar-tn.js":409,"./ar.js":403,"./az":410,"./az.js":410,"./be":411,"./be.js":411,"./bg":412,"./bg.js":412,"./bm":413,"./bm.js":413,"./bn":414,"./bn-bd":415,"./bn-bd.js":415,"./bn.js":414,"./bo":416,"./bo.js":416,"./br":417,"./br.js":417,"./bs":418,"./bs.js":418,"./ca":419,"./ca.js":419,"./cs":420,"./cs.js":420,"./cv":421,"./cv.js":421,"./cy":422,"./cy.js":422,"./da":423,"./da.js":423,"./de":424,"./de-at":425,"./de-at.js":425,"./de-ch":426,"./de-ch.js":426,"./de.js":424,"./dv":427,"./dv.js":427,"./el":428,"./el.js":428,"./en-au":429,"./en-au.js":429,"./en-ca":430,"./en-ca.js":430,"./en-gb":431,"./en-gb.js":431,"./en-ie":432,"./en-ie.js":432,"./en-il":433,"./en-il.js":433,"./en-in":434,"./en-in.js":434,"./en-nz":435,"./en-nz.js":435,"./en-sg":436,"./en-sg.js":436,"./eo":437,"./eo.js":437,"./es":438,"./es-do":439,"./es-do.js":439,"./es-mx":440,"./es-mx.js":440,"./es-us":441,"./es-us.js":441,"./es.js":438,"./et":442,"./et.js":442,"./eu":443,"./eu.js":443,"./fa":444,"./fa.js":444,"./fi":445,"./fi.js":445,"./fil":446,"./fil.js":446,"./fo":447,"./fo.js":447,"./fr":448,"./fr-ca":449,"./fr-ca.js":449,"./fr-ch":450,"./fr-ch.js":450,"./fr.js":448,"./fy":451,"./fy.js":451,"./ga":452,"./ga.js":452,"./gd":453,"./gd.js":453,"./gl":454,"./gl.js":454,"./gom-deva":455,"./gom-deva.js":455,"./gom-latn":456,"./gom-latn.js":456,"./gu":457,"./gu.js":457,"./he":458,"./he.js":458,"./hi":459,"./hi.js":459,"./hr":460,"./hr.js":460,"./hu":461,"./hu.js":461,"./hy-am":462,"./hy-am.js":462,"./id":463,"./id.js":463,"./is":464,"./is.js":464,"./it":465,"./it-ch":466,"./it-ch.js":466,"./it.js":465,"./ja":467,"./ja.js":467,"./jv":468,"./jv.js":468,"./ka":469,"./ka.js":469,"./kk":470,"./kk.js":470,"./km":471,"./km.js":471,"./kn":472,"./kn.js":472,"./ko":473,"./ko.js":473,"./ku":474,"./ku.js":474,"./ky":475,"./ky.js":475,"./lb":476,"./lb.js":476,"./lo":477,"./lo.js":477,"./lt":478,"./lt.js":478,"./lv":479,"./lv.js":479,"./me":480,"./me.js":480,"./mi":481,"./mi.js":481,"./mk":482,"./mk.js":482,"./ml":483,"./ml.js":483,"./mn":484,"./mn.js":484,"./mr":485,"./mr.js":485,"./ms":486,"./ms-my":487,"./ms-my.js":487,"./ms.js":486,"./mt":488,"./mt.js":488,"./my":489,"./my.js":489,"./nb":490,"./nb.js":490,"./ne":491,"./ne.js":491,"./nl":492,"./nl-be":493,"./nl-be.js":493,"./nl.js":492,"./nn":494,"./nn.js":494,"./oc-lnc":495,"./oc-lnc.js":495,"./pa-in":496,"./pa-in.js":496,"./pl":497,"./pl.js":497,"./pt":498,"./pt-br":499,"./pt-br.js":499,"./pt.js":498,"./ro":500,"./ro.js":500,"./ru":501,"./ru.js":501,"./sd":502,"./sd.js":502,"./se":503,"./se.js":503,"./si":504,"./si.js":504,"./sk":505,"./sk.js":505,"./sl":506,"./sl.js":506,"./sq":507,"./sq.js":507,"./sr":508,"./sr-cyrl":509,"./sr-cyrl.js":509,"./sr.js":508,"./ss":510,"./ss.js":510,"./sv":511,"./sv.js":511,"./sw":512,"./sw.js":512,"./ta":513,"./ta.js":513,"./te":514,"./te.js":514,"./tet":515,"./tet.js":515,"./tg":516,"./tg.js":516,"./th":517,"./th.js":517,"./tk":518,"./tk.js":518,"./tl-ph":519,"./tl-ph.js":519,"./tlh":520,"./tlh.js":520,"./tr":521,"./tr.js":521,"./tzl":522,"./tzl.js":522,"./tzm":523,"./tzm-latn":524,"./tzm-latn.js":524,"./tzm.js":523,"./ug-cn":525,"./ug-cn.js":525,"./uk":526,"./uk.js":526,"./ur":527,"./ur.js":527,"./uz":528,"./uz-latn":529,"./uz-latn.js":529,"./uz.js":528,"./vi":530,"./vi.js":530,"./x-pseudo":531,"./x-pseudo.js":531,"./yo":532,"./yo.js":532,"./zh-cn":533,"./zh-cn.js":533,"./zh-hk":534,"./zh-hk.js":534,"./zh-mo":535,"./zh-mo.js":535,"./zh-tw":536,"./zh-tw.js":536};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=538},540:function(t){t.exports=JSON.parse('{"bittrex":{"name":"Bittrex","url":"https://bittrex.com/Market/Index?MarketName=USDT-UBQ"},"dove":{"name":"Dove Wallet","url":"https://dovewallet.com/en/trade/spot/ubq-usdt"},"shinobi":{"name":"Shinobi","url":"https://shinobi-info.ubiq.ninja"},"quickswap":{"name":"Quickswap","url":"https://info.quickswap.exchange/#/token/0xb1c5c9b97b35592777091cd34ffff141ae866abd"}}')},541:function(t){t.exports=JSON.parse('[{"name":"UbiqPool.io","url":"https://ubiqpool.io"},{"name":"WATTPOOL","url":"https://ubiq.wattpool.net"},{"name":"CrazyPool.org","url":"https://ubq.crazypool.org/"},{"name":"SoloPool","url":"https://ubq.solopool.org"},{"name":"Ubiqpro","url":"https://ubiqpro.com"}]')},545:function(t,e,r){"use strict";r.r(e);r(35);var n={name:"WalletCard",props:{walletId:{type:String,default:function(){return"sparrow"}},href:{type:String,default:function(){return""}}},data:function(){return{jpg:{sparrow:!0,ledger:!0,trezor:!0}}},computed:{ext:function(){return!0===this.jpg[this.walletId]?".jpg":".png"},isMobile:function(){return this.$store.state.mobile}},methods:{uppercase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},o=r(42),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mt-2 mb-6",attrs:{flat:"",tile:"",outlined:""}},[t.isMobile?[e("v-img",{attrs:{src:"wallets/"+t.walletId+t.ext,height:"180",position:"top center"}}),t._v(" "),e("v-card-subtitle",[t._t("default")],2)]:[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",[e("v-card-subtitle",[t._t("default")],2)],1),t._v(" "),e("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[e("v-img",{attrs:{src:"wallets/"+t.walletId+t.ext}})],1)],1)],t._v(" "),e("v-card-actions",{staticClass:"bt-1 pa-0"},[e("v-spacer"),t._v(" "),"sparrow"===t.walletId?e("v-btn",{attrs:{to:"/sparrow",color:"primary",width:"100%",text:""}},[t._v("\n      "+t._s(t.$t("get",[t.uppercase(t.walletId)]))+"\n    ")]):e("v-btn",{attrs:{href:t.href,target:"_blank",text:"",color:"primary",width:"100%"}},[t._v("\n      "+t._s(t.$t("pyrus"===t.walletId?"goTo":"get",[t.uppercase(t.walletId)]))+"\n    ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports},546:function(t,e,r){"use strict";r.r(e);r(23);var n=r(540),o={name:"MarketCard",props:{marketId:{type:String,default:function(){return"shinobi"}}},computed:{markets:function(){return n},isMobile:function(){return this.$store.state.mobile}}},l=r(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mt-4 mb-6",attrs:{flat:"",outlined:"",tile:""}},[t.isMobile?[e("v-img",{staticClass:"mt-4",attrs:{src:"markets/"+t.marketId+".png",height:"125",position:"top center",contain:""}}),t._v(" "),e("v-card-subtitle",[t._t("default")],2)]:[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[e("v-img",{attrs:{src:"markets/"+t.marketId+".png"}})],1),t._v(" "),e("div",[e("v-card-subtitle",[t._t("default")],2)],1)],1)],t._v(" "),e("v-card-actions",{staticClass:"bt-1 pa-0"},[e("v-btn",{attrs:{href:t.markets[t.marketId].url,text:"",width:"100%",tile:"",color:"primary",target:"_blank"}},[t._v(t._s(t.$t("goTo",[t.markets[t.marketId].name])))])],1)],2)}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,r){"use strict";r.r(e);r(23);var n=r(541),o={name:"PoolsTable",methods:{shuffle:function(){for(var t,e,r=n,o=r.length;0!==o;)e=Math.floor(Math.random()*o),t=r[o-=1],r[o]=r[e],r[e]=t;return r}}},l=r(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{flat:"",tile:"",outlined:""}},[e("v-simple-table",{attrs:{striped:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",t._l(t.shuffle(),(function(r){return e("tr",{key:r.name},[e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[e("a",{attrs:{href:r.url,target:"_blank"}},[t._v(t._s(r.url))])])])})),0)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";r.r(e);r(23);var n={name:"InflationTable",data:function(){return{items:[{year:2017,inflation:"2,866,909",inflation_rate:"7.29%",block_reward:8},{year:2018,inflation:"2,508,545",inflation_rate:"6.00%",block_reward:7},{year:2019,inflation:"2,150,182",inflation_rate:"4.89%",block_reward:6},{year:2020,inflation:"1,791,818",inflation_rate:"3.91%",block_reward:5},{year:2021,inflation:"1,433,455",inflation_rate:"3.04%",block_reward:4},{year:2022,inflation:"2,151,654",inflation_rate:"4.58%",block_reward:1.5},{year:2023,inflation:"2,151,654",inflation_rate:"4.38%",block_reward:1.5},{year:2024,inflation:"2,151,654",inflation_rate:"4.20%",block_reward:1.5},{year:2025,inflation:"2,151,654",inflation_rate:"4.03%",block_reward:1.5},{year:2026,inflation:"2,151,654",inflation_rate:"3.73%",block_reward:1.5},{year:2027,inflation:"2,151,654",inflation_rate:"3.59%",block_reward:1.5},{year:2028,inflation:"2,151,654",inflation_rate:"3.47%",block_reward:1.5}]}}},o=r(42),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mt-1",attrs:{flat:"",tile:"",outlined:""}},[e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("monetaryPolicy.year")))]),t._v(" "),e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("monetaryPolicy.inflation")))]),t._v(" "),e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("monetaryPolicy.inflationRate")))]),t._v(" "),e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("monetaryPolicy.blockReward")))])])]),t._v(" "),e("tbody",t._l(t.items,(function(r){return e("tr",{key:r.name},[e("td",[t._v(t._s(r.year))]),t._v(" "),e("td",[t._v(t._s(r.inflation))]),t._v(" "),e("td",[t._v(t._s(r.inflation_rate))]),t._v(" "),e("td",[t._v(t._s(r.block_reward))])])})),0)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},549:function(t,e,r){"use strict";r.r(e);var n={name:"DagGrowth",components:{Chart:r(537).default},data:function(){return{chartData:{labels:["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028"],datasets:[{label:this.$t("monetaryPolicy.blockReward"),backgroundColor:this.$vuetify.theme.currentTheme.primary,data:[8,7,6,5,4,1.5,1.5,1.5,1.5,1.5,1.5,1.5]},{label:this.$t("monetaryPolicy.inflationRate"),backgroundColor:this.$vuetify.theme.currentTheme.accent,data:[7.29,6,4.89,3.91,3.04,4.58,4.38,4.2,4.03,3.73,3.59,3.47]}]},chartOptions:{scales:{yAxes:[{ticks:{min:0,fontColor:this.$vuetify.theme.currentTheme.fontColor}}],xAxes:[{ticks:{fontColor:this.$vuetify.theme.currentTheme.fontColor}}]},legend:{display:!0,labels:{fontColor:this.$vuetify.theme.currentTheme.fontColor}},responsive:!0,maintainAspectRatio:!1}}}},o=r(42),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"pa-4",attrs:{flat:"",tile:"",outlined:""}},[e("Chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions,height:300,styles:{height:"300px"}}})],1)}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,r){"use strict";r.r(e);var n={name:"DagGrowth",components:{Chart:r(537).default},data:function(){return{chartData:{labels:["1","2","3","4","5","6","7"],datasets:[{label:"UBQ",backgroundColor:this.$vuetify.theme.currentTheme.primary,data:[1,1.09,1.19,1.28,1.37,1.46,1.55,1.63]},{label:"ETH",backgroundColor:this.$vuetify.theme.currentTheme.accent,data:[1,1.55,2.09,2.64,3.19,3.73,4.28,4.83]}]},chartOptions:{scales:{yAxes:[{ticks:{min:0,fontColor:this.$vuetify.theme.currentTheme.fontColor},scaleLabel:{display:!0,labelString:this.$t("mining.size"),fontColor:this.$vuetify.theme.currentTheme.fontColor}}],xAxes:[{ticks:{fontColor:this.$vuetify.theme.currentTheme.fontColor},scaleLabel:{display:!0,labelString:this.$t("mining.years"),fontColor:this.$vuetify.theme.currentTheme.fontColor}}]},legend:{display:!0,labels:{fontColor:this.$vuetify.theme.currentTheme.fontColor}},responsive:!0,maintainAspectRatio:!1}}}},o=r(42),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"pa-4",attrs:{flat:"",tile:"",outlined:""}},[e("Chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions,height:300,styles:{height:"300px"}}})],1)}),[],!1,null,null,null);e.default=component.exports},551:function(t,e,r){"use strict";r.r(e);var n={name:"DagSize",data:function(){return{nf:new Intl.NumberFormat(this.$i18n.locale,{})}},computed:{dag:function(){return this.$store.state.dag}}},o=r(42),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mt-1",attrs:{flat:"",tile:"",outlined:""}},[e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",{attrs:{align:"center",justify:"center"}},[e("th",{staticClass:"text-center"},[t._v(t._s(t.$t("mining.height")))]),t._v(" "),e("th",{staticClass:"text-center"},[t._v(t._s(t.$t("mining.epoch")))]),t._v(" "),e("th",{staticClass:"text-center"},[t._v(t._s(t.$t("mining.sizeShort")))])])]),t._v(" "),e("tbody",[e("tr",{attrs:{align:"center",justify:"center"}},[e("td",[t._v(t._s(t.nf.format(t.dag.block)))]),t._v(" "),e("td",[t._v(t._s(t.dag.epoch))]),t._v(" "),e("td",[t._v(t._s(t.nf.format(t.dag.size))+" "+t._s(t.$t("mining.gb")))])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,r){"use strict";r.r(e);r(23),r(24),r(36);var n=r(8),o=r(5),l=(r(78),r(32),r(13),r(37),r(25),r(557)),c=r.n(l);r(558),r(559),r(561),r(562),r(563),r(564),r(565);c.a.languages.vue=c.a.languages.markup;var d=c.a,f=r(252),h=r(545),v=r(546),m=r(547),j=r(548),_=r(549),y=r(550),k=r(551),x={name:"SlugCatcher",components:{ResizableDrawer:f.default,WalletCard:h.default,MarketCard:v.default,PoolTable:m.default,InflationTable:j.default,InflationChart:_.default,DagGrowthChart:y.default,DagSize:k.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,l,c,d,f,path,article,h,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,c=t.error,d=t.i18n,f=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(path){var e,o,article,l,c,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({deep:!0}).where({path:path}).fetch();case 2:if(e=t.sent,o=Object(n.a)(e,1),!(article=o[0])){t.next=15;break}return t.next=8,r(d.locale,{deep:!0}).where({type:{$ne:"group"}}).only(["title","slug","path"]).sortBy("createdAt","asc").surround(article.slug).fetch();case 8:return l=t.sent,c=Object(n.a)(l,2),f=c[0],h=c[1],t.abrupt("return",{article:article,prev:f,next:h});case 15:return t.abrupt("return",null);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),path="/".concat(l.pathMatch||"index"),e.next=5,f(path,!1);case 5:if(article=e.sent,h=!1,article){e.next=17;break}return(s=path.split("/"))[1]=d.defaultLocale,path=s.join("/"),e.next=13,f(path,!0);case 13:if(article=e.sent){e.next=16;break}return e.abrupt("return",c({statusCode:404,message:"Article not found"}));case 16:h=!0;case 17:return e.abrupt("return",{fallback:h,article:article.article,prev:article.prev,next:article.next});case 18:case"end":return e.stop()}}),e)})))()},data:function(){return{currentlyActiveToc:"",observer:null,observerOptions:{rootMargin:"0px",threshold:0}}},head:function(){var t,e,r,n,o,l;return{title:null===(t=this.article)||void 0===t?void 0:t.title,meta:[{hid:"description",name:"description",content:null===(e=this.article)||void 0===e?void 0:e.description},{hid:"og:title",property:"og:title",content:null===(r=this.article)||void 0===r?void 0:r.title},{hid:"og:description",property:"og:description",content:null===(n=this.article)||void 0===n?void 0:n.description},{hid:"twitter:title",name:"twitter:title",content:null===(o=this.article)||void 0===o?void 0:o.title},{hid:"twitter:description",name:"twitter:description",content:null===(l=this.article)||void 0===l?void 0:l.description}]}},computed:{darkmode:function(){return this.$vuetify.theme.dark},locale:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code===t.$i18n.locale}))[0]},defaultLocale:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code===t.$i18n.defaultLocale}))[0]},github:function(){return this.$store.state.params.github},isMobile:function(){return this.$store.state.mobile}},mounted:function(){var t=this;d.highlightAll();var e=this.$route.hash;e&&this.$vuetify.goTo(e),this.observer=new IntersectionObserver((function(e){e.forEach((function(e){var r=e.target.getAttribute("id");e.isIntersecting&&(t.currentlyActiveToc=r)}))}),this.observerOptions),document.querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]").forEach((function(section){t.observer.observe(section)}))},beforeDestroy:function(){this.observer.disconnect(),"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},methods:{tableOfContentsHeadingClick:function(link){this.$vuetify.goTo("#".concat(link.id)),this.currentlyActiveToc=link.id},toggleTocDrawer:function(){this.$store.dispatch("drawers/toggleToc")}}},w=x,C=r(42),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return e("v-row",{staticClass:"pa-0",attrs:{justify:"center",align:"center"}},[t.isMobile?e("v-app-bar",{staticStyle:{top:"56px"},attrs:{flat:"",fixed:"",dense:""}},[e("v-toolbar-title",{attrs:{id:"top-header"}},[t.article.icon?e("v-icon",[t._v(t._s(t.article.icon))]):t._e(),t._v("\n      "+t._s(t.article.title)+"\n    ")],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"ml-1",attrs:{icon:"",nuxt:""},on:{click:function(e){return e.stopPropagation(),t.toggleTocDrawer()}}},[e("v-icon",[t._v("mdi-text-search")])],1)],1):t._e(),t._v(" "),e("v-col",{class:{"pa-2":!0,"pb-12":!0,"pt-12":t.isMobile,"pt-6":!t.isMobile},attrs:{cols:"12"}},[e("v-alert",{attrs:{value:t.fallback,type:"error",text:"",outlined:"",dismissible:""}},[t._v("\n      "+t._s(t.$t("slug.fallback",[t.locale.name,t.defaultLocale.name]))+"\n    ")]),t._v(" "),t.article?e("v-card",{key:"card",staticClass:"bg-0 ml-auto mr-auto",staticStyle:{"max-width":"800px"},attrs:{flat:"",tile:""}},[t.isMobile?t._e():[e("v-card-title",{attrs:{id:"top-header"}},[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",href:t.github+"/edit/master/content"+t.article.path+".md",target:"_blank"}},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),t._v(" "),e("v-btn",{staticClass:"ml-1",attrs:{icon:"",nuxt:""},on:{click:function(e){return e.stopPropagation(),t.toggleTocDrawer()}}},[e("v-icon",[t._v("mdi-text-search")])],1)],1),t._v(" "),e("v-divider")],t._v(" "),e("v-card-text",[e("p",[t._v(t._s(t.article.description))]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),e("v-card-actions",{staticClass:"pt bt-1"},[t.prev?e("v-btn",{staticClass:"no-tt",attrs:{to:{path:t.prev.path},text:"",color:"primary"}},[e("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-arrow-left")]),t._v("\n          "+t._s(t.prev.title)+"\n        ")],1):t._e(),t._v(" "),e("v-spacer"),t._v(" "),t.next?e("v-btn",{staticClass:"no-tt",attrs:{to:{path:t.next.path},text:"",color:"primary"}},[t._v("\n          "+t._s(t.next.title)+"\n          "),e("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-arrow-right")])],1):t._e()],1)],2):t._e()],1),t._v(" "),e("resizable-drawer",{attrs:{id:"toc",side:"right",dark:t.darkmode}},[t.article?[e("v-subheader",[t._v(t._s(t.$t("toc")))]),t._v(" "),e("v-list",{staticClass:"pa-0 ml-4",attrs:{dense:""}},t._l(t.article.toc,(function(link){return e("v-list-item",{key:link.id,class:{"pl-6":3===link.depth,"static-toc":link.id!==t.currentlyActiveToc,"static-toc-active":link.id===t.currentlyActiveToc},on:{click:function(e){return t.tableOfContentsHeadingClick(link)}}},[e("v-list-item-title",{domProps:{textContent:t._s(link.text)}})],1)})),1)]:t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
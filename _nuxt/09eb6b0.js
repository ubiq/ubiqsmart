(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{463:function(t){t.exports=JSON.parse('{"bittrex":{"name":"Bittrex","url":"https://bittrex.com/Market/Index?MarketName=USDT-UBQ"},"bitz":{"name":"BitZ","url":"https://www.bitz.ai/exchange/ubq_usdt"},"dove":{"name":"Dove Wallet","url":"https://dovewallet.com/en/trade/spot/ubq-usdt"},"shinobi":{"name":"Shinobi","url":"https://shinobi-info.ubiq.ninja"}}')},467:function(t,e,r){"use strict";r.r(e);var n=r(463),l={name:"MarketCard",props:{marketId:{type:String,default:function(){return"shinobi"}}},computed:{markets:function(){return n},isMobile:function(){return this.$store.state.mobile}}},o=r(35),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mt-4 mb-6",attrs:{flat:"",outlined:"",tile:""}},[t.isMobile?[r("v-img",{staticClass:"mt-4",attrs:{src:"markets/"+t.marketId+".png",height:"125",position:"top center",contain:""}}),t._v(" "),r("v-card-subtitle",[t._t("default")],2)]:[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[r("v-img",{attrs:{src:"markets/"+t.marketId+".png"}})],1),t._v(" "),r("div",[r("v-card-subtitle",[t._t("default")],2)],1)],1)],t._v(" "),r("v-card-actions",{staticClass:"bt-1 pa-0"},[r("v-btn",{attrs:{href:t.markets[t.marketId].url,text:"",width:"100%",tile:"",color:"primary",target:"_blank"}},[t._v(t._s(t.$t("goTo",[t.markets[t.marketId].name])))])],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);
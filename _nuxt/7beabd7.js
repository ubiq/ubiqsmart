(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{538:function(t,e,r){"use strict";r.r(e);r(35);var l={name:"WalletCard",props:{walletId:{type:String,default:function(){return"sparrow"}},href:{type:String,default:function(){return""}}},data:function(){return{jpg:{sparrow:!0,ledger:!0,trezor:!0}}},computed:{ext:function(){return!0===this.jpg[this.walletId]?".jpg":".png"},isMobile:function(){return this.$store.state.mobile}},methods:{uppercase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},n=r(40),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mt-2 mb-6",attrs:{flat:"",tile:"",outlined:""}},[t.isMobile?[r("v-img",{attrs:{src:"wallets/"+t.walletId+t.ext,height:"180",position:"top center"}}),t._v(" "),r("v-card-subtitle",[t._t("default")],2)]:[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-subtitle",[t._t("default")],2)],1),t._v(" "),r("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[r("v-img",{attrs:{src:"wallets/"+t.walletId+t.ext}})],1)],1)],t._v(" "),r("v-card-actions",{staticClass:"bt-1 pa-0"},[r("v-spacer"),t._v(" "),"sparrow"===t.walletId?r("v-btn",{attrs:{to:"/sparrow",color:"primary",width:"100%",text:""}},[t._v("\n      "+t._s(t.$t("get",[t.uppercase(t.walletId)]))+"\n    ")]):r("v-btn",{attrs:{href:t.href,target:"_blank",text:"",color:"primary",width:"100%"}},[t._v("\n      "+t._s(t.$t("pyrus"===t.walletId?"goTo":"get",[t.uppercase(t.walletId)]))+"\n    ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{536:function(t){t.exports=JSON.parse('[{"name":"UbiqPool.io","url":"https://ubiqpool.io"},{"name":"WATTPOOL","url":"https://ubiq.wattpool.net"},{"name":"CrazyPool.org","url":"https://ubq.crazypool.org/"},{"name":"SoloPool","url":"https://ubq.solopool.org"},{"name":"Ubiqpro","url":"https://ubiqpro.com"}]')},540:function(t,o,r){"use strict";r.r(o);var e=r(536),l={name:"PoolsTable",methods:{shuffle:function(){for(var t,o,r=e,l=r.length;0!==l;)o=Math.floor(Math.random()*l),t=r[l-=1],r[l]=r[o],r[o]=t;return r}}},n=r(40),component=Object(n.a)(l,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-card",{attrs:{flat:"",tile:"",outlined:""}},[r("v-simple-table",{attrs:{striped:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",t._l(t.shuffle(),(function(o){return r("tr",{key:o.name},[r("td",[t._v(t._s(o.name))]),t._v(" "),r("td",[r("a",{attrs:{href:o.url,target:"_blank"}},[t._v(t._s(o.url))])])])})),0)]},proxy:!0}])})],1)}),[],!1,null,null,null);o.default=component.exports}}]);
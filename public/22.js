webpackJsonp([22],{297:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[]}},mounted:function(){var t=this;get("/sysinfo",{},function(e){t.list=e})}}},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sysinfo"},[s("div",{staticClass:"mdui-table-fluid"},[s("table",{staticClass:"mdui-table mdui-table-hoverable"},[s("thead",t._l(t.list,function(e,n,i){return s("tr",[s("td",[t._v(t._s(Object.keys(t.list)[i]))]),s("td",[t._v(t._s(e))])])}))])])])},staticRenderFns:[]}},342:function(t,e,s){var n=s(1)(s(297),s(298),!1,null,null,null);t.exports=n.exports}});
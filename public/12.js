webpackJsonp([12],{305:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],user_type:"",purse_type:"",dialog:"",dialog_list:[],dialog_keyword:{page:1,reason:""},keyword:{page:1}}},methods:{detail:function(t){this.dialog_keyword.page=1,this.dialog_keyword.reason=t,this.detail_init()},detail_search:function(t){this.dialog_keyword.page=t,this.detail_init()},detail_init:function(){var t=this;get("/report/reason_detail",t.dialog_keyword,function(e){t.dialog_list=e,setTimeout(function(){t.dialog.open()},0)})},search:function(t){this.keyword.page=t,this.init()},init:function(){var t=this;get("/report/reason",t.keyword,function(e){t.list=e.list,t.user_type=e.user_type,t.purse_type=e.purse_type})}},mounted:function(){this.dialog=new mdui.Dialog(".dialog_detail",{history:!1}),this.init()}}},306:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"report_reason"},[t._m(0),t._v(" "),o("div",{staticClass:"mdui-table-fluid"},[o("table",{staticClass:"mdui-table mdui-table-hoverable"},[t._m(1),t._v(" "),o("tbody",t._l(t.list.data,function(e,s,_){return o("tr",[o("td",{domProps:{textContent:t._s("#"+(s+1))}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.reason)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.reason_name)}}),t._v(" "),o("td",{domProps:{textContent:t._s(t.user_type[e.out_user_type_id])}}),t._v(" "),o("td",{domProps:{textContent:t._s(t.purse_type[e.out_purse_type_id])}}),t._v(" "),o("td",{domProps:{textContent:t._s(t.user_type[e.into_user_type_id])}}),t._v(" "),o("td",{domProps:{textContent:t._s(t.purse_type[e.into_purse_type_id])}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.amount)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.reason_remarks)}}),t._v(" "),o("td",[o("div",{staticClass:"mdui-btn-group"},[o("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(o){t.detail(e.reason)}}},[t._v("详情")])])])])}))])]),t._v(" "),o("div",{staticClass:"mdui-dialog dialog_detail",staticStyle:{"max-width":"none"}},[o("div",{staticClass:"mdui-dialog-title"},[t._v("\n\t\t\treason 行为流水详情\n\t\t")]),t._v(" "),o("div",{staticClass:"mdui-dialog-content",staticStyle:{height:"400px"}},[o("table",{staticClass:"mdui-table mdui-table-hoverable table-data"},[t._m(2),t._v(" "),o("tbody",t._l(t.dialog_list.data,function(e,s,_){return o("tr",[o("td",{domProps:{textContent:t._s("#"+(s+1))}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.reason)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.amount)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.out_user_id)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.out_purse_id)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.out_balance)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.into_user_id)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.into_purse_id)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.into_balance)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.parent_id)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.detail)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.remarks)}}),t._v(" "),o("td",{domProps:{textContent:t._s(e.created_at)}})])}))])]),t._v(" "),o("div",{staticClass:"mdui-dialog-actions"},[o("pagination",{attrs:{pageInfo:{total:t.dialog_list.total,current:t.dialog_list.current_page,pagenum:t.dialog_list.per_page,page:t.dialog_list.last_page,pagegroup:5,skin:"#2196F3"}},on:{change:t.detail_search}}),t._v(" "),o("a",{staticClass:"mdui-btn mdui-ripple",attrs:{"mdui-dialog-close":""}},[t._v("关闭")])],1)]),t._v(" "),o("div",{staticClass:"mdui-color-white footer"},[o("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdui-typo"},[e("blockquote",{staticClass:"blockquote_normal"},[e("p",[this._v("注：reason 行为流水统计，根据实际成功的流水计算所得")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v("reason")]),t._v(" "),o("th",[t._v("行为名称")]),t._v(" "),o("th",[t._v("出账身份类型")]),t._v(" "),o("th",[t._v("出账钱包类型")]),t._v(" "),o("th",[t._v("进账身份类型")]),t._v(" "),o("th",[t._v("进账钱包类型")]),t._v(" "),o("th",[t._v("交易金额(分)")]),t._v(" "),o("th",[t._v("备注")]),t._v(" "),o("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v("转账ID")]),t._v(" "),o("th",[t._v("转账reason代码")]),t._v(" "),o("th",[t._v("转账金额(分)")]),t._v(" "),o("th",[t._v("出账用户ID")]),t._v(" "),o("th",[t._v("出账钱包ID")]),t._v(" "),o("th",[t._v("出账后余额(分)")]),t._v(" "),o("th",[t._v("进账用户ID")]),t._v(" "),o("th",[t._v("进账钱包ID")]),t._v(" "),o("th",[t._v("进账后余额(分)")]),t._v(" "),o("th",[t._v("上级ID")]),t._v(" "),o("th",[t._v("详情")]),t._v(" "),o("th",[t._v("备注")]),t._v(" "),o("th",[t._v("创建时间")])])])}]}},346:function(t,e,o){var s=o(1)(o(305),o(306),!1,null,null,null);t.exports=s.exports}});
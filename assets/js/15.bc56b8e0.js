(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{431:function(t,s,o){},473:function(t,s,o){"use strict";var n=o(431);o.n(n).a},488:function(t,s,o){"use strict";o.r(s);o(22);var n=o(0),a=o(395),e=o(441);n.a.use(e.a);var c={components:{"s-button":a.a},data:function(){return{text1:"$toast",code1:"\n            <s-button @click=\"showToastDefault\">自动关闭</s-button>\n        <s-button @click=\"showToastNotClose\">不会自动关闭</s-button>\n\n        <script>\n        export default {\n            methods: {\n                showToastDefault() {\n                    this.$toast('2秒自动关闭',{\n                        autoClose: 2\n                    })\n                },\n                showToastNotClose() {\n                    this.$toast('我是一条不会自动关闭的消息', {\n                        autoClose: false\n                    })\n                },\n            }\n        }\n        <\/script>\n            ".replace(/^ {8}/gm,"").trim(),code2:"\n            <s-button @click=\"showToastTop\">顶部出现</s-button>\n        <s-button @click=\"showToastMiddle\">中间出现</s-button>\n        <s-button @click=\"showToastBottom\">底部出现</s-button>\n\n        <script>\n        export default {\n            methods: {\n                showToastTop() {\n                    this.$toast('顶部出现')\n                },\n                showToastMiddle() {\n                    this.$toast('中间出现', {\n                        position: 'middle'\n                    })\n                },\n                showToastBottom() {\n                    this.$toast('底部出现', {\n                        position: 'bottom'\n                    })\n                }\n            }\n        }\n        <\/script>\n            ".replace(/^ {8}/gm,"").trim(),code3:"\n        <s-button @click=\"showToastCallback\">点我试试</s-button>\n\n        <script>\n        export default {\n            methods: {\n                showToastCallback() {\n                    this.$toast('我关闭后会执行callback', {\n                        closeButton: {\n                            text: '知道了',\n                            callback() {\n                                alert('我被关闭啦~')\n                            }\n                        },\n                        autoClose: false\n                    })\n                }\n            }\n        }\n        <\/script>\n            ".replace(/^ {8}/gm,"").trim(),code4:"\n        <s-button @click=\"showToastHTML\">使用 HTML 片段</s-button>\n\n        <script>\n        export default {\n            methods: {\n                showToastHTML() {\n                    this.$toast('<strong>这是一段加粗内容</strong>', {\n                        position: 'bottom',\n                        enableHtml: true,\n                        closeButton: {\n                            text: '看到了',\n                            callback() {\n                            }\n                        },\n                        autoClose: false\n                    })\n                }\n            }\n        }\n        <\/script>\n            ".replace(/^ {8}/gm,"").trim()}},methods:{showToastDefault:function(){this.$toast("2秒自动关闭",{autoClose:2})},showToastNotClose:function(){this.$toast("我是一条不会自动关闭的消息",{autoClose:!1})},showToastTop:function(){this.$toast("顶部出现")},showToastMiddle:function(){this.$toast("中间出现",{position:"middle"})},showToastBottom:function(){this.$toast("底部出现",{position:"bottom"})},showToastCallback:function(){this.$toast("我关闭后会执行callback",{closeButton:{text:"知道了",callback:function(){alert("我被关闭啦~")}},autoClose:!1})},showToastHTML:function(){this.$toast("<strong>这是一段加粗内容</strong>",{position:"bottom",enableHtml:!0,closeButton:{text:"看到了",callback:function(){}},autoClose:!1})}}},l=(o(473),o(1)),i=Object(l.a)(c,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"toast-demo"},[o("h3",{staticClass:"section"},[t._v("基本用法")]),t._v(" "),o("p",[t._v("适用于大部分场景")]),t._v(" "),o("div",{staticClass:"demo-wrapper"},[t._m(0),t._v(" "),o("s-button",{on:{click:t.showToastDefault}},[t._v("自动关闭")]),t._v(" "),o("s-button",{on:{click:t.showToastNotClose}},[t._v("不会自动关闭")]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.code1))])])],1),t._v(" "),o("h3",{staticClass:"section"},[t._v("自定义出现位置")]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"demo-wrapper"},[o("s-button",{on:{click:t.showToastTop}},[t._v("顶部出现")]),t._v(" "),o("s-button",{on:{click:t.showToastMiddle}},[t._v("中间出现")]),t._v(" "),o("s-button",{on:{click:t.showToastBottom}},[t._v("底部出现")]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.code2))])])],1),t._v(" "),o("h3",{staticClass:"section"},[t._v("自定义关闭按钮")]),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"demo-wrapper"},[o("s-button",{on:{click:t.showToastCallback}},[t._v("点我试试")]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.code3))])])],1),t._v(" "),o("h3",{staticClass:"section"},[t._v("使用 HTML 片段")]),t._v(" "),t._m(3),t._v(" "),o("p",{staticClass:"error"},[t._v("注意：在网站上动态渲染任意 HTML 是非常危险的，用户提交的 title 内容不一定是可信的，容易导致 XSS 攻击，所以请确保渲染的内容是可信的。")]),t._v(" "),o("div",{staticClass:"demo-wrapper"},[o("s-button",{on:{click:t.showToastHTML}},[t._v("使用 HTML 片段")]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.code4))])])],1),t._v(" "),o("h3",{staticClass:"section"},[t._v("属性 Attributes")]),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("p",{staticClass:"wrapper-title"},[t._v("\n            Toast 注册了 "),o("span",{staticClass:"code"},[t._v("$toast")]),t._v(" 方法，接收一个 "),o("span",{staticClass:"code"},[t._v("title")]),t._v(" 字段和 "),o("span",{staticClass:"code"},[t._v("option")]),t._v(" \n            对象字面量，用于设置通知的标题和正文，经过一段时间后 "),o("span",{staticClass:"code"},[t._v("$toast")]),t._v(" 组件会自动关闭，\n            但是通过设置 "),o("span",{staticClass:"code"},[t._v("autoClose")]),t._v(" 可以控制关闭的时间间隔，"),o("span",{staticClass:"code"},[t._v("autoClose")]),t._v(" 如果设置为 false，则不会自动关闭。\n        ")])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("p",{staticClass:"wrapper-title"},[t._v("\n        通过 "),o("span",{staticClass:"code"},[t._v("position")]),t._v(" 字段来设置消息出现的位置，\n        有 "),o("span",{staticClass:"code"},[t._v("top")]),t._v("，"),o("span",{staticClass:"code"},[t._v("middle")]),t._v("，"),o("span",{staticClass:"code"},[t._v("bottom")]),t._v(" 三种位置，\n        如果不传则默认为 "),o("span",{staticClass:"code"},[t._v("top")]),t._v("。\n    ")])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("p",{staticClass:"wrapper-title"},[t._v("\n        通过 "),o("span",{staticClass:"code"},[t._v("closeButton")]),t._v(" 对象来设置关闭按钮的文本和关闭后执行的回调函数，\n        "),o("span",{staticClass:"code"},[t._v("closeButton")]),t._v(" 对象接受2个字段，"),o("span",{staticClass:"code"},[t._v("text")]),t._v(" 字段可以设置按钮的文本，\n        "),o("span",{staticClass:"code"},[t._v("callback")]),t._v(" 是一个可以执行回调函数，会在 "),o("span",{staticClass:"code"},[t._v("toast")]),t._v(" 关闭后执行。\n    ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"wrapper-title"},[this._v("\n        设置 "),s("span",{staticClass:"code"},[this._v("enableHtml")]),this._v(" 字段为 "),s("span",{staticClass:"code"},[this._v("true")]),this._v(" 来允许将 "),s("span",{staticClass:"code"},[this._v("title")]),this._v(" 字段渲染为 HTML，而非文本\n    ")])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[t._v("参数")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",{staticStyle:{"min-width":"110px"}},[t._v("类型")]),t._v(" "),o("th",[t._v("可选值")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("title")]),t._v(" "),o("td",[t._v("消息内容")]),t._v(" "),o("td",[t._v("string")]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("autoClose")]),t._v(" "),o("td",[t._v("是否自动关闭")]),t._v(" "),o("td",[t._v("boolean / number")]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("默认3秒自动关闭")])]),t._v(" "),o("tr",[o("td",[t._v("position")]),t._v(" "),o("td",[t._v("出现位置")]),t._v(" "),o("td",[t._v("string")]),t._v(" "),o("td",[t._v("top / middle / bottom")]),t._v(" "),o("td",[t._v("top")])]),t._v(" "),o("tr",[o("td",[t._v("closeButton")]),t._v(" "),o("td",[t._v("关闭按钮和回调函数")]),t._v(" "),o("td",[t._v("object{ text: string, callback: function }")]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("text: '关闭', callback: undefined")])]),t._v(" "),o("tr",[o("td",[t._v("enableHtml")]),t._v(" "),o("td",[t._v("是否使用 HTML 片段")]),t._v(" "),o("td",[t._v("boolean")]),t._v(" "),o("td",[t._v("true / false")]),t._v(" "),o("td",[t._v("false")])])])])}],!1,null,null,null);s.default=i.exports}}]);
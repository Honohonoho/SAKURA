(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{391:function(t,s,e){},392:function(t,s,e){},393:function(t,s,e){},394:function(t,s,e){},414:function(t,s,e){"use strict";var n=e(391);e.n(n).a},415:function(t,s,e){"use strict";var n=e(392);e.n(n).a},416:function(t,s,e){"use strict";var n=e(393);e.n(n).a},417:function(t,s,e){},418:function(t,s,e){"use strict";var n=e(394);e.n(n).a},419:function(t,s,e){},434:function(t,s,e){"use strict";var n={name:"s-footer"},a=(e(418),e(1)),o=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"s-footer"},[this._t("default")],2)},[],!1,null,null,null);s.a=o.exports},436:function(t,s,e){"use strict";e(48),e(10);var n={name:"s-layout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(s){"s-sider"===s.$options.name&&(t.layoutClass.hasSider=!0)})}},a=(e(414),e(1)),o=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"s-layout",class:{"layout-has-sider":this.layoutClass.hasSider}},[this._t("default")],2)},[],!1,null,null,null);s.a=o.exports},437:function(t,s,e){"use strict";var n={name:"s-header"},a=(e(415),e(1)),o=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"s-header"},[this._t("default")],2)},[],!1,null,null,null);s.a=o.exports},438:function(t,s,e){"use strict";var n={name:"s-content"},a=(e(416),e(1)),o=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"s-content"},[this._t("default")],2)},[],!1,null,null,null);s.a=o.exports},460:function(t,s,e){"use strict";var n=e(417);e.n(n).a},461:function(t,s,e){"use strict";var n=e(419);e.n(n).a},481:function(t,s,e){"use strict";e.r(s);e(22);var n=e(436),a=e(437),o=e(438),r={name:"s-sider"},i=(e(460),e(1)),c=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"s-sider"},[this._t("default")],2)},[],!1,null,null,null).exports,l=e(434),u={components:{"s-layout":n.a,"s-header":a.a,"s-content":o.a,"s-sider":c,"s-footer":l.a},data:function(){return{text1:"<s-layout></s-layout>",text2:"<s-header></s-header>",text3:"<s-content></s-content>",text4:"<s-sider></s-sider>",text5:"<s-footer></s-footer>",code1:"<s-layout>\n            <s-header>header</s-header>\n            <s-content>content</s-content>\n            <s-footer>footer</s-footer>\n        </s-layout>\n            ".replace(/^ {8}/gm,"").trim(),code2:"<s-layout>\n            <s-sider>side</s-sider>\n            <s-layout>\n                <s-header>header</s-header>\n                <s-content>content</s-content>\n                <s-footer>footer</s-footer>\n            </s-layout>\n        </s-layout>\n\n        <s-layout>\n            <s-header>header</s-header>\n            <s-layout>\n                <s-sider>side</s-sider>\n                <s-layout>\n                    <s-content>content</s-content>\n                    <s-footer>footer</s-footer>\n                </s-layout>\n            </s-layout>\n        </s-layout>\n            ".replace(/^ {8}/gm,"").trim()}},methods:{}},d=(e(461),Object(i.a)(u,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h2",[t._v("使用方法")]),t._v(" "),e("div",[e("p",[e("span",{staticClass:"code",domProps:{textContent:t._s(t.text1)}}),t._v("：外层容器。当子元素中包含 "),e("span",{staticClass:"code",domProps:{textContent:t._s(t.text4)}}),t._v(" 时，全部子元素会水平左右排列，否则会垂直上下排列。")]),t._v(" "),e("p",[e("span",{staticClass:"code",domProps:{textContent:t._s(t.text2)}}),t._v("：顶栏容器。")]),t._v(" "),e("p",[e("span",{staticClass:"code",domProps:{textContent:t._s(t.text3)}}),t._v("：主要内容区域容器。")]),t._v(" "),e("p",[e("span",{staticClass:"code",domProps:{textContent:t._s(t.text4)}}),t._v("：侧边栏容器。")]),t._v(" "),e("p",[e("span",{staticClass:"code",domProps:{textContent:t._s(t.text5)}}),t._v("：底栏容器。")])]),t._v(" "),e("h3",{staticClass:"section"},[t._v("上中下页面布局")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("s-layout",[e("s-header",[t._v("header")]),t._v(" "),e("s-content",[t._v("content")]),t._v(" "),e("s-footer",[t._v("footer")])],1),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-wrapper"},[e("pre",[e("code",{staticClass:"html"},[t._v(t._s(t.code1))])])])],1),t._v(" "),e("h3",{staticClass:"section"},[t._v("有侧边栏的上中下页面布局")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("p",[t._v("第一种")]),t._v(" "),e("s-layout",[e("s-sider",[t._v("side")]),t._v(" "),e("s-layout",[e("s-header",[t._v("header")]),t._v(" "),e("s-content",[t._v("content")]),t._v(" "),e("s-footer",[t._v("footer")])],1)],1),t._v(" "),e("p",[t._v("第二种")]),t._v(" "),e("s-layout",[e("s-header",[t._v("header")]),t._v(" "),e("s-layout",[e("s-sider",[t._v("side")]),t._v(" "),e("s-layout",[e("s-content",[t._v("content")]),t._v(" "),e("s-footer",[t._v("footer")])],1)],1)],1),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-wrapper"},[e("pre",[e("code",{staticClass:"html"},[t._v(t._s(t.code2))])])])],1),t._v(" "),e("h3",{staticClass:"section"},[t._v("属性 Attributes")]),t._v(" "),t._m(0)])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("布局容器组件默认没有样式，用户可以用\n        "),e("code",[t._v(".s-layout")]),t._v(", "),e("code",[t._v(".s-sider")]),t._v(", "),e("code",[t._v(".s-header")]),t._v(", "),e("code",[t._v(".s-content")]),t._v(", "),e("code",[t._v(".s-footer")]),t._v(" 类添加样式\n    ")])}],!1,null,"678ba05e",null));s.default=d.exports}}]);
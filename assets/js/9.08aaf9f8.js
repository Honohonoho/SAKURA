(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(s,t,c){"use strict";var n=c(3),o=c(14),a=c(17),v=c(67),i=c(65),l=c(6),e=c(90).f,r=c(91).f,d=c(8).f,_=c(387).trim,p=n.Number,f=p,u=p.prototype,C="Number"==a(c(66)(u)),h="trim"in String.prototype,w=function(s){var t=i(s,!1);if("string"==typeof t&&t.length>2){var c,n,o,a=(t=h?t.trim():_(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(c=t.charCodeAt(2))||120===c)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var v,l=t.slice(2),e=0,r=l.length;e<r;e++)if((v=l.charCodeAt(e))<48||v>o)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(s){var t=arguments.length<1?0:s,c=this;return c instanceof p&&(C?l(function(){u.valueOf.call(c)}):"Number"!=a(c))?v(new f(w(t)),c,p):w(t)};for(var g,m=c(7)?e(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;m.length>b;b++)o(f,g=m[b])&&!o(p,g)&&d(p,g,r(f,g));p.prototype=u,u.constructor=p,c(12)(n,"Number",p)}},387:function(s,t,c){var n=c(11),o=c(18),a=c(6),v=c(388),i="["+v+"]",l=RegExp("^"+i+i+"*"),e=RegExp(i+i+"*$"),r=function(s,t,c){var o={},i=a(function(){return!!v[s]()||"​"!="​"[s]()}),l=o[s]=i?t(d):v[s];c&&(o[c]=l),n(n.P+n.F*i,"String",o)},d=r.trim=function(s,t){return s=String(o(s)),1&t&&(s=s.replace(l,"")),2&t&&(s=s.replace(e,"")),s};s.exports=r},388:function(s,t){s.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},389:function(s,t,c){},390:function(s,t,c){},408:function(s,t,c){"use strict";var n=c(389);c.n(n).a},409:function(s,t,c){"use strict";var n=c(11),o=c(92)(!0);n(n.P,"Array",{includes:function(s){return o(this,s,arguments.length>1?arguments[1]:void 0)}}),c(94)("includes")},410:function(s,t,c){"use strict";var n=c(390);c.n(n).a},411:function(s,t,c){},433:function(s,t,c){"use strict";c(10),c(384);var n={name:"s-row",props:{gutter:{type:[Number,String]},justify:{type:String}},mounted:function(){var s=this;this.$children.forEach(function(t){t.gutter=s.gutter})},computed:{rowStyle:function(){var s=this.gutter;return{marginLeft:-s/2+"px",marginRight:-s/2+"px"}},rowClasses:function(){var s=this.justify;return[s&&"justify-".concat(s)]}}},o=(c(408),c(1)),a=Object(o.a)(n,function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"s-row",class:this.rowClasses,style:this.rowStyle},[this._t("default")],2)},[],!1,null,null,null);t.a=a.exports},435:function(s,t,c){"use strict";var n=c(9),o=(c(384),c(409),c(10),c(19),c(23),function(s){var t=Object.keys(s),c=!0,n=["span","offset"];return t.forEach(function(s){n.includes(s)||(c=!1)}),c}),a={name:"s-col",props:{span:{type:[Number,String]},offset:{type:[Number,String]},pad:{type:Object,validator:o},narrowPc:{type:Object,validator:o},pc:{type:Object,validator:o},widePc:{type:Object,validator:o}},data:function(){return{gutter:0}},computed:{colClasses:function(){var s=this.span,t=this.offset,c=this.pad,o=this.narrowPc,a=this.pc,v=this.widePc,i=this.createClasses;return Object(n.a)(i({span:s,offset:t})).concat(Object(n.a)(i(c,"pad-")),Object(n.a)(i(o,"narrow-pc-")),Object(n.a)(i(a,"pc-")),Object(n.a)(i(v,"wide-pc-")))},colStyle:function(){var s=this.gutter;return{paddingLeft:s/2+"px",paddingRight:s/2+"px"}}},methods:{createClasses:function(s){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!s)return[];var c=[];return s.span&&c.push("col-".concat(t).concat(s.span)),s.offset&&c.push("offset-".concat(t).concat(s.offset)),c}}},v=(c(410),c(1)),i=Object(v.a)(a,function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"s-col",class:this.colClasses,style:this.colStyle},[this._t("default")],2)},[],!1,null,null,null);t.a=i.exports},456:function(s,t,c){"use strict";var n=c(411);c.n(n).a},489:function(s,t,c){"use strict";c.r(t);c(22);var n=c(433),o=c(435),a={components:{"s-row":n.a,"s-col":o.a},data:function(){return{code1:'<s-row>\n            <s-col><div>12</div></s-col>\n            <s-col><div>12</div></s-col>\n        </s-row>\n        <s-row>\n            <s-col span="8"><div>8</div></s-col>\n            <s-col span="8"><div>8</div></s-col>\n            <s-col span="8"><div>8</div></s-col>\n        </s-row>\n        <s-row>\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n        </s-row>\n        <s-row>\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4"><div>4</div></s-col>\n        </s-row>\n        <s-row>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n        </s-row>\n            '.replace(/^ {8}/gm,"").trim(),code2:'<s-row gutter="10">\n            <s-col span="8"><div>8</div></s-col>\n            <s-col span="8"><div>8</div></s-col>\n            <s-col span="8"><div>8</div></s-col>\n        </s-row>\n        <s-row gutter="10">\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n        </s-row>\n            '.replace(/^ {8}/gm,"").trim(),code3:'<s-row gutter="10">\n            <s-col span="8"><div>8</div></s-col>\n            <s-col span="8" offset="8"><div>8</div></s-col>\n        </s-row>\n        <s-row gutter="10">\n            <s-col span="6"><div>6</div></s-col>\n            <s-col span="6" offset="6"><div>6</div></s-col>\n            <s-col span="6"><div>6</div></s-col>\n        </s-row>\n        <s-row gutter="10">\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4" offset="4"><div>4</div></s-col>\n            <s-col span="4"><div>4</div></s-col>\n            <s-col span="4" offset="4"><div>4</div></s-col>\n        </s-row>\n        <s-row gutter="10">\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="4"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n        </s-row>\n            '.replace(/^ {8}/gm,"").trim(),code4:'<s-row gutter="10" justify="center">\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n        </s-row>\n        <s-row justify="left">\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n        </s-row>\n        <s-row justify="space-between">\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="4"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n        </s-row>\n        <s-row justify="space-around">\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2" offset="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n            <s-col span="2"><div>2</div></s-col>\n        </s-row>\n            '.replace(/^ {8}/gm,"").trim()}},methods:{}},v=(c(456),c(1)),i=Object(v.a)(a,function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("div",[c("h2",[s._v("使用方法")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),c("h3",{staticClass:"section"},[s._v("基础用法")]),s._v(" "),c("div",{staticClass:"demo-wrapper"},[c("s-row",[c("s-col",[c("div",{staticClass:"s-col-content"},[s._v("12")])]),s._v(" "),c("s-col",[c("div",{staticClass:"s-col-content"},[s._v("12")])])],1),s._v(" "),c("s-row",[c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])]),s._v(" "),c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])]),s._v(" "),c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])])],1),s._v(" "),c("s-row",[c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])])],1),s._v(" "),c("s-row",[c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])])],1),s._v(" "),c("s-row",[c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])])],1),s._v(" "),c("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-wrapper"},[c("pre",[c("code",{staticClass:"html"},[s._v(s._s(s.code1))])])])],1),s._v(" "),c("h3",{staticClass:"section"},[s._v("设置空隙 gutter")]),s._v(" "),s._m(3),s._v(" "),c("div",{staticClass:"demo-wrapper"},[c("s-row",{attrs:{gutter:"10"}},[c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])]),s._v(" "),c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])]),s._v(" "),c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])])],1),s._v(" "),c("s-row",{attrs:{gutter:"10"}},[c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])])],1),s._v(" "),c("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-wrapper"},[c("pre",[c("code",{staticClass:"html"},[s._v(s._s(s.code2))])])])],1),s._v(" "),c("h3",{staticClass:"section"},[s._v("设置偏移 offset")]),s._v(" "),s._m(4),s._v(" "),c("div",{staticClass:"demo-wrapper"},[c("s-row",{attrs:{gutter:"10"}},[c("s-col",{attrs:{span:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])]),s._v(" "),c("s-col",{attrs:{span:"8",offset:"8"}},[c("div",{staticClass:"s-col-content"},[s._v("8")])])],1),s._v(" "),c("s-row",{attrs:{gutter:"10"}},[c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6",offset:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])]),s._v(" "),c("s-col",{attrs:{span:"6"}},[c("div",{staticClass:"s-col-content"},[s._v("6")])])],1),s._v(" "),c("s-row",{attrs:{gutter:"10"}},[c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4",offset:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])]),s._v(" "),c("s-col",{attrs:{span:"4",offset:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("4")])])],1),s._v(" "),c("s-row",{attrs:{gutter:"10"}},[c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])])],1),s._v(" "),c("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-wrapper"},[c("pre",[c("code",{staticClass:"html"},[s._v(s._s(s.code3))])])])],1),s._v(" "),c("h3",{staticClass:"section"},[s._v("设置横向对齐方式")]),s._v(" "),s._m(5),s._v(" "),c("div",{staticClass:"demo-wrapper"},[c("s-row",{attrs:{gutter:"10",justify:"center"}},[c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])])],1),s._v(" "),c("s-row",{attrs:{justify:"left"}},[c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])])],1),s._v(" "),c("s-row",{attrs:{justify:"space-between"}},[c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"4"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])])],1),s._v(" "),c("s-row",{attrs:{justify:"space-around"}},[c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2",offset:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])]),s._v(" "),c("s-col",{attrs:{span:"2"}},[c("div",{staticClass:"s-col-content"},[s._v("2")])])],1),s._v(" "),c("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-wrapper"},[c("pre",[c("code",{staticClass:"html"},[s._v(s._s(s.code4))])])])],1),s._v(" "),c("h3",{staticClass:"section"},[s._v("属性 Attributes")]),s._v(" "),s._m(6)])},[function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("p",[s._v("1. "),c("code",[s._v("s-row")]),s._v(" 在水平方向创建行，"),c("code",[s._v("s-col")]),s._v(" 作为 "),c("code",[s._v("s-row")]),s._v(" 的直接子元素插入在 "),c("code",[s._v("s-row")]),s._v(" 中。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("2. 在每个 "),t("code",[this._v("s-col")]),this._v(" 中，可以填入用户自定内容。")])},function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("p",[s._v("\n        3. 通过设置 "),c("code",[s._v("s-col")]),s._v(" 的 "),c("code",[s._v("span")]),s._v(" 参数，指定跨越的范围，其范围是1到24，\n        每个 "),c("code",[s._v("s-row")]),s._v(" 中的 "),c("code",[s._v("s-col")]),s._v(" 的 "),c("code",[s._v("span")]),s._v(" 值总和应该为24。\n    ")])},function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("p",[s._v("通过在 "),c("code",[s._v("s-row")]),s._v(" 标签上添加 "),c("code",[s._v("gutter")]),s._v(" 属性来设置空隙，其值表现为左右相邻的 "),c("code",[s._v("s-col")]),s._v(" 元素 "),c("code",[s._v("padding")]),s._v(" 之和。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("通过在 "),t("code",[this._v("s-col")]),this._v(" 标签上添加 "),t("code",[this._v("offset")]),this._v(" 属性来设置偏移")])},function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("p",[s._v("通过在 "),c("code",[s._v("s-row")]),s._v(" 标签上添加 "),c("code",[s._v("justify")]),s._v(" 属性来设置flex布局的横向对齐方式，可以配合 "),c("code",[s._v("gutter")]),s._v(" 和 "),c("code",[s._v("offset")]),s._v(" 属性使用")])},function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("table",{staticClass:"table"},[c("thead",[c("tr",[c("th",[s._v("参数")]),s._v(" "),c("th",[s._v("说明")]),s._v(" "),c("th",{staticStyle:{"min-width":"110px"}},[s._v("类型")]),s._v(" "),c("th",[s._v("可选值")]),s._v(" "),c("th",[s._v("默认值")])])]),s._v(" "),c("tbody",[c("tr",[c("td",[s._v("span")]),s._v(" "),c("td",[s._v("网格占据的列数")]),s._v(" "),c("td",[s._v("number | string")]),s._v(" "),c("td",[s._v("-")]),s._v(" "),c("td",[s._v("12")])]),s._v(" "),c("tr",[c("td",[s._v("gutter")]),s._v(" "),c("td",[s._v("网格间隔")]),s._v(" "),c("td",[s._v("number | string")]),s._v(" "),c("td",[s._v("-")]),s._v(" "),c("td",[s._v("0")])]),s._v(" "),c("tr",[c("td",[s._v("offset")]),s._v(" "),c("td",[s._v("网格左侧的偏移格数")]),s._v(" "),c("td",[s._v("number | string")]),s._v(" "),c("td",[s._v("-")]),s._v(" "),c("td",[s._v("0")])]),s._v(" "),c("tr",[c("td",[s._v("justify")]),s._v(" "),c("td",[s._v("网格 flex 布局下的水平排列方式")]),s._v(" "),c("td",[s._v("string")]),s._v(" "),c("td",[s._v("start/end/center/space-around/space-between")]),s._v(" "),c("td",[s._v("start")])])])])}],!1,null,"4ccdb4e4",null);t.default=i.exports}}]);
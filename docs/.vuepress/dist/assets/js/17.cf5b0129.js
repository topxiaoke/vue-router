(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{235:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("ul",[t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("li",[t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),s("p",[t._v("查看更多关于激活链接类名的例子"),s("a",{attrs:{href:"https://jsfiddle.net/8xrk1n9f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("可运行"),s("OutboundLink")],1)])]),t._m(15),t._m(16)]),t._m(17),t._m(18),t._m(19),t._m(20)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"router-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-link","aria-hidden":"true"}},[this._v("#")]),a("code",[this._v("<router-link>")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("<router-link>")]),t._v(" 组件支持用户在具有路由功能的应用中 (点击) 导航。\n通过 "),s("code",[t._v("to")]),t._v(" 属性指定目标地址，默认渲染成带有正确链接的 "),s("code",[t._v("<a>")]),t._v(" 标签，可以通过配置 "),s("code",[t._v("tag")]),t._v(" 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("<router-link>")]),this._v(" 比起写死的 "),a("code",[this._v('<a href="...">')]),this._v(" 会好一些，理由如下：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("p",[t._v("无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。")])]),s("li",[s("p",[t._v("在 HTML5 history 模式下，"),s("code",[t._v("router-link")]),t._v("  会守卫点击事件，让浏览器不再重新加载页面。")])]),s("li",[s("p",[t._v("当你在 HTML5 history 模式下使用 "),s("code",[t._v("base")]),t._v(" 选项之后，所有的 "),s("code",[t._v("to")]),t._v(" 属性都不需要写 (基路径) 了。")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",[s("strong",[t._v("to")])]),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("string | Location")])])]),s("li",[s("p",[t._v("required")])])]),s("p",[t._v("表示目标路由的链接。当被点击后，内部会立刻把 "),s("code",[t._v("to")]),t._v(" 的值传到 "),s("code",[t._v("router.push()")]),t._v("，所以这个值可以是一个字符串或者是描述目标位置的对象。")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 字符串 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("home"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 渲染结果 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("home"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 使用 v-bind 的 JS 表达式 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("home"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 不写 v-bind 也可以，就像绑定别的属性一样 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("home"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 同上 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("home"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 命名的路由 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ name: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("user"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", params: { userId: 123 }}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("User"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 带查询参数，下面的结果为 /register?plan=private --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("register"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", query: { plan: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("private"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" }}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Register"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",[s("strong",[t._v("replace")])]),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("boolean")])])]),s("li",[s("p",[t._v("默认值: "),s("code",[t._v("false")])])])]),s("p",[t._v("设置 "),s("code",[t._v("replace")]),t._v(" 属性的话，当点击时，会调用 "),s("code",[t._v("router.replace()")]),t._v(" 而不是 "),s("code",[t._v("router.push()")]),t._v("，于是导航后不会留下 history 记录。")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/abc"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("replace")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",[s("strong",[t._v("append")])]),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("boolean")])])]),s("li",[s("p",[t._v("默认值: "),s("code",[t._v("false")])])])]),s("p",[t._v("设置 "),s("code",[t._v("append")]),t._v(" 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 "),s("code",[t._v("/a")]),t._v(" 导航到一个相对路径 "),s("code",[t._v("b")]),t._v("，如果没有配置 "),s("code",[t._v("append")]),t._v("，则路径为 "),s("code",[t._v("/b")]),t._v("，如果配了，则为 "),s("code",[t._v("/a/b")])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("relative/path"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("append")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",[s("strong",[t._v("tag")])]),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("string")])])]),s("li",[s("p",[t._v("默认值: "),s("code",[t._v('"a"')])])])]),s("p",[t._v("有时候想要  "),s("code",[t._v("<router-link>")]),t._v(" 渲染成某种标签，例如 "),s("code",[t._v("<li>")]),t._v("。\n于是我们使用 "),s("code",[t._v("tag")]),t._v(" prop 类指定何种标签，同样它还是会监听点击，触发导航。")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/foo"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("li"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("foo"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 渲染结果 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("foo"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",[s("strong",[t._v("active-class")])]),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("string")])])]),s("li",[s("p",[t._v("默认值: "),s("code",[t._v('"router-link-active"')])])])]),s("p",[t._v("设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 "),s("code",[t._v("linkActiveClass")]),t._v(" 来全局配置。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("exact")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("p",[this._v("类型: "),a("code",[this._v("boolean")])])]),a("li",[a("p",[this._v("默认值: "),a("code",[this._v("false")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v('"是否激活" 默认类名的依据是 '),a("strong",[this._v("inclusive match")]),this._v(" (全包含匹配)。\n举个例子，如果当前的路径是 "),a("code",[this._v("/a")]),this._v(" 开头的，那么 "),a("code",[this._v('<router-link to="/a">')]),this._v(" 也会被设置 CSS 类名。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("按照这个规则，每个路由都会激活"),a("code",[this._v('<router-link to="/">')]),this._v('！想要链接使用 "exact 匹配模式"，则使用 '),a("code",[this._v("exact")]),this._v(" 属性：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 这个链接只会在地址为 / 的时候被激活 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("exact")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[a("strong",[this._v("event")])]),a("blockquote",[a("p",[this._v("2.1.0+")])]),a("ul",[a("li",[a("p",[this._v("类型: "),a("code",[this._v("string | Array<string>")])])]),a("li",[a("p",[this._v("默认值: "),a("code",[this._v("'click'")])])])]),a("p",[this._v("声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",[s("strong",[t._v("exact-active-class")])]),s("blockquote",[s("p",[t._v("2.5.0+")])]),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("string")])])]),s("li",[s("p",[t._v("默认值: "),s("code",[t._v('"router-link-exact-active"')])])])]),s("p",[t._v("配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 "),s("code",[t._v("linkExactActiveClass")]),t._v(" 进行全局配置的。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"将激活-class-应用在外层元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将激活-class-应用在外层元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 将激活 class 应用在外层元素")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("有时候我们要让激活 class 应用在外层元素，而不是 "),a("code",[this._v("<a>")]),this._v(" 标签本身，那么可以用 "),a("code",[this._v("<router-link>")]),this._v(" 渲染外层元素，包裹着内层的原生 "),a("code",[this._v("<a>")]),this._v(" 标签：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("li"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/foo"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/foo"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在这种情况下，"),a("code",[this._v("<a>")]),this._v(" 将作为真实的链接 (它会获得正确的 "),a("code",[this._v("href")]),this._v(' 的)，而 "激活时的CSS类名" 则设置到外层的 '),a("code",[this._v("<li>")]),this._v("。")])}],!1,null,null,null);a.default=e.exports}}]);
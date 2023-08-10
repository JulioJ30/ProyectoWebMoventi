/*
 * pagination.js 2.5.0
 * A jQuery plugin to provide simple yet fully customisable pagination
 * https://github.com/superRaytin/paginationjs

 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
*/
!function (n, c) { void 0 === c && l("Pagination requires jQuery."); var r = "pagination", s = "__pagination-", I = (c.fn.pagination && l('plugin conflicted, the name "pagination" has been taken by another jQuery plugin.'), c.fn[r] = function (a) { if (void 0 !== a) { var t, u = c(this), D = c.extend({}, c.fn[r].defaults, a), e = { initialize: function () { var e, t = this; u.data("pagination") || u.data("pagination", {}), !1 !== t.callHook("beforeInit") && (u.data("pagination").initialized && c(".paginationjs", u).remove(), t.disabled = !!D.disabled, e = t.model = { pageRange: D.pageRange, pageSize: D.pageSize }, t.parseDataSource(D.dataSource, function (a) { t.isAsync = I.isString(a), I.isArray(a) && (e.totalNumber = D.totalNumber = a.length), t.isDynamicTotalNumber = t.isAsync && D.totalNumberLocator; a = t.render(!0); D.className && a.addClass(D.className), e.el = a, u["bottom" === D.position ? "append" : "prepend"](a), t.observer(), u.data("pagination").initialized = !0, t.callHook("afterInit", a) })) }, render: function (a) { var e = this, t = e.model, o = t.el || c('<div class="paginationjs"></div>'), a = !0 !== a, t = (e.callHook("beforeRender", a), t.pageNumber || D.pageNumber), i = D.pageRange || 0, n = e.getTotalPage(), r = t - i, s = t + i; return (r = n < s ? (r = (s = n) - 2 * i) < 1 ? 1 : r : r) <= 1 && (r = 1, s = Math.min(2 * i + 1, n)), o.html(e.generateHTML({ currentPage: t, pageRange: i, rangeStart: r, rangeEnd: s })), D.hideOnlyOnePage && o[n <= 1 ? "hide" : "show"](), e.callHook("afterRender", a), o }, getPageLinkTag: function (a) { var e = D.pageLink; return e ? `<a href="${e}">${a}</a>` : `<a>${a}</a>` }, generatePageNumbersHTML: function (a) { var e, t = a.currentPage, o = this.getTotalPage(), i = this.getPageLinkTag, n = a.rangeStart, r = a.rangeEnd, s = "", a = D.ellipsisText, l = D.classPrefix, u = D.pageClassName || "", c = D.activeClassName || "", g = D.disableClassName || ""; if (null === D.pageRange) for (e = 1; e <= o; e++)s += e == t ? `<li class="${l}-page J-paginationjs-page ${u} ${c}" data-num="${e}"><a>${e}</a></li>` : `<li class="${l}-page J-paginationjs-page ${u}" data-num="${e}">${i(e)}</li>`; else { if (n <= 3) for (e = 1; e < n; e++)s += e == t ? `<li class="${l}-page J-paginationjs-page ${u} ${c}" data-num="${e}"><a>${e}</a></li>` : `<li class="${l}-page J-paginationjs-page ${u}" data-num="${e}">${i(e)}</li>`; else D.hideFirstOnEllipsisShow || (s += `<li class="${l}-page ${l}-first J-paginationjs-page ${u}" data-num="1">${i(1)}</li>`), s += `<li class="${l}-ellipsis ${g}"><a>${a}</a></li>`; for (e = n; e <= r; e++)s += e == t ? `<li class="${l}-page J-paginationjs-page ${u} ${c}" data-num="${e}"><a>${e}</a></li>` : `<li class="${l}-page J-paginationjs-page ${u}" data-num="${e}">${i(e)}</li>`; if (o - 2 <= r) for (e = r + 1; e <= o; e++)s += `<li class="${l}-page J-paginationjs-page ${u}" data-num="${e}">${i(e)}</li>`; else s += `<li class="${l}-ellipsis ${g}"><a>${a}</a></li>`, D.hideLastOnEllipsisShow || (s += `<li class="${l}-page ${l}-last J-paginationjs-page ${u}" data-num="${o}">${i(o)}</li>`) } return s }, generateHTML: function (a) { var e, t = this, o = a.currentPage, i = t.getTotalPage(), n = t.getPageLinkTag, r = t.getTotalNumber(), s = D.pageSize, l = D.showPrevious, u = D.showNext, c = D.showPageNumbers, g = D.showNavigator, p = D.showSizeChanger, f = D.sizeChangerOptions, d = D.showGoInput, m = D.showGoButton, b = D.prevText, h = D.nextText, v = D.goButtonText, N = D.classPrefix, y = D.disableClassName || "", $ = D.ulClassName || "", k = D.prevClassName || "", P = D.nextClassName || "", x = "", j = '<select class="J-paginationjs-size-select">', S = '<input type="text" class="J-paginationjs-go-pagenumber">', v = `<input type="button" class="J-paginationjs-go-button" value="${v}">`, T = "function" == typeof D.formatSizeChanger ? D.formatSizeChanger(o, i, r) : D.formatSizeChanger, C = "function" == typeof D.formatNavigator ? D.formatNavigator(o, i, r) : D.formatNavigator, H = "function" == typeof D.formatGoInput ? D.formatGoInput(S, o, i, r) : D.formatGoInput, w = "function" == typeof D.formatGoButton ? D.formatGoButton(v, o, i, r) : D.formatGoButton, O = "function" == typeof D.autoHidePrevious ? D.autoHidePrevious() : D.autoHidePrevious, z = "function" == typeof D.autoHideNext ? D.autoHideNext() : D.autoHideNext, L = "function" == typeof D.header ? D.header(o, i, r) : D.header, J = "function" == typeof D.footer ? D.footer(o, i, r) : D.footer; if (L && (x += e = t.replaceVariables(L, { currentPage: o, totalPage: i, totalNumber: r })), g && C && (x += `<div class="${N}-nav J-paginationjs-nav">${e = t.replaceVariables(C, { currentPage: o, totalPage: i, totalNumber: r, rangeStart: (o - 1) * s + 1, rangeEnd: Math.min(o * s, r) })}</div>`), (l || c || u) && (x = x + '<div class="paginationjs-pages">' + ($ ? `<ul class="${$}">` : "<ul>"), l && (o <= 1 ? O || (x += `<li class="${N}-prev ${y} ${k}"><a>${b}</a></li>`) : x += `<li class="${N}-prev J-paginationjs-previous ${k}" data-num="${o - 1}" title="Previous page">${n(b)}</li>`), c && (x += t.generatePageNumbersHTML(a)), u && (i <= o ? z || (x += `<li class="${N}-next ${y} ${P}"><a>${h}</a></li>`) : x += `<li class="${N}-next J-paginationjs-next ${P}" data-num="${o + 1}" title="Next page">${n(h)}</li>`), x += "</ul></div>"), p && I.isArray(f)) { -1 === f.indexOf(s) && (f.unshift(s), f.sort((a, e) => a - e)); for (let a = 0; a < f.length; a++)j += `<option value="${f[a]}"${f[a] === s ? " selected" : ""}>${f[a]} / page</option>`; e = j += "</select>", x += `<div class="paginationjs-size-changer">${e = T ? t.replaceVariables(T, { length: j, total: r }) : e}</div>` } return d && H && (x += `<div class="${N}-go-input">${e = t.replaceVariables(H, { currentPage: o, totalPage: i, totalNumber: r, input: S })}</div>`), m && w && (x += `<div class="${N}-go-button">${e = t.replaceVariables(w, { currentPage: o, totalPage: i, totalNumber: r, button: v })}</div>`), J && (x += e = t.replaceVariables(J, { currentPage: o, totalPage: i, totalNumber: r })), x }, findTotalNumberFromRemoteResponse: function (a) { this.model.totalNumber = D.totalNumberLocator(a) }, go: function (a, t) { var e, o, i, n, r = this, s = r.model; function l(a) { var e; !1 !== r.callHook("beforePaging", n) && (s.direction = void 0 === s.pageNumber ? 0 : n > s.pageNumber ? 1 : -1, s.pageNumber = n, r.render(), r.disabled && r.isAsync && r.enable(), u.data("pagination").model = s, D.formatResult && (e = c.extend(!0, [], a), I.isArray(a = D.formatResult(e)) || (a = e)), u.data("pagination").currentPageData = a, r.doCallback(a, t), r.callHook("afterPaging", n), 1 == n ? r.callHook("afterIsFirstPage") : n == r.getTotalPage() && r.callHook("afterIsLastPage")) } r.disabled || (n = a, !(n = parseInt(n))) || n < 1 || (a = D.pageSize, o = r.getTotalNumber(), i = r.getTotalPage(), 0 < o && i < n) || (r.isAsync ? (i = (o = D.alias || {}).pageSize || "pageSize", o = o.pageNumber || "pageNumber", (e = {})[i] = a, e[o] = n, (i = "function" == typeof D.ajax ? D.ajax() : D.ajax) && i.pageNumberStartWithZero && (e[o] = n - 1, delete i.pageNumberStartWithZero), c.extend(!0, a = { type: "get", cache: !1, data: {}, contentType: "application/x-www-form-urlencoded; charset=UTF-8", dataType: "json", async: !0 }, i), c.extend(a.data, e), a.url = D.dataSource, a.success = function (a) { r.model.originalResponse = a, r.isDynamicTotalNumber ? r.findTotalNumberFromRemoteResponse(a) : r.model.totalNumber = D.totalNumber, l(r.filterDataWithLocator(a)) }, a.error = function (a, e, t) { D.formatAjaxError && D.formatAjaxError(a, e, t), r.enable() }, r.disable(), D.ajaxFunction ? D.ajaxFunction(a) : c.ajax(a)) : l(r.getPagingData(n))) }, doCallback: function (a, e) { var t = this.model; "function" == typeof e ? e(a, t) : "function" == typeof D.callback && D.callback(a, t) }, destroy: function () { !1 !== this.callHook("beforeDestroy") && (this.model.el.remove(), u.off(), c("#paginationjs-style").remove(), this.callHook("afterDestroy")) }, previous: function (a) { this.go(this.model.pageNumber - 1, a) }, next: function (a) { this.go(this.model.pageNumber + 1, a) }, disable: function () { var a = this, e = a.isAsync ? "async" : "sync"; !1 !== a.callHook("beforeDisable", e) && (a.disabled = !0, a.model.disabled = !0, a.callHook("afterDisable", e)) }, enable: function () { var a = this, e = a.isAsync ? "async" : "sync"; !1 !== a.callHook("beforeEnable", e) && (a.disabled = !1, a.model.disabled = !1, a.callHook("afterEnable", e)) }, refresh: function (a) { this.go(this.model.pageNumber, a) }, show: function () { this.model.el.is(":visible") || this.model.el.show() }, hide: function () { this.model.el.is(":visible") && this.model.el.hide() }, replaceVariables: function (a, e) { for (var t in e) var o = e[t], t = new RegExp("<%=\\s*" + t + "\\s*%>", "img"), i = (i || a).replace(t, o); return i }, getPagingData: function (a) { var e = D.pageSize, t = D.dataSource, o = this.getTotalNumber(), i = e * (a - 1) + 1, a = Math.min(a * e, o); return t.slice(i - 1, a) }, getTotalNumber: function () { return this.model.totalNumber || D.totalNumber || 0 }, getTotalPage: function () { return Math.ceil(this.getTotalNumber() / D.pageSize) }, getLocator: function (a) { var e; return "string" == typeof a ? e = a : "function" == typeof a ? e = a() : l('"locator" is incorrect. Expect string or function type.'), e }, filterDataWithLocator: function (t) { var o, a = this.getLocator(D.locator); if (I.isObject(t)) { try { c.each(a.split("."), function (a, e) { o = (o || t)[e] }) } catch (a) { } o ? I.isArray(o) || l("dataSource." + a + " should be an Array.") : l("dataSource." + a + " is undefined.") } return o || t }, parseDataSource: function (a, e) { var t = this; I.isObject(a) ? e(D.dataSource = t.filterDataWithLocator(a)) : I.isArray(a) ? e(D.dataSource = a) : "function" == typeof a ? D.dataSource(function (a) { I.isArray(a) || l('The parameter of "done" Function should be an Array.'), t.parseDataSource.call(t, a, e) }) : "string" == typeof a ? (/^https?|file:/.test(a) && (D.ajaxDataType = "jsonp"), e(a)) : l("Unexpected dataSource type") }, callHook: function (a) { var t, e = u.data("pagination") || {}, o = Array.prototype.slice.apply(arguments); return o.shift(), D[a] && "function" == typeof D[a] && !1 === D[a].apply(n, o) && (t = !1), e.hooks && e.hooks[a] && c.each(e.hooks[a], function (a, e) { !1 === e.apply(n, o) && (t = !1) }), !1 !== t }, observer: function () { var o = this, t = o.model.el, a = (u.on(s + "go", function (a, e, t) { (e = "string" == typeof e ? parseInt(e.trim()) : e) && ("number" != typeof e && l('"pageNumber" is incorrect. (Number)'), o.go(e, t)) }), t.on("click", ".J-paginationjs-page", function (a) { var e = c(a.currentTarget), t = e.attr("data-num").trim(); if (t && !e.hasClass(D.disableClassName) && !e.hasClass(D.activeClassName)) return !1 !== o.callHook("beforePageOnClick", a, t) && (o.go(t), o.callHook("afterPageOnClick", a, t), !!D.pageLink) && void 0 }), t.on("click", ".J-paginationjs-previous", function (a) { var e = c(a.currentTarget), t = e.attr("data-num").trim(); if (t && !e.hasClass(D.disableClassName)) return !1 !== o.callHook("beforePreviousOnClick", a, t) && (o.go(t), o.callHook("afterPreviousOnClick", a, t), !!D.pageLink) && void 0 }), t.on("click", ".J-paginationjs-next", function (a) { var e = c(a.currentTarget), t = e.attr("data-num").trim(); if (t && !e.hasClass(D.disableClassName)) return !1 !== o.callHook("beforeNextOnClick", a, t) && (o.go(t), o.callHook("afterNextOnClick", a, t), !!D.pageLink) && void 0 }), t.on("click", ".J-paginationjs-go-button", function (a) { var e = c(".J-paginationjs-go-pagenumber", t).val(); if (!1 === o.callHook("beforeGoButtonOnClick", a, e)) return !1; u.trigger(s + "go", e), o.callHook("afterGoButtonOnClick", a, e) }), t.on("keyup", ".J-paginationjs-go-pagenumber", function (a) { if (13 === a.which) { var e = c(a.currentTarget).val(); if (!1 === o.callHook("beforeGoInputOnEnter", a, e)) return !1; u.trigger(s + "go", e), c(".J-paginationjs-go-pagenumber", t).focus(), o.callHook("afterGoInputOnEnter", a, e) } }), t.on("change", ".J-paginationjs-size-select", function (a) { var e = c(a.currentTarget), e = parseInt(e.val()), t = o.model.pageNumber || D.pageNumber; if ("number" == typeof e) return !1 !== o.callHook("beforeSizeSelectorChange", a, e) && (D.pageSize = e, o.model.pageSize = e, o.model.totalPage = o.getTotalPage(), t > o.model.totalPage && (t = o.model.totalPage), o.go(t), o.callHook("afterSizeSelectorChange", a, e), !!D.pageLink) && void 0 }), u.on(s + "previous", function (a, e) { o.previous(e) }), u.on(s + "next", function (a, e) { o.next(e) }), u.on(s + "disable", function () { o.disable() }), u.on(s + "enable", function () { o.enable() }), u.on(s + "refresh", function (a, e) { o.refresh(e) }), u.on(s + "show", function () { o.show() }), u.on(s + "hide", function () { o.hide() }), u.on(s + "destroy", function () { o.destroy() }), Math.max(o.getTotalPage(), 1)), e = D.pageNumber; o.isDynamicTotalNumber && D.resetPageNumberOnInit && (e = 1), D.triggerPagingOnInit && u.trigger(s + "go", Math.min(e, a)) } }; if (u.data("pagination") && !0 === u.data("pagination").initialized) { if (g(a)) return u.trigger.call(this, s + "go", a, arguments[1]), this; if ("string" == typeof a) { var o = Array.prototype.slice.apply(arguments); switch (o[0] = s + o[0], a) { case "previous": case "next": case "go": case "disable": case "enable": case "refresh": case "show": case "hide": case "destroy": u.trigger.apply(this, o); break; case "getSelectedPageNum": case "getCurrentPageNum": return (u.data("pagination").model ? u.data("pagination").model : u.data("pagination").attributes).pageNumber; case "getTotalPage": return Math.ceil(u.data("pagination").model.totalNumber / u.data("pagination").model.pageSize); case "getSelectedPageData": case "getCurrentPageData": return u.data("pagination").currentPageData; case "isDisabled": return !0 === u.data("pagination").model.disabled; default: l("Unknown action: " + a) }return this } t = u, c.each(["go", "previous", "next", "disable", "enable", "refresh", "show", "hide", "destroy"], function (a, e) { t.off(s + e) }), t.data("pagination", {}), c(".paginationjs", t).remove() } else I.isObject(a) || l("Illegal options"); var i = D; i.dataSource || l('"dataSource" is required.'), "string" == typeof i.dataSource ? void 0 === i.totalNumberLocator ? void 0 === i.totalNumber ? l('"totalNumber" is required.') : g(i.totalNumber) || l('"totalNumber" is incorrect. Expect numberic type') : "function" != typeof i.totalNumberLocator && l('"totalNumberLocator" should be a Function.') : I.isObject(i.dataSource) && (void 0 === i.locator ? l('"dataSource" is an Object, please specify a "locator".') : "string" != typeof i.locator && "function" != typeof i.locator && l(i.locator + " is incorrect. Expect string or function type")), void 0 !== i.formatResult && "function" != typeof i.formatResult && l('"formatResult" should be a Function.'), e.initialize() } return this }, c.fn[r].defaults = { totalNumber: 0, pageNumber: 1, pageSize: 10, pageRange: 2, showPrevious: !0, showNext: !0, showPageNumbers: !0, showNavigator: !1, showGoInput: !1, showGoButton: !1, showSizeChanger: !1, sizeChangerOptions: [10, 20, 50, 100], pageLink: "", prevText: "&lsaquo;", nextText: "&rsaquo;", ellipsisText: "...", goButtonText: "Go", classPrefix: "paginationjs", activeClassName: "active", disableClassName: "disabled", formatNavigator: "Total <%= totalNumber %> items", formatGoInput: "<%= input %>", formatGoButton: "<%= button %>", position: "bottom", autoHidePrevious: !1, autoHideNext: !1, triggerPagingOnInit: !0, resetPageNumberOnInit: !0, hideOnlyOnePage: !1, hideFirstOnEllipsisShow: !1, hideLastOnEllipsisShow: !1, callback: function () { } }, c.fn.addHook = function (a, e) { arguments.length < 2 && l("Expect 2 arguments at least."), "function" != typeof e && l("callback should be a function."); var t = c(this), o = t.data("pagination"); o || (t.data("pagination", {}), o = t.data("pagination")), o.hooks || (o.hooks = {}), o.hooks[a] = o.hooks[a] || [], o.hooks[a].push(e) }, c[r] = function (a, e) { var t; if (arguments.length < 2 && l("Requires two parameters."), (t = "string" != typeof a && a instanceof jQuery ? a : c(a)).length) return t.pagination(e), t }, {}); function l(a) { throw new Error("Pagination: " + a) } function g(a) { return !isNaN(parseFloat(a)) && isFinite(a) } c.each(["Object", "Array", "String"], function (a, t) { I["is" + t] = function (a) { return ("object" == (e = typeof (a = a)) ? null == a ? "null" : Object.prototype.toString.call(a).slice(8, -1) : e).toLowerCase() === t.toLowerCase(); var e } }), "function" == typeof define && define.amd && define(function () { return c }) }(this, window.jQuery);
(function (t) {
    function e(e) {
        for (var a, r, o = e[0], s = e[1], u = e[2], d = 0, p = []; d < o.length; d++) r = o[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && p.push(i[r][0]), i[r] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
        l && l(e);
        while (p.length) p.shift()();
        return c.push.apply(c, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < c.length; e++) {
            for (var n = c[e], a = !0, r = 1; r < n.length; r++) {
                var o = n[r];
                0 !== i[o] && (a = !1)
            }
            a && (c.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }
    var a = {},
        r = {
            app: 0
        },
        i = {
            app: 0
        },
        c = [];

    function o(t) {
        return s.p + "js/" + ({} [t] || t) + "." + {
            "chunk-145fc15a": "3d28a7d5",
            "chunk-1c9aac85": "003cf372",
            "chunk-4b5a13d4": "eb92716a",
            "chunk-5a909034": "923e4775",
            "chunk-67123ac0": "1fc55f79",
            "chunk-dda1a9c8": "9a7d0c93",
            "chunk-63e140da": "e6adea0e",
            "chunk-65bcb87b": "4a23cb3e",
            "chunk-3615057c": "fc2cd69a",
            "chunk-4396b721": "6a7e0b19",
            "chunk-70d800fc": "dad27529",
            "chunk-765cf474": "5606caec",
            "chunk-5b4e1c32": "3f4e5b3a",
            "chunk-6c7518a4": "0bc8995e",
            "chunk-7b0b2e00": "90998fa0",
            "chunk-5d756851": "116ead38",
            "chunk-829c8686": "51954c33",
            "chunk-cdd35518": "2f343d23",
            "chunk-969eba30": "abe2ac2e",
            "chunk-13410d54": "e658b7f2",
            "chunk-0386e6a6": "7d7ec907",
            "chunk-70a54478": "ec32b584",
            "chunk-1a0adcaf": "29df0f57",
            "chunk-9b02d906": "cb10216c"
        } [t] + ".js"
    }

    function s(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function (t) {
        var e = [],
            n = {
                "chunk-145fc15a": 1,
                "chunk-1c9aac85": 1,
                "chunk-4b5a13d4": 1,
                "chunk-5a909034": 1,
                "chunk-67123ac0": 1,
                "chunk-dda1a9c8": 1,
                "chunk-63e140da": 1,
                "chunk-65bcb87b": 1,
                "chunk-3615057c": 1,
                "chunk-4396b721": 1,
                "chunk-70d800fc": 1,
                "chunk-765cf474": 1,
                "chunk-5b4e1c32": 1,
                "chunk-6c7518a4": 1,
                "chunk-7b0b2e00": 1,
                "chunk-5d756851": 1,
                "chunk-829c8686": 1,
                "chunk-cdd35518": 1,
                "chunk-969eba30": 1,
                "chunk-13410d54": 1,
                "chunk-0386e6a6": 1,
                "chunk-70a54478": 1,
                "chunk-1a0adcaf": 1,
                "chunk-9b02d906": 1
            };
        r[t] ? e.push(r[t]) : 0 !== r[t] && n[t] && e.push(r[t] = new Promise((function (e, n) {
            for (var a = "css/" + ({} [t] || t) + "." + {
                    "chunk-145fc15a": "1b67ffa2",
                    "chunk-1c9aac85": "6b6d5c25",
                    "chunk-4b5a13d4": "3f8963c4",
                    "chunk-5a909034": "8151e609",
                    "chunk-67123ac0": "85014169",
                    "chunk-dda1a9c8": "7435adc7",
                    "chunk-63e140da": "5e392426",
                    "chunk-65bcb87b": "72c1b2d7",
                    "chunk-3615057c": "844132a4",
                    "chunk-4396b721": "1b668348",
                    "chunk-70d800fc": "0d87ca7b",
                    "chunk-765cf474": "51395256",
                    "chunk-5b4e1c32": "060d88d3",
                    "chunk-6c7518a4": "7632c756",
                    "chunk-7b0b2e00": "911c65be",
                    "chunk-5d756851": "2b7320d5",
                    "chunk-829c8686": "d075d338",
                    "chunk-cdd35518": "e9386622",
                    "chunk-969eba30": "86c08dd5",
                    "chunk-13410d54": "6f06fed3",
                    "chunk-0386e6a6": "3d8e0d2a",
                    "chunk-70a54478": "ef1dcfee",
                    "chunk-1a0adcaf": "cdaee543",
                    "chunk-9b02d906": "c670f9ff"
                } [t] + ".css", i = s.p + a, c = document.getElementsByTagName("link"), o = 0; o < c.length; o++) {
                var u = c[o],
                    d = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (d === a || d === i)) return e()
            }
            var p = document.getElementsByTagName("style");
            for (o = 0; o < p.length; o++) {
                u = p[o], d = u.getAttribute("data-href");
                if (d === a || d === i) return e()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet", l.type = "text/css", l.onload = e, l.onerror = function (e) {
                var a = e && e.target && e.target.src || i,
                    c = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED", c.request = a, delete r[t], l.parentNode.removeChild(l), n(c)
            }, l.href = i;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(l)
        })).then((function () {
            r[t] = 0
        })));
        var a = i[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var c = new Promise((function (e, n) {
                    a = i[t] = [e, n]
                }));
                e.push(a[2] = c);
                var u, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.src = o(t);
                var p = new Error;
                u = function (e) {
                    d.onerror = d.onload = null, clearTimeout(l);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var a = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            p.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")", p.name = "ChunkLoadError", p.type = a, p.request = r, n[1](p)
                        }
                        i[t] = void 0
                    }
                };
                var l = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = u, document.head.appendChild(d)
            } return Promise.all(e)
    }, s.m = t, s.c = a, s.d = function (t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) s.d(n, a, function (e) {
                return t[e]
            }.bind(null, a));
        return n
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "https://cmsstaticv2.ffquan.cn/pc/", s.oe = function (t) {
        throw console.error(t), t
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var p = 0; p < u.length; p++) e(u[p]);
    var l = d;
    c.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    },
    1: function (t, e) {},
    "19da": function (t, e, n) {
        "use strict";
        n("389c")
    },
    "1dd6": function (t, e, n) {
        "use strict";
        n("fa03")
    },
    2194: function (t, e, n) {
        "use strict";
        n("ca6a")
    },
    2395: function (t, e, n) {},
    "28b0": function (t, e, n) {
        "use strict";
        var a = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("i", {
                    class: "iconfont " + t.type + " " + (t.className ? t.className : ""),
                    style: "" + (t.styles ? t.styles : "")
                })
            },
            r = [],
            i = {
                name: "icon-font",
                props: {
                    type: String,
                    className: String,
                    styles: String
                }
            },
            c = i,
            o = (n("19da"), n("2877")),
            s = Object(o["a"])(c, a, r, !1, null, "f0f45c4c", null);
        e["a"] = s.exports
    },
    "389c": function (t, e, n) {},
    "4e80": function (t, e, n) {},
    "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5530"),
            r = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("ac1f"), n("466d"), n("99af"), n("caad"), n("2532"), n("1276"), n("841c"), n("2a80")),
            i = n.n(r),
            c = n("4328"),
            o = n.n(c),
            s = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app",
                        "bi-route": t.$route.meta && t.$route.meta.eventId || null
                    }
                }, [n("headers"), n("div", {
                    staticClass: "mian"
                }, [n("router-view")], 1), n("footers"), t.isShowScrollTop ? n("scroll-top") : t._e()], 1)
            },
            u = [],
            d = (n("e9c4"), n("2f62")),
            p = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.isNavActive(t.nav[0]) && t.isShowAct && t.marketGroup.top_banner && t.marketGroup.top_banner.length > 0 ? n("div", {
                    staticClass: "act_top",
                    attrs: {
                        "bi-route": "chuchuang"
                    }
                }, [n("span", {
                    staticClass: "close",
                    on: {
                        click: t.handleHideAct
                    }
                }, [n("icon-font", {
                    attrs: {
                        type: "icon-hide"
                    }
                })], 1), n("a", {
                    directives: [{
                        name: "jump",
                        rawName: "v-jump",
                        value: t.marketGroup.top_banner[0],
                        expression: "marketGroup.top_banner[0]"
                    }],
                    attrs: {
                        target: "_blank",
                        "data-weizhi": "top_banner",
                        "data-url": t.marketGroup.top_banner[0].url,
                        "data-title": t.marketGroup.top_banner[0].title,
                        "bi-click": "go"
                    }
                }, [n("img", {
                    attrs: {
                        src: t.marketGroup.top_banner[0].img
                    }
                })])]) : t._e(), n("header", {
                    staticClass: "header"
                }, [n("div", {
                    staticClass: "header_search"
                }, [t.config.logo ? n("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "?r=index/index"
                    }
                }, [n("img", {
                    attrs: {
                        alt: t.config.siteName || t.config.site_name,
                        src: t.config.logo
                    }
                })]) : t._e(), t.config.logo ? t._e() : n("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "?r=index/index"
                    }
                }, [t._v(t._s(t.config.siteName || t.config.site_name))]), n("div", {
                    staticClass: "search",
                    attrs: {
                        "bi-route": "search"
                    }
                }, [n("div", {
                    staticClass: "tag"
                }, t._l(t.tag, (function (e, a) {
                    return e.isShow ? n("a", {
                        key: a,
                        class: {
                            active: e.type == t.tagIndex
                        },
                        attrs: {
                            "bi-click": t.tabs,
                            "data-tabs": e.eventId || ""
                        },
                        on: {
                            click: function (n) {
                                return t.handleTagType(e)
                            }
                        }
                    }, [t._v(t._s(e.name))]) : t._e()
                })), 0), n("div", {
                    staticClass: "search-form"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.kw,
                        expression: "kw"
                    }],
                    ref: "inputDom",
                    attrs: {
                        maxlength: "100",
                        placeholder: t.placeholder
                    },
                    domProps: {
                        value: t.kw
                    },
                    on: {
                        keyup: t.handleSearchKeyup,
                        focus: t.handleFocus,
                        blur: t.handleBlur,
                        input: function (e) {
                            e.target.composing || (t.kw = e.target.value)
                        }
                    }
                }), n("a", {
                    staticClass: "close",
                    on: {
                        click: t.handleClose
                    }
                }, [n("icon-font", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.kw,
                        expression: "kw"
                    }],
                    attrs: {
                        type: "icon-close"
                    }
                })], 1), n("button", {
                    attrs: {
                        "bi-click": "searchbt",
                        "data-tabs": t.curTagName,
                        "data-kw": t.kw ? decodeURIComponent(encodeURIComponent(t.kw)) : ""
                    },
                    on: {
                        click: t.handleSearch
                    }
                }, [t._v(" 搜 索 ")]), t.searchTag.length > 0 ? n("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isInputFocus,
                        expression: "isInputFocus"
                    }],
                    staticClass: "kw-list"
                }, t._l(t.searchTag, (function (e) {
                    return n("li", {
                        key: e,
                        class: {
                            active: e.kw == t.kw
                        },
                        on: {
                            click: function (n) {
                                return t.handleSearchKw(e)
                            }
                        }
                    }, [t._v(" " + t._s(e.kw) + " ")])
                })), 0) : t._e()]), 0 != t.tagList.length ? n("div", {
                    staticClass: "search-list"
                }, t._l(t.tagList, (function (e, a) {
                    return n("a", {
                        key: e,
                        attrs: {
                            "bi-click": "tag",
                            "data-index": a,
                            "data-kw": e,
                            "data-tabs": t.curTagName
                        },
                        on: {
                            click: function (n) {
                                return t.handleSearch({
                                    kw: e
                                })
                            }
                        }
                    }, [t._v(t._s(e))])
                })), 0) : t._e()]), t.marketGroup && t.marketGroup.search_right && t.marketGroup.search_right[0] ? n("div", {
                    staticClass: "act",
                    attrs: {
                        "bi-route": "chuchuang"
                    }
                }, [n("a", {
                    directives: [{
                        name: "jump",
                        rawName: "v-jump",
                        value: t.marketGroup.search_right[0],
                        expression: "marketGroup.search_right[0]"
                    }],
                    attrs: {
                        "bi-click": "go",
                        "data-title": t.marketGroup.search_right[0].title,
                        "data-url": t.marketGroup.search_right[0].url,
                        "data-weizhi": "search_right"
                    }
                }, [n("img", {
                    attrs: {
                        src: t.marketGroup.search_right[0].img
                    }
                })])]) : t._e()]), n("nav", {
                    staticClass: "nav"
                }, [n("ul", [t._l(t.nav, (function (e, a) {
                    return n("li", {
                        key: a,
                        class: {
                            active: t.isNavActive(e), "nav-pic": "act" == e.type
                        },
                        attrs: {
                            "bi-route": "act" == e.type ? t.chuchuang : t.daohang
                        }
                    }, [e.isNew ? n("i", {
                        staticClass: "new"
                    }, [t._v("NEW")]) : t._e(), "act" == e.type ? n("a", {
                        directives: [{
                            name: "jump",
                            rawName: "v-jump",
                            value: e,
                            expression: "item"
                        }],
                        attrs: {
                            "bi-click": "go",
                            "data-title": t.marketGroup.activity_nav[0].title,
                            "data-url": t.marketGroup.activity_nav[0].url,
                            "data-weizhi": "activity_nav"
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.img,
                            alt: e.title
                        }
                    })]) : n("a", {
                        attrs: {
                            "bi-click": "nav",
                            "data-title": e.name,
                            "data-url": t.navType
                        },
                        on: {
                            click: function (n) {
                                return t.handleNav(e)
                            }
                        }
                    }, [t._v(t._s(e.name))])])
                })), n("li", {
                    staticClass: "tip_area",
                    style: {
                        right: t.marketGroup.notice_ad && t.marketGroup.notice_ad[0] ? "130px" : 0
                    }
                }, [t._v(" 使用" + t._s(t.shop_name) + "购物，预计帮您节省¥3726.2 ")]), n("li", {
                    staticClass: "odd",
                    attrs: {
                        "bi-route": "chuchuang"
                    }
                }, [t.marketGroup.notice_ad && t.marketGroup.notice_ad[0] ? n("a", {
                    directives: [{
                        name: "jump",
                        rawName: "v-jump",
                        value: t.marketGroup.notice_ad[0],
                        expression: "marketGroup.notice_ad[0]"
                    }],
                    attrs: {
                        "bi-click": "go",
                        "data-title": t.marketGroup.notice_ad[0].title,
                        "data-url": t.marketGroup.notice_ad[0].url,
                        "data-weizhi": "notice_ad"
                    }
                }, [t._v(" " + t._s(t.marketGroup.notice_ad[0].title) + " "), n("div", {
                    staticClass: "group_pop"
                }, [n("img", {
                    attrs: {
                        src: t.marketGroup.notice_ad[0].img,
                        width: "110",
                        alt: ""
                    }
                })])]) : t._e()])], 2)]), n("div", {
                    ref: "searchFixedRef",
                    staticClass: "search-fixed"
                }, [n("div", {
                    staticClass: "row"
                }, [n("div", {
                    staticClass: "fixed-nav"
                }, t._l(t.searchNav, (function (e) {
                    return n("a", {
                        key: e.cid,
                        class: t.renderCidsActive(e) + " " + t.reLoad,
                        on: {
                            click: function (n) {
                                return t.handleSearchCids(e)
                            }
                        }
                    }, [t._v(t._s(e.cname))])
                })), 0), n("div", {
                    staticClass: "search-fix"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.kw,
                        expression: "kw"
                    }],
                    attrs: {
                        type: "text",
                        maxlength: "100",
                        placeholder: t.placeholder
                    },
                    domProps: {
                        value: t.kw
                    },
                    on: {
                        keyup: t.handleSearchKeyup,
                        input: function (e) {
                            e.target.composing || (t.kw = e.target.value)
                        }
                    }
                }), n("button", {
                    on: {
                        click: t.handleSearch
                    }
                })])])])])])
            },
            l = [],
            h = n("53ca"),
            f = n("2909"),
            m = (n("fb6a"), n("4de4"), n("d3b7"), n("d81d"), n("a434"), n("28b0")),
            b = n("fa7d"),
            g = {
                data: function () {
                    return {
                        isShowAct: !Object(b["c"])("CMS-ACT-TOP"),
                        isInputFocus: !1,
                        inputValue: "",
                        reLoad: !1,
                        placeholder: "",
                        kw: "",
                        curTagName: "taobao",
                        tagIndex: 1,
                        shop_name: "",
                        navType: "/",
                        searchNav: [{
                            cid: -1,
                            cname: "首页"
                        }],
                        isTag: !1,
                        tag: [{
                            name: "淘宝",
                            type: 1,
                            url: "/l",
                            isShow: !0,
                            eventId: "taobao",
                            query: {
                                r: "l",
                                search_type: "tb"
                            }
                        }, {
                            name: "京东",
                            type: 2,
                            isShow: !1,
                            url: "/l/jdlist",
                            eventId: "jd",
                            query: {
                                r: "l",
                                search_type: "jd"
                            }
                        }, {
                            name: "拼多多",
                            type: 3,
                            isShow: !1,
                            url: "/l/pddlist",
                            eventId: "pdd",
                            query: {
                                r: "l",
                                search_type: "pdd"
                            }
                        }],
                        searchTag: [],
                        nav: [{
                            name: "首页",
                            url: ["/index/index", "/"],
                            query: {
                                r: "/index/index"
                            }
                        }, {
                            name: "好货精选",
                            url: ["/l", "/l/jdlist", "/l/pddlist", "/l/pdd", "/l/jd", "/l/d"],
                            query: {
                                r: "l"
                            }
                        }, {
                            name: "疯抢榜",
                            url: "/p",
                            query: {
                                r: "p"
                            }
                        }, {
                            name: "9块9包邮",
                            url: "/nine",
                            query: {
                                r: "nine"
                            }
                        }, {
                            name: "咚咚抢",
                            url: "/ddq",
                            query: {
                                r: "ddq"
                            }
                        }, {
                            name: "每日半价",
                            url: "/every/half",
                            isNew: !0,
                            query: {
                                r: "every/half"
                            }
                        }, {
                            name: "折上折",
                            url: "/realtime/zsz",
                            isNew: !0,
                            query: {
                                r: "realtime/zsz"
                            }
                        }],
                        tagList: [],
                        isSetTag: !0
                    }
                },
                name: "header",
                props: {},
                components: {
                    IconFont: m["a"]
                },
                computed: Object(a["a"])({}, Object(d["b"])(["marketGroup", "config"])),
                methods: {
                    handleHideAct: function () {
                        Object(b["d"])("CMS-ACT-TOP", 1, 24), this.isShowAct = !1
                    },
                    handleFocus: function () {
                        this.isInputFocus = !!this.kw
                    },
                    renderShopName: function (t) {
                        t.site_name.length <= 8 ? this.shop_name = t.site_name : this.shop_name = t.site_name && t.site_name.slice(0, 8) + "..."
                    },
                    handleBlur: function () {},
                    handleClose: function () {
                        this.kw = "", this.searchTag = [], this.isInputFocus = !1
                    },
                    renderCidsActive: function (t) {
                        return this.$route.query.cids == t.cid ? "active" : ""
                    },
                    handleSearchCids: function (t) {
                        this.$router.push({
                            path: "/l",
                            query: {
                                cids: t.cid,
                                from: "head"
                            }
                        })
                    },
                    init: function () {
                        var t = this;
                        this.$services.getDTKOpenCategoryTop100().then((function (e) {
                            if (0 != e.code) return !1;
                            t.tagList = e.data.hotWords.filter((function (t, e) {
                                return e <= 9
                            }))
                        })), this.$services.getDTKOpenCategorySuper().then((function (e) {
                            if (0 != e.code) return !1;
                            t.searchNav = [].concat(Object(f["a"])(t.searchNav), Object(f["a"])(e.data))
                        })), this.$refs.searchFixedRef && this.scrollSearchFixed()
                    },
                    scrollSearchFixed: function () {
                        var t = this.$refs.searchFixedRef,
                            e = t.className;
                        window.addEventListener("scroll", (function () {
                            window.scrollY > 400 && t ? t.className = e + " show" : t && (t.className = e)
                        }))
                    },
                    isNavActive: function (t) {
                        var e = this,
                            n = !1;
                        return "object" == Object(h["a"])(t.url) && (n = t.url.filter((function (t) {
                            return t == "".concat(e.navType).split("?")[0]
                        }))[0]), n || this.navType == t.url
                    },
                    handleTagType: function (t) {
                        this.tagIndex = t.type, this.curTagName = t.eventId, this.handleSearch()
                    },
                    handleSearch: function (t) {
                        var e = this;
                        this.isSetTag = !1, t && t.kw && (this.kw = t.kw), this.kw = this.kw || "";
                        var n = this.tag.filter((function (t) {
                            return t.type == e.tagIndex
                        }))[0];
                        window.scrollTo(0, 0), this.$router.push({
                            path: n.url,
                            query: Object(a["a"])(Object(a["a"])({}, this.kw ? {
                                kw: decodeURIComponent(encodeURIComponent(this.kw))
                            } : {}), {}, {
                                t: 223
                            })
                        })
                    },
                    handleSearchKw: function (t) {
                        this.searchTag = [], this.handleSearch({
                            kw: t.kw
                        })
                    },
                    handleSearchKeyup: function (t) {
                        var e = this;
                        if (this.isSetTag = !0, 13 == t.keyCode) return this.searchTag = [], this.handleSearch(), !1;
                        var n = this.searchTag.length;
                        if (this.isInputFocus = !0, 40 == t.keyCode && n > 0) {
                            for (var a = -1, r = 0; r < n; r++) this.searchTag[r].kw == this.kw && (a = r);
                            return this.kw = a + 1 < n ? this.searchTag[a + 1].kw : this.searchTag[0].kw, !1
                        }
                        if (38 == t.keyCode && n > 0) {
                            for (var i = 0, c = 0; c < n; c++) this.searchTag[c].kw == this.kw && (i = c);
                            return this.kw = i - 1 < 0 ? this.searchTag[n - 1].kw : this.searchTag[i - 1].kw, !1
                        }
                        clearTimeout(this.setTime), this.setTime = setTimeout((function () {
                            e.$services.getDTKOpenSearchSuggestion({
                                keyWords: e.kw,
                                type: 3
                            }).then((function (t) {
                                if (0 != t.code) return e.searchTag = [], !1;
                                e.isSetTag && (e.searchTag = t.data)
                            }))
                        }), 100)
                    },
                    handleNav: function (t) {
                        this.navType = "object" == Object(h["a"])(t.url) ? t.url[0] : t.url, this.$router.push({
                            path: this.navType
                        })
                    }
                },
                mounted: function () {
                    this.kw = this.$route.query.kw, this.navType = this.$route.fullPath || "/", this.tagIndex = this.$route.fullPath.indexOf("jd") > 0 ? 2 : this.$route.fullPath.indexOf("pdd") > 0 ? 3 : 1, this.init(), this.config.site_name && this.renderShopName(this.config)
                },
                watch: {
                    $route: function (t) {
                        this.searchTag = [], this.kw = this.$route.query.kw, this.navType = this.$route.fullPath || "/", this.reLoad = !this.reLoad, this.tagIndex = this.$route.fullPath.indexOf("jd") > 0 ? 2 : this.$route.fullPath.indexOf("pdd") > 0 ? 3 : 1
                    },
                    config: function (t) {
                        var e = t.pdd && "1" === t.pdd.is_open,
                            n = t.jd && "1" === t.jd.is_show;
                        this.tag = this.tag.map((function (t) {
                            var r = {};
                            return 3 == t.type && e && (r.isShow = !0), 2 == t.type && n && (r.isShow = !0), Object(a["a"])(Object(a["a"])({}, t), r)
                        })), this.renderShopName(t), this.placeholder = "粘贴淘宝".concat(n ? "/京东" : "").concat(e ? "/拼多多" : "", "商品标题查隐藏优惠券")
                    },
                    marketGroup: function (t) {
                        if (t.activity_nav)
                            for (var e = t.activity_nav.length - 1; e >= 0; e--) {
                                var n = t.activity_nav[e];
                                this.nav.splice(1, 0, Object(a["a"])(Object(a["a"])({}, n), {
                                    type: "act"
                                }))
                            }
                    }
                }
            },
            v = g,
            w = (n("1dd6"), n("2877")),
            k = Object(w["a"])(v, p, l, !1, null, "2c5f1eb2", null),
            O = k.exports,
            y = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("footer", {
                    staticClass: "footer"
                }, [n("div", {
                    staticClass: "footer-wrapper",
                    staticStyle: {
                        padding: "45px 0 10px"
                    }
                }, [t._m(0), n("p", [t._v(t._s(t.config.site_name) + "是一家中立的导购网站，网站中的商品信息均来自于互联网。如商品信息不同，可能是商品信息未及时更新，所有商品信息请以天猫/淘宝店铺内为准。")]), n("div", {
                    staticClass: "text"
                }, [n("span", [t._v("版权所有 本站内容未经书面许可,禁止一切形式的转载")]), n("span", {
                    staticClass: "ml"
                }, [t._v("© CopyRight " + t._s((new Date).getFullYear()))]), n("a", {
                    staticStyle: {
                        padding: "0 8px"
                    },
                    attrs: {
                        href: t.config.yuming
                    }
                }, [t._v(t._s(t.config.site_name) + t._s(t.config.yuming))]), n("a", {
                    staticClass: "miitbeian ml",
                    staticStyle: {
                        padding: "0 8px"
                    },
                    attrs: {
                        href: "https://beian.miit.gov.cn/#/Integrated/recordQuery",
                        target: "_blank",
                        rel: "nofollow"
                    }
                }, [t._v(t._s(t.config.beianhao))]), t.config.leftTxt ? n("span", {
                    staticStyle: {
                        padding: "0 8px"
                    },
                    domProps: {
                        innerHTML: t._s(t.config.leftTxt)
                    }
                }) : t._e(), n("a", {
                    staticStyle: {
                        "margin-left": "20px",
                        "text-decoration": "underline"
                    },
                    attrs: {
                        href: "?r=index/feedbackpc",
                        target: "_blank"
                    }
                }, [t._v("我要反馈")]), t._m(1), t.config.custom_script && t.config.custom_script_title ? n("p", {
                    staticClass: "ml",
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center"
                    }
                }, [n("img", {
                    attrs: {
                        src: t.config.custom_script,
                        alt: "load...",
                        width: "26"
                    }
                }), n("a", {
                    staticStyle: {
                        "margin-left": "3px"
                    },
                    attrs: {
                        href: t.config.custom_script_url
                    }
                }, [t._v(t._s(t.config.custom_script_title))])]) : t._e()])])])
            },
            _ = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("ul", [n("li", [t._v("网站导航")]), n("li", [n("a", {
                    attrs: {
                        href: "?r=/index/index",
                        target: "_blank"
                    }
                }, [t._v("首页")])]), n("li", [n("a", {
                    attrs: {
                        href: "?r=/l",
                        target: "_blank"
                    }
                }, [t._v("好货精选")])]), n("li", [n("a", {
                    attrs: {
                        href: "?r=/p",
                        target: "_blank"
                    }
                }, [t._v("疯抢榜")])]), n("li", [n("a", {
                    attrs: {
                        href: "?r=/ddq",
                        target: "_blank"
                    }
                }, [t._v("咚咚抢")])]), n("li", {
                    staticClass: "no"
                }, [n("a", {
                    attrs: {
                        href: "?r=/nine",
                        target: "_blank"
                    }
                }, [t._v("9.9包邮")])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("a", {
                    staticClass: "miitbeian ml",
                    attrs: {
                        href: "javascript:void(0)",
                        rel: "nofollow"
                    }
                }, [n("p", {
                    staticClass: "ml",
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center"
                    }
                })])
            }],
            j = (n("8bbf"), {
                data: function () {
                    return {}
                },
                name: "footer",
                components: {
                    IconFont: m["a"]
                },
                computed: Object(a["a"])({}, Object(d["b"])(["config"])),
                mounted: function () {},
                methods: {},
                watch: {
                    config: function (t) {
                        if (t.cnzz_id) {
                            var e = "https:" == document.location.protocol ? " https://" : " http://",
                                n = document.createElement("script");
                            n.src = "".concat(e, "s11.cnzz.com/z_stat.php?id=").concat(t.cnzz_id, "&show=pic1"), n.type = "text/javascript", n.charset = "utf-8", n.id = "cnzz_stat_icon_".concat(t.cnzz_id), document.querySelectorAll("body")[0].appendChild(n)
                        }
                    }
                }
            }),
            x = j,
            C = (n("97f0"), Object(w["a"])(x, y, _, !1, null, "2ad846de", null)),
            T = C.exports,
            S = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [t.isShowAct && t.isAct && t.marketGroup.pop_banner && t.marketGroup.pop_banner.length > 0 ? a("div", {
                    staticClass: "act-pop"
                }, [a("div", {
                    staticClass: "pic",
                    attrs: {
                        "bi-route": "chuchuang"
                    }
                }, [a("a", {
                    directives: [{
                        name: "jump",
                        rawName: "v-jump",
                        value: t.marketGroup.pop_banner[0],
                        expression: "marketGroup.pop_banner[0]"
                    }],
                    attrs: {
                        target: "_blank",
                        "bi-click": "go",
                        "data-title": t.marketGroup.pop_banner[0].title,
                        "data-url": t.marketGroup.pop_banner[0].url,
                        "data-weizhi": "pop_banner"
                    }
                }, [a("img", {
                    attrs: {
                        src: t.marketGroup.pop_banner[0].img
                    }
                })]), a("span", {
                    staticClass: "close",
                    on: {
                        click: t.handleHidePopAct
                    }
                }, [a("icon-font", {
                    attrs: {
                        type: "icon-hide"
                    }
                })], 1)])]) : t._e(), t.isShowActFloat && t.isAct && t.marketGroup.bottom_banner && t.marketGroup.float_banner.length > 0 ? a("div", {
                    staticClass: "act-float"
                }, [a("div", {
                    staticClass: "pic",
                    attrs: {
                        "bi-route": "chuchuang"
                    }
                }, [a("a", {
                    directives: [{
                        name: "jump",
                        rawName: "v-jump",
                        value: t.marketGroup.float_banner[0],
                        expression: "marketGroup.float_banner[0]"
                    }],
                    attrs: {
                        target: "_blank",
                        "bi-click": "go",
                        "data-title": t.marketGroup.float_banner[0].title,
                        "data-url": t.marketGroup.float_banner[0].url,
                        "data-weizhi": "float_banner"
                    }
                }, [a("img", {
                    attrs: {
                        src: t.marketGroup.float_banner[0].img
                    }
                })]), a("span", {
                    staticClass: "close",
                    on: {
                        click: t.handleHideFloatAct
                    }
                }, [a("icon-font", {
                    attrs: {
                        type: "icon-hide"
                    }
                })], 1)])]) : t._e(), t.isShowActBottom && t.isAct && t.marketGroup.bottom_banner && t.marketGroup.bottom_banner.length > 0 ? a("div", {
                    staticClass: "act-bottom"
                }, [a("div", {
                    staticClass: "pic",
                    attrs: {
                        "bi-route": "chuchuang"
                    }
                }, [a("a", {
                    directives: [{
                        name: "jump",
                        rawName: "v-jump",
                        value: t.marketGroup.bottom_banner[0],
                        expression: "marketGroup.bottom_banner[0]"
                    }],
                    attrs: {
                        target: "_blank",
                        "bi-click": "go",
                        "data-title": t.marketGroup.bottom_banner[0].title,
                        "data-url": t.marketGroup.bottom_banner[0].url,
                        "data-weizhi": "bottom_banner"
                    }
                }, [a("img", {
                    attrs: {
                        src: t.marketGroup.bottom_banner[0].img
                    }
                })]), a("span", {
                    staticClass: "close",
                    on: {
                        click: t.handleHideBottomAct
                    }
                }, [a("icon-font", {
                    attrs: {
                        type: "icon-hide"
                    }
                })], 1)])]) : t._e(), a("ActUserModal"), a("div", {
                    staticClass: "scroll-top"
                }, [a("ul", {
                    staticClass: "float-tool"
                }, [a("li", {
                    on: {
                        click: t.handleAddPanel
                    }
                }, [a("img", {
                    attrs: {
                        src: "https://cmsstaticnew.dataoke.com//images/home/sc.png?v=202111051520",
                        alt: ""
                    }
                }), a("p", [t._v("收藏")]), t.showSCModal ? a("img", {
                    staticClass: "sc_modal",
                    attrs: {
                        src: n("6351"),
                        alt: ""
                    }
                }) : t._e()]), a("li", {
                    staticClass: "ft-share"
                }, [a("img", {
                    attrs: {
                        src: "https://cmsstaticnew.dataoke.com//images/home/share.png?v=202111051520",
                        alt: ""
                    }
                }), a("p", [t._v("分享")]), a("div", {
                    staticClass: "share-platform"
                }, [a("div", {
                    staticClass: "share-platform-r"
                }, [a("div", {
                    staticClass: "bshare-custom bdsharebuttonbox bdshare-button-style1-32"
                }, [a("a", {
                    staticClass: "bshare-weixin bds_weixin",
                    attrs: {
                        title: "分享到微信"
                    },
                    on: {
                        click: function (e) {
                            return t.handleShare("weixin")
                        }
                    }
                }), a("a", {
                    staticClass: "custom_share bds_tsina",
                    staticStyle: {
                        display: "inline-block"
                    },
                    attrs: {
                        title: "分享到新浪微博"
                    },
                    on: {
                        click: function (e) {
                            return t.handleShare("weibo")
                        }
                    }
                }), a("a", {
                    staticClass: "bshare-qqim bds_sqq",
                    attrs: {
                        title: "分享到QQ好友"
                    },
                    on: {
                        click: function (e) {
                            return t.handleShare("qq")
                        }
                    }
                }), a("a", {
                    staticClass: "custom_share bds_qzone",
                    staticStyle: {
                        display: "inline-block"
                    },
                    attrs: {
                        title: "分享到QQ空间"
                    },
                    on: {
                        click: function (e) {
                            return t.handleShare("qqkj")
                        }
                    }
                })])])])]), t.config.qq ? a("li", [a("a", {
                    attrs: {
                        target: "_blank",
                        href: "http://wpa.qq.com/msgrd?v=3&uin=" + t.config.qq + "&site=qq&menu=yes"
                    }
                }, [a("img", {
                    attrs: {
                        src: "https://cmsstaticnew.dataoke.com//images/home/kf.png?v=202111051520",
                        alt: ""
                    }
                }), a("p", [t._v("客服")])])]) : t._e(), t._m(0), a("li", {
                    class: "zsMarket_wrap" + (t.showZSMarket ? "_act" : ""),
                    on: {
                        click: t.handleShowZSMarket
                    }
                }, [t._m(1), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showZSMarket,
                        expression: "showZSMarket"
                    }],
                    staticClass: "modal_container"
                }, [a("div", {
                    staticClass: "code",
                    attrs: {
                        id: "zsQrcode"
                    }
                }), t._m(2)])]), a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showReturnTop,
                        expression: "showReturnTop"
                    }],
                    staticClass: "to_top",
                    on: {
                        click: function (e) {
                            return t.handleToTop()
                        }
                    }
                }, [a("img", {
                    staticStyle: {
                        "padding-top": "12px"
                    },
                    attrs: {
                        src: "https://cmsstaticnew.dataoke.com//images/home/top.png?v=202111051520",
                        alt: ""
                    }
                })])]), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showQRCode,
                        expression: "showQRCode"
                    }],
                    staticClass: "QRCode",
                    on: {
                        click: t.handleQrcode
                    }
                }, [t._m(3)])])], 1)
            },
            R = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("li", [n("a", {
                    attrs: {
                        href: "?r=index/feedbackpc",
                        target: "_blank"
                    }
                }, [n("img", {
                    attrs: {
                        src: "https://cmsstaticnew.dataoke.com//images/home/feedback.png?v=202111051520",
                        alt: ""
                    }
                }), n("p", [t._v("反馈")])])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("a", [n("p", [t._v("掌上")]), n("p", [t._v("商城")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "tip"
                }, [t._v("打开手机扫一扫 "), n("br"), t._v(" 随时随地在线淘")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "code",
                    attrs: {
                        id: "scrollQrcode"
                    }
                }), t._v(" 扫码分享到-微信 ")])
            }],
            G = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return !t.isHide && t.config.site_id && 1 == t.config.pc_index_lead_switch ? n("div", [n("div", {
                    staticClass: "act-user-modal"
                }, [n("span", {
                    staticClass: "close",
                    on: {
                        click: t.handleHide
                    }
                }, [n("icon-font", {
                    staticStyle: {
                        "font-size": "30px",
                        color: "#fff"
                    },
                    attrs: {
                        type: "icon-hide"
                    }
                })], 1), n("h3", [n("img", {
                    attrs: {
                        alt: t.config.site_name || t.config.siteName,
                        src: t.config.logo || "https://sr.ffquan.cn/dtk_www/20211209/c6onqlhalsbijbagcnug0.png"
                    }
                })]), n("div", {
                    staticClass: "center"
                }, [n("h1", [t._v(" 欢迎来到" + t._s(t.config.site_name || t.config.siteName || "您的导购商城") + " ")]), n("p", {
                    staticClass: "desc"
                }, [t._v("一款专门为您省钱的官方导购网站")]), n("div", {
                    staticClass: "nr"
                }, [t._v(" 每日更新数万款天猫淘宝大额优惠券，领券狂省低至1折，想要什么一键全网搜索。精选大牌底价开团，聚划算买一送一，第二件0元，海量折扣应有尽有。专业人工团队严控产品质，帮你花更少钱买好货。 ")])]), t._m(0), n("button", {
                    staticClass: "btn",
                    on: {
                        click: t.handleHide
                    }
                }, [t._v("我知道了~")])]), n("div", {
                    staticClass: "act-user-modal-bg"
                })]) : t._e()
            },
            I = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("ul", [n("li", [n("img", {
                    attrs: {
                        src: "https://sr.ffquan.cn/dtk_www/20211209/c6onqlhalsbijbagcnug3.png"
                    }
                }), n("p", {
                    staticClass: "name"
                }, [t._v("领券购物省钱")]), n("p", {
                    staticClass: "test"
                }, [t._v(" 每日更新海量天猫淘宝大额优惠券，领券购物低至1折，让你花少钱买到心仪好物 ")])]), n("li", [n("img", {
                    attrs: {
                        src: "https://sr.ffquan.cn/dtk_www/20211209/c6onqlhalsbijbagcnug2.png"
                    }
                }), n("p", {
                    staticClass: "name"
                }, [t._v("精选爆款栏目")]), n("p", {
                    staticClass: "test"
                }, [t._v(" 聚划算精品折上折、疯抢排行、 每日半价、咚咚抢…海量惊喜折扣等你体验 ")])]), n("li", [n("img", {
                    attrs: {
                        src: "https://sr.ffquan.cn/dtk_www/20211209/c6onqlhalsbijbagcnug1.png"
                    }
                }), n("p", {
                    staticClass: "name"
                }, [t._v("大牌优惠好货")]), n("p", {
                    staticClass: "test"
                }, [t._v(" 每日更新优质好货、百人品控团队、只为提供超高性价比的前沿好物 ")])])])
            }],
            A = {
                components: {
                    IconFont: m["a"]
                },
                data: function () {
                    return {
                        isHide: !0
                    }
                },
                computed: Object(a["a"])({}, Object(d["b"])(["config"])),
                methods: {
                    handleHide: function () {
                        window.localStorage.setItem("CMS-ACT-MODAL", "1"), this.isHide = !0
                    }
                },
                mounted: function () {
                    var t = window.localStorage.getItem("CMS-ACT-MODAL");
                    t || (this.isHide = !1)
                }
            },
            E = A,
            q = (n("2194"), Object(w["a"])(E, G, I, !1, null, "7815975c", null)),
            N = q.exports,
            M = {
                data: function () {
                    return {
                        isAct: !1,
                        isShowActRight: !Object(b["c"])("CMS-ACT-RIGHT"),
                        isShowActLeft: !Object(b["c"])("CMS-ACT-LEFT"),
                        isShowAct: !Object(b["c"])("CMS-ACT-POP"),
                        isShowActFloat: !Object(b["c"])("CMS-ACT-FLOAT"),
                        isShowActBottom: !Object(b["c"])("CMS-ACT-BOTTOM"),
                        showPop: !1,
                        showReturnTop: !1,
                        pageY: 400,
                        imgItem: {},
                        showQRCode: !1,
                        showZSMarket: !0,
                        showSCModal: !localStorage.getItem("SC-MODAL")
                    }
                },
                name: "",
                props: {
                    onScroll: Function
                },
                components: {
                    IconFont: m["a"],
                    ActUserModal: N
                },
                computed: Object(a["a"])({}, Object(d["b"])(["marketGroup", "config"])),
                methods: {
                    handleShowZSMarket: function () {
                        this.showZSMarket = !this.showZSMarket
                    },
                    createZSQrcode: function () {
                        var t = document.getElementById("zsQrcode");
                        t && new QRCode(t, {
                            text: window.location.href,
                            width: 100,
                            height: 100,
                            colorDark: "#000000",
                            colorLight: "#ffffff"
                        })
                    },
                    handleHideBottomAct: function () {
                        Object(b["d"])("CMS-ACT-BOTTOM", 1, 24), this.isShowActBottom = !1
                    },
                    handleHideFloatAct: function () {
                        Object(b["d"])("CMS-ACT-FLOAT", 1, 24), this.isShowActFloat = !1
                    },
                    handleHidePopAct: function () {
                        Object(b["d"])("CMS-ACT-POP", 1, 24), this.isShowAct = !1
                    },
                    handleQrcode: function () {
                        this.showQRCode = !1
                    },
                    handleShare: function (t) {
                        var e = "";
                        switch (t) {
                            case "qq":
                                e = "https://connect.qq.com/widget/shareqq/index.html?url=".concat(encodeURIComponent(window.location.href), "&desc=").concat(this.config.descript, "%20&pics=&site=bshare");
                                break;
                            case "weibo":
                                e = "https://service.weibo.com/share/share.php?appkey=583395093&title=".concat(document.title, "&url=").concat(encodeURIComponent(window.location.href), "&source=dtk&desc=").concat(this.config.descript, "&sudaref=").concat(encodeURIComponent(this.config.domian), "&display=0&retcode=6102#_loginLayer_1636534892722");
                                break;
                            case "qqkj":
                                e = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=".concat(encodeURIComponent(document.title), "&url=").concat(encodeURIComponent(window.location.href), "&source=dtk&desc=").concat(encodeURIComponent(this.config.descript), "&summary=").concat(encodeURIComponent(this.config.descript));
                                break;
                            default:
                                break
                        }
                        e ? window.open(e, "newwindow", "height=600, width=800, top=300, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no") : (this.loadQRCode || (new QRCode(document.getElementById("scrollQrcode"), {
                            text: window.location.href,
                            width: 180,
                            height: 180,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: QRCode.CorrectLevel.H
                        }), this.loadQRCode = !0), this.showQRCode = !0)
                    },
                    handleAddPanel: function () {
                        localStorage.setItem("SC-MODAL", 1), this.showSCModal = !1;
                        try {
                            window.external.addFavorite(this.config.title, window.location.href)
                        } catch (t) {
                            try {
                                window.sidebar.addPanel(this.config.title, window.location.href, "")
                            } catch (t) {
                                alert("加入收藏失败，请使用Ctrl+D进行添加")
                            }
                        }
                    },
                    handleToTop: function () {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    },
                    scrollToTop: function () {
                        window.scrollY > this.pageY ? this.showReturnTop = !0 : this.showReturnTop = !1
                    }
                },
                mounted: function () {
                    var t = this;
                    window.QRCode || Object(b["i"])("https://public.ffquan.cn/lib/qrcode.js").then((function (e) {
                        t.createZSQrcode()
                    })), window.addEventListener("scroll", this.scrollToTop)
                },
                destroyed: function () {
                    window.removeEventListener("scroll", this.scrollToTop)
                },
                watch: {
                    $route: function (t) {
                        ["/index/index", "/"].filter((function (e) {
                            return e == t.path
                        }))[0] ? this.isAct = !0 : this.isAct && (this.isAct = !1)
                    },
                    marketGroup: function (t) {
                        var e = this;
                        if (t.popup_ads && t.popup_ads.length) {
                            var n = Object(b["c"])("popUp");
                            if ("11" !== n) {
                                var a = new Image;
                                a.src = t.popup_ads[0].img, a.onload = function () {
                                    e.imgItem = t.popup_ads[0], e.showPop = !0
                                }
                            }
                        }
                    }
                }
            },
            P = M,
            $ = (n("b55c"), Object(w["a"])(P, S, R, !1, null, "5f7ab320", null)),
            L = $.exports,
            D = {
                name: "App",
                data: function () {
                    return {
                        loading: !1,
                        isShowScrollTop: !0
                    }
                },
                components: {
                    ScrollTop: L,
                    Headers: O,
                    Footers: T
                },
                created: function () {
                    this.handleServicesInit()
                },
                computed: Object(a["a"])({}, Object(d["b"])(["userInfo", "marketGroup", "config"])),
                methods: {
                    handleServicesInit: function () {
                        var t = this;
                        this.$services.getActivityList().then((function (e) {
                            if (1 != e.code || !e.data || "{}" == JSON.stringify(e.data)) return window.marketGroupConfig = [], !1;
                            window.marketGroupConfig = e.data, t.$store.dispatch("saveMarketGroupConfig", e.data)
                        })), this.loading = !1, this.$services.getCMSV2CmsConf({}).then((function (e) {
                            t.$store.dispatch("saveConfig", e.data), t.loading = !0, window.cmsSearchDangerous = "".concat(e.data.shield_words).split(",")
                        })), this.$services.getCMSV2Ads(Object(a["a"])(Object(a["a"])({}, {
                            page: 1,
                            is_pc: 1
                        }), window.$tempId ? {
                            temp_id: window.$tempId
                        } : {})).then((function (e) {
                            if (e && 1 != e.code) return !1;
                            Object(a["a"])(Object(a["a"])({}, e), {
                                data: Object(a["a"])(Object(a["a"])({}, e.data), {
                                    search_right: e.data.w_banners,
                                    notice_ad: e.data.w_banners,
                                    activity_nav: e.data.nav_ads
                                })
                            });
                            t.$store.dispatch("saveMarketGroup", e.data)
                        }))
                    }
                },
                watch: {
                    config: function (t) {
                        if (t.pc_icon) {
                            var e = document.createElement("link");
                            e.href = t.pc_icon, e.rel = "icon", document.querySelectorAll("head")[0].appendChild(e)
                        }
                    },
                    $route: function (t) {
                        "/activity/ac" === t.path ? this.isShowScrollTop = !1 : this.isShowScrollTop = !0
                    }
                }
            },
            z = D,
            F = (n("7c55"), Object(w["a"])(z, s, u, !1, null, null, null)),
            K = F.exports,
            V = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.isShow ? n("div", {
                    staticClass: "modal",
                    domProps: {
                        innerHTML: t._s(t.message)
                    }
                }) : t._e()])
            },
            U = [],
            H = {
                name: "Modal",
                data: function () {
                    return {
                        message: "",
                        isShow: !1
                    }
                },
                methods: {
                    Toast: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "默认弹框",
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                        this.isShow = !0, this.message = e, setTimeout((function () {
                            t.isShow = !1, t.message = ""
                        }), n)
                    }
                }
            },
            Q = H,
            B = (n("b45c"), Object(w["a"])(Q, V, U, !1, null, "7f4fe1f2", null)),
            Z = B.exports,
            J = {
                install: function (t) {
                    var e = t.extend(Z),
                        n = new e;
                    n.$mount(document.createElement("div")), document.body.appendChild(n.$el), t.prototype.$modal = n
                }
            },
            W = J,
            Y = n("15fd"),
            X = (n("159b"), n("5abe"), ["r"]),
            tt = {},
            et = tt.Toast;
        Vue.directive("jump", {
            inserted: function (t, e, n, a) {
                "_blank" == t.getAttribute("target") && e.value.url ? t.setAttribute("href", "".concat(e.value.url)) : t.onclick = function () {
                    if (1 == e.value.in) {
                        var t = "".concat(e.value.url).indexOf("r=") > -1 ? "".concat(e.value.url).split("?")[1] : "r=".concat(e.value.url),
                            n = o.a.parse(t),
                            a = n.r,
                            r = Object(Y["a"])(n, X);
                        window.$myApp.$router.push({
                            path: a,
                            query: r
                        })
                    } else window.location.href = e.value.url
                }
            }
        }), Vue.directive("href", {
            inserted: function (t, e, n, a) {
                t.onclick = function () {
                    window.location.href = "?r=l/d&id=".concat(e.value)
                }
            }
        }), Vue.directive("lazy", {
            bind: function (t, e) {
                t.src = "https://sr.ffquan.cn/cms_pic/20210813/c4b0drf6vrkdtgsh7q100.gif", t.setAttribute("data-src", e.value);
                var n = new IntersectionObserver((function (t, a) {
                    t.forEach((function (t, a) {
                        var r = t.target;
                        t.intersectionRatio > 0 && (r.src = e.value, n.unobserve(r))
                    }))
                }));
                n.observe(t)
            }
        }), Vue.directive("back", {
            inserted: function (t, e, n, a) {
                t.onclick = function () {
                    if ("function" === typeof e.value) return e.value();
                    var t = e.value || "back";
                    switch (t) {
                        case "back":
                            return n.context.$router.back();
                        default:
                            break
                    }
                }
            }
        }), Vue.directive("copy", {
            bind: function (t, e, n) {
                Object(b["i"])("https://public.ffquan.cn/lib/clipboard.min.js").then((function (e) {
                    var n = new window.ClipboardJS(t, {
                        text: function (e) {
                            return t.dataset.copytext
                        }
                    });
                    n.on("success", (function (t) {
                        et("复制成功")
                    })), n.on("error", (function (t) {
                        et("复制失败")
                    }))
                }))
            }
        }), Vue.directive("marketgroup", {
            bind: function (t, e) {
                if ("undefined" === typeof window.marketGroupConfig) var n = 0,
                    a = setInterval((function () {
                        ("undefined" !== typeof window.marketGroupConfig || n > 5) && (r(t, e), clearInterval(a)), n++
                    }), 1e3);
                var r = function (t, e) {
                    var n = e.value,
                        a = window.marketGroupConfig || [],
                        r = (n.marketGroup || []).map((function (t) {
                            return a[t]
                        })).filter((function (t) {
                            return t
                        }))[0],
                        i = t.getAttribute("size") || "max";
                    if (!r) return !1;
                    t.className = "".concat(t.className, " market-pic");
                    var c = document.createElement("div");
                    n.quanMLink && "max" == i && 2 == r.goods_type && (c.innerHTML = "<span >定金".concat(n.quanMLink, "抵").concat(Object(b["a"])({
                        num: [n.quanMLink, n.hzQuanOver || 0]
                    }), "</span>")), c && t.previousElementSibling && "lowPrice" == t.previousElementSibling.className && (t.previousElementSibling.style.display = "none"), c.className = "market-tag ".concat("max" == i ? "" : "market-small"), c.style = "background-image:url('".concat("max" == i ? r.pc_main_big : r.pc_main_small, "')"), t.appendChild(c)
                };
                r(t, e)
            }
        });
        n("25f0"), n("a15b"), n("a9e3");
        Vue.filter("salesNum", (function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "万";
            if ((t + "").indexOf(e) >= 0) return t;
            if (t < 1e4) return t;
            var n = [],
                a = 0;
            t = (t || 0).toString().split("");
            for (var r = !1, i = t.length - 1; i >= 0; i--) a++, r && n.unshift(t[i]), a % 4 || 0 == i || r || (n.unshift(t[i]), n.unshift("."), r = !0);
            var c = n.indexOf(".");
            return ("0" != n[c + 1] ? n.join("") : function () {
                var t = "";
                return n = n.slice(0, c), n.forEach((function (e) {
                    t += e
                })), t
            }()) + e
        })), Vue.filter("salesNums", (function (t) {
            if (t < 1e4) return t;
            var e = [],
                n = 0;
            t = (t || 0).toString().split("");
            for (var a = !1, r = t.length - 1; r >= 0; r--) n++, a && e.unshift(t[r]), n % 4 || 0 == r || a || (e.unshift(t[r]), e.unshift("."), a = !0);
            var i = e.indexOf(".");
            return "0" != e[i + 1] ? e.join("") : function () {
                var t = "";
                return e = e.slice(0, i), e.forEach((function (e) {
                    t += e
                })), t
            }()
        })), Vue.filter("filterTimeline", (function (t) {
            var e = t - +new Date;
            if (!t) return "";
            var n = e / 864e5;
            return e < 0 ? "" : n >= 1 ? "仅剩:".concat(parseInt(n), "天") : ""
        })), Vue.filter("filterFormat", (function (t) {
            var e = [],
                n = 0;
            t = (t || 0).toString().split("");
            for (var a = t.length - 1; a >= 0; a--) n++, e.unshift(t[a]), n % 3 || 0 == a || e.unshift(",");
            return e.join("")
        })), Vue.filter("filterTimeData", (function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return Number(t) < 10 ? "0".concat(t) : t
        })), Vue.filter("filterPrice", (function (t, e) {
            return Object(b["b"])({
                num: [t.actualPrice, 0]
            })
        }));
        n("3ca3"), n("ddb0"), n("5319");
        Vue.use(VueRouter);
        var nt = [{
                path: "/",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-5b4e1c32")]).then(n.bind(null, "f5b8"))
                },
                meta: {
                    eventId: "shouye"
                }
            }, {
                path: "/index/index",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-5b4e1c32")]).then(n.bind(null, "f5b8"))
                },
                meta: {
                    eventId: "shouye"
                }
            }, {
                path: "/l/d",
                name: "taobao",
                component: function () {
                    return Promise.all([n.e("chunk-7b0b2e00"), n.e("chunk-5d756851")]).then(n.bind(null, "6e45"))
                },
                meta: {
                    eventId: "detail"
                }
            }, {
                path: "/l/jd",
                name: "jd",
                component: function () {
                    return Promise.all([n.e("chunk-7b0b2e00"), n.e("chunk-cdd35518")]).then(n.bind(null, "8cdc"))
                },
                meta: {
                    eventId: "detail"
                }
            }, {
                path: "/l/pdd",
                name: "pdd",
                component: function () {
                    return Promise.all([n.e("chunk-7b0b2e00"), n.e("chunk-829c8686")]).then(n.bind(null, "06ef"))
                },
                meta: {
                    eventId: "detail"
                }
            }, {
                path: "/index/feedbackpc",
                name: "feedbackpc",
                component: function () {
                    return n.e("chunk-4b5a13d4").then(n.bind(null, "8632"))
                }
            }, {
                path: "/p",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-6c7518a4")]).then(n.bind(null, "7696"))
                },
                meta: {
                    eventId: "bang"
                }
            }, {
                path: "/every/half",
                component: function () {
                    return n.e("chunk-145fc15a").then(n.bind(null, "9948"))
                },
                meta: {
                    eventId: "banjia"
                }
            }, {
                path: "/nine",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-5a909034"), n.e("chunk-765cf474")]).then(n.bind(null, "3b15"))
                },
                meta: {
                    eventId: "9kuai9"
                }
            }, {
                path: "/l",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-5a909034"), n.e("chunk-70d800fc")]).then(n.bind(null, "9ff8"))
                },
                meta: {
                    eventId: "haohuo"
                }
            }, {
                path: "/l/jdlist",
                component: function () {
                    return Promise.all([n.e("chunk-5a909034"), n.e("chunk-67123ac0")]).then(n.bind(null, "a421"))
                },
                meta: {
                    eventId: "haohuo"
                }
            }, {
                path: "/l/pddlist",
                component: function () {
                    return Promise.all([n.e("chunk-5a909034"), n.e("chunk-dda1a9c8")]).then(n.bind(null, "34cc"))
                },
                meta: {
                    eventId: "haohuo"
                }
            }, {
                path: "/ddq",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-4396b721")]).then(n.bind(null, "47fb"))
                },
                meta: {
                    eventId: "dongdong"
                }
            }, {
                path: "/realtime/zsz",
                component: function () {
                    return Promise.all([n.e("chunk-65bcb87b"), n.e("chunk-3615057c")]).then(n.bind(null, "3d1b"))
                },
                meta: {
                    eventId: "zhe"
                }
            }, {
                path: "/activity/ac",
                component: function () {
                    return n.e("chunk-63e140da").then(n.bind(null, "32c7"))
                }
            }, {
                path: "/index/notfound",
                component: function () {
                    return n.e("chunk-1c9aac85").then(n.bind(null, "9726"))
                }
            }],
            at = new VueRouter({
                mode: "query",
                base: "https://cmsstaticv2.ffquan.cn/pc/",
                routes: nt
            }),
            rt = at.push;
        at.push = function (t) {
            return rt.call(this, t).catch((function (t) {
                return t
            }))
        };
        var it = at.replace;
        at.replace = function (t) {
            return it.call(this, t).catch((function (t) {
                return t
            }))
        }, at.beforeEach((function (t, e, n) {
            var a = Object(b["c"])("AppToken");
            if ("/stationMaster/login" == t.path) return a ? n("/stationMaster") : n();
            n()
        }));
        var ct, ot = at,
            st = n("dde5"),
            ut = {
                userInfo: {},
                marketGroup: {},
                config: {},
                footerTabbar: {
                    index: 0
                },
                marketGroupConfig: {}
            },
            dt = {
                userInfo: function (t) {
                    return t.userInfo
                },
                marketGroup: function (t) {
                    return t.marketGroup
                },
                config: function (t) {
                    return t.config
                },
                footerTabbar: function (t) {
                    return t.footerTabbar
                },
                marketGroupConfig: function (t) {
                    return t.marketGroupConfig
                }
            },
            pt = "USER_INFO",
            lt = "CLEAR_USER_INFO",
            ht = "MAEKET_GEOUP",
            ft = "CONFIG",
            mt = "footerTabbar",
            bt = "marketGroupConfig",
            gt = {
                saveUserInfo: function (t, e) {
                    var n = t.commit;
                    return n(pt, e)
                },
                clearUserInfo: function (t, e) {
                    var n = t.commit;
                    return n(lt, e)
                },
                saveMarketGroup: function (t, e) {
                    var n = t.commit;
                    return n(ht, e)
                },
                saveConfig: function (t, e) {
                    var n = t.commit;
                    return n(ft, e)
                },
                saveFooterTabbar: function (t, e) {
                    var n = t.commit;
                    return n(mt, e)
                },
                saveMarketGroupConfig: function (t, e) {
                    var n = t.commit;
                    return n(bt, e)
                }
            },
            vt = n("ade3"),
            wt = (ct = {}, Object(vt["a"])(ct, pt, (function (t, e) {
                t.userInfo = Object(a["a"])(Object(a["a"])({}, t.userInfo), e)
            })), Object(vt["a"])(ct, lt, (function (t, e) {
                t.userInfo = {}
            })), Object(vt["a"])(ct, ht, (function (t, e) {
                t.marketGroup = Object(a["a"])(Object(a["a"])({}, t.marketGroup), e)
            })), Object(vt["a"])(ct, ft, (function (t, e) {
                t.config = Object(a["a"])(Object(a["a"])({}, t.config), e), localStorage.setItem("site_id", e.site_id || "1")
            })), Object(vt["a"])(ct, mt, (function (t, e) {
                t[mt] = Object(a["a"])(Object(a["a"])({}, t[mt]), e)
            })), Object(vt["a"])(ct, bt, (function (t, e) {
                t[bt] = Object(a["a"])(Object(a["a"])({}, t[bt]), e)
            })), ct);
        Vue.use(d["a"]);
        var kt = new d["a"].Store({
                state: ut,
                getters: dt,
                actions: gt,
                mutations: wt
            }),
            Ot = kt,
            yt = !!document.getElementById("mid") && document.getElementById("mid").getAttribute("content");
        console.log("production"), window.$mid = yt || window.$mid || window.sessionStorage.getItem("CMS-MID") || "";
        var _t = new i.a({
            project: "cms",
            uid: window.$mid,
            eventId: "shouye",
            env: "prod",
            routerType: 2,
            isExposure: 1
        });
        Vue.config.productionTip = !1, Vue.use(W), Vue.prototype.$services = Object(a["a"])({}, st), Vue.prototype.$BIJsdk = _t, Vue.prototype.$UA = function () {
            var t = navigator.userAgent;
            navigator.appVersion;
            return {
                trident: t.indexOf("Trident") > -1,
                presto: t.indexOf("Presto") > -1,
                webKit: t.indexOf("AppleWebKit") > -1,
                gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"),
                mobile: !!t.match(/AppleWebKit.*Mobile.*/),
                ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
                iPhone: t.indexOf("iPhone") > -1,
                iPad: t.indexOf("iPad") > -1,
                webApp: -1 == t.indexOf("Safari"),
                souyue: t.indexOf("souyue") > -1,
                superapp: t.indexOf("superapp") > -1,
                weixin: t.toLowerCase().indexOf("micromessenger") > -1,
                Safari: t.indexOf("Safari") > -1,
                weibo: t.toLowerCase().indexOf("weibo") > -1,
                isApp: t.indexOf("isApp/1") > -1,
                productType: t.indexOf("productType/1") > -1,
                isAlone: t.indexOf("productType/2") > -1
            }
        }(), ot.beforeEach((function (t, e, n) {
            t.meta.title && (document.title = "".concat(t.meta.title, "-").concat(window.title ? "-".concat(window.title) : "")), (t.path.includes("/l/d") || "/l/jd" == t.path || "/l/pdd" == t.path) && (document.body.style.opacity = "0"), t.query.AppToken && (window.APPTOKEN = t.query.AppToken), window.$tempId = window.$tempId || window.sessionStorage.getItem("CMS-TEMP-ID");
            var a = o.a.parse(window.location.search.split("?")[1]),
                r = a.mid || t.query.mid,
                i = a.temp_id || t.query.temp_id;
            r && (window.$mid = r, window.sessionStorage.setItem("CMS-MID", r)), i && (window.sessionStorage.setItem("CMS-TEMP-ID", i), window.$tempId = i), n(), t.path.includes("/detail") || window.scrollTo(0, 0)
        })), ot.onReady((function (t) {
            "/" == t.path && t.meta && t.meta.eventId && _t.onShow({
                eventId: t.meta.eventId,
                isExposure: 0
            })
        })), ot.afterEach((function (t, e, n) {
            t.path !== e.path && setTimeout((function () {
                try {
                    t.meta.eventId && _t.onShow({
                        eventId: t.meta.eventId,
                        isExposure: 0
                    })
                } catch (e) {}
            }), 0);
            try {
                window.DTKsatc ? DTKsatc.eventStat({
                    name: "PageViweEvent",
                    params: {
                        desc: "页面访问"
                    }
                }) : setTimeout((function () {
                    window.DTKsatc && DTKsatc.eventStat({
                        name: "PageViweEvent",
                        params: {
                            desc: "页面访问"
                        }
                    })
                }), 800)
            } catch (a) {}
        })), Vue.config.productionTip = !1, window.$myApp = new Vue({
            router: ot,
            store: Ot,
            render: function (t) {
                return t(K)
            }
        }).$mount("#app")
    },
    6351: function (t, e, n) {
        t.exports = n.p + "img/sc_modal.74c27a5b.png"
    },
    "7c55": function (t, e, n) {
        "use strict";
        n("2395")
    },
    "8bbf": function (t, e) {
        t.exports = Vue
    },
    "97f0": function (t, e, n) {
        "use strict";
        n("f96a")
    },
    a9f2: function (t, e, n) {},
    b45c: function (t, e, n) {
        "use strict";
        n("4e80")
    },
    b55c: function (t, e, n) {
        "use strict";
        n("a9f2")
    },
    b775: function (t, e, n) {
        "use strict";
        var a = n("15fd"),
            r = n("5530"),
            i = (n("ac1f"), n("1276"), n("caad"), n("2532"), n("d3b7"), n("99af"), n("d4ec")),
            c = n("bee2"),
            o = (n("4e82"), n("bc3a")),
            s = n.n(o),
            u = n("4328"),
            d = n.n(u),
            p = ["form"],
            l = ["form"],
            h = function () {
                function t(e) {
                    Object(i["a"])(this, t), this.config = Object.assign({
                        appKey: "",
                        appSecret: "",
                        checkSign: 1
                    }, e)
                }
                return Object(c["a"])(t, [{
                    key: "makeSign",
                    value: function (t, e) {
                        var n = "",
                            a = 0,
                            r = [];
                        for (var i in t)(t[i] || 0 == t[i]) && r.push("".concat(i, "=").concat(t[i]));
                        for (var c in r.sort(), r) n = "".concat(n).concat(0 === a ? "" : "&").concat(r[c]), a++;
                        var o = md5("".concat(n, "&key=").concat(e));
                        return o
                    }
                }, {
                    key: "makeSignNew",
                    value: function (t) {
                        var e = md5("appKey=".concat(t.appKey, "&timer=").concat(t.timer, "&nonce=").concat(t.nonce, "&key=").concat(t.appSecret));
                        return e
                    }
                }, {
                    key: "request",
                    value: function (t, e) {
                        return 2 == this.config.checkSign ? this.newCheckSignRequest(t, e) : this.checkSignRequest(t, e)
                    }
                }, {
                    key: "checkSignRequest",
                    value: function (t, e) {
                        var n = e.form,
                            i = void 0 === n ? {} : n,
                            c = Object(a["a"])(e, p),
                            o = Object(r["a"])(Object(r["a"])({}, {
                                version: this.config.version,
                                appKey: this.config.appKey
                            }), i),
                            u = Object(r["a"])({}, Object(r["a"])(Object(r["a"])({}, o), {
                                sign: this.makeSign(o, this.config.appSecret)
                            }));
                        return s.a.get("GET" == c.method || "get" == c.method ? "".concat(t.indexOf("?") > -1 ? t : "".concat(t, "?")).concat(d.a.stringify(u)) : t, Object(r["a"])({}, u)).then((function (t) {
                            return t.data
                        }))
                    }
                }, {
                    key: "newCheckSignRequest",
                    value: function (t, e) {
                        var n = e.form,
                            i = void 0 === n ? {} : n,
                            c = Object(a["a"])(e, l),
                            o = Object(r["a"])({}, {
                                appKey: this.config.appKey,
                                appSecret: this.config.appSecret
                            }),
                            s = function (t, e) {
                                return Math.floor(Math.random() * (e - t)) + t
                            },
                            u = {
                                nonce: s(1e5, 999999),
                                timer: (new Date).getTime()
                            },
                            p = Object(r["a"])(Object(r["a"])({}, {
                                url: t,
                                method: "GET",
                                json: !0,
                                form: Object(r["a"])(Object(r["a"])(Object(r["a"])({}, i), u), {
                                    signRan: this.makeSignNew(Object(r["a"])(Object(r["a"])({}, o), u)),
                                    appKey: o.appKey
                                })
                            }), c);
                        return new Promise((function (e, n) {
                            return request(Object(r["a"])(Object(r["a"])(Object(r["a"])({}, p), {
                                url: "GET" == p.method || "get" == p.method ? "".concat(p.url.indexOf("?") > -1 ? p.url : "".concat(p.url, "?")).concat(d.a.stringify(p.form)) : t
                            }), {
                                form: "GET" == p.method || "get" == p.method ? {} : p.form
                            }), (function (t, a, r) {
                                t || 200 != a.statusCode ? n(a.statusCode, r) : e(r)
                            }))
                        }))
                    }
                }]), t
            }(),
            f = h,
            m = n("fa7d"),
            b = ["data", "address", "isNoMid"],
            g = Object(u["parse"])("".concat(window.location.hash.split("?")[1])),
            v = Object(m["c"])("AppToken");
        localStorage.getItem("token");
        g.token ? s.a.defaults.headers.common["token"] = g.token : (g.AppToken || window.APPTOKEN || v) && (s.a.defaults.headers.common["AppToken"] = g.AppToken || window.APPTOKEN || v);
        var w = s.a.create({
            maxContentLength: 5e3
        });
        w.interceptors.request.use((function (t) {
            return t.url.includes("/cms-v2") && (t.headers = Object(r["a"])(Object(r["a"])({}, t.headers), {}, {
                siteId: window.$mid
            })), t
        }), (function (t) {
            return Promise.reject(t)
        })), w.interceptors.response.use((function (t) {
            var e = t.data;
            return 1 != e.code && "10001" != e.code && "1000" != e.code && "5500106" != e.code && "5000705" != e.code && e.msg && "" != e.msg && 0 != e.status && (window.layer ? window.layer.msg(e.msg) : console.error(e.msg)), e
        }), (function (t) {
            return Promise.reject(t)
        }));
        var k = new f({
            appKey: "612bcfe884763",
            appSecret: "5dd20b08158402032845b45f5b67a349",
            checkSign: 1
        });
        e["a"] = function (t, e) {
            var n = e.data,
                i = e.address,
                c = e.isNoMid,
                o = Object(a["a"])(e, b),
                s = Object(m["c"])("jaw_uid"),
                u = "".concat(t).indexOf("dtk_go_app_api") > -1 && s ? {
                    app_token: s
                } : s && "".concat(t).indexOf("taobaoapi") > -1 ? {
                    jaw_uid: s
                } : "".concat(t).indexOf("php-api") > -1 ? {
                    is_new_pc: 1
                } : {},
                d = Object(r["a"])(Object(r["a"])(Object(r["a"])({}, n || {}), u), "".concat(t).indexOf("cms-v2") > -1 && !c ? {
                    siteId: window.$mid
                } : {}),
                p = (i ? Object(m["h"])() : "".concat(t).indexOf("cms-v2") > -1 ? "https://cmscg.dataoke.com" : "".concat(t).indexOf("http") > -1 ? "" : "".concat(t).indexOf("taobaoapi") > -1 ? "https://dtkapi.ffquan.cn" : Object(m["f"])()) + t;
            if (o.isOpenApi) {
                var l = "https://openapi.dataoke.com";
                return k.request("".concat(l).concat(t), Object(r["a"])(Object(r["a"])({}, o), {
                    form: n
                }))
            }
            return "POST" === o.method ? w.post(p, d) : w.get(p, Object(r["a"])(Object(r["a"])({}, {
                params: d
            }), o))
        }
    },
    ca6a: function (t, e, n) {},
    dde5: function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, "getTbGoods", (function () {
            return s
        })), n.d(e, "getSuperCategory", (function () {
            return d
        })), n.d(e, "getGoodsList", (function () {
            return l
        })), n.d(e, "getGoodsByOpen", (function () {
            return f
        })), n.d(e, "getGoodsDetail", (function () {
            return b
        })), n.d(e, "getJdGoods", (function () {
            return v
        })), n.d(e, "getPddGoods", (function () {
            return k
        })), n.d(e, "getCMSV2CmsConf", (function () {
            return y
        })), n.d(e, "getCMSV2Ads", (function () {
            return j
        })), n.d(e, "getActivityList", (function () {
            return C
        })), n.d(e, "getColumnConfig", (function () {
            return S
        })), n.d(e, "getDTKOpenSearchSuggestion", (function () {
            return G
        })), n.d(e, "getDTKOpenCategoryTop100", (function () {
            return A
        })), n.d(e, "getDTKOpenCategorySuper", (function () {
            return q
        })), n.d(e, "getDTKOpenSuperCategory", (function () {
            return M
        })), n.d(e, "getDTKOpenSuperDiscountGoods", (function () {
            return $
        })), n.d(e, "getTbDetails", (function () {
            return D
        })), n.d(e, "sendReports", (function () {
            return F
        })), n.d(e, "getLikeData", (function () {
            return V
        })), n.d(e, "getTodayData", (function () {
            return H
        })), n.d(e, "transformLink", (function () {
            return B
        })), n.d(e, "getJdDetails", (function () {
            return J
        })), n.d(e, "getJDPromotionUnionConvert", (function () {
            return Y
        })), n.d(e, "getpddDetails", (function () {
            return tt
        })), n.d(e, "getPddOauthGoodsPromUrlGenerate", (function () {
            return nt
        })), n.d(e, "getHotSalesData", (function () {
            return rt
        })), n.d(e, "getAds", (function () {
            return ct
        })), n.d(e, "getTodayList", (function () {
            return st
        })), n.d(e, "getDdqList", (function () {
            return dt
        })), n.d(e, "getClassify", (function () {
            return lt
        })), n.d(e, "getRankingList", (function () {
            return ft
        })), n.d(e, "getNineList", (function () {
            return bt
        })), n.d(e, "getInfoList", (function () {
            return vt
        })), n.d(e, "getBrandList", (function () {
            return kt
        })), n.d(e, "getSaveMoneyInfo", (function () {
            return yt
        })), n.d(e, "getRecommendGoodsList", (function () {
            return jt
        }));
        var a = n("5530"),
            r = n("1da1"),
            i = (n("96cf"), n("d3b7"), function () {
                return window.cmsSearchDangerous || ["欧派抱枕", "欧派抱", "气雾棒", "雾化棒", "戒烟贴片", "虚拟香烟", "滤嘴", "气雾健康棒"]
            }),
            c = n("b775"),
            o = n("fa7d");

        function s(t) {
            return u.apply(this, arguments)
        }

        function u() {
            return u = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!(e.keyWords && i().indexOf(decodeURIComponent(encodeURIComponent(e.keyWords))) > -1)) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", new Promise((function (t, e) {
                                t({
                                    requestId: "3ffe72e2a68da500f220b7f4b78ee6fe",
                                    time: 1640942441615,
                                    code: 0,
                                    msg: "成功",
                                    data: {
                                        list: []
                                    }
                                })
                            })));
                        case 2:
                            return t.abrupt("return", Object(c["a"])(o["g"] + "/open-api/goods/list-super-goods", {
                                method: "GET",
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    appkey: "622b674f76e31"
                                })
                            }));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), u.apply(this, arguments)
        }

        function d(t) {
            return p.apply(this, arguments)
        }

        function p() {
            return p = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/category/get-super-category", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.1.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), p.apply(this, arguments)
        }

        function l(t) {
            return h.apply(this, arguments)
        }

        function h() {
            return h = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/get-goods-list", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.2.4"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), h.apply(this, arguments)
        }

        function f(t) {
            return m.apply(this, arguments)
        }

        function m() {
            return m = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/list-similer-goods-by-open", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.2.2"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), m.apply(this, arguments)
        }

        function b(t) {
            return g.apply(this, arguments)
        }

        function g() {
            return g = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/get-goods-details", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.2.3"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), g.apply(this, arguments)
        }

        function v(t) {
            return w.apply(this, arguments)
        }

        function w() {
            return w = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!(e.keyword && i().indexOf(decodeURIComponent(encodeURIComponent(e.keyword))) > -1)) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", new Promise((function (t, e) {
                                t({
                                    requestId: "9af9370039ce168fecbeb2d0121014fc",
                                    time: 1640943312372,
                                    code: 0,
                                    msg: "成功",
                                    data: {
                                        list: [],
                                        totalNum: 0,
                                        pageId: ""
                                    }
                                })
                            })));
                        case 2:
                            return t.abrupt("return", Object(c["a"])("/api/dels/jd/goods/search", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.0.0"
                                })
                            }));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), w.apply(this, arguments)
        }

        function k(t) {
            return O.apply(this, arguments)
        }

        function O() {
            return O = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!(e.keyword && i().indexOf(decodeURIComponent(encodeURIComponent(e.keyword))) > -1)) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", new Promise((function (t, e) {
                                t({
                                    requestId: "72e661b4db2010c5174156722eb20dbe",
                                    time: 1640943360232,
                                    code: 0,
                                    msg: "成功",
                                    data: {
                                        goodsList: [],
                                        listId: "",
                                        searchId: "",
                                        totalCount: 0
                                    }
                                })
                            })));
                        case 2:
                            return t.abrupt("return", Object(c["a"])("/api/dels/pdd/goods/cms/search", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.0.0"
                                })
                            }));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), O.apply(this, arguments)
        }

        function y(t) {
            return _.apply(this, arguments)
        }

        function _() {
            return _ = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!window.$config || !window.$config.site_id) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", new Promise((function (t) {
                                t({
                                    code: 1,
                                    msg: "",
                                    data: window.$config
                                })
                            })));
                        case 2:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/cms-conf", {
                                method: "GET",
                                requestType: "form",
                                data: Object(a["a"])(Object(a["a"])({}, e), window.$tempId ? {
                                    temp_id: window.$tempId
                                } : {})
                            }));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), _.apply(this, arguments)
        }

        function j(t) {
            return x.apply(this, arguments)
        }

        function x() {
            return x = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/ads", {
                                method: "GET",
                                data: Object(a["a"])({}, e)
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), x.apply(this, arguments)
        }

        function C(t) {
            return T.apply(this, arguments)
        }

        function T() {
            return T = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/activity-list", {
                                method: "GET",
                                data: Object(a["a"])({}, e)
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), T.apply(this, arguments)
        }

        function S(t) {
            return R.apply(this, arguments)
        }

        function R() {
            return R = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/column-conf", {
                                method: "GET",
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    is_pc: 1
                                }),
                                isNoMid: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), R.apply(this, arguments)
        }

        function G(t) {
            return I.apply(this, arguments)
        }

        function I() {
            return I = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/search-suggestion", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.2"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), I.apply(this, arguments)
        }

        function A(t) {
            return E.apply(this, arguments)
        }

        function E() {
            return E = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/category/get-top100", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.2"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), E.apply(this, arguments)
        }

        function q(t) {
            return N.apply(this, arguments)
        }

        function N() {
            return N = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/category/get-super-category", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.1.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), N.apply(this, arguments)
        }

        function M(t) {
            return P.apply(this, arguments)
        }

        function P() {
            return P = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/category/ddq-goods-list", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.2.1"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), P.apply(this, arguments)
        }

        function $(t) {
            return L.apply(this, arguments)
        }

        function L() {
            return L = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/super-discount-goods", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), L.apply(this, arguments)
        }

        function D(t) {
            return z.apply(this, arguments)
        }

        function z() {
            return z = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/get-goods-details", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.2.3"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), z.apply(this, arguments)
        }

        function F(t) {
            return K.apply(this, arguments)
        }

        function K() {
            return K = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/my-feedback", {
                                method: "POST",
                                data: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), K.apply(this, arguments)
        }

        function V(t) {
            return U.apply(this, arguments)
        }

        function U() {
            return U = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/list-similer-goods-by-open", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.2.2"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), U.apply(this, arguments)
        }

        function H(t) {
            return Q.apply(this, arguments)
        }

        function Q() {
            return Q = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/get-ranking-list", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {}, {
                                    version: "v1.3.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), Q.apply(this, arguments)
        }

        function B(t) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return Z = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/taobaoapi/get-privilege", {
                                method: "GET",
                                data: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), Z.apply(this, arguments)
        }

        function J(t) {
            return W.apply(this, arguments)
        }

        function W() {
            return W = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/dels/jd/goods/get-details", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), W.apply(this, arguments)
        }

        function Y(t) {
            return X.apply(this, arguments)
        }

        function X() {
            return X = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/dtk_go_cps_api/jd/tools-transform-chain", {
                                method: "GET",
                                data: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), X.apply(this, arguments)
        }

        function tt(t) {
            return et.apply(this, arguments)
        }

        function et() {
            return et = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/dels/pdd/goods/detail", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), et.apply(this, arguments)
        }

        function nt(t) {
            return at.apply(this, arguments)
        }

        function at() {
            return at = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/dtk_go_cps_api/pdd/oauth-goods-prom-url-generate", {
                                method: "GET",
                                data: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), at.apply(this, arguments)
        }

        function rt(t) {
            return it.apply(this, arguments)
        }

        function it() {
            return it = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/subdivision/get-rank-list", {
                                method: "GET",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.0"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), it.apply(this, arguments)
        }

        function ct() {
            return ot.apply(this, arguments)
        }

        function ot() {
            return ot = Object(r["a"])(regeneratorRuntime.mark((function t() {
                var e, n = arguments;
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : 1, t.abrupt("return", Object(c["a"])("/cms-v2/ads", {
                                method: "GET",
                                data: {
                                    page: e,
                                    is_pc: 1,
                                    site_id: window.$mid
                                }
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), ot.apply(this, arguments)
        }

        function st(t) {
            return ut.apply(this, arguments)
        }

        function ut() {
            return ut = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/today-buy", {
                                method: "GET",
                                isNoMid: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), ut.apply(this, arguments)
        }

        function dt(t) {
            return pt.apply(this, arguments)
        }

        function pt() {
            return pt = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/category/ddq-goods-list", {
                                method: "GET",
                                requestType: "form",
                                isOpenApi: !0,
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.2.1"
                                })
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), pt.apply(this, arguments)
        }

        function lt(t) {
            return ht.apply(this, arguments)
        }

        function ht() {
            return ht = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/category/get-super-category", {
                                method: "GET",
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.1.0"
                                }),
                                isOpenApi: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), ht.apply(this, arguments)
        }

        function ft(t) {
            return mt.apply(this, arguments)
        }

        function mt() {
            return mt = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/get-ranking-list", {
                                method: "GET",
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.3.0",
                                    pageSize: 9
                                }),
                                isOpenApi: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), mt.apply(this, arguments)
        }

        function bt(t) {
            return gt.apply(this, arguments)
        }

        function gt() {
            return gt = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/nine/op-goods-list", {
                                method: "GET",
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v2.0.0",
                                    pageSize: 9
                                }),
                                isOpenApi: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), gt.apply(this, arguments)
        }

        function vt(t) {
            return wt.apply(this, arguments)
        }

        function wt() {
            return wt = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/api/goods/get-half-price-day", {
                                method: "GET",
                                data: Object(a["a"])(Object(a["a"])({}, e), {
                                    version: "v1.0.0",
                                    pageSize: 9,
                                    page: 1
                                }),
                                isOpenApi: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), wt.apply(this, arguments)
        }

        function kt(t) {
            return Ot.apply(this, arguments)
        }

        function Ot() {
            return Ot = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/brand-list", {
                                method: "GET",
                                data: {
                                    page: 1,
                                    page_size: 10
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), Ot.apply(this, arguments)
        }

        function yt(t) {
            return _t.apply(this, arguments)
        }

        function _t() {
            return _t = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/gmv", {
                                method: "GET",
                                data: {
                                    site_id: window.$mid
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), _t.apply(this, arguments)
        }

        function jt(t) {
            return xt.apply(this, arguments)
        }

        function xt() {
            return xt = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object(c["a"])("/cms-v2/recommend-goods", {
                                method: "GET",
                                isNoMid: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), xt.apply(this, arguments)
        }
    },
    f96a: function (t, e, n) {},
    fa03: function (t, e, n) {},
    fa7d: function (t, e, n) {
        "use strict";
        (function (t) {
            n.d(e, "f", (function () {
                return r
            })), n.d(e, "h", (function () {
                return i
            })), n.d(e, "g", (function () {
                return o
            })), n.d(e, "d", (function () {
                return u
            })), n.d(e, "c", (function () {
                return d
            })), n.d(e, "i", (function () {
                return p
            })), n.d(e, "a", (function () {
                return l
            })), n.d(e, "b", (function () {
                return h
            })), n.d(e, "e", (function () {
                return f
            }));
            var a = n("2909"),
                r = (n("4de4"), n("d3b7"), n("d81d"), n("ac1f"), n("466d"), n("1276"), n("25f0"), n("a15b"), n("99af"), n("b680"), n("00b4"), n("3ca3"), n("ddb0"), n("2b3d"), n("9861"), n("5319"), n("a9e3"), function () {
                    return "development" === t.NODE_ENV || window.location.href.indexOf("buydance") > -1 || window.location.href.indexOf("localhost") > 0 ? "//dtkapi.buydance.com" : "//dtkapi.ffquan.cn"
                }),
                i = function () {
                    window.document.domain;
                    return "".concat(window.location.origin)
                },
                c = function () {
                    var t = window.document.domain;
                    return t.indexOf("local") > -1 || t.indexOf("127.0.0.1") > -1 || t.indexOf("buydance") > -1 ? "//public.buydance.com" : "//public.ffquan.cn"
                },
                o = ("development" === t.NODE_ENV || window.location.href.indexOf("buydance") > -1 || window.location.href.indexOf("localhost"), "https://openapiv2.dataoke.com"),
                s = function () {
                    var t = [/(.+\.)?(([^.]+)\.(com.cn|net.cn|org.cn|gov.cn))/, /(.+\.)?(([^.]+)\.([^.]+))/],
                        e = window.location.host;
                    if (e.indexOf("localhost") >= 0) return "localhost";
                    if (e.indexOf("127.0.0.1") >= 0) return "127.0.0.1";
                    var n = t.map((function (t) {
                        return e.match(t)
                    })).filter((function (t) {
                        return null !== t
                    }))[0];
                    return n[2]
                },
                u = function (t, e, n) {
                    var a = s(),
                        r = new Date;
                    r.setHours(r.getHours() + (n || 720)), document.cookie = t + "=" + escape(e) + ";expires=" + r.toGMTString() + ";domain=".concat(a, ";path=/")
                },
                d = function (t) {
                    var e, n;
                    return document.cookie.length > 0 && (e = document.cookie.indexOf(t + "="), -1 !== e) && (e = e + t.length + 1, n = document.cookie.indexOf(";", e), -1 === n && (n = document.cookie.length), unescape(document.cookie.substring(e, n)))
                },
                p = function (t, e) {
                    return window.isImportCDN || (window.isImportCDN = []), new Promise((function (n) {
                        if (window.isImportCDN.indexOf(t) > -1 || "".concat(t).indexOf("jquery") > -1 && window.$) return n(window[e]), !1;
                        var r = document.createElement("script");
                        r.src = "".concat(t).indexOf("//") >= 0 ? "".concat(t, "?v=20200603") : "".concat(c()).concat(t, "?v=20200603"), r.type = "text/javascript", r.charset = "utf-8", r.onload = function () {
                            window.isImportCDN = [].concat(Object(a["a"])(window.isImportCDN), [t]), n(window[e])
                        }, document.querySelectorAll("body")[0].appendChild(r)
                    }))
                };
            var l = function (t) {
                    var e, n, a, r = t.num,
                        i = r[0],
                        c = r[1];
                    try {
                        e = i.toString().split(".")[1].length
                    } catch (o) {
                        e = 0
                    }
                    try {
                        n = c.toString().split(".")[1].length
                    } catch (o) {
                        n = 0
                    }
                    return a = Math.pow(10, Math.max(e, n)), (i * a + c * a) / a
                },
                h = function (t) {
                    var e, n, a, r, i = t.num;
                    try {
                        e = i[0].toString().split(".")[1].length
                    } catch (c) {
                        e = 0
                    }
                    try {
                        n = i[1].toString().split(".")[1].length
                    } catch (c) {
                        n = 0
                    }
                    return a = Math.pow(10, Math.max(e, n)), r = e >= n ? e : n, Number(((i[0] * a - i[1] * a) / a).toFixed(r))
                };
            (function () {
                try {
                    document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                } catch (t) {
                    return ""
                }
            })();

            function f() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                    var e = 16 * Math.random() | 0,
                        n = "x" == t ? e : 3 & e | 8;
                    return n.toString(16)
                }))
            }
        }).call(this, n("4362"))
    }
});
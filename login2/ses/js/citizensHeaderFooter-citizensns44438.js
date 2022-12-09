/*!
 * SVN revision number: 44438
 * Tue May 11 2021 13:23:30 GMT-0400 (Eastern Daylight Time)
 */
/*!
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 *
 */
/**
 * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
/*! jQuery UI - v1.11.2 - 2014-12-17
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, button.js, datepicker.js, dialog.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
/*!
 * jQuery UI Core 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
/*!
 * jQuery UI Widget 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
/*!
 * jQuery UI Mouse 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
/*!
 * jQuery UI Position 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
/*!
 * jQuery UI Draggable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
/*!
 * jQuery UI Resizable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
/*!
 * jQuery UI Button 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
/*!
 * jQuery UI Datepicker 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
/*!
 * jQuery UI Dialog 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */
function contentLoaded(e, t) {
    var n = !1,
        r = !0,
        i = e.document,
        s = i.documentElement,
        o = i.addEventListener,
        u = o ? "addEventListener" : "attachEvent",
        a = o ? "removeEventListener" : "detachEvent",
        f = o ? "" : "on",
        l = function(r) {
            if(r.type == "readystatechange" && i.readyState != "complete") return;
            (r.type == "load" ? e : i)[a](f + r.type, l, !1), !n && (n = !0) && t.call(e, r.type || r)
        },
        c = function() {
            try {
                s.doScroll("left")
            } catch(e) {
                setTimeout(c, 50);
                return
            }
            l("poll")
        };
    if(i.readyState == "complete") t.call(e, "lazy");
    else {
        if(!o && s.doScroll) {
            try {
                r = !e.frameElement
            } catch(h) {}
            r && c()
        }
        i[u](f + "DOMContentLoaded", l, !1), i[u](f + "readystatechange", l, !1), e[u](f + "load", l, !1)
    }
}(function(e, t) {
    e.citizensHeaderFooter = t, e.HHF = t(), e.citizensHeaderFooter.factory = function(e) {
        console.log("factory()", e)
    }
})(this, function(e) {
    var t, n, r;
    return function(e) {
            function v(e, t) {
                return h.call(e, t)
            }

            function m(e, t) {
                var n, r, i, s, o, u, a, f, c, h, p, v = t && t.split("/"),
                    m = l.map,
                    g = m && m["*"] || {};
                if(e && e.charAt(0) === ".")
                    if(t) {
                        v = v.slice(0, v.length - 1), e = e.split("/"), o = e.length - 1, l.nodeIdCompat && d.test(e[o]) && (e[o] = e[o].replace(d, "")), e = v.concat(e);
                        for(c = 0; c < e.length; c += 1) {
                            p = e[c];
                            if(p === ".") e.splice(c, 1), c -= 1;
                            else if(p === "..") {
                                if(c === 1 && (e[2] === ".." || e[0] === "..")) break;
                                c > 0 && (e.splice(c - 1, 2), c -= 2)
                            }
                        }
                        e = e.join("/")
                    } else e.indexOf("./") === 0 && (e = e.substring(2));
                if((v || g) && m) {
                    n = e.split("/");
                    for(c = n.length; c > 0; c -= 1) {
                        r = n.slice(0, c).join("/");
                        if(v)
                            for(h = v.length; h > 0; h -= 1) {
                                i = m[v.slice(0, h).join("/")];
                                if(i) {
                                    i = i[r];
                                    if(i) {
                                        s = i, u = c;
                                        break
                                    }
                                }
                            }
                        if(s) break;
                        !a && g && g[r] && (a = g[r], f = c)
                    }!s && a && (s = a, u = f), s && (n.splice(0, u, s), e = n.join("/"))
                }
                return e
            }

            function g(t, n) {
                return function() {
                    var r = p.call(arguments, 0);
                    return typeof r[0] != "string" && r.length === 1 && r.push(null), s.apply(e, r.concat([t, n]))
                }
            }

            function y(e) {
                return function(t) {
                    return m(t, e)
                }
            }

            function b(e) {
                return function(t) {
                    a[e] = t
                }
            }

            function w(t) {
                if(v(f, t)) {
                    var n = f[t];
                    delete f[t], c[t] = !0, i.apply(e, n)
                }
                if(!v(a, t) && !v(c, t)) throw new Error("No " + t);
                return a[t]
            }

            function E(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function S(e) {
                return function() {
                    return l && l.config && l.config[e] || {}
                }
            }
            var i, s, o, u, a = {},
                f = {},
                l = {},
                c = {},
                h = Object.prototype.hasOwnProperty,
                p = [].slice,
                d = /\.js$/;
            o = function(e, t) {
                var n, r = E(e),
                    i = r[0];
                return e = r[1], i && (i = m(i, t), n = w(i)), i ? n && n.normalize ? e = n.normalize(e, y(t)) : e = m(e, t) : (e = m(e, t), r = E(e), i = r[0], e = r[1], i && (n = w(i))), {
                    f: i ? i + "!" + e : e,
                    n: e,
                    pr: i,
                    p: n
                }
            }, u = {
                require: function(e) {
                    return g(e)
                },
                exports: function(e) {
                    var t = a[e];
                    return typeof t != "undefined" ? t : a[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: a[e],
                        config: S(e)
                    }
                }
            }, i = function(t, n, r, i) {
                var s, l, h, p, d, m = [],
                    y = typeof r,
                    E;
                i = i || t;
                if(y === "undefined" || y === "function") {
                    n = !n.length && r.length ? ["require", "exports", "module"] : n;
                    for(d = 0; d < n.length; d += 1) {
                        p = o(n[d], i), l = p.f;
                        if(l === "require") m[d] = u.require(t);
                        else if(l === "exports") m[d] = u.exports(t), E = !0;
                        else if(l === "module") s = m[d] = u.module(t);
                        else if(v(a, l) || v(f, l) || v(c, l)) m[d] = w(l);
                        else {
                            if(!p.p) throw new Error(t + " missing " + l);
                            p.p.load(p.n, g(i, !0), b(l), {}), m[d] = a[l]
                        }
                    }
                    h = r ? r.apply(a[t], m) : undefined;
                    if(t)
                        if(s && s.exports !== e && s.exports !== a[t]) a[t] = s.exports;
                        else if(h !== e || !E) a[t] = h
                } else t && (a[t] = r)
            }, t = n = s = function(t, n, r, a, f) {
                if(typeof t == "string") return u[t] ? u[t](n) : w(o(t, n).f);
                if(!t.splice) {
                    l = t, l.deps && s(l.deps, l.callback);
                    if(!n) return;
                    n.splice ? (t = n, n = r, r = null) : t = e
                }
                return n = n || function() {}, typeof r == "function" && (r = a, a = f), a ? i(e, t, n, r) : setTimeout(function() {
                    i(e, t, n, r)
                }, 4), s
            }, s.config = function(e) {
                return s(e)
            }, t._defined = a, r = function(e, t, n) {
                t.splice || (n = t, t = []), !v(a, e) && !v(f, e) && (f[e] = [e, t, n])
            }, r.amd = {
                jQuery: !0
            }
        }(), r("almond", function() {}), window.Modernizr = function(e, t, n) {
            function r(e) {
                g.cssText = e
            }

            function i(e, t) {
                return r(E.join(e + ";") + (t || ""))
            }

            function s(e, t) {
                return typeof e === t
            }

            function o(e, t) {
                return !!~("" + e).indexOf(t)
            }

            function u(e, t) {
                for(var r in e) {
                    var i = e[r];
                    if(!o(i, "-") && g[i] !== n) return t == "pfx" ? i : !0
                }
                return !1
            }

            function a(e, t, r) {
                for(var i in e) {
                    var o = t[e[i]];
                    if(o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
                }
                return !1
            }

            function f(e, t, n) {
                var r = e.charAt(0).toUpperCase() + e.slice(1),
                    i = (e + " " + x.join(r + " ") + r).split(" ");
                return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + T.join(r + " ") + r).split(" "), a(i, t, n))
            }

            function l() {
                h.input = function(n) {
                    for(var r = 0, i = n.length; r < i; r++) L[n[r]] = n[r] in y;
                    return L.list && (L.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), L
                }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
                    for(var r = 0, i, s, o, u = e.length; r < u; r++) y.setAttribute("type", s = e[r]), i = y.type !== "text", i && (y.value = b, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && y.style.WebkitAppearance !== n ? (d.appendChild(y), o = t.defaultView, i = o.getComputedStyle && o.getComputedStyle(y, null).WebkitAppearance !== "textfield" && y.offsetHeight !== 0, d.removeChild(y)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = y.checkValidity && y.checkValidity() === !1 : i = y.value != b)), k[e[r]] = !!i;
                    return k
                }("search tel url email datetime date month week time datetime-local number range color".split(" "))
            }
            var c = "2.6.2",
                h = {},
                p = !0,
                d = t.documentElement,
                v = "modernizr",
                m = t.createElement(v),
                g = m.style,
                y = t.createElement("input"),
                b = ":)",
                w = {}.toString,
                E = " -webkit- -moz- -o- -ms- ".split(" "),
                S = "Webkit Moz O ms",
                x = S.split(" "),
                T = S.toLowerCase().split(" "),
                N = {
                    svg: "http://www.w3.org/2000/svg"
                },
                C = {},
                k = {},
                L = {},
                A = [],
                O = A.slice,
                M, _ = function(e, n, r, i) {
                    var s, o, u, a, f = t.createElement("div"),
                        l = t.body,
                        c = l || t.createElement("body");
                    if(parseInt(r, 10))
                        while(r--) u = t.createElement("div"), u.id = i ? i[r] : v + (r + 1), f.appendChild(u);
                    return s = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), f.id = v, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), d.style.overflow = a), !!o
                },
                D = function(t) {
                    var n = e.matchMedia || e.msMatchMedia;
                    if(n) return n(t).matches;
                    var r;
                    return _("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                        r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
                    }), r
                },
                P = function() {
                    function e(e, i) {
                        i = i || t.createElement(r[e] || "div"), e = "on" + e;
                        var o = e in i;
                        return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
                    }
                    var r = {
                        select: "input",
                        change: "input",
                        submit: "form",
                        reset: "form",
                        error: "img",
                        load: "img",
                        abort: "img"
                    };
                    return e
                }(),
                H = {}.hasOwnProperty,
                B;
            !s(H, "undefined") && !s(H.call, "undefined") ? B = function(e, t) {
                return H.call(e, t)
            } : B = function(e, t) {
                return t in e && s(e.constructor.prototype[t], "undefined")
            }, Function.prototype.bind || (Function.prototype.bind = function(e) {
                var t = this;
                if(typeof t != "function") throw new TypeError;
                var n = O.call(arguments, 1),
                    r = function() {
                        if(this instanceof r) {
                            var i = function() {};
                            i.prototype = t.prototype;
                            var s = new i,
                                o = t.apply(s, n.concat(O.call(arguments)));
                            return Object(o) === o ? o : s
                        }
                        return t.apply(e, n.concat(O.call(arguments)))
                    };
                return r
            }), C.flexbox = function() {
                return f("flexWrap")
            }, C.canvas = function() {
                var e = t.createElement("canvas");
                return !!e.getContext && !!e.getContext("2d")
            }, C.canvastext = function() {
                return !!h.canvas && !!s(t.createElement("canvas").getContext("2d").fillText, "function")
            }, C.webgl = function() {
                return !!e.WebGLRenderingContext
            }, C.touch = function() {
                var n;
                return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : _(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                    n = e.offsetTop === 9
                }), n
            }, C.geolocation = function() {
                return "geolocation" in navigator
            }, C.postmessage = function() {
                return !!e.postMessage
            }, C.websqldatabase = function() {
                return !!e.openDatabase
            }, C.indexedDB = function() {
                return !!f("indexedDB", e)
            }, C.hashchange = function() {
                return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
            }, C.history = function() {
                return !!e.history && !!history.pushState
            }, C.draganddrop = function() {
                var e = t.createElement("div");
                return "draggable" in e || "ondragstart" in e && "ondrop" in e
            }, C.websockets = function() {
                return "WebSocket" in e || "MozWebSocket" in e
            }, C.rgba = function() {
                return r("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
            }, C.hsla = function() {
                return r("background-color:hsla(120,40%,100%,.5)"), o(g.backgroundColor, "rgba") || o(g.backgroundColor, "hsla")
            }, C.multiplebgs = function() {
                return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
            }, C.backgroundsize = function() {
                return f("backgroundSize")
            }, C.borderimage = function() {
                return f("borderImage")
            }, C.borderradius = function() {
                return f("borderRadius")
            }, C.boxshadow = function() {
                return f("boxShadow")
            }, C.textshadow = function() {
                return t.createElement("div").style.textShadow === ""
            }, C.opacity = function() {
                return i("opacity:.55"), /^0.55$/.test(g.opacity)
            }, C.cssanimations = function() {
                return f("animationName")
            }, C.csscolumns = function() {
                return f("columnCount")
            }, C.cssgradients = function() {
                var e = "background-image:",
                    t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                    n = "linear-gradient(left top,#9f9, white);";
                return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)), o(g.backgroundImage, "gradient")
            }, C.cssreflections = function() {
                return f("boxReflect")
            }, C.csstransforms = function() {
                return !!f("transform")
            }, C.csstransforms3d = function() {
                var e = !!f("perspective");
                return e && "webkitPerspective" in d.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                    e = t.offsetLeft === 9 && t.offsetHeight === 3
                }), e
            }, C.csstransitions = function() {
                return f("transition")
            }, C.fontface = function() {
                var e;
                return _('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                    var i = t.getElementById("smodernizr"),
                        s = i.sheet || i.styleSheet,
                        o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                    e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
                }), e
            }, C.generatedcontent = function() {
                var e;
                return _(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                    e = t.offsetHeight >= 3
                }), e
            }, C.video = function() {
                var e = t.createElement("video"),
                    n = !1;
                try {
                    if(n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
                } catch(r) {}
                return n
            }, C.audio = function() {
                var e = t.createElement("audio"),
                    n = !1;
                try {
                    if(n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
                } catch(r) {}
                return n
            }, C.localstorage = function() {
                try {
                    return localStorage.setItem(v, v), localStorage.removeItem(v), !0
                } catch(e) {
                    return !1
                }
            }, C.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
                } catch(e) {
                    return !1
                }
            }, C.webworkers = function() {
                return !!e.Worker
            }, C.applicationcache = function() {
                return !!e.applicationCache
            }, C.svg = function() {
                return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
            }, C.inlinesvg = function() {
                var e = t.createElement("div");
                return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
            }, C.smil = function() {
                return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
            }, C.svgclippaths = function() {
                return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
            };
            for(var j in C) B(C, j) && (M = j.toLowerCase(), h[M] = C[j](), A.push((h[M] ? "" : "no-") + M));
            return h.input || l(), h.addTest = function(e, t) {
                    if(typeof e == "object")
                        for(var r in e) B(e, r) && h.addTest(r, e[r]);
                    else {
                        e = e.toLowerCase();
                        if(h[e] !== n) return h;
                        t = typeof t == "function" ? t() : t, typeof p != "undefined" && p && (d.className += " " + (t ? "" : "no-") + e), h[e] = t
                    }
                    return h
                }, r(""), m = y = null,
                function(e, t) {
                    function n(e, t) {
                        var n = e.createElement("p"),
                            r = e.getElementsByTagName("head")[0] || e.documentElement;
                        return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                    }

                    function r() {
                        var e = g.elements;
                        return typeof e == "string" ? e.split(" ") : e
                    }

                    function i(e) {
                        var t = v[e[p]];
                        return t || (t = {}, d++, e[p] = d, v[d] = t), t
                    }

                    function s(e, n, r) {
                        n || (n = t);
                        if(m) return n.createElement(e);
                        r || (r = i(n));
                        var s;
                        return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
                    }

                    function o(e, n) {
                        e || (e = t);
                        if(m) return e.createDocumentFragment();
                        n = n || i(e);
                        var s = n.frag.cloneNode(),
                            o = 0,
                            u = r(),
                            a = u.length;
                        for(; o < a; o++) s.createElement(u[o]);
                        return s
                    }

                    function u(e, t) {
                        t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                            return g.shivMethods ? s(n, e, t) : t.createElem(n)
                        }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                        }) + ");return n}")(g, t.frag)
                    }

                    function a(e) {
                        e || (e = t);
                        var r = i(e);
                        return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
                    }
                    var f = e.html5 || {},
                        l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        h, p = "_html5shiv",
                        d = 0,
                        v = {},
                        m;
                    (function() {
                        try {
                            var e = t.createElement("a");
                            e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function() {
                                t.createElement("a");
                                var e = t.createDocumentFragment();
                                return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                            }()
                        } catch(n) {
                            h = !0, m = !0
                        }
                    })();
                    var g = {
                        elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                        shivCSS: f.shivCSS !== !1,
                        supportsUnknownElements: m,
                        shivMethods: f.shivMethods !== !1,
                        type: "default",
                        shivDocument: a,
                        createElement: s,
                        createDocumentFragment: o
                    };
                    e.html5 = g, a(t)
                }(this, t), h._version = c, h._prefixes = E, h._domPrefixes = T, h._cssomPrefixes = x, h.mq = D, h.hasEvent = P, h.testProp = function(e) {
                    return u([e])
                }, h.testAllProps = f, h.testStyles = _, h.prefixed = function(e, t, n) {
                    return t ? f(e, t, n) : f(e, "pfx")
                }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + A.join(" ") : ""), h
        }(this, this.document),
        function(e, t, n) {
            function r(e) {
                return "[object Function]" == d.call(e)
            }

            function i(e) {
                return "string" == typeof e
            }

            function s() {}

            function o(e) {
                return !e || "loaded" == e || "complete" == e || "uninitialized" == e
            }

            function u() {
                var e = v.shift();
                m = 1, e ? e.t ? h(function() {
                    ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
                }, 0) : (e(), u()) : m = 0
            }

            function a(e, n, r, i, s, a, f) {
                function l(t) {
                    if(!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                        "img" != e && h(function() {
                            b.removeChild(c)
                        }, 50);
                        for(var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                    }
                }
                var f = f || k.errorTimeout,
                    c = t.createElement(e),
                    d = 0,
                    g = 0,
                    w = {
                        t: r,
                        s: n,
                        e: s,
                        a: a,
                        x: f
                    };
                1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
                    l.call(this, g)
                }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
            }

            function f(e, t, n, r, s) {
                return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
            }

            function l() {
                var e = k;
                return e.loader = {
                    load: f,
                    i: 0
                }, e
            }
            var c = t.documentElement,
                h = e.setTimeout,
                p = t.getElementsByTagName("script")[0],
                d = {}.toString,
                v = [],
                m = 0,
                g = "MozAppearance" in c.style,
                y = g && !!t.createRange().compareNode,
                b = y ? c : p.parentNode,
                c = e.opera && "[object Opera]" == d.call(e.opera),
                c = !!t.attachEvent && !c,
                w = g ? "object" : c ? "script" : "img",
                E = c ? "script" : w,
                S = Array.isArray || function(e) {
                    return "[object Array]" == d.call(e)
                },
                x = [],
                T = {},
                N = {
                    timeout: function(e, t) {
                        return t.length && (e.timeout = t[0]), e
                    }
                },
                C, k;
            k = function(e) {
                function t(e) {
                    var e = e.split("!"),
                        t = x.length,
                        n = e.pop(),
                        r = e.length,
                        n = {
                            url: n,
                            origUrl: n,
                            prefixes: e
                        },
                        i, s, o;
                    for(s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
                    for(s = 0; s < t; s++) n = x[s](n);
                    return n
                }

                function o(e, i, s, o, u) {
                    var a = t(e),
                        f = a.autoCallback;
                    a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                        l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
                    })))
                }

                function u(e, t) {
                    function n(e, n) {
                        if(e) {
                            if(i(e)) n || (f = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            }), o(e, f, t, 0, u);
                            else if(Object(e) === e)
                                for(p in h = function() {
                                        var t = 0,
                                            n;
                                        for(n in e) e.hasOwnProperty(n) && t++;
                                        return t
                                    }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                                    var e = [].slice.call(arguments);
                                    l.apply(this, e), c()
                                } : f[p] = function(e) {
                                    return function() {
                                        var t = [].slice.call(arguments);
                                        e && e.apply(this, t), c()
                                    }
                                }(l[p])), o(e[p], f, t, p, u))
                        } else !n && c()
                    }
                    var u = !!e.test,
                        a = e.load || e.both,
                        f = e.callback || s,
                        l = f,
                        c = e.complete || s,
                        h, p;
                    n(u ? e.yep : e.nope, !!a), a && n(a)
                }
                var a, f, c = this.yepnope.loader;
                if(i(e)) o(e, 0, c, 0);
                else if(S(e))
                    for(a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
                else Object(e) === e && u(e, c)
            }, k.addPrefix = function(e, t) {
                N[e] = t
            }, k.addFilter = function(e) {
                x.push(e)
            }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
                t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
            }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
                var l = t.createElement("script"),
                    c, d, i = i || k.errorTimeout;
                l.src = e;
                for(d in r) l.setAttribute(d, r[d]);
                n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
                    !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
                }, h(function() {
                    c || (c = 1, n(1))
                }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
            }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
                var i = t.createElement("link"),
                    f, n = a ? u : n || s;
                i.href = e, i.rel = "stylesheet", i.type = "text/css";
                for(f in r) i.setAttribute(f, r[f]);
                o || (p.parentNode.insertBefore(i, p), h(n, 0))
            }
        }(this, document), Modernizr.load = function() {
            yepnope.apply(window, [].slice.call(arguments, 0))
        }, r("modernizr", function() {}),
        function(e, t) {
            typeof r == "function" && r.amd ? r("handlebars.runtime", [], t) : typeof exports == "object" ? module.exports = t() : e.Handlebars = e.Handlebars || t()
        }(this, function() {
            var e = function() {
                    "use strict";

                    function t(e) {
                        this.string = e
                    }
                    var e;
                    return t.prototype.toString = function() {
                        return "" + this.string
                    }, e = t, e
                }(),
                t = function(e) {
                    "use strict";

                    function o(e) {
                        return r[e]
                    }

                    function u(e) {
                        for(var t = 1; t < arguments.length; t++)
                            for(var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                        return e
                    }

                    function c(e) {
                        return e instanceof n ? e.toString() : e == null ? "" : e ? (e = "" + e, s.test(e) ? e.replace(i, o) : e) : e + ""
                    }

                    function h(e) {
                        return !e && e !== 0 ? !0 : l(e) && e.length === 0 ? !0 : !1
                    }

                    function p(e, t) {
                        return(e ? e + "." : "") + t
                    }
                    var t = {},
                        n = e,
                        r = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        },
                        i = /[&<>"'`]/g,
                        s = /[&<>"'`]/;
                    t.extend = u;
                    var a = Object.prototype.toString;
                    t.toString = a;
                    var f = function(e) {
                        return typeof e == "function"
                    };
                    f(/x/) && (f = function(e) {
                        return typeof e == "function" && a.call(e) === "[object Function]"
                    });
                    var f;
                    t.isFunction = f;
                    var l = Array.isArray || function(e) {
                        return e && typeof e == "object" ? a.call(e) === "[object Array]" : !1
                    };
                    return t.isArray = l, t.escapeExpression = c, t.isEmpty = h, t.appendContextPath = p, t
                }(e),
                n = function() {
                    "use strict";

                    function n(e, n) {
                        var r;
                        n && n.firstLine && (r = n.firstLine, e += " - " + r + ":" + n.firstColumn);
                        var i = Error.prototype.constructor.call(this, e);
                        for(var s = 0; s < t.length; s++) this[t[s]] = i[t[s]];
                        r && (this.lineNumber = r, this.column = n.firstColumn)
                    }
                    var e, t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                    return n.prototype = new Error, e = n, e
                }(),
                r = function(e, t) {
                    "use strict";

                    function h(e, t) {
                        this.helpers = e || {}, this.partials = t || {}, p(this)
                    }

                    function p(e) {
                        e.registerHelper("helperMissing", function() {
                            if(arguments.length === 1) return undefined;
                            throw new i("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                        }), e.registerHelper("blockHelperMissing", function(t, n) {
                            var i = n.inverse,
                                s = n.fn;
                            if(t === !0) return s(this);
                            if(t === !1 || t == null) return i(this);
                            if(a(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
                            if(n.data && n.ids) {
                                var o = m(n.data);
                                o.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {
                                    data: o
                                }
                            }
                            return s(t, n)
                        }), e.registerHelper("each", function(e, t) {
                            if(!t) throw new i("Must pass iterator to #each");
                            var n = t.fn,
                                s = t.inverse,
                                o = 0,
                                u = "",
                                l, c;
                            t.data && t.ids && (c = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), f(e) && (e = e.call(this)), t.data && (l = m(t.data));
                            if(e && typeof e == "object")
                                if(a(e))
                                    for(var h = e.length; o < h; o++) l && (l.index = o, l.first = o === 0, l.last = o === e.length - 1, c && (l.contextPath = c + o)), u += n(e[o], {
                                        data: l
                                    });
                                else
                                    for(var p in e) e.hasOwnProperty(p) && (l && (l.key = p, l.index = o, l.first = o === 0, c && (l.contextPath = c + p)), u += n(e[p], {
                                        data: l
                                    }), o++);
                            return o === 0 && (u = s(this)), u
                        }), e.registerHelper("if", function(e, t) {
                            return f(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
                        }), e.registerHelper("unless", function(t, n) {
                            return e.helpers["if"].call(this, t, {
                                fn: n.inverse,
                                inverse: n.fn,
                                hash: n.hash
                            })
                        }), e.registerHelper("with", function(e, t) {
                            f(e) && (e = e.call(this));
                            var n = t.fn;
                            if(!r.isEmpty(e)) {
                                if(t.data && t.ids) {
                                    var i = m(t.data);
                                    i.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                                        data: i
                                    }
                                }
                                return n(e, t)
                            }
                            return t.inverse(this)
                        }), e.registerHelper("log", function(t, n) {
                            var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
                            e.log(r, t)
                        }), e.registerHelper("lookup", function(e, t) {
                            return e && e[t]
                        })
                    }
                    var n = {},
                        r = e,
                        i = t,
                        s = "2.0.0";
                    n.VERSION = s;
                    var o = 6;
                    n.COMPILER_REVISION = o;
                    var u = {
                        1: "<= 1.0.rc.2",
                        2: "== 1.0.0-rc.3",
                        3: "== 1.0.0-rc.4",
                        4: "== 1.x.x",
                        5: "== 2.0.0-alpha.x",
                        6: ">= 2.0.0-beta.1"
                    };
                    n.REVISION_CHANGES = u;
                    var a = r.isArray,
                        f = r.isFunction,
                        l = r.toString,
                        c = "[object Object]";
                    n.HandlebarsEnvironment = h, h.prototype = {
                        constructor: h,
                        logger: d,
                        log: v,
                        registerHelper: function(e, t) {
                            if(l.call(e) === c) {
                                if(t) throw new
                                i("Arg not supported with multiple helpers");
                                r.extend(this.helpers, e)
                            } else this.helpers[e] = t
                        },
                        unregisterHelper: function(e) {
                            delete this.helpers[e]
                        },
                        registerPartial: function(e, t) {
                            l.call(e) === c ? r.extend(this.partials, e) : this.partials[e] = t
                        },
                        unregisterPartial: function(e) {
                            delete this.partials[e]
                        }
                    };
                    var d = {
                        methodMap: {
                            0: "debug",
                            1: "info",
                            2: "warn",
                            3: "error"
                        },
                        DEBUG: 0,
                        INFO: 1,
                        WARN: 2,
                        ERROR: 3,
                        level: 3,
                        log: function(e, t) {
                            if(d.level <= e) {
                                var n = d.methodMap[e];
                                typeof console != "undefined" && console[n] && console[n].call(console, t)
                            }
                        }
                    };
                    n.logger = d;
                    var v = d.log;
                    n.log = v;
                    var m = function(e) {
                        var t = r.extend({}, e);
                        return t._parent = e, t
                    };
                    return n.createFrame = m, n
                }(t, n),
                i = function(e, t, n) {
                    "use strict";

                    function f(e) {
                        var t = e && e[0] || 1,
                            n = o;
                        if(t !== n) {
                            if(t < n) {
                                var r = u[n],
                                    i = u[t];
                                throw new s("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                            }
                            throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                        }
                    }

                    function l(e, t) {
                        if(!t) throw new s("No environment passed to template");
                        if(!e || !e.main) throw new s("Unknown template object: " + typeof e);
                        t.VM.checkRevision(e.compiler);
                        var n = function(n, r, o, u, a, f, l, c, h) {
                                a && (u = i.extend({}, u, a));
                                var p = t.VM.invokePartial.call(this, n, o, u, f, l, c, h);
                                if(p == null && t.compile) {
                                    var d = {
                                        helpers: f,
                                        partials: l,
                                        data: c,
                                        depths: h
                                    };
                                    l[o] = t.compile(n, {
                                        data: c !== undefined,
                                        compat: e.compat
                                    }, t), p = l[o](u, d)
                                }
                                if(p != null) {
                                    if(r) {
                                        var v = p.split("\n");
                                        for(var m = 0, g = v.length; m < g; m++) {
                                            if(!v[m] && m + 1 === g) break;
                                            v[m] = r + v[m]
                                        }
                                        p = v.join("\n")
                                    }
                                    return p
                                }
                                throw new s("The partial " + o + " could not be compiled when running in runtime-only mode")
                            },
                            r = {
                                lookup: function(e, t) {
                                    var n = e.length;
                                    for(var r = 0; r < n; r++)
                                        if(e[r] && e[r][t] != null) return e[r][t]
                                },
                                lambda: function(e, t) {
                                    return typeof e == "function" ? e.call(t) : e
                                },
                                escapeExpression: i.escapeExpression,
                                invokePartial: n,
                                fn: function(t) {
                                    return e[t]
                                },
                                programs: [],
                                program: function(e, t, n) {
                                    var r = this.programs[e],
                                        i = this.fn(e);
                                    return t || n ? r = c(this, e, i, t, n) : r || (r = this.programs[e] = c(this, e, i)), r
                                },
                                data: function(e, t) {
                                    while(e && t--) e = e._parent;
                                    return e
                                },
                                merge: function(e, t) {
                                    var n = e || t;
                                    return e && t && e !== t && (n = i.extend({}, t, e)), n
                                },
                                noop: t.VM.noop,
                                compilerInfo: e.compiler
                            },
                            o = function(t, n) {
                                n = n || {};
                                var i = n.data;
                                o._setup(n), !n.partial && e.useData && (i = d(t, i));
                                var s;
                                return e.useDepths && (s = n.depths ? [t].concat(n.depths) : [t]), e.main.call(r, t, r.helpers, r.partials, i, s)
                            };
                        return o.isTop = !0, o._setup = function(n) {
                            n.partial ? (r.helpers = n.helpers, r.partials = n.partials) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)))
                        }, o._child = function(t, n, i) {
                            if(e.useDepths && !i) throw new s("must pass parent depths");
                            return c(r, t, e[t], n, i)
                        }, o
                    }

                    function c(e, t, n, r, i) {
                        var s = function(t, s) {
                            return s = s || {}, n.call(e, t, e.helpers, e.partials, s.data || r, i && [t].concat(i))
                        };
                        return s.program = t, s.depth = i ? i.length : 0, s
                    }

                    function h(e, t, n, r, i, o, u) {
                        var a = {
                            partial: !0,
                            helpers: r,
                            partials: i,
                            data: o,
                            depths: u
                        };
                        if(e === undefined) throw new s("The partial " + t + " could not be found");
                        if(e instanceof Function) return e(n, a)
                    }

                    function p() {
                        return ""
                    }

                    function d(e, t) {
                        if(!t || !("root" in t)) t = t ? a(t) : {}, t.root = e;
                        return t
                    }
                    var r = {},
                        i = e,
                        s = t,
                        o = n.COMPILER_REVISION,
                        u = n.REVISION_CHANGES,
                        a = n.createFrame;
                    return r.checkRevision = f, r.template = l, r.program = c, r.invokePartial = h, r.noop = p, r
                }(t, n, r),
                s = function(e, t, n, r, i) {
                    "use strict";
                    var s, o = e,
                        u = t,
                        a = n,
                        f = r,
                        l = i,
                        c = function() {
                            var e = new o.HandlebarsEnvironment;
                            return f.extend(e, o), e.SafeString = u, e.Exception = a, e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = l, e.template = function(t) {
                                return l.template(t, e)
                            }, e
                        },
                        h = c();
                    return h.create = c, h["default"] = h, s = h, s
                }(r, e, n, t, i);
            return s
        }),
        function(e, t) {
            function H(e) {
                var t = e.length,
                    n = w.type(e);
                return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
            }

            function j(e) {
                var t = B[e] = {};
                return w.each(e.match(S) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function q(e, n, r, i) {
                if(!w.acceptData(e)) return;
                var s, o, u = w.expando,
                    a = typeof n == "string",
                    f = e.nodeType,
                    l = f ? w.cache : e,
                    h = f ? e[u] : e[u] && u;
                if((!h || !l[h] || !i && !l[h].data) && a && r === t) return;
                h || (f ? e[u] = h = c.pop() || w.guid++ : h = u), l[h] || (l[h] = {}, f || (l[h].toJSON = w.noop));
                if(typeof n == "object" || typeof n == "function") i ? l[h] = w.extend(l[h], n) : l[h].data = w.extend(l[h].data, n);
                return s = l[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[w.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[w.camelCase(n)])) : o = s, o
            }

            function R(e, t, n) {
                if(!w.acceptData(e)) return;
                var r, i, s, o = e.nodeType,
                    u = o ? w.cache : e,
                    a = o ? e[w.expando] : w.expando;
                if(!u[a]) return;
                if(t) {
                    s = n ? u[a] : u[a].data;
                    if(s) {
                        w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in s ? t = [t] : (t = w.camelCase(t), t in s ? t = [t] : t = t.split(" "));
                        for(r = 0, i = t.length; r < i; r++) delete s[t[r]];
                        if(!(n ? z : w.isEmptyObject)(s)) return
                    }
                }
                if(!n) {
                    delete u[a].data;
                    if(!z(u[a])) return
                }
                o ? w.cleanData([e], !0) : w.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
            }

            function U(e, n, r) {
                if(r === t && e.nodeType === 1) {
                    var i = "data-" + n.replace(I, "-$1").toLowerCase();
                    r = e.getAttribute(i);
                    if(typeof r == "string") {
                        try {
                            r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                        } catch(s) {}
                        w.data(e, n, r)
                    } else r = t
                }
                return r
            }

            function z(e) {
                var t;
                for(t in e) {
                    if(t === "data" && w.isEmptyObject(e[t])) continue;
                    if(t !== "toJSON") return !1
                }
                return !0
            }

            function st() {
                return !0
            }

            function ot() {
                return !1
            }

            function ht(e, t) {
                do e = e[t]; while (e && e.nodeType !== 1);
                return e
            }

            function pt(e, t, n) {
                t = t || 0;
                if(w.isFunction(t)) return w.grep(e, function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                });
                if(t.nodeType) return w.grep(e, function(e) {
                    return e === t === n
                });
                if(typeof t == "string") {
                    var r = w.grep(e, function(e) {
                        return e.nodeType === 1
                    });
                    if(ft.test(t)) return w.filter(t, r, !n);
                    t = w.filter(t, r)
                }
                return w.grep(e, function(e) {
                    return w.inArray(e, t) >= 0 === n
                })
            }

            function dt(e) {
                var t = vt.split("|"),
                    n = e.createDocumentFragment();
                if(n.createElement)
                    while(t.length) n.createElement(t.pop());
                return n
            }

            function _t(e, t) {
                return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
            }

            function Dt(e) {
                var t = e.getAttributeNode("type");
                return e.type = (t && t.specified) + "/" + e.type, e
            }

            function Pt(e) {
                var t = kt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Ht(e, t) {
                var n, r = 0;
                for(;
                    (n = e[r]) != null; r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
            }

            function Bt(e, t) {
                if(t.nodeType !== 1 || !w.hasData(e)) return;
                var n, r, i, s = w._data(e),
                    o = w._data(t, s),
                    u = s.events;
                if(u) {
                    delete o.handle, o.events = {};
                    for(n in u)
                        for(r = 0, i = u[n].length; r < i; r++) w.event.add(t, n, u[n][r])
                }
                o.data && (o.data = w.extend({}, o.data))
            }

            function jt(e, t) {
                var n, r, i;
                if(t.nodeType !== 1) return;
                n = t.nodeName.toLowerCase();
                if(!w.support.noCloneEvent && t[w.expando]) {
                    i = w._data(t);
                    for(r in i.events) w.removeEvent(t, r, i.handle);
                    t.removeAttribute(w.expando)
                }
                if(n === "script" && t.text !== e.text) Dt(t).text = e.text, Pt(t);
                else if(n === "object") t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
                else if(n === "input" && Tt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
                else if(n === "option") t.defaultSelected = t.selected = e.defaultSelected;
                else if(n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            }

            function Ft(e, n) {
                var r, i, o = 0,
                    u = typeof e.getElementsByTagName !== s ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== s ? e.querySelectorAll(n || "*") : t;
                if(!u)
                    for(u = [], r = e.childNodes || e;
                        (i = r[o]) != null; o++) !n || w.nodeName(i, n) ? u.push(i) : w.merge(u, Ft(i, n));
                return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
            }

            function It(e) {
                Tt.test(e.type) && (e.defaultChecked = e.checked)
            }

            function nn(e, t) {
                if(t in e) return t;
                var n = t.charAt(0).toUpperCase() + t.slice(1),
                    r = t,
                    i = tn.length;
                while(i--) {
                    t = tn[i] + n;
                    if(t in e) return t
                }
                return r
            }

            function rn(e, t) {
                return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
            }

            function sn(e, t) {
                var n, r, i, s = [],
                    o = 0,
                    u = e.length;
                for(; o < u; o++) {
                    r = e[o];
                    if(!r.style) continue;
                    s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && rn(r) && (s[o] = w._data(r, "olddisplay", fn(r.nodeName)))) : s[o] || (i = rn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
                }
                for(o = 0; o < u; o++) {
                    r = e[o];
                    if(!r.style) continue;
                    if(!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
                }
                return e
            }

            function on(e, t, n) {
                var r = Jt.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function un(e, t, n, r, i) {
                var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                    o = 0;
                for(; s < 4; s += 2) n === "margin" && (o += w.css(e, n + en[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + en[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + en[s] + "Width", !0, i))) : (o += w.css(e, "padding" + en[s], !0, i), n !== "padding" && (o += w.css(e, "border" + en[s] + "Width", !0, i)));
                return o
            }

            function an(e, t, n) {
                var r = !0,
                    i = t === "width" ? e.offsetWidth : e.offsetHeight,
                    s = Rt(e),
                    o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
                if(i <= 0 || i == null) {
                    i = Ut(e, t, s);
                    if(i < 0 || i == null) i = e.style[t];
                    if(Kt.test(i)) return i;
                    r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + un(e, t, n || (o ? "border" : "content"), r, s) + "px"
            }

            function fn(e) {
                var t = o,
                    n = Gt[e];
                if(!n) {
                    n = ln(e, t);
                    if(n === "none" || !n) qt = (qt || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (qt[0].contentWindow || qt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), qt.detach();
                    Gt[e] = n
                }
                return n
            }

            function ln(e, t) {
                var n = w(t.createElement(e)).appendTo(t.body),
                    r = w.css(n[0], "display");
                return n.remove(), r
            }

            function mn(e, t, n, r) {
                var i;
                if(w.isArray(t)) w.each(t, function(t, i) {
                    n || hn.test(e) ? r(e, i) : mn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
                });
                else if(!n && w.type(t) === "object")
                    for(i in t) mn(e + "[" + i + "]", t[i], n, r);
                else r(e, t)
            }

            function Dn(e) {
                return function(t, n) {
                    typeof t != "string" && (n = t, t = "*");
                    var r, i = 0,
                        s = t.toLowerCase().match(S) || [];
                    if(w.isFunction(n))
                        while(r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Pn(e, t, n, r) {
                function o(u) {
                    var a;
                    return i[u] = !0, w.each(e[u] || [], function(e, u) {
                        var f = u(t, n, r);
                        if(typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                        if(s) return !(a = f)
                    }), a
                }
                var i = {},
                    s = e === On;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function Hn(e, n) {
                var r, i, s = w.ajaxSettings.flatOptions || {};
                for(i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
                return r && w.extend(!0, e, r), e
            }

            function Bn(e, n, r) {
                var i, s, o, u, a = e.contents,
                    f = e.dataTypes,
                    l = e.responseFields;
                for(u in l) u in r && (n[l[u]] = r[u]);
                while(f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
                if(s)
                    for(u in a)
                        if(a[u] && a[u].test(s)) {
                            f.unshift(u);
                            break
                        }
                if(f[0] in r) o = f[0];
                else {
                    for(u in r) {
                        if(!f[0] || e.converters[u + " " + f[0]]) {
                            o = u;
                            break
                        }
                        i || (i = u)
                    }
                    o = o || i
                }
                if(o) return o !== f[0] && f.unshift(o), r[o]
            }

            function jn(e, t) {
                var n, r, i, s, o = {},
                    u = 0,
                    a = e.dataTypes.slice(),
                    f = a[0];
                e.dataFilter && (t = e.dataFilter(t, e.dataType));
                if(a[1])
                    for(i in e.converters) o[i.toLowerCase()] = e.converters[i];
                for(; r = a[++u];)
                    if(r !== "*") {
                        if(f !== "*" && f !== r) {
                            i = o[f + " " + r] || o["* " + r];
                            if(!i)
                                for(n in o) {
                                    s = n.split(" ");
                                    if(s[1] === r) {
                                        i = o[f + " " + s[0]] || o["* " + s[0]];
                                        if(i) {
                                            i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                                            break
                                        }
                                    }
                                }
                            if(i !== !0)
                                if(i && e["throws"]) t = i(t);
                                else try {
                                    t = i(t)
                                } catch(l) {
                                    return {
                                        state: "parsererror",
                                        error: i ? l : "No conversion from " + f + " to " + r
                                    }
                                }
                        }
                        f = r
                    }
                return {
                    state: "success",
                    data: t
                }
            }

            function Wn() {
                try {
                    return new e.XMLHttpRequest
                } catch(t) {}
            }

            function Xn() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch(t) {}
            }

            function Zn() {
                return setTimeout(function() {
                    Vn = t
                }), Vn = w.now()
            }

            function er(e, t) {
                w.each(t, function(t, n) {
                    var r = (Yn[t] || []).concat(Yn["*"]),
                        i = 0,
                        s = r.length;
                    for(; i < s; i++)
                        if(r[i].call(e, t, n)) return
                })
            }

            function tr(e, t, n) {
                var r, i, s = 0,
                    o = Gn.length,
                    u = w.Deferred().always(function() {
                        delete a.elem
                    }),
                    a = function() {
                        if(i) return !1;
                        var t = Vn || Zn(),
                            n = Math.max(0, f.startTime + f.duration - t),
                            r = n / f.duration || 0,
                            s = 1 - r,
                            o = 0,
                            a = f.tweens.length;
                        for(; o < a; o++) f.tweens[o].run(s);
                        return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
                    },
                    f = u.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Vn || Zn(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                            return f.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? f.tweens.length : 0;
                            if(i) return this;
                            i = !0;
                            for(; n < r; n++) f.tweens[n].run(1);
                            return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                        }
                    }),
                    l = f.props;
                nr(l, f.opts.specialEasing);
                for(; s < o; s++) {
                    r = Gn[s].call(f, e, l, f.opts);
                    if(r) return r
                }
                return er(f, l), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
                    elem: e,
                    anim: f,
                    queue: f.opts.queue
                })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
            }

            function nr(e, t) {
                var n, r, i, s, o;
                for(i in e) {
                    r = w.camelCase(i), s = t[r], n = e[i], w.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = w.cssHooks[r];
                    if(o && "expand" in o) {
                        n = o.expand(n), delete e[r];
                        for(i in n) i in e || (e[i] = n[i], t[i] = s)
                    } else t[r] = s
                }
            }

            function rr(e, t, n) {
                var r, i, s, o, u, a, f, l, c, h = this,
                    p = e.style,
                    d = {},
                    v = [],
                    m = e.nodeType && rn(e);
                n.queue || (l = w._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                    l.unqueued || c()
                }), l.unqueued++, h.always(function() {
                    h.always(function() {
                        l.unqueued--, w.queue(e, "fx").length || l.empty.fire()
                    })
                })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || fn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", w.support.shrinkWrapBlocks || h.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }));
                for(i in t) {
                    o = t[i];
                    if(Jn.exec(o)) {
                        delete t[i], a = a || o === "toggle";
                        if(o === (m ? "hide" : "show")) continue;
                        v.push(i)
                    }
                }
                s = v.length;
                if(s) {
                    u = w._data(e, "fxshow") || w._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? w(e).show() : h.done(function() {
                        w(e).hide()
                    }), h.done(function() {
                        var t;
                        w._removeData(e, "fxshow");
                        for(t in d) w.style(e, t, d[t])
                    });
                    for(i = 0; i < s; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || w.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = r === "width" || r === "height" ? 1 : 0))
                }
            }

            function ir(e, t, n, r, i) {
                return new ir.prototype.init(e, t, n, r, i)
            }

            function sr(e, t) {
                var n, r = {
                        height: e
                    },
                    i = 0;
                t = t ? 1 : 0;
                for(; i < 4; i += 2 - t) n = en[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function or(e) {
                return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
            }
            var n, i, s = typeof t,
                o = e.document,
                u = e.location,
                a = e.jQuery,
                f = e.$,
                l = {},
                c = [],
                h = "1.9.1",
                p = c.concat,
                d = c.push,
                v = c.slice,
                m = c.indexOf,
                g = l.toString,
                y = l.hasOwnProperty,
                b = h.trim,
                w = function(e, t) {
                    return new w.fn.init(e, t, i)
                },
                E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                S = /\S+/g,
                x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                T = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                C = /^[\],:{}\s]*$/,
                k = /(?:^|:|,)(?:\s*\[)+/g,
                L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                O = /^-ms-/,
                M = /-([\da-z])/gi,
                _ = function(e, t) {
                    return t.toUpperCase()
                },
                D = function(e) {
                    if(o.addEventListener || e.type === "load" || o.readyState === "complete") P(), w.ready()
                },
                P = function() {
                    o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
                };
            w.fn = w.prototype = {
                jquery: h,
                constructor: w,
                init: function(e, n, r) {
                    var i, s;
                    if(!e) return this;
                    if(typeof e == "string") {
                        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                        if(i && (i[1] || !n)) {
                            if(i[1]) {
                                n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                                if(N.test(i[1]) && w.isPlainObject(n))
                                    for(i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                                return this
                            }
                            s = o.getElementById(i[2]);
                            if(s && s.parentNode) {
                                if(s.id !== i[2]) return r.find(e);
                                this.length = 1, this[0] = s
                            }
                            return this.context = o, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
                },
                selector: "",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return v.call(this)
                },
                get: function(e) {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return w.each(this, e, t)
                },
                ready: function(e) {
                    return w.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(v.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(w.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: d,
                sort: [].sort,
                splice: [].splice
            }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function() {
                var e, n, r, i, s, o, u = arguments[0] || {},
                    a = 1,
                    f = arguments.length,
                    l = !1;
                typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
                for(; a < f; a++)
                    if(
                        (s = arguments[a]) != null)
                        for(i in s) {
                            e = u[i], r = s[i];
                            if(u === r) continue;
                            l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
                        }
                    return u
            }, w.extend({
                noConflict: function(t) {
                    return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? w.readyWait++ : w.ready(!0)
                },
                ready: function(e) {
                    if(e === !0 ? --w.readyWait : w.isReady) return;
                    if(!o.body) return setTimeout(w.ready);
                    w.isReady = !0;
                    if(e !== !0 && --w.readyWait > 0) return;
                    n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
                },
                isFunction: function(e) {
                    return w.type(e) === "function"
                },
                isArray: Array.isArray || function(e) {
                    return w.type(e) === "array"
                },
                isWindow: function(e) {
                    return e != null && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    if(!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e)) return !1;
                    try {
                        if(e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch(n) {
                        return !1
                    }
                    var r;
                    for(r in e);
                    return r === t || y.call(e, r)
                },
                isEmptyObject: function(e) {
                    var t;
                    for(t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseHTML: function(e, t, n) {
                    if(!e || typeof e != "string") return null;
                    typeof t == "boolean" && (n = t, t = !1), t = t || o;
                    var r = N.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
                },
                parseJSON: function(t) {
                    if(e.JSON && e.JSON.parse) return e.JSON.parse(t);
                    if(t === null) return t;
                    if(typeof t == "string") {
                        t = w.trim(t);
                        if(t && C.test(t.replace(L, "@").replace(A, "]").replace(k, ""))) return(new Function("return " + t))()
                    }
                    w.error("Invalid JSON: " + t)
                },
                parseXML: function(n) {
                    var r, i;
                    if(!n || typeof n != "string") return null;
                    try {
                        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                    } catch(s) {
                        r = t
                    }
                    return(!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && w.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(O, "ms-").replace(M, _)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r, i = 0,
                        s = e.length,
                        o = H(e);
                    if(n)
                        if(o)
                            for(; i < s; i++) {
                                r = t.apply(e[i], n);
                                if(r === !1) break
                            } else
                                for(i in e) {
                                    r = t.apply(e[i], n);
                                    if(r === !1) break
                                } else if(o)
                                    for(; i < s; i++) {
                                        r = t.call(e[i], i, e[i]);
                                        if(r === !1) break
                                    } else
                                        for(i in e) {
                                            r = t.call(e[i], i, e[i]);
                                            if(r === !1) break
                                        }
                                return e
                },
                trim: b && !b.call("\ufeff\u00a0") ? function(e) {
                    return e == null ? "" : b.call(e)
                } : function(e) {
                    return e == null ? "" : (e + "").replace(x, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    var r;
                    if(t) {
                        if(m) return m.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for(; n < r; n++)
                            if(n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = n.length,
                        i = e.length,
                        s = 0;
                    if(typeof r == "number")
                        for(; s < r; s++) e[i++] = n[s];
                    else
                        while(n[s] !== t) e[i++] = n[s++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        s = 0,
                        o = e.length;
                    n = !!n;
                    for(; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                    return i
                },
                map: function(e, t, n) {
                    var r, i = 0,
                        s = e.length,
                        o = H(e),
                        u = [];
                    if(o)
                        for(; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
                    else
                        for(i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
                    return p.apply([], u)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, s;
                    return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function() {
                        return e.apply(n || this, r.concat(v.call(arguments)))
                    }, i.guid = e.guid = e.guid || w.guid++, i) : t
                },
                access: function(e, n, r, i, s, o, u) {
                    var a = 0,
                        f = e.length,
                        l = r == null;
                    if(w.type(r) === "object") {
                        s = !0;
                        for(a in r) w.access(e, n, a, r[a], !0, o, u)
                    } else if(i !== t) {
                        s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                            return l.call(w(e), n)
                        }));
                        if(n)
                            for(; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
                    }
                    return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
                },
                now: function() {
                    return(new Date).getTime()
                }
            }), w.ready.promise = function(t) {
                if(!n) {
                    n = w.Deferred();
                    if(o.readyState === "complete") setTimeout(w.ready);
                    else if(o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
                    else {
                        o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                        var r = !1;
                        try {
                            r = e.frameElement == null && o.documentElement
                        } catch(i) {}
                        r && r.doScroll && function s() {
                            if(!w.isReady) {
                                try {
                                    r.doScroll("left")
                                } catch(e) {
                                    return setTimeout(s, 50)
                                }
                                P(), w.ready()
                            }
                        }()
                    }
                }
                return n.promise(t)
            }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            }), i = w(o);
            var B = {};
            w.Callbacks = function(e) {
                e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
                var n, r, i, s, o, u, a = [],
                    f = !e.once && [],
                    l = function(t) {
                        r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
                        for(; a && o < s; o++)
                            if(a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                                r = !1;
                                break
                            }
                        n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
                    },
                    c = {
                        add: function() {
                            if(a) {
                                var t = a.length;
                                (function i(t) {
                                    w.each(t, function(t, n) {
                                        var r = w.type(n);
                                        r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                                    })
                                })(arguments), n ? s = a.length : r && (u = t, l(r))
                            }
                            return this
                        },
                        remove: function() {
                            return a && w.each(arguments, function(e, t) {
                                var r;
                                while((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                            }), this
                        },
                        has: function(e) {
                            return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                        },
                        empty: function() {
                            return a = [], this
                        },
                        disable: function() {
                            return a = f = r = t, this
                        },
                        disabled: function() {
                            return !a
                        },
                        lock: function() {
                            return f = t, r || c.disable(), this
                        },
                        locked: function() {
                            return !f
                        },
                        fireWith: function(e, t) {
                            return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!i || f) && (n ? f.push(t) : l(t)), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return c
            }, w.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                            ["notify", "progress",
                                w.Callbacks("memory")
                            ]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return w.Deferred(function(n) {
                                    w.each(t, function(t, s) {
                                        var o = s[0],
                                            u = w.isFunction(e[t]) && e[t];
                                        i[s[1]](function() {
                                            var e = u && u.apply(this, arguments);
                                            e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return e != null ? w.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, w.each(t, function(e, s) {
                        var o = s[2],
                            u = s[3];
                        r[s[1]] = o.add, u && o.add(function() {
                            n = u
                        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                            return i[s[0] + "With"](this === i ? r : this, arguments), this
                        }, i[s[0] + "With"] = o.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t = 0,
                        n = v.call(arguments),
                        r = n.length,
                        i = r !== 1 || e && w.isFunction(e.promise) ? r : 0,
                        s = i === 1 ? e : w.Deferred(),
                        o = function(e, t, n) {
                            return function(r) {
                                t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                            }
                        },
                        u, a, f;
                    if(r > 1) {
                        u = new Array(r), a = new Array(r), f = new Array(r);
                        for(; t < r; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                    }
                    return i || s.resolveWith(f, n), s.promise()
                }
            }), w.support = function() {
                var t, n, r, i, u, a, f, l, c, h, p = o.createElement("div");
                p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
                if(!n || !r || !n.length) return {};
                u = o.createElement("select"), f = u.appendChild(o.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
                    getSetAttribute: p.className !== "t",
                    leadingWhitespace: p.firstChild.nodeType === 3,
                    tbody: !p.getElementsByTagName("tbody").length,
                    htmlSerialize: !!p.getElementsByTagName("link").length,
                    style: /top/.test(r.getAttribute("style")),
                    hrefNormalized: r.getAttribute("href") === "/a",
                    opacity: /^0.5/.test(r.style.opacity),
                    cssFloat: !!r.style.cssFloat,
                    checkOn: !!i.value,
                    optSelected: f.selected,
                    enctype: !!o.createElement("form").enctype,
                    html5Clone: o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                    boxModel: o.compatMode === "CSS1Compat",
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
                try {
                    delete p.test
                } catch(d) {
                    t.deleteExpando = !1
                }
                i = o.createElement("input"), i.setAttribute("value", ""), t.input = i.getAttribute("value") === "", i.value = "t", i.setAttribute("type", "radio"), t.radioValue = i.value === "t", i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
                    t.noCloneEvent = !1
                }), p.cloneNode(!0).click());
                for(h in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
                return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box", w(function() {
                    var n, r, i, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        a = o.getElementsByTagName("body")[0];
                    if(!a) return;
                    n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && i[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = p.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                        width: "4px"
                    }).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== s && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = i = r = null
                }), n = u = a = f = r = i = null, t
            }();
            var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                I = /([A-Z])/g;
            w.extend({
                cache: {},
                expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
                noData: {
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    applet: !0
                },
                hasData: function(e) {
                    return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
                },
                data: function(e, t, n) {
                    return q(e, t, n)
                },
                removeData: function(e, t) {
                    return R(e, t)
                },
                _data: function(e, t, n) {
                    return q(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return R(e, t, !0)
                },
                acceptData: function(e) {
                    if(e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
                    var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
                    return !t || t !== !0 && e.getAttribute("classid") === t
                }
            }), w.fn.extend({
                data: function(e, n) {
                    var r, i, s = this[0],
                        o = 0,
                        u = null;
                    if(e === t) {
                        if(this.length) {
                            u = w.data(s);
                            if(s.nodeType === 1 && !w._data(s, "parsedAttrs")) {
                                r = s.attributes;
                                for(; o < r.length; o++) i = r[o].name, i.indexOf("data-") || (i = w.camelCase(i.slice(5)), U(s, i, u[i]));
                                w._data(s, "parsedAttrs", !0)
                            }
                        }
                        return u
                    }
                    return typeof e == "object" ? this.each(function() {
                        w.data(this, e)
                    }) : w.access(this, function(n) {
                        if(n === t) return s ? U(s, e, w.data(s, e)) : null;
                        this.each(function() {
                            w.data(this, e, n)
                        })
                    }, null, n, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        w.removeData(this, e)
                    })
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var r;
                    if(e) return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        s = w._queueHooks(e, t),
                        o = function() {
                            w.dequeue(e, t)
                        };
                    i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return w._data(e, n) || w._data(e, n, {
                        empty: w.Callbacks("once memory").add(function() {
                            w._removeData(e, t + "queue"), w._removeData(e, n)
                        })
                    })
                }
            }), w.fn.extend({
                queue: function(e, n) {
                    var r = 2;
                    return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function() {
                        var t = w.queue(this, e, n);
                        w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        w.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    var r, i = 1,
                        s = w.Deferred(),
                        o = this,
                        u = this.length,
                        a = function() {
                            --i || s.resolveWith(o, [o])
                        };
                    typeof e != "string" && (n = e, e = t), e = e || "fx";
                    while(u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                    return a(), s.promise(n)
                }
            });
            var W, X, V = /[\t\r\n]/g,
                $ = /\r/g,
                J = /^(?:input|select|textarea|button|object)$/i,
                K = /^(?:a|area)$/i,
                Q = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
                G = /^(?:checked|selected)$/i,
                Y = w.support.getSetAttribute,
                Z = w.support.input;
            w.fn.extend({
                attr: function(e, t) {
                    return w.access(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        w.removeAttr(this, e)
                    })
                },
                prop: function(e, t) {
                    return w.access(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = w.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = t, delete this[e]
                        } catch(n) {}
                    })
                },
                addClass: function(e) {
                    var t, n, r, i, s, o = 0,
                        u = this.length,
                        a = typeof e == "string" && e;
                    if(w.isFunction(e)) return this.each(function(t) {
                        w(this).addClass(e.call(this, t, this.className))
                    });
                    if(a) {
                        t = (e || "").match(S) || [];
                        for(; o < u; o++) {
                            n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                            if(r) {
                                s = 0;
                                while(i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                n.className = w.trim(r)
                            }
                        }
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, s, o = 0,
                        u = this.length,
                        a = arguments.length === 0 || typeof e == "string" && e;
                    if(w.isFunction(e)) return this.each(function(t) {
                        w(this).removeClass(e.call(this, t, this.className))
                    });
                    if(a) {
                        t = (e || "").match(S) || [];
                        for(; o < u; o++) {
                            n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                            if(r) {
                                s = 0;
                                while(i = t[s++])
                                    while(r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                                n.className = e ? w.trim(r) : ""
                            }
                        }
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = typeof t == "boolean";
                    return w.isFunction(e) ? this.each(function(n) {
                        w(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if(n === "string") {
                            var i, o = 0,
                                u = w(this),
                                a = t,
                                f = e.match(S) || [];
                            while(i = f[o++]) a = r ? a : !u.hasClass(i), u[a ? "addClass" : "removeClass"](i)
                        } else if(n === s || n === "boolean") this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
                    })
                },
                hasClass: function(e) {
                    var t = " " + e + " ",
                        n = 0,
                        r = this.length;
                    for(; n < r; n++)
                        if(this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
                    return !1
                },
                val: function(e) {
                    var n, r, i, s = this[0];
                    if(!arguments.length) {
                        if(s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                        return
                    }
                    return i = w.isFunction(e), this.each(function(n) {
                        var s, o = w(this);
                        if(this.nodeType !== 1) return;
                        i ? s = e.call(this, n, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function(e) {
                            return e == null ? "" : e + ""
                        })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                        if(!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
                    })
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return !t || t.specified ? e.value : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r = e.options,
                                i = e.selectedIndex,
                                s = e.type === "select-one" || i < 0,
                                o = s ? null : [],
                                u = s ? i + 1 : r.length,
                                a = i < 0 ? u : s ? i : 0;
                            for(; a < u; a++) {
                                n = r[a];
                                if((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                                    t = w(n).val();
                                    if(s) return t;
                                    o.push(t)
                                }
                            }
                            return o
                        },
                        set: function(e, t) {
                            var n = w.makeArray(t);
                            return w(e).find("option").each(function() {
                                this.selected = w.inArray(w(this).val(), n) >= 0
                            }), n.length || (e.selectedIndex = -1), n
                        }
                    }
                },
                attr: function(e, n, r) {
                    var i, o, u, a = e.nodeType;
                    if(!e || a === 3 || a === 8 || a === 2) return;
                    if(typeof e.getAttribute === s) return w.prop(e, n, r);
                    o = a !== 1 || !w.isXMLDoc(e), o && (n = n.toLowerCase(), i = w.attrHooks[n] || (Q.test(n) ? X : W));
                    if(r === t) return i && o && "get" in i && (u = i.get(e, n)) !== null ? u : (typeof e.getAttribute !== s && (u = e.getAttribute(n)), u == null ? t : u);
                    if(r !== null) return i && o && "set" in i && (u = i.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r);
                    w.removeAttr(e, n)
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0,
                        s = t && t.match(S);
                    if(s && e.nodeType === 1)
                        while(n = s[i++]) r = w.propFix[n] || n, Q.test(n) ? !Y && G.test(n) ? e[w.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(Y ? n : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if(!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, n, r) {
                    var i, s, o, u = e.nodeType;
                    if(!e || u === 3 || u === 8 || u === 2) return;
                    return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var n = e.getAttributeNode("tabindex");
                            return n && n.specified ? parseInt(n.value, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }), X = {
                get: function(e, n) {
                    var r = w.prop(e, n),
                        i = typeof r == "boolean" && e.getAttribute(n),
                        s = typeof r == "boolean" ? Z && Y ? i != null : G.test(n) ? e[w.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                    return s && s.value !== !1 ? n.toLowerCase() : t
                },
                set: function(e, t, n) {
                    return t === !1 ? w.removeAttr(e, n) : Z && Y || !G.test(n) ? e.setAttribute(!Y && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
                }
            };
            if(!Z || !Y) w.attrHooks.value = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return w.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
                },
                set: function(e, t, n) {
                    if(!w.nodeName(e, "input")) return W && W.set(e, t, n);
                    e.defaultValue = t
                }
            };
            Y || (W = w.valHooks.button = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
                },
                set: function(e, n, r) {
                    var i = e.getAttributeNode(r);
                    return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
                }
            }, w.attrHooks.contenteditable = {
                get: W.get,
                set: function(e, t, n) {
                    W.set(e, t === "" ? !1 : t, n)
                }
            }, w.each(["width", "height"], function(e, t) {
                w.attrHooks[t] = w.extend(w.attrHooks[t], {
                    set: function(e, n) {
                        if(n === "") return e.setAttribute(t, "auto"), n
                    }
                })
            })), w.support.hrefNormalized || (w.each(["href", "src", "width", "height"], function(e, n) {
                w.attrHooks[n] = w.extend(w.attrHooks[n], {
                    get: function(e) {
                        var r = e.getAttribute(n, 2);
                        return r == null ? t : r
                    }
                })
            }), w.each(["href", "src"], function(e, t) {
                w.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })), w.support.style || (w.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || t
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            }), w.support.optSelected || (w.propHooks.selected = w.extend(w.propHooks.selected, {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            })), w.support.enctype || (w.propFix.enctype = "encoding"), w.support.checkOn || w.each(["radio", "checkbox"], function() {
                w.valHooks[this] = {
                    get: function(e) {
                        return e.getAttribute("value") === null ? "on" : e.value
                    }
                }
            }), w.each(["radio", "checkbox"], function() {
                w.valHooks[this] = w.extend(w.valHooks[this], {
                    set: function(e, t) {
                        if(w.isArray(t)) return e.checked = w.inArray(w(e).val(), t) >= 0
                    }
                })
            });
            var et = /^(?:input|select|textarea)$/i,
                tt = /^key/,
                nt = /^(?:mouse|contextmenu)|click/,
                rt = /^(?:focusinfocus|focusoutblur)$/,
                it = /^([^.]*)(?:\.(.+)|)$/;
            w.event = {
                    global: {},
                    add: function(e, n, r, i, o) {
                        var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
                        if(!y) return;
                        r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                            return typeof w === s || !!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
                        while(f--) {
                            u = it.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                                type: v,
                                origType: g,
                                data: i,
                                handler: r,
                                guid: r.guid,
                                selector: o,
                                needsContext: o && w.expr.match.needsContext.test(o),
                                namespace: m.join(".")
                            }, l);
                            if(!(d = a[v])) {
                                d = a[v] = [], d.delegateCount = 0;
                                if(!c.setup || c.setup.call(e, i, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                            }
                            c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
                        }
                        e = null
                    },
                    remove: function(e, t, n, r, i) {
                        var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
                        if(!m || !(l = m.events)) return;
                        t = (t || "").match(S) || [""], f = t.length;
                        while(f--) {
                            u = it.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                            if(!p) {
                                for(p in l) w.event.remove(e, p + t[f], n, r, !0);
                                continue
                            }
                            c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                            while(s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                            a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
                        }
                        w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
                    },
                    trigger: function(n, r, i, s) {
                        var u, a, f, l, c, h, p, d = [i || o],
                            v = y.call(n, "type") ? n.type : n,
                            m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                        f = h = i = i || o;
                        if(i.nodeType === 3 || i.nodeType === 8) return;
                        if(rt.test(v + w.event.triggered)) return;
                        v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
                        if(!s && c.trigger && c.trigger.apply(i, r) === !1) return;
                        if(!s && !c.noBubble && !w.isWindow(i)) {
                            l = c.delegateType || v, rt.test(l + v) || (f = f.parentNode);
                            for(; f; f = f.parentNode) d.push(f), h = f;
                            h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
                        }
                        p = 0;
                        while((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                        n.type = v;
                        if(!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && (v !== "click" || !w.nodeName(i, "a")) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                            h = i[a], h && (i[a] = null), w.event.triggered = v;
                            try {
                                i[v]()
                            } catch(g) {}
                            w.event.triggered = t, h && (i[a] = h)
                        }
                        return n.result
                    },
                    dispatch: function(e) {
                        e = w.event.fix(e);
                        var n, r, i, s, o, u = [],
                            a = v.call(arguments),
                            f = (w._data(this, "events") || {})[e.type] || [],
                            l = w.event.special[e.type] || {};
                        a[0] = e, e.delegateTarget = this;
                        if(l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                        u = w.event.handlers.call(this, e, f), n = 0;
                        while((s = u[n++]) && !e.isPropagationStopped()) {
                            e.currentTarget = s.elem, o = 0;
                            while((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                                if(!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
                        }
                        return l.postDispatch && l.postDispatch.call(this, e), e.result
                    },
                    handlers: function(e, n) {
                        var r, i, s, o, u = [],
                            a = n.delegateCount,
                            f = e.target;
                        if(a && f.nodeType && (!e.button || e.type !== "click"))
                            for(; f != this; f = f.parentNode || this)
                                if(f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                                    s = [];
                                    for(o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                                    s.length && u.push({
                                        elem: f,
                                        handlers: s
                                    })
                                }
                        return a < n.length && u.push({
                            elem: this,
                            handlers: n.slice(a)
                        }), u
                    },
                    fix: function(e) {
                        if(e[w.expando]) return e;
                        var t, n, r, i = e.type,
                            s = e,
                            u = this.fixHooks[i];
                        u || (this.fixHooks[i] = u = nt.test(i) ? this.mouseHooks : tt.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
                        while(t--) n = r[t], e[n] = s[n];
                        return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(e, t) {
                            return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(e, n) {
                            var r, i, s, u = n.button,
                                a = n.fromElement;
                            return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                        }
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            trigger: function() {
                                if(w.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                            }
                        },
                        focus: {
                            trigger: function() {
                                if(this !== o.activeElement && this.focus) try {
                                    return this.focus(), !1
                                } catch(e) {}
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                if(this === o.activeElement && this.blur) return this.blur(), !1
                            },
                            delegateType: "focusout"
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                e.result !== t && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    },
                    simulate: function(e, t, n, r) {
                        var i = w.extend(new w.Event, n, {
                            type: e,
                            isSimulated: !0,
                            originalEvent: {}
                        });
                        r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                    }
                }, w.removeEvent = o.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                } : function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && (typeof e[r] === s && (e[r] = null), e.detachEvent(r, n))
                }, w.Event = function(e, t) {
                    if(!(this instanceof w.Event)) return new w.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? st : ot) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
                }, w.Event.prototype = {
                    isDefaultPrevented: ot,
                    isPropagationStopped: ot,
                    isImmediatePropagationStopped: ot,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = st;
                        if(!e) return;
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = st;
                        if(!e) return;
                        e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                    },
                    stopImmediatePropagation: function() {
                        this.isImmediatePropagationStopped = st, this.stopPropagation()
                    }
                }, w.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                }, function(e, t) {
                    w.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this,
                                i = e.relatedTarget,
                                s = e.handleObj;
                            if(!i || i !== r && !w.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                            return n
                        }
                    }
                }), w.support.submitBubbles || (w.event.special.submit = {
                    setup: function() {
                        if(w.nodeName(this, "form")) return !1;
                        w.event.add(this, "click._submit keypress._submit", function(e) {
                            var n = e.target,
                                r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                            r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function(e) {
                                e._submit_bubble = !0
                            }), w._data(r, "submitBubbles", !0))
                        })
                    },
                    postDispatch: function(e) {
                        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
                    },
                    teardown: function() {
                        if(w.nodeName(this, "form")) return !1;
                        w.event.remove(this, "._submit")
                    }
                }), w.support.changeBubbles || (w.event.special.change = {
                    setup: function() {
                        if(et.test(this.nodeName)) {
                            if(this.type === "checkbox" || this.type === "radio") w.event.add(this, "propertychange._change", function(e) {
                                e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                            }), w.event.add(this, "click._change", function(e) {
                                this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                            });
                            return !1
                        }
                        w.event.add(this, "beforeactivate._change", function(e) {
                            var t = e.target;
                            et.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function(e) {
                                this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                            }), w._data(t, "changeBubbles", !0))
                        })
                    },
                    handle: function(e) {
                        var t = e.target;
                        if(this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                    },
                    teardown: function() {
                        return w.event.remove(this, "._change"), !et.test(this.nodeName)
                    }
                }), w.support.focusinBubbles || w.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = 0,
                        r = function(e) {
                            w.event.simulate(t, e.target, w.event.fix(e), !0)
                        };
                    w.event.special[t] = {
                        setup: function() {
                            n++ === 0 && o.addEventListener(e, r, !0)
                        },
                        teardown: function() {
                            --n === 0 && o.removeEventListener(e, r, !0)
                        }
                    }
                }), w.fn.extend({
                    on: function(e, n, r, i, s) {
                        var o, u;
                        if(typeof e == "object") {
                            typeof n != "string" && (r = r || n, n = t);
                            for(o in e) this.on(o, n, r, e[o], s);
                            return this
                        }
                        r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                        if(i === !1) i = ot;
                        else if(!i) return this;
                        return s === 1 && (u = i, i = function(e) {
                            return w().off(e), u.apply(this, arguments)
                        }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function() {
                            w.event.add(this, e, i, r, n)
                        })
                    },
                    one: function(e, t, n, r) {
                        return this.on(e, t, n, r, 1)
                    },
                    off: function(e, n, r) {
                        var i, s;
                        if(e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if(typeof e == "object") {
                            for(s in e) this.off(s, n, e[s]);
                            return this
                        }
                        if(n === !1 || typeof n == "function") r = n, n = t;
                        return r === !1 && (r = ot), this.each(function() {
                            w.event.remove(this, e, r, n)
                        })
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            w.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if(n) return w.event.trigger(e, t, n, !0)
                    }
                }),
                function(e, t) {
                    function rt(e) {
                        return J.test(e + "")
                    }

                    function it() {
                        var e, t = [];
                        return e = function(n, r) {
                            return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                        }
                    }

                    function st(e) {
                        return e[b] = !0, e
                    }

                    function ot(e) {
                        var t = c.createElement("div");
                        try {
                            return e(t)
                        } catch(n) {
                            return !1
                        } finally {
                            t = null
                        }
                    }

                    function ut(e, t, n, r) {
                        var i, s, o, u, a, f, h, v, m, y;
                        (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
                        if(!e || typeof e != "string") return n;
                        if((u = t.nodeType) !== 1 && u !== 9) return [];
                        if(!p && !r) {
                            if(i = K.exec(e))
                                if(o = i[1]) {
                                    if(u === 9) {
                                        s = t.getElementById(o);
                                        if(!s || !s.parentNode) return n;
                                        if(s.id === o) return n.push(s), n
                                    } else if(t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                                } else {
                                    if(i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                                    if((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                                }
                            if(S.qsa && !d.test(e)) {
                                h = !0, v = b, m = t, y = u === 9 && e;
                                if(u === 1 && t.nodeName.toLowerCase() !== "object") {
                                    f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                                    while(a--) f[a] = v + pt(f[a]);
                                    m = $.test(e) && t.parentNode || t, y = f.join(",")
                                }
                                if(y) try {
                                    return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                                } catch(w) {} finally {
                                    h || t.removeAttribute("id")
                                }
                            }
                        }
                        return Et(e.replace(R, "$1"), t, n, r)
                    }

                    function at(e, t) {
                        var n = t && e,
                            r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
                        if(r) return r;
                        if(n)
                            while(n = n.nextSibling)
                                if(n === t) return -1;
                        return e ? 1 : -1
                    }

                    function ft(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return n === "input" && t.type === e
                        }
                    }

                    function lt(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return(n === "input" || n === "button") && t.type === e
                        }
                    }

                    function ct(e) {
                        return st(function(t) {
                            return t = +t, st(function(n, r) {
                                var i, s = e([], n.length, t),
                                    o = s.length;
                                while(o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                            })
                        })
                    }

                    function ht(e, t) {
                        var n, r, s, o, u, a, f, l = C[e + " "];
                        if(l) return t ? 0 : l.slice(0);
                        u = e, a = [], f = i.preFilter;
                        while(u) {
                            if(!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                            n = !1;
                            if(r = z.exec(u)) n = r.shift(), s.push({
                                value: n,
                                type: r[0].replace(R, " ")
                            }), u = u.slice(n.length);
                            for(o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                                value: n,
                                type: o,
                                matches: r
                            }), u = u.slice(n.length));
                            if(!n) break
                        }
                        return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
                    }

                    function pt(e) {
                        var t = 0,
                            n = e.length,
                            r = "";
                        for(; t < n; t++) r += e[t].value;
                        return r
                    }

                    function dt(e, t, n) {
                        var i = t.dir,
                            s = n && i === "parentNode",
                            o = T++;
                        return t.first ? function(t, n, r) {
                            while(t = t[i])
                                if(t.nodeType === 1 || s) return e(t, n, r)
                        } : function(t, n, u) {
                            var a, f, l, c = x + " " + o;
                            if(u) {
                                while(t = t[i])
                                    if(t.nodeType === 1 || s)
                                        if(e(t, n, u)) return !0
                            } else
                                while(t = t[i])
                                    if(t.nodeType === 1 || s) {
                                        l = t[b] || (t[b] = {});
                                        if((f = l[i]) && f[0] === c) {
                                            if((a = f[1]) === !0 || a === r) return a === !0
                                        } else {
                                            f = l[i] = [c], f[1] = e(t, n, u) || r;
                                            if(f[1] === !0) return !0
                                        }
                                    }
                        }
                    }

                    function vt(e) {
                        return e.length > 1 ? function(t, n, r) {
                            var i = e.length;
                            while(i--)
                                if(!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function mt(e, t, n, r, i) {
                        var s, o = [],
                            u = 0,
                            a = e.length,
                            f = t != null;
                        for(; u < a; u++)
                            if(s = e[u])
                                if(!n || n(s, r, i)) o.push(s), f && t.push(u);
                        return o
                    }

                    function gt(e, t, n, r, i, s) {
                        return r && !r[b] && (r = gt(r)), i && !i[b] && (i = gt(i, s)), st(function(s, o, u, a) {
                            var f, l, c, h = [],
                                p = [],
                                d = o.length,
                                v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                                m = e && (s || !t) ? mt(v, h, e, u, a) : v,
                                g = n ? i || (s ? e : d || r) ? [] : o : m;
                            n && n(m, g, u, a);
                            if(r) {
                                f = mt(g, p), r(f, [], u, a), l = f.length;
                                while(l--)
                                    if(c = f[l]) g[p[l]] = !(m[p[l]] = c)
                            }
                            if(s) {
                                if(i || e) {
                                    if(i) {
                                        f = [], l = g.length;
                                        while(l--)(c = g[l]) && f.push(m[l] = c);
                                        i(null, g = [], f, a)
                                    }
                                    l = g.length;
                                    while(l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                                }
                            } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
                        })
                    }

                    function yt(e) {
                        var t, n, r, s = e.length,
                            o = i.relative[e[0].type],
                            u = o || i.relative[" "],
                            a = o ? 1 : 0,
                            l = dt(function(e) {
                                return e === t
                            }, u, !0),
                            c = dt(function(e) {
                                return P.call(t, e) > -1
                            }, u, !0),
                            h = [function(e, n, r) {
                                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                            }];
                        for(; a < s; a++)
                            if(n = i.relative[e[a].type]) h = [dt(vt(h), n)];
                            else {
                                n = i.filter[e[a].type].apply(null, e[a].matches);
                                if(n[b]) {
                                    r = ++a;
                                    for(; r < s; r++)
                                        if(i.relative[e[r].type]) break;
                                    return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                                }
                                h.push(n)
                            }
                        return vt(h)
                    }

                    function bt(e, t) {
                        var n = 0,
                            s = t.length > 0,
                            o = e.length > 0,
                            u = function(u, a, l, h, p) {
                                var d, v, m, g = [],
                                    y = 0,
                                    b = "0",
                                    w = u && [],
                                    E = p != null,
                                    S = f,
                                    T = u || o && i.find.TAG("*", p && a.parentNode || a),
                                    N = x += S == null ? 1 : Math.random() || .1;
                                E && (f = a !== c && a, r = n);
                                for(;
                                    (d = T[b]) != null; b++) {
                                    if(o && d) {
                                        v = 0;
                                        while(m = e[v++])
                                            if(m(d, a, l)) {
                                                h.push(d);
                                                break
                                            }
                                        E && (x = N, r = ++n)
                                    }
                                    s && ((d = !m && d) && y--, u && w.push(d))
                                }
                                y += b;
                                if(s && b !== y) {
                                    v = 0;
                                    while(m = t[v++]) m(w, g, a, l);
                                    if(u) {
                                        if(y > 0)
                                            while(b--) !w[b] && !g[b] && (g[b] = M.call(h));
                                        g = mt(g)
                                    }
                                    _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                                }
                                return E && (x = N, f = S), w
                            };
                        return s ? st(u) : u
                    }

                    function wt(e, t, n) {
                        var r = 0,
                            i = t.length;
                        for(; r < i; r++) ut(e, t[r], n);
                        return n
                    }

                    function Et(e, t, n, r) {
                        var s, o, a, f, l, c = ht(e);
                        if(!r && c.length === 1) {
                            o = c[0] = c[0].slice(0);
                            if(o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                                t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                                if(!t) return n;
                                e = e.slice(o.shift().value.length)
                            }
                            s = V.needsContext.test(e) ? 0 : o.length;
                            while(s--) {
                                a = o[s];
                                if(i.relative[f = a.type]) break;
                                if(l = i.find[f])
                                    if(r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                                        o.splice(s, 1), e = r.length && pt(o);
                                        if(!e) return _.apply(n, D.call(r, 0)), n;
                                        break
                                    }
                            }
                        }
                        return u(e, c)(r, t, p, n, $.test(e)), n
                    }

                    function St() {}
                    var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
                        E = e.document,
                        S = {},
                        x = 0,
                        T = 0,
                        N = it(),
                        C = it(),
                        k = it(),
                        L = typeof t,
                        A = 1 << 31,
                        O = [],
                        M = O.pop,
                        _ = O.push,
                        D = O.slice,
                        P = O.indexOf || function(e) {
                            var t = 0,
                                n = this.length;
                            for(; t < n; t++)
                                if(this[t] === e) return t;
                            return -1
                        },
                        H = "[\\x20\\t\\r\\n\\f]",
                        B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        j = B.replace("w", "w#"),
                        F = "([*^$|!~]?=)",
                        I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
                        q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
                        R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                        U = new RegExp("^" + H + "*," + H + "*"),
                        z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
                        W = new RegExp(q),
                        X = new RegExp("^" + j + "$"),
                        V = {
                            ID: new RegExp("^#(" + B + ")"),
                            CLASS: new RegExp("^\\.(" + B + ")"),
                            NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                            TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
                            ATTR: new RegExp("^" + I),
                            PSEUDO: new RegExp("^" + q),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                        },
                        $ = /[\x20\t\r\n\f]*[+~]/,
                        J = /^[^{]+\{\s*\[native code/,
                        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        Q = /^(?:input|select|textarea|button)$/i,
                        G = /^h\d$/i,
                        Y = /'|\\/g,
                        Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                        tt = function(e, t) {
                            var n = "0x" + t - 65536;
                            return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                        };
                    try {
                        D.call(E.documentElement.childNodes, 0)[0].nodeType
                    } catch(nt) {
                        D = function(e) {
                            var t, n = [];
                            while(t = this[e++]) n.push(t);
                            return n
                        }
                    }
                    o = ut.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return t ? t.nodeName !== "HTML" : !1
                    }, l = ut.setDocument = function(e) {
                        var n = e ? e.ownerDocument || e : E;
                        if(n === c || n.nodeType !== 9 || !n.documentElement) return c;
                        c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                            return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                        }), S.attributes = ot(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return t !== "boolean" && t !== "string"
                        }), S.getByClassName = ot(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                        }), S.getByName = ot(function(e) {
                            e.id = b + 0, e.innerHTML = "<a name='" + b + "'></a><div name='" + b + "'></div>", h.insertBefore(e, h.firstChild);
                            var t = n.getElementsByName && n.getElementsByName(b).length === 2 + n.getElementsByName(b + 0).length;
                            return S.getIdNotName = !n.getElementById(b), h.removeChild(e), t
                        }), i.attrHandle = ot(function(e) {
                            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
                        }) ? {} : {
                            href: function(e) {
                                return e.getAttribute("href", 2)
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        }, S.getIdNotName ? (i.find.ID = function(e, t) {
                            if(typeof t.getElementById !== L && !p) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, i.filter.ID = function(e) {
                            var t = e.replace(et, tt);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (i.find.ID = function(e, n) {
                            if(typeof n.getElementById !== L && !p) {
                                var r = n.getElementById(e);
                                return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                            }
                        }, i.filter.ID = function(e) {
                            var t = e.replace(et, tt);
                            return function(e) {
                                var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
                            if(typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                s = t.getElementsByTagName(e);
                            if(e === "*") {
                                while(n = s[i++]) n.nodeType === 1 && r.push(n);
                                return r
                            }
                            return s
                        }, i.find.NAME = S.getByName && function(e, t) {
                            if(typeof t.getElementsByName !== L) return t.getElementsByName(name)
                        }, i.find.CLASS = S.getByClassName && function(e, t) {
                            if(typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
                        }, v = [], d = [":focus"];
                        if(S.qsa = rt(n.querySelectorAll)) ot(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                        }), ot(function(e) {
                            e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                        });
                        return(S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                            S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
                        }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                            var n = e.nodeType === 9 ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                        } : function(e, t) {
                            if(t)
                                while(t = t.parentNode)
                                    if(t === e) return !0;
                            return !1
                        }, y = h.compareDocumentPosition ? function(e, t) {
                            var r;
                            if(e === t) return a = !0, 0;
                            if(r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                            return e.compareDocumentPosition ? -1 : 1
                        } : function(e, t) {
                            var r, i = 0,
                                s = e.parentNode,
                                o = t.parentNode,
                                u = [e],
                                f = [t];
                            if(e === t) return a = !0, 0;
                            if(!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                            if(s === o) return at(e, t);
                            r = e;
                            while(r = r.parentNode) u.unshift(r);
                            r = t;
                            while(r = r.parentNode) f.unshift(r);
                            while(u[i] === f[i]) i++;
                            return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
                        }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c
                    }, ut.matches = function(e, t) {
                        return ut(e, null, null, t)
                    }, ut.matchesSelector = function(e, t) {
                        (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
                        if(S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
                            var n = m.call(e, t);
                            if(n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                        } catch(r) {}
                        return ut(t, c, null, [e]).length > 0
                    }, ut.contains = function(e, t) {
                        return(e.ownerDocument || e) !== c && l(e), g(e, t)
                    }, ut.attr = function(e, t) {
                        var n;
                        return(e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                    }, ut.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ut.uniqueSort = function(e) {
                        var t, n = [],
                            r = 1,
                            i = 0;
                        a = !S.detectDuplicates, e.sort(y);
                        if(a) {
                            for(; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                            while(i--) e.splice(n[i], 1)
                        }
                        return e
                    }, s = ut.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if(!i)
                            for(; t = e[r]; r++) n += s(t);
                        else if(i === 1 || i === 9 || i === 11) {
                            if(typeof e.textContent == "string") return e.textContent;
                            for(e = e.firstChild; e; e = e.nextSibling) n += s(e)
                        } else if(i === 3 || i === 4) return e.nodeValue;
                        return n
                    }, i = ut.selectors = {
                        cacheLength: 50,
                        createPseudo: st,
                        match: V,
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[5] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                return e === "*" ? function() {
                                    return !0
                                } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                })
                            },
                            CLASS: function(e) {
                                var t = N[e + " "];
                                return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                                    return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = ut.attr(r, e);
                                    return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var s = e.slice(0, 3) !== "nth",
                                    o = e.slice(-4) !== "last",
                                    u = t === "of-type";
                                return r === 1 && i === 0 ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, a) {
                                    var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        g = u && t.nodeName.toLowerCase(),
                                        y = !a && !u;
                                    if(m) {
                                        if(s) {
                                            while(v) {
                                                c = t;
                                                while(c = c[v])
                                                    if(u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                                d = v = e === "only" && !d && "nextSibling"
                                            }
                                            return !0
                                        }
                                        d = [o ? m.firstChild : m.lastChild];
                                        if(o && y) {
                                            l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                            while(c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                                if(c.nodeType === 1 && ++h && c === t) {
                                                    l[e] = [x, p, h];
                                                    break
                                                }
                                        } else if(y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === x) h = f[1];
                                        else
                                            while(c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                                if((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                                    y && ((c[b] || (c[b] = {}))[e] = [x, h]);
                                                    if(c === t) break
                                                } return h -= i, h === r || h % r === 0 && h / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                                return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                                    var i, s = r(e, t),
                                        o = s.length;
                                    while(o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                                }) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: st(function(e) {
                                var t = [],
                                    n = [],
                                    r = u(e.replace(R, "$1"));
                                return r[b] ? st(function(e, t, n, i) {
                                    var s, o = r(e, null, i, []),
                                        u = e.length;
                                    while(u--)
                                        if(s = o[u]) e[u] = !(t[u] = s)
                                }) : function(e, i, s) {
                                    return t[0] = e, r(t, null, s, n), !n.pop()
                                }
                            }),
                            has: st(function(e) {
                                return function(t) {
                                    return ut(e, t).length > 0
                                }
                            }),
                            contains: st(function(e) {
                                return function(t) {
                                    return(t.textContent || t.innerText || s(t)).indexOf(e) > -1
                                }
                            }),
                            lang: st(function(e) {
                                return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do
                                            if(n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                                        while((t = t.parentNode) && t.nodeType === 1);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return e.disabled === !1
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return t === "input" && !!e.checked || t === "option" && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                            },
                            empty: function(e) {
                                for(e = e.firstChild; e; e = e.nextSibling)
                                    if(e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return G.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return t === "input" && e.type === "button" || t === "button"
                            },
                            text: function(e) {
                                var t;
                                return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                            },
                            first: ct(function() {
                                return [0]
                            }),
                            last: ct(function(e, t) {
                                return [t - 1]
                            }),
                            eq: ct(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: ct(function(e, t) {
                                var n = 0;
                                for(; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: ct(function(e, t) {
                                var n = 1;
                                for(; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: ct(function(e, t, n) {
                                var r = n < 0 ? n + t : n;
                                for(; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: ct(function(e, t, n) {
                                var r = n < 0 ? n + t : n;
                                for(; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    };
                    for(n in {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) i.pseudos[n] = ft(n);
                    for(n in {
                            submit: !0,
                            reset: !0
                        }) i.pseudos[n] = lt(n);
                    u = ut.compile = function(e, t) {
                        var n, r = [],
                            i = [],
                            s = k[e + " "];
                        if(!s) {
                            t || (t = ht(e)), n = t.length;
                            while(n--) s = yt(t[n]), s[b] ? r.push(s) : i.push(s);
                            s = k(e, bt(i, r))
                        }
                        return s
                    }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = w.attr, w.find = ut, w.expr = ut.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ut.uniqueSort, w.text = ut.getText, w.isXMLDoc = ut.isXML, w.contains = ut.contains
                }(e);
            var ut = /Until$/,
                at = /^(?:parents|prev(?:Until|All))/,
                ft = /^.[^:#\[\.,]*$/,
                lt = w.expr.match.needsContext,
                ct = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            w.fn.extend({
                find: function(e) {
                    var t, n, r, i = this.length;
                    if(typeof e != "string") return r = this, this.pushStack(w(e).filter(function() {
                        for(t = 0; t < i; t++)
                            if(w.contains(r[t], this)) return !0
                    }));
                    n = [];
                    for(t = 0; t < i; t++) w.find(e, this[t], n);
                    return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
                },
                has: function(e) {
                    var t, n = w(e, this),
                        r = n.length;
                    return this.filter(function() {
                        for(t = 0; t < r; t++)
                            if(w.contains(this, n[t])) return !0
                    })
                },
                not: function(e) {
                    return this.pushStack(pt(this, e, !1))
                },
                filter: function(e) {
                    return this.pushStack(pt(this, e, !0))
                },
                is: function(e) {
                    return !!e && (typeof e == "string" ? lt.test(e) ? w(e, this.context).index(this[0]) >= 0 : w.filter(e, this).length > 0 : this.filter(e).length > 0)
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        s = [],
                        o = lt.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
                    for(; r < i; r++) {
                        n = this[r];
                        while(n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                            if(o ? o.index(n) > -1 : w.find.matchesSelector(n, e)) {
                                s.push(n);
                                break
                            }
                            n = n.parentNode
                        }
                    }
                    return this.pushStack(s.length > 1 ? w.unique(s) : s)
                },
                index: function(e) {
                    return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                        r = w.merge(this.get(), n);
                    return this.pushStack(w.unique(r))
                },
                addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                }
            }), w.fn.andSelf = w.fn.addBack, w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null
                },
                parents: function(e) {
                    return w.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return w.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return ht(e, "nextSibling")
                },
                prev: function(e) {
                    return ht(e, "previousSibling")
                },
                nextAll: function(e) {
                    return w.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return w.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return w.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return w.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return w.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return w.sibling(e.firstChild)
                },
                contents: function(e) {
                    return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
                }
            }, function(e, t) {
                w.fn[e] = function(n, r) {
                    var i = w.map(this, t, n);
                    return ut.test(e) || (r = n), r && typeof r == "string" && (i = w.filter(r, i)), i = this.length > 1 && !ct[e] ? w.unique(i) : i, this.length > 1 && at.test(e) && (i = i.reverse()), this.pushStack(i)
                }
            }), w.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"), t.length === 1 ? w.find.matchesSelector(t[0], e) ? [t[0]] : [] : w.find.matches(e, t)
                },
                dir: function(e, n, r) {
                    var i = [],
                        s = e[n];
                    while(s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
                    return i
                },
                sibling: function(e, t) {
                    var n = [];
                    for(; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                    return n
                }
            });
            var vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                mt = / jQuery\d+="(?:null|\d+)"/g,
                gt = new RegExp("<(?:" + vt + ")[\\s/>]", "i"),
                yt = /^\s+/,
                bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                wt = /<([\w:]+)/,
                Et = /<tbody/i,
                St = /<|&#?\w+;/,
                xt = /<(?:script|style|link)/i,
                Tt = /^(?:checkbox|radio)$/i,
                Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ct = /^$|\/(?:java|ecma)script/i,
                kt = /^true\/(.*)/,
                Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                At = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                Ot = dt(o),
                Mt = Ot.appendChild(o.createElement("div"));
            At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, w.fn.extend({
                text: function(e) {
                    return w.access(this, function(e) {
                        return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                    }, null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if(w.isFunction(e)) return this.each(function(t) {
                        w(this).wrapAll(e.call(this, t))
                    });
                    if(this[0]) {
                        var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            var e = this;
                            while(e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return w.isFunction(e) ? this.each(function(t) {
                        w(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = w.isFunction(e);
                    return this.each(function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function() {
                    return this.domManip(arguments, !1, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, !1, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    var n, r = 0;
                    for(;
                        (n = this[r]) != null; r++)
                        if(!e || w.filter(e, [n]).length > 0) !t && n.nodeType === 1 && w.cleanData(Ft(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Ht(Ft(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    var e, t = 0;
                    for(;
                        (e = this[t]) != null; t++) {
                        e.nodeType === 1 && w.cleanData(Ft(e, !1));
                        while(e.firstChild) e.removeChild(e.firstChild);
                        e.options && w.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                        return w.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return w.access(this, function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if(e === t) return n.nodeType === 1 ? n.innerHTML.replace(mt, "") : t;
                        if(typeof e == "string" && !xt.test(e) && (w.support.htmlSerialize || !gt.test(e)) && (w.support.leadingWhitespace || !yt.test(e)) && !At[(wt.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(bt, "<$1></$2>");
                            try {
                                for(; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (w.cleanData(Ft(n, !1)), n.innerHTML = e);
                                n = 0
                            } catch(s) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function(e) {
                    var t = w.isFunction(e);
                    return !t && typeof e != "string" && (e = w(e).not(this).detach()), this.domManip([e], !0, function(e) {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        n && (w(this).remove(), n.insertBefore(e, t))
                    })
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, r) {
                    e = p.apply([], e);
                    var i, s, o, u, a, f, l = 0,
                        c = this.length,
                        h = this,
                        d = c - 1,
                        v = e[0],
                        m = w.isFunction(v);
                    if(m || !(c <= 1 || typeof v != "string" || w.support.checkClone || !Nt.test(v))) return this.each(function(i) {
                        var s = h.eq(i);
                        m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
                    });
                    if(c) {
                        f = w.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, f.childNodes.length === 1 && (f = i);
                        if(i) {
                            n = n && w.nodeName(i, "tr"), u = w.map(Ft(f, "script"), Dt), o = u.length;
                            for(; l < c; l++) s = f, l !== d && (s = w.clone(s, !0, !0), o && w.merge(u, Ft(s, "script"))), r.call(n && w.nodeName(this[l], "table") ? _t(this[l], "tbody") : this[l], s, l);
                            if(o) {
                                a = u[u.length - 1].ownerDocument, w.map(u, Pt);
                                for(l = 0; l < o; l++) s = u[l], Ct.test(s.type || "") && !w._data(s, "globalEval") && w.contains(a, s) && (s.src ? w.ajax({
                                    url: s.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: !1,
                                    global: !1,
                                    "throws": !0
                                }) : w.globalEval((s.text || s.textContent || s.innerHTML || "").replace(Lt, "")))
                            }
                            f = i = null
                        }
                    }
                    return this
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                w.fn[e] = function(e) {
                    var n, r = 0,
                        i = [],
                        s = w(e),
                        o = s.length - 1;
                    for(; r <= o; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
                    return this.pushStack(i)
                }
            }), w.extend({
                clone: function(e, t, n) {
                    var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
                    w.support.html5Clone || w.isXMLDoc(e) || !gt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Mt.innerHTML = e.outerHTML, Mt.removeChild(s = Mt.firstChild));
                    if((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                        r = Ft(s), u = Ft(e);
                        for(o = 0;
                            (i = u[o]) != null; ++o) r[o] && jt(i, r[o])
                    }
                    if(t)
                        if(n) {
                            u = u || Ft(e), r = r || Ft(s);
                            for(o = 0;
                                (i = u[o]) != null; o++) Bt(i, r[o])
                        } else Bt(e, s);
                    return r = Ft(s, "script"), r.length > 0 && Ht(r, !a && Ft(e, "script")), r = u = i = null, s
                },
                buildFragment: function(e, t, n, r) {
                    var i, s, o, u, a, f, l, c = e.length,
                        h = dt(t),
                        p = [],
                        d = 0;
                    for(; d < c; d++) {
                        s = e[d];
                        if(s || s === 0)
                            if(w.type(s) === "object") w.merge(p, s.nodeType ? [s] : s);
                            else if(!St.test(s)) p.push(t.createTextNode(s));
                        else {
                            u = u || h.appendChild(t.createElement("div")), a = (wt.exec(s) || ["", ""])[1].toLowerCase(), l = At[a] || At._default, u.innerHTML = l[1] + s.replace(bt, "<$1></$2>") + l[2], i = l[0];
                            while(i--) u = u.lastChild;
                            !w.support.leadingWhitespace && yt.test(s) && p.push(t.createTextNode(yt.exec(s)[0]));
                            if(!w.support.tbody) {
                                s = a === "table" && !Et.test(s) ? u.firstChild : l[1] === "<table>" && !Et.test(s) ? u : 0, i = s && s.childNodes.length;
                                while(i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                            }
                            w.merge(p, u.childNodes), u.textContent = "";
                            while(u.firstChild) u.removeChild(u.firstChild);
                            u = h.lastChild
                        }
                    }
                    u && h.removeChild(u), w.support.appendChecked || w.grep(Ft(p, "input"), It), d = 0;
                    while(s = p[d++]) {
                        if(r && w.inArray(s, r) !== -1) continue;
                        o = w.contains(s.ownerDocument, s), u = Ft(h.appendChild(s), "script"), o && Ht(u);
                        if(n) {
                            i = 0;
                            while(s = u[i++]) Ct.test(s.type || "") && n.push(s)
                        }
                    }
                    return u = null, h
                },
                cleanData: function(e, t) {
                    var n, r, i, o, u = 0,
                        a = w.expando,
                        f = w.cache,
                        l = w.support.deleteExpando,
                        h = w.event.special;
                    for(;
                        (n = e[u]) != null; u++)
                        if(t || w.acceptData(n)) {
                            i = n[a], o = i && f[i];
                            if(o) {
                                if(o.events)
                                    for(r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                                f[i] && (delete f[i], l ? delete n[a] : typeof n.removeAttribute !== s ? n.removeAttribute(a) : n[a] = null, c.push(i))
                            }
                        }
                }
            });
            var qt, Rt, Ut, zt = /alpha\([^)]*\)/i,
                Wt = /opacity\s*=\s*([^)]*)/,
                Xt = /^(top|right|bottom|left)$/,
                Vt = /^(none|table(?!-c[ea]).+)/,
                $t = /^margin/,
                Jt = new RegExp("^(" + E + ")(.*)$", "i"),
                Kt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
                Qt = new RegExp("^([+-])=(" + E + ")", "i"),
                Gt = {
                    BODY: "block"
                },
                Yt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Zt = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                en = ["Top", "Right", "Bottom", "Left"],
                tn = ["Webkit", "O", "Moz", "ms"];
            w.fn.extend({
                css: function(e, n) {
                    return w.access(this, function(e, n, r) {
                        var i, s, o = {},
                            u = 0;
                        if(w.isArray(n)) {
                            s = Rt(e), i = n.length;
                            for(; u < i; u++) o[n[u]] = w.css(e, n[u], !1, s);
                            return o
                        }
                        return r !== t ? w.style(e, n, r) : w.css(e, n)
                    }, e, n, arguments.length > 1)
                },
                show: function() {
                    return sn(this, !0)
                },
                hide: function() {
                    return sn(this)
                },
                toggle: function(e) {
                    var t = typeof e == "boolean";
                    return this.each(function() {
                        (t ? e : rn(this)) ? w(this).show(): w(this).hide()
                    })
                }
            }), w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if(t) {
                                var n = Ut(e, "opacity");
                                return n === "" ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, n, r, i) {
                    if(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                    var s, o, u, a = w.camelCase(n),
                        f = e.style;
                    n = w.cssProps[a] || (w.cssProps[a] = nn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
                    if(r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                    o = typeof r, o === "string" && (s = Qt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
                    if(r == null || o === "number" && isNaN(r)) return;
                    o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
                    if(!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                        f[n] = r
                    } catch(l) {}
                },
                css: function(e, n, r, i) {
                    var s, o, u, a = w.camelCase(n);
                    return n = w.cssProps[a] || (w.cssProps[a] = nn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Ut(e, n, i)), o === "normal" && n in Zt && (o = Zt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
                },
                swap: function(e, t, n, r) {
                    var i, s, o = {};
                    for(s in t) o[s] = e.style[s], e.style[s] = t[s];
                    i = n.apply(e, r || []);
                    for(s in t) e.style[s] = o[s];
                    return i
                }
            }), e.getComputedStyle ? (Rt = function(t) {
                return e.getComputedStyle(t, null)
            }, Ut = function(e, n, r) {
                var i, s, o, u = r || Rt(e),
                    a = u ? u.getPropertyValue(n) || u[n] : t,
                    f = e.style;
                return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Kt.test(a) && $t.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
            }) : o.documentElement.currentStyle && (Rt = function(e) {
                return e.currentStyle
            }, Ut = function(e, n, r) {
                var i, s, o, u = r || Rt(e),
                    a = u ? u[n] : t,
                    f = e.style;
                return a == null && f && f[n] && (a = f[n]), Kt.test(a) && !Xt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
            }), w.each(["height", "width"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if(n) return e.offsetWidth === 0 && Vt.test(w.css(e, "display")) ? w.swap(e, Yt, function() {
                            return an(e, t, r)
                        }) : an(e, t, r)
                    },
                    set: function(e, n, r) {
                        var i = r && Rt(e);
                        return on(e, n, r ? un(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                    }
                }
            }), w.support.opacity || (w.cssHooks.opacity = {
                get: function(e, t) {
                    return Wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                        s = r && r.filter || n.filter || "";
                    n.zoom = 1;
                    if((t >= 1 || t === "") && w.trim(s.replace(zt, "")) === "" && n.removeAttribute) {
                        n.removeAttribute("filter");
                        if(t === "" || r && !r.filter) return
                    }
                    n.filter = zt.test(s) ? s.replace(zt, i) : s + " " + i
                }
            }), w(function() {
                w.support.reliableMarginRight || (w.cssHooks.marginRight = {
                    get: function(e, t) {
                        if(t) return w.swap(e, {
                            display: "inline-block"
                        }, Ut, [e, "marginRight"])
                    }
                }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function(e, t) {
                    w.cssHooks[t] = {
                        get: function(e, n) {
                            if(n) return n = Ut(e, t), Kt.test(n) ? w(e).position()[t] + "px" : n
                        }
                    }
                })
            }), w.expr && w.expr.filters && (w.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
            }, w.expr.filters.visible = function(e) {
                return !w.expr.filters.hidden(e)
            }), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0,
                            i = {},
                            s = typeof n == "string" ? n.split(" ") : [n];
                        for(; r < 4; r++) i[e + en[r] + t] = s[r] || s[r - 2] || s[0];
                        return i
                    }
                }, $t.test(e) || (w.cssHooks[e + t].set = on)
            });
            var cn = /%20/g,
                hn = /\[\]$/,
                pn = /\r?\n/g,
                dn = /^(?:submit|button|image|reset|file)$/i,
                vn = /^(?:input|select|textarea|keygen)/i;
            w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && vn.test(this.nodeName) && !dn.test(e) && (this.checked || !Tt.test(e))
                    }).map(function(e, t) {
                        var n = w(this).val();
                        return n == null ? null : w.isArray(n) ? w.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(pn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(pn, "\r\n")
                        }
                    }).get()
                }
            }), w.param = function(e, n) {
                var r, i = [],
                    s = function(e, t) {
                        t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
                if(w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
                    s(this.name, this.value)
                });
                else
                    for(r in e) mn(r, e[r], n, s);
                return i.join("&").replace(cn, "+")
            }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), w.fn.hover = function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            };
            var gn, yn, bn = w.now(),
                wn = /\?/,
                En = /#.*$/,
                Sn = /([?&])_=[^&]*/,
                xn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
                Tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Nn = /^(?:GET|HEAD)$/,
                Cn = /^\/\//,
                kn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                Ln = w.fn.load,
                An = {},
                On = {},
                Mn = "*/".concat("*");
            try {
                yn = u.href
            } catch(_n) {
                yn = o.createElement("a"), yn.href = "", yn = yn.href
            }
            gn = kn.exec(yn.toLowerCase()) || [], w.fn.load = function(e, n, r) {
                if(typeof e != "string" && Ln) return Ln.apply(this, arguments);
                var i, s, o, u = this,
                    a = e.indexOf(" ");
                return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
                        url: e,
                        type: o,
                        dataType: "html",
                        data: n
                    }).done(function(e) {
                        s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
                    }).complete(r && function(e, t) {
                        u.each(r, s || [e.responseText, t, e])
                    }),
                    this
            }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), w.each(["get", "post"], function(e, n) {
                w[n] = function(e, r, i, s) {
                    return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                        url: e,
                        type: n,
                        dataType: s,
                        data: r,
                        success: i
                    })
                }
            }), w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: yn,
                    type: "GET",
                    isLocal: Tn.test(gn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Mn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": w.parseJSON,
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Hn(Hn(e, w.ajaxSettings), t) : Hn(w.ajaxSettings, e)
                },
                ajaxPrefilter: Dn(An),
                ajaxTransport: Dn(On),
                ajax: function(e, n) {
                    function N(e, n, r, i) {
                        var l, g, y, E, S, T = n;
                        if(b === 2) return;
                        b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Bn(c, x, r));
                        if(e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = jn(c, E), T = l.state, g = l.data, y = l.error, l = !y);
                        else {
                            y = T;
                            if(e || !T) T = "error", e < 0 && (e = 0)
                        }
                        x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
                    }
                    typeof e == "object" && (n = e, e = t), n = n || {};
                    var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                        h = c.context || c,
                        p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                        d = w.Deferred(),
                        v = w.Callbacks("once memory"),
                        m = c.statusCode || {},
                        g = {},
                        y = {},
                        b = 0,
                        E = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if(b === 2) {
                                    if(!l) {
                                        l = {};
                                        while(t = xn.exec(o)) l[t[1].toLowerCase()] = t[2]
                                    }
                                    t = l[e.toLowerCase()]
                                }
                                return t == null ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return b === 2 ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, g[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return b || (c.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if(e)
                                    if(b < 2)
                                        for(t in e) m[t] = [m[t], e[t]];
                                    else x.always(e[x.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || E;
                                return f && f.abort(t), N(0, t), this
                            }
                        };
                    d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || yn) + "").replace(En, "").replace(Cn, gn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = kn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === gn[1] && r[2] === gn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (gn[3] || (gn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Pn(An, c, n, x);
                    if(b === 2) return x;
                    a = c.global, a && w.active++ === 0 && w.event.
                    trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Nn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (wn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Sn.test(s) ? s.replace(Sn, "$1_=" + bn++) : s + (wn.test(s) ? "&" : "?") + "_=" + bn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Mn + "; q=0.01" : "") : c.accepts["*"]);
                    for(i in c.headers) x.setRequestHeader(i, c.headers[i]);
                    if(!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                        E = "abort";
                        for(i in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) x[i](c[i]);
                        f = Pn(On, c, n, x);
                        if(!f) N(-1, "No Transport");
                        else {
                            x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                                x.abort("timeout")
                            }, c.timeout));
                            try {
                                b = 1, f.send(g, N)
                            } catch(T) {
                                if(!(b < 2)) throw T;
                                N(-1, T)
                            }
                        }
                        return x
                    }
                    return x.abort()
                },
                getScript: function(e, n) {
                    return w.get(e, t, n, "script")
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json")
                }
            }), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", function(e) {
                e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), w.ajaxTransport("script", function(e) {
                if(e.crossDomain) {
                    var n, r = o.head || w("head")[0] || o.documentElement;
                    return {
                        send: function(t, i) {
                            n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                                if(t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                            }, r.insertBefore(n, r.firstChild)
                        },
                        abort: function() {
                            n && n.onload(t, !0)
                        }
                    }
                }
            });
            var Fn = [],
                In = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Fn.pop() || w.expando + "_" + bn++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", function(n, r, i) {
                var s, o, u, a = n.jsonp !== !1 && (In.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && In.test(n.data) && "data");
                if(a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(In, "$1" + s) : n.jsonp !== !1 && (n.url += (wn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                    return u || w.error(s + " was not called"), u[0]
                }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
                    u = arguments
                }, i.always(function() {
                    e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Fn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
                }), "script"
            });
            var qn, Rn, Un = 0,
                zn = e.ActiveXObject && function() {
                    var e;
                    for(e in qn) qn[e](t, !0)
                };
            w.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && Wn() || Xn()
            } : Wn, Rn = w.ajaxSettings.xhr(), w.support.cors = !!Rn && "withCredentials" in Rn, Rn = w.support.ajax = !!Rn, Rn && w.ajaxTransport(function(n) {
                if(!n.crossDomain || w.support.cors) {
                    var r;
                    return {
                        send: function(i, s) {
                            var o, u, a = n.xhr();
                            n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                            if(n.xhrFields)
                                for(u in n.xhrFields) a[u] = n.xhrFields[u];
                            n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for(u in i) a.setRequestHeader(u, i[u])
                            } catch(f) {}
                            a.send(n.hasContent && n.data || null), r = function(e, i) {
                                var u, f, l, c;
                                try {
                                    if(r && (i || a.readyState === 4)) {
                                        r = t, o && (a.onreadystatechange = w.noop, zn && delete qn[o]);
                                        if(i) a.readyState !== 4 && a.abort();
                                        else {
                                            c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                            try {
                                                l = a.statusText
                                            } catch(h) {
                                                l = ""
                                            }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                        }
                                    }
                                } catch(p) {
                                    i || s(-1, p)
                                }
                                c && s(u, l, c, f)
                            }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Un, zn && (qn || (qn = {}, w(e).unload(zn)), qn[o] = r), a.onreadystatechange = r) : r()
                        },
                        abort: function() {
                            r && r(t, !0)
                        }
                    }
                }
            });
            var Vn, $n, Jn = /^(?:toggle|show|hide)$/,
                Kn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
                Qn = /queueHooks$/,
                Gn = [rr],
                Yn = {
                    "*": [function(e, t) {
                        var n, r, i = this.createTween(e, t),
                            s = Kn.exec(t),
                            o = i.cur(),
                            u = +o || 0,
                            a = 1,
                            f = 20;
                        if(s) {
                            n = +s[2], r = s[3] || (w.cssNumber[e] ? "" : "px");
                            if(r !== "px" && u) {
                                u = w.css(i.elem, e, !0) || n || 1;
                                do a = a || ".5", u /= a, w.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                            }
                            i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                        }
                        return i
                    }]
                };
            w.Animation = w.extend(tr, {
                tweener: function(e, t) {
                    w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    var n, r = 0,
                        i = e.length;
                    for(; r < i; r++) n = e[r], Yn[n] = Yn[n] || [], Yn[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? Gn.unshift(e) : Gn.push(e)
                }
            }), w.Tween = ir, ir.prototype = {
                constructor: ir,
                init: function(e, t, n, r, i, s) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = ir.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ir.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = ir.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ir.propHooks._default.set(this), this
                }
            }, ir.prototype.init.prototype = ir.prototype, ir.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, ir.propHooks.scrollTop = ir.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.each(["toggle", "show", "hide"], function(e, t) {
                var n = w.fn[t];
                w.fn[t] = function(e, r, i) {
                    return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(sr(t, !0), e, r, i)
                }
            }), w.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(rn).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = w.isEmptyObject(e),
                        s = w.speed(t, n, r),
                        o = function() {
                            var t = tr(this, w.extend({}, e), s);
                            o.finish = function() {
                                t.stop(!0)
                            }, (i || w._data(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(e, n, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            n = e != null && e + "queueHooks",
                            s = w.timers,
                            o = w._data(this);
                        if(n) o[n] && o[n].stop && i(o[n]);
                        else
                            for(n in o) o[n] && o[n].stop && Qn.test(n) && i(o[n]);
                        for(n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                        (t || !r) && w.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = w._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            s = w.timers,
                            o = r ? r.length : 0;
                        n.finish = !0, w.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                        for(t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for(t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), w.each({
                slideDown: sr("show"),
                slideUp: sr("hide"),
                slideToggle: sr("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                w.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), w.speed = function(e, t, n) {
                var r = e && typeof e == "object" ? w.extend({}, e) : {
                    complete: n || !n && t || w.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !w.isFunction(t) && t
                };
                r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
                if(r.queue == null || r.queue === !0) r.queue = "fx";
                return r.old = r.complete, r.complete = function() {
                    w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                }, r
            }, w.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, w.timers = [], w.fx = ir.prototype.init, w.fx.tick = function() {
                var e, n = w.timers,
                    r = 0;
                Vn = w.now();
                for(; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
                n.length || w.fx.stop(), Vn = t
            }, w.fx.timer = function(e) {
                e() && w.timers.push(e) && w.fx.start()
            }, w.fx.interval = 13, w.fx.start = function() {
                $n || ($n = setInterval(w.fx.tick, w.fx.interval))
            }, w.fx.stop = function() {
                clearInterval($n), $n = null
            }, w.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function(e) {
                return w.grep(w.timers, function(t) {
                    return e === t.elem
                }).length
            }), w.fn.offset = function(e) {
                if(arguments.length) return e === t ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
                var n, r, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    u = o && o.ownerDocument;
                if(!u) return;
                return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== s && (i = o.getBoundingClientRect()), r = or(u), {
                    top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                    left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                }) : i
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var r = w.css(e, "position");
                    r === "static" && (e.style.position = "relative");
                    var i = w(e),
                        s = i.offset(),
                        o = w.css(e, "top"),
                        u = w.css(e, "left"),
                        a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u]) > -1,
                        f = {},
                        l = {},
                        c, h;
                    a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
                }
            }, w.fn.extend({
                position: function() {
                    if(!this[0]) return;
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - w.css(r, "marginTop", !0),
                        left: t.left - n.left - w.css(r, "marginLeft", !0)
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || o.documentElement;
                        while(e && !w.nodeName(e, "html") && w.css(e, "position") === "static") e = e.offsetParent;
                        return e || o.documentElement
                    })
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var r = /Y/.test(n);
                w.fn[e] = function(i) {
                    return w.access(this, function(e, i, s) {
                        var o = or(e);
                        if(s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                        o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
                    }, e, i, arguments.length, null)
                }
            }), w.each({
                Height: "height",
                Width: "width"
            }, function(e, n) {
                w.each({
                    padding: "inner" + e,
                    content: n,
                    "": "outer" + e
                }, function(r, i) {
                    w.fn[i] = function(i, s) {
                        var o = arguments.length && (r || typeof i != "boolean"),
                            u = r || (i === !0 || s === !0 ? "margin" : "border");
                        return w.access(this, function(n, r, i) {
                            var s;
                            return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                        }, n, o ? i : t, o, null)
                    }
                })
            }), e.jQuery = e.$ = w, typeof r == "function" && r.amd && r.amd.jQuery && r("jquery", [], function() {
                return w
            })
        }(window),
        function() {
            var e = this,
                t = e._,
                n = {},
                i = Array.prototype,
                s = Object.prototype,
                o = Function.prototype,
                u = i.push,
                a = i.slice,
                f = i.concat,
                l = s.toString,
                c = s.hasOwnProperty,
                h = i.forEach,
                p = i.map,
                d = i.reduce,
                v = i.reduceRight,
                m = i.filter,
                g = i.every,
                y = i.some,
                b = i.indexOf,
                w = i.lastIndexOf,
                E = Array.isArray,
                S = Object.keys,
                x = o.bind,
                T = function(e) {
                    if(e instanceof T) return e;
                    if(!(this instanceof T)) return new T(e);
                    this._wrapped = e
                };
            typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = T), exports._ = T) : e._ = T, T.VERSION = "1.6.0";
            var N = T.each = T.forEach = function(e, t, r) {
                if(e == null) return e;
                if(h && e.forEach === h) e.forEach(t, r);
                else if(e.length === +e.length) {
                    for(var i = 0, s = e.length; i < s; i++)
                        if(t.call(r, e[i], i, e) === n) return
                } else {
                    var o = T.keys(e);
                    for(var i = 0, s = o.length; i < s; i++)
                        if(t.call(r, e[o[i]], o[i], e) === n) return
                }
                return e
            };
            T.map = T.collect = function(e, t, n) {
                var r = [];
                return e == null ? r : p && e.map === p ? e.map(t, n) : (N(e, function(e, i, s) {
                    r.push(t.call(n, e, i, s))
                }), r)
            };
            var C = "Reduce of empty array with no initial value";
            T.reduce = T.foldl = T.inject = function(e, t, n, r) {
                var i = arguments.length > 2;
                e == null && (e = []);
                if(d && e.reduce === d) return r && (t = T.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                N(e, function(e, s, o) {
                    i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
                });
                if(!i) throw new TypeError(C);
                return n
            }, T.reduceRight = T.foldr = function(e, t, n, r) {
                var i = arguments.length > 2;
                e == null && (e = []);
                if(v && e.reduceRight === v) return r && (t = T.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                var s = e.length;
                if(s !== +s) {
                    var o = T.keys(e);
                    s = o.length
                }
                N(e, function(u, a, f) {
                    a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
                });
                if(!i) throw new TypeError(C);
                return n
            }, T.find = T.detect = function(e, t, n) {
                var r;
                return k(e, function(e, i, s) {
                    if(t.call(n, e, i, s)) return r = e, !0
                }), r
            }, T.filter = T.select = function(e, t, n) {
                var r = [];
                return e == null ? r : m && e.filter === m ? e.filter(t, n) : (N(e, function(e, i, s) {
                    t.call(n, e, i, s) && r.push(e)
                }), r)
            }, T.reject = function(e, t, n) {
                return T.filter(e, function(e, r, i) {
                    return !t.call(n, e, r, i)
                }, n)
            }, T.every = T.all = function(e, t, r) {
                t || (t = T.identity);
                var i = !0;
                return e == null ? i : g && e.every === g ? e.every(t, r) : (N(e, function(e, s, o) {
                    if(!(i = i && t.call(r, e, s, o))) return n
                }), !!i)
            };
            var k = T.some = T.any = function(e, t, r) {
                t || (t = T.identity);
                var i = !1;
                return e == null ? i : y && e.some === y ? e.some(t, r) : (N(e, function(e, s, o) {
                    if(i || (i = t.call(r, e, s, o))) return n
                }), !!i)
            };
            T.contains = T.include = function(e, t) {
                return e == null ? !1 : b && e.indexOf === b ? e.indexOf(t) != -1 : k(e, function(e) {
                    return e === t
                })
            }, T.invoke = function(e, t) {
                var n = a.call(arguments, 2),
                    r = T.isFunction(t);
                return T.map(e, function(e) {
                    return(r ? t : e[t]).apply(e, n)
                })
            }, T.pluck = function(e, t) {
                return T.map(e, T.property(t))
            }, T.where = function(e, t) {
                return T.filter(e, T.matches(t))
            }, T.findWhere = function(e, t) {
                return T.find(e, T.matches(t))
            }, T.max = function(e, t, n) {
                if(!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                var r = -Infinity,
                    i = -Infinity;
                return N(e, function(e, s, o) {
                    var u = t ? t.call(n, e, s, o) : e;
                    u > i && (r = e, i = u)
                }), r
            }, T.min = function(e, t, n) {
                if(!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                var r = Infinity,
                    i = Infinity;
                return N(e, function(e, s, o) {
                    var u = t ? t.call(n, e, s, o) : e;
                    u < i && (r = e, i = u)
                }), r
            }, T.shuffle = function(e) {
                var t, n = 0,
                    r = [];
                return N(e, function(e) {
                    t = T.random(n++), r[n - 1] = r[t], r[t] = e
                }), r
            }, T.sample = function(e, t, n) {
                return t == null || n ? (e.length !== +e.length && (e = T.values(e)), e[T.random(e.length - 1)]) : T.shuffle(e).slice(0, Math.max(0, t))
            };
            var L = function(e) {
                return e == null ? T.identity : T.isFunction(e) ? e : T.property(e)
            };
            T.sortBy = function(e, t, n) {
                return t = L(t), T.pluck(T.map(e, function(e, r, i) {
                    return {
                        value: e,
                        index: r,
                        criteria: t.call(n, e, r, i)
                    }
                }).sort(function(e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if(n !== r) {
                        if(n > r || n === void 0) return 1;
                        if(n < r || r === void 0) return -1
                    }
                    return e.index - t.index
                }), "value")
            };
            var A = function(e) {
                return function(t, n, r) {
                    var i = {};
                    return n = L(n), N(t, function(s, o) {
                        var u = n.call(r, s, o, t);
                        e(i, u, s)
                    }), i
                }
            };
            T.groupBy = A(function(e, t, n) {
                T.has(e, t) ? e[t].push(n) : e[t] = [n]
            }), T.indexBy = A(function(e, t, n) {
                e[t] = n
            }), T.countBy = A(function(e, t) {
                T.has(e, t) ? e[t]++ : e[t] = 1
            }), T.sortedIndex = function(e, t, n, r) {
                n = L(n);
                var i = n.call(r, t),
                    s = 0,
                    o = e.length;
                while(s < o) {
                    var u = s + o >>> 1;
                    n.call(r, e[u]) < i ? s = u + 1 : o = u
                }
                return s
            }, T.toArray = function(e) {
                return e ? T.isArray(e) ? a.call(e) : e.length === +e.length ? T.map(e, T.identity) : T.values(e) : []
            }, T.size = function(e) {
                return e == null ? 0 : e.length === +e.length ? e.length : T.keys(e).length
            }, T.first = T.head = T.take = function(e, t, n) {
                return e == null ? void 0 : t == null || n ? e[0] : t < 0 ? [] : a.call(e, 0, t)
            }, T.initial = function(e, t, n) {
                return a.call(e, 0, e.length - (t == null || n ? 1 : t))
            }, T.last = function(e, t, n) {
                return e == null ? void 0 : t == null || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
            }, T.rest = T.tail = T.drop = function(e, t, n) {
                return a.call(e, t == null || n ? 1 : t)
            }, T.compact = function(e) {
                return T.filter(e, T.identity)
            };
            var O = function(e, t, n) {
                return t && T.every(e, T.isArray) ? f.apply(n, e) : (N(e, function(e) {
                    T.isArray(e) || T.isArguments(e) ? t ? u.apply(n, e) : O(e, t, n) : n.push(e)
                }), n)
            };
            T.flatten = function(e, t) {
                return O(e, t, [])
            }, T.without = function(e) {
                return T.difference(e, a.call(arguments, 1))
            }, T.partition = function(e, t) {
                var n = [],
                    r = [];
                return N(e, function(e) {
                    (t(e) ? n : r).push(e)
                }), [n, r]
            }, T.uniq = T.unique = function(e, t, n, r) {
                T.isFunction(t) && (r = n, n = t, t = !1);
                var i = n ? T.map(e, n, r) : e,
                    s = [],
                    o = [];
                return N(i, function(n, r) {
                    if(t ? !r || o[o.length - 1] !== n : !T.contains(o, n)) o.push(n), s.push(e[r])
                }), s
            }, T.union = function() {
                return T.uniq(T.flatten(arguments, !0))
            }, T.intersection = function(e) {
                var t = a.call(arguments, 1);
                return T.filter(T.uniq(e), function(e) {
                    return T.every(t, function(t) {
                        return T.contains(t, e)
                    })
                })
            }, T.difference = function(e) {
                var t = f.apply(i, a.call(arguments, 1));
                return T.filter(e, function(e) {
                    return !T.contains(t, e)
                })
            }, T.zip = function() {
                var e = T.max(T.pluck(arguments, "length").concat(0)),
                    t = new Array(e);
                for(var n = 0; n < e; n++) t[n] = T.pluck(arguments, "" + n);
                return t
            }, T.object = function(e, t) {
                if(e == null) return {};
                var n = {};
                for(var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, T.indexOf = function(e, t, n) {
                if(e == null) return -1;
                var r = 0,
                    i = e.length;
                if(n) {
                    if(typeof n != "number") return r = T.sortedIndex(e, t), e[r] === t ? r : -1;
                    r = n < 0 ? Math.max(0, i + n) : n
                }
                if(b && e.indexOf === b) return e.indexOf(t, n);
                for(; r < i; r++)
                    if(e[r] === t) return r;
                return -1
            }, T.lastIndexOf = function(e, t, n) {
                if(e == null) return -1;
                var r = n != null;
                if(w && e.lastIndexOf === w) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                var i = r ? n : e.length;
                while(i--)
                    if(e[i] === t) return i;
                return -1
            }, T.range = function(e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
                var r = Math.max(Math.ceil((t - e) / n), 0),
                    i = 0,
                    s = new Array(r);
                while(i < r) s[i++] = e, e += n;
                return s
            };
            var M = function() {};
            T.bind = function(e, t) {
                var n, r;
                if(x && e.bind === x) return x.apply(e, a.call(arguments, 1));
                if(!T.isFunction(e)) throw new TypeError;
                return n = a.call(arguments, 2), r = function() {
                    if(this instanceof r) {
                        M.prototype = e.prototype;
                        var i = new M;
                        M.prototype = null;
                        var s = e.apply(i, n.concat(a.call(arguments)));
                        return Object(s) === s ? s : i
                    }
                    return e.apply(t, n.concat(a.call(arguments)))
                }
            }, T.partial = function(e) {
                var t = a.call(arguments, 1);
                return function() {
                    var n = 0,
                        r = t.slice();
                    for(var i = 0, s = r.length; i < s; i++) r[i] === T && (r[i] = arguments[n++]);
                    while(n < arguments.length) r.push(arguments[n++]);
                    return e.apply(this, r)
                }
            }, T.bindAll = function(e) {
                var t = a.call(arguments, 1);
                if(t.length === 0) throw new Error("bindAll must be passed function names");
                return N(t, function(t) {
                    e[t] = T.bind(e[t], e)
                }), e
            }, T.memoize = function(e, t) {
                var n = {};
                return t || (t = T.identity),
                    function() {
                        var r = t.apply(this, arguments);
                        return T.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                    }
            }, T.delay = function(e, t) {
                var n = a.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, T.defer = function(e) {
                return T.delay.apply(T, [e, 1].concat(a.call(arguments, 1)))
            }, T.throttle = function(e, t, n) {
                var r, i, s, o = null,
                    u = 0;
                n || (n = {});
                var a = function() {
                    u = n.leading === !1 ? 0 : T.now(), o = null, s = e.apply(r, i), r = i = null
                };
                return function() {
                    var f = T.now();
                    !u && n.leading === !1 && (u = f);
                    var l = t - (f - u);
                    return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), r = i = null) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
                }
            }, T.debounce = function(e, t, n) {
                var r, i, s, o, u, a = function() {
                    var f = T.now() - o;
                    f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), s = i = null))
                };
                return function() {
                    s = this, i = arguments, o = T.now();
                    var f = n && !r;
                    return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
                }
            }, T.once = function(e) {
                var t = !1,
                    n;
                return function() {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }, T.wrap = function(e, t) {
                return T.partial(t, e)
            }, T.compose = function() {
                var e = arguments;
                return function() {
                    var t = arguments;
                    for(var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }, T.after = function(e, t) {
                return function() {
                    if(--e < 1) return t.apply(this, arguments)
                }
            }, T.keys = function(e) {
                if(!T.isObject(e)) return [];
                if(S) return S(e);
                var t = [];
                for(var n in e) T.has(e, n) && t.push(n);
                return t
            }, T.values = function(e) {
                var t = T.keys(e),
                    n = t.length,
                    r = new Array(n);
                for(var i = 0; i < n; i++) r[i] = e[t[i]];
                return r
            }, T.pairs = function(e) {
                var t = T.keys(e),
                    n = t.length,
                    r = new Array(n);
                for(var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                return r
            }, T.invert = function(e) {
                var t = {},
                    n = T.keys(e);
                for(var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                return t
            }, T.functions = T.methods = function(e) {
                var t = [];
                for(var n in e) T.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, T.extend = function(e) {
                return N(a.call(arguments, 1), function(t) {
                    if(t)
                        for(var n in t) e[n] = t[n]
                }), e
            }, T.pick = function(e) {
                var t = {},
                    n = f.apply(i, a.call(arguments, 1));
                return N(n, function(n) {
                    n in e && (t[n] = e[n])
                }), t
            }, T.omit = function(e) {
                var t = {},
                    n = f.apply(i, a.call(arguments, 1));
                for(var r in e) T.contains(n, r) || (t[r] = e[r]);
                return t
            }, T.defaults = function(e) {
                return N(a.call(arguments, 1), function(t) {
                    if(t)
                        for(var n in t) e[n] === void 0 && (e[n] = t[n])
                }), e
            }, T.clone = function(e) {
                return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
            }, T.tap = function(e, t) {
                return t(e), e
            };
            var _ = function(e, t, n, r) {
                if(e === t) return e !== 0 || 1 / e == 1 / t;
                if(e == null || t == null) return e === t;
                e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
                var i = l.call(e);
                if(i != l.call(t)) return !1;
                switch(i) {
                    case "[object String]":
                        return e == String(t);
                    case "[object Number]":
                        return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object RegExp]":
                        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                }
                if(typeof e != "object" || typeof t != "object") return !1;
                var s = n.length;
                while(s--)
                    if(n[s] == e) return r[s] == t;
                var o = e.constructor,
                    u = t.constructor;
                if(o !== u && !(T.isFunction(o) && o instanceof o && T.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
                n.push(e), r.push(t);
                var a = 0,
                    f = !0;
                if(i == "[object Array]") {
                    a = e.length, f = a == t.length;
                    if(f)
                        while(a--)
                            if(!(f = _(e[a], t[a], n, r))) break
                } else {
                    for(var c in e)
                        if(T.has(e, c)) {
                            a++;
                            if(!(f = T.has(t, c) && _(e[c], t[c], n, r))) break
                        }
                    if(f) {
                        for(c in t)
                            if(T.has(t, c) && !(a--)) break;
                        f = !a
                    }
                }
                return n.pop(), r.pop(), f
            };
            T.isEqual = function(e, t) {
                return _(e, t, [], [])
            }, T.isEmpty = function(e) {
                if(e == null) return !0;
                if(T.isArray(e) || T.isString(e)) return e.length === 0;
                for(var t in e)
                    if(T.has(e, t)) return !1;
                return !0
            }, T.isElement = function(e) {
                return !!e && e.nodeType === 1
            }, T.isArray = E || function(e) {
                return l.call(e) == "[object Array]"
            }, T.isObject = function(e) {
                return e === Object(e)
            }, N(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
                T["is" + e] = function(t) {
                    return l.call(t) == "[object " + e + "]"
                }
            }), T.isArguments(arguments) || (T.isArguments = function(e) {
                return !!e && !!T.has(e, "callee")
            }), typeof /./ != "function" && (T.isFunction = function(e) {
                return typeof e == "function"
            }), T.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, T.isNaN = function(e) {
                return T.isNumber(e) && e != +e
            }, T.isBoolean = function(e) {
                return e === !0 || e === !1 || l.call(e) == "[object Boolean]"
            }, T.isNull = function(e) {
                return e === null
            }, T.isUndefined = function(e) {
                return e === void 0
            }, T.has = function(e, t) {
                return c.call(e, t)
            }, T.noConflict = function() {
                return e._ = t, this
            }, T.identity = function(e) {
                return e
            }, T.constant = function(e) {
                return function() {
                    return e
                }
            }, T.property = function(e) {
                return function(t) {
                    return t[e]
                }
            }, T.matches = function(e) {
                return function(t) {
                    if(t === e) return !0;
                    for(var n in e)
                        if(e[n] !== t[n]) return !1;
                    return !0
                }
            }, T.times = function(e, t, n) {
                var r = Array(Math.max(0, e));
                for(var i = 0; i < e; i++) r[i] = t.call(n, i);
                return r
            }, T.random = function(e, t) {
                return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
            }, T.now = Date.now || function() {
                return(new Date).getTime()
            };
            var D = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                }
            };
            D.unescape = T.invert(D.escape);
            var P = {
                escape: new RegExp("[" + T.keys(D.escape).join("") + "]", "g"),
                unescape: new RegExp("(" + T.keys(D.unescape).join("|") + ")", "g")
            };
            T.each(["escape", "unescape"], function(e) {
                T[e] = function(t) {
                    return t == null ? "" : ("" + t).replace(P[e], function(t) {
                        return D[e][t]
                    })
                }
            }), T.result = function(e, t) {
                if(e == null) return void 0;
                var n = e[t];
                return T.isFunction(n) ? n.call(e) : n
            }, T.mixin = function(e) {
                N(T.functions(e), function(t) {
                    var n = T[t] = e[t];
                    T.prototype[t] = function() {
                        var e = [this._wrapped];
                        return u.apply(e, arguments), I.call(this, n.apply(T, e))
                    }
                })
            };
            var H = 0;
            T.uniqueId = function(e) {
                var t = ++H + "";
                return e ? e + t : t
            }, T.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/,
                j = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "   ": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            T.template = function(e, t, n) {
                var r;
                n = T.defaults({}, n, T.templateSettings);
                var i = new RegExp([(n.escape || B).source, (n.interpolate || B).source, (n.evaluate || B).source].join("|") + "|$", "g"),
                    s = 0,
                    o = "__p+='";
                e.replace(i, function(t, n, r, i, u) {
                    return o += e.slice(s, u).replace(F, function(e) {
                        return "\\" + j[e]
                    }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
                }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    r = new Function(n.variable || "obj", "_", o)
                } catch(u) {
                    throw u.source = o, u
                }
                if(t) return r(t, T);
                var a = function(e) {
                    return r.call(this, e, T)
                };
                return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
            }, T.chain = function(e) {
                return T(e).chain()
            };
            var I = function(e) {
                return this._chain ? T(e).chain() : e
            };
            T.mixin(T), N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = i[e];
                T.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], I.call(this, n)
                }
            }), N(["concat", "join", "slice"], function(e) {
                var t = i[e];
                T.prototype[e] = function() {
                    return I.call(this, t.apply(this._wrapped, arguments))
                }
            }), T.extend(T.prototype, {
                chain: function() {
                    return this._chain = !0, this
                },
                value: function() {
                    return this._wrapped
                }
            }), typeof r == "function" && r.amd && r("underscore", [], function() {
                return T
            })
        }.call(this), r("templates", ["handlebars.runtime"], function(e) {
            return this.HHFJST = this.HHFJST || {}, this.HHFJST["modal-help-navigation.html"] = e.template({
                1: function(e, t, n, r, i) {
                    var s, o = t.helperMissing,
                        u = "";
                    return s = (t.checkUser || e && e.checkUser || o).call(e, e != null ? e.User : e, i[1] != null ? i[1].userType : i[1], {
                        name: "checkUser",
                        hash: {},
                        fn: this.program(2, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (u += s), u
                },
                2: function(e, t, n, r, i) {
                    var s, o, u = "function",
                        a = t.helperMissing,
                        f = this.escapeExpression,
                        l = '<li>\r\n<a href="#help-' + f((o = (o = t.NavigationID || (e != null ? e.NavigationID : e)) != null ? o : a, typeof o === u ? o.call(e, {
                            name: "NavigationID",
                            hash: {},
                            data: r
                        }) : o)) + '" class="help-modal-nav-more"><span>';
                    return s = (o = (o = t.NavigationLabel || (e != null ? e.NavigationLabel : e)) != null ? o : a, typeof o === u ? o.call(e, {
                        name: "NavigationLabel",
                        hash: {},
                        data: r
                    }) : o), s != null && (l += s), l += '</span></a>\r\n<ul class="help-modal-nav-submenu">\r\n', s = t["with"].call(e, e != null ? e.SubNavigation : e, {
                        name: "with",
                        hash: {},
                        fn: this.program(3, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (l += s), l + "</ul>\r\n</li>\r\n"
                },
                3: function(e, t, n, r, i) {
                    var s, o = t.helperMissing,
                        u = "";
                    return s = (t.isArray || e && e.isArray || o).call(e, e, {
                        name: "isArray",
                        hash: {},
                        fn: this.program(4, r, i),
                        inverse: this.program(9, r, i),
                        data: r
                    }), s != null && (u += s), u
                },
                4: function(e, t, n, r, i) {
                    var s, o = "";
                    return s = t.each.call(e, e, {
                        name: "each",
                        hash: {},
                        fn: this.program(5, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (o += s), o
                },
                5: function(e, t, n, r, i) {
                    var s, o = t.helperMissing,
                        u = "";
                    return s = (t.checkUser || e && e.checkUser || o).call(e, e != null ? e.User : e, i[5] != null ? i[5].userType : i[5], {
                        name: "checkUser",
                        hash: {},
                        fn: this.program(6, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (u += s), u
                },
                6: function(e, t, n, r, i) {
                    var s, o = t.helperMissing,
                        u = "";
                    return s = (t.ifNotCond || e && e.ifNotCond || o).call(e, e != null ? e.SubNavigationID : e, "", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(7, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (u += s), u
                },
                7: function(e, t, n, r, i) {
                    var s, o, u = this.lambda,
                        a = this.escapeExpression,
                        f = "function",
                        l = t.helperMissing,
                        c = '<li><a href="#help-' + a(u(i[5] != null ? i[5].NavigationID : i[5], e)) + "-" + a((o = (o = t.SubNavigationID || (e != null ? e.SubNavigationID : e)) != null ? o : l, typeof o === f ? o.call(e, {
                            name: "SubNavigationID",
                            hash: {},
                            data: r
                        }) : o)) + '">';
                    return s = (o = (o = t.SubNavigationLabel || (e != null ? e.SubNavigationLabel : e)) != null ? o : l, typeof o === f ? o.call(e, {
                        name: "SubNavigationLabel",
                        hash: {},
                        data: r
                    }) : o), s != null && (c += s), c + "</a></li>\r\n"
                },
                9: function(e, t, n, r, i) {
                    var s, o = t.helperMissing,
                        u = "";
                    return s = (t.ifNotCond || e && e.ifNotCond || o).call(e, e != null ? e.SubNavigationID : e, "", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(10, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (u += s), u
                },
                10: function(e, t, n, r, i) {
                    var s, o = t.helperMissing,
                        u = "";
                    return s = (t.checkUser || e && e.checkUser || o).call(e, e != null ? e.User : e, i[5] != null ? i[5].userType : i[5], {
                        name: "checkUser",
                        hash: {},
                        fn: this.program(11, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (u += s), u
                },
                11: function(e, t, n, r, i) {
                    var s, o = this.lambda,
                        u = this.escapeExpression,
                        a = '<li><a href="#help-' + u(o(i[4] != null ? i[4].NavigationID : i[4], e)) + "-" + u(o(e != null ? e.SubNavigationID : e, e)) + '">';
                    return s = o(e != null ? e.SubNavigationLabel : e, e), s != null && (a += s), a + "</a></li>\r\n"
                },
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r, i) {
                    var s, o = "<ul>\r\n";
                    return s = t.each.call(e, (s = (s = e != null ? e.model : e) != null ? s.Metadata : s) != null ? s.Navigation : s, {
                        name: "each",
                        hash: {},
                        fn: this.program(1, r, i),
                        inverse: this.noop,
                        data: r
                    }), s != null && (o += s), o + "</ul>\n"
                },
                useData: !0,
                useDepths: !0
            }), this.HHFJST["modal-help.html"] = e.template({
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r) {
                    var i, s = "function",
                        o = t.helperMissing,
                        u = this.escapeExpression;
                    return '<div class="help-modal-container clearfix">\r\n<div class="help-modal-sidebar">\r\n<div class="help-modal-header help-modal-header-mobile">\r\n<h3>Help</h3>\r\n<a href="" class="help-modal-close help-modal-close-modal modalCloseImg"></a>\r\n</div>\r\n<nav id="help-modal-menu" class="help-modal-menu"><img src="' + u((i = (i = t.assetURL || (e != null ? e.assetURL : e)) != null ? i : o, typeof i === s ? i.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : i)) + '/img/ajax-loader.gif" alt="loading navigation"/></nav>\r\n</div>\r\n<div id="help-modal-main" class="help-modal-main">\r\n<div class="help-modal-header help-modal-header-desktop ui-draggable-handle">\r\n<h3>Online Banking Help</h3>\r\n<a href="" class="help-modal-close modalCloseImg"></a>\r\n</div>\r\n<div class="help-modal-header help-modal-header-mobile">\r\n<a href="" class="help-modal-open-nav mobile-nav">\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n</a>\r\n<h3>Help</h3>\r\n<a href="" class="help-modal-close help-modal-close-modal modalCloseImg"></a>\r\n</div>\r\n<div class="help-modal-content"><img src="' + u((i = (i = t.assetURL || (e != null ? e.assetURL : e)) != null ? i : o, typeof i === s ? i.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : i)) + '/img/ajax-loader.gif" alt="loading content"/></div>\r\n</div>\r\n</div>\r\n<div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>\r\n<div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>\r\n<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>\n'
                },
                useData: !0
            }), this.HHFJST["inc-footer.html"] = e.template({
                1: function(e, t, n, r) {
                    var i, s, o = this.lambda,
                        u = this.escapeExpression,
                        a = "function",
                        f = t.helperMissing,
                        l = '<div class="footer-top">\n<ul>\n<li>\n<a href="#" class="contact" title="Opens Ways to Contact Us Dialog">\n<span class="account-underline">Ways to Contact Us</span><span class="visuallyhidden">- Opens Ways to Contact Us Dialog</span>\n</a>\n<div class="dropup-menu">\n<h4>Contact Us</h4>\n<p>General Questions:\n<br/>\n<strong>1-866-999-0270</strong>\n</p>\n</div>\n</li>\n</ul>\n</div>\n<div class="footer-row citone-footer-row clearfix">\n<ul>\n<li>\n<h6>Disclosures</h6>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/security/">Security, Privacy &amp; Legal</a>\n</li>\n</ul>\n<ul>\n<li>\n<h6>About Us</h6>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/about-us.html">About ' + u(o((i = e != null ? e.brand : e) != null ? i.title : i, e)) + '</a>\n</li>\n</ul>\n<ul class="last">\n<li>\n<h6>Products</h6>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-services.html">Students</a>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/home-loans.html">Home Borrowing</a>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/credit-cards.html">Credit Cards</a>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/personal-loans/overview.html">Personal Loans</a>\n</li>\n<li>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/auto-finance.html">Auto Finance</a>\n</li>\n</ul>\n</div>\n<div class="centered-content">\n<div class="footer-bottom">\n<ul class="footer-util">\n<li>Follow:\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + "/interstitial-temp.html?http://www.facebook.com/" + u(o((i = e != null ? e.brand : e) != null ? i.name : i, e)) + '&btnname=Continue%20to%20facebook">\n<img src="' + u((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "assetURL",
                            hash: {},
                            data: r
                        }) : s)) + '/img/footer-follow-facebook.png" alt="Facebook" align="middle" />\n</a>\n<a target="_blank" href="' + u(o((i = e != null ? e.brand : e) != null ? i.url : i, e)) + "/interstitial-temp.html?http://twitter.com/" + u(o((i = e != null ? e.brand : e) != null ? i.name : i, e)) + '&btnname=Continue%20to%20twitter">\n<img src="' + u((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "assetURL",
                            hash: {},
                            data: r
                        }) : s)) + '/img/footer-follow-twitter.png" alt="Twitter" />\n</a>\n</li>\n</ul>\n<p class="footer-copyright">\n';
                    return i = o((i = e != null ? e.brand : e) != null ? i.copyright : i, e), i != null && (l += i), l + "\n</p>\n</div>\n</div>\n"
                },
                3: function(e, t, n, r) {
                    var i, s, o = t.helperMissing,
                        u = this.lambda,
                        a = this.escapeExpression,
                        f = "function",
                        l = '<div class="footer-top">\n<ul>\n<li>\n<a href="#" class="contact" title="Opens Ways to Contact Us Dialog">\n<span class="account-underline">Ways to Contact Us</span><span class="visuallyhidden">- Opens Ways to Contact Us Dialog</span>\n</a>\n<div class="dropup-menu">\n<h4>Contact Us</h4>\n';
                    return i = (t.ifCond || e && e.ifCond || o).call(e, e != null ? e.vendorType : e, "citizensns", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(4, r),
                        inverse: this.program(6, r),
                        data: r
                    }), i != null && (l += i), l += '<!--\n<p>Go to <a href="/customer-service/">Customer Service</a> to send us email or mail or to view FAQs</p>\n<p><a href="/forms/contactme.aspx">We\'ll Contact You</a></p>\n-->\n</div>\n</li>\n<!-- As part of Def# 1465 Location is commented on Auth/UnAuth pages.\n', i = (t.ifNotAndNotCond || e && e.ifNotAndNotCond || o).call(e, (i = e != null ? e.user : e) != null ? i.postalCode : i, "NONE", "INVALID", {
                        name: "ifNotAndNotCond",
                        hash: {},
                        fn: this.program(15, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (l += i), l += '-->\n\n\n\n<li>\n<a href="#" class="locator" title="Opens Branch &amp; ATM Locator Dialog">\n<span class="account-underline">Branch &amp; ATM Locator</span><span class="visuallyhidden">- Opens Branch &amp; ATM Locator Dialog</span>\n</a>\n<div class="dropup-menu">\n<h4>Branch &amp; ATM Locator</h4>\n<p>Find one of our 1,300 locations near you.</p>\n<div role="form">\n<div id="stickyFooterBranch-error" class="error-message" style="display: none"></div>\n<input id="stickyFooterBranch" type="text" title="Enter Zip Code or City, State" placeholder="Enter Zip Code or City, State" value="', i = (t.ifNotAndNotCond || e && e.ifNotAndNotCond || o).call(e, (i = e != null ? e.user : e) != null ? i.postalCode : i, " NONE ", "INVALID ", {
                        name: "ifNotAndNotCond",
                        hash: {},
                        fn: this.program(17, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (l += i), l += '">\n<a href="#" type="button" class="button button-stickyfooterbranch">Submit</a>\n</div>\n</div>\n</li>\n</ul>\n</div>\n<div class="footer-row clearfix">\n<ul>\n<li>\n<h6>Checking &amp; Savings</h6>\n</li>\n<!--        <li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking-and-savings.aspx">Checking &amp; Savings Overview</a></li>-->\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking/">Checking</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/savings-and-cds/savings.aspx">Savings</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/savings-and-cds/money-markets.aspx">Money Markets</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/savings-and-cds/cds.aspx">Certificates of Deposit (CDs)\n<sup>&reg;</sup>\n</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/ira/">IRAs</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking-and-savings/programs-and-services.aspx">Programs &amp; Services</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking-and-savings/benefits-and-features.aspx">Benefits &amp; Features</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking/debit-cards/standard.aspx">Debit Card</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/overdraft-protection/">Overdraft Choices\n<sup>&reg;</sup>\n</a>\n</li>\n</ul>\n<ul>\n<li>\n<h6>Home Borrowing</h6>\n</li>\n<!--        <li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/loans/">Home Borrowing Overview</a></li>-->\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/mortgages/">Mortgages</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/home-equity/loans.aspx">Home Equity Loans</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/home-equity/lines.aspx">Home Equity Lines of Credit</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/loans/determine-my-rate.aspx">Determine My Rate</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/mortgages/my-mortgage.aspx">My Mortgage Account</a>\n</li>\n</ul>\n<ul>\n<li>\n<h6>Students</h6>\n</li>\n<!--<li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-services/">Students Overview</a></li>\n<li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-banking/">Banking</a></li>\n<li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/undergradfamilies.aspx">Undergraduate Borrowing</a></li>\n<li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/gradstudents.aspx">Graduate Borrowing</a></li>\n<li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/process.aspx">The Student Loan Process</a></li>\n<li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/tools.aspx">Student Tools &amp; Resources</a></li>-->\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/default.aspx">Student Loan Options</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/education-refinance-loan-overview.aspx">Refinancing Student Loans</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/process/default.aspx">The Student Loan Process</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/process/undergraduate.aspx">Undergraduate Students & Parents</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/process/graduate.aspx">Graduate Students</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-loans/tools.aspx">Tools & Information</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking/one-deposit-checking-account.aspx">Banking for Students</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/student-services/access-my-student-loan/default.aspx">Access My Student Loan</a>\n</li>\n</ul>\n<ul class="last">\n<li>\n<h6>Cards</h6>\n</li>\n<!--        <li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/cards-and-rewards/">Cards Overview</a></li>-->\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/credit-cards/overview.aspx">Credit Cards</a>\n</li>\n<!--        <li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/cards-and-rewards/debit-card/debit-card.aspx">Debit Card</a></li>-->\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/cards-and-rewards/credit-cards/creditcardagreements/agreements.aspx">Card Agreements</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/security/">Security Features</a>\n</li>\n</ul>\n</div>\n\n<div class="footer-row clearfix">\n<ul>\n<li>\n<h6>Personal Loans</h6>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/personal-loans/overview.aspx">Overview</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/personal-loans/faqs.aspx">FAQs</a>\n</li>\n</ul>\n<ul>\n<li>\n<h6>Resources</h6>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking/order-checks.aspx">Order Checks</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/online-and-mobile-banking/default.aspx">Online &amp; Mobile Banking</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/customer-service/">Customer Service</a>\n</li>\n</ul>\n<ul>\n<li>\n<h6>About Us</h6>\n</li>\n<!--        <li><a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/about-us/">About Us Overview</a></li>-->\n<li>\n<a target="_blank" href="http://investor.citizensbank.com/about-us/our-company.aspx">About ' + a(u((i = e != null ? e.brand : e) != null ? i.title : i, e)) + '</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/community/">In the Community</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/careers/">Careers</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/about_our_ads.aspx">About Our Ads</a>\n</li>\n</ul>\n<ul class="last">\n<li>\n<h6>Solutions</h6>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/">Personal</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/investing/">Investing</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/small-business/">Small Business</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/commercial-banking/">Commercial</a>\n</li>\n</ul>\n</div>\n\n<div class="footer-row clearfix">\n<ul>\n<li>\n<h6>Disclosures</h6>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/pf/onlinebanking/terms.aspx">Online Terms and Conditions</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/pdf/CTZ_eSign.pdf">Electronic Notice Disclosure and Consent (Online Service)</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/checking-and-savings/account-documents.aspx">Account Documents</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/tools/leaving.aspx?url=http://www.fdic.gov">Member FDIC</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/security/equal-housing-lender.aspx">Equal Housing Lender\n<img alt="Equal Housing Lender" title="Equal Housing Lender" src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/equal-housing.gif">\n</a>\n</li>\n<li>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/security/">Security, Privacy &amp; Legal</a>\n</li>\n</ul>\n</div>\n<div class="centered-content">\n<div class="footer-bottom">\n<p class="legal">\nZelle and the Zelle related marks are wholly owned by Early Warning Services, LLC and are used herein under license.\n</p>\n<p class="legal">\n', i = u((i = e != null ? e.brand : e) != null ? i.securitiesLegal : i, e), i != null && (l += i), l += '\n</p>\n\n<div class="footer-disclaimer-box footer-disclaimer-box--margin-bottom footer-disclaimer">\n<p class="footer-disclaimer-box__text">Securities, Insurance Products and Advisory Services are:</p>\n<ul class="footer-disclaimer-box__list">\n<li class="footer-disclaimer-box__list-item">NOT FDIC INSURED</li>\n<li class="footer-disclaimer-box__list-item">NOT BANK GUARANTEED</li>\n<li class="footer-disclaimer-box__list-item">MAY LOSE VALUE</li>\n<li class="footer-disclaimer-box__list-item">NOT A DEPOSIT\n<br/>\n</li>\n<li class="footer-disclaimer-box__list-item">NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</li>\n</ul>\n</div>\n<ul class="footer-util">\n<li class="sitemap">\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/tools/SiteMap.aspx">Site Map</a>\n</li>\n<li>Follow:\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + "/tools/leaving.aspx?url=http://www.facebook.com/" + a(u((i = e != null ? e.brand : e) != null ? i.name : i, e)) + '">\n<img src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/footer-follow-facebook.png" alt="Facebook" align="middle" />\n</a>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + "/tools/leaving.aspx?url=http://twitter.com/" + a(u((i = e != null ? e.brand : e) != null ? i.name : i, e)) + '">\n<img src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/footer-follow-twitter.png" alt="Twitter" />\n</a>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + '/tools/leaving.aspx?url=http://linkedin.com/company/citizens-bank">\n<img src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/footer-follow-linkedin.png" alt="Linkedin" />\n</a>\n<a target="_blank" href="' + a(u((i = e != null ? e.brand : e) != null ? i.url : i, e)) + "/tools/leaving.aspx?url=http://youtube.com/" + a(u((i = e != null ? e.brand : e) != null ? i.name : i, e)) + '">\n<img src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/footer-follow-youtube.png" alt="Youtube" />\n</a>\n</li>\n</ul>\n\n<p class="footer-copyright">\n', i = u((i = e != null ? e.brand : e) != null ? i.copyright : i, e), i != null && (l += i), l + '\n</p>\n\n<img src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/elh.gif" alt="Equal Housing Lender" />\n<img src="' + a((s = (s = t.assetURL || (e != null ? e.assetURL : e)) != null ? s : o, typeof s === f ? s.call(e, {
                        name: "assetURL",
                        hash: {},
                        data: r
                    }) : s)) + '/img/fdicFooter.gif" alt="Member FDIC" />\n</div>\n</div>\n'
                },
                4: function(e, t, n, r) {
                    return "<p>General Questions:\n<br/>\n<strong>1-800-656-6561</strong> (personal bank accounts)\n<br/>\nBusiness Questions:\n<br/>\n<strong>1-877-229-6428</strong> (online banking support)\n<br/>\n<strong>1-800-862-6200</strong> (account information)\n<br/>\nInvestment Questions:\n<br/>\n\n<strong>1-800-942-8300</strong> (Citizens Securities, Inc.)\n</p>\n"
                },
                6: function(e, t, n, r) {
                    var i, s = "";
                    return i = t["if"].call(e, (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "if",
                        hash: {},
                        fn: this.program(7, r),
                        inverse: this.program(9, r),
                        data: r
                    }), i != null && (s += i), s
                },
                7: function(e, t, n, r) {
                    return "<p>General Questions:\n<br/>\n<strong>1-800-656-6561</strong> (personal accounts)\n<br/>\nBusiness Questions:\n<br/>\n<strong>1-877-229-6428</strong> (online banking support)\n<br/>\n<strong>1-800-862-6200</strong> (account information)\n<br/>\nInvestment Questions:\n<br/>\n<strong>1-800-942-8300</strong> (Citizens Securities, Inc.)\n</p>\n"
                },
                9: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.ifCond || e && e.ifCond || s).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "BUSINESS", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(10, r),
                        inverse: this.program(12, r),
                        data: r
                    }), i != null && (o += i), o
                },
                10: function(e, t, n, r) {
                    return "<p>Business Questions:\n<br/>\n<strong>1-877-229-6428</strong> (online banking support)\n<br/>\n<strong>1-800-862-6200</strong> (account information)\n</p>\n"
                },
                12: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "<p>General Questions:\n<br/>\n<strong>1-800-656-6561</strong>\n<br/>\nInvestment Questions:\n<br/> ";
                    return i = (t.isEnabled || e && e.isEnabled || s).call(e, "sigfig@@sigfigInvestmentSection", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(13, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o + "\n"
                },
                13: function(e, t, n, r) {
                    return "\n<strong>1-800-942-8300</strong> (Citizens Securities, Inc.)\n</p>"
                },
                15: function(e, t, n, r) {
                    var i, s = "function",
                        o = t.helperMissing,
                        u = this.escapeExpression;
                    return '<li><span class="location">Your Location: ' + u((i = (i = t.zipCode || (e != null ? e.zipCode : e)) != null ? i : o, typeof i === s ? i.call(e, {
                        name: "zipCode",
                        hash: {},
                        data: r
                    }) : i)) + "</span>\n</li>\n"
                },
                17: function(e, t, n, r) {
                    var i, s = "function",
                        o = t.helperMissing,
                        u = this.escapeExpression;
                    return u((i = (i = t.zipCode || (e != null ? e.zipCode : e)) != null ? i : o, typeof i === s ? i.call(e, {
                        name: "zipCode",
                        hash: {},
                        data: r
                    }) : i))
                },
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.ifCond || e && e.ifCond || s).call(e, (i = e != null ? e.brand : e) != null ? i.name : i, "citizensone", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(1, r),
                        inverse: this.program(3, r),
                        data: r
                    }), i != null && (o += i), o
                },
                useData: !0
            }), this.HHFJST["inc-header-navigation-fallback.html"] = e.template({
                1: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return "<span>" + o(s((i = e != null ? e.countItems : e) != null ? i.totalCount : i, e)) + "</span>"
                },
                3: function(e, t, n, r) {
                    return 'class="active"'
                },
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression,
                        u = t.helperMissing,
                        a = '<a href="#page-container" class="visuallyhidden">Skip Navigation</a>\r\n<nav class="util-nav">\r\n<ul>\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.contactus : i) != null ? i.href : i, e)) + '">Contact Us</a></li>\r\n<li class="last">\r\n<a href="#" class="help-modal-open">Help</a>\r\n</li>\r\n<li class="last">\r\n<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.logOut : i) != null ? i.href : i, e)) + '" class="logout-link js-logout-link last">\r\n<span class="account-underline">Log Out</span>\r\n</a>\r\n</li>\r\n</ul>\r\n</nav>\r\n<nav class="page-nav">\r\n<div class="mobile-nav">\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n';
                    return i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.countItems : e) != null ? i.totalCount : i, 0, {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(1, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '\r\n</div>\r\n\r\n\r\n<ul>\r\n<li class="haslogo">\r\n<a href="#">\r\n<!-- <svg width="200" height="43">\r\n<image xlink:href="' + o(s((i = e != null ? e.brand : e) != null ? i.whiteLogoPath : i, e)) + '" src="' + o(s((i = e != null ? e.brand : e) != null ? i.whiteLogoFallbackPath : i, e)) + '" width="200" height="43" />\r\n</svg>-->\r\n<img src="' + o(s((i = e != null ? e.brand : e) != null ? i.whiteLogoFallbackPath : i, e)) + '" alt="' + o(s((i = e != null ? e.brand : e) != null ? i.title : i, e)) + '" width="203" height="25" />\r\n\r\n</a>\r\n</li>\r\n\r\n<li class="hasSalutation">\r\n<div class="notifications">\r\n<h6 class="notification-name">\r\n<span class="greeting">Welcome</span>\r\n</h6>\r\n\r\n</div>\r\n</li>\r\n\r\n\r\n<!-- ------- My Accounts ------- -->\r\n<li>\r\n<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.myAccounts : i) != null ? i.href : i, e)) + '" ', i = (t.ifCond || e && e.ifCond || u).call(e, e != null ? e.navContext : e, "MyAccounts", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(3, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a + ">My Accounts</a>\r\n</li>\r\n\r\n\r\n</ul>\r\n</nav>\n"
                },
                useData: !0
            }), this.HHFJST["inc-header-navigation.html"] = e.template({
                1: function(e, t, n, r) {
                    return "?BRAND=CitizensOne"
                },
                3: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return "<span>" + o(s((i = e != null ? e.countItems : e) != null ? i.totalCount : i, e)) + "</span>"
                },
                5: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "\r\n";
                    return i = (t.ifNotCond || e && e.ifNotCond || s).call(e, (i = e != null ? e.user : e) != null ? i.firstName : i, "", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(6, r),
                        inverse: this.program(8, r),
                        data: r
                    }), i != null && (o += i), o + "\r\n"
                },
                6: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<span class="greeting">Welcome,</span>\r\n<span class="name">' + o(s((i = e != null ? e.user : e) != null ? i.firstName : i, e)) + "</span>\r\n"
                },
                8: function(e, t, n, r) {
                    return '<span class="greeting">Welcome,</span>\r\n'
                },
                10: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.ifCond || e && e.ifCond || s).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "BUSINESS", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(11, r),
                        inverse: this.program(5, r),
                        data: r
                    }), i != null && (o += i), o
                },
                11: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "\r\n";
                    return i = (t.ifNotCond || e && e.ifNotCond || s).call(e, (i = e != null ? e.user : e) != null ? i.businessName : i, "", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(12, r),
                        inverse: this.program(8, r),
                        data: r
                    }), i != null && (o += i), o + "\r\n"
                },
                12: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<span class="greeting">Welcome,</span>\r\n<span class="name">' + o(s((i = e != null ? e.user : e) != null ? i.businessName : i, e)) + "</span>\r\n"
                },
                14: function(e, t, n, r) {
                    return ' class="active" '
                },
                16: function(e, t, n, r) {
                    return " five-subnav-cols"
                },
                18: function(e, t, n, r) {
                    return '<a class="disabledText" href="javascript:">Open New Accounts</a>\r\n'
                },
                20: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.openNewAccount : i) != null ? i.href : i, e)) + '">Open New Accounts</a>\r\n'
                },
                22: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<span class="mobile-alert-dot alert-count">' + o(s((i = e != null ? e.countItems : e) != null ? i.alertCount : i, e)) + "</span>"
                },
                24: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<span class="mobile-alert-dot msg-count">' + o(s((i = e != null ? e.countItems : e) != null ? i.msgCount : i, e)) + "</span>"
                },
                26: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = this.lambda,
                        u = this.escapeExpression,
                        a = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:overdrafts@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(27, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.statementPreferences : i) != null ? i.href : i, e)) + '">Statement Preferences</a></li>\r\n<!-- Def# 1463 - Not to show plans for any user. permission check REF:90\r\n', i = (t.ifCond || e && e.ifCond || s).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "CONSUMER", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(29, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a + "-->\r\n"
                },
                27: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<!--permission check REF:88-->\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.overdraftChoices : i) != null ? i.href : i, e)) + '">Overdraft Choices</a></li>\r\n'
                },
                29: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:plans@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(30, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                30: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.plans : i) != null ? i.href : i, e)) + '" id="plans">Plans</a></li>\r\n'
                },
                32: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.statementPreferences : i) != null ? i.href : i, e)) + '">Statement Preferences</a></li>\r\n'
                },
                34: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "users@*", "VIEW,EDIT", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(35, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                35: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<!-- permission check REF:91-->\r\n<div class="sub-nav-col last"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.manageUsers : i) != null ? i.href : i, e)) + '">Manage Users</a></div>\r\n'
                },
                37: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression,
                        u = t.helperMissing,
                        a = '<!--permission check REF:93-->\r\n<!-- ------- Transfer Money ------- -->\r\n<li class="nav-transfers" tabindex="0"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.transferMoney : i) != null ? i.href : i, e)) + '" ';
                    return i = (t.ifCond || e && e.ifCond || u).call(e, e != null ? e.navContext : e, "transfermoney", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(14, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '>Transfer Money</a>\r\n<div class="sub-nav-container">\r\n<div class="sub-nav wide-cols clearfix">\r\n', i = (t.isAllowed || e && e.isAllowed || u).call(e, "accounts@*:transfers@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(38, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.isAllowed || e && e.isAllowed || u).call(e, "accounts@*", "P2P_PAYMENTS", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(40, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a + "</div>\r\n</div>\r\n</li>\r\n"
                },
                38: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<!--permission check REF:94,95-->\r\n<div class="sub-nav-col">\r\n<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.transferBetweenCitizensAccounts : i) != null ? i.href : i, e)) + '">Transfer Between Citizens Accounts</a>\r\n<ul>\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.manageOtherCitizensAccounts : i) != null ? i.href : i, e)) + '">Manage Other Citizens Accounts</a></li>\r\n</ul>\r\n</div>\r\n'
                },
                40: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:transfers@*:external@*", "EXTERNAL_TRANSFERS_TO,EXTERNAL_TRANSFERS_FROM", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(41, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), i = t["if"].call(e, (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "if",
                        hash: {},
                        fn: this.program(47, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                41: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = '<!--permission check REF:96,97,98-->\r\n<div class="sub-nav-col extra-big">\r\n';
                    return i = (t.isViewOnly || e && e.isViewOnly || s).call(e, "money_movements@*", "VIEW", e != null ? e.oboRole : e, {
                        name: "isViewOnly",
                        hash: {},
                        fn: this.program(42, r),
                        inverse: this.program(44, r),
                        data: r
                    }), i != null && (o += i), o + "</div>\r\n"
                },
                42: function(e, t, n, r) {
                    return '<a class="disabledText" href="javascript:" id="transfer-between-other-accounts">Transfer Between My Other Bank Accounts</a>\r\n<ul>\r\n<li><a class="disabledText" href="javascript:" id="manage-other-accounts">Manage Other Bank Accounts</a></li>\r\n<li><a class="disabledText" href="javascript:" id="transfer-activity">Activity</a></li>\r\n</ul>\r\n'
                },
                44: function(e, t, n, r) {
                    var i, s, o = this.lambda,
                        u = this.escapeExpression,
                        a = "function",
                        f = t.helperMissing,
                        l = '<a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.transferBetweenOtherAccounts : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "tokenParameter",
                            hash: {},
                            data: r
                        }) : s)) + '%7Ctransfer" id="transfer-between-other-accounts">Transfer Between My Other ';
                    return i = t["if"].call(e, (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "if",
                        hash: {},
                        fn: this.program(45, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (l += i), l + 'Bank Accounts</a>\r\n<ul>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.manageOtherAccounts : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                        name: "tokenParameter",
                        hash: {},
                        data: r
                    }) : s)) + '%7Ctransfer" id="manage-other-accounts">Manage Other Bank Accounts</a></li>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.transferActivity : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                        name: "tokenParameter",
                        hash: {},
                        data: r
                    }) : s)) + '%7Ctransfer" id="transfer-activity">Activity</a></li>\r\n</ul>\r\n'
                },
                45: function(e, t, n, r) {
                    return "Business "
                },
                47: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:transfers@*:external@*", "EXTERNAL_TRANSFERS_TO,EXTERNAL_TRANSFERS_FROM", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(48, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                48: function(e, t, n, r) {
                    var i, s, o = this.lambda,
                        u = this.escapeExpression,
                        a = "function",
                        f = t.helperMissing;
                    return '<!--permission check REF:100,101,102-->\r\n<div class="sub-nav-col extra-big">\r\n<a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.transferBetweenOtherPersonalAccounts : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                        name: "tokenParameter",
                        hash: {},
                        data: r
                    }) : s)) + '%7Ctransfer" id="transfer-between-other-personal-accounts">Transfer Between My Other Personal Bank Accounts</a>\r\n<ul>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.manageOtherPersonalAccounts : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                        name: "tokenParameter",
                        hash: {},
                        data: r
                    }) : s)) + '%7Ctransfer" id="manage-other-personal-accounts">Manage Other Bank Accounts</a></li>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.transferActivityPersonal : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                        name: "tokenParameter",
                        hash: {},
                        data: r
                    }) : s)) + '%7Ctransfer" id="transfer-activity-personal">Activity</a></li>\r\n</ul>\r\n</div>\r\n'
                },
                50: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "<!--permission check REF:131-->\r\n<!-- ------- Pay Bills &amp; People ------- -->\r\n<!-- Delegate permission check -> if user has either paybill/popmoney permission-->\r\n<!--";
                    return i = (t.isAllowedOR || e && e.isAllowedOR || s).call(e, "accounts@*", "P2P_PAYMENTS", "BILL_PAY", {
                        name: "isAllowedOR",
                        hash: {},
                        fn: this.program(51, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o + "-->\r\n"
                },
                51: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression,
                        u = t.helperMissing,
                        a = ' -->\r\n<li class="nav-paybills" tabindex="0"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.payBillsPeople : i) != null ? i.href : i, e)) + '" ';
                    return i = (t.ifCond || e && e.ifCond || u).call(e, e != null ? e.navContext : e, "paybillsandpeople", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(14, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '>Pay Bills &amp; People</a>\r\n<div class="sub-nav-container">\r\n<div class="sub-nav clearfix">\r\n<!--Below links are disabled for view only cutomers-->\r\n', i = (t.isViewOnly || e && e.isViewOnly || u).call(e, "money_movements@*", "VIEW", e != null ? e.oboRole : e, {
                        name: "isViewOnly",
                        hash: {},
                        fn: this.program(52, r),
                        inverse: this.program(54, r),
                        data: r
                    }), i != null && (a += i), a += "\r\n\r\n", i = (t.ifCond || e && e.ifCond || u).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "BUSINESS", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(58, r),
                        inverse: this.program(67, r),
                        data: r
                    }), i != null && (a += i), a + '<div class="sub-nav-col last"></div>\r\n</div>\r\n</div>\r\n</li>\r\n<!--'
                },
                52: function(e, t, n, r) {
                    return '<div class="sub-nav-col"><a class="disabledText" href="javascript:" id="pay-bills">Pay Bills</a></div>\r\n'
                },
                54: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "\r\n";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:bills@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(55, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                55: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "<!--permission check REF:136-->\r\n<!--Show only delegate user got bill pay permission -->\r\n";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*", "BILL_PAY", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(56, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                56: function(e, t, n, r) {
                    var i, s, o = this.lambda,
                        u = this.escapeExpression,
                        a = "function",
                        f = t.helperMissing;
                    return '<div class="sub-nav-col"><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.payBills : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                        name: "tokenParameter",
                        hash: {},
                        data: r
                    }) : s)) + '" id="pay-bills">Pay Bills</a>\r\n<!-- <ul>\r\n<li><a href="paybills-billhistory.php">Bill History</a></li>\r\n<li><a href="paybills-managebillers.php">Manage Billers</a></li>\r\n<li><a href="paybills-billpay_alerts.php">Bill Pay Alerts</a></li>\r\n</ul> -->\r\n</div>\r\n'
                },
                58: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*", "P2P_PAYMENTS", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(59, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                59: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:bills@*", "PAY", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(60, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                60: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "<!--permission check REF:136,137,138,139,141-->\r\n";
                    return i = (t.isViewOnly || e && e.isViewOnly || s).call(e, "money_movements@*", "VIEW", e != null ? e.oboRole : e, {
                        name: "isViewOnly",
                        hash: {},
                        fn: this.program(61, r),
                        inverse: this.program(64, r),
                        data: r
                    }), i != null && (o += i), o + "\r\n"
                },
                61: function(e, t, n, r) {
                    var i, s = '\r\n<div class="sub-nav-col"><a class="disabledText" href="javascript:" id="pay-people">Pay Business Contacts</a>\r\n<ul>\r\n<li><a class="disabledText" href="javascript:" id="pay-people-overview">Overview</a></li>\r\n<li><a class="disabledText" href="javascript:" id="pay-people-activity">Activity</a></li>\r\n<li><a class="disabledText" href="javascript:" id="pay-people-manage-people">Manage Business People</a></li>\r\n<li><a class="disabledText" href="javascript:" id="pay-people-preferences">Preferences</a></li>\r\n</ul>\r\n</div>\r\n\r\n';
                    return i = t["if"].call(e, (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "if",
                        hash: {},
                        fn: this.program(62, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (s += i), s + "\r\n"
                },
                62: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<div class="sub-nav-col"><a class="disabledText" href="javascript:" id="send-money">Send Money with <img src="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.sendMoney : i) != null ? i.logo : i, e)) + '" alt="Zelle" class="sub-nav-logo" /></a></div>\r\n'
                },
                64: function(e, t, n, r) {
                    var i, s, o = this.lambda,
                        u = this.escapeExpression,
                        a = "function",
                        f = t.helperMissing,
                        l = '\r\n<div class="sub-nav-col"><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.payPeople : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "tokenParameter",
                            hash: {},
                            data: r
                        }) : s)) + '%7Cpop" id="pay-people">Pay Business Contacts</a>\r\n<ul>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.payPeopleOverview : i) != null ? i.href : i, e)) + "&" + u(
                            (s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                                name: "tokenParameter",
                                hash: {},
                                data: r
                            }) : s)) + '%7Cpop" id="pay-people-overview">Overview</a></li>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.payPeopleActivity : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "tokenParameter",
                            hash: {},
                            data: r
                        }) : s)) + '%7Cpop" id="pay-people-activity">Activity</a></li>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.payPeopleManagePeople : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "tokenParameter",
                            hash: {},
                            data: r
                        }) : s)) + '%7Cpop" id="pay-people-manage-people">Manage Business People</a></li>\r\n<li><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.payPeoplePreferences : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "tokenParameter",
                            hash: {},
                            data: r
                        }) : s)) + '%7Cpop" id="pay-people-preferences">Preferences</a></li>\r\n</ul>\r\n</div>\r\n\r\n';
                    return i = t["if"].call(e, (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "if",
                        hash: {},
                        fn: this.program(65, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (l += i), l + "\r\n"
                },
                65: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<div class="sub-nav-col"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.sendMoney : i) != null ? i.href : i, e)) + '" id="send-money">Send Money with <img src="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.sendMoney : i) != null ? i.logo : i, e)) + '" alt="Zelle" class="sub-nav-logo" /></a></div>\r\n'
                },
                67: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*", "P2P_PAYMENTS", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(68, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                68: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:bills@*", "PAY", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(69, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                69: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "\r\n";
                    return i = (t.isViewOnly || e && e.isViewOnly || s).call(e, "money_movements@*", "VIEW", e != null ? e.oboRole : e, {
                        name: "isViewOnly",
                        hash: {},
                        fn: this.program(62, r),
                        inverse: this.program(65, r),
                        data: r
                    }), i != null && (o += i), o + "\r\n"
                },
                71: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*:invoices@*", "SUBMIT", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(72, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                72: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "<!--permission check REF:142-->\r\n";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "accounts@*", "P2P_PAYMENTS", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(73, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                73: function(e, t, n, r) {
                    var i, s, o = this.lambda,
                        u = this.escapeExpression,
                        a = "function",
                        f = t.helperMissing,
                        l = '<!-- ------- Invoices ------- -->\r\n<li class="nav-invoices"><a href="' + u(o((i = (i = e != null ? e.navItems : e) != null ? i.invoices : i) != null ? i.href : i, e)) + "&" + u((s = (s = t.tokenParameter || (e != null ? e.tokenParameter : e)) != null ? s : f, typeof s === a ? s.call(e, {
                            name: "tokenParameter",
                            hash: {},
                            data: r
                        }) : s)) + '%7Cinvoices" id="nav-Invoices" ';
                    return i = (t.ifCond || e && e.ifCond || f).call(e, e != null ? e.navContext : e, "invoices", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(14, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (l += i), l + ">Invoices</a></li>\r\n"
                },
                75: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression,
                        u = t.helperMissing,
                        a = '<!-- ------- Document Center ------- -->\r\n<li class="nav-documents" tabindex="0"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.documentCenter : i) != null ? i.href : i, e)) + '" id="nav-DocumentCenter" ';
                    return i = (t.ifCond || e && e.ifCond || u).call(e, e != null ? e.navContext : e, "documentcenter", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(14, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '>Document Center</a>\r\n<div class="sub-nav-container">\r\n<div class="sub-nav wide-cols clearfix">\r\n<div class="sub-nav-col"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.accountDocuments : i) != null ? i.href : i, e)) + '" id="account-documents">Account Documents</a>\r\n<ul>\r\n', i = (t.isEnabled || e && e.isEnabled || u).call(e, "document_center@@eStatements", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(76, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.isEnabled || e && e.isEnabled || u).call(e, "document_center@@eNotices", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(78, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.isEnabled || e && e.isEnabled || u).call(e, "document_center@@check_images", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(80, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.isEnabled || e && e.isEnabled || u).call(e, "document_center@@tax", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(82, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += "</ul>\r\n</div>\r\n\r\n<!-- Credit Card Application: Notice are only for Retail customers -->\r\n", i = (t.ifCond || e && e.ifCond || u).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "CONSUMER", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(85, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a + "</div>\r\n</div>\r\n</li>\r\n"
                },
                76: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.statement : i) != null ? i.href : i, e)) + '" id="statement">Statements</a></li>\r\n'
                },
                78: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.eNotices : i) != null ? i.href : i, e)) + '" id="enotices">eNotices</a></li>\r\n'
                },
                80: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.checkImages : i) != null ? i.href : i, e)) + '" id="checkimages">Check Images</a></li>\r\n'
                },
                82: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isAllowed || e && e.isAllowed || s).call(e, "taxs@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(83, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                83: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.taxForms : i) != null ? i.href : i, e)) + '" id="taxdocs">Tax Forms</a></li>\r\n'
                },
                85: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.isEnabled || e && e.isEnabled || s).call(e, "document_center@@creditcard_notices", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(86, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (o += i), o
                },
                86: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<div class="sub-nav-col"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.creditCardApplicationNotice : i) != null ? i.href : i, e)) + '">Credit Card Application: Notice</a></div>\r\n'
                },
                88: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<span class="desktop-alert-dot alert-count">' + o(s((i = e != null ? e.countItems : e) != null ? i.alertCount : i, e)) + "</span>"
                },
                90: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<span class="desktop-alert-dot msg-count">' + o(s((i = e != null ? e.countItems : e) != null ? i.msgCount : i, e)) + "</span>"
                },
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression,
                        u = t.helperMissing,
                        a = '<a  class="visuallyhidden js-skipnavigation" tabindex="0">Skip Navigation</a>\r\n<nav class="util-nav">\r\n<ul>\r\n<li>\r\n<a href="#" title="Opens HELP Dialog" class="help-modal-open">Help<span class="visuallyhidden">- Opens HELP Dialog </span></a>\r\n</li>\r\n<!--\r\n<li>\r\n<a href="#" class="js-print-link">Print</a>\r\n</li>\r\n-->\r\n<li class="last">\r\n<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.logOut : i) != null ? i.href : i, e));
                    return i = (t.ifCond || e && e.ifCond || u).call(e, (i = e != null ? e.brand : e) != null ? i.name : i, "citizensone", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(1, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '" class="logout-link js-logout-link last">\r\n<span class="account-underline">Log Out</span>\r\n</a>\r\n</li>\r\n</ul>\r\n</nav>\r\n<nav class="page-nav">\r\n<div class="mobile-nav">\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n', i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.countItems : e) != null ? i.totalCount : i, 0, {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(3, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '\r\n</div>\r\n<ul>\r\n<li class="haslogo">\r\n<a href="#">\r\n<!-- <svg width="200" height="43">\r\n<image xlink:href="' + o(s((i = e != null ? e.brand : e) != null ? i.whiteLogoPath : i, e)) + '" src="' + o(s((i = e != null ? e.brand : e) != null ? i.whiteLogoFallbackPath : i, e)) + '" width="200" height="43" />\r\n</svg>-->\r\n<img src="' + o(s((i = e != null ? e.brand : e) != null ? i.whiteLogoFallbackPath : i, e)) + '" alt="' + o(s((i = e != null ? e.brand : e) != null ? i.title : i, e)) + '" width="203" height="25" />\r\n</a>\r\n</li>\r\n<li class="hasSalutation">\r\n<div class="notifications">\r\n<h6 class="notification-name">\r\n\r\n', i = t["if"].call(e, (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "if",
                        hash: {},
                        fn: this.program(5, r),
                        inverse: this.program(10, r),
                        data: r
                    }), i != null && (a += i), a += '</h6>\r\n<time class="notification-last-login" datetime="' + o(s((i = e != null ? e.user : e) != null ? i.lastActiveJSON : i, e)) + '">Last logged in on ' + o(s((i = e != null ? e.user : e) != null ? i.lastActiveDispDate : i, e)) + " at " + o(s((i = e != null ? e.user : e) != null ? i.lastActiveDispTime : i, e)) + '.</time>\r\n<a class="edit-profile" href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.myProfile : i) != null ? i.href : i, e)) + '">Edit My Profile</a>\r\n</div>\r\n</li>\r\n<!-- ------- My Accounts ------- -->\r\n<li class="nav-myaccounts" tabindex="0">\r\n<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.myAccounts : i) != null ? i.href : i, e)) + '" ', i = (t.ifCond || e && e.ifCond || u).call(e, e != null ? e.navContext : e, "myaccounts", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(14, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '>My Accounts</a>\r\n<div class="sub-nav-container sub-nav-myaccounts', i = (t.ifCond || e && e.ifCond || u).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "BUSINESS", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(16, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '">\r\n<div class="sub-nav clearfix">\r\n<div class="sub-nav-col">\r\n', i = (t.isViewOnly || e && e.isViewOnly || u).call(e, "money_movements@*", "VIEW", e != null ? e.oboRole : e, {
                        name: "isViewOnly",
                        hash: {},
                        fn: this.program(18, r),
                        inverse: this.program(20, r),
                        data: r
                    }), i != null && (a += i), a += '</div>\r\n<div class="sub-nav-col">\r\n<a class="notification-msg-mobile" href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.alertsCenter : i) != null ? i.href : i, e)) + '">Alerts ', i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.countItems : e) != null ? i.alertCount : i, "0", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(22, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '</a>\r\n<ul>\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.manageAlerts : i) != null ? i.href : i, e)) + '" id="manage-alerts">Manage Alerts</a></li>\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.myAlertAddresses : i) != null ? i.href : i, e)) + '">My Alert Addresses</a></li>\r\n</ul>\r\n</div>\r\n<div class="sub-nav-col">\r\n<a class="notification-alert-mobile" href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.messageCenter : i) != null ? i.href : i, e)) + '">Messages ', i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.countItems : e) != null ? i.msgCount : i, "0", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(24, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '</a>\r\n<ul>\r\n<!--                            <li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.sendUsAMessage : i) != null ? i.href : i, e)) + '">Send Message</a></li>-->\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.viewSentMessages : i) != null ? i.href : i, e)) + '">View Sent Messages</a></li>\r\n</ul>\r\n</div>\r\n<div class="sub-nav-col">\r\n<ul>\r\n', i = (t.ifNotCondOr || e && e.ifNotCondOr || u).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "BUSINESS", (i = (i = e != null ? e.user : e) != null ? i.badges : i) != null ? i.GEMINI : i, {
                        name: "ifNotCondOr",
                        hash: {},
                        fn: this.program(26, r),
                        inverse: this.program(32, r),
                        data: r
                    }), i != null && (a += i), a += "</ul>\r\n</div>\r\n", i = (t.ifCond || e && e.ifCond || u).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "BUSINESS", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(34, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += "</div>\r\n</div>\r\n</li>\r\n", i = (t.isAllowed || e && e.isAllowed || u).call(e, "accounts@*:transfers@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(37, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.isAllowed || e && e.isAllowed || u).call(e, "accounts@*:bills@*", "VIEW", {
                        name: "isAllowed",
                        hash: {},
                        fn: this.program(50, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.user : e) != null ? i.customerType : i, "CONSUMER", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(71, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), i = (t.isEnabled || e && e.isEnabled || u).call(e, "document_center", {
                        name: "isEnabled",
                        hash: {},
                        fn: this.program(75, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '<!-- ------- Service Center ------- -->\r\n<li class="nav-services last" tabindex="0"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.serviceCenter : i) != null ? i.href : i, e)) + '" ', i = (t.ifCond || e && e.ifCond || u).call(e, e != null ? e.navContext : e, "servicecenter", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(14, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '>Service Center</a></li>\r\n<li>\r\n<nav class="mobile-util-nav">\r\n<ul>\r\n<li><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.logOut : i) != null ? i.href : i, e)), i = (t.ifCond || e && e.ifCond || u).call(e, (i = e != null ? e.brand : e) != null ? i.name : i, "citizensone", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(1, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '" class="logout-link js-logout-link">Log Out</a></li>\r\n<li><a class="help-modal-open">Help</a></li>\r\n<li class="last"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.contactus : i) != null ? i.href : i, e)) + '">Contact Us</a></li>\r\n</ul>\r\n</nav>\r\n</li>\r\n</ul>\r\n</nav>\r\n<nav class="alert-nav">\r\n<ul>\r\n<li class="alerts"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.alertsCenter : i) != null ? i.href : i, e)) + '">Alerts ', i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.countItems : e) != null ? i.alertCount : i, "0", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(88, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a += '</a></li>\r\n<li class="alerts"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.messageCenter : i) != null ? i.href : i, e)) + '">Messages ', i = (t.ifNotCond || e && e.ifNotCond || u).call(e, (i = e != null ? e.countItems : e) != null ? i.msgCount : i, "0", {
                        name: "ifNotCond",
                        hash: {},
                        fn: this.program(90, r),
                        inverse: this.noop,
                        data: r
                    }), i != null && (a += i), a + '</a></li>\r\n<li class="alerts"><a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.contactus : i) != null ? i.href : i, e)) + '">Contact Us</a></li>\r\n</ul>\r\n</nav>\n'
                },
                useData: !0
            }), this.HHFJST["inc-header.html"] = e.template({
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return '<div class="topshadow"></div>\r\n<div class="centered-content clearfix">\r\n\r\n<a href="' + o(s((i = (i = e != null ? e.navItems : e) != null ? i.myAccounts : i) != null ? i.href : i, e)) + '" class="page-logo" tabindex="1">\r\n<!--<svg width="220" height="38">\r\n<image xlink:href="' + o(s((i = e != null ? e.brand : e) != null ? i.headerLogoPath : i, e)) + '" src="' + o(s((i = e != null ? e.brand : e) != null ? i.headerLogoFallbackPath : i, e)) + '" width="220" height="38" />\r\n</svg>-->\r\n<img border="0" src="' + o(s((i = e != null ? e.brand : e) != null ? i.headerLogoFallbackPath : i, e)) + '" alt="' + o(s((i = e != null ? e.brand : e) != null ? i.title : i, e)) + '" width="203" height="25" />\r\n</a>\r\n\r\n<!-- spacer for the height of the nav to be loaded into -->\r\n<div id="header-navigation-spacer">\r\n<!-- ajax loader as base 64 -->\r\n<img width="16" height="11" border="0" src="data:image/gif;base64,R0lGODlhEAALAPQAAP///wCaeNrv69Dr5er28wacewCaeC6skILNvGC/qrrj2iKniUq3n4rQwGTBrL7k3CaojASbek64oeb08djv6fT6+Diwldzw7PL597bh2KDYzMrp4u739QAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA" />\r\n<!-- <div style="background-color:#e5f5f1; color:#009d78; padding: .75em; margin-top:10px;">loading navigation...</div>-->\r\n<!-- "empty" spacer as base 64 -->\r\n<img width="10" height="20" border="0" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />\r\n</div>\r\n\r\n<div id="header-navigation-container"></div>\r\n\r\n</div>\n'
                },
                useData: !0
            }), this.HHFJST["modal-timeout.html"] = e.template({
                1: function(e, t, n, r) {
                    return '<p>You will be logged out of your Online Banking session in\r\n<span id="timeout-seconds">30</span> seconds.</p>\r\n<p>\r\n<strong>Do you wish to continue?</strong>\r\n</p>\r\n<a href="#" class="button button-cta button-continue">\r\n<span>CONTINUE</span>\r\n</a>\r\n<a href="#" class="button button-cta button-logout">CANCEL</a>\r\n'
                },
                3: function(e, t, n, r) {
                    var i, s = this.lambda,
                        o = this.escapeExpression;
                    return "\r\n<p>You will be logged out of " + o(s((i = e != null ? e.brand : e) != null ? i.title : i, e)) + ' Online&reg; in\r\n<span id="timeout-seconds">30</span> seconds and will lose any unsaved changes.</p>\r\n<p>\r\n<strong>Do you wish to continue banking?</strong>\r\n</p>\r\n<a href="#" class="button button-cta button-continue">\r\n<span>CONTINUE</span>\r\n</a>\r\n<a href="#" class="button button-cta button-logout">LOG OUT</a>\r\n'
                },
                compiler: [6, ">= 2.0.0-beta.1"],
                main: function(e, t, n, r) {
                    var i, s = t.helperMissing,
                        o = "";
                    return i = (t.ifCond || e && e.ifCond || s).call(e, e != null ? e.vendor : e, "citizensns", {
                        name: "ifCond",
                        hash: {},
                        fn: this.program(1, r),
                        inverse: this.program(3, r),
                        data: r
                    }), i != null && (o += i), o
                },
                useData: !0
            }), this.HHFJST
        }),
        function(e) {
            typeof r == "function" && r.amd ? r("jqueryui", ["jquery"], e) : e(jQuery)
        }(function(e) {
            function t(t, r) {
                var i, s, o, u = t.nodeName.toLowerCase();
                return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap='#" + s + "']")[0], !!o && n(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || r : r) && n(t)
            }

            function n(t) {
                return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                    return e.css(this, "visibility") === "hidden"
                }).length
            }

            function y(e) {
                var t, n;
                while(e.length && e[0] !== document) {
                    t = e.css("position");
                    if(t === "absolute" || t === "relative" || t === "fixed") {
                        n = parseInt(e.css("zIndex"), 10);
                        if(!isNaN(n) && n !== 0) return n
                    }
                    e = e.parent()
                }
                return 0
            }

            function b() {
                this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                }, this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = w(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }

            function w(t) {
                var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return t.delegate(n, "mouseout", function() {
                    e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
                }).delegate(n, "mouseover", E)
            }

            function E() {
                e.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
            }

            function S(t, n) {
                e.extend(t, n);
                for(var r in n) n[r] == null && (t[r] = n[r]);
                return t
            }
            e.ui = e.ui || {}, e.extend(e.ui, {
                version: "1.11.2",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }), e.fn.extend({
                scrollParent: function(t) {
                    var n = this.css("position"),
                        r = n === "absolute",
                        i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                        s = this.parents().filter(function() {
                            var t = e(this);
                            return r && t.css("position") === "static" ? !1 : i.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                        }).eq(0);
                    return n === "fixed" || !s.length ? e(this[0].ownerDocument || document) : s
                },
                uniqueId: function() {
                    var e = 0;
                    return function() {
                        return this.each(function() {
                            this.id || (this.id = "ui-id-" + ++e)
                        })
                    }
                }(),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                    })
                }
            }), e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                    return function(n) {
                        return !!e.data(n, t)
                    }
                }) : function(t, n, r) {
                    return !!e.data(t, r[3])
                },
                focusable: function(n) {
                    return t(n, !isNaN(e.attr(n, "tabindex")))
                },
                tabbable: function(n) {
                    var r = e.attr(n, "tabindex"),
                        i = isNaN(r);
                    return(i || r >= 0) && t(n, !i)
                }
            }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
                function o(t, n, i, s) {
                    return e.each(r, function() {
                        n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                    }), n
                }
                var r = n === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                    i = n.toLowerCase(),
                    s = {
                        innerWidth: e.fn.innerWidth,
                        innerHeight: e.fn.innerHeight,
                        outerWidth: e.fn.outerWidth,
                        outerHeight: e.fn.outerHeight
                    };
                e.fn["inner" + n] = function(t) {
                    return t === undefined ? s["inner" + n].call(this) : this.each(function() {
                        e(this).css(i, o(this, t) + "px")
                    })
                }, e.fn["outer" + n] = function(t, r) {
                    return typeof t != "number" ? s["outer" + n].call(this, t) : this.each(function() {
                        e(this).css(i, o(this, t, !0, r) + "px")
                    })
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
                return function(n) {
                    return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
                }
            }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
                focus: function(t) {
                    return function(n, r) {
                        return typeof n == "number" ? this.each(function() {
                            var t = this;
                            setTimeout(function() {
                                e(t).focus(), r && r.call(t)
                            }, n)
                        }) : t.apply(this, arguments)
                    }
                }(e.fn.focus),
                disableSelection: function() {
                    var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function() {
                        return this.bind(e + ".ui-disableSelection", function(e) {
                            e.preventDefault()
                        })
                    }
                }(),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                },
                zIndex: function(t) {
                    if(t !== undefined) return this.css("zIndex", t);
                    if(this.length) {
                        var n = e(this[0]),
                            r, i;
                        while(n.length && n[0] !== document) {
                            r = n.css("position");
                            if(r === "absolute" || r === "relative" || r === "fixed") {
                                i = parseInt(n.css("zIndex"), 10);
                                if(!isNaN(i) && i !== 0) return i
                            }
                            n = n.parent()
                        }
                    }
                    return 0
                }
            }), e.ui.plugin = {
                add: function(t, n, r) {
                    var i, s = e.ui[t].prototype;
                    for(i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
                },
                call: function(e, t, n, r) {
                    var i, s = e.plugins[t];
                    if(!s) return;
                    if(!r && (!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)) return;
                    for(i = 0; i < s.length; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n)
                }
            };
            var r = 0,
                i = Array.prototype.slice;
            e.cleanData = function(t) {
                return function(n) {
                    var r, i, s;
                    for(s = 0;
                        (i = n[s]) != null; s++) try {
                        r = e._data(i, "events"), r && r.remove && e(i).triggerHandler("remove")
                    } catch(o) {}
                    t(n)
                }
            }(e.cleanData), e.widget = function(t, n, r) {
                var i, s, o, u, a = {},
                    f = t.split(".")[0];
                return t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
                    return !!e.data(t, i)
                }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
                    if(!this._createWidget) return new o(e, t);
                    arguments.length && this._createWidget(e, t)
                }, e.extend(o, s, {
                    version: r.version,
                    _proto: e.extend({}, r),
                    _childConstructors: []
                }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
                    if(!e.isFunction(r)) {
                        a[t] = r;
                        return
                    }
                    a[t] = function() {
                        var e = function() {
                                return n.prototype[t].apply(this, arguments)
                            },
                            i = function(e) {
                                return n.prototype[t].apply(this, e)
                            };
                        return function() {
                            var t = this._super,
                                n = this._superApply,
                                s;
                            return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                        }
                    }()
                }), o.prototype = e.widget.extend(u, {
                    widgetEventPrefix: s ? u.widgetEventPrefix || t : t
                }, a, {
                    constructor: o,
                    namespace: f,
                    widgetName: t,
                    widgetFullName: i
                }), s ? (e.each(s._childConstructors, function(t, n) {
                    var r = n.prototype;
                    e.widget(r.namespace + "." + r.widgetName, o, n._proto)
                }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o
            }, e.widget.extend = function(t) {
                var n = i.call(arguments, 1),
                    r = 0,
                    s = n.length,
                    o, u;
                for(; r < s; r++)
                    for(o in n[r]) u = n[r][o], n[r].hasOwnProperty(o) && u !== undefined && (e.isPlainObject(u) ? t[o] = e.isPlainObject(t[o]) ? e.widget.extend({}, t[o], u) : e.widget.extend({}, u) : t[o] = u);
                return t
            }, e.widget.bridge = function(t, n) {
                var r = n.prototype.widgetFullName || t;
                e.fn[t] = function(s) {
                    var o = typeof s == "string",
                        u = i.call(arguments, 1),
                        a = this;
                    return s = !o && u.length ? e.widget.extend.apply(null, [s].concat(u)) : s, o ? this.each(function() {
                        var n, i = e.data(this, r);
                        if(s === "instance") return a = i, !1;
                        if(!i) return e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + s + "'");
                        if(!e.isFunction(i[s]) || s.charAt(0) === "_") return e.error("no such method '" + s + "' for " + t + " widget instance");
                        n = i[s].apply(i, u);
                        if(n !== i && n !== undefined) return a = n && n.jquery ? a.pushStack(n.get()) : n, !1
                    }) : this.each(function() {
                        var t = e.data(this, r);
                        t ? (t.option(s || {}), t._init && t._init()) : e.data(this, r, new n(s, this))
                    }), a
                }
            }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(t, n) {
                    n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === n && this.destroy()
                        }
                    }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, n) {
                    var r = t,
                        i, s, o;
                    if(arguments.length === 0) return e.widget.extend({}, this.options);
                    if(typeof t == "string") {
                        r = {}, i = t.split("."), t = i.shift();
                        if(i.length) {
                            s = r[t] = e.widget.extend({}, this.options[t]);
                            for(o = 0; o < i.length - 1; o++) s[i[o]] = s[i[o]] || {}, s = s[i[o]];
                            t = i.pop();
                            if(arguments.length === 1) return s[t] === undefined ? null : s[t];
                            s[t] = n
                        } else {
                            if(arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                            r[t] = n
                        }
                    }
                    return this._setOptions(r), this
                },
                _setOptions: function(e) {
                    var t;
                    for(t in e) this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _on: function(t, n, r) {
                    var i, s = this;
                    typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                        function u() {
                            if(!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                            return(typeof o == "string" ? s[o] : o).apply(s, arguments)
                        }
                        typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                        var a = r.match(/^([\w:-]*)\s*(.*)$/),
                            f = a[1] + s.eventNamespace,
                            l = a[2];
                        l ? i.delegate(l, f, u) : n.bind(f, u)
                    })
                },
                _off: function(t, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
                },
                _delay: function(e, t) {
                    function n() {
                        return(typeof e == "string" ? r[e] : e).apply(r, arguments)
                    }
                    var r = this;
                    return setTimeout(n, t || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t), this._on(t, {
                        mouseenter: function(t) {
                            e(t.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(t) {
                            e(t.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function(t) {
                            e(t.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(t) {
                            e(t.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, n, r) {
                    var i, s, o = this.options[t];
                    r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
                    if(s)
                        for(i in s) i in n || (n[i] = s[i]);
                    return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
                }
            }, e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(t, n) {
                e.Widget.prototype["_" + t] = function(r, i, s) {
                    typeof i == "string" && (i = {
                        effect: i
                    });
                    var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
                    i = i || {}, typeof i == "number" && (i = {
                        duration: i
                    }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                        e(this)[t](), s && s.call(r[0]), n()
                    })
                }
            });
            var s = e.widget,
                o = !1;
            e(document).mouseup(function() {
                o = !1
            });
            var u = e.widget("ui.mouse", {
                version: "1.11.2",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName, function(e) {
                        return t._mouseDown(e)
                    }).bind("click." + this.widgetName, function(n) {
                        if(!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(t) {
                    if(o) return;
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var n = this,
                        r = t.which === 1,
                        i = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    if(!r || i || !this._mouseCapture(t)) return !0;
                    this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay));
                    if(this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                        this._mouseStarted = this._mouseStart(t) !== !1;
                        if(!this._mouseStarted) return t.preventDefault(), !0
                    }
                    return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return n._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return n._mouseUp(e)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), o = !0, !0
                },
                _mouseMove: function(t) {
                    if(this._mouseMoved) {
                        if(e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if(!t.which) return this._mouseUp(t)
                    }
                    if(t.which || t.button) this._mouseMoved = !0;
                    return this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function(t) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), o = !1, !1
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            });
            (function() {
                function h(e, t, n) {
                    return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
                }

                function p(t, n) {
                    return parseInt(e.css(t, n), 10) || 0
                }

                function d(t) {
                    var n = t[0];
                    return n.nodeType === 9 ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : e.isWindow(n) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : n.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: n.pageY,
                            left: n.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    }
                }
                e.ui = e.ui || {};
                var t, n, r = Math.max,
                    i = Math.abs,
                    s = Math.round,
                    o = /left|center|right/,
                    u = /top|center|bottom/,
                    a = /[\+\-]\d+(\.[\d]+)?%?/,
                    f = /^\w+/,
                    l = /%$/,
                    c = e.fn.position;
                e.position = {
                        scrollbarWidth: function() {
                            if(t !== undefined) return t;
                            var n, r, i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                s = i.children()[0];
                            return e("body").append(i), n = s.offsetWidth, i.css("overflow", "scroll"), r = s.offsetWidth, n === r && (r = i[0].clientWidth), i.remove(), t = n - r
                        },
                        getScrollInfo: function(t) {
                            var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                                r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                                i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                                s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                            return {
                                width: s ? e.position.scrollbarWidth() : 0,
                                height: i ? e.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(t) {
                            var n = e(t || window),
                                r = e.isWindow(n[0]),
                                i = !!n[0] && n[0].nodeType === 9;
                            return {
                                element: n,
                                isWindow: r,
                                isDocument: i,
                                offset: n.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: n.scrollLeft(),
                                scrollTop: n.scrollTop(),
                                width: r || i ? n.width() : n.outerWidth(),
                                height: r || i ? n.height() : n.outerHeight()
                            }
                        }
                    }, e.fn.position = function(t) {
                        if(!t || !t.of) return c.apply(this, arguments);
                        t = e.extend({}, t);
                        var l, v, m, g, y, b, w = e(t.of),
                            E = e.position.getWithinInfo(t.within),
                            S = e.position.getScrollInfo(E),
                            x = (t.collision || "flip").split(" "),
                            T = {};
                        return b = d(w), w[0].preventDefault && (t.at = "left top"), v = b.width, m = b.height, g = b.offset, y = e.extend({}, g), e.each(["my", "at"], function() {
                            var e = (t[this] || "").split(" "),
                                n, r;
                            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), T[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
                        }), x.length === 1 && (x[1] = x[0]), t.at[0] === "right" ? y.left += v : t.at[0] === "center" && (y.left += v / 2), t.at[1] === "bottom" ? y.top += m : t.at[1] === "center" && (y.top += m / 2), l = h(T.at, v, m), y.left += l[0], y.top += l[1], this.each(function() {
                            var o, u, a = e(this),
                                f = a.outerWidth(),
                                c = a.outerHeight(),
                                d = p(this, "marginLeft"),
                                b = p(this, "marginTop"),
                                N = f + d + p(this, "marginRight") + S.width,
                                C = c + b + p(this, "marginBottom") + S.height,
                                k = e.extend({}, y),
                                L = h(T.my, a.outerWidth(), a.outerHeight());
                            t.my[0] === "right" ? k.left -= f : t.my[0] === "center" && (k.left -= f / 2), t.my[1] === "bottom" ? k.top -= c : t.my[1] === "center" && (k.top -= c / 2), k.left += L[0], k.top += L[1], n || (k.left = s(k.left), k.top = s(k.top)), o = {
                                marginLeft: d,
                                marginTop: b
                            }, e.each(["left", "top"], function(n, r) {
                                e.ui.position[x[n]] && e.ui.position[x[n]][r](k, {
                                    targetWidth: v,
                                    targetHeight: m,
                                    elemWidth: f,
                                    elemHeight: c,
                                    collisionPosition: o,
                                    collisionWidth: N,
                                    collisionHeight: C,
                                    offset: [l[0] + L[0], l[1] + L[1]],
                                    my: t.my,
                                    at: t.at,
                                    within: E,
                                    elem: a
                                })
                            }), t.using && (u = function(e) {
                                var n = g.left - k.left,
                                    s = n + v - f,
                                    o = g.top - k.top,
                                    u = o + m - c,
                                    l = {
                                        target: {
                                            element: w,
                                            left: g.left,
                                            top: g.top,
                                            width: v,
                                            height: m
                                        },
                                        element: {
                                            element: a,
                                            left: k.left,
                                            top: k.top,
                                            width: f,
                                            height: c
                                        },
                                        horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                                        vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                                    };
                                v < f && i(n + s) < v && (l.horizontal = "center"), m < c && i(o + u) < m && (l.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? l.important = "horizontal" : l.important = "vertical", t.using.call(this, e, l)
                            }), a.offset(e.extend(k, {
                                using: u
                            }))
                        })
                    }, e.ui.position = {
                        fit: {
                            left: function(e, t) {
                                var n = t.within,
                                    i = n.isWindow ? n.scrollLeft : n.offset.left,
                                    s = n.width,
                                    o = e.left - t.collisionPosition.marginLeft,
                                    u = i - o,
                                    a = o + t.collisionWidth - s - i,
                                    f;
                                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
                            },
                            top: function(e, t) {
                                var n = t.within,
                                    i = n.isWindow ? n.scrollTop : n.offset.top,
                                    s = t.within.height,
                                    o = e.top - t.collisionPosition.marginTop,
                                    u = i - o,
                                    a = o + t.collisionHeight - s - i,
                                    f;
                                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
                            }
                        },
                        flip: {
                            left: function(e, t) {
                                var n = t.within,
                                    r = n.offset.left + n.scrollLeft,
                                    s = n.width,
                                    o = n.isWindow ? n.scrollLeft : n.offset.left,
                                    u = e.left - t.collisionPosition.marginLeft,
                                    a = u - o,
                                    f = u + t.collisionWidth - s - o,
                                    l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                                    c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                                    h = -2 * t.offset[0],
                                    p, d;
                                if(a < 0) {
                                    p = e.left + l + c + h + t.collisionWidth - s - r;
                                    if(p < 0 || p < i(a)) e.left += l + c + h
                                } else if(f > 0) {
                                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                                    if(d > 0 || i(d) < f) e.left += l + c + h
                                }
                            },
                            top: function(e, t) {
                                var n = t.within,
                                    r = n.offset.top + n.scrollTop,
                                    s = n.height,
                                    o = n.isWindow ? n.scrollTop : n.offset.top,
                                    u = e.top - t.collisionPosition.marginTop,
                                    a = u - o,
                                    f = u + t.collisionHeight - s - o,
                                    l = t.my[1] === "top",
                                    c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                                    h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                                    p = -2 * t.offset[1],
                                    d, v;
                                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
                            }
                        },
                        flipfit: {
                            left: function() {
                                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var t, r, i, s, o, u = document.getElementsByTagName("body")[0],
                            a = document.createElement("div");
                        t = document.createElement(u ? "div" : "body"), i = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        }, u && e.extend(i, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for(o in i) t.style[o] = i[o];
                        t.appendChild(a), r = u || document.documentElement, r.insertBefore(t, r.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = e(a).offset().left, n = s > 10 && s < 11, t.innerHTML = "", r.removeChild(t)
                    }()
            })();
            var a = e.ui.position;
            e.widget("ui.draggable", e.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this.options.helper === "original" && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
                },
                _setOption: function(e, t) {
                    this._super(e, t), e === "handle" && (this._removeHandleClassName(), this._setHandleClassName())
                },
                _destroy: function() {
                    if((this.helper || this.element).is(".ui-draggable-dragging")) {
                        this.destroyOnClear = !0;
                        return
                    }
                    this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy()
                },
                _mouseCapture: function(t) {
                    var n = this.options;
                    return this._blurActiveElement(t), this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(n.iframeFix === !0 ? "iframe" : n.iframeFix), !0) : !1)
                },
                _blockFrames: function(t) {
                    this.iframeBlocks = this.document.find(t).map(function() {
                        var t = e(this);
                        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _blurActiveElement: function(t) {
                    var n = this.document[0];
                    if(!this.handleElement.is(t.target)) return;
                    try {
                        n.activeElement && n.activeElement.nodeName.toLowerCase() !== "body" && e(n.activeElement).blur()
                    } catch(r) {}
                },
                _mouseStart: function(t) {
                    var n = this.options;
                    return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                        return e(this).css("position") === "fixed"
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
                },
                _refreshOffsets: function(e) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }, this.offset.click = {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(t, n) {
                    this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute");
                    if(!n) {
                        var r = this._uiHash();
                        if(this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                        this.position = r.position
                    }
                    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
                },
                _mouseStop: function(t) {
                    var n = this,
                        r = !1;
                    return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        n._trigger("stop", t) !== !1 && n._clear()
                    }) : this._trigger("stop", t) !== !1 && this._clear(), !1
                },
                _mouseUp: function(t) {
                    return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype.
                    _mouseUp.call(this, t)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
                },
                _getHandle: function(t) {
                    return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this.handleElement.removeClass("ui-draggable-handle")
                },
                _createHelper: function(t) {
                    var n = this.options,
                        r = e.isFunction(n.helper),
                        i = r ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                    return i.parents("body").length || i.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r && i[0] === this.element[0] && this._setPositionRelative(), i[0] !== this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"), i
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(t) {
                    typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _isRootNode: function(e) {
                    return /(html|body)/i.test(e.tagName) || e === this.document[0]
                },
                _getParentOffset: function() {
                    var t = this.offsetParent.offset(),
                        n = this.document[0];
                    return this.cssPosition === "absolute" && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if(this.cssPosition !== "relative") return {
                        top: 0,
                        left: 0
                    };
                    var e = this.element.position(),
                        t = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, n, r, i = this.options,
                        s = this.document[0];
                    this.relativeContainer = null;
                    if(!i.containment) {
                        this.containment = null;
                        return
                    }
                    if(i.containment === "window") {
                        this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                        return
                    }
                    if(i.containment === "document") {
                        this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                        return
                    }
                    if(i.containment.constructor === Array) {
                        this.containment = i.containment;
                        return
                    }
                    i.containment === "parent" && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0];
                    if(!r) return;
                    t = /(scroll|auto)/.test(n.css("overflow")), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n
                },
                _convertPositionTo: function(e, t) {
                    t || (t = this.position);
                    var n = e === "absolute" ? 1 : -1,
                        r = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * n,
                        left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * n
                    }
                },
                _generatePosition: function(e, t) {
                    var n, r, i, s, o = this.options,
                        u = this._isRootNode(this.scrollParent[0]),
                        a = e.pageX,
                        f = e.pageY;
                    if(!u || !this.offset.scroll) this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    };
                    return t && (this.containment && (this.relativeContainer ? (r = this.relativeContainer.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s), o.axis === "y" && (a = this.originalPageX), o.axis === "x" && (f = this.originalPageY)), {
                        top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : u ? 0 : this.offset.scroll.top),
                        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : u ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                },
                _normalizeRightBottom: function() {
                    this.options.axis !== "y" && this.helper.css("right") !== "auto" && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), this.options.axis !== "x" && this.helper.css("bottom") !== "auto" && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
                },
                _trigger: function(t, n, r) {
                    return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, n, r)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }), e.ui.plugin.add("draggable", "connectToSortable", {
                start: function(t, n, r) {
                    var i = e.extend({}, n, {
                        item: r.element
                    });
                    r.sortables = [], e(r.options.connectToSortable).each(function() {
                        var n = e(this).sortable("instance");
                        n && !n.options.disabled && (r.sortables.push(n), n.refreshPositions(), n._trigger("activate", t, i))
                    })
                },
                stop: function(t, n, r) {
                    var i = e.extend({}, n, {
                        item: r.element
                    });
                    r.cancelHelperRemoval = !1, e.each(r.sortables, function() {
                        var e = this;
                        e.isOver ? (e.isOver = 0, r.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                            position: e.placeholder.css("position"),
                            top: e.placeholder.css("top"),
                            left: e.placeholder.css("left")
                        }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, i))
                    })
                },
                drag: function(t, n, r) {
                    e.each(r.sortables, function() {
                        var i = !1,
                            s = this;
                        s.positionAbs = r.positionAbs, s.helperProportions = r.helperProportions, s.offset.click = r.offset.click, s._intersectsWith(s.containerCache) && (i = !0, e.each(r.sortables, function() {
                            return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== s && this._intersectsWith(this.containerCache) && e.contains(s.element[0], this.element[0]) && (i = !1), i
                        })), i ? (s.isOver || (s.isOver = 1, s.currentItem = n.helper.appendTo(s.element).data("ui-sortable-item", !0), s.options._helper = s.options.helper, s.options.helper = function() {
                            return n.helper[0]
                        }, t.target = s.currentItem[0], s._mouseCapture(t, !0), s._mouseStart(t, !0, !0), s.offset.click.top = r.offset.click.top, s.offset.click.left = r.offset.click.left, s.offset.parent.left -= r.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= r.offset.parent.top - s.offset.parent.top, r._trigger("toSortable", t), r.dropped = s.element, e.each(r.sortables, function() {
                            this.refreshPositions()
                        }), r.currentItem = r.element, s.fromOutside = r), s.currentItem && (s._mouseDrag(t), n.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger("out", t, s._uiHash(s)), s._mouseStop(t, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), r._refreshOffsets(t), n.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, e.each(r.sortables, function() {
                            this.refreshPositions()
                        }))
                    })
                }
            }), e.ui.plugin.add("draggable", "cursor", {
                start: function(t, n, r) {
                    var i = e("body"),
                        s = r.options;
                    i.css("cursor") && (s._cursor = i.css("cursor")), i.css("cursor", s.cursor)
                },
                stop: function(t, n, r) {
                    var i = r.options;
                    i._cursor && e("body").css("cursor", i._cursor)
                }
            }), e.ui.plugin.add("draggable", "opacity", {
                start: function(t, n, r) {
                    var i = e(n.helper),
                        s = r.options;
                    i.css("opacity") && (s._opacity = i.css("opacity")), i.css("opacity", s.opacity)
                },
                stop: function(t, n, r) {
                    var i = r.options;
                    i._opacity && e(n.helper).css("opacity", i._opacity)
                }
            }), e.ui.plugin.add("draggable", "scroll", {
                start: function(e, t, n) {
                    n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && n.scrollParentNotHidden[0].tagName !== "HTML" && (n.overflowOffset = n.scrollParentNotHidden.offset())
                },
                drag: function(t, n, r) {
                    var i = r.options,
                        s = !1,
                        o = r.scrollParentNotHidden[0],
                        u = r.document[0];
                    if(o !== u && o.tagName !== "HTML") {
                        if(!i.axis || i.axis !== "x") r.overflowOffset.top + o.offsetHeight - t.pageY < i.scrollSensitivity ? o.scrollTop = s = o.scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (o.scrollTop = s = o.scrollTop - i.scrollSpeed);
                        if(!i.axis || i.axis !== "y") r.overflowOffset.left + o.offsetWidth - t.pageX < i.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - i.scrollSpeed)
                    } else {
                        if(!i.axis || i.axis !== "x") t.pageY - e(u).scrollTop() < i.
                        scrollSensitivity ? s = e(u).scrollTop(e(u).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(u).scrollTop()) < i.scrollSensitivity && (s = e(u).scrollTop(e(u).scrollTop() + i.scrollSpeed));
                        if(!i.axis || i.axis !== "y") t.pageX - e(u).scrollLeft() < i.scrollSensitivity ? s = e(u).scrollLeft(e(u).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(u).scrollLeft()) < i.scrollSensitivity && (s = e(u).scrollLeft(e(u).scrollLeft() + i.scrollSpeed))
                    }
                    s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
                }
            }), e.ui.plugin.add("draggable", "snap", {
                start: function(t, n, r) {
                    var i = r.options;
                    r.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                        var t = e(this),
                            n = t.offset();
                        this !== r.element[0] && r.snapElements.push({
                            item: this,
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            top: n.top,
                            left: n.left
                        })
                    })
                },
                drag: function(t, n, r) {
                    var i, s, o, u, a, f, l, c, h, p, d = r.options,
                        v = d.snapTolerance,
                        m = n.offset.left,
                        g = m + r.helperProportions.width,
                        y = n.offset.top,
                        b = y + r.helperProportions.height;
                    for(h = r.snapElements.length - 1; h >= 0; h--) {
                        a = r.snapElements[h].left - r.margins.left, f = a + r.snapElements[h].width, l = r.snapElements[h].top - r.margins.top, c = l + r.snapElements[h].height;
                        if(g < a - v || m > f + v || b < l - v || y > c + v || !e.contains(r.snapElements[h].item.ownerDocument, r.snapElements[h].item)) {
                            r.snapElements[h].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                                snapItem: r.snapElements[h].item
                            })), r.snapElements[h].snapping = !1;
                            continue
                        }
                        d.snapMode !== "inner" && (i = Math.abs(l - b) <= v, s = Math.abs(c - y) <= v, o = Math.abs(a - g) <= v, u = Math.abs(f - m) <= v, i && (n.position.top = r._convertPositionTo("relative", {
                            top: l - r.helperProportions.height,
                            left: 0
                        }).top), s && (n.position.top = r._convertPositionTo("relative", {
                            top: c,
                            left: 0
                        }).top), o && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: a - r.helperProportions.width
                        }).left), u && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: f
                        }).left)), p = i || s || o || u, d.snapMode !== "outer" && (i = Math.abs(l - y) <= v, s = Math.abs(c - b) <= v, o = Math.abs(a - m) <= v, u = Math.abs(f - g) <= v, i && (n.position.top = r._convertPositionTo("relative", {
                            top: l,
                            left: 0
                        }).top), s && (n.position.top = r._convertPositionTo("relative", {
                            top: c - r.helperProportions.height,
                            left: 0
                        }).top), o && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: a
                        }).left), u && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: f - r.helperProportions.width
                        }).left)), !r.snapElements[h].snapping && (i || s || o || u || p) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                            snapItem: r.snapElements[h].item
                        })), r.snapElements[h].snapping = i || s || o || u || p
                    }
                }
            }), e.ui.plugin.add("draggable", "stack", {
                start: function(t, n, r) {
                    var i, s = r.options,
                        o = e.makeArray(e(s.stack)).sort(function(t, n) {
                            return(parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                        });
                    if(!o.length) return;
                    i = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
                        e(this).css("zIndex", i + t)
                    }), this.css("zIndex", i + o.length)
                }
            }), e.ui.plugin.add("draggable", "zIndex", {
                start: function(t, n, r) {
                    var i = e(n.helper),
                        s = r.options;
                    i.css("zIndex") && (s._zIndex = i.css("zIndex")), i.css("zIndex", s.zIndex)
                },
                stop: function(t, n, r) {
                    var i = r.options;
                    i._zIndex && e(n.helper).css("zIndex", i._zIndex)
                }
            });
            var f = e.ui.draggable;
            e.widget("ui.resizable", e.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function(e) {
                    return parseInt(e, 10) || 0
                },
                _isNumber: function(e) {
                    return !isNaN(parseInt(e, 10))
                },
                _hasScroll: function(t, n) {
                    if(e(t).css("overflow") === "hidden") return !1;
                    var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                        i = !1;
                    return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
                },
                _create: function() {
                    var t, n, r, i, s, o = this,
                        u = this.options;
                    this.element.addClass("ui-resizable"), e.extend(this, {
                        _aspectRatio: !!u.aspectRatio,
                        aspectRatio: u.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se");
                    if(this.handles.constructor === String) {
                        this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {};
                        for(n = 0; n < t.length; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({
                            zIndex: u.zIndex
                        }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i)
                    }
                    this._renderAxis = function(t) {
                        var n, r, i, s;
                        t = t || this.element;
                        for(n in this.handles) {
                            this.handles[n].constructor === String && (this.handles[n] = this.element.children(this.handles[n]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize());
                            if(!e(this.handles[n]).length) continue
                        }
                    }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                        o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se")
                    }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        if(u.disabled) return;
                        e(this).removeClass("ui-resizable-autohide"), o._handles.show()
                    }).mouseleave(function() {
                        if(u.disabled) return;
                        o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
                    })), this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var t, n = function(t) {
                        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                        position: t.css("position"),
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: t.css("top"),
                        left: t.css("left")
                    }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
                },
                _mouseCapture: function(t) {
                    var n, r, i = !1;
                    for(n in this.handles) {
                        r = e(this.handles[n])[0];
                        if(r === t.target || e.contains(r, t.target)) i = !0
                    }
                    return !this.options.disabled && i
                },
                _mouseStart: function(t) {
                    var n, r, i, s = this.options,
                        o = this.element;
                    return this.resizing = !0, this._renderProxy(), n = this._num(this.helper.css("left")), r = this._num(this.helper.css("top")), s.containment && (n += e(s.containment).scrollLeft() || 0, r += e(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: n,
                        top: r
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: o.width(),
                        height: o.height()
                    }, this.originalSize = this._helper ? {
                        width: o.outerWidth(),
                        height: o.outerHeight()
                    } : {
                        width: o.width(),
                        height: o.height()
                    }, this.sizeDiff = {
                        width: o.outerWidth() - o.width(),
                        height: o.outerHeight() - o.height()
                    }, this.originalPosition = {
                        left: n,
                        top: r
                    }, this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    }, this.aspectRatio = typeof s.aspectRatio == "number" ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, i = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", i === "auto" ? this.axis + "-resize" : i), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
                },
                _mouseDrag: function(t) {
                    var n, r, i = this.originalMousePosition,
                        s = this.axis,
                        o = t.pageX - i.left || 0,
                        u = t.pageY - i.top || 0,
                        a = this._change[s];
                    this._updatePrevProperties();
                    if(!a) return !1;
                    n = a.apply(this, [t, o, u]), this._updateVirtualBoundaries(t.shiftKey);
                    if(this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);
                    return n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1
                },
                _mouseStop: function(t) {
                    this.resizing = !1;
                    var n, r, i, s, o, u, a, f = this.options,
                        l = this;
                    return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && this._hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                        width: l.helper.width() - s,
                        height: l.helper.height() - i
                    }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                        top: a,
                        left: u
                    })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
                },
                _updatePrevProperties: function() {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    }, this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    }
                },
                _applyChanges: function() {
                    var e = {};
                    return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
                },
                _updateVirtualBoundaries: function(e) {
                    var t, n, r, i, s, o = this.options;
                    s = {
                        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
                    };
                    if(this._aspectRatio || e) t = s.minHeight * this.aspectRatio, r = s.minWidth / this.aspectRatio, n = s.maxHeight * this.aspectRatio, i = s.maxWidth / this.aspectRatio, t > s.minWidth && (s.minWidth = t), r > s.minHeight && (s.minHeight = r), n < s.maxWidth && (s.maxWidth = n), i < s.maxHeight && (s.maxHeight = i);
                    this._vBoundaries = s
                },
                _updateCache: function(e) {
                    this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
                },
                _updateRatio: function(e) {
                    var t = this.position,
                        n = this.size,
                        r = this.axis;
                    return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), r === "sw" && (e.left = t.left + (n.width - e.width), e.top = null), r === "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
                },
                _respectSize: function(e) {
                    var t = this._vBoundaries,
                        n = this.axis,
                        r = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                        i = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                        s = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                        o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                        u = this.originalPosition.left + this.originalSize.width,
                        a = this.position.top + this.size.height,
                        f = /sw|nw|w/.test(n),
                        l = /nw|ne|n/.test(n);
                    return s && (e.width = t.minWidth), o && (e.height = t.minHeight), r && (e.width = t.maxWidth), i && (e.height = t.maxHeight), s && f && (e.left = u - t.minWidth), r && f && (e.left = u - t.maxWidth), o && l && (e.top = a - t.minHeight), i && l && (e.top = a - t.maxHeight), !e.width && !e.height && !e.left && e.top ? e.top = null : !e.width && !e.height && !e.top && e.left && (e.left = null), e
                },
                _getPaddingPlusBorderDimensions: function(e) {
                    var t = 0,
                        n = [],
                        r = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
                        i = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
                    for(; t < 4; t++) n[t] = parseInt(r[t], 10) || 0, n[t] += parseInt(i[t], 10) || 0;
                    return {
                        height: n[0] + n[2],
                        width: n[1] + n[3]
                    }
                },
                _proportionallyResize: function() {
                    if(!this._proportionallyResizeElements.length) return;
                    var e, t = 0,
                        n = this.helper || this.element;
                    for(; t < this._proportionallyResizeElements.length; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                        height: n.height() - this.outerDimensions.height || 0,
                        width: n.width() - this.outerDimensions.width || 0
                    })
                },
                _renderProxy: function() {
                    var t = this.element,
                        n = this.options;
                    this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1,
                        height: this.element.outerHeight() - 1,
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++n.zIndex
                    }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(e, t) {
                        return {
                            width: this.originalSize.width + t
                        }
                    },
                    w: function(e, t) {
                        var n = this.originalSize,
                            r = this.originalPosition;
                        return {
                            left: r.left + t,
                            width: n.width - t
                        }
                    },
                    n: function(e, t, n) {
                        var r = this.originalSize,
                            i = this.originalPosition;
                        return {
                            top: i.top + n,
                            height: r.height - n
                        }
                    },
                    s: function(e, t, n) {
                        return {
                            height: this.originalSize.height + n
                        }
                    },
                    se: function(t, n, r) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                    },
                    sw: function(t, n, r) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                    },
                    ne: function(t, n, r) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                    },
                    nw: function(t, n, r) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                    }
                },
                _propagate: function(t, n) {
                    e.ui.plugin.call(this, t, [n, this.ui()]), t !== "resize" && this._trigger(t, n, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }), e.ui.plugin.add("resizable", "animate", {
                stop: function(t) {
                    var n = e(this).resizable("instance"),
                        r = n.options,
                        i = n._proportionallyResizeElements,
                        s = i.length && /textarea/i.test(i[0].nodeName),
                        o = s && n._hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                        u = s ? 0 : n.sizeDiff.width,
                        a = {
                            width: n.size.width - u,
                            height: n.size.height - o
                        },
                        f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                        l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                    n.element.animate(e.extend(a, l && f ? {
                        top: l,
                        left: f
                    } : {}), {
                        duration: r.animateDuration,
                        easing: r.animateEasing,
                        step: function() {
                            var r = {
                                width: parseInt(n.element.css("width"), 10),
                                height: parseInt(n.element.css("height"), 10),
                                top: parseInt(n.element.css("top"), 10),
                                left: parseInt(n.element.css("left"), 10)
                            };
                            i && i.length && e(i[0]).css({
                                width: r.width,
                                height: r.height
                            }), n._updateCache(r), n._propagate("resize", t)
                        }
                    })
                }
            }), e.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var t, n, r, i, s, o, u, a = e(this).resizable("instance"),
                        f = a.options,
                        l = a.element,
                        c = f.containment,
                        h = c instanceof e ? c.get(0) : /parent/.test(c) ? l.parent().get(0) : c;
                    if(!h) return;
                    a.containerElement = e(h), /document/.test(c) || c === document ? (a.containerOffset = {
                        left: 0,
                        top: 0
                    }, a.containerPosition = {
                        left: 0,
                        top: 0
                    }, a.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    }) : (t = e(h), n = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, r) {
                        n[e] = a._num(t.css("padding" + r))
                    }), a.containerOffset = t.offset(), a.containerPosition = t.position(), a.containerSize = {
                        height: t.innerHeight() - n[3],
                        width: t.innerWidth() - n[1]
                    }, r = a.containerOffset, i = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(h, "left") ? h.scrollWidth : s, u = a._hasScroll(h) ? h.scrollHeight : i, a.parentData = {
                        element: h,
                        left: r.left,
                        top: r.top,
                        width: o,
                        height: u
                    })
                },
                resize: function(t) {
                    var n, r, i, s, o = e(this).resizable("instance"),
                        u = o.options,
                        a = o.containerOffset,
                        f = o.position,
                        l = o._aspectRatio || t.shiftKey,
                        c = {
                            top: 0,
                            left: 0
                        },
                        h = o.containerElement,
                        p = !0;
                    h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? a.top : 0), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), n = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left)), r = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top)), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio, p = !1)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
                },
                stop: function() {
                    var t = e(this).resizable("instance"),
                        n = t.options,
                        r = t.containerOffset,
                        i = t.containerPosition,
                        s = t.containerElement,
                        o = e(t.helper),
                        u = o.offset(),
                        a = o.outerWidth() - t.sizeDiff.width,
                        f = o.outerHeight() - t.sizeDiff.height;
                    t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                        left: u.left - i.left - r.left,
                        width: a,
                        height: f
                    }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                        left: u.left - i.left - r.left,
                        width: a,
                        height: f
                    })
                }
            }), e.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var t = e(this).resizable("instance"),
                        n = t.options,
                        r = function(t) {
                            e(t).each(function() {
                                var t = e(this);
                                t.data("ui-resizable-alsoresize", {
                                    width: parseInt(t.width(), 10),
                                    height: parseInt(t.height(), 10),
                                    left: parseInt(t.css("left"), 10),
                                    top: parseInt(t.css("top"), 10)
                                })
                            })
                        };
                    typeof n.alsoResize == "object" && !n.alsoResize.parentNode ? n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function(e) {
                        r(e)
                    }) : r(n.alsoResize)
                },
                resize: function(t, n) {
                    var r = e(this).resizable("instance"),
                        i = r.options,
                        s = r.originalSize,
                        o = r.originalPosition,
                        u = {
                            height: r.size.height - s.height || 0,
                            width: r.size.width - s.width || 0,
                            top: r.position.top - o.top || 0,
                            left: r.position.left - o.left || 0
                        },
                        a = function(t, r) {
                            e(t).each(function() {
                                var t = e(this),
                                    i = e(this).data("ui-resizable-alsoresize"),
                                    s = {},
                                    o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                e.each(o, function(e, t) {
                                    var n = (i[t] || 0) + (u[t] || 0);
                                    n && n >= 0 && (s[t] = n || null)
                                }), t.css(s)
                            })
                        };
                    typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
                        a(e, t)
                    }) : a(i.alsoResize)
                },
                stop: function() {
                    e(this).removeData("resizable-alsoresize")
                }
            }), e.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var t = e(this).resizable("instance"),
                        n = t.options,
                        r = t.size;
                    t.ghost = t.originalElement.clone(), t.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: r.height,
                        width: r.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
                },
                resize: function() {
                    var t = e(this).resizable("instance");
                    t.ghost && t.ghost.css({
                        position: "relative",
                        height: t.size.height,
                        width: t.size.width
                    })
                },
                stop: function() {
                    var t = e(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }), e.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var t, n = e(this).resizable("instance"),
                        r = n.options,
                        i = n.size,
                        s = n.originalSize,
                        o = n.originalPosition,
                        u = n.axis,
                        a = typeof r.grid == "number" ? [r.grid, r.grid] : r.grid,
                        f = a[0] || 1,
                        l = a[1] || 1,
                        c = Math.round((i.width - s.width) / f) * f,
                        h = Math.round((i.height - s.height) / l) * l,
                        p = s.width + c,
                        d = s.height + h,
                        v = r.maxWidth && r.maxWidth < p,
                        m = r.maxHeight && r.maxHeight < d,
                        g = r.minWidth && r.minWidth > p,
                        y = r.minHeight && r.minHeight > d;
                    r.grid = a, g && (p += f), y && (d += l), v && (p -= f), m && (d -= l);
                    if(/^(se|s|e)$/.test(u)) n.size.width = p, n.size.height = d;
                    else if(/^(ne)$/.test(u)) n.size.width = p, n.size.height = d, n.position.top = o.top - h;
                    else if(/^(sw)$/.test(u)) n.size.width = p, n.size.height = d, n.position.left = o.left - c;
                    else {
                        if(d - l <= 0 || p - f <= 0) t = n._getPaddingPlusBorderDimensions(this);
                        d - l > 0 ? (n.size.height = d, n.position.top = o.top - h) : (d = l - t.height, n.size.height = d, n.position.top = o.top + s.height - d), p - f > 0 ? (n.size.width = p, n.position.left = o.left - c) : (p = l - t.height, n.size.width = p, n.position.left = o.left + s.width - p)
                    }
                }
            });
            var l = e.ui.resizable,
                c, h = "ui-button ui-widget ui-state-default ui-corner-all",
                p = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
                d = function() {
                    var t = e(this);
                    setTimeout(function() {
                        t.find(":ui-button").button("refresh")
                    }, 1)
                },
                v = function(t) {
                    var n = t.name,
                        r = t.form,
                        i = e([]);
                    return n && (n = n.replace(/'/g, "\\'"), r ? i = e(r).find("[name='" + n + "'][type=radio]") : i = e("[name='" + n + "'][type=radio]", t.ownerDocument).filter(function() {
                        return !this.form
                    })), i
                };
            e.widget("ui.button", {
                version: "1.11.2",
                defaultElement: "<button>",
                options: {
                    disabled: null,
                    text: !0,
                    label: null,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, d), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                    var t = this,
                        n = this.options,
                        r = this.type === "checkbox" || this.type === "radio",
                        i = r ? "" : "ui-state-active";
                    n.label === null && (n.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(h).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                        if(n.disabled) return;
                        this === c && e(this).addClass("ui-state-active")
                    }).bind("mouseleave" + this.eventNamespace, function() {
                        if(n.disabled) return;
                        e(this).removeClass(i)
                    }).bind("click" + this.eventNamespace, function(e) {
                        n.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                    }), this._on({
                        focus: function() {
                            this.buttonElement.addClass("ui-state-focus")
                        },
                        blur: function() {
                            this.buttonElement.removeClass("ui-state-focus")
                        }
                    }), r && this.element.bind("change" + this.eventNamespace, function() {
                        t.refresh()
                    }), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if(n.disabled) return !1
                    }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if(n.disabled) return !1;
                        e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                        var r = t.element[0];
                        v(r).not(r).map(function() {
                            return e(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if(n.disabled) return !1;
                        e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function() {
                            c = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if(n.disabled) return !1;
                        e(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(t) {
                        if(n.disabled) return !1;
                        (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        e(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                        t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                    })), this._setOption("disabled", n.disabled), this._resetButton()
                },
                _determineButtonType: function() {
                    var e, t, n;
                    this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
                },
                widget: function() {
                    return this.buttonElement
                },
                _destroy: function() {
                    this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(h + " ui-state-active " + p).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
                },
                _setOption: function(e, t) {
                    this._super(e, t);
                    if(e === "disabled") {
                        this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && (this.type === "checkbox" || this.type === "radio" ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"));
                        return
                    }
                    this._resetButton()
                },
                refresh: function() {
                    var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? v(this.element[0]).each(function() {
                        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                },
                _resetButton: function() {
                    if(this.type === "input") {
                        this.options.label && this.element.val(this.options.label);
                        return
                    }
                    var t = this.buttonElement.removeClass(p),
                        n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                        r = this.options.icons,
                        i = r.primary && r.secondary,
                        s = [];
                    r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
                }
            }), e.widget("ui.buttonset", {
                version: "1.11.2",
                options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
                },
                _create: function() {
                    this.element.addClass("ui-buttonset")
                },
                _init: function() {
                    this.refresh()
                },
                _setOption: function(e, t) {
                    e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
                },
                refresh: function() {
                    var t = this.element.css("direction") === "rtl",
                        n = this.element.find(this.options.items),
                        r = n.filter(":ui-button");
                    n.not(":ui-button").button(), r.button("refresh"), this.buttons = n.map(function() {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
                },
                _destroy: function() {
                    this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                }
            });
            var m = e.ui.button;
            e.extend(e.ui, {
                datepicker: {
                    version: "1.11.2"
                }
            });
            var g;
            e.extend(b.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(e) {
                    return S(this._defaults, e || {}), this
                },
                _attachDatepicker: function(t, n) {
                    var r, i, s;
                    r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
                },
                _newInst: function(t, n) {
                    var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                    return {
                        id: r,
                        input: t,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: n,
                        dpDiv: n ? w(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function(t, n) {
                    var r = e(t);
                    n.append = e([]), n.trigger = e([]);
                    if(r.hasClass(this.markerClassName)) return;
                    this._attachments(r, n), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t)
                },
                _attachments: function(t, n) {
                    var r, i, s, o = this._get(n, "appendText"),
                        u = this._get(n, "isRTL");
                    n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);
                    if(r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                        src: s,
                        alt: i,
                        title: i
                    }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                        src: s,
                        alt: i,
                        title: i
                    }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
                        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                    })
                },
                _autoSize: function(e) {
                    if(this._get(e, "autoSize") && !e.inline) {
                        var t, n, r, i, s = new Date(2009, 11, 20),
                            o = this._get(e, "dateFormat");
                        o.match(/[DM]/) && (t = function(e) {
                            n = 0, r = 0;
                            for(i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
                            return r
                        }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
                    }
                },
                _inlineDatepicker: function(t, n) {
                    var r = e(t);
                    if(r.hasClass(this.markerClassName)) return;
                    r.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block")
                },
                _dialogDatepicker: function(t, n, r, i, s) {
                    var o, u, a, f, l, c = this._dialogInst;
                    return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), S(c.settings, i || {}), n = n && n.constructor === Date ? this._formatDate(c, n) : n, this._dialogInput.val(n), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (u = document.documentElement.clientWidth, a = document.documentElement.clientHeight, f = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
                },
                _destroyDatepicker: function(t) {
                    var n, r = e(t),
                        i = e.data(t, "datepicker");
                    if(!r.hasClass(this.markerClassName)) return;
                    n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), n === "input" ? (i.append.remove(), i.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (n === "div" || n === "span") && r.removeClass(this.markerClassName).empty()
                },
                _enableDatepicker: function(t) {
                    var n, r, i = e(t),
                        s = e.data(t, "datepicker");
                    if(!i.hasClass(this.markerClassName)) return;
                    n = t.nodeName.toLowerCase();
                    if(n === "input") t.disabled = !1, s.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if(n === "div" || n === "span") r = i.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                    this._disabledInputs = e.map(this._disabledInputs, function(e) {
                        return e === t ? null : e
                    })
                },
                _disableDatepicker: function(t) {
                    var n, r, i = e(t),
                        s = e.data(t, "datepicker");
                    if(!i.hasClass(this.markerClassName)) return;
                    n = t.nodeName.toLowerCase();
                    if(n === "input") t.disabled = !0, s.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if(n === "div" || n === "span") r = i.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                    this._disabledInputs = e.map(this._disabledInputs, function(e) {
                        return e === t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = t
                },
                _isDisabledDatepicker: function(e) {
                    if(!e) return !1;
                    for(var t = 0; t < this._disabledInputs.length; t++)
                        if(this._disabledInputs[t] === e) return !0;
                    return !1
                },
                _getInst: function(t) {
                    try {
                        return e.data(t, "datepicker")
                    } catch(n) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(t, n, r) {
                    var i, s, o, u, a = this._getInst(t);
                    if(arguments.length === 2 && typeof n == "string") return n === "defaults" ? e.extend({}, e.datepicker._defaults) : a ? n === "all" ? e.extend({}, a.settings) : this._get(a, n) : null;
                    i = n || {}, typeof n == "string" && (i = {}, i[n] = r), a && (this._curInst === a && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(a, "min"), u = this._getMinMaxDate(a, "max"), S(a.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (a.settings.minDate = this._formatDate(a, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (a.settings.maxDate = this._formatDate(a, u)), "disabled" in i && (i.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), a), this._autoSize(a), this._setDate(a, s), this._updateAlternate(a), this._updateDatepicker(a))
                },
                _changeDatepicker: function(e, t, n) {
                    this._optionDatepicker(e, t, n)
                },
                _refreshDatepicker: function(e) {
                    var t = this._getInst(e);
                    t && this._updateDatepicker(t)
                },
                _setDateDatepicker: function(e, t) {
                    var n = this._getInst(e);
                    n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
                },
                _getDateDatepicker: function(e, t) {
                    var n = this._getInst(e);
                    return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
                },
                _doKeyDown: function(t) {
                    var n, r, i, s = e.datepicker._getInst(t.target),
                        o = !0,
                        u = s.dpDiv.is(".ui-datepicker-rtl");
                    s._keyEvent = !0;
                    if(e.datepicker._datepickerShowing) switch(t.keyCode) {
                        case 9:
                            e.datepicker._hideDatepicker(), o = !1;
                            break;
                        case 13:
                            return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
                        case 27:
                            e.datepicker._hideDatepicker();
                            break;
                        case 33:
                            e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                            break;
                        case 34:
                            e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                            break;
                        case 35:
                            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                            break;
                        case 36:
                            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                            break;
                        case 37:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                            break;
                        case 38:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                            break;
                        case 39:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                            break;
                        case 40:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                            break;
                        default:
                            o = !1
                    } else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                    o && (t.preventDefault(), t.stopPropagation())
                },
                _doKeyPress: function(t) {
                    var n, r, i = e.datepicker._getInst(t.target);
                    if(e.datepicker._get(i, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
                },
                _doKeyUp: function(t) {
                    var n, r = e.datepicker._getInst(t.target);
                    if(r.input.val() !== r.lastVal) try {
                        n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
                    } catch(i) {}
                    return !0
                },
                _showDatepicker: function(t) {
                    t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
                    if(e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;
                    var n, r, i, s, o, u, a;
                    n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), i = r ? r.apply(t, [t, n]) : {};
                    if(i === !1) return;
                    S(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function() {
                        return s |= e(this).css("position") === "fixed", !s
                    }), o = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1]
                    }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), e.datepicker._updateDatepicker(n), o = e.datepicker._checkOffset(n, o, s), n.dpDiv.css({
                        position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                        display: "none",
                        left: o.
                        left + "px",
                        top: o.top + "px"
                    }), n.inline || (u = e.datepicker._get(n, "showAnim"), a = e.datepicker._get(n, "duration"), n.dpDiv.css("z-index", y(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? n.dpDiv.show(u, e.datepicker._get(n, "showOptions"), a) : n.dpDiv[u || "show"](u ? a : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n)
                },
                _updateDatepicker: function(t) {
                    this.maxRows = 4, g = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                    var n, r = this._getNumberOfMonths(t),
                        i = r[1],
                        s = 17,
                        o = t.dpDiv.find("." + this._dayOverClass + " a");
                    o.length > 0 && E.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                        n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                    }, 0))
                },
                _shouldFocusInput: function(e) {
                    return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
                },
                _checkOffset: function(t, n, r) {
                    var i = t.dpDiv.outerWidth(),
                        s = t.dpDiv.outerHeight(),
                        o = t.input ? t.input.outerWidth() : 0,
                        u = t.input ? t.input.outerHeight() : 0,
                        a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                        f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
                    return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
                },
                _findPos: function(t) {
                    var n, r = this._getInst(t),
                        i = this._get(r, "isRTL");
                    while(t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];
                    return n = e(t).offset(), [n.left, n.top]
                },
                _hideDatepicker: function(t) {
                    var n, r, i, s, o = this._curInst;
                    if(!o || t && o !== e.data(t, "datepicker")) return;
                    this._datepickerShowing && (n = this._get(o, "showAnim"), r = this._get(o, "duration"), i = function() {
                        e.datepicker._tidyDialog(o)
                    }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), r, i) : o.dpDiv[n === "slideDown" ? "slideUp" : n === "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
                },
                _tidyDialog: function(e) {
                    e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(t) {
                    if(!e.datepicker._curInst) return;
                    var n = e(t.target),
                        r = e.datepicker._getInst(n[0]);
                    (n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
                },
                _adjustDate: function(t, n, r) {
                    var i = e(t),
                        s = this._getInst(i[0]);
                    if(this._isDisabledDatepicker(i[0])) return;
                    this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s)
                },
                _gotoToday: function(t) {
                    var n, r = e(t),
                        i = this._getInst(r[0]);
                    this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
                },
                _selectMonthYear: function(t, n, r) {
                    var i = e(t),
                        s = this._getInst(i[0]);
                    s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
                },
                _selectDay: function(t, n, r, i) {
                    var s, o = e(t);
                    if(e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;
                    s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
                },
                _clearDate: function(t) {
                    var n = e(t);
                    this._selectDate(n, "")
                },
                _selectDate: function(t, n) {
                    var r, i = e(t),
                        s = this._getInst(i[0]);
                    n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null)
                },
                _updateAlternate: function(t) {
                    var n, r, i, s = this._get(t, "altField");
                    s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
                        e(this).val(i)
                    }))
                },
                noWeekends: function(e) {
                    var t = e.getDay();
                    return [t > 0 && t < 6, ""]
                },
                iso8601Week: function(e) {
                    var t, n = new Date(e.getTime());
                    return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
                },
                parseDate: function(t, n, r) {
                    if(t == null || n == null) throw "Invalid arguments";
                    n = typeof n == "object" ? n.toString() : n + "";
                    if(n === "") return null;
                    var i, s, o, u = 0,
                        a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                        f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                        l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                        c = (r ? r.dayNames : null) || this._defaults.dayNames,
                        h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                        p = (r ? r.monthNames : null) || this._defaults.monthNames,
                        d = -1,
                        v = -1,
                        m = -1,
                        g = -1,
                        y = !1,
                        b, w = function(e) {
                            var n = i + 1 < t.length && t.charAt(i + 1) === e;
                            return n && i++, n
                        },
                        E = function(e) {
                            var t = w(e),
                                r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
                                i = e === "y" ? r : 1,
                                s = new RegExp("^\\d{" + i + "," + r + "}"),
                                o = n.substring(u).match(s);
                            if(!o) throw "Missing number at position " + u;
                            return u += o[0].length, parseInt(o[0], 10)
                        },
                        S = function(t, r, i) {
                            var s = -1,
                                o = e.map(w(t) ? i : r, function(e, t) {
                                    return [
                                        [t, e]
                                    ]
                                }).sort(function(e, t) {
                                    return -(e[1].length - t[1].length)
                                });
                            e.each(o, function(e, t) {
                                var r = t[1];
                                if(n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return s = t[0], u += r.length, !1
                            });
                            if(s !== -1) return s + 1;
                            throw "Unknown name at position " + u
                        },
                        x = function() {
                            if(n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
                            u++
                        };
                    for(i = 0; i < t.length; i++)
                        if(y) t.charAt(i) === "'" && !w("'") ? y = !1 : x();
                        else switch(t.charAt(i)) {
                            case "d":
                                m = E("d");
                                break;
                            case "D":
                                S("D", l, c);
                                break;
                            case "o":
                                g = E("o");
                                break;
                            case "m":
                                v = E("m");
                                break;
                            case "M":
                                v = S("M", h, p);
                                break;
                            case "y":
                                d = E("y");
                                break;
                            case "@":
                                b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                                break;
                            case "!":
                                b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                                break;
                            case "'":
                                w("'") ? x() : y = !0;
                                break;
                            default:
                                x()
                        }
                        if(u < n.length) {
                            o = n.substr(u);
                            if(!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o
                        }
                    d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
                    if(g > -1) {
                        v = 1, m = g;
                        do {
                            s = this._getDaysInMonth(d, v - 1);
                            if(m <= s) break;
                            v++, m -= s
                        } while (!0)
                    }
                    b = this._daylightSavingAdjust(new Date(d, v - 1, m));
                    if(b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
                    return b
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
                formatDate: function(e, t, n) {
                    if(!t) return "";
                    var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                        s = (n ? n.dayNames : null) || this._defaults.dayNames,
                        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                        u = (n ? n.monthNames : null) || this._defaults.monthNames,
                        a = function(t) {
                            var n = r + 1 < e.length && e.charAt(r + 1) === t;
                            return n && r++, n
                        },
                        f = function(e, t, n) {
                            var r = "" + t;
                            if(a(e))
                                while(r.length < n) r = "0" + r;
                            return r
                        },
                        l = function(e, t, n, r) {
                            return a(e) ? r[t] : n[t]
                        },
                        c = "",
                        h = !1;
                    if(t)
                        for(r = 0; r < e.length; r++)
                            if(h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);
                            else switch(e.charAt(r)) {
                                case "d":
                                    c += f("d", t.getDate(), 2);
                                    break;
                                case "D":
                                    c += l("D", t.getDay(), i, s);
                                    break;
                                case "o":
                                    c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    c += f("m", t.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    c += l("M", t.getMonth(), o, u);
                                    break;
                                case "y":
                                    c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                    break;
                                case "@":
                                    c += t.getTime();
                                    break;
                                case "!":
                                    c += t.getTime() * 1e4 + this._ticksTo1970;
                                    break;
                                case "'":
                                    a("'") ? c += "'" : h = !0;
                                    break;
                                default:
                                    c += e.charAt(r)
                            }
                            return c
                },
                _possibleChars: function(e) {
                    var t, n = "",
                        r = !1,
                        i = function(n) {
                            var r = t + 1 < e.length && e.charAt(t + 1) === n;
                            return r && t++, r
                        };
                    for(t = 0; t < e.length; t++)
                        if(r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);
                        else switch(e.charAt(t)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                n += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                i("'") ? n += "'" : r = !0;
                                break;
                            default:
                                n += e.charAt(t)
                        }
                        return n
                },
                _get: function(e, t) {
                    return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
                },
                _setDateFromField: function(e, t) {
                    if(e.input.val() === e.lastVal) return;
                    var n = this._get(e, "dateFormat"),
                        r = e.lastVal = e.input ? e.input.val() : null,
                        i = this._getDefaultDate(e),
                        s = i,
                        o = this._getFormatConfig(e);
                    try {
                        s = this.parseDate(n, r, o) || i
                    } catch(u) {
                        r = t ? "" : r
                    }
                    e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
                },
                _getDefaultDate: function(e) {
                    return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
                },
                _determineDate: function(t, n, r) {
                    var i = function(e) {
                            var t = new Date;
                            return t.setDate(t.getDate() + e), t
                        },
                        s = function(n) {
                            try {
                                return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                            } catch(r) {}
                            var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date,
                                s = i.getFullYear(),
                                o = i.getMonth(),
                                u = i.getDate(),
                                a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                                f = a.exec(n);
                            while(f) {
                                switch(f[2] || "d") {
                                    case "d":
                                    case "D":
                                        u += parseInt(f[1], 10);
                                        break;
                                    case "w":
                                    case "W":
                                        u += parseInt(f[1], 10) * 7;
                                        break;
                                    case "m":
                                    case "M":
                                        o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                        break;
                                    case "y":
                                    case "Y":
                                        s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                                }
                                f = a.exec(n)
                            }
                            return new Date(s, o, u)
                        },
                        o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
                    return o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
                },
                _daylightSavingAdjust: function(e) {
                    return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
                },
                _setDate: function(e, t, n) {
                    var r = !t,
                        i = e.selectedMonth,
                        s = e.selectedYear,
                        o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                    e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
                },
                _getDate: function(e) {
                    var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                    return t
                },
                _attachHandlers: function(t) {
                    var n = this._get(t, "stepMonths"),
                        r = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function() {
                        var t = {
                            prev: function() {
                                e.datepicker._adjustDate(r, -n, "M")
                            },
                            next: function() {
                                e.datepicker._adjustDate(r, +n, "M")
                            },
                            hide: function() {
                                e.datepicker._hideDatepicker()
                            },
                            today: function() {
                                e.datepicker._gotoToday(r)
                            },
                            selectDay: function() {
                                return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                            },
                            selectMonth: function() {
                                return e.datepicker._selectMonthYear(r, this, "M"), !1
                            },
                            selectYear: function() {
                                return e.datepicker._selectMonthYear(r, this, "Y"), !1
                            }
                        };
                        e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(e) {
                    var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
                        R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                        U = this._get(e, "isRTL"),
                        z = this._get(e, "showButtonPanel"),
                        W = this._get(e, "hideIfNoPrevNext"),
                        X = this._get(e, "navigationAsDateFormat"),
                        V = this._getNumberOfMonths(e),
                        $ = this._get(e, "showCurrentAtPos"),
                        J = this._get(e, "stepMonths"),
                        K = V[0] !== 1 || V[1] !== 1,
                        Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                        G = this._getMinMaxDate(e, "min"),
                        Y = this._getMinMaxDate(e, "max"),
                        Z = e.drawMonth - $,
                        et = e.drawYear;
                    Z < 0 && (Z += 12, et--);
                    if(Y) {
                        t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;
                        while(this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--)
                    }
                    e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this.
                    _get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;
                    for(S = 0; S < V[0]; S++) {
                        x = "", this.maxRows = 4;
                        for(T = 0; T < V[1]; T++) {
                            N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";
                            if(K) {
                                k += "<div class='ui-datepicker-group";
                                if(V[1] > 1) switch(T) {
                                    case 0:
                                        k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                                        break;
                                    case V[1] - 1:
                                        k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                                        break;
                                    default:
                                        k += " ui-datepicker-group-middle", C = ""
                                }
                                k += "'>"
                            }
                            k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
                            for(E = 0; E < 7; E++) A = (E + l) % 7, L += "<th scope='col'" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                            k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
                            for(H = 0; H < D; H++) {
                                k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
                                for(E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                                k += B + "</tr>"
                            }
                            Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
                        }
                        w += x
                    }
                    return w += f, e._keyEvent = !1, w
                },
                _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
                    var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
                        g = this._get(e, "changeYear"),
                        y = this._get(e, "showMonthAfterYear"),
                        b = "<div class='ui-datepicker-title'>",
                        w = "";
                    if(s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                    else {
                        a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                        for(l = 0; l < 12; l++)(!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                        w += "</select>"
                    }
                    y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
                    if(!e.yearshtml) {
                        e.yearshtml = "";
                        if(s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                        else {
                            c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                                var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? h : t
                            }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                            for(; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                            e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                        }
                    }
                    return b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b
                },
                _adjustInstDate: function(e, t, n) {
                    var r = e.drawYear + (n === "Y" ? t : 0),
                        i = e.drawMonth + (n === "M" ? t : 0),
                        s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
                        o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
                    e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e)
                },
                _restrictMinMax: function(e, t) {
                    var n = this._getMinMaxDate(e, "min"),
                        r = this._getMinMaxDate(e, "max"),
                        i = n && t < n ? n : t;
                    return r && i > r ? r : i
                },
                _notifyChange: function(e) {
                    var t = this._get(e, "onChangeMonthYear");
                    t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
                },
                _getNumberOfMonths: function(e) {
                    var t = this._get(e, "numberOfMonths");
                    return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
                },
                _getMinMaxDate: function(e, t) {
                    return this._determineDate(e, this._get(e, t + "Date"), null)
                },
                _getDaysInMonth: function(e, t) {
                    return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
                },
                _getFirstDayOfMonth: function(e, t) {
                    return(new Date(e, t, 1)).getDay()
                },
                _canAdjustMonth: function(e, t, n, r) {
                    var i = this._getNumberOfMonths(e),
                        s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
                    return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
                },
                _isInRange: function(e, t) {
                    var n, r, i = this._getMinMaxDate(e, "min"),
                        s = this._getMinMaxDate(e, "max"),
                        o = null,
                        u = null,
                        a = this._get(e, "yearRange");
                    return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
                },
                _getFormatConfig: function(e) {
                    var t = this._get(e, "shortYearCutoff");
                    return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                        shortYearCutoff: t,
                        dayNamesShort: this._get(e, "dayNamesShort"),
                        dayNames: this._get(e, "dayNames"),
                        monthNamesShort: this._get(e, "monthNamesShort"),
                        monthNames: this._get(e, "monthNames")
                    }
                },
                _formatDate: function(e, t, n, r) {
                    t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                    var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                    return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
                }
            }), e.fn.datepicker = function(t) {
                if(!this.length) return this;
                e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
                var n = Array.prototype.slice.call(arguments, 1);
                return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
                    typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
                }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
            }, e.datepicker = new b, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.2";
            var x = e.datepicker,
                T = e.widget("ui.dialog", {
                    version: "1.11.2",
                    options: {
                        appendTo: "body",
                        autoOpen: !0,
                        buttons: [],
                        closeOnEscape: !0,
                        closeText: "Close",
                        dialogClass: "",
                        draggable: !0,
                        hide: null,
                        height: "auto",
                        maxHeight: null,
                        maxWidth: null,
                        minHeight: 150,
                        minWidth: 150,
                        modal: !1,
                        position: {
                            my: "center",
                            at: "center",
                            of: window,
                            collision: "fit",
                            using: function(t) {
                                var n = e(this).css(t).offset().top;
                                n < 0 && e(this).css("top", t.top - n)
                            }
                        },
                        resizable: !0,
                        show: null,
                        title: null,
                        width: 300,
                        beforeClose: null,
                        close: null,
                        drag: null,
                        dragStart: null,
                        dragStop: null,
                        focus: null,
                        open: null,
                        resize: null,
                        resizeStart: null,
                        resizeStop: null
                    },
                    sizeRelatedOptions: {
                        buttons: !0,
                        height: !0,
                        maxHeight: !0,
                        maxWidth: !0,
                        minHeight: !0,
                        minWidth: !0,
                        width: !0
                    },
                    resizableRelatedOptions: {
                        maxHeight: !0,
                        maxWidth: !0,
                        minHeight: !0,
                        minWidth: !0
                    },
                    _create: function() {
                        this.originalCss = {
                            display: this.element[0].style.display,
                            width: this.element[0].style.width,
                            minHeight: this.element[0].style.minHeight,
                            maxHeight: this.element[0].style.maxHeight,
                            height: this.element[0].style.height
                        }, this.originalPosition = {
                            parent: this.element.parent(),
                            index: this.element.parent().children().index(this.element)
                        }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                    },
                    _init: function() {
                        this.options.autoOpen && this.open()
                    },
                    _appendTo: function() {
                        var t = this.options.appendTo;
                        return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
                    },
                    _destroy: function() {
                        var e, t = this.originalPosition;
                        this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
                    },
                    widget: function() {
                        return this.uiDialog
                    },
                    disable: e.noop,
                    enable: e.noop,
                    close: function(t) {
                        var n, r = this;
                        if(!this._isOpen || this._trigger("beforeClose", t) === !1) return;
                        this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance();
                        if(!this.opener.filter(":focusable").focus().length) try {
                            n = this.document[0].activeElement, n && n.nodeName.toLowerCase() !== "body" && e(n).blur()
                        } catch(i) {}
                        this._hide(this.uiDialog, this.options.hide, function() {
                            r._trigger("close", t)
                        })
                    },
                    isOpen: function() {
                        return this._isOpen
                    },
                    moveToTop: function() {
                        this._moveToTop()
                    },
                    _moveToTop: function(t, n) {
                        var r = !1,
                            i = this.uiDialog.siblings(".ui-front:visible").map(function() {
                                return +e(this).css("z-index")
                            }).get(),
                            s = Math.max.apply(null, i);
                        return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), r = !0), r && !n && this._trigger("focus", t), r
                    },
                    open: function() {
                        var t = this;
                        if(this._isOpen) {
                            this._moveToTop() && this._focusTabbable();
                            return
                        }
                        this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                            t._focusTabbable(), t._trigger("focus")
                        }), this._makeFocusTarget(), this._trigger("open")
                    },
                    _focusTabbable: function() {
                        var e = this._focusedElement;
                        e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
                    },
                    _keepFocus: function(t) {
                        function n() {
                            var t = this.document[0].activeElement,
                                n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                            n || this._focusTabbable()
                        }
                        t.preventDefault(), n.call(this), this._delay(n)
                    },
                    _createWrapper: function() {
                        this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                            tabIndex: -1,
                            role: "dialog"
                        }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                            keydown: function(t) {
                                if(this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
                                    t.preventDefault(), this.close(t);
                                    return
                                }
                                if(t.keyCode !== e.ui.keyCode.TAB || t.isDefaultPrevented()) return;
                                var n = this.uiDialog.find(":tabbable"),
                                    r = n.filter(":first"),
                                    i = n.filter(":last");
                                t.target !== i[0] && t.target !== this.uiDialog[0] || !!t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (this._delay(function() {
                                    i.focus()
                                }), t.preventDefault()) : (this._delay(function() {
                                    r.focus()
                                }), t.preventDefault())
                            },
                            mousedown: function(e) {
                                this._moveToTop(e) && this._focusTabbable()
                            }
                        }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                            "aria-describedby": this.element.uniqueId().attr("id")
                        })
                    },
                    _createTitlebar: function() {
                        var t;
                        this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                            mousedown: function(t) {
                                e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                            }
                        }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                            label: this.options.closeText,
                            icons: {
                                primary: "ui-icon-closethick"
                            },
                            text: !1
                        }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                            click: function(e) {
                                e.preventDefault(), this.close(e)
                            }
                        }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                            "aria-labelledby": t.attr("id")
                        })
                    },
                    _title: function(e) {
                        this.options.title || e.html("&#160;"), e.text(this.options.title)
                    },
                    _createButtonPane: function() {
                        this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
                    },
                    _createButtons: function() {
                        var t = this,
                            n = this.options.buttons;
                        this.uiDialogButtonPane.remove(), this.uiButtonSet.empty();
                        if(e.isEmptyObject(n) || e.isArray(n) && !n.length) {
                            this.uiDialog.removeClass("ui-dialog-buttons");
                            return
                        }
                        e.each(n, function(n, r) {
                            var i, s;
                            r = e.isFunction(r) ? {
                                click: r,
                                text: n
                            } : r, r = e.extend({
                                type: "button"
                            }, r), i = r.click, r.click = function() {
                                i.apply(t.element[0], arguments)
                            }, s = {
                                icons: r.icons,
                                text: r.showText
                            }, delete r.icons, delete r.showText, e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
                        }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
                    },
                    _makeDraggable: function() {
                        function r(e) {
                            return {
                                position: e.position,
                                offset: e.offset
                            }
                        }
                        var t = this,
                            n = this.options;
                        this.uiDialog.draggable({
                            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                            handle: ".ui-dialog-titlebar",
                            containment: "document",
                            start: function(n, i) {
                                e(this).addClass("ui-dialog-dragging"), t._blockFrames(), t._trigger("dragStart", n, r(i))
                            },
                            drag: function(e, n) {
                                t._trigger("drag", e, r(n))
                            },
                            stop: function(i, s) {
                                var o = s.offset.left - t.document.scrollLeft(),
                                    u = s.offset.top - t.document.scrollTop();
                                n.position = {
                                    my: "left top",
                                    at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (u >= 0 ? "+" : "") + u,
                                    of: t.window
                                }, e(this).removeClass("ui-dialog-dragging"), t._unblockFrames(), t._trigger("dragStop", i, r(s))
                            }
                        })
                    },
                    _makeResizable: function() {
                        function o(e) {
                            return {
                                originalPosition: e.originalPosition,
                                originalSize: e.originalSize,
                                position: e.position,
                                size: e.size
                            }
                        }
                        var t = this,
                            n = this.options,
                            r = n.resizable,
                            i = this.uiDialog.css("position"),
                            s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";
                        this.uiDialog.resizable({
                            cancel: ".ui-dialog-content",
                            containment: "document",
                            alsoResize: this.element,
                            maxWidth: n.maxWidth,
                            maxHeight: n.maxHeight,
                            minWidth: n.minWidth,
                            minHeight: this._minHeight(),
                            handles: s,
                            start: function(n, r) {
                                e(this).addClass("ui-dialog-resizing"), t._blockFrames(), t._trigger("resizeStart", n, o(r))
                            },
                            resize: function(e, n) {
                                t._trigger("resize", e, o(n))
                            },
                            stop: function(r, i) {
                                var s = t.uiDialog.offset(),
                                    u = s.left - t.document.scrollLeft(),
                                    a = s.top - t.document.scrollTop();
                                n.height = t.uiDialog.height(), n.width = t.uiDialog.width(), n.position = {
                                    my: "left top",
                                    at: "left" + (u >= 0 ? "+" : "") + u + " " + "top" + (a >= 0 ? "+" : "") + a,
                                    of: t.window
                                }, e(this).removeClass("ui-dialog-resizing"), t._unblockFrames(), t._trigger("resizeStop", r, o(i))
                            }
                        }).css("position", i)
                    },
                    _trackFocus: function() {
                        this._on(this.widget(), {
                            focusin: function(t) {
                                this._makeFocusTarget(), this._focusedElement = e(t.target)
                            }
                        })
                    },
                    _makeFocusTarget: function() {
                        this._untrackInstance(), this._trackingInstances().unshift(this)
                    },
                    _untrackInstance: function() {
                        var t = this._trackingInstances(),
                            n = e.inArray(this, t);
                        n !== -1 && t.splice(n, 1)
                    },
                    _trackingInstances: function() {
                        var e = this.document.data("ui-dialog-instances");
                        return e || (e = [], this.document.data("ui-dialog-instances", e)), e
                    },
                    _minHeight: function() {
                        var e = this.options;
                        return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
                    },
                    _position: function() {
                        var e = this.uiDialog.is(":visible");
                        e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
                    },
                    _setOptions: function(t) {
                        var n = this,
                            r = !1,
                            i = {};
                        e.each(t, function(e, t) {
                            n._setOption(e, t), e in n.sizeRelatedOptions && (r = !0), e in n.resizableRelatedOptions && (i[e] = t)
                        }), r && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", i)
                    },
                    _setOption: function(e, t) {
                        var n, r, i = this.uiDialog;
                        e === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t);
                        if(e === "disabled") return;
                        this._super(e, t), e === "appendTo" && this.uiDialog.appendTo(this._appendTo()), e === "buttons" && this._createButtons(), e === "closeText" && this.uiDialogTitlebarClose.button({
                            label: "" + t
                        }), e === "draggable" && (n = i.is(":data(ui-draggable)"), n && !t && i.draggable("destroy"), !n && t && this._makeDraggable()), e === "position" && this._position(), e === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), !r && t !== !1 && this._makeResizable()), e === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
                    },
                    _size: function() {
                        var e, t, n, r = this.options;
                        this.element.show().css({
                            width: "auto",
                            minHeight: 0,
                            maxHeight: "none",
                            height: 0
                        }), r.minWidth > r.width && (r.width = r.minWidth), e = this.uiDialog.css({
                            height: "auto",
                            width: r.width
                        }).outerHeight(), t = Math.max(0, r.minHeight - e), n = typeof r.maxHeight == "number" ? Math.max(0, r.maxHeight - e) : "none", r.height === "auto" ? this.element.css({
                            minHeight: t,
                            maxHeight: n,
                            height: "auto"
                        }) : this.element.height(Math.max(0, r.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                    },
                    _blockFrames: function() {
                        this.iframeBlocks = this.document.find("iframe").map(function() {
                            var t = e(this);
                            return e("<div>").css({
                                position: "absolute",
                                width: t.outerWidth(),
                                height: t.outerHeight()
                            }).appendTo(t.parent()).offset(t.offset())[0]
                        })
                    },
                    _unblockFrames: function() {
                        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                    },
                    _allowInteraction: function(t) {
                        return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
                    },
                    _createOverlay: function() {
                        if(!this.options.modal) return;
                        var t = !0;
                        this._delay(function() {
                            t = !1
                        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                            focusin: function(e) {
                                if(t) return;
                                this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                            }
                        }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    },
                    _destroyOverlay: function() {
                        if(!this.options.modal) return;
                        if(this.overlay) {
                            var e = this.document.data("ui-dialog-overlays") - 1;
                            e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                        }
                    }
                })
        }),
        function(e) {
            typeof r == "function" && r.amd ? r("jquery.xdomainrequest", ["jquery"], e) : typeof exports == "object" ? module.exports = e(n("jquery")) : e(jQuery)
        }(function(e) {
            if(e.support.cors || !e.ajaxTransport || !window.XDomainRequest) return;
            var t = /^https?:\/\//i,
                n = /^get|post$/i,
                r = new RegExp("^" + location.protocol, "i");
            e.ajaxTransport("* text html xml json", function(i, s, u) {
                if(!i.crossDomain || !i.async || !n.test(i.type) || !t.test(i.url) || !r.test(i.url)) return;
                var a = null;
                return {
                    send: function(t, n) {
                        var r = "",
                            o = (s.dataType || "").toLowerCase();
                        a = new XDomainRequest, /^\d+$/.test(s.timeout) && (a.timeout = s.timeout), a.ontimeout = function() {
                            n(500, "timeout")
                        }, a.onload = function() {
                            var t = "Content-Length: " + a.responseText.length + "\r\nContent-Type: " + a.contentType,
                                r = {
                                    code: 200,
                                    message: "success"
                                },
                                i = {
                                    text: a.responseText
                                };
                            try {
                                if(o === "html" || /text\/html/i.test(a.contentType)) i.html = a.responseText;
                                else if(o === "json" || o !== "text" && /\/json/i.test(a.contentType)) try {
                                    i.json = e.parseJSON(a.responseText)
                                } catch(s) {
                                    r.code = 500, r.message = "parseerror"
                                } else if(o === "xml" || o !== "text" && /\/xml/i.test(a.contentType)) {
                                    var u = new ActiveXObject("Microsoft.XMLDOM");
                                    u.async = !1;
                                    try {
                                        u.loadXML(a.responseText)
                                    } catch(s) {
                                        u = undefined
                                    }
                                    if(!u || !u.documentElement || u.getElementsByTagName("parsererror").length) throw r.code = 500, r.message = "parseerror", "Invalid XML: " + a.responseText;
                                    i.xml = u
                                }
                            } catch(f) {
                                throw f
                            } finally {
                                n(r.code, r.message, i, t)
                            }
                        }, a.onprogress = function() {}, a.onerror = function() {
                            n(500, "error", {
                                text: a.responseText
                            })
                        }, s.data && (r = e.type(s.data) === "string" ? s.data : e.param(s.data)), a.open(i.type, i.url), a.send(r)
                    },
                    abort: function() {
                        a && a.abort()
                    }
                }
            })
        }), r("browser-type", [], function() {
            return function() {
                function e() {
                    var e = navigator.userAgent,
                        t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
                        n = e.match(/\b(OPR|Edge)\/(\d+)/);
                    return /trident/i.test(t[1]) ? "ie" : t[1] === "Chrome" && n ? n[1].replace("OPR", "Opera") : t[1] || [navigator.appName] || null
                }
                var t = e() && "citizens-".concat(e()) || null,
                    n = document.documentElement;
                t && (n.className += " " + t)
            }()
        }), r("css", [], function() {
            return {
                getVendorCSS: function(e) {
                    var t = '\n<link rel="stylesheet" type="text/css" href="' + e.config.ASSET_URL + "/css/" + e.vendor + (e.settings.useVendorUrlParam && e.settings.vendorUrlParam ? "-" + e.settings.vendorUrlParam : "") + (e.settings.useCustomerType ? "-" + e.settings.userData.customerType.toLowerCase() : "") + '.min.44438.css">';
                    return t += '\n<!--[if IE 8]><link rel="stylesheet" type="text/css" href="' + e.config.ASSET_URL + "/css/" + e.vendor + (e.settings.useVendorUrlParam && e.settings.vendorUrlParam ? "-" + e.settings.vendorUrlParam : "") + (e.settings.useCustomerType ? "-" + e.settings.userData.customerType.toLowerCase() : "") + "-ie8.min.44438.css?refresh=" + (new Date).getTime() + '"><![endif]-->', t
                },
                getMainCSS: function(e) {
                    var t = '\n<link rel="stylesheet" type="text/css" href="' + e.ASSET_URL + '/css/main.min.44438.css">';
                    return t += "\n<style>.page-header .centered-content{width: auto;}</style>", t
                },
                getCoreHHFCSS: function(e) {
                    return '\n<link rel="stylesheet" type="text/css" href="' + e.ASSET_URL + '/css/hhf.min.44438.css">'
                },
                getLibsCSS: function(e) {
                    return '\n<link rel="stylesheet" type="text/css" href="' + e.ASSET_URL + '/css/libs.min.44438.css">'
                }
            }
        }), r("config-error", [], function() {
            return {
                STATUS_CODES: {
                    0: "connection refused",
                    404: "service not found",
                    500: "internal error",
                    503: "service unavailable"
                },
                MESSAGES: {
                    invalidToken: {
                        type: "error",
                        msg: "Invalid token."
                    },
                    invalidZipCode: {
                        type: "error",
                        msg: "Invalid zip code."
                    },
                    blankZipCodeField: {
                        type: "error",
                        msg: "Please enter City, State or Zip."
                    },
                    helpNavigationUnavailable: {
                        type: "error",
                        msg: ""
                    },
                    helpContentUnavailable: {
                        type: "error",
                        msg: "We are unable to display the Help page you requested at this time. Please try again later."
                    }
                }
            }
        }), r("config-topics", [], function() {
            return {
                SUBSCRIBER_TOPIC: function(e) {
                    var t = {
                        "xauth-webui": "XAUTH-TOKEN-WEBUI",
                        "xauth-hhf": "XAUTH-TOKEN-HHF",
                        logout: "LOGOUT",
                        timeout: "TIMEOUT",
                        logoutClick: "LOGOUT_CLICK"
                    };
                    return t[e] ? t[e] : null
                }
            }
        }),
        function(e, t) {
            if(typeof r == "function" && r.amd) r("backbone", ["underscore", "jquery", "exports"], function(n, r, i) {
                e.Backbone = t(e, i, n, r)
            });
            else if(typeof exports != "undefined") {
                var i = n("underscore");
                t(e, exports, i)
            } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
        }(this, function(e, t, n, r) {
            var i = e.Backbone,
                s = [],
                o = s.push,
                u = s.slice,
                a = s.splice;
            t.VERSION = "1.1.2", t.$ = r, t.noConflict = function() {
                return e.Backbone = i, this
            }, t.emulateHTTP = !1, t.emulateJSON = !1;
            var f = t.Events = {
                    on: function(e, t, n) {
                        if(!c(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var r = this._events[e] || (this._events[e] = []);
                        return r.push({
                            callback: t,
                            context: n,
                            ctx: n || this
                        }), this
                    },
                    once: function(e, t, r) {
                        if(!c(this, "once", e, [t, r]) || !t) return this;
                        var i = this,
                            s = n.once(function() {
                                i.off(e, s), t.apply(this, arguments)
                            });
                        return s._callback = t, this.on(e, s, r)
                    },
                    off: function(e, t, r) {
                        var i, s, o, u, a, f, l, h;
                        if(!this._events || !c(this, "off", e, [t, r])) return this;
                        if(!e && !t && !r) return this._events = void 0, this;
                        u = e ? [e] : n.keys(this._events);
                        for(a = 0, f = u.length; a < f; a++) {
                            e = u[a];
                            if(o = this._events[e]) {
                                this._events[e] = i = [];
                                if(t || r)
                                    for(l = 0, h = o.length; l < h; l++) s = o[l], (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
                                i.length || delete this._events[e]
                            }
                        }
                        return this
                    },
                    trigger: function(e) {
                        if(!this._events) return this;
                        var t = u.call(arguments, 1);
                        if(!c(this, "trigger", e, t)) return this;
                        var n = this._events[e],
                            r = this._events.all;
                        return n && h(n, t), r && h(r, arguments), this
                    },
                    stopListening: function(e, t, r) {
                        var i = this._listeningTo;
                        if(!i) return this;
                        var s = !t && !r;
                        !r && typeof t == "object" && (r = this), e && ((i = {})[e._listenId] = e);
                        for(var o in i) e = i[o], e.off(t, r, this), (s || n.isEmpty(e._events)) && delete this._listeningTo[o];
                        return this
                    }
                },
                l = /\s+/,
                c = function(e, t, n, r) {
                    if(!n) return !0;
                    if(typeof n == "object") {
                        for(var i in n) e[t].apply(e, [i, n[i]].concat(r));
                        return !1
                    }
                    if(l.test(n)) {
                        var s = n.split(l);
                        for(var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                        return !1
                    }
                    return !0
                },
                h = function(e, t) {
                    var n, r = -1,
                        i = e.length,
                        s = t[0],
                        o = t[1],
                        u = t[2];
                    switch(t.length) {
                        case 0:
                            while(++r < i)(n = e[r]).callback.call(n.ctx);
                            return;
                        case 1:
                            while(++r < i)(n = e[r]).callback.call(n.ctx, s);
                            return;
                        case 2:
                            while(++r < i)(n = e[r]).callback.call(n.ctx, s, o);
                            return;
                        case 3:
                            while(++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
                            return;
                        default:
                            while(++r < i)(n = e[r]).callback.apply(n.ctx, t);
                            return
                    }
                },
                p = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            n.each(p, function(e, t) {
                f[t] = function(t, r, i) {
                    var s = this._listeningTo || (this._listeningTo = {}),
                        o = t._listenId || (t._listenId = n.uniqueId("l"));
                    return s[o] = t, !i && typeof r == "object" && (i = this), t[e](r, i, this), this
                }
            }), f.bind = f.on, f.unbind = f.off, n.extend(t, f);
            var d = t.Model = function(e, t) {
                var r = e || {};
                t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            n.extend(d.prototype, f, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(e) {
                    return n.clone(this.attributes)
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                get: function(e) {
                    return this.attributes[e]
                },
                escape: function(e) {
                    return n.escape(this.get(e))
                },
                has: function(e) {
                    return this.get(e) != null
                },
                set: function(e, t, r) {
                    var i, s, o, u, a, f, l, c;
                    if(e == null) return this;
                    typeof e == "object" ? (s = e, r = t) : (s = {})[e] = t, r || (r = {});
                    if(!this._validate(s, r)) return !1;
                    o = r.unset, a = r.silent, u = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
                    for(i in s) t = s[i], n.isEqual(c[i], t) || u.push(i), n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t, o ? delete c[i] : c[i] = t;
                    if(!a) {
                        u.length && (this._pending = r);
                        for(var h = 0, p = u.length; h < p; h++) this.trigger("change:" + u[h], this, c[u[h]], r)
                    }
                    if(f) return this;
                    if(!a)
                        while(this._pending) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(e, t) {
                    return this.set(e, void 0, n.extend({}, t, {
                        unset: !0
                    }))
                },
                clear: function(e) {
                    var t = {};
                    for(var r in this.attributes) t[r] = void 0;
                    return this.set(t, n.extend({}, e, {
                        unset: !0
                    }))
                },
                hasChanged: function(e) {
                    return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
                },
                changedAttributes: function(e) {
                    if(!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                    var t, r = !1,
                        i = this._changing ? this._previousAttributes : this.attributes;
                    for(var s in e) {
                        if(n.isEqual(i[s], t = e[s])) continue;
                        (r || (r = {}))[s] = t
                    }
                    return r
                },
                previous: function(e) {
                    return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
                },
                previousAttributes: function() {
                    return n.clone(this._previousAttributes)
                },
                fetch: function(e) {
                    e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                    var t = this,
                        r = e.success;
                    return e.success = function(n) {
                        if(!t.set(t.parse(n, e), e)) return !1;
                        r && r(t, n, e), t.trigger("sync", t, n, e)
                    }, I(this, e), this.sync("read", this, e)
                },
                save: function(e, t, r) {
                    var i, s, o, u = this.attributes;
                    e == null || typeof e == "object" ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
                        validate: !0
                    }, r);
                    if(i && !r.wait) {
                        if(!this.set(i, r)) return !1
                    } else if(!this._validate(i, r)) return !1;
                    i && r.wait && (this.attributes = n.extend({}, u, i)), r.parse === void 0 && (r.parse = !0);
                    var a = this,
                        f = r.success;
                    return r.success = function(e) {
                        a.attributes = u;
                        var t = a.parse(e, r);
                        r.wait && (t = n.extend(i || {}, t));
                        if(n.isObject(t) && !a.set(t, r)) return !1;
                        f && f(a, e, r), a.trigger("sync", a, e, r)
                    }, I(this, r), s = this.isNew() ? "create" : r.patch ? "patch" : "update", s === "patch" && (r.attrs = i), o = this.sync(s, this, r), i && r.wait && (this.attributes = u), o
                },
                destroy: function(e) {
                    e = e ? n.clone(e) : {};
                    var t = this,
                        r = e.success,
                        i = function() {
                            t.trigger("destroy", t, t.collection, e)
                        };
                    e.success = function(n) {
                        (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    };
                    if(this.isNew()) return e.success(), !1;
                    I(this, e);
                    var s = this.sync("delete", this, e);
                    return e.wait || i(), s
                },
                url: function() {
                    var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                    return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return !this.has(this.idAttribute)
                },
                isValid: function(e) {
                    return this._validate({}, n.extend(e || {}, {
                        validate: !0
                    }))
                },
                _validate: function(e, t) {
                    if(!t.validate || !this.validate) return !0;
                    e = n.extend({}, this.attributes, e);
                    var r = this.validationError = this.validate(e, t) || null;
                    return r ? (this.trigger("invalid", this, r, n.extend(t, {
                        validationError: r
                    })), !1) : !0
                }
            });
            var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
            n.each(v, function(e) {
                d.prototype[e] = function() {
                    var t = u.call(arguments);
                    return t.unshift(this.attributes), n[e].apply(n, t)
                }
            });
            var m = t.Collection = function(e, t) {
                    t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                        silent: !0
                    }, t))
                },
                g = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                y = {
                    add: !0,
                    remove: !1
                };
            n.extend(m.prototype, f, {
                model: d,
                initialize: function() {},
                toJSON: function(e) {
                    return this.map(function(t) {
                        return t.toJSON(e)
                    })
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                add: function(e, t) {
                    return this.set(e, n.extend({
                        merge: !1
                    }, t, y))
                },
                remove: function(e, t) {
                    var r = !n.isArray(e);
                    e = r ? [e] : n.clone(e), t || (t = {});
                    var i, s, o, u;
                    for(i = 0, s = e.length; i < s; i++) {
                        u = e[i] = this.get(e[i]);
                        if(!u) continue;
                        delete this._byId[u.id], delete this._byId[u.cid], o = this.indexOf(u), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, u.trigger("remove", u, this, t)), this._removeReference(u, t)
                    }
                    return r ? e[0] : e
                },
                set: function(e, t) {
                    t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                    var r = !n.isArray(e);
                    e = r ? e ? [e] : [] : n.clone(e);
                    var i, s, o, u, a, f, l, c = t.at,
                        h = this.model,
                        p = this.comparator && c == null && t.sort !== !1,
                        v = n.isString(this.comparator) ? this.comparator : null,
                        m = [],
                        y = [],
                        b = {},
                        w = t.add,
                        E = t.merge,
                        S = t.remove,
                        x = !p && w && S ? [] : !1;
                    for(i = 0, s = e.length; i < s; i++) {
                        a = e[i] || {}, a instanceof d ? o = u = a : o = a[h.prototype.idAttribute || "id"];
                        if(f = this.get(o)) S && (b[f.cid] = !0), E && (a = a === u ? u.attributes : a, t.parse && (a = f.parse(a, t)), f.set(a, t), p && !l && f.hasChanged(v) && (l = !0)), e[i] = f;
                        else if(w) {
                            u = e[i] = this._prepareModel(a, t);
                            if(!u) continue;
                            m.push(u), this._addReference(u, t)
                        }
                        u = f || u, x && (u.isNew() || !b[u.id]) && x.push(u), b[u.id] = !0
                    }
                    if(S) {
                        for(i = 0, s = this.length; i < s; ++i) b[(u = this.models[i]).cid] || y.push(u);
                        y.length && this.remove(y, t)
                    }
                    if(m.length || x && x.length) {
                        p && (l = !0), this.length += m.length;
                        if(c != null)
                            for(i = 0, s = m.length; i < s; i++) this.models.splice(c + i, 0, m[i]);
                        else {
                            x && (this.models.length = 0);
                            var T = x || m;
                            for(i = 0, s = T.length; i < s; i++) this.models.push(T[i])
                        }
                    }
                    l && this.sort({
                        silent: !0
                    });
                    if(!t.silent) {
                        for(i = 0, s = m.length; i < s; i++)(u = m[i]).trigger("add", u, this, t);
                        (l || x && x.length) && this.trigger("sort", this, t)
                    }
                    return r ? e[0] : e
                },
                reset: function(e, t) {
                    t || (t = {});
                    for(var r = 0, i = this.models.length; r < i; r++) this._removeReference(this.models[r], t);
                    return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                        silent: !0
                    }, t)), t.silent || this.trigger("reset", this, t), e
                },
                push: function(e, t) {
                    return this.add(e, n.extend({
                        at: this.length
                    }, t))
                },
                pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e), t
                },
                unshift: function(e, t) {
                    return this.add(e, n.extend({
                        at: 0
                    }, t))
                },
                shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e), t
                },
                slice: function() {
                    return u.apply(this.models, arguments)
                },
                get: function(e) {
                    return e == null ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
                },
                at: function(e) {
                    return this.models[e]
                },
                where: function(e, t) {
                    return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                        for(var n in e)
                            if(e[n] !== t.get(n)) return !1;
                        return !0
                    })
                },
                findWhere: function(e) {
                    return this.where(e, !0)
                },
                sort: function(e) {
                    if(!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}), n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
                },
                pluck: function(e) {
                    return n.invoke(this.models, "get", e)
                },
                fetch: function(e) {
                    e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                    var t = e.success,
                        r = this;
                    return e.success = function(n) {
                        var i = e.reset ? "reset" : "set";
                        r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
                    }, I(this, e), this.sync("read", this, e)
                },
                create: function(e, t) {
                    t = t ? n.clone(t) : {};
                    if(!(e = this._prepareModel(e, t))) return !1;
                    t.wait || this.add(e, t);
                    var r = this,
                        i = t.success;
                    return t.success = function(e, n) {
                        t.wait && r.add(e, t), i && i(e, n, t)
                    }, e.save(null, t), e
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
                },
                _prepareModel: function(e, t) {
                    if(e instanceof d) return e;
                    t = t ? n.clone(t) : {}, t.collection = this;
                    var r = new this.model(e, t);
                    return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
                },
                _addReference: function(e, t) {
                    this._byId[e.cid] = e, e.id != null && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
                },
                _removeReference: function(e, t) {
                    this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(e, t, n, r) {
                    if((e === "add" || e === "remove") && n !== this) return;
                    e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
                }
            });
            var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
            n.each(b, function(e) {
                m.prototype[e] = function() {
                    var t = u.call(arguments);
                    return t.unshift(this.models), n[e].apply(n, t)
                }
            });
            var w = ["groupBy", "countBy", "sortBy", "indexBy"];
            n.each(w, function(e) {
                m.prototype[e] = function(t, r) {
                    var i = n.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    };
                    return n[e](this.models, i, r)
                }
            });
            var E = t.View = function(e) {
                    this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                S = /^(\S+)\s*(.*)$/,
                x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(E.prototype, f, {
                tagName: "div",
                $: function(e) {
                    return this.$el.find(e)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(e, n) {
                    return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(e) {
                    if(!e && !(e = n.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for(var t in e) {
                        var r = e[t];
                        n.isFunction(r) || (r = this[e[t]]);
                        if(!r) continue;
                        var i = t.match(S),
                            s = i[1],
                            o = i[2];
                        r = n.bind(r, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
                    }
                    return this
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
                },
                _ensureElement: function() {
                    if(!this.el) {
                        var e = n.extend({}, n.result(this, "attributes"));
                        this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                        var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                        this.setElement(r, !1)
                    } else this.setElement(n.result(this, "el"), !1)
                }
            }), t.sync = function(e, r, i) {
                var s = N[e];
                n.defaults(i || (i = {}), {
                    emulateHTTP: t.emulateHTTP,
                    emulateJSON: t.emulateJSON
                });
                var o = {
                    type: s,
                    dataType: "json"
                };
                i.url || (o.url = n.result(r, "url") || F()), i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                    model: o.data
                } : {});
                if(i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
                    o.type = "POST", i.emulateJSON && (o.data._method = s);
                    var u = i.beforeSend;
                    i.beforeSend = function(e) {
                        e.setRequestHeader("X-HTTP-Method-Override", s);
                        if(u) return u.apply(this, arguments)
                    }
                }
                o.type !== "GET" && !i.emulateJSON && (o.processData = !1), o.type === "PATCH" && T && (o.xhr = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var a = i.xhr = t.ajax(n.extend(o, i));
                return r.trigger("request", r, a, i), a
            };
            var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent),
                N = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    "delete": "DELETE",
                    read: "GET"
                };
            t.ajax = function() {
                return t.$.ajax.apply(t.$, arguments)
            };
            var C = t.Router = function(e) {
                    e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                k = /\((.*?)\)/g,
                L = /(\(\?)?:\w+/g,
                A = /\*\w+/g,
                O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            n.extend(C.prototype, f, {
                initialize: function() {},
                route: function(e, r, i) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                    var s = this;
                    return t.history.route(e, function(n) {
                        var o = s._extractParameters(e, n);
                        s.execute(i, o), s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), t.history.trigger("route", s, r, o)
                    }), this
                },
                execute: function(e, t) {
                    e && e.apply(this, t)
                },
                navigate: function(e, n) {
                    return t.history.navigate(e, n), this
                },
                _bindRoutes: function() {
                    if(!this.routes) return;
                    this.routes = n.result(this, "routes");
                    var e, t = n.keys(this.routes);
                    while((e = t.pop()) != null) this.route(e, this.routes[e])
                },
                _routeToRegExp: function(e) {
                    return e = e.replace(O, "\\$&").replace(k, "(?:$1)?").replace(L, function(e, t) {
                        return t ? e : "([^/?]+)"
                    }).replace(A, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                },
                _extractParameters: function(e, t) {
                    var r = e.exec(t).slice(1);
                    return n.map(r, function(e, t) {
                        return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                    })
                }
            });
            var M = t.History = function() {
                    this.handlers = [], n.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
                },
                _ = /^[#\/]|\s+$/g,
                D = /^\/+|\/+$/g,
                P = /msie [\w.]+/,
                H = /\/$/,
                B = /#.*$/;
            M.started = !1, n.extend(M.prototype, f, {
                interval: 50,
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                },
                getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                },
                getFragment: function(e, t) {
                    if(e == null)
                        if(this._hasPushState || !this._wantsHashChange || t) {
                            e = decodeURI(this.location.pathname + this.location.search);
                            var n = this.root.replace(H, "");
                            e.indexOf(n) || (e = e.slice(n.length))
                        } else e = this.getHash();
                    return e.replace(_, "")
                },
                start: function(e) {
                    if(M.started) throw new Error("Backbone.history has already been started");
                    M.started = !0, this.options = n.extend({
                        root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var r = this.getFragment(),
                        i = document.documentMode,
                        s = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
                    this.root = ("/" + this.root + "/").replace(D, "/");
                    if(s && this._wantsHashChange) {
                        var o = t.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = o.hide().appendTo("body")[0].contentWindow, this.navigate(r)
                    }
                    this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
                    var u = this.location;
                    if(this._wantsHashChange && this._wantsPushState) {
                        if(!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                        this._hasPushState && this.atRoot() && u.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    if(!this.options.silent) return this.loadUrl()
                },
                stop: function() {
                    t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), M.started = !1
                },
                route: function(e, t) {
                    this.handlers.unshift({
                        route: e,
                        callback: t
                    })
                },
                checkUrl: function(e) {
                    var t = this.getFragment();
                    t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                    if(t === this.fragment) return !1;
                    this.iframe && this.navigate(t), this.loadUrl()
                },
                loadUrl: function(e) {
                    return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                        if(t.route.test(e)) return t.callback(e), !0
                    })
                },
                navigate: function(e, t) {
                    if(!M.started) return !1;
                    if(!t || t === !0) t = {
                        trigger: !!t
                    };
                    var n = this.root + (e = this.getFragment(e || ""));
                    e = e.replace(B, "");
                    if(this.fragment === e) return;
                    this.fragment = e, e === "" && n !== "/" && (n = n.slice(0, -1));
                    if(this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if(!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    if(t.trigger) return this.loadUrl(e)
                },
                _updateHash: function(e, t, n) {
                    if(n) {
                        var r = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(r + "#" + t)
                    } else e.hash = "#" + t
                }
            }), t.history = new M;
            var j = function(e, t) {
                var r = this,
                    i;
                e && n.has(e, "constructor") ? i = e.constructor : i = function() {
                    return r.apply(this, arguments)
                }, n.extend(i, r, t);
                var s = function() {
                    this.constructor = i
                };
                return s.prototype = r.prototype, i.prototype = new s, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
            };
            d.extend = m.extend = C.extend = E.extend = M.extend = j;
            var F = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                I = function(e, t) {
                    var n = t.error;
                    t.error = function(r) {
                        n && n(e, r, t), e.trigger("error", e, r, t)
                    }
                };
            return t
        }), r("hhfbackbone", ["require", "backbone"], function(e) {
            var t = e("backbone"),
                n = {
                    Model: t.Model.extend({}),
                    View: t.View.extend({
                        events: {},
                        template: function() {},
                        initialize: function() {
                            this.subViewList = {}
                        },
                        subViewList: {},
                        clearListeners: function() {
                            this.subViewList && _.each(this.subViewList, function(e) {
                                e.clearListeners()
                            }), this.undelegateEvents(), this.stopListening()
                        },
                        emptyView: function() {
                            this.subViewList && _.each(this.subViewList, function(e) {
                                e.emptyView()
                            }), this.$el.empty(), this.stopListening()
                        },
                        remove: function() {
                            this.subViewList && _.each(this.subViewList, function(e) {
                                e.remove()
                            }), this.$el.remove(), this.stopListening()
                        }
                    }),
                    Collection: t.Collection.extend({}),
                    Router: t.Router.extend({}),
                    History: t.History.extend({})
                };
            return n
        }),
        function(e) {
            function rt(e, t, n) {
                switch(arguments.length) {
                    case 2:
                        return e != null ? e : t;
                    case 3:
                        return e != null ? e : t != null ? t : n;
                    default:
                        throw new Error("Implement me")
                }
            }

            function it(e, t) {
                return a.call(e, t)
            }

            function st() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function ot(e) {
                t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e)
            }

            function ut(e, t) {
                var n = !0;
                return dt(function() {
                    return n && (ot(e), n = !1), t.apply(this, arguments)
                }, t)
            }

            function at(e, t) {
                tt[e] || (ot(t), tt[e] = !0)
            }

            function ft(e, t) {
                return function(n) {
                    return gt(e.call(this, n), t)
                }
            }

            function lt(e, t) {
                return function(n) {
                    return this.localeData().ordinal(e.call(this, n), t)
                }
            }

            function ct() {}

            function ht(e, t) {
                t !== !1 && Dt(e), vt(this, e), this._d = new Date(+e._d)
            }

            function pt(e) {
                var n = Ct(e),
                    r = n.year || 0,
                    i = n.quarter || 0,
                    s = n.month || 0,
                    o = n.week || 0,
                    u = n.day || 0,
                    a = n.hour || 0,
                    f = n.minute || 0,
                    l = n.second || 0,
                    c = n.millisecond || 0;
                this._milliseconds = +c + l * 1e3 + f * 6e4 + a * 36e5, this._days = +u + o * 7, this._months = +s + i * 3 + r * 12, this._data = {}, this._locale = t.localeData(), this._bubble()
            }

            function dt(e, t) {
                for(var n in t) it(t, n) && (e[n] = t[n]);
                return it(t, "toString") && (e.toString = t.toString), it(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function vt(e, t) {
                var n, r, i;
                typeof t._isAMomentObject != "undefined" && (e._isAMomentObject = t._isAMomentObject), typeof t._i != "undefined" && (e._i = t._i), typeof
                t._f != "undefined" && (e._f = t._f), typeof t._l != "undefined" && (e._l = t._l), typeof t._strict != "undefined" && (e._strict = t._strict), typeof t._tzm != "undefined" && (e._tzm = t._tzm), typeof t._isUTC != "undefined" && (e._isUTC = t._isUTC), typeof t._offset != "undefined" && (e._offset = t._offset), typeof t._pf != "undefined" && (e._pf = t._pf), typeof t._locale != "undefined" && (e._locale = t._locale);
                if(y.length > 0)
                    for(n in y) r = y[n], i = t[r], typeof i != "undefined" && (e[r] = i);
                return e
            }

            function mt(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }

            function gt(e, t, n) {
                var r = "" + Math.abs(e),
                    i = e >= 0;
                while(r.length < t) r = "0" + r;
                return(i ? n ? "+" : "" : "-") + r
            }

            function yt(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function bt(e, t) {
                var n;
                return t = Ft(t, e), e.isBefore(t) ? n = yt(e, t) : (n = yt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
            }

            function wt(e, n) {
                return function(r, i) {
                    var s, o;
                    return i !== null && !isNaN(+i) && (at(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period)."), o = r, r = i, i = o), r = typeof r == "string" ? +r : r, s = t.duration(r, i), Et(this, s, e), this
                }
            }

            function Et(e, n, r, i) {
                var s = n._milliseconds,
                    o = n._days,
                    u = n._months;
                i = i == null ? !0 : i, s && e._d.setTime(+e._d + s * r), o && mn(e, "Date", vn(e, "Date") + o * r), u && dn(e, vn(e, "Month") + u * r), i && t.updateOffset(e, o || u)
            }

            function St(e) {
                return Object.prototype.toString.call(e) === "[object Array]"
            }

            function xt(e) {
                return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
            }

            function Tt(e, t, n) {
                var r = Math.min(e.length, t.length),
                    i = Math.abs(e.length - t.length),
                    s = 0,
                    o;
                for(o = 0; o < r; o++)(n && e[o] !== t[o] || !n && Lt(e[o]) !== Lt(t[o])) && s++;
                return s + i
            }

            function Nt(e) {
                if(e) {
                    var t = e.toLowerCase().replace(/(.)s$/, "$1");
                    e = J[e] || K[t] || t
                }
                return e
            }

            function Ct(e) {
                var t = {},
                    n, r;
                for(r in e) it(e, r) && (n = Nt(r), n && (t[n] = e[r]));
                return t
            }

            function kt(n) {
                var r, i;
                if(n.indexOf("week") === 0) r = 7, i = "day";
                else {
                    if(n.indexOf("month") !== 0) return;
                    r = 12, i = "month"
                }
                t[n] = function(s, o) {
                    var u, a, f = t._locale[n],
                        l = [];
                    typeof s == "number" && (o = s, s = e), a = function(e) {
                        var n = t().utc().set(i, e);
                        return f.call(t._locale, n, s || "")
                    };
                    if(o != null) return a(o);
                    for(u = 0; u < r; u++) l.push(a(u));
                    return l
                }
            }

            function Lt(e) {
                var t = +e,
                    n = 0;
                return t !== 0 && isFinite(t) && (t >= 0 ? n = Math.floor(t) : n = Math.ceil(t)), n
            }

            function At(e, t) {
                return(new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
            }

            function Ot(e, n, r) {
                return ln(t([e, 11, 31 + n - r]), n, r).week
            }

            function Mt(e) {
                return _t(e) ? 366 : 365
            }

            function _t(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }

            function Dt(e) {
                var t;
                e._a && e._pf.overflow === -2 && (t = e._a[c] < 0 || e._a[c] > 11 ? c : e._a[h] < 1 || e._a[h] > At(e._a[l], e._a[c]) ? h : e._a[p] < 0 || e._a[p] > 24 || e._a[p] === 24 && (e._a[d] !== 0 || e._a[v] !== 0 || e._a[m] !== 0) ? p : e._a[d] < 0 || e._a[d] > 59 ? d : e._a[v] < 0 || e._a[v] > 59 ? v : e._a[m] < 0 || e._a[m] > 999 ? m : -1, e._pf._overflowDayOfYear && (t < l || t > h) && (t = h), e._pf.overflow = t)
            }

            function Pt(t) {
                return t._isValid == null && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && t._pf.charsLeftOver === 0 && t._pf.unusedTokens.length === 0 && t._pf.bigHour === e)), t._isValid
            }

            function Ht(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function Bt(e) {
                var t = 0,
                    n, r, i, s;
                while(t < e.length) {
                    s = Ht(e[t]).split("-"), n = s.length, r = Ht(e[t + 1]), r = r ? r.split("-") : null;
                    while(n > 0) {
                        i = jt(s.slice(0, n).join("-"));
                        if(i) return i;
                        if(r && r.length >= n && Tt(s, r, !0) >= n - 1) break;
                        n--
                    }
                    t++
                }
                return null
            }

            function jt(e) {
                var r = null;
                if(!g[e] && b) try {
                    r = t.locale(), n("./locale/" + e), t.locale(r)
                } catch(i) {}
                return g[e]
            }

            function Ft(e, n) {
                var r, i;
                return n._isUTC ? (r = n.clone(), i = (t.isMoment(e) || xt(e) ? +e : +t(e)) - +r, r._d.setTime(+r._d + i), t.updateOffset(r, !1), r) : t(e).local()
            }

            function It(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function qt(e) {
                var t = e.match(x),
                    n, r;
                for(n = 0, r = t.length; n < r; n++) et[t[n]] ? t[n] = et[t[n]] : t[n] = It(t[n]);
                return function(i) {
                    var s = "";
                    for(n = 0; n < r; n++) s += t[n] instanceof Function ? t[n].call(i, e) : t[n];
                    return s
                }
            }

            function Rt(e, t) {
                return e.isValid() ? (t = Ut(t, e.localeData()), Q[t] || (Q[t] = qt(t)), Q[t](e)) : e.localeData().invalidDate()
            }

            function Ut(e, t) {
                function r(e) {
                    return t.longDateFormat(e) || e
                }
                var n = 5;
                T.lastIndex = 0;
                while(n >= 0 && T.test(e)) e = e.replace(T, r), T.lastIndex = 0, n -= 1;
                return e
            }

            function zt(e, t) {
                var n, r = t._strict;
                switch(e) {
                    case "Q":
                        return H;
                    case "DDDD":
                        return j;
                    case "YYYY":
                    case "GGGG":
                    case "gggg":
                        return r ? F : k;
                    case "Y":
                    case "G":
                    case "g":
                        return q;
                    case "YYYYYY":
                    case "YYYYY":
                    case "GGGGG":
                    case "ggggg":
                        return r ? I : L;
                    case "S":
                        if(r) return H;
                    case "SS":
                        if(r) return B;
                    case "SSS":
                        if(r) return j;
                    case "DDD":
                        return C;
                    case "MMM":
                    case "MMMM":
                    case "dd":
                    case "ddd":
                    case "dddd":
                        return O;
                    case "a":
                    case "A":
                        return t._locale._meridiemParse;
                    case "x":
                        return D;
                    case "X":
                        return P;
                    case "Z":
                    case "ZZ":
                        return M;
                    case "T":
                        return _;
                    case "SSSS":
                        return A;
                    case "MM":
                    case "DD":
                    case "YY":
                    case "GG":
                    case "gg":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "ss":
                    case "ww":
                    case "WW":
                        return r ? B : N;
                    case "M":
                    case "D":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "s":
                    case "w":
                    case "W":
                    case "e":
                    case "E":
                        return N;
                    case "Do":
                        return r ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                    default:
                        return n = new RegExp(Yt(Gt(e.replace("\\", "")), "i")), n
                }
            }

            function Wt(e) {
                e = e || "";
                var t = e.match(M) || [],
                    n = t[t.length - 1] || [],
                    r = (n + "").match(X) || ["-", 0, 0],
                    i = +(r[1] * 60) + Lt(r[2]);
                return r[0] === "+" ? -i : i
            }

            function Xt(e, n, r) {
                var i, s = r._a;
                switch(e) {
                    case "Q":
                        n != null && (s[c] = (Lt(n) - 1) * 3);
                        break;
                    case "M":
                    case "MM":
                        n != null && (s[c] = Lt(n) - 1);
                        break;
                    case "MMM":
                    case "MMMM":
                        i = r._locale.monthsParse(n, e, r._strict), i != null ? s[c] = i : r._pf.invalidMonth = n;
                        break;
                    case "D":
                    case "DD":
                        n != null && (s[h] = Lt(n));
                        break;
                    case "Do":
                        n != null && (s[h] = Lt(parseInt(n.match(/\d{1,2}/)[0], 10)));
                        break;
                    case "DDD":
                    case "DDDD":
                        n != null && (r._dayOfYear = Lt(n));
                        break;
                    case "YY":
                        s[l] = t.parseTwoDigitYear(n);
                        break;
                    case "YYYY":
                    case "YYYYY":
                    case "YYYYYY":
                        s[l] = Lt(n);
                        break;
                    case "a":
                    case "A":
                        r._isPm = r._locale.isPM(n);
                        break;
                    case "h":
                    case "hh":
                        r._pf.bigHour = !0;
                    case "H":
                    case "HH":
                        s[p] = Lt(n);
                        break;
                    case "m":
                    case "mm":
                        s[d] = Lt(n);
                        break;
                    case "s":
                    case "ss":
                        s[v] = Lt(n);
                        break;
                    case "S":
                    case "SS":
                    case "SSS":
                    case "SSSS":
                        s[m] = Lt(("0." + n) * 1e3);
                        break;
                    case "x":
                        r._d = new
                        Date(Lt(n));
                        break;
                    case "X":
                        r._d = new Date(parseFloat(n) * 1e3);
                        break;
                    case "Z":
                    case "ZZ":
                        r._useUTC = !0, r._tzm = Wt(n);
                        break;
                    case "dd":
                    case "ddd":
                    case "dddd":
                        i = r._locale.weekdaysParse(n), i != null ? (r._w = r._w || {}, r._w.d = i) : r._pf.invalidWeekday = n;
                        break;
                    case "w":
                    case "ww":
                    case "W":
                    case "WW":
                    case "d":
                    case "e":
                    case "E":
                        e = e.substr(0, 1);
                    case "gggg":
                    case "GGGG":
                    case "GGGGG":
                        e = e.substr(0, 2), n && (r._w = r._w || {}, r._w[e] = Lt(n));
                        break;
                    case "gg":
                    case "GG":
                        r._w = r._w || {}, r._w[e] = t.parseTwoDigitYear(n)
                }
            }

            function Vt(e) {
                var n, r, i, s, o, u, a;
                n = e._w, n.GG != null || n.W != null || n.E != null ? (o = 1, u = 4, r = rt(n.GG, e._a[l], ln(t(), 1, 4).year), i = rt(n.W, 1), s = rt(n.E, 1)) : (o = e._locale._week.dow, u = e._locale._week.doy, r = rt(n.gg, e._a[l], ln(t(), o, u).year), i = rt(n.w, 1), n.d != null ? (s = n.d, s < o && ++i) : n.e != null ? s = n.e + o : s = o), a = cn(r, i, s, u, o), e._a[l] = a.year, e._dayOfYear = a.dayOfYear
            }

            function $t(e) {
                var t, n, r = [],
                    i, s;
                if(e._d) return;
                i = Kt(e), e._w && e._a[h] == null && e._a[c] == null && Vt(e), e._dayOfYear && (s = rt(e._a[l], i[l]), e._dayOfYear > Mt(s) && (e._pf._overflowDayOfYear = !0), n = on(s, 0, e._dayOfYear), e._a[c] = n.getUTCMonth(), e._a[h] = n.getUTCDate());
                for(t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
                for(; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
                e._a[p] === 24 && e._a[d] === 0 && e._a[v] === 0 && e._a[m] === 0 && (e._nextDay = !0, e._a[p] = 0), e._d = (e._useUTC ? on : sn).apply(null, r), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm), e._nextDay && (e._a[p] = 24)
            }

            function Jt(e) {
                var t;
                if(e._d) return;
                t = Ct(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], $t(e)
            }

            function Kt(e) {
                var t = new Date;
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function Qt(n) {
                if(n._f === t.ISO_8601) {
                    en(n);
                    return
                }
                n._a = [], n._pf.empty = !0;
                var r = "" + n._i,
                    i, s, o, u, a, f = r.length,
                    l = 0;
                o = Ut(n._f, n._locale).match(x) || [];
                for(i = 0; i < o.length; i++) u = o[i], s = (r.match(zt(u, n)) || [])[0], s && (a = r.substr(0, r.indexOf(s)), a.length > 0 && n._pf.unusedInput.push(a), r = r.slice(r.indexOf(s) + s.length), l += s.length), et[u] ? (s ? n._pf.empty = !1 : n._pf.unusedTokens.push(u), Xt(u, s, n)) : n._strict && !s && n._pf.unusedTokens.push(u);
                n._pf.charsLeftOver = f - l, r.length > 0 && n._pf.unusedInput.push(r), n._pf.bigHour === !0 && n._a[p] <= 12 && (n._pf.bigHour = e), n._isPm && n._a[p] < 12 && (n._a[p] += 12), n._isPm === !1 && n._a[p] === 12 && (n._a[p] = 0), $t(n), Dt(n)
            }

            function Gt(e) {
                return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                    return t || n || r || i
                })
            }

            function Yt(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function Zt(e) {
                var t, n, r, i, s;
                if(e._f.length === 0) {
                    e._pf.invalidFormat = !0, e._d = new Date(NaN);
                    return
                }
                for(i = 0; i < e._f.length; i++) {
                    s = 0, t = vt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._pf = st(), t._f = e._f[i], Qt(t);
                    if(!Pt(t)) continue;
                    s += t._pf.charsLeftOver, s += t._pf.unusedTokens.length * 10, t._pf.score = s;
                    if(r == null || s < r) r = s, n = t
                }
                dt(e, n || t)
            }

            function en(e) {
                var t, n, r = e._i,
                    i = R.exec(r);
                if(i) {
                    e._pf.iso = !0;
                    for(t = 0, n = z.length; t < n; t++)
                        if(z[t][1].exec(r)) {
                            e._f = z[t][0] + (i[6] || " ");
                            break
                        }
                    for(t = 0, n = W.length; t < n; t++)
                        if(W[t][1].exec(r)) {
                            e._f += W[t][0];
                            break
                        }
                    r.match(M) && (e._f += "Z"), Qt(e)
                } else e.
                _isValid = !1
            }

            function tn(e) {
                en(e), e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))
            }

            function nn(e, t) {
                var n = [],
                    r;
                for(r = 0; r < e.length; ++r) n.push(t(e[r], r));
                return n
            }

            function rn(n) {
                var r = n._i,
                    i;
                r === e ? n._d = new Date : xt(r) ? n._d = new Date(+r) : (i = w.exec(r)) !== null ? n._d = new Date(+i[1]) : typeof r == "string" ? tn(n) : St(r) ? (n._a = nn(r.slice(0), function(e) {
                    return parseInt(e, 10)
                }), $t(n)) : typeof r == "object" ? Jt(n) : typeof r == "number" ? n._d = new Date(r) : t.createFromInputFallback(n)
            }

            function sn(e, t, n, r, i, s, o) {
                var u = new Date(e, t, n, r, i, s, o);
                return e < 1970 && u.setFullYear(e), u
            }

            function on(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 1970 && t.setUTCFullYear(e), t
            }

            function un(e, t) {
                if(typeof e == "string")
                    if(!isNaN(e)) e = parseInt(e, 10);
                    else {
                        e = t.weekdaysParse(e);
                        if(typeof e != "number") return null
                    }
                return e
            }

            function an(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r)
            }

            function fn(e, n, r) {
                var i = t.duration(e).abs(),
                    s = u(i.as("s")),
                    o = u(i.as("m")),
                    a = u(i.as("h")),
                    f = u(i.as("d")),
                    l = u(i.as("M")),
                    c = u(i.as("y")),
                    h = s < G.s && ["s", s] || o === 1 && ["m"] || o < G.m && ["mm", o] || a === 1 && ["h"] || a < G.h && ["hh", a] || f === 1 && ["d"] || f < G.d && ["dd", f] || l === 1 && ["M"] || l < G.M && ["MM", l] || c === 1 && ["y"] || ["yy", c];
                return h[2] = n, h[3] = +e > 0, h[4] = r, an.apply({}, h)
            }

            function ln(e, n, r) {
                var i = r - n,
                    s = r - e.day(),
                    o;
                return s > i && (s -= 7), s < i - 7 && (s += 7), o = t(e).add(s, "d"), {
                    week: Math.ceil(o.dayOfYear() / 7),
                    year: o.year()
                }
            }

            function cn(e, t, n, r, i) {
                var s = on(e, 0, 1).getUTCDay(),
                    o, u;
                return s = s === 0 ? 7 : s, n = n != null ? n : i, o = i - s + (s > r ? 7 : 0) - (s < i ? 7 : 0), u = 7 * (t - 1) + (n - i) + o + 1, {
                    year: u > 0 ? e : e - 1,
                    dayOfYear: u > 0 ? u : Mt(e - 1) + u
                }
            }

            function hn(n) {
                var r = n._i,
                    i = n._f,
                    s;
                return n._locale = n._locale || t.localeData(n._l), r === null || i === e && r === "" ? t.invalid({
                    nullInput: !0
                }) : (typeof r == "string" && (n._i = r = n._locale.preparse(r)), t.isMoment(r) ? new ht(r, !0) : (i ? St(i) ? Zt(n) : Qt(n) : rn(n), s = new ht(n), s._nextDay && (s.add(1, "d"), s._nextDay = e), s))
            }

            function pn(e, n) {
                var r, i;
                n.length === 1 && St(n[0]) && (n = n[0]);
                if(!n.length) return t();
                r = n[0];
                for(i = 1; i < n.length; ++i) n[i][e](r) && (r = n[i]);
                return r
            }

            function dn(e, t) {
                var n;
                if(typeof t == "string") {
                    t = e.localeData().monthsParse(t);
                    if(typeof t != "number") return e
                }
                return n = Math.min(e.date(), At(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function vn(e, t) {
                return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            }

            function mn(e, t, n) {
                return t === "Month" ? dn(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }

            function gn(e, n) {
                return function(r) {
                    return r != null ? (mn(this, e, r), t.updateOffset(this, n), this) : vn(this, e)
                }
            }

            function yn(e) {
                return e * 400 / 146097
            }

            function bn(e) {
                return e * 146097 / 400
            }

            function wn(e) {
                t.duration.fn[e] = function() {
                    return this._data[e]
                }
            }

            function En(e) {
                if(typeof ender != "undefined") return;
                o = s.moment, e ? s.moment = ut("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : s.moment = t
            }
            var t, i = "2.8.4",
                s = typeof global != "undefined" ? global : this,
                o, u = Math.round,
                a = Object.prototype.hasOwnProperty,
                f, l = 0,
                c = 1,
                h = 2,
                p = 3,
                d = 4,
                v = 5,
                m = 6,
                g = {},
                y = [],
                b = typeof module != "undefined" && module && module.exports,
                w = /^\/?Date\((\-?\d+)/i,
                E = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
                S = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
                x = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
                T = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                N = /\d\d?/,
                C = /\d{1,3}/,
                k = /\d{1,4}/,
                L = /[+\-]?\d{1,6}/,
                A = /\d+/,
                O = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                M = /Z|[\+\-]\d\d:?\d\d/gi,
                _ = /T/i,
                D = /[\+\-]?\d+/,
                P = /[\+\-]?\d+(\.\d{1,3})?/,
                H = /\d/,
                B = /\d\d/,
                j = /\d{3}/,
                F = /\d{4}/,
                I = /[+-]?\d{6}/,
                q = /[+-]?\d+/,
                R = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                U = "YYYY-MM-DDTHH:mm:ssZ",
                z = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                    ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                    ["YYYY-DDD", /\d{4}-\d{3}/]
                ],
                W = [
                    ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                    ["HH:mm", /(T| )\d\d:\d\d/],
                    ["HH", /(T| )\d\d/]
                ],
                X = /([\+\-]|\d\d)/gi,
                V = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
                $ = {
                    Milliseconds: 1,
                    Seconds: 1e3,
                    Minutes: 6e4,
                    Hours: 36e5,
                    Days: 864e5,
                    Months: 2592e6,
                    Years: 31536e6
                },
                J = {
                    ms: "millisecond",
                    s: "second",
                    m: "minute",
                    h: "hour",
                    d: "day",
                    D: "date",
                    w: "week",
                    W: "isoWeek",
                    M: "month",
                    Q: "quarter",
                    y: "year",
                    DDD: "dayOfYear",
                    e: "weekday",
                    E: "isoWeekday",
                    gg: "weekYear",
                    GG: "isoWeekYear"
                },
                K = {
                    dayofyear: "dayOfYear",
                    isoweekday: "isoWeekday",
                    isoweek: "isoWeek",
                    weekyear: "weekYear",
                    isoweekyear: "isoWeekYear"
                },
                Q = {},
                G = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Y = "DDD w W M D d".split(" "),
                Z = "M D H h m s w W".split(" "),
                et = {
                    M: function() {
                        return this.month() + 1
                    },
                    MMM: function(e) {
                        return this.localeData().monthsShort(this, e)
                    },
                    MMMM: function(e) {
                        return this.localeData().months(this, e)
                    },
                    D: function() {
                        return this.date()
                    },
                    DDD: function() {
                        return this.dayOfYear()
                    },
                    d: function() {
                        return this.day()
                    },
                    dd: function(e) {
                        return this.localeData().weekdaysMin(this, e)
                    },
                    ddd: function(e) {
                        return this.localeData().weekdaysShort(this, e)
                    },
                    dddd: function(e) {
                        return this.localeData().weekdays(this, e)
                    },
                    w: function() {
                        return this.week()
                    },
                    W: function() {
                        return this.isoWeek()
                    },
                    YY: function() {
                        return gt(this.year() % 100, 2)
                    },
                    YYYY: function() {
                        return gt(this.year(), 4)
                    },
                    YYYYY: function() {
                        return gt(this.year(), 5)
                    },
                    YYYYYY: function() {
                        var e = this.year(),
                            t = e >= 0 ? "+" : "-";
                        return t + gt(Math.abs(e), 6)
                    },
                    gg: function() {
                        return gt(this.weekYear() % 100, 2)
                    },
                    gggg: function() {
                        return gt(this.weekYear(), 4)
                    },
                    ggggg: function() {
                        return gt(this.weekYear(), 5)
                    },
                    GG: function() {
                        return gt(this.isoWeekYear() % 100, 2)
                    },
                    GGGG: function() {
                        return gt(this.isoWeekYear(), 4)
                    },
                    GGGGG: function() {
                        return gt(this.isoWeekYear(), 5)
                    },
                    e: function() {
                        return this.weekday()
                    },
                    E: function() {
                        return this.isoWeekday()
                    },
                    a: function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                    },
                    A: function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                    },
                    H: function() {
                        return this.hours()
                    },
                    h: function() {
                        return this.hours() % 12 || 12
                    },
                    m: function() {
                        return this.minutes()
                    },
                    s: function() {
                        return this.seconds()
                    },
                    S: function() {
                        return Lt(this.milliseconds() / 100)
                    },
                    SS: function() {
                        return gt(Lt(this.milliseconds() / 10), 2)
                    },
                    SSS: function() {
                        return gt(this.milliseconds(), 3)
                    },
                    SSSS: function() {
                        return gt(this.milliseconds(), 3)
                    },
                    Z: function() {
                        var e = -this.zone(),
                            t = "+";
                        return e < 0 && (e = -e, t = "-"), t + gt(Lt(e / 60), 2) + ":" + gt(Lt(e) % 60, 2)
                    },
                    ZZ: function() {
                        var e = -this.zone(),
                            t = "+";
                        return e < 0 && (e = -e, t = "-"), t + gt(Lt(e / 60), 2) + gt(Lt(e) % 60, 2)
                    },
                    z: function() {
                        return this.zoneAbbr()
                    },
                    zz: function() {
                        return this.zoneName()
                    },
                    x: function() {
                        return this.valueOf()
                    },
                    X: function() {
                        return this.unix()
                    },
                    Q: function() {
                        return this.quarter()
                    }
                },
                tt = {},
                nt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
            while(Y.length) f = Y.pop(), et[f + "o"] = lt(et[f], f);
            while(Z.length) f = Z.pop(), et[f + f] = ft(et[f], 2);
            et.DDDD = ft(et.DDD, 3), dt(ct.prototype, {
                set: function(e) {
                    var t, n;
                    for(n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t;
                    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(e) {
                    return this._months[e.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(e) {
                    return this._monthsShort[e.month()]
                },
                monthsParse: function(e, n, r) {
                    var i, s, o;
                    this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []);
                    for(i = 0; i < 12; i++) {
                        s = t.utc([2e3, i]), r && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), !r && !this._monthsParse[i] && (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i"));
                        if(r && n === "MMMM" && this._longMonthsParse[i].test(e)) return i;
                        if(r && n === "MMM" && this._shortMonthsParse[i].test(e)) return i;
                        if(!r && this._monthsParse[i].test(e)) return i
                    }
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(e) {
                    return this._weekdays[e.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(e) {
                    return this._weekdaysShort[e.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(e) {
                    return this._weekdaysMin[e.day()]
                },
                weekdaysParse: function(e) {
                    var n, r, i;
                    this._weekdaysParse || (this._weekdaysParse = []);
                    for(n = 0; n < 7; n++) {
                        this._weekdaysParse[n] || (r = t([2e3, 1]).day(n), i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i"));
                        if(this._weekdaysParse[n].test(e)) return n
                    }
                },
                _longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY LT",
                    LLLL: "dddd, MMMM D, YYYY LT"
                },
                longDateFormat: function(e) {
                    var t = this._longDateFormat[e];
                    return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e] = t), t
                },
                isPM: function(e) {
                    return(e + "").toLowerCase().charAt(0) === "p"
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(e, t, n) {
                    var r = this._calendar[e];
                    return typeof r == "function" ? r.apply(t, [n]) : r
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(e, t, n, r) {
                    var i = this._relativeTime[n];
                    return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
                },
                pastFuture: function(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
                },
                ordinal: function(e) {
                    return this._ordinal.replace("%d", e)
                },
                _ordinal: "%d",
                _ordinalParse: /\d{1,2}/,
                preparse: function(e) {
                    return e
                },
                postformat: function(e) {
                    return e
                },
                week: function(e) {
                    return ln(e, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }), t = function(t, n, r, i) {
                var s;
                return typeof r == "boolean" && (i = r, r = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = r, s._strict = i, s._isUTC = !1, s._pf = st(), hn(s)
            }, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = ut("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), t.min = function() {
                var e = [].slice.call(arguments, 0);
                return pn("isBefore", e)
            }, t.max = function() {
                var e = [].slice.call(arguments, 0);
                return pn("isAfter", e)
            }, t.utc = function(t, n, r, i) {
                var s;
                return typeof r == "boolean" && (i = r, r = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = r, s._i = t, s._f = n, s._strict = i, s._pf = st(), hn(s).utc()
            }, t.unix = function(e) {
                return t(e * 1e3)
            }, t.duration = function(e, n) {
                var r = e,
                    i = null,
                    s, o, u, a;
                return t.isDuration(e) ? r = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : typeof e == "number" ? (r = {}, n ? r[n] = e : r.milliseconds = e) : (i = E.exec(e)) ? (s = i[1] === "-" ? -1 : 1, r = {
                    y: 0,
                    d: Lt(i[h]) * s,
                    h: Lt(i[p]) * s,
                    m: Lt(i[d]) * s,
                    s: Lt(i[v]) * s,
                    ms: Lt(i[m]) * s
                }) : (i = S.exec(e)) ? (s = i[1] === "-" ? -1 : 1, u = function(e) {
                    var t = e && parseFloat(e.replace(",", "."));
                    return(isNaN(t) ? 0 : t) * s
                }, r = {
                    y: u(i[2]),
                    M: u(i[3]),
                    d: u(i[4]),
                    h: u(i[5]),
                    m: u(i[6]),
                    s: u(i[7]),
                    w: u(i[8])
                }) : typeof r == "object" && ("from" in r || "to" in r) && (a = bt(t(r.from), t(r.to)), r = {}, r.ms = a.milliseconds, r.M = a.months), o = new pt(r), t.isDuration(e) && it(e, "_locale") && (o._locale = e._locale), o
            }, t.version = i, t.defaultFormat = U, t.ISO_8601 = function() {}, t.momentProperties = y, t.updateOffset = function() {}, t.relativeTimeThreshold = function(t, n) {
                return G[t] === e ? !1 : n === e ? G[t] : (G[t] = n, !0)
            }, t.lang = ut("moment.lang is deprecated. Use moment.locale instead.", function(e, n) {
                return t.locale(e, n)
            }), t.locale = function(e, n) {
                var r;
                return e && (typeof n != "undefined" ? r = t.defineLocale(e, n) : r = t.localeData(e), r && (t.duration._locale = t._locale = r)), t._locale._abbr
            }, t.defineLocale = function(e, n) {
                return n !== null ? (n.abbr = e, g[e] || (g[e] = new ct), g[e].set(n), t.locale(e), g[e]) : (delete g[e], null)
            }, t.langData = ut("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
                return t.localeData(e)
            }), t.localeData = function(e) {
                var n;
                e && e._locale && e._locale._abbr && (e = e._locale._abbr);
                if(!e) return t._locale;
                if(!St(e)) {
                    n = jt(e);
                    if(n) return n;
                    e = [e]
                }
                return Bt(e)
            }, t.isMoment = function(e) {
                return e instanceof ht || e != null && it(e, "_isAMomentObject")
            }, t.isDuration = function(e) {
                return e instanceof pt
            };
            for(f = nt.length - 1; f >= 0; --f) kt(nt[f]);
            t.normalizeUnits = function(e) {
                return Nt(e)
            }, t.invalid = function(e) {
                var n = t.utc(NaN);
                return e != null ? dt(n._pf, e) : n._pf.userInvalidated = !0, n
            }, t.parseZone = function() {
                return t.apply(null, arguments).parseZone()
            }, t.parseTwoDigitYear = function(e) {
                return Lt(e) + (Lt(e) > 68 ? 1900 : 2e3)
            }, dt(t.fn = ht.prototype, {
                clone: function() {
                    return t(this)
                },
                valueOf: function() {
                    return +this._d + (this._offset || 0) * 6e4
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var e = t(this).utc();
                    return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : Rt(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Rt(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
                },
                isValid: function() {
                    return Pt(this)
                },
                isDSTShifted: function() {
                    return this._a ? this.isValid() && Tt(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function() {
                    return dt({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function(e) {
                    return this.zone(0, e)
                },
                local: function(e) {
                    return this._isUTC && (this.zone(0, e), this._isUTC = !1, e && this.add(this._dateTzOffset(), "m")), this
                },
                format: function(e) {
                    var n = Rt(this, e || t.defaultFormat);
                    return this.localeData().postformat(n)
                },
                add: wt(1, "add"),
                subtract: wt(-1, "subtract"),
                diff: function(e, n, r) {
                    var i = Ft(e, this),
                        s = (this.zone() - i.zone()) * 6e4,
                        o, u, a;
                    return n = Nt(n), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), a = this - t(this).startOf("month") - (i - t(i).startOf("month")), a -= (this.zone() - t(this).startOf("month").zone() - (i.zone() - t(i).startOf("month").zone())) * 6e4, u += a / o, n === "year" && (u /= 12)) : (o = this - i, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? (o - s) / 864e5 : n === "week" ? (o - s) / 6048e5 : o), r ? u : mt(u)
                },
                from: function(e, n) {
                    return t.duration({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!n)
                },
                fromNow: function(e) {
                    return this.from(t(), e)
                },
                calendar: function(e) {
                    var n = e || t(),
                        r = Ft(n, this).startOf("day"),
                        i = this.diff(r, "days", !0),
                        s = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
                    return this.format(this.localeData().calendar(s, this, t(n)))
                },
                isLeapYear: function() {
                    return _t(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(e) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return e != null ? (e = un(e, this.localeData()), this.add(e - t, "d")) : t
                },
                month: gn("Month", !0),
                startOf: function(e) {
                    e = Nt(e);
                    switch(e) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return e === "week" ? this.weekday(0) : e === "isoWeek" && this.isoWeekday(1), e === "quarter" && this.month(Math.floor(this.month() / 3) * 3), this
                },
                endOf: function(t) {
                    return t = Nt(t), t === e || t === "millisecond" ? this : this.startOf(t).add(1, t === "isoWeek" ? "week" : t).subtract(1, "ms")
                },
                isAfter: function(e, n) {
                    var r;
                    return n = Nt(typeof n != "undefined" ? n : "millisecond"), n === "millisecond" ? (e = t.isMoment(e) ? e : t(e), +this > +e) : (r = t.isMoment(e) ? +e : +t(e), r < +this.clone().startOf(n))
                },
                isBefore: function(e, n) {
                    var r;
                    return n = Nt(typeof n != "undefined" ? n : "millisecond"), n === "millisecond" ? (e = t.isMoment(e) ? e : t(e), +this < +e) : (r = t.isMoment(e) ? +e : +t(e), +this.clone().endOf(n) < r)
                },
                isSame: function(e, n) {
                    var r;
                    return n = Nt(n || "millisecond"), n === "millisecond" ? (e = t.isMoment(e) ? e : t(e), +this === +e) : (r = +t(e), +this.clone().startOf(n) <= r && r <= +this.clone().endOf(n))
                },
                min: ut("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
                    return e = t.apply(null, arguments), e < this ? this : e
                }),
                max: ut("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
                    return e = t.apply(null, arguments), e > this ? this : e
                }),
                zone: function(e, n) {
                    var r = this._offset || 0,
                        i;
                    return e == null ? this._isUTC ? r : this._dateTzOffset() : (typeof e == "string" && (e = Wt(e)), Math.abs(e) < 16 && (e *= 60), !this._isUTC && n && (i = this._dateTzOffset()), this._offset = e, this._isUTC = !0, i != null && this.subtract(i, "m"), r !== e && (!n || this._changeInProgress ? Et(this, t.duration(r - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : typeof this._i == "string" && this.zone(this._i), this
                },
                hasAlignedHourOffset: function(e) {
                    return e ? e = t(e).zone() : e = 0, (this.zone() - e) % 60 === 0
                },
                daysInMonth: function() {
                    return At(this.year(), this.month())
                },
                dayOfYear: function(e) {
                    var n = u((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                    return e == null ? n : this.add(e - n, "d")
                },
                quarter: function(e) {
                    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
                },
                weekYear: function(e) {
                    var t = ln(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                    return e == null ? t : this.add(e - t, "y")
                },
                isoWeekYear: function(e) {
                    var t = ln(this, 1, 4).year;
                    return e == null ? t : this.add(e - t, "y")
                },
                week: function(e) {
                    var t = this.localeData().week(this);
                    return e == null ? t : this.add((e - t) * 7, "d")
                },
                isoWeek: function(e) {
                    var t = ln(this, 1, 4).week;
                    return e == null ? t : this.add((e - t) * 7, "d")
                },
                weekday: function(e) {
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return e == null ? t : this.add(e - t, "d")
                },
                isoWeekday: function(e) {
                    return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
                },
                isoWeeksInYear: function() {
                    return Ot(this.year(), 1, 4)
                },
                weeksInYear: function() {
                    var e = this.localeData()._week;
                    return Ot(this.year(), e.dow, e.doy)
                },
                get: function(e) {
                    return e = Nt(e), this[e]()
                },
                set: function(e, t) {
                    return e = Nt(e), typeof this[e] == "function" && this[e](t), this
                },
                locale: function(n) {
                    var r;
                    return n === e ? this._locale._abbr : (r = t.localeData(n), r != null && (this._locale = r), this)
                },
                lang: ut("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                    return t === e ? this.localeData() : this.locale(t)
                }),
                localeData: function() {
                    return this._locale
                },
                _dateTzOffset: function() {
                    return Math.round(this._d.getTimezoneOffset() / 15) * 15
                }
            }), t.fn.millisecond = t.fn.milliseconds = gn("Milliseconds", !1), t.fn.second = t.fn.seconds = gn("Seconds", !1), t.fn.minute = t.fn.minutes = gn("Minutes", !1), t.fn.hour = t.fn.hours = gn("Hours", !0), t.fn.date = gn("Date", !0), t.fn.dates = ut("dates accessor is deprecated. Use date instead.", gn("Date", !0)), t.fn.year = gn("FullYear", !0), t.fn.years = ut("years accessor is deprecated. Use year instead.", gn("FullYear", !0)), t.fn.days = t.fn.day, t.fn.months = t.fn.month, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.fn.quarters = t.fn.quarter, t.fn.toJSON = t.fn.toISOString, dt(t.duration.fn = pt.prototype, {
                _bubble: function() {
                    var e = this._milliseconds,
                        t = this._days,
                        n = this._months,
                        r = this._data,
                        i, s, o, u = 0;
                    r.milliseconds = e % 1e3, i = mt(e / 1e3), r.seconds = i % 60, s = mt(i / 60), r.minutes = s % 60, o = mt(s / 60), r.hours = o % 24, t += mt(o / 24), u = mt(yn(t)), t -= mt(bn(u)), n += mt(t / 30), t %= 30, u += mt(n / 12), n %= 12, r.days = t, r.months = n, r.years = u
                },
                abs: function() {
                    return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
                },
                weeks: function() {
                    return mt(this.days() / 7)
                },
                valueOf: function() {
                    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Lt(this._months / 12) * 31536e6
                },
                humanize: function(e) {
                    var t = fn(this, !e, this.localeData());
                    return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
                },
                add: function(e, n) {
                    var r = t.duration(e, n);
                    return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
                },
                subtract: function(e, n) {
                    var r = t.duration(e, n);
                    return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
                },
                get: function(e) {
                    return e = Nt(e), this[e.toLowerCase() + "s"]()
                },
                as: function(e) {
                    var t, n;
                    e = Nt(e);
                    if(e === "month" || e === "year") return t = this._days + this._milliseconds / 864e5, n = this._months + yn(t) * 12, e === "month" ? n : n / 12;
                    t = this._days + Math.round(bn(this._months / 12));
                    switch(e) {
                        case "week":
                            return t / 7 + this._milliseconds / 6048e5;
                        case "day":
                            return t + this._milliseconds / 864e5;
                        case "hour":
                            return t * 24 + this._milliseconds / 36e5;
                        case "minute":
                            return t * 24 * 60 + this._milliseconds / 6e4;
                        case "second":
                            return t * 24 * 60 * 60 + this._milliseconds / 1e3;
                        case "millisecond":
                            return Math.floor(t * 24 * 60 * 60 * 1e3) + this._milliseconds;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                },
                lang: t.fn.lang,
                locale: t.fn.locale,
                toIsoString: ut("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                    return this.toISOString()
                }),
                toISOString: function() {
                    var e = Math.abs(this.years()),
                        t = Math.abs(this.months()),
                        n = Math.abs(this.days()),
                        r = Math.abs(this.hours()),
                        i = Math.abs(this.minutes()),
                        s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
                },
                localeData: function() {
                    return this._locale
                }
            }), t.duration.fn.toString = t.duration.fn.toISOString;
            for(f in $) it($, f) && wn(f.toLowerCase());
            t.duration.fn.asMilliseconds = function() {
                return this.as("ms")
            }, t.duration.fn.asSeconds = function() {
                return this.as("s")
            }, t.duration.fn.asMinutes = function() {
                return this.as("m")
            }, t.duration.fn.asHours = function() {
                return this.as("h")
            }, t.duration.fn.asDays = function() {
                return this.as("d")
            }, t.duration.fn.asWeeks = function() {
                return this.as("weeks")
            }, t.duration.fn.asMonths = function() {
                return this.as("M")
            }, t.duration.fn.asYears = function() {
                return this.as("y")
            }, t.locale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = Lt(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                }
            }), b ? module.exports = t : typeof r == "function" && r.amd ? (r("moment", ["require", "exports", "module"], function(e, n, r) {
                return r.config && r.config() && r.config().noGlobal === !0 && (s.moment = o), t
            }), En(!0)) : En()
        }.call(this), r("inc-header-navigation", ["require", "hhfbackbone", "templates", "moment", "jquery"], function(e) {
            var t = e("hhfbackbone"),
                n = e("templates"),
                r = e("moment"),
                i = e("jquery");
            return t.View.extend({
                __name__: "viewHeaderNavigation",
                moment: r,
                events: {
                    "click a.help-modal-open": "broadcastHelpClick",
                    "click .page-nav a": "handleNavClick",
                    "click div.mobile-nav": "handleMobileMenuClick",
                    "click .js-print-link": "handlePrintLinkClick",
                    "focus .js-skipnavigation": "handleSkipNavigationHover",
                    "keyup .js-skipnavigation": "handleSkipNavigationkeyPress",
                    "blur .js-skipnavigation": "handleSkipNavigationFocus"
                },
                template: n["inc-header-navigation.html"],
                initialize: function(e) {
                    this.options = e, this.render()
                },
                render: function() {
                    var e = {
                        msgCount: 0,
                        alertCount: 0
                    };
                    this.options.settings.msgCount && (e.msgCount = this.options.settings.msgCount), this.options.settings.alertCount && (e.alertCount = this.options.settings.alertCount), e.totalCount = parseInt(e.msgCount, 10) + parseInt(e.alertCount, 10), this.options.user ? (this.options.user.lastActiveJSON = this.options.user.lastActiveDate, this.options.user.lastActiveDispDate = this.moment(this.options.user.lastActiveJSON).format("MM/DD/YYYY"), this.options.user.lastActiveDispTime = this.moment(this.options.user.lastActiveJSON).format("h:mma")) : this.options.user = {}, this.options.settings.userData && this.options.settings.userData.customerType === "NONE" && (this.template = n["inc-header-navigation-fallback.html"]), this.show(!1), this.$el.html(this.template({
                        brand: this.options.brand,
                        user: this.options.user,
                        oboRole: this.options.settings.oboRole,
                        tokenParameter: this.options.tokenParameter,
                        navContext: this.options.navContext,
                        navItems: this.options.config.NAV_ITEMS,
                        countItems: e
                    })), this.options.settings.oboRole === "AGENT_VIEW" && this.$el.find("#manage-alerts").removeAttr("href").addClass("disabledText"), (this.options.settings.oboRole === "AGENT_ACTIVE" || this.options.settings.oboRole === "AGENT_WEBPAY") && this.$el.find("#plans").removeAttr("href").addClass("disabledText"), (this.options.settings.oboRole === "AGENT_VIEW" || this.options.settings.oboRole === "AGENT_ACTIVE") && this.$el.find("#pay-bills").removeAttr("href").addClass("disabledText"), (this.options.settings.oboRole === "AGENT_VIEW" || this.options.settings.oboRole === "AGENT_ACTIVE" || this.options.settings.oboRole === "AGENT_WEBPAY") && this.$el.find("#transfer-between-other-accounts,#manage-other-accounts,#transfer-activity,#transfer-between-other-personal-accounts,#manage-other-personal-accounts,#transfer-activity-personal,#pay-people,#pay-people-overview,#pay-people-activity,#pay-people-manage-people,#pay-people-preferences,#pay-people-personals,#pay-people-overview-personal,#pay-people-activity-personal,#pay-people-manage-people-personal,#pay-people-preferences-personal,#request-money-personal,#request-money,#nav-Invoices,#send-money").removeAttr("href").addClass("disabledText"), this.options.user && this.options.user.dob && this.options.user.dob.month && this.options.user.dob.day && this.displayBirthdayGreetingsOnHeader()
                },
                displayBirthdayGreetingsOnHeader: function() {
                    var e = this,
                        t = new Date,
                        n = t.getMonth() + 1,
                        r = t.getDate();
                    this.options.user && this.options.user.dob && this.options.user.dob.month && this.options.user.dob.day && this.options.user.dob.month === n && this.options.user.dob.day === r && e.$el.find(".greeting").html("Happy Birthday,")
                },
                show: function(e) {
                    return typeof e == "undefined" && (e = !0), typeof _dt_addMark != "undefined" && _dt_addMark("headerNavigation.show(" + (e ? "show" : "hide") + ")"), typeof console != "undefined" && typeof console.timeStamp != "undefined" && console.timeStamp("headerNavigation.show(" + (e ? "show" : "hide") + ")"), e ? this.$el.css("display", "inline") : this.$el.css("display", "none"), !0
                },
                broadcastHelpClick: function(e) {
                    e.preventDefault(), this.trigger("help:click", e)
                },
                handleNavClick: function(e) {
                    return i(e.currentTarget).parent().siblings().children().removeClass("active"), i(e.currentTarget).addClass("active"), i("body").css({
                        position: "",
                        height: ""
                    }), i(e.currentTarget).text() !== "Help" && i("body").removeClass("mobile-menu-open"), !0
                },
                handleMobileMenuClick: function(e) {
                    e.preventDefault(), i("body").hasClass("mobile-menu-open") ? (i("body").removeClass("mobile-menu-open"), i("body").css({
                        position: "",
                        height: ""
                    })) : (i("body").addClass("mobile-menu-open"), i("body").css({
                        position: "fixed"
                    }), i("body").height(Math.min(screen.height, i(window).height())))
                },
                handlePrintLinkClick: function(e) {
                    e.preventDefault(), window.print()
                },
                handleSkipNavigationHover: function(e) {
                    i(e.currentTarget).removeClass("visuallyhidden")
                },
                handleSkipNavigationkeyPress: function(e) {
                    e.preventDefault();
                    if(event.keyCode == 13) {
                        i(window).scrollTop(i(".citizens-header").next().offset().top);
                        var t = i("#page-container");
                        t.attr("tabindex", -1).focus()
                    }
                },
                handleSkipNavigationFocus: function(e) {
                    i(e.currentTarget).addClass("visuallyhidden")
                }
            })
        }), r("pubsub-module", [], function() {
            var e = null;
            return {
                getXauth: function() {
                    return e || null
                },
                setXauth: function(t, n) {
                    e = n
                }
            }
        }), r("config-features", ["require"], function(e) {
            return {
                LIST: ["document_center", "document_center@@eStatements", "document_center@@tax", "document_center@@eNotices", "document_center@@creditcard_notices", "document_center@@check_images", "sigfig", "sigfig@@sigfigInvestmentSection", "offers", "offers@@merkle_offers"]
            }
        }), r("config-permissions", ["require"], function(e) {
            return {
                LIST: ["alerts@*:EDIT", "accounts@*:bills@*:PAY", "accounts@*:bills@*:VIEW", "accounts@*:invoices@*:SUBMIT", "accounts@*:overdrafts@*:VIEW", "accounts@*:plans@*:VIEW", "accounts@*:transfers@*:VIEW", "accounts@*:transfers@*:external@*:EXTERNAL_TRANSFERS_TO,EXTERNAL_TRANSFERS_FROM", "users@*:VIEW,EDIT", "accounts@*:BILL_PAY", "accounts@*:P2P_PAYMENTS", "taxs@*:VIEW", "money_movements@*:VIEW"]
            }
        }), r("ui-message", ["require", "jquery"], function(e) {
            var t = e("jquery"),
                n = function(e) {
                    var n = {
                        type: "error",
                        msg: "Error encountered."
                    };
                    this.attributes = t.extend({}, n, e)
                };
            return n.prototype.types = ["error", "warning", "status"], n.prototype.getMsg = function() {
                return this.attributes.msg
            }, n
        }), r("sessionStorage", ["require"], function(e) {
            function n(e, n) {
                var r;
                try {
                    r = typeof n == "string" ? n : JSON.stringify(n)
                } catch(i) {
                    r = n
                }
                t.setItem(e, r)
            }

            function r(e) {
                var n = t.getItem(e);
                try {
                    n = JSON.parse(n)
                } catch(r) {}
                return n
            }
            var t = window.sessionStorage;
            return {
                setData: n,
                getData: r
            }
        }), r("helper", ["require", "pubsub-module", "config-topics", "config-features", "config-permissions", "ui-message", "sessionStorage"], function(e) {
            var t = e("pubsub-module"),
                n = e("config-topics"),
                r = e("config-features"),
                i = e("config-permissions"),
                s = e("ui-message"),
                o = e("sessionStorage");
            return {
                mapFeaturesHexToObject: function(e) {
                    var t = parseInt(e, 16).toString(2),
                        n = {},
                        i = r.LIST.sort(),
                        s = Number(i.length);
                    t = String((new Array(s + 1)).join("0") + t).slice(-s);
                    for(var o = 0; o < t.length; ++o) n[i[o]] = t.charAt(o) === "1" ? !0 : !1;
                    return n
                },
                mapPermissionsHexToArray: function(e) {
                    var t = parseInt(e, 16).toString(2),
                        n = [],
                        r = i.LIST.sort(),
                        s = Number(r.length);
                    t = String((new Array(s + 1)).join("0") + t).slice(-s);
                    for(var o = 0; o < t.length; ++o) t.charAt(o) === "1" && n.push(r[o]);
                    return n
                },
                getEnvironment: function(e) {
                    var t = document.location.hostname;
                    return t.match(/(?:^.*\.|^)citizensbankonline.com/) ? e.SIGFIG_KEEP_ALIVE_URL.PROD : e.SIGFIG_KEEP_ALIVE_URL.DEV
                },
                addSubscriber: function(e, r) {
                    var i;
                    if(typeof PubSub == "undefined") return new s({
                        msg: "PubSub library not found."
                    });
                    if(e === "undefined" || !n.SUBSCRIBER_TOPIC(e)) return new s({
                        msg: "Invalid PubSub topic."
                    });
                    if(typeof citizensHeaderFooter == "undefined") return new s({
                        msg: "Unable to locate citizensHeaderFooter object."
                    });
                    if(typeof r == "function") i = PubSub.subscribe(n.SUBSCRIBER_TOPIC(e), r);
                    else {
                        if(typeof t[r] == "undefined") return new s({
                            msg: "Invalid PubSub callback."
                        });
                        i = PubSub.subscribe(n.SUBSCRIBER_TOPIC(e), t[r])
                    }
                    return i
                },
                setCssClassOnDom: function(e) {
                    e = e || "", $(document.documentElement).addClass("citizens-user-" + e.toLowerCase())
                },
                consoleMark: function(e) {
                    typeof _dt_addMark != "undefined" && _dt_addMark(e), typeof console != "undefined" && typeof console.timeStamp != "undefined" && console.timeStamp(e)
                },
                redirectToLogoutPage: function(e) {
                    window.PubSub.publish(n.SUBSCRIBER_TOPIC("logout")), window.location.replace(e)
                },
                redirectToLogoutPageWhenTimeout: function(e) {
                    window.PubSub.publish(n.SUBSCRIBER_TOPIC("timeout")), window.location.replace(e)
                },
                addQueryParam: function(e, t, n) {
                    var r = "",
                        i = e.indexOf("#");
                    i !== -1 && (r = e.substring(i), e = e.substring(0, i));
                    var s = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                        o = e.indexOf("?") === -1 ? "?" : "&";
                    return e.match(s) ? e.replace(s, "$1" + t + "=" + n + "$2") + r : e + o + t + "=" + n + r
                },
                getOfferDisposition: function() {
                    if(o) {
                        var e = o.getData("offerTracking");
                        return e && e.disp ? e.disp : ""
                    }
                    return ""
                }
            }
        }), r("inc-header-view", ["require", "hhfbackbone", "templates", "inc-header-navigation", "config-topics", "helper"], function(e) {
            var t = e("hhfbackbone"),
                n = e("templates"),
                r = e("inc-header-navigation"),
                i = e("config-topics"),
                s = e("helper"),
                o = function(e) {
                    window.PubSub && window.PubSub.publish(i.SUBSCRIBER_TOPIC("logoutClick"));
                    var t = s.getOfferDisposition();
                    if(t !== "") {
                        e.preventDefault(), window.location.href = s.addQueryParam(e.data.config.NAV_ITEMS.logOut.href, e.data.config.NAV_ITEMS.dispLogoutQueryKey, t);
                        var n = e.data.view;
                        n && n.$el.find(e.currentTarget).removeAttr("href").off("click")
                    }
                };
            return t.View.extend({
                __name__: "viewHeader",
                events: {},
                template: n["inc-header.html"],
                initialize: function(e) {
                    this.options = e, this.subViewList = {}, this.render()
                },
                render: function() {
                    var e = {
                        title: "",
                        titlePrefix: '<div class="centered-content clearfix"><div class="vendor-page-title"><h2>',
                        titleSuffix: "</h2></div></div>",
                        getTitle: function() {
                            var e = !1;
                            return typeof this.title != "undefined" && this.title !== "" && (e = this.titlePrefix + this.title + this.titleSuffix), e
                        }
                    };
                    this.options && this.options.config && this.options.config.PAGE_TITLES && this.options.config.PAGE_TITLES.citizensns && (this.options.settings.useVendorUrlParam && this.options.config.PAGE_TITLES.citizensns[this.options.settings.vendorUrlParam] ? this.options.settings.userData.customerType === "BUSINESS" && this.options.settings.userData.badges.GEMINI === !0 ? e.title = this.options.config.PAGE_TITLES.citizensns[this.options.settings.vendorUrlParam].gemini : this.options.settings.userData.customerType === "BUSINESS" ? e.title = this.options.config.PAGE_TITLES.citizensns[this.options.settings.vendorUrlParam].business : e.title = this.options.config.PAGE_TITLES.citizensns[this.options.settings.vendorUrlParam].consumer : this.options.settings.userData.customerType === "BUSINESS" && this.options.settings.userData.badges.GEMINI === !0 ? e.title = this.options.config.PAGE_TITLES.citizensns.gemini : this.options.settings.userData.customerType === "BUSINESS" ? e.title = this.options.config.PAGE_TITLES.citizensns.business : e.title = this.options.config.PAGE_TITLES.citizensns.consumer);
                    if(e.getTitle()) {
                        var t = this.$el.find("#page-header");
                        this.$el.find(".vendor-page-title").length > 0 && this.$el.find(".vendor-page-title").parent().remove(), t.length > 0 && t.append(e.getTitle())
                    }
                    var n = this.$el.find("a.page-logo");
                    n.length > 0 && n.attr("href", this.options.config.NAV_ITEMS.myAccounts.href), delete this.subViewList.headerNavigationView, this.$el.find("#header-navigation-container").html("");
                    var i = this.$el.find("a.page-logo img");
                    i.length > 0 && (this.options.brand && this.options.brand.name === "citizensone" ? (i.attr("src", this.options.config.ASSET_URL + "/img/CTO_Green-01.png"), i.attr("alt", "Citizens One")) : (i.attr("src", this.options.config.ASSET_URL + "/img/CTZ_Green-01.png"), i.attr("alt", "Citizens Bank")));
                    if(this.options.settings.showNav) this.subViewList.headerNavigationView = new r({
                        config: this.options.config,
                        brand: this.options.brand,
                        settings: this.options.settings,
                        user: this.options.settings.userData,
                        tokenParameter: this.options.tokenParameter,
                        navContext: this.options.navContext,
                        el: this.$el.find("#header-navigation-container")
                    }), this.listenTo(this.subViewList.headerNavigationView, "help:click", this.bubbleHelpClick);
                    else if(this.options.settings.showLogoutOnly) {
                        var s = '<style>@media screen and (max-width: 880px) {.responsive-enabled .citizens-header-footer .util-nav { display: inline-block; }.citizens-header-footer .util-nav{ margin-top: 0; }</style>\n<nav class="util-nav"><a href="' + this.options.config.NAV_ITEMS.logOut.href + '" class="logout-link js-logout-link"><span class="account-underline">Log Out</span></a></nav>';
                        this.$el.find("#header-navigation-container").parent().prepend(s)
                    }
                    this.$el.find(".js-logout-link").click({
                        config: this.options.config,
                        view: this
                    }, o)
                },
                showNavigation: function() {
                    this.subViewList.headerNavigationView && this.subViewList.headerNavigationView.show()
                },
                bubbleHelpClick: function(e) {
                    this.trigger("help:click", e)
                }
            })
        }), r("header", ["require", "inc-header-view", "jquery"], function(e) {
            function i(e) {
                return r = n(e.headerSelector) || null, r
            }

            function s() {
                return r
            }

            function o(e, n, r, i) {
                return new t({
                    config: n,
                    settings: e,
                    brand: n.BRANDS_LIST[e.brand],
                    tokenParameter: r,
                    navContext: i.getNavContext(),
                    el: e.headerSelector
                })
            }
            var t = e("inc-header-view"),
                n = e("jquery"),
                r = {};
            return {
                setEl: i,
                getEl: s,
                render: o
            }
        }), r("inc-footer-view", ["require", "hhfbackbone", "templates", "jquery"], function(e) {
            var t = e("hhfbackbone"),
                n = e("templates"),
                r = e("jquery");
            return t.View.extend({
                __name__: "viewFooter",
                events: {
                    "click a.contact, a.locator": "toggleDropup",
                    "click .button-stickyfooterbranch": "branchLocator",
                    "click #page-footer h6": "toggleFooterLinks"
                },
                template: n["inc-footer.html"],
                initialize: function(e) {
                    this.options = e, this.stickyFooter = {
                        el: {},
                        offset: 0,
                        height: 0
                    }, r(document).on("click", this.clearDropups), this.render()
                },
                clearListeners: function() {
                    r(document).off("click", this.clearDropups), r(window).off("scroll", this.toggleSticky), this.$el.find("#stickyFooterBranch").off("keydown"), t.View.prototype.clearListeners.call(this)
                },
                render: function() {
                    var e = this.options.settings && this.options.settings.userData && this.options.settings.userData.addresses && this.options.settings.userData.addresses.length && this.options.settings.userData.addresses[0].postalCode ? this.options.settings.userData.addresses[0].postalCode : "NONE",
                        t = this.options.brand.title;
                    t = t.replace(/\s/g, "");
                    if(e !== "NONE" || e !== "INVALID") e = e.substring(0, 5);
                    var n = this.template({
                        brand: this.options.brand,
                        user: this.options.settings.userData,
                        zipCode: e,
                        brandTitle: t,
                        assetURL: this.options.config.ASSET_URL,
                        navItems: this.options.config.NAV_ITEMS,
                        vendorType: "citizensns"
                    });
                    this.$el.html('<div class="citizens-header-footer"><footer id="page-footer" class="page-footer">' + n + "</footer></div>");
                    var i = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
                        s = r(document).find(".page-container").height(),
                        o = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        u = this;
                    this.$el.find("#stickyFooterBranch").on("keydown", function(e) {
                        e.keyCode === 13 && u.branchLocator(e)
                    }), i >= 881 ? s >= o ? this.initSticky() : this.removeSticky() : this.removeSticky()
                },
                initSticky: function() {
                    this.stickyFooter.el = r(".footer-top"), this.toggleSticky(), r(window).scroll(this, this.toggleSticky)
                },
                removeSticky: function() {
                    this.unstick(), r(window).off("scroll", this.toggleSticky)
                },
                stick: function() {
                    this.stickyFooter.el.addClass && this.stickyFooter.el.addClass("sticky-footer")
                },
                unstick: function() {
                    this.stickyFooter.el.removeClass && this.stickyFooter.el.removeClass("sticky-footer")
                },
                toggleSticky: function(e) {
                    var t = e ? e.data : this,
                        n = r(window),
                        i = n.scrollTop() + n.height();
                    t.unstick(), t.stickyFooter.el && (t.stickyFooter.offset = t.stickyFooter.el.offset && t.stickyFooter.el.offset().top ? t.stickyFooter.el.offset().top : 0, t.stickyFooter.height = t.stickyFooter.el.outerHeight ? t.stickyFooter.el.outerHeight() : 50), i >= t.stickyFooter.offset + t.stickyFooter.height ? t.unstick() : t.stick()
                },
                toggleDropup: function(e) {
                    e.preventDefault(), r(e.target).closest("li").toggleClass("dropup-active").siblings().removeClass("dropup-active"), r(e.target).siblings().find("input").focus(), r("[placeholder]").focus(function() {
                        var e = r(this);
                        e.val() === e.attr("placeholder") && (e.val(""), e.removeClass("placeholder"))
                    }).blur(function() {
                        var e = r(this);
                        if(e.val() === "" || e.val() === e.attr("placeholder")) e.addClass("placeholder"), e.val(e.attr("placeholder"))
                    }).blur().parents("form").submit(function() {
                        r(this).find("[placeholder]").each(function() {
                            var e = r(this);
                            e.val() === e.attr("placeholder") && e.val("")
                        })
                    }), r("#stickyFooterBranch").focus()
                },
                clearDropups: function(e) {
                    return !r(e.target).closest(".page-footer li > a").length && !r(e.target).closest(".dropup-active").length && (r(".footer-top li").removeClass("dropup-active"), r(".footer-top li input").blur()), !0
                },
                updateBranchLocator: function(e) {
                    e = e.substring(0, 5), r("#stickyFooterBranch").val(e)
                },
                branchLocator: function(e) {
                    e.preventDefault();
                    var t = r("#stickyFooterBranch"),
                        n = t.val().trim(),
                        i = t.attr("placeholder");
                    return n === "" || n === i ? (r("#stickyFooterBranch").focus(), r("#stickyFooterBranch-error").html(this.options.ERROR.MESSAGES.blankZipCodeField.msg), r("#stickyFooterBranch-error").show()) : (r("#stickyFooterBranch-error").html(""), r("#stickyFooterBranch-error").hide(), window.open(this.options.config.BRANDS_LIST[this.options.brand.name].url + "/customer-service/branch-locator.aspx?search=" + escape(n))), !1
                },
                toggleFooterLinks: function(e) {
                    e.preventDefault(), window.innerWidth < 461 && r(e.target).parent().siblings().find("a").toggle()
                }
            })
        }), r("footer", ["require", "inc-footer-view", "config-error", "jquery"], function(e) {
            function s(e) {
                return i = r(e.footerSelector) || null, i
            }

            function o() {
                return i
            }

            function u(e, r, i) {
                return new t({
                    config: r,
                    settings: e,
                    brand: r.BRANDS_LIST[e.brand],
                    el: e.footerSelector,
                    ERROR: n
                })
            }
            var t = e("inc-footer-view"),
                n = e("config-error"),
                r = e("jquery"),
                i = {};
            return {
                setEl: s,
                getEl: o,
                render: u
            }
        }), r("token", ["require", "underscore"], function(e) {
            function v(e) {
                var n = {},
                    r = e.split(",");
                return t.each(r, function(e) {
                    n[e] = !0
                }), n
            }

            function m(e) {
                var t = [];
                for(var n in e) t.push(n);
                return t.join(",")
            }

            function g(e) {
                var t = e.split("|"),
                    m = /^[0-9]{5}(?:-[0-9]{4})?$/,
                    g = n;
                if(t.length === 11 || t.length === 12) t[3] !== "NONE" && !m.test(t[3]) && (t[3] = "INVALID"), g = {
                    host: t[r],
                    userData: {
                        customerType: t[i],
                        badges: v(t[s]),
                        addresses: [{
                            postalCode: t[o]
                        }]
                    },
                    sponsorId: t[u],
                    brand: t[a],
                    permissions: t[f],
                    oboRole: t[l],
                    features: t[c],
                    msgCount: t[h] ? t[h] : "0",
                    alertCount: t[p] ? t[p] : "0",
                    vendorUrlParam: t[d] ? t[d] : ""
                };
                return g
            }

            function y() {
                window.location.replace("/efs/servlet/efs/logout.jsp")
            }

            function b(e) {
                var t = e.host,
                    n = t.match(/:\/\/((www[0-9]+[a]?|sit[1-4]+[a]?)?\.)(.[^/:]+)/i);
                n && n.length > 2 && n[3] != "citizensbankonline.com" && n[3] != "qacitizensbankonline.com" && n[3] != "sitcitizensbankonline.com" && (window.onload = y)
            }

            function w(e) {
                return b(e), encodeURIComponent(e.host + "|" + e.userData.customerType + "|" + m(e.userData.badges) + "|" + e.userData.addresses[0].postalCode + "|" + e.sponsorId + "|" + e.brand + "|" + e.permissions + "|" + e.oboRole + "|" + e.features + "|" + e.msgCount + "|" + e.alertCount)
            }
            var t = e("underscore"),
                n = {
                    host: "",
                    userData: {
                        customerType: "NONE",
                        badges: "NONE",
                        addresses: [{
                            postalCode: "NONE"
                        }]
                    },
                    sponsorId: "NONE",
                    brand: "citizensbank",
                    permissions: "-",
                    oboRole: "-",
                    features: "-",
                    msgCount: "-",
                    alertCount: "-"
                },
                r = 0,
                i = 1,
                s = 2,
                o = 3,
                u = 4,
                a = 5,
                f = 6,
                l = 7,
                c = 8,
                h = 9,
                p = 10,
                d = 11;
            return {
                createBadgesObjectFromString: v,
                createBadgesStringFromObject: m,
                createSettingsPatchFromString: g,
                getTokenStringFromSettings: w
            }
        }), r("config-context", [], function() {
            var e = {
                defaults: {
                    lvl1: "myaccounts",
                    lvl2: "",
                    user: "Consumer"
                },
                olbHPKeys: {
                    myaccounts: {
                        cmsHelpKey: "myaccounts"
                    },
                    transfers: {
                        cmsHelpKey: "transfermoney"
                    },
                    payments: {
                        cmsHelpKey: "paybillsandpeople"
                    },
                    servicecenter: {
                        cmsHelpKey: "servicecenter"
                    },
                    newaccount: {
                        cmsHelpKey: "myaccounts_opennewaccounts"
                    },
                    contactus: {
                        cmsHelpKey: "globalhelp"
                    },
                    documents: {
                        cmsHelpKey: "documentcenter"
                    },
                    "send-money-with-zelle": {
                        cmsHelpKey: "paybillsandpeople"
                    },
                    defaultHelp: {
                        cmsHelpKey: "globalhelp"
                    }
                },
                vendorKeys: {
                    olb: {
                        cmsHelpKey: "myaccounts"
                    },
                    cashedge: {
                        cmsHelpKey: "transfermoney"
                    },
                    "cashedge-transfer": {
                        cmsHelpKey: "transfermoney"
                    },
                    "cashedge-pop": {
                        cmsHelpKey: "paybillsandpeople"
                    },
                    "cashedge-invoices": {
                        cmsHelpKey: "invoices"
                    },
                    fiserv: {
                        cmsHelpKey: "paybillsandpeople"
                    },
                    esp: {
                        cmsHelpKey: "myaccounts"
                    }
                },
                olbLegacyKeys: {
                    accounts: {
                        cmsHelpKey: "myaccounts",
                        submenu: {
                            history: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    viewhistory: {
                                        cmsHelpKey: ""
                                    },
                                    advancedsearch: {
                                        cmsHelpKey: ""
                                    },
                                    "export": {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            imagesearch: {
                                cmsHelpKey: "accountoptions",
                                sub2menu: {
                                    imagesearch: {
                                        cmsHelpKey: ""
                                    },
                                    prevrequested: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            register: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    viewregister: {
                                        cmsHelpKey: ""
                                    },
                                    payees: {
                                        cmsHelpKey: ""
                                    },
                                    categories: {
                                        cmsHelpKey: ""
                                    },
                                    reports: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            statement: {
                                cmsHelpKey: "accountpreferences",
                                sub2menu: {
                                    viewstatement: {
                                        cmsHelpKey: ""
                                    }
                                }
                            }
                        }
                    },
                    home: {
                        cmsHelpKey: "myaccounts",
                        submenu: {
                            alerts: {
                                cmsHelpKey: "alertscenter",
                                sub2menu: {
                                    addalert: {
                                        cmsHelpKey: ""
                                    },
                                    contactpoints: {
                                        cmsHelpKey: ""
                                    },
                                    viewalerts: {
                                        cmsHelpKey: ""
                                    },
                                    alertlog: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            financialnews: {
                                cmsHelpKey: ""
                            },
                            messages: {
                                cmsHelpKey: "messagecenter",
                                sub2menu: {
                                    sendmessage: {
                                        cmsHelpKey: ""
                                    },
                                    viewmessages: {
                                        cmsHelpKey: ""
                                    },
                                    viewsentmessages: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            mybank: {
                                cmsHelpKey: ""
                            },
                            paybill: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    payhistory: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            preferences: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    accountssetup: {
                                        cmsHelpKey: ""
                                    },
                                    company: {
                                        cmsHelpKey: ""
                                    },
                                    myprofile: {
                                        cmsHelpKey: "myprofile"
                                    },
                                    manageusers: {
                                        cmsHelpKey: ""
                                    },
                                    users: {
                                        cmsHelpKey: "manageusers"
                                    }
                                }
                            }
                        }
                    },
                    mfeatures: {
                        cmsHelpKey: "myaccounts",
                        submenu: {
                            goaltrack: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    gtsbonus: {
                                        cmsHelpKey: ""
                                    },
                                    gts: {
                                        cmsHelpKey: ""
                                    },
                                    gtscollegesaver: {
                                        cmsHelpKey: ""
                                    },
                                    gtsfaq: {
                                        cmsHelpKey: ""
                                    },
                                    gtsadd: {
                                        cmsHelpKey: ""
                                    },
                                    gtshistory: {
                                        cmsHelpKey: ""
                                    },
                                    gtshomebuyer: {
                                        cmsHelpKey: ""
                                    },
                                    gtsoverview: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            odchoices: {
                                cmsHelpKey: ""
                            },
                            overdraft: {
                                cmsHelpKey: "accountpreferences",
                                sub2menu: {
                                    odsbufferzone: {
                                        cmsHelpKey: ""
                                    },
                                    odsfaq: {
                                        cmsHelpKey: ""
                                    },
                                    odsoverview: {
                                        cmsHelpKey: ""
                                    },
                                    odsloc: {
                                        cmsHelpKey: ""
                                    },
                                    odssav: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            overview: {
                                cmsHelpKey: ""
                            },
                            plans: {
                                cmsHelpKey: ""
                            },
                            ps: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    psfaqs: {
                                        cmsHelpKey: ""
                                    },
                                    psoverview: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            rewards: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    rdseveryday: {
                                        cmsHelpKey: ""
                                    },
                                    rdsfaq: {
                                        cmsHelpKey: ""
                                    },
                                    rdsgreensense: {
                                        cmsHelpKey: ""
                                    },
                                    rdsoverview: {
                                        cmsHelpKey: ""
                                    }
                                }
                            }
                        }
                    },
                    paybills: {
                        cmsHelpKey: "paybillsandpeople",
                        submenu: {
                            paybill: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    singlePayment: {
                                        cmsHelpKey: ""
                                    },
                                    repeatingpayments: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            employees: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    employeeSummary: {
                                        cmsHelpKey: ""
                                    },
                                    repeatPayment: {
                                        cmsHelpKey: ""
                                    },
                                    singlePayment: {
                                        cmsHelpKey: ""
                                    },
                                    multiplePayment: {
                                        cmsHelpKey: ""
                                    },
                                    paymentSummary: {
                                        cmsHelpKey: ""
                                    },
                                    addEmployee: {
                                        cmsHelpKey: ""
                                    },
                                    savedemplpayment: {
                                        cmsHelpKey: ""
                                    },
                                    "Delete Saved employee Payment": {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            tax: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    taxstate: {
                                        cmsHelpKey: ""
                                    },
                                    taxsaved: {
                                        cmsHelpKey: ""
                                    },
                                    taxsummary: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            vendors: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    multiplevendpayment: {
                                        cmsHelpKey: ""
                                    },
                                    register: {
                                        cmsHelpKey: ""
                                    },
                                    singlevendpmt: {
                                        cmsHelpKey: ""
                                    },
                                    savedvendpayment: {
                                        cmsHelpKey: ""
                                    },
                                    recvendpmt: {
                                        cmsHelpKey: ""
                                    },
                                    vendpmtsummary: {
                                        cmsHelpKey: ""
                                    }
                                }
                            }
                        }
                    },
                    register: {
                        cmsHelpKey: "myaccounts"
                    },
                    servicecenter: {
                        cmsHelpKey: "servicecenter",
                        submenu: {
                            faq: {
                                cmsHelpKey: ""
                            },
                            receipt: {
                                cmsHelpKey: ""
                            },
                            services: {
                                cmsHelpKey: ""
                            },
                            reorderchecks: {
                                cmsHelpKey: "reorderchecks"
                            },
                            " ": {
                                cmsHelpKey: "myaccounts",
                                sub2menu: {
                                    placestop: {
                                        cmsHelpKey: "accountoptions"
                                    },
                                    reviewstops: {
                                        cmsHelpKey: "accountoptions"
                                    }
                                }
                            }
                        }
                    },
                    transfers: {
                        cmsHelpKey: "transfermoney",
                        submenu: {
                            fundstransfers: {
                                cmsHelpKey: "transfersbetweencitizensaccounts",
                                sub2menu: {
                                    singletransfer: {
                                        cmsHelpKey: ""
                                    },
                                    multipletransfers: {
                                        cmsHelpKey: ""
                                    },
                                    repeatingtransfer: {
                                        cmsHelpKey: ""
                                    }
                                }
                            },
                            manageexternal: {
                                cmsHelpKey: ""
                            },
                            othertransfers: {
                                cmsHelpKey: "Citizens Transfer - Add/Manage Citizens Account"
                            },
                            pendingtransfers: {
                                cmsHelpKey: ""
                            },
                            savedtransfers: {
                                cmsHelpKey: ""
                            },
                            singletransfer: {
                                cmsHelpKey: "Citizens Transfer - Immediate Transfer"
                            },
                            summary: {
                                cmsHelpKey: ""
                            },
                            wires: {
                                cmsHelpKey: "",
                                sub2menu: {
                                    payees: {
                                        cmsHelpKey: ""
                                    },
                                    transfer: {
                                        cmsHelpKey: ""
                                    },
                                    summary: {
                                        cmsHelpKey: ""
                                    },
                                    managed: {
                                        cmsHelpKey: ""
                                    },
                                    multiple: {
                                        cmsHelpKey: ""
                                    }
                                }
                            }
                        }
                    },
                    documents: {
                        cmsHelpKey: "documentcenter",
                        sub2menu: {}
                    }
                }
            };
            return e
        }), r("application-context", ["require", "config-context", "jquery"], function(e) {
            var t = e("config-context"),
                n = e("jquery"),
                r, i;
            return function(e) {
                function s() {
                    i = r.lvl1 + (r.lvl2 !== "" ? "-" + r.lvl2 : "")
                }

                function o() {
                    if(typeof r.lvl1 == "undefined" || r.lvl1 === "") r.lvl1 = t.defaults.lvl1;
                    if(typeof r.lvl2 == "undefined" || r.lvl2 === "") r.lvl2 = t.defaults.lvl2;
                    if(typeof r.user == "undefined" || r.user === "") r.user = t.defaults.user;
                    var e = {},
                        n = t.olbHPKeys,
                        i = Object.keys(n).map(function(e) {
                            return n[e].cmsHelpKey
                        });
                    t.olbHPKeys[r.lvl1] ? (e = t.olbHPKeys[r.lvl1], r.lvl1 = e.cmsHelpKey) : t.vendorKeys[r.lvl1] ? (e = t.vendorKeys[r.lvl1], r.lvl1 = e.cmsHelpKey) : t.olbLegacyKeys[r.lvl1] ? (e = t.olbLegacyKeys[r.lvl1], r.lvl1 = e.cmsHelpKey, e.submenu[r.lvl2] && (r.lvl2 = e.submenu[r.lvl2].cmsHelpKey)) : i.indexOf(r.lvl1) === -1 && (e = t.olbHPKeys.defaultHelp, r.lvl1 = e.cmsHelpKey)
                }

                function u() {
                    return r.lvl1 + (r.lvl2 ? "_" + r.lvl2 : "") + "_" + r.user
                }
                return typeof
                e == "undefined" && (e = {
                    lvl1: t.defaults.lvl1,
                    lvl2: t.defaults.lvl2,
                    user: t.defaults.user
                }), r = e, o(), s(), {
                    getCMSPath: u,
                    getFullNavContext: function() {
                        var e = r.lvl1 ? r.lvl2 ? r.lvl1 + "-" + r.lvl2 : r.lvl1 : "";
                        return e.split("/")[0]
                    },
                    updateOptions: function(e) {
                        r = n.extend(!0, {}, r, e), o(), s()
                    },
                    getHelpContentDOMid: function() {
                        var e = "help-" + r.lvl1 + (r.lvl2 ? "-" + r.lvl2 : "") + "-content";
                        return e.split("/")[0]
                    },
                    getContextString: function() {
                        return i
                    },
                    getNavContext: function() {
                        return r.lvl1
                    }
                }
            }
        }), r("config-citizensns", [], function() {
            function e(e) {
                var t = window.location.search === "?BRAND=CitizensOne" ? "citizensone" : "citizensbank";
                return typeof e == "undefined" && (e = {}), {
                    NAV_ITEMS: {
                        myAccounts: {
                            text: "",
                            href: t === "citizensone" ? "http://www.citizensone.com" : "http://www.citizensbank.com"
                        }
                    }
                }
            }
            return e
        }), r("config-hhf", ["require", "config-citizensns", "jquery"], function(e) {
            function r(e) {
                return this.helpResourceURL = e.helpResourceURL, this.assetURL = e.assetURL, this.olbHost = e.olbHost, this.servletPath = e.servletPath, this.servletNSPath = e.servletNSPath, this.homePage = e.homePage, this.logout = e.logout, this.servletURL = this.olbHost + this.servletPath, this.servletNSURL = this.olbHost + this.servletNSPath, this.attributes = {
                    ASSET_URL: this.assetURL,
                    LOGOUT_TIMEOUT: 540,
                    LOGOUT_TIMEOUT_COUNTDOWN: 30,
                    SERVER_PING_TIMEOUT: 550,
                    TOKEN_REFRESH_TIMEOUT: 550,
                    SERVER_PING_URL: this.olbHost + "/efs/servlet/PingServlet",
                    TOKEN_REFRESH_URL: this.olbHost + "/efs/services/rest/security/tokens?refresh=true",
                    EXTERNAL_SESSION_TIMEOUT: 0,
                    EXTERNAL_SESSION_REFRESH_OIF_URL: null,
                    SIGFIG_KEEP_ALIVE_URL: {
                        DEV: "https://specifi.qacitizensbankonline.com/l/account/api/info",
                        PROD: "https://specifi.citizensbankonline.com/l/account/api/info"
                    },
                    HELP: {
                        resourcePath: this.helpResourceURL
                    },
                    BRANDS_LIST: {
                        citizensbank: {
                            name: "citizensbank",
                            title: "Citizens Bank",
                            url: "http://www.citizensbank.com",
                            headerLogoPath: this.assetURL + "/img/CTZ_Green.svg",
                            headerLogoFallbackPath: this.assetURL + "/img/CTZ_Green-01.png",
                            whiteLogoPath: this.assetURL + "/img/CTZ_Rev.svg",
                            whiteLogoFallbackPath: this.assetURL + "/img/CTZ_White_RO-01.png",
                            securitiesLegal: "*Securities, Insurance and Investment Advisory Services offered through Citizens Securities, Inc. (&quot;CSI&quot;), also referred to as Citizens Securities, Inc. CSI is an SEC registered investment adviser and Member - FINRA and SIPC. 770 Legacy Place, MLP240, Dedham, MA 02026. (800) 942-8300. CSI is an affiliate of Citizens Bank, N.A.<br><br>The investment balances shown in online banking are based on market prices, with up to a fifteen minute delay from the time this webpage was last refreshed.  Information relating to accounts not held at CSI is presented as an accommodation and while drawn from sources believed to be reliable is not guaranteed as to accuracy or completeness. Such information should be independently confirmed by the account owner(s).<br><br>Information relating to accounts not held or custodied by National Financial Services (NFS) (Assets Held Away), CSI\u2019s clearing broker dealer, was provided to NFS by outside parties and is included for informational purposes only.  These positions are not part of your brokerage account carried by NFS and therefore any SIPC account protection afforded your account through NFS does not cover these assets or prices reported.  Neither NFS, CSI nor Citizens Bank are responsible for the Assets Held Away information provided and does not guarantee the accuracy or timeliness of the positions or prices reported.  Prices shown do not necessarily reflect the actual current market prices. Further information regarding these prices may be obtained by contacting CSI.<br><br>The investment products and financial strategies suggested herein are subject to investment risk, including possible loss of principal amount invested. Investment decisions should be based on each individual&#39;s goals, time horizon and tolerance for risk.<br><br>SpeciFi<sup>&reg;</sup> is made available through CSI. Portfolio management services are sub-advised by SigFig Wealth Management, LLC (&quot;SigFig&quot;), an SEC registered investment adviser. SigFig is not an affiliate of CSI or Citizens Bank, N.A.",
                            copyright: "&copy; Copyright " + (new Date).getFullYear() + " Citizens Financial Group, Inc. All rights reserved.<br/>Citizens Bank is a brand name of Citizens Bank, N.A. (NMLS ID# 433960).<br/>Citizens Bank corporate headquarters: One Citizens Plaza, Providence, RI 02903",
                            awards: '<sup>1</sup> "2014 Mobile Banking Leader" in the App Ratings category, Javelin Strategy & Research.'
                        },
                        charterone: {
                            name: "charterone",
                            title: "Charter One",
                            url: "http://www.charterone.com",
                            headerLogoPath: this.assetURL + "/img/COB_tm.svg",
                            headerLogoFallbackPath: this.assetURL + "/img/COB_tm-01.png",
                            whiteLogoPath: this.assetURL + "/img/COB_tm_rev.svg",
                            whiteLogoFallbackPath: this.assetURL + "/img/COB_tm_RO.svg",
                            copyright: "&copy; Copyright " + (new Date).getFullYear() + " Citizens Financial Group, Inc. All rights reserved.<br/>Citizens Bank is a brand name of Citizens Bank, N.A. (NMLS ID# 433960).<br/>Citizens Bank corporate headquarters: One Citizens Plaza, Providence, RI 02903",
                            awards: '<sup>1</sup> "2014 Mobile Banking Leader" in the App Ratings category, Javelin Strategy & Research.'
                        },
                        CITIZENSONE: {
                            name: "citizensone",
                            title: "Citizens One",
                            url: "http://www.citizensone.com",
                            headerLogoPath: this.assetURL + "/img/CTO_Green.svg",
                            headerLogoFallbackPath: this.assetURL + "/img/CTO_Green-01.png",
                            whiteLogoPath: this.assetURL + "/img/CTO_White.svg",
                            whiteLogoFallbackPath: this.assetURL + "/img/CTO_White_RO-01.png",
                            securitiesLegal: "",
                            copyright: "&copy; Copyright " + (new Date).getFullYear() + " Citizens Financial Group, Inc. All rights reserved.<br/>Citizens One, Citizens One Auto Finance, Citizens One Student Loans, Citizens One Card Services, Citizens One Personal Loans and Citizens One Home Loans are brand names of Citizens Bank, N.A.<br/>FICO is a registered trademark of Fair Isaac Corporation in the United States and other countries.",
                            awards: ""
                        }
                    },
                    PAGE_TITLES: {
                        cashedge: {
                            transfer: {
                                consumer: "Transfer Between My Other Bank Accounts",
                                business: "Transfer Between My Other Bank Accounts",
                                gemini: "Transfer Between My Other Bank Accounts"
                            },
                            pop: {
                                consumer: "Pay People",
                                business: "Pay People",
                                gemini: "Pay People"
                            },
                            invoices: {
                                consumer: "Invoices",
                                business: "Invoices",
                                gemini: "Invoices"
                            }
                        },
                        fiserv: {
                            consumer: "Pay Bills",
                            business: "Pay Bills",
                            gemini: "Pay Bills"
                        },
                        esp: {
                            consumer: "GoalTrack",
                            business: "GoalTrack",
                            gemini: "GoalTrack"
                        }
                    },
                    NAV_ITEMS: {
                        logOut: {
                            text: "Log Out",
                            href: this.servletNSURL + this.logout
                        },
                        login: {
                            text: "Login",
                            href: this.servletNSURL + "/login.jsp"
                        },
                        help: {
                            text: "Help",
                            href: "#help"
                        },
                        contactus: {
                            text: "Contact Us",
                            href: this.servletURL + this.homePage + "#contactus"
                        },
                        dispLogoutQueryKey: "disp",
                        myAccounts: {
                            text: "My Accounts",
                            href: this.servletURL + this.homePage + "#myaccounts"
                        },
                        transferMoney: {
                            text: "Transfer Money",
                            href: this.servletURL + this.homePage + "#transfers"
                        },
                        payBillsPeople: {
                            text: "Pay Bills &amp; People",
                            href: this.servletURL + this.homePage + "#payments"
                        },
                        invoices: {
                            text: "Invoices",
                            href: this.servletURL + "/wait.jsp?target=invoices-wait.jsp"
                        },
                        serviceCenter: {
                            text: "Service Center",
                            href: this.servletURL + this.homePage + "#servicecenter"
                        },
                        documentCenter: {
                            text: "Document Center",
                            href: this.servletURL + this.homePage + "#documents/timeframeonemonth"
                        },
                        myProfile: {
                            text: "Preferences",
                            href: this.servletURL + "/wait.jsp?target=myprofile-wait.jsp"
                        },
                        openNewAccount: {
                            text: "Open A New Account",
                            href: this.servletURL + this.homePage + "#newaccount"
                        },
                        alertsCenter: {
                            text: "Alerts Center",
                            href: this.servletURL + "/wait.jsp?target=alerts-wait.jsp"
                        },
                        manageAlerts: {
                            text: "Manage Alerts",
                            href: this.servletURL + "/alerts2013/alerts-managealerts.jsp"
                        },
                        myAlertAddresses: {
                            text: "My Alert Adresses",
                            href: this.servletURL + "/alerts2013/alerts-contact-points.jsp?ClearContactList=true"
                        },
                        messageCenter: {
                            text: "Message Center",
                            href: this.servletURL + "/wait.jsp?target=messages-wait.jsp"
                        },
                        sendUsAMessage: {
                            text: "Send Us A Messagge",
                            href: this.servletURL + "/messages-create.jsp?newMessage=TRUE"
                        },
                        viewSentMessages: {
                            text: "View Sent Messages",
                            href: this.servletURL + "/wait.jsp?target=messages-sent.jsp"
                        },
                        overdraftChoices: {
                            text: "Overdraft Choices",
                            href: this.servletURL + "/overdraft/standard-overdraft-practices.jsp"
                        },
                        statementPreferences: {
                            text: "Statement Preferences",
                            href: this.servletURL + "/online-statements.jsp"
                        },
                        plans: {
                            text: "Plans",
                            href: this.servletURL + "/plans/index.jsp"
                        },
                        manageUsers: {
                            text: "Manage Users",
                            href: this.servletURL + "/business/users.jsp"
                        },
                        payEmployees: {
                            text: "Pay Employees",
                            href: this.servletURL + this.homePage + "#modal/sure-payroll"
                        },
                        transferBetweenCitizensAccounts: {
                            text: "Transfer Between Citizens Accounts",
                            href: this.servletURL + this.homePage + "#transfers"
                        },
                        manageOtherCitizensAccounts: {
                            text: "Manage Other Citizens Accounts",
                            href: this.servletURL + "/transfers/manage-other-wait.jsp"
                        },
                        transferBetweenOtherAccounts: {
                            text: "Transfer Between My Other Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEMakeTransfer&ceproduct=TN"
                        },
                        manageOtherAccounts: {
                            text: "Manage Other Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEAddAccounts&ceproduct=TN"
                        },
                        transferActivity: {
                            text: "Activity",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEActivity&ceproduct=TN"
                        },
                        transferBetweenOtherPersonalAccounts: {
                            text: "Transfer Between My Other Personal Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEMakeTransfer&ceproduct=TN"
                        },
                        manageOtherPersonalAccounts: {
                            text: "Manage Other Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEAddAccounts&ceproduct=TN"
                        },
                        transferActivityPersonal: {
                            text: "Activity",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEActivity&ceproduct=TN"
                        },
                        payBills: {
                            text: "Pay Bills",
                            href: this.servletURL + "/payments/payments-wait.jsp?1=1"
                        },
                        sendMoney: {
                            text: "Send Money with Zelle",
                            logo: this.assetURL + "/img/logo-zelle-small.png",
                            href: this.servletURL + this.homePage + "#send-money-with-zelle"
                        },
                        makeTransferOneTime: {
                            text: "Make A Transfer",
                            href: this.servletURL + "/trans-confirm-wait.jsp"
                        },
                        makeTransferRecurring: {
                            text: "Make A Transfer",
                            href: this.servletURL + "/trans-repeat-confirm-wait.jsp"
                        },
                        manageBiller: {
                            text: "",
                            href: this.servletURL + "/payments/payments-wait.jsp"
                        },
                        managePeople: {
                            text: "",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEContacts&ceproduct=POP&ceType=2"
                        },
                        alertsReceived: {
                            text: "",
                            href: this.servletURL + "/alerts2013/alerts-received.jsp"
                        },
                        messagesReceived: {
                            text: "",
                            href: this.servletURL + "/messages-received.jsp"
                        },
                        emailus: {
                            text: "email Us",
                            href: this.servletURL + "/messages-create.jsp?newMessage=TRUE"
                        },
                        accountDocuments: {
                            text: "Account Documents",
                            href: this.servletURL + this.homePage + "#documents/pagetypeaccounts/timeframeonemonth"
                        },
                        statement: {
                            text: "Statement",
                            href: this.servletURL + this.homePage + "#documents/pagetypeaccounts/doctypestatement/timeframethreemonth"
                        },
                        taxForms: {
                            text: "Tax Forms",
                            href: this.servletURL + this.homePage + "#documents/pagetypeaccounts/doctypetaxdoc/timeframeyear"
                        },
                        eNotices: {
                            text: "eNotices",
                            href: this.servletURL + this.homePage + "#documents/pagetypeaccounts/doctypeenotice/timeframethreemonth"
                        },
                        checkImages: {
                            text: "Check Images",
                            href: this.servletURL + this.homePage + "#documents/pagetypeaccounts/doctypecheck/timeframetwomonth"
                        },
                        creditCardApplicationNotice: {
                            text: "Credit Card Application: Notice",
                            href: this.servletURL + this.homePage + "#documents/offerdocuments"
                        }
                    },
                    NAV_ITEMS_GEMINI: {
                        transferBetweenOtherAccounts: {
                            text: "Transfer Between My Other Business Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEMakeTransfer&ceproduct=TN&ceType=1"
                        },
                        manageOtherAccounts: {
                            text: "Manage Other Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEAddAccounts&ceproduct=TN&ceType=1"
                        },
                        transferActivity: {
                            text: "Activity",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEActivity&ceproduct=TN&ceType=1"
                        },
                        transferBetweenOtherPersonalAccounts: {
                            text: "Transfer Between My Other Personal Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEMakeTransfer&ceproduct=TN&ceType=2"
                        },
                        manageOtherPersonalAccounts: {
                            text: "Manage Other Bank Accounts",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEAddAccounts&ceproduct=TN&ceType=2"
                        },
                        transferActivityPersonal: {
                            text: "Activity",
                            href: this.servletURL + "/cashedgeredirect.jsp?landingPage=CEActivity&ceproduct=TN&ceType=2"
                        },
                        payPeople: {
                            text: "Pay Business",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP&ceType=1"
                        },
                        payPeopleOverview: {
                            text: "Overview",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP&ceType=1"
                        },
                        payPeopleActivity: {
                            text: "Activity",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP&ceType=1"
                        },
                        payPeopleManagePeople: {
                            text: "Manage Business",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP&ceType=1"
                        },
                        payPeoplePreferences: {
                            text: "Preferences",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEContacts&ceproduct=POP&ceType=1"
                        },
                        sendMoney: {
                            text: "Send Money with Zelle",
                            logo: this.assetURL + "/img/logo-zelle-small.png",
                            href: this.servletURL + this.homePage + "#send-money-with-zelle"
                        }
                    },
                    NAV_ITEMS_BUSINESS: {
                        payPeople: {
                            text: "Pay People",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP"
                        },
                        payPeopleOverview: {
                            text: "Overview",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP"
                        },
                        payPeopleActivity: {
                            text: "Activity",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP"
                        },
                        payPeopleManagePeople: {
                            text: "Manage People",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEOverview&ceproduct=POP"
                        },
                        payPeoplePreferences: {
                            text: "Preferences",
                            href: this.servletURL + "/cashedgeredirect-wait.jsp?landingPage=CEContacts&ceproduct=POP"
                        }
                    }
                }, n.extend(!0, {}, this.attributes, t({
                    servletURL: this.servletURL,
                    servletNSURL: this.servletNSURL
                }))
            }
            var t = e("config-citizensns"),
                n = e("jquery");
            return r
        }), r("bootstrap", ["require"], function(e) {
            $.support.cors = !0, window.console || (console = {
                log: function() {}
            }), navigator.appVersion.indexOf("MSIE 9.") !== -1 && !$("html").hasClass(".lt-ie10") && $("html").addClass("lt-ie10"), navigator.appVersion.indexOf("MSIE 8.") !== -1 && !$("html").hasClass(".lt-ie10") && !$("html").hasClass(".lt-ie9") && $("html").addClass("lt-ie10 lt-ie9"), navigator.appVersion.indexOf("MSIE 7.") !== -1 && !$("html").hasClass(".lt-ie10") && !$("html").hasClass(".lt-ie9") && !$("html").hasClass(".lt-ie8") && $("html").addClass("lt-ie10 lt-ie9 lt-ie8"), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                var t = this.length >>> 0,
                    n = Number(arguments[1]) || 0;
                n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t);
                for(; n < t; n++)
                    if(n in this && this[n] === e) return n;
                return -1
            }), String.prototype.trim || function() {
                var e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(e, "")
                }
            }();
            var t = function(e) {
                e.handlebars.registerHelper("ifCond", function(e, t, n) {
                    return e === t ? n.fn(this) : n.inverse(this)
                }), e.handlebars.registerHelper("ifNotCond", function(e, t, n) {
                    return e !== t ? n.fn(this) : n.inverse(this)
                }), e.handlebars.registerHelper("isArray", function(e, t) {
                    return Object.prototype.toString.call(e) === "[object Array]" ? t.fn(this) : t.inverse(this)
                }), e.handlebars.registerHelper("ifNotCondOr", function(e, t, n, r) {
                    return e !== t || n ? r.fn(this) : r.inverse(this)
                }), e.handlebars.registerHelper("ifNotAndNotCond", function(e, t, n, r) {
                    return e !== t && e !== n ? r.fn(this) : r.inverse(this)
                }), e.handlebars.registerHelper("ifCondNotOr", function(e, t, n, r) {
                    return e === t || !n ? r.fn(this) : r.inverse(this)
                }), e.handlebars.
                registerHelper("ifNotCondNot", function(e, t, n, r) {
                    return e !== t && !n ? r.fn(this) : r.inverse(this)
                }), e.handlebars.registerHelper("ifCondNotAnd", function(e, t, n, r) {
                    return e === t && !n ? r.fn(this) : r.inverse(this)
                }), e.handlebars.registerHelper("isEnabled", function(t, n) {
                    return e.enabledFeaturesForHHF[t] ? n.fn(this) : n.inverse(this)
                }), e.handlebars.registerHelper("isAllowed", function(t, n, r) {
                    var i = t.split("|"),
                        s = !1;
                    for(var o = 0; o < i.length; o++) {
                        s = !1;
                        for(var u = 0; u < e.validPermsForHHF.length; ++u) {
                            var a = e.validPermsForHHF[u],
                                f = a.replace(/(accounts@.*?):/, "accounts@*:");
                            f = f.substring(0, f.lastIndexOf(":")).replace(/\*/g, ".*");
                            var l = a.substring(a.lastIndexOf(":") + 1),
                                c = l.split(",").sort().toString(),
                                h = !1;
                            if(l !== "*") {
                                var p = n.split(",").sort(),
                                    d = p.length === 1 ? p : p.join(".*");
                                h = c.match(d), null !== h && (h = !0)
                            } else h = !0;
                            var v = i[o].match(f);
                            null !== v && (v = !0), v && h && (s = !0)
                        }
                        if(s) break
                    }
                    return s ? r.fn(this) : r.inverse(this)
                }), e.handlebars.registerHelper("isAllowedOR", function(t, n, r, i) {
                    return e.handlebars.helpers.isAllowed(t, n, i) || e.handlebars.helpers.isAllowed(t, r, i) ? i.fn(this) : i.inverse(this)
                }), e.handlebars.registerHelper("checkUser", function(e, t, n) {
                    var r = !1;
                    if(Object.prototype.toString.call(e) === "[object Array]")
                        for(var i = 0; i < e.length; i++) e[i].UserType.toUpperCase() === t && (r = !0);
                    else e.UserType.toUpperCase() === t && (r = !0);
                    return r ? n.fn(this) : n.inverse(this)
                }), e.handlebars.registerHelper("isViewOnly", function(t, n, r, i) {
                    return r === "NONE" ? e.handlebars.helpers.isAllowed.call(this, t, n, i) : i.inverse(this)
                })
            };
            return t
        }), r("timeout-model", ["require", "hhfbackbone", "jquery", "moment", "pubsub-module", "helper"], function(e) {
            var t = e("hhfbackbone"),
                n = e("jquery"),
                r = e("moment"),
                i = e("pubsub-module"),
                s = e("helper");
            return t.Model.extend({
                __name__: "modelTimeout",
                moment: r,
                defaults: {
                    UITimeoutInterval: 0,
                    sessionTimeoutInterval: 0,
                    externalSessionTimeoutInterval: 0,
                    tokenRefreshInterval: 0,
                    modalOpen: !1,
                    userActive: !1,
                    cookieName: "OLBJSESSIONID"
                },
                initialize: function(e) {
                    this.options = e, this.initPubSubSubscriber(), this.resetUITimer(), this.resetSessionTimer(), this.
                    setExternalSessionTimer(), this.cookieRegEx = new RegExp(this.get("cookieName") + "=([^;]+)")
                },
                initPubSubSubscriber: function() {
                    if(!window.PubSub) return;
                    window.PubSub.subscribe(this.options.configTopics.SUBSCRIBER_TOPIC("xauth-webui"), i.setXauth)
                },
                setUITimer: function() {
                    this.startTime = this.startTime || this.moment(new Date).format("x"), this.uiAdjTime = this.moment(new Date).format("x") - this.startTime;
                    var e = this;
                    this.set({
                        UITimeoutInterval: setTimeout(function() {
                            e.trigger("timeout:modal")
                        }, this.options.config.LOGOUT_TIMEOUT * 1e3)
                    })
                },
                resetUITimer: function() {
                    !this.get("modalOpen") && !this.get("tokenRefreshInterval") && (this.set({
                        userActive: !0
                    }), this.clearUITimer(), this.setUITimer())
                },
                clearUITimer: function() {
                    clearTimeout(this.get("UITimeoutInterval"))
                },
                setSessionTimer: function() {
                    var e = this;
                    this.set({
                        sessionTimeoutInterval: setTimeout(function() {
                            e.get("userActive") && (e.set({
                                userActive: !1
                            }), e.pingServer())
                        }, this.options.config.SERVER_PING_TIMEOUT * 1e3)
                    })
                },
                resetSessionTimer: function() {
                    this.clearSessionTimer(),
                        this.setSessionTimer()
                },
                clearSessionTimer: function() {
                    clearTimeout(this.get("sessionTimeoutInterval"))
                },
                setExternalSessionTimer: function() {
                    var e = this;
                    this.options.config.EXTERNAL_SESSION_TIMEOUT > 0 && this.isCookieSet("OAM_ID") && (this.refreshExternalSessions(this.options.config), this.keepAliveSigfig(this.options.config), this.set({
                        externalSessionTimeoutInterval: setInterval(function() {
                            e.refreshExternalSessions(e.options.config), e.keepAliveSigfig(e.options.config)
                        }, this.options.config.EXTERNAL_SESSION_TIMEOUT * 1e3)
                    }))
                },
                isCookieSet: function(e) {
                    var t = !1;
                    return document.cookie && (t = document.cookie.indexOf(e + "=") >= 0), t
                },
                resetExternalSessionTimer: function() {
                    this.clearExternalSessionTimer(), this.setExternalSessionTimer()
                },
                clearExternalSessionTimer: function() {
                    clearInterval(this.get("externalSessionTimeoutInterval"))
                },
                refreshExternalSessions: function(e) {
                    if(e.EXTERNAL_SESSION_REFRESH_OIF_URL) {
                        var t = n.ajax({
                            url: this.options.config.EXTERNAL_SESSION_REFRESH_OIF_URL,
                            type: "GET",
                            cache: !1,
                            crossDomain: !0,
                            xhrFields: {
                                withCredentials: !0
                            }
                        });
                        t.done(function(e, t) {}), t.fail(function(e, t) {})
                    }
                },
                keepAliveSigfig: function(e) {
                    var t = s.getEnvironment(e),
                        r = n.ajax({
                            url: t,
                            type: "GET",
                            cache: !1,
                            crossDomain: !0,
                            xhrFields: {
                                withCredentials: !0
                            }
                        });
                    r.done(function(e, t) {}), r.fail(function(e, t) {})
                },
                pingServer: function() {
                    var e = this.options.config.TOKEN_REFRESH_URL,
                        t = this,
                        r = n.ajax({
                            url: this.options.config.SERVER_PING_URL + "?refreshTime=" + (new Date).getTime(),
                            type: "GET"
                        });
                    r.always(function() {
                        t.resetSessionTimer()
                    }), ["fiserv", "cashedge", "esp"].indexOf("citizensns") > -1 && this.options.config.VENDOR_SPECIFIC_PING_URL && n.ajax({
                        url: this.options.config.VENDOR_SPECIFIC_PING_URL,
                        type: "GET",
                        cache: !1
                    })
                },
                getToken: function() {
                    return i.getXauth()
                },
                close: function() {
                    this.clearUITimer(), this.clearSessionTimer(), this.clearExternalSessionTimer()
                },
                resetTokenRefreshTimer: function() {
                    this.getToken() !== null && this.refreshAuthToken(), this.clearSessionTimer(), this.setTokenRefreshTimer()
                },
                setTokenRefreshTimer: function() {
                    var e = this;
                    this.set({
                        tokenRefreshInterval: setInterval(function() {
                            e.refreshAuthToken()
                        }, this.options.config.TOKEN_REFRESH_TIMEOUT * 1e3)
                    })
                },
                clearTokenRefreshTimer: function() {
                    var e = this.get("tokenRefreshInterval");
                    return e ? (clearInterval(e), this.set({
                        tokenRefreshInterval: !1
                    }), !0) : !1
                },
                refreshAuthToken: function() {
                    var e = this.options.config.TOKEN_REFRESH_URL,
                        t = this
                }
            })
        }),
        function(e) {
            typeof r == "function" && r.amd ? r("simplemodal", ["jquery"], e) : e(jQuery)
        }(function(e) {
            var t = [],
                n = e(document),
                r = navigator.userAgent.toLowerCase(),
                i = e(window),
                s = [],
                o = {
                    ieQuirks: null,
                    msie: /msie/.test(r) && !/opera/.test(r),
                    opera: /opera/.test(r)
                };
            o.ie6 = o.msie && /msie 6./.test(r) && typeof window.XMLHttpRequest != "object", o.ie7 = o.msie && /msie 7.0/.test(r), e.modal = function(t, n) {
                return e.modal.impl.init(t, n)
            }, e.modal.close = function() {
                e.modal.impl.close()
            }, e.modal.focus = function(t) {
                e.modal.impl.focus(t)
            }, e.modal.setContainerDimensions = function() {
                e.modal.impl.setContainerDimensions()
            }, e.modal.setPosition = function() {
                e.modal.impl.setPosition()
            }, e.modal.update = function(t, n) {
                e.modal.impl.update(t, n)
            }, e.fn.modal = function(t) {
                return e.modal.impl.init(this, t)
            }, e.modal.defaults = {
                appendTo: "body",
                focus: !0,
                opacity: 50,
                overlayId: "simplemodal-overlay",
                overlayCss: {},
                containerId: "simplemodal-container",
                containerCss: {},
                dataId: "simplemodal-data",
                dataCss: {},
                minHeight: null,
                minWidth: null,
                maxHeight: null,
                maxWidth: null,
                autoResize: !1,
                autoPosition: !0,
                zIndex: 1e3,
                close: !0,
                closeHTML: '<a class="modalCloseImg" title="Close"></a>',
                closeClass: "simplemodal-close",
                escClose: !0,
                overlayClose: !1,
                fixed: !0,
                position: null,
                persist: !1,
                modal: !0,
                onOpen: null,
                onShow: null,
                onClose: null
            }, e.modal.impl = {
                d: {},
                init: function(t, n) {
                    var r = this;
                    if(r.d.data) return !1;
                    o.ieQuirks = o.msie && !e.support.boxModel, r.o = e.extend({}, e.modal.defaults, n), r.zIndex = r.o.zIndex, r.occb = !1;
                    if(typeof t == "object") t = t instanceof e ? t : e(t), r.d.placeholder = !1, t.parent().parent().size() > 0 && (t.before(e("<span></span>").attr("id", "simplemodal-placeholder").css({
                        display: "none"
                    })), r.d.placeholder = !0, r.display = t.css("display"), r.o.persist || (r.d.orig = t.clone(!0)));
                    else {
                        if(typeof t != "string" && typeof t != "number") return alert("SimpleModal Error: Unsupported data type: " + typeof t), r;
                        t = e("<div></div>").html(t)
                    }
                    return r.create(t), t = null, r.open(), e.isFunction(r.o.onShow) && r.o.onShow.apply(r, [r.d]), r
                },
                create: function(n) {
                    var r = this;
                    r.getDimensions(), r.o.modal && o.ie6 && (r.d.iframe = e('<iframe src="javascript:false;"></iframe>').css(e.extend(r.o.iframeCss, {
                        display: "none",
                        opacity: 0,
                        position: "fixed",
                        height: s[0],
                        width: s[1],
                        zIndex: r.o.zIndex,
                        top: 0,
                        left: 0
                    })).appendTo(r.o.appendTo)), r.d.overlay = e("<div></div>").attr("id", r.o.overlayId).addClass("simplemodal-overlay").css(e.extend(r.o.overlayCss, {
                        display: "none",
                        opacity: r.o.opacity / 100,
                        height: r.o.modal ? t[0] : 0,
                        width: r.o.modal ? t[1] : 0,
                        position: "fixed",
                        left: 0,
                        top: 0,
                        zIndex: r.o.zIndex + 1
                    })).appendTo(r.o.appendTo), r.d.container = e("<div></div>").attr("id", r.o.containerId).addClass("simplemodal-container").css(e.extend({
                        position: r.o.fixed ? "fixed" : "absolute"
                    }, r.o.containerCss, {
                        display: "none",
                        zIndex: r.o.zIndex + 2
                    })).append(r.o.close && r.o.closeHTML ? e(r.o.closeHTML).addClass(r.o.closeClass) : "").appendTo(r.o.appendTo), r.d.wrap = e("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                        height: "100%",
                        outline: 0,
                        width: "100%"
                    }).appendTo(r.d.container), r.d.data = n.attr("id", n.attr("id") || r.o.dataId).addClass("simplemodal-data").css(e.extend(r.o.dataCss, {
                        display: "none"
                    })).appendTo("body"), n = null, r.setContainerDimensions(), r.d.data.appendTo(r.d.wrap), (o.ie6 || o.ieQuirks) && r.fixIE()
                },
                bindEvents: function() {
                    var r = this;
                    e("." + r.o.closeClass).bind("click.simplemodal", function(e) {
                        e.preventDefault(), r.close()
                    }), r.o.modal && r.o.close && r.o.overlayClose && r.d.overlay.bind("click.simplemodal", function(e) {
                        e.preventDefault(), r.close()
                    }), n.bind("keydown.simplemodal", function(e) {
                        r.o.modal && e.keyCode === 9 ? r.watchTab(e) : r.o.close && r.o.escClose && e.keyCode === 27 && (e.preventDefault(), r.close())
                    }), i.bind("resize.simplemodal orientationchange.simplemodal", function() {
                        r.getDimensions(), r.o.autoResize ? r.setContainerDimensions() : r.o.autoPosition && r.setPosition(), o.ie6 || o.ieQuirks ? r.fixIE() : r.o.modal && (r.d.iframe && r.d.iframe.css({
                            height: s[0],
                            width: s[1]
                        }), r.d.overlay.css({
                            height: t[0],
                            width: t[1]
                        }))
                    })
                },
                unbindEvents: function() {
                    e("." + this.o.closeClass).unbind("click.simplemodal"), n.unbind("keydown.simplemodal"), i.unbind(".simplemodal"), this.d.overlay.unbind("click.simplemodal")
                },
                fixIE: function() {
                    var t = this,
                        n = t.o.position;
                    e.each([t.d.iframe || null, t.o.modal ? t.d.overlay : null, t.d.container.css("position") === "fixed" ? t.d.container : null], function(e, t) {
                        if(t) {
                            var r = "document.body.clientHeight",
                                i = "document.body.clientWidth",
                                s = "document.body.scrollHeight",
                                o = "document.body.scrollLeft",
                                u = "document.body.scrollTop",
                                a = "document.body.scrollWidth",
                                f = "document.documentElement.clientHeight",
                                l = "document.documentElement.clientWidth",
                                c = "document.documentElement.scrollLeft",
                                h = "document.documentElement.scrollTop",
                                d = t[0].style;
                            d.position = "absolute";
                            if(e < 2) d.removeExpression("height"), d.removeExpression("width"), d.setExpression("height", "" + s + " > " + r + " ? " + s + " : " + r + ' + "px"'), d.setExpression("width", "" + a + " > " + i + " ? " + a + " : " + i + ' + "px"');
                            else {
                                var v, m;
                                if(n && n.constructor === Array) {
                                    var g = n[0] ? typeof n[0] == "number" ? n[0].toString() : n[0].replace(/px/, "") : t.css("top").replace(/px/, "");
                                    v = g.indexOf("%") === -1 ? g + " + (t = " + h + " ? " + h + " : " + u + ') + "px"' : parseInt(g.replace(/%/, "")) + " * ((" + f + " || " + r + ") / 100) + (t = " + h + " ? " + h + " : " + u + ') + "px"';
                                    if(n[1]) {
                                        var y = typeof n[1] == "number" ? n[1].toString() : n[1].replace(/px/, "");
                                        m = y.indexOf("%") === -1 ? y + " + (t = " + c + " ? " + c + " : " + o + ') + "px"' : parseInt(y.replace(/%/, "")) + " * ((" + l + " || " + i + ") / 100) + (t = " + c + " ? " + c + " : " + o + ') + "px"'
                                    }
                                } else v = "(" + f + " || " + r + ") / 2 - (this.offsetHeight / 2) + (t = " + h + " ? " + h + " : " + u + ') + "px"', m = "(" + l + " || " + i + ") / 2 - (this.offsetWidth / 2) + (t = " + c + " ? " + c + " : " + o + ') + "px"';
                                d.removeExpression("top"), d.removeExpression("left"), d.setExpression("top", v), d.setExpression("left", m)
                            }
                        }
                    })
                },
                focus: function(t) {
                    var n = this,
                        r = t && e.inArray(t, ["first", "last"]) !== -1 ? t : "first",
                        i = e(":input:enabled:visible:" + r, n.d.wrap);
                    setTimeout(function() {
                        i.length > 0 ? i.focus() : n.d.wrap.focus()
                    }, 10)
                },
                getDimensions: function() {
                    var e = this,
                        r = typeof window.innerHeight == "undefined" ? i.height() : window.innerHeight;
                    t = [n.height(), n.width()], s = [r, i.width()]
                },
                getVal: function(e, t) {
                    return e ? typeof e == "number" ? e : e === "auto" ? 0 : e.indexOf("%") > 0 ? parseInt(e.replace(/%/, "")) / 100 * (t === "h" ? s[0] : s[1]) : parseInt(e.replace(/px/, "")) : null
                },
                update: function(e, t) {
                    var n = this;
                    if(!n.d.data) return !1;
                    n.d.origHeight = n.getVal(e, "h"), n.d.origWidth = n.getVal(t, "w"), n.d.data.hide(), e && n.d.container.css("height", e), t && n.d.container.css("width", t), n.setContainerDimensions(), n.d.data.show(), n.o.focus && n.focus(), n.unbindEvents(), n.bindEvents()
                },
                setContainerDimensions: function() {
                    var e = this,
                        t = o.ie6 || o.ie7,
                        n = e.d.origHeight ? e.d.origHeight : o.opera ? e.d.container.height() : e.getVal(t ? e.d.container[0].currentStyle.height : e.d.container.css("height"), "h"),
                        r = e.d.origWidth ? e.d.origWidth : o.opera ? e.d.container.width() : e.getVal(t ? e.d.container[0].currentStyle.width : e.d.container.css("width"), "w"),
                        i = e.d.data.outerHeight(!0),
                        u = e.d.data.outerWidth(!0);
                    e.d.origHeight = e.d.origHeight || n, e.d.origWidth = e.d.origWidth || r;
                    var a = e.o.maxHeight ? e.getVal(e.o.maxHeight, "h") : null,
                        f = e.o.maxWidth ? e.getVal(e.o.maxWidth, "w") : null,
                        l = a && a < s[0] ? a : s[0],
                        c = f && f < s[1] ? f : s[1],
                        h = e.o.minHeight ? e.getVal(e.o.minHeight, "h") : "auto";
                    n ? n = e.o.autoResize && n > l ? l : n < h ? h : n : i ? i > l ? n = l : e.o.minHeight && h !== "auto" && i < h ? n = h : n = i : n = h;
                    var p = e.o.minWidth ? e.getVal(e.o.minWidth, "w") : "auto";
                    r ? r = e.o.autoResize && r > c ? c : r < p ? p : r : u ? u > c ? r = c : e.o.minWidth && p !== "auto" && u < p ? r = p : r = u : r = p, e.d.container.css({
                        height: n,
                        width: r
                    }), e.d.wrap.css({
                        overflow: i > n || u > r ? "auto" : "visible"
                    }), e.o.autoPosition && e.setPosition()
                },
                setPosition: function() {
                    var e = this,
                        t, n, r = s[0] / 2 - e.d.container.outerHeight(!0) / 2,
                        o = s[1] / 2 - e.d.container.outerWidth(!0) / 2,
                        u = e.d.container.css("position") !== "fixed" ? i.scrollTop() : 0;
                    e.o.position && Object.prototype.toString.call(e.o.position) === "[object Array]" ? (t = u + (e.o.position[0] || r), n = e.o.position[1] || o) : (t = u + r, n = o),
                        e.d.container.css({
                            left: n,
                            top: t
                        })
                },
                watchTab: function(t) {
                    var n = this;
                    if(e(t.target).parents(".simplemodal-container").length > 0) {
                        n.inputs = e(":input:enabled:visible:first, :input:enabled:visible:last", n.d.data[0]);
                        if(!t.shiftKey && t.target === n.inputs[n.inputs.length - 1] || t.shiftKey && t.target === n.inputs[0] || n.inputs.length === 0) {
                            t.preventDefault();
                            var r = t.shiftKey ? "last" : "first";
                            n.focus(r)
                        }
                    } else t.preventDefault(), n.focus()
                },
                open: function() {
                    var t = this;
                    t.d.iframe && t.d.iframe.show(), e.isFunction(t.o.onOpen) ? t.o.onOpen.apply(t, [t.d]) : (t.d.overlay.show(), t.d.container.show(), t.d.data.show()), t.o.focus && t.focus(), t.bindEvents()
                },
                close: function() {
                    var t = this;
                    if(!t.d.data) return !1;
                    t.unbindEvents();
                    if(e.isFunction(t.o.onClose) && !t.occb) t.occb = !0, t.o.onClose.apply(t, [t.d]);
                    else {
                        if(t.d.placeholder) {
                            var n = e("#simplemodal-placeholder");
                            t.o.persist ? n.replaceWith(t.d.data.removeClass("simplemodal-data").css("display", t.display)) : (t.d.data.hide().remove(), n.replaceWith(t.d.orig))
                        } else t.d.data.hide().remove();
                        t.d.container.hide().remove(), t.d.overlay.hide(), t.d.iframe && t.d.iframe.hide().remove(), t.d.overlay.remove(), t.d = {}
                    }
                }
            }
        }), r("timeout-modal-view", ["require", "hhfbackbone", "simplemodal", "templates", "jquery", "helper"], function(e) {
            var t = e("hhfbackbone");
            e("simplemodal");
            var n = e("templates"),
                r = e("jquery"),
                i = e("helper");
            return t.View.extend({
                __name__: "viewTimeoutModal",
                events: {
                    "click .button-continue": "continueBanking",
                    "click .button-logout": "executeLogout"
                },
                template: n["modal-timeout.html"],
                initialize: function(e) {
                    this.options = e, this.timeoutSecondsInterval = 0, this.listenTo(this.model, "timeout:modal", this.initModal), this.render()
                },
                render: function() {
                    this.$el.html(this.template({
                        brand: this.options.brand,
                        vendor: "citizensns"
                    }))
                },
                isAnyModalPresent: function() {
                    return r("#simplemodal-container").length > 0
                },
                createDuplicateModal: function() {
                    var e = this;
                    if(r("#dup-simplemodal-container").length > 0) return;
                    r("#simplemodal-container").hide();
                    var t = r("<a>").attr("id", "close-logout").addClass("modalCloseImg"),
                        n = r("<div>").attr("id", "dup-simplemodal-container").css({
                            display: "block",
                            position: "fixed",
                            "z-index": "1002",
                            width: "800px",
                            left: "calc(50% - 400px)",
                            top: "40%"
                        }).append(t).append(r("#timeout-modal").clone().show());
                    r("#simplemodal-overlay").after(n);
                    var i = r("#dup-simplemodal-container");
                    i.find(".button-continue").on("click", e, e.onCloseModal), i.find("#close-logout").on("click", e, e.onCloseModal), i.find(".button-logout").on("click", e, e.executeLogout), e.onShowModal({
                        fromSimpleModal: !1
                    })
                },
                initModal: function() {
                    var e = this;
                    if(e.isAnyModalPresent()) {
                        e.createDuplicateModal();
                        return
                    }
                    r("#timeout-modal").modal({
                        closeClass: "modalCloseImg",
                        onShow: function() {
                            e.onShowModal({
                                fromSimpleModal: !0
                            })
                        },
                        onClose: function() {
                            e.onCloseModal(), r.modal.close()
                        }
                    })
                },
                countDownOnModal: function(e) {
                    var t = this,
                        n;
                    e.fromSimpleModal ? n = r("#timeout-seconds") : n = r("#dup-simplemodal-container").find("#timeout-seconds"), n.text(t.options.config.LOGOUT_TIMEOUT_COUNTDOWN), t.timeoutSecondsInterval = setInterval(function() {
                        var e = parseInt(n.text(), 10);
                        e > 0 ? n.text(e - 1) : t.executeLogout()
                    }, 1e3)
                },
                onShowModal: function(e) {
                    var t = this;
                    t.model.set({
                        modalOpen: !0
                    }), t.model.clearUITimer(), t.countDownOnModal(e)
                },
                onCloseModal: function(e) {
                    var t, n = !1;
                    e && r(e.target).parents().find("#dup-simplemodal-container").length > 0 ? (t = e.data, n = !0, e.preventDefault()) : t = this, t.model.set({
                        modalOpen: !1
                    }), clearInterval(t.timeoutSecondsInterval), t.model.resetUITimer(), t.model.pingServer(), n && t.restoreOrigModal()
                },
                restoreOrigModal: function() {
                    var e = r("#dup-simplemodal-container");
                    e.find("#close-logout").unbind("click"), e.find(".button-continue").unbind("click"), e.remove(), r("#simplemodal-container").show()
                },
                continueBanking: function(e) {
                    e && e.preventDefault(), r.modal.close()
                },
                executeLogout: function(e) {
                    var t = this;
                    e && e.preventDefault(), e && e.target && r(e.target).parents().find("#dup-simplemodal-container").length > 0 && (t = e.data), r.modal.close();
                    var n = t.options.brand.name === "citizensone" ? "?BRAND=CitizensOne" : "";
                    if(window.location.href.indexOf("/mobile") === -1) window.location.href = t.options.config.NAV_ITEMS.login.href + n;
                    else {
                        var s = i.getOfferDisposition();
                        s !== "" ? window.location.href = i.addQueryParam(t.options.config.NAV_ITEMS.logOut.href, t.options.config.NAV_ITEMS.dispLogoutQueryKey, s) : window.location.href = t.options.config.NAV_ITEMS.logOut.href + n
                    }
                    clearInterval(t.timeoutSecondsInterval)
                }
            })
        }), r("help-content-model", ["require", "hhfbackbone", "application-context"], function(e) {
            var t = e("hhfbackbone"),
                n = e("application-context");
            return t.Model.extend({
                __name__: "modelHelpContent",
                url: function() {
                    var e = this.options.applicationContext ? this.options.applicationContext : new n(this.options.config);
                    return this.options.config.HELP.resourcePath + "/" + e.getCMSPath() + ".json" + "?refreshTime=" + (new Date).getTime()
                },
                initialize: function(e) {
                    this.options = e, this.promise = this.fetch({
                        type: "GET"
                    })
                }
            })
        }), r("help-content-view", ["require", "hhfbackbone", "jquery"], function(e) {
            var t = e("hhfbackbone"),
                n = e("jquery");
            return t.View.extend({
                __name__: "viewHelpContent",
                events: {
                    "click .showhide": "handleShowHide"
                },
                initialize: function(e) {
                    this.options = e, this.render()
                },
                render: function() {
                    var e = this.options.modelData,
                        t = e.hasOwnProperty("ContentDataRecord") && e.ContentDataRecord.hasOwnProperty("Content") ? e.ContentDataRecord.Content.Description : "";
                    this.$el.html(t)
                },
                handleShowHide: function(e) {
                    e.preventDefault(), n(e.currentTarget).toggleClass("open"), n(e.currentTarget).parent().find(".showhide-content").slideToggle()
                }
            })
        }), r("help-navigation-model", ["require", "hhfbackbone"], function(e) {
            var t = e("hhfbackbone");
            return t.Model.extend({
                __name__: "modelHelpNavigation",
                url: function() {
                    return this.options.config.HELP.resourcePath + "/help-navigation.json" + "?refreshTime=" + (new Date).getTime()
                },
                initialize: function(e) {
                    this.options = e, this.promise = this.fetch({
                        type: "GET"
                    })
                }
            })
        }), r("help-navigation-view", ["require", "hhfbackbone", "templates", "jquery"], function(e) {
            var t = e("hhfbackbone"),
                n = e("templates"),
                r = e("jquery");
            return t.View.extend({
                __name__: "viewHelpNavigation",
                template: n["modal-help-navigation.html"],
                events: {
                    "click a": "handleNavigationClick"
                },
                initialize: function(e) {
                    this.options = e, this.render()
                },
                render: function() {
                    this.$el.html(this.template({
                        model: this.options.modelData,
                        userType: this.options.customerType
                    }))
                },
                updateMenuUI: function(e) {
                    var t;
                    e.currentTarget ? t = this.$el.find("a[href=#help-" + e.cmsid + "]") : (e = e.replace(/_/g, "-").replace(/\//g, "_"), t = this.$el.find("a[href=#help-" + e + "]"));
                    if(!t.hasClass("active")) {
                        this.$el.find("a").removeClass("active"), t.addClass("active");
                        if(e.currentTarget) !t.parents("ul").hasClass("help-modal-nav-submenu") && !t.parent().hasClass("active-menu") && (this.$el.find("li.active-menu ul").slideUp(), this.$el.find("li.active-menu").removeClass("active-menu")), t.hasClass("help-modal-nav-more") && (t.parent("li").addClass("active-menu"), t.next("ul").slideDown());
                        else {
                            this.$el.find("li.active-menu ul").slideUp(), this.$el.find("li.active-menu").removeClass("active-menu");
                            if(t.closest("ul").hasClass("help-modal-nav-submenu") || t.hasClass("help-modal-nav-more"))(t.closest(".help-modal-nav-submenu").length ? t.closest(".help-modal-nav-submenu") : t).parent("li").addClass("active-menu"), (t.closest(".help-modal-nav-submenu").length ? t.closest(".help-modal-nav-submenu") : t.next("ul")).slideDown()
                        }
                    }
                },
                handleNavigationClick: function(e) {
                    e.preventDefault();
                    var t = this,
                        n = r(e.currentTarget);
                    e.cmsid = n.attr("href").replace("#help-", "");
                    var i = e.cmsid.split("-");
                    t.trigger("menu:click", {
                        lvl1: i[0],
                        lvl2: i[1] ? i[1] : ""
                    }), this.updateMenuUI(e), n.attr("href") !== "undefined" && r(window).width() < 740 && (r("#help-modal-main").addClass("active"), r("#help-modal-main").scrollTop(0))
                }
            })
        }), r("help-modal-view", ["require", "hhfbackbone", "jquery", "templates", "config-error", "ui-message", "help-content-model", "help-content-view", "help-navigation-model", "help-navigation-view"], function(e) {
            var t = e("hhfbackbone"),
                n = e("jquery"),
                r = e("templates"),
                i = e("config-error"),
                s = e("ui-message"),
                o = e("help-content-model"),
                u = e("help-content-view"),
                a = e("help-navigation-model"),
                f = e("help-navigation-view");
            return t.View.extend({
                __name__: "viewHelpModal",
                template: r["modal-help.html"],
                events: {
                    "click .help-modal-close": "hideModal",
                    "click .help-modal-section a": "scrollToHeading",
                    "click .help-modal-open-nav": function(e) {
                        e.preventDefault(), n("#help-modal-main").removeClass("active")
                    }
                },
                initialize: function(e) {
                    this.options = e, this.vendorPage = ["pop", "transfer", "invoices"], this.olbLandingPage = ["myaccounts", "transfers", "payments", "servicecenter", "newaccount", "contactus", "documents"], this.subViewList = {}
                },
                render: function() {
                    this.$el.html(this.template({
                        assetURL: this.options.config.ASSET_URL
                    }));
                    var e = this,
                        t = new a({
                            config: this.options.config
                        });
                    t.promise.done(function(t) {
                        e.modelData = t, e.renderNavigation()
                    }), t.promise.fail(function() {
                        e.renderNavigationError(new s(i.MESSAGES.helpNavigationUnavailable))
                    }), t.promise.always(function() {
                        e.renderContent(), e.renderNavigationOption()
                    }), n(window).on("hashchange.hhfViewHelpModal", function(t) {
                        e.updateContextWithHash(t)
                    })
                },
                clearListeners: function() {
                    n(window).off("hashchange.hhfViewHelpModal"), t.View.prototype.clearListeners.call(this)
                },
                renderNavigation: function() {
                    this.subViewList.helpNavigationView = new f({
                        modelData: this.modelData,
                        customerType: this.options.settings && this.options.settings.userData && this.options.settings.userData.customerType ? this.options.settings.userData.customerType : "NONE",
                        el: this.$el.find("#help-modal-menu")
                    }), this.listenTo(this.subViewList.helpNavigationView, "menu:click", this.renderContent)
                },
                renderNavigationOption: function() {
                    this.subViewList.helpNavigationView && this.subViewList.helpNavigationView.updateMenuUI(this.options.applicationContext.getFullNavContext())
                },
                renderContent: function(e) {
                    var t = this.options.applicationContext;
                    typeof e != "undefined" && e !== null && (t.updateOptions(e), e = null);
                    var r = this.$el.find(".help-modal-content");
                    r.children().removeClass("active"), r.children("img").hide();
                    var a = this.$el.find("#" + t.getHelpContentDOMid());
                    if(a.length > 0) a.addClass("active"), n("#help-modal-main").scrollTop(0, 0);
                    else {
                        r.append(n('<div class="help-modal-section active" id="' + t.getHelpContentDOMid() + '">'));
                        var f = this;
                        this.helpContentModel = new o({
                            config: this.options.config,
                            applicationContext: t
                        }), this.helpContentModel.promise.done(function() {
                            f.subViewList.helpContentView = new u({
                                modelData: f.helpContentModel.toJSON(),
                                el: f.$el.find("#" + t.getHelpContentDOMid())
                            })
                        }), this.helpContentModel.promise.fail(function() {
                            f.renderContentError(new s(i.MESSAGES.helpContentUnavailable), t)
                        })
                    }
                },
                renderNavigationError: function(e) {
                    this.$el.find("#help-modal-menu").html('<div style="padding:1em;">' + e.getMsg() + "</div>")
                },
                renderContentError: function(e, t) {
                    this.$el.find("#" + t.getHelpContentDOMid()).html(e.getMsg())
                },
                showModal: function(e) {
                    this.$el.css("top", n(e.target).offset().top + 30), this.$el.css("left", n(e.target).offset().left - this.$el.width() + n(e.target).width()), this.$el.show(), this.$el.resize(), n("#help-modal").resizable(), this.$el.draggable({
                        handle: ".help-modal-header-desktop"
                    }), n("body").css("overflow", "hidden")
                },
                hideModal: function(e) {
                    e.preventDefault(), this.$el.hide(), n("body").css({
                        overflow: ""
                    })
                },
                updateContextWithHash: function(e) {
                    var t = {},
                        r = window.location.hash.split("?")[0].split("/") || null;
                    t.lvl1 = r && n.inArray(r[0].replace("#", ""), this.olbLandingPage) >= 0 ? r[0].replace("#", "") : "", t.lvl2 = "";
                    if(!t.lvl1) return;
                    this.options.applicationContext.updateOptions({
                        lvl1: t.lvl1,
                        lvl2: t.lvl2
                    }), this.renderContent(), this.renderNavigationOption()
                },
                scrollToHeading: function(e) {
                    var t = e.currentTarget;
                    if(n(t).attr("href") === "#") return e.preventDefault();
                    if(n(t).attr("href").charAt(0) === "#") {
                        e.preventDefault(), n("#help-modal-main").scrollTop(0);
                        var r = n(n(t).attr("href")).position().top - 30;
                        n("#help-modal-main").scrollTop(r)
                    }
                }
            })
        }), r("citizensHeaderFooter", ["require", "handlebars.runtime", "jquery", "underscore", "templates", "jqueryui", "jquery.xdomainrequest", "browser-type", "css", "config-error", "config-topics", "header", "footer", "token", "helper", "ui-message", "application-context", "config-hhf", "bootstrap", "timeout-model", "timeout-modal-view", "help-modal-view"], function(t) {
            function H(e) {
                P.brand = B(), g.consoleMark("HHF.init()");
                var t = new s.Deferred;
                return j(), s(document).on("click mousemove keydown scroll", function(e) {
                    return L.resetUITimer(), !0
                }), N = s.extend({}, P, e), I(e), t
            }

            function B() {
                var e = document.cookie.split(";"),
                    t;
                for(var n = 0; n < e.length; n++) "undefined" !== e[n] && "" !== e[n] && e[n].indexOf("BRANDVALUE") != -1 && (t = e[n].trim().split("=")[1]);
                return t === "CITIZENSONE" ? t : "citizensbank"
            }

            function j() {
                L = {
                    resetUITimer: function() {
                        return !0
                    }
                }
            }

            function F(e) {
                return e ? e.replace(/\w\S*/g, function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }) : ""
            }

            function I(e) {
                N.brand = B();
                var t = N.brand === "CITIZENSONE" ? "Citizens One" : "Citizens Bank",
                    r = window.location.pathname,
                    i = r.substring(r.lastIndexOf("/") + 1),
                    o = i.indexOf("login") !== -1 ? "Online Login" : "Online Banking";
                parent.document.title = o + " | " + t, g.consoleMark("HHF.update()");
                var u = new s.Deferred;
                N = s.extend({}, N, e);
                if(e.token) {
                    var a = m.createSettingsPatchFromString(e.token);
                    s.extend(a.userData, {
                        lastActiveDate: N.userData.lastActiveDate
                    });
                    var f = N.userData.firstName,
                        l = N.userData.businessName;
                    if(N.userData && N.userData.dob && N.userData.dob.day && N.userData.dob.month) {
                        var c = {
                            day: N.userData.dob.day,
                            month: N.userData.dob.month
                        };
                        s.extend(a.userData, {
                            dob: c
                        })
                    }
                    s.extend(a.userData, {
                        firstName: F(f)
                    }), s.extend(a.userData, {
                        businessName: F(l)
                    }), N = s.extend({}, N, a)
                }
                d.setEl(N) || u.rejectWith(this, [new y({
                    msg: "Invalid header element."
                })]), v.setEl(N), g.setCssClassOnDom(N.userData.customerType), new E({
                    handlebars: n,
                    validPermsForHHF: g.mapPermissionsHexToArray(N.permissions),
                    enabledFeaturesForHHF: g.mapFeaturesHexToObject(N.features)
                }), C = U(N), k = z(N, C), J(N, C, k);
                var h = X();
                return h.always(function() {
                    W(M, _)
                }), u
            }

            function q(e, t) {
                var n = "";
                return e.useCSS && (n += c.getLibsCSS(t), n += c.getMainCSS(t), n += c.getCoreHHFCSS(t)), n += c.getVendorCSS({
                    config: t,
                    settings: e,
                    vendor: "citizensns"
                }), n
            }

            function R(e, t) {
                var n = "<style>";
                return n += "\n.help-modal-header .help-modal-close {background: url(" + t.ASSET_URL + "/img/modal-help-close.png) center center no-repeat transparent; background-size: 20px;}", n += "\n.help-modal-menu a.active {background: #f2faf8 url(" + t.ASSET_URL + "/img/arrow-right-green.png) right 20px center no-repeat; background-position: right 20px center; background-size:7px}", n += "\n.account-section-title.checkmark h1 {padding: 0px 0px 5px 28px !important; }", n += "\n.lt-ie9 .help-modal-menu a.active {background: #f2faf8 url(" + t.ASSET_URL + "/img/arrow-right-green.png) right 20px center no-repeat !important; background-size:7px !important}", n += "\n.input-wrapper .tooltip {margin-left: 1px;}", n += "\n</style>", n
            }

            function U(e) {
                e.olbHost || (e.olbHost = e.host);
                var t = new w(e),
                    n = !1;
                return e.userData.customerType === "BUSINESS" && typeof e.userData.badges.GEMINI != "undefined" && e.userData.badges.GEMINI === !0 && (n = !0), e.userData.customerType === "BUSINESS" && (n === !1 ? s.extend(!0, t.NAV_ITEMS, t.NAV_ITEMS_BUSINESS) : s.extend(!0, t.NAV_ITEMS, t.NAV_ITEMS_GEMINI)), typeof t.NAV_ITEMS.logOut == "function" && (t.NAV_ITEMS.logOut = t.NAV_ITEMS.logOut(e)), typeof t.VENDOR_SPECIFIC_PING_URL == "function" && (t.VENDOR_SPECIFIC_PING_URL = t.VENDOR_SPECIFIC_PING_URL(e)), t
            }

            function z(e, t) {
                var n = "";
                e.userData.badges.GEMINI ? n = "Gemini" : e.userData.customerType === "BUSINESS" && (n = "Business"), e.contextLevel1 === "" && (e.contextLevel1 = "citizensns" + (e.useVendorUrlParam && e.vendorUrlParam ? "-" + e.vendorUrlParam : ""));
                if(e.legacyOLBcontextLevel1 !== "") e.contextLevel1 = e.legacyOLBcontextLevel1, e.contextLevel2 = e.legacyOLBcontextLevel2;
                else if(window.location.hash) {
                    var r = window.location.hash.split("?")[0];
                    r = r.split("/")[0], e.contextLevel1 = r.replace(/[^a-z0-9-_]+/i, "")
                }
                return new b({
                    lvl1: e.contextLevel1,
                    lvl2: e.contextLevel2,
                    user: n
                })
            }

            function W(e, t) {
                var n = function(n, r) {
                        g.consoleMark("cssIsLoaded executeTask()"), e.showNavigation();
                        var i = t;
                        s(".citizens-header-footer-overlay").fadeOut(300, function() {
                            s(this).remove(), i.toggleSticky()
                        });
                        var o = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        t && o > 881 && (t.toggleSticky(), window.scrollTo(0, 0)), r && n.retestReliableHiddenOffsets()
                    },
                    r = navigator.userAgent || {},
                    i = /MSIE (\d+\.\d+);/,
                    o = r.match(i),
                    u = this;
                if(o && Math.round(o[1]) < 12) {
                    g.consoleMark("cssIsLoaded - match IE lt 12, delay element reveal");
                    var a = window.setInterval(function() {
                        clearInterval(a), n(u, !0)
                    }, 1e3)
                } else n(u)
            }

            function X() {
                var e = this,
                    t = new s.Deferred;
                if(D) return t.resolveWith(e, [new y({
                    msg: "Header/Footer rendered.  CSS loaded.",
                    type: "status"
                })]), t;
                var n = 0,
                    r = new RegExp("((app.bundle)|(main([.-]min)?))[a-zA-Z0-9.-]*.css", "g"),
                    i = !1,
                    u = [];
                g.consoleMark("main.css polling BEGIN");
                var a = window.setInterval(function() {
                    var s = [];
                    i || o.each(document.styleSheets, function(e) {
                        e.href && (u.push(e), r.test(e.href) && (i = !0))
                    }), u.length && o.each(u, function(e) {
                        if(e.href && r.test(e.href)) try {
                            e.rules || s.push(e)
                        } catch(t) {}
                    }), u = s, ++n >= 40 && (D = !0), i && !u.length && (D = !0), D && (g.consoleMark("main.css polling DONE"), clearInterval(a), t.resolveWith(e, [new y({
                        msg: "Header/Footer rendered.  CSS loaded.",
                        type: "status"
                    })]))
                }, 200);
                return t
            }

            function V(e, t) {
                if(L.hasOwnProperty("cid")) return;
                L = new S({
                    config: t,
                    configTopics: p
                }), A = new x({
                    config: t,
                    brand: t.BRANDS_LIST[e.brand],
                    model: L,
                    el: "#timeout-modal"
                })
            }

            function $() {
                A.clearListeners && A.clearListeners(), L.resetTokenRefreshTimer && L.resetTokenRefreshTimer()
            }

            function J(e, t, n) {
                var r = R(e, t),
                    i = q(e, t);
                s(".citizens-header-footer-injected").length === 0 && d.getEl().before('<div class="citizens-header-footer-injected">\n' + i + "\n" + r + "\n" + '<div class="citizens-header-footer">' + '<div class="citi-modal timeout-modal simplemodal-data" id="timeout-modal" style="display:none;"></div>' + '<div class="citi-modal help-modal" id="help-modal" tabindex="0" style="display:none;"></div>' + "\n" + "</div>" + "\n" + "</div>");
                if(e.showTimeout) {
                    if(L.clearTokenRefreshTimer) {
                        var o = L.clearTokenRefreshTimer();
                        o && j()
                    }
                    V(e, t)
                } else $();
                O.clearListeners && O.clearListeners(), O = new T({
                    config: t,
                    applicationContext: n,
                    settings: e,
                    el: "#help-modal"
                }), e.initialHelpRequest && O.render(), M.clearListeners && M.clearListeners(), M = d.render(e, t, "UID_TOKEN=" + m.getTokenStringFromSettings(e), n), O.listenTo(M, "help:click", O.showModal), v.getEl() && (_.clearListeners && _.clearListeners(), _ = v.render(e, t))
            }

            function K(e) {
                var t = "?";
                e.indexOf("?") && (t = "&"), window.location = e + t + "UID_TOKEN=" + m.getTokenStringFromSettings(settings)
            }
            var n = t("handlebars.runtime"),
                r = t("jquery"),
                i = window.$;
            window.$ && window.$.noConflict && window.$.noConflict(!0);
            var s = r;
            typeof window.$ == "undefined" && (window.$ = window.jQuery = i);
            var o = t("underscore"),
                u = t("templates"),
                a = t("jqueryui"),
                f = t("jquery.xdomainrequest"),
                l = t("browser-type"),
                c = t("css"),
                h = t("config-error"),
                p = t("config-topics"),
                d = t("header"),
                v = t("footer"),
                m = t("token"),
                g = t("helper"),
                y = t("ui-message"),
                b = t("application-context"),
                w = t("config-hhf"),
                E = t("bootstrap"),
                S = t("timeout-model"),
                x = t("timeout-modal-view"),
                T = t("help-modal-view"),
                N = {},
                C = {},
                k = {},
                L = {},
                A = {},
                O = {},
                M = {},
                _ = {},
                D = !1,
                P = {
                    host: "",
                    sponsorId: "",
                    brand: "citizensbank",
                    permissions: "",
                    oboRole: "",
                    features: "",
                    msgCount: "",
                    alertCount: "",
                    vendorUrlParam: "",
                    token: "",
                    userData: {
                        customerType: "NONE",
                        badges: "NONE",
                        addresses: [{
                            postalCode: "NONE"
                        }],
                        lastActiveDate: "",
                        firstName: "",
                        businessName: "",
                        dob: {
                            month: "NONE",
                            day: "NONE"
                        }
                    },
                    headerSelector: ".citizens-header",
                    footerSelector: ".citizens-footer",
                    contextLevel1: "",
                    contextLevel2: "",
                    legacyOLBcontextLevel1: "",
                    legacyOLBcontextLevel2: "",
                    helpResourceURL: "/efs/help",
                    assetURL: "/efs/hhf",
                    olbHost: "",
                    servletPath: "/efs/servlet/efsonline",
                    servletNSPath: "/efs/servlet/efs",
                    homePage: "/index.jsp",
                    logout: "/logout.jsp",
                    showNav: !0,
                    showLogoutOnly: !1,
                    initialHelpRequest: !0,
                    showTimeout: !0,
                    useCSS: !0,
                    useVendorUrlParam: !0,
                    useCustomerType: !1
                },
                Q = e && H(e) || {};
            return Q.init = H, Q.update = I, Q.redirectLink = K, Q.resetStickyFooter = function() {
                return _.toggleSticky()
            }, Q.updateBranchLocator = function(e) {
                return _.updateBranchLocator(e)
            }, Q.addSubscriber = function(e, t) {
                return g.addSubscriber(e, t)
            }, Q.getApplicationContextString = function() {
                return k.getContextString()
            }, Q
        }), n("citizensHeaderFooter")
});
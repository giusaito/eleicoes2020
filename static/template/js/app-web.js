! function t(e, a, i) {
    function s(l, r) {
        if (!a[l]) {
            if (!e[l]) {
                var c = "function" == typeof require && require;
                if (!r && c) {
                    return c(l, !0);
                }
                if (n) {
                    return n(l, !0);
                }
                throw new Error("Cannot find module '" + l + "'");
            }
            var o = a[l] = {
                exports: {}
            };
            e[l][0].call(o.exports, function(t) {
                var a = e[l][1][t];
                return s(a ? a : t);
            }, o, o.exports, t, e, a, i);
        }
        return a[l].exports;
    }
    for (var n = "function" == typeof require && require, l = 0; l < i.length; l++) {
        s(i[l]);
    }
    return s;
}({
    1: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/dom"),
            o = t("../../js/libs/webservice.js"),
            d = i(o),
            u = function() {
                function t(e) {
                    var a = this;
                    s(this, t), this.data = void 0, this.request = (0, d["default"])().brazilExtract().then(function(t) {
                        return a.data = t;
                    }), r["default"].mount(e, this);
                }
                return n(t, [{
                    key: "blink",
                    value: function(t, e) {
                        if (e === !0) {
                            var a = t.getAttribute("data-value"),
                                i = t.getAttribute("data-old");
                            i && i !== a && (c.DOM.addClass(t, "change"), setTimeout(function() {
                                c.DOM.removeClass(t, "change");
                            }, 600)), t.setAttribute("data-old", a);
                        }
                    }
                }, {
                    key: "getCitiesStarted",
                    value: function() {
                        return window.servicesStatus.isElectionStarted === !1 ? 0 : this.data.gc.ap;
                    }
                }, {
                    key: "getElectecMayorLabel",
                    value: function() {
                        return this.data.gc.pe > 1 ? "prefeitos eleitos" : "prefeito eleito";
                    }
                }, {
                    key: "getElectecMayorLabel",
                    value: function() {
                        return parseInt(this.data.gc.pe) > 1 ? "prefeitos eleitos" : "prefeito eleito";
                    }
                }, {
                    key: "getSecondRoundLabel",
                    value: function() {
                        return parseInt(this.data.gc.st) > 1 ? "terão 2° turno" : "terá 2° turno";
                    }
                }, {
                    key: "view",
                    value: function() {
                        if (this.data && "1turno" == window.page.round) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: ["Grandes cidades"],
                                    attrs: {
                                        className: "big-cities"
                                    }
                                }, {
                                    tag: "ul",
                                    children: [{
                                        tag: "li",
                                        children: [{
                                            tag: "span",
                                            children: [this.getCitiesStarted()],
                                            attrs: {
                                                className: "count",
                                                "data-old": "",
                                                "data-value": this.getCitiesStarted(),
                                                config: this.blink.bind(this)
                                            }
                                        }, {
                                            tag: "span",
                                            children: ["em apuração"],
                                            attrs: {
                                                className: "desc"
                                            }
                                        }],
                                        attrs: {
                                            className: "item"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "span",
                                            children: [this.data.gc.pe],
                                            attrs: {
                                                className: "count",
                                                "data-old": "",
                                                "data-value": this.data.gc.pe,
                                                config: this.blink.bind(this)
                                            }
                                        }, {
                                            tag: "span",
                                            children: [this.getElectecMayorLabel()],
                                            attrs: {
                                                className: "desc"
                                            }
                                        }],
                                        attrs: {
                                            className: "item"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "span",
                                            children: [this.data.gc.st],
                                            attrs: {
                                                className: "count",
                                                "data-old": "",
                                                "data-value": this.data.gc.st,
                                                config: this.blink.bind(this)
                                            }
                                        }, {
                                            tag: "span",
                                            children: [this.getSecondRoundLabel()],
                                            attrs: {
                                                className: "desc"
                                            }
                                        }],
                                        attrs: {
                                            className: "item"
                                        }
                                    }],
                                    attrs: {
                                        className: "cities-counting-details"
                                    }
                                }]
                            };
                        }
                    }
                }]), t;
            }();
        a["default"] = u;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50
    }],
    2: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../gate/script.jsx"),
            r = t("../mobile-modal/script.jsx"),
            c = i(r),
            o = t("../favorite-management/script.jsx"),
            d = t("../../js/utils"),
            u = t("../../js/libs/metrics"),
            h = i(u),
            f = t("../router/script.jsx"),
            p = i(f),
            g = t("../mobile-history/script.jsx"),
            m = i(g),
            v = t("../../components/cities-list/script.jsx"),
            y = i(v),
            b = t("../../components/main-content-loading/script.jsx"),
            C = i(b),
            estado = {
                ac: "01392",
                al: "27855",
                ap: "06050",
                am: "02550",
                ba: "38490",
                ce: "13897",
                es: "57053",
                go: "93734",
                ma: "09210",
                mt: "90670",
                ms: "90514",
                mg: "41238",
                pa: "04278",
                pb: "20516",
                pr: "75353",
                pe: "25313",
                pi: "12190",
                rj: "60011",
                rn: "17612",
                rs: "88013",
                ro: "00035",
                rr: "03018",
                sc: "81051",
                sp: "71072",
                se: "31054",
                to: "73440"
            },
            N = "1turno" == window.page.round ? "lastCity" : "lastCity2t",
            M = (0, d.invertObject)(estado),
            k = function() {
                function t(e) {
                    var a = this;
                    if (s(this, t), this.active = void 0, this.cities = [], this.citiesById = {}, null === d.storage.getItem("firstUserAccess") && null === d.storage.getItem("firstUserAccess2t") && window.page.isCityPage === !0 && h["default"].update("gate"), "2turno" == window.page.round && null === d.storage.getItem("firstUserAccess2t")) {
                        var i = o.favCities.getFavorites();
                        i.map(function(t) {
                            o.favCities.removeItem(t);
                        }), d.storage.setItem("firstUserAccess2t", "false");
                    }(0, d.download)(window.page.roundpath + "/data/cidades.json", void 0).then(function(t) {
                        a.setCities(t);
                        var i = a.getLastCity(),
                            s = o.favCities.getFavorites();
                        if (void 0 !== e) {
                            console.log("cities() case 1"), h["default"].update("city"), a.setActive(e.id), null === d.storage.getItem("firstUserAccess") && 0 == window.page.isMobile && (console.log("cities() case 1.1"), 0 == s.length && a.setFirstFavorites(), d.storage.setItem("firstUserAccess", "false"));
                        } else {
                            if (null !== i) {
                                console.log("cities() case 2"), a.setActive(i.id), window.page.isCityPage === !1 && 0 == window.page.isMobile && h["default"].update("big-cities");
                            } else {
                                if (s.length > 0) {
                                    console.log("cities() case 3"), a.setActive(s[0]), window.page.isCityPage === !1 && 0 == window.page.isMobile && h["default"].update("big-cities");
                                } else {
                                    if (console.log("cities() case 4"), "2turno" == window.page.round) {
                                        if (0 == window.page.isMobile) {
                                            if (a.setActive(estado.rj, {
                                                    history: !0,
                                                    route: !1,
                                                    metrics: !1
                                                }), window.page.isCityPage === !0) {
                                                var n = !0;
                                                y["default"].open(n), h["default"].update("gate");
                                            } else {
                                                a.setFirstFavorites(estado.rj), h["default"].update("big-cities");
                                            }
                                        } else {
                                            c["default"].show({
                                                type: "modal-suggest",
                                                classExtra: "modal-suggest show-header hide-close",
                                                metricsLocal: "bloco suggest",
                                                gateClass: !0
                                            });
                                        }
                                    }
                                    if ("1turno" == window.page.round) {
                                        if (1 == window.page.isMobile) {
                                            new l.GateMobile;
                                        } else {
                                            ! function() {
                                                var t = new l.Gate(window.page.isCityPage);
                                                window.page.isCityPage === !0 ? h["default"].update("gate") : 0 == window.page.isMobile && h["default"].update("big-cities"), d.actionEvents.once("geoloc", function(e, i) {
                                                    window.page.isCityPage === !0 ? (t.init(e, i), a.setActive(e.id, {
                                                        history: !1,
                                                        route: !1,
                                                        metrics: !1
                                                    })) : (console.log("city.id", e.id), t.destroy());
                                                });
                                            }();
                                        }
                                    }
                                }
                            }
                        }
                        d.actionEvents.trigger("cities", t);
                    });
                }
                return n(t, [{
                    key: "setFirstFavorites",
                    value: function(t) {
                        var e = t && this.findById(t) || this.getActive();
                        if (e && (o.favCities.addItem(e.id), this.isCapital(e.id) === !1)) {
                            var a = this.getCapital(e.uf);
                            o.favCities.addItem(a);
                        }
                    }
                }, {
                    key: "setCities",
                    value: function(t) {
                        var e = this;
                        this.cities = t.map(function(t) {
                            var a = t.split(":"),
                                i = {
                                    id: a[2],
                                    uf: a[1],
                                    name: a[0],
                                    has2T: (0, d.has2T)(a[2]),
                                    path: window.page.basepath + "/" + window.page.round + "/" + (0, d.toSlug)(a[1]) + "/" + (0, d.toSlug)(a[0]) + "/"
                                };
                            return e.citiesById[i.id] = i, i;
                        });
                    }
                }, {
                    key: "getCities",
                    value: function() {
                        return this.cities;
                    }
                }, {
                    key: "findById",
                    value: function(t) {
                        return this.citiesById[t];
                    }
                }, {
                    key: "findByName",
                    value: function(t, e) {
                        return this.cities.filter(function(a) {
                            return (0, d.toSlug)(a.name) === (0, d.toSlug)(t) && (0, d.toSlug)(a.uf) === (0, d.toSlug)(e);
                        })[0];
                    }
                }, {
                    key: "setActive",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        console.log("setActive()");
                        var a = this.getActive(),
                            i = a && a.id || !1,
                            s = this.findById(t),
                            n = !0;
                            console.log('entrou -- ');
                            console.log(s);
                        e.route !== !1 && (void 0 !== this.active || e.forceRoute === !0 ? (console.log("setActive() push"), p["default"].pushCity(s.id)) : (console.log("setActive() replace"), p["default"].replaceCity(s.id))), i != t && (this.active = s, n === !0 && (window.page.isMobile && C["default"].closeAction(), d.actionEvents.trigger("activeCity", this.active, e.isGeolocFail))), 1 == window.page.isMobile && 0 != i && i != t && m["default"].setCity(i), document.title = (0, d.getPageTitle)(window.page.metaCityTitle, s), e.history !== !1 && d.storage.setItem(N, s), window.city = s, e.metrics !== !1 && h["default"].update("city");
                    }
                }, {
                    key: "getActive",
                    value: function() {
                        return this.active;
                    }
                }, {
                    key: "getLastCity",
                    value: function() {
                        return d.storage.getItem(N);
                    }
                }, {
                    key: "isCapital",
                    value: function(t) {
                        var e = t && t.id || t;
                        return !!M[e];
                    }
                }, {
                    key: "getCapital",
                    value: function(t) {
                        return w[t.toLowerCase()];
                    }
                }]), t;
            }(),
            O = new k(window.city);
        window.cities = O, a["default"] = O;
    }, {
        "../../components/cities-list/script.jsx": 6,
        "../../components/main-content-loading/script.jsx": 19,
        "../../js/libs/metrics": 43,
        "../../js/utils": 51,
        "../favorite-management/script.jsx": 14,
        "../gate/script.jsx": 16,
        "../mobile-history/script.jsx": 21,
        "../mobile-modal/script.jsx": 22,
        "../router/script.jsx": 24
    }],
    3: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }

        function n(t, e) {
            if ("function" != typeof e && null !== e) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.CandidateAvatarMobile = a.CandidateAvatar = void 0;
        var r = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            c = t("../../js/utils"),
            o = t("../gauge/script.jsx"),
            d = i(o),
            u = t("../../js/libs/dom"),
            h = t("../../js/libs/mithril"),
            f = i(h),
            p = t("../../js/libs/metrics"),
            g = i(p),
            m = t("../brazil-cities/script.jsx"),
            v = i(m),
            y = t("../mobile-modal/script.jsx"),
            b = i(y),
            C = t("../../js/libs/webservice.js"),
            w = i(C),
            N = {
                nu: "",
                ps: "",
                v: "",
                vp: "0,00",
                s: 0
            },
            M = function() {
                function t(e) {
                    var a = this;
                    l(this, t), e && (c.actionEvents.bind("activeCity", function(t, e) {
                        a.candidateImage = (0, c.candidateImage)();
                    }), this.init(e));
                }
                return r(t, [{
                    key: "init",
                    value: function(t) {
                        this.candidate = N, this.candidateStatus = {}, this.avatarType = t.avatarType, this.hideClass = "", this.candidateImage = (0, c.candidateImage)(), this.dataCity = {}, "2turno" == window.page.round && 0 == window.page.isMobile ? this.hasGauge = !1 : this.hasGauge = t.hasGauge === !0, t.candidate && Object.assign(this.candidate, t.candidate), this.gaugeCfg = this.getSize(), this.sizeHandler(this.gaugeCfg.type), this.gaugeCfg.container = t.container, this.hasGauge && (this.gauge = new d["default"](this.gaugeCfg), window.gauge = this.gauge), f["default"].mount(t.container, this);
                    }
                }, {
                    key: "update",
                    value: function(t, e, a) {
                        return this.hideClass = "", this.candidateStatus = a || {
                            status: null
                        }, t ? (this.cityId = e, this.candidate = t, this.dataCity = v["default"].findById(this.cityId), this.candidateImage = (0, c.candidateImage)(this.dataCity, this.candidate), void(this.hasGauge && this.gauge.update(t.vp, this.candidateStatus))) : (this.hideClass = "hide", void(t = N));
                    }
                }, {
                    key: "getSize",
                    value: function() {
                        var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                        return "modal" == this.avatarType ? {
                            width: 120,
                            height: 120,
                            radius: 56,
                            lineWidth: 8,
                            type: "narrow",
                            typeGauge: "modal"
                        } : window.page.isMobile ? {
                            width: 150,
                            height: 150,
                            radius: 45,
                            lineWidth: 8,
                            type: "narrow"
                        } : t < 1200 ? {
                            width: 90,
                            height: 90,
                            radius: 37,
                            lineWidth: 8,
                            type: "narrow"
                        } : {
                            width: 110,
                            height: 110,
                            radius: 46,
                            lineWidth: 10,
                            type: "wide"
                        };
                    }
                }, {
                    key: "sizeHandler",
                    value: function(t) {
                        var e = this;
                        this.currentType = t;
                        var a = function() {
                            if (e.gauge) {
                                var t = e.getSize();
                                t.type != e.currentType && (e.gaugeCfg = e.getSize(), e.currentType = t.type, e.gauge.updateSize(e.gaugeCfg));
                            }
                        };
                        u.DOM.Event(window).on("resize", a);
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: ["1turno" == window.page.round ? {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "img",
                                        attrs: {
                                            className: "candidate-image",
                                            src: this.candidateImage,
                                            onerror: c.candidateImageError,
                                            alt: (0, c.capitalizeName)(this.candidate.nu)
                                        }
                                    }],
                                    attrs: {
                                        className: "candidate-mask"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.candidateStatus.value],
                                    attrs: {
                                        className: "candidate-status situation-" + this.candidate.s
                                    }
                                }]
                            } : {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "img",
                                        attrs: {
                                            className: "candidate-image",
                                            src: this.candidateImage,
                                            onerror: c.candidateImageError,
                                            alt: (0, c.capitalizeName)(this.candidate.nu)
                                        }
                                    }],
                                    attrs: {
                                        className: "candidate-mask"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.candidateStatus.value],
                                    attrs: {
                                        className: "candidate-status situation-" + this.candidate.s
                                    }
                                }, {
                                    tag: "span",
                                    attrs: {
                                        className: "candidate-porcent-progress",
                                        style: "height:" + (0, c.percentToFloat)(this.candidate.vp) + "%"
                                    }
                                }],
                                attrs: {
                                    className: "candidate-porcent"
                                }
                            }, {
                                tag: "div",
                                children: [this.hasGauge && this.gauge.view()],
                                attrs: {
                                    className: "gauge"
                                }
                            }, 1 == this.candidate.van && "1turno" == window.page.round ? {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: ["Inelegível"]
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-info-2 status-" + this.candidateStatus.status
                                    }
                                }],
                                attrs: {
                                    className: "info"
                                }
                            } : null, {
                                tag: "span",
                                children: [1 == this.candidate.van && "2turno" == window.page.round ? {
                                    tag: "div",
                                    children: [{
                                        tag: "span",
                                        children: ["Inelegível"]
                                    }, {
                                        tag: "i",
                                        attrs: {
                                            className: "icon icon-info-2 status-" + this.candidateStatus.status
                                        }
                                    }],
                                    attrs: {
                                        className: "info"
                                    }
                                } : 1 == this.candidate.van ? null : {
                                    tag: "span",
                                    children: [this.candidate.vp, " ", {
                                        tag: "span",
                                        children: ["%"],
                                        attrs: {
                                            className: "percent"
                                        }
                                    }],
                                    attrs: {
                                        className: "candidate-votes"
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, c.capitalizeName)(this.candidate.nu)],
                                    attrs: {
                                        className: "candidate-name"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.candidate.ps],
                                    attrs: {
                                        className: "candidate-party situation-" + this.candidate.s
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, c.formatNumber)(this.candidate.v), " ", {
                                        tag: "span",
                                        children: [(0, c.getVotesLabel)(this.candidate.v)],
                                        attrs: {
                                            className: "candidate-total-votes-label"
                                        }
                                    }],
                                    attrs: {
                                        className: "candidate-total-votes"
                                    }
                                }],
                                attrs: {
                                    className: "info-candidate"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-facebook",
                                        "data-metrics-location": "bloco prefeitos",
                                        "data-metrics-action": "compartilhar_candidato_destaque_facebook",
                                        "data-share": (0, c.json2data)({
                                            candidate: this.candidate,
                                            city: this.dataCity
                                        })
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-twitter",
                                        "data-metrics-location": "bloco prefeitos",
                                        "data-metrics-action": "compartilhar_candidato_destaque_twitter",
                                        "data-share": (0, c.json2data)({
                                            candidate: this.candidate,
                                            city: this.dataCity
                                        })
                                    }
                                }],
                                attrs: {
                                    className: "share"
                                }
                            }],
                            attrs: {
                                className: "candidate-avatar candidate-avatar-type-" + this.avatarType + " " + this.hideClass + " candidate-status-" + this.candidateStatus.status
                            }
                        };
                    }
                }]), t;
            }(),
            k = function(t) {
                function e(t) {
                    l(this, e);
                    var a = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return 1 == t.actionEvent && c.actionEvents.bind("activeCity", function(t, e) {
                        a.candidateImage = (0, c.candidateImage)();
                    }), a.init(t), a;
                }
                return n(e, t), r(e, [{
                    key: "openModal",
                    value: function(t) {
                        var e = u.DOM.closest(t.target, ".candidate-avatar"),
                            a = JSON.parse(decodeURIComponent(u.DOM.attr(e, "data-dados")));
                        u.DOM.hasClass(e, "candidate-status-cancelled") && (a.type = "modal-inactive");
                        var i = (0, w["default"])().city(a.city.id).mayor();
                        i.then(function(t) {
                            i.destroy();
                            b["default"].show({
                                type: a.type,
                                metricsLocal: "bloco prefeitos",
                                data: {
                                    city: t,
                                    candidate: a.candidate
                                }
                            });
                        }), "modal-inactive" == a.type ? g["default"].click("bloco prefeitos", "abrir_modal_inelegivel", !1) : g["default"].click("bloco prefeitos", "abrir_modal_compartilhar", !1);
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [1 == this.candidate.van ? {
                                tag: "span",
                                attrs: {
                                    className: "candidate-inactive",
                                    onclick: this.openModal.bind(this)
                                }
                            } : null, {
                                tag: "span",
                                children: [{
                                    tag: "img",
                                    attrs: {
                                        className: "candidate-image",
                                        src: this.candidateImage,
                                        onerror: c.candidateImageError,
                                        alt: (0, c.capitalizeName)(this.candidate.nu)
                                    }
                                }],
                                attrs: {
                                    className: "candidate-mask"
                                }
                            }, {
                                tag: "div",
                                children: [this.hasGauge && this.gauge.view()],
                                attrs: {
                                    className: "gauge"
                                }
                            }, {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [this.candidateStatus.value],
                                    attrs: {
                                        className: "candidate-status situation-" + this.candidate.s
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.candidate.ps],
                                    attrs: {
                                        className: "candidate-party"
                                    }
                                }],
                                attrs: {
                                    className: "legend"
                                }
                            }, 1 == this.candidate.van ? {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: ["Inelegível"]
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-info-2"
                                    }
                                }],
                                attrs: {
                                    className: "info"
                                }
                            } : {
                                tag: "span",
                                children: [this.candidate.vp, " ", {
                                    tag: "span",
                                    children: ["%"],
                                    attrs: {
                                        className: "percent"
                                    }
                                }],
                                attrs: {
                                    className: "candidate-votes"
                                }
                            }, {
                                tag: "span",
                                children: [(0, c.capitalizeName)(this.candidate.nu)],
                                attrs: {
                                    className: "candidate-name"
                                }
                            }, {
                                tag: "span",
                                children: [(0, c.formatNumber)(this.candidate.v), " votos"],
                                attrs: {
                                    className: "candidate-total-votes"
                                }
                            }, 1 == this.candidate.van ? null : {
                                tag: "div",
                                children: ["compartilhe", {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-share"
                                    }
                                }],
                                attrs: {
                                    className: "share",
                                    onclick: this.openModal.bind(this)
                                }
                            }],
                            attrs: {
                                className: "candidate-avatar candidate-avatar-type-" + this.avatarType + " " + this.hideClass + " candidate-status-" + this.candidateStatus.status,
                                "data-dados": (0, c.json2data)({
                                    candidate: this.candidate,
                                    city: v["default"].findById(this.cityId),
                                    type: "modal-mayor"
                                })
                            }
                        };
                    }
                }]), e;
            }(M);
        a.CandidateAvatar = M, a.CandidateAvatarMobile = k;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../gauge/script.jsx": 17,
        "../mobile-modal/script.jsx": 22
    }],
    4: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }

        function n(t, e) {
            if ("function" != typeof e && null !== e) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.CandidateListMobile = a.CandidateList = void 0;
        var r = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            c = t("../../js/utils"),
            o = t("../favorite-star/script.jsx"),
            d = i(o),
            u = t("../brazil-cities/script.jsx"),
            h = i(u),
            f = t("../tooltip/script.jsx"),
            p = i(f),
            g = t("../../js/libs/mithril"),
            m = i(g),
            v = t("../../js/libs/metrics"),
            y = i(v),
            b = t("../../js/libs/dom"),
            C = t("../mobile-modal/script.jsx"),
            w = i(C),
            N = t("../../js/libs/webservice.js"),
            M = i(N),
            k = {
                candidates: "ca",
                parties: "partidos",
                party: "ca",
                coalitions: "coligacoes",
                coalition: "ca",
                favorites: "ca"
            },
            O = function() {
                function t(e, a) {
                    l(this, t), this.type = e, this.cityId = "", this.list = [], this.page = 1, this.favoriteStars = [], this.loading = !0, this.lastPag = null, a && (this.container = a, m["default"].mount(a, this)), "1turno" == window.page.round ? this.define() : this.define2t(), "1turno" == window.page.round && (window.page.isMobile ? p["default"].register({
                        id: "councilmanTooltip",
                        hasButton: !0,
                        container: ".tooltip-container",
                        content: {
                            tag: "p",
                            children: ["Toque no nome para ", {
                                tag: "br"
                            }, "seguir a apuração"]
                        },
                        metrics: ["bloco vereadores", "fechar_tooltip_instrucao_vereador", !1]
                    }) : (p["default"].register({
                        id: "councilmanTooltip",
                        container: ".city-councilman",
                        target: "list-item-candidate",
                        hasButton: !0,
                        content: {
                            tag: "p",
                            children: ["Clique na estrela para seguir ", {
                                tag: "br"
                            }, "a apuração do candidato"]
                        },
                        offsetTop: -3,
                        offsetLeft: -21,
                        metrics: ["bloco vereadores", "fechar_tooltip_instrucao_vereador", !1]
                    }), p["default"].register({
                        id: "councilmanCancelled",
                        container: ".main-content-space",
                        target: "candidates-running-false",
                        offsetTop: -10,
                        offsetLeft: -353,
                        content: {
                            tag: "p",
                            children: [c.CANDIDATE_CANCELLED]
                        },
                        flip: "right",
                        align: "right"
                    }), p["default"].register({
                        id: "candidateCancelled",
                        container: ".main-content-space",
                        target: "candidate-running-false",
                        offsetTop: -10,
                        offsetLeft: -280,
                        content: {
                            tag: "p",
                            children: [c.CANDIDATE_CANCELLED]
                        },
                        flip: "right",
                        align: "right"
                    })), "councilman" == e && c.actionEvents.bind("closeFavoriteCandidateTooltip", function() {
                        p["default"].close("councilmanTooltip", !1);
                    }));
                }
                return r(t, [{
                    key: "getFavoriteStar",
                    value: function(t) {
                        return this.favoriteStars[t].view();
                    }
                }, {
                    key: "define2t",
                    value: function() {
                        this.candidateListItem = function(t, e) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "nu";
                            return {
                                tag: "li",
                                children: [{
                                    tag: "ul",
                                    children: [{
                                        tag: "li",
                                        attrs: {
                                            className: "item-favorite"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [(0, c.capitalizeName)(t[a])],
                                        attrs: {
                                            className: "item-name"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "li",
                                            children: [t.ps],
                                            attrs: {
                                                className: "item-party"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [t.vp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-small-set"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [(0, c.formatNumber)(t.v)],
                                        attrs: {
                                            className: "item-votes-v"
                                        }
                                    }]
                                }],
                                attrs: {
                                    className: "list-item list-item-candidate candidates-running-" + (0 == t.van)
                                }
                            };
                        };
                    }
                }, {
                    key: "define",
                    value: function() {
                        var t = this;
                        this.candidateListItem = function(e, a) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "nu";
                            return 0 == e.hasOwnProperty("van") && (e.van = "0"), {
                                tag: "li",
                                children: [{
                                    tag: "ul",
                                    children: [1 == e.van ? {
                                        tag: "li",
                                        attrs: {
                                            className: "item-favorite"
                                        }
                                    } : {
                                        tag: "li",
                                        children: [t.getFavoriteStar(a)],
                                        attrs: {
                                            className: "item-favorite"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [(0, c.capitalizeName)(e[i])],
                                        attrs: {
                                            className: "item-name"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "span",
                                            attrs: {
                                                className: "icon-facebook",
                                                "data-metrics-location": "bloco vereadores",
                                                "data-metrics-action": "compartilhar_candidato_facebook",
                                                "data-share": (0, c.json2data)({
                                                    candidate: e,
                                                    city: h["default"].findById(t.cityId)
                                                })
                                            }
                                        }, {
                                            tag: "span",
                                            attrs: {
                                                className: "icon-twitter",
                                                "data-metrics-location": "bloco vereadores",
                                                "data-metrics-action": "compartilhar_candidato_twitter",
                                                "data-share": (0, c.json2data)({
                                                    candidate: e,
                                                    city: h["default"].findById(t.cityId)
                                                })
                                            }
                                        }],
                                        attrs: {
                                            className: "item-social"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "li",
                                            children: [e.ps],
                                            attrs: {
                                                className: "item-party"
                                            }
                                        }, 1 == e.van ? {
                                            tag: "li",
                                            children: [{
                                                tag: "i",
                                                attrs: {
                                                    className: "icon icon-info-2"
                                                }
                                            }],
                                            attrs: {
                                                className: "item-votes-icon"
                                            }
                                        } : {
                                            tag: "li",
                                            children: [e.vp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-small-set"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [(0, c.formatNumber)(e.v)],
                                        attrs: {
                                            className: "item-votes-v"
                                        }
                                    }, {
                                        tag: "li",
                                        attrs: {
                                            className: "item-notification elected-" + e.s
                                        }
                                    }]
                                }],
                                attrs: {
                                    className: "list-item list-item-candidate candidates-running-" + (0 == e.van)
                                }
                            };
                        };
                    }
                }, {
                    key: "updateList",
                    value: function(t, e, a) {
                        this.data = t, this.list = k[e] ? t[k[e]] : t, this.listType = e, this.cityId = a;
                        var i = t.paginacao;
                        "1turno" == window.page.round && this.updateFavoriteStars(), this.loading = !1, m["default"].redraw();
                        var s = b.DOM.findOne(".list-items", this.container);
                        i && i.atual !== this.lastPag && (this.lastPag = i.atual, s && (s.scrollTop = 0));
                    }
                }, {
                    key: "updateFavoriteStars",
                    value: function() {
                        var t = this;
                        Array.isArray(this.list) && this.list.length && this.list.forEach(function(e, a) {
                            t.favoriteStars[a] ? t.favoriteStars[a].update(e.num, t.cityId) : t.favoriteStars.push(new d["default"]({
                                cityId: t.cityId,
                                candidateId: e.num
                            }));
                        });
                    }
                }, {
                    key: "viewPage",
                    value: function() {
                        if ("1turno" == window.page.round) {
                            return {
                                tag: "ul",
                                children: [{
                                    tag: "li",
                                    children: [{
                                        tag: "a",
                                        children: ["Anterior"],
                                        attrs: {
                                            href: "javascript://",
                                            "data-page": "prev",
                                            className: "councilman-page-prev councilman-page-item disabled-" + (1 == this.page)
                                        }
                                    }]
                                }, {
                                    tag: "li",
                                    children: [{
                                        tag: "a",
                                        children: ["próxima"],
                                        attrs: {
                                            href: "javascript://",
                                            "data-page": "next",
                                            className: "councilman-page-next councilman-page-item disabled-" + (!this.paginacao || this.page == this.paginacao.total)
                                        }
                                    }]
                                }],
                                attrs: {
                                    className: "councilman-page councilman-page-" + this.page + " disabled-" + !this.paginacao + "  list-name-" + this.listName
                                }
                            };
                        }
                    }
                }, {
                    key: "viewDefault",
                    value: function() {
                        var t = this;
                        return {
                            tag: "ul",
                            children: [this.list.map(function(e) {
                                return {
                                    tag: "li",
                                    children: [{
                                        tag: "ul",
                                        children: [{
                                            tag: "li",
                                            children: [(0, c.capitalizeName)(e.nu)],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [{
                                                tag: "span",
                                                attrs: {
                                                    className: "icon-facebook",
                                                    "data-metrics-location": "bloco prefeitos",
                                                    "data-metrics-action": "compartilhar_candidato_facebook",
                                                    "data-share": (0, c.json2data)({
                                                        candidate: e,
                                                        city: h["default"].findById(t.cityId)
                                                    })
                                                }
                                            }, {
                                                tag: "span",
                                                attrs: {
                                                    className: "icon-twitter",
                                                    "data-metrics-location": "bloco prefeitos",
                                                    "data-metrics-action": "compartilhar_candidato_twitter",
                                                    "data-share": (0, c.json2data)({
                                                        candidate: e,
                                                        city: h["default"].findById(t.cityId)
                                                    })
                                                }
                                            }],
                                            attrs: {
                                                className: "item-social"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [{
                                                tag: "li",
                                                children: [e.ps],
                                                attrs: {
                                                    className: "item-party"
                                                }
                                            }, {
                                                tag: "li",
                                                children: [(0, c.formatNumber)(e.v)],
                                                attrs: {
                                                    className: "item-votes-v"
                                                }
                                            }],
                                            attrs: {
                                                className: "item-small-set"
                                            }
                                        }, 1 == e.van ? {
                                            tag: "li",
                                            children: [{
                                                tag: "i",
                                                attrs: {
                                                    className: "icon icon-info-2"
                                                }
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        } : {
                                            tag: "li",
                                            children: [e.vp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, {
                                            tag: "li",
                                            attrs: {
                                                className: "item-notification elected-" + e.s
                                            }
                                        }]
                                    }],
                                    attrs: {
                                        className: "list-item candidate-running-" + (0 == e.van)
                                    }
                                };
                            })],
                            attrs: {
                                className: "list-items type-mayor"
                            }
                        };
                    }
                }, {
                    key: "viewFavorites",
                    value: function() {
                        return window.page.isMobile && p["default"].hide(), 0 == this.list.length ? {
                            tag: "ul",
                            children: [{
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    attrs: {
                                        className: "icon-starred"
                                    }
                                }, {
                                    tag: "p",
                                    children: ["Monte sua ", {
                                        tag: "b",
                                        children: ["lista personalizada"]
                                    }, " com ", {
                                        tag: "br"
                                    }, " até 10 candidatos a vereador ", {
                                        tag: "br"
                                    }, " para seguir a apuração"]
                                }, {
                                    tag: "p",
                                    children: ["É só clicar na ", {
                                        tag: "span"
                                    }, " ao lado do nome ", {
                                        tag: "br"
                                    }, " de quem você quer seguir"],
                                    attrs: {
                                        className: "small-paragraph"
                                    }
                                }],
                                attrs: {
                                    className: "list-item"
                                }
                            }],
                            attrs: {
                                className: "list-items list-items-empty"
                            }
                        } : this.viewCandidates();
                    }
                }, {
                    key: "viewCandidates",
                    value: function(t) {
                        var e = this;
                        return {
                            tag: "div",
                            children: [{
                                tag: "ul",
                                children: [this.list.map(function(t, a) {
                                    return e.candidateListItem(t, a);
                                }), this.viewPage()],
                                attrs: {
                                    className: "list-items type-councilman"
                                }
                            }],
                            attrs: {
                                className: "candidates-content"
                            }
                        };
                    }
                }, {
                    key: "viewParties",
                    value: function() {
                        return {
                            tag: "ul",
                            children: [this.list.map(function(t, e) {
                                return {
                                    tag: "li",
                                    children: [{
                                        tag: "ul",
                                        children: [{
                                            tag: "li",
                                            attrs: {
                                                className: "item-favorite"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [t.ps],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [t.vp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [(0, c.formatNumber)(t.v)],
                                            attrs: {
                                                className: "item-votes-v"
                                            }
                                        }, {
                                            tag: "li",
                                            attrs: {
                                                className: "item-notification"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-detail",
                                            "data-detail": "party",
                                            "data-party": t.ps
                                        }
                                    }],
                                    attrs: {
                                        className: "list-item"
                                    }
                                };
                            })],
                            attrs: {
                                className: "list-items type-parties"
                            }
                        };
                    }
                }, {
                    key: "viewParty",
                    value: function(t) {
                        var e = this;
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "a",
                                    children: [this.data.ps],
                                    attrs: {
                                        href: "javascript://",
                                        className: "item-back",
                                        "data-back": "party"
                                    }
                                }],
                                attrs: {
                                    className: "list-header type-party"
                                }
                            }, t, {
                                tag: "ul",
                                children: [{
                                    tag: "li",
                                    children: [{
                                        tag: "ul",
                                        children: [{
                                            tag: "li",
                                            attrs: {
                                                className: "item-favorite"
                                            }
                                        }, {
                                            tag: "li",
                                            children: ["Votos na legenda"],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [this.data.vlp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [(0, c.formatNumber)(this.data.vl)],
                                            attrs: {
                                                className: "item-votes-v"
                                            }
                                        }, {
                                            tag: "li",
                                            attrs: {
                                                className: "item-notification"
                                            }
                                        }]
                                    }],
                                    attrs: {
                                        className: "list-item list-item-header"
                                    }
                                }, this.list.map(function(t, a) {
                                    return e.candidateListItem(t, a);
                                }), this.viewPage()],
                                attrs: {
                                    className: "list-items type-party"
                                }
                            }]
                        };
                    }
                }, {
                    key: "viewCoalitions",
                    value: function() {
                        return {
                            tag: "ul",
                            children: [this.list.map(function(t, e) {
                                return {
                                    tag: "li",
                                    children: [{
                                        tag: "ul",
                                        children: [{
                                            tag: "li",
                                            attrs: {
                                                className: "item-favorite"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [t.ps],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [t.vp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [(0, c.formatNumber)(t.v)],
                                            attrs: {
                                                className: "item-votes-v"
                                            }
                                        }, {
                                            tag: "li",
                                            attrs: {
                                                className: "item-notification"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-detail",
                                            "data-detail": "coalition",
                                            "data-coalition": t.ps
                                        }
                                    }],
                                    attrs: {
                                        className: "list-item"
                                    }
                                };
                            })],
                            attrs: {
                                className: "list-items type-coalitions"
                            }
                        };
                    }
                }, {
                    key: "viewCoalition",
                    value: function(t) {
                        var e = this;
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "a",
                                    children: [this.data.nc],
                                    attrs: {
                                        href: "javascript://",
                                        className: "item-back",
                                        "data-back": "coalition"
                                    }
                                }],
                                attrs: {
                                    className: "list-header type-coalition"
                                }
                            }, t, {
                                tag: "ul",
                                children: [{
                                    tag: "li",
                                    children: [{
                                        tag: "ul",
                                        children: [{
                                            tag: "li",
                                            attrs: {
                                                className: "item-favorite"
                                            }
                                        }, {
                                            tag: "li",
                                            children: ["Votos na legenda"],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "li",
                                            attrs: {
                                                className: "item-party"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [this.data.vlp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, {
                                            tag: "li",
                                            children: [(0, c.formatNumber)(this.data.vl)],
                                            attrs: {
                                                className: "item-votes-v"
                                            }
                                        }, {
                                            tag: "li",
                                            attrs: {
                                                className: "item-notification"
                                            }
                                        }]
                                    }],
                                    attrs: {
                                        className: "list-item list-item-header"
                                    }
                                }, this.list.map(function(t, a) {
                                    return e.candidateListItem(t, a, "nu");
                                }), this.viewPage()],
                                attrs: {
                                    className: "list-items type-coalition"
                                }
                            }]
                        };
                    }
                }, {
                    key: "view",
                    value: function() {
                        if (this.loading) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    attrs: {
                                        className: "mask"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle1 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle2 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle3 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle4 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle5 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle6 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle7 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle8 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle9 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle10 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle11 sk-circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "sk-circle12 sk-circle"
                                        }
                                    }],
                                    attrs: {
                                        className: "sk-fading-circle"
                                    }
                                }],
                                attrs: {
                                    className: "list-loading"
                                }
                            };
                        }
                        switch (this.listType) {
                            case "favorites":
                                return {
                                    tag: "span",
                                    children: [this.viewFavorites()]
                                };
                            case "candidates":
                                return {
                                    tag: "span",
                                    children: [this.viewCandidates()]
                                };
                            case "parties":
                                return {
                                    tag: "span",
                                    children: [this.viewParties()]
                                };
                            case "party":
                                return {
                                    tag: "span",
                                    children: [this.viewParty()]
                                };
                            case "coalitions":
                                return {
                                    tag: "span",
                                    children: [this.viewCoalitions()]
                                };
                            case "coalition":
                                return {
                                    tag: "span",
                                    children: [this.viewCoalition()]
                                };
                            default:
                                return {
                                    tag: "span",
                                    children: [this.viewDefault()]
                                };
                        }
                    }
                }]), t;
            }(),
            S = {
                "modal-councilman": "bloco vereadores",
                "modal-mayor": "bloco prefeitos"
            },
            j = function(t) {
                function e(t, a) {
                    l(this, e);
                    var i = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return i.type = t, i.cityId = "", i.list = [], i.page = 1, i.favoriteStars = [], i.loading = !0, i.lastPag = null, a && (i.container = a, m["default"].mount(a, i)), i.defineMobile(), i;
                }
                return n(e, t), r(e, [{
                    key: "openModal",
                    value: function(t) {
                        var e = b.DOM.closest(t.target, ".list-item"),
                            a = JSON.parse(decodeURIComponent(b.DOM.attr(e, "data-dados"))),
                            i = a.type;
                        b.DOM.hasClass(e, "candidate-running-false") && (a.type = "modal-inactive");
                        var s = (0, M["default"])().city(a.city.id).mayor();
                        s.then(function(t) {
                            s.destroy();
                            w["default"].show({
                                type: a.type,
                                metricsLocal: S[i],
                                data: {
                                    city: t,
                                    candidate: a.candidate
                                }
                            });
                        }), "modal-inactive" == a.type ? y["default"].click(S[i], "abrir_modal_inelegivel", !1) : y["default"].click(S[i], "abrir_modal_compartilhar", !1);
                    }
                }, {
                    key: "getFavoriteStar",
                    value: function(t) {
                        return this.favoriteStars[t].view();
                    }
                }, {
                    key: "defineMobile",
                    value: function() {
                        var t = this;
                        this.candidateListItemMobile = function(e, a) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "nu";
                            return 0 == e.hasOwnProperty("van") && (e.van = "0"), {
                                tag: "li",
                                children: [1 == e.van ? {
                                    tag: "span",
                                    attrs: {
                                        className: "candidate-inactive",
                                        onclick: t.openModal.bind(t)
                                    }
                                } : {
                                    tag: "span",
                                    children: [t.getFavoriteStar(a)],
                                    attrs: {
                                        className: "item-favorite"
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, c.capitalizeName)(e[i]), {
                                        tag: "span",
                                        children: [e.ps],
                                        attrs: {
                                            className: "item-party"
                                        }
                                    }],
                                    attrs: {
                                        className: "item-name"
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, c.formatNumber)(e.v), " votos", {
                                        tag: "span",
                                        children: [1 == e.van ? {
                                            tag: "span",
                                            children: ["Inelegível"],
                                            attrs: {
                                                className: "info"
                                            }
                                        } : {
                                            tag: "span",
                                            children: [e.vp, "%"]
                                        }],
                                        attrs: {
                                            className: "item-votes-vp"
                                        }
                                    }, {
                                        tag: "span",
                                        attrs: {
                                            className: "bullet-notification-elected elected-" + e.s
                                        }
                                    }],
                                    attrs: {
                                        className: "item-votes-v"
                                    }
                                }, 1 == e.van ? {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-info-2"
                                    }
                                } : {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-share",
                                        onclick: t.openModal.bind(t)
                                    }
                                }],
                                attrs: {
                                    className: "list-item list-item-candidate candidate-running-" + (0 == e.van),
                                    "data-dados": (0, c.json2data)({
                                        candidate: e,
                                        city: h["default"].findById(t.cityId),
                                        type: "modal-councilman"
                                    })
                                }
                            };
                        };
                    }
                }, {
                    key: "viewCandidates",
                    value: function() {
                        var t = this;
                        return p["default"].show(), {
                            tag: "div",
                            children: [{
                                tag: "ul",
                                children: [this.list.map(function(e, a) {
                                    return t.candidateListItemMobile(e, a);
                                }), this.viewPage()],
                                attrs: {
                                    className: "list-items type-councilman"
                                }
                            }],
                            attrs: {
                                className: "candidates-content"
                            }
                        };
                    }
                }, {
                    key: "viewDefault",
                    value: function() {
                        var t = this;
                        return {
                            tag: "ul",
                            children: [this.list.map(function(e) {
                                return {
                                    tag: "li",
                                    children: [1 == e.van ? {
                                        tag: "span",
                                        attrs: {
                                            className: "candidate-inactive",
                                            onclick: t.openModal.bind(t)
                                        }
                                    } : null, {
                                        tag: "span",
                                        children: [(0, c.capitalizeName)(e.nu), {
                                            tag: "span",
                                            children: [e.ps],
                                            attrs: {
                                                className: "item-party"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-name"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [1 == e.van ? {
                                            tag: "span",
                                            children: ["Inelegível"],
                                            attrs: {
                                                className: "info"
                                            }
                                        } : {
                                            tag: "span",
                                            children: [e.vp, "%"]
                                        }, {
                                            tag: "span",
                                            children: [(0, c.formatNumber)(e.v), " votos"],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, {
                                            tag: "span",
                                            attrs: {
                                                className: "bullet-notification-elected elected-" + e.s
                                            }
                                        }],
                                        attrs: {
                                            className: "item-votes-v"
                                        }
                                    }, 1 == e.van ? {
                                        tag: "i",
                                        attrs: {
                                            className: "icon icon-info-2"
                                        }
                                    } : {
                                        tag: "i",
                                        attrs: {
                                            className: "icon icon-share",
                                            onclick: t.openModal.bind(t)
                                        }
                                    }],
                                    attrs: {
                                        className: "list-item list-item-candidate candidate-running-" + (0 == e.van),
                                        "data-dados": (0, c.json2data)({
                                            candidate: e,
                                            city: h["default"].findById(t.cityId),
                                            type: "modal-mayor"
                                        })
                                    }
                                };
                            })],
                            attrs: {
                                className: "list-items type-mayor"
                            }
                        };
                    }
                }, {
                    key: "viewParties",
                    value: function() {
                        return p["default"].hide(), {
                            tag: "ul",
                            children: [this.list.map(function(t, e) {
                                return {
                                    tag: "li",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: [t.ps],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "i",
                                            attrs: {
                                                className: "icon icon-single-arrow-right"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [(0, c.formatNumber)(t.v)],
                                            attrs: {
                                                className: "item-votes-v"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [t.vp, "%"],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-detail",
                                            "data-detail": "party",
                                            "data-party": t.ps
                                        }
                                    }],
                                    attrs: {
                                        className: "list-item list-item-parties"
                                    }
                                };
                            })],
                            attrs: {
                                className: "list-items type-parties"
                            }
                        };
                    }
                }, {
                    key: "viewParty",
                    value: function(t) {
                        var e = this;
                        return {
                            tag: "div",
                            children: [{
                                tag: "ul",
                                children: [{
                                    tag: "a",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "i",
                                            attrs: {
                                                className: "icon icon-single-arrow-left"
                                            }
                                        }, {
                                            tag: "span",
                                            children: ["voltar"],
                                            attrs: {
                                                className: "item-legend"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-header"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [this.data.ps],
                                        attrs: {
                                            className: "item-party"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["Votos na legenda"],
                                        attrs: {
                                            className: "item-name"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: [this.data.vlp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, (0, c.formatNumber)(this.data.vl)],
                                        attrs: {
                                            className: "item-votes-v"
                                        }
                                    }],
                                    attrs: {
                                        className: "item-back list-item-parties-header",
                                        href: "javascript://",
                                        "data-back": "party"
                                    }
                                }, this.list.map(function(t, a) {
                                    return e.candidateListItemMobile(t, a);
                                }), this.viewPage()],
                                attrs: {
                                    className: "list-items list-header type-party"
                                }
                            }]
                        };
                    }
                }, {
                    key: "viewCoalitions",
                    value: function() {
                        return p["default"].hide(), {
                            tag: "ul",
                            children: [this.list.map(function(t, e) {
                                return {
                                    tag: "li",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: [t.ps],
                                            attrs: {
                                                className: "item-name"
                                            }
                                        }, {
                                            tag: "i",
                                            attrs: {
                                                className: "icon icon-single-arrow-right"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [(0, c.formatNumber)(t.v)],
                                            attrs: {
                                                className: "item-votes-v"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [t.vp, "%"],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-detail",
                                            "data-detail": "coalition",
                                            "data-coalition": t.ps
                                        }
                                    }],
                                    attrs: {
                                        className: "list-item list-item-parties"
                                    }
                                };
                            })],
                            attrs: {
                                className: "list-items type-parties"
                            }
                        };
                    }
                }, {
                    key: "viewCoalition",
                    value: function(t) {
                        var e = this;
                        return {
                            tag: "div",
                            children: [{
                                tag: "ul",
                                children: [{
                                    tag: "a",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "i",
                                            attrs: {
                                                className: "icon icon-single-arrow-left"
                                            }
                                        }, {
                                            tag: "span",
                                            children: ["voltar"],
                                            attrs: {
                                                className: "item-legend"
                                            }
                                        }],
                                        attrs: {
                                            className: "item-header"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [this.data.nc],
                                        attrs: {
                                            className: "item-party"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["Votos na legenda"],
                                        attrs: {
                                            className: "item-name"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: [this.data.vlp, {
                                                tag: "span",
                                                children: ["%"]
                                            }],
                                            attrs: {
                                                className: "item-votes-vp"
                                            }
                                        }, (0, c.formatNumber)(this.data.vl)],
                                        attrs: {
                                            className: "item-votes-v"
                                        }
                                    }],
                                    attrs: {
                                        className: "item-back list-item-parties-header",
                                        href: "javascript://",
                                        "data-back": "coalition"
                                    }
                                }, this.list.map(function(t, a) {
                                    return e.candidateListItemMobile(t, a, "nu");
                                }), this.viewPage()],
                                attrs: {
                                    className: "list-items type-coalition"
                                }
                            }]
                        };
                    }
                }]), e;
            }(O);
        a.CandidateList = O, a.CandidateListMobile = j;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-star/script.jsx": 15,
        "../mobile-modal/script.jsx": 22,
        "../tooltip/script.jsx": 35
    }],
    5: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.interior = a.capitais = void 0;
        var s = t("../favorite-star/script.jsx"),
            n = i(s),
            l = function(t) {
                return new n["default"]({
                    cityId: t,
                    fMetrics: "modal cidades 2t"
                });
            },
            r = function(t) {
                return c[t].view();
            },
            c = {};
        c[13730] = l("13730"), c[13897] = l("13897"), c[23817] = l("23817"), c[24570] = l("24570"), c[24910] = l("24910"), c[25313] = l("25313"), c[27855] = l("27855"), c[31054] = l("31054"), c[39659] = l("39659"), c[41238] = l("41238"), c[43710] = l("43710"), c[47333] = l("47333"), c[48658] = l("48658"), c[56251] = l("56251"), c[56995] = l("56995"), c[57037] = l("57037"), c[57053] = l("57053"), c[58041] = l("58041"), c[58335] = l("58335"), c[58653] = l("58653"), c[58696] = l("58696"), c[58777] = l("58777"), c[58971] = l("58971"), c[59250] = l("59250"), c[60011] = l("60011"), c[62197] = l("62197"), c[63770] = l("63770"), c[64254] = l("64254"), c[64750] = l("64750"), c[64777] = l("64777"), c[66192] = l("66192"), c[66893] = l("66893"), c[67890] = l("67890"), c[69698] = l("69698"), c[70572] = l("70572"), c[70750] = l("70750"), c[71455] = l("71455"), c[71510] = l("71510"), c[75353] = l("75353"), c[76910] = l("76910"), c[77771] = l("77771"), c[80470] = l("80470"), c[81051] = l("81051"), c[81795] = l("81795"), c[85898] = l("85898"), c[85995] = l("85995"), c[88013] = l("88013"), c[88412] = l("88412"), c[90514] = l("90514"), c[90670] = l("90670"), c[92215] = l("92215"), c[93734] = l("93734"), c["09210"] = l("09210"), c["04278"] = l("04278"), c["02550"] = l("02550"), c["00035"] = l("00035"), c["06050"] = l("06050");
        a.capitais = function(t) {
            return {
                tag: "div",
                children: [{
                    tag: "div",
                    children: [{
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("31054"), {
                                tag: "p",
                                children: ["Aracaju ", {
                                    tag: "span",
                                    children: ["SE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "31054",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("04278"), {
                                tag: "p",
                                children: ["Belém ", {
                                    tag: "span",
                                    children: ["PA"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "04278",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("41238"), {
                                tag: "p",
                                children: ["Belo Horizonte ", {
                                    tag: "span",
                                    children: ["MG"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "41238",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("90514"), {
                                tag: "p",
                                children: ["Campo Grande ", {
                                    tag: "span",
                                    children: ["MS"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "90514",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("90670"), {
                                tag: "p",
                                children: ["Cuiabá ", {
                                    tag: "span",
                                    children: ["MT"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "90670",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }, {
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("75353"), {
                                tag: "p",
                                children: ["Curitiba ", {
                                    tag: "span",
                                    children: ["PR"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "75353",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("81051"), {
                                tag: "p",
                                children: ["Florianópolis ", {
                                    tag: "span",
                                    children: ["SC"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "81051",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("13897"), {
                                tag: "p",
                                children: ["Fortaleza ", {
                                    tag: "span",
                                    children: ["CE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "13897",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("93734"), {
                                tag: "p",
                                children: ["Goiânia ", {
                                    tag: "span",
                                    children: ["GO"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "93734",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("06050"), {
                                tag: "p",
                                children: ["Macapá ", {
                                    tag: "span",
                                    children: ["AP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "06050",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }, {
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("27855"), {
                                tag: "p",
                                children: ["Maceió ", {
                                    tag: "span",
                                    children: ["AL"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "27855",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("02550"), {
                                tag: "p",
                                children: ["Manaus ", {
                                    tag: "span",
                                    children: ["AM"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "02550",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("88013"), {
                                tag: "p",
                                children: ["Porto Alegre ", {
                                    tag: "span",
                                    children: ["RS"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "88013",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("00035"), {
                                tag: "p",
                                children: ["Porto Velho ", {
                                    tag: "span",
                                    children: ["RO"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "00035",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("25313"), {
                                tag: "p",
                                children: ["Recife ", {
                                    tag: "span",
                                    children: ["PE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "25313",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }, {
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("60011"), {
                                tag: "p",
                                children: ["Rio de Janeiro ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "60011",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("09210"), {
                                tag: "p",
                                children: ["São Luís ", {
                                    tag: "span",
                                    children: ["MA"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "09210",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("57053"), {
                                tag: "p",
                                children: ["Vitória ", {
                                    tag: "span",
                                    children: ["ES"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "57053",
                                    className: "is-capital-true"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }]
                }],
                attrs: {
                    className: "cities-region cities-region-capitais"
                }
            };
        }, a.interior = function(t) {
            return {
                tag: "div",
                children: [{
                    tag: "div",
                    children: [{
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("92215"), {
                                tag: "p",
                                children: ["Anápolis ", {
                                    tag: "span",
                                    children: ["GO"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "92215",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("62197"), {
                                tag: "p",
                                children: ["Bauru ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "62197",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("58041"), {
                                tag: "p",
                                children: ["Belford Roxo ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "58041",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("80470"), {
                                tag: "p",
                                children: ["Blumenau ", {
                                    tag: "span",
                                    children: ["SC"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "80470",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("85898"), {
                                tag: "p",
                                children: ["Canoas ", {
                                    tag: "span",
                                    children: ["RS"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "85898",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("56251"), {
                                tag: "p",
                                children: ["Cariacica ", {
                                    tag: "span",
                                    children: ["ES"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "56251",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("23817"), {
                                tag: "p",
                                children: ["Caruaru ", {
                                    tag: "span",
                                    children: ["PE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "23817",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("13730"), {
                                tag: "p",
                                children: ["Caucaia ", {
                                    tag: "span",
                                    children: ["CE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "13730",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("85995"), {
                                tag: "p",
                                children: ["Caxias do Sul ", {
                                    tag: "span",
                                    children: ["RS"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "85995",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("43710"), {
                                tag: "p",
                                children: ["Contagem ", {
                                    tag: "span",
                                    children: ["MG"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "43710",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }, {
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("63770"), {
                                tag: "p",
                                children: ["Diadema ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "63770",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("58335"), {
                                tag: "p",
                                children: ["Duque de Caxias ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "58335",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("64254"), {
                                tag: "p",
                                children: ["Franca ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "64254",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("64750"), {
                                tag: "p",
                                children: ["Guarujá ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "64750",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("64777"), {
                                tag: "p",
                                children: ["Guarulhos ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "64777",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("24570"), {
                                tag: "p",
                                children: ["Jaboatão dos Guararapes ", {
                                    tag: "span",
                                    children: ["PE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "24570",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("81795"), {
                                tag: "p",
                                children: ["Joinville ", {
                                    tag: "span",
                                    children: ["SC"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "81795",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("47333"), {
                                tag: "p",
                                children: ["Juiz de Fora ", {
                                    tag: "span",
                                    children: ["MG"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "47333",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("66192"), {
                                tag: "p",
                                children: ["Jundiaí ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "66192",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("76910"), {
                                tag: "p",
                                children: ["Maringá ", {
                                    tag: "span",
                                    children: ["PR"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "76910",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }, {
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("66893"), {
                                tag: "p",
                                children: ["Mauá ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "66893",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("48658"), {
                                tag: "p",
                                children: ["Montes Claros ", {
                                    tag: "span",
                                    children: ["MG"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "48658",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("58653"), {
                                tag: "p",
                                children: ["Niterói ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "58653",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("58696"), {
                                tag: "p",
                                children: ["Nova Iguaçu ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "58696",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("24910"), {
                                tag: "p",
                                children: ["Olinda ", {
                                    tag: "span",
                                    children: ["PE"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "24910",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("67890"), {
                                tag: "p",
                                children: ["Osasco ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "67890",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("58777"), {
                                tag: "p",
                                children: ["Petrópolis ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "58777",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("77771"), {
                                tag: "p",
                                children: ["Ponta Grossa ", {
                                    tag: "span",
                                    children: ["PR"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "77771",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("69698"), {
                                tag: "p",
                                children: ["Ribeirão Preto ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "69698",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("70750"), {
                                tag: "p",
                                children: ["São Bernardo do Campo ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "70750",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }, {
                        tag: "ul",
                        children: [{
                            tag: "li",
                            children: [r("58971"), {
                                tag: "p",
                                children: ["São Gonçalo ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "58971",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("88412"), {
                                tag: "p",
                                children: ["Santa Maria ", {
                                    tag: "span",
                                    children: ["RS"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "88412",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("70572"), {
                                tag: "p",
                                children: ["Santo André ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "70572",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("56995"), {
                                tag: "p",
                                children: ["Serra ", {
                                    tag: "span",
                                    children: ["ES"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "56995",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("71455"), {
                                tag: "p",
                                children: ["Sorocaba ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "71455",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("71510"), {
                                tag: "p",
                                children: ["Suzano ", {
                                    tag: "span",
                                    children: ["SP"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "71510",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("57037"), {
                                tag: "p",
                                children: ["Vila Velha ", {
                                    tag: "span",
                                    children: ["ES"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "57037",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("39659"), {
                                tag: "p",
                                children: ["Vitória da Conquista ", {
                                    tag: "span",
                                    children: ["BA"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "39659",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }, {
                            tag: "li",
                            children: [r("59250"), {
                                tag: "p",
                                children: ["Volta Redonda ", {
                                    tag: "span",
                                    children: ["RJ"],
                                    attrs: {
                                        className: "uf"
                                    }
                                }],
                                attrs: {
                                    "data-city": "59250",
                                    className: "is-capital-false"
                                }
                            }],
                            attrs: {
                                className: "cities-item"
                            }
                        }]
                    }]
                }],
                attrs: {
                    className: "cities-region cities-region-interior"
                }
            };
        };
    }, {
        "../favorite-star/script.jsx": 15
    }],
    6: [function(t, e, a) {
        function i(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var a in t) {
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
            }
            return e["default"] = t, e;
        }

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function n(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            r = t("../../js/libs/mithril"),
            c = s(r),
            o = t("../../js/libs/metrics"),
            d = s(o),
            u = t("../../js/libs/dom"),
            h = t("../../js/libs/webservice.js"),
            f = (s(h), t("../../js/utils.js")),
            p = t("../brazil-cities/script.jsx"),
            g = s(p),
            m = t("../lightbox/script.jsx"),
            v = s(m),
            y = t("../favorite-management/script.jsx"),
            b = t("./cities-list-items.js"),
            C = i(b),
            w = "modal cidades 2t",
            N = function() {
                function t(e) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    n(this, t), "1turno" != window.page.round && 1 != window.page.isMobile && (this.container = e, this.tab = "capitais", this.active = !1, this.favoriteCity = !1, f.actionEvents.bind("lightboxClosed", this.close.bind(this)), u.DOM.Event(this.container).on("click", ".cities-list-tabs li", this.tabClick.bind(this)), u.DOM.Event(this.container).on("click", ".cities-region li p", this.changeCity.bind(this)), c["default"].mount(this.container, this));
                }
                return l(t, [{
                    key: "tabClick",
                    value: function(t) {
                        this.tab = t.target.id, c["default"].redraw(), d["default"].click(w, "menu_" + this.tab);
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        this.active = !0, v["default"].open("city"), t === !0 ? this.favoriteCity = t : (this.favoriteCity = !1, d["default"].click("titulo pagina municipio", "botao_mudar_cidade"));
                    }
                }, {
                    key: "close",
                    value: function(t) {
                        this.active = !1, c["default"].redraw(), v["default"].isOpen && (v["default"].close(), t && d["default"].click("modal cidades 2t", "fechar_modal"));
                    }
                }, {
                    key: "changeCity",
                    value: function(t) {
                        var e = u.DOM.closest(t.target, "p"),
                            a = e.getAttribute("data-city");
                        this.close(), g["default"].setActive(a, {
                            route: !0
                        }), this.favoriteCity === !0 ? (y.favCities.addItem(a), d["default"].click(w, "selecionar_e_favoritar_cidade")) : d["default"].click(w, "selecionar_cidade"), d["default"].hit("city");
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "button",
                                children: ["Mudar cidade ", {
                                    tag: "i",
                                    attrs: {
                                        className: "icon-search"
                                    }
                                }],
                                attrs: {
                                    type: "button",
                                    onclick: this.open.bind(this)
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "h2",
                                    children: ["Cidades com 2º turno"]
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon-close",
                                        onclick: this.close.bind(this)
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "ul",
                                        children: [{
                                            tag: "li",
                                            children: ["Capitais"],
                                            attrs: {
                                                id: "capitais",
                                                className: "active-" + ("capitais" == this.tab)
                                            }
                                        }, {
                                            tag: "li",
                                            children: ["Interior"],
                                            attrs: {
                                                id: "interior",
                                                className: "active-" + ("interior" == this.tab)
                                            }
                                        }],
                                        attrs: {
                                            className: "cities-list-tabs"
                                        }
                                    }],
                                    attrs: {
                                        className: "cities-list-tabs-container"
                                    }
                                }, C["" + this.tab].call(this, this.changeCity)],
                                attrs: {
                                    className: "cities-list tab-" + this.tab + " is-active-" + this.active
                                }
                            }],
                            attrs: {
                                className: "cities-list-container"
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = new N(u.DOM.findOne(".main-cities-list"));
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14,
        "../lightbox/script.jsx": 18,
        "./cities-list-items.js": 5
    }],
    7: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/metrics"),
            o = (i(c), t("../../js/libs/dom")),
            d = t("../../js/libs/webservice.js"),
            u = i(d),
            h = t("../../js/utils.js"),
            f = t("../brazil-cities/script.jsx"),
            p = i(f),
            g = 10,
            m = 46,
            v = function() {
                function t(e) {
                    var a = this;
                    s(this, t), window.servicesStatus.citiesNotification !== !1 && (this.firstRun = !0, this.queue = [], this.queueDone = !0, this.container = e, this.notifications = [], this.ignored = h.storage.getItem("notificationIgnored") || [], this.request = (0, u["default"])().brazilExtract().then(function(t) {
                        if (a.firstRun === !0) {
                            a.firstRun = !1, a.notifications = t.cd.slice(0), a.ignored.length && ! function() {
                                var t = -1;
                                a.ignored.forEach(function(e) {
                                    t = a.notifications.findIndex(function(t) {
                                        return t.ac == e;
                                    }), t > -1 && a.notifications.splice(t, 1);
                                });
                            }();
                        } else {
                            t.cd.reverse();
                            for (var e = 0; e < t.cd.length; e++) {
                                var i = t.cd[e];
                                a.isNewCity(i) === !0 && (a.queue.push(i), console.log("new city", i));
                            }
                            a.stopAnimate(), a.updateHeightContainer(), a.queueDone === !0 && a.showNewNotification();
                        }
                    }), r["default"].mount(e, this));
                }
                return n(t, [{
                    key: "isNewCity",
                    value: function(t) {
                        return this.notifications.some(function(e) {
                            return e.ac == t.ac;
                        }) === !1 && this.queue.some(function(e) {
                            return e.ac == t.ac;
                        }) === !1;
                    }
                }, {
                    key: "setNotificationContainer",
                    value: function(t, e) {
                        e || (this.notificationContainer = t, this.notificationStyle = t.style);
                    }
                }, {
                    key: "updateHeightContainer",
                    value: function() {
                        this.container.style.height = this.notifications.length * m + "px";
                    }
                }, {
                    key: "setIgnored",
                    value: function(t) {
                        this.ignored.length == g && this.ignored.splice(0, 1), this.ignored.push(t), h.storage.setItem("notificationIgnored", this.ignored);
                    }
                }, {
                    key: "setAnimate",
                    value: function() {
                        o.DOM.addClass(this.container, "animated");
                    }
                }, {
                    key: "stopAnimate",
                    value: function() {
                        o.DOM.removeClass(this.container, "animated");
                    }
                }, {
                    key: "showNewNotification",
                    value: function() {
                        var t = this;
                        return 0 == this.queue.length ? void(this.queueDone = !0) : (this.queueDone = !1, this.notifications.unshift(this.queue.shift()), r["default"].redraw(), this.stopAnimate(), this.notificationStyle.top = m * -1 + "px", setTimeout(function() {
                            t.setAnimate(), t.updateHeightContainer(), t.notificationStyle.top = 0;
                        }, 5), void setTimeout(function() {
                            return t.showNewNotification();
                        }, 5000));
                    }
                }, {
                    key: "getViewNotification",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    attrs: {
                                        className: "notification-bg"
                                    }
                                }, {
                                    tag: "ul",
                                    children: [this.notifications.map(function(t, e) {
                                        var a = p["default"].findById(t.ac);
                                        if (a) {
                                            return {
                                                tag: "li",
                                                children: [{
                                                    tag: "div",
                                                    attrs: {
                                                        className: "notification-hover-bg"
                                                    }
                                                }, {
                                                    tag: "div",
                                                    children: [{
                                                        tag: "div",
                                                        attrs: {
                                                            className: "bullet-notification-elected elected-" + t.s
                                                        }
                                                    }, {
                                                        tag: "div",
                                                        children: [{
                                                            tag: "span",
                                                            children: [t.hr],
                                                            attrs: {
                                                                className: "notification-time"
                                                            }
                                                        }, {
                                                            tag: "span",
                                                            children: [a.uf],
                                                            attrs: {
                                                                className: "notification-state"
                                                            }
                                                        }, {
                                                            tag: "div",
                                                            children: [(0, h.capitalizeName)(a.name)],
                                                            attrs: {
                                                                className: "notification-city",
                                                                title: a.name
                                                            }
                                                        }],
                                                        attrs: {
                                                            className: "notification-description"
                                                        }
                                                    }],
                                                    attrs: {
                                                        className: "notification-content"
                                                    }
                                                }],
                                                attrs: {
                                                    className: "notification",
                                                    "data-id": t.ac
                                                }
                                            };
                                        }
                                    })],
                                    attrs: {
                                        className: "cities-notification clearfix",
                                        config: this.setNotificationContainer.bind(this)
                                    }
                                }],
                                attrs: {
                                    className: "cities-notification-animation"
                                }
                            }],
                            attrs: {
                                className: "country-bottom-container"
                            }
                        };
                    }
                }, {
                    key: "getViewXray",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    attrs: {
                                        className: "country-bottom-bg"
                                    }
                                }, {
                                    tag: "span",
                                    children: ["Raio-X ", {
                                        tag: "br"
                                    }, " das Eleições"],
                                    attrs: {
                                        className: "xray-title"
                                    }
                                }, {
                                    tag: "span",
                                    children: ["Veja estatísticas, números e análises do resultado do ", window.page.round.replace("turno", ""), "º turno"],
                                    attrs: {
                                        className: "xray-desc"
                                    }
                                }],
                                attrs: {
                                    className: "raiox-container"
                                }
                            }],
                            attrs: {
                                className: "country-bottom-container"
                            }
                        };
                    }
                }, {
                    key: "view",
                    value: function() {
                        return "1turno" == window.page.round ? this.getViewXray() : window.servicesStatus.xray !== !0 ? this.getViewNotification() : this.getViewXray();
                    }
                }]), t;
            }();
        a["default"] = v;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../brazil-cities/script.jsx": 2
    }],
    8: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/metrics"),
            o = i(c),
            d = t("../votes-count/script.jsx"),
            u = i(d),
            h = t("../candidate-list/script.jsx"),
            f = t("../../js/libs/dom"),
            p = t("../../js/libs/webservice.js"),
            g = i(p),
            m = t("../search-councilman/script.jsx"),
            v = t("../lightbox/script.jsx"),
            y = i(v),
            b = t("../../js/utils.js"),
            C = t("../favorite-management/script.jsx"),
            w = t("../mobile-modal/script.jsx"),
            N = i(w),
            M = t("../mobile-card/script.jsx"),
            k = t("../scroll-fixed/script.jsx"),
            O = t("../../components/main-content-loading/script.jsx"),
            S = i(O),
            j = "candidates",
            x = "bloco vereadores",
            E = {
                favorites: "seguindo",
                candidates: "todos",
                parties: "partido",
                coalitions: "coligação"
            },
            _ = {
                coalition: "coligação",
                party: "partido"
            },
            z = function() {
                function t(e) {
                    var a = this;
                    s(this, t);
                    this.container = e, this.card = new M.Card({
                        metricsLocal: "bloco vereadores",
                        metricsCity: !1,
                        container: this.container,
                        max: 5,
                        openDefault: !1
                    }), this.votesCount = new u["default"](f.DOM.findOne(".councilman-votes-count"), e), this.tab = j, this.listName = this.tab, this.page = 1, this.cityId, this.requestCityConcilmans, this.Scroll = new k.Scroll, this.cityProgress = b.candidateStatus.RUNNING.status, this.searchInput = {}, this.citySap = 0, this.searchStatus = window.servicesStatus.searchCouncilman, b.actionEvents.bind("serviceStatus:searchCouncilman", function(t) {
                        a.searchStatus = t;
                    }), this.favoriteCouncilmanStatus = window.servicesStatus.favoriteCouncilman, b.actionEvents.bind("serviceStatus:favoriteCouncilman", function(t) {
                        a.favoriteCouncilmanStatus = t;
                    }), window.page.isMobile ? this.candidateList = new h.CandidateListMobile("councilman") : this.candidateList = new h.CandidateList("councilman"), b.actionEvents.bind("activeCity", function(t, e) {
                        S["default"].show(), a.cityId = t.id, a.page = 1, a.candidateList.page = a.page, a.cityProgress = b.candidateStatus.RUNNING.status, a.searchInput.value = "", a.tab = a.listName = j, a.updateRequest(), window.page.isMobile && a.card.resetDefault();
                    });
                    var i = f.DOM.findOne(".councilman-content");
                    b.actionEvents.bind("favCandidates", function(t) {
                        "favorites" == a.tab && a.updateRequest("favorites", !0);
                    }), f.DOM.Event(i).on("click", ".councilman-tabs a", this.tabSwitch.bind(this)), f.DOM.Event(i).on("click", ".councilman-page-item", this.setPage.bind(this)), f.DOM.Event(i).on("click", ".list-items .item-detail", this.itemDetail.bind(this)), f.DOM.Event(i).on("click", ".item-back", this.detailBack.bind(this)), b.actionEvents.bind("changeCouncilmanTab", function(t) {
                        a.tabSwitch(t);
                    }), r["default"].mount(i, this);
                }
                return n(t, [{
                    key: "goScrollTopList",
                    value: function() {
                        if (window.page.isMobile) {
                            var t = f.DOM.closest(this.container, ".card");
                            this.Scroll.To(t, -50);
                        }
                    }
                }, {
                    key: "getProgressInfo",
                    value: function(t) {
                        var e = (0, b.percentToFloat)(t.sap);
                        2 == t.st ? this.cityProgress = b.candidateStatus.ELECTED.status : e > b.candidateStatus.PERCENT_TO_VIRT_ELECTED ? this.cityProgress = b.candidateStatus.VIRT_ELECTED.status : this.cityProgress = b.candidateStatus.RUNNING.status;
                    }
                }, {
                    key: "calculateHeightList",
                    value: function() {
                        var t = this;
                        window.page.isMobile && setTimeout(function() {
                            t.card.setHeightList();
                        }, 500);
                    }
                }, {
                    key: "updateRequest",
                    value: function(t, e) {
                        switch (this.candidateList.loading = !0, r["default"].redraw(), t = t || this.listName, "favorites" != t && (this.request && this.request.destroy(), this.requestFavorite && this.requestFavorite.destroy()), "favorites" == t && e === !0 && this.requestFavorite && this.requestFavorite.destroy(), t) {
                            case "favorites":
                                var a = this.getFavoritesIds();
                                a.length > 0 ? this.requestFavorite = (0, g["default"])().city(this.cityId).favoriteCouncilman(a).then(this.updateList.bind(this, "favorites")) : (this.updateList("favorites", {
                                    oc: "g.fa",
                                    cc: 13,
                                    ca: []
                                }), r["default"].redraw());
                                break;
                            case "candidates":
                                this.request = (0, g["default"])().city(this.cityId).councilman().page(this.page).then(this.updateList.bind(this, "candidates"));
                                break;
                            case "parties":
                                this.request = (0, g["default"])().city(this.cityId).parties().then(this.updateList.bind(this, "parties"));
                                break;
                            case "party":
                                this.request = (0, g["default"])().city(this.cityId).parties(this.itemId).page(this.page).then(this.updateList.bind(this, "party"));
                                break;
                            case "coalitions":
                                this.request = (0, g["default"])().city(this.cityId).coalitions().then(this.updateList.bind(this, "coalitions"));
                                break;
                            case "coalition":
                                this.request = (0, g["default"])().city(this.cityId).coalitions(this.itemId).page(this.page).then(this.updateList.bind(this, "coalition"));
                        }
                    }
                }, {
                    key: "updateList",
                    value: function(t, e) {
                        this.request.destroy(), e && ("favorites" != t ? (this.votesCount.update(e), this.citySap = e.sap, this.citySt = e.st) : (e.sap = this.citySap, e.st = this.citySt), t === this.tab && (this.paginacao = this.candidateList.paginacao = e.paginacao, this.candidateList.updateList(e, this.listName, this.cityId), this.getProgressInfo(e), S["default"].close(), this.calculateHeightList()));
                    }
                }, {
                    key: "tabSwitch",
                    value: function(t) {
                        var e = void 0;
                        "string" == typeof t ? e = t : (e = f.DOM.attr(t.target, "data-tab") || f.DOM.attr(t.target.parentNode, "data-tab"), o["default"].click(x, "aba_" + E[e], !1)), this.tab != e && (this.tab = e, this.listName = this.tab, this.setPage(1), this.updateRequest(), this.calculateHeightList());
                    }
                }, {
                    key: "setPage",
                    value: function(t) {
                        var e = !1,
                            a = !1;
                        if (this.paginacao) {
                            if (isNaN(t)) {
                                e = !0;
                                var i = f.DOM.attr(t.target, "data-page"),
                                    s = "";
                                if ("next" == i && this.page < this.paginacao.total) {
                                    this.page++, s = "nav_proxima";
                                } else {
                                    if (!("prev" == i && this.page > 1)) {
                                        return;
                                    }
                                    this.page--, s = "nav_anterior";
                                }
                                this.goScrollTopList(), o["default"].click(x, s, !1);
                            } else {
                                a = !0, this.page = t;
                            }
                            this.candidateList.page = this.page, this.candidateList.paginacao = this.paginacao, this.candidateList.listName = this.listName, e === !0 && this.updateRequest();
                        }
                    }
                }, {
                    key: "itemDetail",
                    value: function(t) {
                        var e = f.DOM.hasClass(t.target, "item-detail") ? t.target : t.target.parentNode,
                            a = f.DOM.attr(e, "data-detail"),
                            i = f.DOM.attr(e, "data-" + a);
                        this.itemId = i, this.tab = this.listName = a, this.goScrollTopList(), this.updateRequest(), o["default"].click(x, "selecionar_" + _[a], !1);
                    }
                }, {
                    key: "detailBack",
                    value: function(t) {
                        var e = f.DOM.closest(t.target, ".item-back"),
                            a = f.DOM.attr(e, "data-back");
                        this.tab = this.listName = "party" == a ? "parties" : "coalitions", this.page = 1, this.candidateList.page = this.page, this.updateRequest(), o["default"].click(x, "voltar_" + _[a], !1);
                    }
                }, {
                    key: "loadList",
                    value: function(t, e) {
                        e || (this.candidateList.container = t, r["default"].mount(t, this.candidateList));
                    }
                }, {
                    key: "searchCouncilman",
                    value: function(t, e) {
                        e || window.page.isMobile || (this.searchComponent = new m.SearchCouncilman(t));
                    }
                }, {
                    key: "searchCouncilmanKeyUp",
                    value: function(t) {
                        y["default"].open("councilman");
                    }
                }, {
                    key: "openModal",
                    value: function(t) {
                        if (window.page.isMobile) {
                            N["default"].show({
                                type: "search-councilman"
                            });
                            o["default"].click(x, "botao_buscar_vereador", !1);
                        }
                    }
                }, {
                    key: "searchCouncilmanClose",
                    value: function() {
                        this.searchComponent.close();
                    }
                }, {
                    key: "getTotalFavoritesView",
                    value: function() {
                        var t = C.favCandidates.getFavorites("city" + this.cityId);
                        return 0 === t.length ? "" : {
                            tag: "span",
                            children: [t.length]
                        };
                    }
                }, {
                    key: "getFavoritesIds",
                    value: function() {
                        return C.favCandidates.getFavorites("city" + this.cityId);
                    }
                }, {
                    key: "getSearchInput",
                    value: function(t, e) {
                        e || (this.searchInput = t, f.DOM.Event(t).on("focus", function(t) {
                            y["default"].open("councilman"), o["default"].click(x, "ativar_buscar_vereador", !1);
                        }));
                    }
                }, {
                    key: "getSearchStatusDisabled",
                    value: function() {
                        return this.searchStatus === !1 || "favorites" != this.tab && "candidates" != this.tab;
                    }
                }, {
                    key: "getFavoriteCouncilmanView",
                    value: function() {
                        return this.favoriteCouncilmanStatus === !0 ? {
                            tag: "li",
                            children: [{
                                tag: "a",
                                children: ["Seguindo ", this.getTotalFavoritesView()],
                                attrs: {
                                    href: "javascript://",
                                    className: "tab-link-favorites",
                                    "data-tab": "favorites"
                                }
                            }],
                            attrs: {
                                className: "councilman-tab"
                            }
                        } : "";
                    }
                }, {
                    key: "getSearchCouncilmanView",
                    value: function() {
                        return this.searchStatus === !1 ? "" : navigator.userAgent.match(/ Firefox\/\d+/) ? "" : {
                            tag: "button",
                            children: [{
                                tag: "p",
                                children: ["Buscar candidato"]
                            }, {
                                tag: "i",
                                attrs: {
                                    className: "icon-search"
                                }
                            }],
                            attrs: {
                                className: "councilman-search-button disabled-" + this.getSearchStatusDisabled(),
                                onclick: this.openModal.bind(this)
                            }
                        };
                    }
                }, {
                    key: "viewSearchArea",
                    value: function() {
                        return window.page.isMobile ? {
                            tag: "div",
                            children: [this.getSearchCouncilmanView(), {
                                tag: "div",
                                children: [{
                                    tag: "p",
                                    children: ["Escolha uma coligação para ", {
                                        tag: "br"
                                    }, " acompanhar os candidatos"]
                                }],
                                attrs: {
                                    className: "list-item-headeline coalitions"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "p",
                                    children: ["Escolha um partido para ", {
                                        tag: "br"
                                    }, " acompanhar os candidatos"]
                                }],
                                attrs: {
                                    className: "list-item-headeline parties"
                                }
                            }]
                        } : {
                            tag: "div",
                            children: [{
                                tag: "i",
                                attrs: {
                                    className: "icon-close",
                                    onclick: this.searchCouncilmanClose.bind(this)
                                }
                            }, {
                                tag: "form",
                                children: [{
                                    tag: "input",
                                    attrs: {
                                        type: "text",
                                        className: "councilman-search-input",
                                        name: "q",
                                        autocomplete: "off",
                                        placeholder: "Encontre candidatos para seguir a apuração",
                                        onkeyup: this.searchCouncilmanKeyUp,
                                        config: this.getSearchInput.bind(this)
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "div",
                                        attrs: {
                                            className: "circle1 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle2 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle3 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle4 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle5 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle6 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle7 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle8 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle9 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle10 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle11 circle"
                                        }
                                    }, {
                                        tag: "div",
                                        attrs: {
                                            className: "circle12 circle"
                                        }
                                    }],
                                    attrs: {
                                        className: "fading-circle"
                                    }
                                }],
                                attrs: {
                                    config: this.searchCouncilman.bind(this),
                                    ref: "formulario"
                                }
                            }],
                            attrs: {
                                className: "councilman-search disabled-" + this.getSearchStatusDisabled()
                            }
                        };
                    }
                }, {
                    key: "legendForMobile",
                    value: function() {
                        if (window.page.isMobile) {
                            return {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        attrs: {
                                            className: "bullet-notification-elected elected-1"
                                        }
                                    }, {
                                        tag: "p",
                                        children: ["Eleitos"]
                                    }],
                                    attrs: {
                                        className: "legend-elected"
                                    }
                                }, {
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        attrs: {
                                            className: "bullet-notification-elected elected-5"
                                        }
                                    }, {
                                        tag: "p",
                                        children: ["Candidatos eleitos se a apuração terminasse agora"]
                                    }],
                                    attrs: {
                                        className: "legend-virt"
                                    }
                                }],
                                attrs: {
                                    className: "legend-for-mobile"
                                }
                            };
                        }
                    }
                }, {
                    key: "view",
                    value: function() {
                        return "1turno" == window.page.round ? {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "p",
                                    children: ["Candidatos eleitos se a apuração terminasse agora ", {
                                        tag: "span"
                                    }],
                                    attrs: {
                                        className: "councilman-caption-virt-elected"
                                    }
                                }, {
                                    tag: "p",
                                    children: ["Eleito ", {
                                        tag: "span"
                                    }],
                                    attrs: {
                                        className: "councilman-caption-elected no-expand"
                                    }
                                }, {
                                    tag: "ul",
                                    children: [this.getFavoriteCouncilmanView(), {
                                        tag: "li",
                                        children: [{
                                            tag: "a",
                                            children: ["Todos"],
                                            attrs: {
                                                href: "javascript://",
                                                className: "tab-link-candidates",
                                                "data-tab": "candidates"
                                            }
                                        }],
                                        attrs: {
                                            className: "councilman-tab"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "a",
                                            children: ["Partido"],
                                            attrs: {
                                                href: "javascript://",
                                                className: "tab-link-parties",
                                                "data-tab": "parties"
                                            }
                                        }],
                                        attrs: {
                                            className: "councilman-tab"
                                        }
                                    }, {
                                        tag: "li",
                                        children: [{
                                            tag: "a",
                                            children: ["Coligação"],
                                            attrs: {
                                                href: "javascript://",
                                                className: "tab-link-coalitions",
                                                "data-tab": "coalitions"
                                            }
                                        }],
                                        attrs: {
                                            className: "councilman-tab"
                                        }
                                    }],
                                    attrs: {
                                        className: "councilman-tabs tab-acive-" + this.tab
                                    }
                                }, this.viewSearchArea()],
                                attrs: {
                                    className: "councilman-header"
                                }
                            }, {
                                tag: "div",
                                attrs: {
                                    className: "councilman-list list-content",
                                    config: this.loadList.bind(this)
                                }
                            }, "parties" != this.tab && "coalitions" != this.tab ? this.legendForMobile() : null],
                            attrs: {
                                className: "city-progress-" + this.cityProgress
                            }
                        } : {
                            tag: "div",
                            children: [{
                                tag: "h2",
                                children: ["Vereadores eleitos no 1º turno"],
                                attrs: {
                                    className: "heading-councilman heading"
                                }
                            }, {
                                tag: "div",
                                attrs: {
                                    className: "councilman-list list-content",
                                    config: this.loadList.bind(this)
                                }
                            }],
                            attrs: {
                                className: "city-progress-" + this.cityProgress
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = z;
    }, {
        "../../components/main-content-loading/script.jsx": 19,
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../candidate-list/script.jsx": 4,
        "../favorite-management/script.jsx": 14,
        "../lightbox/script.jsx": 18,
        "../mobile-card/script.jsx": 20,
        "../mobile-modal/script.jsx": 22,
        "../scroll-fixed/script.jsx": 31,
        "../search-councilman/script.jsx": 33,
        "../votes-count/script.jsx": 36
    }],
    9: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.cityInfo = void 0;
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../favorite-star/script.jsx"),
            o = i(c),
            d = t("../progress-bar/script.jsx"),
            u = i(d),
            h = t("../../js/utils.js"),
            f = t("../../js/libs/webservice.js"),
            p = i(f),
            g = t("../../js/libs/dom"),
            m = t("../../components/main-content-loading/script.jsx"),
            v = i(m),
            y = function() {
                function t() {
                    var e = this;
                    s(this, t), this.city = {}, this.data = void 0, this.request, this.favoriteStar = new o["default"], this.progressBar = new u["default"], h.actionEvents.bind("activeCity", function(t, a) {
                        v["default"].show(), e.city = t, e.init();
                    }), r["default"].mount(g.DOM.findOne(".main-city-info"), this);
                }
                return n(t, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.request && this.request.destroy(), this.request = (0, p["default"])().city(this.city.id).mayor().then(function(e) {
                            t.progressBar.update(e), t.data = e, document.body.setAttribute("data-voting-status", t.data.st), console.log("city info callback json"), v["default"].close();
                        }), this.favoriteStar.setId(this.city.id);
                    }
                }, {
                    key: "getViewFavoriteStar",
                    value: function() {
                        return "1turno" == window.page.round ? "" : this.favoriteStar.view();
                    }
                }, {
                    key: "getViewProgressBar",
                    value: function() {
                        return this.progressBar.view();
                    }
                }, {
                    key: "view",
                    value: function() {
                        if (this.data) {
                            return {
                                tag: "div",
                                children: [this.getViewFavoriteStar(), {
                                    tag: "h2",
                                    children: [(0, h.capitalizeName)(this.data.an), " ", {
                                        tag: "span",
                                        children: [this.data.si],
                                        attrs: {
                                            className: "state-name"
                                        }
                                    }],
                                    attrs: {
                                        className: "city-name"
                                    }
                                }, this.getViewProgressBar()],
                                attrs: {
                                    className: "city-info"
                                }
                            };
                        }
                    }
                }]), t;
            }(),
            b = new y;
        a.cityInfo = b;
    }, {
        "../../components/main-content-loading/script.jsx": 19,
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../favorite-star/script.jsx": 15,
        "../progress-bar/script.jsx": 23
    }],
    10: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../candidate-avatar/script.jsx"),
            r = t("../candidate-list/script.jsx"),
            c = t("../votes-count/script.jsx"),
            o = i(c),
            d = t("../../js/libs/dom"),
            u = t("../../js/libs/mithril"),
            h = (i(u), t("../../js/libs/webservice.js")),
            f = i(h),
            p = t("../../js/utils.js"),
            g = t("../tooltip/script.jsx"),
            m = i(g),
            v = t("../../components/main-content-loading/script.jsx"),
            y = i(v),
            b = t("../mobile-card/script.jsx"),
            C = function() {
                function t(e) {
                    var a = this;
                    if (s(this, t), this.container = e, this.card = new b.Card({
                            metricsLocal: "bloco prefeitos",
                            metricsCity: !0,
                            container: this.container,
                            max: 3,
                            openDefault: !0
                        }), this.avataresContainer = d.DOM.findOne(".avatares", this.container), this.votesCount = new o["default"](d.DOM.findOne(".mayor-votes-count", this.container)), window.page.isMobile) {
                        this.candidateAvatarLeft = new l.CandidateAvatarMobile({
                            avatarType: "big",
                            hasGauge: !0,
                            container: d.DOM.findOne(".city-mayor .avatar-left", e),
                            actionEvent: !0
                        }), this.candidateAvatarRight = new l.CandidateAvatarMobile({
                            avatarType: "big",
                            hasGauge: !0,
                            container: d.DOM.findOne(".city-mayor .avatar-right", e),
                            actionEvent: !0
                        }), this.candidateList = new r.CandidateListMobile("mayor", d.DOM.findOne(".mayor-list", this.container));
                    } else {
                        this.candidateAvatarLeft = new l.CandidateAvatar({
                            avatarType: "big",
                            hasGauge: !0,
                            container: d.DOM.findOne(".city-mayor .avatar-left", e)
                        }), this.candidateAvatarRight = new l.CandidateAvatar({
                            avatarType: "big",
                            hasGauge: !0,
                            container: d.DOM.findOne(".city-mayor .avatar-right", e)
                        }), m["default"].register(this.getTooltipConfig());
                        var i = function() {
                            m["default"].getTargetAndPosition(a.getTooltipConfig(), {
                                target: d.DOM.findOne(".status-cancelled", e)
                            });
                        };
                        d.DOM.Event(window).on("resize", i), this.candidateList = new r.CandidateList("mayor", d.DOM.findOne(".mayor-list", this.container));
                    }
                    p.actionEvents.bind("activeCity", function(t, e) {
                        y["default"].show(), a.city = t, a.update(), window.page.isMobile && a.card.resetDefault();
                    });
                }
                return n(t, [{
                    key: "sortCandidates2T",
                    value: function(t, e) {
                        var a = cities2t[t].candidatos;
                        return e.sort(function(t, e) {
                            var i = a.findIndex(function(e) {
                                    return e.numero == t.num;
                                }),
                                s = a.findIndex(function(t) {
                                    return t.numero == e.num;
                                });
                            return i - s;
                        });
                    }
                }, {
                    key: "getTooltipConfig",
                    value: function() {
                        var t = "1turno" == window.page.round ? this.getTooltipPosition() : -15,
                            e = "1turno" == window.page.round ? -48 : -55;
                        return {
                            id: "mayorCancelled",
                            container: ".city-mayor .avatares",
                            target: "candidate-status-cancelled",
                            offsetTop: t,
                            offsetLeft: e,
                            content: {
                                tag: "p",
                                children: [p.CANDIDATE_CANCELLED]
                            },
                            align: "center",
                            flip: "center"
                        };
                    }
                }, {
                    key: "getTooltipPosition",
                    value: function() {
                        var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                        return t > 1200 ? 95 : 79;
                    }
                }, {
                    key: "calculateHeightList",
                    value: function() {
                        var t = this;
                        window.page.isMobile && setTimeout(function() {
                            t.card.setHeightList();
                        }, 500);
                    }
                }, {
                    key: "update1T",
                    value: function(t) {
                        var e = void 0;
                        if (0 === parseInt(t.st) ? (e = t.ca, this.candidateAvatarLeft.update(), this.candidateAvatarRight.update()) : (e = t.ca.slice(2), this.candidateAvatarLeft.update(t.ca[0], this.city.id, (0, p.candidateStatus)(t, 0)), this.candidateAvatarRight.update(t.ca[1], this.city.id, (0, p.candidateStatus)(t, 1)), t.ca[1] ? d.DOM.removeClass(this.avataresContainer, "single") : d.DOM.addClass(this.avataresContainer, "single")), window.page.isMobile) {
                            var a = d.DOM.closest(this.avataresContainer, ".card");
                            e.length <= 3 ? d.DOM.addClass(a, "hide-icon") : d.DOM.removeClass(a, "hide-icon");
                        }
                        this.candidateList.updateList(e, null, t.ac), this.votesCount.update(t), y["default"].close(), this.calculateHeightList();
                    }
                }, {
                    key: "update2T",
                    value: function(t) {
                        var e = this.city.id,
                            a = t.ca;
                        0 != window.page.isMobile && "0" != t.st || (a = this.sortCandidates2T(this.city.id, t.ca)), this.candidateAvatarLeft.update(a[0], e, (0, p.candidateStatus)(t, 0)), this.candidateAvatarRight.update(a[1], e, (0, p.candidateStatus)(t, 1)), t.ca[1] ? d.DOM.removeClass(this.avataresContainer, "single") : d.DOM.addClass(this.avataresContainer, "single"), this.votesCount.update(t), y["default"].close();
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = this;
                        this.request && this.request.destroy(), this.request = (0, f["default"])().city(this.city.id).mayor().then(function(e) {
                            "1turno" == window.page.round ? t.update1T(e) : t.update2T(e);
                        });
                    }
                }]), t;
            }();
        a["default"] = C;
    }, {
        "../../components/main-content-loading/script.jsx": 19,
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../candidate-avatar/script.jsx": 3,
        "../candidate-list/script.jsx": 4,
        "../mobile-card/script.jsx": 20,
        "../tooltip/script.jsx": 35,
        "../votes-count/script.jsx": 36
    }],
    11: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../brazil-cities/script.jsx"),
            o = i(c),
            d = function() {
                function t(e) {
                    s(this, t), this.message = "", actionEvents.bind("activeCity", this.update.bind(this)), actionEvents.bind("serviceStatus:disclaimer", this.update.bind(this)), r["default"].mount(e, this);
                }
                return n(t, [{
                    key: "update",
                    value: function() {
                        var t = o["default"].getActive();
                        try {
                            window.servicesStatus.disclaimer[t.id] ? this.message = window.servicesStatus.disclaimer[t.id] : this.message = "";
                        } catch (e) {
                            this.message = "";
                        }
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return this.message ? "visible" : "hidden";
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "p",
                                children: [this.message],
                                attrs: {
                                    className: "disclaimer-text"
                                }
                            }],
                            attrs: {
                                className: "disclaimer disclaimer-" + this.isVisible()
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = d;
    }, {
        "../../js/libs/mithril": 45,
        "../brazil-cities/script.jsx": 2
    }],
    12: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/metrics"),
            o = i(c),
            d = t("../../js/utils"),
            u = t("../brazil-cities/script.jsx"),
            h = i(u),
            f = t("../favorite-city/script.jsx"),
            p = i(f),
            g = t("../../js/libs/dom"),
            m = t("../favorite-management/script.jsx"),
            v = 4,
            y = "",
            b = function() {
                function t() {
                    var e = this;
                    if (s(this, t), window.page.isMobile || "1turno" == window.page.round) {
                        return !1;
                    }
                    d.actionEvents.once("cities", function() {
                        e.cities = Array(v).fill(y);
                        var t = 0,
                            a = [];
                        m.favCities.favorites.forEach(function(i, s) {
                            (0, d.has2T)(i) ? e.cities[t++] = i: a.push(i);
                        }), a.forEach(function(t) {
                            return m.favCities.unIndexItem(t);
                        }), e.favoriteCityItems = [], e.cities.map(function(t) {
                            return e.favoriteCityItems.push(new p["default"](t));
                        }), e.cities.map(function(t, a) {
                            t && e.loadFavoriteCity(t, a);
                        }), d.actionEvents.bind("favCities", function(t) {
                            t.isFavorite ? e.itemExists(t.item) || e.loadFavoriteCity(t.item) : e.unloadFavoriteCity(t.item);
                        }), g.DOM.Event(g.DOM.findOne(".favorite-cities")).on("click", ".favorite-city", function() {
                            var t = g.DOM.attr(this, "data-city-id");
                            t && (closeBigCitiesPage(null, !1), h["default"].setActive(t), o["default"].hit("city"), o["default"].click("meu placar", "trocar_cidade"));
                        }), r["default"].mount(g.DOM.findOne(".score-fav-bar .favorite-cities"), e);
                    });
                }
                return n(t, [{
                    key: "loadFavoriteCity",
                    value: function(t, e) {
                        void 0 == e && (e = this.getEmptyIndex()), this.cities[e] = t, this.favoriteCityItems[e].setId(t);
                    }
                }, {
                    key: "unloadFavoriteCity",
                    value: function(t) {
                        var e = this.getFavoriteIndex(t);
                        e >= 0 && this.favoriteCityItems[e].removeId(), this.favoriteCityItems.splice(e, 1), this.cities.splice(e, 1), this.favoriteCityItems.push(new p["default"]), this.cities.push(y);
                    }
                }, {
                    key: "getFavoriteIndex",
                    value: function(t) {
                        var e = -1;
                        return this.cities.forEach(function(a, i) {
                            a == t && (e = i);
                        }), e;
                    }
                }, {
                    key: "itemExists",
                    value: function(t) {
                        return this.cities.findIndex(function(e) {
                            return e == t;
                        }) > -1;
                    }
                }, {
                    key: "getEmptyIndex",
                    value: function() {
                        for (var t = 0; t < v; t++) {
                            if (!this.cities[t]) {
                                return t;
                            }
                        }
                        return -1;
                    }
                }, {
                    key: "getCity",
                    value: function(t) {
                        return this.favoriteCityItems[t];
                    }
                }, {
                    key: "getViewFavoriteCityItems",
                    value: function() {
                        return this.favoriteCityItems.map(function(t) {
                            return t.view();
                        });
                    }
                }, {
                    key: "view",
                    value: function(t) {
                        return {
                            tag: "ul",
                            children: [this.getViewFavoriteCityItems()],
                            attrs: {
                                className: "favorite-cities-content"
                            }
                        };
                    }
                }]), t;
            }(),
            C = new b;
        a["default"] = C;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-city/script.jsx": 13,
        "../favorite-management/script.jsx": 14
    }],
    13: [function(t, e, a) {
        function i(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var a in t) {
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
            }
            return e["default"] = t, e;
        }

        function s(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function n(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            r = t("../../js/libs/mithril"),
            c = s(r),
            o = t("../../js/libs/metrics"),
            d = s(o),
            u = t("../candidate-avatar/script.jsx"),
            h = (s(u), t("../brazil-cities/script.jsx")),
            f = s(h),
            p = t("../favorite-star/script.jsx"),
            g = s(p),
            m = t("../../js/libs/webservice"),
            v = s(m),
            y = t("../../js/libs/viewport"),
            b = i(y),
            C = t("../../js/utils.js"),
            w = t("../../js/libs/dom"),
            N = t("../../components/cities-list/script.jsx"),
            M = s(N),
            k = function() {
                function t(e) {
                    var a = this;
                    n(this, t), this.cityId = e || null, this.isActive = !1, this.candidateImageLeft = (0, C.candidateImage)(), this.candidateImageRight = (0, C.candidateImage)(), this.candidates = [], this.singleAvatar = "", this.favoriteStar = new g["default"]({
                        theme: "light"
                    }), C.actionEvents.bind("activeCity", function(t) {
                        a.setIsActive(t);
                    }), C.actionEvents.bind("pageChange", function() {
                        a.setIsActive(f["default"].getActive());
                    }), C.actionEvents.bind("viewportChange", this.viewportAction.bind(this));
                }
                return l(t, [{
                    key: "viewportAction",
                    value: function(t) {
                        "md" != t || t.isMobile ? this.cityId && this.setId(this.cityId) : this.removeId();
                    }
                }, {
                    key: "addCandidate",
                    value: function(t, e) {
                        this.candidates.push(e);
                    }
                }, {
                    key: "sortCandidates2T",
                    value: function(t, e) {
                        var a = cities2t[t].candidatos;
                        return e.sort(function(t, e) {
                            var i = a.findIndex(function(e) {
                                    return e.numero == t.num;
                                }),
                                s = a.findIndex(function(t) {
                                    return t.numero == e.num;
                                });
                            return i - s;
                        });
                    }
                }, {
                    key: "setId",
                    value: function(t) {
                        var e = this;
                        this.cityId = t, this.removeId(), ("md" != b.current || b.isMobile) && (this.request = (0, v["default"])().city(t).mayor().then(function(t) {
                            e.city = t, e.candidates = [];
                            var a = 2,
                                i = (0, C.hasDefinedSituation)(t.ca);
                            if ("1" == i || "2" == i) {
                                e.addCandidate(t, t.ca.find(function(t) {
                                    return t.s == i;
                                }));
                            } else {
                                var s = t.ca;
                                0 == window.page.isMobile && (s = e.sortCandidates2T(t.ac, s));
                                for (var n = 0; n < s.length && e.candidates.length != a; n++) {
                                    var l = t.ca[n],
                                        r = (0, C.candidateStatus)(t, l);
                                    r !== C.candidateStatus.CANCELLED && e.addCandidate(t, l);
                                }
                            }
                            1 === e.candidates.length ? e.singleAvatar = "single-avatar" : e.singleAvatar = "", e.candidateImageLeft = (0, C.candidateImage)(f["default"].findById(e.cityId), e.candidates[0]), e.candidateImageRight = (0, C.candidateImage)(f["default"].findById(e.cityId), e.candidates[1]), e.sendCityToBigCities(t);
                        }), this.favoriteStar.setId(t), f["default"].active && (this.isActive = f["default"].active.id == t));
                    }
                }, {
                    key: "sendCityToBigCities",
                    value: function(t) {
                        var e = {
                                oc: "grandes_cidades",
                                subchannels: {}
                            },
                            a = t.ca.filter(function(e) {
                                var a = (0, C.candidateStatus)(t, e);
                                if (a !== C.candidateStatus.CANCELLED) {
                                    return e;
                                }
                            });
                        e.subchannels[this.city.ac] = {
                            ac: this.city.ac,
                            sap: this.city.sap,
                            ca: a.slice(0, 2)
                        }, C.actionEvents.trigger("favoriteCityUpdate", e);
                    }
                }, {
                    key: "removeId",
                    value: function() {
                        this.favoriteStar.unbind(), this.request && this.request.destroy();
                    }
                }, {
                    key: "setIsActive",
                    value: function(t) {
                        this.cityId && t && (t.id == this.cityId && window.page.isCityPage === !0 ? this.isActive = !0 : this.isActive = !1, c["default"].redraw());
                    }
                }, {
                    key: "openSearch",
                    value: function() {
                        if (d["default"].click("meu placar", "favoritar_cidade"), C.actionEvents.trigger("searchCityOpenFavorite"), 0 == window.page.isCityPage && window.closeBigCitiesPage(null, !0), "2turno" == window.page.round) {
                            var t = !0;
                            M["default"].open(t);
                        }
                    }
                }, {
                    key: "mouseEnter",
                    value: function(t) {
                        var e = w.DOM.findOne(".votes-progress", this);
                        e.style.width = w.DOM.attr(e, "data-progress");
                    }
                }, {
                    key: "mouseLeave",
                    value: function(t) {
                        w.DOM.findOne(".votes-progress", this).style.width = "0%";
                    }
                }, {
                    key: "getDataProgress",
                    value: function(t) {
                        return (0, C.percentToFloat)(t) + "%";
                    }
                }, {
                    key: "candidateView",
                    value: function(t, e, a) {
                        var i = t && t.nu ? (0, C.capitalizeName)(t.nu) + " - " + t.ps : "",
                            s = t && t.nu ? "Foto do candidato " + i : "";
                        if (t) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "img",
                                        attrs: {
                                            className: "candidate-image",
                                            onerror: C.candidateImageError,
                                            src: a
                                        }
                                    }],
                                    attrs: {
                                        className: "candidate-mask",
                                        alt: s,
                                        title: i
                                    }
                                }, {
                                    tag: "span",
                                    children: [t.ps],
                                    attrs: {
                                        className: "candidate-party"
                                    }
                                }, {
                                    tag: "span",
                                    children: [t.vp, " ", {
                                        tag: "span",
                                        children: ["%"],
                                        attrs: {
                                            className: "percent"
                                        }
                                    }],
                                    attrs: {
                                        className: "candidate-votes"
                                    }
                                }],
                                attrs: {
                                    className: "candidate-avatar candidate-avatar-type-small candidate-status-" + e.status
                                }
                            };
                        }
                    }
                }, {
                    key: "getFavoritStar",
                    value: function() {
                        return this.favoriteStar.view();
                    }
                }, {
                    key: "emptyAreaView",
                    value: function() {
                        return {
                            tag: "li",
                            children: [this.getFavoritStar(), {
                                tag: "p",
                                children: ["Escolha uma Cidade"]
                            }],
                            attrs: {
                                className: "favorite-city-empty",
                                onclick: this.openSearch
                            }
                        };
                    }
                }, {
                    key: "stopClick",
                    value: function(t) {
                        return t.preventDefault(), !1;
                    }
                }, {
                    key: "view",
                    value: function() {
                        if (this.city) {
                            var t = f["default"].findById(this.city.ac).path;
                            return {
                                tag: "li",
                                children: [{
                                    tag: "a",
                                    children: [this.getFavoritStar(), {
                                        tag: "p",
                                        children: [(0, C.capitalizeName)(this.city.an)],
                                        attrs: {
                                            className: "city",
                                            title: (0, C.capitalizeName)(this.city.an)
                                        }
                                    }, {
                                        tag: "p",
                                        attrs: {
                                            className: "second-shift"
                                        }
                                    }, {
                                        tag: "div",
                                        children: [{
                                            tag: "div",
                                            children: [this.candidateView(this.candidates[0], (0, C.candidateStatus)(this.city, this.candidates[0]), this.candidateImageLeft)],
                                            attrs: {
                                                className: "left"
                                            }
                                        }, {
                                            tag: "div",
                                            children: [this.candidateView(this.candidates[1], (0, C.candidateStatus)(this.city, this.candidates[1]), this.candidateImageRight)],
                                            attrs: {
                                                className: "right"
                                            }
                                        }],
                                        attrs: {
                                            className: "avatar"
                                        }
                                    }, {
                                        tag: "div",
                                        children: [{
                                            tag: "span",
                                            children: [this.city.sap, {
                                                tag: "span",
                                                children: ["%"],
                                                attrs: {
                                                    className: "percent"
                                                }
                                            }],
                                            attrs: {
                                                className: "votes-percent"
                                            }
                                        }, " ", {
                                            tag: "span",
                                            children: ["URNAS APURADAS"],
                                            attrs: {
                                                className: "votes-label"
                                            }
                                        }],
                                        attrs: {
                                            className: "counting"
                                        }
                                    }],
                                    attrs: {
                                        href: "http://" + window.page.host + t,
                                        onclick: this.stopClick,
                                        className: "container"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "votes-progress"
                                    }
                                }, {
                                    tag: "style",
                                    children: ["\n            .favorite-city-" + this.city.ac + ":hover .votes-progress {\n                width: " + this.getDataProgress(this.city.sap) + "\n            }\n          "]
                                }],
                                attrs: {
                                    className: "favorite-city favorite-city-" + this.city.ac + " is-active-" + this.isActive + " has-city " + this.singleAvatar + " second-shift-" + (this.candidates[0] && 3 == this.candidates[0].s),
                                    "data-city-id": this.cityId
                                }
                            };
                        }
                        return this.emptyAreaView();
                    }
                }]), t;
            }();
        a["default"] = k;
    }, {
        "../../components/cities-list/script.jsx": 6,
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/viewport": 49,
        "../../js/libs/webservice": 50,
        "../../js/utils.js": 51,
        "../brazil-cities/script.jsx": 2,
        "../candidate-avatar/script.jsx": 3,
        "../favorite-star/script.jsx": 15
    }],
    14: [function(t, e, a) {
        function i(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.favCities = a.favCandidates = void 0;
        var s = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            n = t("../../js/utils.js"),
            l = 4,
            r = 10,
            c = function() {
                function t(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "array";
                    i(this, t), this.favoriteName = e, this.type = a, this.empty, this.favorites, this.defineEmpty(), this.retrieveFavorites();
                }
                return s(t, [{
                    key: "retrieveFavorites",
                    value: function(t) {
                        return this.favorites = n.storage.getItem(this.favoriteName) || this.empty, this.getFavorites(t);
                    }
                }, {
                    key: "getFavorites",
                    value: function(t) {
                        return "object" == this.type && t ? (this.favorites[t] || (this.favorites[t] = []), this.favorites[t]) : this.favorites;
                    }
                }, {
                    key: "updateFavorites",
                    value: function(t) {
                        return this.favorites = t || this.favorites, n.storage.setItem(this.favoriteName, this.favorites), this.favorites;
                    }
                }, {
                    key: "getIndex",
                    value: function(t, e) {
                        var a = this.getFavorites(e);
                        return Array.isArray(a) ? a.findIndex(function(e) {
                            return e == t;
                        }) : -1;
                    }
                }, {
                    key: "isFavorite",
                    value: function(t, e) {
                        var a = this.getIndex(t, e);
                        return a > -1;
                    }
                }, {
                    key: "addItem",
                    value: function(t, e) {
                        var a = this.getFavorites(e);
                        return this.getIndex(t, e) > -1 ? this.getIndex(t, e) : this.canAddMoreFavorites(a) ? (a.push(t), this.updateFavorites(), this.trigger(t, !0), void 0 !== e && n.actionEvents.trigger("closeFavoriteCandidateTooltip"), a.length - 1) : -1;
                    }
                }, {
                    key: "canAddMoreFavorites",
                    value: function(t) {
                        switch (this.favoriteName) {
                            case "favCities":
                                if (t.length >= l) {
                                    return alert("Você pode escolher até " + l + " cidades"), !1;
                                }
                                break;
                            case "favCandidates":
                                if (t.length >= r) {
                                    return alert("Você pode escolher até " + r + ' candidatos por cidade.\nDesmarque um deles na aba "Seguindo" para acrescentar um novo.'), !1;
                                }
                        }
                        return !0;
                    }
                }, {
                    key: "removeItem",
                    value: function(t, e) {
                        var a = this.getIndex(t, e),
                            i = this.getFavorites(e);
                        return i.splice(a, 1), this.updateFavorites(), this.trigger(t, !1), this.favorites;
                    }
                }, {
                    key: "unIndexItem",
                    value: function(t) {
                        var e = this.getIndex(t, !1),
                            a = this.getFavorites(!1);
                        a.splice(e, 1), this.updateFavorites();
                    }
                }, {
                    key: "getEmptyIndex",
                    value: function() {
                        var t = -1;
                        return this.favorites.forEach(function(e, a) {
                            e || t != -1 || (t = a);
                        }), t;
                    }
                }, {
                    key: "toggle",
                    value: function(t, e) {
                        var a = this.getIndex(t, e);
                        return a > -1 ? this.removeItem(a, e) : this.addItem(t, e), a;
                    }
                }, {
                    key: "trigger",
                    value: function(t, e) {
                        n.actionEvents.trigger(this.favoriteName, {
                            item: t,
                            isFavorite: e
                        }), "string" == typeof t && n.actionEvents.trigger(this.favoriteName + t, {
                            item: t,
                            isFavorite: e
                        });
                    }
                }, {
                    key: "defineEmpty",
                    value: function() {
                        var t = {
                            object: {},
                            array: [],
                            string: "",
                            number: -1
                        };
                        this.empty = t[this.type];
                    }
                }]), t;
            }();
        a.favCandidates = new c("favCandidates", "object"), a.favCities = new c("favCities");
    }, {
        "../../js/utils.js": 51
    }],
    15: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = (i(l), t("../../js/libs/dom")),
            c = t("../../js/libs/metrics"),
            o = i(c),
            d = t("../brazil-cities/script.jsx"),
            u = i(d),
            h = t("../../js/utils"),
            f = t("../favorite-management/script.jsx"),
            p = t("../../components/cities-list/script.jsx"),
            g = i(p),
            m = function() {
                function t(e) {
                    var a = this;
                    s(this, t), Object.assign(this, e), this.theme = this.theme || "dark", this.fMetrics = this.fMetrics || void 0, this.candidateId ? (this.type = "candidate", this.eventName = "favCandidates", this.itemId = this.candidateId, this.fav = f.favCandidates, this.key = "city" + this.cityId) : (this.type = "city", this.eventName = "favCities", this.itemId = this.cityId, this.fav = f.favCities, this.key = !1), this.handleClick = h.actionEvents.bind(this.eventName, function(t) {
                        a.itemId == t.item && (a.isFavorite = t.isFavorite);
                    }), this.itemId && this.setIsFavorite();
                }
                return n(t, [{
                    key: "update",
                    value: function(t, e) {
                        this.itemId = t, e && (this.key = "city" + e), this.setIsFavorite();
                    }
                }, {
                    key: "unbind",
                    value: function() {
                        h.actionEvents.unbind(this.eventName, this.handleClick);
                    }
                }, {
                    key: "setId",
                    value: function(t) {
                        this.itemId = t, this.setIsFavorite();
                    }
                }, {
                    key: "setIsFavorite",
                    value: function() {
                        "cityundefined" != this.key && (this.isFavorite = this.fav.isFavorite(this.itemId, this.key));
                    }
                }, {
                    key: "getRoleStarForMetrics",
                    value: function() {
                        return "city" == this.type ? "cidade" : "vereador";
                    }
                }, {
                    key: "getLocationForMetrics",
                    value: function() {
                        return this.fMetrics ? this.fMetrics : "city" == this.type ? "dark" == this.theme ? "titulo pagina municipio" : "meu placar" : "bloco vereadores";
                    }
                }, {
                    key: "toggle",
                    value: function(t) {
                        if (this.itemId) {
                            t || (t = window.event), t.cancelBubble = !0, t.stopPropagation && t.stopPropagation(), t.preventDefault();
                            var e = this.getLocationForMetrics();
                            if (this.isFavorite === !1) {
                                var a = this.fav.addItem(this.itemId, this.key);
                                "2turno" == window.page.round && 1 == r.DOM.hasClass(document.body, "suggest-open-city") && "-1" != a && (u["default"].setActive(this.itemId), g["default"].close(), o["default"].hit("city")), o["default"].click(e, "favoritar_" + this.getRoleStarForMetrics(), !1);
                            } else {
                                this.fav.removeItem(this.itemId, this.key), o["default"].click(e, "desfavoritar_" + this.getRoleStarForMetrics(), !1);
                            }
                        }
                    }
                }, {
                    key: "view",
                    value: function() {
                        return this.itemId = this.itemId || "", {
                            tag: "div",
                            attrs: {
                                onclick: this.toggle.bind(this),
                                className: "favorite-star type-" + this.type + " has-id-" + !!this.itemId + " theme-" + this.theme + " is-favorite-" + this.isFavorite,
                                "data-item-id": this.itemId
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = m;
    }, {
        "../../components/cities-list/script.jsx": 6,
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14
    }],
    16: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }

        function n(t, e) {
            if ("function" != typeof e && null !== e) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.GateMobile = a.Gate = void 0;
        var r = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            c = t("../../js/libs/mithril"),
            o = i(c),
            d = t("../../js/libs/metrics"),
            u = i(d),
            h = t("../brazil-cities/script.jsx"),
            f = i(h),
            p = t("../router/script.jsx"),
            g = i(p),
            m = t("../search-city/script.jsx"),
            v = (t("../favorite-management/script.jsx"), t("../../js/utils.js")),
            y = t("../../js/libs/dom"),
            b = t("../../js/libs/geoloc.js"),
            C = t("../scroll-fixed/script.jsx"),
            w = "modal suggest geolocation",
            N = function() {
                function t() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    l(this, t), this.body = y.DOM.findOne("body"), this.container = y.DOM.findOne(".gate"), o["default"].mount(this.container, this), e === !0 && y.DOM.addClass(this.body, "gate-open");
                }
                return r(t, [{
                    key: "init",
                    value: function(t, e) {
                        var a = this;
                        this.city = t, this.geoloc = e === b.GEOLOC_SUCCESS, this.textChoice = this.geoloc === !0 ? "Continuar nesta cidade" : "Ver " + this.city.name, y.DOM.Event(this.container).on("click", ".gate-close", function(t) {
                            f["default"].setActive(a.city.id, {
                                route: !1
                            }), a.closeGate(a.city.id);
                            var e = "botao_ok_suggest";
                            1 == y.DOM.hasClass(t.target || t.srcElement, "gate-icon-close") && (e = "fechar_modal_suggest"), u["default"].click(w, e), u["default"].hit("city");
                        });
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        y.DOM.removeClass(this.body, "gate-open"), o["default"].mount(this.container, null);
                    }
                }, {
                    key: "closeGate",
                    value: function(t) {
                        f["default"].setFirstFavorites(t), g["default"].replaceCity(t), this.destroy(), v.storage.setItem("firstUserAccess", "false");
                    }
                }, {
                    key: "viewText",
                    value: function() {
                        return this.geoloc === !0 ? {
                            tag: "span",
                            children: [{
                                tag: "span",
                                children: ["Identificamos que você está na região de"],
                                attrs: {
                                    className: "gate-message-title"
                                }
                            }, {
                                tag: "span",
                                children: [this.city.name, {
                                    tag: "span",
                                    children: [this.city.uf],
                                    attrs: {
                                        className: "gate-message-state"
                                    }
                                }],
                                attrs: {
                                    className: "gate-message-city"
                                }
                            }]
                        } : {
                            tag: "span",
                            children: [{
                                tag: "span",
                                children: ["Não foi possível ", {
                                    tag: "br"
                                }, " identificar a sua localização"],
                                attrs: {
                                    className: "gate-message-no-geoloc-title"
                                }
                            }, {
                                tag: "span",
                                children: ["Escolha uma das opções para acompanhar a apuração"],
                                attrs: {
                                    className: "gate-message-no-geoloc-sub"
                                }
                            }]
                        };
                    }
                }, {
                    key: "componentSearch",
                    value: function(t, e) {
                        var a = this;
                        if (!e) {
                            var i = void 0;
                            i = this.geoloc === !0 ? "Escolher outra" : "Buscar cidade", new m.SearchCity(t, {
                                inputContainer: y.DOM.findOne(".gate-container-search-input"),
                                showLightobx: !1,
                                changeRoute: !1,
                                buttonLabel: i,
                                buttonClass: "gate-button search",
                                onSuggestSelect: function(t) {
                                    return a.closeGate(t);
                                },
                                metrics: {
                                    localBtn: w,
                                    localSuggest: w,
                                    action: "botao_escolher_outra",
                                    city: !1
                                }
                            });
                        }
                    }
                }, {
                    key: "viewContent",
                    value: function() {
                        if (this.city) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    attrs: {
                                        className: "gate-icon-close icon-close gate-close"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "div",
                                        children: [{
                                            tag: "span",
                                            attrs: {
                                                className: "gate-line top"
                                            }
                                        }, this.viewText(), {
                                            tag: "span",
                                            attrs: {
                                                className: "gate-line bottom"
                                            }
                                        }],
                                        attrs: {
                                            className: "gate-message-initial"
                                        }
                                    }, {
                                        tag: "div",
                                        children: [{
                                            tag: "button",
                                            children: [this.textChoice],
                                            attrs: {
                                                className: "gate-button continue gate-close"
                                            }
                                        }, {
                                            tag: "span",
                                            attrs: {
                                                className: "gate-container-search-input"
                                            }
                                        }, {
                                            tag: "span",
                                            attrs: {
                                                className: "gate-container-search",
                                                config: this.componentSearch.bind(this)
                                            }
                                        }],
                                        attrs: {
                                            className: "gate-choice"
                                        }
                                    }],
                                    attrs: {
                                        className: "gate-container"
                                    }
                                }]
                            };
                        }
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                attrs: {
                                    className: "gate-lightbox"
                                }
                            }, this.viewContent()]
                        };
                    }
                }]), t;
            }(),
            M = function(t) {
                function e() {
                    l(this, e);
                    var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return t.Scroll = new C.Scroll, t.Scroll.To(document.body), t.body = y.DOM.findOne("body"), t.container = y.DOM.findOne(".gate"), o["default"].mount(t.container, t), y.DOM.addClass(t.body, "gate-open"), t;
                }
                return n(e, t), r(e, [{
                    key: "componentSearch",
                    value: function(t, e) {
                        e || v.actionEvents.once("cities", function() {
                            new m.SearchCityMobile(y.DOM.findOne(".gate-search-city"), {
                                inputContainer: y.DOM.findOne(".gate-search-city-input"),
                                onSuggestSelect: function() {
                                    y.DOM.removeClass(y.DOM.findOne("body"), "gate-open");
                                },
                                metrics: {
                                    localBtn: "modal primeiro acesso",
                                    localSuggest: "modal primeiro acesso",
                                    action: "botao_buscar_cidade"
                                }
                            });
                        });
                    }
                }, {
                    key: "viewContent",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: ["Encontre sua cidade", {
                                    tag: "span",
                                    children: ["para acompanhar a apuração"]
                                }],
                                attrs: {
                                    className: "gate-message-initial"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    attrs: {
                                        className: "gate-search-city-input"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "gate-search-city"
                                    }
                                }],
                                attrs: {
                                    className: "gate-search",
                                    config: this.componentSearch.bind(this)
                                }
                            }],
                            attrs: {
                                className: "gate-container"
                            }
                        };
                    }
                }]), e;
            }(N);
        a.Gate = N, a.GateMobile = M;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/geoloc.js": 42,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/utils.js": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14,
        "../router/script.jsx": 24,
        "../scroll-fixed/script.jsx": 31,
        "../search-city/script.jsx": 32
    }],
    17: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = (t("../../js/libs/dom"), t("../../js/libs/mithril")),
            r = i(l),
            c = t("../../js/utils"),
            o = "#666666",
            d = "#999999",
            u = function() {
                function t(e) {
                    s(this, t), Object.assign(this, e), this.typeGauge = e.typeGauge, this.color = window.page.site.colors.color1, this.bgcolor = "transparent", r["default"].mount(e.container, this);
                }
                return n(t, [{
                    key: "setup",
                    value: function(t, e, a) {
                        e === !1 && (this.canvasEl = t, this.ctx = this.canvasEl.getContext("2d")), this.paint();
                    }
                }, {
                    key: "paint",
                    value: function() {
                        this.degrees = this.degrees || 0, this.ctx.clearRect(0, 0, this.width, this.height), this.ctx.beginPath(), this.ctx.strokeStyle = this.bgcolor, this.ctx.lineWidth = this.lineWidth, this.ctx.arc(this.width / 2, this.height / 2, this.radius, 0, 2 * Math.PI, !1), this.ctx.stroke();
                        var t = this.degrees * Math.PI / 180;
                        this.ctx.beginPath(), this.ctx.strokeStyle = this.color, this.ctx.lineWidth = this.lineWidth, this.ctx.arc(this.width / 2, this.height / 2, this.radius, 0 - 90 * Math.PI / 180, t - 90 * Math.PI / 180, !1), this.ctx.stroke();
                    }
                }, {
                    key: "updateSize",
                    value: function(t) {
                        Object.assign(this, t), r["default"].redraw();
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.degrees = (0, c.floatToDegress)((0, c.percentToFloat)(t)), "cancelled" == e.status && 1 == window.page.isMobile ? this.color = d : "cancelled" == e.status ? this.color = o : this.color = window.page.site.colors.color1;
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "canvas",
                            attrs: {
                                className: "candidate-canvas",
                                config: this.setup.bind(this),
                                width: this.width,
                                height: this.height
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = u;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/utils": 51
    }],
    18: [function(t, e, a) {
        function i(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            n = t("../../js/libs/dom"),
            l = t("../../js/utils"),
            r = function() {
                function t() {
                    i(this, t), this.isOpen = !1, this.isClose = !this.isOpen, this.name = "", this.overlay = n.DOM.findOne(".overlay");
                }
                return s(t, [{
                    key: "handleClick",
                    value: function(t) {
                        t.preventDefault(), t.stopPropagation(), "keyup" == t.type && 27 == t.keyCode && this.close();
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        this.isOpen !== !0 && (this.isOpen = !0, this.isClose = !this.isOpen, this.name = t, n.DOM.addClass(document.body, "suggest-open-" + this.name), n.DOM.Event(this.overlay).on("click", this.close.bind(this)), n.DOM.Event(document).on("keyup", this.handleClick.bind(this)), l.actionEvents.trigger("lightboxOpened"));
                    }
                }, {
                    key: "close",
                    value: function() {
                        n.DOM.removeClass(document.body, "suggest-open-" + this.name), n.DOM.Event(this.overlay).off("click"), n.DOM.Event(document).off("keyup"), this.isOpen = !1, this.isClose = !this.isOpen, this.name = "", l.actionEvents.trigger("lightboxClosed");
                    }
                }]), t;
            }();
        a["default"] = new r;
    }, {
        "../../js/libs/dom": 38,
        "../../js/utils": 51
    }],
    19: [function(t, e, a) {
        function i(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            n = t("../../js/libs/dom"),
            l = 5000,
            r = function() {
                function t() {
                    i(this, t), this.body = document.body, this.timer = null, this.count = 0, this.el = n.DOM.findOne(".main-content-loading");
                }
                return s(t, [{
                    key: "show",
                    value: function() {
                        this.el && (clearTimeout(this.timer), window.page.isMobile === !1 && (this.timer = setTimeout(this.forceClose.bind(this), l)), this.count += 1, n.DOM.addClass(this.body, "content-loading-visible"), n.DOM.addClass(this.el, "loading-visible"));
                    }
                }, {
                    key: "forceClose",
                    value: function() {
                        console.log("loading content force close"), this.closeAction();
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.el && (this.count -= 1, this.count <= 0 && this.closeAction());
                    }
                }, {
                    key: "closeAction",
                    value: function() {
                        clearTimeout(this.timer), n.DOM.removeClass(this.body, "content-loading-visible"), n.DOM.removeClass(this.el, "loading-visible"), this.count = 0;
                    }
                }]), t;
            }(),
            c = new r;
        window.loadingContent = c, a["default"] = c;
    }, {
        "../../js/libs/dom": 38
    }],
    20: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.Card = void 0;
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = (i(l), t("../../js/libs/metrics")),
            c = i(r),
            o = (t("../../js/utils.js"), t("../../js/libs/dom")),
            d = t("../scroll-fixed/script.jsx"),
            u = function() {
                function t(e) {
                    var a = this;
                    s(this, t), this.card = o.DOM.closest(e.container, ".card"), this.qtdMaxCard = e.max, this.openDefault = e.openDefault, this.Scroll = new d.Scroll, this.metricsLocal = e.metricsLocal, o.DOM.Event(this.card).on("click", ".btn-toggle", function() {
                        var t = o.DOM.hasClass(a.card, "card-open");
                        1 == t ? (a.Scroll.To(a.card, -50), c["default"].click(a.metricsLocal, "retrair_card", !1)) : c["default"].click(a.metricsLocal, "expandir_card", !1), o.DOM.toggleClass(a.card, "card-open"), a.setHeightList();
                    });
                }
                return n(t, [{
                    key: "resetDefault",
                    value: function() {
                        1 == this.openDefault ? o.DOM.addClass(this.card, "card-open") : o.DOM.removeClass(this.card, "card-open");
                    }
                }, {
                    key: "calculeHeightList",
                    value: function(t) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = e ? e : t.length, i = 0, s = a - 1; s >= 0; s--) {
                            i += t[s].offsetHeight;
                        }
                        return i;
                    }
                }, {
                    key: "verifyAditional",
                    value: function() {
                        var t = 7,
                            e = o.DOM.find(".councilman-page", this.card),
                            a = o.DOM.find(".list-item-parties-header", this.card);
                        return e.length >= 1 && (t += e[0].offsetHeight), a.length >= 1 && (t += a[0].offsetHeight), t;
                    }
                }, {
                    key: "setHeightList",
                    value: function() {
                        var t = this.verifyAditional(),
                            e = o.DOM.hasClass(this.card, "card-open"),
                            a = o.DOM.findOne(".list-content", this.card),
                            i = o.DOM.find(".list-item", this.card),
                            s = i.length,
                            n = void 0;
                        return 0 == s ? void(null != a && (a.style.height = "150px")) : (1 == e ? n = this.calculeHeightList(i) : s > this.qtdMaxCard ? (o.DOM.removeClass(this.card, "hide-icon"), n = this.calculeHeightList(i, this.qtdMaxCard)) : (n = this.calculeHeightList(i), o.DOM.addClass(this.card, "hide-icon")), void(a.style.height = n + t + "px"));
                    }
                }]), t;
            }();
        a.Card = u;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/utils.js": 51,
        "../scroll-fixed/script.jsx": 31
    }],
    21: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/metrics"),
            o = i(c),
            d = t("../../js/utils.js"),
            u = t("../../js/libs/dom"),
            h = t("../brazil-cities/script.jsx"),
            f = i(h),
            p = t("../../js/libs/webservice.js"),
            g = i(p),
            m = function() {
                function t() {
                    var e = this;
                    s(this, t);
                    var a = this;
                    this.storageHistory = "historyCitiesMobile", "2turno" == window.page.round && (this.storageHistory = "historyCitiesMobile2T"), d.actionEvents.bind("serviceStatus:mobileHistory", function(t) {
                        0 == t && e.cities.map(function(t) {
                            delete t.sap, a.destroyWebService(t.ac);
                        });
                    }), this.maxCities = 3, this.cities = [], this.citiesWebService = {};
                }
                return n(t, [{
                    key: "mount",
                    value: function(t) {
                        this.container = t, this.cities = d.storage.getItem(this.storageHistory) || [], this.verifyCityActive(), this.updateWebService(), r["default"].mount(this.container, this);
                    }
                }, {
                    key: "setCity",
                    value: function(t) {
                        for (this.verifyCityActive(); this.cities.length >= this.maxCities;) {
                            this.removeCity(this.cities[0].ac);
                        }
                        var e = f["default"].findById(t);
                        this.cities.push({
                            ac: e.id,
                            an: e.name,
                            si: e.uf
                        }), this.updateStorage(), this.updateWebService();
                    }
                }, {
                    key: "updateWebService",
                    value: function() {
                        var t = this;
                        0 != window.servicesStatus.mobileHistory && setTimeout(function() {
                            t.cities.map(function(e) {
                                0 == t.citiesWebService.hasOwnProperty(e.ac) && (t.citiesWebService[e.ac] = (0, g["default"])().city(e.ac).cityProgress().then(function(t) {
                                    e.sap = t.sap;
                                }));
                            });
                        }, 500);
                    }
                }, {
                    key: "updateStorage",
                    value: function() {
                        var t = this.cities.map(function(t) {
                            return {
                                ac: t.ac,
                                an: t.an,
                                si: t.si
                            };
                        });
                        d.storage.setItem(this.storageHistory, t);
                    }
                }, {
                    key: "verifyCityActive",
                    value: function() {
                        var t = f["default"].getActive();
                        void 0 != t && this.removeCity(t.id);
                    }
                }, {
                    key: "removeCity",
                    value: function(t) {
                        var e = this.cities.map(function(t) {
                            return t.ac;
                        }).indexOf(t);
                        e >= 0 && (this.cities.splice(e, 1), this.updateStorage(), this.destroyWebService(t));
                    }
                }, {
                    key: "destroyWebService",
                    value: function(t) {
                        void 0 != this.citiesWebService[t] && (this.citiesWebService[t].destroy(), delete this.citiesWebService[t]);
                    }
                }, {
                    key: "closeCity",
                    value: function(t) {
                        var e = u.DOM.closest(t.target, ".history-item"),
                            a = u.DOM.attr(e, "data-id");
                        this.removeCity(a), o["default"].click("historico", "remover_cidade");
                    }
                }, {
                    key: "openCity",
                    value: function(t) {
                        var e = u.DOM.closest(t.target, ".history-item"),
                            a = u.DOM.attr(e, "data-id");
                        f["default"].setActive(a), o["default"].hit("city"), o["default"].click("historico", "trocar_cidade");
                    }
                }, {
                    key: "itemMarkup",
                    value: function(t) {
                        return {
                            tag: "li",
                            children: [{
                                tag: "span",
                                attrs: {
                                    className: "history-remove-city icon-close-2",
                                    onclick: this.closeCity.bind(this)
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: [(0, d.capitalizeName)(t.an)],
                                    attrs: {
                                        className: "history-name"
                                    }
                                }, {
                                    tag: "span",
                                    children: [t.si],
                                    attrs: {
                                        className: "history-state"
                                    }
                                }, null != t.sap ? {
                                    tag: "span",
                                    children: [t.sap, "%"],
                                    attrs: {
                                        className: "history-porcent"
                                    }
                                } : null],
                                attrs: {
                                    className: "history-city",
                                    onclick: this.openCity.bind(this)
                                }
                            }],
                            attrs: {
                                className: "history-item",
                                "data-id": t.ac
                            }
                        };
                    }
                }, {
                    key: "view",
                    value: function() {
                        var t = this;
                        return {
                            tag: "ul",
                            children: [this.cities.map(function(e) {
                                return t.itemMarkup(e);
                            })],
                            attrs: {
                                className: "history-list"
                            }
                        };
                    }
                }]), t;
            }(),
            v = new m;
        a["default"] = v;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../brazil-cities/script.jsx": 2
    }],
    22: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/metrics"),
            o = i(c),
            d = t("../../js/utils.js"),
            u = t("../../js/libs/dom"),
            h = t("../search-city/script.jsx"),
            f = t("../search-councilman/script.jsx"),
            p = t("../candidate-avatar/script.jsx"),
            g = t("../scroll-fixed/script.jsx"),
            m = t("../../js/libs/webservice.js"),
            v = (i(m), t("../router/script.jsx")),
            y = i(v),
            b = t("../brazil-cities/script.jsx"),
            C = i(b),
            w = 1,
            N = function(t) {
                var e = [];
                for (var a in t) {
                    e.push({
                        nome: t[a].nome,
                        id: t[a].id,
                        uf: t[a].uf,
                        isCapital: C["default"].isCapital(t[a].id)
                    }), e.sort(function(t, e) {
                        return t.nome > e.nome ? 1 : e.nome > t.nome ? -1 : 0;
                    });
                }
                return e;
            },
            M = function() {
                function t() {
                    s(this, t), this.body = u.DOM.findOne("body"), this.Scroll = new g.Scroll, this.titleModal, this.city, this.component = function() {}, this.visible = !1;
                }
                return n(t, [{
                    key: "mount",
                    value: function(t) {
                        this.container = t, r["default"].mount(this.container, this);
                    }
                }, {
                    key: "defineModal",
                    value: function(t) {
                        this.modalType = t, "search-city" == t ? (this.titleModal = "Buscar cidade", this.component = this.componentSearch.bind(this)) : "search-councilman" == t ? (this.titleModal = "Buscar vereador", this.component = this.componentSearchCouncilman.bind(this)) : "modal-mayor" == t || "modal-mayor-header" == t ? (this.titleModal = "Compartilhe", this.component = this.componentShareMayor.bind(this)) : "modal-councilman" == t ? (this.titleModal = "Compartilhe", this.component = this.componentShareCouncilman.bind(this)) : "modal-inactive" == t ? (this.titleModal = "", this.component = this.componentCandidateInactive.bind(this)) : "modal-suggest" == t && (this.titleModal = "", this.component = this.componentSuggest.bind(this));
                    }
                }, {
                    key: "show",
                    value: function(t) {
                        this.sharePage = t["share-page"] || "", this.dados = t.data || "", this.classExtra = t.classExtra || "", this.onSuggestSelect = t.onSuggestSelect || function() {}, this.defineModal(t.type), this.visible = !0, this.metricsLocal = t.metricsLocal || "", u.DOM.addClass(this.body, "modal-open"), 1 == t.gateClass && u.DOM.addClass(this.body, "modal-gate");
                        var e = C["default"].getActive(),
                            a = void 0,
                            i = void 0,
                            s = void 0;
                        void 0 != e ? (a = e.path, i = e.id, s = (0, d.getPageTitle)(window.page.metaCityTitle, e)) : (a = location.pathname, i = null, s = (0, d.getPageTitle)(window.page.metaTitle)), y["default"].push({
                            path: a,
                            title: s,
                            cityId: i,
                            hash: "#modal"
                        });
                    }
                }, {
                    key: "closeModal",
                    value: function(t) {
                        t && t.stopPropagation && t.stopPropagation(), this.visible = !1, u.DOM.removeClass(this.body, "modal-open"), u.DOM.removeClass(this.body, "modal-gate");
                        var e = C["default"].getActive();
                        if (void 0 != e) {
                            var a = (0, d.getPageTitle)(window.page.metaCityTitle, e);
                            y["default"].replace({
                                path: e.path,
                                title: a,
                                cityId: e.id
                            });
                        }
                        var i = t !== w;
                        switch (this.modalType) {
                            case "search-city":
                                i && o["default"].click(this.metricsLocal, "fechar_modal_mudar_cidade", !1);
                                break;
                            case "search-councilman":
                                i && o["default"].click("bloco vereadores", "fechar_modal_busca_vereador", !1);
                                break;
                            case "modal-mayor":
                                i && o["default"].click("bloco prefeitos", "fechar_modal_compartilhar", !1);
                                break;
                            case "modal-mayor-header":
                                i && o["default"].click("header municipio", "fechar_modal_compartilhar", !1);
                                break;
                            case "modal-councilman":
                                i && o["default"].click("bloco vereadores", "fechar_modal_compartilhar", !1);
                                break;
                            case "modal-inactive":
                                i && o["default"].click(this.metricsLocal, "fechar_modal_inelegivel", !1);
                                break;
                            case "modal-suggest":
                                i && o["default"].click("modal cidades 2t", "fechar_modal", !1);
                        }
                    }
                }, {
                    key: "componentSearch",
                    value: function() {
                        var t = this,
                            e = u.DOM.findOne(".modal-module"),
                            a = {
                                localBtn: "titulo pagina municipio",
                                localSuggest: "suggest cidade",
                                action: "botao_escolher_outra",
                                city: !1
                            };
                        this.metricsLocal, new h.SearchCity(e, {
                            inputContainer: e,
                            showLightobx: !1,
                            showInput: !0,
                            onSuggestSelect: function() {
                                t.closeModal(w), t.onSuggestSelect(), t.Scroll.To(document.body);
                            },
                            metrics: a
                        });
                    }
                }, {
                    key: "componentSearchCouncilman",
                    value: function(t) {
                        var e = this,
                            a = u.DOM.findOne(".modal-module");
                        new f.SearchCouncilmanMobile(a, {
                            inputContainer: a,
                            onSuggestSelect: function() {
                                e.closeModal(w);
                                var t = u.DOM.findOne(".city-councilman"),
                                    a = u.DOM.closest(t, ".card");
                                e.Scroll.To(a, -50);
                            }
                        });
                    }
                }, {
                    key: "initComponentAvatar",
                    value: function(t, e) {
                        if (!e) {
                            var a = new p.CandidateAvatarMobile({
                                avatarType: "modal",
                                hasGauge: !1,
                                container: t,
                                actionEvent: !1
                            });
                            a.update(this.dados.candidate, this.dados.city.ac, (0, d.candidateStatus)(this.dados.city, this.dados.candidate));
                        }
                    }
                }, {
                    key: "componentShareMayor",
                    value: function() {
                        var t = u.DOM.findOne(".modal-module");
                        r["default"].render(t, [{
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: [(0, d.capitalizeName)(this.dados.city.an), {
                                        tag: "span",
                                        children: [this.dados.city.si],
                                        attrs: {
                                            className: "state"
                                        }
                                    }],
                                    attrs: {
                                        className: "name"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.dados.city.sap, "%", {
                                        tag: "span",
                                        children: ["urnas apuradas"]
                                    }],
                                    attrs: {
                                        className: "legend"
                                    }
                                }],
                                attrs: {
                                    className: "city"
                                }
                            }, {
                                tag: "div",
                                attrs: {
                                    config: this.initComponentAvatar.bind(this)
                                }
                            }, 1 == this.sharePage ? {
                                tag: "div",
                                children: [{
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-facebook",
                                        "data-metrics-location": "header",
                                        "data-metrics-action": "compartilhar_candidato_facebook",
                                        "data-share": "%7B%22page%22%3Atrue%7D"
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-twitter",
                                        "data-metrics-location": "header",
                                        "data-metrics-action": "compartilhar_candidato_twitter",
                                        "data-share": "%7B%22page%22%3Atrue%7D"
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-whatsapp",
                                        "data-metrics-location": "header",
                                        "data-metrics-action": "compartilhar_candidato_whatsapp",
                                        "data-share": "%7B%22page%22%3Atrue%7D"
                                    }
                                }],
                                attrs: {
                                    className: "share"
                                }
                            } : {
                                tag: "div",
                                children: [{
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-facebook",
                                        "data-metrics-location": "prefeitos",
                                        "data-metrics-action": "compartilhar_candidato_facebook",
                                        "data-share": (0, d.json2data)({
                                            candidate: this.dados.candidate,
                                            city: {
                                                id: this.dados.city.ac,
                                                name: this.dados.city.an,
                                                uf: this.dados.city.si
                                            }
                                        })
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-twitter",
                                        "data-metrics-location": "prefeitos",
                                        "data-metrics-action": "compartilhar_candidato_twitter",
                                        "data-share": (0, d.json2data)({
                                            candidate: this.dados.candidate,
                                            city: {
                                                id: this.dados.city.ac,
                                                name: this.dados.city.an,
                                                uf: this.dados.city.si
                                            }
                                        })
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-whatsapp",
                                        "data-metrics-location": "prefeitos",
                                        "data-metrics-action": "compartilhar_candidato_whatsapp",
                                        "data-share": (0, d.json2data)({
                                            candidate: this.dados.candidate,
                                            city: {
                                                id: this.dados.city.ac,
                                                name: this.dados.city.an,
                                                uf: this.dados.city.si
                                            }
                                        })
                                    }
                                }],
                                attrs: {
                                    className: "share"
                                }
                            }],
                            attrs: {
                                className: "share-mayor"
                            }
                        }]);
                    }
                }, {
                    key: "componentSuggest",
                    value: function() {
                        var t = this,
                            e = u.DOM.findOne(".modal-module"),
                            a = N(window.cities2t);
                        r["default"].render(e, [{
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: ["Escolha uma cidade", {
                                    tag: "span",
                                    children: ["para acompanhar a apuração"]
                                }],
                                attrs: {
                                    className: "cities-suggest-title"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "ul",
                                    children: [a.map(function(e) {
                                        return {
                                            tag: "li",
                                            children: [(0, d.capitalizeName)(e.nome), {
                                                tag: "span",
                                                children: [e.uf],
                                                attrs: {
                                                    className: "state"
                                                }
                                            }],
                                            attrs: {
                                                className: "city " + (1 == e.isCapital ? "is-capital" : null) + " ",
                                                "data-id": e.id,
                                                onclick: t.openCity.bind(t)
                                            }
                                        };
                                    })]
                                }],
                                attrs: {
                                    className: "cities-suggest-list"
                                }
                            }],
                            attrs: {
                                className: "cities-suggest"
                            }
                        }]);
                    }
                }, {
                    key: "openCity",
                    value: function(t) {
                        var e = u.DOM.closest(t.target, ".city"),
                            a = u.DOM.attr(e, "data-id");
                        C["default"].setActive(a), this.Scroll.To(document.body), this.closeModal(w), o["default"].click("modal cidades 2t", "selecionar_cidade"), o["default"].hit("city");
                    }
                }, {
                    key: "componentCandidateInactive",
                    value: function() {
                        var t = u.DOM.findOne(".modal-module");
                        r["default"].render(t, [{
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: [this.dados.candidate.ps],
                                    attrs: {
                                        className: "party"
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, d.capitalizeName)(this.dados.candidate.nu)],
                                    attrs: {
                                        className: "name"
                                    }
                                }],
                                attrs: {
                                    className: "candidate"
                                }
                            }, {
                                tag: "div",
                                children: [d.CANDIDATE_CANCELLED],
                                attrs: {
                                    className: "message-inactive"
                                }
                            }],
                            attrs: {
                                className: "candidate-inactive"
                            }
                        }]);
                    }
                }, {
                    key: "componentShareCouncilman",
                    value: function() {
                        var t = u.DOM.findOne(".modal-module");
                        r["default"].render(t, [{
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: [(0, d.capitalizeName)(this.dados.city.an), {
                                        tag: "span",
                                        children: [this.dados.city.si],
                                        attrs: {
                                            className: "state"
                                        }
                                    }],
                                    attrs: {
                                        className: "name"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.dados.city.sap, "%", {
                                        tag: "span",
                                        children: ["urnas apuradas"]
                                    }],
                                    attrs: {
                                        className: "legend"
                                    }
                                }],
                                attrs: {
                                    className: "city"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "span",
                                    children: [this.dados.candidate.ps],
                                    attrs: {
                                        className: "party"
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, d.capitalizeName)(this.dados.candidate.nu)],
                                    attrs: {
                                        className: "name"
                                    }
                                }, {
                                    tag: "span",
                                    attrs: {
                                        className: "candidate-status situation-" + this.dados.candidate.s
                                    }
                                }, {
                                    tag: "span",
                                    children: [(0, d.formatNumber)(this.dados.candidate.v), " ", {
                                        tag: "span",
                                        children: ["votos"]
                                    }],
                                    attrs: {
                                        className: "votes"
                                    }
                                }],
                                attrs: {
                                    className: "candidate"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-facebook",
                                        "data-metrics-location": "vereadores",
                                        "data-metrics-action": "compartilhar_candidato_facebook",
                                        "data-share": (0, d.json2data)({
                                            candidate: this.dados.candidate,
                                            city: {
                                                id: this.dados.city.ac,
                                                name: this.dados.city.an,
                                                uf: this.dados.city.si
                                            }
                                        })
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-twitter",
                                        "data-metrics-location": "vereadores",
                                        "data-metrics-action": "compartilhar_candidato_twitter",
                                        "data-share": (0, d.json2data)({
                                            candidate: this.dados.candidate,
                                            city: {
                                                id: this.dados.city.ac,
                                                name: this.dados.city.an,
                                                uf: this.dados.city.si
                                            }
                                        })
                                    }
                                }, {
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-whatsapp",
                                        "data-metrics-location": "vereadores",
                                        "data-metrics-action": "compartilhar_candidato_whatsapp",
                                        "data-share": (0, d.json2data)({
                                            candidate: this.dados.candidate,
                                            city: {
                                                id: this.dados.city.ac,
                                                name: this.dados.city.an,
                                                uf: this.dados.city.si
                                            }
                                        })
                                    }
                                }],
                                attrs: {
                                    className: "share"
                                }
                            }],
                            attrs: {
                                className: "share-councilman"
                            }
                        }]);
                    }
                }, {
                    key: "initComponent",
                    value: function(t, e) {
                        e || this.component();
                    }
                }, {
                    key: "view",
                    value: function() {
                        return 1 == this.visible ? {
                            tag: "div",
                            children: [{
                                tag: "span",
                                attrs: {
                                    className: "modal-icon-close icon-close-2 modal-close",
                                    onclick: this.closeModal.bind(this)
                                }
                            }, {
                                tag: "div",
                                children: [this.titleModal],
                                attrs: {
                                    className: "modal-title"
                                }
                            }, {
                                tag: "div",
                                attrs: {
                                    className: "modal-module",
                                    config: this.initComponent.bind(this)
                                }
                            }],
                            attrs: {
                                className: "modal-container " + this.classExtra
                            }
                        } : {
                            tag: "div",
                            attrs: {
                                className: "modal-container"
                            }
                        };
                    }
                }]), t;
            }(),
            k = new M;
        a["default"] = k;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils.js": 51,
        "../brazil-cities/script.jsx": 2,
        "../candidate-avatar/script.jsx": 3,
        "../router/script.jsx": 24,
        "../scroll-fixed/script.jsx": 31,
        "../search-city/script.jsx": 32,
        "../search-councilman/script.jsx": 33
    }],
    23: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/utils.js"),
            r = t("../../js/libs/dom"),
            c = t("../../components/disclaimer/script.jsx"),
            o = i(c),
            d = t("../../js/libs/mithril"),
            u = (i(d), 5),
            h = 185,
            f = 95,
            p = 75,
            g = 20,
            m = function() {
                function t() {
                    s(this, t), this.city = {
                        sap: "0,00",
                        abp: "0,00",
                        el: "0"
                    }, this.showSliders = {
                        display: (0, l.queryString)("sliders") ? "block" : "none",
                        position: "fixed",
                        left: "113px",
                        top: "-56px",
                        "z-index": 37
                    }, this.progressBarElement = !1;
                }
                return n(t, [{
                    key: "update",
                    value: function(t) {
                        var e = h + ("" + t.el).length * u,
                            a = f + ("" + t.vop).length * u,
                            i = p + ("" + t.abp).length * u,
                            s = e + g,
                            n = this.progressBarWidth - i - g,
                            r = (0, l.percentFrom)((0, l.percentToFloat)(t.vop), (0, l.percentToFloat)(t.sap));
                        r = this.progressBarWidth * r / 100;
                        var c = {
                                "min-width": s + "px",
                                "max-width": n + "px",
                                width: r + "px"
                            },
                            o = e + a + g,
                            d = this.progressBarWidth,
                            m = (0, l.percentFrom)((0, l.percentToFloat)(t.abp), (0, l.percentToFloat)(t.sap));
                        m = r + this.progressBarWidth * m / 100;
                        var v = 0,
                            y = m - r,
                            b = (0, l.percentToFloat)(t.vop) > 50 ? "right" : "left";
                        y <= i && (v = i - y + g);
                        var C = {
                            "text-align": b,
                            "min-width": o + "px",
                            "max-width": d + "px",
                            width: m + v + "px"
                        };
                        Object.assign(this, {
                            city: t,
                            missingLeft: {
                                width: (0, l.percentToFloat)(t.sap) + "%"
                            },
                            totalPercentage: {
                                width: (0, l.percentToFloat)(t.sap) + "%"
                            },
                            totalVoters: {
                                width: (0, l.percentToFloat)(t.vop) + "%"
                            },
                            totalMissing: {
                                width: (0, l.percentToFloat)(t.abp) + "%"
                            },
                            votersStyle: c,
                            missingStyle: C,
                            diff: {
                                width: 100 - (0, l.percentToFloat)(t.sap) + "%"
                            }
                        });
                    }
                }, {
                    key: "changeRange",
                    value: function(t) {
                        var e = Object.assign({}, this.city);
                        e.sap = t.target.value + ",00", this.update(e);
                    }
                }, {
                    key: "changeRange2",
                    value: function(t) {
                        var e = Object.assign({}, this.city);
                        e.vop = parseFloat(t.target.value).toFixed(2).replace(".", ","), e.abp = 100 - (0, l.percentToFloat)(e.vop) + ",00", this.update(e);
                    }
                }, {
                    key: "changeRange3",
                    value: function(t) {
                        var e = 1000,
                            a = Object.assign({}, this.city);
                        a.el = e * parseFloat(t.target.value).toFixed(2) / 100, this.update(a);
                    }
                }, {
                    key: "mobileComponentDisclaimer",
                    value: function(t, e) {
                        e || (this.disclaimerPage = new o["default"](t));
                    }
                }, {
                    key: "getProgressBarElement",
                    value: function(t, e) {
                        e || (this.progressBarElement = t, r.DOM.Event(window).on("resize", this.getProgressBarWidth.bind(this)), this.getProgressBarWidth());
                    }
                }, {
                    key: "getProgressBarWidth",
                    value: function() {
                        this.progressBarWidth = this.progressBarElement ? this.progressBarElement.offsetWidth : 0, this.update(this.city);
                    }
                }, {
                    key: "viewMobile",
                    value: function() {
                        if (this.city) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    children: [{
                                        tag: "span",
                                        attrs: {
                                            className: "progress-bar-wrapper " + this.getProgressBarWrapperClass(),
                                            style: this.totalPercentage,
                                            "data-percent": parseInt((0, l.percentToFloat)(this.city.sap))
                                        }
                                    }, {
                                        tag: "span",
                                        attrs: {
                                            className: "full-bar"
                                        }
                                    }],
                                    attrs: {
                                        className: "progress-bar"
                                    }
                                }, {
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        children: [this.city.sap, "%"],
                                        attrs: {
                                            className: "polls-number"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["urnas apuradas"],
                                        attrs: {
                                            className: "polls-label"
                                        }
                                    }],
                                    attrs: {
                                        className: "polls"
                                    }
                                }, {
                                    tag: "p",
                                    children: ["Apuração não iniciada"],
                                    attrs: {
                                        className: "awaiting"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "disclaimer-container",
                                        config: this.mobileComponentDisclaimer.bind(this)
                                    }
                                }, {
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: ["ELEITORES"],
                                            attrs: {
                                                className: "name"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [(0, l.formatNumber)(this.city.el)],
                                            attrs: {
                                                className: "total"
                                            }
                                        }],
                                        attrs: {
                                            className: "progress-label"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: ["|"],
                                            attrs: {
                                                className: "divisor"
                                            }
                                        }, {
                                            tag: "span",
                                            children: ["VOTANTES"],
                                            attrs: {
                                                className: "name"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [this.city.vop, "%"],
                                            attrs: {
                                                className: "total"
                                            }
                                        }],
                                        attrs: {
                                            className: "progress-label"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: ["|"],
                                            attrs: {
                                                className: "divisor"
                                            }
                                        }, {
                                            tag: "span",
                                            children: ["AUSENTES"],
                                            attrs: {
                                                className: "name"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [this.city.abp, "%"],
                                            attrs: {
                                                className: "total"
                                            }
                                        }],
                                        attrs: {
                                            className: "progress-label"
                                        }
                                    }],
                                    attrs: {
                                        className: "progress-bar-status"
                                    }
                                }],
                                attrs: {
                                    className: "progress-bar-container"
                                }
                            };
                        }
                    }
                }, {
                    key: "getProgressBarWrapperClass",
                    value: function() {
                        var t = (0, l.percentToFloat)(this.city.sap);
                        return t < 100 ? "" : "progress-bar-wrapper-full";
                    }
                }, {
                    key: "view",
                    value: function() {
                        return window.page.isMobile === !0 ? this.viewMobile() : this.city ? {
                            tag: "div",
                            children: [{
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: ["URNAS APURADAS"],
                                    attrs: {
                                        className: "polls-label"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.city.sap],
                                    attrs: {
                                        className: "polls-number"
                                    }
                                }, {
                                    tag: "span",
                                    children: ["%"],
                                    attrs: {
                                        className: "polls-percent"
                                    }
                                }],
                                attrs: {
                                    className: "polls"
                                }
                            }, {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    attrs: {
                                        className: "progress-bar voters-bar",
                                        style: this.totalVoters,
                                        "data-percent": parseInt((0, l.percentToFloat)(this.city.vop))
                                    }
                                }, {
                                    tag: "span",
                                    attrs: {
                                        className: "progress-bar missing-voters-bar",
                                        style: this.totalMissing,
                                        "data-percent": parseInt((0, l.percentToFloat)(this.city.abp))
                                    }
                                }],
                                attrs: {
                                    className: "progress-bar-wrapper " + this.getProgressBarWrapperClass(),
                                    style: this.totalPercentage,
                                    "data-percent": parseInt((0, l.percentToFloat)(this.city.sap))
                                }
                            }, {
                                tag: "span",
                                attrs: {
                                    className: "progress-bar full-bar",
                                    style: this.diff
                                }
                            }, {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        children: [(0, l.formatNumber)(this.city.el)],
                                        attrs: {
                                            className: "total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["ELEITORES"],
                                        attrs: {
                                            className: "name"
                                        }
                                    }],
                                    attrs: {
                                        className: "progress-label label-total left"
                                    }
                                }],
                                attrs: {
                                    className: "progress-bar-labels eleitores"
                                }
                            }, {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            attrs: {
                                                className: "circle blue"
                                            }
                                        }, " ", this.city.vop, "%"],
                                        attrs: {
                                            className: "total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["VOTANTES"],
                                        attrs: {
                                            className: "name"
                                        }
                                    }],
                                    attrs: {
                                        className: "progress-label label-percentage right"
                                    }
                                }],
                                attrs: {
                                    className: "progress-bar-labels",
                                    style: this.votersStyle
                                }
                            }, {
                                tag: "span",
                                children: [{
                                    tag: "span",
                                    children: [{
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            attrs: {
                                                className: "circle grey"
                                            }
                                        }, " ", this.city.abp, "%"],
                                        attrs: {
                                            className: "total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["AUSENTES"],
                                        attrs: {
                                            className: "name"
                                        }
                                    }],
                                    attrs: {
                                        className: "progress-label label-missing right"
                                    }
                                }],
                                attrs: {
                                    className: "progress-bar-labels",
                                    style: this.missingStyle
                                }
                            }, {
                                tag: "span",
                                children: [{
                                    tag: "br"
                                }, {
                                    tag: "br"
                                }, "SAP ", {
                                    tag: "input",
                                    attrs: {
                                        className: "range data-sap",
                                        type: "range",
                                        min: "0",
                                        max: "100",
                                        value: parseInt(this.city.sap),
                                        onchange: this.changeRange.bind(this),
                                        step: "1",
                                        style: "margin-right: 10px;"
                                    }
                                }, "VOP ", {
                                    tag: "input",
                                    attrs: {
                                        className: "range data-vop",
                                        type: "range",
                                        min: "0",
                                        max: "100",
                                        value: parseInt(this.city.vop),
                                        onchange: this.changeRange2.bind(this),
                                        step: "1",
                                        style: "margin-right: 10px;"
                                    }
                                }, "FIG ", {
                                    tag: "input",
                                    attrs: {
                                        className: "range data-figures",
                                        type: "range",
                                        min: "0",
                                        max: "100",
                                        onchange: this.changeRange3.bind(this),
                                        step: "1"
                                    }
                                }],
                                attrs: {
                                    className: "ranges",
                                    style: this.showSliders
                                }
                            }, {
                                tag: "p",
                                children: ["Apuração não iniciada"],
                                attrs: {
                                    className: "awaiting"
                                }
                            }],
                            attrs: {
                                className: "progress-bar-container",
                                config: this.getProgressBarElement.bind(this)
                            }
                        } : void 0;
                    }
                }]), t;
            }();
        a["default"] = m;
    }, {
        "../../components/disclaimer/script.jsx": 11,
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/utils.js": 51
    }],
    24: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../brazil-cities/script.jsx"),
            r = i(l),
            c = t("../mobile-modal/script.jsx"),
            o = i(c),
            d = t("../../js/utils"),
            u = t("../../js/libs/dom"),
            h = function() {
                function t() {
                    s(this, t), this.onpopstate = [], this.supportStates = "replaceState" in window.history;
                }
                return n(t, [{
                    key: "push",
                    value: function(t) {
                        if (this.supportStates === !1) {
                            return !1;
                        }
                        console.log("router push", t);
                        var e = t.hash || "";
                        window.history.pushState(t, t.title, t.path + location.search + e), document.title = t.title;
                    }
                }, {
                    key: "replace",
                    value: function(t) {
                        return this.supportStates !== !1 && (console.log("router replace", t), void window.history.replaceState(t, t.title, t.path + location.search));
                    }
                }, {
                    key: "pushCity",
                    value: function(t) {
                        var e = r["default"].findById(t),
                            a = (0, d.getPageTitle)(window.page.metaCityTitle, e);
                        this.push({
                            path: e.path,
                            title: a,
                            cityId: t
                        });
                    }
                }, {
                    key: "replaceCity",
                    value: function(t) {
                        var e = r["default"].findById(t),
                            a = (0, d.getPageTitle)(window.page.metaCityTitle, e);
                        this.replace({
                            path: location.pathname,
                            title: a,
                            cityId: t
                        });
                    }
                }, {
                    key: "trigger",
                    value: function(t) {
                        if (t.state && "#modal" == t.state.hash) {
                            var e = r["default"].getActive(),
                                a = void 0,
                                i = void 0,
                                s = void 0;
                            void 0 != e ? (a = e.path, i = e.id, s = (0, d.getPageTitle)(window.page.metaCityTitle, e)) : (a = location.pathname, i = null, s = (0, d.getPageTitle)(window.page.metaTitle)), this.replace({
                                path: a,
                                title: s,
                                cityId: i
                            });
                        }
                        u.DOM.hasClass(document.body, "modal-open") && (o["default"].closeModal(), Mithil.redraw()), this.onpopstate.forEach(function(e) {
                            return e(t);
                        });
                    }
                }, {
                    key: "onChange",
                    value: function(t) {
                        this.onpopstate.push(t);
                    }
                }]), t;
            }(),
            f = new h;
        window.onpopstate = function(t) {
            return f.trigger(t);
        }, a["default"] = f;
    }, {
        "../../js/libs/dom": 38,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../mobile-modal/script.jsx": 22
    }],
    25: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/dom"),
            o = t("../../js/utils"),
            d = t("../scenario-list/script.jsx"),
            u = i(d),
            h = t("../scenario-tabs/script.jsx"),
            f = i(h),
            p = t("../scenario-map/script.jsx"),
            g = i(p),
            m = function() {
                function t(e) {
                    s(this, t), this.container = e, this.loaded = !1, this.citiesDefined2T = 0, this.totalCities = 0, r["default"].mount(e, this);
                }
                return n(t, [{
                    key: "initScenario",
                    value: function(t, e) {
                        var a = this;
                        this.loaded === !1 && (this.loaded = !0, this.scenarioMap = new g["default"](c.DOM.findOne(".map", this.container)), this.scenarioTabs = new f["default"](c.DOM.findOne(".scenario-tabs", this.container)), this.scenarioList = new u["default"](c.DOM.findOne(".scenario-list", this.container)), this.scenarioList.setTabs(this.scenarioTabs), this.scenarioList.setMap(this.scenarioMap), this.scenarioTabs.setList(this.scenarioList), this.scenarioMap.setTabs(this.scenarioTabs), this.scenarioMap.setList(this.scenarioList), this.scenarioList.setOnUpdateCallback(function(t) {
                            a.totalCities = (0, o.removeDuplicatesBy)("ac", t).length;
                            var e = t.filter(function(t) {
                                return "elected-1" === t.elected || "elected-2" === t.elected;
                            }).filter(function(t, e, a) {
                                return a.findIndex(function(e) {
                                    return e.ac === t.ac;
                                }) === e;
                            });
                            a.citiesDefined2T = e.length;
                        }));
                    }
                }, {
                    key: "getViewMap",
                    value: function() {
                        return this.scenarioMap ? this.scenarioMap.view() : "";
                    }
                }, {
                    key: "getViewTabs",
                    value: function() {
                        return this.scenarioTabs ? this.scenarioTabs.view() : "";
                    }
                }, {
                    key: "getViewList",
                    value: function() {
                        return this.scenarioList ? this.scenarioList.view() : "";
                    }
                }, {
                    key: "getViewTitle",
                    value: function() {
                        return o.is2T ? {
                            tag: "div",
                            children: [{
                                tag: "h3",
                                children: ["Cidades com 2º turno"],
                                attrs: {
                                    className: "title"
                                }
                            }, {
                                tag: "p",
                                children: [{
                                    tag: "b",
                                    children: [this.citiesDefined2T]
                                }, " dos ", {
                                    tag: "b",
                                    children: [this.totalCities]
                                }, " municípios já têm resultado definido"],
                                attrs: {
                                    className: "desc"
                                }
                            }],
                            attrs: {
                                className: "big-cities-container turno2"
                            }
                        } : {
                            tag: "div",
                            children: [{
                                tag: "h3",
                                children: ["Grandes cidades"],
                                attrs: {
                                    className: "title"
                                }
                            }, {
                                tag: "p",
                                children: ["Capitais e municípios com mais de 200 mil eleitores que podem ir para o 2º turno"],
                                attrs: {
                                    className: "desc"
                                }
                            }],
                            attrs: {
                                className: "big-cities-container"
                            }
                        };
                    }
                }, {
                    key: "scrollToCityInRegion",
                    value: function(t) {
                        this.scenarioList.scrollToCityInRegion(t);
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                attrs: {
                                    className: "arrow-left"
                                }
                            }, {
                                tag: "div",
                                attrs: {
                                    className: "arrow-right"
                                }
                            }, this.getViewMap(), {
                                tag: "div",
                                children: [this.getViewTitle(), {
                                    tag: "div",
                                    children: [this.getViewTabs()],
                                    attrs: {
                                        className: "scenario-tabs"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "div",
                                        attrs: {
                                            className: "list-cities-item ghost"
                                        }
                                    }, this.getViewList()],
                                    attrs: {
                                        className: "scenario-list"
                                    }
                                }],
                                attrs: {
                                    className: "big-cities-list"
                                }
                            }],
                            attrs: {
                                className: "score-cities-container",
                                config: this.initScenario.bind(this)
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = m;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/utils": 51,
        "../scenario-list/script.jsx": 26,
        "../scenario-map/script.jsx": 27,
        "../scenario-tabs/script.jsx": 29
    }],
    26: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            },
            l = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            r = t("../../js/libs/mithril"),
            c = (i(r), t("../favorite-management/script.jsx")),
            o = t("../../js/libs/metrics"),
            d = i(o),
            u = t("../../js/libs/dom"),
            h = t("../../js/utils"),
            f = t("../brazil-cities/script.jsx"),
            p = i(f),
            g = t("../../js/libs/webservice.js"),
            m = i(g),
            v = function() {
                function t(e) {
                    var a = this;
                    s(this, t), this.cidadesIDs = ["71072", "60011", "38490", "41238", "13897", "75353", "02550", "25313", "88013", "04278", "93734", "09210", "90514", "27855", "17612", "12190", "20516", "90670", "31054", "00035", "81051", "06050", "01392", "57053", "03018", "73440", "71072", "64777", "62910", "70750", "70572", "67890", "70998", "71455", "69698", "70718", "63770", "70971", "66893", "67130", "66192", "63134", "68756", "62197", "71218", "62138", "64254", "64750", "65633", "71838", "66397", "71510", "71579", "69213", "60011", "58971", "58335", "58696", "58653", "59013", "58190", "58041", "58777", "59250", "41238", "54038", "43710", "47333", "41335", "48658", "54011", "45535", "57037", "56995", "56251", "57053", "38490", "35157", "39659", "25313", "24570", "24910", "23817", "13897", "13730", "20516", "19810", "09210", "27855", "17612", "12190", "31054", "75353", "76678", "76910", "77771", "74934", "88013", "85995", "85898", "87912", "88412", "81795", "81051", "80470", "04278", "04154", "05355", "02550", "00035", "06050", "01392", "03018", "73440", "93734", "92274", "92215", "90514", "90670"], h.is2T && (this.cidadesIDs = ["60011", "41238", "13897", "75353", "02550", "25313", "88013", "04278", "93734", "09210", "90514", "27855", "90670", "31054", "00035", "81051", "06050", "57053", "60011", "41238", "64777", "58971", "58335", "70750", "58696", "70572", "67890", "71455", "43710", "69698", "47333", "58653", "63770", "58041", "57037", "56995", "66893", "66192", "62197", "48658", "56251", "58777", "57053", "64254", "64750", "59250", "71510", "13897", "25313", "09210", "27855", "24570", "31054", "24910", "39659", "13730", "23817", "75353", "88013", "81795", "81051", "85995", "76910", "85898", "80470", "77771", "88412", "02550", "04278", "00035", "06050", "93734", "90514", "90670", "92215"]), this.cidades = this.cidadesIDs.map(function(t, e) {
                        var i = p["default"].findById(t),
                            s = a.getRegion(i.uf, e);
                        if (h.is2T) {
                            if (e >= 17) {
                                switch (i.id) {
                                    case "57053":
                                        i.separatorNext = 17 === e ? "sudeste" : null;
                                        break;
                                    case "71510":
                                        i.separatorNext = "nordeste";
                                        break;
                                    case "23817":
                                        i.separatorNext = "sul";
                                        break;
                                    case "88412":
                                        i.separatorNext = "norte";
                                        break;
                                    case "06050":
                                        i.separatorNext = "centro-oeste";
                                }
                            }
                        } else {
                            if (e >= 25) {
                                switch (i.id) {
                                    case "57053":
                                        i.separatorNext = "nordeste";
                                        break;
                                    case "31054":
                                        i.separatorNext = "sul";
                                        break;
                                    case "80470":
                                        i.separatorNext = "norte";
                                        break;
                                    case "73440":
                                        i.separatorNext = 25 == e ? "sudeste" : "centro-oeste";
                                }
                            }
                        }
                        return {
                            city: i.name,
                            state: i.uf,
                            ac: i.id,
                            regiao: s,
                            waiting: "waiting",
                            css: {},
                            separatorNext: i.separatorNext,
                            ca: [{
                                nu: "",
                                ps: "",
                                vp: ""
                            }, {
                                nu: "",
                                ps: "",
                                vp: ""
                            }]
                        };
                    }), this.cidades[0].active = !0, this.scrollItem = 0, this.lastScrollTop = 0, this.hasData = !1, this.ghost = null, h.actionEvents.bind("pageChange", function(t) {
                        "right" === t ? (a.firstRun = !0, a.getData()) : (a.firstRun = !1, a.request && a.request.destroy(), h.actionEvents.unbind("favoriteCityUpdate"));
                    });
                }
                return l(t, [{
                    key: "getRegion",
                    value: function(t, e) {
                        var a = "";
                        if (h.is2T && e < 18) {
                            return "capitais";
                        }
                        if (!h.is2T && e < 26) {
                            return "capitais";
                        }
                        switch (t) {
                            case "SP":
                            case "RJ":
                            case "MG":
                            case "ES":
                                a = "sudeste";
                                break;
                            case "BA":
                            case "PE":
                            case "CE":
                            case "PB":
                            case "MA":
                            case "AL":
                            case "RN":
                            case "PI":
                            case "SE":
                                a = "nordeste";
                                break;
                            case "PR":
                            case "RS":
                            case "SC":
                                a = "sul";
                                break;
                            case "PA":
                            case "AM":
                            case "RO":
                            case "AP":
                            case "AC":
                            case "RR":
                            case "TO":
                                a = "norte";
                                break;
                            case "GO":
                            case "MS":
                            case "MT":
                                a = "centroOeste";
                        }
                        return a;
                    }
                }, {
                    key: "getData",
                    value: function() {
                        var t = this;
                        "1turno" == window.page.round ? this.request = (0, m["default"])().brazilSummary().then(function(e) {
                            return t.readData(e, "request");
                        }) : this.request = (0, m["default"])().cities2T().then(function(e) {
                            return t.readData(e, "request");
                        }), h.actionEvents.bind("favoriteCityUpdate", function(e) {
                            return t.readData(e, "favorite-city");
                        });
                    }
                }, {
                    key: "readData",
                    value: function(t, e) {
                        var a = this;
                        if (t.subchannels) {
                            var i = c.favCities.getFavorites(),
                                s = function(s) {
                                    if (0 == t.subchannels.hasOwnProperty(s)) {
                                        return "continue";
                                    }
                                    if (0 == a.firstRun && "request" == e && i.find(function(t) {
                                            return t == s;
                                        })) {
                                        return "continue";
                                    }
                                    var n = t.subchannels[s];
                                    a.cidades = a.cidades.map(function(t) {
                                        if (t.ac === n.ac) {
                                            switch (t.waiting = 0 === (0, h.percentToFloat)(n.sap) ? "waiting" : "", t.sap = n.sap, t.elected = "elected-" + (0, h.hasDefinedSituation)(n.ca), t.css.width = (0, h.percentToFloat)(n.sap) + "%", t.percent = parseInt(n.sap), t.ca = n.ca, t.elected) {
                                                case "elected-1":
                                                case "elected-2":
                                                case "elected-3":
                                                    t.whoIsElected = "candidate-index-" + n.ca.findIndex(function(t) {
                                                        return "0" != t.s;
                                                    });
                                                    break;
                                                default:
                                                    t.whoIsElected = "candidate-index-x";
                                            }
                                        }
                                        return t;
                                    });
                                };
                            for (var n in t.subchannels) {
                                s(n);
                            }
                            this.hasData = !0, "request" == e && (this.firstRun = !1), h.is2T && "function" == typeof this.onUpdate && this.onUpdate(this.cidades);
                        }
                    }
                }, {
                    key: "setOnUpdateCallback",
                    value: function(t) {
                        this.onUpdate = t;
                    }
                }, {
                    key: "setTabs",
                    value: function(t) {
                        this.scenarioTabs = t;
                    }
                }, {
                    key: "setMap",
                    value: function(t) {
                        this.scenarioMap = t;
                    }
                }, {
                    key: "scrollToRegion",
                    value: function(t) {
                        this.clickHandler({
                            target: u.DOM.findOne('[data-type="' + t + '"]', this.$scroller)
                        }, !1);
                    }
                }, {
                    key: "scrollToCityInRegion",
                    value: function(t, e) {
                        var a = this;
                        h.actionEvents.once("bigCitiesReady", function() {
                            "object" != ("undefined" == typeof t ? "undefined" : n(t)) || e || (e = a.getRegion(t.uf), t = t.id), a.clickHandler({
                                target: u.DOM.findOne('[data-type="' + e + '"][data-id="' + t + '"]', a.$scroller)
                            }, !1);
                        });
                    }
                }, {
                    key: "activeCity",
                    value: function(t) {
                        var e = this;
                        if (t) {
                            this.scenarioTabs.activate(t.regiao), this.scenarioMap.activate(t), this.cidades = this.cidades.map(function(t, a) {
                                return t.active = a === e.scrollItem, t;
                            });
                            var a = u.DOM.findOne(".list-cities-item.active-true", this.el),
                                i = u.DOM.findOne('.list-cities-item[data-id="' + t.ac + '"][data-type="' + t.regiao + '"]', this.el);
                            a && u.DOM.removeClass(a, "active-true"), i && u.DOM.addClass(i, "active-true");
                        }
                    }
                }, {
                    key: "scrollAnimation",
                    value: function(t, e, a) {
                        var i = this;
                        if (!(a <= 0)) {
                            var s = e - t.scrollTop,
                                n = s / a * 10;
                            setTimeout(function() {
                                t.scrollTop = t.scrollTop + n, t.scrollTop !== e && i.scrollAnimation(t, e, a - 10);
                            }, 10);
                        }
                    }
                }, {
                    key: "clickHandler",
                    value: function(t, e) {
                        var a = t.target;
                        if (u.DOM.hasClass(a, "list-cities-item") === !1 && (a = u.DOM.closest(a, ".list-cities-item")), !u.DOM.hasClass(a, "fake")) {
                            var i = parseInt(u.DOM.attr(a, "data-index"));
                            if (this.scrollItem = i, e === !1 && (this.activeCity(this.cidades[this.scrollItem]), this.scrollAnimation(this.$scroller, a.offsetTop, 600)), void 0 === e) {
                                var s = this.cidades[this.scrollItem],
                                    n = (0, h.toSlug)(s.city).replace(/-/g, "_");
                                p["default"].setActive(s.ac), window.closeBigCitiesPage(null, !1), d["default"].click("grandes cidades lista", "lista_" + n), d["default"].hit("city");
                            }
                        }
                    }
                }, {
                    key: "mouseEnterHandler",
                    value: function(t) {
                        var e = t.target;
                        u.DOM.hasClass(e, "list-cities-item") === !1 && (e = u.DOM.closest(e, ".list-cities-item"));
                        var a = parseInt(u.DOM.attr(e, "data-index"));
                        this.scrollItem = a, this.activeCity(this.cidades[this.scrollItem]);
                    }
                }, {
                    key: "scroll",
                    value: function(t, e) {
                        var a = this;
                        this.el = t, e === !1 && ! function() {
                            a.$scroller = u.DOM.closest(t, ".scenario-list"), a.ghost = u.DOM.findOne(".ghost");
                            var e = function() {
                                var t = document.body,
                                    e = document.documentElement,
                                    i = Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight);
                                a.$scroller.style.height = i - 240 + "px";
                            };
                            u.DOM.Event(window).on("resize", e), e(), u.DOM.Event(t).on(["click", "mouseover"], ".list-cities-item", function(t) {
                                switch (t.type) {
                                    case "click":
                                        a.clickHandler(t);
                                        break;
                                    case "mouseover":
                                        a.mouseEnterHandler(t);
                                }
                            }), h.actionEvents.trigger("bigCitiesReady");
                        }();
                    }
                }, {
                    key: "getRegionSeparator",
                    value: function(t) {
                        return t ? {
                            tag: "div",
                            children: [{
                                tag: "div",
                                attrs: {
                                    className: "separator-bg"
                                }
                            }, {
                                tag: "div",
                                children: [t],
                                attrs: {
                                    className: "separator-content"
                                }
                            }],
                            attrs: {
                                className: "separator separator-" + t
                            }
                        } : "";
                    }
                }, {
                    key: "cityMarkup",
                    value: function(t, e) {
                        if (this.hasData) {
                            var a = {
                                    nu: t.ca[0] && t.ca[0].nu || "",
                                    ps: t.ca[0] && t.ca[0].ps || "",
                                    vp: t.ca[0] && t.ca[0].vp || ""
                                },
                                i = {
                                    nu: t.ca[1] && t.ca[1].nu || "",
                                    ps: t.ca[1] && t.ca[1].ps || "",
                                    vp: t.ca[1] && t.ca[1].vp || ""
                                };
                            return {
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    children: [{
                                        tag: "svg",
                                        children: [{
                                            tag: "path",
                                            attrs: {
                                                id: "pin",
                                                fill: "#ffffff",
                                                className: "st0",
                                                d: "M11,0.4C5,0.4,0.2,5.1,0.2,11.1c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5C21.8,5.3,16.9,0.4,11,0.4z M11,17.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1C17.1,14.6,14.3,17.4,11,17.4z"
                                            }
                                        }],
                                        attrs: {
                                            version: "1.1",
                                            className: "icone-pin",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "0 0 22 31"
                                        }
                                    }, {
                                        tag: "span",
                                        attrs: {
                                            className: "bullet-notification-elected " + t.elected + " " + t.whoIsElected
                                        }
                                    }, {
                                        tag: "span",
                                        children: [{
                                            tag: "span",
                                            children: [{
                                                tag: "span",
                                                children: [{
                                                    tag: "span",
                                                    children: [(0, h.capitalizeName)(t.city)],
                                                    attrs: {
                                                        className: "city-name"
                                                    }
                                                }, {
                                                    tag: "span",
                                                    children: [t.state],
                                                    attrs: {
                                                        className: "state-slug"
                                                    }
                                                }],
                                                attrs: {
                                                    className: "city-block"
                                                }
                                            }, {
                                                tag: "span",
                                                children: ["Apuração não iniciada"],
                                                attrs: {
                                                    className: "waiting-message"
                                                }
                                            }, {
                                                tag: "span",
                                                children: [(0, h.capitalizeName)(a.nu)],
                                                attrs: {
                                                    className: "candidate first"
                                                }
                                            }, {
                                                tag: "span",
                                                children: [(0, h.capitalizeName)(i.nu)],
                                                attrs: {
                                                    className: "candidate second"
                                                }
                                            }],
                                            attrs: {
                                                className: "candidates-info"
                                            }
                                        }, {
                                            tag: "span",
                                            children: [{
                                                tag: "span",
                                                children: [{
                                                    tag: "span",
                                                    children: [{
                                                        tag: "span",
                                                        children: [t.sap, "%"],
                                                        attrs: {
                                                            className: "number"
                                                        }
                                                    }],
                                                    attrs: {
                                                        className: "progress",
                                                        style: t.css,
                                                        "data-percent": t.percent
                                                    }
                                                }],
                                                attrs: {
                                                    className: "progress-bar",
                                                    "data-percent": t.percent
                                                }
                                            }, {
                                                tag: "span",
                                                children: [{
                                                    tag: "span",
                                                    children: [a.ps],
                                                    attrs: {
                                                        className: "name"
                                                    }
                                                }, {
                                                    tag: "span",
                                                    children: [a.vp, {
                                                        tag: "span",
                                                        children: ["%"],
                                                        attrs: {
                                                            className: "percent"
                                                        }
                                                    }],
                                                    attrs: {
                                                        className: "percentage"
                                                    }
                                                }],
                                                attrs: {
                                                    className: "party"
                                                }
                                            }, {
                                                tag: "span",
                                                children: [{
                                                    tag: "span",
                                                    children: [i.ps],
                                                    attrs: {
                                                        className: "name"
                                                    }
                                                }, {
                                                    tag: "span",
                                                    children: [i.vp, {
                                                        tag: "span",
                                                        children: ["%"],
                                                        attrs: {
                                                            className: "percent"
                                                        }
                                                    }],
                                                    attrs: {
                                                        className: "percentage"
                                                    }
                                                }],
                                                attrs: {
                                                    className: "party"
                                                }
                                            }],
                                            attrs: {
                                                className: "city-progress"
                                            }
                                        }],
                                        attrs: {
                                            className: "candidate-item-container"
                                        }
                                    }],
                                    attrs: {
                                        className: "list-cities-item " + t.elected + " " + t.waiting + " active-" + (t.active || !1),
                                        "data-index": e,
                                        "data-id": t.ac,
                                        "data-type": t.regiao
                                    }
                                }, this.getRegionSeparator(t.separatorNext)],
                                attrs: {
                                    className: "list-cities-group"
                                }
                            };
                        }
                    }
                }, {
                    key: "view",
                    value: function() {
                        var t = this;
                        return this.hasData ? {
                            tag: "div",
                            children: [this.cidades.map(function(e, a) {
                                return t.cityMarkup(e, a);
                            })],
                            attrs: {
                                className: "list-cities",
                                config: this.scroll.bind(this)
                            }
                        } : {
                            tag: "div",
                            children: [{
                                tag: "div",
                                attrs: {
                                    className: "mask"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle1 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle2 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle3 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle4 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle5 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle6 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle7 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle8 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle9 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle10 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle11 sk-circle"
                                    }
                                }, {
                                    tag: "div",
                                    attrs: {
                                        className: "sk-circle12 sk-circle"
                                    }
                                }],
                                attrs: {
                                    className: "sk-fading-circle"
                                }
                            }],
                            attrs: {
                                className: "list-loading"
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = v;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14
    }],
    27: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = (i(l), t("../favorite-management/script.jsx")),
            c = t("../../js/libs/metrics"),
            o = i(c),
            d = t("../../js/libs/dom"),
            u = t("../../js/libs/webservice.js"),
            h = i(u),
            f = t("./svg-br.jsx"),
            p = t("../brazil-cities/script.jsx"),
            g = i(p),
            m = t("../../js/utils"),
            v = "grandes cidades mapa brasil",
            y = function(t) {
                return t.filter(function(t) {
                    return (0, m.has2T)(t.id);
                });
            };
        m.is2T && (f.regioes.capitais = y(f.regioes.capitais.concat(f.regioes.turno2)));
        var b = function() {
            function t(e) {
                var a = this;
                s(this, t), this.mapContainer = null, this.scenarioTabs = null, this.scenarioList = null, this.hasData = !1, this.activeCityPinID = "", this.mapTitle = "Capitais", this.mapSubTitle = "Rio de Janeiro", this.mapState = "RJ", this.activeRegion = "capitais", this.$mapTitleNode, this.$mapSubTitleNode, this.$mapStateNode, this.animationTimeOut = null, this.isIE = /MSIE/.test(navigator.userAgent), m.actionEvents.bind("pageChange", function(t) {
                    "right" === t ? (a.firstRun = !0, a.getData()) : (a.firstRun = !1, a.request && a.request.destroy(), m.actionEvents.unbind("favoriteCityUpdate"));
                });
            }
            return n(t, [{
                key: "getData",
                value: function() {
                    var t = this;
                    "1turno" == window.page.round ? this.request = (0, h["default"])().brazilSummary().then(function(e) {
                        return t.readData(e, "request");
                    }) : this.request = (0, h["default"])().cities2T().then(function(e) {
                        return t.readData(e, "request");
                    }), m.actionEvents.bind("favoriteCityUpdate", function(e) {
                        return t.readData(e, "favorite-city");
                    });
                }
            }, {
                key: "readData",
                value: function(t, e) {
                    var a = this;
                    if (t.subchannels) {
                        var i = r.favCities.getFavorites(),
                            s = function(s) {
                                if (0 == t.subchannels.hasOwnProperty(s)) {
                                    return "continue";
                                }
                                if (0 == a.firstRun && "request" == e && i.find(function(t) {
                                        return t == s;
                                    })) {
                                    return "continue";
                                }
                                var n = t.subchannels[s],
                                    l = g["default"].findById(n.ac);
                                if (l.sap = (0, m.percentToFloat)(n.sap), m.is2T) {
                                    a.updateRegion(f.regioes.capitais, l, n.ca, n.st);
                                } else {
                                    switch (l.uf) {
                                        case "SP":
                                        case "RJ":
                                        case "MG":
                                        case "ES":
                                            a.updateRegion(f.regioes.sudeste.cidades, l, n.ca, n.st);
                                            break;
                                        case "BA":
                                        case "PE":
                                        case "CE":
                                        case "PB":
                                        case "MA":
                                        case "AL":
                                        case "RN":
                                        case "PI":
                                        case "SE":
                                            a.updateRegion(f.regioes.nordeste.cidades, l, n.ca, n.st);
                                            break;
                                        case "PR":
                                        case "RS":
                                        case "SC":
                                            a.updateRegion(f.regioes.sul.cidades, l, n.ca, n.st);
                                            break;
                                        case "PA":
                                        case "AM":
                                        case "RO":
                                        case "AP":
                                        case "AC":
                                        case "RR":
                                        case "TO":
                                            a.updateRegion(f.regioes.norte.cidades, l, n.ca, n.st);
                                            break;
                                        case "GO":
                                        case "MS":
                                        case "MT":
                                            a.updateRegion(f.regioes.centroOeste.cidades, l, n.ca, n.st);
                                    }
                                    g["default"].isCapital(l) && a.updateRegion(f.regioes.capitais, l, n.ca, n.st);
                                }
                            };
                        for (var n in t.subchannels) {
                            s(n);
                        }
                        this.hasData = !0, "request" == e && (this.firstRun = !1);
                    }
                }
            }, {
                key: "updateRegion",
                value: function(t, e, a, i) {
                    t.forEach(function(t, s) {
                        t.id === e.id && (t.situation = 0 === e.sap ? "-1" : (0, m.hasDefinedSituation)(a), t.situation = "2" === i ? i : t.situation);
                    });
                }
            }, {
                key: "onmouseenterCity",
                value: function(t) {
                    this.onmouseenter(t);
                }
            }, {
                key: "onmouseleaveCity",
                value: function(t) {
                    this.onmouseleave(t);
                }
            }, {
                key: "onmouseenter",
                value: function(t) {
                    var e = (d.DOM.findOne(".regiao-" + d.DOM.attr(t.target, "data-id-regiao")), d.DOM.attr(t.target, "data-city")),
                        a = d.DOM.attr(t.target, "data-regiao"),
                        i = d.DOM.attr(t.target, "data-city-id"),
                        s = d.DOM.attr(t.target, "data-state");
                    e && a && (this.mapTitle = a, this.mapSubTitle = e, this.mapState = s, this.scenarioList.scrollToCityInRegion(i, a));
                }
            }, {
                key: "onmouseleave",
                value: function(t) {}
            }, {
                key: "activate",
                value: function(t) {
                    d.DOM.removeClass(this.mapContainer, "active-city-" + this.activeCityPinID), d.DOM.addClass(this.mapContainer, "active-city-" + t.ac), this.activeCityPinID = t.ac, this.mapTitle = t.regiao, this.mapSubTitle = t.city, this.mapState = t.state, this.openRegion(t.regiao), this.$mapTitleNode.innerHTML = this.regiaoNome(), this.$mapSubTitleNode.innerHTML = (0, m.capitalizeName)(this.mapSubTitle), this.$mapStateNode.innerHTML = this.mapState;
                }
            }, {
                key: "regionClick",
                value: function(t) {
                    var e = d.DOM.attr(t.target, "data-id-regiao");
                    this.openRegion(e), "centroOeste" == e && (e = "centro_oeste"), o["default"].click(v, "mapa_" + e);
                }
            }, {
                key: "openRegion",
                value: function(t) {
                    if (this.activeRegion !== t && (this.scenarioTabs.activate(t, !1), !m.is2T)) {
                        var e = d.DOM.findOne(".mapa-regiao-" + this.activeRegion, this.mapContainer),
                            a = d.DOM.findOne(".mapa-regiao-" + t, this.mapContainer);
                        d.DOM.removeClass(e, "active"), d.DOM.addClass(a, "active"), this.isIE && (e.style.display = "none", a.style.display = "block"), this.activeRegion = t;
                    }
                }
            }, {
                key: "setupSVG",
                value: function(t, e) {
                    var a = this;
                    e === !1 && (this.mapContainer = t, this.$mapTitleNode = d.DOM.findOne(".title", t), this.$mapSubTitleNode = d.DOM.findOne(".desc", t), this.$mapStateNode = d.DOM.findOne(".state", t), d.DOM.Event(t).on(["mouseout", "mouseover", "mouseenter", "click"], ".map-path", function(t) {
                        switch (t.type) {
                            case "click":
                                a.regionClick(t);
                                break;
                            case "mouseout":
                                a.onmouseleave(t);
                                break;
                            case "mouseover":
                                a.onmouseenter(t);
                        }
                    }), d.DOM.Event(t).on(["mouseout", "mouseover", "mouseenter", "click"], ".br-pto", function(t) {
                        switch (t.type) {
                            case "click":
                                a.cityClick(t);
                                break;
                            case "mouseout":
                                clearTimeout(a.animationTimeOut), a.onmouseleaveCity(t);
                                break;
                            case "mouseover":
                                a.animationTimeOut = setTimeout(function() {
                                    a.onmouseenterCity(t);
                                }, 500);
                        }
                    }), d.DOM.Event(t).on("click", ".return", function(t) {
                        window.closeBigCitiesPage(null, !0), o["default"].click("grandes cidades mapa", "seta_voltar"), o["default"].update("city"), o["default"].hit("city");
                    }));
                    var i = d.DOM.findOne(".mapa-regiao-" + this.activeRegion, this.mapContainer);
                    d.DOM.addClass(i, "active");
                }
            }, {
                key: "setTabs",
                value: function(t) {
                    this.scenarioTabs = t;
                }
            }, {
                key: "setList",
                value: function(t) {
                    this.scenarioList = t;
                }
            }, {
                key: "cityClick",
                value: function(t) {
                    var e = d.DOM.attr(t.target, "data-regiao"),
                        a = d.DOM.attr(t.target, "data-city-id");
                    this.scenarioList.scrollToCityInRegion(a, e);
                }
            }, {
                key: "viewCityPoint",
                value: function(t) {
                    return {
                        tag: "g",
                        children: [{
                            tag: "circle",
                            attrs: {
                                "data-city-id": t.id,
                                className: "br-pto pto-" + t.id + " situation-" + t.situation + " is-capital-" + t.isCapital,
                                cx: t.x,
                                cy: t.y,
                                r: t.r,
                                "data-regiao": t.regiao,
                                "data-id-regiao": t.regiaoReal,
                                "data-city": t.cidade,
                                "data-state": t.estado
                            }
                        }, {
                            tag: "path",
                            attrs: {
                                className: "br-pin pin-" + t.id,
                                d: t.path
                            }
                        }]
                    };
                }
            }, {
                key: "regiaoNome",
                value: function() {
                    switch (this.mapTitle) {
                        case "centroOeste":
                            this.mapTitle = "Região Centro-Oeste";
                            break;
                        case "sudeste":
                            this.mapTitle = "Região Sudeste";
                            break;
                        case "norte":
                            this.mapTitle = "Região Norte";
                            break;
                        case "nordeste":
                            this.mapTitle = "Região Nordeste";
                            break;
                        case "sul":
                            this.mapTitle = "Região Sul";
                            break;
                        case "capitais":
                            this.mapTitle = "Capitais";
                    }
                    return this.mapTitle;
                }
            }, {
                key: "getSVGs",
                value: function() {
                    if (!m.is2T) {
                        return {
                            tag: "div",
                            children: [{
                                tag: "svg",
                                children: [{
                                    tag: "path",
                                    attrs: {
                                        className: "regiao-path",
                                        id: "regiao-sul-path",
                                        d: f.regioes.sul.path
                                    }
                                }, f.regioes.sul.cidades.map(this.viewCityPoint.bind(this))],
                                attrs: {
                                    className: "mapa regiao mapa-regiao-sul",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 620 1000",
                                    "enable-background": "new 0 0 620 1000"
                                }
                            }, {
                                tag: "svg",
                                children: [{
                                    tag: "path",
                                    attrs: {
                                        className: "regiao-path",
                                        id: "regiao-sudeste-path",
                                        d: f.regioes.sudeste.path
                                    }
                                }, f.regioes.sudeste.cidades.map(this.viewCityPoint.bind(this))],
                                attrs: {
                                    className: "mapa regiao mapa-regiao-sudeste",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 620 1000",
                                    "enable-background": "new 0 0 620 1000"
                                }
                            }, {
                                tag: "svg",
                                children: [{
                                    tag: "path",
                                    attrs: {
                                        className: "regiao-path",
                                        id: "regiao-nordeste-path",
                                        d: f.regioes.nordeste.path
                                    }
                                }, f.regioes.nordeste.cidades.map(this.viewCityPoint.bind(this))],
                                attrs: {
                                    className: "mapa regiao mapa-regiao-nordeste",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 620 1000",
                                    "enable-background": "new 0 0 620 1000"
                                }
                            }, {
                                tag: "svg",
                                children: [{
                                    tag: "path",
                                    attrs: {
                                        className: "regiao-path",
                                        id: "regiao-norte-path",
                                        d: f.regioes.norte.path
                                    }
                                }, f.regioes.norte.cidades.map(this.viewCityPoint.bind(this))],
                                attrs: {
                                    className: "mapa regiao mapa-regiao-norte",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 620 1000",
                                    "enable-background": "new 0 0 620 1000"
                                }
                            }, {
                                tag: "svg",
                                children: [{
                                    tag: "path",
                                    attrs: {
                                        className: "regiao-path",
                                        id: "regiao-centroOeste-path",
                                        d: f.regioes.centroOeste.path
                                    }
                                }, f.regioes.centroOeste.cidades.map(this.viewCityPoint.bind(this))],
                                attrs: {
                                    className: "mapa regiao mapa-regiao-centroOeste",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 620 1000",
                                    "enable-background": "new 0 0 620 1000"
                                }
                            }]
                        };
                    }
                }
            }, {
                key: "view",
                value: function() {
                    if (this.hasData) {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "i",
                                    attrs: {
                                        className: "icon icon-single-arrow-left"
                                    }
                                }],
                                attrs: {
                                    className: "return"
                                }
                            }, {
                                tag: "div",
                                children: [{
                                    tag: "h3",
                                    children: [this.regiaoNome()],
                                    attrs: {
                                        className: "title"
                                    }
                                }, {
                                    tag: "p",
                                    children: [this.mapSubTitle],
                                    attrs: {
                                        className: "desc"
                                    }
                                }, {
                                    tag: "span",
                                    children: [this.mapState],
                                    attrs: {
                                        className: "state"
                                    }
                                }],
                                attrs: {
                                    className: "map-details"
                                }
                            }, {
                                tag: "svg",
                                children: [{
                                    tag: "path",
                                    attrs: {
                                        className: "map-path regiao-nordeste",
                                        "data-id-regiao": "nordeste",
                                        d: f.nordeste
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "map-path regiao-sul",
                                        "data-id-regiao": "sul",
                                        d: f.sul
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "map-path regiao-centroOeste",
                                        "data-id-regiao": "centroOeste",
                                        d: f.centro
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "map-path regiao-norte",
                                        "data-id-regiao": "norte",
                                        d: f.norte
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "map-path regiao-sudeste",
                                        "data-id-regiao": "sudeste",
                                        d: f.sudeste
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "fronteira",
                                        "data-id-regiao": "nordeste",
                                        d: f.fronteiras.nordeste
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "fronteira",
                                        "data-id-regiao": "sul",
                                        d: f.fronteiras.sul
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "fronteira",
                                        "data-id-regiao": "centroOeste",
                                        d: f.fronteiras.centroOeste
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "fronteira",
                                        "data-id-regiao": "norte",
                                        d: f.fronteiras.norte
                                    }
                                }, {
                                    tag: "path",
                                    attrs: {
                                        className: "fronteira",
                                        "data-id-regiao": "sudeste",
                                        d: f.fronteiras.sudeste
                                    }
                                }, f.regioes.capitais.map(this.viewCityPoint.bind(this))],
                                attrs: {
                                    className: "mapa regiao mapa-regiao-capitais active",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 620 1000",
                                    "enable-background": "new 0 0 620 1000"
                                }
                            }, this.getSVGs(), {
                                tag: "ul",
                                children: [{
                                    tag: "li",
                                    children: [{
                                        tag: "svg",
                                        children: [{
                                            tag: "circle",
                                            attrs: {
                                                className: "br-pto situation--1 is-capital-true",
                                                cx: "0",
                                                cy: "0",
                                                r: "8"
                                            }
                                        }],
                                        attrs: {
                                            className: "legend-circle-svg",
                                            version: "1.1",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "-13 -13 30 30",
                                            "enable-background": "new 0 0 0 0"
                                        }
                                    }, {
                                        tag: "div",
                                        children: ["Apuração não iniciada"],
                                        attrs: {
                                            className: "legend-label"
                                        }
                                    }]
                                }, {
                                    tag: "li",
                                    children: [{
                                        tag: "svg",
                                        children: [{
                                            tag: "circle",
                                            attrs: {
                                                className: "br-pto situation-0 is-capital-true",
                                                cx: "0",
                                                cy: "0",
                                                r: "8"
                                            }
                                        }],
                                        attrs: {
                                            className: "legend-circle-svg",
                                            version: "1.1",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "-13 -13 30 30",
                                            "enable-background": "new 0 0 0 0"
                                        }
                                    }, {
                                        tag: "div",
                                        children: ["Apuração em andamento"],
                                        attrs: {
                                            className: "legend-label"
                                        }
                                    }]
                                }, {
                                    tag: "li",
                                    children: [{
                                        tag: "svg",
                                        children: [{
                                            tag: "circle",
                                            attrs: {
                                                className: "br-pto situation-1 is-capital-true",
                                                cx: "0",
                                                cy: "0",
                                                r: "8"
                                            }
                                        }],
                                        attrs: {
                                            className: "legend-circle-svg",
                                            version: "1.1",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "-13 -13 30 30",
                                            "enable-background": "new 0 0 0 0"
                                        }
                                    }, {
                                        tag: "div",
                                        children: ["Apuração encerrada"],
                                        attrs: {
                                            className: "legend-label"
                                        }
                                    }]
                                }, {
                                    tag: "li",
                                    children: [{
                                        tag: "svg",
                                        children: [{
                                            tag: "path",
                                            attrs: {
                                                id: "pin",
                                                fill: "#ffffff",
                                                className: "st0",
                                                d: "M11,0.4C5,0.4,0.2,5.1,0.2,11.1c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5C21.8,5.3,16.9,0.4,11,0.4z M11,17.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1C17.1,14.6,14.3,17.4,11,17.4z"
                                            }
                                        }],
                                        attrs: {
                                            version: "1.1",
                                            className: "legend-pin",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "0 0 22 31"
                                        }
                                    }, {
                                        tag: "div",
                                        children: ["Cidade selecionada"],
                                        attrs: {
                                            className: "legend-label"
                                        }
                                    }]
                                }],
                                attrs: {
                                    className: "legend-list"
                                }
                            }],
                            attrs: {
                                className: "map-container is-2t-" + m.is2T,
                                config: this.setupSVG.bind(this)
                            }
                        };
                    }
                }
            }]), t;
        }();
        a["default"] = b;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14,
        "./svg-br.jsx": 28
    }],
    28: [function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        a.nordeste = "M607.4,387l-3.7-16.9l-4.2-4.2l-11.5-0.4l-8.2-2.9l-7-4.3l-2.6-1.6l-7.2-8.2l-20.6-16.4 l-13.4-6l-15.7,1.4l-3.7-1l-4.9-1l-0.7-1.4l-3.6,1l-5.2-2.6l-14.5-5.6l-1.6,2.3l-5.9,1l-3.3,3l-3,0.7l-4.9,5.2l-1-0.7l1.4-2.9 l-0.4-1.1l-1.6-1l1.4-4.5l2.6-3.7l-1-1.2l-3,0.3l2-2.6l0.3-2.6l-4-4.4l-5.2-1.6l-1.6,2h-1.4l-0.7-3.3l-0.5-1.4L448,301l-2.3-1.1 l-4-1.2l-3.3-1l-1.2,4.9v5.9l-3,4.5l-0.3,3.3l-3,4v4.9l-4,4.2l-2.9,6l-8.9,13.1l-5.2,1.2l-7.6,7.4l4.8,2.5h4l5.6,5.6l0.7,15 l-2.3,6.3l-2.3,2.3l3.3,1.9l0.7,3.3l6.6,8.2l5.2-1.2l2.7,1.6v4.5l-4.9,2.3l-3.7,8.2l3.7,5.6l3.6,3.6l-1,1.6l3.3,7.2l6.8,1.9l3.1,1 l-9.7,8.6l0.4,1.6l-3.3,4l1,2.9l5.2,3.3l-1.6,2.3l1,2.3l-2.6,3.3l-0.3,4.2l3.3,2l-1.6,4.5l1.6,2.3l-0.7,1l1,4.9l-2.6,2.6l-1,4.4 l4.5,7.8l0.7,5.9l-1.9,4.4l-0.4,4.2l7.7-2.6l17.4-10.9l7.5,0.4l1.4,1.2l-1.1,3l3.7,3h4l2.2-1.4l5.3,1.6l9.4,6.8l7.2,0.7l4.9,4.9 l1.4,3.3l1.6,1.4l8.9,0.7l8.2,4.2l2.2,2.3l-1.2,3.3l-4,3.3l-1.9,3.8l-3.7,2.3l-1.2,4v2.6l4.2,4.9l-0.4,3.3l8.2,6.3l7.9-7.2l-0.3-8.9 l6.6-19l-1.1-4.2l-0.3-16.4l1.9-7l-1-4.2l1.6-4.5l-1-3.3l4-4.9l0.3-3.3l2-4.4l1,0.4l1.6,4.2l2.3-0.3l10.4-12.6l4-9.2l-4,0.7l4-0.7 l4.9-6.1l9.2-6.3l2.6-2.5l0,0l17.1-16.5l2.3-6.3l5.3-11.5l0.3-7.8l1.4-7.2L607.4,387z M560.1,461.3l-4-9.8l0,0L560.1,461.3 L560.1,461.3z M563.4,442l-1.6-2.7l-1.6-5.2l0.1-0.7l-0.1,0.7l1.6,5.2L563.4,442L563.4,442z M560.4,431.5L560.4,431.5l13.8,8.3 L560.4,431.5z", a.sudeste = "M519.2,558l-4.2-4.9v-2.6l1.2-4l3.7-2.3l1.9-3.8l4-3.3l1.2-3.3l-2.2-2.3l-8.2-4.2l-8.9-0.7 l-1.6-1.4l-1.4-3.3l-4.9-4.9l-7.2-0.7l-9.4-6.8l-5.3-1.6l-2.2,1.4h-4l-3.7-3l1.1-3l-1.4-1.2l-7.5-0.4l-17.4,10.9l-7.7,2.6l0.4-3.1 h-3.7l-1.9-3h-2.3l-0.2,2l-4.3,1.5l-1.8,4.9l-0.3,3.1l0,4.4l-6.3,2.3l-0.5,7.8l1.6,1.6l1.6,4.6l-4.9,7.5l0.3,1.4l2.6,1.2l-0.3,7.5 l-7.5,6l-7.2-0.7l-11.2-0.7l-4.2,3.6l-2.3-1.2l-12,2.3l-4.6,6.8l-4.9,4.2l-0.6,9.7l-0.1,1.5l-5.9,4.2l-4.9,7.5l-2.3,6.3l-3.3,3.6 v2.3l-6.1,8.2l-6,4.3l3,2l7.5,0.3h5.3l8.2,0.3l9.8,4.9h7.5l5.9,6.6l1,8.9l4.2,7l-1.2,2.2l1.2,2.3l8.6,0.7l0.7,5.9l2.9-1.6l2.3,2.3 v0.7l1.4,1.2l2.6-2.2l17.1-13.1l11.7-5.3l5.6,0.7l1.2-1.9l9.6-5.3l-0.3-2.9l1-3.3l6.1-1.6l3.3-3.3l-0.1-0.1l0.1,0.1l-3.3,3.3 l-6.1,1.6l-1,3.3l0.3,2.9h2.3l0.7-1l-1.6-2.3l0.5-1l3.7-1.6l2.9,1.6l4.9-1.6l4.6,1.9l3-1l0.3-2.3l1.6-0.5l2.3,3.3l2.9,0.3l12.2-1.4 l1.4-5.2l13.4-6.6v-6.3l2.7-6.8l0,0l0.6-1.6l7.5-7.5l1.1-4l8.5-10.8l1.6-9.6l1.9-11.7l-8.2-6.3L519.2,558z M457.3,625.2l-7.7,3.3 l0,0L457.3,625.2z M489,607.6l-4.2,11.5l-11.1,4.4l11.1-4.4L489,607.6l1.8-1.5L489,607.6z M494.6,609.8l-1-4.2l-1.1-1l0,0l1.1,1 L494.6,609.8l11.1,3L494.6,609.8z", a.sul = "M399,669.2v-0.7l-2.4-2.3l-2.9,1.6l-0.7-5.9l-8.6-0.7l-1.2-2.3l1.2-2.2l-4.2-7l-1-9.1l-5.9-6.7 h-7.5l-9.8-4.8l-8.2-0.2h-5.3l-7.5-0.2l-3-2l-10.1,7.2l-0.7,4l-4,4l-2,7.8l-3.1,2.1v4.9l0.5,2.2l-2,7l-1.9,10.1l1.7,1l4.9-0.3l3,1.6 l2.8,7.5l-0.2,8.6l-1.6,5.2l-7.9,5.2l-4.5,2.3l-11.9,9.6l-1.2,3.3l-2.7,0.3l-9.8,11.5l-0.5,2l-8.2,10.1l-4,5.3l5,1l2.9-3.7l5.6,3 l2.3,1.9l5,6.6v3l2,1l3.7-3.3l0.8-0.7l7.3,7.5l5.9,2.3l4,5.3l5.9,2.6l5.6,8.2l2.6,1.9l2.5-1.8l2.5-3.6l3,2.1l-2.5,4.6l-4.2,5.5 l-4.7,3.5l1.1,4.2l2-0.4l8.2-8.7l3.6-8.6l4.5-5.2l-1.6-2.4v-0.3l0.2-3.3l2.4-3.3l1.2-3.7l3.9-2.3l5.6-11.2l-0.7-4.1h3.6l6.3,1.5 l-2,3.9l-1.2,3l-2.5,1.9l-1,3.3l-1.8,1.7l-3.5,4.6l-9.4,7.3l0.5,2.9l1.3-1.7l8.9-6.8l10.8-12.4l6.1-12.8l5.6-9.8l11.9-9.8v-1.6 l1.9-2.3l0.8-10.4l1.3-4.9v-12.6l-1.3-3.8l2.5-2.7l0.8-2.1v0l1.4-5.5l-3.4-2.6l0.6-0.7l2.6-1l3.9-0.3l2.1-2.7L399,669.2z M391,708.2 v4.3l1,0.2l0.8-3.4l0.3-3.6l-1-0.2L391,708.2z", a.norte = "M430.6,455.7l-1-2.9l3.3-4l-0.4-1.6l9.7-8.6l-3.1-1l-6.8-1.9l-3.3-7.2l1-1.6l-3.6-3.6l-3.7-5.6 l3.5-8.2l4.8-2.3v-4.5l-2.6-1.6l-5.1,1.2l-6.5-8.2l-0.7-3.3l-3.3-1.9l2.3-2.3l2.3-6.3l-0.7-15.3l-5.6-5.9h-4l-4.8-2.1l7.6-7.2 l5.2-1.2l8.9-13.1l2.9-6l4-4.2v-4.9l3-4l0.2-3.3l2.9-4.5v-5.9l1.3-4.9l-2.8-3.3l-4.2,0.5l-3.3-2.9l-7.6-3l-2.6,1l-3.3-1.2l-7.2,3.3 l-5.5,7.5l0.3,1.9l-0.7,1.1l-2.9-0.7l-8.6,6.8l-5.6,11.2l-1.6,1.6l-0.3-2.6l3.6-6.3l0.7-4l-1.2-1.2l-4.9,2.2l-1.4-1.2l-2.3-1.9 l-4.2,1.4h-3.3l-1.6-0.7l-3,3l-2.2-0.6l-1.1-2.8l4-0.4l1-4.2l-1.6-3.3l-0.5-4.9l-2.3-0.3l-5.9,4.5l-12.6,6.6l1,8.6l-2.3-3.3v-6.6 l-6.8-1l10.4-3.7l3.2-3.6l2.8-2.3l1.6-4.6l1.4-1.9l4.2-3.6l-0.3-3.7l8.5-4.5l4.6-6.3l7.2-7.5l0.3-4.2l-1.9-4l-7.2-3.3l-2.3-2.3l-1-3 l-2-4.5l-5.9-23.9l-5.2-4.6l-1.6,3.3l-1.4,3.3l-4.5,5.9l-8.9,16.8l-4,3.8l-4.2,1.1l-3-2.3l-3.6,0.7l-3.3-1.1l-3,1.6l-4.9,1.1 l-3.6-2.7l-4-0.3l-4.2-4L289,240h-4.2l-3,4.1l3.3,3.5l0.4,1.8l-3.7,1l-9.2-1.9l-2.3,1.7l-6.6-1.4l-5.2,4.2h-4.2l-4,2.6l-3-0.3 l-5.2,4.7l-3.7,0.6l-3.3-2.2l-9.4-7.6l-0.4-6.1l-3.3-2l-0.3-2.9l1.6-8.2l-0.3-5.3l4.9-5.2l-1.1-3l-1.9-5.9l-1.9-0.7l-2.7-1.9 l0.7-6.6l-2.6-3.3l-6.6,1l0.7,3l-8.6,7.8l-1.9-0.3l-4.2,2.3l-2.6,2.3l-6,1.6l-4.9-1.4l-1.6,1.6l-4.9,2.3l0.4,4.2l-2.3,1.6l-7.5-5.6 l-2.3,1.6l-7.5-0.5l-2.6-3.5h-5.6l-1.4-0.8l-1.9,0.6l0.7,1.4l7.5,7.9l-0.4,3.6l1.6,3.3l1.6,5.6l1.4,4l9.6,1l-0.7,2.6l-9.8,5.9 l-0.4,3l-3.3,4.5l-2.2-1.6l-4,3.3l-6.6,2.7l-0.7,1.9l-5.6,5.9l-1.6-0.7l0.4-4.2l-1.4-0.3l-4.2,2.6l-4.2,1.6l-10.5-6.8l-2.3,0.5 l-4.9-12.7l-1.4-1.6l-7.1,6.4l-4-2.6h-1.6l-1,2l0.5,0.4l-3.8,1.3L69,259.4l-0.4,8.9l3.7,0.9l4.5,0.7l1.6,3.5l-1,1.9l-4.9-1l-6.8,3 l0.4,11.5l6.9,5.9v4.6l2.9,4.5l-5.2,43l-2.3,4.5l-1.4,2.3l-4-2.6l-7.1,0.7l-2.1,3.3l-14.1,3.6L25,369.5l-0.3,5.6l-3.7,7.5l0.7,7.9 l-8.2,5.8l-0.1,2.7h0h0l0,0.3l-0.2,5.1l-2.7,1.4l-0.5,2.9l4.5,3.3l-1.2,1.6l3.3,4.2l4.2,5.6l4.5,4.6l1.4,4l-2.6,3.6l0.7,0.7l12,0.7 l4.6,7.8l8.9-0.3L62,435l1.6,2.6l-1,3.7l1.6,17.4l3.3,1.4l4.9-2.3l7.5-0.7l10.2,0.3l1.9,1.6l5.9-2.6l3.7-4.9l4.9-0.3l1.6-2.3 l8.2-5.6l8.9-5.4l2.6-1.8h10.1l2.6-2.3l1.6,1.1l1,5.7l-1.9,6.6l2.3,6.3l-1,2.9l4.2,10.3l5.6,4.2l3.6,1l3,4.9l3.6,0.7l7.9-1l4.2,2.4 l1.6-0.8h1.9l2.3,3.1l6.6,3.8l5.2,0.8l5.6,6.3l10.5-0.9l4.9,1.9l2.6-2.6l3.7-4.6l3.6-5.9l2.3-4.6l1-7.1l-3.3-6.6l1-3l1-4.9l-2.9-2.3 l-13.1-1.2l-7.2-7.2l-1.4-3.3l2.7-7.9l-1.4-9.8l1-5.2l44.9-2.3l1.1-7.2v-5.6l0.6-3.3l3.2-6.1l7.2,13.1l0.3,7.5l7.3,6.6l1.6,2.3 l3,1.2l1.6,1.6l98.8,6l-0.2,0.4l-6.6,20.2v20.4l2.2,7.7l0.7,0.3l7.4-11.1l5.7,0.3l5,10.7l3-4.9l6,1.6l1.8,4.4l4.7-2.9l8.3,1 l-0.4-3.6h1.3l3.1,4.5l13.1,1.6l2-3.6l4.1,0.4l-0.2-0.2l1.6-4.5l-3.3-2l0.3-4.2l2.6-3.3l-1-2.3l1.6-2.3L430.6,455.7z M386.6,279 l-0.3-1l-2-0.7l-2.6,1.6l1.4,1.2L386.6,279z M362.7,291l1-2l-1-0.4l-1.6,2.4H362.7z M372.6,280.3L369,283v3.6l-2.4,1.4l-0.4,6.6 l1.8,1l-2.4,3l1.5,3.4l-0.4,1.8l2.6,2.3l4.9-1.6l2.3,1.6l5.2-0.4l4.2-3.3l1.6,0.7l2-1l4.9-0.4l1.2-1.6l-0.3-1.6l3.3-3.3l4.6-11.1 l-11.5-2.3l-6.1,1.4L372.6,280.3z M352.2,293.4l-2.9,2.3l-1.6,3.2l1.2,1l5.3-2.6l3.3-5.2l1-4.6l-4.6,1.3L352.2,293.4z M373.3,276.4 l0.7,1.6l5.2,0.3l2.3-1.6l-0.7-1.4l-1.6-0.3L373.3,276.4z", a.centro = "M437.5,506.1l-2,5.9h-3.6l-2-3h-2.3l-0.2,2l-4.1,1.5l-2,4.9L421,521v3.9l-6.3,2.4l-0.5,7.7 l1.7,1.7l1.6,4.6l-4.9,7.5l0.3,1.4l2.6,1.2l-0.3,7.5l-7.5,6.1l-7.3-0.7l-11.2-0.7l-4.2,3.5l-2.3-1.2l-12,2.3l-4.7,6.9l-4.9,4.2 l-0.6,9.7l-0.1,1.5l-5.9,4.2l-4.9,7.6l-2.3,6.2l-3.3,3.6v2.3l-6.1,8.2l-6,4.3l-10.2,7.2l-0.6,3.9l-4,4l-1.9,7.8l-3,2l-4.5-2.7 l-7.5,3.3l-3.3-1.2l-1.1-2.4l-1.6-5.6l-1-8.2l-3.3-9.1l-4.2-0.3l-4.3-3l-3.9,2.6l-6.6-0.3l-7.5-2l-2.3,1.1l-1.6-1.1l0.6-19.7l-3-4.9 l-1.2-8.2l0.7-2.6l1.5-5.2l5.3-21.7l-4.2-8.8l-7.3-3.2l-2.3-7l1.4-4l0.3-4.5l-25.6,0.3l-2-1.2l-0.6-10.5l-4.9-5.6l2.2-2.4l-0.6-2.8 l1.3-4.4l-2.6-4.5l1.6-3.7l-6.5-5.2l2.5-2.6l3.7-4.6l3.6-5.9l2.3-4.7l1-7.1l-3.3-6.5l0.9-3l1-4.9l-2.9-2.4l-13.1-1.2l-7.2-7.2 l-1.4-3.3l2.7-7.9l-1.4-9.9l0.9-5.2l45-2.3l1.1-7.2v-5.6l0.6-3.3l3.4-6.1l7.1,13.1l0.3,7.5l7.2,6.5l1.7,2.4l3,1.2l1.6,1.6l98.8,6 l-0.1,0.4l-6.6,20.2v20.4l2.2,7.8l0.8,0.2l7.3-11.1l5.7,0.3l5,10.8l3-4.9l6,1.5l1.8,4.4l4.7-3l8.3,1.1l-0.4-3.6h1.4l3,4.5l13.1,1.8 l2.1-3.7l4.1,0.3l1.4,2.1l-0.6,0.9l0.9,5l-2.6,2.6l-0.9,4.3l4.5,7.6L437.5,506.1z", a.fronteiras = {
            nordeste: "M571.4,407.5l5.6-8l-0.7-0.7l-3.3-1.1l-8.5,6.1l-6.2,2.5l-2.4-2.1l-3.1,0.4l-1.7-1.8 l-5.2,3.2l-7.5-7.4l-15.6-1.5l-0.7,1.9l1.6,4.7l-3.6,7.9l-3.5,1.3l-3.5,3.1l2.6,1.3l1.1,3.2l0.2,1.7l2.6,3l0.4,2.2l1.4,0.1l2-0.5 l0.9-1.7l2.7-3l1.4,0.3l2.4-1.5l9.3-7.2l4.4,3.6l5.7,1.7l1.6,2.3l2.4-1l4.1,5.7l6.3-4.7l8.2,5.2l2.4,1.8l10.1-0.9l5-4l13.2,0.7 l-0.8,1.8l-11.8-0.6l-4.9,3.9l-11.4,1l-2.9-2.1l-7-4.6l-5.4,4.1l1.8,3l16.7,10.1l6.5,6.4l-1.4,1.3l-6.3-6.3l-15.4-9.3l-0.1,1 l1.5,4.9l1.8,3l-2.3,9.7l-4.6,0.6l3.4,8.5l2.4,1.9l4.5-0.8l-0.8,1.1l-0.5,1l-3.8,0.7l-3.3-2.8l-4.5-11.1l5.7-0.8l1.8-7.7l-1.5-2.6 l-1.7-5.4l0.3-2.5l-2.2-3.7l-3.8-5.2l-2.3,0.9l-2.1-2.9l-5.6-1.7l-3.5-2.8l-8.2,6.4l-3.1,1.9l-1-0.3l-1.9,2.1l-1.1,2.2l-3.2,0.8 l-3.2-0.3l-0.4-3.1l-2.6-3l-0.3-2.1l-0.8-2.3l-2.6-1.3l-2.3,1.9l-3.4,1.2l-3.6,5l-6.5,0.7l-3.9,3l-4.6,0.8l-3.5-2.3l-3.7,0.2 l-4.2-1.7l-3,0.9l-0.3,8.7l-6,8.8l-5.4,1l-4.4,2.9l-5.2,0.5l-7.7-8.8l-1.5-0.5l-8.8,7.9l0.4,1.6l-3.3,3.9l0.7,2.1l5.7,3.6l-1.9,2.7 l1,2.3l-2.7,3.5l-0.3,3.4l3.5,2.2l-1.8,4.7l1.8,2.5l-0.8,1.2l0.9,5l-2.7,2.7l-0.8,3.8l4.4,7.7l0.7,6.2l-1.9,4.5l-0.3,2.7l-1.7-0.8 l0.4-2l1.6-4.1l-0.6-6l-4.6-7.9l1.1-5l2.4-2.4l-0.9-4.9l0.5-0.7l-1-1.4l-0.1-1.9l1.1-3.2l-3.1-1.9l0.3-5.1l2.5-3.1l-1-2.2l1.4-2 l-4.7-2.9l-1.2-3.7l3.3-4l-0.4-1.7l8.8-7.9l-1.5-0.5l-0.4-2l2.1-9.9l-2-8l9.5-22.7l12.3-4.6l8.3-7l6.4-2.1l4.9,3.1l6.3-2.1l1.1-6 l-2.8-3.4l-0.5-6.3l4.8-5.3l0.6-2.5l-2.4-5.6l1.2-4l-2.7-2.7l2.4-5.3l5.1-8.6l3.2-0.3l5.4-3.7l2.6-4.9l0.5,1l0.9,0.2l-2.5,5 l-6.3,4.2l-2.6,0.2l-4.7,7.8l-1.7,4l2.5,2.5L489,354l2.3,5.5l-0.8,3.6l-4.5,5.1l0.3,4.9l3,3.6l-1.4,8l-8.2,2.6l-4.9-3l-5.3,1.7 l-8.3,7l-11.8,4.4l-8.9,21.4l1.9,7.8l-0.1,0.2l-2.1,10.4l2,0.8l2.7,0.6l7.4,8.3l3.7-0.3l4.4-2.9l5.6-0.9l5-7.4v-9.5l4.6-1.6l5,1.7 h3.5l3.7,2.3l3.4-1l4-3l6.1-0.7l3.5-4.8l3.6-1.2l2.9-2.6h0.1l4.3-3.8l3-1.1l3-6.5l-1.6-4.6l3.9-10.7l-5.1-7.1l-3.7-16.7l-1.2-9.3 l-0.7-3.4l1.9-5.3l-4.1-11.2l1.1-1.5l-1.3-1.9l1.5-4.6l0.9,0.2l1-0.1l-1.4,4.2l1.5,2.2l-1.2,1.8l3.9,10.9l-1.9,5.4l0.6,3l1.3,9.3 l3.6,16.4l5.4,7.4l-2.7,7.3l15.8,1.5l6.9,6.9l4.3-2.8l2.4-3.9l-3.3-5.2l2.5-9.8l0.1-0.2l3.3-3.8h2.6l7-11.9l7.2-8.2l1.7,1.1 l-7.4,8.2L559,380h-2.5l-1.1,2.7l5.5,0.5l4.1-3.8l7.9-2.8l1.1,1v2.6l-3,5.6v1.5l3.1,1.3l6.2,0.4l1.8,2.4l0.9-0.2l1.6-6.5l3-1.9 l5.6,4.2h14.2l0.4,1.7l-7.6,0.3h-7.6l-5.1-3.9l-1.3,0.4l-1.7,7l-3.3,1l-2.2-2.8l-5.5-0.3l-4.5-1.9v-3.2l4-5.6v-1l-6.8,2.4l-4.6,4.1 l-6.7-1.4l-2.6,7.8l3.1,5.5l-3,4.4l1.1,1.1l3-0.4l2.2,2l4.9-2.1l9.1-6.5l4.6,1.7l2.1,2.1l-5.7,8l2.8,3.7l0.4,1.9h2.5l3.9-4.7 l14.4-4.3l4.3-3.8l7.8-2.4l0.2,0.9l-0.2,1.1l-7,2.2l-4.2,4l-14.3,4l-4.1,5h-4.8l-0.7-3.1L571.4,407.5z",
            sul: "M372.8,727.6l3.4-4.5l-0.5-2.7l-9-1l-4.9-4.7l-7.2-7.2l-8.7-5.1l-3.3-1.1l-19.4-2.9h-0.1 l-3.7,0.3l-0.3,1l-1.6,1l5.5-0.4l19,2.8l2.9,0.9l8.3,4.8l7.2,7.2l5.4,5.1l8.2,0.9l0.1,0.6l-3.2,4.2l-0.3,1.8l-3.5,3.5l2.5,2.3l3-1.3 l1.9,1l0.5-0.8l0.8-0.7l-3-1.6l-2.6,1.3l-0.2-0.2l2.5-2.5L372.8,727.6z M388.2,681.1l-9.2,3.1l-2.6-1.7l-4.4-1.6l-4.3,1.1l-3.6-0.7 l-3.4,3.4l-6.3,0.7l-2.3,2.5v2.4l-0.9,0.8l-8.3-2.2l-6.4-2.3l-10-1.3l-5.8-0.4l0.4,1v0.9l5.4,0.4l9.7,1.2l6.5,2.3l9,2.4l2.5-1.9 v-2.8l1.4-1.4l5.8-0.7l3.3-3.2l3.1,0.6l4.2-1.1l3.6,1.2l3.3,2.1l9.4-2.9l4.6,0.8l0.6-1.8L388.2,681.1z",
            sudeste: "M519.7,558l-3-3.4L515,553v-2.6l1-3.3l4-2.3l2.2-3.9l4.1-3.3l1.6-4.1l-2.6-2.8l-8.5-4.4 l-8.9-0.7l-1.2-1l-1.3-3.1l-5.3-5.4l-7.3-0.7l-9.3-6.7l-6-1.5l-2.3,1.8H472l-2.9-2.7l1.1-3.2l-2.1-2l-8.1-0.5l-17.5,11l-6.2,2.1 l0.3-2.7l-1.5-0.1h-2.6l-1.9-3h-3.7l-0.3,3.2l-4.1,0.8l-2,5.4L420,521v3.3l-6.1,2.3l-1,8.8l2,1.8l1.5,4l-4.8,7.4l0.5,2.2l2.5,1.2 l-0.2,6.5l-6.9,5.5l-6.9-0.6l-11.6-0.7l-4,3.4l-2.1-1.1l-12.7,2.5l-4.8,7l-4.3,3.7l-0.9,1.8l-0.6,10l-5.6,4l-5.1,7.8L346,608l-4,3.7 v2.4l-5.3,7.8l-6.7,5h0.1l1.7,1.1l2.7,2.2l7.9,0.7l0,0h5.3h1.9l6.1,0.1l9.8,4.8h7.3l5.4,5.7l0.9,8.5l4.1,6.7L382,659l1.7,3.2 l8.4,0.7l0.8,6.5l3.4-2l0.7,1.1v1.2l2.7,1.5l0.5-0.8l0.6-0.5l-1.9-1l-0.1-0.4l-2-2l-1-1.5l-1.9,1.3l-0.4-5.1l-8.8-0.7l-0.7-1.4 l1.3-2.2l-4.4-7.3l-1-8.7l-6.4-6.8h-7.7l-9.7-4.8l-8.5-0.2h-5.3l-7.3-0.6l-1.7-1.3l4.5-3.6l6-8.7v-2.2l3.5-3.3l2.7-6.4l4.9-7.3 l6.1-4.4h0.1l0.1-1.4l5.7-3l7,2.3l8.5-0.4l0.4,1.5v2.9l7.2,1.5l3.6-1.9l9.1,0.7l4.5-2.9l5.3,1.8l1.4,1.9l-0.9,2.2l2.3,4.1l-1.6,2.5 l2.8,8.2l2.8,2l3.4,0.4l0.5,1.7l-2.6,9l1.5,2.9l3.6,3.8l-0.5,2.2l2.6,2.8l7.2-0.8l1.9-3l7.8-0.9l4.4-1.2l2.5,3.2h4.4l-1.8,1.8 l-6.4,1.6l-2.4,8.2l2.5-1.4l1.4-5.4l5.9-1.6l4.1-3.9l-0.6-0.6l-0.4-0.4L458,631h-5.3l-1.5-1.9l10.8-4.7l10.5,0.6l13-5.2l4.3-11.6 l2.8-2.3l0.3,0.2l1,4.5l11.6,3.1l0.7-1.7l-10.7-2.9l-0.9-4l-1-0.8l0.6-5.5l2-2l4.1,0.4l1.6-2.8l5.2-7.9l1.1-3.7l-0.9-5.8l1.4-2.6 l-0.5-2.7l-0.9-4.3l1.3-1.8l5.4-1.5l4.5-0.2l8.4,5l0.1-1.3l0.5-0.5l-8.1-4.9L519.7,558z M517.9,562h-4.2l-6.4,1.9l-2,3.5l1,4.7 l0.4,1.9l-1.4,2.5l1,6l-0.9,2.9l-5.1,7.8l-1.1,1.8l-3.8-0.4l-3.1,3.1l-0.7,6.2l-3.5,2.9l-4.2,11.3l-11.9,4.7l-10.5-0.7l-12.3,5.3 l-4.8,1.6l-8.5,1l-1.9,3l-5.4,0.6l-1.2-1.3l0.5-2.2l-4.1-4.2l-1.1-2.1l2.6-8.8l-0.9-3.5l-4.2-0.5l-1.9-1.3l-2.4-6.8l1.7-2.7 l-2.4-4.3l1-2.4l-2.4-3.3l-6.7-2.3l-4.6,3.1l-8.7-0.7h-0.1l-3.7,1.9l-5-1v-1.7l-1.1-3.2l-9.8,0.4l-7.3-2.4l-5.3,2.8l0.5-7.7l4.6-4 l4.6-6.7l11.3-2.2l2.6,1.4l4.4-3.7l10.8,0.7l7.6,0.7l8.1-6.5l0.3-8.6l-2.7-1.3l-0.1-0.5l5-7.6l-1.8-5.2l-1.5-1.6l0.4-6.8l6.4-2.3 v-4.6l0.3-3.5l1.3-4.2l4.5-0.5l0.4-2.8h1l1.9,3h3.2l-0.5,4.1l9.1-3.7l-0.2-0.5l0.2,0.5l17.3-10.9l6.9,0.4l0.7,0.6l-1.1,3.4l4.4,4.1 h4.6l2.1-1.7l4.7,1.3l9.5,6.8l7.2,0.6l4.5,4.5l1.4,3.3l2,1.7l9,0.7l7.9,4.1l1.7,1.8l-0.9,2.5l-3.8,3.2l-2,3.8l-3.8,2.4l-2.4,4.5v2.7 l2.7,2.6l2.5,3.4L517.9,562z",
            centroOeste: "M437.7,500.4l-4.4-7.7l0.8-3.8l2.8-2.8l-1-5l0.8-1.2l-1.7-2.5l-1.7-0.9l-4.1-0.5l-2.1,3.8 l-11.6-1l-3.1-3.9h-3.6l0.3,2.6l-7-1.3l-3.8,2.3l-1.5-3.5l-7.6-2l-2.2,3.5l-4.3-9.2l-7.2-0.4l-7.4,10.3l-2.3-5.9v-20l7-20.1h0.2 l-0.9-1.7l-98-6l-1.4-1.5l-3-1.3l-1.5-2.1l-7.1-6.4l-0.3-7.1v-0.2l-7.2-13.3l-0.3-0.4l0,0l-1.7,0.9l-3.2,5.7l-0.7,3.4v5.9l-1,6.3 l-44.4,2.4l-0.7,1.9l-0.8,4.4l1.4,9.7l-2.8,8l1.5,3.7l7.6,7.7l13.2,1.2l2.2,1.8l-0.8,4.3l-1.1,3.3l3.3,6.6l-0.9,6.7l-2.2,4.4 l-3.5,5.8l-3.6,4.6l-2.8,2.9l0.9,0.4l0.7,0.6l2.5-2.6l3.8-4.7l3.6-6l2.4-4.7l1.1-7.6l-3.2-6.5l0.9-2.7l1.1-5.5l-3.5-2.9l-13.1-1.2 l-6.9-6.9l-1.2-2.8l2.7-7.8l-1.4-9.9l0.8-4.3l45.2-2.3l1.5-8.1v-5.6l0.3-3.1l2.2-4.4l6.2,11.4l0.3,7.7l7.5,6.8l1.7,2.5l3.1,1.3 l1.8,1.8l97.4,6l-6.9,19.5v0.1v0.1v20.4l0,0l2.9,7.7l-3.5,7.2l-3.1,16.4l-3.7,6.8l-1.2-0.5l-2.9,1.6l-6.1,11.4l-4.2,1.3l-5.7,8.4 l-7.1,7.7l-2,7.9l0.2,8l-3.5-2.2l-3.4-7.5l-4.2,0.2l-1.5,3h-1.7l-2.4-0.4l-4-1l-4.2,2.6l-17.5-6.1l-0.3-0.3l-2.9,1.3l-5.8,1.1 l-4.1,4.7l-6.8,4.9l-2.2,3.9l0.5,1l-0.9,3.5l3.9-7.1l6.7-4.8l3.9-4.4l5.3-1l2.5-1.1l18.1,6.2l4.3-2.9l3.4,0.5l2.6,0.6h0.1l0,0h1.9 l0,0h0.3l0.1-0.2h0.4l1.5-2.6l1.9,0.2l3.2,7l5.1,4.1l0.7,6.5h0.4l0,0h2.8h0.4l-1.7,2.9l1.7,2.1h3.5l10.6,4.1l10.4,3.8l3.5,2.1 l-0.6,10l-5.6,4l-5.1,7.8L346,608l-4,3.7v2.4l-5.3,7.8l-6.7,5h0.1l-9.2,6.6l-0.7,4l-3.9,3.9l-1.9,7.7l-2.8,1.9l-0.4,0.1l0.9,1.2 l3.4-2l2.3-7.9l4.1-4l0.7-3.9l9.3-6.6l1.6-1l4.5-3.6l6-8.7v-2.2l3.5-3.3l2.7-6.4l4.9-7.3l6.1-4.4h0.1l0.1-1.4l0.1-2.2l0.5-7.7l4.6-4 l4.6-6.7l11.3-2.2l2.6,1.4l4.4-3.7l10.8,0.7l7.6,0.7l8.1-6.5l0.3-8.6l-2.7-1.3l-0.1-0.5l5-7.6l-1.8-5.2l-1.5-1.6l0.4-6.8l6.4-2.3 v-4.6l0.3-3.5l1.3-4.2l4.5-0.5l0.4-2.8h1l1.9,3h3.2l1.9-1.9l2-4.5L437.7,500.4z M434.9,511h-2.6l-1.9-3h-3.7l-0.3,3.2l-4.1,0.8 l-2,5.4L420,521v3.3l-6.1,2.3l-1,8.8l2,1.8l1.5,4l-4.8,7.4l0.5,2.2l2.5,1.2l-0.2,6.5l-6.9,5.5l-6.9-0.6l-11.6-0.7l-4,3.4l-2.1-1.1 l-12.7,2.5l-4.8,7l-4.3,3.7l-3.5-2.3l-10.3-3.6l-11.8-4.3H333l-0.3-0.7l2.1-2.7l-2.7-1.6H330l-0.5-5.2l-0.3-9.9l1.8-7.3l6.9-7.5 l5.5-8l4.3-1.4l6.2-11.6l1.7-0.9l2,0.8l4.7-8.4l3.3-16.5l3.9-7.3l7.2-10.9l5.1,0.3l5.3,11.3l3.3-5.3l5.4,1.4l2,4.7l5.1-3.1l8.8,1.8 l-0.4-3h0.5l3,3.8l13.7,1.3l2-3.8l3.1,0.3l1,1.4l-0.5,0.7l0.9,4.8l-2.4,2.4l-1.1,5l4.6,7.9l0.6,6L434.9,511z",
            norte: "M431.4,455.1l-0.7-2.1l3.2-3.9l-0.4-1.5l8.9-7.9l-0.2-1.6l-2.1-0.8l-1.8-0.8l-5.5-1.5 l-2.9-6.4l1.1-1.8l-4-4l-3.4-5.1l2.8-7.4l4.5-2.4v-5.6l-2.9-2.1l-4.7,1.2l-5.9-7.5l-0.6-3.5l-2.6-1.5l1.6-1.5l2.5-6.6v-0.1l-0.7-15 l-6.1-5.5h-4.1l-3.6-2.4l6.5-6.7l5.3-1.4l9.1-13.5l2-6.1l4.7-4.5v-4.9l2.8-3.9l0.2-2.9l0.1-0.6l2.6-4.6v-5.9l1.6-4.7l-0.5-0.1 l-0.6-0.7l-1.8,5.6h0.2l-0.2,0.2v5.8l-2.5,4.5v0.6l-0.3,2.4l-2.6,3.9l-0.2,4.8l-4.5,3.9l-2.2,6.5l-9,12.4l-5,1.2l-12.9,12.6l6,1.3 l1.9,1.4l-2.6,9.4l-7.4,7.5l-6.5,3.5v2.7l-1.7,7.2l2,4.2l-2.7,10.6l-6.4,8.5l-6.9,11.7l-98-6l-1.4-1.5l-3-1.3l-1.5-2.1l-7.1-6.4 l-0.3-7.1v-0.2l-7.2-13.3l-0.3-0.4l0,0l-3.9-7.1l11.3-27.1l17.4-43.7l0.3-0.7l-4.6-3l-4.2-2.4l-4.1-2.7H262l-6.9-0.9l-2.6-0.5 l-10.2-15.5l-3-27.1l-0.9,0.1l-1-0.7l1.5,13.2l-13.2,0.8l-5.1,2.9l-0.7,3.4l-3.7,2.9l-0.9,5.5l-3.6,2.1l-4.5-3.2l-3.5-1.6l-6,3.4 l-2.1,8.9l-1.5,1l-10.7-8.8l1.4-1l0.8-4.8l-2.3-19.6l-8.3-15.7l-6-4.8l-0.6,2.2l5,3.6l8,15.1l2.3,19.1l-0.6,3.7l-1,0.7l-1.3,1.6 l13.3,10.9l3.2-2.3l2-8.8l4.4-2.6l2.4,1.1l5.4,3.9l5.4-3.1l1-5.7l3.7-2.9l0.7-3.2l4-2.3l12.8-0.8l1.4,12.9l10.9,16.2l3.5,0.5 l7.1,1.4h0.1l0,0h3.7l3.6,2.1l3.6,2.4l3.4,2.8l-17.1,43.1l-11.6,27.9l4.3,7.9l-3.2,5.7l-0.7,3.4v5.9l-1,6.3l-44.4,2.4l-13.5-3.1 l-7.8-6.7h-13l-0.7,1.5l-1.6,0.3l-4.6,3.2l1,5.1l-2.5,2.2l-9.3,2.9l-4.1,5.8H144l-6.5,2.2l-4.4-1.8l-5.6,0.2l-7.5,5.5v2l-50.7-26.7 l-37.9-9.2L19,392.5l-1.6,1.1l13.7,7.2l37.3,9.1L120,437v4.1l2-1.2v-6l6.2-4.5l4.2-0.2l4.8,2.1l6.9-2.3h3.3l4.3-6.1l9.1-2.8l3.5-3.3 l-0.9-5.2l3.2-2.6l2.3-0.5l0.6-1.5h11l7.8,6.9l13.5,3.8l1.9-0.1l45.2-2.3l1.5-8.1v-5.6l0.3-3.1l2.2-4.4l6.2,11.4l0.3,7.7l7.5,6.8 l1.7,2.5l3.1,1.3l1.8,1.8l97.4,6l-6.9,19.5v0.1v0.1v20.4l0,0l2.9,7.7l2.5,0.6l7.2-10.9l5.1,0.3l5.3,11.3l3.3-5.3l5.4,1.4l2,4.7 l5.1-3.1l8.8,1.8l-0.4-3h0.5l3,3.8l13.7,1.3l2-3.8l3.1,0.3l1.6-1.1l1.7-4.8l-3.4-2.2l0.2-3.4l2.8-3.5l-1-2.4l1.9-2.7L431.4,455.1z M434.1,463.4l-2.4,3.1l-0.3,5.1l3.1,1.9l-1.1,3.1l-4.1-0.5l-2.1,3.8l-11.6-1l-3.1-3.9h-3.6l0.3,2.6l-7-1.3l-3.8,2.3l-1.5-3.5 l-7.6-2l-2.2,3.5l-4.3-9.2l-7.2-0.4l-7.4,10.3l-2.3-5.9v-20l7-20.1h0.2l7.5-12.3l6.6-8.5l0.2-0.1l3.2-11.6l-2.3-4.2l1.6-6.7v-2 l5.6-3l7.7-8.1l3.3-11.1l-3.1-2.4l-3-0.7l2.1-1.9l4.5,2.5h3.8l5.1,4.9l0.7,14.4l-2.2,5.9l-3,3l4,2.3l0.6,3.1l7.1,8.8l4.7-1.3 l1.3,1.1v3.5l-4,2.2l-3.7,9l4.2,6.1l3.2,3.1l-0.8,1.4l3.7,8.1l7.2,2l1.5,0.5l-8.8,7.9l0.4,1.7l-3.3,4l1.2,3.7l4.6,2.9l-1.4,1.9 L434.1,463.4z M308.5,250.7l5.4,3.8l7.8,2.6l1.5,3.3l4.8,5.8l-0.4,3.1l2.9,10.4l3.9,2l1.2,2.3l4.1,9.7l8.3,2.6l1.5-1.5l-8.4-2.7 l-3.8-9l-1.5-2.9l-3.7-1.9l-2.6-9.3l0.4-3.5l-5.1-6.1l-1.8-3.9l-8.2-2.7l-5.7-4l-3.9-0.6l-0.7-1.9v-4l-1-0.1l-0.9-0.9v5.2l1.2,3.3 L308.5,250.7z"
        }, a.regioes = {
            capitais: [{
                id: "88013",
                situation: "-1",
                r: "6.3",
                x: "352.8",
                y: "746.3",
                estado: "RS",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sul",
                cidade: "Porto Alegre",
                path: "M352.8,716c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C363.5,720.9,358.6,716,352.8,716z M352.8,733c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C358.8,730.2,356,733,352.8,733z"
            }, {
                id: "81051",
                situation: "-1",
                r: "6.3",
                x: "388.9",
                y: "707.7",
                estado: "SC",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sul",
                cidade: "Florianópolis",
                path: "M388.9,677.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C399.7,682.3,394.8,677.4,388.9,677.4z M388.9,694.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C395,691.6,392.2,694.4,388.9,694.4z"
            }, {
                id: "75353",
                situation: "-1",
                r: "6.3",
                x: "381.3",
                y: "672.6",
                estado: "PR",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sul",
                cidade: "Curitiba",
                path: "M381.3,642.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C392.1,647.2,387.2,642.3,381.3,642.3z M381.3,659.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C387.4,656.5,384.6,659.3,381.3,659.3z"
            }, {
                id: "90514",
                situation: "-1",
                r: "6.3",
                x: "303.6",
                y: "597.0",
                estado: "MS",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "centroOeste",
                cidade: "Campo Grande",
                path: "M303.6,566.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C314.4,571.6,309.5,566.7,303.6,566.7z M303.6,583.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C309.7,580.9,306.9,583.7,303.6,583.7z"
            }, {
                id: "71072",
                situation: "-1",
                r: "6.3",
                x: "422.8",
                y: "643.7",
                estado: "SP",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sudeste",
                cidade: "São Paulo",
                path: "M422.8,613.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C433.6,618.3,428.7,613.4,422.8,613.4z M422.8,630.4c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C428.9,627.6,426.1,630.4,422.8,630.4z"
            }, {
                id: "93734",
                situation: "-1",
                r: "6.3",
                x: "381.6",
                y: "536.6",
                estado: "GO",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "centroOeste",
                cidade: "Goiânia",
                path: "M381.6,506.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C392.4,511.2,387.5,506.3,381.6,506.3z M381.6,523.3c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C387.7,520.5,384.9,523.3,381.6,523.3z"
            }, {
                id: "00035",
                situation: "-1",
                r: "6.3",
                x: "163.6",
                y: "421.1",
                estado: "RO",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Porto Velho",
                path: "M163.6,390.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C174.4,395.7,169.5,390.8,163.6,390.8z M163.6,407.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C169.7,405,166.9,407.8,163.6,407.8z"
            }, {
                id: "01392",
                situation: "-1",
                r: "6.3",
                x: "107.6",
                y: "441.4",
                estado: "AC",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Rio Branco",
                path: "M107.6,411.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C118.4,416,113.5,411.1,107.6,411.1z M107.6,428.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C113.7,425.3,110.9,428.1,107.6,428.1z"
            }, {
                id: "02550",
                situation: "-1",
                r: "6.3",
                x: "226.0",
                y: "331.3",
                estado: "AM",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Manaus",
                path: "M226,301c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C236.8,305.9,231.9,301,226,301z M226,318c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C232.1,315.2,229.3,318,226,318z"
            }, {
                id: "03018",
                situation: "-1",
                r: "6.3",
                x: "207.3",
                y: "237.3",
                estado: "RR",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Boa Vista",
                path: "M207.3,207c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C218.1,211.9,213.2,207,207.3,207z M207.3,224c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C213.4,221.2,210.6,224,207.3,224z"
            }, {
                id: "06050",
                situation: "-1",
                r: "6.3",
                x: "363.8",
                y: "274.0",
                estado: "AP",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Macapa",
                path: "M363.8,243.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C374.6,248.6,369.7,243.7,363.8,243.7z M363.8,260.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C369.9,257.9,367.1,260.7,363.8,260.7z"
            }, {
                id: "04278",
                situation: "-1",
                r: "6.3",
                x: "403.4",
                y: "300.6",
                estado: "PA",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Belém",
                path: "M403.4,270.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C414.2,275.2,409.3,270.3,403.4,270.3z M403.4,287.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C409.5,284.5,406.7,287.3,403.4,287.3z"
            }, {
                id: "73440",
                situation: "-1",
                r: "6.3",
                x: "398.9",
                y: "438.1",
                estado: "TO",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "norte",
                cidade: "Palmas",
                path: "M398.9,407.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C409.7,412.7,404.8,407.8,398.9,407.8z M398.9,424.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C405,422,402.2,424.8,398.9,424.8z"
            }, {
                id: "90670",
                situation: "-1",
                r: "6.3",
                x: "283.6",
                y: "517.3",
                estado: "MT",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "centroOeste",
                cidade: "Cuiaba",
                path: "M283.6,487c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C294.4,491.9,289.5,487,283.6,487z M283.6,504c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C289.7,501.2,286.9,504,283.6,504z"
            }, {
                id: "09210",
                situation: "-1",
                r: "6.3",
                x: "469.3",
                y: "324.9",
                estado: "MA",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "São Luis",
                path: "M469.3,294.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C480.1,299.5,475.2,294.6,469.3,294.6z M469.3,311.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C475.4,308.8,472.6,311.6,469.3,311.6z"
            }, {
                id: "12190",
                situation: "-1",
                r: "6.3",
                x: "490.9",
                y: "356.7",
                estado: "PI",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Teresina",
                path: "M490.9,326.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C501.7,331.3,496.8,326.4,490.9,326.4z M490.9,343.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C497,340.6,494.2,343.4,490.9,343.4z"
            }, {
                id: "13897",
                situation: "-1",
                r: "6.3",
                x: "554.9",
                y: "345.7",
                estado: "CE",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Fortaleza",
                path: "M554.9,315.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C565.7,320.3,560.8,315.4,554.9,315.4z M554.9,332.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C561,329.6,558.2,332.4,554.9,332.4z"
            }, {
                id: "17612",
                situation: "-1",
                r: "6.3",
                x: "602.0",
                y: "374.1",
                estado: "RN",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Natal",
                path: "M602,343.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C612.8,348.7,607.9,343.8,602,343.8z M602,360.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C608.1,358,605.3,360.8,602,360.8z"
            }, {
                id: "20516",
                situation: "-1",
                r: "6.3",
                x: "606.5",
                y: "392.6",
                estado: "PB",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "João Pessoa",
                path: "M606.5,362.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C617.3,367.2,612.4,362.3,606.5,362.3z M606.5,379.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C612.6,376.5,609.8,379.3,606.5,379.3z"
            }, {
                id: "25313",
                situation: "-1",
                r: "6.3",
                x: "605.3",
                y: "415.1",
                estado: "PE",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Recife",
                path: "M605.3,384.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C616.1,389.7,611.2,384.8,605.3,384.8z M605.3,401.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C611.4,399,608.6,401.8,605.3,401.8z"
            }, {
                id: "27855",
                situation: "-1",
                r: "6.3",
                x: "593.0",
                y: "435.4",
                estado: "AL",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Maceió",
                path: "M593,405.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C603.8,410,598.9,405.1,593,405.1z M593,422.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C599.1,419.3,596.3,422.1,593,422.1z"
            }, {
                id: "31054",
                situation: "-1",
                r: "6.3",
                x: "572.5",
                y: "452.4",
                estado: "SE",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Aracaju",
                path: "M572.5,422.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C583.3,427,578.4,422.1,572.5,422.1z M572.5,439.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C578.6,436.3,575.8,439.1,572.5,439.1z"
            }, {
                id: "38490",
                situation: "-1",
                r: "6.3",
                x: "551.8",
                y: "481.6",
                estado: "BA",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "nordeste",
                cidade: "Salvador",
                path: "M551.8,451.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C562.6,456.2,557.7,451.3,551.8,451.3z M551.8,468.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C557.9,465.5,555.1,468.3,551.8,468.3z"
            }, {
                id: "57053",
                situation: "-1",
                r: "6.3",
                x: "514.9",
                y: "597.2",
                estado: "ES",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sudeste",
                cidade: "Vitória",
                path: "M514.9,566.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C525.7,571.8,520.8,566.9,514.9,566.9z M514.9,583.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C521,581.1,518.2,583.9,514.9,583.9z"
            }, {
                id: "41238",
                situation: "-1",
                r: "6.3",
                x: "464.8",
                y: "588.1",
                estado: "MG",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sudeste",
                cidade: "Belo Horizonte",
                path: "M464.8,557.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C475.6,562.7,470.7,557.8,464.8,557.8z M464.8,574.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C470.9,572,468.1,574.8,464.8,574.8z"
            }, {
                id: "60011",
                situation: "-1",
                r: "6.3",
                x: "471.1",
                y: "636.9",
                estado: "RJ",
                isCapital: "true",
                regiao: "capitais",
                regiaoReal: "sudeste",
                cidade: "Rio de Janeiro",
                path: "M471.1,606.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C481.9,611.5,477,606.6,471.1,606.6z M471.1,623.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C477.2,620.8,474.4,623.6,471.1,623.6z"
            }],
            turno2: [{
                id: "85898",
                situation: "-1",
                r: "2.5",
                x: "360.8",
                y: "735.3",
                estado: "RS",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "Canoas",
                path: "M353.8,714c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C364.5,718.9,359.6,714,353.8,714z M353.8,731c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C359.8,728.2,357,731,353.8,731z"
            }, {
                id: "85995",
                situation: "-1",
                r: "2.5",
                x: "352.3",
                y: "732.2",
                estado: "RS",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "CaxiasdoSul",
                path: "M352.3,701.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C363,706.8,358.1,701.9,352.3,701.9z M352.3,718.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C358.3,716.1,355.5,718.9,352.3,718.9z"
            }, {
                id: "88412",
                situation: "-1",
                r: "2.5",
                x: "319.0",
                y: "738.9",
                estado: "RS",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "SantaMaria",
                path: "M319,708.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C329.8,713.5,324.9,708.6,319,708.6z M319,725.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C325.1,722.8,322.3,725.6,319,725.6z"
            }, {
                id: "80470",
                situation: "-1",
                r: "2.5",
                x: "384.1",
                y: "696.2",
                estado: "SC",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "Blumenau",
                path: "M384.1,665.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C394.9,670.8,390,665.9,384.1,665.9z M384.1,682.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C390.2,680.1,387.4,682.9,384.1,682.9z"
            }, {
                id: "81795",
                situation: "-1",
                r: "2.5",
                x: "387.1",
                y: "687.2",
                estado: "SC",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "Joinville",
                path: "M387.1,656.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C397.9,661.8,393,656.9,387.1,656.9z M387.1,673.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C393.2,671.1,390.4,673.9,387.1,673.9z"
            }, {
                id: "76910",
                situation: "-1",
                r: "2.5",
                x: "344.5",
                y: "642.3",
                estado: "PR",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "Maringa",
                path: "M344.5,612c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C355.3,616.9,350.4,612,344.5,612z M344.5,629c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C350.6,626.2,347.8,629,344.5,629z"
            }, {
                id: "77771",
                situation: "-1",
                r: "2.5",
                x: "369.0",
                y: "667.0",
                estado: "PR",
                isCapital: "false",
                regiao: "sul",
                regiaoReal: "sul",
                cidade: "PontaGrossa",
                path: "M369,636.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C379.8,641.6,374.9,636.7,369,636.7z M369,653.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C375.1,650.9,372.3,653.7,369,653.7z"
            }, {
                id: "62197",
                situation: "-1",
                r: "2.5",
                x: "387.8",
                y: "624.7",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Bauru",
                path: "M387.8,594.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C398.6,599.3,393.7,594.4,387.8,594.4z M387.8,611.4c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C393.9,608.6,391.1,611.4,387.8,611.4z"
            }, {
                id: "64254",
                situation: "-1",
                r: "2.5",
                x: "411.8",
                y: "597.7",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Franca",
                path: "M411.8,567.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C422.6,572.3,417.7,567.4,411.8,567.4z M411.8,584.4c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C417.9,581.6,415.1,584.4,411.8,584.4z"
            }, {
                id: "69698",
                situation: "-1",
                r: "2.5",
                x: "405.8",
                y: "607.7",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "RibeiraoPreto",
                path: "M405.8,577.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C416.6,582.3,411.7,577.4,405.8,577.4z M405.8,594.4c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C411.9,591.6,409.1,594.4,405.8,594.4z"
            }, {
                id: "71455",
                situation: "-1",
                r: "2.5",
                x: "410.6",
                y: "642.5",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Sorocaba",
                path: "M410.6,612.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C421.4,617.1,416.5,612.2,410.6,612.2z M410.6,629.2c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C416.7,626.4,413.9,629.2,410.6,629.2z"
            }, {
                id: "66192",
                situation: "-1",
                r: "2.5",
                x: "418.8",
                y: "637.7",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Jundiai",
                path: "M418.8,607.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C429.6,612.3,424.7,607.4,418.8,607.4z M418.8,624.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C424.9,621.6,422.1,624.4,418.8,624.4z"
            }, {
                id: "71510",
                situation: "-1",
                r: "2.5",
                x: "432.0",
                y: "640.5",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Suzano",
                path: "M428,611.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C438.8,616.1,433.9,611.2,428,611.2z M428,628.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C434.1,625.4,431.3,628.2,428,628.2z"
            }, {
                id: "64777",
                situation: "-1",
                r: "2.5",
                x: "423.6",
                y: "637.8",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Guarulhos",
                path: "M423.6,609.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C434.4,614.5,429.5,609.6,423.6,609.6z M423.6,626.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C429.7,623.8,426.9,626.6,423.6,626.6z"
            }, {
                id: "67890",
                situation: "-1",
                r: "2.5",
                x: "420.1",
                y: "643.5",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Osasco",
                path: "M420.1,613.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C430.9,618.1,426,613.2,420.1,613.2z M420.1,630.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C426.2,627.4,423.4,630.2,420.1,630.2z"
            }, {
                id: "64750",
                situation: "-1",
                r: "2.5",
                x: "429.1",
                y: "650.0",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Guaruja",
                path: "M429.1,619.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C439.9,624.6,435,619.7,429.1,619.7z M429.1,636.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C435.2,633.9,432.4,636.7,429.1,636.7z"
            }, {
                id: "70750",
                situation: "-1",
                r: "2.5",
                x: "424.2",
                y: "644.2",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "SaoBernardodoCampo",
                path: "M424.4,616.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C435.2,621.6,430.3,616.7,424.4,616.7z M424.4,633.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 s6.1,2.7,6.1,6.1C430.5,630.9,427.7,633.7,424.4,633.7z"
            }, {
                id: "70572",
                situation: "-1",
                r: "2.5",
                x: "429.3",
                y: "645.7",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "SantoAndre",
                path: "M424.2,613.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C435,618.8,430.1,613.9,424.2,613.9z M424.2,630.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C430.3,628.1,427.5,630.9,424.2,630.9z"
            }, {
                id: "66893",
                situation: "-1",
                r: "2.5",
                x: "431.3",
                y: "645.7",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Maua",
                path: "M429.3,615.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C440.1,620.1,435.2,615.2,429.3,615.2z M429.3,632.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C435.4,629.4,432.6,632.2,429.3,632.2z"
            }, {
                id: "63770",
                situation: "-1",
                r: "2.5",
                x: "420.4",
                y: "650.5",
                estado: "SP",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Diadema",
                path: "M420.4,616.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C431.2,621.1,426.3,616.2,420.4,616.2z M420.4,633.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C426.5,630.4,423.7,633.2,420.4,633.2z"
            }, {
                id: "57037",
                situation: "-1",
                r: "2.5",
                x: "510.0",
                y: "605.6",
                estado: "ES",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "VilaVelha",
                path: "M510,573.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C520.8,578.2,515.9,573.3,510,573.3z M510,590.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C516.1,587.5,513.3,590.3,510,590.3z"
            }, {
                id: "56251",
                situation: "-1",
                r: "2.5",
                x: "505.9",
                y: "596.7",
                estado: "ES",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Cariacica",
                path: "M506.9,566.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C517.7,571.3,512.8,566.4,506.9,566.4z M506.9,583.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C513,580.6,510.2,583.4,506.9,583.4z"
            }, {
                id: "56995",
                situation: "-1",
                r: "2.5",
                x: "518.3",
                y: "587.9",
                estado: "ES",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Serra",
                path: "M518.3,559.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C529.1,564.5,524.2,559.6,518.3,559.6z M518.3,576.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C524.4,573.8,521.6,576.6,518.3,576.6z"
            }, {
                id: "43710",
                situation: "-1",
                r: "2.5",
                x: "453.0",
                y: "587.9",
                estado: "MG",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Contagem",
                path: "M461.5,557.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C472.3,562.5,467.4,557.6,461.5,557.6z M461.5,574.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C467.6,571.8,464.8,574.6,461.5,574.6z"
            }, {
                id: "47333",
                situation: "-1",
                r: "2.5",
                x: "473.4",
                y: "619.3",
                estado: "MG",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "JuizdeFora",
                path: "M473.4,590c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C484.2,594.9,479.3,590,473.4,590z M473.4,607c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C479.5,604.2,476.7,607,473.4,607z"
            }, {
                id: "48658",
                situation: "-1",
                r: "2.5",
                x: "465.3",
                y: "539.9",
                estado: "MG",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Montes Claros",
                path: "M465.3,509.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C476.1,514.5,471.2,509.6,465.3,509.6z M465.3,526.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C471.4,523.8,468.6,526.6,465.3,526.6z"
            }, {
                id: "58777",
                situation: "-1",
                r: "2.5",
                x: "472.1",
                y: "627.9",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Petropolis",
                path: "M472.1,598.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C482.9,603.5,478,598.6,472.1,598.6z M472.1,615.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C478.2,612.8,475.4,615.6,472.1,615.6z"
            }, {
                id: "59250",
                situation: "-1",
                r: "2.5",
                x: "455.1",
                y: "629.4",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "VoltaRedonda",
                path: "M460.1,600.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C470.9,605,466,600.1,460.1,600.1z M460.1,617.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C466.2,614.3,463.4,617.1,460.1,617.1z"
            }, {
                id: "58971",
                situation: "-1",
                r: "2.5",
                x: "478.8",
                y: "629.5",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "SaoGoncalo",
                path: "M477.8,601.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C488.6,606.1,483.7,601.2,477.8,601.2z M477.8,618.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C483.9,615.4,481.1,618.2,477.8,618.2z"
            }, {
                id: "58653",
                situation: "-1",
                r: "2.5",
                x: "481.2",
                y: "636.8",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Niteroi",
                path: "M479.2,606.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C490,611.4,485.1,606.5,479.2,606.5z M479.2,623.5c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C485.3,620.7,482.5,623.5,479.2,623.5z"
            }, {
                id: "58335",
                situation: "-1",
                r: "2.5",
                x: "461.9",
                y: "635.7",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "DuquedeCaxias",
                path: "M462.9,604.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C473.7,609.3,468.8,604.4,462.9,604.4z M462.9,621.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C469,618.6,466.2,621.4,462.9,621.4z"
            }, {
                id: "58696",
                situation: "-1",
                r: "2.5",
                x: "461.0",
                y: "628.9",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Nova Iguaçu",
                path: "M461,598.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C471.8,603.5,466.9,598.6,461,598.6z M461,615.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C467.1,612.8,464.3,615.6,461,615.6z"
            }, {
                id: "58041",
                situation: "-1",
                r: "2.5",
                x: "466.5",
                y: "627.9",
                estado: "RJ",
                isCapital: "false",
                regiao: "sudeste",
                regiaoReal: "sudeste",
                cidade: "Belford Roxo",
                path: "M464.5,597.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C475.3,602.5,470.4,597.6,464.5,597.6z M464.5,614.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C470.6,611.8,467.8,614.6,464.5,614.6z"
            }, {
                id: "92215",
                situation: "-1",
                r: "2.5",
                x: "392.6",
                y: "530.3",
                estado: "GO",
                isCapital: "false",
                regiao: "centroOeste",
                regiaoReal: "centroOeste",
                cidade: "Anapolis",
                path: "M392.6,500c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C403.4,504.9,398.5,500,392.6,500z M392.6,517c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C398.7,514.2,395.9,517,392.6,517z"
            }, {
                id: "13730",
                situation: "-1",
                r: "2.5",
                x: "545.8",
                y: "341.3",
                estado: "CE",
                isCapital: "false",
                regiao: "nordeste",
                regiaoReal: "nordeste",
                cidade: "Caucaia",
                path: "M551.8,313c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C562.6,317.9,557.7,313,551.8,313z M551.8,330c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C557.9,327.2,555.1,330,551.8,330z"
            }, {
                id: "24910",
                situation: "-1",
                r: "2.5",
                x: "605.5",
                y: "405.2",
                estado: "PE",
                isCapital: "false",
                regiao: "nordeste",
                regiaoReal: "nordeste",
                cidade: "Olinda",
                path: "M605.5,376.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C616.3,381.8,611.4,376.9,605.5,376.9z M605.5,393.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C611.6,391.1,608.8,393.9,605.5,393.9z"
            }, {
                id: "24570",
                situation: "-1",
                r: "2.5",
                x: "595.5",
                y: "418.0",
                estado: "PE",
                isCapital: "false",
                regiao: "nordeste",
                regiaoReal: "nordeste",
                cidade: "JaboataodosGuararapes",
                path: "M596.5,387.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C607.3,392.6,602.4,387.7,596.5,387.7z M596.5,404.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 s6.1,2.7,6.1,6.1C602.6,401.9,599.8,404.7,596.5,404.7z"
            }, {
                id: "23817",
                situation: "-1",
                r: "2.5",
                x: "585.2",
                y: "419.1",
                estado: "PE",
                isCapital: "false",
                regiao: "nordeste",
                regiaoReal: "nordeste",
                cidade: "Caruaru",
                path: "M585.2,388.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C596,393.7,591.1,388.8,585.2,388.8z M585.2,405.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C591.3,403,588.5,405.8,585.2,405.8z"
            }, {
                id: "39659",
                situation: "-1",
                r: "2.5",
                x: "509.6",
                y: "513.9",
                estado: "BA",
                isCapital: "false",
                regiao: "nordeste",
                regiaoReal: "nordeste",
                cidade: "VitoriadaConquista",
                path: "M509.6,483.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C520.4,488.5,515.5,483.6,509.6,483.6z M509.6,500.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 c3.4,0,6.1,2.7,6.1,6.1C515.7,497.8,512.9,500.6,509.6,500.6z"
            }],
            sul: {
                path: "M568,399l-6.1-18.7l11.1-13.2l1.4-4.4l0,0l0.4-1.4l0,0l0.4-1.4l-17.6-3.2L515.1,370l-14.1-9l-17.8-6.2 l-19.5,5l-14.8-3.1L434,371.6l-24.4,3l-3.5,7.9l0.4,12l-14.5,7.5L349,391.3l-30.1-10.7l-0.2-0.1l-45.4-5.6l-22.2-1.6l0,1.5l0,0 l0,1.5l0,0h0l-0.9,36l-5.8,18.4l-1,3.1l14.9-1h0.1l89.1,13.3l14.1,4.6l39.4,22.9l33.3,33.3l23.6,22.3l40.3,4.4l1.5,9.1l-15.2,20.4 l-1.3,8.9L470,585.2l4.6,4.1l13-5.6l8.5,4.8l2.4-2.1l50.5-42.3v-7.2l9.5-10.8l3.5-47.5l6-22.4V399z M474,592.7l-8-7.2l14.5-14.5 l1.2-8.7l15-20l-1-6l-39.1-4.4l-24.2-23l-33.2-33.2l-0.1-0.1l-38.7-22.5l-13.6-4.4L258,435.5l-14.7,1l-5.1,3.4l-33.3,21.8L184,472.5 L130,516l-6,16.1l-13.2,1.3L66.6,585l-2.5,9.4l-38.2,47.1L10,662l16.7,3.5L40.3,648l28,15l12.6,9.5l25,31.1v13.2l4.5,2.5l20.1-18.8 l35.1,36.3l27.3,10.8l18.3,24.6l27.2,12l0.5,0.7l25.6,37.4l9.9,7.3l9.4-6.8l12.7-18.8l18.6,12.9l-13,23.6L282,866.9l-20.1,15 l3.8,14.8l5.9-1.2l36.8-39.3l16.6-39.9l17-21.9l-8.7-9.9l0.1-2.9l3.3-15.8l12.1-15.3l6.5-17.6l18.4-10.8l25-49.5l-3.6-20.7l20.4,0.1 l28.1,7.1l-11.3,21l-6,14.2L415,703l-4.5,14.9l-4.1,8.2l-21,21.6l-37.6,28.1l0.9,9.9l2.6-3.3l40.8-31.3l49.4-56.9l28.2-58.9 l23.8-41.7l1.6-2.6l-7.7-4L474,592.7z M605,296v-3.2l-8.6-8.3l-15.3,8.6l-3.5-29.1l-39-3.1l-7.2-13.5l5.6-10l-19-31.3l-4.4-41.1 l-25.5-29H454l-45.4-21.7l-37.2-0.3h-24.5l-35.6-1.8l-12.9-8.9l-44,31.2l-3.1,17.9l-18.4,18.3l-8.1,36.2l-12.8,9.2V237l1.2,10.5 l-10,32.8l-8.6,44.4l5,2.9l22.6-1.3l15.5,8.5l12.5,34l0,0l0.5,1.5l22.7,1.7l45.9,5.8l29.9,10.6l43.1,10.6l11.1-5.6v-11.8l4.8-9.7 l25.1-3.2l14.9-15.3l15.3,3.2l19.5-5.1l19.1,6.7l13.1,8.4l41.9-13.2l18.7,3.3l0.8-2.9l5.7-19.4l-16.1-12.8l5.9-5.9l13.4-4.8l17-1.2 l7.4-9.4L605,296z M568,474.8v19.9l6.3,0.9l4.5-15.6l1.8-16.4l-6.3-0.9L568,474.8z",
                cidades: [{
                    id: "75353",
                    situation: "-1",
                    r: "6.3",
                    x: "527.0",
                    y: "310.7",
                    estado: "PR",
                    regiao: "sul",
                    isCapital: "true",
                    cidade: "Curitiba",
                    path: "M527,280.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C537.8,285.8,532.9,280.9,527,280.9z M527,297.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C533.1,295.1,530.3,297.9,527,297.9z"
                }, {
                    id: "77771",
                    situation: "-1",
                    r: "2.5",
                    x: "470.2",
                    y: "284.8",
                    estado: "PR",
                    regiao: "sul",
                    cidade: "Maringa",
                    path: "M470.2,255c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C481,259.9,476.1,255,470.2,255z M470.2,272c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C476.3,269.2,473.5,272,470.2,272z"
                }, {
                    id: "74934",
                    situation: "-1",
                    r: "2.5",
                    x: "255.6",
                    y: "277.0",
                    estado: "PR",
                    regiao: "sul",
                    cidade: "Londrina",
                    path: "M255.6,247.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C266.4,252.1,261.5,247.2,255.6,247.2z M255.6,264.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C261.7,261.4,258.9,264.2,255.6,264.2z"
                }, {
                    id: "76910",
                    situation: "-1",
                    r: "2.5",
                    x: "357.1",
                    y: "170.8",
                    estado: "PR",
                    regiao: "sul",
                    cidade: "Cascavel",
                    path: "M357.1,141c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C367.9,145.9,363,141,357.1,141z M357.1,158c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C363.2,155.2,360.4,158,357.1,158z"
                }, {
                    id: "76678",
                    situation: "-1",
                    r: "2.5",
                    x: "407.9",
                    y: "161.6",
                    estado: "PR",
                    regiao: "sul",
                    cidade: "Ponta Grossa",
                    path: "M407.9,131.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C418.7,136.7,413.8,131.8,407.9,131.8z M407.9,148.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C414,146,411.2,148.8,407.9,148.8z"
                }, {
                    id: "88013",
                    situation: "-1",
                    r: "6.3",
                    x: "395.4",
                    y: "650.9",
                    estado: "RS",
                    regiao: "sul",
                    cidade: "Porto Alegre",
                    path: "M395.4,621.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C406.1,626,401.2,621.1,395.4,621.1z M395.4,638.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C401.4,635.3,398.6,638.1,395.4,638.1z"
                }, {
                    id: "85995",
                    situation: "-1",
                    r: "2.5",
                    x: "393.1",
                    y: "585.8",
                    estado: "RS",
                    regiao: "sul",
                    cidade: "Caxias do Sul",
                    path: "M393.1,556c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C403.8,560.9,398.9,556,393.1,556z M393.1,573c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C399.1,570.2,396.3,573,393.1,573z"
                }, {
                    id: "85898",
                    situation: "-1",
                    r: "2.5",
                    x: "399.9",
                    y: "639.1",
                    estado: "RS",
                    regiao: "sul",
                    cidade: "Canoas",
                    path: "M399.9,609.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C410.6,614.2,405.7,609.3,399.9,609.3z M399.9,626.3c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C405.9,623.4,403.1,626.3,399.9,626.3z"
                }, {
                    id: "88412",
                    situation: "-1",
                    r: "2.5",
                    x: "239.4",
                    y: "616.7",
                    estado: "RS",
                    regiao: "sul",
                    cidade: "Pelotas",
                    path: "M239.4,586.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C250.2,591.8,245.3,586.9,239.4,586.9z M239.4,603.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C245.5,601.1,242.7,603.9,239.4,603.9z"
                }, {
                    id: "87912",
                    situation: "-1",
                    r: "2.5",
                    x: "328.5",
                    y: "770.5",
                    estado: "RS",
                    regiao: "sul",
                    cidade: "Santa Maria",
                    path: "M328.5,740.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C339.3,745.6,334.4,740.7,328.5,740.7z M328.5,757.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C334.6,754.9,331.8,757.7,328.5,757.7z"
                }, {
                    id: "81795",
                    situation: "-1",
                    r: "2.5",
                    x: "553.8",
                    y: "378.1",
                    estado: "SC",
                    regiao: "sul",
                    cidade: "Joinville",
                    path: "M553.8,348.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C564.6,353.2,559.7,348.3,553.8,348.3z M553.8,365.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C559.9,362.5,557.1,365.3,553.8,365.3z"
                }, {
                    id: "80470",
                    situation: "-1",
                    r: "2.5",
                    x: "539.9",
                    y: "419.6",
                    estado: "SC",
                    regiao: "sul",
                    cidade: "Blumenau",
                    path: "M539.9,389.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C550.7,394.7,545.8,389.8,539.9,389.8z M539.9,406.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C546,404,543.2,406.8,539.9,406.8z"
                }, {
                    id: "81051",
                    situation: "-1",
                    r: "6.3",
                    x: "562.0",
                    y: "472.6",
                    estado: "SC",
                    regiao: "sul",
                    cidade: "Florianopolis",
                    path: "M562,442.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C572.8,447.7,567.9,442.8,562,442.8z M562,459.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C568.1,457,565.3,459.8,562,459.8z"
                }]
            },
            sudeste: {
                path: "M364.4,669l3.3-11.2l19.7-5.2l8.9-9.1v-1.1h-16.8l-7.9-8.9l-14.7,5l-24.7,2.9l-5.9,9.4l-20.8,2.2 l-6.9-7.3l1.7-6.8l-11.7-12.2l-4.4-8.5l8.1-27.7l-1.7-6.8l-11.3-1.2l-7.8-5.5l-8.4-24.3l5-8l-7.1-13.1l2.9-7.1l-5.2-7.1l-17.7-6.1 l-13.9,9.3l-27.4-2.1l-0.2,0l-11,6l-19.6-4.2v-7.8l-2.6-6.3l-28.8,1.2l-21.8-7.1l-0.2-0.1l-18.5,10v1.4l-0.2,3.7l-18.7,13.5 l-14.9,22.8l-7,20L47,582.1v7.1l-20.4,26.4L9.9,627.2l6.4,5.1L39,634h16.5l25.9,0.3l30.5,14.7h23.7l19.2,21.2l3,27.7l13.5,22.2 l-3.9,6.8l2.8,5.3l27.3,2.2l2,16.9l7.1-4.4l8.3,8.8v2.1l2.9,2.1l7-5.7l53.6-41l37-16.8l16.8,2l3.4-5.3l28.4-15.9l0,0l0.4-0.3 l0.1-0.1l0,0l0.6-0.3L364.4,669z M137.8,504.9l0.1,0l30.7-1.3l4.7,8.2v6.4l14.8,2.8l10.5-5.3l27.4,2.1l14.1-9.5l19.6,6.7l6.6,9 l-3,7.4l7.3,13.2l-5.2,8.1l7.8,22.4l6.6,4.6l12.4,1.4l2.5,9.3l-8,27.4l3.8,7.3l12.3,12.8l-1.7,6.8l5,5.4l18.2-2l5.9-9.3l25.9-3.1 l15.3-5l37.9-16.2l32.7,2.1l37.8-14.9l13-35.4l10.9-9.3l2.1-19.4l8.8-8.8l12.1,1.2l3.8-6.4l16-24.4l2.9-9.8l-3-18.4l4.2-8l-1.2-6.8 l-3.1-14.8l5.5-10.3l19-7.7l13.8-0.2l0.1-1l0.9-7.8l-13.1-15.5l0.1-9.5l4-13.1l11.6-7.3l5.9-11.8l12.2-10.1l3.2-8.6l-5.7-6.1 l-24.8-12.8l-27.8-2.1l-5.9-4.9l-4.3-10.3l-14.5-14.5l-22.3-2.1L475,264.5l-15.4-4.6l-6.5,4.2h-13.6l-13.1-10.7l3.4-9.5l-2.8-2.5 l-22-1.2L351.2,274l-26.6,8.1l1.4-15h-10.4l-5.9-9h-4.4l-0.8,11.4l-13.3,3.8l-3.1,14l1.2,10.8v14l-21.8,7.3l-3.5,22.1l4.7,4.7 l5.6,15.8L259,385.3l0.5,2.5l8.3,4l-0.9,25.5L242.3,437l-23.3-2.2l-34-2.1l-13.6,11.4l-7.8-4.1l-35.9,6.9l-14.3,20.9l-14.7,12.6 l-1.6,25.2L97,507l17.8-9.6L137.8,504.9z M586.8,426.6l-1.6-1.2h-13.4l-17.6,7.4l-4.7,9.2l2.8,13.9l1.4,7.7l-4.2,8.1l2.9,18.1 l-3.2,10.9l-16.1,24.6l-4.6,7.9l-12.5-1.3l-7.3,7.3l-2,18.3l3.2,2.8l2.9,12.8l32,8.7l0.4-1.1l1.3-3.3l23.3-23.3l3.6-12.5l26-33.1 l5-29.2l5.8-35L586.8,426.6z M507.3,561.7l-2.2-2l-9.8,8.2l-0.1,0.1l-13.3,35.9l-39.4,15.7l-32.5-2.1l-0.1,0L374.1,633l6.4,7.6h16.6 l2.9,3.4l-11.3,11.2l-18.7,4.9l-2.7,9.5l0,0.1l0.6,7.3l1.2,0h3.8l0.7-1.5l-1.9-7.3l2.6-4.7l9.8-2.7l9,2l15.1-5.1l14.4,5.9l19.1-2.2 l-3.9-10.4l10.4-4l-1.9,13.4l7.4,1.1l36.4-2.6l4.1-15.7l41.3-20.2l0.1-19l7.2-18.6l0.4-1.1l-33.2-9L507.3,561.7z",
                cidades: [{
                    id: "71072",
                    situation: "-1",
                    r: "6.3",
                    x: "289.0",
                    y: "679.6",
                    estado: "SP",
                    regiao: "sudeste",
                    isCapital: "true",
                    cidade: "São Paulo",
                    path: "M289,649.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C299.8,654.7,294.9,649.8,289,649.8z M289,666.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C295.1,664,292.3,666.8,289,666.8z"
                }, {
                    id: "62197",
                    situation: "-1",
                    r: "2.5",
                    x: "180.3",
                    y: "620.6",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Bauru",
                    path: "M180.3,590.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C191.1,595.7,186.2,590.8,180.3,590.8z M180.3,607.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C186.4,605,183.6,607.8,180.3,607.8z"
                }, {
                    id: "64254",
                    situation: "-1",
                    r: "2.5",
                    x: "254.8",
                    y: "536.7",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Franca",
                    path: "M254.8,506.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C265.6,511.8,260.7,506.9,254.8,506.9z M254.8,523.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C260.9,521.1,258.1,523.9,254.8,523.9z"
                }, {
                    id: "69698",
                    situation: "-1",
                    r: "2.5",
                    x: "236.2",
                    y: "567.8",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Ribeirão Preto",
                    path: "M236.2,538c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C247,542.9,242.1,538,236.2,538z M236.2,555c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C242.3,552.2,239.5,555,236.2,555z"
                }, {
                    id: "70971",
                    situation: "-1",
                    r: "2.5",
                    x: "167.8",
                    y: "549.1",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "São José Do Rio Preto",
                    path: "M167.8,519.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C178.6,524.2,173.7,519.3,167.8,519.3z M167.8,536.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C173.9,533.5,171.1,536.3,167.8,536.3z"
                }, {
                    id: "66397",
                    situation: "-1",
                    r: "2.5",
                    x: "254.2",
                    y: "631.8",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Limeira",
                    path: "M254.2,602c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C265,606.9,260.1,602,254.2,602z M254.2,619c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C260.3,616.2,257.5,619,254.2,619z"
                }, {
                    id: "68756",
                    situation: "-1",
                    r: "2.5",
                    x: "242.7",
                    y: "640.0",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Piracicaba",
                    path: "M242.7,610.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C253.5,615.1,248.6,610.2,242.7,610.2z M242.7,627.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C248.8,624.4,246,627.2,242.7,627.2z"
                }, {
                    id: "62910",
                    situation: "-1",
                    r: "2.5",
                    x: "268.5",
                    y: "648.2",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Campinas",
                    path: "M268.5,618.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C279.3,623.3,274.4,618.4,268.5,618.4z M268.5,635.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C274.6,632.6,271.8,635.4,268.5,635.4z"
                }, {
                    id: "66192",
                    situation: "-1",
                    r: "2.5",
                    x: "276.6",
                    y: "661.0",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Jundiaí",
                    path: "M276.6,631.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C287.4,636.1,282.5,631.2,276.6,631.2z M276.6,648.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C282.7,645.4,279.9,648.2,276.6,648.2z"
                }, {
                    id: "71455",
                    situation: "-1",
                    r: "2.5",
                    x: "251.2",
                    y: "676.0",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Sorocaba",
                    path: "M251.2,646.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5S262,664,262,657 C262,651.1,257.1,646.2,251.2,646.2z M251.2,663.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C257.3,660.4,254.5,663.2,251.2,663.2z"
                }, {
                    id: "71838",
                    situation: "-1",
                    r: "2.5",
                    x: "334.9",
                    y: "652.6",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Taubaté",
                    path: "M334.9,622.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C345.7,627.7,340.8,622.8,334.9,622.8z M334.9,639.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C341,637,338.2,639.8,334.9,639.8z"
                }, {
                    id: "70998",
                    situation: "-1",
                    r: "2.5",
                    x: "320.0",
                    y: "661.5",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "São José Dos Campos",
                    path: "M320,631.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C330.8,636.6,325.9,631.7,320,631.7z M320,648.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C326.1,645.9,323.3,648.7,320,648.7z"
                }, {
                    id: "67130",
                    situation: "-1",
                    r: "2.5",
                    x: "308.8",
                    y: "676.8",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Mogi Das Cruzes",
                    path: "M308.8,647c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C319.6,651.9,314.7,647,308.8,647z M308.8,664c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C314.9,661.2,312.1,664,308.8,664z"
                }, {
                    id: "71510",
                    situation: "-1",
                    r: "2.5",
                    x: "303.1",
                    y: "679.9",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Suzano",
                    path: "M303.1,650.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C313.9,655,309,650.1,303.1,650.1z M303.1,667.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C309.2,664.3,306.4,667.1,303.1,667.1z"
                }, {
                    id: "65633",
                    situation: "-1",
                    r: "2.5",
                    x: "299.9",
                    y: "672.7",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Itaquaquecetuba",
                    path: "M299.9,642.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C310.7,647.8,305.8,642.8,299.9,642.8z M299.9,659.8c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C306,657.1,303.2,659.8,299.9,659.8z"
                }, {
                    id: "64777",
                    situation: "-1",
                    r: "2.5",
                    x: "291.9",
                    y: "667.0",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Guarulhos",
                    path: "M291.9,637.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C302.7,642.1,297.8,637.2,291.9,637.2z M291.9,654.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C298,651.4,295.2,654.2,291.9,654.2z"
                }, {
                    id: "62138",
                    situation: "-1",
                    r: "2.5",
                    x: "263.2",
                    y: "670.7",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Barueri",
                    path: "M263.2,640.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C274,645.8,269.1,640.8,263.2,640.8z M263.2,657.8c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C269.3,655.1,266.5,657.8,263.2,657.8z"
                }, {
                    id: "63134",
                    situation: "-1",
                    r: "2.5",
                    x: "270.0",
                    y: "673.2",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Carapicuíba",
                    path: "M270,643.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C280.8,648.3,275.9,643.3,270,643.3z M270,660.3c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C276.1,657.6,273.3,660.3,270,660.3z"
                }, {
                    id: "67890",
                    situation: "-1",
                    r: "2.5",
                    x: "276.9",
                    y: "675.0",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Osasco",
                    path: "M276.9,645.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C287.7,650.1,282.8,645.2,276.9,645.2z M276.9,662.2c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C283,659.4,280.2,662.2,276.9,662.2z"
                }, {
                    id: "71579",
                    situation: "-1",
                    r: "2.5",
                    x: "276.2",
                    y: "684.4",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Taboão Da Serra",
                    path: "M276.2,654.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C287,659.5,282.1,654.6,276.2,654.6z M276.2,671.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C282.3,668.8,279.5,671.6,276.2,671.6z"
                }, {
                    id: "63770",
                    situation: "-1",
                    r: "2.5",
                    x: "283.2",
                    y: "691.1",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Diadema",
                    path: "M283.2,661.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C294,666.2,289.1,661.3,283.2,661.3z M283.2,678.3c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C289.3,675.4,286.5,678.3,283.2,678.3z"
                }, {
                    id: "70750",
                    situation: "-1",
                    r: "2.5",
                    x: "292.3",
                    y: "692.2",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "São Bernardo Do Campo",
                    path: "M292.3,662.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C303.1,667.3,298.1,662.4,292.3,662.4z M292.3,679.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 s6.1,2.7,6.1,6.1C298.4,676.6,295.6,679.4,292.3,679.4z"
                }, {
                    id: "66893",
                    situation: "-1",
                    r: "2.5",
                    x: "306.3",
                    y: "689.3",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Mauá",
                    path: "M306.3,659.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C317.1,664.4,312.2,659.5,306.3,659.5z M306.3,676.5c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C312.4,673.7,309.6,676.5,306.3,676.5z"
                }, {
                    id: "70572",
                    situation: "-1",
                    r: "2.5",
                    x: "299.1",
                    y: "687.8",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Santo André",
                    path: "M299.1,658c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C309.9,662.9,305,658,299.1,658z M299.1,675c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C305.2,672.2,302.4,675,299.1,675z"
                }, {
                    id: "69213",
                    situation: "-1",
                    r: "2.5",
                    x: "289.4",
                    y: "705.2",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Praia Grande",
                    path: "M289.4,675.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C300.2,680.3,295.3,675.4,289.4,675.4z M289.4,692.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C295.5,689.6,292.7,692.4,289.4,692.4z"
                }, {
                    id: "71218",
                    situation: "-1",
                    r: "2.5",
                    x: "296.1",
                    y: "701.3",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "São Vicente",
                    path: "M296.1,671.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C306.9,676.4,302,671.5,296.1,671.5z M296.1,688.5c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C302.2,685.7,299.4,688.5,296.1,688.5z"
                }, {
                    id: "70718",
                    situation: "-1",
                    r: "2.5",
                    x: "303.3",
                    y: "700.2",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Santos",
                    path: "M303.3,670.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C314.1,675.3,309.2,670.3,303.3,670.3z M303.3,687.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C309.4,684.5,306.6,687.3,303.3,687.3z"
                }, {
                    id: "64750",
                    situation: "-1",
                    r: "2.5",
                    x: "310.9",
                    y: "697.6",
                    estado: "SP",
                    regiao: "sudeste",
                    cidade: "Guarujá",
                    path: "M310.9,667.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C321.7,672.7,316.8,667.8,310.9,667.8z M310.9,684.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C317,682,314.2,684.8,310.9,684.8z"
                }, {
                    id: "57053",
                    situation: "-1",
                    r: "6.3",
                    x: "575.2",
                    y: "535.1",
                    estado: "ES",
                    regiao: "sudeste",
                    isCapital: "true",
                    cidade: "Vitória",
                    path: "M575.2,505.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C586,510.2,581.1,505.3,575.2,505.3z M575.2,522.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C581.3,519.5,578.5,522.3,575.2,522.3z"
                }, {
                    id: "57037",
                    situation: "-1",
                    r: "2.5",
                    x: "565.7",
                    y: "546.0",
                    estado: "ES",
                    regiao: "sudeste",
                    cidade: "Vila Velha",
                    path: "M565.7,516.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C576.5,521.1,571.6,516.2,565.7,516.2z M565.7,533.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C571.8,530.4,569,533.2,565.7,533.2z"
                }, {
                    id: "56251",
                    situation: "-1",
                    r: "2.5",
                    x: "562.9",
                    y: "530.6",
                    estado: "ES",
                    regiao: "sudeste",
                    cidade: "Cariacica",
                    path: "M562.9,500.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C573.7,505.7,568.8,500.8,562.9,500.8z M562.9,517.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C569,515,566.2,517.8,562.9,517.8z"
                }, {
                    id: "56995",
                    situation: "-1",
                    r: "2.5",
                    x: "576.3",
                    y: "521.9",
                    estado: "ES",
                    regiao: "sudeste",
                    cidade: "Serra",
                    path: "M576.3,492.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C587.1,497,582.2,492.1,576.3,492.1z M576.3,509.1c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C582.4,506.3,579.6,509.1,576.3,509.1z"
                }, {
                    id: "54038",
                    situation: "-1",
                    r: "2.5",
                    x: "220.5",
                    y: "460.1",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Uberlândia",
                    path: "M220.5,430.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C231.3,435.2,226.4,430.3,220.5,430.3z M220.5,447.3c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C226.6,444.5,223.8,447.3,220.5,447.3z"
                }, {
                    id: "54011",
                    situation: "-1",
                    r: "2.5",
                    x: "236.4",
                    y: "499.6",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Uberaba",
                    path: "M236.4,469.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C247.2,474.7,242.3,469.8,236.4,469.8z M236.4,486.8c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C242.5,484,239.7,486.8,236.4,486.8z"
                }, {
                    id: "48658",
                    situation: "-1",
                    r: "2.5",
                    x: "421.1",
                    y: "357.1",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Montes Claros",
                    path: "M421.1,327.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C431.9,332.2,427,327.3,421.1,327.3z M421.1,344.3c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C427.2,341.5,424.4,344.3,421.1,344.3z"
                }, {
                    id: "41335",
                    situation: "-1",
                    r: "2.5",
                    x: "396.6",
                    y: "511.3",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Betim",
                    path: "M396.6,481.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C407.4,486.4,402.5,481.5,396.6,481.5z M396.6,498.5c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C402.7,495.7,399.9,498.5,396.6,498.5z"
                }, {
                    id: "43710",
                    situation: "-1",
                    r: "2.5",
                    x: "405.2",
                    y: "506.3",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Contagem",
                    path: "M405.2,476.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C416,481.4,411.1,476.5,405.2,476.5z M405.2,493.5c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C411.3,490.7,408.5,493.5,405.2,493.5z"
                }, {
                    id: "47333",
                    situation: "-1",
                    r: "2.5",
                    x: "446.2",
                    y: "606.8",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Juiz De Fora",
                    path: "M446.2,577c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C457,581.9,452.1,577,446.2,577z M446.2,594c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C452.3,591.2,449.5,594,446.2,594z"
                }, {
                    id: "45535",
                    situation: "-1",
                    r: "2.5",
                    x: "515.6",
                    y: "457.5",
                    estado: "MG",
                    regiao: "sudeste",
                    cidade: "Governador Valadares",
                    path: "M515.6,427.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C526.4,432.6,521.5,427.7,515.6,427.7z M515.6,444.7c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C521.7,441.9,518.9,444.7,515.6,444.7z"
                }, {
                    id: "41238",
                    situation: "-1",
                    r: "6.3",
                    x: "419.6",
                    y: "506.9",
                    estado: "MG",
                    regiao: "sudeste",
                    isCapital: "true",
                    cidade: "Belo Horizonte",
                    path: "M419.6,477.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C430.4,482,425.5,477.1,419.6,477.1z M419.6,494.1c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C425.7,491.3,422.9,494.1,419.6,494.1z"
                }, {
                    id: "60011",
                    situation: "-1",
                    r: "6.3",
                    x: "439.1",
                    y: "660.6",
                    estado: "RJ",
                    regiao: "sudeste",
                    isCapital: "true",
                    cidade: "Rio de Janeiro",
                    path: "M439.1,630.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C449.9,635.7,445,630.8,439.1,630.8z M439.1,647.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C445.2,645,442.4,647.8,439.1,647.8z"
                }, {
                    id: "59250",
                    situation: "-1",
                    r: "2.5",
                    x: "404.8",
                    y: "638.2",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Volta Redonda",
                    path: "M404.8,608.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C415.6,613.3,410.7,608.4,404.8,608.4z M404.8,625.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C410.9,622.6,408.1,625.4,404.8,625.4z"
                }, {
                    id: "58777",
                    situation: "-1",
                    r: "2.5",
                    x: "442.2",
                    y: "636.6",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Petrópolis",
                    path: "M442.2,606.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C453,611.7,448.1,606.8,442.2,606.8z M442.2,623.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C448.3,621,445.5,623.8,442.2,623.8z"
                }, {
                    id: "58971",
                    situation: "-1",
                    r: "2.5",
                    x: "453.0",
                    y: "648.6",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "São Gonçalo",
                    path: "M453,618.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C463.8,623.7,458.9,618.8,453,618.8z M453,635.8c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C459.1,633,456.3,635.8,453,635.8z"
                }, {
                    id: "58653",
                    situation: "-1",
                    r: "2.5",
                    x: "451.9",
                    y: "658.1",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Niterói",
                    path: "M451.9,628.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C462.7,633.2,457.8,628.3,451.9,628.3z M451.9,645.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C458,642.5,455.2,645.3,451.9,645.3z"
                }, {
                    id: "58335",
                    situation: "-1",
                    r: "2.5",
                    x: "438.8",
                    y: "645.8",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Duque De Caxias",
                    path: "M438.8,615.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C449.6,620.8,444.7,615.9,438.8,615.9z M438.8,632.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C444.9,630.2,442.1,632.9,438.8,632.9z"
                }, {
                    id: "59013",
                    situation: "-1",
                    r: "2.5",
                    x: "429.8",
                    y: "651.3",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "São João De Meriti",
                    path: "M429.8,621.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C440.6,626.4,435.7,621.5,429.8,621.5z M429.8,638.5c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C435.9,635.7,433.1,638.5,429.8,638.5z"
                }, {
                    id: "58041",
                    situation: "-1",
                    r: "2.5",
                    x: "427.3",
                    y: "644.0",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Belford Roxo",
                    path: "M427.3,614.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C438.1,619.2,433.2,614.3,427.3,614.3z M427.3,631.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C433.4,628.5,430.6,631.3,427.3,631.3z"
                }, {
                    id: "58696",
                    situation: "-1",
                    r: "2.5",
                    x: "420.1",
                    y: "653.1",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Nova Iguaçu",
                    path: "M420.1,623.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C430.9,628.2,426,623.3,420.1,623.3z M420.1,640.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C426.2,637.5,423.4,640.3,420.1,640.3z"
                }, {
                    id: "58190",
                    situation: "-1",
                    r: "2.5",
                    x: "521.9",
                    y: "605.3",
                    estado: "RJ",
                    regiao: "sudeste",
                    cidade: "Campos Dos Goytacazes",
                    path: "M521.9,575.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C532.7,580.4,527.8,575.5,521.9,575.5z M521.9,592.5c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 c3.4,0,6.1,2.7,6.1,6.1C528,589.7,525.2,592.5,521.9,592.5z"
                }]
            },
            nordeste: {
                path: "M98.3,512.9l16.8,4.7l0,0l0.4,0.1l6.1-29.4l-5.5-22.8l26.5-63.6l34.9-12.9l23.8-20l17.3-5.6 l14,8.6l19.2-6.1l3.3-18.4l-8-9.9l-1.3-17l13.4-15l1.7-7.8l-6.6-16l3.4-11.8l-7.5-7.5l6.2-14.1l14.5-24.1l8.4-0.8l16.2-10.9l6-11.5 l-0.4-0.8l-0.7-1.4l-9.4,2.5l-15.4-7.7l-39.8-15.4l-4.3,6.1l-17,2.8l-9.3,8.5l-8.5,1.9L181.9,213l-5.2-3.7l4.2-8.8l-0.7-1.8 l-5.3-3.1l4.6-14.7l6.6-9.4l-1.3-1.7l-11.7,1.1l8.1-10.2l0.6-6.1L171.5,143l-13.2-3.9l-4.4,5.8h-6.2l-2.2-10.9l-0.9-2.4l-3,0.8 l-7.2-3.4l-18.5-5.6l-2.9,12v17.1l-8.7,12.9l-1.3,9.4L94,186v14.1l-11.1,12.4L75,229.4l-25.7,38.2l-14.9,3.6L15,289.7l11.2,5.3h11.6 l17,17.4l2,44.1l-6.9,18.7l-5.3,5.3l8,4.7l2,9.7l17.7,22.2l14.9-3.4l9.7,5.6v15L82.1,441L72,462.9l9.8,15l10.9,11l-3,5.1L98.3,512.9 z M460.2,588.1L448.1,558l15.7-2.1l5.5-23.3l0-0.1l-4.5-7.6l-4.8-15l0.8-7.2l-6.5-10.9L442.9,476l-6.6,2.7l-5.8-7.9l-15.7-4.6 l-10.7-8.8l-24,18.8l-8.5,5.1l-3.3-0.7l-5.9,6.6l-3,5.9l-8.3,2.1l-7.9-1l-1.3-8l-7.4-8.6l-0.8-5.8l-2.4-7.1l-8.5-4.5l-7.1,6 l-9.6,3.3l-10.3,14.2l-18.1,2l-11.2,8.5l-12.3,2.1l-11-7.9l-9.4-0.1l-12.1-3.3l-8.3,4.1v25.8l-17.1,23.4l-17.6,2.8l-12.6,8.2 l-13.9,1.3l-21.6-24.7l-0.1-0.1l-4.8-1.5l-0.6,0.6l-25.7,22.8l1.1,4.5l-9.3,11.2l2.2,6.6l15.8,10l-5.2,7.4l2.8,6.7l-7.7,9.7 l-0.7,10.5l9.7,6l-4.8,13.3l4.9,6.9l-2.2,3.1l2.8,14.2l-7.7,7.7l-2.5,11.3l12.7,21.9l2,17.6l-5.5,12.6l-0.9,9l19-6.4l49.7-31.3 l22.6,1.2l5.3,4.7l-3.1,8.4l9,7.3h10.1l6.5-4l16.5,5.2l26.5,19.2l20.8,2l14.9,15l3.7,8.9l3.9,3.3l25.4,2.1l23.8,12.4l7,7.4 l-4.1,10.8l-11.4,9.4l-5.5,11l-11,6.5l-3.9,10.4v6.5l12.8,14.1l-0.8,9.1l21.5,16.4l21-19.1l-0.7-24.8l0.1-0.3l18.5-53.6l-3-12 l-0.8-47l5.4-19.7l-2.7-12.1l4.7-12.8l-2.8-9.7l11.5-14.3l0.9-9.4l6.6-14l5,2.1l4.4,11.5l4.5-0.5l29-35.1l9.7-22.4l0.4-0.8l-8.9,1.5 L460.2,588.1z M329.5,224l-3.3,4.8l11.2,31.4l-5.5,15.2l0,0.1l1.8,9l3.5,26.2l10.4,47l15,21.1l-7.9,21.5l46.3,4.6l20.2,19.8 l13.6-8.6l7.9-11.9l-8.4-15.6l13.8-42.3h7.6l20.4-32.4l18.9-19.7l-0.3-0.2l0,0l-6-3.6l-20.5-23.2l-58.5-46.4L372.3,204l-42.7,3.8 l-0.8,0.1l-3.3,10.1L329.5,224z M457.5,348.6h-7.2l-3.9,12.7l18.1,4.3l12.2-10.8l22.5-7.5l3.6,1.8v6.8l-8,15.9l0,5.4l8.1,4.1 l15.6,0.8l5.2,7.1l4.2-1.3l4.6-19.2l7.4-5.9l15.7,9.4l20.2,0l18.4,1.4l-0.2-0.8l-9.7-44.7l-11.2-11.1l-32.5-1.2l-23.7-8.3 l-18.4-11.2l-0.6-0.4l-19.2,19.4L457.5,348.6z M554.5,375.6l-14.7-9l-5,3.8l-4.8,19.7l-7.5,2.5l-5.6-7.7l-15.9-0.8l-11.4-5.2v-7.8 l10.9-15.9l0.1-0.1v-4.1l-1.1-0.6l-21.2,7.1l-12.8,11.6l-19.7-4.2l-7.8,23.8l-0.1,0.2l8.7,15.4l-8.4,12.7l4.2,4.5l8.5-1.2l6.4,5.6 l15-6.2l25.3-18.2l12.3,4.2l5,5l-16,22.3l8,9.8l1.4,4.6h8.8l11.1-11.8l40.9-10.3l12.1-10.9l20.5-6.3l-0.2-0.7l-6.6-29.8l-0.2-0.8 l-19.1-1.3H554.5z M570.3,427.8l-40.8,10.1l-11.4,11.8H506l-1.7-5.7l-9.1-11l15.9-22l-2.7-2.7l-10.3-3.6l-24.6,17.7l-16.8,7l-6.8-6 l-8.7,1.2l-5.2-5.5l-14.7,9.3l-21-20.6l-0.1-0.1l-46-4.6l-2.4,6.8l4.7,13.3l-9.8,21.7l-9.6,3.6l-11.6,10l8.5,4.5l2.9,8.6l0.7,5 l7.4,8.6l1,6.8l5.3,0.6l6.5-1.8l2.7-5.2l7.1-8l3.7,0.9l7.4-4.4l25.7-20l11.9,9.8l16.2,4.7l5.1,6.9l6.6-2.7l11.9,16.5l18.3-13.8 l22.6,14.5l7.1,5.2l29.6-2.6l0.1,0l14.1-11.4l34.6,1.9l0.3-0.7h0l14.3-30.9l0.8-21.8l3.3-17.6h0l0.2-0.8l-18.8,5.7L570.3,427.8z M548.7,483.7l-13.9,11.4l-31.7,2.8l-7.8-5.8l-20.9-13.4l-16.9,12.7l5.8,9.8l0,0.1L511,530l17,17l0.3-0.3l0,0l47.2-45.5l5.5-14.9 l0.3-0.7l-32.4-1.8L548.7,483.7z M463.4,504.7l-0.5,4.9l4.6,14.4l4.8,8.1l-6.2,26.4l-13.9,1.8l10.5,26l7.4,6l9.6-1.7l0.7-0.9 l13.6-16.9l26-17.8l5.6-5.4l0.6-0.5l-17-16.8L463.4,504.7z M280.5,226.1l-7.8,0.7l-13.6,22.8l-5.3,12.1l7.3,7.3l-3.6,12.4l6.6,15.9 l-2.2,9.4L249,321.4l-0.1,0.1l1.1,15l8.3,10.3l-3.7,21.3l-22,7.1l-14-8.6l-15.8,5.2l-24,19.9l-34,12.6l-25.7,61.6l0,0.1l5.4,22.4 l-6.4,30.2l0.7,0.2l13.5,4.5l21.2,24.3l11.7-1l12.5-8.1l17.4-2.7l16.2-21.7v-26.5l10.6-5l12.7,3.9l9.7,0l10.8,7.4l10.3-1.9l11.4-8.7 l17.7-2l10-13.8l10.2-3.6l21-18l8.8-3.2l8.8-19.6l-4.6-13.2l11.2-30.4l0.1-0.2l-14.6-20.3L334.6,311l-3.5-26.2l-2-9.6l5.4-15.1 l-11.4-31.7l3-4.4l-3.7-5.7l3.6-11l-0.7-0.2l-8.3-2.2l-12.2-2.3l0,0l-0.4-0.1l0,0l-0.4-0.1l-6.1,11.9L280.5,226.1z",
                cidades: [{
                    id: "38490",
                    situation: "-1",
                    r: "6.3",
                    x: "438.5",
                    y: "645.2",
                    estado: "BA",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Salvador",
                    path: "M438.5,615.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C449.3,620.3,444.4,615.4,438.5,615.4z M438.5,632.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C444.6,629.6,441.8,632.4,438.5,632.4z"
                }, {
                    id: "35157",
                    situation: "-1",
                    r: "2.5",
                    x: "433.1",
                    y: "607.2",
                    estado: "BA",
                    regiao: "nordeste",
                    cidade: "Feira De Santana",
                    path: "M433.1,577.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C443.9,582.3,439,577.4,433.1,577.4z M433.1,594.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C439.2,591.6,436.4,594.4,433.1,594.4z"
                }, {
                    id: "39659",
                    situation: "-1",
                    r: "2.5",
                    x: "318.1",
                    y: "737.3",
                    estado: "BA",
                    regiao: "nordeste",
                    cidade: "Vitória Da Conquista",
                    path: "M318.1,707.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C328.9,712.4,324,707.5,318.1,707.5z M318.1,724.5c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 s6.1,2.7,6.1,6.1C324.2,721.7,321.4,724.5,318.1,724.5z"
                }, {
                    id: "25313",
                    situation: "-1",
                    r: "6.3",
                    x: "591.0",
                    y: "455.6",
                    estado: "PE",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Recife",
                    path: "M591,425.8c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C601.8,430.7,596.9,425.8,591,425.8z M591,442.8c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C597.1,440,594.3,442.8,591,442.8z"
                }, {
                    id: "24570",
                    situation: "-1",
                    r: "2.5",
                    x: "577.3",
                    y: "463.8",
                    estado: "PE",
                    regiao: "nordeste",
                    cidade: "Jaboatão Dos Guararapes",
                    path: "M577.3,434c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C588.1,438.9,583.2,434,577.3,434z M577.3,451c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1 c3.4,0,6.1,2.7,6.1,6.1C583.4,448.2,580.6,451,577.3,451z"
                }, {
                    id: "24910",
                    situation: "-1",
                    r: "2.5",
                    x: "594.2",
                    y: "443.0",
                    estado: "PE",
                    regiao: "nordeste",
                    cidade: "Olinda",
                    path: "M594.2,417.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C605,422.6,600.1,417.7,594.2,417.7z M594.2,434.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C600.3,431.9,597.5,434.7,594.2,434.7z"
                }, {
                    id: "23817",
                    situation: "-1",
                    r: "2.5",
                    x: "542.2",
                    y: "467.0",
                    estado: "PE",
                    regiao: "nordeste",
                    cidade: "Caruaru",
                    path: "M542.2,437.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5S553,455,553,448 C553,442.1,548.1,437.2,542.2,437.2z M542.2,454.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C548.3,451.4,545.5,454.2,542.2,454.2z"
                }, {
                    id: "13897",
                    situation: "-1",
                    r: "6.3",
                    x: "447.3",
                    y: "257.8",
                    estado: "CE",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Fortaleza",
                    path: "M447.3,228c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C458.1,232.9,453.2,228,447.3,228z M447.3,245c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C453.4,242.2,450.6,245,447.3,245z"
                }, {
                    id: "13730",
                    situation: "-1",
                    r: "2.5",
                    x: "436.8",
                    y: "250.1",
                    estado: "CE",
                    regiao: "nordeste",
                    cidade: "Caucaia",
                    path: "M438.5,221.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C449.3,226.2,444.4,221.3,438.5,221.3z M438.5,238.3c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C444.6,235.5,441.8,238.3,438.5,238.3z"
                }, {
                    id: "20516",
                    situation: "-1",
                    r: "6.3",
                    x: "594.2",
                    y: "391.5",
                    estado: "PB",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "João Pessoa",
                    path: "M594.2,361.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C605,366.6,600.1,361.7,594.2,361.7z M594.2,378.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C600.3,375.9,597.5,378.7,594.2,378.7z"
                }, {
                    id: "19810",
                    situation: "-1",
                    r: "2.5",
                    x: "554.4",
                    y: "406.4",
                    estado: "PB",
                    regiao: "nordeste",
                    cidade: "Campina Grande",
                    path: "M554.4,376.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C565.2,381.5,560.3,376.6,554.4,376.6z M554.4,393.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C560.5,390.8,557.7,393.6,554.4,393.6z"
                }, {
                    id: "09210",
                    situation: "-1",
                    r: "6.3",
                    x: "203.1",
                    y: "198.5",
                    estado: "MA",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "São Luís",
                    path: "M203.1,168.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C213.9,173.6,209,168.7,203.1,168.7z M203.1,185.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C209.2,182.9,206.4,185.7,203.1,185.7z"
                }, {
                    id: "27855",
                    situation: "-1",
                    r: "6.3",
                    x: "555.8",
                    y: "513.4",
                    estado: "AL",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Maceió",
                    path: "M555.8,483.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C566.6,488.5,561.7,483.6,555.8,483.6z M555.8,500.6c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C561.9,497.8,559.1,500.6,555.8,500.6z"
                }, {
                    id: "17612",
                    situation: "-1",
                    r: "6.3",
                    x: "581.5",
                    y: "338.9",
                    estado: "RN",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Natal",
                    path: "M581.5,309.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C592.3,314,587.4,309.1,581.5,309.1z M581.5,326.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C587.6,323.3,584.8,326.1,581.5,326.1z"
                }, {
                    id: "12190",
                    situation: "-1",
                    r: "6.3",
                    x: "264.7",
                    y: "289.2",
                    estado: "PI",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Teresina",
                    path: "M264.7,259.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C275.5,264.3,270.6,259.4,264.7,259.4z M264.7,276.4c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C270.8,273.6,268,276.4,264.7,276.4z"
                }, {
                    id: "31054",
                    situation: "-1",
                    r: "6.3",
                    x: "497.4",
                    y: "561.9",
                    estado: "SE",
                    regiao: "nordeste",
                    isCapital: "true",
                    cidade: "Aracaju",
                    path: "M497.4,532.1c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C508.2,537,503.3,532.1,497.4,532.1z M497.4,549.1c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C503.5,546.3,500.7,549.1,497.4,549.1z"
                }]
            },
            norte: {
                path: "M307.5,656.4l1.1-6l-3.1-2.5l-18.4-1.7l-10.6-10.7l-2.1-5.2l3.9-11.2l-2-13.5l1.1-6.1l-18.8-5.3 l-10.6-9.1h-15.9l-0.6,1.6l-3.6,1l-4.1,3.3l1.3,7.3l-4.9,4.6l-12.7,3.9l-6,8.5H197l-9.6,3.2l-6.7-2.9l-5.9,0.3l-8.6,6.3v8.3l4.5-2.7 l3.6-2.5h14.1l3.6-3.2l2.2,1.5l1.4,7.9l-2.6,9.2l3.2,8.8l-1.4,4l5.9,14.4l7.8,5.9l5,1.4l4.2,6.8l5,1l11-1.4l5.9,3.3l2.2-1.1h2.6 l3.2,4.3l9.2,5.3l7.3,1.1l7.8,8.8l14.6-1.3l6.6,2.5l-0.7-0.3l3.9-4l5-6.4l4.9-8.1l3.1-6.1l1.3-9.3L306,661L307.5,656.4z M516.7,402.4l1,2.2l7.3,0.4l3.2-2.2l-1-2l-2.2-0.4L516.7,402.4z M515.7,407.9l-5,3.8v5l-3.3,2l-0.6,9.2l2.5,1.4l-3.3,4.2l2.1,4.7 l-0.6,2.5l3.6,3.2l6.8-2.2l3.2,2.2l7.3-0.6l5.9-4.6l2.2,1l2.8-1.4l6.8-0.6l1.7-2.2l-0.4-2.2l4.6-4.6l6.4-15.5l-16-3.2l-8.5,2 L515.7,407.9z M535.2,406l-0.4-1.4l-2.8-1l-3.6,2.2l2,1.7L535.2,406z M501.9,422.8l1.4-2.8l-1.4-0.6l-2.2,3.3H501.9z M489.2,426.1 l-4,3.2l-2.2,4.5l1.7,1.4l7.4-3.6l4.6-7.3l1.4-6.4l-6.4,1.8L489.2,426.1z M595.5,653.3l-1.7-5.2l4.6-5.6l-0.6-2.4l12.1-10.6 l-2.1-0.7l-10-2.8l-5.2-11.3l1.1-2l-4.5-4.3l-5.9-8.5l5.2-12.6l5.6-3.1v-4.9l-1.8-1.5l-6.6,1.8l-9.9-12.3l-0.8-4.3l-5.6-3.2l4.2-4.2 l3.1-8.2l-1-20.1l-7.1-6.8h-5.3l-6.3-3.5l-2.9,2.6l4.2,1l5.3,3.3l-4.6,15.5L548.4,551l-7.8,4.2v2.8l-2.2,9.3l3.2,5.9l-4.5,16.2 l-9.5,12l-10.5,17.2l-11,28v27.9l3.2,8.2l10.3-14.4l10,0.6l6,12.8l3.1-4.9l10.6,2.8l2.1,4.9l5.3-3.2l9.8,1.8l-0.4-3.6h5l4.3,5.4 l16.2,1.4l2.9-5.3l5.7,0.7l1.5-4.3l-4.3-2.6l0.4-7.1l3.3-4.3L600,660l2-2.6L595.5,653.3z M39.4,575.9l-19.1-10l-5.4,3.8l-0.1,3.8 v0.4l-0.3,7.1l-3.8,2l-0.7,4l6.3,4.6l-1.7,2.2l4.6,5.9l5.9,7.8l6.3,6.4l2,5.6l-3.6,5l1,1l16.7,1l6.4,10.9l12.4-0.4l16.3-13.2 l2.2,3.6l-1.4,5.2l2.2,24.3l4.6,2l6.8-3.2l10.5-1l14.2,0.4l2.6,2.2l8.2-3.6l5.2-6.8l6.8-0.4l2.2-3.2l11.4-7.8l5.2-3.1v-5.7l-72-37.8 L39.4,575.9z M212.6,333.2l-0.6,5l2.2,4.6l2.2,7.8l2,5.6l13.4,1.4l0.1,0.6l8.4,6.7l11.6,21.9l3.2,27.3l-1.1,6.7l-2,1.4l14.9,12.3 l2.1-1.4l2.9-12.4l8.4-4.7l4.9,2.2l6.3,4.5l5-2.9l1.3-7.7l5.2-4l1-4.7l7.1-4l18.4-1.1l-2.1-18.4l-3.5-2.4l-13.1-10.6l-0.6-8.5 l-4.6-2.8l-0.4-4l2.2-11.4l-0.4-7.4l6.8-7.3l-1.5-4.2l-2.6-8.2l-2.6-1l-3.8-2.6l1-9.2l-3.6-4.6l-9.2,1.4l1,4.2l-12,10.9l-2.6-0.4 l-5.9,3.2l-3.6,3.2l-8.4,2.2l-6.8-2l-2.2,2.2l-6.8,3.2l0.6,5.9l-3.2,2.2l-10.5-7.8l-3.2,2.2l-10.5-0.7l-3.6-4.9h-7.8l-2-1.1 l-2.6,0.8l1,2L212.6,333.2z M358,513.9l23.8-59.9l-15.5-9.4l-4.8,0.1l-13.9-2.8l-15.8-23.5l-2-18l-17.9,1.1l-5.6,3.2l-1,4.5l-5.2,4 l-1.4,7.9l-7.5,4.3l-7.5-5.4l-3.3-1.5l-6.1,3.6l-2.8,12.3l-4.5,3.2l-18.5-15.2l1.8-2.2l1.4-1l0.8-5.2l-3.2-26.6l-11.2-21.1l-7-5 l-13.9,8.2l-0.6,4.2l-4.6,6.3l-3.1-2.2l-5.6,4.6l-9.2,3.8l-1,2.6l-7.8,8.2l-2.2-1l0.6-5.9l-2-0.4l-5.9,3.6l-5.9,2.2l-14.6-9.5 l-3.2,0.7l-6.8-17.7l-2-2.2l-9.9,8.9l-5.6-3.6h-2.2l-1.4,2.8l0.7,0.6l-5.3,1.8l-27.5,1.4l-0.6,12.4l5.2,1.3l6.3,1l2.2,4.9l-1.4,2.6 l-6.8-1.4l-9.5,4.2l0.6,16l9.6,8.2v6.4l4,6.3l-7.3,60l-3.2,6.3l-2,3.2l-5.6-3.6l-9.9,1l-2.9,4.6l-19.7,5l-20.5,15.2l-0.4,7.8 l-5.2,10.5l1,11l-3.8,2.8l17.6,9.3L93,586.5l70.7,37.2V621l10.5-7.7l7.8-0.3l6.1,2.5l9.1-3.1h3.6l5.7-8.1l13-4l3.5-3.1l-1.4-7.1 l6.4-4.5l2.2-0.4l1-2.1h18.1l10.9,9.3l18.8,4.3l61.9-3.3l1.4-8.8v-8.2l1-4.7l4.5-7.9l-6-11L358,513.9z M525.2,599.9l8.9-11.9 l3.8-14.8l-2.8-5.9l2.4-10v-3.8l9.1-4.9l9.9-10.6l3.9-13l-2.5-2l-8.4-1.8l18-17.6l7-1.7l12.6-17.3l3.1-9.1l6.4-5.6l0.3-6.7l3.6-5.4 l0.4-3.3v-0.8l3.5-6.3v-8.4l2.5-7.5l0.6,0.6l-3.9-4.6l-5.9,0.7l-4.6-4l-10.6-4.2l-3.6,1.4l-4.6-1.7l-10,4.6l-7.7,10.5l0.4,2.6 l-1,1.5l-4-1l-12,9.5l-7.8,15.6l-2.2,2.2l-0.4-3.6l5-8.8l1-5.6l-1.7-1.7l-6.8,3.1l-2-1.7l-3.2-2.6l-5.9,2h-4.6l-2.2-1l-4.2,4.2 l-3.1-0.8l-1.5-3.9l5.6-0.6l1.4-5.9l-2.2-4.6l-0.7-6.8l-3.2-0.4l-8.2,6.3l-17.6,9.2l1.4,12l-3.2-4.6v-9.2L464,439l14.5-5.2l2.9-3.6 l-11.6-3.6l-5.7-13.5l-1.7-3.2L457,407l-4-14.5l0.6-4.3l-6.7-8.1l-2.1-4.6l-10.9-3.6l-7.5-5.3l-6.6-1.3l-1.7-4.6v-7.3l0-0.4l-4-3.8 l-14.9,2.4h-5.9l-4.2,5.7l4.6,4.9l0.6,2.5l-5.2,1.4l-12.8-2.6l-3.2,2.4l-9.2-2l-7.3,5.9h-5.9l-5.6,3.6L341,373l-7.3,6.6l-3.6,0.6 l0,0.4l4.2,37.8l14.6,21.2l3.6,0.7l9.3,1.7h5.2l5.7,3.8l5.9,3.3l6.4,4.2l-0.4,1l-24.3,60.9l-15.8,37.8l5.4,9.9l0.4,0.6l10,18.5v0.3 l0.4,9.9l9.9,8.9l2.1,2.9l4.2,1.8l2,2.1l136.7,8.4L525.2,599.9z M427.2,363.9l7.9,5.6l11.4,3.8l2.5,5.4l7.1,8.5l-0.6,4.9l3.6,13 l5.2,2.6l2.1,4l5.3,12.6l11.7,3.8l3.3-2.5l2.2-6.4l2-2.6l5.9-5l-0.4-5.2l11.9-6.3l6.4-8.8l10-10.5l0.4-5.9l-2.7-5.6l-10-4.6 l-3.2-3.2l-1.4-4.2l-2.8-6.3l-8.2-33.3l-7.3-6.4l-2.2,4.6l-2,4.6l-6.3,8.2l-12.4,23.4l-5.6,5.3l-5.9,1.5l-4.2-3.2l-5,1l-4.6-1.5 l-4.2,2.2l-6.8,1.5l-5-3.8l-4.7-0.4v5.5l1,2.6L427.2,363.9z",
                cidades: [{
                    id: "04278",
                    situation: "-1",
                    r: "6.3",
                    x: "561.9",
                    y: "435.7",
                    estado: "PA",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Belém",
                    path: "M561.9,405.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C572.7,410.8,567.8,405.9,561.9,405.9z M561.9,422.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C568,420.1,565.2,422.9,561.9,422.9z"
                }, {
                    id: "04154",
                    situation: "-1",
                    r: "2.5",
                    x: "572.7",
                    y: "428.4",
                    estado: "PA",
                    regiao: "norte",
                    cidade: "Ananindeua",
                    path: "M572.7,398.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C583.5,403.5,578.6,398.6,572.7,398.6z M572.7,415.6c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C578.8,412.8,576,415.6,572.7,415.6z"
                }, {
                    id: "05355",
                    situation: "-1",
                    r: "2.5",
                    x: "420.8",
                    y: "462.2",
                    estado: "PA",
                    regiao: "norte",
                    cidade: "Santarém",
                    path: "M420.8,432.4c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C431.6,437.3,426.7,432.4,420.8,432.4z M420.8,449.4c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C426.9,446.6,424.1,449.4,420.8,449.4z"
                }, {
                    id: "02550",
                    situation: "-1",
                    r: "6.3",
                    x: "312.6",
                    y: "478.8",
                    estado: "AM",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Manaus",
                    path: "M312.6,449c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C323.4,453.9,318.5,449,312.6,449z M312.6,466c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C318.7,463.2,315.9,466,312.6,466z"
                }, {
                    id: "00035",
                    situation: "-1",
                    r: "6.3",
                    x: "225.0",
                    y: "605.0",
                    estado: "RO",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Porto Velho",
                    path: "M225,575.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C235.8,580.1,230.9,575.2,225,575.2z M225,592.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C231.1,589.4,228.3,592.2,225,592.2z"
                }, {
                    id: "06050",
                    situation: "-1",
                    r: "6.3",
                    x: "506.3",
                    y: "398.3",
                    estado: "AP",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Macapá",
                    path: "M506.3,368.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C517.1,373.4,512.2,368.5,506.3,368.5z M506.3,385.5c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C512.4,382.7,509.6,385.5,506.3,385.5z"
                }, {
                    id: "01392",
                    situation: "-1",
                    r: "6.3",
                    x: "146.2",
                    y: "633.5",
                    estado: "AC",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Rio Branco",
                    path: "M146.2,603.7c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C157,608.6,152.1,603.7,146.2,603.7z M146.2,620.7c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C152.3,617.9,149.5,620.7,146.2,620.7z"
                }, {
                    id: "03018",
                    situation: "-1",
                    r: "6.3",
                    x: "286.3",
                    y: "346.7",
                    estado: "RR",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Boa Vista",
                    path: "M286.3,316.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C297.1,321.8,292.2,316.9,286.3,316.9z M286.3,333.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C292.4,331.1,289.6,333.9,286.3,333.9z"
                }, {
                    id: "73440",
                    situation: "-1",
                    r: "6.3",
                    x: "552.4",
                    y: "628.0",
                    estado: "TO",
                    regiao: "norte",
                    isCapital: "true",
                    cidade: "Palmas",
                    path: "M552.4,598.2c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C563.2,603.1,558.3,598.2,552.4,598.2z M552.4,615.2c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1 C558.5,612.4,555.7,615.2,552.4,615.2z"
                }]
            },
            centroOeste: {
                path: "M596.6,424.3l2.6-12.2l6.3-6.3l-2.4-12.4l1.5-2l-3.2-4.4l-8.9-1l-5.2,9.6l-34-3.9l-7.7-10.5h-2.6 l0.9,8.3l-21.5-3.7l-12.4,7.6l-4.8-11.4l-14.6-3.9l-7.9,12.8l-12.9-27.9l-13.8-0.8l-18.6,28.1l-9.9,18.8l-8.4,42L407.6,472l-4.8-2 l-4.8,2.5l-15.8,29.4l-10.9,3.6l-13.9,20.4l-17.7,19l-4.7,18.5l0.7,24.4l1.5,12h5.8l5.7,4.5l-5,7.7l1,1h8l27.8,12.5l27.1,10.9 l9.1,5.9l11.5-9.9l12.1-17.8l31.8-6.1l5.5,2.8l10.5-8.7l29.2,1.7l17.9,1.7l18.1-14.4l0.6-17.4l-6.4-3.1l-1-4.9l12.4-19l-3.8-10.8 l-4.5-4.5l3.9-21.6l18.1-5.9v-9l-1.5-9.2l2.8-13.7l10.5-3.4l0.6-10h8.2l4.9,8.1h7.5l4.3-9.4l-1.6-13.8L596.6,424.3z M168.1,593.3 l4.6-8.4l17.5-12.6l10.4-11.8l14.6-2.8l7-3.4l45.8,15.7l10.7-7.2l16.6,2.5h4.4l4.1-6.9l9.8,1.1l8.5,18.8l10.3,6.5l-0.6-21.6l5-19.7 l18-19.4l14.4-21.2l10.7-3.5l15.6-29.1l7-3.7l3.6,1.5l10-18l8.4-41.9l9.8-18.6l-5.8-19.6l0.1-52.4l16.1-50.6l-250.6-15.3l-4.4-4.4 l-7.8-3.2l-4.4-6.1l-18.8-17l-0.7-19.4l-16.6-30.4l-6.4,12.6l-0.7,8v14.2l-3.8,19.8l-115.2,5.9l-2.1,11.7l3.5,25.2L10,288.6l3.2,7.5 L31,313.9l33.4,3.2l8.4,6.8l-2.6,13.4l-2.2,7.2l8.2,16.6l-2.6,19.1l-5.9,11.8l-9.2,15.1l-9.6,12l-5.5,5.5l16.3,12.9l-4.4,9.8 l6.5,11.4l-3.3,11.4l1.5,7.7l-5.1,5.5l12,13.5l1.4,26.6l4.1,2.4l66.3-0.7l-0.9,13.6l-3.3,9.6l5.5,16.6l18.3,8.3L168.1,593.3z M379.4,628l-27.3-12.8h-8.6l-3.8-3.4l4.8-7.1l-2.6-1.7h-7.4l-1.8-14.1l-13-8.3l-8.1-18.1l-5.9-1.2l-4,6.1H295l-15.7-1.8l-10.9,7.6 l-46.1-15.6l-6.4,3.1l-13.7,2.7l-10,11.3l-17.1,12.3l-5.6,10.3l-13.5,55.1l-5.5,19.5l3.1,20.2l7.7,12.6l-1.7,49.7l2.6,1.8l5.6-2.6 l19.5,5.3l16,0.7l10.6-6.9l11.3,8l11.4,0.7l8.7,24.6l2.4,20.8L252,821l2.4,5.1l7.1,2.6l19.3-8.4l11.3,6.8l6.3-4.3l4.9-19.6 l10.1-10.1l1.7-10.1l41.1-29.5l14.9-20.2v-6l8.9-9.3l6.1-16.1l13-19.5l14.3-10.4l1.6-26.9l-9.2-6.1L379.4,628z",
                cidades: [{
                    id: "93734",
                    situation: "-1",
                    r: "6.3",
                    x: "469.4",
                    y: "535.9",
                    estado: "GO",
                    regiao: "centroOeste",
                    isCapital: "true",
                    cidade: "Goiânia",
                    path: "M469.4,505.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C480.2,510.5,475.3,505.6,469.4,505.6z M469.4,522.6c-3.4,0-6-2.7-6-6c0-3.4,2.7-6,6-6c3.4,0,6,2.7,6,6 C475.4,519.8,472.6,522.6,469.4,522.6z"
                }, {
                    id: "92274",
                    situation: "-1",
                    r: "2.5",
                    x: "468.1",
                    y: "548.6",
                    estado: "GO",
                    regiao: "centroOeste",
                    cidade: "Aparecida De Goiânia",
                    path: "M468.1,518.3c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5 s10.8-12.5,10.8-19.5C478.9,523.2,474,518.3,468.1,518.3z M468.1,535.3c-3.4,0-6-2.7-6-6c0-3.4,2.7-6,6-6c3.4,0,6,2.7,6,6 C474.3,532.5,471.5,535.3,468.1,535.3z"
                }, {
                    id: "92215",
                    situation: "-1",
                    r: "2.5",
                    x: "497.4",
                    y: "519.9",
                    estado: "GO",
                    regiao: "centroOeste",
                    cidade: "Anápolis",
                    path: "M497.4,489.6c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C508.2,494.5,503.3,489.6,497.4,489.6z M497.4,506.6c-3.4,0-6-2.7-6-6c0-3.4,2.7-6,6-6c3.4,0,6,2.7,6,6 C503.4,503.8,500.6,506.6,497.4,506.6z"
                }, {
                    id: "90514",
                    situation: "-1",
                    r: "6.3",
                    x: "270.5",
                    y: "689.9",
                    estado: "MS",
                    regiao: "centroOeste",
                    isCapital: "true",
                    cidade: "Campo Grande",
                    path: "M270.5,659.9c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5c1.8,0,10.8-12.5,10.8-19.5 C281.3,664.8,276.4,659.9,270.5,659.9z M270.5,676.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1 C276.6,674.1,273.8,676.9,270.5,676.9z"
                }, {
                    id: "90670",
                    situation: "-1",
                    r: "6.3",
                    x: "219.8",
                    y: "486.8",
                    estado: "MT",
                    regiao: "centroOeste",
                    isCapital: "true",
                    cidade: "Cuiabá",
                    path: "M219.8,456.5c-6,0-10.8,4.8-10.8,10.8c0,7,9,19.5,10.8,19.5s10.8-12.5,10.8-19.5 C230.6,461.2,225.7,456.5,219.8,456.5z M219.8,473.4c-3.4,0-6-2.7-6-6s2.7-6,6-6c3.4,0,6,2.7,6,6C225.8,470.6,223,473.4,219.8,473.4z"
                }]
            }
        };
    }, {}],
    29: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = (i(l), t("../../js/libs/metrics")),
            c = i(r),
            o = t("../../js/libs/dom"),
            d = function() {
                function t(e) {
                    s(this, t), this.tabActive = "capitais";
                }
                return n(t, [{
                    key: "setList",
                    value: function(t) {
                        this.scenarioList = t;
                    }
                }, {
                    key: "tabClick",
                    value: function(t, e) {
                        this.$items.forEach(function(t) {
                            o.DOM.removeClass(t, "active");
                        });
                        var a = o.DOM.hasClass(t.target, "tab-item") ? t.target : o.DOM.closest(t.target, ".tab-item");
                        this.tabActive = o.DOM.attr(a, "data-name"), o.DOM.addClass(a, "active"), e || this.scenarioList.scrollToRegion.apply(this.scenarioList, [this.tabActive]);
                    }
                }, {
                    key: "setup",
                    value: function(t, e) {
                        var a = this;
                        e === !1 && (this.$container = t, this.$items = o.DOM.find("li", t), o.DOM.Event(t).on("click", function(t) {
                            a.tabClick(t);
                            var e = a.tabActive;
                            "centroOeste" == e && (e = "centro_oeste"), c["default"].click("grandes cidades lista", "aba_" + e);
                        })), this.$items.forEach(function(t) {
                            return o.DOM.removeClass(t, "active");
                        });
                        var i = o.DOM.findOne('[data-name="' + this.tabActive + '"]', this.$container);
                        o.DOM.addClass(i, "active");
                    }
                }, {
                    key: "activate",
                    value: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.tabActive !== t && this.tabClick({
                            target: o.DOM.findOne('[data-name="' + t + '"]', this.$container)
                        }, e);
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "ul",
                            children: [{
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    children: ["CAPITAIS"],
                                    attrs: {
                                        className: "tab-item-label"
                                    }
                                }],
                                attrs: {
                                    className: "tab-item",
                                    "data-name": "capitais"
                                }
                            }, {
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    children: ["SUDESTE"],
                                    attrs: {
                                        className: "tab-item-label"
                                    }
                                }],
                                attrs: {
                                    className: "tab-item",
                                    "data-name": "sudeste"
                                }
                            }, {
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    children: ["NORDESTE"],
                                    attrs: {
                                        className: "tab-item-label"
                                    }
                                }],
                                attrs: {
                                    className: "tab-item",
                                    "data-name": "nordeste"
                                }
                            }, {
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    children: ["SUL"],
                                    attrs: {
                                        className: "tab-item-label"
                                    }
                                }],
                                attrs: {
                                    className: "tab-item",
                                    "data-name": "sul"
                                }
                            }, {
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    children: ["NORTE"],
                                    attrs: {
                                        className: "tab-item-label"
                                    }
                                }],
                                attrs: {
                                    className: "tab-item",
                                    "data-name": "norte"
                                }
                            }, {
                                tag: "li",
                                children: [{
                                    tag: "span",
                                    children: ["CENTRO-OESTE"],
                                    attrs: {
                                        className: "tab-item-label"
                                    }
                                }],
                                attrs: {
                                    className: "tab-item",
                                    "data-name": "centroOeste"
                                }
                            }],
                            attrs: {
                                className: "tabs",
                                config: this.setup.bind(this)
                            }
                        };
                    }
                }]), t;
            }();
        a["default"] = d;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45
    }],
    30: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = i(l),
            c = t("../../js/libs/dom"),
            o = t("../../js/libs/webservice.js"),
            d = i(o),
            u = t("../../js/utils"),
            h = {
                "1turno": 5568,
                "2turno": Object.keys(cities2t).length
            },
            f = h[window.page.round],
            p = function() {
                function t(e) {
                    var a = this;
                    s(this, t), this.data = void 0, this.request = (0, d["default"])().brazilExtract().then(function(t) {
                        return a.data = t;
                    }), r["default"].mount(e, this);
                }
                return n(t, [{
                    key: "blink",
                    value: function(t, e) {
                        if (e === !0) {
                            var a = t.getAttribute("data-value"),
                                i = t.getAttribute("data-old");
                            i && i !== a && (c.DOM.addClass(t, "change"), setTimeout(function() {
                                c.DOM.removeClass(t, "change");
                            }, 600)), t.setAttribute("data-old", a);
                        }
                    }
                }, {
                    key: "getProgressBarWidth",
                    value: function() {
                        var t = 0;
                        return this.data && (t = ((f - this.data.br.ap) / f * 100).toFixed(2) + "%"), {
                            width: t
                        };
                    }
                }, {
                    key: "getProgressCompleteClass",
                    value: function() {
                        return this.data.br.ap >= f ? "progress-country-bar-complete" : "";
                    }
                }, {
                    key: "getDescriptionLabel",
                    value: function() {
                        var t = f - parseInt(this.data.br.ap);
                        return u.is2T ? t > 1 ? "municípios no segundo turno já têm resultado definido" : "município no segundo turno já tem resultado definido" : t > 1 ? "municípios com apuração finalizada" : "município com apuração finalizada";
                    }
                }, {
                    key: "view",
                    value: function() {
                        if (this.data) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "h3",
                                    children: [0 == window.page.isMobile || "1turno" == window.page.round ? {
                                        tag: "b",
                                        children: ["Brasil"]
                                    } : {
                                        tag: "b",
                                        children: ["Cidades com 2º turno"]
                                    }],
                                    attrs: {
                                        className: "country-name"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "div",
                                        attrs: {
                                            className: "progress-country-bar " + this.getProgressCompleteClass(),
                                            style: this.getProgressBarWidth()
                                        }
                                    }],
                                    attrs: {
                                        className: "progress-country"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "span",
                                        children: [(0, u.formatNumber)(f - parseInt(this.data.br.ap))],
                                        attrs: {
                                            className: "counted",
                                            "data-old": "",
                                            "data-value": this.data.br.ap,
                                            config: this.blink.bind(this)
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["de"],
                                        attrs: {
                                            className: "counted-of"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [(0, u.formatNumber)(f)],
                                        attrs: {
                                            className: "counted-total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [this.getDescriptionLabel()],
                                        attrs: {
                                            className: "counted-label"
                                        }
                                    }, 0 == window.page.isMobile ? {
                                        tag: "span",
                                        children: ["Ver todos ", {
                                            tag: "i",
                                            attrs: {
                                                className: "icon icon-single-arrow-right"
                                            }
                                        }],
                                        attrs: {
                                            className: "view-all"
                                        }
                                    } : null],
                                    attrs: {
                                        className: "cities-counting"
                                    }
                                }]
                            };
                        }
                    }
                }]), t;
            }();
        a["default"] = p;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/libs/webservice.js": 50,
        "../../js/utils": 51
    }],
    31: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.Scroll = a.ScrollFixed = void 0;
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = (i(l), t("../../js/utils.js"), t("../../js/libs/dom"));
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1000 / 60);
            };
        }();
        var c = function() {
                function t() {
                    var e = this;
                    s(this, t), this.init(), this.Scroll = new o, r.DOM.Event(r.DOM.findOne("body")).on("click", ".btn-scroll-top", function() {
                        e.Scroll.TopPage(0, 1000, "easeInOutSine");
                    });
                }
                return n(t, [{
                    key: "init",
                    value: function() {
                        var t = 100,
                            e = 50,
                            a = r.DOM.findOne(".history");
                        window.addEventListener("load", function() {
                            document.addEventListener("scroll", function() {
                                var i = r.DOM.find(".history-item", a),
                                    s = e * i.length + t,
                                    n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                                n > s ? (r.DOM.addClass(r.DOM.findOne(".btn-scroll-top"), "show"), r.DOM.addClass(r.DOM.findOne(".main-search-city"), "fixed")) : (r.DOM.removeClass(r.DOM.findOne(".btn-scroll-top"), "show"), r.DOM.removeClass(r.DOM.findOne(".main-search-city"), "fixed"));
                            });
                        });
                    }
                }]), t;
            }(),
            o = function() {
                function t() {
                    s(this, t);
                }
                return n(t, [{
                    key: "TopPage",
                    value: function(t, e, a) {
                        var i = window.scrollY,
                            t = t || 0,
                            e = e || 2000,
                            a = a || "easeOutSine",
                            s = 0,
                            n = Math.max(0.1, Math.min(Math.abs(i - t) / e, 0.8)),
                            l = (Math.PI / 2, {
                                easeOutSine: function(t) {
                                    return Math.sin(t * (Math.PI / 2));
                                },
                                easeInOutSine: function(t) {
                                    return -0.5 * (Math.cos(Math.PI * t) - 1);
                                },
                                easeInOutQuint: function(t) {
                                    return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 5) : 0.5 * (Math.pow(t - 2, 5) + 2);
                                }
                            }),
                            r = function c() {
                                s += 1 / 60;
                                var e = s / n,
                                    r = l[a](e);
                                e < 1 ? (requestAnimFrame(c), window.scrollTo(0, i + (t - i) * r)) : window.scrollTo(0, t);
                            };
                        r();
                    }
                }, {
                    key: "To",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            a = t.offsetTop + e;
                        window.scroll(0, a);
                    }
                }]), t;
            }();
        a.ScrollFixed = c, a.Scroll = o;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/mithril": 45,
        "../../js/utils.js": 51
    }],
    32: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }

        function n(t, e) {
            if ("function" != typeof e && null !== e) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.SearchCityMobile = a.SearchCity = void 0;
        var r = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            c = t("../../js/libs/suggest"),
            o = i(c),
            d = t("../../js/libs/mithril"),
            u = i(d),
            h = t("../../js/libs/metrics"),
            f = i(h),
            p = t("../brazil-cities/script.jsx"),
            g = i(p),
            m = t("../lightbox/script.jsx"),
            v = i(m),
            y = t("../../js/utils"),
            b = t("../../js/libs/dom"),
            C = t("../favorite-management/script.jsx"),
            w = t("../mobile-modal/script.jsx"),
            N = i(w),
            M = window.page.isMobile && "1turno" == window.page.round ? {
                tag: "p",
                children: ["Buscar cidade"]
            } : {
                tag: "p",
                children: ["Mudar cidade"]
            },
            k = "btn-change",
            O = "Escreva o nome da cidade",
            S = "Escreva o nome da cidade que você quer favoritar",
            j = function(t, e) {
                return (0, y.toSlug)(t.name).length < (0, y.toSlug)(e.name).length ? -1 : 1;
            },
            x = function(t) {
                return '<li data-id="' + t.id + '"><span class="favorite-star is-favorite-' + C.favCities.isFavorite(t.id) + '"></span>' + (0, y.capitalizeName)(t.name) + ' <span class="uf">' + t.uf + "</span></li>";
            },
            E = function(t) {
                var e = b.DOM.attr(t, "data-id");
                return e ? e : void 0;
            },
            _ = function() {
                function t(e) {
                    var a = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return l(this, t), this.container = e, this.isOpen = !1, this.cfg = i, this.metrics = i.metrics, this.inputView = new z(this.cfg), this.buttonLabel = i.buttonLabel || M, this.buttonClass = i.buttonClass || k, this.showInput = i.showInput || !1, this.showInput ? void this.inputView.open(!1) : (y.actionEvents.bind("searchCityOpenFavorite", function() {
                        closeBigCitiesPage(null, !0), a.inputView.open(!0);
                    }), void u["default"].mount(e, this));
                }
                return r(t, [{
                    key: "destroy",
                    value: function() {
                        this.inputView.destroy();
                    }
                }, {
                    key: "open",
                    value: function() {
                        f["default"].click(this.metrics.localBtn, this.metrics.action, !1), this.inputView.open();
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "button",
                                children: [this.buttonLabel, " ", {
                                    tag: "i",
                                    attrs: {
                                        className: "icon-search"
                                    }
                                }],
                                attrs: {
                                    onclick: this.open.bind(this),
                                    type: "button",
                                    className: this.buttonClass
                                }
                            }],
                            attrs: {
                                className: "search-city"
                            }
                        };
                    }
                }]), t;
            }(),
            z = function() {
                function t() {
                    var e = this,
                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            changeRoute: !0
                        };
                    l(this, t), this.isOpen = u["default"].prop(!1), this.element = a.inputContainer, this.placeholder = a.placeholder || O, this.onSuggestSelect = a.onSuggestSelect || function() {}, this.route = a.changeRoute, this.showLightobx = a.showLightobx !== !1, this.metrics = a.metrics, this.closeOnEscEvent = function(t) {
                        if (!window.page.isMobile) {
                            switch (t.preventDefault(), t.stopPropagation(), t.type) {
                                case "click":
                                    var a = t.srcElement || t.target;
                                    do {
                                        if (b.DOM.hasClass(a, "suggest-form")) {
                                            return !0;
                                        }
                                    } while ((a = a.parentNode) && "BODY" != a.nodeName);
                                    e.close();
                                    break;
                                case "keyup":
                                    27 == t.keyCode && e.close();
                            }
                        }
                    }, u["default"].mount(this.element, this);
                }
                return r(t, [{
                    key: "destroy",
                    value: function() {
                        this.suggest.destroy(), this.close(), u["default"].mount(this.element, null);
                    }
                }, {
                    key: "start",
                    value: function(t, e) {
                        var a = this;
                        e || (0 == window.page.isMobile && y.actionEvents.bind("pageChange", function(t) {
                            "right" === t && a.close();
                        }), this.form = t, this.input = b.DOM.findOne('input[name="q"]', t), this.suggest = new o["default"](this.form, {
                            name: "city",
                            source: g["default"].getCities(),
                            cache: !0,
                            max_results: 5,
                            item: function(t) {
                                return t.name;
                            },
                            sort: function(t) {
                                return t.sort(j);
                            },
                            markup: x,
                            onSelect: function(t) {
                                var e = E(t);
                                if (e) {
                                    if (a.onSuggestSelect(e), a.isFavoriteTrigger === !0) {
                                        C.favCities.addItem(e), f["default"].click(a.metrics.localSuggest, "selecionar_e_favoritar_cidade");
                                    } else {
                                        switch (a.metrics.localSuggest) {
                                            case "modal suggest geolocation":
                                                f["default"].click(a.metrics.localSuggest, "escolher_cidade");
                                                break;
                                            default:
                                                f["default"].click(a.metrics.localSuggest, "selecionar_cidade");
                                        }
                                    }
                                    g["default"].setActive(e, {
                                        route: a.route
                                    }), f["default"].hit("city");
                                }
                                a.input.value = "", e && a.close();
                            },
                            onOpen: function() {
                                return a.showLightobx && v["default"].open("city");
                            },
                            onClose: function(t) {
                                "SELECT ITEM" !== t && v["default"].close();
                            },
                            events: {
                                mouseover: function(t) {
                                    b.DOM.addClass(t, "current");
                                },
                                mouseout: function(t) {
                                    b.DOM.removeClass(t, "current");
                                }
                            }
                        }));
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        var e = this;
                        this.isFavoriteTrigger = t, this.isOpen(!0), this.showLightobx && v["default"].open("city"), this.placeholder = t === !0 ? S : O, setTimeout(function() {
                            b.DOM.Event(document).on("keyup", e.closeOnEscEvent), b.DOM.Event(document).on("click", e.closeOnEscEvent), e.input.focus();
                        }, 1);
                    }
                }, {
                    key: "close",
                    value: function() {
                        0 != this.isOpen() && (this.isOpen(!1), v["default"].close(), b.DOM.Event(document).off("keyup", this.closeOnEscEvent), b.DOM.Event(document).off("click", this.closeOnEscEvent), this.input.value = "", u["default"].redraw());
                    }
                }, {
                    key: "isOpenClass",
                    value: function(t) {
                        return t + "-" + (this.isOpen() ? "open" : "close");
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "form",
                                    children: [{
                                        tag: "i",
                                        attrs: {
                                            className: "icon-search"
                                        }
                                    }, {
                                        tag: "i",
                                        attrs: {
                                            className: "icon-close",
                                            onclick: this.close.bind(this)
                                        }
                                    }, {
                                        tag: "input",
                                        attrs: {
                                            type: "text",
                                            className: "input",
                                            autocomplete: "off",
                                            name: "q",
                                            placeholder: this.placeholder,
                                            autofocus: "autofocus"
                                        }
                                    }],
                                    attrs: {
                                        config: this.start.bind(this)
                                    }
                                }],
                                attrs: {
                                    className: this.isOpenClass("search-form")
                                }
                            }],
                            attrs: {
                                className: "search-city-input is-favorite-" + (1 == this.isFavoriteTrigger)
                            }
                        };
                    }
                }]), t;
            }(),
            A = function(t) {
                function e(t) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return l(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, a));
                }
                return n(e, t), r(e, [{
                    key: "openModal",
                    value: function(t) {
                        if (t || (t = window.event), t.cancelBubble = !0, t.stopPropagation && t.stopPropagation(), "1turno" == window.page.round) {
                            N["default"].show({
                                type: "search-city",
                                onSuggestSelect: this.cfg.onSuggestSelect,
                                metricsLocal: this.metrics.localBtn
                            });
                        } else {
                            N["default"].show({
                                type: "modal-suggest",
                                classExtra: "modal-suggest",
                                metricsLocal: "bloco suggest"
                            });
                        }
                        f["default"].click(this.metrics.localBtn, this.metrics.action, this.metrics.city);
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "button",
                                children: [this.buttonLabel, " ", {
                                    tag: "i",
                                    attrs: {
                                        className: "icon-search"
                                    }
                                }],
                                attrs: {
                                    type: "button",
                                    className: this.buttonClass
                                }
                            }],
                            attrs: {
                                className: "search-city",
                                onclick: this.openModal.bind(this)
                            }
                        };
                    }
                }]), e;
            }(_);
        a.SearchCity = _, a.SearchCityMobile = A;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/suggest": 47,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14,
        "../lightbox/script.jsx": 18,
        "../mobile-modal/script.jsx": 22
    }],
    33: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.SearchCouncilmanMobile = a.SearchCouncilman = void 0;
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/suggest"),
            r = i(l),
            c = t("../../js/libs/mithril"),
            o = i(c),
            d = t("../../js/libs/metrics"),
            u = i(d),
            h = t("../brazil-cities/script.jsx"),
            f = i(h),
            p = t("../favorite-management/script.jsx"),
            g = t("../lightbox/script.jsx"),
            m = i(g),
            v = t("../../js/utils"),
            y = t("../../js/libs/dom"),
            b = "http://election.search.uol.com/?repository=election&fields=id,candidato-nome-urna,candidato-partido&format=jsonp&jsonp=%callback&sort=relevance&size=%max&e=%query&municipio-id=%cidade_id&candidato-cargo=13&ano=2016",
            C = function(t, e) {
                return (0, v.toSlug)(t["candidato-nome-urna"]).length < (0, v.toSlug)(e["candidato-nome-urna"]).length ? -1 : 1;
            },
            w = function(t) {
                return t = t.replace(/^\s+|\s+$/g, ""), t = (0, v.removeAccents)(t), t = encodeURIComponent(t).replace(/%20/g, "+AND+").replace(/'/g, "+AND+");
            },
            N = function(t) {
                return '<li data-id="' + t.id + '"><span class="search-favorite is-favorite-' + M(t.id) + '"></span> ' + (0, v.capitalizeName)(t["candidato-nome-urna"]) + " <span>" + t["candidato-partido"] + "</span></li>";
            },
            M = function(t) {
                t = t.split("-");
                var e = "city" + t[1],
                    a = t[2];
                return p.favCandidates.isFavorite(a, e);
            },
            k = function() {
                function t(e) {
                    var a = this;
                    s(this, t), this.form = e, this.input = y.DOM.findOne('input[name="q"]', e), this.suggest = new r["default"](this.form, {
                        source: b,
                        sourceParam: function(t) {
                            return t.replace("%cidade_id", f["default"].getActive().id);
                        },
                        cache: !0,
                        max_results: 5,
                        queryURL: w,
                        item: function(t) {
                            return t.name;
                        },
                        sort: function(t) {
                            return t.sort(C);
                        },
                        markup: N,
                        onSelect: function(t) {
                            a.onClose();
                            var e = t.getAttribute("data-id");
                            if (e) {
                                var i = e.split("-");
                                p.favCandidates.addItem(i[2], "city" + i[1]), v.actionEvents.trigger("changeCouncilmanTab", "favorites"), u["default"].click("bloco vereadores", "favoritar_vereador", !1);
                            }
                        },
                        onOpen: function() {
                            return m["default"].open("councilman");
                        },
                        onClose: function() {
                            return a.onClose;
                        },
                        events: {
                            mouseover: function(t) {
                                y.DOM.addClass(t, "current");
                            },
                            mouseout: function(t) {
                                y.DOM.removeClass(t, "current");
                            }
                        }
                    });
                }
                return n(t, [{
                    key: "onClose",
                    value: function() {
                        this.input.value = "", m["default"].close();
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.suggest.disable(), this.onClose();
                    }
                }]), t;
            }(),
            O = function() {
                function t(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    s(this, t), this.cfg = a, this.showInput = a.showInput || !1, this.inputView = new S(this.cfg), this.inputView.open(!1);
                }
                return n(t, [{
                    key: "destroy",
                    value: function() {
                        this.inputView.destroy();
                    }
                }]), t;
            }(),
            S = function() {
                function t(e) {
                    s(this, t), this.isOpen = o["default"].prop(!1), this.element = e.inputContainer, this.onSuggestSelect = e.onSuggestSelect || function() {
                        console.log("SearchCouncilmanInput no onSuggestSelect function!");
                    }, void 0 === e.changeRoute && (e.changeRoute = !0), o["default"].mount(this.element, this);
                }
                return n(t, [{
                    key: "destroy",
                    value: function() {
                        this.suggest.destroy(), this.close(), o["default"].mount(this.element, null);
                    }
                }, {
                    key: "start",
                    value: function(t, e) {
                        var a = this;
                        e || (this.form = t, this.input = y.DOM.findOne('input[name="q"]', t), this.suggest = new r["default"](this.form, {
                            source: b,
                            sourceParam: function(t) {
                                return t.replace("%cidade_id", f["default"].getActive().id);
                            },
                            cache: !0,
                            max_results: 5,
                            queryURL: w,
                            item: function(t) {
                                return t.name;
                            },
                            sort: function(t) {
                                return t.sort(C);
                            },
                            markup: N,
                            onSelect: function(t) {
                                var e = t.getAttribute("data-id");
                                if (e) {
                                    var i = e.split("-");
                                    p.favCandidates.addItem(i[2], "city" + i[1]), v.actionEvents.trigger("changeCouncilmanTab", "favorites"), u["default"].click("bloco vereadores", "favoritar_vereador", !1), a.input.value = "", a.onSuggestSelect();
                                }
                            },
                            onOpen: function() {},
                            onClose: function() {},
                            events: {
                                mouseover: function(t) {
                                    y.DOM.addClass(t, "current");
                                },
                                mouseout: function(t) {
                                    y.DOM.removeClass(t, "current");
                                }
                            }
                        }));
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = this;
                        this.isOpen(!0), setTimeout(function() {
                            t.input.focus();
                        }, 1);
                    }
                }, {
                    key: "isOpenClass",
                    value: function(t) {
                        return t + "-" + (this.isOpen() ? "open" : "close");
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [{
                                tag: "div",
                                children: [{
                                    tag: "form",
                                    children: [{
                                        tag: "i",
                                        attrs: {
                                            className: "icon-search"
                                        }
                                    }, {
                                        tag: "input",
                                        attrs: {
                                            type: "text",
                                            className: "input",
                                            autocomplete: "off",
                                            name: "q",
                                            placeholder: "Escreva o nome do candidato",
                                            autofocus: "autofocus"
                                        }
                                    }],
                                    attrs: {
                                        config: this.start.bind(this)
                                    }
                                }],
                                attrs: {
                                    className: this.isOpenClass("search-form")
                                }
                            }],
                            attrs: {
                                className: "search-city-input"
                            }
                        };
                    }
                }]), t;
            }();
        a.SearchCouncilman = k, a.SearchCouncilmanMobile = O;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/libs/suggest": 47,
        "../../js/utils": 51,
        "../brazil-cities/script.jsx": 2,
        "../favorite-management/script.jsx": 14,
        "../lightbox/script.jsx": 18
    }],
    34: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/dom"),
            r = t("../../js/utils"),
            c = t("../../js/libs/webservice.js"),
            o = i(c),
            d = t("../../js/libs/metrics"),
            u = i(d),
            h = "Eleicoes2016" + (window.page.site.interaction.twitter.hash ? "," + window.page.site.interaction.twitter.hash : ""),
            f = function(t) {
                return window.page.isBigCitiesPage ? "http://" + (window.page.host + window.page.basepath) + "/" + page.round + "/grandes-cidades/" : (t = t ? (0, r.toSlug)(t.si) + "/" + (0, r.toSlug)(t.an) + "/" : "", "http://" + (window.page.host + window.page.basepath) + "/" + page.round + "/" + t);
            },
            p = function(t) {
                var e = window.page.round;
                if ("2turno" == e && "uol" == window.page.site.name) {
                    return window.page.isCityPage ? window.page.site.colors.imageurl + "/2turno/" + window.city.id + ".jpg" : window.page.site.interaction.seo.shareImageBigCities || window.page.site.interaction.seo.shareImage;
                }
                try {
                    return window.page.site.interaction.share[e][t] ? window.page.site.interaction.share[e][t] : window.page.site.interaction.seo.shareImage;
                } catch (a) {
                    return window.page.site.interaction.seo.shareImage;
                }
            },
            g = function() {
                function t() {
                    return s(this, t), l.DOM.Event(document).on("click", ".icon-facebook, .icon-twitter, .icon-whatsapp", this.click.bind(this)), window.page.site.interaction.disabled === !0 ? void l.DOM.addClass(document.body, "disable-share") : void this.loadFacebookScript();
                }
                return n(t, [{
                    key: "loadFacebookScript",
                    value: function() {
                        var t = window.page.site.interaction.facebook.appId;
                        void 0 === window.FB && (window.fbAsyncInit = function() {
                            console.log("[share] app id %s", t), FB.init({
                                appId: t,
                                status: !0,
                                cookie: !0,
                                version: "v2.7"
                            });
                        }, function(t, e, a) {
                            var i, s = t.getElementsByTagName(e)[0];
                            t.getElementById(a) || (i = t.createElement(e), i.id = a, i.src = "https://connect.facebook.net/pt_BR/all.js", s.parentNode.insertBefore(i, s));
                        }(document, "script", "facebook-jssdk"));
                    }
                }, {
                    key: "click",
                    value: function(t) {
                        var e = t.target || t.srcElement,
                            a = e.className.match(/(twitter|facebook|whatsapp)/g);
                        if (!a) {
                            return console.info("[share] no plataform defined");
                        }
                        var i = JSON.parse(decodeURIComponent(e.getAttribute("data-share")));
                        i.plataform = a[0], i ? (i.page && window.page.isBigCitiesPage ? this.shareBigCities(i) : this.getCity(i), u["default"].click(e.getAttribute("data-metrics-location"), e.getAttribute("data-metrics-action"), !1)) : console.info("[share] share button without data-share");
                    }
                }, {
                    key: "getCity",
                    value: function(t) {
                        var e = this,
                            a = t.candidate ? t.city.id : window.city.id,
                            i = (0, o["default"])().city(a).mayor();
                        i.then(function(a) {
                            i.destroy(), t.candidate ? e.shareCandidate(a, t.candidate, t.plataform) : e.sharePage(a, t.plataform);
                        });
                    }
                }, {
                    key: "shareBigCities",
                    value: function(e) {
                        var a = t.textBefore();
                        a.url = f(), a.image = p("default"), this.share(e.plataform, a);
                    }
                }, {
                    key: "sharePage",
                    value: function(e, a) {
                        var i = void 0;
                        if ("0" == e.st) {
                            i = t.textBefore(e), i.image = p("default");
                        } else {
                            var s = e.ca.find(function(t) {
                                if ((0, r.candidateStatus)(e, t) !== r.candidateStatus.CANCELLED) {
                                    return t;
                                }
                            });
                            if (s) {
                                switch (s.s.toString()) {
                                    case "1":
                                    case "2":
                                        i = t.textCityWin(e, s);
                                        break;
                                    case "3":
                                        i = t.textCitySecondRound(e, s);
                                        break;
                                    case "4":
                                    case "5":
                                    case "0":
                                    default:
                                        i = t.textCityInDispute(e, s);
                                }
                            } else {
                                i = t.textBefore(e);
                            }
                            i.image = p("mayor");
                        }
                        i.url = f(e), this.share(a, i);
                    }
                }, {
                    key: "shareCandidate",
                    value: function(e, a, i) {
                        var s = void 0;
                        if (a.pos = e.ca.findIndex(function(t) {
                                return t.num === a.num;
                            }) + 1, a.cc = 2 == a.num.length ? 11 : 13, "0" == e.st) {
                            s = t.textBefore(e);
                        } else {
                            switch (a.s.toString()) {
                                case "1":
                                case "2":
                                    s = t.textCandidateWin(e, a);
                                    break;
                                case "3":
                                    s = t.textCandidateSecondRound(e, a);
                                    break;
                                case "4":
                                case "5":
                                case "0":
                                default:
                                    s = 13 == a.cc ? 2 == e.st ? t.textCandidateLost(e, a) : t.textCandidateInDispute(e, a) : (0, r.candidateStatus)(e, a) == r.candidateStatus.LOST ? t.textCandidateLost(e, a) : t.textCandidateInDispute(e, a);
                            }
                        }
                        switch (s.url = f(e), a.cc) {
                            case 11:
                                s.image = p("mayor");
                                break;
                            default:
                                s.image = p("councilman");
                        }
                        this.share(i, s);
                    }
                }, {
                    key: "share",
                    value: function(t, e) {
                        if ("2turno" == window.page.round) {
                            var a = / e vereadores/g;
                            e.twitter = e.twitter.replace(a, ""), e.facebook = e.facebook.replace(a, ""), e.description = e.description.replace(a, "");
                        }
                        switch (t) {
                            case "twitter":
                                window.open("https://twitter.com/intent/tweet?url=" + e.url + "&text=" + encodeURIComponent(e.twitter) + "&via=" + window.page.site.interaction.twitter.user + "&hashtags=" + h, "_blank", "fullscreen=no,menubar=no,resizable=yes,scrollbars=no,status=no,titlebar=yes,toolbar=no,width=550px,height=490px,top=100,left=300");
                                break;
                            case "facebook":
                                FB.ui({
                                    method: "feed",
                                    link: e.url,
                                    picture: e.image,
                                    name: e.facebook,
                                    caption: e.description,
                                    description: window.page.site.interaction.facebook.siteName
                                }, function(t) {});
                                break;
                            case "whatsapp":
                                window.open("whatsapp://send?text=" + encodeURIComponent(e.twitter) + " " + e.url, "_blank");
                        }
                    }
                }], [{
                    key: "textBefore",
                    value: function(t) {
                        return {
                            facebook: "Acompanhe a apuração dos votos para prefeito e vereadores " + window.page.site.artigo + " " + window.page.site.interaction.facebook.siteName,
                            twitter: "Acompanhe a apuração dos votos para prefeito e vereadores " + window.page.site.artigo + " " + window.page.site.interaction.facebook.siteName,
                            description: "Veja resultados da eleição em todas as cidades"
                        };
                    }
                }, {
                    key: "textCityInDispute",
                    value: function(t, e) {
                        return {
                            facebook: (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " está em 1º lugar (" + t.sap + "% das urnas)",
                            twitter: "Prefeito - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " está em 1º lugar (" + t.sap + "% das urnas)",
                            description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                        };
                    }
                }, {
                    key: "textCityWin",
                    value: function(t, e) {
                        return {
                            facebook: (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " vence as eleições",
                            twitter: "Prefeito - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " vence as eleições",
                            description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                        };
                    }
                }, {
                    key: "textCitySecondRound",
                    value: function(t, e) {
                        return {
                            facebook: (0, r.capitalizeName)(t.an) + ": Eleição para prefeito vai para o 2º turno",
                            twitter: (0, r.capitalizeName)(t.an) + ": Eleição para prefeito vai para o 2º turno",
                            description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                        };
                    }
                }, {
                    key: "textCandidateInDispute",
                    value: function(t, e) {
                        switch (e.cc) {
                            case 11:
                                return {
                                    facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " tem " + e.vp + "% dos votos (" + t.sap + "% das urnas)",
                                    twitter: "Apuração - Prefeito - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " tem " + e.vp + "% dos votos (" + t.sap + "% das urnas)",
                                    description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                                };
                            case 13:
                                return {
                                    facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " tem " + (0, r.formatNumber)(e.v) + " votos (" + t.sap + "% das urnas)",
                                    twitter: "Apuração - Vereador - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " tem " + (0, r.formatNumber)(e.v) + " votos (" + t.sap + "% das urnas)",
                                    description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                                };
                        }
                    }
                }, {
                    key: "textCandidateWin",
                    value: function(t, e) {
                        switch (e.cc) {
                            case 11:
                                return {
                                    facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " vence as eleições",
                                    twitter: "Apuração - Prefeito - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " vence as eleições",
                                    description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                                };
                            case 13:
                                return {
                                    facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " se elegeu",
                                    twitter: "Apuração - Vereador - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " se elegeu",
                                    description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                                };
                        }
                    }
                }, {
                    key: "textCandidateSecondRound",
                    value: function(t, e) {
                        return {
                            facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " está no 2º turno",
                            twitter: "Apuração - Prefeito - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " está no 2º turno",
                            description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                        };
                    }
                }, {
                    key: "textCandidateLost",
                    value: function(t, e) {
                        switch (e.cc) {
                            case 11:
                                return {
                                    facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " não se elegeu",
                                    twitter: "Apuração - Prefeito - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " não se elegeu",
                                    description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                                };
                            case 13:
                                return {
                                    facebook: (0, r.capitalizeName)(t.an) + " - " + (0, r.capitalizeName)(e.nu) + " não se elegeu",
                                    twitter: "Apuração - Vereador - " + (0, r.capitalizeName)(t.an) + ": " + (0, r.capitalizeName)(e.nu) + " não se elegeu",
                                    description: "Veja resultados da eleição para prefeito e vereadores em todas as cidades"
                                };
                        }
                    }
                }]), t;
            }();
        a["default"] = g;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/webservice.js": 50,
        "../../js/utils": 51
    }],
    35: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }

        function n(t, e) {
            if ("function" != typeof e && null !== e) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        function l(t) {
            if (Array.isArray(t)) {
                for (var e = 0, a = Array(t.length); e < t.length; e++) {
                    a[e] = t[e];
                }
                return a;
            }
            return Array.from(t);
        }

        function r(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            o = t("../../js/utils"),
            d = t("../../js/libs/dom"),
            u = t("../../js/libs/mithril"),
            h = i(u),
            f = t("../../js/libs/metrics"),
            p = i(f),
            g = function() {
                function t() {
                    r(this, t), this.items = {}, this.target = "", this.cfg = {}, this.container = d.DOM.findOne(".tooltip-container"), h["default"].mount(this.container, this);
                }
                return c(t, [{
                    key: "register",
                    value: function(t) {
                        return !(!t.id || o.storage.getItem(t.id) || window.page.isMobile) && (this.items[t.id] = t, t.container = document.querySelector(t.container), d.DOM.Event(t.container).on("mouseover", "." + t.target, this.show.bind(this, t)), void d.DOM.Event(t.container).on("mouseout", "." + t.target, this.count.bind(this, t)));
                    }
                }, {
                    key: "getTargetAndPosition",
                    value: function(t, e) {
                        if (this.target = d.DOM.parents(e.target, "." + t.target)[0], "2turno" == window.page.round && e.target && (d.DOM.hasClass(e.target, t.target) && (this.target = e.target), this.target = d.DOM.findOne(".info-candidate", this.target)), this.target) {
                            this.targetWidth = this.target.clientWidth;
                            var a = this.target.getBoundingClientRect();
                            t.offsetTop = t.offsetTop || 0, t.offsetLeft = t.offsetLeft || 0, this.offsetTop = a.top + t.offsetTop, this.offsetLeft = a.left + t.offsetLeft, "center" == t.align ? this.offsetLeft += this.targetWidth / 2 - 30 : "right" == t.align && (this.offsetLeft += this.targetWidth);
                        }
                    }
                }, {
                    key: "show",
                    value: function(t, e) {
                        e.stopPropagation(), this.cancelCount(), this.target != t.target && this.getTargetAndPosition(t, e), this.cfg.content != t.content && (this.cfg = t, h["default"].redraw()), this.element.style.top = this.offsetTop + "px", this.element.style.left = this.offsetLeft + "px", d.DOM.addClass(this.element, "active"), "center" == t.flip ? d.DOM.addClass(this.element, "center") : "right" == t.flip && d.DOM.addClass(this.element, "right");
                    }
                }, {
                    key: "count",
                    value: function() {
                        var t = this;
                        this.counter && clearTimeout(this.counter), this.counter = setTimeout(function() {
                            t.hide();
                        }, 200);
                    }
                }, {
                    key: "cancelCount",
                    value: function() {
                        this.counter && clearTimeout(this.counter), this.counter = null;
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.element && (d.DOM.removeClass(this.element, "active"), d.DOM.removeClass(this.element, "center"), d.DOM.removeClass(this.element, "right"));
                    }
                }, {
                    key: "close",
                    value: function(t, e) {
                        var a = "string" == typeof t ? this.items[t] : this.cfg;
                        return !(!a || !a.container) && (this.hide(), d.DOM.Event(a.container).off("mouseover"), a.hasButton && a.localStorage !== !1 && o.storage.setItem(a.id, !0), void(a.metrics && e !== !1 && p["default"].click.apply(p["default"], l(a.metrics))));
                    }
                }, {
                    key: "mouseover",
                    value: function(t) {
                        this.counter && this.cancelCount(), t.stopPropagation();
                    }
                }, {
                    key: "getTooltip",
                    value: function(t, e) {
                        e || (this.element = t);
                    }
                }, {
                    key: "view",
                    value: function() {
                        var t = this.cfg.hasButton ? {
                            tag: "i",
                            attrs: {
                                className: "icon-close",
                                onclick: this.close.bind(this)
                            }
                        } : "";
                        return {
                            tag: "div",
                            children: [this.cfg.content, " ", t],
                            attrs: {
                                className: "tooltip has-button-" + (this.cfg.hasButton || ""),
                                onmouseover: this.mouseover.bind(this),
                                onmouseout: this.count.bind(this),
                                config: this.getTooltip.bind(this)
                            }
                        };
                    }
                }]), t;
            }(),
            m = function(t) {
                function e() {
                    return r(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
                }
                return n(e, t), c(e, [{
                    key: "register",
                    value: function(t) {
                        return !(!t.id || o.storage.getItem(t.id)) && (this.cfg = t, this.items[t.id] = t, h["default"].redraw(), void actionEvents.bind("closeFavoriteCandidateTooltip", function() {
                            v.close("councilmanTooltip", !1);
                        }));
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.cfg.id && !o.storage.getItem(this.cfg.id) && d.DOM.addClass(this.container, "active");
                    }
                }, {
                    key: "hide",
                    value: function() {
                        d.DOM.removeClass(this.container, "active");
                    }
                }, {
                    key: "view",
                    value: function() {
                        return {
                            tag: "div",
                            children: [this.cfg.content, {
                                tag: "i",
                                attrs: {
                                    className: "icon-close",
                                    onclick: this.close.bind(this)
                                }
                            }],
                            attrs: {
                                className: "tooltip has-button-true"
                            }
                        };
                    }
                }]), e;
            }(g),
            v = void 0;
        v = window.page.isMobile ? new m : new g, a["default"] = v;
    }, {
        "../../js/libs/dom": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45,
        "../../js/utils": 51
    }],
    36: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/utils.js"),
            r = t("../../js/libs/mithril"),
            c = i(r),
            o = function() {
                function t(e) {
                    s(this, t), e && (this.data = void 0, this.container = e, c["default"].mount(this.container, this));
                }
                return n(t, [{
                    key: "update",
                    value: function(t) {
                        this.data = t;
                    }
                }, {
                    key: "view",
                    value: function() {
                        if (this.data) {
                            return {
                                tag: "div",
                                children: [{
                                    tag: "div",
                                    children: [{
                                        tag: "span",
                                        children: ["BRANCOS"],
                                        attrs: {
                                            className: "label"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [(0, l.formatNumber)(this.data.vb)],
                                        attrs: {
                                            className: "total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [this.data.vbp, "%"],
                                        attrs: {
                                            className: "percent"
                                        }
                                    }],
                                    attrs: {
                                        className: "item white"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "span",
                                        children: ["NULOS"],
                                        attrs: {
                                            className: "label"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [(0, l.formatNumber)(this.data.vn)],
                                        attrs: {
                                            className: "total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [this.data.vnp, "%"],
                                        attrs: {
                                            className: "percent"
                                        }
                                    }],
                                    attrs: {
                                        className: "item null"
                                    }
                                }, {
                                    tag: "div",
                                    children: [{
                                        tag: "span",
                                        children: ["VÁLIDOS"],
                                        attrs: {
                                            className: "label"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [(0, l.formatNumber)(this.data.vv)],
                                        attrs: {
                                            className: "total"
                                        }
                                    }, {
                                        tag: "span",
                                        children: [this.data.vvp, "%"],
                                        attrs: {
                                            className: "percent"
                                        }
                                    }, {
                                        tag: "span",
                                        children: ["Nominais + legenda"],
                                        attrs: {
                                            className: "legend"
                                        }
                                    }],
                                    attrs: {
                                        className: "item valid"
                                    }
                                }],
                                attrs: {
                                    className: "votes-count"
                                }
                            };
                        }
                    }
                }]), t;
            }();
        a["default"] = o;
    }, {
        "../../js/libs/mithril": 45,
        "../../js/utils.js": 51
    }],
    37: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            l = t("../../js/libs/mithril"),
            r = (i(l), t("../../js/libs/metrics")),
            c = i(r),
            o = t("../../js/libs/dom.js"),
            d = function() {
                function t(e) {
                    var a = this;
                    s(this, t), this.container = e, this.isOpen = !1;
                    var i = o.DOM.findOne(".banner-close", this.container);
                    i.onclick = function(t) {
                        return a.close();
                    };
                }
                return n(t, [{
                    key: "close",
                    value: function() {
                        var t = this;
                        o.DOM.removeClass(this.container, "banner-open"), o.DOM.addClass(this.container, "banner-close");
                        var e = "municipio";
                        window.page.isBigCitiesPage && (e = "grandes cidades"), c["default"].click(e, "fechar_banner", !1), setTimeout(function() {
                            t.container.parentNode.removeChild(t.container), t.isOpen = !1;
                        }, 2000);
                    }
                }]), t;
            }();
        a["default"] = d;
    }, {
        "../../js/libs/dom.js": 38,
        "../../js/libs/metrics": 43,
        "../../js/libs/mithril": 45
    }],
    38: [function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.nodeListToArray = a.DOM = void 0;
        var i = t("./gator"),
            s = t("../utils"),
            n = {};
        n.Event = i.Gator;
        var l = document,
            r = "classList" in l.createElement("svg");
        if (!Element.prototype.matches) {
            var c = function(t) {
                for (var e = (this.document || this.ownerDocument).querySelectorAll(t), a = e.length; --a >= 0 && e.item(a) !== this;) {}
                return a > -1;
            };
            Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || c;
        }
        var o = function(t, e) {
                return t.getAttribute(e) || "";
            },
            d = function(t, e, a) {
                return t.setAttribute(e, "" + a);
            },
            u = function(t) {
                return o(t, "class");
            },
            h = function(t) {
                return new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi");
            },
            f = function(t) {
                return (0, s.isArray)(t) ? t : Array.prototype.slice.call(t);
            },
            p = function(t) {
                return (new DOMParser).parseFromString(t, "text/xml").firstChild;
            },
            g = function(t) {
                return "string" == typeof t ? p(t) : t;
            };
        n.hasClass = function(t, e) {
            return (u(t) + " ").indexOf(e + " ") > -1;
        }, n.addClass = function(t, e) {
            var a = t.getAttribute("class") || "";
            r && t.classList ? t.classList.add(e) : t.setAttribute("class", a + " " + e);
        }, n.removeClass = function(t, e) {
            var a = t.getAttribute("class") || "";
            return r && t.classList ? t.classList.remove(e) : t.setAttribute("class", a.replace(h(e), ""));
        }, n.toggleClass = function(t, e) {
            if (r) {
                t.classList.toggle(e);
            } else {
                var a = t.className.split(" "),
                    i = a.indexOf(e);
                i >= 0 ? a.splice(i, 1) : a.push(e), t.className = a.join(" ");
            }
        }, n.closest = function(t, e) {
            var a = e.charAt(0),
                i = void 0,
                s = void 0;
            for ("[" === a && (e = e.substr(1, e.length - 2), i = e.split("="), i.length > 1 && (s = !0, i[1] = i[1].replace(/"/g, "").replace(/'/g, ""))); t && t !== document && 1 === t.nodeType; t = t.parentNode) {
                if ("." === a) {
                    if (r) {
                        if (n.hasClass(t, e.substr(1))) {
                            return t;
                        }
                    } else {
                        if (new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(t.className)) {
                            return t;
                        }
                    }
                }
                if ("#" === a && t.id === e.substr(1)) {
                    return t;
                }
                if ("[" === a && t.hasAttribute(i[0])) {
                    if (!s) {
                        return t;
                    }
                    if (t.getAttribute(i[0]) === i[1]) {
                        return t;
                    }
                }
                if (t.tagName.toLowerCase() === e) {
                    return t;
                }
            }
            return null;
        }, n.find = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
                a = [];
            return e.length ? f(e).forEach(function(e) {
                f(e.querySelectorAll(t)).forEach(function(t) {
                    a.push(t);
                });
            }) : a = f(e.querySelectorAll(t)), a;
        }, n.findOne = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return e.querySelector(t);
        }, n.attr = function(t, e, a) {
            return a ? d(t, e, a) : o(t, e);
        }, n.html = function(t, e) {
            return t.innerHTML = e;
        }, n.empty = function(t) {
            return t.innerHTML = "";
        }, n.remove = function(t) {
            return t.parentNode.removeChild(t);
        }, n.append = function(t, e) {
            return t.appendChild(g(e));
        }, n.prepend = function(t, e) {
            return t.insertBefore(g(e), t.firstChild);
        }, n.parents = function(t, e) {
            var a = [],
                i = void 0 !== e;
            if (!t) {
                return a;
            }
            for (; null !== (t = t.parentElement);) {
                t.nodeType === Node.ELEMENT_NODE && (i && !t.matches(e) || a.push(t));
            }
            return a;
        }, a.DOM = n, a.nodeListToArray = f;
    }, {
        "../utils": 51,
        "./gator": 41
    }],
    39: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            },
            n = t("./request"),
            l = i(n),
            r = t("../../js/libs/mithril"),
            c = i(r),
            o = t("../../js/utils"),
            d = 60000,
            u = page.roundpath + "/data/status-request.json",
            h = function() {
                (0, l["default"])({
                    url: u,
                    success: f
                });
            },
            f = function(t) {
                console.log("onEmergencyConfigUpdate"), Object.keys(t).map(function(e) {
                    var a = !1;
                    switch (s(t[e])) {
                        case "object":
                            a = JSON.stringify(window.servicesStatus[e]) != JSON.stringify(t[e]);
                            break;
                        default:
                            a = window.servicesStatus[e] != t[e];
                    }
                    a && (c["default"].startComputation(), window.servicesStatus[e] = t[e], o.actionEvents.trigger("serviceStatus:" + e, t[e]), console.info("[contingency] service status " + e + " changed to " + t[e]), c["default"].endComputation());
                });
            };
        setInterval(h, d);
    }, {
        "../../js/libs/mithril": 45,
        "../../js/utils": 51,
        "./request": 46
    }],
    40: [function(t, e, a) {
        var i = t("../libs/dom"),
            s = function(t) {
                return Math.max(576, Math.max(t, 576));
            },
            n = function(t, e) {
                if (!t || 1 !== t.nodeType) {
                    return 0;
                }
                if (/DIV|SECTION|ARTICLE|SPAN/.test(t.nodeName) === !1) {
                    return 0;
                }
                if (t === e) {
                    return 0;
                }
                var a = window.getComputedStyle(t);
                return a && /fixed|absolute/i.test(a.position) === !1 ? t.offsetHeight : 0;
            },
            l = function(t) {
                var e = (0, i.nodeListToArray)(t.parentNode.childNodes),
                    a = document.documentElement && document.documentElement.clientHeight || window.innerHeight || document.body.offsetHeight;
                return e.map(function(e) {
                    return a -= n(e, t);
                }), a;
            },
            r = function(t, e) {
                var a = (0, i.nodeListToArray)(t.childNodes),
                    s = t.offsetHeight;
                return a.map(function(t) {
                    s -= n(t, e);
                }), s;
            };
        window.onready.push(function() {
            var t = (document.body, i.DOM.findOne(".fullscreen")),
                e = function() {
                    var e = i.DOM.find(".max-height"),
                        a = i.DOM.find(".inherit-fullscreen"),
                        n = s(l(t));
                    t.style.height = n + "px", a.map(function(t) {
                        return t.style.height = n + "px";
                    }), e.map(function(t) {
                        var e = t.getAttribute("data-max-height-selector");
                        e && i.DOM.findOne(e) || t.parentNode;
                        t.style.height = r(t.parentNode, t) + "px";
                    });
                };
            i.DOM.Event(window).on("resize", e), e();
        });
    }, {
        "../libs/dom": 38
    }],
    41: [function(t, e, a) {
        function i(t, e, a) {
            var i = "blur" == e || "focus" == e;
            t.element.addEventListener(e, a, i);
        }

        function s(t) {
            t.preventDefault(), t.stopPropagation();
        }

        function n(t) {
            return h ? h : h = t.matches ? t.matches : t.webkitMatchesSelector ? t.webkitMatchesSelector : t.mozMatchesSelector ? t.mozMatchesSelector : t.msMatchesSelector ? t.msMatchesSelector : t.oMatchesSelector ? t.oMatchesSelector : u.matchesSelector;
        }

        function l(t, e, a) {
            if ("_root" == e) {
                return a;
            }
            if (t !== a) {
                return n(t).call(t, e) ? t : t.parentNode ? (f++, l(t.parentNode, e, a)) : void 0;
            }
        }

        function r(t, e, a, i) {
            g[t.id] || (g[t.id] = {}), g[t.id][e] || (g[t.id][e] = {}), g[t.id][e][a] || (g[t.id][e][a] = []), g[t.id][e][a].push(i);
        }

        function c(t, e, a, i) {
            if (g[t.id]) {
                if (e) {
                    if (!i && !a) {
                        return void(g[t.id][e] = {});
                    }
                    if (!i) {
                        return void delete g[t.id][e][a];
                    }
                    if (g[t.id][e][a]) {
                        for (var s = 0; s < g[t.id][e][a].length; s++) {
                            if (g[t.id][e][a][s] === i) {
                                g[t.id][e][a].splice(s, 1);
                                break;
                            }
                        }
                    }
                } else {
                    for (var n in g[t.id]) {
                        g[t.id].hasOwnProperty(n) && (g[t.id][n] = {});
                    }
                }
            }
        }

        function o(t, e, a) {
            if (g[t][a]) {
                var i, s, n = e.target || e.srcElement,
                    r = {},
                    c = 0,
                    o = 0;
                f = 0;
                for (i in g[t][a]) {
                    g[t][a].hasOwnProperty(i) && (s = l(n, i, m[t].element), s && u.matchesEvent(a, m[t].element, s, "_root" == i, e) && (f++, g[t][a][i].match = s, r[f] = g[t][a][i]));
                }
                for (e.stopPropagation = function() {
                        e.cancelBubble = !0;
                    }, c = 0; c <= f; c++) {
                    if (r[c]) {
                        for (o = 0; o < r[c].length; o++) {
                            if (r[c][o].call(r[c].match, e) === !1) {
                                return void u.cancel(e);
                            }
                            if (e.cancelBubble) {
                                return;
                            }
                        }
                    }
                }
            }
        }

        function d(t, e, a, i) {
            function s(t) {
                return function(e) {
                    o(l, e, t);
                };
            }
            if (this.element) {
                t instanceof Array || (t = [t]), a || "function" != typeof e || (a = e, e = "_root");
                var n, l = this.id;
                for (n = 0; n < t.length; n++) {
                    i ? c(this, t[n], e, a) : (g[l] && g[l][t[n]] || u.addEvent(this, t[n], s(t[n])), r(this, t[n], e, a));
                }
                return this;
            }
        }

        function u(t, e) {
            if (!(this instanceof u)) {
                for (var a in m) {
                    if (m[a].element === t) {
                        return m[a];
                    }
                }
                return p++, m[p] = new u(t, p), m[p];
            }
            this.element = t, this.id = e;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var h, f = 0,
            p = 0,
            g = {},
            m = {};
        u.prototype.on = function(t, e, a) {
            return d.call(this, t, e, a);
        }, u.prototype.off = function(t, e, a) {
            return d.call(this, t, e, a, !0);
        }, u.matchesSelector = function() {}, u.cancel = s, u.addEvent = i, u.matchesEvent = function() {
            return !0;
        }, a.Gator = u;
    }, {}],
    42: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.GEOLOC_FAIL = a.GEOLOC_SUCCESS = void 0;
        var s = t("../utils"),
            n = t("../../components/brazil-cities/script.jsx"),
            l = i(n),
            r = 71072,
            c = "https://geoip.canais.uol.com/index.jsonp?callback=geoloc",
            o = a.GEOLOC_SUCCESS = 1,
            d = a.GEOLOC_FAIL = 2,
            u = {
                "01": "AC",
                "02": "AL",
                "03": "AP",
                "04": "AM",
                "05": "BA",
                "06": "CE",
                "07": "DF",
                "08": "ES",
                11: "MS",
                13: "MA",
                14: "MT",
                15: "MG",
                16: "PA",
                17: "PB",
                18: "PR",
                20: "PI",
                21: "RJ",
                22: "RN",
                23: "RS",
                24: "RO",
                25: "RR",
                26: "SC",
                27: "SP",
                28: "SE",
                29: "GO",
                30: "PE",
                31: "TO"
            },
            h = function() {
                0 == window.page.isMobile && (0, s.download)(c, "geoloc").then(f)["catch"](f);
            },
            f = function(t) {
                if (t && 4 === t.length && "BR" === t[1] && void 0 !== u[t[2]]) {
                    var e = l["default"].findByName(t[3], u[t[2]]);
                    void 0 !== e ? s.actionEvents.trigger("geoloc", e, o) : p();
                } else {
                    p();
                }
            },
            p = function() {
                var t = l["default"].findById(r);
                s.actionEvents.trigger("geoloc", t, d);
            };
        s.actionEvents.once("cities", h);
    }, {
        "../../components/brazil-cities/script.jsx": 2,
        "../utils": 51
    }],
    43: [function(t, e, a) {
        function i() {
            clearTimeout(d), d = setTimeout(function() {
                var t = f();
                t(o ? window.Config : folha.omniture.info), i();
            }, r);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            },
            n = function() {
                console.info("[metrics] função de hit/clique não definida");
            },
            l = !!location.search.match(/debugMetrics=true/),
            r = 30000,
            c = "folha" == window.page.site.name,
            o = !c,
            d = void 0,
            u = {
                click: void 0,
                hit: void 0
            },
            h = function(t) {
                return window.page.isCityPage ? t.replace("%page%", "cidade") : window.page.isBigCitiesPage ? t.replace("%page%", "grandes cidades") : t;
            },
            f = function() {
                return u.hit ? u.hit : (window.countMetrics ? u.hit = window.countMetrics : window.UOLPD && UOLPD.Audience && UOLPD.Audience.countMetrics && (u.hit = UOLPD.Audience.countMetrics), u.hit || n);
            },
            p = function() {
                return u.click ? u.click : (o ? window.omtrClick ? u.click = window.omtrClick : window.omtrClickUOL ? u.click = function(t, e) {
                    omtrClickUOL(e, "clique", t);
                } : window.UOLPD && UOLPD.Audience && UOLPD.Audience.countClick && (u.click = function(t, e) {
                    UOLPD.Audience.countClick({
                        position: t,
                        reference: e
                    });
                }) : u.click = function(t, e) {
                    omtrClickUOL(e, "clique", t);
                }, u.click || n);
            },
            g = {
                update: function(t) {
                    g.hit(t, !1);
                },
                hit: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "capitais",
                        s = f();
                    switch (i(), t) {
                        case "city":
                            window.Config.subcanal = (window.Config.turno + " município").toLowerCase(), window.Config.Conteudo.tipo = "placar", window.Config.Conteudo.titulo = (window.Config.turno + " | " + window.city.uf + " " + window.city.name).toLowerCase(), e === !0 && s(o ? window.Config : folha.omniture.info);
                            break;
                        case "big-cities":
                            window.Config.subcanal = (window.Config.turno + " grandes cidades").toLowerCase(), window.Config.Conteudo.tipo = "placar", window.Config.Conteudo.titulo = (window.Config.turno + " | " + a).toLowerCase(), e === !0 && s(o ? window.Config : folha.omniture.info);
                            break;
                        case "gate":
                            window.Config.subcanal = (window.Config.turno + " município").toLowerCase(), window.Config.Conteudo.tipo = "lightbox", window.Config.Conteudo.titulo = "sugestao via geolocalizacao".toLowerCase();
                    }
                    m("hit", "", "", JSON.stringify(window.Config, null, 2));
                },
                click: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = p();
                    t = window.Config.turno + " | " + t, a === !0 && window.city ? t = t + " " + window.city.uf + " " + window.city.name : "object" == ("undefined" == typeof a ? "undefined" : s(a)) && (t = t + " " + a.uf + " " + a.name), t = t.toLowerCase(), e = e.toLowerCase(), t = h(t), e = h(e), m("click", t, e), i(t, e);
                }
            };
        i();
        var m = l === !1 ? function() {} : function(t, e, a, i) {
            var s = document.getElementById("metrics-debug-local"),
                n = document.getElementById("metrics-debug-acao"),
                l = document.getElementById("metrics-debug-hit");
            "hit" == t && (l.innerHTML = i || ""), "click" == t && (s.innerHTML = e || "", n.innerHTML = a || "");
        };
        l === !0 && ! function() {
            var t = document.createElement("div");
            t.id = "metrics-debug", t.innerHTML = '\n      <strong>CLIQUE:</strong><br />\n      <strong>local: </strong><span id="metrics-debug-local"></span><br />\n      <strong>ação: </strong><span id="metrics-debug-acao"></span><br />\n      <hr>\n      <strong>HIT:</strong><br />\n      <pre id="metrics-debug-hit"></pre>\n    ', document.body.appendChild(t);
        }(), a["default"] = g;
    }, {}],
    44: [function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {};
        i.prototype = {
            bind: function(t, e, a) {
                return this._eventsData = this._eventsData || {}, this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push({
                    name: t,
                    fct: e,
                    once: a === !0
                }), this._eventsData[t] && this.triggerEvent(this._events[t][this._events[t].length - 1], this._eventsData[t]), e;
            },
            unbind: function(t, e) {
                this._events = this._events || {}, t in this._events != !1 && (this._events[t] = this._events[t].filter(function(t, a) {
                    if (void 0 !== e && t.fct !== e) {
                        return t;
                    }
                }), this.clear() === !0 && 0 === this._events[t].length && delete this._eventsData[t]);
            },
            trigger: function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._events = this._events || {}, this._eventsData = this._eventsData || {}, this._eventsData[t] = e, t in this._events != !1) {
                    for (var a = 0; a < this._events[t].length; a++) {
                        var i = this.triggerEvent(this._events[t][a], e);
                        i === !0 && (a -= 1);
                    }
                }
            },
            triggerEvent: function(t, e) {
                return t.fct.apply(this, e), t.once === !0 && (this.unbind(t.name, t.fct), !0);
            },
            once: function(t, e) {
                this.bind(t, e, !0);
            }
        }, i.mixin = function(t, e) {
            for (var a = ["bind", "unbind", "trigger", "once", "triggerEvent"], s = 0; s < a.length; s++) {
                "function" == typeof t ? t.prototype[a[s]] = i.prototype[a[s]] : t[a[s]] = i.prototype[a[s]];
            }
            return "function" == typeof t ? t.prototype.clear = function() {
                return !!e;
            } : t.clear = function() {
                return !!e;
            }, t;
        }, a["default"] = i;
    }, {}],
    45: [function(t, e, a) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        ! function(t, a) {
            var s = a(t);
            "object" === ("undefined" == typeof e ? "undefined" : i(e)) && null != e && e.exports ? e.exports = s : "function" == typeof define && define.amd ? define(function() {
                return s;
            }) : t.m = s;
        }("undefined" != typeof window ? window : void 0, function(t, e) {
            function a(t) {
                return "function" == typeof t;
            }

            function s(t) {
                return "[object Object]" === vt.call(t);
            }

            function n(t) {
                return "[object String]" === vt.call(t);
            }

            function l() {}

            function r(t) {
                ht = t.document, ft = t.location, gt = t.cancelAnimationFrame || t.clearTimeout, pt = t.requestAnimationFrame || t.setTimeout;
            }

            function c(t, e) {
                for (var a, i = [], s = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g; a = s.exec(e);) {
                    if ("" === a[1] && a[2]) {
                        t.tag = a[2];
                    } else {
                        if ("#" === a[1]) {
                            t.attrs.id = a[2];
                        } else {
                            if ("." === a[1]) {
                                i.push(a[2]);
                            } else {
                                if ("[" === a[3][0]) {
                                    var n = a[6];
                                    n && (n = n.replace(/\\(["'])/g, "$1")), t.attrs[a[4]] = n || !0;
                                }
                            }
                        }
                    }
                }
                return i;
            }

            function o(t, e) {
                var a = e ? t.slice(1) : t;
                return 1 === a.length && yt(a[0]) ? a[0] : a;
            }

            function d(t, e, a) {
                var i = "class" in e ? "class" : "className";
                for (var s in e) {
                    mt.call(e, s) && (s === i && null != e[s] && "" !== e[s] ? (a.push(e[s]), t[s] = "") : t[s] = e[s]);
                }
                a.length && (t[i] = a.join(" "));
            }

            function u(t, e) {
                for (var a = [], i = 1, l = arguments.length; i < l; i++) {
                    a[i - 1] = arguments[i];
                }
                if (s(t)) {
                    return st(t, a);
                }
                if (!n(t)) {
                    throw new Error("selector in m(selector, attrs, children) should be a string");
                }
                var r = null != e && s(e) && !("tag" in e || "view" in e || "subtree" in e),
                    u = r ? e : {},
                    h = {
                        tag: "div",
                        attrs: {},
                        children: o(a, r)
                    };
                return d(h.attrs, u, c(h, t)), h;
            }

            function h(t, e) {
                for (var a = 0; a < t.length && !e(t[a], a++);) {}
            }

            function f(t, e) {
                h(t, function(t, a) {
                    return (t = t && t.attrs) && null != t.key && e(t, a);
                });
            }

            function p(t) {
                try {
                    if ("boolean" != typeof t && null != t && null != t.toString()) {
                        return t;
                    }
                } catch (e) {}
                return "";
            }

            function g(t, e, a, i) {
                try {
                    v(t, e, a), e.nodeValue = i;
                } catch (s) {}
            }

            function m(t) {
                for (var e = 0; e < t.length; e++) {
                    yt(t[e]) && (t = t.concat.apply([], t), e--);
                }
                return t;
            }

            function v(t, e, a) {
                t.insertBefore(e, t.childNodes[a] || null);
            }

            function y(t, e, a, i) {
                f(t, function(t, i) {
                    e[t = t.key] = e[t] ? {
                        action: Nt,
                        index: i,
                        from: e[t].index,
                        element: a.nodes[e[t].index] || ht.createElement("div")
                    } : {
                        action: wt,
                        index: i
                    };
                });
                var s = [];
                for (var n in e) {
                    mt.call(e, n) && s.push(e[n]);
                }
                var l = s.sort(V),
                    r = new Array(a.length);
                return r.nodes = a.nodes.slice(), h(l, function(e) {
                    var s = e.index;
                    if (e.action === Ct && (X(a[s].nodes, a[s]), r.splice(s, 1)), e.action === wt) {
                        var n = ht.createElement("div");
                        n.key = t[s].attrs.key, v(i, n, s), r.splice(s, 0, {
                            attrs: {
                                key: t[s].attrs.key
                            },
                            nodes: [n]
                        }), r.nodes[s] = n;
                    }
                    if (e.action === Nt) {
                        var l = e.element,
                            c = i.childNodes[s];
                        c !== l && null !== l && i.insertBefore(l, c || null), r[s] = a[e.from], r.nodes[s] = l;
                    }
                }), r;
            }

            function b(t, e, a, i) {
                var s = t.length !== e.length;
                return s || f(t, function(t, a) {
                    var i = e[a];
                    return s = i && i.attrs && i.attrs.key !== t.key;
                }), s ? y(t, a, e, i) : e;
            }

            function C(t, e, a) {
                h(t, function(t, i) {
                    null != e[i] && a.push.apply(a, e[i].nodes);
                }), h(e.nodes, function(t, i) {
                    null != t.parentNode && a.indexOf(t) < 0 && X([t], [e[i]]);
                }), t.length < e.length && (e.length = t.length), e.nodes = a;
            }

            function w(t) {
                var e = 0;
                f(t, function() {
                    return h(t, function(t) {
                        (t = t && t.attrs) && null == t.key && (t.key = "__mithril__" + e++);
                    }), 1;
                });
            }

            function N(t, e, a) {
                return t.tag !== e.tag || (a.sort().join() !== Object.keys(e.attrs).sort().join() || (t.attrs.id !== e.attrs.id || (t.attrs.key !== e.attrs.key || ("all" === u.redraw.strategy() ? !e.configContext || e.configContext.retain !== !0 : "diff" === u.redraw.strategy() && (e.configContext && e.configContext.retain === !1)))));
            }

            function M(t, e, i) {
                N(t, e, i) && (e.nodes.length && X(e.nodes), e.configContext && a(e.configContext.onunload) && e.configContext.onunload(), e.controllers && h(e.controllers, function(t) {
                    t.onunload && t.onunload({
                        preventDefault: l
                    });
                }));
            }

            function k(t, e) {
                return t.attrs.xmlns ? t.attrs.xmlns : "svg" === t.tag ? "http://www.w3.org/2000/svg" : "math" === t.tag ? "http://www.w3.org/1998/Math/MathML" : e;
            }

            function O(t, e, a) {
                a.length && (t.views = e, t.controllers = a, h(a, function(t) {
                    if (t.onunload && t.onunload.$old && (t.onunload = t.onunload.$old), Mt && t.onunload) {
                        var e = t.onunload;
                        t.onunload = l, t.onunload.$old = e;
                    }
                }));
            }

            function S(t, e, i, s, n) {
                if (a(e.attrs.config)) {
                    var l = n.configContext = n.configContext || {};
                    t.push(function() {
                        return e.attrs.config.call(e, i, !s, l, n);
                    });
                }
            }

            function j(t, a, i, s, n, l, r, c) {
                var o = t.nodes[0];
                return s && Y(o, a.tag, a.attrs, t.attrs, n), t.children = G(o, a.tag, e, e, a.children, t.children, !1, 0, a.attrs.contenteditable ? o : i, n, r), t.nodes.intact = !0, c.length && (t.views = l, t.controllers = c), o;
            }

            function x(t, e, a) {
                var i;
                t.$trusted ? i = tt(e, a, t) : (i = [ht.createTextNode(t)], e.nodeName in bt || v(e, i[0], a));
                var s;
                return s = "string" == typeof t || "number" == typeof t || "boolean" == typeof t ? new t.constructor(t) : t, s.nodes = i, s;
            }

            function E(t, e, a, i, s, n) {
                var l = e.nodes;
                return i && i === ht.activeElement || (t.$trusted ? (X(l, e), l = tt(a, s, t)) : "textarea" === n ? a.value = t : i ? i.innerHTML = t : ((1 === l[0].nodeType || l.length > 1 || l[0].nodeValue.trim && !l[0].nodeValue.trim()) && (X(e.nodes, e), l = [ht.createTextNode(t)]), g(a, l[0], s, t))), e = new t.constructor(t), e.nodes = l, e;
            }

            function _(t, e, a, i, s, n, l) {
                return t.nodes.length ? t.valueOf() !== e.valueOf() || s ? E(e, t, i, n, a, l) : (t.nodes.intact = !0, t) : x(e, i, a);
            }

            function z(t) {
                if (t.$trusted) {
                    var e = t.match(/<[^\/]|\>\s*[^<]/g);
                    if (null != e) {
                        return e.length;
                    }
                } else {
                    if (yt(t)) {
                        return t.length;
                    }
                }
                return 1;
            }

            function A(t, a, i, s, n, l, r, c, o) {
                t = m(t);
                var d = [],
                    u = a.length === t.length,
                    h = 0,
                    p = {},
                    g = !1;
                f(a, function(t, e) {
                    g = !0, p[a[e].attrs.key] = {
                        action: Ct,
                        index: e
                    };
                }), w(t), g && (a = b(t, a, p, i));
                for (var v = 0, y = 0, N = t.length; y < N; y++) {
                    var M = G(i, n, a, s, t[y], a[v], l, s + h || h, r, c, o);
                    M !== e && (u = u && M.nodes.intact, h += z(M), a[v++] = M);
                }
                return u || C(t, a, d), a;
            }

            function D(t, e, a, i, s) {
                if (null != e) {
                    if (vt.call(e) === vt.call(t)) {
                        return e;
                    }
                    if (s && s.nodes) {
                        var n = a - i,
                            l = n + (yt(t) ? t : e.nodes).length;
                        X(s.nodes.slice(n, l), s.slice(n, l));
                    } else {
                        e.nodes && X(e.nodes, e);
                    }
                }
                return e = new t.constructor, e.tag && (e = {}), e.nodes = [], e;
            }

            function I(t, e) {
                return t.attrs.is ? null == e ? ht.createElement(t.tag, t.attrs.is) : ht.createElementNS(e, t.tag, t.attrs.is) : null == e ? ht.createElement(t.tag) : ht.createElementNS(e, t.tag);
            }

            function L(t, e, a, i) {
                return i ? Y(e, t.tag, t.attrs, {}, a) : t.attrs;
            }

            function R(t, a, i, s, n, l) {
                return null != t.children && t.children.length > 0 ? G(a, t.tag, e, e, t.children, i.children, !0, 0, t.attrs.contenteditable ? a : s, n, l) : t.children;
            }

            function P(t, e, a, i, s, n, l) {
                var r = {
                    tag: t.tag,
                    attrs: e,
                    children: a,
                    nodes: [i]
                };
                return O(r, n, l), r.children && !r.children.nodes && (r.children.nodes = []), r;
            }

            function T(t, e, i, s) {
                var n;
                return n = "diff" === u.redraw.strategy() && t ? t.indexOf(e) : -1, n > -1 ? i[n] : a(s) ? new s : {};
            }

            function B(t, e, a, i) {
                null != i.onunload && Ot.map(function(t) {
                    return t.handler;
                }).indexOf(i.onunload) < 0 && Ot.push({
                    controller: i,
                    handler: i.onunload
                }), t.push(a), e.push(i);
            }

            function F(t, e, a, i, s, n) {
                var l = T(a.views, e, i, t.controller),
                    r = t && t.attrs && t.attrs.key;
                return t = 0 === Mt || St || i && i.indexOf(l) > -1 ? t.view(l) : {
                    tag: "placeholder"
                }, "retain" === t.subtree ? t : (t.attrs = t.attrs || {}, t.attrs.key = r, B(n, s, e, l), t);
            }

            function U(t, e, a, i) {
                for (var s = e && e.controllers; null != t.view;) {
                    t = F(t, t.view.$original || t.view, e, s, i, a);
                }
                return t;
            }

            function q(t, e, a, i, s, l, r, c) {
                var o = [],
                    d = [];
                if (t = U(t, e, o, d), "retain" === t.subtree) {
                    return e;
                }
                if (!t.tag && d.length) {
                    throw new Error("Component template must return a virtual element, not an array, string, etc.");
                }
                t.attrs = t.attrs || {}, e.attrs = e.attrs || {};
                var u = Object.keys(t.attrs),
                    h = u.length > ("key" in t.attrs ? 1 : 0);
                if (M(t, e, u), n(t.tag)) {
                    var f = 0 === e.nodes.length;
                    r = k(t, r);
                    var p;
                    if (f) {
                        p = I(t, r);
                        var g = L(t, p, r, h);
                        v(i, p, s);
                        var m = R(t, p, e, a, r, c);
                        e = P(t, g, m, p, r, o, d);
                    } else {
                        p = j(e, t, a, h, r, o, c, d);
                    }
                    return "select" === t.tag && "value" in t.attrs && Y(p, t.tag, {
                        value: t.attrs.value
                    }, {}, r), f || l !== !0 || null == p || v(i, p, s), S(c, t, p, f, e), e;
                }
            }

            function G(t, e, i, n, l, r, c, o, d, u, h) {
                return l = p(l), "retain" === l.subtree ? r : (r = D(l, r, o, n, i), yt(l) ? A(l, r, t, o, e, c, d, u, h) : null != l && s(l) ? q(l, r, d, t, o, c, u, h) : a(l) ? r : _(r, l, o, t, c, d, e));
            }

            function V(t, e) {
                return t.action - e.action || t.index - e.index;
            }

            function J(t, e, a) {
                a === e && (a = {});
                for (var i in e) {
                    mt.call(e, i) && (null != a && a[i] === e[i] || (t.style[i] = e[i]));
                }
                for (i in a) {
                    mt.call(a, i) && (mt.call(e, i) || (t.style[i] = ""));
                }
            }

            function H(t, e, i, n, l, r) {
                if ("config" === e || "key" === e) {
                    return !0;
                }
                if (a(i) && "on" === e.slice(0, 2)) {
                    t[e] = et(i, t);
                } else {
                    if ("style" === e && null != i && s(i)) {
                        J(t, i, n);
                    } else {
                        if (null != r) {
                            "href" === e ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", i) : t.setAttribute("className" === e ? "class" : e, i);
                        } else {
                            if (e in t && !jt[e]) {
                                try {
                                    "input" === l && t[e] === i || (t[e] = i);
                                } catch (c) {
                                    t.setAttribute(e, i);
                                }
                            } else {
                                t.setAttribute(e, i);
                            }
                        }
                    }
                }
            }

            function W(t, e, a, s, n, l, r) {
                if (e in n && s === a && "object" !== ("undefined" == typeof a ? "undefined" : i(a)) && ht.activeElement !== t) {
                    "value" === e && "input" === l && t.value !== a && (t.value = a);
                } else {
                    n[e] = a;
                    try {
                        return H(t, e, a, s, l, r);
                    } catch (c) {
                        if (c.message.indexOf("Invalid argument") < 0) {
                            throw c;
                        }
                    }
                }
            }

            function Y(t, e, a, i, s) {
                for (var n in a) {
                    !mt.call(a, n) || !W(t, n, a[n], i[n], i, e, s);
                }
                return i;
            }

            function X(t, e) {
                for (var a = t.length - 1; a > -1; a--) {
                    if (t[a] && t[a].parentNode) {
                        try {
                            t[a].parentNode.removeChild(t[a]);
                        } catch (i) {}
                        e = [].concat(e), e[a] && $(e[a]);
                    }
                }
                t.length && (t.length = 0);
            }

            function $(t) {
                t.configContext && a(t.configContext.onunload) && (t.configContext.onunload(), t.configContext.onunload = null), t.controllers && h(t.controllers, function(t) {
                    a(t.onunload) && t.onunload({
                        preventDefault: l
                    });
                }), t.children && (yt(t.children) ? h(t.children, $) : t.children.tag && $(t.children));
            }

            function Z(t, e) {
                try {
                    t.appendChild(ht.createRange().createContextualFragment(e));
                } catch (a) {
                    t.insertAdjacentHTML("beforeend", e), K(t);
                }
            }

            function K(t) {
                if ("SCRIPT" === t.tagName) {
                    t.parentNode.replaceChild(Q(t), t);
                } else {
                    var e = t.childNodes;
                    if (e && e.length) {
                        for (var a = 0; a < e.length; a++) {
                            K(e[a]);
                        }
                    }
                }
                return t;
            }

            function Q(t) {
                for (var e = document.createElement("script"), a = t.attributes, i = 0; i < a.length; i++) {
                    e.setAttribute(a[i].name, a[i].value);
                }
                return e.text = t.innerHTML, e;
            }

            function tt(t, e, a) {
                var i = t.childNodes[e];
                if (i) {
                    var s = 1 !== i.nodeType,
                        n = ht.createElement("span");
                    s ? (t.insertBefore(n, i || null), n.insertAdjacentHTML("beforebegin", a), t.removeChild(n)) : i.insertAdjacentHTML("beforebegin", a);
                } else {
                    Z(t, a);
                }
                for (var l = []; t.childNodes[e] !== i;) {
                    l.push(t.childNodes[e]), e++;
                }
                return l;
            }

            function et(t, e) {
                return function(a) {
                    a = a || event, u.redraw.strategy("diff"), u.startComputation();
                    try {
                        return t.call(e, a);
                    } finally {
                        ct();
                    }
                };
            }

            function at(t) {
                var e = Et.indexOf(t);
                return e < 0 ? Et.push(t) - 1 : e;
            }

            function it(t) {
                function e() {
                    return arguments.length && (t = arguments[0]), t;
                }
                return e.toJSON = function() {
                    return t;
                }, e;
            }

            function st(t, e) {
                function a() {
                    return (t.controller || l).apply(this, e) || this;
                }

                function i(a) {
                    for (var i = [a].concat(e), s = 1; s < arguments.length; s++) {
                        i.push(arguments[s]);
                    }
                    return t.view.apply(t, i);
                }
                t.controller && (a.prototype = t.controller.prototype), i.$original = t.view;
                var s = {
                    controller: a,
                    view: i
                };
                return e[0] && null != e[0].key && (s.attrs = {
                    key: e[0].key
                }), s;
            }

            function nt(t, e, a, i) {
                if (!i) {
                    u.redraw.strategy("all"), u.startComputation(), At[a] = e;
                    var s;
                    s = zt = t ? t : t = {
                        controller: l
                    };
                    var n = new(t.controller || l);
                    return s === zt && (It[a] = n, Dt[a] = t), ct(), null === t && lt(e, a), It[a];
                }
                null == t && lt(e, a);
            }

            function lt(t, e) {
                At.splice(e, 1), It.splice(e, 1), Dt.splice(e, 1), ot(t), Et.splice(at(t), 1);
            }

            function rt() {
                Pt && (Pt(), Pt = null), h(At, function(t, e) {
                    var a = Dt[e];
                    if (It[e]) {
                        var i = [It[e]];
                        u.render(t, a.view ? a.view(It[e], i) : "");
                    }
                }), Tt && (Tt(), Tt = null), Lt = null, Rt = new Date, u.redraw.strategy("diff");
            }

            function ct() {
                "none" === u.redraw.strategy() ? (Mt--, u.redraw.strategy("diff")) : u.endComputation();
            }

            function ot(t) {
                var a = at(t);
                X(t.childNodes, _t[a]), _t[a] = e;
            }

            function dt(t, e) {
                var a = u.prop(e);
                return t.then(a), a.then = function(a, i) {
                    return dt(t.then(a, i), e);
                }, a["catch"] = a.then.bind(null, null), a;
            }

            function ut(t, e) {
                function i(t) {
                    c = t || Vt, d.map(function(t) {
                        c === Gt ? t.resolve(o) : t.reject(o);
                    });
                }

                function n(t, e, i, n) {
                    if ((null != o && s(o) || a(o)) && a(t)) {
                        try {
                            var l = 0;
                            t.call(o, function(t) {
                                l++ || (o = t, e());
                            }, function(t) {
                                l++ || (o = t, i());
                            });
                        } catch (r) {
                            u.deferred.onerror(r), o = r, i();
                        }
                    } else {
                        n();
                    }
                }

                function l() {
                    var s;
                    try {
                        s = o && o.then;
                    } catch (d) {
                        return u.deferred.onerror(d), o = d, c = qt, l();
                    }
                    c === qt && u.deferred.onerror(o), n(s, function() {
                        c = Ut, l();
                    }, function() {
                        c = qt, l();
                    }, function() {
                        try {
                            c === Ut && a(t) ? o = t(o) : c === qt && a(e) && (o = e(o), c = Ut);
                        } catch (l) {
                            return u.deferred.onerror(l), o = l, i();
                        }
                        o === r ? (o = TypeError(), i()) : n(s, function() {
                            i(Gt);
                        }, i, function() {
                            i(c === Ut && Gt);
                        });
                    });
                }
                var r = this,
                    c = 0,
                    o = 0,
                    d = [];
                r.promise = {}, r.resolve = function(t) {
                    return c || (o = t, c = Ut, l()), r;
                }, r.reject = function(t) {
                    return c || (o = t, c = qt, l()), r;
                }, r.promise.then = function(t, e) {
                    var a = new ut(t, e);
                    return c === Gt ? a.resolve(o) : c === Vt ? a.reject(o) : d.push(a), a.promise;
                };
            }
            u.version = function() {
                return "v0.2.5";
            };
            var ht, ft, pt, gt, mt = {}.hasOwnProperty,
                vt = {}.toString,
                yt = Array.isArray || function(t) {
                    return "[object Array]" === vt.call(t);
                },
                bt = {
                    AREA: 1,
                    BASE: 1,
                    BR: 1,
                    COL: 1,
                    COMMAND: 1,
                    EMBED: 1,
                    HR: 1,
                    IMG: 1,
                    INPUT: 1,
                    KEYGEN: 1,
                    LINK: 1,
                    META: 1,
                    PARAM: 1,
                    SOURCE: 1,
                    TRACK: 1,
                    WBR: 1
                };
            u.deps = function(e) {
                return r(t = e || window), t;
            }, u.deps(t);
            var Ct = 1,
                wt = 2,
                Nt = 3,
                Mt = 0;
            u.getPendingRequests = function() {
                return Mt;
            }, u.startComputation = function() {
                Mt++;
            }, u.endComputation = function() {
                Mt > 1 ? Mt-- : (Mt = 0, u.redraw());
            };
            var kt, Ot = [],
                St = !1,
                jt = {
                    list: 1,
                    style: 1,
                    form: 1,
                    type: 1,
                    width: 1,
                    height: 1
                },
                xt = {
                    appendChild: function(t) {
                        kt === e && (kt = ht.createElement("html")), ht.documentElement && ht.documentElement !== t ? ht.replaceChild(t, ht.documentElement) : ht.appendChild(t), this.childNodes = ht.childNodes;
                    },
                    insertBefore: function(t) {
                        this.appendChild(t);
                    },
                    childNodes: []
                },
                Et = [],
                _t = {};
            u.render = function(t, a, i) {
                if (!t) {
                    throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
                }
                var s, n = [],
                    l = at(t),
                    r = t === ht;
                s = r || t === ht.documentElement ? xt : t, r && "html" !== a.tag && (a = {
                    tag: "html",
                    attrs: {},
                    children: a
                }), _t[l] === e && X(s.childNodes), i === !0 && ot(t), _t[l] = G(s, null, e, e, a, _t[l], !1, 0, null, e, n), h(n, function(t) {
                    t();
                });
            }, u.trust = function(t) {
                return t = new String(t), t.$trusted = !0, t;
            }, u.prop = function(t) {
                return (null != t && (s(t) || a(t)) || "undefined" != typeof Promise && t instanceof Promise) && a(t.then) ? dt(t) : it(t);
            };
            var zt, At = [],
                Dt = [],
                It = [],
                Lt = null,
                Rt = 0,
                Pt = null,
                Tt = null,
                Bt = 16;
            u.component = function(t) {
                for (var e = new Array(arguments.length - 1), a = 1; a < arguments.length; a++) {
                    e[a - 1] = arguments[a];
                }
                return st(t, e);
            }, u.mount = u.module = function(t, e) {
                if (!t) {
                    throw new Error("Please ensure the DOM element exists before rendering a template into it.");
                }
                var i = At.indexOf(t);
                i < 0 && (i = At.length);
                var s = !1,
                    n = {
                        preventDefault: function() {
                            s = !0, Pt = Tt = null;
                        }
                    };
                return h(Ot, function(t) {
                    t.handler.call(t.controller, n), t.controller.onunload = null;
                }), s ? h(Ot, function(t) {
                    t.controller.onunload = t.handler;
                }) : Ot = [], It[i] && a(It[i].onunload) && It[i].onunload(n), nt(e, t, i, s);
            };
            var Ft = !1;
            u.redraw = function(e) {
                if (!Ft) {
                    Ft = !0, e && (St = !0);
                    try {
                        Lt && !e ? (pt === t.requestAnimationFrame || new Date - Rt > Bt) && (Lt > 0 && gt(Lt), Lt = pt(rt, Bt)) : (rt(), Lt = pt(function() {
                            Lt = null;
                        }, Bt));
                    } finally {
                        Ft = St = !1;
                    }
                }
            }, u.redraw.strategy = u.prop(), u.withAttr = function(t, e, a) {
                return function(i) {
                    i = i || window.event;
                    var s = i.currentTarget || this,
                        n = a || this,
                        l = t in s ? s[t] : s.getAttribute(t);
                    e.call(n, l);
                };
            }, u.deferred = function() {
                var t = new ut;
                return t.promise = dt(t.promise), t;
            };
            var Ut = 1,
                qt = 2,
                Gt = 3,
                Vt = 4;
            return u.deferred.onerror = function(t) {
                if ("[object Error]" === vt.call(t) && !/ Error/.test(t.constructor.toString())) {
                    throw Mt = 0, t;
                }
            }, u.sync = function(t) {
                function e(t, e) {
                    return function(l) {
                        return s[t] = l, e || (n = "reject"), 0 === --i && (a.promise(s), a[n](s)), l;
                    };
                }
                var a = u.deferred(),
                    i = t.length,
                    s = [],
                    n = "resolve";
                return t.length > 0 ? h(t, function(t, a) {
                    t.then(e(a, !0), e(a, !1));
                }) : a.resolve([]), a.promise;
            }, window.Mithil = u, u;
        });
    }, {}],
    46: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, a, i) {
                return a && t(e.prototype, a), i && t(e, i), e;
            };
        }();
        t("./usocket");
        var l = t("./mithril");
        i(l);
        usocket.config(window.usocketConfig);
        var r = function() {},
            c = document.getElementsByTagName("head")[0],
            o = 5000,
            d = 2000,
            u = 5000,
            h = 3,
            f = {};
        window.jsonpQueue = f;
        var p = function() {
            function t(e) {
                return s(this, t), this.cfg = e, this.timeRequest = new Date, this.connSocket = void 0, this.resolve = e.success || r, this.reject = e.fail || r, this.retries = 1, void 0 === this.cfg.config && (this.cfg.config = {}), this.socketEnabled = !!e.config.socket, window.servicesStatus.socket !== !1 && window.websocketSupport !== !1 || (this.socketEnabled = !1), this.request(), this;
            }
            return n(t, [{
                key: "useSocketConnection",
                value: function() {
                    return this.cfg.config.socket === !0 && this.socketEnabled === !0;
                }
            }, {
                key: "request",
                value: function() {
                    if (this.useSocketConnection() === !0 && this.cfg.httpSocket !== !0) {
                        this.socket();
                    } else {
                        if (this.socketEnabled === !0 && this.cfg.httpSocket === !0) {
                            this.httpSocket();
                        } else {
                            if (void 0 !== this.cfg.jsonp) {
                                var t = this.cfg.jsonp;
                                void 0 !== window[t] ? (f[t] = f[t] || [], f[t].push(this)) : this.jsonp();
                            } else {
                                this.ajax();
                            }
                        }
                    }
                }
            }, {
                key: "httpSocket",
                value: function() {
                    var t = this,
                        e = "placar-eleicoes-" + this.cfg.channel;
                    console.info("http websocket connection (%s)", e), console.info("last modified", this.cfg.config.lastModified), usocket.polling(e, function(e, a) {
                        e ? (console.log("reject"), t.reject()) : (console.log("http webscoket resolve"), a && (t.cfg.config.lastJson = a, console.log("updated json")), t.resolve(t.cfg.config.lastJson));
                    }, void 0, void 0, this.cfg.config.lastModified);
                }
            }, {
                key: "socket",
                value: function() {
                    var t = this;
                    if (!this.connSocket) {
                        var e = "placar-eleicoes-" + this.cfg.channel;
                        console.info("websocket connection #%d (%s)", this.retries, e), this.connSocket = usocket.connect(e), this.connSocket.on("message", function(e) {
                            console.info("websocket json", e), t.retries = 1, t.resolve(e);
                        }), this.connSocket.on("close", function(a) {
                            var i = a && a.reason;
                            switch (void 0 === i && a.unsubscribed && (i = "NORMAL"), console.info("[%s] socket connection closed", e, i), t.connSocket = void 0, i) {
                                case "TURN_OFF":
                                    console.info("change socket to off"), t.socketEnabled = !1;
                                    break;
                                case "NORMAL":
                                    console.info("normal disconnect"), t.destroy();
                                    break;
                                default:
                                    console.info("reconnect on %d seconds", u);
                            }
                        }), this.connSocket.on("error", function(e) {
                            console.warn("socket connection error: ", e), console.info("reconnect on %d seconds", d), t.retries += 1, t.retries > h && (t.socketEnabled = !1, window.websocketSupport = !1, t.cfg.config.socket = !1), t.connSocket = void 0, setTimeout(t.request.bind(t), d);
                        });
                    }
                }
            }, {
                key: "ajax",
                value: function() {
                    var t = this,
                        e = new XMLHttpRequest;
                    e.onload = function() {
                        try {
                            t.resolve(JSON.parse(e.responseText));
                        } catch (a) {
                            t.reject(e);
                        }
                    }, e.open("GET", this.cfg.url, !0), e.send(null);
                }
            }, {
                key: "jsonp",
                value: function() {
                    var t = this,
                        e = this.cfg.jsonp,
                        a = setTimeout(function() {
                            t.reject({
                                code: 408
                            }), t.callNextJsonp();
                        }, this.cfg.timeout || o);
                    window[e] = function(e) {
                        clearTimeout(a), t.resolve(e), t.callNextJsonp();
                    };
                    var i = document.createElement("script");
                    i.async = !0, i.type = "text/javascript", i.src = this.cfg.url, i.onload = function() {
                        i.onload = null, i.onerror = null, i.parentNode.removeChild(i);
                    }, i.onerror = function(e) {
                        clearTimeout(a), i.onload = null, i.onerror = null, i.parentNode.removeChild(i), t.reject({
                            code: 500
                        }), t.callNextJsonp();
                    }, c.appendChild(i);
                }
            }, {
                key: "callNextJsonp",
                value: function() {
                    var t = this.cfg.jsonp;
                    if (window[t] = void 0, void 0 !== f[t]) {
                        var e = f[t].shift();
                        e && e.request();
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    console.log("[request] destroy()", this.cfg), this.connSocket && (console.log("[request] ws close()"), this.connSocket.close());
                }
            }]), t;
        }();
        a["default"] = function(t) {
            return new p(t);
        };
    }, {
        "./mithril": 45,
        "./usocket": 48
    }],
    47: [function(t, e, a) {
        function i(t, e) {
            if (t) {
                e = e.split(" ");
                for (var a, i = e.length; i--;) {
                    a = e[i], 0 == s(t, a) && (t.className += (t.className && " " || "") + a);
                }
                return !0;
            }
            return !1;
        }

        function s(t, e) {
            if (t) {
                e = e.split(" ");
                for (var a, i = e.length; i--;) {
                    if (a = e[i], 0 == new RegExp("( " + a + " |^" + a + " | " + a + "$|^" + a + "$)").test(t.className)) {
                        return !1;
                    }
                }
                return !0;
            }
            return !1;
        }

        function n(t, e) {
            if (t) {
                e = e.split(" ");
                for (var a, i = e.length; i--;) {
                    a = e[i], 1 == s(t, a) && (t.className = t.className.replace(new RegExp("( " + a + " |^" + a + " | " + a + "$|^" + a + "$)"), " ").replace(/ +/g, " "));
                }
                return !0;
            }
            return !1;
        }

        function l(t) {
            if (t = +t, t >= 48 && t <= 57) {
                return "NUMBER";
            }
            if (t >= 65 && t <= 90 || 192 == t || 186 == t || 32 == t || 229 == t) {
                return "LETTER";
            }
            if (27 == t) {
                return "ESC";
            }
            if (t >= 37 && t <= 40) {
                switch (t) {
                    case 37:
                        return "ARROW LEFT";
                    case 38:
                        return "ARROW UP";
                    case 39:
                        return "ARROW RIGHT";
                    case 40:
                        return "ARROW DOWN";
                }
            }
            return 13 == t ? "ENTER" : 8 == t || 46 == t ? "REMOVE" : "OTHER";
        }

        function r(t, e) {
            var a = document.getElementsByTagName("head")[0],
                i = document.createElement("script");
            return i.type = "text/javascript", i.async = !0, i.charset = e || "utf-8", i.src = t, i.onload = i.onreadystatechange = function(t, e) {
                return function() {
                    e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (a.removeChild(e), e.onload = e.onreadystatechange = null);
                };
            }(t, i), a.insertBefore(i, a.firstChild), {
                o: i
            };
        }

        function c() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = arguments[1];
            e = "undefined" == typeof e;
            var a = /[ÂÁÀÃÄÊÉÈËÎÍÌÏÔÓÒÕÖÛÚÙÜÇÑ\+\-\s]/g,
                i = /[ÂÁÀÃÄ]/g,
                s = /[ÊÉÈË]/g,
                n = /[ÎÍÌÏ]/g,
                l = /[ÔÓÒÕÖ]/g,
                r = /[ÛÚÙÜ]/g,
                c = /[Ç]/g,
                o = /[Ñ]/g,
                d = /[^a-zA-Z0-9_\+]/g,
                u = /[ ]/g,
                h = t.toLowerCase().toUpperCase();
            return h.indexOf("*") + 1 == h.length && (h = h.substr(0, h.length - 1)), h.search(a) != -1 && (e && (h = h.replace(u, "-")), h = h.replace(i, "A"), h = h.replace(s, "E"), h = h.replace(n, "I"), h = h.replace(l, "O"), h = h.replace(r, "U"), h = h.replace(c, "C"), h = h.replace(o, "N"), e && (h = h.replace(d, "-"))), h = h.toLowerCase(), h.trim && h.trim() || h.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, "");
        }

        function o(t, e, a) {
            var s = (e.length, null),
                l = null,
                r = null,
                c = t.thereIsOneSelected(!0);
            s = c.i, l = c.v, n(l, t.class_current), "UP" == a ? r = null == s ? e.length - 1 : 0 == s ? e.length - 1 : s - 1 : "DOWN" == a && (r = null == s ? 0 : s == e.length - 1 ? 0 : s + 1), i(e[r], t.class_current);
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var d = navigator.userAgent,
            u = {
                preventDefault: function(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                },
                add: function(t, e, a) {
                    document.attachEvent ? (e = /touch/.test(e) ? e : "on" + e, t.attachEvent(e, a)) : document.addEventListener && t.addEventListener(e, a, !0);
                },
                del: function(t, e, a) {
                    document.detachEvent ? (e = /touch/.test(e) ? e : "on" + e, t.detachEvent(e, a)) : document.removeEventListener && t.removeEventListener(e, a, !0);
                }
            },
            h = function(t, e) {
                return this.form = t, this.name = e.name || "suggest", this.source = e.source, this.normalize = "undefined" == typeof e.normalize || e.normalize, this.input = e.input || t.q, i(this.input, "suggest-input"), i(this.form, "suggest-form"), this.charset = e.charset, this.class_current = e.class_current || "current", this.end_of_typing = null, this.time_to_wait = 1000, this.min_length = 3, this.cache = !0, this.cache_results = {}, this.source_function = e.sourceParam || function(t) {
                    return t;
                }, this.sort = e.sort || null, this.max_results = e.max_results || 5, this.text_not_found = e.not_found || "Sua busca não retornou resultado", this.markup = e.markup || function(t, e) {
                    return "<li>" + t + "</li>";
                }, this.query_function = e.queryURL || function(t) {
                    return encodeURIComponent(c(t, !1));
                }, this.item_function = e.item || function(t) {
                    return t;
                }, this.onselect_function = e.onSelect || function(t) {
                    return t;
                }, this.onblank_function = e.onBlank || null, this.onopen_function = e.onOpen || function(t) {
                    return !0;
                }, this.onclose_function = e.onClose || function(t) {
                    return !0;
                }, this.match_function = e.match || function(t, e) {
                    return this.normalize === !0 && (t = c(t), e = c(e)), new RegExp("^" + e).test(t);
                }, this.data = e.data || function(t) {
                    return t.docs;
                }, this.events = e.events || {}, this.binds = {}, this.lastKeyPressed = "", !!this.input && (this.bind(), this.createArea(), this);
            };
        h.prototype.createArea = function() {
            var t = this.area = document.createElement("div");
            t.className = "suggest-area suggest-area-disabled", this.form.appendChild(t);
        }, h.prototype.removeArea = function() {
            this.form.removeChild(this.area), this.area = null;
        }, h.prototype.bind = function() {
            var t = this.input,
                e = this.binds,
                a = this.form,
                i = this;
            e.form_submit = function(t) {
                u.preventDefault(t), 1 == /MSIE/.test(d) && e.input_keyup.apply(null, [{
                    keyCode: 13
                }]);
            }, e.input_keyup = function(t) {
                clearTimeout(i.end_of_typing);
                var e = i.lastKeyPressed = 0 != t.keyCode ? l(t.keyCode) : "LETTER";
                switch (e) {
                    case "ENTER":
                        0 == i.select() && (i.onblank_function ? i.onblank_function.apply(i) : i.prepareToSearch());
                        break;
                    case "ARROW UP":
                    case "ARROW DOWN":
                        1 == i.disabled() ? i.prepareToSearch() : o(i, i.getItemsDOM(), / (\w+)$/.exec(e)[1]);
                        break;
                    case "ESC":
                        i.disable();
                        break;
                    case "NUMBER":
                    case "LETTER":
                    case "REMOVE":
                        i.removeSelect(), i.end_of_typing = setTimeout(function() {
                            i.prepareToSearch();
                        }, i.source instanceof Array ? 250 : i.time_to_wait);
                }
            }, e.body_click = function(t) {
                if (0 == i.disabled()) {
                    var e = t.srcElement || t.target;
                    do {
                        if (s(e, "suggest-form")) {
                            return !0;
                        }
                    } while ((e = e.parentNode) && "BODY" != e.nodeName);
                    i.disable();
                }
            }, u.add(t, "keyup", this.binds.input_keyup), u.add(a, "submit", this.binds.form_submit), u.add(document.body, "click", this.binds.body_click);
        }, h.prototype.removeSelect = function() {
            for (var t = this.getItemsDOM(), e = t.length; e--;) {
                1 == s(t[e], this.class_current) && n(t[e], this.class_current);
            }
            return !0;
        }, h.prototype.unbind = function() {
            this.input;
            u.del(this.input, "keyup", this.binds.input_keyup), u.del(this.form, "click", this.binds.form_submit), u.del(document.body, "click", this.binds.body_click);
        }, h.prototype.thereIsOneSelected = function(t) {
            for (var e = this.getItemsDOM(), a = e.length; a--;) {
                if (1 == s(e[a], this.class_current)) {
                    return t ? {
                        i: a,
                        v: e[a]
                    } : e[a];
                }
            }
            return !1;
        }, h.prototype.select = function(t, e) {
            var t = t || this.thereIsOneSelected() || !1;
            return !!t && (this.onselect_function.apply(this, [t, e]), this.disable("SELECT ITEM"), !0);
        }, h.prototype.prepareToSearch = function() {
            var t = this.input,
                e = t.value,
                a = this.lastKeyPressed,
                s = this;
            if (this.query = e, 0 == e.length) {
                return this.disable("EMPTY ENTRY"), !1;
            }
            if ("REMOVE" != a && e.length < this.min_length) {
                return !1;
            }
            i(t, "suggest-loading");
            var n = this.source;
            if (0 == this.hasCache()) {
                if (n instanceof Array) {
                    this.filter();
                } else {
                    var l = this.source_function(n).replace("%query", this.query_function.call(this, e)).replace("%max", this.max_results).replace("%callback", "Suggest.callbacks['c" + h.total_callbacks + "']");
                    h.callbacks["c" + h.total_callbacks] = function() {
                        var t = h.total_callbacks;
                        return function(e) {
                            delete h.callbacks["c" + t], s.prepareToShow(s.data(e));
                        };
                    }(), r(l, s.charset);
                }
            }
        }, h.prototype.hasCache = function() {
            return !1;
        }, h.prototype.filter = function() {
            var t = this.source,
                e = this.query,
                a = this.match_function,
                i = this.item_function,
                s = [];
                console.log(t);
            for (var n in t) {
                t.hasOwnProperty(n) === !0 && a.call(this, i.call(this, t[n]), e) === !0 && s.push(t[n]);
            }
            this.prepareToShow(s);
        }, h.prototype.prepareToShow = function(t) {
            var e = this.query;
            "function" == typeof this.sort && (t = this.sort(t)), this.cache === !0 && (this.cache_results[c(e)] = t), this.show(t);
        }, h.prototype.show = function(t) {
            var e = this.markup,
                a = this.max_results,
                l = this.area,
                r = this.query,
                c = this.lastKeyPressed,
                o = "<ul>";
            if (0 == t.length) {
                o += '<li class="not-found">' + this.text_not_found + "</li>";
            } else {
                var h = 0;
                for (var f in t) {
                    if (t.hasOwnProperty(f) === !0 && (o += e(t[f], r), ++h == a)) {
                        break;
                    }
                }
            }
            if (o += "</ul>", l.innerHTML = o, n(this.input, "suggest-loading"), n(l, "suggest-area-disabled"), this.onopen_function.call(this), 1 == /MSIE 7/.test(d) && 0 == s(l, "suggest-area-ie7-workaround")) {
                i(l, "suggest-area-ie7-workaround");
                for (var p = l, g = l.style.zIndex || 5, m = 1; p = p.parentNode;) {
                    p.style && (p.style.zIndex = g + m++);
                }
            }
            var v, y = this.events,
                b = this,
                C = l.getElementsByTagName("li"),
                w = C.length;
            for (y.click || (y.click = function(t, e) {
                    this.select(t, e);
                }); w--;) {
                v = C[w];
                for (var N in y) {
                    y.hasOwnProperty(N) === !0 && u.add(v, N, function(t, e) {
                        return function(a) {
                            e.apply(b, [t, a]);
                        };
                    }(v, y[N]));
                }
            }
            "ENTER" == c && 1 == C.length && this.select(C[0]);
        }, h.prototype.getItemsDOM = function() {
            return this.area.getElementsByTagName("li");
        }, h.prototype.disable = function(t) {
            return i(this.area, "suggest-area-disabled"), this.area.innerHTML = "", this.onclose_function.call(this, t), this;
        }, h.prototype.disabled = function() {
            return s(this.area, "suggest-area-disabled");
        }, h.prototype.destroy = function() {
            return this.unbind(), this.removeArea(), this;
        }, h.callbacks = {}, h.total_callbacks = 0, h.normalizeString = c, h.hasClass = s, h.addClass = i, h.removeClass = n, window.Suggest = h, a["default"] = h;
    }, {}],
    48: [function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        "object" !== i(window.usocket) && (window.usocket = function(t) {
            function e(t) {
                function e() {
                    var e = a(t);
                    return r = setTimeout(function() {
                        e === !0 ? (m.readyState = o, m.onopen(), g.channels.length && l()) : m.onclose({
                            code: O
                        });
                    }, g.openDelay), m;
                }

                function a(t) {
                    var e = t.match(/id=([^&]+)$/);
                    return null !== e && (g.channels.push(e[1]), g.url = t.replace("wss:", "https:").replace(/\?.*/, ""), !0);
                }

                function i() {
                    return p >= g.channels.length && (p = 0), g.channels[p++];
                }

                function n(t, e) {
                    return !e || "function" == typeof e && e.call(g) === !0 ? (clearTimeout(f), f = setTimeout(l, t)) : m.close(!1), !0;
                }

                function l(t) {
                    var e;
                    return t ? e = t : (m.channel = i(), e = m.channel), 0 === g.channels.length ? m.onclose({
                        code: k
                    }) : void s({
                        url: g.url + "?id=" + e + "&ifmod=" + (g.channelsUpdated[e] || 0) + "&ts=" + +new Date,
                        timeout: C,
                        onerror: function() {
                            m.onerror({
                                code: w
                            });
                        }
                    });
                }
                var r, c = 0,
                    o = 1,
                    d = 2,
                    u = 3,
                    f = 0,
                    p = 0,
                    g = {
                        url: t,
                        channels: [],
                        channelsUpdated: {},
                        openDelay: 100
                    },
                    m = {
                        URL: t,
                        CONNECTING: c,
                        OPEN: o,
                        CLOSING: d,
                        CLOSED: u,
                        isFake: !0,
                        removeChannels: function(t) {
                            if (t) {
                                g.channels = g.channels.filter(function(e) {
                                    return e !== t ? e : void 0;
                                }), delete g.channelsUpdated[t], delete x[t];
                            } else {
                                for (var e; e = g.channels.pop();) {
                                    delete g.channelsUpdated[e], delete x[e];
                                }
                            }
                        },
                        channel: "",
                        setLastModified: function(t) {
                            g.channelsUpdated[this.channel] = t;
                        },
                        readyState: c,
                        reconnect: n,
                        send: function(t) {
                            var e = t.match(/^unsubscribe:(.+)/);
                            e ? h.onmessage('{"unsubscribed":"' + e[1] + '"}') : g.channels.push(t);
                        },
                        close: function(t) {
                            this.readyState = d, clearTimeout(r), clearTimeout(f), this.readyState = u, t !== !1 ? m.onclose({
                                code: M
                            }) : _ = null;
                        },
                        onopen: function() {
                            console.log("onopen");
                        },
                        onmessage: function() {
                            console.log("onmessage");
                        },
                        onerror: function() {
                            console.log("onerror");
                        },
                        onclose: function() {
                            console.log("onclose");
                        }
                    };
                return e();
            }
            var a = document.querySelector("head"),
                s = function(t) {
                    var e = null,
                        i = document.createElement("script");
                    i.async = !0, i.type = "text/javascript", i.src = t.url;
                    var s = function() {
                            clearTimeout(e), i.onload = null, i.onerror = null, a.removeChild(i);
                        },
                        n = function(e) {
                            s(), "function" == typeof t.onerror && t.onerror();
                        };
                    t.timeout && (e = setTimeout(function() {
                        n();
                    }, t.timeout)), i.onload = s, i.onerror = n, a.appendChild(i);
                },
                n = "$VERSION",
                l = function() {},
                r = 1000,
                c = 60 * r,
                o = navigator.userAgent,
                d = "undefined" != typeof t.WebSocket && 3 === t.WebSocket.CLOSED;
            /Android (4.[0123]|2.\d)/.test(o) === !0 && / Chrome\//.test(o) === !1 && (d = !1), t.websocketSupport = d;
            var u, h = {},
                f = "rtw.uol.com",
                p = !1,
                g = 4 * c,
                m = 30 * r,
                v = 1 * r,
                y = 200,
                b = 10 * r,
                C = 10 * r,
                w = 1006,
                N = 1001,
                M = 1000,
                k = 4001,
                O = 4002,
                S = "TIMEOUT",
                j = "CONFIG_CHANGES",
                x = {},
                E = [],
                _ = null,
                z = null,
                A = +new Date,
                D = null,
                I = function(t) {
                    return Object.keys(t).map(function(e) {
                        return t[e];
                    });
                },
                L = function() {
                    console.info("WebSocket timeout, disconnecting..."), _.onerror({
                        code: S
                    });
                },
                R = function() {
                    _ && _.isFake !== !0 && (u = setTimeout(L, 5 * r), console.info("websocket ping request..."), h.send("ping"), A = +new Date);
                },
                P = function J() {
                    return +new Date - A >= g && R(), h.isConnected() === !1 && _ ? (_.onerror({
                        code: S
                    }), !1) : void(z = setTimeout(J, m));
                },
                T = function() {
                    clearTimeout(z);
                },
                B = function(t, e, a) {
                    var i = [];
                    a ? x[a] && i.push(x[a]) : i = i.concat(I(x));
                    for (var s = 0, n = i.length; s < n; s++) {
                        void 0 !== i[s] && "function" == typeof i[s].pub && i[s].pub(t, e);
                    }
                },
                F = function(t) {
                    if (null !== _) {
                        var e = [];
                        if (t) {
                            if (x[t] && e.push(x[t]), _.isFake === !0) {
                                return _.removeChannels(t), !0;
                            }
                        } else {
                            e = e.concat(I(x));
                        }
                        for (var a = 0, i = e.length; a < i; a++) {
                            e[a].off(), delete x[e[a].channelName];
                        }
                    }
                },
                U = function() {
                    F(), T(), _ && (_.onmessage = null, _.onclose = null, _.onerror = null, _ = null);
                },
                q = function(t) {
                    t = t || "", null === _ || 4 === _.readyState ? (_ = d === !0 && p === !1 ? new WebSocket("wss://" + f + "/sub?id=" + t) : new e("wss://" + f + "/sub?id=" + t), _.reconnect || (_.reconnect = l), _.onopen = function(t) {
                        G(), P(), B("open", t);
                    }, _.onmessage = h.onmessage, _.onerror = function(t) {
                        B("error", t), t.invalidChannel || U();
                    }, _.onclose = function(t, e) {
                        var a = t && t.code || e && e.code || 0;
                        a === w || a === N ? B("error", t) : t.triggerClose !== !1 && B("close", t), U();
                    }) : h.isConnected() === !0 ? _.send(t) : G(t);
                },
                G = function(t) {
                    if ("string" == typeof t) {
                        E.push(t);
                    } else {
                        for (var e; e = E.shift();) {
                            _.send(e);
                        }
                    }
                },
                V = function H(t) {
                    if (x[t]) {
                        return x[t];
                    }
                    if (this instanceof H == !1) {
                        return new H(t);
                    }
                    var e = {
                        message: [],
                        close: [],
                        error: [],
                        lost: [],
                        open: []
                    };
                    this.channelName = t;
                    var a = {};
                    return this.data = function(t) {
                        return void 0 === t ? a : a = t;
                    }, this.on = function(t, a) {
                        if (e[t]) {
                            var i;
                            for (i in e[t]) {
                                if (e[t].hasOwnProperty(i) === !0 && e[t][i] === a) {
                                    return this;
                                }
                            }
                            e[t].push(a);
                        }
                        return this;
                    }, this.off = function(t, a) {
                        var i, s;
                        if (t) {
                            var n = e[t];
                            if (n) {
                                for (i = 0, s = n.length; i < s; i++) {
                                    (a && n[i] === a || !a) && (n[i] = null);
                                }
                            }
                        } else {
                            for (i in e) {
                                if (e.hasOwnProperty(i) === !0) {
                                    for (; e[i].pop();) {}
                                }
                            }
                        }
                        return this;
                    }, this.close = function() {
                        return h.isConnected() === !0 && (this.client_solicitation = !0, _.send("unsubscribe:" + t)), this;
                    }, this.pub = function(t, a) {
                        for (var i = e[t], s = 0, n = i.length; s < n; s++) {
                            i[s].call(this, a);
                        }
                    }, q(t), this;
                };
            return h.version = n, h.CONFIG_CHANGES = j, h.connect = function(t) {
                return x[t] = new V(t), x[t];
            }, h.disconnect = function(t) {
                return _ && _.close(1000, t || "NORMAL"), h;
            }, h.isConnected = function() {
                return !(!_ || _.readyState !== _.OPEN);
            }, h.send = function(t) {
                return this.isConnected() === !0 && _.send(t), this;
            }, h.lastMessageTime = function() {
                return new Date(A);
            }, h.onmessage = function(t) {
                if (h.isConnected() === !1) {
                    return !1;
                }
                if (!t) {
                    return _.reconnect(v);
                }
                var e = _.isFake ? t : t.data;
                if (void 0 === e) {
                    return _.reconnect(v);
                }
                try {
                    "object" !== ("undefined" == typeof e ? "undefined" : i(e)) && (e = JSON.parse(e));
                } catch (a) {
                    return _.reconnect(b), B("error", {
                        error: "INVALID_JSON"
                    }), console.error("mensagem precisa ser um JSON vÃ¡lido", e);
                }
                if (e.pong === !0) {
                    return console.info("... websocket pong response"), clearTimeout(u), u = null, !1;
                }
                if (e.invalidChannel) {
                    return B("error", e, e.invalidChannel), F(e.invalidChannel), _ && _.isFake === !0 && _.reconnect(v, function() {
                        return this.channels.length > 0;
                    }), console.log("invalidChannel: ", e.invalidChannel);
                }
                if (e.unsubscribed) {
                    return B("close", e, e.unsubscribed), F(e.unsubscribed), _.reconnect(y);
                }
                if (!e.channelName) {
                    return _.reconnect(b), B("error", {
                        error: "NO_CHANNEL_NAME"
                    }), console.error('json precisa do atributo "channelName"', e);
                }
                if (!e.lastModified) {
                    return _.reconnect(b), B("error", {
                        error: "NO_LAST_MODIFIED"
                    }), console.error('json precisa do atributo "lastModified"', e);
                }
                if (void 0 === x[e.channelName]) {
                    return !1;
                }
                var s = x[e.channelName].data().lastModified;
                void 0 !== s && e.prevModified !== s && B("lost", {
                    error: "LOST_DATA"
                }), x[e.channelName].data(e), A = +new Date, B("message", e, e.channelName), _.isFake === !0 && (_.setLastModified(e.lastModified), _.reconnect(y));
            }, h.config = function(t) {
                var e = {
                    domain: f,
                    forcePolling: p,
                    pollingDelay: v,
                    channels: x,
                    connection: _
                };
                if (void 0 === t) {
                    return e;
                }
                if ("string" == typeof t) {
                    return e[t];
                }
                if (t.parasite === !0 && null !== D) {
                    return !1;
                }
                if (h.isConnected() === !0) {
                    return console.log("usocket.confg()\tAs configuraÃ§Ãµes sÃ³ sÃ£o aplicadas quando nÃ£o hÃ¡ conexÃ£o estabelecida."), !1;
                }
                D = t;
                var a;
                for (a in t) {
                    if (t.hasOwnProperty(a) === !0) {
                        var i = t[a];
                        switch (a) {
                            case "domain":
                                f = i;
                                break;
                            case "forcePolling":
                                p = i;
                                break;
                            case "pollingDelay":
                                v = i;
                        }
                    }
                }
                return !0;
            }, h.polling = function(t, e, a, i, n) {
                if (void 0 !== x[t] && void 0 === i) {
                    return console.error("NÃ£o Ã© possÃvel fazer polling em canal com conexÃ£o WebSocket ativa.");
                }
                e = e || l;
                var r = function(i) {
                    !i || i.channelName !== t && i.invalidChannel !== t || e.apply(a, [i.hasOwnProperty("invalidChannel"), i]), i || e.apply(a, [!1, null]);
                    for (var s = 0, n = UOLWebSocketCollection.length; s < n; s++) {
                        UOLWebSocketCollection[s] === r && (UOLWebSocketCollection.splice(s, 1), r = null);
                    }
                };
                UOLWebSocketCollection.push(r), s({
                    url: "https://" + f + "/sub?id=" + t + "&ifmod=" + (n || 0) + "&ts=" + +new Date
                });
            }, (t.UOLWebSocketCollection = t.UOLWebSocketCollection || []).push(h.onmessage), "function" != typeof t.UOLWebSocketCallback && (t.UOLWebSocketCallback = function(e) {
                for (var a = t.UOLWebSocketCollection, i = 0; i < a.length; i++) {
                    a[i].call(null, e);
                }
            }), h;
        }(window)), a["default"] = usocket;
    }, {}],
    49: [function(t, e, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.viewportChange = a.current = a.isMobile = a.SCREEN_LG_MIN = a.SCREEN_MD_MIN = a.SCREEN_SM_MIN = a.SCREEN_XS_MIN = a.SCREEN_LG_MAX = a.SCREEN_MD_MAX = a.SCREEN_SM_MAX = a.SCREEN_XS_MAX = a.LG = a.MD = a.SM = a.XS = void 0;
        var i = t("../utils"),
            s = a.XS = "xs",
            n = a.SM = "sm",
            l = a.MD = "md",
            r = a.LG = "lg",
            c = a.SCREEN_XS_MAX = 320,
            o = a.SCREEN_SM_MAX = 768,
            d = a.SCREEN_MD_MAX = 1023,
            u = a.SCREEN_LG_MAX = 1199,
            h = (a.SCREEN_XS_MIN = d - 1, a.SCREEN_SM_MIN = d - 1, a.SCREEN_MD_MIN = d - 1, a.SCREEN_LG_MIN = u - 1, a.isMobile = window.page.isMobile),
            f = function() {
                var t = window.innerWidth;
                return t <= c ? h ? s : l : t <= o ? h ? n : l : t <= d ? l : r;
            },
            p = a.current = f();
        a.viewportChange = function() {
            window.addEventListener("resize", function(t) {
                f() != p && (a.current = p = f(), console.log("viewportChange ", p), i.actionEvents.trigger("viewportChange", p));
            });
        }();
    }, {
        "../utils": 51
    }],
    50: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function n(t) {
            switch (t) {
                case "placar.eleicoes.dev.uol.com.br":
                case "placar.eleicoes.dev.bol.uol.com.br":
                    return "2016/" + window.page.round;
                case "placar.eleicoes.uol.com.br":
                case "placar.eleicoes.bol.uol.com.br":
                    return "2016/" + window.page.round;
                case "placar.folha.uol.com.br":
                    return "2016/" + window.page.round;
                default:
                    return "2016/" + window.page.round;
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = function() {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, a, i) {
                    return a && t(e.prototype, a), i && t(e, i), e;
                };
            }(),
            r = t("../libs/mithril"),
            c = i(r),
            o = t("../libs/request"),
            d = i(o),
            u = t("../libs/microevent"),
            h = i(u),
            f = t("../../components/brazil-cities/script.jsx"),
            p = i(f),
            g = t("../utils"),
            m = 1000,
            v = n(location.host),
            y = v + "/${CITY_ID}/${CITY_ID}_c${ROLE_ID}",
            b = v + "/${CITY_ID}/${CITY_ID}_${FILTER}",
            C = "_p${PAGE}",
            w = v + "/brasil.js",
            N = v + "/grandes_cidades.js",
            M = v + "/extratos.js",
            k = "https://ap.eleicoes.uol.com/candidate?locationId=${CITY_ID}&candidatoList=${CANDIDATES}&cargoId=13&callback=callbackEleicoesFav",
            O = window.page.roundpath + "/data/vereadores/${CITY_ID}_c13_p1",
            S = 1,
            j = 2,
            x = 3,
            E = {
                mayor: function() {
                    return 30 * m;
                },
                city_sap: function() {
                    return 60 * m;
                },
                councilman: function() {
                    return 60 * m;
                },
                br_resumo: function() {
                    return 30 * m;
                },
                grandes_cidades: function() {
                    return 60 * m;
                },
                extratos: function() {
                    return 60 * m;
                },
                cidades_2t: function() {
                    return 60 * m;
                }
            },
            _ = {
                "m.c11": g.MAYOR,
                "m.c13": g.COUNCILMAN,
                "m.co": g.COUNCILMAN,
                "m.pa": g.COUNCILMAN,
                "g.fa": g.COUNCILMAN_FAV,
                br_resumo: g.BRAZIL,
                grandes_cidades: g.SUMMARY,
                extratos: g.SECOND_ROUND,
                cidades_2t: g.SECOND_ROUND,
                "m.c11.sap": g.CITY_SAP
            },
            z = {
                "m.c11": g.RolesCode[g.MAYOR],
                "m.c13": g.RolesCode[g.COUNCILMAN],
                "g.fa": g.RolesCode[g.COUNCILMAN_FAV],
                "m.pa": g.RolesCode[g.COUNCILMAN_PA],
                "m.partido": g.RolesCode[g.COUNCILMAN_PA],
                "m.co": g.RolesCode[g.COUNCILMAN_CO],
                "m.coligacao": g.RolesCode[g.COUNCILMAN_CO],
                br_resumo: g.RolesCode[g.BRAZIL],
                grandes_cidades: g.RolesCode[g.SUMMARY],
                extratos: g.RolesCode[g.SECOND_ROUND],
                cidades_2t: g.RolesCode[g.SECOND_ROUND],
                "m.c11.sap": g.RolesCode[g.CITY_SAP]
            },
            A = function() {},
            D = new A;
        h["default"].mixin(A, !0), window.dataEvent = D;
        var I = {};
        window.webserviceDatas = I;
        var L = function(t) {
                var e = z[t.oc],
                    a = g.RolesName[_[e]];
                return t.ac ? t.ac + ":" + a + ":" + e : a + ":" + e;
            },
            R = function(t, e) {
                return I[t] || (I[t] = {
                    id: t,
                    lastUpdated: 0,
                    listeners: 0,
                    done: S,
                    json: {},
                    config: e
                });
            },
            P = function(t) {
                var e = L(t),
                    a = R(e);
                B(t), t.an && t.ac && (t.an = T(t)), JSON.stringify(t) != JSON.stringify(a.json) && (a.done = x, c["default"].startComputation(), a.lastUpdated = new Date, a.json = t, D.trigger(e, t), c["default"].endComputation());
            },
            T = function(t) {
                var e = p["default"].findById(t.ac);
                return e ? e.name : t.an;
            },
            B = function(t) {
                switch (t.oc) {
                    case "m.c11":
                        F(t.ac) === !0 && t.ca.forEach(function(e) {
                            e.s = U(t.ac, e);
                        });
                        break;
                    case "br_resumo":
                        t.cd.forEach(function(t) {
                            F(t.ac) === !0 && (t.s = window.servicesStatus.replaceSituation[t.ac].cidade);
                        });
                        break;
                    case "grandes_cidades":
                    case "extratos":
                    case "cidades_2t":
                        var e = function(e) {
                            t.subchannels.hasOwnProperty(e) === !0 && F(e) === !0 && t.subchannels[e].ca.forEach(function(t) {
                                t.s = U(e, t);
                            });
                        };
                        for (var a in t.subchannels) {
                            e(a);
                        }
                }
            },
            F = function(t) {
                return window.servicesStatus.replaceSituation.hasOwnProperty(t);
            },
            U = function(t, e) {
                return 0 == F(t) ? e.s : window.servicesStatus.replaceSituation[t][e.ps] || "0";
            },
            q = function(t, e) {
                console.error("[request] catch", t), e.lastRequest = 0;
            },
            G = {};
        G.request = function(t) {
            switch (t.lastRequest = new Date, t.cc.toString()) {
                case g.MAYOR:
                    G.mayor(t);
                    break;
                case g.COUNCILMAN:
                    G.councilman(t);
                    break;
                case g.COUNCILMAN_FAV:
                    G.councilmanFavorite(t);
                    break;
                case g.BRAZIL:
                    G.brazilExtract(t);
                    break;
                case g.SUMMARY:
                    G.brazilSummary(t);
                    break;
                case g.SECOND_ROUND:
                    G.cities2T(t);
                    break;
                case g.CITY_SAP:
                    G.cityProgress(t);
            }
        }, G.cityProgress = function(t) {
            var e = t.ac,
                a = y.replace(/\$\{CITY_ID\}/g, e).replace(/\$\{ROLE_ID\}/g, g.MAYOR);
            t.conn = (0, d["default"])({
                jsonp: "callbackEleicoes",
                url: a + "_sap.js",
                config: t,
                channel: e,
                role: g.CITY_SAP,
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        }, G.brazilExtract = function(t) {
            t.conn = (0, d["default"])({
                jsonp: "callbackEleicoes",
                url: w,
                config: t,
                role: g.BRAZIL,
                channel: "br-resumo",
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        }, G.brazilSummary = function(t) {
            t.conn = (0, d["default"])({
                jsonp: "callbackEleicoes",
                url: N,
                config: t,
                role: g.SUMMARY,
                channel: "grandes-cidades",
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        }, G.cities2T = function(t) {
            t.conn = (0, d["default"])({
                jsonp: "callbackEleicoes",
                url: M,
                config: t,
                role: g.SECOND_ROUND,
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        }, G.mayor = function(t) {
            var e = t.ac,
                a = y.replace(/\$\{CITY_ID\}/g, e).replace(/\$\{ROLE_ID\}/g, g.MAYOR);
            t.conn = (0, d["default"])({
                jsonp: "callbackEleicoes",
                url: a + ".js",
                config: t,
                channel: e,
                role: g.MAYOR,
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        }, G.councilman = function(t) {
            var e = t.ac,
                a = t.page || t.paginacao && t.paginacao.atual || void 0,
                i = void 0;
            "1turno" == window.page.round ? (i = void 0 === t.filter ? y.replace(/\$\{CITY_ID\}/g, e).replace(/\$\{ROLE_ID\}/g, g.COUNCILMAN) : b.replace(/\$\{CITY_ID\}/g, e).replace(/\$\{FILTER\}/g, t.filter), a && (i += C.replace(/\$\{PAGE\}/g, a))) : i = O.replace(/\$\{CITY_ID\}/g, e), t.conn = (0, d["default"])({
                jsonp: "callbackEleicoes",
                url: i + ".js",
                config: t,
                channel: e,
                role: g.COUNCILMAN,
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        }, G.councilmanFavorite = function(t) {
            var e = p["default"].getActive().id,
                a = k.replace(/\$\{CITY_ID\}/g, e).replace(/\$\{CANDIDATES\}/g, t.ca.join(","));
            t.conn = (0, d["default"])({
                jsonp: "callbackEleicoesFav",
                url: a,
                config: t,
                role: g.COUNCILMAN,
                success: P,
                fail: function(e) {
                    return q(e, t);
                }
            });
        };
        var V = function(t) {
                try {
                    t.config.conn.destroy();
                } catch (e) {}
                delete I[t.id];
            },
            J = function() {
                function t() {
                    var e = this;
                    return s(this, t), this.config = {
                        socket: !1
                    }, this.onUpdateEvent = function(t) {
                        void 0 !== e.triggerCallback && e.triggerCallback(t), t.lastModified && (e.config.lastModified = t.lastModified);
                    }, this;
                }
                return l(t, [{
                    key: "destroy",
                    value: function() {
                        D.unbind(this.wid, this.onUpdateEvent), this.data.listeners -= 1, this.data.listeners <= 0 && V(this.data);
                    }
                }, {
                    key: "brazilExtract",
                    value: function() {
                        return this.config.oc = g.BRAZIL, this.config.cc = g.BRAZIL, this.config.role = g.RolesName[g.BRAZIL], this.config.socket = !0, this;
                    }
                }, {
                    key: "brazilSummary",
                    value: function() {
                        return this.config.oc = g.RolesCode[g.SUMMARY], this.config.cc = g.SUMMARY, this.config.role = g.RolesName[g.SUMMARY], this;
                    }
                }, {
                    key: "cities2T",
                    value: function() {
                        return this.config.oc = g.RolesCode[g.SECOND_ROUND], this.config.cc = g.SECOND_ROUND, this.config.role = g.RolesName[g.SECOND_ROUND], this;
                    }
                }, {
                    key: "city",
                    value: function(t) {
                        return this.config.ac = t, this;
                    }
                }, {
                    key: "mayor",
                    value: function() {
                        return this.config.role = g.RolesName[g.MAYOR], this.config.cc = g.MAYOR, this.config.oc = g.RolesCode[g.MAYOR], "2turno" == window.page.round && (this.config.socket = !0), this;
                    }
                }, {
                    key: "councilman",
                    value: function() {
                        return this.config.role = g.RolesName[g.COUNCILMAN], this.config.cc = g.COUNCILMAN, this.config.oc = g.RolesCode[g.COUNCILMAN], this.page(1), this;
                    }
                }, {
                    key: "cityProgress",
                    value: function() {
                        return this.config.role = g.RolesName[g.CITY_SAP], this.config.cc = g.CITY_SAP, this.config.oc = g.RolesCode[g.CITY_SAP], this;
                    }
                }, {
                    key: "favoriteCouncilman",
                    value: function(t) {
                        return this.config.role = g.RolesName[g.COUNCILMAN], this.config.cc = g.COUNCILMAN_FAV, this.config.oc = g.RolesCode[g.COUNCILMAN_FAV], this.config.ca = t || [], this;
                    }
                }, {
                    key: "page",
                    value: function(t) {
                        return this.config.page = t, this;
                    }
                }, {
                    key: "filter",
                    value: function(t) {
                        return this.config.filter = t, this;
                    }
                }, {
                    key: "parties",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        return this.councilman(), this.config.oc = g.RolesCode[g.COUNCILMAN_PA], void 0 === t ? (this.filter("pa"), this.page(void 0)) : (t = (0, g.toSlug)(t), this.filter(t + "_partido"), this.page(1)), this;
                    }
                }, {
                    key: "coalitions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        return this.councilman(), this.config.oc = g.RolesCode[g.COUNCILMAN_CO], void 0 === t ? (this.filter("co"), this.page(void 0)) : (t = (0, g.toSlug)(t), this.filter(t + "_coligacao"), this.page(1)), this;
                    }
                }, {
                    key: "then",
                    value: function(t) {
                        switch (this.wid = L(this.config), this.triggerCallback = t, this.data = R(this.wid, this.config), this.data.listeners += 1, D.bind(this.wid, this.onUpdateEvent), this.data.done) {
                            case x:
                                break;
                            case S:
                                this.data.done = j, G.request(this.config);
                        }
                        return this;
                    }
                }, {
                    key: "isMayor",
                    get: function() {
                        return this.config.cc == g.MAYOR;
                    }
                }, {
                    key: "isCouncilman",
                    get: function() {
                        return this.config.cc == g.COUNCILMAN;
                    }
                }]), t;
            }();
        ! function() {
            var t = 0;
            setInterval(function() {
                var e = Object.keys(I);
                if (0 !== e.length) {
                    void 0 === e[t] && (t = 0);
                    var a = e[t],
                        i = I[a];
                    return t += 1, i.listeners <= 0 ? (console.info("destroy connection, nobody listening: ", i), void V(i)) : void(void 0 === i.config.conn.connSocket && new Date - i.config.lastRequest > E[i.config.role]() && (console.log("new request: ", i.config), G.request(i.config)));
                }
            }, m);
        }(), a["default"] = function() {
            return new J;
        };
    }, {
        "../../components/brazil-cities/script.jsx": 2,
        "../libs/microevent": 44,
        "../libs/mithril": 45,
        "../libs/request": 46,
        "../utils": 51
    }],
    51: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }

        function s(t, e) {
            e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
            var a = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
                i = a.exec(e);
            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.removeDuplicatesBy = a.download = a.storage = a.debounce = a.throttle = a.getVotesLabel = a.json2data = a.candidateImageError = a.candidateImage = a.hasDefinedSituation = a.candidateStatus = a.removeAccents = a.is2T = a.has2T = a.capitalizeName = a.changeRoundLink = a.verifyLinkRaioX = a.getPageTitle = a.unescapeHtmlEncode = a.invertObject = a.extend = a.floatToDegress = a.percentToFloat = a.formatNumber = a.floatToPercent = a.percentFrom = a.percentOf = a.fixDecimal = a.toSlug = a.isNumber = a.isString = a.isArray = a.RolesCode = a.RolesName = a.CITY_SAP = a.SECOND_ROUND = a.SUMMARY = a.BRAZIL = a.COUNCILMAN_CO = a.COUNCILMAN_PA = a.COUNCILMAN_FAV = a.COUNCILMAN = a.MAYOR = a.actionEvents = a.CANDIDATE_CANCELLED = void 0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        a.queryString = s;
        var l = t("./libs/request"),
            r = i(l),
            c = t("./libs/microevent"),
            o = i(c),
            d = function() {},
            u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAACWCAYAAAA/mr2PAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AgPDhEuNxLpYAAACqhJREFUeNrtnetvXMUZxp9n5ux67dhxXG/WsXMB09ycREppAghIIQFSzKWFKjRKi9RICJBKelP/AJCQKvVLPyNRqaraClq3KUhUaculKShAqjiA0pSCgQRI7PVlvWs7JtnNnnOefvCCQoGEEK/3nOz8vuRbdjy/855558w7M4DD4XA4HA6Hw+FwOBwOh8PhcNQexrXhg4ODTY2NjQt9328n2Qqg1RiTCoKAJNtILpB0mmQuDMMSAAGYAnDCGDMehmFh4cKFIyRDJ66KZLPZeQAy1tq11tq1AFYBWAJgIYA2km2Smj7l79IZ/04AmJQ0RjIH4Kikt8IwPCRpYHJysrBy5cqSEzcLjI2NtXiet0HSzZI2k7xU0nySTRf6f0sSyWkABQD/Ifmc7/svFAqFQ1EXGFlxR48eTbW2tl4haTuAXpJLJSVJVqvNAYCSpLcl7fZ9/4mOjo7XSQZO3Ockn8+3StoB4F4Al5O0c/n7kkok94Vh+Eh7e/sTURwHvag1aHJyst33/R+SvE9SZxUj7LOfZrJB0haSnRMTEwskPU7yZJT6yUQt0oIguB/A9wF01ULaGfIMgB5JD46Pj98VtQc8MuIkGUm9ku4nmYnEOEJS0lKSD+RyuSsl0Yn7ZPb4ZZI7AVwSqSRgJuovJ3n3sWPH2py4j0dbg+d5dwG4ppavx7PISwK4I5VKXePEfXxsWwHgTgAtkZ03kUustXcWCoUFThyAvXv3emEY3gJgXdSSpf/DStpaLpevjcJYV/OOWr169Spr7R0AmhBxSC7yPO+2I0eOzK9rcXv37vUaGhquA7AeMaAy1m1qaWm5rK7F9fT0tFemAE2ID93GmGvrWlwymVwl6XLEaJVC0jySG/P5fGvdiiO5wRjTFsUpwDnmdWsBLKtLcZISklZLmoeYQXJJrb/u1Ezc6OhoexiGXXGKtjNY4Pt+S12KM8YsMMa0xVAaJBnPq+3CSs3EhWHoSyrHURzJsqSgLsUBGCaZRTwpBEFwoi7FdXR0TEsakRS7KitJJ40xpXqNOAAYJHkqhhGXlzRZz/O4rKRiDCNuolQqTdetuCAIsgBOxzA5GZ2amirU86tyCMCpGIob6enpOVG34irjRE6SYuRtmuRQrRtR64/MJZLvAYhTZlkMwzBb1+JKpdJpSYMx23hxEsD7dS0ukUhYzJQExCmj9H3fN3Urbma/BW8ieSPJRIwi7pJEInH31NRUui7FFQqFZWEY7gSwOmYZpZW0vVwub5OUrMdX5SaSmxHtyq7Pog3AbUNDQ/PrStzAwEBDEARL47iIWok6Q3JlY2PjvLoSl0gkaK1NIt40S2quu1dlGIaKszVJp4wxH9SVuAMHDpQxsx87rtIEYDKRSJTqStz27dsDkiNR2yx4Pu4AHJucnCzXlbgKx6LwBeKLvulJDnieV6w7cZKOSToSsw/MH1IEcDiTyZysO3Ht7e1DJJ/GzOpAEAdbkkJJIcl/BUFwoJbfWGtWY0YyHB8ffxLAIgBrwzBsN8ZsBJCKaDIyLukgyREAu9Pp9EBN55IR6JSG4eFhj+Rlnuf9nOQtUSuSlZST9HCxWHyM5Kmurq5Src8/qflxGSRLAEoA/p3P5/cAuA5Ac5TEkXxF0p+XLFkyHpU2Reo7Yblcfk3SSNRek2EYHsrn87kotStS4orF4lGSoxEb4nwAx6N2tlekxKVSqanKWVpRKk0ft9a+F7WEKVLixsbGTks6UBnzokI2CIIBJ+4srF27tkzyIMlCFNpTmbe9EQTB+07c2bM3JZPJd8IwPBSR9pyQ9GImkyk6ceegubl5zFq7NwqvS0nvSHqJpO/EnfspD0ul0tMAXkJt6y1LAP5aLBbfQASJZL1HR0fHfwH8WtKbc70NSzP4kp4qFou/W7ZsWSRL5L0oNoqkn81mdycSiWljzD0AbgDQOEc/PwTgj8aY3zz66KMDiChR3zjPsbGxrxpjHgRwe+Xwz2pGW0HSw+Vy+ZednZ0fRLljol4ap3Q6/SrJPgD5Kv9WQPLlcrn8ZNSlxUEcSIaSXgPwTpWjzZf0z0WLFsViX3osilETicRoZeyp5gMShGE4QPK0EzeLAVHt9S9JqBQvyYlz1Le46elpzsWprHHaNRQLcalUqglVPq+ZpDHGdB4+fDjpxM1Wnh4EC0l2VXmMM2EYXtrW1uY5cbPVSGO6ASyt8s9YAOtbWlqanLhZIJvNziO5odpbskhakj2lUqnbiZsFPM9bCuBrlYioNl2e51330EMPGSfuAujr67Mkb5LUM0e1lk2Sbt21a9dyJ+4C2Lp163pjzHcAzNntGpKustZ+t9aHZcdW3OjoaKekH0i6co4rm5sA7JB0qyTjxJ0HuVxusbV2F4BtJOc0Pa88JCsA/DSfz/f29/dHclIeufW4QqFwaRiGPwFwL8mabY6vrLwflPRIuVzui9pST2TESWrI5XLXWmvvB9BbuXmYNW5TKOk9Y8yvjDGPt7a2vhuVy26jsFuHw8PDlySTyW+T3ClpTQSPtD8B4G8Afjs5OflMd3d3sW7F9fX12c2bN2dI3mit3SHpGgALonoPQWXz5fsA/hIEwZ8kvdLR0fEBarQMxBp0gM3lch2SrrfWbsPMtqp0XC6OqOxIfVvSHt/3d/u+/8rixYtPXrTiJCWy2ezyVCq1RdLNJK+QlJnrO75nkSKAo5KeJfm053n7W1pa8nO1vbiq4vr6+mxvb++XisXiGpJft9ZuxsyFQq24SKhE4BCAfQD2+L6/PwiCoWpnoazSH5OamJhYI+lqSdcD2ACgC0BDTO/S+bxj4CTJtwE8D+D5crl8MJPJjJBUZMUNDg42eZ7X6XneRknXk7yK5GpJjRerrM8QKMycg5IleVDSfgD7EonEQHNzc3629iFccIceP368vaGhYb0xZgvJGyStAtBW7eLVGIk8BSAL4NUwDJ+z1r44PT391oWWtvOLRlcymVzqed4mSTdUUvnFlUTDCft0AkklAK8D2CfpBZL92Wx2ZN26daerKq4ibA3JXpLfILkqCl84YoiPmcrsgwCeArAvl8sNnM8+c36OUOf4+HhLGIZfMcZ8k+QtALpJNrr+v/CEplLL+YakZ33f32OtPdTe3n7iXAnNWcX19/cnuru7N5L8FoDbJS2P2cHXcUpoAknHSP5DUh+A/el0euq8xPX19dktW7asMMbsILlN0gqSDa6L50Tiaczc8vUMgMdKpVL/p80JPyEul8vNJ3mbpJ0kt1QuLXfUYGIP4E1Jf5D0+3Q6PXDm6/Nj4gqFwgJJD0i6pzKOuQyxxq/QygECL4Rh+It0Ov38h/I+Ejc8PNzhed59xpgfAVjoui1aUwkAL5fL5Z9lMpm/k5ypqTh8+HDS87wdxpgHnLRIYiVdba398fj4+Gp8OFnOZDLrSH4PQKfro2hC0hpjrrbWbgIqm/ettcsx89XeEe0xr1lSz0cRFwSBxdxUCjsuMOpINn0kzhEvf05cjHHinDiHE+dw4pw4hxPncOKcOIcT53DiHE6cE+dw4hxOnBPncOIcTpzDiXPiHE6cw4lz4hxOnMOJczhxTpzDiXM4cU6cw4lzOHFOnMOJczhxDifOiXM4cQ4nzolzOHEOJ87hxF1MeACQSCSKkt6V5LkuiXikGTMCAP8DF3vAU0WtauwAAAAASUVORK5CYII=";
        a.CANDIDATE_CANCELLED = "A votação recebida não é válida para o candidato, pois ele está inelegível.";
        o["default"].mixin(d, !1);
        var h = a.actionEvents = new d;
        window.actionEvents = h;
        var f = a.MAYOR = "11",
            p = a.COUNCILMAN = "13",
            g = a.COUNCILMAN_FAV = "g.fa",
            m = a.COUNCILMAN_PA = "pa",
            v = a.COUNCILMAN_CO = "co",
            y = a.BRAZIL = "br_resumo",
            b = a.SUMMARY = "grandes_cidades",
            C = a.SECOND_ROUND = "cidades_2t",
            w = a.CITY_SAP = "m.c11.sap",
            N = a.RolesName = {},
            M = a.RolesCode = {};
        N[f] = "mayor", N[p] = "councilman", N[g] = "councilman.fav", N[y] = "br_resumo", N[b] = "grandes_cidades", N[C] = "cidades_2t", N[w] = "city_sap", M[f] = "m.c11", M[p] = "m.c13", M[m] = "m.pa", M[v] = "m.co", M[g] = "g.fa", M[y] = "br_resumo", M[b] = "grandes_cidades", M[C] = "cidades_2t", M[w] = "m.c11.sap";
        var k = 80,
            O = (a.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            }, a.isString = function(t) {
                return "string" == typeof t;
            }, a.isNumber = function(t) {
                return "number" == typeof t;
            }),
            S = (a.toSlug = function(t) {
                var e = /[ÂÁÀÃÄÊÉÈËÎÍÌÏÔÓÒÕÖÛÚÙÜÇÑ\+\-\s]/g,
                    a = /[ÂÁÀÃÄ]/g,
                    i = /[ÊÉÈË]/g,
                    s = /[ÎÍÌÏ]/g,
                    n = /[ÔÓÒÕÖ]/g,
                    l = /[ÛÚÙÜ]/g,
                    r = /[Ç]/g,
                    c = /[Ñ]/g,
                    o = /[^a-zA-Z0-9_\+]/g,
                    d = /[ ]/g,
                    u = x(t.toLowerCase()).toUpperCase();
                return u.indexOf("*") + 1 == u.length && (u = u.substr(0, u.length - 1)), u.search(e) != -1 && (u = u.replace(d, "-"), u = u.replace(a, "A"), u = u.replace(i, "E"), u = u.replace(s, "I"), u = u.replace(n, "O"), u = u.replace(l, "U"), u = u.replace(r, "C"), u = u.replace(c, "N"), u = u.replace("'", ""), u = u.replace(o, "-")), u.toLowerCase();
            }, a.fixDecimal = function(t) {
                return O(t) ? Math.round(100 * t) / 100 : t;
            }),
            j = (a.percentOf = function(t, e) {
                return O(t) && O(e) ? S(100 * t / e) : NaN;
            }, a.percentFrom = function(t, e) {
                return O(t) && O(e) ? t / 100 * e : NaN;
            }, a.floatToPercent = function(t) {
                return /,/.test(t) === !0 ? t : (+t).toFixed(2).toString().replace(".", ",");
            }, a.formatNumber = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (t = t.toString(), 1 == /\./.test(t)) {
                    return t;
                }
                for (var e = t.split("."), a = e[0], i = e.length > 1 ? "." + e[1] : "", s = /(\d+)(\d{3})/; s.test(a);) {
                    a = a.replace(s, "$1.$2");
                }
                return a + i;
            }, a.percentToFloat = function(t) {
                return t = t || "", 1 == isNaN(t) ? parseFloat(parseFloat(t.toString().replace(",", ".")).toFixed(2)) : parseFloat((+t).toFixed(2));
            }),
            x = (a.floatToDegress = function(t) {
                return 360 * t / 1000 * 10;
            }, a.extend = function() {
                for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) {
                    e[a] = arguments[a];
                }
                for (var i = 1; i < e.length; i++) {
                    for (var s in e[i]) {
                        e[i].hasOwnProperty(s) && (e[0][s] = e[i][s]);
                    }
                }
                return e[0];
            }, a.invertObject = function(t) {
                for (var e = {}, a = Object.keys(t), i = 0, s = a.length; i < s; i++) {
                    e[t[a[i]]] = a[i];
                }
                return e;
            }, a.unescapeHtmlEncode = function(t) {
                var e = document.createElement("div");
                return e.innerHTML = t, e.innerText || e.textContent;
            }),
            E = (a.getPageTitle = function(t, e) {
                var a = t.replace(/\$\{page\.site\.site\}/g, window.page.site.site);
                return e && (a = a.replace(/\$\{city\.name\}/g, I(e.name)), a = a.replace(/\$\{city\.uf\}/g, e.uf), window.cities2t && cities2t[e.id] && (a = a.replace(/\$\{candidate1\}/g, I(cities2t[e.id].candidatos[0].nome)), a = a.replace(/\$\{candidate2\}/g, I(cities2t[e.id].candidatos[1].nome)))), a;
            }, a.verifyLinkRaioX = function(t, e) {
                for (var a in t) {
                    if (a == e.id) {
                        return t[a];
                    }
                }
                return !1;
            }, {
                "1turno": "2turno",
                "2turno": "1turno"
            }),
            _ = document.getElementById("change-round"),
            z = (a.changeRoundLink = function(t, e) {
                if (_) {
                    var a = void 0;
                    a = "grandes-cidades" == t ? window.page.basepath + "/" + E[window.page.round] + "/grandes-cidades/" : 0 == L(e.id) ? 0 == window.page.isMobile ? window.page.basepath + "/2turno/grandes-cidades/" : window.page.basepath + "/" + E[window.page.round] + "/" : e.path.replace(window.page.round, E[window.page.round]), _.setAttribute("href", a + location.search);
                }
            }, function(t) {
                return t.toUpperCase();
            }),
            A = function(t) {
                return t.toLowerCase();
            },
            D = function(t, e) {
                return " d'" + e.toUpperCase();
            },
            I = a.capitalizeName = function(t) {
                var e = x(t).toLowerCase().replace(/(?:^|\s)\S/g, z).replace(/ ([a-z]{2}) /gi, A).replace(/ d([a-z]{1,2}) /gi, A).replace(/ d'([a-z])/gi, D).replace(/([A-ZÁÉÍÓÚ] )/g, A).replace(/^&aacute;/, "Á").replace(/^&oacute;/, "Ó").replace(/^&eacute;/, "É").replace(/^&iacute;/, "Í").replace(/ &uacute;/, " Ú").replace(/ &aacute;/, " Á").replace(/ &oacute;/, " Ó").replace(/ &eacute;/, " É").replace(/ &iacute;/, " Í").replace(/ &uacute;/, " Ú").replace(/\-(.)/gi, z).replace(/^Acm /, "ACM ");
                return e = e.replace(/( [xv]?i+[xv]?)$/i, z), "Senador la Rocque" == e ? "Senador La Rocque" : ("Carlos Grana Pt" == e && (e = "Carlos Grana"), "Airton da Cgtb" == e && (e = "Airton da CGTB"), "Alex do Pt" == e && (e = "Alex do PT"), "Suél do Pstu" == e && (e = "Suél do PSTU"), "Dr.emerson" == e && (e = "Dr. Emerson"), "Dr.deodalto" == e && (e = "Dr. Deodalto"), "Jhc" != e && "Ac" != e && "Ph" != e && "Pc" != e || (e = e.toUpperCase()), e);
            },
            L = a.has2T = function(t) {
                return void 0 !== window.cities2t[t];
            },
            R = (a.is2T = "2turno" === window.page.round, a.removeAccents = function(t) {
                var e = /[ÂÁÀÃÄÊÉÈËÎÍÌÏÔÓÒÕÖÛÚÙÜÇÑ\+\-\s]/g,
                    a = /[ÂÁÀÃÄ]/g,
                    i = /[ÊÉÈË]/g,
                    s = /[ÎÍÌÏ]/g,
                    n = /[ÔÓÒÕÖ]/g,
                    l = /[ÛÚÙÜ]/g,
                    r = /[Ç]/g,
                    c = /[Ñ]/g,
                    o = t.toUpperCase();
                return o.indexOf("*") + 1 == o.length && (o = o.substr(0, o.length - 1)), o.search(e) != -1 && (o = o.replace(a, "A"), o = o.replace(i, "E"), o = o.replace(s, "I"), o = o.replace(n, "O"), o = o.replace(l, "U"), o = o.replace(r, "C"), o = o.replace(c, "N")), o.toLowerCase();
            }, a.candidateStatus = function B(t, e) {
                var a = void 0;
                if (void 0 == e || void 0 == t) {
                    return B.RUNNING;
                }
                if ("object" == ("undefined" == typeof e ? "undefined" : n(e))) {
                    if (!e.num) {
                        return B.RUNNING;
                    }
                    t.ca.forEach(function(t, i) {
                        t.num == e.num && (a = i);
                    });
                } else {
                    a = e, e = t.ca[e];
                }
                return void 0 == e ? B.RUNNING : 1 == e.van ? B.CANCELLED : 1 == e.s ? B.ELECTED : 2 == e.s ? B.REELECTED : 3 == e.s ? B.SECTERM : 5 == e.s && j(t.sap) >= k ? B.VIRT_ELECTED : 0 == e.s && "0" != P(t.ca) ? B.LOST : B.RUNNING;
            });
        R.ELECTED = {
            status: "elected",
            value: "eleito"
        }, R.REELECTED = {
            status: "reelected",
            value: "reeleito"
        }, R.SECTERM = {
            status: "secterm",
            value: "2º turno"
        }, R.LOST = {
            status: "lost",
            value: ""
        }, R.CANCELLED = {
            status: "cancelled",
            value: ""
        }, R.RUNNING = {
            status: "running",
            value: ""
        }, R.VIRT_ELECTED = {
            status: "virt-elected",
            value: ""
        }, R.PERCENT_TO_VIRT_ELECTED = k;
        var P = a.hasDefinedSituation = function(t) {
                for (var e = /[123]/, a = t.length, i = 0; i < a; i++) {
                    var s = t[i];
                    if (e.test(s.s) === !0 && "0" == s.van.toString()) {
                        return s.s.toString();
                    }
                }
                return "0";
            },
            T = (a.candidateImage = function(t, e) {
                return void 0 !== t && void 0 !== e && e.num ? "https://el.imguol.com.br/2016/placar/" + t.uf + "/" + t.id + "_11_" + e.num + ".jpg?v=2t" : u;
            }, a.candidateImageError = function(t) {
                return !!t.target && void setTimeout(function() {
                    t.target.setAttribute("src", u);
                }, 0);
            }, a.json2data = function(t) {
                return encodeURIComponent(JSON.stringify(t));
            }, a.getVotesLabel = function(t) {
                return parseInt(t.toString().replace(/\./g, "")) > 1 ? "votos" : "voto";
            }, a.throttle = function(t, e, a) {
                e || (e = 250);
                var i, s;
                return function() {
                    var n = a || this,
                        l = +new Date,
                        r = arguments;
                    i && l < i + e ? (clearTimeout(s), s = setTimeout(function() {
                        i = l, t.apply(n, r);
                    }, e)) : (i = l, t.apply(n, r));
                };
            }, a.debounce = function(t, e, a) {
                var i;
                return function() {
                    var s = this,
                        n = arguments,
                        l = function() {
                            i = null, a || t.apply(s, n);
                        },
                        r = a && !i;
                    clearTimeout(i), i = setTimeout(l, e), r && t.apply(s, n);
                };
            }, a.storage = function() {
                function t(t) {
                    if (l === !0) {
                        var a = localStorage.getItem(t);
                        if (null !== a) {
                            try {
                                a = JSON.parse(localStorage.getItem(t));
                            } catch (i) {}
                        }
                        return a;
                    }
                    return e(t);
                }

                function e(t) {
                    var e = new RegExp(t + "=", "g"),
                        a = new RegExp(".*?" + t + "=(.*?)(;.*?$|$)", "g");
                    if (document.cookie.match(e)) {
                        var i = document.cookie.replace(a, "$1");
                        try {
                            return JSON.parse(unescape(i));
                        } catch (s) {
                            return unescape(i);
                        }
                    }
                    return null;
                }

                function a(t, e) {
                    try {
                        "string" != typeof e && (e = JSON.stringify(e));
                    } catch (a) {
                        return;
                    }
                    if (l === !0) {
                        localStorage.setItem(t, e);
                    } else {
                        if (e.length < 150) {
                            return n(t, e, 15);
                        }
                    }
                    return e;
                }

                function i(t) {
                    l === !0 ? localStorage.removeItem(t) : s(t);
                }

                function s(t, e) {
                    document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; " + (e ? "domain=" + e : "");
                }

                function n(t, e, a, i) {
                    e = escape(e);
                    var s = new Date;
                    a && s.setDate(s.getDate() + a), document.cookie = t + "=" + e + (a ? "; expires=" + s.toUTCString() : "") + "; path=/; " + (i ? "domain=" + i : "");
                }
                var l = function(t) {
                    var e;
                    try {
                        e = !!t.localStorage, e === !0 && (localStorage.setItem("__test", ""), localStorage.removeItem("__test"));
                    } catch (a) {
                        e = !1;
                    }
                    return e;
                }(window);
                return {
                    storageValidation: l,
                    getItem: t,
                    getCookie: e,
                    setItem: a,
                    setCookie: n,
                    removeItem: i,
                    removeCookie: s
                };
            }());
        a.download = function(t, e) {
            var a = T.getItem("cache") || {};
            return new Promise(function(i, s) {
                return void 0 === a[t] || a[t].version !== window.version ? (0, r["default"])({
                    jsonp: e,
                    url: t,
                    fail: s,
                    success: function(e) {
                        a[t] = {
                            version: window.version,
                            data: e
                        }, T.setItem("cache", a), i(a[t].data);
                    }
                }) : void i(a[t].data);
            });
        }, a.removeDuplicatesBy = function(t, e) {
            for (var a, i = [], s = {}, n = {}, l = 0, r = e.length; l < r; ++l) {
                a = e[l][t], s[a] !== n && (i.push(e[l]), s[a] = n);
            }
            return i;
        };
    }, {
        "./libs/microevent": 44,
        "./libs/request": 46
    }],
    52: [function(t, e, a) {
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        t("../libs/fullscreen");
        var s = t("../libs/metrics"),
            n = i(s),
            l = t("../libs/emergency"),
            r = (i(l), t("../../components/favorite-cities/script.jsx"), t("../../components/city-info/script.jsx"), t("../../components/cities-list/script.jsx")),
            c = (i(r), t("../libs/dom")),
            o = t("../../components/score-country/script.jsx"),
            d = i(o),
            u = t("../../components/big-cities/script.jsx"),
            h = i(u),
            f = t("../../components/cities-notification/script.jsx"),
            p = i(f),
            g = t("../../components/brazil-cities/script.jsx"),
            m = i(g),
            v = t("../utils"),
            y = t("../libs/geoloc"),
            b = (i(y), t("../../components/search-city/script.jsx")),
            C = t("../../components/city-mayor/script.jsx"),
            w = i(C),
            N = t("../../components/city-councilman/script.jsx"),
            M = i(N),
            k = t("../../components/web-banner/script.jsx"),
            O = i(k),
            S = t("../../components/share/script.jsx"),
            j = i(S),
            x = t("../../components/scenario-cities/script.jsx"),
            E = i(x),
            _ = t("../../components/disclaimer/script.jsx"),
            z = i(_),
            A = t("../../components/router/script.jsx"),
            D = i(A),
            I = t("../../components/favorite-management/script.jsx"),
            L = void 0;
        D["default"].onChange(function(t) {
            if (t && t.state) {
                var e = !1,
                    a = !1;
                t.state.cityId && (cities.setActive(t.state.cityId, {
                    route: !1
                }), P(), e = !0), /grandes-cidades/.test(t.state.path) === !0 && (R(null, !1), a = !0), a === !0 ? n["default"].hit("big-cities") : e === !0 && n["default"].hit("city");
            }
        }), D["default"].replace({
            title: document.title,
            path: location.pathname
        });
        var R = function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    a = arguments[2],
                    i = (0, v.getPageTitle)(window.page.metaBigCitiesTitle),
                    s = t || c.DOM.findOne(".score-container");
                c.DOM.addClass(s, "country-bar-open"), e !== !1 && (D["default"].push({
                    title: i,
                    path: window.page.basepath + "/" + window.page.round + "/grandes-cidades/"
                }), n["default"].hit("big-cities")), document.title = i, page.isBigCitiesPage = !0, page.isCityPage = !1, v.actionEvents.trigger("pageChange", "right"), (0, v.changeRoundLink)("grandes-cidades"), "undefined" != typeof a && (a = cities.citiesById[a], a && L.scrollToCityInRegion(a));
            },
            P = function(t, e) {
                if (page.isCityPage !== !0) {
                    var a = t || c.DOM.findOne(".score-container");
                    if (c.DOM.removeClass(a, "country-bar-open"), page.isBigCitiesPage = !1, page.isCityPage = !0, void 0 === window.city || e) {
                        var i = window.city && window.city.id;
                        if (void 0 == i) {
                            var s = I.favCities.getFavorites();
                            i = s.length > 0 ? s[0] : 71072;
                        }
                        m["default"].setActive(i, {
                            route: !0,
                            forceRoute: !0
                        });
                    }(0, v.changeRoundLink)("city", window.city), v.actionEvents.trigger("pageChange", "left");
                }
            };
        window.closeBigCitiesPage = P;
        var T = function() {
            var t = "placar brasil",
                e = c.DOM.findOne(".score-country-container"),
                a = (c.DOM.findOne(".score-fav-bar"), c.DOM.findOne(".score-container"));
            c.DOM.Event(e).on("click", function(e) {
                e.preventDefault();
                var i = !1,
                    s = e.target || e.srcElement,
                    l = c.DOM.parents(s, ".notification"),
                    r = c.DOM.parents(s, ".country-middle-container"),
                    o = c.DOM.parents(s, ".country-top"),
                    d = c.DOM.parents(s, ".raiox-container"),
                    u = c.DOM.hasClass(s, "view-all") || 1 === c.DOM.parents(s, ".view-all").length;
                if (!c.DOM.hasClass(e.target, "icon-close-2")) {
                    if (d.length) {
                        return n["default"].click("placar brasil", "link_raiox"), void(location.href = "//" + window.page.host + window.page.basepath + "/" + page.round + "/raio-x.htm");
                    }
                    u ? n["default"].click(t, "botao_ver_todos_municipios") : r.length ? n["default"].click(t, "painel_grandes_cidades") : o.length ? n["default"].click(t, "painel_extrato_brasil") : l.length ? (n["default"].click(t, "notificacao_ir"), i = c.DOM.attr(l[0], "data-id")) : n["default"].click(t, "painel_grandes_cidades"), R(a, !0, i);
                }
            }), v.actionEvents.trigger("pageChange", window.page.isCityPage === !0 ? "left" : "right");
        };
        window.onready.push(function() {
            new O["default"](c.DOM.findOne(".web-banner")), new j["default"];
            v.actionEvents.bind("serviceStatus:reload", function() {
                var t = 1000 * (Math.floor(15 * Math.random()) + 1);
                setTimeout(function() {
                    location.reload();
                }, t);
            }), v.actionEvents.bind("serviceStatus:socket", function() {
                usocket.disconnect("TURN_OFF");
            }), v.actionEvents.bind("serviceStatus:socketDomain", function(t) {
                usocketConfig.domain = t[window.page.host] || t["default"], usocket.disconnect("UPDATE_CONFIG"), usocket.config(usocketConfig);
            }), v.actionEvents.once("cities", function() {
                if ("1turno" == window.page.round) {
                    new b.SearchCity(c.DOM.findOne(".main-search-city"), {
                        inputContainer: c.DOM.findOne(".main-search-city-input"),
                        metrics: {
                            localBtn: "titulo pagina municipio",
                            localSuggest: "suggest cidade",
                            action: "botao_mudar_cidade",
                            city: !1
                        }
                    }), new h["default"](c.DOM.findOne(".country-middle"));
                }
                new M["default"](c.DOM.findOne(".city-councilman")), new w["default"](c.DOM.findOne(".city-mayor")), new d["default"](c.DOM.findOne(".country-top")), new p["default"](c.DOM.findOne(".country-bottom")), new z["default"](c.DOM.findOne(".disclaimer-container"));
                L = new E["default"](c.DOM.findOne(".score-cities"));
            }), v.actionEvents.bind("activeCity", function(t) {
                window.page.isBigCitiesPage ? (0, v.changeRoundLink)("grandes-cidades") : (0, v.changeRoundLink)("city", t);
            }), "ontouchstart" in window == !0 && c.DOM.addClass(c.DOM.findOne("body"), "touchable-device"), c.DOM.Event(document.body).on("click", "a", function(t) {
                var e = this.getAttribute("data-metrics-location"),
                    a = this.getAttribute("data-metrics-action"),
                    i = !!this.getAttribute("data-metrics-city");
                return e && a && n["default"].click(e, a, i), !0;
            }), T();
            var t = c.DOM.findOne(".link-external-raiox");
            t && "2turno" == window.page.round && (v.actionEvents.bind("serviceStatus:xrayZones", function(e) {
                var a = m["default"].getActive(),
                    i = (0, v.verifyLinkRaioX)(e, a);
                0 != i ? (c.DOM.attr(t, "href", i), c.DOM.addClass(t, "show")) : c.DOM.removeClass(t, "show");
            }), v.actionEvents.bind("activeCity", function(e) {
                var a = (0, v.verifyLinkRaioX)(window.servicesStatus.xrayZones, e);
                0 != a ? (c.DOM.attr(t, "href", a), c.DOM.addClass(t, "show")) : c.DOM.removeClass(t, "show");
            }));
        });
    }, {
        "../../components/big-cities/script.jsx": 1,
        "../../components/brazil-cities/script.jsx": 2,
        "../../components/cities-list/script.jsx": 6,
        "../../components/cities-notification/script.jsx": 7,
        "../../components/city-councilman/script.jsx": 8,
        "../../components/city-info/script.jsx": 9,
        "../../components/city-mayor/script.jsx": 10,
        "../../components/disclaimer/script.jsx": 11,
        "../../components/favorite-cities/script.jsx": 12,
        "../../components/favorite-management/script.jsx": 14,
        "../../components/router/script.jsx": 24,
        "../../components/scenario-cities/script.jsx": 25,
        "../../components/score-country/script.jsx": 30,
        "../../components/search-city/script.jsx": 32,
        "../../components/share/script.jsx": 34,
        "../../components/web-banner/script.jsx": 37,
        "../libs/dom": 38,
        "../libs/emergency": 39,
        "../libs/fullscreen": 40,
        "../libs/geoloc": 42,
        "../libs/metrics": 43,
        "../utils": 51
    }]
}, {}, [52]);
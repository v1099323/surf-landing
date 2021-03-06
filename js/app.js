(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            s = e && "classList" in document.createElement("p"),
            i = e && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            r = function (e) {
              return t({}, a, e);
            },
            c = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                s = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: s } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: s }
                );
              }
              window.dispatchEvent(n);
            },
            l = "src",
            u = "srcset",
            d = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            f = "loading",
            g = "loaded",
            m = "applied",
            v = "error",
            b = "native",
            _ = "data-",
            w = "ll-status",
            y = function (t, e) {
              return t.getAttribute(_ + e);
            },
            E = function (t) {
              return y(t, w);
            },
            O = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            A = function (t) {
              return O(t, null);
            },
            L = function (t) {
              return null === E(t);
            },
            S = function (t) {
              return E(t) === b;
            },
            C = [f, g, m, v],
            I = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            k = function (t, e) {
              s
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            x = function (t, e) {
              s
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            W = function (t) {
              return t.llTempImage;
            },
            $ = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            q = function (t, e) {
              t && (t.loadingCount += e);
            },
            T = function (t, e) {
              t && (t.toLoadCount = e);
            },
            R = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            M = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(e);
            },
            P = function (t, e) {
              R(t).forEach(e);
            },
            z = [l],
            H = [l, h],
            N = [l, u, d],
            B = function (t) {
              return !!t[p];
            },
            D = function (t) {
              return t[p];
            },
            V = function (t) {
              return delete t[p];
            },
            F = function (t, e) {
              if (!B(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[p] = n);
              }
            },
            G = function (t, e) {
              if (B(t)) {
                var n = D(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            j = function (t, e, n) {
              k(t, e.class_loading),
                O(t, f),
                n && (q(n, 1), I(e.callback_loading, t, n));
            },
            U = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Y = function (t, e) {
              U(t, d, y(t, e.data_sizes)),
                U(t, u, y(t, e.data_srcset)),
                U(t, l, y(t, e.data_src));
            },
            Z = {
              IMG: function (t, e) {
                M(t, function (t) {
                  F(t, N), Y(t, e);
                }),
                  F(t, N),
                  Y(t, e);
              },
              IFRAME: function (t, e) {
                F(t, z), U(t, l, y(t, e.data_src));
              },
              VIDEO: function (t, e) {
                P(t, function (t) {
                  F(t, z), U(t, l, y(t, e.data_src));
                }),
                  F(t, H),
                  U(t, h, y(t, e.data_poster)),
                  U(t, l, y(t, e.data_src)),
                  t.load();
              },
            },
            K = ["IMG", "IFRAME", "VIDEO"],
            Q = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                I(t.callback_finish, e);
            },
            X = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            J = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            tt = function (t) {
              return !!t.llEvLisnrs;
            },
            et = function (t) {
              if (tt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  J(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            nt = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                q(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                x(t, e.class_loading),
                e.unobserve_completed && $(t, n);
            },
            ot = function (t, e, n) {
              var o = W(t) || t;
              tt(o) ||
                (function (t, e, n) {
                  tt(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  X(t, o, e), X(t, "error", n);
                })(
                  o,
                  function (s) {
                    !(function (t, e, n, o) {
                      var s = S(e);
                      nt(e, n, o),
                        k(e, n.class_loaded),
                        O(e, g),
                        I(n.callback_loaded, e, o),
                        s || Q(n, o);
                    })(0, t, e, n),
                      et(o);
                  },
                  function (s) {
                    !(function (t, e, n, o) {
                      var s = S(e);
                      nt(e, n, o),
                        k(e, n.class_error),
                        O(e, v),
                        I(n.callback_error, e, o),
                        s || Q(n, o);
                    })(0, t, e, n),
                      et(o);
                  }
                );
            },
            st = function (t, e, n) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                ot(t, e, n),
                (function (t) {
                  B(t) || (t[p] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, n) {
                  var o = y(t, e.data_bg),
                    s = y(t, e.data_bg_hidpi),
                    a = i && s ? s : o;
                  a &&
                    ((t.style.backgroundImage = 'url("'.concat(a, '")')),
                    W(t).setAttribute(l, a),
                    j(t, e, n));
                })(t, e, n),
                (function (t, e, n) {
                  var o = y(t, e.data_bg_multi),
                    s = y(t, e.data_bg_multi_hidpi),
                    a = i && s ? s : o;
                  a &&
                    ((t.style.backgroundImage = a),
                    (function (t, e, n) {
                      k(t, e.class_applied),
                        O(t, m),
                        n &&
                          (e.unobserve_completed && $(t, e),
                          I(e.callback_applied, t, n));
                    })(t, e, n));
                })(t, e, n);
            },
            it = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? st(t, e, n)
                : (function (t, e, n) {
                    ot(t, e, n),
                      (function (t, e, n) {
                        var o = Z[t.tagName];
                        o && (o(t, e), j(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            at = function (t) {
              t.removeAttribute(l), t.removeAttribute(u), t.removeAttribute(d);
            },
            rt = function (t) {
              M(t, function (t) {
                G(t, N);
              }),
                G(t, N);
            },
            ct = {
              IMG: rt,
              IFRAME: function (t) {
                G(t, z);
              },
              VIDEO: function (t) {
                P(t, function (t) {
                  G(t, z);
                }),
                  G(t, H),
                  t.load();
              },
            },
            lt = function (t, e) {
              (function (t) {
                var e = ct[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (B(t)) {
                        var e = D(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  L(t) ||
                    S(t) ||
                    (x(t, e.class_entered),
                    x(t, e.class_exited),
                    x(t, e.class_applied),
                    x(t, e.class_loading),
                    x(t, e.class_loaded),
                    x(t, e.class_error));
                })(t, e),
                A(t),
                V(t);
            },
            ut = ["IMG", "IFRAME", "VIDEO"],
            dt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            ht = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var s = (function (t) {
                        return C.indexOf(E(t)) >= 0;
                      })(t);
                      O(t, "entered"),
                        k(t, n.class_entered),
                        x(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && $(t, n);
                        })(t, n, o),
                        I(n.callback_enter, t, e, o),
                        s || it(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      L(t) ||
                        (k(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return E(t) === f;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (et(t),
                            (function (t) {
                              M(t, function (t) {
                                at(t);
                              }),
                                at(t);
                            })(t),
                            rt(t),
                            x(t, n.class_loading),
                            q(o, -1),
                            A(t),
                            I(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        I(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            pt = function (t) {
              return Array.prototype.slice.call(t);
            },
            ft = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            gt = function (t) {
              return (function (t) {
                return E(t) === v;
              })(t);
            },
            mt = function (t, e) {
              return (function (t) {
                return pt(t).filter(L);
              })(t || ft(e));
            },
            vt = function (t, n) {
              var s = r(t);
              (this._settings = s),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !dt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        ht(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(s, this),
                (function (t, n) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var n;
                        ((n = ft(t)), pt(n).filter(gt)).forEach(function (e) {
                          x(e, t.class_error), A(e);
                        }),
                          e.update();
                      })(t, n);
                    });
                })(s, this),
                this.update(n);
            };
          return (
            (vt.prototype = {
              update: function (t) {
                var e,
                  s,
                  i = this._settings,
                  a = mt(t, i);
                T(this, a.length),
                  !n && o
                    ? dt(i)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ut.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  ot(t, e, n),
                                  (function (t, e) {
                                    var n = Z[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  O(t, b);
                              })(t, e, n);
                          }),
                            T(n, 0);
                        })(a, i, this)
                      : ((s = a),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, s))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ft(this._settings).forEach(function (t) {
                    V(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                mt(t, n).forEach(function (t) {
                  $(t, e), it(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                ft(t).forEach(function (e) {
                  lt(e, t);
                });
              },
            }),
            (vt.load = function (t, e) {
              var n = r(e);
              it(t, n);
            }),
            (vt.resetStatus = function (t) {
              A(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) c(t, n);
                  else c(t, e);
              })(vt, window.lazyLoadOptions),
            vt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var s = e[o];
    if (void 0 !== s) return s.exports;
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    const t = {};
    let e = !0,
      o = (t = 500) => {
        document.documentElement.classList.contains("lock") ? s(t) : i(t);
      },
      s = (t = 500) => {
        let n = document.querySelector("body");
        if (e) {
          let o = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < o.length; t++) {
              o[t].style.paddingRight = "0px";
            }
            (n.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      },
      i = (t = 500) => {
        let n = document.querySelector("body");
        if (e) {
          let o = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < o.length; t++) {
            o[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (n.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      };
    function a(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function r(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    t.popup = new (class {
      constructor(t) {
        let e = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...e,
            ...t,
            classes: { ...e.classes, ...t?.classes },
            hashSettings: { ...e.hashSettings, ...t?.hashSettings },
            on: { ...e.on, ...t?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("??????????????????"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (t) {
            const e = t.target.closest(`[${this.options.attributeOpenButton}]`);
            if (e)
              return (
                t.preventDefault(),
                (this._dataValue = e.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? e.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = e),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `???? ????, ???? ???????????????? ?????????????? ?? ${e.classList}`
                    )
              );
            return t.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!t.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (t.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (t) {
              if (
                this.options.closeEsc &&
                27 == t.which &&
                "Escape" === t.code &&
                this.isOpen
              )
                return t.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == t.which &&
                this.isOpen &&
                this._focusCatch(t);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(t) {
        if (
          (t &&
            "string" == typeof t &&
            "" !== t.trim() &&
            ((this.targetOpen.selector = t), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const t = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              e = document.createElement("iframe");
            e.setAttribute("allowfullscreen", "");
            const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
            e.setAttribute("allow", `${n}; encrypted-media`),
              e.setAttribute("src", t),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(e);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : o(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("???????????? ??????????");
        } else
          this.popupLogging(
            "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
          );
      }
      close(t) {
        t &&
          "string" == typeof t &&
          "" !== t.trim() &&
          (this.previousOpen.selector = t),
          this.isOpen &&
            e &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              o(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("???????????? ??????????"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let t = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${t}"]`
        ) &&
          t &&
          this.open(t);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(t) {
        const e = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(e),
          o = n.indexOf(document.activeElement);
        t.shiftKey && 0 === o && (n[n.length - 1].focus(), t.preventDefault()),
          t.shiftKey ||
            o !== n.length - 1 ||
            (n[0].focus(), t.preventDefault());
      }
      _focusTrap() {
        const t = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : t[0].focus();
      }
      popupLogging(t) {
        this.options.logging && a(`[??????????????]: ${t}`);
      }
    })({});
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    t.watcher = new (class {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${t.length})...`
          ),
            r(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                s = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    s = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(s) === o.threshold
                  )
                    return t;
                }),
                i = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(s, i);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${t.root} ?????? ???? ????????????????`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${e.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${e.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && a(`[??????????????????????]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    })({});
    let c = (t, e = !1, n = 500, o = 0) => {
        const i = "string" == typeof t ? document.querySelector(t) : t;
        if (i) {
          let r = "",
            c = 0;
          e &&
            ((r = "header.header"),
            (c = document.querySelector(r).offsetHeight));
          let l = {
            speedAsDuration: !0,
            speed: n,
            header: r,
            offset: o,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (s(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(i, "", l);
          else {
            let t = i.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: c ? t - c : t, behavior: "smooth" });
          }
          a(`[gotoBlock]: ????????...???????? ?? ${t}`);
        } else a(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${t}`);
      },
      l = !1;
    setTimeout(() => {
      if (l) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function (t) {
            e &&
              (o(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                s = !!n.hasAttribute("data-goto-header"),
                i = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              c(o, s, i), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              const t = n.id,
                o =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${t}"]`));
              e.isIntersecting
                ? o && o.classList.add("_navigator-active")
                : o && o.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })();
  })();
})();

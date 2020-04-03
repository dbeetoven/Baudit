/*! For license information please see 4.cd19bf73.chunk.js.LICENSE.txt */
(this.webpackJsonpbaugit = this.webpackJsonpbaugit || []).push([
  [4],
  {
    58: function (t, e, n) {
      'use strict';
      (function (r) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var i,
          o = (i = n(2)) && 'object' === typeof i && 'default' in i ? i.default : i,
          s = n(1),
          a = n(22),
          h = n(28),
          u = n(27),
          l = (function () {
            function t(t) {
              (this.domStorage_ = t), (this.prefix_ = 'firebase:');
            }
            return (
              (t.prototype.set = function (t, e) {
                null == e
                  ? this.domStorage_.removeItem(this.prefixedName_(t))
                  : this.domStorage_.setItem(this.prefixedName_(t), a.stringify(e));
              }),
              (t.prototype.get = function (t) {
                var e = this.domStorage_.getItem(this.prefixedName_(t));
                return null == e ? null : a.jsonEval(e);
              }),
              (t.prototype.remove = function (t) {
                this.domStorage_.removeItem(this.prefixedName_(t));
              }),
              (t.prototype.prefixedName_ = function (t) {
                return this.prefix_ + t;
              }),
              (t.prototype.toString = function () {
                return this.domStorage_.toString();
              }),
              t
            );
          })(),
          c = (function () {
            function t() {
              (this.cache_ = {}), (this.isInMemoryStorage = !0);
            }
            return (
              (t.prototype.set = function (t, e) {
                null == e ? delete this.cache_[t] : (this.cache_[t] = e);
              }),
              (t.prototype.get = function (t) {
                return a.contains(this.cache_, t) ? this.cache_[t] : null;
              }),
              (t.prototype.remove = function (t) {
                delete this.cache_[t];
              }),
              t
            );
          })(),
          p = function (t) {
            try {
              if ('undefined' !== typeof window && 'undefined' !== typeof window[t]) {
                var e = window[t];
                return (
                  e.setItem('firebase:sentinel', 'cache'),
                  e.removeItem('firebase:sentinel'),
                  new l(e)
                );
              }
            } catch (n) {}
            return new c();
          },
          d = p('localStorage'),
          f = p('sessionStorage'),
          _ = new h.Logger('@firebase/database'),
          y = (function () {
            var t = 1;
            return function () {
              return t++;
            };
          })(),
          v = function (t) {
            var e = a.stringToByteArray(t),
              n = new a.Sha1();
            n.update(e);
            var r = n.digest();
            return a.base64.encodeByteArray(r);
          },
          g = function t() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            for (var r = '', i = 0; i < e.length; i++) {
              var o = e[i];
              Array.isArray(o) || (o && 'object' === typeof o && 'number' === typeof o.length)
                ? (r += t.apply(null, o))
                : (r += 'object' === typeof o ? a.stringify(o) : o),
                (r += ' ');
            }
            return r;
          },
          m = null,
          C = !0,
          E = function (t, e) {
            a.assert(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."),
              !0 === t
                ? ((_.logLevel = h.LogLevel.VERBOSE),
                  (m = _.log.bind(_)),
                  e && f.set('logging_enabled', !0))
                : 'function' === typeof t
                ? (m = t)
                : ((m = null), f.remove('logging_enabled'));
          },
          w = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (
              (!0 === C && ((C = !1), null === m && !0 === f.get('logging_enabled') && E(!0)), m)
            ) {
              var n = g.apply(null, t);
              m(n);
            }
          },
          T = function (t) {
            return function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              w.apply(void 0, s.__spread([t], e));
            };
          },
          b = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = 'FIREBASE INTERNAL ERROR: ' + g.apply(void 0, s.__spread(t));
            _.error(n);
          },
          S = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = 'FIREBASE FATAL ERROR: ' + g.apply(void 0, s.__spread(t));
            throw (_.error(n), new Error(n));
          },
          I = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = 'FIREBASE WARNING: ' + g.apply(void 0, s.__spread(t));
            _.warn(n);
          },
          P = function (t) {
            return (
              'number' === typeof t &&
              (t !== t || t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY)
            );
          },
          N = '[MIN_NAME]',
          R = '[MAX_NAME]',
          D = function (t, e) {
            if (t === e) return 0;
            if (t === N || e === R) return -1;
            if (e === N || t === R) return 1;
            var n = W(t),
              r = W(e);
            return null !== n
              ? null !== r
                ? n - r === 0
                  ? t.length - e.length
                  : n - r
                : -1
              : null !== r
              ? 1
              : t < e
              ? -1
              : 1;
          },
          x = function (t, e) {
            return t === e ? 0 : t < e ? -1 : 1;
          },
          A = function (t, e) {
            if (e && t in e) return e[t];
            throw new Error('Missing required key (' + t + ') in object: ' + a.stringify(e));
          },
          O = function t(e) {
            if ('object' !== typeof e || null === e) return a.stringify(e);
            var n = [];
            for (var r in e) n.push(r);
            n.sort();
            for (var i = '{', o = 0; o < n.length; o++)
              0 !== o && (i += ','), (i += a.stringify(n[o])), (i += ':'), (i += t(e[n[o]]));
            return (i += '}');
          },
          k = function (t, e) {
            var n = t.length;
            if (n <= e) return [t];
            for (var r = [], i = 0; i < n; i += e)
              i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
            return r;
          };
        function F(t, e) {
          for (var n in t) t.hasOwnProperty(n) && e(n, t[n]);
        }
        var L = function (t) {
            a.assert(!P(t), 'Invalid JSON number');
            var e, n, r, i, o;
            0 === t
              ? ((n = 0), (r = 0), (e = 1 / t === -1 / 0 ? 1 : 0))
              : ((e = t < 0),
                (t = Math.abs(t)) >= Math.pow(2, -1022)
                  ? ((n = (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023),
                    (r = Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))))
                  : ((n = 0), (r = Math.round(t / Math.pow(2, -1074)))));
            var s = [];
            for (o = 52; o; o -= 1) s.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
            for (o = 11; o; o -= 1) s.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
            s.push(e ? 1 : 0), s.reverse();
            var h = s.join(''),
              u = '';
            for (o = 0; o < 64; o += 8) {
              var l = parseInt(h.substr(o, 8), 2).toString(16);
              1 === l.length && (l = '0' + l), (u += l);
            }
            return u.toLowerCase();
          },
          M = new RegExp('^-?(0*)\\d{1,10}$'),
          W = function (t) {
            if (M.test(t)) {
              var e = Number(t);
              if (e >= -2147483648 && e <= 2147483647) return e;
            }
            return null;
          },
          Q = function (t) {
            try {
              t();
            } catch (e) {
              setTimeout(function () {
                var t = e.stack || '';
                throw (I('Exception was thrown by user callback.', t), e);
              }, Math.floor(0));
            }
          },
          q = function (t, e) {
            var n = setTimeout(t, e);
            return 'object' === typeof n && n.unref && n.unref(), n;
          },
          U = (function () {
            function t(t, e) {
              if (void 0 === e) {
                this.pieces_ = t.split('/');
                for (var n = 0, r = 0; r < this.pieces_.length; r++)
                  this.pieces_[r].length > 0 && ((this.pieces_[n] = this.pieces_[r]), n++);
                (this.pieces_.length = n), (this.pieceNum_ = 0);
              } else (this.pieces_ = t), (this.pieceNum_ = e);
            }
            return (
              Object.defineProperty(t, 'Empty', {
                get: function () {
                  return new t('');
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getFront = function () {
                return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_];
              }),
              (t.prototype.getLength = function () {
                return this.pieces_.length - this.pieceNum_;
              }),
              (t.prototype.popFront = function () {
                var e = this.pieceNum_;
                return e < this.pieces_.length && e++, new t(this.pieces_, e);
              }),
              (t.prototype.getBack = function () {
                return this.pieceNum_ < this.pieces_.length
                  ? this.pieces_[this.pieces_.length - 1]
                  : null;
              }),
              (t.prototype.toString = function () {
                for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
                  '' !== this.pieces_[e] && (t += '/' + this.pieces_[e]);
                return t || '/';
              }),
              (t.prototype.toUrlEncodedString = function () {
                for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
                  '' !== this.pieces_[e] &&
                    (t += '/' + encodeURIComponent(String(this.pieces_[e])));
                return t || '/';
              }),
              (t.prototype.slice = function (t) {
                return void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t);
              }),
              (t.prototype.parent = function () {
                if (this.pieceNum_ >= this.pieces_.length) return null;
                for (var e = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++)
                  e.push(this.pieces_[n]);
                return new t(e, 0);
              }),
              (t.prototype.child = function (e) {
                for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++)
                  n.push(this.pieces_[r]);
                if (e instanceof t)
                  for (r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);
                else {
                  var i = e.split('/');
                  for (r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r]);
                }
                return new t(n, 0);
              }),
              (t.prototype.isEmpty = function () {
                return this.pieceNum_ >= this.pieces_.length;
              }),
              (t.relativePath = function (e, n) {
                var r = e.getFront(),
                  i = n.getFront();
                if (null === r) return n;
                if (r === i) return t.relativePath(e.popFront(), n.popFront());
                throw new Error(
                  'INTERNAL ERROR: innerPath (' + n + ') is not within outerPath (' + e + ')',
                );
              }),
              (t.comparePaths = function (t, e) {
                for (var n = t.slice(), r = e.slice(), i = 0; i < n.length && i < r.length; i++) {
                  var o = D(n[i], r[i]);
                  if (0 !== o) return o;
                }
                return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
              }),
              (t.prototype.equals = function (t) {
                if (this.getLength() !== t.getLength()) return !1;
                for (var e = this.pieceNum_, n = t.pieceNum_; e <= this.pieces_.length; e++, n++)
                  if (this.pieces_[e] !== t.pieces_[n]) return !1;
                return !0;
              }),
              (t.prototype.contains = function (t) {
                var e = this.pieceNum_,
                  n = t.pieceNum_;
                if (this.getLength() > t.getLength()) return !1;
                for (; e < this.pieces_.length; ) {
                  if (this.pieces_[e] !== t.pieces_[n]) return !1;
                  ++e, ++n;
                }
                return !0;
              }),
              t
            );
          })(),
          V = (function () {
            function t(t, e) {
              (this.errorPrefix_ = e),
                (this.parts_ = t.slice()),
                (this.byteLength_ = Math.max(1, this.parts_.length));
              for (var n = 0; n < this.parts_.length; n++)
                this.byteLength_ += a.stringLength(this.parts_[n]);
              this.checkValid_();
            }
            return (
              Object.defineProperty(t, 'MAX_PATH_DEPTH', {
                get: function () {
                  return 32;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t, 'MAX_PATH_LENGTH_BYTES', {
                get: function () {
                  return 768;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.push = function (t) {
                this.parts_.length > 0 && (this.byteLength_ += 1),
                  this.parts_.push(t),
                  (this.byteLength_ += a.stringLength(t)),
                  this.checkValid_();
              }),
              (t.prototype.pop = function () {
                var t = this.parts_.pop();
                (this.byteLength_ -= a.stringLength(t)),
                  this.parts_.length > 0 && (this.byteLength_ -= 1);
              }),
              (t.prototype.checkValid_ = function () {
                if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES)
                  throw new Error(
                    this.errorPrefix_ +
                      'has a key path longer than ' +
                      t.MAX_PATH_LENGTH_BYTES +
                      ' bytes (' +
                      this.byteLength_ +
                      ').',
                  );
                if (this.parts_.length > t.MAX_PATH_DEPTH)
                  throw new Error(
                    this.errorPrefix_ +
                      'path specified exceeds the maximum depth that can be written (' +
                      t.MAX_PATH_DEPTH +
                      ') or object contains a cycle ' +
                      this.toErrorString(),
                  );
              }),
              (t.prototype.toErrorString = function () {
                return 0 === this.parts_.length
                  ? ''
                  : "in property '" + this.parts_.join('.') + "'";
              }),
              t
            );
          })(),
          H = (function () {
            function t(t, e, n, r, i, o) {
              void 0 === i && (i = ''),
                void 0 === o && (o = !1),
                (this.secure = e),
                (this.namespace = n),
                (this.webSocketOnly = r),
                (this.persistenceKey = i),
                (this.includeNamespaceInQueryParams = o),
                (this.host = t.toLowerCase()),
                (this.domain = this.host.substr(this.host.indexOf('.') + 1)),
                (this.internalHost = d.get('host:' + t) || this.host);
            }
            return (
              (t.prototype.needsQueryParam = function () {
                return (
                  this.host !== this.internalHost ||
                  this.isCustomHost() ||
                  this.includeNamespaceInQueryParams
                );
              }),
              (t.prototype.isCacheableHost = function () {
                return 's-' === this.internalHost.substr(0, 2);
              }),
              (t.prototype.isDemoHost = function () {
                return 'firebaseio-demo.com' === this.domain;
              }),
              (t.prototype.isCustomHost = function () {
                return 'firebaseio.com' !== this.domain && 'firebaseio-demo.com' !== this.domain;
              }),
              (t.prototype.updateHost = function (t) {
                t !== this.internalHost &&
                  ((this.internalHost = t),
                  this.isCacheableHost() && d.set('host:' + this.host, this.internalHost));
              }),
              (t.prototype.connectionURL = function (t, e) {
                var n;
                if (
                  (a.assert('string' === typeof t, 'typeof type must == string'),
                  a.assert('object' === typeof e, 'typeof params must == object'),
                  'websocket' === t)
                )
                  n = (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?';
                else {
                  if ('long_polling' !== t) throw new Error('Unknown connection type: ' + t);
                  n = (this.secure ? 'https://' : 'http://') + this.internalHost + '/.lp?';
                }
                this.needsQueryParam() && (e.ns = this.namespace);
                var r = [];
                return (
                  F(e, function (t, e) {
                    r.push(t + '=' + e);
                  }),
                  n + r.join('&')
                );
              }),
              (t.prototype.toString = function () {
                var t = this.toURLString();
                return this.persistenceKey && (t += '<' + this.persistenceKey + '>'), t;
              }),
              (t.prototype.toURLString = function () {
                return (this.secure ? 'https://' : 'http://') + this.host;
              }),
              t
            );
          })();
        var B,
          j,
          K = function (t) {
            var e = Y(t),
              n = e.namespace;
            'firebase' === e.domain &&
              S(
                e.host +
                  ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead',
              ),
              (n && 'undefined' !== n) ||
                'localhost' === e.domain ||
                S('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'),
              e.secure ||
                ('undefined' !== typeof window &&
                  window.location &&
                  window.location.protocol &&
                  -1 !== window.location.protocol.indexOf('https:') &&
                  I(
                    'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().',
                  ));
            var r = 'ws' === e.scheme || 'wss' === e.scheme;
            return {
              repoInfo: new H(e.host, e.secure, n, r, '', n !== e.subdomain),
              path: new U(e.pathString),
            };
          },
          Y = function (t) {
            var e = '',
              n = '',
              r = '',
              i = '',
              o = '',
              a = !0,
              h = 'https',
              u = 443;
            if ('string' === typeof t) {
              var l = t.indexOf('//');
              l >= 0 && ((h = t.substring(0, l - 1)), (t = t.substring(l + 2)));
              var c = t.indexOf('/');
              -1 === c && (c = t.length);
              var p = t.indexOf('?');
              -1 === p && (p = t.length),
                (e = t.substring(0, Math.min(c, p))),
                c < p &&
                  (i = (function (t) {
                    for (var e = '', n = t.split('/'), r = 0; r < n.length; r++)
                      if (n[r].length > 0) {
                        var i = n[r];
                        try {
                          i = decodeURIComponent(i.replace(/\+/g, ' '));
                        } catch (o) {}
                        e += '/' + i;
                      }
                    return e;
                  })(t.substring(c, p)));
              var d = (function (t) {
                var e,
                  n,
                  r = {};
                '?' === t.charAt(0) && (t = t.substring(1));
                try {
                  for (var i = s.__values(t.split('&')), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value;
                    if (0 !== a.length) {
                      var h = a.split('=');
                      2 === h.length
                        ? (r[decodeURIComponent(h[0])] = decodeURIComponent(h[1]))
                        : I("Invalid query segment '" + a + "' in query '" + t + "'");
                    }
                  }
                } catch (u) {
                  e = { error: u };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              })(t.substring(Math.min(t.length, p)));
              (l = e.indexOf(':')) >= 0
                ? ((a = 'https' === h || 'wss' === h), (u = parseInt(e.substring(l + 1), 10)))
                : (l = t.length);
              var f = e.split('.');
              3 === f.length
                ? ((n = f[1]), (o = r = f[0].toLowerCase()))
                : 2 === f.length
                ? (n = f[0])
                : 'localhost' === f[0].slice(0, l).toLowerCase() && (n = 'localhost'),
                'ns' in d && (o = d.ns);
            }
            return {
              host: e,
              port: u,
              domain: n,
              subdomain: r,
              secure: a,
              scheme: h,
              pathString: i,
              namespace: o,
            };
          },
          z = /[\[\].#$\/\u0000-\u001F\u007F]/,
          G = /[\[\].#$\u0000-\u001F\u007F]/,
          X = function (t) {
            return 'string' === typeof t && 0 !== t.length && !z.test(t);
          },
          $ = function (t) {
            return 'string' === typeof t && 0 !== t.length && !G.test(t);
          },
          J = function (t) {
            return (
              null === t ||
              'string' === typeof t ||
              ('number' === typeof t && !P(t)) ||
              (t && 'object' === typeof t && a.contains(t, '.sv'))
            );
          },
          Z = function (t, e, n, r, i) {
            (i && void 0 === n) || tt(a.errorPrefix(t, e, i), n, r);
          },
          tt = function t(e, n, r) {
            var i = r instanceof U ? new V(r, e) : r;
            if (void 0 === n) throw new Error(e + 'contains undefined ' + i.toErrorString());
            if ('function' === typeof n)
              throw new Error(
                e + 'contains a function ' + i.toErrorString() + ' with contents = ' + n.toString(),
              );
            if (P(n)) throw new Error(e + 'contains ' + n.toString() + ' ' + i.toErrorString());
            if ('string' === typeof n && n.length > 10485760 / 3 && a.stringLength(n) > 10485760)
              throw new Error(
                e +
                  'contains a string greater than 10485760 utf8 bytes ' +
                  i.toErrorString() +
                  " ('" +
                  n.substring(0, 50) +
                  "...')",
              );
            if (n && 'object' === typeof n) {
              var o = !1,
                s = !1;
              if (
                (F(n, function (n, r) {
                  if ('.value' === n) o = !0;
                  else if ('.priority' !== n && '.sv' !== n && ((s = !0), !X(n)))
                    throw new Error(
                      e +
                        ' contains an invalid key (' +
                        n +
                        ') ' +
                        i.toErrorString() +
                        '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"',
                    );
                  i.push(n), t(e, r, i), i.pop();
                }),
                o && s)
              )
                throw new Error(
                  e +
                    ' contains ".value" child ' +
                    i.toErrorString() +
                    ' in addition to actual children.',
                );
            }
          },
          et = function (t, e, n, r, i) {
            if (!i || void 0 !== n) {
              var o = a.errorPrefix(t, e, i);
              if (!n || 'object' !== typeof n || Array.isArray(n))
                throw new Error(o + ' must be an object containing the children to replace.');
              var s = [];
              F(n, function (t, e) {
                var n = new U(t);
                if ((tt(o, e, r.child(n)), '.priority' === n.getBack() && !J(e)))
                  throw new Error(
                    o +
                      "contains an invalid value for '" +
                      n.toString() +
                      "', which must be a valid Firebase priority (a string, finite number, server value, or null).",
                  );
                s.push(n);
              }),
                (function (t, e) {
                  var n, r;
                  for (n = 0; n < e.length; n++)
                    for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++)
                      if ('.priority' === i[o] && o === i.length - 1);
                      else if (!X(i[o]))
                        throw new Error(
                          t +
                            'contains an invalid key (' +
                            i[o] +
                            ') in path ' +
                            r.toString() +
                            '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"',
                        );
                  e.sort(U.comparePaths);
                  var s = null;
                  for (n = 0; n < e.length; n++) {
                    if (((r = e[n]), null !== s && s.contains(r)))
                      throw new Error(
                        t +
                          'contains a path ' +
                          s.toString() +
                          ' that is ancestor of another path ' +
                          r.toString(),
                      );
                    s = r;
                  }
                })(o, s);
            }
          },
          nt = function (t, e, n, r) {
            if (!r || void 0 !== n) {
              if (P(n))
                throw new Error(
                  a.errorPrefix(t, e, r) +
                    'is ' +
                    n.toString() +
                    ', but must be a valid Firebase priority (a string, finite number, server value, or null).',
                );
              if (!J(n))
                throw new Error(
                  a.errorPrefix(t, e, r) +
                    'must be a valid Firebase priority (a string, finite number, server value, or null).',
                );
            }
          },
          rt = function (t, e, n, r) {
            if (!r || void 0 !== n)
              switch (n) {
                case 'value':
                case 'child_added':
                case 'child_removed':
                case 'child_changed':
                case 'child_moved':
                  break;
                default:
                  throw new Error(
                    a.errorPrefix(t, e, r) +
                      'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".',
                  );
              }
          },
          it = function (t, e, n, r) {
            if ((!r || void 0 !== n) && !X(n))
              throw new Error(
                a.errorPrefix(t, e, r) +
                  'was an invalid key = "' +
                  n +
                  '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").',
              );
          },
          ot = function (t, e, n, r) {
            if ((!r || void 0 !== n) && !$(n))
              throw new Error(
                a.errorPrefix(t, e, r) +
                  'was an invalid path = "' +
                  n +
                  '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"',
              );
          },
          st = function (t, e, n, r) {
            n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), ot(t, e, n, r);
          },
          at = function (t, e) {
            if ('.info' === e.getFront())
              throw new Error(t + " failed = Can't modify data under /.info/");
          },
          ht = function (t, e, n) {
            var r = n.path.toString();
            if (
              'string' !== typeof n.repoInfo.host ||
              0 === n.repoInfo.host.length ||
              (!X(n.repoInfo.namespace) && 'localhost' !== n.repoInfo.host.split(':')[0]) ||
              (0 !== r.length &&
                !(function (t) {
                  return t && (t = t.replace(/^\/*\.info(\/|$)/, '/')), $(t);
                })(r))
            )
              throw new Error(
                a.errorPrefix(t, e, !1) +
                  'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".',
              );
          },
          ut = function (t, e, n, r) {
            if ((!r || void 0 !== n) && 'boolean' !== typeof n)
              throw new Error(a.errorPrefix(t, e, r) + 'must be a boolean.');
          },
          lt = (function () {
            function t(t, e) {
              (this.repo_ = t), (this.path_ = e);
            }
            return (
              (t.prototype.cancel = function (t) {
                a.validateArgCount('OnDisconnect.cancel', 0, 1, arguments.length),
                  a.validateCallback('OnDisconnect.cancel', 1, t, !0);
                var e = new a.Deferred();
                return this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)), e.promise;
              }),
              (t.prototype.remove = function (t) {
                a.validateArgCount('OnDisconnect.remove', 0, 1, arguments.length),
                  at('OnDisconnect.remove', this.path_),
                  a.validateCallback('OnDisconnect.remove', 1, t, !0);
                var e = new a.Deferred();
                return this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)), e.promise;
              }),
              (t.prototype.set = function (t, e) {
                a.validateArgCount('OnDisconnect.set', 1, 2, arguments.length),
                  at('OnDisconnect.set', this.path_),
                  Z('OnDisconnect.set', 1, t, this.path_, !1),
                  a.validateCallback('OnDisconnect.set', 2, e, !0);
                var n = new a.Deferred();
                return this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)), n.promise;
              }),
              (t.prototype.setWithPriority = function (t, e, n) {
                a.validateArgCount('OnDisconnect.setWithPriority', 2, 3, arguments.length),
                  at('OnDisconnect.setWithPriority', this.path_),
                  Z('OnDisconnect.setWithPriority', 1, t, this.path_, !1),
                  nt('OnDisconnect.setWithPriority', 2, e, !1),
                  a.validateCallback('OnDisconnect.setWithPriority', 3, n, !0);
                var r = new a.Deferred();
                return (
                  this.repo_.onDisconnectSetWithPriority(this.path_, t, e, r.wrapCallback(n)),
                  r.promise
                );
              }),
              (t.prototype.update = function (t, e) {
                if (
                  (a.validateArgCount('OnDisconnect.update', 1, 2, arguments.length),
                  at('OnDisconnect.update', this.path_),
                  Array.isArray(t))
                ) {
                  for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r];
                  (t = n),
                    I(
                      'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.',
                    );
                }
                et('OnDisconnect.update', 1, t, this.path_, !1),
                  a.validateCallback('OnDisconnect.update', 2, e, !0);
                var i = new a.Deferred();
                return this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)), i.promise;
              }),
              t
            );
          })(),
          ct = (function () {
            function t(t, e) {
              (this.committed = t), (this.snapshot = e);
            }
            return (
              (t.prototype.toJSON = function () {
                return (
                  a.validateArgCount('TransactionResult.toJSON', 0, 1, arguments.length),
                  { committed: this.committed, snapshot: this.snapshot.toJSON() }
                );
              }),
              t
            );
          })(),
          pt = (function () {
            var t = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
              e = 0,
              n = [];
            return function (r) {
              var i,
                o = r === e;
              e = r;
              var s = new Array(8);
              for (i = 7; i >= 0; i--) (s[i] = t.charAt(r % 64)), (r = Math.floor(r / 64));
              a.assert(0 === r, 'Cannot push at time == 0');
              var h = s.join('');
              if (o) {
                for (i = 11; i >= 0 && 63 === n[i]; i--) n[i] = 0;
                n[i]++;
              } else for (i = 0; i < 12; i++) n[i] = Math.floor(64 * Math.random());
              for (i = 0; i < 12; i++) h += t.charAt(n[i]);
              return a.assert(20 === h.length, 'nextPushId: Length should be 20.'), h;
            };
          })(),
          dt = (function () {
            function t(t, e) {
              (this.name = t), (this.node = e);
            }
            return (
              (t.Wrap = function (e, n) {
                return new t(e, n);
              }),
              t
            );
          })(),
          ft = (function () {
            function t() {}
            return (
              (t.prototype.getCompare = function () {
                return this.compare.bind(this);
              }),
              (t.prototype.indexedValueChanged = function (t, e) {
                var n = new dt(N, t),
                  r = new dt(N, e);
                return 0 !== this.compare(n, r);
              }),
              (t.prototype.minPost = function () {
                return dt.MIN;
              }),
              t
            );
          })(),
          _t = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              s.__extends(e, t),
              Object.defineProperty(e, '__EMPTY_NODE', {
                get: function () {
                  return B;
                },
                set: function (t) {
                  B = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.compare = function (t, e) {
                return D(t.name, e.name);
              }),
              (e.prototype.isDefinedOn = function (t) {
                throw a.assertionError('KeyIndex.isDefinedOn not expected to be called.');
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !1;
              }),
              (e.prototype.minPost = function () {
                return dt.MIN;
              }),
              (e.prototype.maxPost = function () {
                return new dt(R, B);
              }),
              (e.prototype.makePost = function (t, e) {
                return (
                  a.assert('string' === typeof t, 'KeyIndex indexValue must always be a string.'),
                  new dt(t, B)
                );
              }),
              (e.prototype.toString = function () {
                return '.key';
              }),
              e
            );
          })(ft),
          yt = new _t();
        var vt,
          gt,
          mt,
          Ct = function (t) {
            return 'number' === typeof t ? 'number:' + L(t) : 'string:' + t;
          },
          Et = function (t) {
            if (t.isLeafNode()) {
              var e = t.val();
              a.assert(
                'string' === typeof e ||
                  'number' === typeof e ||
                  ('object' === typeof e && a.contains(e, '.sv')),
                'Priority must be a string or number.',
              );
            } else a.assert(t === j || t.isEmpty(), 'priority of unexpected type.');
            a.assert(
              t === j || t.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own.",
            );
          },
          wt = (function () {
            function t(e, n) {
              void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE),
                (this.value_ = e),
                (this.priorityNode_ = n),
                (this.lazyHash_ = null),
                a.assert(
                  void 0 !== this.value_ && null !== this.value_,
                  "LeafNode shouldn't be created with null/undefined value.",
                ),
                Et(this.priorityNode_);
            }
            return (
              Object.defineProperty(t, '__childrenNodeConstructor', {
                get: function () {
                  return vt;
                },
                set: function (t) {
                  vt = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isLeafNode = function () {
                return !0;
              }),
              (t.prototype.getPriority = function () {
                return this.priorityNode_;
              }),
              (t.prototype.updatePriority = function (e) {
                return new t(this.value_, e);
              }),
              (t.prototype.getImmediateChild = function (e) {
                return '.priority' === e
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.getChild = function (e) {
                return e.isEmpty()
                  ? this
                  : '.priority' === e.getFront()
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.hasChild = function () {
                return !1;
              }),
              (t.prototype.getPredecessorChildName = function (t, e) {
                return null;
              }),
              (t.prototype.updateImmediateChild = function (e, n) {
                return '.priority' === e
                  ? this.updatePriority(n)
                  : n.isEmpty() && '.priority' !== e
                  ? this
                  : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                      e,
                      n,
                    ).updatePriority(this.priorityNode_);
              }),
              (t.prototype.updateChild = function (e, n) {
                var r = e.getFront();
                return null === r
                  ? n
                  : n.isEmpty() && '.priority' !== r
                  ? this
                  : (a.assert(
                      '.priority' !== r || 1 === e.getLength(),
                      '.priority must be the last token in a path',
                    ),
                    this.updateImmediateChild(
                      r,
                      t.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(), n),
                    ));
              }),
              (t.prototype.isEmpty = function () {
                return !1;
              }),
              (t.prototype.numChildren = function () {
                return 0;
              }),
              (t.prototype.forEachChild = function (t, e) {
                return !1;
              }),
              (t.prototype.val = function (t) {
                return t && !this.getPriority().isEmpty()
                  ? { '.value': this.getValue(), '.priority': this.getPriority().val() }
                  : this.getValue();
              }),
              (t.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var t = '';
                  this.priorityNode_.isEmpty() ||
                    (t += 'priority:' + Ct(this.priorityNode_.val()) + ':');
                  var e = typeof this.value_;
                  (t += e + ':'),
                    (t += 'number' === e ? L(this.value_) : this.value_),
                    (this.lazyHash_ = v(t));
                }
                return this.lazyHash_;
              }),
              (t.prototype.getValue = function () {
                return this.value_;
              }),
              (t.prototype.compareTo = function (e) {
                return e === t.__childrenNodeConstructor.EMPTY_NODE
                  ? 1
                  : e instanceof t.__childrenNodeConstructor
                  ? -1
                  : (a.assert(e.isLeafNode(), 'Unknown node type'), this.compareToLeafNode_(e));
              }),
              (t.prototype.compareToLeafNode_ = function (e) {
                var n = typeof e.value_,
                  r = typeof this.value_,
                  i = t.VALUE_TYPE_ORDER.indexOf(n),
                  o = t.VALUE_TYPE_ORDER.indexOf(r);
                return (
                  a.assert(i >= 0, 'Unknown leaf type: ' + n),
                  a.assert(o >= 0, 'Unknown leaf type: ' + r),
                  i === o
                    ? 'object' === r
                      ? 0
                      : this.value_ < e.value_
                      ? -1
                      : this.value_ === e.value_
                      ? 0
                      : 1
                    : o - i
                );
              }),
              (t.prototype.withIndex = function () {
                return this;
              }),
              (t.prototype.isIndexed = function () {
                return !0;
              }),
              (t.prototype.equals = function (t) {
                if (t === this) return !0;
                if (t.isLeafNode()) {
                  var e = t;
                  return this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_);
                }
                return !1;
              }),
              (t.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']),
              t
            );
          })();
        var Tt,
          bt,
          St = new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              s.__extends(e, t),
              (e.prototype.compare = function (t, e) {
                var n = t.node.getPriority(),
                  r = e.node.getPriority(),
                  i = n.compareTo(r);
                return 0 === i ? D(t.name, e.name) : i;
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !t.getPriority().isEmpty();
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !t.getPriority().equals(e.getPriority());
              }),
              (e.prototype.minPost = function () {
                return dt.MIN;
              }),
              (e.prototype.maxPost = function () {
                return new dt(R, new wt('[PRIORITY-POST]', mt));
              }),
              (e.prototype.makePost = function (t, e) {
                var n = gt(t);
                return new dt(e, new wt('[PRIORITY-POST]', n));
              }),
              (e.prototype.toString = function () {
                return '.priority';
              }),
              e
            );
          })(ft))(),
          It = (function () {
            function t(t, e, n, r, i) {
              void 0 === i && (i = null),
                (this.isReverse_ = r),
                (this.resultGenerator_ = i),
                (this.nodeStack_ = []);
              for (var o = 1; !t.isEmpty(); )
                if (((t = t), (o = e ? n(t.key, e) : 1), r && (o *= -1), o < 0))
                  t = this.isReverse_ ? t.left : t.right;
                else {
                  if (0 === o) {
                    this.nodeStack_.push(t);
                    break;
                  }
                  this.nodeStack_.push(t), (t = this.isReverse_ ? t.right : t.left);
                }
            }
            return (
              (t.prototype.getNext = function () {
                if (0 === this.nodeStack_.length) return null;
                var t,
                  e = this.nodeStack_.pop();
                if (
                  ((t = this.resultGenerator_
                    ? this.resultGenerator_(e.key, e.value)
                    : { key: e.key, value: e.value }),
                  this.isReverse_)
                )
                  for (e = e.left; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.right);
                else for (e = e.right; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.left);
                return t;
              }),
              (t.prototype.hasNext = function () {
                return this.nodeStack_.length > 0;
              }),
              (t.prototype.peek = function () {
                if (0 === this.nodeStack_.length) return null;
                var t = this.nodeStack_[this.nodeStack_.length - 1];
                return this.resultGenerator_
                  ? this.resultGenerator_(t.key, t.value)
                  : { key: t.key, value: t.value };
              }),
              t
            );
          })(),
          Pt = (function () {
            function t(e, n, r, i, o) {
              (this.key = e),
                (this.value = n),
                (this.color = null != r ? r : t.RED),
                (this.left = null != i ? i : Rt.EMPTY_NODE),
                (this.right = null != o ? o : Rt.EMPTY_NODE);
            }
            return (
              (t.prototype.copy = function (e, n, r, i, o) {
                return new t(
                  null != e ? e : this.key,
                  null != n ? n : this.value,
                  null != r ? r : this.color,
                  null != i ? i : this.left,
                  null != o ? o : this.right,
                );
              }),
              (t.prototype.count = function () {
                return this.left.count() + 1 + this.right.count();
              }),
              (t.prototype.isEmpty = function () {
                return !1;
              }),
              (t.prototype.inorderTraversal = function (t) {
                return (
                  this.left.inorderTraversal(t) ||
                  !!t(this.key, this.value) ||
                  this.right.inorderTraversal(t)
                );
              }),
              (t.prototype.reverseTraversal = function (t) {
                return (
                  this.right.reverseTraversal(t) ||
                  t(this.key, this.value) ||
                  this.left.reverseTraversal(t)
                );
              }),
              (t.prototype.min_ = function () {
                return this.left.isEmpty() ? this : this.left.min_();
              }),
              (t.prototype.minKey = function () {
                return this.min_().key;
              }),
              (t.prototype.maxKey = function () {
                return this.right.isEmpty() ? this.key : this.right.maxKey();
              }),
              (t.prototype.insert = function (t, e, n) {
                var r = this,
                  i = n(t, r.key);
                return (r =
                  i < 0
                    ? r.copy(null, null, null, r.left.insert(t, e, n), null)
                    : 0 === i
                    ? r.copy(null, e, null, null, null)
                    : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp_();
              }),
              (t.prototype.removeMin_ = function () {
                if (this.left.isEmpty()) return Rt.EMPTY_NODE;
                var t = this;
                return (
                  t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()),
                  (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_()
                );
              }),
              (t.prototype.remove = function (t, e) {
                var n, r;
                if (e(t, (n = this).key) < 0)
                  n.left.isEmpty() ||
                    n.left.isRed_() ||
                    n.left.left.isRed_() ||
                    (n = n.moveRedLeft_()),
                    (n = n.copy(null, null, null, n.left.remove(t, e), null));
                else {
                  if (
                    (n.left.isRed_() && (n = n.rotateRight_()),
                    n.right.isEmpty() ||
                      n.right.isRed_() ||
                      n.right.left.isRed_() ||
                      (n = n.moveRedRight_()),
                    0 === e(t, n.key))
                  ) {
                    if (n.right.isEmpty()) return Rt.EMPTY_NODE;
                    (r = n.right.min_()),
                      (n = n.copy(r.key, r.value, null, null, n.right.removeMin_()));
                  }
                  n = n.copy(null, null, null, null, n.right.remove(t, e));
                }
                return n.fixUp_();
              }),
              (t.prototype.isRed_ = function () {
                return this.color;
              }),
              (t.prototype.fixUp_ = function () {
                var t = this;
                return (
                  t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
                  t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()),
                  t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
                  t
                );
              }),
              (t.prototype.moveRedLeft_ = function () {
                var t = this.colorFlip_();
                return (
                  t.right.left.isRed_() &&
                    (t = (t = (t = t.copy(
                      null,
                      null,
                      null,
                      null,
                      t.right.rotateRight_(),
                    )).rotateLeft_()).colorFlip_()),
                  t
                );
              }),
              (t.prototype.moveRedRight_ = function () {
                var t = this.colorFlip_();
                return t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t;
              }),
              (t.prototype.rotateLeft_ = function () {
                var e = this.copy(null, null, t.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, e, null);
              }),
              (t.prototype.rotateRight_ = function () {
                var e = this.copy(null, null, t.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, e);
              }),
              (t.prototype.colorFlip_ = function () {
                var t = this.left.copy(null, null, !this.left.color, null, null),
                  e = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, t, e);
              }),
              (t.prototype.checkMaxDepth_ = function () {
                var t = this.check_();
                return Math.pow(2, t) <= this.count() + 1;
              }),
              (t.prototype.check_ = function () {
                if (this.isRed_() && this.left.isRed_())
                  throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
                if (this.right.isRed_())
                  throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
                var t = this.left.check_();
                if (t !== this.right.check_()) throw new Error('Black depths differ');
                return t + (this.isRed_() ? 0 : 1);
              }),
              (t.RED = !0),
              (t.BLACK = !1),
              t
            );
          })(),
          Nt = (function () {
            function t() {}
            return (
              (t.prototype.copy = function (t, e, n, r, i) {
                return this;
              }),
              (t.prototype.insert = function (t, e, n) {
                return new Pt(t, e, null);
              }),
              (t.prototype.remove = function (t, e) {
                return this;
              }),
              (t.prototype.count = function () {
                return 0;
              }),
              (t.prototype.isEmpty = function () {
                return !0;
              }),
              (t.prototype.inorderTraversal = function (t) {
                return !1;
              }),
              (t.prototype.reverseTraversal = function (t) {
                return !1;
              }),
              (t.prototype.minKey = function () {
                return null;
              }),
              (t.prototype.maxKey = function () {
                return null;
              }),
              (t.prototype.check_ = function () {
                return 0;
              }),
              (t.prototype.isRed_ = function () {
                return !1;
              }),
              t
            );
          })(),
          Rt = (function () {
            function t(e, n) {
              void 0 === n && (n = t.EMPTY_NODE), (this.comparator_ = e), (this.root_ = n);
            }
            return (
              (t.prototype.insert = function (e, n) {
                return new t(
                  this.comparator_,
                  this.root_.insert(e, n, this.comparator_).copy(null, null, Pt.BLACK, null, null),
                );
              }),
              (t.prototype.remove = function (e) {
                return new t(
                  this.comparator_,
                  this.root_.remove(e, this.comparator_).copy(null, null, Pt.BLACK, null, null),
                );
              }),
              (t.prototype.get = function (t) {
                for (var e, n = this.root_; !n.isEmpty(); ) {
                  if (0 === (e = this.comparator_(t, n.key))) return n.value;
                  e < 0 ? (n = n.left) : e > 0 && (n = n.right);
                }
                return null;
              }),
              (t.prototype.getPredecessorKey = function (t) {
                for (var e, n = this.root_, r = null; !n.isEmpty(); ) {
                  if (0 === (e = this.comparator_(t, n.key))) {
                    if (n.left.isEmpty()) return r ? r.key : null;
                    for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                    return n.key;
                  }
                  e < 0 ? (n = n.left) : e > 0 && ((r = n), (n = n.right));
                }
                throw new Error(
                  'Attempted to find predecessor key for a nonexistent key.  What gives?',
                );
              }),
              (t.prototype.isEmpty = function () {
                return this.root_.isEmpty();
              }),
              (t.prototype.count = function () {
                return this.root_.count();
              }),
              (t.prototype.minKey = function () {
                return this.root_.minKey();
              }),
              (t.prototype.maxKey = function () {
                return this.root_.maxKey();
              }),
              (t.prototype.inorderTraversal = function (t) {
                return this.root_.inorderTraversal(t);
              }),
              (t.prototype.reverseTraversal = function (t) {
                return this.root_.reverseTraversal(t);
              }),
              (t.prototype.getIterator = function (t) {
                return new It(this.root_, null, this.comparator_, !1, t);
              }),
              (t.prototype.getIteratorFrom = function (t, e) {
                return new It(this.root_, t, this.comparator_, !1, e);
              }),
              (t.prototype.getReverseIteratorFrom = function (t, e) {
                return new It(this.root_, t, this.comparator_, !0, e);
              }),
              (t.prototype.getReverseIterator = function (t) {
                return new It(this.root_, null, this.comparator_, !0, t);
              }),
              (t.EMPTY_NODE = new Nt()),
              t
            );
          })(),
          Dt = Math.log(2),
          xt = (function () {
            function t(t) {
              var e;
              (this.count = ((e = t + 1), parseInt(Math.log(e) / Dt, 10))),
                (this.current_ = this.count - 1);
              var n,
                r = ((n = this.count), parseInt(Array(n + 1).join('1'), 2));
              this.bits_ = (t + 1) & r;
            }
            return (
              (t.prototype.nextBitIsOne = function () {
                var t = !(this.bits_ & (1 << this.current_));
                return this.current_--, t;
              }),
              t
            );
          })(),
          At = function (t, e, n, r) {
            t.sort(e);
            var i = (function (e) {
              for (
                var r = null,
                  i = null,
                  o = t.length,
                  s = function (e, r) {
                    var i = o - e,
                      s = o;
                    o -= e;
                    var h = (function e(r, i) {
                        var o,
                          s,
                          a = i - r;
                        if (0 === a) return null;
                        if (1 === a)
                          return (
                            (o = t[r]), (s = n ? n(o) : o), new Pt(s, o.node, Pt.BLACK, null, null)
                          );
                        var h = parseInt(a / 2, 10) + r,
                          u = e(r, h),
                          l = e(h + 1, i);
                        return (o = t[h]), (s = n ? n(o) : o), new Pt(s, o.node, Pt.BLACK, u, l);
                      })(i + 1, s),
                      u = t[i],
                      l = n ? n(u) : u;
                    a(new Pt(l, u.node, r, null, h));
                  },
                  a = function (t) {
                    r ? ((r.left = t), (r = t)) : ((i = t), (r = t));
                  },
                  h = 0;
                h < e.count;
                ++h
              ) {
                var u = e.nextBitIsOne(),
                  l = Math.pow(2, e.count - (h + 1));
                u ? s(l, Pt.BLACK) : (s(l, Pt.BLACK), s(l, Pt.RED));
              }
              return i;
            })(new xt(t.length));
            return new Rt(r || e, i);
          },
          Ot = {},
          kt = (function () {
            function t(t, e) {
              (this.indexes_ = t), (this.indexSet_ = e);
            }
            return (
              Object.defineProperty(t, 'Default', {
                get: function () {
                  return (
                    a.assert(Ot && St, 'ChildrenNode.ts has not been loaded'),
                    (Tt = Tt || new t({ '.priority': Ot }, { '.priority': St }))
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var e = a.safeGet(this.indexes_, t);
                if (!e) throw new Error('No index defined for ' + t);
                return e instanceof Rt ? e : null;
              }),
              (t.prototype.hasIndex = function (t) {
                return a.contains(this.indexSet_, t.toString());
              }),
              (t.prototype.addIndex = function (e, n) {
                a.assert(
                  e !== yt,
                  "KeyIndex always exists and isn't meant to be added to the IndexMap.",
                );
                for (var r, i = [], o = !1, h = n.getIterator(dt.Wrap), u = h.getNext(); u; )
                  (o = o || e.isDefinedOn(u.node)), i.push(u), (u = h.getNext());
                r = o ? At(i, e.getCompare()) : Ot;
                var l = e.toString(),
                  c = s.__assign({}, this.indexSet_);
                c[l] = e;
                var p = s.__assign({}, this.indexes_);
                return (p[l] = r), new t(p, c);
              }),
              (t.prototype.addToIndexes = function (e, n) {
                var r = this;
                return new t(
                  a.map(this.indexes_, function (t, i) {
                    var o = a.safeGet(r.indexSet_, i);
                    if ((a.assert(o, 'Missing index implementation for ' + i), t === Ot)) {
                      if (o.isDefinedOn(e.node)) {
                        for (var s = [], h = n.getIterator(dt.Wrap), u = h.getNext(); u; )
                          u.name !== e.name && s.push(u), (u = h.getNext());
                        return s.push(e), At(s, o.getCompare());
                      }
                      return Ot;
                    }
                    var l = n.get(e.name),
                      c = t;
                    return l && (c = c.remove(new dt(e.name, l))), c.insert(e, e.node);
                  }),
                  this.indexSet_,
                );
              }),
              (t.prototype.removeFromIndexes = function (e, n) {
                return new t(
                  a.map(this.indexes_, function (t) {
                    if (t === Ot) return t;
                    var r = n.get(e.name);
                    return r ? t.remove(new dt(e.name, r)) : t;
                  }),
                  this.indexSet_,
                );
              }),
              t
            );
          })();
        function Ft(t, e) {
          return D(t.name, e.name);
        }
        function Lt(t, e) {
          return D(t, e);
        }
        var Mt = (function () {
            function t(t, e, n) {
              (this.children_ = t),
                (this.priorityNode_ = e),
                (this.indexMap_ = n),
                (this.lazyHash_ = null),
                this.priorityNode_ && Et(this.priorityNode_),
                this.children_.isEmpty() &&
                  a.assert(
                    !this.priorityNode_ || this.priorityNode_.isEmpty(),
                    'An empty node cannot have a priority',
                  );
            }
            return (
              Object.defineProperty(t, 'EMPTY_NODE', {
                get: function () {
                  return bt || (bt = new t(new Rt(Lt), null, kt.Default));
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isLeafNode = function () {
                return !1;
              }),
              (t.prototype.getPriority = function () {
                return this.priorityNode_ || bt;
              }),
              (t.prototype.updatePriority = function (e) {
                return this.children_.isEmpty() ? this : new t(this.children_, e, this.indexMap_);
              }),
              (t.prototype.getImmediateChild = function (t) {
                if ('.priority' === t) return this.getPriority();
                var e = this.children_.get(t);
                return null === e ? bt : e;
              }),
              (t.prototype.getChild = function (t) {
                var e = t.getFront();
                return null === e ? this : this.getImmediateChild(e).getChild(t.popFront());
              }),
              (t.prototype.hasChild = function (t) {
                return null !== this.children_.get(t);
              }),
              (t.prototype.updateImmediateChild = function (e, n) {
                if ((a.assert(n, 'We should always be passing snapshot nodes'), '.priority' === e))
                  return this.updatePriority(n);
                var r = new dt(e, n),
                  i = void 0,
                  o = void 0;
                n.isEmpty()
                  ? ((i = this.children_.remove(e)),
                    (o = this.indexMap_.removeFromIndexes(r, this.children_)))
                  : ((i = this.children_.insert(e, n)),
                    (o = this.indexMap_.addToIndexes(r, this.children_)));
                var s = i.isEmpty() ? bt : this.priorityNode_;
                return new t(i, s, o);
              }),
              (t.prototype.updateChild = function (t, e) {
                var n = t.getFront();
                if (null === n) return e;
                a.assert(
                  '.priority' !== t.getFront() || 1 === t.getLength(),
                  '.priority must be the last token in a path',
                );
                var r = this.getImmediateChild(n).updateChild(t.popFront(), e);
                return this.updateImmediateChild(n, r);
              }),
              (t.prototype.isEmpty = function () {
                return this.children_.isEmpty();
              }),
              (t.prototype.numChildren = function () {
                return this.children_.count();
              }),
              (t.prototype.val = function (e) {
                if (this.isEmpty()) return null;
                var n = {},
                  r = 0,
                  i = 0,
                  o = !0;
                if (
                  (this.forEachChild(St, function (s, a) {
                    (n[s] = a.val(e)),
                      r++,
                      o && t.INTEGER_REGEXP_.test(s) ? (i = Math.max(i, Number(s))) : (o = !1);
                  }),
                  !e && o && i < 2 * r)
                ) {
                  var s = [];
                  for (var a in n) s[a] = n[a];
                  return s;
                }
                return (
                  e && !this.getPriority().isEmpty() && (n['.priority'] = this.getPriority().val()),
                  n
                );
              }),
              (t.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var t = '';
                  this.getPriority().isEmpty() ||
                    (t += 'priority:' + Ct(this.getPriority().val()) + ':'),
                    this.forEachChild(St, function (e, n) {
                      var r = n.hash();
                      '' !== r && (t += ':' + e + ':' + r);
                    }),
                    (this.lazyHash_ = '' === t ? '' : v(t));
                }
                return this.lazyHash_;
              }),
              (t.prototype.getPredecessorChildName = function (t, e, n) {
                var r = this.resolveIndex_(n);
                if (r) {
                  var i = r.getPredecessorKey(new dt(t, e));
                  return i ? i.name : null;
                }
                return this.children_.getPredecessorKey(t);
              }),
              (t.prototype.getFirstChildName = function (t) {
                var e = this.resolveIndex_(t);
                if (e) {
                  var n = e.minKey();
                  return n && n.name;
                }
                return this.children_.minKey();
              }),
              (t.prototype.getFirstChild = function (t) {
                var e = this.getFirstChildName(t);
                return e ? new dt(e, this.children_.get(e)) : null;
              }),
              (t.prototype.getLastChildName = function (t) {
                var e = this.resolveIndex_(t);
                if (e) {
                  var n = e.maxKey();
                  return n && n.name;
                }
                return this.children_.maxKey();
              }),
              (t.prototype.getLastChild = function (t) {
                var e = this.getLastChildName(t);
                return e ? new dt(e, this.children_.get(e)) : null;
              }),
              (t.prototype.forEachChild = function (t, e) {
                var n = this.resolveIndex_(t);
                return n
                  ? n.inorderTraversal(function (t) {
                      return e(t.name, t.node);
                    })
                  : this.children_.inorderTraversal(e);
              }),
              (t.prototype.getIterator = function (t) {
                return this.getIteratorFrom(t.minPost(), t);
              }),
              (t.prototype.getIteratorFrom = function (t, e) {
                var n = this.resolveIndex_(e);
                if (n)
                  return n.getIteratorFrom(t, function (t) {
                    return t;
                  });
                for (
                  var r = this.children_.getIteratorFrom(t.name, dt.Wrap), i = r.peek();
                  null != i && e.compare(i, t) < 0;

                )
                  r.getNext(), (i = r.peek());
                return r;
              }),
              (t.prototype.getReverseIterator = function (t) {
                return this.getReverseIteratorFrom(t.maxPost(), t);
              }),
              (t.prototype.getReverseIteratorFrom = function (t, e) {
                var n = this.resolveIndex_(e);
                if (n)
                  return n.getReverseIteratorFrom(t, function (t) {
                    return t;
                  });
                for (
                  var r = this.children_.getReverseIteratorFrom(t.name, dt.Wrap), i = r.peek();
                  null != i && e.compare(i, t) > 0;

                )
                  r.getNext(), (i = r.peek());
                return r;
              }),
              (t.prototype.compareTo = function (t) {
                return this.isEmpty()
                  ? t.isEmpty()
                    ? 0
                    : -1
                  : t.isLeafNode() || t.isEmpty()
                  ? 1
                  : t === Wt
                  ? -1
                  : 0;
              }),
              (t.prototype.withIndex = function (e) {
                if (e === yt || this.indexMap_.hasIndex(e)) return this;
                var n = this.indexMap_.addIndex(e, this.children_);
                return new t(this.children_, this.priorityNode_, n);
              }),
              (t.prototype.isIndexed = function (t) {
                return t === yt || this.indexMap_.hasIndex(t);
              }),
              (t.prototype.equals = function (t) {
                if (t === this) return !0;
                if (t.isLeafNode()) return !1;
                var e = t;
                if (this.getPriority().equals(e.getPriority())) {
                  if (this.children_.count() === e.children_.count()) {
                    for (
                      var n = this.getIterator(St),
                        r = e.getIterator(St),
                        i = n.getNext(),
                        o = r.getNext();
                      i && o;

                    ) {
                      if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                      (i = n.getNext()), (o = r.getNext());
                    }
                    return null === i && null === o;
                  }
                  return !1;
                }
                return !1;
              }),
              (t.prototype.resolveIndex_ = function (t) {
                return t === yt ? null : this.indexMap_.get(t.toString());
              }),
              (t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
              t
            );
          })(),
          Wt = new ((function (t) {
            function e() {
              return t.call(this, new Rt(Lt), Mt.EMPTY_NODE, kt.Default) || this;
            }
            return (
              s.__extends(e, t),
              (e.prototype.compareTo = function (t) {
                return t === this ? 0 : 1;
              }),
              (e.prototype.equals = function (t) {
                return t === this;
              }),
              (e.prototype.getPriority = function () {
                return this;
              }),
              (e.prototype.getImmediateChild = function (t) {
                return Mt.EMPTY_NODE;
              }),
              (e.prototype.isEmpty = function () {
                return !1;
              }),
              e
            );
          })(Mt))();
        Object.defineProperties(dt, {
          MIN: { value: new dt(N, Mt.EMPTY_NODE) },
          MAX: { value: new dt(R, Wt) },
        }),
          (_t.__EMPTY_NODE = Mt.EMPTY_NODE),
          (wt.__childrenNodeConstructor = Mt),
          (j = Wt),
          (function (t) {
            mt = t;
          })(Wt);
        function Qt(t, e) {
          if ((void 0 === e && (e = null), null === t)) return Mt.EMPTY_NODE;
          if (
            ('object' === typeof t && '.priority' in t && (e = t['.priority']),
            a.assert(
              null === e ||
                'string' === typeof e ||
                'number' === typeof e ||
                ('object' === typeof e && '.sv' in e),
              'Invalid priority type found: ' + typeof e,
            ),
            'object' === typeof t && '.value' in t && null !== t['.value'] && (t = t['.value']),
            'object' !== typeof t || '.sv' in t)
          )
            return new wt(t, Qt(e));
          if (t instanceof Array) {
            var n = Mt.EMPTY_NODE;
            return (
              F(t, function (e, r) {
                if (a.contains(t, e) && '.' !== e.substring(0, 1)) {
                  var i = Qt(r);
                  (!i.isLeafNode() && i.isEmpty()) || (n = n.updateImmediateChild(e, i));
                }
              }),
              n.updatePriority(Qt(e))
            );
          }
          var r = [],
            i = !1;
          if (
            (F(t, function (t, e) {
              if ('.' !== t.substring(0, 1)) {
                var n = Qt(e);
                n.isEmpty() || ((i = i || !n.getPriority().isEmpty()), r.push(new dt(t, n)));
              }
            }),
            0 === r.length)
          )
            return Mt.EMPTY_NODE;
          var o = At(
            r,
            Ft,
            function (t) {
              return t.name;
            },
            Lt,
          );
          if (i) {
            var s = At(r, St.getCompare());
            return new Mt(o, Qt(e), new kt({ '.priority': s }, { '.priority': St }));
          }
          return new Mt(o, Qt(e), kt.Default);
        }
        !(function (t) {
          gt = t;
        })(Qt);
        var qt,
          Ut,
          Vt = new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              s.__extends(e, t),
              (e.prototype.compare = function (t, e) {
                var n = t.node.compareTo(e.node);
                return 0 === n ? D(t.name, e.name) : n;
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !0;
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !t.equals(e);
              }),
              (e.prototype.minPost = function () {
                return dt.MIN;
              }),
              (e.prototype.maxPost = function () {
                return dt.MAX;
              }),
              (e.prototype.makePost = function (t, e) {
                var n = Qt(t);
                return new dt(e, n);
              }),
              (e.prototype.toString = function () {
                return '.value';
              }),
              e
            );
          })(ft))(),
          Ht = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.indexPath_ = e),
                a.assert(
                  !e.isEmpty() && '.priority' !== e.getFront(),
                  "Can't create PathIndex with empty path or .priority key",
                ),
                n
              );
            }
            return (
              s.__extends(e, t),
              (e.prototype.extractChild = function (t) {
                return t.getChild(this.indexPath_);
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !t.getChild(this.indexPath_).isEmpty();
              }),
              (e.prototype.compare = function (t, e) {
                var n = this.extractChild(t.node),
                  r = this.extractChild(e.node),
                  i = n.compareTo(r);
                return 0 === i ? D(t.name, e.name) : i;
              }),
              (e.prototype.makePost = function (t, e) {
                var n = Qt(t),
                  r = Mt.EMPTY_NODE.updateChild(this.indexPath_, n);
                return new dt(e, r);
              }),
              (e.prototype.maxPost = function () {
                var t = Mt.EMPTY_NODE.updateChild(this.indexPath_, Wt);
                return new dt(R, t);
              }),
              (e.prototype.toString = function () {
                return this.indexPath_.slice().join('/');
              }),
              e
            );
          })(ft),
          Bt = (function () {
            function t(t, e, n) {
              (this.node_ = t), (this.ref_ = e), (this.index_ = n);
            }
            return (
              (t.prototype.val = function () {
                return (
                  a.validateArgCount('DataSnapshot.val', 0, 0, arguments.length), this.node_.val()
                );
              }),
              (t.prototype.exportVal = function () {
                return (
                  a.validateArgCount('DataSnapshot.exportVal', 0, 0, arguments.length),
                  this.node_.val(!0)
                );
              }),
              (t.prototype.toJSON = function () {
                return (
                  a.validateArgCount('DataSnapshot.toJSON', 0, 1, arguments.length),
                  this.exportVal()
                );
              }),
              (t.prototype.exists = function () {
                return (
                  a.validateArgCount('DataSnapshot.exists', 0, 0, arguments.length),
                  !this.node_.isEmpty()
                );
              }),
              (t.prototype.child = function (e) {
                a.validateArgCount('DataSnapshot.child', 0, 1, arguments.length),
                  (e = String(e)),
                  ot('DataSnapshot.child', 1, e, !1);
                var n = new U(e),
                  r = this.ref_.child(n);
                return new t(this.node_.getChild(n), r, St);
              }),
              (t.prototype.hasChild = function (t) {
                a.validateArgCount('DataSnapshot.hasChild', 1, 1, arguments.length),
                  ot('DataSnapshot.hasChild', 1, t, !1);
                var e = new U(t);
                return !this.node_.getChild(e).isEmpty();
              }),
              (t.prototype.getPriority = function () {
                return (
                  a.validateArgCount('DataSnapshot.getPriority', 0, 0, arguments.length),
                  this.node_.getPriority().val()
                );
              }),
              (t.prototype.forEach = function (e) {
                var n = this;
                if (
                  (a.validateArgCount('DataSnapshot.forEach', 1, 1, arguments.length),
                  a.validateCallback('DataSnapshot.forEach', 1, e, !1),
                  this.node_.isLeafNode())
                )
                  return !1;
                var r = this.node_;
                return !!r.forEachChild(this.index_, function (r, i) {
                  return e(new t(i, n.ref_.child(r), St));
                });
              }),
              (t.prototype.hasChildren = function () {
                return (
                  a.validateArgCount('DataSnapshot.hasChildren', 0, 0, arguments.length),
                  !this.node_.isLeafNode() && !this.node_.isEmpty()
                );
              }),
              Object.defineProperty(t.prototype, 'key', {
                get: function () {
                  return this.ref_.getKey();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.numChildren = function () {
                return (
                  a.validateArgCount('DataSnapshot.numChildren', 0, 0, arguments.length),
                  this.node_.numChildren()
                );
              }),
              (t.prototype.getRef = function () {
                return a.validateArgCount('DataSnapshot.ref', 0, 0, arguments.length), this.ref_;
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function () {
                  return this.getRef();
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          jt = (function () {
            function t(t, e, n, r) {
              (this.eventType = t),
                (this.eventRegistration = e),
                (this.snapshot = n),
                (this.prevName = r);
            }
            return (
              (t.prototype.getPath = function () {
                var t = this.snapshot.getRef();
                return 'value' === this.eventType ? t.path : t.getParent().path;
              }),
              (t.prototype.getEventType = function () {
                return this.eventType;
              }),
              (t.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function () {
                return (
                  this.getPath().toString() +
                  ':' +
                  this.eventType +
                  ':' +
                  a.stringify(this.snapshot.exportVal())
                );
              }),
              t
            );
          })(),
          Kt = (function () {
            function t(t, e, n) {
              (this.eventRegistration = t), (this.error = e), (this.path = n);
            }
            return (
              (t.prototype.getPath = function () {
                return this.path;
              }),
              (t.prototype.getEventType = function () {
                return 'cancel';
              }),
              (t.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function () {
                return this.path.toString() + ':cancel';
              }),
              t
            );
          })(),
          Yt = (function () {
            function t(t, e, n) {
              (this.callback_ = t), (this.cancelCallback_ = e), (this.context_ = n);
            }
            return (
              (t.prototype.respondsTo = function (t) {
                return 'value' === t;
              }),
              (t.prototype.createEvent = function (t, e) {
                var n = e.getQueryParams().getIndex();
                return new jt('value', this, new Bt(t.snapshotNode, e.getRef(), n));
              }),
              (t.prototype.getEventRunner = function (t) {
                var e = this.context_;
                if ('cancel' === t.getEventType()) {
                  a.assert(
                    this.cancelCallback_,
                    'Raising a cancel event on a listener with no cancel callback',
                  );
                  var n = this.cancelCallback_;
                  return function () {
                    n.call(e, t.error);
                  };
                }
                var r = this.callback_;
                return function () {
                  r.call(e, t.snapshot);
                };
              }),
              (t.prototype.createCancelEvent = function (t, e) {
                return this.cancelCallback_ ? new Kt(this, t, e) : null;
              }),
              (t.prototype.matches = function (e) {
                return (
                  e instanceof t &&
                  (!e.callback_ ||
                    !this.callback_ ||
                    (e.callback_ === this.callback_ && e.context_ === this.context_))
                );
              }),
              (t.prototype.hasAnyCallback = function () {
                return null !== this.callback_;
              }),
              t
            );
          })(),
          zt = (function () {
            function t(t, e, n) {
              (this.callbacks_ = t), (this.cancelCallback_ = e), (this.context_ = n);
            }
            return (
              (t.prototype.respondsTo = function (t) {
                var e = 'children_added' === t ? 'child_added' : t;
                return (
                  (e = 'children_removed' === e ? 'child_removed' : e),
                  a.contains(this.callbacks_, e)
                );
              }),
              (t.prototype.createCancelEvent = function (t, e) {
                return this.cancelCallback_ ? new Kt(this, t, e) : null;
              }),
              (t.prototype.createEvent = function (t, e) {
                a.assert(null != t.childName, 'Child events should have a childName.');
                var n = e.getRef().child(t.childName),
                  r = e.getQueryParams().getIndex();
                return new jt(t.type, this, new Bt(t.snapshotNode, n, r), t.prevName);
              }),
              (t.prototype.getEventRunner = function (t) {
                var e = this.context_;
                if ('cancel' === t.getEventType()) {
                  a.assert(
                    this.cancelCallback_,
                    'Raising a cancel event on a listener with no cancel callback',
                  );
                  var n = this.cancelCallback_;
                  return function () {
                    n.call(e, t.error);
                  };
                }
                var r = this.callbacks_[t.eventType];
                return function () {
                  r.call(e, t.snapshot, t.prevName);
                };
              }),
              (t.prototype.matches = function (e) {
                var n = this;
                if (e instanceof t) {
                  if (!this.callbacks_ || !e.callbacks_) return !0;
                  if (this.context_ === e.context_) {
                    var r = Object.keys(e.callbacks_),
                      i = Object.keys(this.callbacks_),
                      o = r.length;
                    if (o === i.length) {
                      if (1 === o) {
                        var s = r[0],
                          a = i[0];
                        return (
                          a === s &&
                          (!e.callbacks_[s] ||
                            !this.callbacks_[a] ||
                            e.callbacks_[s] === this.callbacks_[a])
                        );
                      }
                      return i.every(function (t) {
                        return e.callbacks_[t] === n.callbacks_[t];
                      });
                    }
                  }
                }
                return !1;
              }),
              (t.prototype.hasAnyCallback = function () {
                return null !== this.callbacks_;
              }),
              t
            );
          })(),
          Gt = (function () {
            function t(t, e, n, r) {
              (this.repo = t), (this.path = e), (this.queryParams_ = n), (this.orderByCalled_ = r);
            }
            return (
              Object.defineProperty(t, '__referenceConstructor', {
                get: function () {
                  return a.assert(qt, 'Reference.ts has not been loaded'), qt;
                },
                set: function (t) {
                  qt = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.validateQueryEndpoints_ = function (t) {
                var e = null,
                  n = null;
                if (
                  (t.hasStart() && (e = t.getIndexStartValue()),
                  t.hasEnd() && (n = t.getIndexEndValue()),
                  t.getIndex() === yt)
                ) {
                  var r =
                      'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
                    i =
                      'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.';
                  if (t.hasStart()) {
                    if (t.getIndexStartName() !== N) throw new Error(r);
                    if ('string' !== typeof e) throw new Error(i);
                  }
                  if (t.hasEnd()) {
                    if (t.getIndexEndName() !== R) throw new Error(r);
                    if ('string' !== typeof n) throw new Error(i);
                  }
                } else if (t.getIndex() === St) {
                  if ((null != e && !J(e)) || (null != n && !J(n)))
                    throw new Error(
                      'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).',
                    );
                } else if (
                  (a.assert(
                    t.getIndex() instanceof Ht || t.getIndex() === Vt,
                    'unknown index type.',
                  ),
                  (null != e && 'object' === typeof e) || (null != n && 'object' === typeof n))
                )
                  throw new Error(
                    'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.',
                  );
              }),
              (t.validateLimit_ = function (t) {
                if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit())
                  throw new Error(
                    "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.",
                  );
              }),
              (t.prototype.validateNoPreviousOrderByCall_ = function (t) {
                if (!0 === this.orderByCalled_)
                  throw new Error(t + ": You can't combine multiple orderBy calls.");
              }),
              (t.prototype.getQueryParams = function () {
                return this.queryParams_;
              }),
              (t.prototype.getRef = function () {
                return (
                  a.validateArgCount('Query.ref', 0, 0, arguments.length),
                  new t.__referenceConstructor(this.repo, this.path)
                );
              }),
              (t.prototype.on = function (e, n, r, i) {
                a.validateArgCount('Query.on', 2, 4, arguments.length),
                  rt('Query.on', 1, e, !1),
                  a.validateCallback('Query.on', 2, n, !1);
                var o = t.getCancelAndContextArgs_('Query.on', r, i);
                if ('value' === e) this.onValueEvent(n, o.cancel, o.context);
                else {
                  var s = {};
                  (s[e] = n), this.onChildEvent(s, o.cancel, o.context);
                }
                return n;
              }),
              (t.prototype.onValueEvent = function (t, e, n) {
                var r = new Yt(t, e || null, n || null);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.onChildEvent = function (t, e, n) {
                var r = new zt(t, e, n);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.off = function (t, e, n) {
                a.validateArgCount('Query.off', 0, 3, arguments.length),
                  rt('Query.off', 1, t, !0),
                  a.validateCallback('Query.off', 2, e, !0),
                  a.validateContextObject('Query.off', 3, n, !0);
                var r = null,
                  i = null;
                if ('value' === t) {
                  var o = e || null;
                  r = new Yt(o, null, n || null);
                } else t && (e && ((i = {})[t] = e), (r = new zt(i, null, n || null)));
                this.repo.removeEventCallbackForQuery(this, r);
              }),
              (t.prototype.once = function (e, n, r, i) {
                var o = this;
                a.validateArgCount('Query.once', 1, 4, arguments.length),
                  rt('Query.once', 1, e, !1),
                  a.validateCallback('Query.once', 2, n, !0);
                var s = t.getCancelAndContextArgs_('Query.once', r, i),
                  h = !0,
                  u = new a.Deferred();
                u.promise.catch(function () {});
                var l = function t(r) {
                  h && ((h = !1), o.off(e, t), n && n.bind(s.context)(r), u.resolve(r));
                };
                return (
                  this.on(e, l, function (t) {
                    o.off(e, l), s.cancel && s.cancel.bind(s.context)(t), u.reject(t);
                  }),
                  u.promise
                );
              }),
              (t.prototype.limitToFirst = function (e) {
                if (
                  (a.validateArgCount('Query.limitToFirst', 1, 1, arguments.length),
                  'number' !== typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw new Error('Query.limitToFirst: First argument must be a positive integer.');
                if (this.queryParams_.hasLimit())
                  throw new Error(
                    'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).',
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.queryParams_.limitToFirst(e),
                  this.orderByCalled_,
                );
              }),
              (t.prototype.limitToLast = function (e) {
                if (
                  (a.validateArgCount('Query.limitToLast', 1, 1, arguments.length),
                  'number' !== typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw new Error('Query.limitToLast: First argument must be a positive integer.');
                if (this.queryParams_.hasLimit())
                  throw new Error(
                    'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).',
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.queryParams_.limitToLast(e),
                  this.orderByCalled_,
                );
              }),
              (t.prototype.orderByChild = function (e) {
                if (
                  (a.validateArgCount('Query.orderByChild', 1, 1, arguments.length), '$key' === e)
                )
                  throw new Error(
                    'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.',
                  );
                if ('$priority' === e)
                  throw new Error(
                    'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.',
                  );
                if ('$value' === e)
                  throw new Error(
                    'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.',
                  );
                ot('Query.orderByChild', 1, e, !1),
                  this.validateNoPreviousOrderByCall_('Query.orderByChild');
                var n = new U(e);
                if (n.isEmpty())
                  throw new Error(
                    'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.',
                  );
                var r = new Ht(n),
                  i = this.queryParams_.orderBy(r);
                return t.validateQueryEndpoints_(i), new t(this.repo, this.path, i, !0);
              }),
              (t.prototype.orderByKey = function () {
                a.validateArgCount('Query.orderByKey', 0, 0, arguments.length),
                  this.validateNoPreviousOrderByCall_('Query.orderByKey');
                var e = this.queryParams_.orderBy(yt);
                return t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0);
              }),
              (t.prototype.orderByPriority = function () {
                a.validateArgCount('Query.orderByPriority', 0, 0, arguments.length),
                  this.validateNoPreviousOrderByCall_('Query.orderByPriority');
                var e = this.queryParams_.orderBy(St);
                return t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0);
              }),
              (t.prototype.orderByValue = function () {
                a.validateArgCount('Query.orderByValue', 0, 0, arguments.length),
                  this.validateNoPreviousOrderByCall_('Query.orderByValue');
                var e = this.queryParams_.orderBy(Vt);
                return t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0);
              }),
              (t.prototype.startAt = function (e, n) {
                void 0 === e && (e = null),
                  a.validateArgCount('Query.startAt', 0, 2, arguments.length),
                  Z('Query.startAt', 1, e, this.path, !0),
                  it('Query.startAt', 2, n, !0);
                var r = this.queryParams_.startAt(e, n);
                if (
                  (t.validateLimit_(r), t.validateQueryEndpoints_(r), this.queryParams_.hasStart())
                )
                  throw new Error(
                    'Query.startAt: Starting point was already set (by another call to startAt or equalTo).',
                  );
                return (
                  void 0 === e && ((e = null), (n = null)),
                  new t(this.repo, this.path, r, this.orderByCalled_)
                );
              }),
              (t.prototype.endAt = function (e, n) {
                void 0 === e && (e = null),
                  a.validateArgCount('Query.endAt', 0, 2, arguments.length),
                  Z('Query.endAt', 1, e, this.path, !0),
                  it('Query.endAt', 2, n, !0);
                var r = this.queryParams_.endAt(e, n);
                if ((t.validateLimit_(r), t.validateQueryEndpoints_(r), this.queryParams_.hasEnd()))
                  throw new Error(
                    'Query.endAt: Ending point was already set (by another call to endAt or equalTo).',
                  );
                return new t(this.repo, this.path, r, this.orderByCalled_);
              }),
              (t.prototype.equalTo = function (t, e) {
                if (
                  (a.validateArgCount('Query.equalTo', 1, 2, arguments.length),
                  Z('Query.equalTo', 1, t, this.path, !1),
                  it('Query.equalTo', 2, e, !0),
                  this.queryParams_.hasStart())
                )
                  throw new Error(
                    'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).',
                  );
                if (this.queryParams_.hasEnd())
                  throw new Error(
                    'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).',
                  );
                return this.startAt(t, e).endAt(t, e);
              }),
              (t.prototype.toString = function () {
                return (
                  a.validateArgCount('Query.toString', 0, 0, arguments.length),
                  this.repo.toString() + this.path.toUrlEncodedString()
                );
              }),
              (t.prototype.toJSON = function () {
                return a.validateArgCount('Query.toJSON', 0, 1, arguments.length), this.toString();
              }),
              (t.prototype.queryObject = function () {
                return this.queryParams_.getQueryObject();
              }),
              (t.prototype.queryIdentifier = function () {
                var t = this.queryObject(),
                  e = O(t);
                return '{}' === e ? 'default' : e;
              }),
              (t.prototype.isEqual = function (e) {
                if (
                  (a.validateArgCount('Query.isEqual', 1, 1, arguments.length), !(e instanceof t))
                ) {
                  var n =
                    'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
                  throw new Error(n);
                }
                var r = this.repo === e.repo,
                  i = this.path.equals(e.path),
                  o = this.queryIdentifier() === e.queryIdentifier();
                return r && i && o;
              }),
              (t.getCancelAndContextArgs_ = function (t, e, n) {
                var r = { cancel: null, context: null };
                if (e && n)
                  (r.cancel = e),
                    a.validateCallback(t, 3, r.cancel, !0),
                    (r.context = n),
                    a.validateContextObject(t, 4, r.context, !0);
                else if (e)
                  if ('object' === typeof e && null !== e) r.context = e;
                  else {
                    if ('function' !== typeof e)
                      throw new Error(
                        a.errorPrefix(t, 3, !0) +
                          ' must either be a cancel callback or a context object.',
                      );
                    r.cancel = e;
                  }
                return r;
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function () {
                  return this.getRef();
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          Xt = (function () {
            function t() {
              (this.value = null), (this.children = new Map());
            }
            return (
              (t.prototype.find = function (t) {
                if (null != this.value) return this.value.getChild(t);
                if (!t.isEmpty() && this.children.size > 0) {
                  var e = t.getFront();
                  return (
                    (t = t.popFront()), this.children.has(e) ? this.children.get(e).find(t) : null
                  );
                }
                return null;
              }),
              (t.prototype.remember = function (e, n) {
                if (e.isEmpty()) (this.value = n), this.children.clear();
                else if (null !== this.value) this.value = this.value.updateChild(e, n);
                else {
                  var r = e.getFront();
                  this.children.has(r) || this.children.set(r, new t());
                  var i = this.children.get(r);
                  (e = e.popFront()), i.remember(e, n);
                }
              }),
              (t.prototype.forget = function (t) {
                if (t.isEmpty()) return (this.value = null), this.children.clear(), !0;
                if (null !== this.value) {
                  if (this.value.isLeafNode()) return !1;
                  var e = this.value;
                  this.value = null;
                  var n = this;
                  return (
                    e.forEachChild(St, function (t, e) {
                      n.remember(new U(t), e);
                    }),
                    this.forget(t)
                  );
                }
                if (this.children.size > 0) {
                  var r = t.getFront();
                  if (((t = t.popFront()), this.children.has(r)))
                    this.children.get(r).forget(t) && this.children.delete(r);
                  return 0 === this.children.size;
                }
                return !0;
              }),
              (t.prototype.forEachTree = function (t, e) {
                null !== this.value
                  ? e(t, this.value)
                  : this.forEachChild(function (n, r) {
                      var i = new U(t.toString() + '/' + n);
                      r.forEachTree(i, e);
                    });
              }),
              (t.prototype.forEachChild = function (t) {
                this.children.forEach(function (e, n) {
                  t(n, e);
                });
              }),
              t
            );
          })(),
          $t = function (t, e) {
            return t && 'object' === typeof t
              ? (a.assert('.sv' in t, 'Unexpected leaf node or priority contents'), e[t['.sv']])
              : t;
          },
          Jt = function t(e, n) {
            var r,
              i = e.getPriority().val(),
              o = $t(i, n);
            if (e.isLeafNode()) {
              var s = e,
                a = $t(s.getValue(), n);
              return a !== s.getValue() || o !== s.getPriority().val() ? new wt(a, Qt(o)) : e;
            }
            var h = e;
            return (
              (r = h),
              o !== h.getPriority().val() && (r = r.updatePriority(new wt(o))),
              h.forEachChild(St, function (e, i) {
                var o = t(i, n);
                o !== i && (r = r.updateImmediateChild(e, o));
              }),
              r
            );
          };
        !(function (t) {
          (t[(t.OVERWRITE = 0)] = 'OVERWRITE'),
            (t[(t.MERGE = 1)] = 'MERGE'),
            (t[(t.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
            (t[(t.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE');
        })(Ut || (Ut = {}));
        var Zt,
          te,
          ee = (function () {
            function t(t, e, n, r) {
              (this.fromUser = t),
                (this.fromServer = e),
                (this.queryId = n),
                (this.tagged = r),
                a.assert(!r || e, 'Tagged queries must be from server.');
            }
            return (
              (t.User = new t(!0, !1, null, !1)),
              (t.Server = new t(!1, !0, null, !1)),
              (t.forServerTaggedQuery = function (e) {
                return new t(!1, !0, e, !0);
              }),
              t
            );
          })(),
          ne = (function () {
            function t(t, e, n) {
              (this.path = t),
                (this.affectedTree = e),
                (this.revert = n),
                (this.type = Ut.ACK_USER_WRITE),
                (this.source = ee.User);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                  if (null != this.affectedTree.value)
                    return (
                      a.assert(
                        this.affectedTree.children.isEmpty(),
                        'affectedTree should not have overlapping affected paths.',
                      ),
                      this
                    );
                  var n = this.affectedTree.subtree(new U(e));
                  return new t(U.Empty, n, this.revert);
                }
                return (
                  a.assert(
                    this.path.getFront() === e,
                    'operationForChild called for unrelated child.',
                  ),
                  new t(this.path.popFront(), this.affectedTree, this.revert)
                );
              }),
              t
            );
          })(),
          re = (function () {
            function t(t, e) {
              void 0 === e && (Zt || (Zt = new Rt(x)), (e = Zt)),
                (this.value = t),
                (this.children = e);
            }
            return (
              (t.fromObject = function (e) {
                var n = t.Empty;
                return (
                  F(e, function (t, e) {
                    n = n.set(new U(t), e);
                  }),
                  n
                );
              }),
              (t.prototype.isEmpty = function () {
                return null === this.value && this.children.isEmpty();
              }),
              (t.prototype.findRootMostMatchingPathAndValue = function (t, e) {
                if (null != this.value && e(this.value))
                  return { path: U.Empty, value: this.value };
                if (t.isEmpty()) return null;
                var n = t.getFront(),
                  r = this.children.get(n);
                if (null !== r) {
                  var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                  return null != i ? { path: new U(n).child(i.path), value: i.value } : null;
                }
                return null;
              }),
              (t.prototype.findRootMostValueAndPath = function (t) {
                return this.findRootMostMatchingPathAndValue(t, function () {
                  return !0;
                });
              }),
              (t.prototype.subtree = function (e) {
                if (e.isEmpty()) return this;
                var n = e.getFront(),
                  r = this.children.get(n);
                return null !== r ? r.subtree(e.popFront()) : t.Empty;
              }),
              (t.prototype.set = function (e, n) {
                if (e.isEmpty()) return new t(n, this.children);
                var r = e.getFront(),
                  i = (this.children.get(r) || t.Empty).set(e.popFront(), n),
                  o = this.children.insert(r, i);
                return new t(this.value, o);
              }),
              (t.prototype.remove = function (e) {
                if (e.isEmpty())
                  return this.children.isEmpty() ? t.Empty : new t(null, this.children);
                var n = e.getFront(),
                  r = this.children.get(n);
                if (r) {
                  var i = r.remove(e.popFront()),
                    o = void 0;
                  return (
                    (o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i)),
                    null === this.value && o.isEmpty() ? t.Empty : new t(this.value, o)
                  );
                }
                return this;
              }),
              (t.prototype.get = function (t) {
                if (t.isEmpty()) return this.value;
                var e = t.getFront(),
                  n = this.children.get(e);
                return n ? n.get(t.popFront()) : null;
              }),
              (t.prototype.setTree = function (e, n) {
                if (e.isEmpty()) return n;
                var r = e.getFront(),
                  i = (this.children.get(r) || t.Empty).setTree(e.popFront(), n),
                  o = void 0;
                return (
                  (o = i.isEmpty() ? this.children.remove(r) : this.children.insert(r, i)),
                  new t(this.value, o)
                );
              }),
              (t.prototype.fold = function (t) {
                return this.fold_(U.Empty, t);
              }),
              (t.prototype.fold_ = function (t, e) {
                var n = {};
                return (
                  this.children.inorderTraversal(function (r, i) {
                    n[r] = i.fold_(t.child(r), e);
                  }),
                  e(t, this.value, n)
                );
              }),
              (t.prototype.findOnPath = function (t, e) {
                return this.findOnPath_(t, U.Empty, e);
              }),
              (t.prototype.findOnPath_ = function (t, e, n) {
                var r = !!this.value && n(e, this.value);
                if (r) return r;
                if (t.isEmpty()) return null;
                var i = t.getFront(),
                  o = this.children.get(i);
                return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null;
              }),
              (t.prototype.foreachOnPath = function (t, e) {
                return this.foreachOnPath_(t, U.Empty, e);
              }),
              (t.prototype.foreachOnPath_ = function (e, n, r) {
                if (e.isEmpty()) return this;
                this.value && r(n, this.value);
                var i = e.getFront(),
                  o = this.children.get(i);
                return o ? o.foreachOnPath_(e.popFront(), n.child(i), r) : t.Empty;
              }),
              (t.prototype.foreach = function (t) {
                this.foreach_(U.Empty, t);
              }),
              (t.prototype.foreach_ = function (t, e) {
                this.children.inorderTraversal(function (n, r) {
                  r.foreach_(t.child(n), e);
                }),
                  this.value && e(t, this.value);
              }),
              (t.prototype.foreachChild = function (t) {
                this.children.inorderTraversal(function (e, n) {
                  n.value && t(e, n.value);
                });
              }),
              (t.Empty = new t(null)),
              t
            );
          })(),
          ie = (function () {
            function t(t, e) {
              (this.source = t), (this.path = e), (this.type = Ut.LISTEN_COMPLETE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                return this.path.isEmpty()
                  ? new t(this.source, U.Empty)
                  : new t(this.source, this.path.popFront());
              }),
              t
            );
          })(),
          oe = (function () {
            function t(t, e, n) {
              (this.source = t), (this.path = e), (this.snap = n), (this.type = Ut.OVERWRITE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                return this.path.isEmpty()
                  ? new t(this.source, U.Empty, this.snap.getImmediateChild(e))
                  : new t(this.source, this.path.popFront(), this.snap);
              }),
              t
            );
          })(),
          se = (function () {
            function t(t, e, n) {
              (this.source = t), (this.path = e), (this.children = n), (this.type = Ut.MERGE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                  var n = this.children.subtree(new U(e));
                  return n.isEmpty()
                    ? null
                    : n.value
                    ? new oe(this.source, U.Empty, n.value)
                    : new t(this.source, U.Empty, n);
                }
                return (
                  a.assert(
                    this.path.getFront() === e,
                    "Can't get a merge for a child not on the path of the operation",
                  ),
                  new t(this.source, this.path.popFront(), this.children)
                );
              }),
              (t.prototype.toString = function () {
                return (
                  'Operation(' +
                  this.path +
                  ': ' +
                  this.source.toString() +
                  ' merge: ' +
                  this.children.toString() +
                  ')'
                );
              }),
              t
            );
          })(),
          ae = (function () {
            function t(t, e, n) {
              (this.node_ = t), (this.fullyInitialized_ = e), (this.filtered_ = n);
            }
            return (
              (t.prototype.isFullyInitialized = function () {
                return this.fullyInitialized_;
              }),
              (t.prototype.isFiltered = function () {
                return this.filtered_;
              }),
              (t.prototype.isCompleteForPath = function (t) {
                if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
                var e = t.getFront();
                return this.isCompleteForChild(e);
              }),
              (t.prototype.isCompleteForChild = function (t) {
                return (this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(t);
              }),
              (t.prototype.getNode = function () {
                return this.node_;
              }),
              t
            );
          })(),
          he = (function () {
            function t(t, e) {
              (this.eventCache_ = t), (this.serverCache_ = e);
            }
            return (
              (t.prototype.updateEventSnap = function (e, n, r) {
                return new t(new ae(e, n, r), this.serverCache_);
              }),
              (t.prototype.updateServerSnap = function (e, n, r) {
                return new t(this.eventCache_, new ae(e, n, r));
              }),
              (t.prototype.getEventCache = function () {
                return this.eventCache_;
              }),
              (t.prototype.getCompleteEventSnap = function () {
                return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
              }),
              (t.prototype.getServerCache = function () {
                return this.serverCache_;
              }),
              (t.prototype.getCompleteServerSnap = function () {
                return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
              }),
              (t.Empty = new t(new ae(Mt.EMPTY_NODE, !1, !1), new ae(Mt.EMPTY_NODE, !1, !1))),
              t
            );
          })(),
          ue = (function () {
            function t(t, e, n, r, i) {
              (this.type = t),
                (this.snapshotNode = e),
                (this.childName = n),
                (this.oldSnap = r),
                (this.prevName = i);
            }
            return (
              (t.valueChange = function (e) {
                return new t(t.VALUE, e);
              }),
              (t.childAddedChange = function (e, n) {
                return new t(t.CHILD_ADDED, n, e);
              }),
              (t.childRemovedChange = function (e, n) {
                return new t(t.CHILD_REMOVED, n, e);
              }),
              (t.childChangedChange = function (e, n, r) {
                return new t(t.CHILD_CHANGED, n, e, r);
              }),
              (t.childMovedChange = function (e, n) {
                return new t(t.CHILD_MOVED, n, e);
              }),
              (t.CHILD_ADDED = 'child_added'),
              (t.CHILD_REMOVED = 'child_removed'),
              (t.CHILD_CHANGED = 'child_changed'),
              (t.CHILD_MOVED = 'child_moved'),
              (t.VALUE = 'value'),
              t
            );
          })(),
          le = (function () {
            function t(t) {
              this.index_ = t;
            }
            return (
              (t.prototype.updateChild = function (t, e, n, r, i, o) {
                a.assert(
                  t.isIndexed(this.index_),
                  'A node must be indexed if only a child is updated',
                );
                var s = t.getImmediateChild(e);
                return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() === n.isEmpty()
                  ? t
                  : (null != o &&
                      (n.isEmpty()
                        ? t.hasChild(e)
                          ? o.trackChildChange(ue.childRemovedChange(e, s))
                          : a.assert(
                              t.isLeafNode(),
                              'A child remove without an old child only makes sense on a leaf node',
                            )
                        : s.isEmpty()
                        ? o.trackChildChange(ue.childAddedChange(e, n))
                        : o.trackChildChange(ue.childChangedChange(e, n, s))),
                    t.isLeafNode() && n.isEmpty()
                      ? t
                      : t.updateImmediateChild(e, n).withIndex(this.index_));
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                return (
                  null != n &&
                    (t.isLeafNode() ||
                      t.forEachChild(St, function (t, r) {
                        e.hasChild(t) || n.trackChildChange(ue.childRemovedChange(t, r));
                      }),
                    e.isLeafNode() ||
                      e.forEachChild(St, function (e, r) {
                        if (t.hasChild(e)) {
                          var i = t.getImmediateChild(e);
                          i.equals(r) || n.trackChildChange(ue.childChangedChange(e, r, i));
                        } else n.trackChildChange(ue.childAddedChange(e, r));
                      })),
                  e.withIndex(this.index_)
                );
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t.isEmpty() ? Mt.EMPTY_NODE : t.updatePriority(e);
              }),
              (t.prototype.filtersNodes = function () {
                return !1;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              t
            );
          })(),
          ce = (function () {
            function t() {
              this.changeMap = new Map();
            }
            return (
              (t.prototype.trackChildChange = function (t) {
                var e = t.type,
                  n = t.childName;
                a.assert(
                  e === ue.CHILD_ADDED || e === ue.CHILD_CHANGED || e === ue.CHILD_REMOVED,
                  'Only child changes supported for tracking',
                ),
                  a.assert('.priority' !== n, 'Only non-priority child changes can be tracked.');
                var r = this.changeMap.get(n);
                if (r) {
                  var i = r.type;
                  if (e === ue.CHILD_ADDED && i === ue.CHILD_REMOVED)
                    this.changeMap.set(n, ue.childChangedChange(n, t.snapshotNode, r.snapshotNode));
                  else if (e === ue.CHILD_REMOVED && i === ue.CHILD_ADDED) this.changeMap.delete(n);
                  else if (e === ue.CHILD_REMOVED && i === ue.CHILD_CHANGED)
                    this.changeMap.set(n, ue.childRemovedChange(n, r.oldSnap));
                  else if (e === ue.CHILD_CHANGED && i === ue.CHILD_ADDED)
                    this.changeMap.set(n, ue.childAddedChange(n, t.snapshotNode));
                  else {
                    if (e !== ue.CHILD_CHANGED || i !== ue.CHILD_CHANGED)
                      throw a.assertionError(
                        'Illegal combination of changes: ' + t + ' occurred after ' + r,
                      );
                    this.changeMap.set(n, ue.childChangedChange(n, t.snapshotNode, r.oldSnap));
                  }
                } else this.changeMap.set(n, t);
              }),
              (t.prototype.getChanges = function () {
                return Array.from(this.changeMap.values());
              }),
              t
            );
          })(),
          pe = new ((function () {
            function t() {}
            return (
              (t.prototype.getCompleteChild = function (t) {
                return null;
              }),
              (t.prototype.getChildAfterChild = function (t, e, n) {
                return null;
              }),
              t
            );
          })())(),
          de = (function () {
            function t(t, e, n) {
              void 0 === n && (n = null),
                (this.writes_ = t),
                (this.viewCache_ = e),
                (this.optCompleteServerCache_ = n);
            }
            return (
              (t.prototype.getCompleteChild = function (t) {
                var e = this.viewCache_.getEventCache();
                if (e.isCompleteForChild(t)) return e.getNode().getImmediateChild(t);
                var n =
                  null != this.optCompleteServerCache_
                    ? new ae(this.optCompleteServerCache_, !0, !1)
                    : this.viewCache_.getServerCache();
                return this.writes_.calcCompleteChild(t, n);
              }),
              (t.prototype.getChildAfterChild = function (t, e, n) {
                var r =
                    null != this.optCompleteServerCache_
                      ? this.optCompleteServerCache_
                      : this.viewCache_.getCompleteServerSnap(),
                  i = this.writes_.calcIndexedSlice(r, e, 1, n, t);
                return 0 === i.length ? null : i[0];
              }),
              t
            );
          })(),
          fe = function (t, e) {
            (this.viewCache = t), (this.changes = e);
          },
          _e = (function () {
            function t(t) {
              this.filter_ = t;
            }
            return (
              (t.prototype.assertIndexed = function (t) {
                a.assert(
                  t.getEventCache().getNode().isIndexed(this.filter_.getIndex()),
                  'Event snap not indexed',
                ),
                  a.assert(
                    t.getServerCache().getNode().isIndexed(this.filter_.getIndex()),
                    'Server snap not indexed',
                  );
              }),
              (t.prototype.applyOperation = function (e, n, r, i) {
                var o,
                  s,
                  h = new ce();
                if (n.type === Ut.OVERWRITE) {
                  var u = n;
                  u.source.fromUser
                    ? (o = this.applyUserOverwrite_(e, u.path, u.snap, r, i, h))
                    : (a.assert(u.source.fromServer, 'Unknown source.'),
                      (s =
                        u.source.tagged || (e.getServerCache().isFiltered() && !u.path.isEmpty())),
                      (o = this.applyServerOverwrite_(e, u.path, u.snap, r, i, s, h)));
                } else if (n.type === Ut.MERGE) {
                  var l = n;
                  l.source.fromUser
                    ? (o = this.applyUserMerge_(e, l.path, l.children, r, i, h))
                    : (a.assert(l.source.fromServer, 'Unknown source.'),
                      (s = l.source.tagged || e.getServerCache().isFiltered()),
                      (o = this.applyServerMerge_(e, l.path, l.children, r, i, s, h)));
                } else if (n.type === Ut.ACK_USER_WRITE) {
                  var c = n;
                  o = c.revert
                    ? this.revertUserWrite_(e, c.path, r, i, h)
                    : this.ackUserWrite_(e, c.path, c.affectedTree, r, i, h);
                } else {
                  if (n.type !== Ut.LISTEN_COMPLETE)
                    throw a.assertionError('Unknown operation type: ' + n.type);
                  o = this.listenComplete_(e, n.path, r, h);
                }
                var p = h.getChanges();
                return t.maybeAddValueEvent_(e, o, p), new fe(o, p);
              }),
              (t.maybeAddValueEvent_ = function (t, e, n) {
                var r = e.getEventCache();
                if (r.isFullyInitialized()) {
                  var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                    o = t.getCompleteEventSnap();
                  (n.length > 0 ||
                    !t.getEventCache().isFullyInitialized() ||
                    (i && !r.getNode().equals(o)) ||
                    !r.getNode().getPriority().equals(o.getPriority())) &&
                    n.push(ue.valueChange(e.getCompleteEventSnap()));
                }
              }),
              (t.prototype.generateEventCacheAfterServerEvent_ = function (t, e, n, r, i) {
                var o = t.getEventCache();
                if (null != n.shadowingWrite(e)) return t;
                var s = void 0,
                  h = void 0;
                if (e.isEmpty())
                  if (
                    (a.assert(
                      t.getServerCache().isFullyInitialized(),
                      'If change path is empty, we must have complete server data',
                    ),
                    t.getServerCache().isFiltered())
                  ) {
                    var u = t.getCompleteServerSnap(),
                      l = u instanceof Mt ? u : Mt.EMPTY_NODE,
                      c = n.calcCompleteEventChildren(l);
                    s = this.filter_.updateFullNode(t.getEventCache().getNode(), c, i);
                  } else {
                    var p = n.calcCompleteEventCache(t.getCompleteServerSnap());
                    s = this.filter_.updateFullNode(t.getEventCache().getNode(), p, i);
                  }
                else {
                  var d = e.getFront();
                  if ('.priority' === d) {
                    a.assert(
                      1 === e.getLength(),
                      "Can't have a priority with additional path components",
                    );
                    var f = o.getNode();
                    h = t.getServerCache().getNode();
                    var _ = n.calcEventCacheAfterServerOverwrite(e, f, h);
                    s = null != _ ? this.filter_.updatePriority(f, _) : o.getNode();
                  } else {
                    var y = e.popFront(),
                      v = void 0;
                    if (o.isCompleteForChild(d)) {
                      h = t.getServerCache().getNode();
                      var g = n.calcEventCacheAfterServerOverwrite(e, o.getNode(), h);
                      v =
                        null != g
                          ? o.getNode().getImmediateChild(d).updateChild(y, g)
                          : o.getNode().getImmediateChild(d);
                    } else v = n.calcCompleteChild(d, t.getServerCache());
                    s =
                      null != v
                        ? this.filter_.updateChild(o.getNode(), d, v, y, r, i)
                        : o.getNode();
                  }
                }
                return t.updateEventSnap(
                  s,
                  o.isFullyInitialized() || e.isEmpty(),
                  this.filter_.filtersNodes(),
                );
              }),
              (t.prototype.applyServerOverwrite_ = function (t, e, n, r, i, o, s) {
                var a,
                  h = t.getServerCache(),
                  u = o ? this.filter_ : this.filter_.getIndexedFilter();
                if (e.isEmpty()) a = u.updateFullNode(h.getNode(), n, null);
                else if (u.filtersNodes() && !h.isFiltered()) {
                  var l = h.getNode().updateChild(e, n);
                  a = u.updateFullNode(h.getNode(), l, null);
                } else {
                  var c = e.getFront();
                  if (!h.isCompleteForPath(e) && e.getLength() > 1) return t;
                  var p = e.popFront(),
                    d = h.getNode().getImmediateChild(c).updateChild(p, n);
                  a =
                    '.priority' === c
                      ? u.updatePriority(h.getNode(), d)
                      : u.updateChild(h.getNode(), c, d, p, pe, null);
                }
                var f = t.updateServerSnap(
                    a,
                    h.isFullyInitialized() || e.isEmpty(),
                    u.filtersNodes(),
                  ),
                  _ = new de(r, f, i);
                return this.generateEventCacheAfterServerEvent_(f, e, r, _, s);
              }),
              (t.prototype.applyUserOverwrite_ = function (t, e, n, r, i, o) {
                var s,
                  a,
                  h = t.getEventCache(),
                  u = new de(r, t, i);
                if (e.isEmpty())
                  (a = this.filter_.updateFullNode(t.getEventCache().getNode(), n, o)),
                    (s = t.updateEventSnap(a, !0, this.filter_.filtersNodes()));
                else {
                  var l = e.getFront();
                  if ('.priority' === l)
                    (a = this.filter_.updatePriority(t.getEventCache().getNode(), n)),
                      (s = t.updateEventSnap(a, h.isFullyInitialized(), h.isFiltered()));
                  else {
                    var c = e.popFront(),
                      p = h.getNode().getImmediateChild(l),
                      d = void 0;
                    if (c.isEmpty()) d = n;
                    else {
                      var f = u.getCompleteChild(l);
                      d =
                        null != f
                          ? '.priority' === c.getBack() && f.getChild(c.parent()).isEmpty()
                            ? f
                            : f.updateChild(c, n)
                          : Mt.EMPTY_NODE;
                    }
                    if (p.equals(d)) s = t;
                    else {
                      var _ = this.filter_.updateChild(h.getNode(), l, d, c, u, o);
                      s = t.updateEventSnap(_, h.isFullyInitialized(), this.filter_.filtersNodes());
                    }
                  }
                }
                return s;
              }),
              (t.cacheHasChild_ = function (t, e) {
                return t.getEventCache().isCompleteForChild(e);
              }),
              (t.prototype.applyUserMerge_ = function (e, n, r, i, o, s) {
                var a = this,
                  h = e;
                return (
                  r.foreach(function (r, u) {
                    var l = n.child(r);
                    t.cacheHasChild_(e, l.getFront()) &&
                      (h = a.applyUserOverwrite_(h, l, u, i, o, s));
                  }),
                  r.foreach(function (r, u) {
                    var l = n.child(r);
                    t.cacheHasChild_(e, l.getFront()) ||
                      (h = a.applyUserOverwrite_(h, l, u, i, o, s));
                  }),
                  h
                );
              }),
              (t.prototype.applyMerge_ = function (t, e) {
                return (
                  e.foreach(function (e, n) {
                    t = t.updateChild(e, n);
                  }),
                  t
                );
              }),
              (t.prototype.applyServerMerge_ = function (t, e, n, r, i, o, s) {
                var a = this;
                if (
                  t.getServerCache().getNode().isEmpty() &&
                  !t.getServerCache().isFullyInitialized()
                )
                  return t;
                var h,
                  u = t;
                h = e.isEmpty() ? n : re.Empty.setTree(e, n);
                var l = t.getServerCache().getNode();
                return (
                  h.children.inorderTraversal(function (e, n) {
                    if (l.hasChild(e)) {
                      var h = t.getServerCache().getNode().getImmediateChild(e),
                        c = a.applyMerge_(h, n);
                      u = a.applyServerOverwrite_(u, new U(e), c, r, i, o, s);
                    }
                  }),
                  h.children.inorderTraversal(function (e, n) {
                    var h = !t.getServerCache().isCompleteForChild(e) && null == n.value;
                    if (!l.hasChild(e) && !h) {
                      var c = t.getServerCache().getNode().getImmediateChild(e),
                        p = a.applyMerge_(c, n);
                      u = a.applyServerOverwrite_(u, new U(e), p, r, i, o, s);
                    }
                  }),
                  u
                );
              }),
              (t.prototype.ackUserWrite_ = function (t, e, n, r, i, o) {
                if (null != r.shadowingWrite(e)) return t;
                var s = t.getServerCache().isFiltered(),
                  a = t.getServerCache();
                if (null != n.value) {
                  if ((e.isEmpty() && a.isFullyInitialized()) || a.isCompleteForPath(e))
                    return this.applyServerOverwrite_(t, e, a.getNode().getChild(e), r, i, s, o);
                  if (e.isEmpty()) {
                    var h = re.Empty;
                    return (
                      a.getNode().forEachChild(yt, function (t, e) {
                        h = h.set(new U(t), e);
                      }),
                      this.applyServerMerge_(t, e, h, r, i, s, o)
                    );
                  }
                  return t;
                }
                var u = re.Empty;
                return (
                  n.foreach(function (t, n) {
                    var r = e.child(t);
                    a.isCompleteForPath(r) && (u = u.set(t, a.getNode().getChild(r)));
                  }),
                  this.applyServerMerge_(t, e, u, r, i, s, o)
                );
              }),
              (t.prototype.listenComplete_ = function (t, e, n, r) {
                var i = t.getServerCache(),
                  o = t.updateServerSnap(
                    i.getNode(),
                    i.isFullyInitialized() || e.isEmpty(),
                    i.isFiltered(),
                  );
                return this.generateEventCacheAfterServerEvent_(o, e, n, pe, r);
              }),
              (t.prototype.revertUserWrite_ = function (t, e, n, r, i) {
                var o;
                if (null != n.shadowingWrite(e)) return t;
                var s = new de(n, t, r),
                  h = t.getEventCache().getNode(),
                  u = void 0;
                if (e.isEmpty() || '.priority' === e.getFront()) {
                  var l = void 0;
                  if (t.getServerCache().isFullyInitialized())
                    l = n.calcCompleteEventCache(t.getCompleteServerSnap());
                  else {
                    var c = t.getServerCache().getNode();
                    a.assert(c instanceof Mt, 'serverChildren would be complete if leaf node'),
                      (l = n.calcCompleteEventChildren(c));
                  }
                  (l = l), (u = this.filter_.updateFullNode(h, l, i));
                } else {
                  var p = e.getFront(),
                    d = n.calcCompleteChild(p, t.getServerCache());
                  null == d &&
                    t.getServerCache().isCompleteForChild(p) &&
                    (d = h.getImmediateChild(p)),
                    (u =
                      null != d
                        ? this.filter_.updateChild(h, p, d, e.popFront(), s, i)
                        : t.getEventCache().getNode().hasChild(p)
                        ? this.filter_.updateChild(h, p, Mt.EMPTY_NODE, e.popFront(), s, i)
                        : h).isEmpty() &&
                      t.getServerCache().isFullyInitialized() &&
                      (o = n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode() &&
                      (u = this.filter_.updateFullNode(u, o, i));
                }
                return (
                  (o =
                    t.getServerCache().isFullyInitialized() || null != n.shadowingWrite(U.Empty)),
                  t.updateEventSnap(u, o, this.filter_.filtersNodes())
                );
              }),
              t
            );
          })(),
          ye = (function () {
            function t(t) {
              (this.query_ = t), (this.index_ = this.query_.getQueryParams().getIndex());
            }
            return (
              (t.prototype.generateEventsForChanges = function (t, e, n) {
                var r = this,
                  i = [],
                  o = [];
                return (
                  t.forEach(function (t) {
                    t.type === ue.CHILD_CHANGED &&
                      r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                      o.push(ue.childMovedChange(t.childName, t.snapshotNode));
                  }),
                  this.generateEventsForType_(i, ue.CHILD_REMOVED, t, n, e),
                  this.generateEventsForType_(i, ue.CHILD_ADDED, t, n, e),
                  this.generateEventsForType_(i, ue.CHILD_MOVED, o, n, e),
                  this.generateEventsForType_(i, ue.CHILD_CHANGED, t, n, e),
                  this.generateEventsForType_(i, ue.VALUE, t, n, e),
                  i
                );
              }),
              (t.prototype.generateEventsForType_ = function (t, e, n, r, i) {
                var o = this,
                  s = n.filter(function (t) {
                    return t.type === e;
                  });
                s.sort(this.compareChanges_.bind(this)),
                  s.forEach(function (e) {
                    var n = o.materializeSingleChange_(e, i);
                    r.forEach(function (r) {
                      r.respondsTo(e.type) && t.push(r.createEvent(n, o.query_));
                    });
                  });
              }),
              (t.prototype.materializeSingleChange_ = function (t, e) {
                return (
                  'value' === t.type ||
                    'child_removed' === t.type ||
                    (t.prevName = e.getPredecessorChildName(
                      t.childName,
                      t.snapshotNode,
                      this.index_,
                    )),
                  t
                );
              }),
              (t.prototype.compareChanges_ = function (t, e) {
                if (null == t.childName || null == e.childName)
                  throw a.assertionError('Should only compare child_ events.');
                var n = new dt(t.childName, t.snapshotNode),
                  r = new dt(e.childName, e.snapshotNode);
                return this.index_.compare(n, r);
              }),
              t
            );
          })(),
          ve = (function () {
            function t(t, e) {
              (this.query_ = t), (this.eventRegistrations_ = []);
              var n = this.query_.getQueryParams(),
                r = new le(n.getIndex()),
                i = n.getNodeFilter();
              this.processor_ = new _e(i);
              var o = e.getServerCache(),
                s = e.getEventCache(),
                a = r.updateFullNode(Mt.EMPTY_NODE, o.getNode(), null),
                h = i.updateFullNode(Mt.EMPTY_NODE, s.getNode(), null),
                u = new ae(a, o.isFullyInitialized(), r.filtersNodes()),
                l = new ae(h, s.isFullyInitialized(), i.filtersNodes());
              (this.viewCache_ = new he(l, u)), (this.eventGenerator_ = new ye(this.query_));
            }
            return (
              (t.prototype.getQuery = function () {
                return this.query_;
              }),
              (t.prototype.getServerCache = function () {
                return this.viewCache_.getServerCache().getNode();
              }),
              (t.prototype.getCompleteServerCache = function (t) {
                var e = this.viewCache_.getCompleteServerSnap();
                return e &&
                  (this.query_.getQueryParams().loadsAllData() ||
                    (!t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()))
                  ? e.getChild(t)
                  : null;
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.eventRegistrations_.length;
              }),
              (t.prototype.addEventRegistration = function (t) {
                this.eventRegistrations_.push(t);
              }),
              (t.prototype.removeEventRegistration = function (t, e) {
                var n = [];
                if (e) {
                  a.assert(null == t, 'A cancel should cancel all event registrations.');
                  var r = this.query_.path;
                  this.eventRegistrations_.forEach(function (t) {
                    e = e;
                    var i = t.createCancelEvent(e, r);
                    i && n.push(i);
                  });
                }
                if (t) {
                  for (var i = [], o = 0; o < this.eventRegistrations_.length; ++o) {
                    var s = this.eventRegistrations_[o];
                    if (s.matches(t)) {
                      if (t.hasAnyCallback()) {
                        i = i.concat(this.eventRegistrations_.slice(o + 1));
                        break;
                      }
                    } else i.push(s);
                  }
                  this.eventRegistrations_ = i;
                } else this.eventRegistrations_ = [];
                return n;
              }),
              (t.prototype.applyOperation = function (t, e, n) {
                t.type === Ut.MERGE &&
                  null !== t.source.queryId &&
                  (a.assert(
                    this.viewCache_.getCompleteServerSnap(),
                    'We should always have a full cache before handling merges',
                  ),
                  a.assert(
                    this.viewCache_.getCompleteEventSnap(),
                    'Missing event cache, even though we have a server cache',
                  ));
                var r = this.viewCache_,
                  i = this.processor_.applyOperation(r, t, e, n);
                return (
                  this.processor_.assertIndexed(i.viewCache),
                  a.assert(
                    i.viewCache.getServerCache().isFullyInitialized() ||
                      !r.getServerCache().isFullyInitialized(),
                    'Once a server snap is complete, it should never go back',
                  ),
                  (this.viewCache_ = i.viewCache),
                  this.generateEventsForChanges_(
                    i.changes,
                    i.viewCache.getEventCache().getNode(),
                    null,
                  )
                );
              }),
              (t.prototype.getInitialEvents = function (t) {
                var e = this.viewCache_.getEventCache(),
                  n = [];
                e.getNode().isLeafNode() ||
                  e.getNode().forEachChild(St, function (t, e) {
                    n.push(ue.childAddedChange(t, e));
                  });
                return (
                  e.isFullyInitialized() && n.push(ue.valueChange(e.getNode())),
                  this.generateEventsForChanges_(n, e.getNode(), t)
                );
              }),
              (t.prototype.generateEventsForChanges_ = function (t, e, n) {
                var r = n ? [n] : this.eventRegistrations_;
                return this.eventGenerator_.generateEventsForChanges(t, e, r);
              }),
              t
            );
          })(),
          ge = (function () {
            function t() {
              this.views = new Map();
            }
            return (
              Object.defineProperty(t, '__referenceConstructor', {
                get: function () {
                  return a.assert(te, 'Reference.ts has not been loaded'), te;
                },
                set: function (t) {
                  a.assert(!te, '__referenceConstructor has already been defined'), (te = t);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.views.size;
              }),
              (t.prototype.applyOperation = function (t, e, n) {
                var r,
                  i,
                  o = t.source.queryId;
                if (null !== o) {
                  var h = this.views.get(o);
                  return (
                    a.assert(null != h, 'SyncTree gave us an op for an invalid query.'),
                    h.applyOperation(t, e, n)
                  );
                }
                var u = [];
                try {
                  for (
                    var l = s.__values(this.views.values()), c = l.next();
                    !c.done;
                    c = l.next()
                  ) {
                    h = c.value;
                    u = u.concat(h.applyOperation(t, e, n));
                  }
                } catch (p) {
                  r = { error: p };
                } finally {
                  try {
                    c && !c.done && (i = l.return) && i.call(l);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return u;
              }),
              (t.prototype.addEventRegistration = function (t, e, n, r, i) {
                var o = t.queryIdentifier(),
                  s = this.views.get(o);
                if (!s) {
                  var a = n.calcCompleteEventCache(i ? r : null),
                    h = !1;
                  a
                    ? (h = !0)
                    : r instanceof Mt
                    ? ((a = n.calcCompleteEventChildren(r)), (h = !1))
                    : ((a = Mt.EMPTY_NODE), (h = !1));
                  var u = new he(new ae(a, h, !1), new ae(r, i, !1));
                  (s = new ve(t, u)), this.views.set(o, s);
                }
                return s.addEventRegistration(e), s.getInitialEvents(e);
              }),
              (t.prototype.removeEventRegistration = function (e, n, r) {
                var i,
                  o,
                  a = e.queryIdentifier(),
                  h = [],
                  u = [],
                  l = this.hasCompleteView();
                if ('default' === a)
                  try {
                    for (
                      var c = s.__values(this.views.entries()), p = c.next();
                      !p.done;
                      p = c.next()
                    ) {
                      var d = s.__read(p.value, 2),
                        f = d[0],
                        _ = d[1];
                      (u = u.concat(_.removeEventRegistration(n, r))),
                        _.isEmpty() &&
                          (this.views.delete(f),
                          _.getQuery().getQueryParams().loadsAllData() || h.push(_.getQuery()));
                    }
                  } catch (y) {
                    i = { error: y };
                  } finally {
                    try {
                      p && !p.done && (o = c.return) && o.call(c);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                else
                  (_ = this.views.get(a)) &&
                    ((u = u.concat(_.removeEventRegistration(n, r))),
                    _.isEmpty() &&
                      (this.views.delete(a),
                      _.getQuery().getQueryParams().loadsAllData() || h.push(_.getQuery())));
                return (
                  l &&
                    !this.hasCompleteView() &&
                    h.push(new t.__referenceConstructor(e.repo, e.path)),
                  { removed: h, events: u }
                );
              }),
              (t.prototype.getQueryViews = function () {
                var t,
                  e,
                  n = [];
                try {
                  for (
                    var r = s.__values(this.views.values()), i = r.next();
                    !i.done;
                    i = r.next()
                  ) {
                    var o = i.value;
                    o.getQuery().getQueryParams().loadsAllData() || n.push(o);
                  }
                } catch (a) {
                  t = { error: a };
                } finally {
                  try {
                    i && !i.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return n;
              }),
              (t.prototype.getCompleteServerCache = function (t) {
                var e,
                  n,
                  r = null;
                try {
                  for (
                    var i = s.__values(this.views.values()), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    r = r || a.getCompleteServerCache(t);
                  }
                } catch (h) {
                  e = { error: h };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              }),
              (t.prototype.viewForQuery = function (t) {
                if (t.getQueryParams().loadsAllData()) return this.getCompleteView();
                var e = t.queryIdentifier();
                return this.views.get(e);
              }),
              (t.prototype.viewExistsForQuery = function (t) {
                return null != this.viewForQuery(t);
              }),
              (t.prototype.hasCompleteView = function () {
                return null != this.getCompleteView();
              }),
              (t.prototype.getCompleteView = function () {
                var t, e;
                try {
                  for (
                    var n = s.__values(this.views.values()), r = n.next();
                    !r.done;
                    r = n.next()
                  ) {
                    var i = r.value;
                    if (i.getQuery().getQueryParams().loadsAllData()) return i;
                  }
                } catch (o) {
                  t = { error: o };
                } finally {
                  try {
                    r && !r.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return null;
              }),
              t
            );
          })(),
          me = (function () {
            function t(t) {
              this.writeTree_ = t;
            }
            return (
              (t.prototype.addWrite = function (e, n) {
                if (e.isEmpty()) return new t(new re(n));
                var r = this.writeTree_.findRootMostValueAndPath(e);
                if (null != r) {
                  var i = r.path,
                    o = r.value,
                    s = U.relativePath(i, e);
                  return (o = o.updateChild(s, n)), new t(this.writeTree_.set(i, o));
                }
                var a = new re(n);
                return new t(this.writeTree_.setTree(e, a));
              }),
              (t.prototype.addWrites = function (t, e) {
                var n = this;
                return (
                  F(e, function (e, r) {
                    n = n.addWrite(t.child(e), r);
                  }),
                  n
                );
              }),
              (t.prototype.removeWrite = function (e) {
                return e.isEmpty() ? t.Empty : new t(this.writeTree_.setTree(e, re.Empty));
              }),
              (t.prototype.hasCompleteWrite = function (t) {
                return null != this.getCompleteNode(t);
              }),
              (t.prototype.getCompleteNode = function (t) {
                var e = this.writeTree_.findRootMostValueAndPath(t);
                return null != e
                  ? this.writeTree_.get(e.path).getChild(U.relativePath(e.path, t))
                  : null;
              }),
              (t.prototype.getCompleteChildren = function () {
                var t = [],
                  e = this.writeTree_.value;
                return (
                  null != e
                    ? e.isLeafNode() ||
                      e.forEachChild(St, function (e, n) {
                        t.push(new dt(e, n));
                      })
                    : this.writeTree_.children.inorderTraversal(function (e, n) {
                        null != n.value && t.push(new dt(e, n.value));
                      }),
                  t
                );
              }),
              (t.prototype.childCompoundWrite = function (e) {
                if (e.isEmpty()) return this;
                var n = this.getCompleteNode(e);
                return new t(null != n ? new re(n) : this.writeTree_.subtree(e));
              }),
              (t.prototype.isEmpty = function () {
                return this.writeTree_.isEmpty();
              }),
              (t.prototype.apply = function (t) {
                return (function t(e, n, r) {
                  if (null != n.value) return r.updateChild(e, n.value);
                  var i = null;
                  return (
                    n.children.inorderTraversal(function (n, o) {
                      '.priority' === n
                        ? (a.assert(null !== o.value, 'Priority writes must always be leaf nodes'),
                          (i = o.value))
                        : (r = t(e.child(n), o, r));
                    }),
                    r.getChild(e).isEmpty() ||
                      null === i ||
                      (r = r.updateChild(e.child('.priority'), i)),
                    r
                  );
                })(U.Empty, this.writeTree_, t);
              }),
              (t.Empty = new t(new re(null))),
              t
            );
          })();
        var Ce = (function () {
            function t() {
              (this.visibleWrites_ = me.Empty), (this.allWrites_ = []), (this.lastWriteId_ = -1);
            }
            return (
              (t.prototype.childWrites = function (t) {
                return new Ee(t, this);
              }),
              (t.prototype.addOverwrite = function (t, e, n, r) {
                a.assert(n > this.lastWriteId_, 'Stacking an older write on top of newer ones'),
                  void 0 === r && (r = !0),
                  this.allWrites_.push({ path: t, snap: e, writeId: n, visible: r }),
                  r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)),
                  (this.lastWriteId_ = n);
              }),
              (t.prototype.addMerge = function (t, e, n) {
                a.assert(n > this.lastWriteId_, 'Stacking an older merge on top of newer ones'),
                  this.allWrites_.push({ path: t, children: e, writeId: n, visible: !0 }),
                  (this.visibleWrites_ = this.visibleWrites_.addWrites(t, e)),
                  (this.lastWriteId_ = n);
              }),
              (t.prototype.getWrite = function (t) {
                for (var e = 0; e < this.allWrites_.length; e++) {
                  var n = this.allWrites_[e];
                  if (n.writeId === t) return n;
                }
                return null;
              }),
              (t.prototype.removeWrite = function (t) {
                var e = this,
                  n = this.allWrites_.findIndex(function (e) {
                    return e.writeId === t;
                  });
                a.assert(n >= 0, 'removeWrite called with nonexistent writeId.');
                var r = this.allWrites_[n];
                this.allWrites_.splice(n, 1);
                for (var i = r.visible, o = !1, s = this.allWrites_.length - 1; i && s >= 0; ) {
                  var h = this.allWrites_[s];
                  h.visible &&
                    (s >= n && this.recordContainsPath_(h, r.path)
                      ? (i = !1)
                      : r.path.contains(h.path) && (o = !0)),
                    s--;
                }
                if (i) {
                  if (o) return this.resetTree_(), !0;
                  r.snap
                    ? (this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path))
                    : F(r.children, function (t) {
                        e.visibleWrites_ = e.visibleWrites_.removeWrite(r.path.child(t));
                      });
                  return !0;
                }
                return !1;
              }),
              (t.prototype.getCompleteWriteData = function (t) {
                return this.visibleWrites_.getCompleteNode(t);
              }),
              (t.prototype.calcCompleteEventCache = function (e, n, r, i) {
                if (r || i) {
                  var o = this.visibleWrites_.childCompoundWrite(e);
                  if (!i && o.isEmpty()) return n;
                  if (i || null != n || o.hasCompleteWrite(U.Empty)) {
                    var s = t.layerTree_(
                      this.allWrites_,
                      function (t) {
                        return (
                          (t.visible || i) &&
                          (!r || !~r.indexOf(t.writeId)) &&
                          (t.path.contains(e) || e.contains(t.path))
                        );
                      },
                      e,
                    );
                    u = n || Mt.EMPTY_NODE;
                    return s.apply(u);
                  }
                  return null;
                }
                var a = this.visibleWrites_.getCompleteNode(e);
                if (null != a) return a;
                var h = this.visibleWrites_.childCompoundWrite(e);
                if (h.isEmpty()) return n;
                if (null != n || h.hasCompleteWrite(U.Empty)) {
                  var u = n || Mt.EMPTY_NODE;
                  return h.apply(u);
                }
                return null;
              }),
              (t.prototype.calcCompleteEventChildren = function (t, e) {
                var n = Mt.EMPTY_NODE,
                  r = this.visibleWrites_.getCompleteNode(t);
                if (r)
                  return (
                    r.isLeafNode() ||
                      r.forEachChild(St, function (t, e) {
                        n = n.updateImmediateChild(t, e);
                      }),
                    n
                  );
                if (e) {
                  var i = this.visibleWrites_.childCompoundWrite(t);
                  return (
                    e.forEachChild(St, function (t, e) {
                      var r = i.childCompoundWrite(new U(t)).apply(e);
                      n = n.updateImmediateChild(t, r);
                    }),
                    i.getCompleteChildren().forEach(function (t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                    n
                  );
                }
                return (
                  this.visibleWrites_
                    .childCompoundWrite(t)
                    .getCompleteChildren()
                    .forEach(function (t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                  n
                );
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function (t, e, n, r) {
                a.assert(n || r, 'Either existingEventSnap or existingServerSnap must exist');
                var i = t.child(e);
                if (this.visibleWrites_.hasCompleteWrite(i)) return null;
                var o = this.visibleWrites_.childCompoundWrite(i);
                return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e));
              }),
              (t.prototype.calcCompleteChild = function (t, e, n) {
                var r = t.child(e),
                  i = this.visibleWrites_.getCompleteNode(r);
                return null != i
                  ? i
                  : n.isCompleteForChild(e)
                  ? this.visibleWrites_
                      .childCompoundWrite(r)
                      .apply(n.getNode().getImmediateChild(e))
                  : null;
              }),
              (t.prototype.shadowingWrite = function (t) {
                return this.visibleWrites_.getCompleteNode(t);
              }),
              (t.prototype.calcIndexedSlice = function (t, e, n, r, i, o) {
                var s,
                  a = this.visibleWrites_.childCompoundWrite(t),
                  h = a.getCompleteNode(U.Empty);
                if (null != h) s = h;
                else {
                  if (null == e) return [];
                  s = a.apply(e);
                }
                if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode()) return [];
                for (
                  var u = [],
                    l = o.getCompare(),
                    c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o),
                    p = c.getNext();
                  p && u.length < r;

                )
                  0 !== l(p, n) && u.push(p), (p = c.getNext());
                return u;
              }),
              (t.prototype.recordContainsPath_ = function (t, e) {
                if (t.snap) return t.path.contains(e);
                for (var n in t.children)
                  if (t.children.hasOwnProperty(n) && t.path.child(n).contains(e)) return !0;
                return !1;
              }),
              (t.prototype.resetTree_ = function () {
                (this.visibleWrites_ = t.layerTree_(this.allWrites_, t.DefaultFilter_, U.Empty)),
                  this.allWrites_.length > 0
                    ? (this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId)
                    : (this.lastWriteId_ = -1);
              }),
              (t.DefaultFilter_ = function (t) {
                return t.visible;
              }),
              (t.layerTree_ = function (t, e, n) {
                for (var r = me.Empty, i = 0; i < t.length; ++i) {
                  var o = t[i];
                  if (e(o)) {
                    var s = o.path,
                      h = void 0;
                    if (o.snap)
                      n.contains(s)
                        ? ((h = U.relativePath(n, s)), (r = r.addWrite(h, o.snap)))
                        : s.contains(n) &&
                          ((h = U.relativePath(s, n)),
                          (r = r.addWrite(U.Empty, o.snap.getChild(h))));
                    else {
                      if (!o.children)
                        throw a.assertionError('WriteRecord should have .snap or .children');
                      if (n.contains(s))
                        (h = U.relativePath(n, s)), (r = r.addWrites(h, o.children));
                      else if (s.contains(n))
                        if ((h = U.relativePath(s, n)).isEmpty())
                          r = r.addWrites(U.Empty, o.children);
                        else {
                          var u = a.safeGet(o.children, h.getFront());
                          if (u) {
                            var l = u.getChild(h.popFront());
                            r = r.addWrite(U.Empty, l);
                          }
                        }
                    }
                  }
                }
                return r;
              }),
              t
            );
          })(),
          Ee = (function () {
            function t(t, e) {
              (this.treePath_ = t), (this.writeTree_ = e);
            }
            return (
              (t.prototype.calcCompleteEventCache = function (t, e, n) {
                return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n);
              }),
              (t.prototype.calcCompleteEventChildren = function (t) {
                return this.writeTree_.calcCompleteEventChildren(this.treePath_, t);
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function (t, e, n) {
                return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, t, e, n);
              }),
              (t.prototype.shadowingWrite = function (t) {
                return this.writeTree_.shadowingWrite(this.treePath_.child(t));
              }),
              (t.prototype.calcIndexedSlice = function (t, e, n, r, i) {
                return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i);
              }),
              (t.prototype.calcCompleteChild = function (t, e) {
                return this.writeTree_.calcCompleteChild(this.treePath_, t, e);
              }),
              (t.prototype.child = function (e) {
                return new t(this.treePath_.child(e), this.writeTree_);
              }),
              t
            );
          })(),
          we = (function () {
            function t(t) {
              (this.listenProvider_ = t),
                (this.syncPointTree_ = re.Empty),
                (this.pendingWriteTree_ = new Ce()),
                (this.tagToQueryMap = new Map()),
                (this.queryToTagMap = new Map());
            }
            return (
              (t.prototype.applyUserOverwrite = function (t, e, n, r) {
                return (
                  this.pendingWriteTree_.addOverwrite(t, e, n, r),
                  r ? this.applyOperationToSyncPoints_(new oe(ee.User, t, e)) : []
                );
              }),
              (t.prototype.applyUserMerge = function (t, e, n) {
                this.pendingWriteTree_.addMerge(t, e, n);
                var r = re.fromObject(e);
                return this.applyOperationToSyncPoints_(new se(ee.User, t, r));
              }),
              (t.prototype.ackUserWrite = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.pendingWriteTree_.getWrite(t);
                if (this.pendingWriteTree_.removeWrite(t)) {
                  var r = re.Empty;
                  return (
                    null != n.snap
                      ? (r = r.set(U.Empty, !0))
                      : F(n.children, function (t, e) {
                          r = r.set(new U(t), e);
                        }),
                    this.applyOperationToSyncPoints_(new ne(n.path, r, e))
                  );
                }
                return [];
              }),
              (t.prototype.applyServerOverwrite = function (t, e) {
                return this.applyOperationToSyncPoints_(new oe(ee.Server, t, e));
              }),
              (t.prototype.applyServerMerge = function (t, e) {
                var n = re.fromObject(e);
                return this.applyOperationToSyncPoints_(new se(ee.Server, t, n));
              }),
              (t.prototype.applyListenComplete = function (t) {
                return this.applyOperationToSyncPoints_(new ie(ee.Server, t));
              }),
              (t.prototype.applyTaggedQueryOverwrite = function (e, n, r) {
                var i = this.queryKeyForTag_(r);
                if (null != i) {
                  var o = t.parseQueryKey_(i),
                    s = o.path,
                    a = o.queryId,
                    h = U.relativePath(s, e),
                    u = new oe(ee.forServerTaggedQuery(a), h, n);
                  return this.applyTaggedOperation_(s, u);
                }
                return [];
              }),
              (t.prototype.applyTaggedQueryMerge = function (e, n, r) {
                var i = this.queryKeyForTag_(r);
                if (i) {
                  var o = t.parseQueryKey_(i),
                    s = o.path,
                    a = o.queryId,
                    h = U.relativePath(s, e),
                    u = re.fromObject(n),
                    l = new se(ee.forServerTaggedQuery(a), h, u);
                  return this.applyTaggedOperation_(s, l);
                }
                return [];
              }),
              (t.prototype.applyTaggedListenComplete = function (e, n) {
                var r = this.queryKeyForTag_(n);
                if (r) {
                  var i = t.parseQueryKey_(r),
                    o = i.path,
                    s = i.queryId,
                    a = U.relativePath(o, e),
                    h = new ie(ee.forServerTaggedQuery(s), a);
                  return this.applyTaggedOperation_(o, h);
                }
                return [];
              }),
              (t.prototype.addEventRegistration = function (e, n) {
                var r = e.path,
                  i = null,
                  o = !1;
                this.syncPointTree_.foreachOnPath(r, function (t, e) {
                  var n = U.relativePath(t, r);
                  (i = i || e.getCompleteServerCache(n)), (o = o || e.hasCompleteView());
                });
                var s,
                  h = this.syncPointTree_.get(r);
                (h
                  ? ((o = o || h.hasCompleteView()), (i = i || h.getCompleteServerCache(U.Empty)))
                  : ((h = new ge()), (this.syncPointTree_ = this.syncPointTree_.set(r, h))),
                null != i)
                  ? (s = !0)
                  : ((s = !1),
                    (i = Mt.EMPTY_NODE),
                    this.syncPointTree_.subtree(r).foreachChild(function (t, e) {
                      var n = e.getCompleteServerCache(U.Empty);
                      n && (i = i.updateImmediateChild(t, n));
                    }));
                var u = h.viewExistsForQuery(e);
                if (!u && !e.getQueryParams().loadsAllData()) {
                  var l = t.makeQueryKey_(e);
                  a.assert(!this.queryToTagMap.has(l), 'View does not exist, but we have a tag');
                  var c = t.getNextQueryTag_();
                  this.queryToTagMap.set(l, c), this.tagToQueryMap.set(c, l);
                }
                var p = this.pendingWriteTree_.childWrites(r),
                  d = h.addEventRegistration(e, n, p, i, s);
                if (!u && !o) {
                  var f = h.viewForQuery(e);
                  d = d.concat(this.setupListener_(e, f));
                }
                return d;
              }),
              (t.prototype.removeEventRegistration = function (e, n, r) {
                var i = this,
                  o = e.path,
                  s = this.syncPointTree_.get(o),
                  a = [];
                if (s && ('default' === e.queryIdentifier() || s.viewExistsForQuery(e))) {
                  var h = s.removeEventRegistration(e, n, r);
                  s.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o));
                  var u = h.removed;
                  a = h.events;
                  var l =
                      -1 !==
                      u.findIndex(function (t) {
                        return t.getQueryParams().loadsAllData();
                      }),
                    c = this.syncPointTree_.findOnPath(o, function (t, e) {
                      return e.hasCompleteView();
                    });
                  if (l && !c) {
                    var p = this.syncPointTree_.subtree(o);
                    if (!p.isEmpty())
                      for (
                        var d = this.collectDistinctViewsForSubTree_(p), f = 0;
                        f < d.length;
                        ++f
                      ) {
                        var _ = d[f],
                          y = _.getQuery(),
                          v = this.createListenerForView_(_);
                        this.listenProvider_.startListening(
                          t.queryForListening_(y),
                          this.tagForQuery_(y),
                          v.hashFn,
                          v.onComplete,
                        );
                      }
                  }
                  if (!c && u.length > 0 && !r)
                    if (l) {
                      this.listenProvider_.stopListening(t.queryForListening_(e), null);
                    } else
                      u.forEach(function (e) {
                        var n = i.queryToTagMap.get(t.makeQueryKey_(e));
                        i.listenProvider_.stopListening(t.queryForListening_(e), n);
                      });
                  this.removeTags_(u);
                }
                return a;
              }),
              (t.prototype.calcCompleteEventCache = function (t, e) {
                var n = this.pendingWriteTree_,
                  r = this.syncPointTree_.findOnPath(t, function (e, n) {
                    var r = U.relativePath(e, t),
                      i = n.getCompleteServerCache(r);
                    if (i) return i;
                  });
                return n.calcCompleteEventCache(t, r, e, !0);
              }),
              (t.prototype.collectDistinctViewsForSubTree_ = function (t) {
                return t.fold(function (t, e, n) {
                  if (e && e.hasCompleteView()) return [e.getCompleteView()];
                  var r = [];
                  return (
                    e && (r = e.getQueryViews()),
                    F(n, function (t, e) {
                      r = r.concat(e);
                    }),
                    r
                  );
                });
              }),
              (t.prototype.removeTags_ = function (e) {
                for (var n = 0; n < e.length; ++n) {
                  var r = e[n];
                  if (!r.getQueryParams().loadsAllData()) {
                    var i = t.makeQueryKey_(r),
                      o = this.queryToTagMap.get(i);
                    this.queryToTagMap.delete(i), this.tagToQueryMap.delete(o);
                  }
                }
              }),
              (t.queryForListening_ = function (t) {
                return t.getQueryParams().loadsAllData() && !t.getQueryParams().isDefault()
                  ? t.getRef()
                  : t;
              }),
              (t.prototype.setupListener_ = function (e, n) {
                var r = e.path,
                  i = this.tagForQuery_(e),
                  o = this.createListenerForView_(n),
                  s = this.listenProvider_.startListening(
                    t.queryForListening_(e),
                    i,
                    o.hashFn,
                    o.onComplete,
                  ),
                  h = this.syncPointTree_.subtree(r);
                if (i)
                  a.assert(
                    !h.value.hasCompleteView(),
                    "If we're adding a query, it shouldn't be shadowed",
                  );
                else
                  for (
                    var u = h.fold(function (t, e, n) {
                        if (!t.isEmpty() && e && e.hasCompleteView())
                          return [e.getCompleteView().getQuery()];
                        var r = [];
                        return (
                          e &&
                            (r = r.concat(
                              e.getQueryViews().map(function (t) {
                                return t.getQuery();
                              }),
                            )),
                          F(n, function (t, e) {
                            r = r.concat(e);
                          }),
                          r
                        );
                      }),
                      l = 0;
                    l < u.length;
                    ++l
                  ) {
                    var c = u[l];
                    this.listenProvider_.stopListening(
                      t.queryForListening_(c),
                      this.tagForQuery_(c),
                    );
                  }
                return s;
              }),
              (t.prototype.createListenerForView_ = function (t) {
                var e = this,
                  n = t.getQuery(),
                  r = this.tagForQuery_(n);
                return {
                  hashFn: function () {
                    return (t.getServerCache() || Mt.EMPTY_NODE).hash();
                  },
                  onComplete: function (t) {
                    if ('ok' === t)
                      return r
                        ? e.applyTaggedListenComplete(n.path, r)
                        : e.applyListenComplete(n.path);
                    var i = (function (t, e) {
                      var n = 'Unknown Error';
                      'too_big' === t
                        ? (n =
                            'The data requested exceeds the maximum size that can be accessed with a single request.')
                        : 'permission_denied' === t
                        ? (n = "Client doesn't have permission to access the desired data.")
                        : 'unavailable' === t && (n = 'The service is unavailable');
                      var r = new Error(t + ' at ' + e.path.toString() + ': ' + n);
                      return (r.code = t.toUpperCase()), r;
                    })(t, n);
                    return e.removeEventRegistration(n, null, i);
                  },
                };
              }),
              (t.makeQueryKey_ = function (t) {
                return t.path.toString() + '$' + t.queryIdentifier();
              }),
              (t.parseQueryKey_ = function (t) {
                var e = t.indexOf('$');
                return (
                  a.assert(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
                  { queryId: t.substr(e + 1), path: new U(t.substr(0, e)) }
                );
              }),
              (t.prototype.queryKeyForTag_ = function (t) {
                return this.tagToQueryMap.get(t);
              }),
              (t.prototype.tagForQuery_ = function (e) {
                var n = t.makeQueryKey_(e);
                return this.queryToTagMap.get(n);
              }),
              (t.getNextQueryTag_ = function () {
                return t.nextQueryTag_++;
              }),
              (t.prototype.applyTaggedOperation_ = function (t, e) {
                var n = this.syncPointTree_.get(t);
                a.assert(n, "Missing sync point for query tag that we're tracking");
                var r = this.pendingWriteTree_.childWrites(t);
                return n.applyOperation(e, r, null);
              }),
              (t.prototype.applyOperationToSyncPoints_ = function (t) {
                return this.applyOperationHelper_(
                  t,
                  this.syncPointTree_,
                  null,
                  this.pendingWriteTree_.childWrites(U.Empty),
                );
              }),
              (t.prototype.applyOperationHelper_ = function (t, e, n, r) {
                if (t.path.isEmpty()) return this.applyOperationDescendantsHelper_(t, e, n, r);
                var i = e.get(U.Empty);
                null == n && null != i && (n = i.getCompleteServerCache(U.Empty));
                var o = [],
                  s = t.path.getFront(),
                  a = t.operationForChild(s),
                  h = e.children.get(s);
                if (h && a) {
                  var u = n ? n.getImmediateChild(s) : null,
                    l = r.child(s);
                  o = o.concat(this.applyOperationHelper_(a, h, u, l));
                }
                return i && (o = o.concat(i.applyOperation(t, r, n))), o;
              }),
              (t.prototype.applyOperationDescendantsHelper_ = function (t, e, n, r) {
                var i = this,
                  o = e.get(U.Empty);
                null == n && null != o && (n = o.getCompleteServerCache(U.Empty));
                var s = [];
                return (
                  e.children.inorderTraversal(function (e, o) {
                    var a = n ? n.getImmediateChild(e) : null,
                      h = r.child(e),
                      u = t.operationForChild(e);
                    u && (s = s.concat(i.applyOperationDescendantsHelper_(u, o, a, h)));
                  }),
                  o && (s = s.concat(o.applyOperation(t, r, n))),
                  s
                );
              }),
              (t.nextQueryTag_ = 1),
              t
            );
          })(),
          Te = (function () {
            function t() {
              this.rootNode_ = Mt.EMPTY_NODE;
            }
            return (
              (t.prototype.getNode = function (t) {
                return this.rootNode_.getChild(t);
              }),
              (t.prototype.updateSnapshot = function (t, e) {
                this.rootNode_ = this.rootNode_.updateChild(t, e);
              }),
              t
            );
          })(),
          be = (function () {
            function t(t, e) {
              var n = this;
              (this.app_ = t),
                (this.authProvider_ = e),
                (this.auth_ = null),
                (this.auth_ = e.getImmediate({ optional: !0 })),
                this.auth_ ||
                  e.get().then(function (t) {
                    return (n.auth_ = t);
                  });
            }
            return (
              (t.prototype.getToken = function (t) {
                return this.auth_
                  ? this.auth_.getToken(t).catch(function (t) {
                      return t && 'auth/token-not-initialized' === t.code
                        ? (w('Got auth/token-not-initialized error.  Treating as null token.'),
                          null)
                        : Promise.reject(t);
                    })
                  : Promise.resolve(null);
              }),
              (t.prototype.addTokenChangeListener = function (t) {
                this.auth_
                  ? this.auth_.addAuthTokenListener(t)
                  : (setTimeout(function () {
                      return t(null);
                    }, 0),
                    this.authProvider_.get().then(function (e) {
                      return e.addAuthTokenListener(t);
                    }));
              }),
              (t.prototype.removeTokenChangeListener = function (t) {
                this.authProvider_.get().then(function (e) {
                  return e.removeAuthTokenListener(t);
                });
              }),
              (t.prototype.notifyForInvalidToken = function () {
                var t =
                  'Provided authentication credentials for the app named "' +
                  this.app_.name +
                  '" are invalid. This usually indicates your app was not initialized correctly. ';
                'credential' in this.app_.options
                  ? (t +=
                      'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : 'serviceAccount' in this.app_.options
                  ? (t +=
                      'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : (t +=
                      'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                  I(t);
              }),
              t
            );
          })(),
          Se = (function () {
            function t() {
              this.counters_ = {};
            }
            return (
              (t.prototype.incrementCounter = function (t, e) {
                void 0 === e && (e = 1),
                  a.contains(this.counters_, t) || (this.counters_[t] = 0),
                  (this.counters_[t] += e);
              }),
              (t.prototype.get = function () {
                return a.deepCopy(this.counters_);
              }),
              t
            );
          })(),
          Ie = (function () {
            function t() {}
            return (
              (t.getCollection = function (t) {
                var e = t.toString();
                return (
                  this.collections_[e] || (this.collections_[e] = new Se()), this.collections_[e]
                );
              }),
              (t.getOrCreateReporter = function (t, e) {
                var n = t.toString();
                return this.reporters_[n] || (this.reporters_[n] = e()), this.reporters_[n];
              }),
              (t.collections_ = {}),
              (t.reporters_ = {}),
              t
            );
          })(),
          Pe = (function () {
            function t(t) {
              (this.collection_ = t), (this.last_ = null);
            }
            return (
              (t.prototype.get = function () {
                var t = this.collection_.get(),
                  e = s.__assign({}, t);
                return (
                  this.last_ &&
                    F(this.last_, function (t, n) {
                      e[t] = e[t] - n;
                    }),
                  (this.last_ = t),
                  e
                );
              }),
              t
            );
          })(),
          Ne = (function () {
            function t(t, e) {
              (this.server_ = e), (this.statsToReport_ = {}), (this.statsListener_ = new Pe(t));
              var n = 1e4 + 2e4 * Math.random();
              q(this.reportStats_.bind(this), Math.floor(n));
            }
            return (
              (t.prototype.includeStat = function (t) {
                this.statsToReport_[t] = !0;
              }),
              (t.prototype.reportStats_ = function () {
                var t = this,
                  e = this.statsListener_.get(),
                  n = {},
                  r = !1;
                F(e, function (e, i) {
                  i > 0 && a.contains(t.statsToReport_, e) && ((n[e] = i), (r = !0));
                }),
                  r && this.server_.reportStats(n),
                  q(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5));
              }),
              t
            );
          })(),
          Re = (function () {
            function t() {
              (this.eventLists_ = []), (this.recursionDepth_ = 0);
            }
            return (
              (t.prototype.queueEvents = function (t) {
                for (var e = null, n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.getPath();
                  null === e || i.equals(e.getPath()) || (this.eventLists_.push(e), (e = null)),
                    null === e && (e = new De(i)),
                    e.add(r);
                }
                e && this.eventLists_.push(e);
              }),
              (t.prototype.raiseEventsAtPath = function (t, e) {
                this.queueEvents(e),
                  this.raiseQueuedEventsMatchingPredicate_(function (e) {
                    return e.equals(t);
                  });
              }),
              (t.prototype.raiseEventsForChangedPath = function (t, e) {
                this.queueEvents(e),
                  this.raiseQueuedEventsMatchingPredicate_(function (e) {
                    return e.contains(t) || t.contains(e);
                  });
              }),
              (t.prototype.raiseQueuedEventsMatchingPredicate_ = function (t) {
                this.recursionDepth_++;
                for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                  var r = this.eventLists_[n];
                  if (r)
                    t(r.getPath())
                      ? (this.eventLists_[n].raise(), (this.eventLists_[n] = null))
                      : (e = !1);
                }
                e && (this.eventLists_ = []), this.recursionDepth_--;
              }),
              t
            );
          })(),
          De = (function () {
            function t(t) {
              (this.path_ = t), (this.events_ = []);
            }
            return (
              (t.prototype.add = function (t) {
                this.events_.push(t);
              }),
              (t.prototype.raise = function () {
                for (var t = 0; t < this.events_.length; t++) {
                  var e = this.events_[t];
                  if (null !== e) {
                    this.events_[t] = null;
                    var n = e.getEventRunner();
                    m && w('event: ' + e.toString()), Q(n);
                  }
                }
              }),
              (t.prototype.getPath = function () {
                return this.path_;
              }),
              t
            );
          })(),
          xe = (function () {
            function t(t) {
              (this.allowedEvents_ = t),
                (this.listeners_ = {}),
                a.assert(Array.isArray(t) && t.length > 0, 'Requires a non-empty array');
            }
            return (
              (t.prototype.trigger = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[t]))
                  for (var r = s.__spread(this.listeners_[t]), i = 0; i < r.length; i++)
                    r[i].callback.apply(r[i].context, e);
              }),
              (t.prototype.on = function (t, e, n) {
                this.validateEventType_(t),
                  (this.listeners_[t] = this.listeners_[t] || []),
                  this.listeners_[t].push({ callback: e, context: n });
                var r = this.getInitialEvent(t);
                r && e.apply(n, r);
              }),
              (t.prototype.off = function (t, e, n) {
                this.validateEventType_(t);
                for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                  if (r[i].callback === e && (!n || n === r[i].context)) return void r.splice(i, 1);
              }),
              (t.prototype.validateEventType_ = function (t) {
                a.assert(
                  this.allowedEvents_.find(function (e) {
                    return e === t;
                  }),
                  'Unknown event: ' + t,
                );
              }),
              t
            );
          })(),
          Ae = (function (t) {
            function e() {
              var e,
                n,
                r = t.call(this, ['visible']) || this;
              return (
                'undefined' !== typeof document &&
                  'undefined' !== typeof document.addEventListener &&
                  ('undefined' !== typeof document.hidden
                    ? ((n = 'visibilitychange'), (e = 'hidden'))
                    : 'undefined' !== typeof document.mozHidden
                    ? ((n = 'mozvisibilitychange'), (e = 'mozHidden'))
                    : 'undefined' !== typeof document.msHidden
                    ? ((n = 'msvisibilitychange'), (e = 'msHidden'))
                    : 'undefined' !== typeof document.webkitHidden &&
                      ((n = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
                (r.visible_ = !0),
                n &&
                  document.addEventListener(
                    n,
                    function () {
                      var t = !document[e];
                      t !== r.visible_ && ((r.visible_ = t), r.trigger('visible', t));
                    },
                    !1,
                  ),
                r
              );
            }
            return (
              s.__extends(e, t),
              (e.getInstance = function () {
                return new e();
              }),
              (e.prototype.getInitialEvent = function (t) {
                return a.assert('visible' === t, 'Unknown event type: ' + t), [this.visible_];
              }),
              e
            );
          })(xe),
          Oe = (function (t) {
            function e() {
              var e = t.call(this, ['online']) || this;
              return (
                (e.online_ = !0),
                'undefined' === typeof window ||
                  'undefined' === typeof window.addEventListener ||
                  a.isMobileCordova() ||
                  (window.addEventListener(
                    'online',
                    function () {
                      e.online_ || ((e.online_ = !0), e.trigger('online', !0));
                    },
                    !1,
                  ),
                  window.addEventListener(
                    'offline',
                    function () {
                      e.online_ && ((e.online_ = !1), e.trigger('online', !1));
                    },
                    !1,
                  )),
                e
              );
            }
            return (
              s.__extends(e, t),
              (e.getInstance = function () {
                return new e();
              }),
              (e.prototype.getInitialEvent = function (t) {
                return a.assert('online' === t, 'Unknown event type: ' + t), [this.online_];
              }),
              (e.prototype.currentlyOnline = function () {
                return this.online_;
              }),
              e
            );
          })(xe),
          ke = (function () {
            function t(t) {
              (this.onMessage_ = t),
                (this.pendingResponses = []),
                (this.currentResponseNum = 0),
                (this.closeAfterResponse = -1),
                (this.onClose = null);
            }
            return (
              (t.prototype.closeAfter = function (t, e) {
                (this.closeAfterResponse = t),
                  (this.onClose = e),
                  this.closeAfterResponse < this.currentResponseNum &&
                    (this.onClose(), (this.onClose = null));
              }),
              (t.prototype.handleResponse = function (t, e) {
                var n = this;
                this.pendingResponses[t] = e;
                for (
                  var r = function () {
                      var t = i.pendingResponses[i.currentResponseNum];
                      delete i.pendingResponses[i.currentResponseNum];
                      for (
                        var e = function (e) {
                            t[e] &&
                              Q(function () {
                                n.onMessage_(t[e]);
                              });
                          },
                          r = 0;
                        r < t.length;
                        ++r
                      )
                        e(r);
                      if (i.currentResponseNum === i.closeAfterResponse)
                        return i.onClose && (i.onClose(), (i.onClose = null)), 'break';
                      i.currentResponseNum++;
                    },
                    i = this;
                  this.pendingResponses[this.currentResponseNum];

                ) {
                  if ('break' === r()) break;
                }
              }),
              t
            );
          })(),
          Fe = (function () {
            function t(t, e, n, r) {
              (this.connId = t),
                (this.repoInfo = e),
                (this.transportSessionId = n),
                (this.lastSessionId = r),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.everConnected_ = !1),
                (this.log_ = T(t)),
                (this.stats_ = Ie.getCollection(e)),
                (this.urlFn = function (t) {
                  return e.connectionURL('long_polling', t);
                });
            }
            return (
              (t.prototype.open = function (t, e) {
                var n = this;
                (this.curSegmentNum = 0),
                  (this.onDisconnect_ = e),
                  (this.myPacketOrderer = new ke(t)),
                  (this.isClosed_ = !1),
                  (this.connectTimeoutTimer_ = setTimeout(function () {
                    n.log_('Timed out trying to connect.'),
                      n.onClosed_(),
                      (n.connectTimeoutTimer_ = null);
                  }, Math.floor(3e4))),
                  (function (t) {
                    if (a.isNodeSdk() || 'complete' === document.readyState) t();
                    else {
                      var e = !1,
                        n = function n() {
                          document.body ? e || ((e = !0), t()) : setTimeout(n, Math.floor(10));
                        };
                      document.addEventListener
                        ? (document.addEventListener('DOMContentLoaded', n, !1),
                          window.addEventListener('load', n, !1))
                        : document.attachEvent &&
                          (document.attachEvent('onreadystatechange', function () {
                            'complete' === document.readyState && n();
                          }),
                          window.attachEvent('onload', n));
                    }
                  })(function () {
                    if (!n.isClosed_) {
                      n.scriptTagHolder = new Le(
                        function () {
                          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                          var r = s.__read(t, 5),
                            i = r[0],
                            o = r[1],
                            a = r[2];
                          r[3], r[4];
                          if ((n.incrementIncomingBytes_(t), n.scriptTagHolder))
                            if (
                              (n.connectTimeoutTimer_ &&
                                (clearTimeout(n.connectTimeoutTimer_),
                                (n.connectTimeoutTimer_ = null)),
                              (n.everConnected_ = !0),
                              'start' === i)
                            )
                              (n.id = o), (n.password = a);
                            else {
                              if ('close' !== i)
                                throw new Error('Unrecognized command received: ' + i);
                              o
                                ? ((n.scriptTagHolder.sendNewPolls = !1),
                                  n.myPacketOrderer.closeAfter(o, function () {
                                    n.onClosed_();
                                  }))
                                : n.onClosed_();
                            }
                        },
                        function () {
                          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                          var r = s.__read(t, 2),
                            i = r[0],
                            o = r[1];
                          n.incrementIncomingBytes_(t), n.myPacketOrderer.handleResponse(i, o);
                        },
                        function () {
                          n.onClosed_();
                        },
                        n.urlFn,
                      );
                      var t = { start: 't' };
                      (t.ser = Math.floor(1e8 * Math.random())),
                        n.scriptTagHolder.uniqueCallbackIdentifier &&
                          (t.cb = n.scriptTagHolder.uniqueCallbackIdentifier),
                        (t.v = '5'),
                        n.transportSessionId && (t.s = n.transportSessionId),
                        n.lastSessionId && (t.ls = n.lastSessionId),
                        'undefined' !== typeof location &&
                          location.href &&
                          -1 !== location.href.indexOf('firebaseio.com') &&
                          (t.r = 'f');
                      var e = n.urlFn(t);
                      n.log_('Connecting via long-poll to ' + e),
                        n.scriptTagHolder.addTag(e, function () {});
                    }
                  });
              }),
              (t.prototype.start = function () {
                this.scriptTagHolder.startLongPoll(this.id, this.password),
                  this.addDisconnectPingFrame(this.id, this.password);
              }),
              (t.forceAllow = function () {
                t.forceAllow_ = !0;
              }),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0;
              }),
              (t.isAvailable = function () {
                return (
                  !a.isNodeSdk() &&
                  (!!t.forceAllow_ ||
                    (!t.forceDisallow_ &&
                      'undefined' !== typeof document &&
                      null != document.createElement &&
                      !(
                        'object' === typeof window &&
                        window.chrome &&
                        window.chrome.extension &&
                        !/^chrome/.test(window.location.href)
                      ) &&
                      !('object' === typeof Windows && 'object' === typeof Windows.UI)))
                );
              }),
              (t.prototype.markConnectionHealthy = function () {}),
              (t.prototype.shutdown_ = function () {
                (this.isClosed_ = !0),
                  this.scriptTagHolder &&
                    (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
                  this.myDisconnFrame &&
                    (document.body.removeChild(this.myDisconnFrame), (this.myDisconnFrame = null)),
                  this.connectTimeoutTimer_ &&
                    (clearTimeout(this.connectTimeoutTimer_), (this.connectTimeoutTimer_ = null));
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_('Longpoll is closing itself'),
                  this.shutdown_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(this.everConnected_), (this.onDisconnect_ = null)));
              }),
              (t.prototype.close = function () {
                this.isClosed_ || (this.log_('Longpoll is being closed.'), this.shutdown_());
              }),
              (t.prototype.send = function (t) {
                var e = a.stringify(t);
                (this.bytesSent += e.length), this.stats_.incrementCounter('bytes_sent', e.length);
                for (var n = a.base64Encode(e), r = k(n, 1840), i = 0; i < r.length; i++)
                  this.scriptTagHolder.enqueueSegment(this.curSegmentNum, r.length, r[i]),
                    this.curSegmentNum++;
              }),
              (t.prototype.addDisconnectPingFrame = function (t, e) {
                if (!a.isNodeSdk()) {
                  this.myDisconnFrame = document.createElement('iframe');
                  var n = { dframe: 't' };
                  (n.id = t),
                    (n.pw = e),
                    (this.myDisconnFrame.src = this.urlFn(n)),
                    (this.myDisconnFrame.style.display = 'none'),
                    document.body.appendChild(this.myDisconnFrame);
                }
              }),
              (t.prototype.incrementIncomingBytes_ = function (t) {
                var e = a.stringify(t).length;
                (this.bytesReceived += e), this.stats_.incrementCounter('bytes_received', e);
              }),
              t
            );
          })(),
          Le = (function () {
            function t(e, n, r, i) {
              if (
                ((this.onDisconnect = r),
                (this.urlFn = i),
                (this.outstandingRequests = new Set()),
                (this.pendingSegs = []),
                (this.currentSerial = Math.floor(1e8 * Math.random())),
                (this.sendNewPolls = !0),
                a.isNodeSdk())
              )
                (this.commandCB = e), (this.onMessageCB = n);
              else {
                (this.uniqueCallbackIdentifier = y()),
                  (window['pLPCommand' + this.uniqueCallbackIdentifier] = e),
                  (window['pRTLPCB' + this.uniqueCallbackIdentifier] = n),
                  (this.myIFrame = t.createIFrame_());
                var o = '';
                if (
                  this.myIFrame.src &&
                  'javascript:' === this.myIFrame.src.substr(0, 'javascript:'.length)
                )
                  o = '<script>document.domain="' + document.domain + '";</script>';
                var s = '<html><body>' + o + '</body></html>';
                try {
                  this.myIFrame.doc.open(), this.myIFrame.doc.write(s), this.myIFrame.doc.close();
                } catch (h) {
                  w('frame writing exception'), h.stack && w(h.stack), w(h);
                }
              }
            }
            return (
              (t.createIFrame_ = function () {
                var t = document.createElement('iframe');
                if (((t.style.display = 'none'), !document.body))
                  throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
                document.body.appendChild(t);
                try {
                  t.contentWindow.document || w('No IE domain setting required');
                } catch (n) {
                  var e = document.domain;
                  t.src =
                    "javascript:void((function(){document.open();document.domain='" +
                    e +
                    "';document.close();})())";
                }
                return (
                  t.contentDocument
                    ? (t.doc = t.contentDocument)
                    : t.contentWindow
                    ? (t.doc = t.contentWindow.document)
                    : t.document && (t.doc = t.document),
                  t
                );
              }),
              (t.prototype.close = function () {
                var t = this;
                (this.alive = !1),
                  this.myIFrame &&
                    ((this.myIFrame.doc.body.innerHTML = ''),
                    setTimeout(function () {
                      null !== t.myIFrame &&
                        (document.body.removeChild(t.myIFrame), (t.myIFrame = null));
                    }, Math.floor(0)));
                var e = this.onDisconnect;
                e && ((this.onDisconnect = null), e());
              }),
              (t.prototype.startLongPoll = function (t, e) {
                for (this.myID = t, this.myPW = e, this.alive = !0; this.newRequest_(); );
              }),
              (t.prototype.newRequest_ = function () {
                if (
                  this.alive &&
                  this.sendNewPolls &&
                  this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)
                ) {
                  this.currentSerial++;
                  var t = {};
                  (t.id = this.myID), (t.pw = this.myPW), (t.ser = this.currentSerial);
                  for (var e = this.urlFn(t), n = '', r = 0; this.pendingSegs.length > 0; ) {
                    if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
                    var i = this.pendingSegs.shift();
                    (n =
                      n + '&seg' + r + '=' + i.seg + '&ts' + r + '=' + i.ts + '&d' + r + '=' + i.d),
                      r++;
                  }
                  return (e += n), this.addLongPollTag_(e, this.currentSerial), !0;
                }
                return !1;
              }),
              (t.prototype.enqueueSegment = function (t, e, n) {
                this.pendingSegs.push({ seg: t, ts: e, d: n }), this.alive && this.newRequest_();
              }),
              (t.prototype.addLongPollTag_ = function (t, e) {
                var n = this;
                this.outstandingRequests.add(e);
                var r = function () {
                    n.outstandingRequests.delete(e), n.newRequest_();
                  },
                  i = setTimeout(r, Math.floor(25e3));
                this.addTag(t, function () {
                  clearTimeout(i), r();
                });
              }),
              (t.prototype.addTag = function (t, e) {
                var n = this;
                a.isNodeSdk()
                  ? this.doNodeLongPoll(t, e)
                  : setTimeout(function () {
                      try {
                        if (!n.sendNewPolls) return;
                        var r = n.myIFrame.doc.createElement('script');
                        (r.type = 'text/javascript'),
                          (r.async = !0),
                          (r.src = t),
                          (r.onload = r.onreadystatechange = function () {
                            var t = r.readyState;
                            (t && 'loaded' !== t && 'complete' !== t) ||
                              ((r.onload = r.onreadystatechange = null),
                              r.parentNode && r.parentNode.removeChild(r),
                              e());
                          }),
                          (r.onerror = function () {
                            w('Long-poll script failed to load: ' + t),
                              (n.sendNewPolls = !1),
                              n.close();
                          }),
                          n.myIFrame.doc.body.appendChild(r);
                      } catch (i) {}
                    }, Math.floor(1));
              }),
              t
            );
          })(),
          Me = '';
        var We = null;
        'undefined' !== typeof MozWebSocket
          ? (We = MozWebSocket)
          : 'undefined' !== typeof WebSocket && (We = WebSocket);
        var Qe = (function () {
            function t(e, n, r, i) {
              (this.connId = e),
                (this.keepaliveTimer = null),
                (this.frames = null),
                (this.totalFrames = 0),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.log_ = T(this.connId)),
                (this.stats_ = Ie.getCollection(n)),
                (this.connURL = t.connectionURL_(n, r, i));
            }
            return (
              (t.connectionURL_ = function (t, e, n) {
                var r = { v: '5' };
                return (
                  !a.isNodeSdk() &&
                    'undefined' !== typeof location &&
                    location.href &&
                    -1 !== location.href.indexOf('firebaseio.com') &&
                    (r.r = 'f'),
                  e && (r.s = e),
                  n && (r.ls = n),
                  t.connectionURL('websocket', r)
                );
              }),
              (t.prototype.open = function (t, e) {
                var n = this;
                (this.onDisconnect = e),
                  (this.onMessage = t),
                  this.log_('Websocket connecting to ' + this.connURL),
                  (this.everConnected_ = !1),
                  d.set('previous_websocket_failure', !0);
                try {
                  if (a.isNodeSdk()) {
                    var i = a.CONSTANTS.NODE_ADMIN ? 'AdminNode' : 'Node',
                      o = {
                        headers: { 'User-Agent': 'Firebase/5/' + Me + '/' + r.platform + '/' + i },
                      },
                      s = Object({
                        NODE_ENV: 'production',
                        PUBLIC_URL: '/baugit',
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        REACT_APP_STORAGE_BUCKET: 'baudit-dev.appspot.com',
                        REACT_APP_PROJECT_ID: 'baudit-dev',
                        REACT_APP_AUTH_DOMAIN: 'baudit-dev.firebaseapp.com',
                        REACT_APP_API_KEY: 'AIzaSyDssZ7gs5HKvpAuoRbO_l2KotUMCeI9Sbo',
                        REACT_APP_MESSAGING_SENDER_ID: '588249539701',
                        REACT_APP_DATABASE_URL: 'https://baudit-dev.firebaseio.com',
                        REACT_APP_APPID: '1:588249539701:web:aaf4fb4d2f397fb0e6043c',
                      }),
                      h =
                        0 === this.connURL.indexOf('wss://')
                          ? s.HTTPS_PROXY || s.https_proxy
                          : s.HTTP_PROXY || s.http_proxy;
                    h && (o.proxy = { origin: h }), (this.mySock = new We(this.connURL, [], o));
                  } else this.mySock = new We(this.connURL);
                } catch (l) {
                  this.log_('Error instantiating WebSocket.');
                  var u = l.message || l.data;
                  return u && this.log_(u), void this.onClosed_();
                }
                (this.mySock.onopen = function () {
                  n.log_('Websocket connected.'), (n.everConnected_ = !0);
                }),
                  (this.mySock.onclose = function () {
                    n.log_('Websocket connection was disconnected.'),
                      (n.mySock = null),
                      n.onClosed_();
                  }),
                  (this.mySock.onmessage = function (t) {
                    n.handleIncomingFrame(t);
                  }),
                  (this.mySock.onerror = function (t) {
                    n.log_('WebSocket error.  Closing connection.');
                    var e = t.message || t.data;
                    e && n.log_(e), n.onClosed_();
                  });
              }),
              (t.prototype.start = function () {}),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0;
              }),
              (t.isAvailable = function () {
                var e = !1;
                if ('undefined' !== typeof navigator && navigator.userAgent) {
                  var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                  n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0);
                }
                return !e && null !== We && !t.forceDisallow_;
              }),
              (t.previouslyFailed = function () {
                return d.isInMemoryStorage || !0 === d.get('previous_websocket_failure');
              }),
              (t.prototype.markConnectionHealthy = function () {
                d.remove('previous_websocket_failure');
              }),
              (t.prototype.appendFrame_ = function (t) {
                if ((this.frames.push(t), this.frames.length === this.totalFrames)) {
                  var e = this.frames.join('');
                  this.frames = null;
                  var n = a.jsonEval(e);
                  this.onMessage(n);
                }
              }),
              (t.prototype.handleNewFrameCount_ = function (t) {
                (this.totalFrames = t), (this.frames = []);
              }),
              (t.prototype.extractFrameCount_ = function (t) {
                if (
                  (a.assert(null === this.frames, 'We already have a frame buffer'), t.length <= 6)
                ) {
                  var e = Number(t);
                  if (!isNaN(e)) return this.handleNewFrameCount_(e), null;
                }
                return this.handleNewFrameCount_(1), t;
              }),
              (t.prototype.handleIncomingFrame = function (t) {
                if (null !== this.mySock) {
                  var e = t.data;
                  if (
                    ((this.bytesReceived += e.length),
                    this.stats_.incrementCounter('bytes_received', e.length),
                    this.resetKeepAlive(),
                    null !== this.frames)
                  )
                    this.appendFrame_(e);
                  else {
                    var n = this.extractFrameCount_(e);
                    null !== n && this.appendFrame_(n);
                  }
                }
              }),
              (t.prototype.send = function (t) {
                this.resetKeepAlive();
                var e = a.stringify(t);
                (this.bytesSent += e.length), this.stats_.incrementCounter('bytes_sent', e.length);
                var n = k(e, 16384);
                n.length > 1 && this.sendString_(String(n.length));
                for (var r = 0; r < n.length; r++) this.sendString_(n[r]);
              }),
              (t.prototype.shutdown_ = function () {
                (this.isClosed_ = !0),
                  this.keepaliveTimer &&
                    (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = null)),
                  this.mySock && (this.mySock.close(), (this.mySock = null));
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_('WebSocket is closing itself'),
                  this.shutdown_(),
                  this.onDisconnect &&
                    (this.onDisconnect(this.everConnected_), (this.onDisconnect = null)));
              }),
              (t.prototype.close = function () {
                this.isClosed_ || (this.log_('WebSocket is being closed'), this.shutdown_());
              }),
              (t.prototype.resetKeepAlive = function () {
                var t = this;
                clearInterval(this.keepaliveTimer),
                  (this.keepaliveTimer = setInterval(function () {
                    t.mySock && t.sendString_('0'), t.resetKeepAlive();
                  }, Math.floor(45e3)));
              }),
              (t.prototype.sendString_ = function (t) {
                try {
                  this.mySock.send(t);
                } catch (e) {
                  this.log_(
                    'Exception thrown from WebSocket.send():',
                    e.message || e.data,
                    'Closing connection.',
                  ),
                    setTimeout(this.onClosed_.bind(this), 0);
                }
              }),
              (t.responsesRequiredToBeHealthy = 2),
              (t.healthyTimeout = 3e4),
              t
            );
          })(),
          qe = (function () {
            function t(t) {
              this.initTransports_(t);
            }
            return (
              Object.defineProperty(t, 'ALL_TRANSPORTS', {
                get: function () {
                  return [Fe, Qe];
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.initTransports_ = function (e) {
                var n,
                  r,
                  i = Qe && Qe.isAvailable(),
                  o = i && !Qe.previouslyFailed();
                if (
                  (e.webSocketOnly &&
                    (i ||
                      I(
                        "wss:// URL used, but browser isn't known to support websockets.  Trying anyway.",
                      ),
                    (o = !0)),
                  o)
                )
                  this.transports_ = [Qe];
                else {
                  var a = (this.transports_ = []);
                  try {
                    for (
                      var h = s.__values(t.ALL_TRANSPORTS), u = h.next();
                      !u.done;
                      u = h.next()
                    ) {
                      var l = u.value;
                      l && l.isAvailable() && a.push(l);
                    }
                  } catch (c) {
                    n = { error: c };
                  } finally {
                    try {
                      u && !u.done && (r = h.return) && r.call(h);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
              }),
              (t.prototype.initialTransport = function () {
                if (this.transports_.length > 0) return this.transports_[0];
                throw new Error('No transports available');
              }),
              (t.prototype.upgradeTransport = function () {
                return this.transports_.length > 1 ? this.transports_[1] : null;
              }),
              t
            );
          })(),
          Ue = (function () {
            function t(t, e, n, r, i, o, s) {
              (this.id = t),
                (this.repoInfo_ = e),
                (this.onMessage_ = n),
                (this.onReady_ = r),
                (this.onDisconnect_ = i),
                (this.onKill_ = o),
                (this.lastSessionId = s),
                (this.connectionCount = 0),
                (this.pendingDataMessages = []),
                (this.state_ = 0),
                (this.log_ = T('c:' + this.id + ':')),
                (this.transportManager_ = new qe(e)),
                this.log_('Connection created'),
                this.start_();
            }
            return (
              (t.prototype.start_ = function () {
                var t = this,
                  e = this.transportManager_.initialTransport();
                (this.conn_ = new e(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  void 0,
                  this.lastSessionId,
                )),
                  (this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0);
                var n = this.connReceiver_(this.conn_),
                  r = this.disconnReceiver_(this.conn_);
                (this.tx_ = this.conn_),
                  (this.rx_ = this.conn_),
                  (this.secondaryConn_ = null),
                  (this.isHealthy_ = !1),
                  setTimeout(function () {
                    t.conn_ && t.conn_.open(n, r);
                  }, Math.floor(0));
                var i = e.healthyTimeout || 0;
                i > 0 &&
                  (this.healthyTimeout_ = q(function () {
                    (t.healthyTimeout_ = null),
                      t.isHealthy_ ||
                        (t.conn_ && t.conn_.bytesReceived > 102400
                          ? (t.log_(
                              'Connection exceeded healthy timeout but has received ' +
                                t.conn_.bytesReceived +
                                ' bytes.  Marking connection healthy.',
                            ),
                            (t.isHealthy_ = !0),
                            t.conn_.markConnectionHealthy())
                          : t.conn_ && t.conn_.bytesSent > 10240
                          ? t.log_(
                              'Connection exceeded healthy timeout but has sent ' +
                                t.conn_.bytesSent +
                                ' bytes.  Leaving connection alive.',
                            )
                          : (t.log_('Closing unhealthy connection after timeout.'), t.close()));
                  }, Math.floor(i)));
              }),
              (t.prototype.nextTransportId_ = function () {
                return 'c:' + this.id + ':' + this.connectionCount++;
              }),
              (t.prototype.disconnReceiver_ = function (t) {
                var e = this;
                return function (n) {
                  t === e.conn_
                    ? e.onConnectionLost_(n)
                    : t === e.secondaryConn_
                    ? (e.log_('Secondary connection lost.'), e.onSecondaryConnectionLost_())
                    : e.log_('closing an old connection');
                };
              }),
              (t.prototype.connReceiver_ = function (t) {
                var e = this;
                return function (n) {
                  2 !== e.state_ &&
                    (t === e.rx_
                      ? e.onPrimaryMessageReceived_(n)
                      : t === e.secondaryConn_
                      ? e.onSecondaryMessageReceived_(n)
                      : e.log_('message on old connection'));
                };
              }),
              (t.prototype.sendRequest = function (t) {
                var e = { t: 'd', d: t };
                this.sendData_(e);
              }),
              (t.prototype.tryCleanupConnection = function () {
                this.tx_ === this.secondaryConn_ &&
                  this.rx_ === this.secondaryConn_ &&
                  (this.log_(
                    'cleaning up and promoting a connection: ' + this.secondaryConn_.connId,
                  ),
                  (this.conn_ = this.secondaryConn_),
                  (this.secondaryConn_ = null));
              }),
              (t.prototype.onSecondaryControl_ = function (t) {
                if ('t' in t) {
                  var e = t.t;
                  'a' === e
                    ? this.upgradeIfSecondaryHealthy_()
                    : 'r' === e
                    ? (this.log_('Got a reset on secondary, closing it'),
                      this.secondaryConn_.close(),
                      (this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_) ||
                        this.close())
                    : 'o' === e &&
                      (this.log_('got pong on secondary.'),
                      this.secondaryResponsesRequired_--,
                      this.upgradeIfSecondaryHealthy_());
                }
              }),
              (t.prototype.onSecondaryMessageReceived_ = function (t) {
                var e = A('t', t),
                  n = A('d', t);
                if ('c' === e) this.onSecondaryControl_(n);
                else {
                  if ('d' !== e) throw new Error('Unknown protocol layer: ' + e);
                  this.pendingDataMessages.push(n);
                }
              }),
              (t.prototype.upgradeIfSecondaryHealthy_ = function () {
                this.secondaryResponsesRequired_ <= 0
                  ? (this.log_('Secondary connection is healthy.'),
                    (this.isHealthy_ = !0),
                    this.secondaryConn_.markConnectionHealthy(),
                    this.proceedWithUpgrade_())
                  : (this.log_('sending ping on secondary.'),
                    this.secondaryConn_.send({ t: 'c', d: { t: 'p', d: {} } }));
              }),
              (t.prototype.proceedWithUpgrade_ = function () {
                this.secondaryConn_.start(),
                  this.log_('sending client ack on secondary'),
                  this.secondaryConn_.send({ t: 'c', d: { t: 'a', d: {} } }),
                  this.log_('Ending transmission on primary'),
                  this.conn_.send({ t: 'c', d: { t: 'n', d: {} } }),
                  (this.tx_ = this.secondaryConn_),
                  this.tryCleanupConnection();
              }),
              (t.prototype.onPrimaryMessageReceived_ = function (t) {
                var e = A('t', t),
                  n = A('d', t);
                'c' === e ? this.onControl_(n) : 'd' === e && this.onDataMessage_(n);
              }),
              (t.prototype.onDataMessage_ = function (t) {
                this.onPrimaryResponse_(), this.onMessage_(t);
              }),
              (t.prototype.onPrimaryResponse_ = function () {
                this.isHealthy_ ||
                  (this.primaryResponsesRequired_--,
                  this.primaryResponsesRequired_ <= 0 &&
                    (this.log_('Primary connection is healthy.'),
                    (this.isHealthy_ = !0),
                    this.conn_.markConnectionHealthy()));
              }),
              (t.prototype.onControl_ = function (t) {
                var e = A('t', t);
                if ('d' in t) {
                  var n = t.d;
                  if ('h' === e) this.onHandshake_(n);
                  else if ('n' === e) {
                    this.log_('recvd end transmission on primary'),
                      (this.rx_ = this.secondaryConn_);
                    for (var r = 0; r < this.pendingDataMessages.length; ++r)
                      this.onDataMessage_(this.pendingDataMessages[r]);
                    (this.pendingDataMessages = []), this.tryCleanupConnection();
                  } else
                    's' === e
                      ? this.onConnectionShutdown_(n)
                      : 'r' === e
                      ? this.onReset_(n)
                      : 'e' === e
                      ? b('Server Error: ' + n)
                      : 'o' === e
                      ? (this.log_('got pong on primary.'),
                        this.onPrimaryResponse_(),
                        this.sendPingOnPrimaryIfNecessary_())
                      : b('Unknown control packet command: ' + e);
                }
              }),
              (t.prototype.onHandshake_ = function (t) {
                var e = t.ts,
                  n = t.v,
                  r = t.h;
                (this.sessionId = t.s),
                  this.repoInfo_.updateHost(r),
                  0 === this.state_ &&
                    (this.conn_.start(),
                    this.onConnectionEstablished_(this.conn_, e),
                    '5' !== n && I('Protocol version mismatch detected'),
                    this.tryStartUpgrade_());
              }),
              (t.prototype.tryStartUpgrade_ = function () {
                var t = this.transportManager_.upgradeTransport();
                t && this.startUpgrade_(t);
              }),
              (t.prototype.startUpgrade_ = function (t) {
                var e = this;
                (this.secondaryConn_ = new t(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  this.sessionId,
                )),
                  (this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0);
                var n = this.connReceiver_(this.secondaryConn_),
                  r = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, r),
                  q(function () {
                    e.secondaryConn_ &&
                      (e.log_('Timed out trying to upgrade.'), e.secondaryConn_.close());
                  }, Math.floor(6e4));
              }),
              (t.prototype.onReset_ = function (t) {
                this.log_('Reset packet received.  New host: ' + t),
                  this.repoInfo_.updateHost(t),
                  1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_());
              }),
              (t.prototype.onConnectionEstablished_ = function (t, e) {
                var n = this;
                this.log_('Realtime connection established.'),
                  (this.conn_ = t),
                  (this.state_ = 1),
                  this.onReady_ && (this.onReady_(e, this.sessionId), (this.onReady_ = null)),
                  0 === this.primaryResponsesRequired_
                    ? (this.log_('Primary connection is healthy.'), (this.isHealthy_ = !0))
                    : q(function () {
                        n.sendPingOnPrimaryIfNecessary_();
                      }, Math.floor(5e3));
              }),
              (t.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                this.isHealthy_ ||
                  1 !== this.state_ ||
                  (this.log_('sending ping on primary.'),
                  this.sendData_({ t: 'c', d: { t: 'p', d: {} } }));
              }),
              (t.prototype.onSecondaryConnectionLost_ = function () {
                var t = this.secondaryConn_;
                (this.secondaryConn_ = null), (this.tx_ !== t && this.rx_ !== t) || this.close();
              }),
              (t.prototype.onConnectionLost_ = function (t) {
                (this.conn_ = null),
                  t || 0 !== this.state_
                    ? 1 === this.state_ && this.log_('Realtime connection lost.')
                    : (this.log_('Realtime connection failed.'),
                      this.repoInfo_.isCacheableHost() &&
                        (d.remove('host:' + this.repoInfo_.host),
                        (this.repoInfo_.internalHost = this.repoInfo_.host))),
                  this.close();
              }),
              (t.prototype.onConnectionShutdown_ = function (t) {
                this.log_('Connection shutdown command received. Shutting down...'),
                  this.onKill_ && (this.onKill_(t), (this.onKill_ = null)),
                  (this.onDisconnect_ = null),
                  this.close();
              }),
              (t.prototype.sendData_ = function (t) {
                if (1 !== this.state_) throw 'Connection is not connected';
                this.tx_.send(t);
              }),
              (t.prototype.close = function () {
                2 !== this.state_ &&
                  (this.log_('Closing realtime connection.'),
                  (this.state_ = 2),
                  this.closeConnections_(),
                  this.onDisconnect_ && (this.onDisconnect_(), (this.onDisconnect_ = null)));
              }),
              (t.prototype.closeConnections_ = function () {
                this.log_('Shutting down all connections'),
                  this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                  this.secondaryConn_ &&
                    (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
                  this.healthyTimeout_ &&
                    (clearTimeout(this.healthyTimeout_), (this.healthyTimeout_ = null));
              }),
              t
            );
          })(),
          Ve = (function () {
            function t() {}
            return (
              (t.prototype.put = function (t, e, n, r) {}),
              (t.prototype.merge = function (t, e, n, r) {}),
              (t.prototype.refreshAuthToken = function (t) {}),
              (t.prototype.onDisconnectPut = function (t, e, n) {}),
              (t.prototype.onDisconnectMerge = function (t, e, n) {}),
              (t.prototype.onDisconnectCancel = function (t, e) {}),
              (t.prototype.reportStats = function (t) {}),
              t
            );
          })(),
          He = (function (t) {
            function e(n, r, i, o, s, h) {
              var u = t.call(this) || this;
              if (
                ((u.repoInfo_ = n),
                (u.onDataUpdate_ = r),
                (u.onConnectStatus_ = i),
                (u.onServerInfoUpdate_ = o),
                (u.authTokenProvider_ = s),
                (u.authOverride_ = h),
                (u.id = e.nextPersistentConnectionId_++),
                (u.log_ = T('p:' + u.id + ':')),
                (u.interruptReasons_ = {}),
                (u.listens = new Map()),
                (u.outstandingPuts_ = []),
                (u.outstandingPutCount_ = 0),
                (u.onDisconnectRequestQueue_ = []),
                (u.connected_ = !1),
                (u.reconnectDelay_ = 1e3),
                (u.maxReconnectDelay_ = 3e5),
                (u.securityDebugCallback_ = null),
                (u.lastSessionId = null),
                (u.establishConnectionTimer_ = null),
                (u.visible_ = !1),
                (u.requestCBHash_ = {}),
                (u.requestNumber_ = 0),
                (u.realtime_ = null),
                (u.authToken_ = null),
                (u.forceTokenRefresh_ = !1),
                (u.invalidAuthTokenCount_ = 0),
                (u.firstConnection_ = !0),
                (u.lastConnectionAttemptTime_ = null),
                (u.lastConnectionEstablishedTime_ = null),
                h && !a.isNodeSdk())
              )
                throw new Error(
                  'Auth override specified in options, but not supported on non Node.js platforms',
                );
              return (
                u.scheduleConnect_(0),
                Ae.getInstance().on('visible', u.onVisible_, u),
                -1 === n.host.indexOf('fblocal') && Oe.getInstance().on('online', u.onOnline_, u),
                u
              );
            }
            return (
              s.__extends(e, t),
              (e.prototype.sendRequest = function (t, e, n) {
                var r = ++this.requestNumber_,
                  i = { r: r, a: t, b: e };
                this.log_(a.stringify(i)),
                  a.assert(
                    this.connected_,
                    "sendRequest call when we're not connected not allowed.",
                  ),
                  this.realtime_.sendRequest(i),
                  n && (this.requestCBHash_[r] = n);
              }),
              (e.prototype.listen = function (t, e, n, r) {
                var i = t.queryIdentifier(),
                  o = t.path.toString();
                this.log_('Listen called for ' + o + ' ' + i),
                  this.listens.has(o) || this.listens.set(o, new Map()),
                  a.assert(
                    t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(),
                    'listen() called for non-default but complete query',
                  ),
                  a.assert(
                    !this.listens.get(o).has(i),
                    'listen() called twice for same path/queryId.',
                  );
                var s = { onComplete: r, hashFn: e, query: t, tag: n };
                this.listens.get(o).set(i, s), this.connected_ && this.sendListen_(s);
              }),
              (e.prototype.sendListen_ = function (t) {
                var n = this,
                  r = t.query,
                  i = r.path.toString(),
                  o = r.queryIdentifier();
                this.log_('Listen on ' + i + ' for ' + o);
                var s = { p: i };
                t.tag && ((s.q = r.queryObject()), (s.t = t.tag)),
                  (s.h = t.hashFn()),
                  this.sendRequest('q', s, function (s) {
                    var a = s.d,
                      h = s.s;
                    e.warnOnListenWarnings_(a, r),
                      (n.listens.get(i) && n.listens.get(i).get(o)) === t &&
                        (n.log_('listen response', s),
                        'ok' !== h && n.removeListen_(i, o),
                        t.onComplete && t.onComplete(h, a));
                  });
              }),
              (e.warnOnListenWarnings_ = function (t, e) {
                if (t && 'object' === typeof t && a.contains(t, 'w')) {
                  var n = a.safeGet(t, 'w');
                  if (Array.isArray(n) && ~n.indexOf('no_index')) {
                    var r = '".indexOn": "' + e.getQueryParams().getIndex().toString() + '"',
                      i = e.path.toString();
                    I(
                      'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                        r +
                        ' at ' +
                        i +
                        ' to your security rules for better performance.',
                    );
                  }
                }
              }),
              (e.prototype.refreshAuthToken = function (t) {
                (this.authToken_ = t),
                  this.log_('Auth token refreshed'),
                  this.authToken_
                    ? this.tryAuth()
                    : this.connected_ && this.sendRequest('unauth', {}, function () {}),
                  this.reduceReconnectDelayIfAdminCredential_(t);
              }),
              (e.prototype.reduceReconnectDelayIfAdminCredential_ = function (t) {
                ((t && 40 === t.length) || a.isAdmin(t)) &&
                  (this.log_('Admin auth credential detected.  Reducing max reconnect time.'),
                  (this.maxReconnectDelay_ = 3e4));
              }),
              (e.prototype.tryAuth = function () {
                var t = this;
                if (this.connected_ && this.authToken_) {
                  var e = this.authToken_,
                    n = a.isValidFormat(e) ? 'auth' : 'gauth',
                    r = { cred: e };
                  null === this.authOverride_
                    ? (r.noauth = !0)
                    : 'object' === typeof this.authOverride_ && (r.authvar = this.authOverride_),
                    this.sendRequest(n, r, function (n) {
                      var r = n.s,
                        i = n.d || 'error';
                      t.authToken_ === e &&
                        ('ok' === r ? (t.invalidAuthTokenCount_ = 0) : t.onAuthRevoked_(r, i));
                    });
                }
              }),
              (e.prototype.unlisten = function (t, e) {
                var n = t.path.toString(),
                  r = t.queryIdentifier();
                this.log_('Unlisten called for ' + n + ' ' + r),
                  a.assert(
                    t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(),
                    'unlisten() called for non-default but complete query',
                  ),
                  this.removeListen_(n, r) &&
                    this.connected_ &&
                    this.sendUnlisten_(n, r, t.queryObject(), e);
              }),
              (e.prototype.sendUnlisten_ = function (t, e, n, r) {
                this.log_('Unlisten on ' + t + ' for ' + e);
                var i = { p: t };
                r && ((i.q = n), (i.t = r)), this.sendRequest('n', i);
              }),
              (e.prototype.onDisconnectPut = function (t, e, n) {
                this.connected_
                  ? this.sendOnDisconnect_('o', t, e, n)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: 'o',
                      data: e,
                      onComplete: n,
                    });
              }),
              (e.prototype.onDisconnectMerge = function (t, e, n) {
                this.connected_
                  ? this.sendOnDisconnect_('om', t, e, n)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: 'om',
                      data: e,
                      onComplete: n,
                    });
              }),
              (e.prototype.onDisconnectCancel = function (t, e) {
                this.connected_
                  ? this.sendOnDisconnect_('oc', t, null, e)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: 'oc',
                      data: null,
                      onComplete: e,
                    });
              }),
              (e.prototype.sendOnDisconnect_ = function (t, e, n, r) {
                var i = { p: e, d: n };
                this.log_('onDisconnect ' + t, i),
                  this.sendRequest(t, i, function (t) {
                    r &&
                      setTimeout(function () {
                        r(t.s, t.d);
                      }, Math.floor(0));
                  });
              }),
              (e.prototype.put = function (t, e, n, r) {
                this.putInternal('p', t, e, n, r);
              }),
              (e.prototype.merge = function (t, e, n, r) {
                this.putInternal('m', t, e, n, r);
              }),
              (e.prototype.putInternal = function (t, e, n, r, i) {
                var o = { p: e, d: n };
                void 0 !== i && (o.h = i),
                  this.outstandingPuts_.push({ action: t, request: o, onComplete: r }),
                  this.outstandingPutCount_++;
                var s = this.outstandingPuts_.length - 1;
                this.connected_ ? this.sendPut_(s) : this.log_('Buffering put: ' + e);
              }),
              (e.prototype.sendPut_ = function (t) {
                var e = this,
                  n = this.outstandingPuts_[t].action,
                  r = this.outstandingPuts_[t].request,
                  i = this.outstandingPuts_[t].onComplete;
                (this.outstandingPuts_[t].queued = this.connected_),
                  this.sendRequest(n, r, function (r) {
                    e.log_(n + ' response', r),
                      delete e.outstandingPuts_[t],
                      e.outstandingPutCount_--,
                      0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []),
                      i && i(r.s, r.d);
                  });
              }),
              (e.prototype.reportStats = function (t) {
                var e = this;
                if (this.connected_) {
                  var n = { c: t };
                  this.log_('reportStats', n),
                    this.sendRequest('s', n, function (t) {
                      if ('ok' !== t.s) {
                        var n = t.d;
                        e.log_('reportStats', 'Error sending stats: ' + n);
                      }
                    });
                }
              }),
              (e.prototype.onDataMessage_ = function (t) {
                if ('r' in t) {
                  this.log_('from server: ' + a.stringify(t));
                  var e = t.r,
                    n = this.requestCBHash_[e];
                  n && (delete this.requestCBHash_[e], n(t.b));
                } else {
                  if ('error' in t) throw 'A server-side error has occurred: ' + t.error;
                  'a' in t && this.onDataPush_(t.a, t.b);
                }
              }),
              (e.prototype.onDataPush_ = function (t, e) {
                this.log_('handleServerMessage', t, e),
                  'd' === t
                    ? this.onDataUpdate_(e.p, e.d, !1, e.t)
                    : 'm' === t
                    ? this.onDataUpdate_(e.p, e.d, !0, e.t)
                    : 'c' === t
                    ? this.onListenRevoked_(e.p, e.q)
                    : 'ac' === t
                    ? this.onAuthRevoked_(e.s, e.d)
                    : 'sd' === t
                    ? this.onSecurityDebugPacket_(e)
                    : b(
                        'Unrecognized action received from server: ' +
                          a.stringify(t) +
                          '\nAre you using the latest client?',
                      );
              }),
              (e.prototype.onReady_ = function (t, e) {
                this.log_('connection ready'),
                  (this.connected_ = !0),
                  (this.lastConnectionEstablishedTime_ = new Date().getTime()),
                  this.handleTimestamp_(t),
                  (this.lastSessionId = e),
                  this.firstConnection_ && this.sendConnectStats_(),
                  this.restoreState_(),
                  (this.firstConnection_ = !1),
                  this.onConnectStatus_(!0);
              }),
              (e.prototype.scheduleConnect_ = function (t) {
                var e = this;
                a.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?"),
                  this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_),
                  (this.establishConnectionTimer_ = setTimeout(function () {
                    (e.establishConnectionTimer_ = null), e.establishConnection_();
                  }, Math.floor(t)));
              }),
              (e.prototype.onVisible_ = function (t) {
                t &&
                  !this.visible_ &&
                  this.reconnectDelay_ === this.maxReconnectDelay_ &&
                  (this.log_('Window became visible.  Reducing delay.'),
                  (this.reconnectDelay_ = 1e3),
                  this.realtime_ || this.scheduleConnect_(0)),
                  (this.visible_ = t);
              }),
              (e.prototype.onOnline_ = function (t) {
                t
                  ? (this.log_('Browser went online.'),
                    (this.reconnectDelay_ = 1e3),
                    this.realtime_ || this.scheduleConnect_(0))
                  : (this.log_('Browser went offline.  Killing connection.'),
                    this.realtime_ && this.realtime_.close());
              }),
              (e.prototype.onRealtimeDisconnect_ = function () {
                if (
                  (this.log_('data client disconnected'),
                  (this.connected_ = !1),
                  (this.realtime_ = null),
                  this.cancelSentTransactions_(),
                  (this.requestCBHash_ = {}),
                  this.shouldReconnect_())
                ) {
                  if (this.visible_) {
                    if (this.lastConnectionEstablishedTime_) {
                      new Date().getTime() - this.lastConnectionEstablishedTime_ > 3e4 &&
                        (this.reconnectDelay_ = 1e3),
                        (this.lastConnectionEstablishedTime_ = null);
                    }
                  } else
                    this.log_("Window isn't visible.  Delaying reconnect."),
                      (this.reconnectDelay_ = this.maxReconnectDelay_),
                      (this.lastConnectionAttemptTime_ = new Date().getTime());
                  var t = new Date().getTime() - this.lastConnectionAttemptTime_,
                    e = Math.max(0, this.reconnectDelay_ - t);
                  (e = Math.random() * e),
                    this.log_('Trying to reconnect in ' + e + 'ms'),
                    this.scheduleConnect_(e),
                    (this.reconnectDelay_ = Math.min(
                      this.maxReconnectDelay_,
                      1.3 * this.reconnectDelay_,
                    ));
                }
                this.onConnectStatus_(!1);
              }),
              (e.prototype.establishConnection_ = function () {
                if (this.shouldReconnect_()) {
                  this.log_('Making a connection attempt'),
                    (this.lastConnectionAttemptTime_ = new Date().getTime()),
                    (this.lastConnectionEstablishedTime_ = null);
                  var t = this.onDataMessage_.bind(this),
                    n = this.onReady_.bind(this),
                    r = this.onRealtimeDisconnect_.bind(this),
                    i = this.id + ':' + e.nextConnectionId_++,
                    o = this,
                    s = this.lastSessionId,
                    h = !1,
                    u = null,
                    l = function () {
                      u ? u.close() : ((h = !0), r());
                    };
                  this.realtime_ = {
                    close: l,
                    sendRequest: function (t) {
                      a.assert(u, "sendRequest call when we're not connected not allowed."),
                        u.sendRequest(t);
                    },
                  };
                  var c = this.forceTokenRefresh_;
                  (this.forceTokenRefresh_ = !1),
                    this.authTokenProvider_
                      .getToken(c)
                      .then(function (e) {
                        h
                          ? w('getToken() completed but was canceled')
                          : (w('getToken() completed. Creating connection.'),
                            (o.authToken_ = e && e.accessToken),
                            (u = new Ue(
                              i,
                              o.repoInfo_,
                              t,
                              n,
                              r,
                              function (t) {
                                I(t + ' (' + o.repoInfo_.toString() + ')'),
                                  o.interrupt('server_kill');
                              },
                              s,
                            )));
                      })
                      .then(null, function (t) {
                        o.log_('Failed to get token: ' + t),
                          h || (a.CONSTANTS.NODE_ADMIN && I(t), l());
                      });
                }
              }),
              (e.prototype.interrupt = function (t) {
                w('Interrupting connection for reason: ' + t),
                  (this.interruptReasons_[t] = !0),
                  this.realtime_
                    ? this.realtime_.close()
                    : (this.establishConnectionTimer_ &&
                        (clearTimeout(this.establishConnectionTimer_),
                        (this.establishConnectionTimer_ = null)),
                      this.connected_ && this.onRealtimeDisconnect_());
              }),
              (e.prototype.resume = function (t) {
                w('Resuming connection for reason: ' + t),
                  delete this.interruptReasons_[t],
                  a.isEmpty(this.interruptReasons_) &&
                    ((this.reconnectDelay_ = 1e3), this.realtime_ || this.scheduleConnect_(0));
              }),
              (e.prototype.handleTimestamp_ = function (t) {
                var e = t - new Date().getTime();
                this.onServerInfoUpdate_({ serverTimeOffset: e });
              }),
              (e.prototype.cancelSentTransactions_ = function () {
                for (var t = 0; t < this.outstandingPuts_.length; t++) {
                  var e = this.outstandingPuts_[t];
                  e &&
                    'h' in e.request &&
                    e.queued &&
                    (e.onComplete && e.onComplete('disconnect'),
                    delete this.outstandingPuts_[t],
                    this.outstandingPutCount_--);
                }
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
              }),
              (e.prototype.onListenRevoked_ = function (t, e) {
                var n;
                n = e
                  ? e
                      .map(function (t) {
                        return O(t);
                      })
                      .join('$')
                  : 'default';
                var r = this.removeListen_(t, n);
                r && r.onComplete && r.onComplete('permission_denied');
              }),
              (e.prototype.removeListen_ = function (t, e) {
                var n,
                  r = new U(t).toString();
                if (this.listens.has(r)) {
                  var i = this.listens.get(r);
                  (n = i.get(e)), i.delete(e), 0 === i.size && this.listens.delete(r);
                } else n = void 0;
                return n;
              }),
              (e.prototype.onAuthRevoked_ = function (t, e) {
                w('Auth token revoked: ' + t + '/' + e),
                  (this.authToken_ = null),
                  (this.forceTokenRefresh_ = !0),
                  this.realtime_.close(),
                  ('invalid_token' !== t && 'permission_denied' !== t) ||
                    (this.invalidAuthTokenCount_++,
                    this.invalidAuthTokenCount_ >= 3 &&
                      ((this.reconnectDelay_ = 3e4),
                      this.authTokenProvider_.notifyForInvalidToken()));
              }),
              (e.prototype.onSecurityDebugPacket_ = function (t) {
                this.securityDebugCallback_
                  ? this.securityDebugCallback_(t)
                  : 'msg' in t && console.log('FIREBASE: ' + t.msg.replace('\n', '\nFIREBASE: '));
              }),
              (e.prototype.restoreState_ = function () {
                var t, e, n, r;
                this.tryAuth();
                try {
                  for (
                    var i = s.__values(this.listens.values()), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    try {
                      for (
                        var h = ((n = void 0), s.__values(a.values())), u = h.next();
                        !u.done;
                        u = h.next()
                      ) {
                        var l = u.value;
                        this.sendListen_(l);
                      }
                    } catch (d) {
                      n = { error: d };
                    } finally {
                      try {
                        u && !u.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (f) {
                  t = { error: f };
                } finally {
                  try {
                    o && !o.done && (e = i.return) && e.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                for (var c = 0; c < this.outstandingPuts_.length; c++)
                  this.outstandingPuts_[c] && this.sendPut_(c);
                for (; this.onDisconnectRequestQueue_.length; ) {
                  var p = this.onDisconnectRequestQueue_.shift();
                  this.sendOnDisconnect_(p.action, p.pathString, p.data, p.onComplete);
                }
              }),
              (e.prototype.sendConnectStats_ = function () {
                var t = {},
                  e = 'js';
                a.CONSTANTS.NODE_ADMIN
                  ? (e = 'admin_node')
                  : a.CONSTANTS.NODE_CLIENT && (e = 'node'),
                  (t['sdk.' + e + '.' + Me.replace(/\./g, '-')] = 1),
                  a.isMobileCordova()
                    ? (t['framework.cordova'] = 1)
                    : a.isReactNative() && (t['framework.reactnative'] = 1),
                  this.reportStats(t);
              }),
              (e.prototype.shouldReconnect_ = function () {
                var t = Oe.getInstance().currentlyOnline();
                return a.isEmpty(this.interruptReasons_) && t;
              }),
              (e.nextPersistentConnectionId_ = 0),
              (e.nextConnectionId_ = 0),
              e
            );
          })(Ve),
          Be = (function (t) {
            function e(e, n, r) {
              var i = t.call(this) || this;
              return (
                (i.repoInfo_ = e),
                (i.onDataUpdate_ = n),
                (i.authTokenProvider_ = r),
                (i.log_ = T('p:rest:')),
                (i.listens_ = {}),
                i
              );
            }
            return (
              s.__extends(e, t),
              (e.prototype.reportStats = function (t) {
                throw new Error('Method not implemented.');
              }),
              (e.getListenId_ = function (t, e) {
                return void 0 !== e
                  ? 'tag$' + e
                  : (a.assert(
                      t.getQueryParams().isDefault(),
                      "should have a tag if it's not a default query.",
                    ),
                    t.path.toString());
              }),
              (e.prototype.listen = function (t, n, r, i) {
                var o = this,
                  s = t.path.toString();
                this.log_('Listen called for ' + s + ' ' + t.queryIdentifier());
                var h = e.getListenId_(t, r),
                  u = {};
                this.listens_[h] = u;
                var l = t.getQueryParams().toRestQueryStringParameters();
                this.restRequest_(s + '.json', l, function (t, e) {
                  var n = e;
                  (404 === t && ((n = null), (t = null)),
                  null === t && o.onDataUpdate_(s, n, !1, r),
                  a.safeGet(o.listens_, h) === u) &&
                    i(t ? (401 === t ? 'permission_denied' : 'rest_error:' + t) : 'ok', null);
                });
              }),
              (e.prototype.unlisten = function (t, n) {
                var r = e.getListenId_(t, n);
                delete this.listens_[r];
              }),
              (e.prototype.refreshAuthToken = function (t) {}),
              (e.prototype.restRequest_ = function (t, e, n) {
                var r = this;
                void 0 === e && (e = {}),
                  (e.format = 'export'),
                  this.authTokenProvider_.getToken(!1).then(function (i) {
                    var o = i && i.accessToken;
                    o && (e.auth = o);
                    var s =
                      (r.repoInfo_.secure ? 'https://' : 'http://') +
                      r.repoInfo_.host +
                      t +
                      '?ns=' +
                      r.repoInfo_.namespace +
                      a.querystring(e);
                    r.log_('Sending REST request for ' + s);
                    var h = new XMLHttpRequest();
                    (h.onreadystatechange = function () {
                      if (n && 4 === h.readyState) {
                        r.log_(
                          'REST Response for ' + s + ' received. status:',
                          h.status,
                          'response:',
                          h.responseText,
                        );
                        var t = null;
                        if (h.status >= 200 && h.status < 300) {
                          try {
                            t = a.jsonEval(h.responseText);
                          } catch (e) {
                            I('Failed to parse JSON response for ' + s + ': ' + h.responseText);
                          }
                          n(null, t);
                        } else
                          401 !== h.status &&
                            404 !== h.status &&
                            I('Got unsuccessful REST response for ' + s + ' Status: ' + h.status),
                            n(h.status);
                        n = null;
                      }
                    }),
                      h.open('GET', s, !0),
                      h.send();
                  });
              }),
              e
            );
          })(Ve),
          je = (function () {
            function t(t, e, n, r) {
              var i = this;
              (this.repoInfo_ = t),
                (this.app = n),
                (this.dataUpdateCount = 0),
                (this.statsListener_ = null),
                (this.eventQueue_ = new Re()),
                (this.nextWriteId_ = 1),
                (this.interceptServerDataCallback_ = null),
                (this.onDisconnect_ = new Xt()),
                (this.persistentConnection_ = null);
              var o = new be(n, r);
              if (
                ((this.stats_ = Ie.getCollection(t)),
                e ||
                  (
                    ('object' === typeof window &&
                      window.navigator &&
                      window.navigator.userAgent) ||
                    ''
                  ).search(
                    /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i,
                  ) >= 0)
              )
                (this.server_ = new Be(this.repoInfo_, this.onDataUpdate_.bind(this), o)),
                  setTimeout(this.onConnectStatus_.bind(this, !0), 0);
              else {
                var s = n.options.databaseAuthVariableOverride;
                if ('undefined' !== typeof s && null !== s) {
                  if ('object' !== typeof s)
                    throw new Error(
                      'Only objects are supported for option databaseAuthVariableOverride',
                    );
                  try {
                    a.stringify(s);
                  } catch (h) {
                    throw new Error('Invalid authOverride provided: ' + h);
                  }
                }
                (this.persistentConnection_ = new He(
                  this.repoInfo_,
                  this.onDataUpdate_.bind(this),
                  this.onConnectStatus_.bind(this),
                  this.onServerInfoUpdate_.bind(this),
                  o,
                  s,
                )),
                  (this.server_ = this.persistentConnection_);
              }
              o.addTokenChangeListener(function (t) {
                i.server_.refreshAuthToken(t);
              }),
                (this.statsReporter_ = Ie.getOrCreateReporter(t, function () {
                  return new Ne(i.stats_, i.server_);
                })),
                this.transactionsInit_(),
                (this.infoData_ = new Te()),
                (this.infoSyncTree_ = new we({
                  startListening: function (t, e, n, r) {
                    var o = [],
                      s = i.infoData_.getNode(t.path);
                    return (
                      s.isEmpty() ||
                        ((o = i.infoSyncTree_.applyServerOverwrite(t.path, s)),
                        setTimeout(function () {
                          r('ok');
                        }, 0)),
                      o
                    );
                  },
                  stopListening: function () {},
                })),
                this.updateInfo_('connected', !1),
                (this.serverSyncTree_ = new we({
                  startListening: function (t, e, n, r) {
                    return (
                      i.server_.listen(t, n, e, function (e, n) {
                        var o = r(e, n);
                        i.eventQueue_.raiseEventsForChangedPath(t.path, o);
                      }),
                      []
                    );
                  },
                  stopListening: function (t, e) {
                    i.server_.unlisten(t, e);
                  },
                }));
            }
            return (
              (t.prototype.toString = function () {
                return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
              }),
              (t.prototype.name = function () {
                return this.repoInfo_.namespace;
              }),
              (t.prototype.serverTime = function () {
                var t = this.infoData_.getNode(new U('.info/serverTimeOffset')).val() || 0;
                return new Date().getTime() + t;
              }),
              (t.prototype.generateServerValues = function () {
                return (
                  ((t = (t = { timestamp: this.serverTime() }) || {}).timestamp =
                    t.timestamp || new Date().getTime()),
                  t
                );
                var t;
              }),
              (t.prototype.onDataUpdate_ = function (t, e, n, r) {
                this.dataUpdateCount++;
                var i = new U(t);
                e = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(t, e) : e;
                var o = [];
                if (r)
                  if (n) {
                    var s = a.map(e, function (t) {
                      return Qt(t);
                    });
                    o = this.serverSyncTree_.applyTaggedQueryMerge(i, s, r);
                  } else {
                    var h = Qt(e);
                    o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, h, r);
                  }
                else if (n) {
                  var u = a.map(e, function (t) {
                    return Qt(t);
                  });
                  o = this.serverSyncTree_.applyServerMerge(i, u);
                } else {
                  var l = Qt(e);
                  o = this.serverSyncTree_.applyServerOverwrite(i, l);
                }
                var c = i;
                o.length > 0 && (c = this.rerunTransactions_(i)),
                  this.eventQueue_.raiseEventsForChangedPath(c, o);
              }),
              (t.prototype.interceptServerData_ = function (t) {
                this.interceptServerDataCallback_ = t;
              }),
              (t.prototype.onConnectStatus_ = function (t) {
                this.updateInfo_('connected', t), !1 === t && this.runOnDisconnectEvents_();
              }),
              (t.prototype.onServerInfoUpdate_ = function (t) {
                var e = this;
                F(t, function (t, n) {
                  e.updateInfo_(t, n);
                });
              }),
              (t.prototype.updateInfo_ = function (t, e) {
                var n = new U('/.info/' + t),
                  r = Qt(e);
                this.infoData_.updateSnapshot(n, r);
                var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                this.eventQueue_.raiseEventsForChangedPath(n, i);
              }),
              (t.prototype.getNextWriteId_ = function () {
                return this.nextWriteId_++;
              }),
              (t.prototype.setWithPriority = function (t, e, n, r) {
                var i = this;
                this.log_('set', { path: t.toString(), value: e, priority: n });
                var o = this.generateServerValues(),
                  s = Qt(e, n),
                  a = Jt(s, o),
                  h = this.getNextWriteId_(),
                  u = this.serverSyncTree_.applyUserOverwrite(t, a, h, !0);
                this.eventQueue_.queueEvents(u),
                  this.server_.put(t.toString(), s.val(!0), function (e, n) {
                    var o = 'ok' === e;
                    o || I('set at ' + t + ' failed: ' + e);
                    var s = i.serverSyncTree_.ackUserWrite(h, !o);
                    i.eventQueue_.raiseEventsForChangedPath(t, s),
                      i.callOnCompleteCallback(r, e, n);
                  });
                var l = this.abortTransactions_(t);
                this.rerunTransactions_(l), this.eventQueue_.raiseEventsForChangedPath(l, []);
              }),
              (t.prototype.update = function (t, e, n) {
                var r = this;
                this.log_('update', { path: t.toString(), value: e });
                var i = !0,
                  o = this.generateServerValues(),
                  s = {};
                if (
                  (F(e, function (t, e) {
                    i = !1;
                    var n = Qt(e);
                    s[t] = Jt(n, o);
                  }),
                  i)
                )
                  w("update() called with empty data.  Don't do anything."),
                    this.callOnCompleteCallback(n, 'ok');
                else {
                  var a = this.getNextWriteId_(),
                    h = this.serverSyncTree_.applyUserMerge(t, s, a);
                  this.eventQueue_.queueEvents(h),
                    this.server_.merge(t.toString(), e, function (e, i) {
                      var o = 'ok' === e;
                      o || I('update at ' + t + ' failed: ' + e);
                      var s = r.serverSyncTree_.ackUserWrite(a, !o),
                        h = s.length > 0 ? r.rerunTransactions_(t) : t;
                      r.eventQueue_.raiseEventsForChangedPath(h, s),
                        r.callOnCompleteCallback(n, e, i);
                    }),
                    F(e, function (e) {
                      var n = r.abortTransactions_(t.child(e));
                      r.rerunTransactions_(n);
                    }),
                    this.eventQueue_.raiseEventsForChangedPath(t, []);
                }
              }),
              (t.prototype.runOnDisconnectEvents_ = function () {
                var t = this;
                this.log_('onDisconnectEvents');
                var e = this.generateServerValues(),
                  n = (function (t, e) {
                    var n = new Xt();
                    return (
                      t.forEachTree(new U(''), function (t, r) {
                        n.remember(t, Jt(r, e));
                      }),
                      n
                    );
                  })(this.onDisconnect_, e),
                  r = [];
                n.forEachTree(U.Empty, function (e, n) {
                  r = r.concat(t.serverSyncTree_.applyServerOverwrite(e, n));
                  var i = t.abortTransactions_(e);
                  t.rerunTransactions_(i);
                }),
                  (this.onDisconnect_ = new Xt()),
                  this.eventQueue_.raiseEventsForChangedPath(U.Empty, r);
              }),
              (t.prototype.onDisconnectCancel = function (t, e) {
                var n = this;
                this.server_.onDisconnectCancel(t.toString(), function (r, i) {
                  'ok' === r && n.onDisconnect_.forget(t), n.callOnCompleteCallback(e, r, i);
                });
              }),
              (t.prototype.onDisconnectSet = function (t, e, n) {
                var r = this,
                  i = Qt(e);
                this.server_.onDisconnectPut(t.toString(), i.val(!0), function (e, o) {
                  'ok' === e && r.onDisconnect_.remember(t, i), r.callOnCompleteCallback(n, e, o);
                });
              }),
              (t.prototype.onDisconnectSetWithPriority = function (t, e, n, r) {
                var i = this,
                  o = Qt(e, n);
                this.server_.onDisconnectPut(t.toString(), o.val(!0), function (e, n) {
                  'ok' === e && i.onDisconnect_.remember(t, o), i.callOnCompleteCallback(r, e, n);
                });
              }),
              (t.prototype.onDisconnectUpdate = function (t, e, n) {
                var r = this;
                if (a.isEmpty(e))
                  return (
                    w("onDisconnect().update() called with empty data.  Don't do anything."),
                    void this.callOnCompleteCallback(n, 'ok')
                  );
                this.server_.onDisconnectMerge(t.toString(), e, function (i, o) {
                  'ok' === i &&
                    F(e, function (e, n) {
                      var i = Qt(n);
                      r.onDisconnect_.remember(t.child(e), i);
                    }),
                    r.callOnCompleteCallback(n, i, o);
                });
              }),
              (t.prototype.addEventCallbackForQuery = function (t, e) {
                var n;
                (n =
                  '.info' === t.path.getFront()
                    ? this.infoSyncTree_.addEventRegistration(t, e)
                    : this.serverSyncTree_.addEventRegistration(t, e)),
                  this.eventQueue_.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.removeEventCallbackForQuery = function (t, e) {
                var n;
                (n =
                  '.info' === t.path.getFront()
                    ? this.infoSyncTree_.removeEventRegistration(t, e)
                    : this.serverSyncTree_.removeEventRegistration(t, e)),
                  this.eventQueue_.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.interrupt = function () {
                this.persistentConnection_ &&
                  this.persistentConnection_.interrupt('repo_interrupt');
              }),
              (t.prototype.resume = function () {
                this.persistentConnection_ && this.persistentConnection_.resume('repo_interrupt');
              }),
              (t.prototype.stats = function (t) {
                if ((void 0 === t && (t = !1), 'undefined' !== typeof console)) {
                  var e;
                  t
                    ? (this.statsListener_ || (this.statsListener_ = new Pe(this.stats_)),
                      (e = this.statsListener_.get()))
                    : (e = this.stats_.get());
                  var n = Object.keys(e).reduce(function (t, e) {
                    return Math.max(e.length, t);
                  }, 0);
                  F(e, function (t, e) {
                    for (var r = t, i = t.length; i < n + 2; i++) r += ' ';
                    console.log(r + e);
                  });
                }
              }),
              (t.prototype.statsIncrementCounter = function (t) {
                this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t);
              }),
              (t.prototype.log_ = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = '';
                this.persistentConnection_ && (n = this.persistentConnection_.id + ':'),
                  w.apply(void 0, s.__spread([n], t));
              }),
              (t.prototype.callOnCompleteCallback = function (t, e, n) {
                t &&
                  Q(function () {
                    if ('ok' === e) t(null);
                    else {
                      var r = (e || 'error').toUpperCase(),
                        i = r;
                      n && (i += ': ' + n);
                      var o = new Error(i);
                      (o.code = r), t(o);
                    }
                  });
              }),
              Object.defineProperty(t.prototype, 'database', {
                get: function () {
                  return this.__database || (this.__database = new en(this));
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          Ke = (function () {
            function t(e) {
              (this.indexedFilter_ = new le(e.getIndex())),
                (this.index_ = e.getIndex()),
                (this.startPost_ = t.getStartPost_(e)),
                (this.endPost_ = t.getEndPost_(e));
            }
            return (
              (t.prototype.getStartPost = function () {
                return this.startPost_;
              }),
              (t.prototype.getEndPost = function () {
                return this.endPost_;
              }),
              (t.prototype.matches = function (t) {
                return (
                  this.index_.compare(this.getStartPost(), t) <= 0 &&
                  this.index_.compare(t, this.getEndPost()) <= 0
                );
              }),
              (t.prototype.updateChild = function (t, e, n, r, i, o) {
                return (
                  this.matches(new dt(e, n)) || (n = Mt.EMPTY_NODE),
                  this.indexedFilter_.updateChild(t, e, n, r, i, o)
                );
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                e.isLeafNode() && (e = Mt.EMPTY_NODE);
                var r = e.withIndex(this.index_);
                r = r.updatePriority(Mt.EMPTY_NODE);
                var i = this;
                return (
                  e.forEachChild(St, function (t, e) {
                    i.matches(new dt(t, e)) || (r = r.updateImmediateChild(t, Mt.EMPTY_NODE));
                  }),
                  this.indexedFilter_.updateFullNode(t, r, n)
                );
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function () {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this.indexedFilter_;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.getStartPost_ = function (t) {
                if (t.hasStart()) {
                  var e = t.getIndexStartName();
                  return t.getIndex().makePost(t.getIndexStartValue(), e);
                }
                return t.getIndex().minPost();
              }),
              (t.getEndPost_ = function (t) {
                if (t.hasEnd()) {
                  var e = t.getIndexEndName();
                  return t.getIndex().makePost(t.getIndexEndValue(), e);
                }
                return t.getIndex().maxPost();
              }),
              t
            );
          })(),
          Ye = (function () {
            function t(t) {
              (this.rangedFilter_ = new Ke(t)),
                (this.index_ = t.getIndex()),
                (this.limit_ = t.getLimit()),
                (this.reverse_ = !t.isViewFromLeft());
            }
            return (
              (t.prototype.updateChild = function (t, e, n, r, i, o) {
                return (
                  this.rangedFilter_.matches(new dt(e, n)) || (n = Mt.EMPTY_NODE),
                  t.getImmediateChild(e).equals(n)
                    ? t
                    : t.numChildren() < this.limit_
                    ? this.rangedFilter_.getIndexedFilter().updateChild(t, e, n, r, i, o)
                    : this.fullLimitUpdateChild_(t, e, n, i, o)
                );
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                var r;
                if (e.isLeafNode() || e.isEmpty()) r = Mt.EMPTY_NODE.withIndex(this.index_);
                else if (2 * this.limit_ < e.numChildren() && e.isIndexed(this.index_)) {
                  r = Mt.EMPTY_NODE.withIndex(this.index_);
                  var i = void 0;
                  i = this.reverse_
                    ? e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_)
                    : e.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                  for (var o = 0; i.hasNext() && o < this.limit_; ) {
                    var s = i.getNext();
                    if (
                      !(this.reverse_
                        ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0
                        : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0)
                    )
                      break;
                    (r = r.updateImmediateChild(s.name, s.node)), o++;
                  }
                } else {
                  r = (r = e.withIndex(this.index_)).updatePriority(Mt.EMPTY_NODE);
                  var a = void 0,
                    h = void 0,
                    u = void 0;
                  i = void 0;
                  if (this.reverse_) {
                    (i = r.getReverseIterator(this.index_)),
                      (a = this.rangedFilter_.getEndPost()),
                      (h = this.rangedFilter_.getStartPost());
                    var l = this.index_.getCompare();
                    u = function (t, e) {
                      return l(e, t);
                    };
                  } else
                    (i = r.getIterator(this.index_)),
                      (a = this.rangedFilter_.getStartPost()),
                      (h = this.rangedFilter_.getEndPost()),
                      (u = this.index_.getCompare());
                  o = 0;
                  for (var c = !1; i.hasNext(); ) {
                    s = i.getNext();
                    !c && u(a, s) <= 0 && (c = !0),
                      c && o < this.limit_ && u(s, h) <= 0
                        ? o++
                        : (r = r.updateImmediateChild(s.name, Mt.EMPTY_NODE));
                  }
                }
                return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n);
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function () {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this.rangedFilter_.getIndexedFilter();
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.prototype.fullLimitUpdateChild_ = function (t, e, n, r, i) {
                var o;
                if (this.reverse_) {
                  var s = this.index_.getCompare();
                  o = function (t, e) {
                    return s(e, t);
                  };
                } else o = this.index_.getCompare();
                var h = t;
                a.assert(h.numChildren() === this.limit_, '');
                var u = new dt(e, n),
                  l = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_),
                  c = this.rangedFilter_.matches(u);
                if (h.hasChild(e)) {
                  for (
                    var p = h.getImmediateChild(e),
                      d = r.getChildAfterChild(this.index_, l, this.reverse_);
                    null != d && (d.name === e || h.hasChild(d.name));

                  )
                    d = r.getChildAfterChild(this.index_, d, this.reverse_);
                  var f = null == d ? 1 : o(d, u);
                  if (c && !n.isEmpty() && f >= 0)
                    return (
                      null != i && i.trackChildChange(ue.childChangedChange(e, n, p)),
                      h.updateImmediateChild(e, n)
                    );
                  null != i && i.trackChildChange(ue.childRemovedChange(e, p));
                  var _ = h.updateImmediateChild(e, Mt.EMPTY_NODE);
                  return null != d && this.rangedFilter_.matches(d)
                    ? (null != i && i.trackChildChange(ue.childAddedChange(d.name, d.node)),
                      _.updateImmediateChild(d.name, d.node))
                    : _;
                }
                return n.isEmpty()
                  ? t
                  : c && o(l, u) >= 0
                  ? (null != i &&
                      (i.trackChildChange(ue.childRemovedChange(l.name, l.node)),
                      i.trackChildChange(ue.childAddedChange(e, n))),
                    h.updateImmediateChild(e, n).updateImmediateChild(l.name, Mt.EMPTY_NODE))
                  : t;
              }),
              t
            );
          })(),
          ze = (function () {
            function t() {
              (this.limitSet_ = !1),
                (this.startSet_ = !1),
                (this.startNameSet_ = !1),
                (this.endSet_ = !1),
                (this.endNameSet_ = !1),
                (this.limit_ = 0),
                (this.viewFrom_ = ''),
                (this.indexStartValue_ = null),
                (this.indexStartName_ = ''),
                (this.indexEndValue_ = null),
                (this.indexEndName_ = ''),
                (this.index_ = St);
            }
            return (
              (t.prototype.hasStart = function () {
                return this.startSet_;
              }),
              (t.prototype.isViewFromLeft = function () {
                return '' === this.viewFrom_
                  ? this.startSet_
                  : this.viewFrom_ === t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
              }),
              (t.prototype.getIndexStartValue = function () {
                return (
                  a.assert(this.startSet_, 'Only valid if start has been set'),
                  this.indexStartValue_
                );
              }),
              (t.prototype.getIndexStartName = function () {
                return (
                  a.assert(this.startSet_, 'Only valid if start has been set'),
                  this.startNameSet_ ? this.indexStartName_ : N
                );
              }),
              (t.prototype.hasEnd = function () {
                return this.endSet_;
              }),
              (t.prototype.getIndexEndValue = function () {
                return (
                  a.assert(this.endSet_, 'Only valid if end has been set'), this.indexEndValue_
                );
              }),
              (t.prototype.getIndexEndName = function () {
                return (
                  a.assert(this.endSet_, 'Only valid if end has been set'),
                  this.endNameSet_ ? this.indexEndName_ : R
                );
              }),
              (t.prototype.hasLimit = function () {
                return this.limitSet_;
              }),
              (t.prototype.hasAnchoredLimit = function () {
                return this.limitSet_ && '' !== this.viewFrom_;
              }),
              (t.prototype.getLimit = function () {
                return a.assert(this.limitSet_, 'Only valid if limit has been set'), this.limit_;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.prototype.copy_ = function () {
                var e = new t();
                return (
                  (e.limitSet_ = this.limitSet_),
                  (e.limit_ = this.limit_),
                  (e.startSet_ = this.startSet_),
                  (e.indexStartValue_ = this.indexStartValue_),
                  (e.startNameSet_ = this.startNameSet_),
                  (e.indexStartName_ = this.indexStartName_),
                  (e.endSet_ = this.endSet_),
                  (e.indexEndValue_ = this.indexEndValue_),
                  (e.endNameSet_ = this.endNameSet_),
                  (e.indexEndName_ = this.indexEndName_),
                  (e.index_ = this.index_),
                  (e.viewFrom_ = this.viewFrom_),
                  e
                );
              }),
              (t.prototype.limit = function (t) {
                var e = this.copy_();
                return (e.limitSet_ = !0), (e.limit_ = t), (e.viewFrom_ = ''), e;
              }),
              (t.prototype.limitToFirst = function (e) {
                var n = this.copy_();
                return (
                  (n.limitSet_ = !0),
                  (n.limit_ = e),
                  (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
                  n
                );
              }),
              (t.prototype.limitToLast = function (e) {
                var n = this.copy_();
                return (
                  (n.limitSet_ = !0),
                  (n.limit_ = e),
                  (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
                  n
                );
              }),
              (t.prototype.startAt = function (t, e) {
                var n = this.copy_();
                return (
                  (n.startSet_ = !0),
                  void 0 === t && (t = null),
                  (n.indexStartValue_ = t),
                  null != e
                    ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
                    : ((n.startNameSet_ = !1), (n.indexStartName_ = '')),
                  n
                );
              }),
              (t.prototype.endAt = function (t, e) {
                var n = this.copy_();
                return (
                  (n.endSet_ = !0),
                  void 0 === t && (t = null),
                  (n.indexEndValue_ = t),
                  void 0 !== e
                    ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
                    : ((n.endNameSet_ = !1), (n.indexEndName_ = '')),
                  n
                );
              }),
              (t.prototype.orderBy = function (t) {
                var e = this.copy_();
                return (e.index_ = t), e;
              }),
              (t.prototype.getQueryObject = function () {
                var e = t.WIRE_PROTOCOL_CONSTANTS_,
                  n = {};
                if (
                  (this.startSet_ &&
                    ((n[e.INDEX_START_VALUE] = this.indexStartValue_),
                    this.startNameSet_ && (n[e.INDEX_START_NAME] = this.indexStartName_)),
                  this.endSet_ &&
                    ((n[e.INDEX_END_VALUE] = this.indexEndValue_),
                    this.endNameSet_ && (n[e.INDEX_END_NAME] = this.indexEndName_)),
                  this.limitSet_)
                ) {
                  n[e.LIMIT] = this.limit_;
                  var r = this.viewFrom_;
                  '' === r && (r = this.isViewFromLeft() ? e.VIEW_FROM_LEFT : e.VIEW_FROM_RIGHT),
                    (n[e.VIEW_FROM] = r);
                }
                return this.index_ !== St && (n[e.INDEX] = this.index_.toString()), n;
              }),
              (t.prototype.loadsAllData = function () {
                return !(this.startSet_ || this.endSet_ || this.limitSet_);
              }),
              (t.prototype.isDefault = function () {
                return this.loadsAllData() && this.index_ === St;
              }),
              (t.prototype.getNodeFilter = function () {
                return this.loadsAllData()
                  ? new le(this.getIndex())
                  : this.hasLimit()
                  ? new Ye(this)
                  : new Ke(this);
              }),
              (t.prototype.toRestQueryStringParameters = function () {
                var e,
                  n = t.REST_QUERY_CONSTANTS_,
                  r = {};
                return (
                  this.isDefault() ||
                    (this.index_ === St
                      ? (e = n.PRIORITY_INDEX)
                      : this.index_ === Vt
                      ? (e = n.VALUE_INDEX)
                      : this.index_ === yt
                      ? (e = n.KEY_INDEX)
                      : (a.assert(this.index_ instanceof Ht, 'Unrecognized index type!'),
                        (e = this.index_.toString())),
                    (r[n.ORDER_BY] = a.stringify(e)),
                    this.startSet_ &&
                      ((r[n.START_AT] = a.stringify(this.indexStartValue_)),
                      this.startNameSet_ &&
                        (r[n.START_AT] += ',' + a.stringify(this.indexStartName_))),
                    this.endSet_ &&
                      ((r[n.END_AT] = a.stringify(this.indexEndValue_)),
                      this.endNameSet_ && (r[n.END_AT] += ',' + a.stringify(this.indexEndName_))),
                    this.limitSet_ &&
                      (this.isViewFromLeft()
                        ? (r[n.LIMIT_TO_FIRST] = this.limit_)
                        : (r[n.LIMIT_TO_LAST] = this.limit_))),
                  r
                );
              }),
              (t.WIRE_PROTOCOL_CONSTANTS_ = {
                INDEX_START_VALUE: 'sp',
                INDEX_START_NAME: 'sn',
                INDEX_END_VALUE: 'ep',
                INDEX_END_NAME: 'en',
                LIMIT: 'l',
                VIEW_FROM: 'vf',
                VIEW_FROM_LEFT: 'l',
                VIEW_FROM_RIGHT: 'r',
                INDEX: 'i',
              }),
              (t.REST_QUERY_CONSTANTS_ = {
                ORDER_BY: 'orderBy',
                PRIORITY_INDEX: '$priority',
                VALUE_INDEX: '$value',
                KEY_INDEX: '$key',
                START_AT: 'startAt',
                END_AT: 'endAt',
                LIMIT_TO_FIRST: 'limitToFirst',
                LIMIT_TO_LAST: 'limitToLast',
              }),
              (t.DEFAULT = new t()),
              t
            );
          })(),
          Ge = (function (t) {
            function e(e, n) {
              if (!(e instanceof je))
                throw new Error('new Reference() no longer supported - use app.database().');
              return t.call(this, e, n, ze.DEFAULT, !1) || this;
            }
            return (
              s.__extends(e, t),
              (e.prototype.getKey = function () {
                return (
                  a.validateArgCount('Reference.key', 0, 0, arguments.length),
                  this.path.isEmpty() ? null : this.path.getBack()
                );
              }),
              (e.prototype.child = function (t) {
                return (
                  a.validateArgCount('Reference.child', 1, 1, arguments.length),
                  'number' === typeof t
                    ? (t = String(t))
                    : t instanceof U ||
                      (null === this.path.getFront()
                        ? st('Reference.child', 1, t, !1)
                        : ot('Reference.child', 1, t, !1)),
                  new e(this.repo, this.path.child(t))
                );
              }),
              (e.prototype.getParent = function () {
                a.validateArgCount('Reference.parent', 0, 0, arguments.length);
                var t = this.path.parent();
                return null === t ? null : new e(this.repo, t);
              }),
              (e.prototype.getRoot = function () {
                a.validateArgCount('Reference.root', 0, 0, arguments.length);
                for (var t = this; null !== t.getParent(); ) t = t.getParent();
                return t;
              }),
              (e.prototype.databaseProp = function () {
                return this.repo.database;
              }),
              (e.prototype.set = function (t, e) {
                a.validateArgCount('Reference.set', 1, 2, arguments.length),
                  at('Reference.set', this.path),
                  Z('Reference.set', 1, t, this.path, !1),
                  a.validateCallback('Reference.set', 2, e, !0);
                var n = new a.Deferred();
                return this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)), n.promise;
              }),
              (e.prototype.update = function (t, e) {
                if (
                  (a.validateArgCount('Reference.update', 1, 2, arguments.length),
                  at('Reference.update', this.path),
                  Array.isArray(t))
                ) {
                  for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r];
                  (t = n),
                    I(
                      'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.',
                    );
                }
                et('Reference.update', 1, t, this.path, !1),
                  a.validateCallback('Reference.update', 2, e, !0);
                var i = new a.Deferred();
                return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise;
              }),
              (e.prototype.setWithPriority = function (t, e, n) {
                if (
                  (a.validateArgCount('Reference.setWithPriority', 2, 3, arguments.length),
                  at('Reference.setWithPriority', this.path),
                  Z('Reference.setWithPriority', 1, t, this.path, !1),
                  nt('Reference.setWithPriority', 2, e, !1),
                  a.validateCallback('Reference.setWithPriority', 3, n, !0),
                  '.length' === this.getKey() || '.keys' === this.getKey())
                )
                  throw (
                    'Reference.setWithPriority failed: ' + this.getKey() + ' is a read-only object.'
                  );
                var r = new a.Deferred();
                return this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)), r.promise;
              }),
              (e.prototype.remove = function (t) {
                return (
                  a.validateArgCount('Reference.remove', 0, 1, arguments.length),
                  at('Reference.remove', this.path),
                  a.validateCallback('Reference.remove', 1, t, !0),
                  this.set(null, t)
                );
              }),
              (e.prototype.transaction = function (t, e, n) {
                if (
                  (a.validateArgCount('Reference.transaction', 1, 3, arguments.length),
                  at('Reference.transaction', this.path),
                  a.validateCallback('Reference.transaction', 1, t, !1),
                  a.validateCallback('Reference.transaction', 2, e, !0),
                  ut('Reference.transaction', 3, n, !0),
                  '.length' === this.getKey() || '.keys' === this.getKey())
                )
                  throw (
                    'Reference.transaction failed: ' + this.getKey() + ' is a read-only object.'
                  );
                void 0 === n && (n = !0);
                var r = new a.Deferred();
                'function' === typeof e && r.promise.catch(function () {});
                var i = function (t, n, i) {
                  t ? r.reject(t) : r.resolve(new ct(n, i)), 'function' === typeof e && e(t, n, i);
                };
                return this.repo.startTransaction(this.path, t, i, n), r.promise;
              }),
              (e.prototype.setPriority = function (t, e) {
                a.validateArgCount('Reference.setPriority', 1, 2, arguments.length),
                  at('Reference.setPriority', this.path),
                  nt('Reference.setPriority', 1, t, !1),
                  a.validateCallback('Reference.setPriority', 2, e, !0);
                var n = new a.Deferred();
                return (
                  this.repo.setWithPriority(
                    this.path.child('.priority'),
                    t,
                    null,
                    n.wrapCallback(e),
                  ),
                  n.promise
                );
              }),
              (e.prototype.push = function (t, e) {
                a.validateArgCount('Reference.push', 0, 2, arguments.length),
                  at('Reference.push', this.path),
                  Z('Reference.push', 1, t, this.path, !0),
                  a.validateCallback('Reference.push', 2, e, !0);
                var n,
                  r = this.repo.serverTime(),
                  i = pt(r),
                  o = this.child(i),
                  s = this.child(i);
                return (
                  (n =
                    null != t
                      ? o.set(t, e).then(function () {
                          return s;
                        })
                      : Promise.resolve(s)),
                  (o.then = n.then.bind(n)),
                  (o.catch = n.then.bind(n, void 0)),
                  'function' === typeof e && n.catch(function () {}),
                  o
                );
              }),
              (e.prototype.onDisconnect = function () {
                return at('Reference.onDisconnect', this.path), new lt(this.repo, this.path);
              }),
              Object.defineProperty(e.prototype, 'database', {
                get: function () {
                  return this.databaseProp();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'key', {
                get: function () {
                  return this.getKey();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'parent', {
                get: function () {
                  return this.getParent();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'root', {
                get: function () {
                  return this.getRoot();
                },
                enumerable: !0,
                configurable: !0,
              }),
              e
            );
          })(Gt);
        (Gt.__referenceConstructor = Ge), (ge.__referenceConstructor = Ge);
        var Xe,
          $e = function () {
            (this.children = {}), (this.childCount = 0), (this.value = null);
          },
          Je = (function () {
            function t(t, e, n) {
              void 0 === t && (t = ''),
                void 0 === e && (e = null),
                void 0 === n && (n = new $e()),
                (this.name_ = t),
                (this.parent_ = e),
                (this.node_ = n);
            }
            return (
              (t.prototype.subTree = function (e) {
                for (
                  var n = e instanceof U ? e : new U(e), r = this, i = n.getFront();
                  null !== i;

                ) {
                  (r = new t(i, r, a.safeGet(r.node_.children, i) || new $e())),
                    (i = (n = n.popFront()).getFront());
                }
                return r;
              }),
              (t.prototype.getValue = function () {
                return this.node_.value;
              }),
              (t.prototype.setValue = function (t) {
                a.assert('undefined' !== typeof t, 'Cannot set value to undefined'),
                  (this.node_.value = t),
                  this.updateParents_();
              }),
              (t.prototype.clear = function () {
                (this.node_.value = null),
                  (this.node_.children = {}),
                  (this.node_.childCount = 0),
                  this.updateParents_();
              }),
              (t.prototype.hasChildren = function () {
                return this.node_.childCount > 0;
              }),
              (t.prototype.isEmpty = function () {
                return null === this.getValue() && !this.hasChildren();
              }),
              (t.prototype.forEachChild = function (e) {
                var n = this;
                F(this.node_.children, function (r, i) {
                  e(new t(r, n, i));
                });
              }),
              (t.prototype.forEachDescendant = function (t, e, n) {
                e && !n && t(this),
                  this.forEachChild(function (e) {
                    e.forEachDescendant(t, !0, n);
                  }),
                  e && n && t(this);
              }),
              (t.prototype.forEachAncestor = function (t, e) {
                for (var n = e ? this : this.parent(); null !== n; ) {
                  if (t(n)) return !0;
                  n = n.parent();
                }
                return !1;
              }),
              (t.prototype.forEachImmediateDescendantWithValue = function (t) {
                this.forEachChild(function (e) {
                  null !== e.getValue() ? t(e) : e.forEachImmediateDescendantWithValue(t);
                });
              }),
              (t.prototype.path = function () {
                return new U(
                  null === this.parent_ ? this.name_ : this.parent_.path() + '/' + this.name_,
                );
              }),
              (t.prototype.name = function () {
                return this.name_;
              }),
              (t.prototype.parent = function () {
                return this.parent_;
              }),
              (t.prototype.updateParents_ = function () {
                null !== this.parent_ && this.parent_.updateChild_(this.name_, this);
              }),
              (t.prototype.updateChild_ = function (t, e) {
                var n = e.isEmpty(),
                  r = a.contains(this.node_.children, t);
                n && r
                  ? (delete this.node_.children[t], this.node_.childCount--, this.updateParents_())
                  : n ||
                    r ||
                    ((this.node_.children[t] = e.node_),
                    this.node_.childCount++,
                    this.updateParents_());
              }),
              t
            );
          })();
        !(function (t) {
          (t[(t.RUN = 0)] = 'RUN'),
            (t[(t.SENT = 1)] = 'SENT'),
            (t[(t.COMPLETED = 2)] = 'COMPLETED'),
            (t[(t.SENT_NEEDS_ABORT = 3)] = 'SENT_NEEDS_ABORT'),
            (t[(t.NEEDS_ABORT = 4)] = 'NEEDS_ABORT');
        })(Xe || (Xe = {})),
          (je.MAX_TRANSACTION_RETRIES_ = 25),
          (je.prototype.transactionsInit_ = function () {
            this.transactionQueueTree_ = new Je();
          }),
          (je.prototype.startTransaction = function (t, e, n, r) {
            this.log_('transaction on ' + t);
            var i = function () {},
              o = new Ge(this, t);
            o.on('value', i);
            var s = {
                path: t,
                update: e,
                onComplete: n,
                status: null,
                order: y(),
                applyLocally: r,
                retryCount: 0,
                unwatcher: function () {
                  o.off('value', i);
                },
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null,
              },
              h = this.getLatestState_(t);
            s.currentInputSnapshot = h;
            var u = s.update(h.val());
            if (void 0 === u) {
              if (
                (s.unwatcher(),
                (s.currentOutputSnapshotRaw = null),
                (s.currentOutputSnapshotResolved = null),
                s.onComplete)
              ) {
                var l = new Bt(s.currentInputSnapshot, new Ge(this, s.path), St);
                s.onComplete(null, !1, l);
              }
            } else {
              tt('transaction failed: Data returned ', u, s.path), (s.status = Xe.RUN);
              var c = this.transactionQueueTree_.subTree(t),
                p = c.getValue() || [];
              p.push(s), c.setValue(p);
              var d = void 0;
              if ('object' === typeof u && null !== u && a.contains(u, '.priority'))
                (d = a.safeGet(u, '.priority')),
                  a.assert(
                    J(d),
                    'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.',
                  );
              else
                d = (this.serverSyncTree_.calcCompleteEventCache(t) || Mt.EMPTY_NODE)
                  .getPriority()
                  .val();
              d = d;
              var f = this.generateServerValues(),
                _ = Qt(u, d),
                v = Jt(_, f);
              (s.currentOutputSnapshotRaw = _),
                (s.currentOutputSnapshotResolved = v),
                (s.currentWriteId = this.getNextWriteId_());
              var g = this.serverSyncTree_.applyUserOverwrite(
                t,
                v,
                s.currentWriteId,
                s.applyLocally,
              );
              this.eventQueue_.raiseEventsForChangedPath(t, g), this.sendReadyTransactions_();
            }
          }),
          (je.prototype.getLatestState_ = function (t, e) {
            return this.serverSyncTree_.calcCompleteEventCache(t, e) || Mt.EMPTY_NODE;
          }),
          (je.prototype.sendReadyTransactions_ = function (t) {
            var e = this;
            if (
              (void 0 === t && (t = this.transactionQueueTree_),
              t || this.pruneCompletedTransactionsBelowNode_(t),
              null !== t.getValue())
            ) {
              var n = this.buildTransactionQueue_(t);
              a.assert(n.length > 0, 'Sending zero length transaction queue'),
                n.every(function (t) {
                  return t.status === Xe.RUN;
                }) && this.sendTransactionQueue_(t.path(), n);
            } else
              t.hasChildren() &&
                t.forEachChild(function (t) {
                  e.sendReadyTransactions_(t);
                });
          }),
          (je.prototype.sendTransactionQueue_ = function (t, e) {
            for (
              var n = this,
                r = e.map(function (t) {
                  return t.currentWriteId;
                }),
                i = this.getLatestState_(t, r),
                o = i,
                s = i.hash(),
                h = 0;
              h < e.length;
              h++
            ) {
              var u = e[h];
              a.assert(
                u.status === Xe.RUN,
                'tryToSendTransactionQueue_: items in queue should all be run.',
              ),
                (u.status = Xe.SENT),
                u.retryCount++;
              var l = U.relativePath(t, u.path);
              o = o.updateChild(l, u.currentOutputSnapshotRaw);
            }
            var c = o.val(!0),
              p = t;
            this.server_.put(
              p.toString(),
              c,
              function (r) {
                n.log_('transaction put response', { path: p.toString(), status: r });
                var i = [];
                if ('ok' === r) {
                  for (var o = [], s = 0; s < e.length; s++) {
                    if (
                      ((e[s].status = Xe.COMPLETED),
                      (i = i.concat(n.serverSyncTree_.ackUserWrite(e[s].currentWriteId))),
                      e[s].onComplete)
                    ) {
                      var a = e[s].currentOutputSnapshotResolved,
                        h = new Ge(n, e[s].path),
                        u = new Bt(a, h, St);
                      o.push(e[s].onComplete.bind(null, null, !0, u));
                    }
                    e[s].unwatcher();
                  }
                  n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(t)),
                    n.sendReadyTransactions_(),
                    n.eventQueue_.raiseEventsForChangedPath(t, i);
                  for (s = 0; s < o.length; s++) Q(o[s]);
                } else {
                  if ('datastale' === r)
                    for (s = 0; s < e.length; s++)
                      e[s].status === Xe.SENT_NEEDS_ABORT
                        ? (e[s].status = Xe.NEEDS_ABORT)
                        : (e[s].status = Xe.RUN);
                  else {
                    I('transaction at ' + p.toString() + ' failed: ' + r);
                    for (s = 0; s < e.length; s++)
                      (e[s].status = Xe.NEEDS_ABORT), (e[s].abortReason = r);
                  }
                  n.rerunTransactions_(t);
                }
              },
              s,
            );
          }),
          (je.prototype.rerunTransactions_ = function (t) {
            var e = this.getAncestorTransactionNode_(t),
              n = e.path(),
              r = this.buildTransactionQueue_(e);
            return this.rerunTransactionQueue_(r, n), n;
          }),
          (je.prototype.rerunTransactionQueue_ = function (t, e) {
            if (0 !== t.length) {
              for (
                var n,
                  r = [],
                  i = [],
                  o = t
                    .filter(function (t) {
                      return t.status === Xe.RUN;
                    })
                    .map(function (t) {
                      return t.currentWriteId;
                    }),
                  s = 0;
                s < t.length;
                s++
              ) {
                var h = t[s],
                  u = U.relativePath(e, h.path),
                  l = !1,
                  c = void 0;
                if (
                  (a.assert(
                    null !== u,
                    'rerunTransactionsUnderNode_: relativePath should not be null.',
                  ),
                  h.status === Xe.NEEDS_ABORT)
                )
                  (l = !0),
                    (c = h.abortReason),
                    (i = i.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0)));
                else if (h.status === Xe.RUN)
                  if (h.retryCount >= je.MAX_TRANSACTION_RETRIES_)
                    (l = !0),
                      (c = 'maxretry'),
                      (i = i.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0)));
                  else {
                    var p = this.getLatestState_(h.path, o);
                    h.currentInputSnapshot = p;
                    var d = t[s].update(p.val());
                    if (void 0 !== d) {
                      tt('transaction failed: Data returned ', d, h.path);
                      var f = Qt(d);
                      ('object' === typeof d && null != d && a.contains(d, '.priority')) ||
                        (f = f.updatePriority(p.getPriority()));
                      var _ = h.currentWriteId,
                        y = this.generateServerValues(),
                        v = Jt(f, y);
                      (h.currentOutputSnapshotRaw = f),
                        (h.currentOutputSnapshotResolved = v),
                        (h.currentWriteId = this.getNextWriteId_()),
                        o.splice(o.indexOf(_), 1),
                        (i = (i = i.concat(
                          this.serverSyncTree_.applyUserOverwrite(
                            h.path,
                            v,
                            h.currentWriteId,
                            h.applyLocally,
                          ),
                        )).concat(this.serverSyncTree_.ackUserWrite(_, !0)));
                    } else
                      (l = !0),
                        (c = 'nodata'),
                        (i = i.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0)));
                  }
                if (
                  (this.eventQueue_.raiseEventsForChangedPath(e, i),
                  (i = []),
                  l &&
                    ((t[s].status = Xe.COMPLETED),
                    (n = t[s].unwatcher),
                    setTimeout(n, Math.floor(0)),
                    t[s].onComplete))
                )
                  if ('nodata' === c) {
                    var g = new Ge(this, t[s].path),
                      m = t[s].currentInputSnapshot,
                      C = new Bt(m, g, St);
                    r.push(t[s].onComplete.bind(null, null, !1, C));
                  } else r.push(t[s].onComplete.bind(null, new Error(c), !1, null));
              }
              this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
              for (s = 0; s < r.length; s++) Q(r[s]);
              this.sendReadyTransactions_();
            }
          }),
          (je.prototype.getAncestorTransactionNode_ = function (t) {
            var e,
              n = this.transactionQueueTree_;
            for (e = t.getFront(); null !== e && null === n.getValue(); )
              (n = n.subTree(e)), (e = (t = t.popFront()).getFront());
            return n;
          }),
          (je.prototype.buildTransactionQueue_ = function (t) {
            var e = [];
            return (
              this.aggregateTransactionQueuesForNode_(t, e),
              e.sort(function (t, e) {
                return t.order - e.order;
              }),
              e
            );
          }),
          (je.prototype.aggregateTransactionQueuesForNode_ = function (t, e) {
            var n = this,
              r = t.getValue();
            if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i]);
            t.forEachChild(function (t) {
              n.aggregateTransactionQueuesForNode_(t, e);
            });
          }),
          (je.prototype.pruneCompletedTransactionsBelowNode_ = function (t) {
            var e = this,
              n = t.getValue();
            if (n) {
              for (var r = 0, i = 0; i < n.length; i++)
                n[i].status !== Xe.COMPLETED && ((n[r] = n[i]), r++);
              (n.length = r), t.setValue(n.length > 0 ? n : null);
            }
            t.forEachChild(function (t) {
              e.pruneCompletedTransactionsBelowNode_(t);
            });
          }),
          (je.prototype.abortTransactions_ = function (t) {
            var e = this,
              n = this.getAncestorTransactionNode_(t).path(),
              r = this.transactionQueueTree_.subTree(t);
            return (
              r.forEachAncestor(function (t) {
                e.abortTransactionsOnNode_(t);
              }),
              this.abortTransactionsOnNode_(r),
              r.forEachDescendant(function (t) {
                e.abortTransactionsOnNode_(t);
              }),
              n
            );
          }),
          (je.prototype.abortTransactionsOnNode_ = function (t) {
            var e = t.getValue();
            if (null !== e) {
              for (var n = [], r = [], i = -1, o = 0; o < e.length; o++)
                if (e[o].status === Xe.SENT_NEEDS_ABORT);
                else if (e[o].status === Xe.SENT)
                  a.assert(i === o - 1, 'All SENT items should be at beginning of queue.'),
                    (i = o),
                    (e[o].status = Xe.SENT_NEEDS_ABORT),
                    (e[o].abortReason = 'set');
                else if (
                  (a.assert(e[o].status === Xe.RUN, 'Unexpected transaction status in abort'),
                  e[o].unwatcher(),
                  (r = r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0))),
                  e[o].onComplete)
                ) {
                  n.push(e[o].onComplete.bind(null, new Error('set'), !1, null));
                }
              -1 === i ? t.setValue(null) : (e.length = i + 1),
                this.eventQueue_.raiseEventsForChangedPath(t.path(), r);
              for (o = 0; o < n.length; o++) Q(n[o]);
            }
          });
        var Ze,
          tn = (function () {
            function t() {
              (this.repos_ = {}), (this.useRestClient_ = !1);
            }
            return (
              (t.getInstance = function () {
                return Ze || (Ze = new t()), Ze;
              }),
              (t.prototype.interrupt = function () {
                var t, e, n, r;
                try {
                  for (
                    var i = s.__values(Object.keys(this.repos_)), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    try {
                      for (
                        var h = ((n = void 0), s.__values(Object.keys(this.repos_[a]))),
                          u = h.next();
                        !u.done;
                        u = h.next()
                      ) {
                        var l = u.value;
                        this.repos_[a][l].interrupt();
                      }
                    } catch (c) {
                      n = { error: c };
                    } finally {
                      try {
                        u && !u.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (p) {
                  t = { error: p };
                } finally {
                  try {
                    o && !o.done && (e = i.return) && e.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.resume = function () {
                var t, e, n, r;
                try {
                  for (
                    var i = s.__values(Object.keys(this.repos_)), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    try {
                      for (
                        var h = ((n = void 0), s.__values(Object.keys(this.repos_[a]))),
                          u = h.next();
                        !u.done;
                        u = h.next()
                      ) {
                        var l = u.value;
                        this.repos_[a][l].resume();
                      }
                    } catch (c) {
                      n = { error: c };
                    } finally {
                      try {
                        u && !u.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (p) {
                  t = { error: p };
                } finally {
                  try {
                    o && !o.done && (e = i.return) && e.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.databaseFromApp = function (t, e, n) {
                var i = n || t.options.databaseURL;
                void 0 === i &&
                  S(
                    "Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().",
                  );
                var o = K(i),
                  s = o.repoInfo,
                  a = void 0;
                return (
                  'undefined' !== typeof r &&
                    (a = Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/baugit',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      REACT_APP_STORAGE_BUCKET: 'baudit-dev.appspot.com',
                      REACT_APP_PROJECT_ID: 'baudit-dev',
                      REACT_APP_AUTH_DOMAIN: 'baudit-dev.firebaseapp.com',
                      REACT_APP_API_KEY: 'AIzaSyDssZ7gs5HKvpAuoRbO_l2KotUMCeI9Sbo',
                      REACT_APP_MESSAGING_SENDER_ID: '588249539701',
                      REACT_APP_DATABASE_URL: 'https://baudit-dev.firebaseio.com',
                      REACT_APP_APPID: '1:588249539701:web:aaf4fb4d2f397fb0e6043c',
                    }).FIREBASE_DATABASE_EMULATOR_HOST),
                  a && ((i = 'http://' + a + '?ns=' + s.namespace), (s = (o = K(i)).repoInfo)),
                  ht('Invalid Firebase Database URL', 1, o),
                  o.path.isEmpty() ||
                    S(
                      'Database URL must point to the root of a Firebase Database (not including a child path).',
                    ),
                  this.createRepo(s, t, e).database
                );
              }),
              (t.prototype.deleteRepo = function (t) {
                var e = a.safeGet(this.repos_, t.app.name);
                (e && a.safeGet(e, t.repoInfo_.toURLString()) === t) ||
                  S('Database ' + t.app.name + '(' + t.repoInfo_ + ') has already been deleted.'),
                  t.interrupt(),
                  delete e[t.repoInfo_.toURLString()];
              }),
              (t.prototype.createRepo = function (t, e, n) {
                var r = a.safeGet(this.repos_, e.name);
                r || ((r = {}), (this.repos_[e.name] = r));
                var i = a.safeGet(r, t.toURLString());
                return (
                  i &&
                    S(
                      'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.',
                    ),
                  (i = new je(t, this.useRestClient_, e, n)),
                  (r[t.toURLString()] = i),
                  i
                );
              }),
              (t.prototype.forceRestClient = function (t) {
                this.useRestClient_ = t;
              }),
              t
            );
          })(),
          en = (function () {
            function t(t) {
              (this.repo_ = t),
                t instanceof je ||
                  S("Don't call new Database() directly - please use firebase.database()."),
                (this.root_ = new Ge(t, U.Empty)),
                (this.INTERNAL = new nn(this));
            }
            return (
              Object.defineProperty(t.prototype, 'app', {
                get: function () {
                  return this.repo_.app;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.ref = function (t) {
                return (
                  this.checkDeleted_('ref'),
                  a.validateArgCount('database.ref', 0, 1, arguments.length),
                  t instanceof Ge
                    ? this.refFromURL(t.toString())
                    : void 0 !== t
                    ? this.root_.child(t)
                    : this.root_
                );
              }),
              (t.prototype.refFromURL = function (t) {
                var e = 'database.refFromURL';
                this.checkDeleted_(e), a.validateArgCount(e, 1, 1, arguments.length);
                var n = K(t);
                ht(e, 1, n);
                var r = n.repoInfo;
                return (
                  r.host !== this.repo_.repoInfo_.host &&
                    S(
                      e +
                        ': Host name does not match the current database: (found ' +
                        r.host +
                        ' but expected ' +
                        this.repo_.repoInfo_.host +
                        ')',
                    ),
                  this.ref(n.path.toString())
                );
              }),
              (t.prototype.checkDeleted_ = function (t) {
                null === this.repo_ && S('Cannot call ' + t + ' on a deleted database.');
              }),
              (t.prototype.goOffline = function () {
                a.validateArgCount('database.goOffline', 0, 0, arguments.length),
                  this.checkDeleted_('goOffline'),
                  this.repo_.interrupt();
              }),
              (t.prototype.goOnline = function () {
                a.validateArgCount('database.goOnline', 0, 0, arguments.length),
                  this.checkDeleted_('goOnline'),
                  this.repo_.resume();
              }),
              (t.ServerValue = { TIMESTAMP: { '.sv': 'timestamp' } }),
              t
            );
          })(),
          nn = (function () {
            function t(t) {
              this.database = t;
            }
            return (
              (t.prototype.delete = function () {
                return s.__awaiter(this, void 0, void 0, function () {
                  return s.__generator(this, function (t) {
                    return (
                      this.database.checkDeleted_('delete'),
                      tn.getInstance().deleteRepo(this.database.repo_),
                      (this.database.repo_ = null),
                      (this.database.root_ = null),
                      (this.database.INTERNAL = null),
                      (this.database = null),
                      [2]
                    );
                  });
                });
              }),
              t
            );
          })(),
          rn = Object.freeze({
            __proto__: null,
            forceLongPolling: function () {
              Qe.forceDisallow(), Fe.forceAllow();
            },
            forceWebSockets: function () {
              Fe.forceDisallow();
            },
            isWebSocketsAvailable: function () {
              return Qe.isAvailable();
            },
            setSecurityDebugCallback: function (t, e) {
              t.repo.persistentConnection_.securityDebugCallback_ = e;
            },
            stats: function (t, e) {
              t.repo.stats(e);
            },
            statsIncrementCounter: function (t, e) {
              t.repo.statsIncrementCounter(e);
            },
            dataUpdateCount: function (t) {
              return t.repo.dataUpdateCount;
            },
            interceptServerData: function (t, e) {
              return t.repo.interceptServerData_(e);
            },
          }),
          on = He;
        (He.prototype.simpleListen = function (t, e) {
          this.sendRequest('q', { p: t }, e);
        }),
          (He.prototype.echo = function (t, e) {
            this.sendRequest('echo', { d: t }, e);
          });
        var sn = Ue,
          an = H,
          hn = Object.freeze({
            __proto__: null,
            DataConnection: on,
            RealTimeConnection: sn,
            hijackHash: function (t) {
              var e = He.prototype.put;
              return (
                (He.prototype.put = function (n, r, i, o) {
                  void 0 !== o && (o = t()), e.call(this, n, r, i, o);
                }),
                function () {
                  He.prototype.put = e;
                }
              );
            },
            ConnectionTarget: an,
            queryIdentifier: function (t) {
              return t.queryIdentifier();
            },
            forceRestClient: function (t) {
              tn.getInstance().forceRestClient(t);
            },
          }),
          un = en.ServerValue;
        function ln(e) {
          !(function (t) {
            Me = t;
          })(e.SDK_VERSION);
          var n = e.INTERNAL.registerComponent(
            new u.Component(
              'database',
              function (t, e) {
                var n = t.getProvider('app').getImmediate(),
                  r = t.getProvider('auth-internal');
                return tn.getInstance().databaseFromApp(n, r, e);
              },
              'PUBLIC',
            )
              .setServiceProps({
                Reference: Ge,
                Query: Gt,
                Database: en,
                DataSnapshot: Bt,
                enableLogging: E,
                INTERNAL: rn,
                ServerValue: un,
                TEST_ACCESS: hn,
              })
              .setMultipleInstances(!0),
          );
          e.registerVersion('@firebase/database', '0.5.24'), a.isNodeSdk() && (t.exports = n);
        }
        ln(o),
          (e.DataSnapshot = Bt),
          (e.Database = en),
          (e.OnDisconnect = lt),
          (e.Query = Gt),
          (e.Reference = Ge),
          (e.ServerValue = un),
          (e.enableLogging = E),
          (e.registerDatabase = ln);
      }.call(this, n(34)));
    },
    62: function (t, e, n) {
      'use strict';
      n.r(e);
      n(58);
    },
  },
]);
//# sourceMappingURL=4.cd19bf73.chunk.js.map
function Ha(Kc) {
  throw Kc;
}

var bb = void 0;
var Q = !0;
var S = null;
var U = !1;

module.exports = function(Kc, ie) {
  function md(a, c, b) {
    if (c < a && a < c + b) {
      c += b;
      for (a += b; b--;) {
        a--, c--, j[a] = j[c]
      }
    } else {
      oa(a, c, b)
    }
  }

  function je(a) {
    eval.call(S, a)
  }

  function Rb(a) {
    x.print(a + ":\n" + Error().stack);
    Ha("Assertion: " + a)
  }

  function Ca(a, c) {
    a || Rb("Assertion failed: " + c)
  }

  function ke(a, c, b, d) {
    function f(a, e) {
      if ("string" == e) {
        if (a === S || a === bb || 0 === a) {
          return 0
        }
        i || (i = H.la());
        var b = H.ka(a.length + 1);
        le(a, b);
        return b
      }
      return "array" == e ? (i || (i = H.la()), b = H.ka(a.length), me(a, b), b) : a
    }
    var i = 0;
    try {
      var h = eval("_" + a)
    } catch (k) {
      try {
        h = Of.Module["_" + a]
      } catch (m) {}
    }
    Ca(h, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
    var n = 0,
      a = d ? d.map((function(a) {
        return f(a, b[n++])
      })) : [],
      c = (function(a, e) {
        if ("string" == e) {
          return Sb(a)
        }
        Ca("array" != e);
        return a
      })(h.apply(S, a), c);
    i && H.Na(i);
    return c
  }

  function ne(e, c, b) {
    b = b || "i8";
    "*" === b.charAt(b.length - 1) && (b = "i32");
    switch (b) {
      case "i1":
        j[e] = c;
        break;
      case "i8":
        j[e] = c;
        break;
      case "i16":
        O[e >> 1] = c;
        break;
      case "i32":
        a[e >> 2] = c;
        break;
      case "i64":
        Tb = [c >>> 0, Math.min(Math.floor(c / 4294967296), 4294967295)];
        a[e >> 2] = Tb[0];
        a[e + 4 >> 2] = Tb[1];
        break;
      case "float":
        Ub[e >> 2] = c;
        break;
      case "double":
        pa[0] = c;
        a[e >> 2] = ca[0];
        a[e + 4 >> 2] = ca[1];
        break;
      default:
        Rb("invalid type for setValue: " + b)
    }
  }

  function s(a, c, b) {
    var d, f;
    "number" === typeof a ? (d = Q, f = a) : (d = U, f = a.length);
    var i = "string" === typeof c ? c : S,
      b = [ia, H.ka, H.Oa][b === bb ? l : b](Math.max(f, i ? 1 : c.length));
    if (d) {
      return Da(b, f), b
    }
    d = 0;
    for (var h; d < f;) {
      var k = a[d];
      "function" === typeof k && (k = H.Lg(k));
      h = i || c[d];
      0 === h ? d++ : ("i64" == h && (h = "i32"), ne(b + d, k, h), d += H.da(h))
    }
    return b
  }

  function Sb(a, c) {
    for (var b = new H.S, d = "undefined" == typeof c, f = "", i = 0, h;;) {
      h = Ia[a + i];
      if (d && 0 == h) {
        break
      }
      f += b.La(h);
      i += 1;
      if (!d && i == c) {
        break
      }
    }
    return f
  }

  function Lc(a) {
    for (; 0 < a.length;) {
      var c = a.shift(),
        b = c.ba;
      "number" === typeof b && (b = wb[b]);
      b(c.ye === bb ? S : c.ye)
    }
  }

  function ra(a) {
    for (var c = a; j[c++];) {}
    return c - a - 1
  }

  function Aa(a, c, b) {
    a = (new H.S).Ye(a);
    b && (a.length = b);
    c || a.push(0);
    return a
  }

  function le(a, c, b) {
    a = Aa(a, b);
    for (b = 0; b < a.length;) {
      j[c + b] = a[b], b += 1
    }
  }

  function me(a, c) {
    for (var b = 0; b < a.length; b++) {
      j[c + b] = a[b]
    }
  }

  function nd(a, c) {
    return 0 <= a ? a : 32 >= c ? 2 * Math.abs(1 << c - 1) + a : Math.pow(2, c) + a
  }

  function oe(a, c) {
    if (0 >= a) {
      return a
    }
    var b = 32 >= c ? Math.abs(1 << c - 1) : Math.pow(2, c - 1);
    if (a >= b && (32 >= c || a > b)) {
      a = -2 * b + a
    }
    return a
  }

  function od(a) {
    rb++;
    x.monitorRunDependencies && x.monitorRunDependencies(rb);
    a ? (Ca(!hc[a]), hc[a] = 1, ic === S && "undefined" !== typeof setInterval && (ic = setInterval((function() {
      var a = U,
        e;
      for (e in hc) {
        a || (a = Q, x.m("still waiting on run dependencies:")), x.m("dependency: " + e)
      }
      a && x.m("(end of list)")
    }), 6e3))) : x.m("warning: run dependency added without ID")
  }

  function Mc(a) {
    rb--;
    x.monitorRunDependencies && x.monitorRunDependencies(rb);
    a ? (Ca(hc[a]), delete hc[a]) : x.m("warning: run dependency removed without ID");
    0 == rb && (ic !== S && (clearInterval(ic), ic = S), pe || Nc())
  }

  function Cb(e) {
    for (var c = a[e >> 2], b = c;;) {
      var d = b + 1 | 0;
      a[e >> 2] = d;
      if (0 == j[b] << 24 >> 24) {
        break
      }
      b = d
    }
    return c
  }

  function qe(e) {
    e >>= 2;
    a[e] = 0;
    a[e + 1] = 0;
    a[e + 2] = 0;
    a[e + 3] = 0;
    a[e + 4] = 0
  }

  function jc() {
    var e = Ja(20);
    a[e + 4 >> 2] = 61;
    a[e + 16 >> 2] = Ja(244);
    return e
  }

  function sa(e, c) {
    var b, d = e + 4 | 0,
      f = a[d >> 2];
    b = (e + 16 | 0) >> 2;
    var i = Oc(f, a[b], c);
    if (0 == (i | 0)) {
      var i = e | 0,
        h = a[i >> 2] + 1 | 0;
      a[i >> 2] = h;
      10 < Math.floor((h >>> 0) / (f >>> 0)) >>> 0 && re(e);
      f = ra(c);
      i = Ja(f + 33 | 0);
      Ta(i + 28 | 0, c);
      d = (Pc(c) >>> 0) % (a[d >> 2] >>> 0);
      a[i + 24 >> 2] = a[a[b] + (d << 2) >> 2];
      a[a[b] + (d << 2) >> 2] = i;
      b = e + 12 | 0;
      a[b >> 2] = f + a[b >> 2] + 1 | 0
    }
    return b = i
  }

  function gb(a, c) {
    var b = 0 == (c | 0) ? 0 : 0 == j[c] << 24 >> 24 ? 0 : xa(c);
    return Db(a, b)
  }

  function Y(e, c) {
    mb(e);
    var b = e | 0;
    a[b >> 2] |= 1;
    b = e + 4 | 0;
    pa[0] = c;
    a[b >> 2] = ca[0];
    a[b + 4 >> 2] = ca[1];
    Vb(e);
    return e
  }

  function Vb(e) {
    var c = r;
    r += 4;
    if (0 != (a[e >> 2] & 1024 | 0)) {
      var b = a[C + 80 >> 2];
      if ((b | 0) == (e | 0)) {
        e = la(e) & -1;
        Qc(e);
        var b = ea(a[C + 28 >> 2]),
          d = ra(b);
        do {
          if (0 < (e | 0)) {
            for (var f = 0, i = 0, h = 0;;) {
              var k = ea(a[z + 92 >> 2] + 20 * h | 0),
                m = ra(k);
              0 != (i | 0) && (oa(i + f | 0, b, d), f = f + d | 0);
              var n = f + m | 0,
                I = Ua(i, n + d | 0, c);
              oa(I + f | 0, k, m);
              h = h + 1 | 0;
              if ((h | 0) == (e | 0)) {
                break
              }
              f = n;
              i = I
            }
            0 == (I | 0) ? i = 0 : (j[I + n | 0] = 0, i = I)
          } else {
            i = 0
          }
        } while (0);
        Db(a[C + 52 >> 2], i);
        j[z + 112 | 0] = 1
      } else {
        (a[C + 52 >> 2] | 0) == (e | 0) ? j[z + 112 | 0] = 0 : (a[C + 24 >> 2] | 0) == (e | 0) ? pd(ea(e), C + 232 | 0) : (a[C + 36 >> 2] | 0) == (e | 0) ? pd(ea(e), C + 284 | 0) : (a[C + 84 >> 2] | 0) == (e | 0) ? (n = Eb(e) & 255, j[z + 108 | 0] = n) : (n = la(b) & -1, I = (e - a[z + 92 >> 2] | 0) / 20 & -1, Y(a[C + 80 >> 2], ((n | 0) > (I | 0) ? n : I + 1 | 0) | 0))
      }
    }
    r = c
  }

  function se(e) {
    var c = r;
    r += 4;
    do {
      if (0 == (kc(j[e] << 24 >> 24) | 0)) {
        var b = 0
      } else {
        var d = qd(e, 61);
        if (0 == (d | 0)) {
          b = 0
        } else {
          var b = xa(e),
            f = d - e | 0,
            d = f + (b + 1) | 0;
          j[b + f | 0] = 0;
          for (f = a[c >> 2] = d;;) {
            var i = te(c);
            j[f] = i;
            if (0 == i << 24 >> 24) {
              break
            }
            f = f + 1 | 0
          }
          ue(sa(a[z + 60 >> 2], b), d);
          Z(b);
          b = 1
        }
      }
    } while (0);
    r = c;
    return b
  }

  function rd(e) {
    var c;
    a[z + 100 >> 2] = e;
    a[C + 12 >> 2] = 1;
    var e = ya(1073271845),
      b = 16777216 == (e | 0);
    a: do {
      if (!b) {
        for (var d = e;;) {
          if (0 == (d & 49152 | 0)) {
            if (a[z + 44 >> 2] = z + 20 | 0, 0 == (d & 4194304 | 0)) {
              if (0 == (d & 8388608 | 0)) {
                if (0 == (d & 2097152 | 0)) {
                  Fb(), 0 == (d & 1041761317 | 0) ? Ba() : (d = Ka(3328), a[d + 8 >> 2] = Ma(16830464), 0 == (a[C + 4 >> 2] & 4096 | 0) ? Ka(1024) : (Fb(), Ba()), a[d + 12 >> 2] = a[z + 24 >> 2])
                } else {
                  ya(134217728);
                  a[z + 100 >> 2] = a[z + 100 >> 2] + 1 | 0;
                  c = sa(a[z + 72 >> 2], a[C + 8 >> 2]);
                  var f = c + 4 | 0,
                    d = f;
                  a[f >> 2] = 0;
                  c >>= 2;
                  for (a[c] = 0; 0 != (ya(33554434) & 33554432 | 0);) {
                    var f = sa(a[z + 64 >> 2], a[C + 8 >> 2]),
                      i = a[c];
                    a[c] = i + 1 | 0;
                    a[f + 16 >> 2] = i;
                    if (0 != (ya(258) & 2 | 0)) {
                      break
                    }
                  }
                  a[z + 44 >> 2] = d;
                  Ba();
                  Rc(a[z + 64 >> 2])
                }
              } else {
                a[z + 44 >> 2] = z + 32 | 0, Ba()
              }
            } else {
              a[z + 44 >> 2] = z + 8 | 0, Ba()
            }
          }
          d = ya(1073271845);
          if (16777216 == (d | 0)) {
            break a
          }
        }
      }
    } while (0)
  }

  function sd(a, c, b) {
    var a = nb(a),
      d = j;
    if (0 > (c | 0)) {
      j[lc | 0] = 45;
      var c = -c | 0,
        f = lc + 1 | 0,
        i = 10
    } else {
      f = lc | 0, i = 11
    }
    var h = 0 == (i | 0);
    a: do {
      if (h) {
        var k = f
      } else {
        for (var m = c, n = f, I = i, p = 1e9, g = 0;;) {
          if (0 == (p | 0)) {
            k = n;
            break a
          }
          var R = Math.floor((m >>> 0) / (p >>> 0)),
            m = (m >>> 0) % (p >>> 0);
          if (0 != (R | g | 0) | 1 == (p | 0)) {
            I = I - 1 | 0;
            if (0 == (I | 0)) {
              k = n;
              break a
            }
            j[n] = R + 48 & 255;
            n = n + 1 | 0;
            g = g + 1 | 0
          }
          p = Math.floor((p >>> 0) / 10)
        }
      }
    } while (0);
    d[k] = 0;
    ue(sa(a, lc | 0), b)
  }

  function td(e, c) {
    var b, d, f = r;
    r += 36;
    var i = f + 4;
    d = i >> 2;
    var h = f + 8,
      k = f + 28;
    b = k >> 2;
    var m = f + 32;
    a[f >> 2] = 0;
    a[d] = 0;
    a[b] = g.xe | 0;
    a[m >> 2] = g.ya | 0;
    qe(h);
    var n = mc(241);
    a[z + 104 >> 2] = n;
    n = jc();
    a[z + 60 >> 2] = n;
    n = jc();
    a[z + 64 >> 2] = n;
    n = jc();
    a[z + 68 >> 2] = n;
    n = jc();
    a[z + 72 >> 2] = n;
    for (var n = 0, I = g.ya | 0;;) {
      var p = sa(a[z + 60 >> 2], Cb(k)),
        T = p;
      a[C + (n << 2) + 16 >> 2] = T; - 1 == j[I] << 24 >> 24 ? Y(T, 0) : gb(T, Cb(m));
      I = a[b];
      T = j[I];
      42 == T << 24 >> 24 ? (a[p >> 2] |= 1024, p = I + 1 | 0, a[b] = p, p = j[p]) : p = T;
      if (0 == p << 24 >> 24) {
        break
      }
      n = n + 1 | 0;
      I = a[m >> 2]
    }
    Vb(a[C + 24 >> 2]);
    Vb(a[C + 36 >> 2]);
    b = a[Lb >> 2];
    a[sa(a[z + 68 >> 2], g.Zb | 0) >> 2] = b;
    b = a[ob >> 2];
    a[sa(a[z + 68 >> 2], g.zc | 0) >> 2] = b;
    b = a[Va >> 2];
    a[sa(a[z + 68 >> 2], g.Yc | 0) >> 2] = b;
    a: {
      if (0 == (Oa(g.W | 0, g.W | 0, Pa) | 0)) {
        for (b = 1; 0 != (a[c + (b << 2) >> 2] | 0);) {
          b = b + 1 | 0
        }
        k = f | 0;
        m = i | 0;
        for (n = 0;;) {
          I = b;
          T = c;
          p = r;
          r += 20;
          var R = p >> 2;
          a[R] = a[nc >> 2];
          a[R + 1] = a[Sc >> 2];
          a[R + 2] = a[ud >> 2];
          a[R + 3] = a[vd >> 2];
          a[R + 4] = a[wd >> 2];
          I = ve(I, T, p);
          T = p >> 2;
          a[nc >> 2] = a[T];
          a[Sc >> 2] = a[T + 1];
          a[ud >> 2] = a[T + 2];
          a[vd >> 2] = a[T + 3];
          a[wd >> 2] = a[T + 4];
          r = p;
          p = I;
          if (-1 == (p | 0)) {
            b = n;
            break a
          }
          70 == (p | 0) ? n ^= 1 : 118 == (p | 0) ? (we(k, a[nc >> 2]), n ^= 2) : 102 == (p | 0) ? (we(m, a[nc >> 2]), n ^= 4) : 87 == (p | 0) ? n ^= 8 : xe(g.Hb | 0)
        }
      } else {
        xe(g.Nd | 0)
      }
      b = S
    }
    n = a[Sc >> 2];
    k = (n << 2) + c | 0;
    m = e - n | 0;
    for (0 == (b & 1 | 0) ? __label__ = 12 : gb(a[C + 24 >> 2], E); 0 != (a[f >> 2] | 0);) {
      0 == (se(ye(f)) | 0) && ze()
    }
    if (0 == (a[d] | 0)) {
      if ((n | 0) == (e | 0)) {
        ze()
      } else {
        a[z + 76 >> 2] = g.jb | 0;
        rd(a[k >> 2]);
        var v = m,
          u = (n + 1 << 2) + c | 0
      }
    } else {
      for (;;) {
        u = ye(i);
        a[z + 76 >> 2] = u;
        u = Ae(u);
        f = 1;
        for (v = 0;;) {
          var o = Tc(v, f + 4096 | 0);
          var v = u,
            t = Be(v, o + f | 0, 4094),
            v = B.a[v]; - 1 == t ? (v && (v.error = Q), v = 0) : (4094 > t && (v.v = Q), v = Math.floor(t / 1));
          t = v + f | 0;
          if (0 >= (v | 0)) {
            break
          }
          f = t;
          v = o
        }
        j[o + t | 0] = 0;
        xd(u);
        rd(o + 1 | 0);
        Z(o);
        if (0 == (a[d] | 0)) {
          break
        }
      }
      v = m + 1 | 0;
      u = k
    }
    0 != (b & 8 | 0) && Ce((J = r, r += 1, r = r + 3 >> 2 << 2, a[J >> 2] = 0, J));
    Y(a[C + 60 >> 2], v | 0);
    sd(a[C + 64 >> 2], 0, g.Fb | 0);
    d = a[u >> 2];
    i = 0 == (d | 0);
    a: do {
      if (!i) {
        o = 0;
        t = u;
        for (f = d;;) {
          if (o = o + 1 | 0, t = t + 4 | 0, sd(a[C + 64 >> 2], o, f), f = a[t >> 2], 0 == (f | 0)) {
            break a
          }
        }
      }
    } while (0);
    ta(a[z + 8 >> 2], h);
    if (0 != (a[z + 20 >> 2] | 0) | 0 != (a[z + 32 >> 2] | 0)) {
      d = a[z + 56 >> 2];
      0 == (d | 0) ? (d = yd(), a[z + 56 >> 2] = d) : __label__ = 31;
      for (;;) {
        if (0 == (d | 0)) {
          zd(0)
        } else {
          j[z + 111 | 0] = 0;
          for (Y(a[C + 72 >> 2], 0);;) {
            var y = Ad(a[z + 56 >> 2], a[C + 52 >> 2]);
            if (0 >= (y | 0)) {
              break
            }
            j[z + 110 | 0] = 0;
            oc(a[C + 76 >> 2]);
            oc(a[C + 72 >> 2]);
            ta(a[z + 20 >> 2], h);
            if (0 != j[z + 111 | 0] << 24 >> 24) {
              break
            }
          }
          0 > (y | 0) ? ua(Mb(a[P.c >> 2])) : (d = yd(), a[z + 56 >> 2] = d)
        }
      }
    } else {
      zd(0)
    }
  }

  function ta(e, c) {
    var b, d, f, i, h, k, m, n, I = r;
    r += 4;
    var p;
    n = I >> 2;
    var T = 0 == (e | 0);
    a: do {
      if (T) {
        var R = gb(c, 0)
      } else {
        var v = Wb(2),
          u = v + 20 | 0,
          o = e;
        m = o >> 2;
        for (var t = c;;) {
          var y, A, w, q, s, l, x;
          if (0 == (o | 0)) {
            var W = t
          } else {
            k = (o | 0) >> 2;
            var F = a[k],
              ga = F & 127;
            a[z + 80 >> 2] = a[m + 1];
            h = (o + 8 | 0) >> 2;
            var E = a[h];
            a[n] = E;
            var V = 0 == (F & 65536 | 0) ? q : ta(E, v),
              $ = 0 == (F & 131072 | 0) ? A : ta(a[m + 3], u),
              da = 0 == (F & 262144 | 0) ? w : ea(V),
              D = 0 == (F & 524288 | 0) ? y : ea($),
              M = 0 == (F & 1048576 | 0) ? x : la(V),
              B = F & 65280,
              ha = B >>> 8;
            b: do {
              if (13 == (ha | 0)) {
                var O = a[n];
                if (4864 == (a[O >> 2] & 65280 | 0)) {
                  do {
                    if (0 == (F & 2097152 | 0) && 0 == (pc(a[O + 8 >> 2]) | 0)) {
                      var ka = a[m + 3],
                        ma = t,
                        X = M,
                        G = l,
                        K = s,
                        H = V,
                        L = da,
                        N = $;
                      p = 174;
                      break b
                    }
                  } while (0);
                  a[k] |= 2097152;
                  0 != (pc(a[a[n] + 12 >> 2]) | 0) && (a[k] &= -2097153);
                  ka = a[m + 4]
                } else {
                  ka = a[(0 == (pc(O) | 0) ? o + 12 | 0 : o + 16 | 0) >> 2]
                }
                ma = t;
                X = M;
                G = l;
                K = s;
                H = V;
                L = da;
                N = $;
                p = 174
              } else {
                if (2 == (ha | 0)) {
                  ka = o, ma = t, X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                } else {
                  if (7 == (ha | 0)) {
                    ka = a[(0 == (Eb(V) | 0) ? o + 12 | 0 : o + 16 | 0) >> 2], ma = t, X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                  } else {
                    if (6 == (ha | 0)) {
                      De(V, nb($)), ka = o, ma = t, X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                    } else {
                      if (14 == (ha | 0)) {
                        var aa = a,
                          ca = V + 16 | 0,
                          ba = a[ca >> 2],
                          ia = ba + 4 | 0;
                        if (a[ia >> 2] >>> 0 < a[ba >> 2] >>> 0) {
                          gb(V, Cb(ia));
                          var fa = 1
                        } else {
                          var Ea = a[ba + 8 >> 2];
                          Z(ba);
                          a[ca >> 2] = Ea;
                          fa = 0
                        }
                        ka = aa[(0 == (fa | 0) ? o + 12 | 0 : o + 16 | 0) >> 2];
                        ma = t;
                        X = M;
                        G = l;
                        K = s;
                        H = V;
                        L = da;
                        N = $;
                        p = 174
                      } else {
                        if (4 == (ha | 0) || 5 == (ha | 0)) {
                          if (0 == (a[m + 3] | 0)) {
                            var ja = a[ob >> 2]
                          } else {
                            var na = sa(a[z + 68 >> 2], D);
                            i = na >> 2;
                            var pa = a[i];
                            if (0 != (pa | 0)) {
                              ja = pa
                            } else {
                              if (124 == (ga | 0)) {
                                var Bd = Ee();
                                a[i] = Bd;
                                0 == (Bd | 0) ? Uc(g.nc | 0, (J = r, r += 1, r = r + 3 >> 2 << 2, a[J >> 2] = 0, J)) : (j[na + 20 | 0] = 1, ja = Bd)
                              } else {
                                var oa;
                                var ya = D,
                                  Ka = r,
                                  za = Cd(ya, 119 == (ga | 0) ? g.Kb | 0 : g.qc | 0);
                                0 == (za | 0) ? (Uc(g.Lb | 0, (J = r, r += 4, a[J >> 2] = ya, J)), oa = S) : (r = Ka, oa = za);
                                ja = a[i] = oa
                              }
                            }
                          }
                          var va = a[n];
                          if (1024 == (B | 0)) {
                            var La = 0 == (va | 0);
                            c: do {
                              if (La) {
                                Xb(ea(a[C + 52 >> 2]), ja)
                              } else {
                                for (var Vc = va;;) {
                                  if (0 == (Vc | 0)) {
                                    break c
                                  }
                                  var Dd = ta(qc(I), v);
                                  0 == (a[Dd >> 2] & 1 | 0) ? Xb(ea(Dd), ja) : (Ed(a[z + 104 >> 2], 240, ea(a[C + 20 >> 2]), la(Dd), 1), Xb(a[z + 104 >> 2], ja));
                                  var Fe = a[n];
                                  if (0 == (Fe | 0)) {
                                    break c
                                  }
                                  Xb(ea(a[C + 28 >> 2]), ja);
                                  Vc = Fe
                                }
                              }
                            } while (0);
                            Xb(ea(a[C + 32 >> 2]), ja)
                          } else {
                            var Ge = Fd(va);
                            Xb(Ge, ja);
                            Z(Ge)
                          }
                          Yb(ja);
                          ka = o;
                          ma = t;
                          X = M;
                          G = l;
                          K = s;
                          H = V;
                          L = da;
                          N = $;
                          p = 174
                        } else {
                          if (1 == (ha | 0)) {
                            f = a[n] >> 2;
                            var rc = a[f] & 65280;
                            if (9984 == (rc | 0)) {
                              var Gd = a[f + 2]
                            } else {
                              6144 == (rc | 0) ? Gd = a[C + 136 >> 2] + 20 * a[f + 2] | 0 : ua(g.gb | 0)
                            } if (0 == (a[f + 3] | 0)) {
                              Rc(nb(Gd))
                            } else {
                              mb(V);
                              var Ca = ea(ta(a[a[n] + 12 >> 2], v));
                              He(nb(Gd), Ca)
                            }
                            ka = o;
                            ma = t;
                            X = M;
                            G = l;
                            K = s;
                            H = V;
                            L = da;
                            N = $;
                            p = 174
                          } else {
                            if (3 == (ha | 0)) {
                              a[z + 76 >> 2] = a[h], ka = o, ma = t, X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                            } else {
                              if (35 == (ha | 0)) {
                                Hd(t, V), ka = o, ma = t, X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                              } else {
                                if (12 == (ha | 0)) {
                                  j[z + 111 | 0] = 1, p = 58
                                } else {
                                  if (11 == (ha | 0)) {
                                    p = 58
                                  } else {
                                    if (40 == (ha | 0)) {
                                      p = 59
                                    } else {
                                      if (10 == (ha | 0)) {
                                        zd(M & -1)
                                      } else {
                                        if (39 == (ha | 0)) {
                                          var Ia = a[h];
                                          if ((Ia | 0) != (a[C + 80 >> 2] | 0)) {
                                            var Kb = Ia
                                          } else {
                                            Ie(), Kb = Ia
                                          }
                                          p = 64
                                        } else {
                                          if (24 == (ha | 0)) {
                                            Kb = a[C + 136 >> 2] + 20 * a[h] | 0, p = 64
                                          } else {
                                            if (27 == (ha | 0)) {
                                              var Qa = nb($);
                                              Y(t, 0 != (Oc(a[Qa + 4 >> 2], a[Qa + 16 >> 2], da) | 0) & 1 | 0);
                                              ka = o;
                                              ma = t;
                                              X = M;
                                              G = l;
                                              K = s;
                                              H = V;
                                              L = da;
                                              N = $;
                                              p = 174
                                            } else {
                                              if (33 == (ha | 0)) {
                                                a[n] = o;
                                                var Fa = ea(a[C + 52 >> 2]),
                                                  yb = o;
                                                p = 69
                                              } else {
                                                if (30 == (ha | 0)) {
                                                  var Zb = a[m + 3];
                                                  a[n] = Zb;
                                                  Fa = da;
                                                  yb = Zb;
                                                  p = 69
                                                } else {
                                                  if (31 == (ha | 0)) {
                                                    ka = o, ma = Hd(V, $), X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                                                  } else {
                                                    if (37 == (ha | 0)) {
                                                      var Aa = o + 12 | 0;
                                                      if (4608 == (a[a[Aa >> 2] >> 2] & 65280 | 0)) {
                                                        var qa = 0 == (Eb(V) | 0),
                                                          wa = a[Aa >> 2],
                                                          ka = o,
                                                          ma = ta(a[(qa ? wa + 12 | 0 : wa + 8 | 0) >> 2], t),
                                                          X = M,
                                                          G = l,
                                                          K = s,
                                                          H = V,
                                                          L = da,
                                                          N = $;
                                                        p = 174
                                                      } else {
                                                        ua(g.qa | 0)
                                                      }
                                                    } else {
                                                      if (25 == (ha | 0)) {
                                                        d = (o + 12 | 0) >> 2;
                                                        var Je = a[d];
                                                        if (0 != (a[Je + 4 >> 2] | 0)) {
                                                          for (var Id = Wb(a[Je >> 2] + 1 | 0), Ga = Id, $a = Id; 0 != (a[n] | 0);) {
                                                            var sc = ta(qc(I), v);
                                                            Hd($a, sc);
                                                            var tc = $a | 0;
                                                            a[tc >> 2] |= 8192;
                                                            a[$a + 16 >> 2] = sc;
                                                            var db = $a + 20 | 0;
                                                            if (((db - Ga | 0) / 20 & -1) >>> 0 >= a[a[d] >> 2] >>> 0) {
                                                              break
                                                            }
                                                            $a = db
                                                          }
                                                          var zb = a[C + 136 >> 2];
                                                          a[C + 136 >> 2] = Id;
                                                          var Pf = a[z + 76 >> 2],
                                                            Ja = ta(a[a[d] + 4 >> 2], t);
                                                          a[z + 76 >> 2] = Pf;
                                                          $b(a[C + 136 >> 2]);
                                                          a[C + 136 >> 2] = zb;
                                                          ka = o;
                                                          ma = Ja;
                                                          X = M;
                                                          G = l;
                                                          K = s;
                                                          H = V;
                                                          L = da;
                                                          N = $;
                                                          p = 174
                                                        } else {
                                                          ua(g.ib | 0)
                                                        }
                                                      } else {
                                                        if (26 == (ha | 0) || 32 == (ha | 0)) {
                                                          if (0 == (a[n] | 0)) {
                                                            var Ma = a[z + 56 >> 2];
                                                            if (0 != (Ma | 0)) {
                                                              var sb = Ma;
                                                              p = 90
                                                            } else {
                                                              var Na = yd(),
                                                                Ib = a[z + 56 >> 2] = Na;
                                                              p = 89
                                                            }
                                                          } else {
                                                            var Jd = sa(a[z + 68 >> 2], da),
                                                              tb = Jd;
                                                            b = Jd >> 2;
                                                            0 != (a[b] | 0) ? (Ib = tb, p = 89) : 8192 == (B | 0) ? (a[b] = Ee(), j[Jd + 20 | 0] = 1, Ib = tb, p = 89) : (a[b] = Cd(da, g.wa | 0), sb = tb, p = 90)
                                                          }
                                                          89 == p && (0 == (Ib | 0) ? p = 91 : (sb = Ib, p = 90));
                                                          do {
                                                            if (90 == p && 0 != (a[sb >> 2] | 0)) {
                                                              var hb = 0 == (a[m + 3] | 0) ? a[C + 52 >> 2] : $,
                                                                ib = Ad(sb, hb);
                                                              0 < (ib | 0) && 0 == (a[n] | 0) && (oc(a[C + 72 >> 2]), oc(a[C + 76 >> 2]));
                                                              Y(t, ib | 0);
                                                              ka = o;
                                                              ma = t;
                                                              X = M;
                                                              G = l;
                                                              K = s;
                                                              H = V;
                                                              L = da;
                                                              N = hb;
                                                              p = 174;
                                                              break b
                                                            }
                                                          } while (0);
                                                          Y(a[C + 68 >> 2], a[P.c >> 2] | 0);
                                                          Y(t, -1);
                                                          ka = o;
                                                          ma = t;
                                                          X = M;
                                                          G = l;
                                                          K = s;
                                                          H = V;
                                                          L = da;
                                                          N = $;
                                                          p = 174
                                                        } else {
                                                          if (22 == (ha | 0)) {
                                                            c: do {
                                                              if (0 == (ga | 0)) {
                                                                var Xa = M & -1 | 0,
                                                                  Ya = da
                                                              } else {
                                                                if (1 == (ga | 0)) {
                                                                  Xa = (Math.floor(2147483648 * Math.random()) | 0) / 2147483647, Ya = da
                                                                } else {
                                                                  if (2 == (ga | 0) || 3 == (ga | 0) || 4 == (ga | 0) || 5 == (ga | 0) || 6 == (ga | 0)) {
                                                                    ua(g.T | 0)
                                                                  } else {
                                                                    if (7 == (ga | 0)) {
                                                                      var jb = a[C + 140 >> 2] >>> 0,
                                                                        Qf = 0 == (a[n] | 0) ? Wc(0) : 0 <= M ? Math.floor(M) : Math.ceil(M);
                                                                      a[C + 140 >> 2] = Qf;
                                                                      Xa = jb;
                                                                      Ya = da
                                                                    } else {
                                                                      if (8 == (ga | 0)) {
                                                                        Xa = Wc(0) | 0, Ya = da
                                                                      } else {
                                                                        if (9 == (ga | 0)) {
                                                                          var cb = 0 == (a[n] | 0) ? ea(a[C + 52 >> 2]) : da,
                                                                            Xa = ra(cb) >>> 0,
                                                                            Ya = cb
                                                                        } else {
                                                                          if (10 == (ga | 0)) {
                                                                            Yb(0), Xa = 0
                                                                          } else {
                                                                            if (11 == (ga | 0)) {
                                                                              if (0 == (a[n] | 0)) {
                                                                                Yb(a[ob >> 2])
                                                                              } else {
                                                                                do {
                                                                                  if (0 != (da | 0) && 0 != j[da] << 24 >> 24) {
                                                                                    Yb(a[sa(a[z + 68 >> 2], da) >> 2]);
                                                                                    Xa = s;
                                                                                    Ya = da;
                                                                                    break c
                                                                                  }
                                                                                } while (0);
                                                                                Yb(0)
                                                                              }
                                                                              Xa = s
                                                                            } else {
                                                                              if (12 == (ga | 0)) {
                                                                                var Jb = a[z + 68 >> 2],
                                                                                  pb = Oc(a[Jb + 4 >> 2], a[Jb + 16 >> 2], da);
                                                                                if (0 == (pb | 0)) {
                                                                                  var xb = 0
                                                                                } else {
                                                                                  var Ba = a[pb >> 2],
                                                                                    Ra = 0 == (Ba | 0) ? 0 : 0 == j[pb + 20 | 0] << 24 >> 24 ? xd(Ba) : Ke();
                                                                                  Z(a[pb + 4 >> 2]);
                                                                                  He(a[z + 68 >> 2], da);
                                                                                  0 == (Ra | 0) ? xb = 0 : (Y(a[C + 68 >> 2], a[P.c >> 2] | 0), xb = Ra)
                                                                                }
                                                                                Xa = xb | 0
                                                                              } else {
                                                                                Xa = s
                                                                              }
                                                                            }
                                                                          }
                                                                          Ya = da
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            } while (0);
                                                            Y(t, Xa);
                                                            ka = o;
                                                            ma = t;
                                                            X = M;
                                                            G = l;
                                                            K = Xa;
                                                            H = V;
                                                            L = Ya;
                                                            N = $;
                                                            p = 174
                                                          } else {
                                                            if (17 == (ha | 0)) {
                                                              ka = o, ma = Le(o, t), X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                                                            } else {
                                                              if (36 == (ha | 0)) {
                                                                Db(t, Fd(a[n])), ka = o, ma = t, X = M, G = l, K = s, H = V, L = da, N = $, p = 174
                                                              } else {
                                                                if (38 == (ha | 0)) {
                                                                  var qb = la($);
                                                                  if (80 == (ga | 0)) {
                                                                    var ub = qb + 1,
                                                                      Gb = ub,
                                                                      Ab = ub;
                                                                    p = 131
                                                                  } else {
                                                                    if (112 == (ga | 0)) {
                                                                      Gb = qb + 1, Ab = qb, p = 131
                                                                    } else {
                                                                      if (77 == (ga | 0)) {
                                                                        var Ta = qb - 1,
                                                                          Ab = Gb = Ta;
                                                                        p = 131
                                                                      } else {
                                                                        if (109 == (ga | 0)) {
                                                                          Gb = qb - 1, Ab = qb, p = 131
                                                                        } else {
                                                                          var vb = 33 == (ga | 0) ? 0 == (Eb($) | 0) & 1 | 0 : 45 == (ga | 0) ? -qb : qb;
                                                                          p = 134
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  131 == p && (Y($, Gb), vb = Ab);
                                                                  Y(t, vb);
                                                                  ka = o;
                                                                  ma = t;
                                                                  X = M;
                                                                  G = l;
                                                                  K = s;
                                                                  H = V;
                                                                  L = da;
                                                                  N = $;
                                                                  p = 174
                                                                } else {
                                                                  if (23 == (ha | 0)) {
                                                                    var Hb = la($) & -1;
                                                                    0 == (Hb | 0) ? (ka = o, ma = a[C + 52 >> 2]) : (Ie(), (Hb | 0) > (a[z + 84 >> 2] | 0) && Qc(Hb), ka = o, ma = a[z + 92 >> 2] + 20 * (Hb - 1) | 0);
                                                                    X = M;
                                                                    G = l;
                                                                    K = s;
                                                                    H = V;
                                                                    L = da;
                                                                    N = $;
                                                                    p = 174
                                                                  } else {
                                                                    if (21 == (ha | 0) || 19 == (ha | 0)) {
                                                                      var kb = 4864 == (B | 0) ? ea(a[C + 48 >> 2]) : uc | 0;
                                                                      Db(t, Me((J = r, r += 12, a[J >> 2] = da, a[J + 4 >> 2] = kb, a[J + 8 >> 2] = D, J)));
                                                                      ka = o;
                                                                      ma = t;
                                                                      X = M;
                                                                      G = l;
                                                                      K = s;
                                                                      H = V;
                                                                      L = da;
                                                                      N = $;
                                                                      p = 174
                                                                    } else {
                                                                      if (28 == (ha | 0)) {
                                                                        var eb = 0 == (Eb(V) | 0) ? 0 : pc(a[m + 3]) | 0;
                                                                        Y(t, eb);
                                                                        ka = o;
                                                                        ma = t;
                                                                        X = M;
                                                                        G = l;
                                                                        K = s;
                                                                        H = V;
                                                                        L = da;
                                                                        N = $;
                                                                        p = 174
                                                                      } else {
                                                                        if (29 == (ha | 0)) {
                                                                          var ab = 0 == (Eb(V) | 0) ? pc(a[m + 3]) | 0 : 1;
                                                                          Y(t, ab);
                                                                          ka = o;
                                                                          ma = t;
                                                                          X = M;
                                                                          G = l;
                                                                          K = s;
                                                                          H = V;
                                                                          L = da;
                                                                          N = $;
                                                                          p = 174
                                                                        } else {
                                                                          if (16 == (ha | 0) || 34 == (ha | 0)) {
                                                                            var Bb = la($);
                                                                            if (43 == (ga | 0)) {
                                                                              var Da = M + Bb
                                                                            } else {
                                                                              45 == (ga | 0) ? Da = M - Bb : 42 == (ga | 0) ? Da = M * Bb : 47 == (ga | 0) ? 0 == Bb ? ua(g.pa | 0) : Da = M / Bb : 38 == (ga | 0) ? ua(g.T | 0) : 37 == (ga | 0) ? 0 == Bb ? ua(g.pa | 0) : Da = M - (M / Bb & -1 | 0) * Bb : Da = M
                                                                            }
                                                                            ka = o;
                                                                            ma = Y(4096 == (B | 0) ? t : V, Da);
                                                                            X = Da;
                                                                            G = l;
                                                                            K = s;
                                                                            H = V;
                                                                            L = da;
                                                                            N = $;
                                                                            p = 174
                                                                          } else {
                                                                            if (20 == (ha | 0)) {
                                                                              if (0 != (Xc(V) | 0)) {
                                                                                if (0 == (Xc($) | 0)) {
                                                                                  p = 164
                                                                                } else {
                                                                                  var xa = la(V) - la($);
                                                                                  p = 168
                                                                                }
                                                                              } else {
                                                                                p = 164
                                                                              } if (164 == p) {
                                                                                var Ua = ea(V),
                                                                                  Va = ea($),
                                                                                  xa = (0 == j[z + 108 | 0] << 24 >> 24 ? Oa(Ua, Va, Pa) : Ne(Ua, Va, Pa)) | 0
                                                                              }
                                                                              var Wa = F & 126,
                                                                                Za = 0 == (Wa | 0) ? 0 < xa & 1 : 2 == (Wa | 0) ? 0 <= xa & 1 : 4 == (Wa | 0) ? 0 == xa & 1 : l;
                                                                              Y(t, 0 == (Za | 0) & 1 ^ F & 1 | 0);
                                                                              ka = o;
                                                                              ma = t;
                                                                              X = M;
                                                                              G = Za;
                                                                              K = s;
                                                                              H = V;
                                                                              L = da;
                                                                              N = $;
                                                                              p = 174
                                                                            } else {
                                                                              ua(g.qa | 0)
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } while (0);
            if (58 == p) {
              j[z + 110 | 0] = 1, p = 59
            } else {
              if (64 == p) {
                0 == (a[m + 3] | 0) ? (ka = o, ma = Kb) : (ka = o, ma = sa(nb(Kb), D)), X = M, G = l, K = s, H = Kb, L = da, N = $, p = 174
              } else {
                if (69 == p) {
                  var Sa = Kd(yb, C + 144 | 0),
                    fb = vc(a[Sa >> 2], a[Sa + 12 >> 2], Fa, 0, 0, 0);
                  (Sa | 0) == (C + 144 | 0) && Nb(C + 144 | 0);
                  Y(t, (0 == (fb | 0) ^ 33 == (ga | 0)) & 1 | 0);
                  ka = o;
                  ma = t;
                  X = M;
                  G = l;
                  K = s;
                  H = V;
                  L = Fa;
                  N = $;
                  p = 174
                }
              }
            }
            59 == p && (mb(t), ka = o, ma = t, X = M, G = l, K = s, H = V, L = da, N = $);
            var lb = 1537 > B >>> 0 ? a[ka + 16 >> 2] : ka;
            if (!(4095 < B >>> 0 | 0 != j[z + 110 | 0] << 24 >> 24)) {
              o = lb;
              m = o >> 2;
              t = ma;
              x = X;
              l = G;
              s = K;
              q = H;
              w = L;
              A = N;
              y = D;
              continue
            }
            W = ma
          }
          $b(v);
          R = W;
          break a
        }
      }
    } while (0);
    r = I;
    return R
  }

  function Ld(e) {
    for (;;) {
      var c = j[e];
      if (92 == c << 24 >> 24) {
        c = e + 1 | 0;
        if (10 != j[c] << 24 >> 24) {
          break
        }
        a[C + 12 >> 2] = a[C + 12 >> 2] + 1 | 0;
        e = c
      } else {
        if (!(32 == c << 24 >> 24 || 9 == c << 24 >> 24)) {
          break
        }
      }
      e = e + 1 | 0
    }
    return e
  }

  function qc(e) {
    var c, b = a[e >> 2];
    c = b >> 2;
    if (0 != (b | 0)) {
      if (4864 != (a[c] & 65280 | 0)) {
        c = 5
      } else {
        a[e >> 2] = a[c + 3];
        var d = a[c + 2];
        c = 6
      }
    } else {
      c = 5
    }
    5 == c && (a[e >> 2] = 0, d = b);
    return d
  }

  function yd() {
    var e, c = a[C + 112 >> 2];
    0 != (c | 0) && xd(c);
    a[C + 112 >> 2] = 0;
    a[C + 120 >> 2] = 0;
    for (a[C + 128 >> 2] = 0;;) {
      if (la(a[C + 56 >> 2]) + 1 < la(a[C + 60 >> 2])) {
        c = ea(oc(a[C + 56 >> 2]));
        c = ea(sa(nb(a[C + 64 >> 2]), c));
        if (0 == (c | 0)) {
          continue
        }
        if (0 == j[c] << 24 >> 24) {
          continue
        }
        if (0 != (se(c) | 0)) {
          continue
        }
        var b = Ae(c),
          d = c;
        e = 12;
        break
      }
      if (0 != j[C + 109 | 0] << 24 >> 24) {
        var f = 0;
        e = 13;
        break
      }
      b = a[Lb >> 2];
      d = g.Eb | 0;
      e = 12;
      break
    }
    12 == e && (j[C + 109 | 0] = 1, gb(a[C + 44 >> 2], d), a[C + 112 >> 2] = b, f = C + 112 | 0);
    return f
  }

  function Ad(e, c) {
    var b, d = r;
    r += 20;
    var f = d + 16;
    b = f >> 2;
    var i = a[e >> 2],
      h = e + 4 | 0,
      k = a[h >> 2],
      m = e + 8 | 0,
      n = a[m >> 2],
      I = e + 16 | 0,
      p = a[I >> 2],
      T = e + 12 | 0;
    a[b] = a[T >> 2];
    var R = a[C + 284 >> 2],
      v = 0 == (k | 0) ? Ua(0, 256, f) : k,
      k = d | 0,
      u = d | 0,
      o = d + 4 | 0,
      R = R << 24 >> 24,
      t = 0 == (R | 0),
      y = 0,
      A = 0;
    a: for (;;) {
      var w = v + n | 0,
        s = 0 < (p | 0);
      b: do {
        if (s) {
          if (8448 == (a[C + 284 >> 2] & 65280 | 0)) {
            var l = 0 == j[z + 108 | 0] << 24 >> 24 ? a[C + 292 >> 2] : a[C + 296 >> 2];
            if (0 != (vc(a[l >> 2], a[l + 12 >> 2], w, 1, k, 0) | 0)) {
              var q = l = p,
                x = A
            } else {
              l = a[u >> 2];
              q = a[o >> 2];
              if (0 != j[v + q + n | 0] << 24 >> 24) {
                var W = v,
                  F = w,
                  ga = n,
                  D = p,
                  V = l,
                  $ = q,
                  E = 1,
                  B = A;
                break a
              }
              x = A
            }
          } else {
            if (!t) {
              l = v + n + y | 0;
              q = qd(l, R);
              if (0 == (q | 0)) {
                l = Md(l, 0, p - y | 0);
                if (0 == (l | 0)) {
                  q = l = p;
                  x = A;
                  break
                }
                W = l
              } else {
                W = q
              }
              $ = W - w | 0;
              W = v;
              F = w;
              ga = n;
              D = p;
              V = $;
              $ = $ + 1 | 0;
              E = 1;
              B = A;
              break a
            }
            for (var M = A;;) {
              var G = v + M + n | 0;
              if (10 != j[G] << 24 >> 24) {
                break
              }
              M = M + 1 | 0
            }
            var J = Oe(G, g.Ub | 0);
            if (0 == (J | 0)) {
              q = l = p, x = M
            } else {
              for (var K = J = J - w | 0;;) {
                var H = j[v + K + n | 0];
                if (10 != H << 24 >> 24) {
                  if (0 == H << 24 >> 24) {
                    l = J;
                    q = K;
                    x = M;
                    break b
                  } else {
                    W = v;
                    F = w;
                    ga = n;
                    D = p;
                    V = J;
                    $ = K;
                    E = 1;
                    B = M;
                    break a
                  }
                }
                K = K + 1 | 0
              }
            }
          }
        } else {
          q = l = p, x = A
        }
      } while (0);
      0 < (n | 0) && (md(v, w, p + 1 | 0), n = 0);
      v = Ua(v, n + (p + 128) | 0, f);
      A = i;
      w = v + n + p | 0;
      for (y = a[b] + (p ^ -1) | 0;;) {
        var L = Be(A, w, y);
        if (0 <= (L | 0)) {
          break
        }
        if (4 != (a[P.c >> 2] | 0)) {
          break
        }
      }
      A = L;
      0 > (A | 0) ? (Y(a[C + 68 >> 2], a[P.c >> 2] | 0), w = A = 0) : (A = A + p | 0, w = 1);
      j[v + A + n | 0] = 0;
      if ((A | 0) <= (p | 0)) {
        W = v;
        F = v + n | 0;
        ga = n;
        D = A;
        V = l;
        $ = q;
        E = w;
        B = x;
        break
      }
      y = p;
      p = A;
      A = x
    }
    0 == (D | 0) ? E = E - 1 | 0 : (V = F + V | 0, f = j[V], j[V] = 0, gb(c, F + B | 0), B = c | 0, a[B >> 2] |= 512, j[V] = f, F = F + $ | 0, B = j[F], j[F] = 0, gb(a[C + 40 >> 2], V), j[F] = B);
    a[h >> 2] = W;
    a[m >> 2] = ga + $ | 0;
    a[I >> 2] = D - $ | 0;
    a[T >> 2] = a[b];
    r = d;
    return E
  }

  function oc(a) {
    return Y(a, la(a) + 1)
  }

  function la(e) {
    var c, b, d, f = r;
    r += 4;
    d = f >> 2;
    b = (e | 0) >> 2;
    var i = a[b];
    c = (e + 4 | 0) >> 2;
    if (0 == (i & 257 | 0)) {
      pa[0] = 0;
      a[c] = ca[0];
      a[c + 1] = ca[1];
      e = a[e + 12 >> 2];
      a[d] = e;
      if (0 != (e | 0)) {
        if (0 == j[e] << 24 >> 24) {
          d = 8
        } else {
          var h = Pe(a[f >> 2], f);
          pa[0] = h;
          a[c] = ca[0];
          a[c + 1] = ca[1];
          h = a[b];
          0 != (h & 512 | 0) && (h = Ld(a[d]), a[d] = h, d = a[b], 0 != j[h] << 24 >> 24 && (d &= -513, a[b] = d), h = d);
          d = 9
        }
      } else {
        d = 8
      }
      8 == d && (i &= -513, h = a[b] = i);
      a[b] = h | 256
    }
    r = f;
    return ca[0] = a[c], ca[1] = a[c + 1], pa[0]
  }

  function Ua(e, c, b) {
    var d;
    if (0 == (e | 0)) {
      d = 4
    } else {
      if ((a[b >> 2] | 0) > (c | 0)) {
        var f = e;
        d = 5
      } else {
        d = 4
      }
    }
    4 == d && (c = (c + 160 >> 1) + c | 0, a[b >> 2] = c, f = Tc(e, c));
    return f
  }

  function ea(e) {
    var c;
    c = (e | 0) >> 2;
    if (1 == (a[c] & 257 | 0)) {
      var b = e + 4 | 0;
      Ed(a[z + 104 >> 2], 240, ea(a[C + 16 >> 2]), (ca[0] = a[b >> 2], ca[1] = a[b + 4 >> 2], pa[0]), 1);
      b = xa(a[z + 104 >> 2]);
      a[e + 12 >> 2] = b;
      a[c] |= 256;
      e = b
    } else {
      e = a[e + 12 >> 2]
    }
    return 0 == (e | 0) ? uc | 0 : e
  }

  function nb(e) {
    var c = e | 0,
      b = a[c >> 2],
      d = 0 == (b & 8192 | 0);
    a: do {
      if (d) {
        var f = e,
          i = c,
          h = b
      } else {
        for (var k = e;;) {
          var k = a[k + 16 >> 2],
            m = k | 0,
            n = a[m >> 2];
          if (0 == (n & 8192 | 0)) {
            f = k;
            i = m;
            h = n;
            break a
          }
        }
      }
    } while (0);
    0 == (h & 2 | 0) ? (a[i >> 2] = h | 2, e = jc(), f = a[f + 16 >> 2] = e) : f = a[f + 16 >> 2];
    return f
  }

  function Wb(e) {
    var c, b = 0,
      d = a[z + 96 >> 2];
    for (c = d >> 2;;) {
      if (0 == (d | 0)) {
        d = 64 < (e | 0) ? e : 64;
        c = Ja(20 * d + 16 | 0);
        a[z + 96 >> 2] = c;
        a[c >> 2] = d;
        d = a[z + 96 >> 2];
        a[d + 4 >> 2] = d + 16 | 0;
        a[a[z + 96 >> 2] + 8 >> 2] = b;
        if (0 == (b | 0)) {
          break
        }
        a[b + 12 >> 2] = a[z + 96 >> 2];
        break
      }
      if ((((a[c + 1] - (d + 16) | 0) / 20 & -1) + e | 0) <= (a[c] | 0)) {
        break
      }
      c = a[c + 3];
      a[z + 96 >> 2] = c;
      b = d;
      d = c;
      c = d >> 2
    }
    d = a[z + 96 >> 2] + 4 | 0;
    b = a[d >> 2];
    a[d >> 2] = b + 20 * e | 0;
    e = b >>> 0 < a[a[z + 96 >> 2] + 4 >> 2] >>> 0;
    a: do {
      if (e) {
        for (d = b;;) {
          if (a[d >> 2] = 0, a[d + 12 >> 2] = 0, d = d + 20 | 0, d >>> 0 >= a[a[z + 96 >> 2] + 4 >> 2] >>> 0) {
            break a
          }
        }
      }
    } while (0);
    return b
  }

  function pc(a) {
    return Eb(ta(a, C + 160 | 0))
  }

  function Eb(e) {
    0 == (Xc(e) | 0) ? (e = a[e + 12 >> 2], e = (0 == (e | 0) ? 0 : 0 != j[e] << 24 >> 24) & 1) : (e = e + 4 | 0, e = 0 != (ca[0] = a[e >> 2], ca[1] = a[e + 4 >> 2], pa[0]) & 1);
    return e
  }

  function De(e, c) {
    var b = e | 0,
      d = a[b >> 2];
    0 == (d & 2048 | 0) ? (a[b >> 2] = d | 2048, d = 0) : d = a[e + 16 >> 2];
    b = Ja(a[c + 12 >> 2] + 17 | 0);
    a[e + 16 >> 2] = b;
    var f = b + 12 | 0;
    a[b >> 2] = f;
    a[b + 4 >> 2] = f;
    a[b + 8 >> 2] = d;
    var d = c + 4 | 0,
      f = a[d >> 2],
      i = 0 == (f | 0);
    a: do {
      if (!i) {
        for (var h = c + 16 | 0, k = 0, m = f;;) {
          var n = a[a[h >> 2] + (k << 2) >> 2];
          if (0 != (n | 0)) {
            for (m = n; !(Ta(a[b >> 2], m + 28 | 0), Cb(b), m = a[m + 24 >> 2], 0 == (m | 0));) {}
            m = a[d >> 2]
          }
          k = k + 1 | 0;
          if (k >>> 0 >= m >>> 0) {
            break a
          }
        }
      }
    } while (0)
  }

  function zd(e) {
    var c = r;
    r += 20;
    qe(c);
    0 == j[z + 109 | 0] << 24 >> 24 && (j[z + 109 | 0] = 1, j[z + 110 | 0] = 0, ta(a[z + 32 >> 2], c));
    var c = a[z + 68 >> 2],
      b = 0 == (a[c + 4 >> 2] | 0);
    a: do {
      if (!b) {
        for (var d = 0, f = c;;) {
          var i = a[a[f + 16 >> 2] + (d << 2) >> 2];
          if (0 != (i | 0)) {
            for (f = i; !(0 != (a[f >> 2] | 0) && 0 != j[f + 20 | 0] << 24 >> 24 && Ke(), f = a[f + 24 >> 2], 0 == (f | 0));) {}
            f = a[z + 68 >> 2]
          }
          d = d + 1 | 0;
          if (d >>> 0 >= a[f + 4 >> 2] >>> 0) {
            break a
          }
        }
      }
    } while (0);
    wc(e)
  }

  function ua(e) {
    var c = a[z + 76 >> 2],
      b = a[z + 80 >> 2];
    Ob(g.Qb | 0, (J = r, r += 12, a[J >> 2] = c, a[J + 4 >> 2] = b, a[J + 8 >> 2] = e, J))
  }

  function Ed(e, c, b, d, f) {
    var i = r;
    if (0 != (f | 0)) {
      if (f = d & -1, (f | 0) != d) {
        f = 3
      } else {
        var h = xc(e, c, g.ra | 0, (J = r, r += 4, a[J >> 2] = f, J)),
          f = 13
      }
    } else {
      f = 3
    } if (3 == f) {
      for (var k = b, f = j[b]; 0 != f << 24 >> 24;) {
        var k = k + 1 | 0,
          m = j[k];
        if (0 == m << 24 >> 24) {
          break
        }
        f = m
      }
      f = f << 24 >> 24;
      0 == (Md(g.ec | 0, f, 7) | 0) ? 0 == (Md(g.ic | 0, f, 6) | 0) ? ua(g.fb | 0) : h = xc(e, c, b, (J = r, r += 8, pa[0] = d, a[J >> 2] = ca[0], a[J + 4 >> 2] = ca[1], J)) : h = xc(e, c, b, (J = r, r += 4, a[J >> 2] = d & -1, J))
    }
    r = i;
    return h
  }

  function mb(e) {
    var c;
    c = (e | 0) >> 2;
    var b = a[c],
      e = e + 12 | 0;
    0 == (b & 4096 | 0) && (Z(a[e >> 2]), b = a[c]);
    a[c] = b & 11266 | 16384;
    a[e >> 2] = 0
  }

  function He(e, c) {
    for (var b = ((Pc(c) >>> 0) % (a[e + 4 >> 2] >>> 0) << 2) + a[e + 16 >> 2] | 0;;) {
      var d = a[b >> 2];
      if (0 == (d | 0)) {
        break
      }
      var f = d + 24 | 0;
      if (0 != (Oa(d + 28 | 0, c, Pa) | 0)) {
        b = f
      } else {
        var i = e + 12 | 0;
        a[i >> 2] = a[i >> 2] + (ra(c) ^ -1) | 0;
        i = e | 0;
        a[i >> 2] = a[i >> 2] - 1 | 0;
        a[b >> 2] = a[f >> 2];
        Z(d);
        break
      }
    }
  }

  function Rc(e) {
    var c = e + 4 | 0,
      b = 0 == (a[c >> 2] | 0);
    a: do {
      if (!b) {
        for (var d = e + 16 | 0, f = 0;;) {
          var i = a[d >> 2],
            h = a[i + (f << 2) >> 2];
          if (0 != (h | 0)) {
            for (i = h;;) {
              h = a[i + 24 >> 2];
              Z(a[i + 12 >> 2]);
              Z(i);
              if (0 == (h | 0)) {
                break
              }
              i = h
            }
            i = a[d >> 2]
          }
          a[i + (f << 2) >> 2] = 0;
          f = f + 1 | 0;
          if (f >>> 0 >= a[c >> 2] >>> 0) {
            break a
          }
        }
      }
    } while (0);
    a[e >> 2] = 0;
    a[e + 12 >> 2] = 0
  }

  function Hd(e, c) {
    if ((e | 0) != (c | 0)) {
      mb(e);
      var b = e | 0;
      a[b >> 2] |= a[c >> 2] & -31747;
      var b = c + 4 | 0,
        b = (ca[0] = a[b >> 2], ca[1] = a[b + 4 >> 2], pa[0]),
        d = e + 4 | 0;
      pa[0] = b;
      a[d >> 2] = ca[0];
      a[d + 4 >> 2] = ca[1];
      b = a[c + 12 >> 2];
      0 != (b | 0) && (a[e + 12 >> 2] = xa(b))
    }
    Vb(e);
    return e
  }

  function Ie() {
    var e = r;
    r += 4;
    if (0 == j[z + 112 | 0] << 24 >> 24) {
      j[z + 112 | 0] = 1;
      Z(a[C + 92 >> 2]);
      Qc(0);
      var c = Nd(ea(a[C + 52 >> 2]), C + 232 | 0, C + 92 | 0);
      Qc(c);
      a[e >> 2] = a[C + 92 >> 2];
      var b = 0 < (c | 0);
      a: do {
        if (b) {
          for (var d = 0;;) {
            var f = Cb(e);
            a[(a[z + 92 >> 2] + 12 >> 2) + (5 * d | 0)] = f;
            f = a[z + 92 >> 2] + 20 * d | 0;
            a[f >> 2] |= 20992;
            d = d + 1 | 0;
            if ((d | 0) == (c | 0)) {
              break a
            }
          }
        }
      } while (0);
      mb(a[C + 80 >> 2]);
      a[a[C + 80 >> 2] >> 2] = 1025;
      c = a[C + 80 >> 2] + 4 | 0;
      pa[0] = a[z + 84 >> 2] | 0;
      a[c >> 2] = ca[0];
      a[c + 4 >> 2] = ca[1]
    }
    r = e
  }

  function Oc(e, c, b) {
    for (e = ((Pc(b) >>> 0) % (e >>> 0) << 2) + c | 0;;) {
      e = a[e >> 2];
      if (0 == (e | 0)) {
        var d = 0;
        break
      }
      if (0 != (Oa(e + 28 | 0, b, Pa) | 0)) {
        e = e + 24 | 0
      } else {
        d = e;
        break
      }
    }
    return d
  }

  function Kd(e, c) {
    if (8448 == (a[e >> 2] & 65280 | 0)) {
      var b = a[(0 == j[z + 108 | 0] << 24 >> 24 ? e + 8 | 0 : e + 12 | 0) >> 2]
    } else {
      var b = Wb(1),
        d = ea(ta(e, b)),
        f = 0 != j[z + 108 | 0] << 24 >> 24 ? 3 : 1;
      0 != (Od(c, d, f) | 0) && Pd(c, d, f & 2);
      $b(b);
      b = c
    }
    return b
  }

  function Fd(e) {
    var c = r;
    r += 8;
    var b = c + 4;
    a[c >> 2] = e;
    var d = Wb(1),
      f = xa(ea(ta(qc(c), d))),
      i = 0,
      e = 0,
      h = f,
      k = j[f];
    a: for (;;) {
      if (0 == k << 24 >> 24) {
        return Z(f), $b(d), b = Tc(i, e + 1 | 0), j[b + e | 0] = 0, r = c, b
      }
      for (var m = h, n = k;;) {
        if (0 == n << 24 >> 24) {
          var I = m,
            p = 0;
          break
        } else {
          if (37 == n << 24 >> 24 && (m = m + 1 | 0, n = j[m], 37 != n << 24 >> 24)) {
            I = m;
            p = n;
            break
          }
        }
        m = n = m + 1 | 0;
        n = j[n]
      }
      b: for (;;) {
        do {
          if (0 != p << 24 >> 24 && 0 == (yc(p << 24 >> 24) | 0)) {
            m = I + 1 | 0;
            if (42 != j[I] << 24 >> 24) {
              I = m;
              p = j[m];
              continue b
            }
            ua(g.Mc | 0)
          }
        } while (0);
        var T = I - h + 240 | 0,
          n = T + e | 0,
          i = Ua(i, n, b),
          R = j[I],
          k = 0 == R << 24 >> 24 ? I : I + 1 | 0,
          m = j[k];
        j[k] = 0;
        var v = ta(qc(c), d);
        99 == R << 24 >> 24 || 0 == R << 24 >> 24 ? (T = 0 == (Xc(v) | 0) ? j[ea(v)] : la(v) & -1, n = i, h = Yc(i + e | 0, h, (J = r, r += 4, a[J >> 2] = T << 24 >> 24, J))) : 115 == R << 24 >> 24 ? (T = ea(v), n = i = Ua(i, ra(T) + n | 0, b), h = Yc(i + e | 0, h, (J = r, r += 4, a[J >> 2] = T, J))) : (n = i, h = Ed(i + e | 0, T, h, la(v), 0));
        j[k] = m;
        i = n;
        e = (0 > (h | 0) ? 0 : h) + e | 0;
        h = k;
        k = m;
        continue a
      }
    }
    return S
  }

  function $b(e) {
    var c = a[z + 96 >> 2];
    do {
      if ((c + 16 | 0) >>> 0 <= e >>> 0 && a[c + 4 >> 2] >>> 0 > e >>> 0) {
        for (c = e;;) {
          var b = c | 0,
            d = a[b >> 2];
          2 == (d & 8194 | 0) ? (Rc(nb(c)), d = c + 16 | 0, Z(a[a[d >> 2] + 16 >> 2]), Z(a[d >> 2]), b = a[b >> 2]) : b = d;
          b = 0 == (b & 2048 | 0);
          a: do {
            if (!b) {
              var d = c + 16 | 0,
                f = a[d >> 2];
              a[d >> 2] = 0;
              if (0 != (f | 0)) {
                for (d = f;;) {
                  f = a[d + 8 >> 2];
                  Z(d);
                  if (0 == (f | 0)) {
                    break a
                  }
                  d = f
                }
              }
            }
          } while (0);
          mb(c);
          c = c + 20 | 0;
          b = a[z + 96 >> 2] + 4 | 0;
          if (c >>> 0 >= a[b >> 2] >>> 0) {
            break
          }
        }
        a[b >> 2] = e;
        for (e = a[z + 96 >> 2];;) {
          c = a[e + 8 >> 2];
          if (0 == (c | 0)) {
            break
          }
          if ((a[e + 4 >> 2] | 0) != (e + 16 | 0)) {
            break
          }
          e = a[z + 96 >> 2] = c
        }
        return
      }
    } while (0);
    ua(g.eb | 0)
  }

  function Db(e, c) {
    mb(e);
    a[e + 12 >> 2] = c;
    Vb(e);
    return e
  }

  function Qc(e) {
    var c = a[z + 88 >> 2],
      b = (c | 0) > (e | 0);
    a: do {
      if (!b) {
        var d = e + 16 | 0;
        a[z + 88 >> 2] = d;
        var f = Tc(a[z + 92 >> 2], 20 * d | 0);
        a[z + 92 >> 2] = f;
        if ((c | 0) < (a[z + 88 >> 2] | 0)) {
          for (d = c;;) {
            a[(f >> 2) + (5 * d | 0)] = 1024;
            a[(a[z + 92 >> 2] + 12 >> 2) + (5 * d | 0)] = 0;
            d = d + 1 | 0;
            if ((d | 0) >= (a[z + 88 >> 2] | 0)) {
              break a
            }
            f = a[z + 92 >> 2]
          }
        }
      }
    } while (0);
    c = (a[z + 84 >> 2] | 0) > (e | 0);
    a: do {
      if (c) {
        for (b = e;;) {
          if (mb(a[z + 92 >> 2] + 20 * b | 0), b = b + 1 | 0, (b | 0) >= (a[z + 84 >> 2] | 0)) {
            break a
          }
        }
      }
    } while (0);
    a[z + 84 >> 2] = e
  }

  function Xc(e) {
    la(e);
    return a[e >> 2] & 16897 ^ 16384
  }

  function pd(e, c) {
    var b;
    b = c + 20 | 0;
    var d = c | 0,
      f = c | 0;
    8448 == (a[f >> 2] & 65280 | 0) && (Nb(b), Nb(c + 36 | 0));
    var i = j[e];
    0 != i << 24 >> 24 ? 0 == j[e + 1 | 0] << 24 >> 24 ? b = 7 : (Qe(e, d, b), b = 8) : b = 7;
    7 == b && (a[f >> 2] = i << 24 >> 24);
    return d
  }

  function Nd(e, c, b) {
    var d, f, i = r;
    r += 24;
    var h, k = i + 4;
    f = k >> 2;
    var m = i + 8,
      n = Ja((ra(e) << 1) + 3 | 0);
    a[f] = n;
    a[b >> 2] = n;
    Ta(n, e);
    var I = c | 0,
      b = a[I >> 2] & 255,
      p = i + 1 | 0;
    j[p] = b;
    var g = i | 0;
    j[g] = b;
    j[i + 3 | 0] = 0;
    var R = i + 2 | 0;
    j[R] = 0;
    0 == j[ea(a[C + 36 >> 2])] << 24 >> 24 && (j[R] = 10);
    I = 8448 == (a[I >> 2] & 65280 | 0);
    a: do {
      if (I) {
        if (0 == j[e] << 24 >> 24) {
          var v = 0
        } else {
          var u = c + 8 | 0,
            o = m | 0,
            t = m | 0;
          d = (m + 4 | 0) >> 2;
          for (var y = c + 12 | 0, A = e, w = 1;;) {
            var l;
            b: {
              l = A;
              for (var s = h = bb, q = bb;;) {
                s = j[l];
                if (!s) {
                  l -= A;
                  break b
                }
                for (h = R;;) {
                  q = j[h];
                  if (!q || q == s) {
                    break
                  }
                  h++
                }
                if (q) {
                  l -= A;
                  break b
                }
                l++
              }
              l = bb
            }
            h = a[(0 == j[z + 108 | 0] << 24 >> 24 ? u : y) >> 2];
            if (0 == (vc(a[h >> 2], a[h + 12 >> 2], A, 1, o, 0) | 0)) {
              if (h = a[t >> 2], (h | 0) > (l | 0)) {
                h = 12
              } else {
                var x = a[d];
                if (0 == (x | 0)) {
                  a[d] = 1;
                  var W = h + 1 | 0,
                    F = 1
                } else {
                  W = h, F = x
                }
                x = w + 1 | 0;
                h = 14
              }
            } else {
              h = 12
            }
            12 == h && (a[d] = l, 0 == j[A + l | 0] << 24 >> 24 ? (x = w, F = W = l) : (F = l + 1 | 0, a[d] = F, x = w, W = l));
            w = a[f];
            oa(w, A, W);
            l = W + 1 | 0;
            Da(w + W | 0, ((F | 0) > (l | 0) ? F : l) - W | 0);
            Cb(k);
            A = A + F | 0;
            if (0 == j[A] << 24 >> 24) {
              v = x;
              break a
            }
            w = x
          }
        }
      } else {
        if (d = b << 24 >> 24, 0 == b << 24 >> 24) {
          if (u = j[e], 0 == u << 24 >> 24) {
            v = 0
          } else {
            d = 0;
            o = e;
            t = u;
            for (y = n;;) {
              o = o + 1 | 0;
              j[y] = t;
              u = y + 2 | 0;
              a[f] = u;
              j[y + 1 | 0] = 0;
              d = d + 1 | 0;
              t = j[o];
              if (0 == t << 24 >> 24) {
                v = d;
                break a
              }
              y = u
            }
          }
        } else {
          if (32 == b << 24 >> 24) {
            o = e;
            d = 0;
            for (u = n;;) {
              if (0 == j[o] << 24 >> 24) {
                v = d;
                break a
              }
              for (;;) {
                t = j[o];
                if (!(32 == t << 24 >> 24 | 5 > (t - 9 & 255))) {
                  break
                }
                o = o + 1 | 0
              }
              t = j[o];
              if (0 == t << 24 >> 24) {
                v = d;
                break a
              }
              d = d + 1 | 0;
              for (y = t; 0 != y << 24 >> 24 && 0 == (Qd(y << 24 >> 24) | 0);) {
                y = o + 1 | 0, o = j[o], t = u + 1 | 0, a[f] = t, j[u] = o, o = y, y = j[y], u = t
              }
              t = u + 1 | 0;
              a[f] = t;
              j[u] = 0;
              u = t
            }
          } else {
            if (0 != j[z + 108 | 0] << 24 >> 24 && (j[g] = (97 <= d && 122 >= d ? d - 97 + 65 : d) & 255, j[p] = Zc(d) & 255), v = 0 != j[n] << 24 >> 24 & 1, d = Re(n, g), a[f] = d, 0 != (d | 0)) {
              for (;;) {
                j[d] = 0;
                var ga = v + 1 | 0;
                d = Re(d + 1 | 0, g);
                if (0 == (d | 0)) {
                  break
                }
                v = ga
              }
              a[f] = 0;
              v = ga
            }
          }
        }
      }
    } while (0);
    r = i;
    return v
  }

  function Na(a) {
    a = la(a);
    0 > a ? (a = -a, a = -(0 <= a ? Math.floor(a) : Math.ceil(a)) | 0) : a = 0 <= a ? Math.floor(a) : Math.ceil(a);
    return a
  }

  function Le(e, c) {
    var b, d, f, i, h, k = r;
    r += 92;
    h = k + 4 >> 2;
    d = k + 20;
    i = d >> 2;
    f = k + 36 >> 2;
    var m = k + 52,
      n = k + 68,
      I = k + 84,
      p = k + 88,
      T = Wb(4),
      R = a[e >> 2];
    a[k >> 2] = a[e + 8 >> 2];
    var v = d + 12 | 0;
    a[v >> 2] = 0;
    d = (d + 8 | 0) >> 2;
    a[d] = 0;
    for (var u = R, o = 0; 4 > (o | 0) && 0 != (a[k >> 2] | 0);) {
      var t = qc(k);
      a[(o << 2 >> 2) + h] = t;
      0 != (u & 150994944 | 0) && (a[(o << 2 >> 2) + i] = ta(t, T + 20 * o | 0));
      0 != (u & 134217728 | 0) && (a[(o << 2 >> 2) + f] = ea(a[(o << 2 >> 2) + i]));
      u >>>= 1;
      o = o + 1 | 0
    }
    if (o >>> 0 < R >>> 30 >>> 0) {
      ua(g.hb | 0)
    } else {
      R &= 127;
      do {
        if (0 == (R | 0)) {
          ua(g.T | 0)
        } else {
          if (3 == (R | 0)) {
            2 < (o | 0) ? (u = a[h + 2], u = 8448 == (a[u >> 2] & 65280 | 0) ? u : pd(ea(ta(u, T + 40 | 0)), C + 180 | 0)) : u = C + 232 | 0;
            u = Nd(a[f], u, p);
            t = a[p >> 2];
            b = a[i + 1];
            Rc(nb(b));
            var y = 1 > (u | 0);
            a: do {
              if (!y) {
                for (var A = u + 1 | 0, w = 1;;) {
                  if (sd(b, w, Cb(p)), w = w + 1 | 0, (w | 0) == (A | 0)) {
                    break a
                  }
                }
              }
            } while (0);
            Z(t);
            Y(c, u | 0)
          } else {
            if (4 == (R | 0)) {
              t = a[f];
              u = ra(t);
              b = la(a[i + 1]) - 1 & -1;
              b = (b | 0) > (u | 0) ? u : b;
              b = 0 > (b | 0) ? 0 : b;
              y = (2 < (o | 0) ? la(a[d]) : u - b | 0) & -1;
              u = c;
              t = t + b | 0;
              b = 0 > (y | 0) ? 0 : y;
              y = t;
              for (A = b; 0 != (A | 0) && 0 != j[y] << 24 >> 24;) {
                y = y + 1 | 0, A = A - 1 | 0
              }
              b = b - A | 0;
              y = mc(b + 1 | 0);
              j[y + b | 0] = 0;
              oa(y, t, b);
              Db(u, y)
            } else {
              if (12 == (R | 0)) {
                Y(c, (Na(a[i]) & Na(a[i + 1])) >>> 0)
              } else {
                if (13 == (R | 0)) {
                  Y(c, (Na(a[i]) ^ -1) >>> 0)
                } else {
                  if (14 == (R | 0)) {
                    Y(c, Na(a[i]) << Na(a[i + 1]) >>> 0)
                  } else {
                    if (15 == (R | 0)) {
                      Y(c, (Na(a[i]) | Na(a[i + 1])) >>> 0)
                    } else {
                      if (16 == (R | 0)) {
                        Y(c, Na(a[i]) >>> (Na(a[i + 1]) >>> 0) >>> 0)
                      } else {
                        if (17 == (R | 0)) {
                          Y(c, (Na(a[i]) ^ Na(a[i + 1])) >>> 0)
                        } else {
                          if (7 == (R | 0) || 8 == (R | 0)) {
                            u = xa(a[f]);
                            t = j[u];
                            b = 0 == t << 24 >> 24;
                            a: do {
                              if (!b) {
                                y = 8 == (R | 0);
                                A = u;
                                for (w = t;;) {
                                  var w = w << 24 >> 24,
                                    l = w | 32;
                                  26 > (l + 159 & 254) >>> 0 && (j[A] = (y ? w & 223 : l) & 255);
                                  A = A + 1 | 0;
                                  w = j[A];
                                  if (0 == w << 24 >> 24) {
                                    break a
                                  }
                                }
                              }
                            } while (0);
                            Db(c, u)
                          } else {
                            if (1 == (R | 0)) {
                              u = a[f + 1];
                              t = ra(u);
                              b = a[f];
                              y = ra(b) - t | 0;
                              A = 0 < (t | 0) & -1 < (y | 0);
                              a: do {
                                if (A) {
                                  if (0 == j[z + 108 | 0] << 24 >> 24) {
                                    var q = Oe(b, u),
                                      q = 0 == (q | 0) ? 0 : 1 - b + q | 0
                                  } else {
                                    for (w = 0;;) {
                                      if ((w | 0) > (y | 0)) {
                                        q = 0;
                                        break a
                                      }
                                      l = w + 1 | 0;
                                      if (0 == (Ne(b + w | 0, u, t) | 0)) {
                                        q = l;
                                        break a
                                      }
                                      w = l
                                    }
                                  }
                                } else {
                                  q = 0
                                }
                              } while (0);
                              Y(c, q | 0)
                            } else {
                              5 == (R | 0) ? (1 < (o | 0) ? a[I >> 2] = la(a[i + 1]) & -1 : Wc(I), u = j, t = I, Rd || (Rd = ia(Sd.V)), y = t, t = Rd, Se(), b = Sd, y = new Date(1e3 * a[y >> 2]), a[t + b.Ta >> 2] = y.getSeconds(), a[t + b.Ra >> 2] = y.getMinutes(), a[t + b.Pa >> 2] = y.getHours(), a[t + b.Qa >> 2] = y.getDate(), a[t + b.Sa >> 2] = y.getMonth(), a[t + b.Wa >> 2] = y.getFullYear() - 1900, a[t + b.Ua >> 2] = y.getDay(), A = new Date(y.getFullYear(), 0, 1), a[t + b.Va >> 2] = Math.floor((y.getTime() - A.getTime()) / 864e5), a[t + b.ff >> 2] = 60 * A.getTimezoneOffset(), a[t + b.gf >> 2] = Number(A.getTimezoneOffset() != y.getTimezoneOffset()), "GMT" in Td || (Td.GMT = s(Aa("GMT"), "i8", zc)), a[t + b.hf >> 2] = Td.GMT, u[0 + a[z + 104 >> 2] | 0] = 0, gb(c, a[z + 104 >> 2])) : 6 == (R | 0) ? (u = c, A = a[f], t = r, r += 44, w = t + 32 | 0, a[w >> 2] = -1, b = t + 20 | 0, y = t + 16 | 0, 6 > (Rf(A, g.Hc | 0, (J = r, r += 28, a[J >> 2] = b, a[J + 4 >> 2] = y, a[J + 8 >> 2] = t + 12 | 0, a[J + 12 >> 2] = t + 8 | 0, a[J + 16 >> 2] = t + 4 | 0, a[J + 20 >> 2] = t | 0, a[J + 24 >> 2] = w, J)) | 0) ? b = -1 : (A = a[y >> 2], 0 == (A | 0) ? b = -1 : (w = a[b >> 2], 1900 > w >>> 0 ? b = -1 : (a[y >> 2] = A - 1 | 0, a[b >> 2] = w - 1900 | 0, b = t, Se(), y = Sd, A = a[b + y.Wa >> 2], w = (new Date(1900 <= A ? A : A + 1900, a[b + y.Sa >> 2], a[b + y.Qa >> 2], a[b + y.Pa >> 2], a[b + y.Ra >> 2], a[b + y.Ta >> 2], 0)).getTime() / 1e3, a[b + y.Ua >> 2] = (new Date(w)).getDay(), a[b + y.Va >> 2] = Math.round((w - (new Date(A, 0, 1)).getTime()) / 864e5), b = w))), r = t, Y(u, b | 0)) : 2 == (R | 0) ? (u = Kd(a[h + 1], n), b = (m | 0) >> 2, 0 == (vc(a[u >> 2], a[u + 12 >> 2], a[f], 1, m | 0, 0) | 0) ? (t = a[b] + 1 | 0, a[b] = t, y = m + 4 | 0, b = a[y >> 2] + 1 | 0, a[y >> 2] = b) : (a[b] = 0, a[m + 4 >> 2] = -1, t = 0, b = -1), y = t | 0, Y(sa(a[z + 60 >> 2], g.Ac | 0), y), Y(sa(a[z + 60 >> 2], g.Dc | 0), b - t | 0), Y(c, y), (u | 0) == (n | 0) && Nb(n)) : 9 == (R | 0) ? $c(a[h], a[f + 1], la(a[d]) & -1, a[v >> 2], c, 1) : 10 == (R | 0) ? (u = a[d], Y(c, $c(a[h], a[f + 1], 0, u, u, 0) | 0)) : 11 == (R | 0) && (u = a[d], Y(c, $c(a[h], a[f + 1], 1, u, u, 0) | 0))
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } while (0);
      $b(T);
      r = k;
      return c
    }
    return S
  }

  function Fb() {
    j[z + 113 | 0] = 1
  }

  function Pc(a) {
    var c = j[a],
      b = 0 == c << 24 >> 24;
    a: do {
      if (b) {
        var d = 0
      } else {
        for (var f = 0, i = a, h = c;;) {
          if (i = i + 1 | 0, f = (h << 24 >> 24) + 63 * f | 0, h = j[i], 0 == h << 24 >> 24) {
            d = f;
            break a
          }
        }
      }
    } while (0);
    return d
  }

  function $c(e, c, b, d, f, i) {
    var h = r;
    r += 100;
    var k, m = h + 4,
      n = h + 84,
      e = Kd(e, n),
      I = ea(0 != (d | 0) ? d : a[C + 52 >> 2]),
      d = ra(c),
      p = m | 0,
      g = m | 0,
      R = m + 4 | 0,
      i = 0 != (i | 0),
      v = e | 0,
      u = e + 12 | 0,
      o = 0,
      t = 0,
      y = 0,
      A = 0;
    a: for (;;) {
      do {
        if (0 == (vc(a[v >> 2], a[u >> 2], I, 10, p, o) | 0)) {
          var w = a[g >> 2],
            o = a[R >> 2],
            l = o + t | 0,
            A = Ua(A, l + d | 0, h);
          oa(A + t | 0, I, o);
          var y = y + 1 | 0,
            s = (y | 0) < (b | 0);
          b: do {
            if (s) {
              var q = l,
                x = A
            } else {
              var W = w + t | 0,
                F = j[c];
              if (0 == F << 24 >> 24) {
                q = W, x = A
              } else {
                var z = A,
                  D = W,
                  W = c;
                for (k = 0;;) {
                  var V = D + 1 | 0;
                  j[z + D | 0] = F;
                  D = F << 24 >> 24;
                  if (92 == F << 24 >> 24) {
                    var E = k + 1 | 0,
                      B = V,
                      J = z;
                    k = 15
                  } else {
                    if (38 == F << 24 >> 24) {
                      var M = 0,
                        G = k,
                        K = V - (k + 3 >> 1) | 0;
                      k = 12
                    } else {
                      i & 47 < F << 24 >> 24 & 58 > F << 24 >> 24 ? (K = V - (k + 3 >> 1) | 0, 38 == F << 24 >> 24 ? (M = 0, G = k) : (M = D - 48 | 0, G = k + 1 | 0), k = 12) : (E = 0, B = V, J = z, k = 15)
                    }
                  }
                  12 == k && (0 == (G & 1 | 0) ? (E = a[m + (M << 3) >> 2], B = a[m + (M << 3) + 4 >> 2] - E | 0, J = Ua(z, K + d + B | 0, h), oa(J + K | 0, I + E | 0, B), E = 0, B = B + K | 0) : (j[z + K | 0] = F, E = 0, B = K + 1 | 0, J = z));
                  W = W + 1 | 0;
                  F = j[W];
                  if (0 == F << 24 >> 24) {
                    q = B;
                    x = J;
                    break b
                  }
                  z = J;
                  D = B;
                  k = E
                }
              }
            }
          } while (0);
          l = I + o | 0;
          if ((y | 0) == (b | 0)) {
            w = q;
            s = y;
            z = x;
            break
          }
          if ((o | 0) != (w | 0)) {
            o = 1;
            t = q;
            A = x;
            I = l;
            continue a
          }
          j[x + q | 0] = j[l];
          if (0 == j[l] << 24 >> 24) {
            var H = y,
              L = x;
            break a
          }
          o = 1;
          t = q + 1 | 0;
          A = x;
          I = w + (I + 1) | 0;
          continue a
        }
        w = t;
        s = y;
        z = A;
        l = I
      } while (0);
      c = Ua(z, ra(l) + w | 0, h);
      Ta(c + w | 0, l);
      H = s;
      L = c;
      break
    }
    Db(0 != (f | 0) ? f : a[C + 52 >> 2], L);
    (e | 0) == (n | 0) && Nb(n);
    r = h;
    return H
  }

  function Qe(e, c, b) {
    a[c >> 2] = 8448;
    a[c + 8 >> 2] = b;
    var d = b + 16 | 0;
    a[c + 12 >> 2] = d;
    Pd(b, e, 1);
    Pd(d, e, 3)
  }

  function ue(e, c) {
    var b = gb(e, c) | 0;
    a[b >> 2] |= 512
  }

  function Ka(e) {
    var c = a[z + 44 >> 2];
    0 == (a[c >> 2] | 0) && (c = Pb(0), a[a[z + 44 >> 2] + 4 >> 2] = c, a[a[z + 44 >> 2] >> 2] = c, c = a[z + 44 >> 2]);
    var b = c + 8 | 0,
      d = a[z + 76 >> 2];
    (a[b >> 2] | 0) != (d | 0) && (a[b >> 2] = d, a[Ka(768) + 8 >> 2] = xa(a[z + 76 >> 2]), c = a[z + 44 >> 2]);
    c = a[c + 4 >> 2];
    a[c >> 2] = e;
    e = Pb(10240);
    a[c + 16 >> 2] = e;
    a[a[z + 44 >> 2] + 4 >> 2] = e;
    return c
  }

  function ya(e) {
    var c = r;
    r += 12;
    var b = c + 4,
      d = c + 8,
      f = 0 == j[z + 113 | 0] << 24 >> 24;
    a: do {
      if (f) {
        if (0 == j[C + 108 | 0] << 24 >> 24) {
          for (var i = 0 != (e & 4 | 0), h = e | 16744576, k = 33554432 == (e & 100663296 | 0), m = a[z + 100 >> 2];;) {
            var m = Ld(m),
              n = a[C + 12 >> 2];
            a[z + 80 >> 2] = n;
            var I = j[m],
              p = 35 == I << 24 >> 24;
            b: do {
              if (p) {
                for (var T = m, R = 35;;) {
                  if (10 == R << 24 >> 24 || 0 == R << 24 >> 24) {
                    var v = T,
                      u = R;
                    break b
                  }
                  T = R = T + 1 | 0;
                  R = j[R]
                }
              } else {
                v = m, u = I
              }
            } while (0);
            10 == u << 24 >> 24 ? (a[C + 12 >> 2] = n + 1 | 0, m = j[v]) : m = u;
            b: do {
              if (0 == m << 24 >> 24) {
                var o = v,
                  t = 16777216
              } else {
                if (34 == m << 24 >> 24) {
                  I = v + 1 | 0;
                  for (n = a[C + 8 >> 2] = I;;) {
                    if (p = j[n], 34 == p << 24 >> 24) {
                      j[I] = 0;
                      o = n + 1 | 0;
                      t = 268435456;
                      break b
                    } else {
                      0 == p << 24 >> 24 || 10 == p << 24 >> 24 ? ua(g.U | 0) : (a[c >> 2] = n, j[I] = te(c), n = a[c >> 2], I = I + 1 | 0)
                    }
                  }
                } else {
                  if (i & 47 == m << 24 >> 24) {
                    I = v + 1 | 0;
                    for (p = n = a[C + 8 >> 2] = I;;) {
                      if (T = j[n], 47 == T << 24 >> 24) {
                        j[p] = 0;
                        o = n + 1 | 0;
                        t = 4;
                        break b
                      } else {
                        0 == T << 24 >> 24 || 10 == T << 24 >> 24 ? ua(g.U | 0) : (I = n + 1 | 0, j[p] = T, R = p + 1 | 0, 92 != T << 24 >> 24) ? (n = I, p = R) : (a[b >> 2] = I, j[p] = Ud(b), 92 == j[I] << 24 >> 24 ? (j[R] = 92, p = p + 2 | 0) : p = R, T = a[b >> 2], (T | 0) != (I | 0)) ? n = T : (j[p] = j[I], n = n + 2 | 0, p = p + 1 | 0)
                      }
                    }
                  } else {
                    do {
                      if (46 != m << 24 >> 24 && 10 <= ((m << 24 >> 24) - 48 | 0) >>> 0) {
                        n = Te | 0;
                        I = g.we | 0;
                        p = 1;
                        c: for (;;) {
                          T = 0 == (p & h | 0);
                          d: do {
                            if (!T) {
                              T = 0 == (p & 16711808 | 0);
                              e: do {
                                if (T) {
                                  for (var y = n, A = I;;) {
                                    var w = j[A];
                                    if (0 == w << 24 >> 24) {
                                      break c
                                    }
                                    var R = A + 1 | 0,
                                      l = w & 255;
                                    if (-1 == w << 24 >> 24) {
                                      break d
                                    }
                                    if (0 == (Oa(v, R, l) | 0)) {
                                      var s = y,
                                        q = l;
                                      break e
                                    }
                                    y = y + 4 | 0;
                                    A = l + (A + 1) | 0
                                  }
                                } else {
                                  y = n;
                                  for (A = I;;) {
                                    w = j[A];
                                    if (0 == w << 24 >> 24) {
                                      break c
                                    }
                                    R = A + 1 | 0;
                                    l = w & 255;
                                    if (-1 == w << 24 >> 24) {
                                      break d
                                    }
                                    if (0 == (Oa(v, R, l) | 0) && 0 == (kc(j[v + l | 0] << 24 >> 24) | 0)) {
                                      s = y;
                                      q = l;
                                      break e
                                    }
                                    y = y + 4 | 0;
                                    A = l + (A + 1) | 0
                                  }
                                }
                              } while (0);
                              a[C >> 2] = a[s >> 2];
                              o = v + q | 0;
                              t = p;
                              break b
                            }
                            y = n;
                            for (R = I;;) {
                              A = j[R];
                              if (0 == A << 24 >> 24) {
                                break c
                              } else {
                                if (-1 == A << 24 >> 24) {
                                  break
                                }
                              }
                              y = y + 4 | 0;
                              R = R + (A & 255) + 1 | 0
                            }
                            R = R + 1 | 0
                          } while (0);
                          n = y;
                          I = R;
                          p <<= 1
                        }
                        if (0 != (kc(j[v] << 24 >> 24) | 0)) {
                          o = v - 1 | 0;
                          a[C + 8 >> 2] = o;
                          t = 0 == (kc(j[v] << 24 >> 24) | 0);
                          c: do {
                            if (t) {
                              var x = o,
                                W = v
                            } else {
                              m = o;
                              for (n = v;;) {
                                j[m] = j[n];
                                I = n + 1 | 0;
                                if (0 == (kc(j[I] << 24 >> 24) | 0)) {
                                  x = n;
                                  W = I;
                                  break c
                                }
                                m = n;
                                n = I
                              }
                            }
                          } while (0);
                          j[x] = 0;
                          o = k ? W : Ld(W);
                          t = j[o];
                          if (40 == t << 24 >> 24) {
                            t = 134217728;
                            break b
                          }
                          o = (t = 91 == t << 24 >> 24) ? o + 1 | 0 : o;
                          t = t ? 67108864 : 33554432;
                          break b
                        }
                        ua(g.C | 0)
                      }
                    } while (0);
                    a[d >> 2] = v;
                    n = Pe(a[d >> 2], d);
                    pa[0] = n;
                    a[z >> 2] = ca[0];
                    a[z + 4 >> 2] = ca[1];
                    n = a[d >> 2];
                    46 != j[n] << 24 >> 24 ? (o = n, t = 536870912) : ua(g.C | 0)
                  }
                }
              }
            } while (0);
            a[z + 100 >> 2] = o;
            m = a[C + 104 >> 2];
            if (0 != (m & 62400 | 0) && 0 != (t & 32768 | 0)) {
              m = o
            } else {
              0 == (m & 838862866 | 0) ? b = t : 0 == (t & 1041761313 | 0) ? b = t : 0 == (e & 960 | 0) ? b = t : (j[C + 108 | 0] = 1, a[C + 96 >> 2] = t, a[C + 100 >> 2] = a[C >> 2], a[C >> 2] = 588190976, b = 960);
              var F = a[C + 4 >> 2] = b;
              break a
            }
          }
        } else {
          j[C + 108 | 0] = 0, i = a[C + 96 >> 2], a[C + 4 >> 2] = i, a[C >> 2] = a[C + 100 >> 2], F = i
        }
      } else {
        j[z + 113 | 0] = 0, F = a[C + 4 >> 2]
      }
    } while (0);
    a[C + 104 >> 2] = F;
    if (0 == (F & e | 0)) {
      ua(0 != (F & 16809984 | 0) ? g.U | 0 : g.C | 0)
    } else {
      return r = c, F
    }
    return S
  }

  function Ba() {
    for (;;) {
      var e = ya(1042011173);
      if (0 == (e & 32768 | 0)) {
        break
      }
    }
    var c = 0 == (e & 4096 | 0);
    a: do {
      if (c) {
        if (0 == (e & 1041810469 | 0)) {
          var b = a[C >> 2],
            d = b & 65280;
          if (12288 == (d | 0)) {
            b = Ka(67328), a[b + 8 >> 2] = Ac(), Ba(), d = Ka(512), a[b + 12 >> 2] = a[a[z + 44 >> 2] + 4 >> 2], 262144 == (ya(1042281509) | 0) ? (Ba(), a[d + 16 >> 2] = a[a[z + 44 >> 2] + 4 >> 2]) : Fb()
          } else {
            if (13056 == (d | 0)) {
              b = Ac(), a[ad(0) + 8 >> 2] = b
            } else {
              if (12544 == (d | 0)) {
                b = Ka(512), d = ad(0), a[b + 16 >> 2] = a[d + 16 >> 2], ya(131072), a[d + 8 >> 2] = Ac()
              } else {
                if (12800 == (d | 0)) {
                  if (ya(1), d = Ma(16386), 0 == (a[C + 4 >> 2] & 2 | 0)) {
                    a[Ka(66048) + 8 >> 2] = d, b = Ma(16384), d = ad(Ma(2)), a[d + 8 >> 2] = b, 0 == (b | 0) && (a[d >> 2] = 512)
                  } else {
                    if (6912 == (a[d >> 2] & 65280 | 0)) {
                      var f = Ka(198144),
                        b = d + 8 | 0;
                      a[f + 8 >> 2] = a[b >> 2];
                      a[f + 12 >> 2] = a[d + 12 >> 2];
                      d = ad(0);
                      a[d >> 2] = 69120;
                      a[d + 8 >> 2] = a[b >> 2]
                    } else {
                      ua(g.C | 0)
                    }
                  }
                } else {
                  1024 == (d | 0) || 1280 == (d | 0) ? (b = Ka(b), a[b + 8 >> 2] = Ma(57352), d = a[C + 4 >> 2], 0 == (d & 8 | 0) ? b = d : (d = b | 0, a[d >> 2] |= a[C >> 2], a[b + 12 >> 2] = Ma(57344), b = a[C + 4 >> 2]), 0 != (b & 8192 | 0) && Fb()) : 2048 == (d | 0) ? a[Ka(512) + 16 >> 2] = a[z + 48 >> 2] : 2304 == (d | 0) ? a[Ka(512) + 16 >> 2] = a[z + 52 >> 2] : Ue(b)
                }
              }
            }
          }
        } else {
          Fb(), Ue(66048)
        }
      } else {
        if (8192 != (ya(1042019365) | 0)) {
          for (;;) {
            if (0 == (a[C + 4 >> 2] & 32768 | 0) && (Fb(), Ba()), 8192 == (ya(1042019365) | 0)) {
              break a
            }
          }
        }
      }
    } while (0)
  }

  function Ud(e) {
    for (var c, b = a[e >> 2], d = 120 == j[b] << 24 >> 24, f = d ? 16 : 8, b = d ? b + 1 | 0 : b, i = d & 1, h = 0;;) {
      var k = j[b],
        m = (k | 32) & 255,
        n = m - 48 | 0,
        m = 9 < n >>> 0 ? m - 87 | 0 : n;
      if (m >>> 0 < f >>> 0) {
        m = m + h * f | 0;
        if (255 < m >>> 0) {
          c = 8;
          break
        }
        var n = b + 1 | 0,
          I = i + 1 | 0;
        if (3 <= I >>> 0) {
          var p = n,
            T = m;
          c = 13;
          break
        }
        b = n;
        i = I;
        h = m
      } else {
        if (!d) {
          c = 8;
          break
        }
        if (1 == (i | 0)) {
          var l = 92;
          c = 14;
          break
        }
        p = b;
        T = h;
        c = 13;
        break
      }
    }
    if (8 == c) {
      if (0 != (i | 0)) {
        p = b, T = h
      } else {
        if (97 == k << 24 >> 24) {
          var v = g.e | 0;
          c = 10
        } else {
          if (98 == k << 24 >> 24) {
            v = g.e + 1 | 0, c = 10
          } else {
            if (101 == k << 24 >> 24) {
              v = g.e + 2 | 0, c = 10
            } else {
              if (102 == k << 24 >> 24) {
                v = g.e + 3 | 0, c = 10
              } else {
                if (110 == k << 24 >> 24) {
                  v = g.e + 4 | 0, c = 10
                } else {
                  if (114 == k << 24 >> 24) {
                    v = g.e + 5 | 0, c = 10
                  } else {
                    if (116 == k << 24 >> 24) {
                      v = g.e + 6 | 0, c = 10
                    } else {
                      if (118 == k << 24 >> 24) {
                        v = g.e + 7 | 0, c = 10
                      } else {
                        if (92 == k << 24 >> 24) {
                          v = g.e + 8 | 0, c = 10
                        } else {
                          var u = g.e + 9 | 0,
                            o = b;
                          c = 12
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        10 == c && (u = v, o = b + 1 | 0);
        p = o;
        T = j[u + 10 | 0] << 24 >> 24
      }
      c = 13
    }
    13 == c && (a[e >> 2] = p, l = T & 255);
    return l
  }

  function Pb(e) {
    var c = Ja(20);
    a[c >> 2] = e;
    a[c + 4 >> 2] = a[z + 80 >> 2];
    return c
  }

  function Ac() {
    ya(1);
    return Ma(2)
  }

  function Ue(e) {
    a[Ka(e) + 8 >> 2] = Ma(57344);
    0 != (a[C + 4 >> 2] & 8192 | 0) && Fb()
  }

  function ad(e) {
    var c = a[z + 48 >> 2],
      b = a[z + 52 >> 2],
      d = Ka(67328),
      f = Pb(512);
    a[z + 52 >> 2] = f;
    f = Pb(512);
    a[z + 48 >> 2] = f;
    Ba();
    f = Ka(66048);
    a[f + 8 >> 2] = e;
    a[f + 16 >> 2] = d;
    a[a[z + 52 >> 2] + 16 >> 2] = f;
    e = a[a[z + 44 >> 2] + 4 >> 2];
    a[d + 12 >> 2] = e;
    a[a[z + 48 >> 2] + 16 >> 2] = e;
    a[z + 52 >> 2] = b;
    a[z + 48 >> 2] = c;
    return d
  }

  function te(e) {
    var c = a[e >> 2],
      b = c + 1 | 0;
    a[e >> 2] = b;
    var d = j[c];
    92 == d << 24 >> 24 ? (d = Ud(e), 92 != d << 24 >> 24 ? e = d : (a[e >> 2] | 0) != (b | 0) ? e = 92 : (b = j[b], 0 == b << 24 >> 24 ? e = 0 : (a[e >> 2] = c + 2 | 0, e = b))) : e = d;
    return e
  }

  function kc(a) {
    return (95 == (a | 0) | 0 != (fa(a) | 0)) & 1
  }

  function re(e) {
    var c;
    c = e + 8 | 0;
    var b = a[c >> 2];
    if (5 != (b | 0)) {
      a[c >> 2] = b + 1 | 0;
      var b = O[Ve + (b << 1) >> 1] & 65535,
        d = Ja(b << 2);
      c = (e + 4 | 0) >> 2;
      var f = a[c],
        i = 0 == (f | 0),
        e = (e + 16 | 0) >> 2,
        h = a[e];
      a: do {
        if (i) {
          var k = h
        } else {
          for (var m = 0, n = h, j = f;;) {
            var p = a[n + (m << 2) >> 2];
            if (0 != (p | 0)) {
              for (n = p;;) {
                var j = n + 24 | 0,
                  p = a[j >> 2],
                  g = ((Pc(n + 28 | 0) >>> 0) % (b >>> 0) << 2) + d | 0;
                a[j >> 2] = a[g >> 2];
                a[g >> 2] = n;
                if (0 == (p | 0)) {
                  break
                }
                n = p
              }
              j = a[c];
              n = a[e]
            }
            m = m + 1 | 0;
            if (m >>> 0 >= j >>> 0) {
              k = n;
              break a
            }
          }
        }
      } while (0);
      Z(k);
      a[c] = b;
      a[e] = d
    }
  }

  function we(e, c) {
    for (var b = e;;) {
      var d = a[b >> 2];
      if (0 == (d | 0)) {
        break
      }
      b = d | 0
    }
    d = Ja(8);
    a[b >> 2] = d;
    a[d + 4 >> 2] = c
  }

  function ye(e) {
    var c = a[e >> 2];
    if (0 == (c | 0)) {
      e = 0
    } else {
      var b = a[c + 4 >> 2];
      a[e >> 2] = a[c >> 2];
      Z(c);
      e = b
    }
    return e
  }

  function Ja(a) {
    var c = mc(a);
    Da(c, a);
    return c
  }

  function Bc(e, c, b) {
    var d = r;
    r += 4;
    var f = 0 == (e | 0) ? uc | 0 : e,
      i = We(d, f, c);
    if (0 <= (i | 0)) {
      var h = ra(g.ua | 0),
        k = h + 2 | 0,
        m = 0 != (b | 0),
        n = m ? ra(b) : 0,
        e = ra(g.xa | 0),
        I = a[d >> 2],
        c = ac(I, e + (i + (n + (k + 3))) | 0);
      0 == (c | 0) ? (j[I + i | 0] = 10, e = i + 1 | 0, b = I) : (a[d >> 2] = c, md(c + k | 0, c, i), I = k + i | 0, Ta(c, g.ua | 0), j[c + h | 0] = 58, j[h + (c + 1) | 0] = 32, m ? (0 == j[f] << 24 >> 24 ? f = I : (j[c + I | 0] = 58, j[I + (c + 1) | 0] = 32, f = I + 2 | 0), Ta(c + f | 0, b), b = f + n | 0) : b = I, Ta(c + b | 0, g.xa | 0), e = b + e | 0, b = c);
      Yb(0);
      for (c = b; 0 != (e | 0);) {
        f = c;
        for (n = e;;) {
          var p = Vd(3, f, n);
          if (0 <= (p | 0)) {
            break
          }
          if (4 != (a[P.c >> 2] | 0)) {
            break
          }
        }
        f = p;
        if (0 > (f | 0)) {
          break
        }
        c = c + f | 0;
        e = e - f | 0
      }
      Z(b)
    }
    r = d
  }

  function Ce() {
    var e = r;
    r += 4;
    a[e >> 2] = arguments[Ce.length];
    Bc(g.xb | 0, a[e >> 2], 0);
    r = e
  }

  function Xe() {
    var e = r;
    r += 4;
    a[e >> 2] = arguments[Xe.length];
    var c = a[e >> 2],
      b = 0 == (a[P.c >> 2] | 0) ? 0 : Mb(a[P.c >> 2]);
    Bc(g.o | 0, c, b);
    r = e
  }

  function Ma(e) {
    var c, b, d, f, i = r;
    r += 20;
    a[i >> 2] = 2130706432;
    var h = i + 12 | 0;
    a[h >> 2] = 0;
    var k = e | 1041762289,
      m = e | 1041762273;
    d = i;
    for (var n = 0, j = e | 1041761317;;) {
      var p = ya(j);
      if (0 == (p & e | 0)) {
        if (c = a[C >> 2], 0 != (n | 0) & 654513154 == (c | 0)) {
          p = Pb(621745408), a[n + 8 >> 2] = p, a[p + 16 >> 2] = n, d = p, n = 0, j = 1041761313
        } else {
          if (0 == (p & 976 | 0)) {
            c = Pb(c);
            f = c >> 2;
            var T = d + 12 | 0;
            a[T >> 2] = c;
            a[f + 4] = d;
            0 == (p & 1041760261 | 0) ? (d = c, j = 1041761317) : 33554432 == (p | 0) || 67108864 == (p | 0) ? (d = (c | 0) >> 2, a[d] = 9984, T = a[z + 64 >> 2], j = a[C + 8 >> 2], T = Oc(a[T + 4 >> 2], a[T + 16 >> 2], j), 0 == (T | 0) ? a[f + 2] = sa(a[z + 60 >> 2], j) : (a[d] = 6144, a[f + 2] = a[T + 16 >> 2]), 0 != (p & 67108864 | 0) && (a[d] |= 655360, a[f + 3] = Ma(2048)), d = c, j = k) : 536870912 == (p | 0) || 268435456 == (p | 0) ? (a[f] = 9984, j = d = Ja(20), a[f + 2] = d, 0 == (p & 536870912 | 0) ? gb(j, a[C + 8 >> 2]) : Y(j, (ca[0] = a[z >> 2], ca[1] = a[z + 4 >> 2], pa[0])), d = c, j = k) : 4 == (p | 0) ? (Qe(a[C + 8 >> 2], c, Ja(32)), d = c, j = k) : 134217728 == (p | 0) ? (a[f] = 6400, a[f + 3] = sa(a[z + 72 >> 2], a[C + 8 >> 2]), a[f + 2] = Ac(), d = c, j = k) : 1 == (p | 0) ? (p = Ma(2), a[T >> 2] = p, 0 == (p | 0) ? ua(g.Pc | 0) : (a[p + 16 >> 2] = d, d = p, j = k)) : 1048576 == (p | 0) ? (n = d = c, j = m) : (524288 == (p | 0) && (a[f + 2] = Ac()), d = c, j = k)
          } else {
            var j = c & 2130706432,
              T = c & 65280,
              l = 4608 == (T | 0);
            for (f = d;;) {
              b = (f + 16 | 0) >> 2;
              d = a[b];
              if (j >>> 0 <= (a[d >> 2] & 2113929216) >>> 0 && !((c | 0) == (a[f >> 2] | 0) & l)) {
                break
              }
              f = d
            }
            9472 == (T | 0) ? (d = c + 100663296 | 0, a[C >> 2] = d) : d = c;
            d = Pb(d);
            c = d >> 2;
            a[a[b] + 12 >> 2] = d;
            a[c + 4] = a[b];
            0 == (p & 960 | 0) ? (a[c + 3] = f, p = m) : (a[c + 2] = f, 8192 != (a[C >> 2] & 65280 | 0) ? p = 1041761317 : (ya(1048576), p = d | 0, a[p >> 2] &= -2130706433, p = m));
            a[b] = d;
            j = p
          }
        }
      } else {
        return r = i, a[h >> 2]
      }
    }
    return S
  }

  function Ae(e) {
    var c = a[Lb >> 2];
    if ((e | 0) != (g.ve | 0) && !(45 == j[e] << 24 >> 24 && 0 == j[e + 1 | 0] << 24 >> 24) && (c = Cd(e, g.wa | 0), 0 == (c | 0))) {
      var b = r;
      Xe((J = r, r += 4, a[J >> 2] = e, J));
      r = b
    }
    e = c;
    if (0 == (e | 0)) {
      wc(1)
    } else {
      return e
    }
    return S
  }

  function mc(e) {
    var c = r,
      b = ia(e);
    if (0 != (b | 0) | 0 == (e | 0)) {
      return r = c, b
    }
    Ob(g.o | 0, (J = r, r += 4, a[J >> 2] = g.s | 0, J));
    return S
  }

  function Tc(e, c) {
    var b = r,
      d = ac(e, c);
    if (0 != (d | 0) | 0 == (c | 0)) {
      return r = b, d
    }
    Ob(g.o | 0, (J = r, r += 4, a[J >> 2] = g.s | 0, J));
    return S
  }

  function xa(e) {
    var c = r;
    if (0 == (e | 0)) {
      var b = 0
    } else {
      var d = ra(e),
        f = ia(d + 1);
      oa(f, e, d);
      j[f + d] = 0;
      0 != (f | 0) ? b = f : Ob(g.o | 0, (J = r, r += 4, a[J >> 2] = g.s | 0, J))
    }
    r = c;
    return b
  }

  function Me() {
    var e = r;
    r += 8;
    var c = e + 4;
    a[e >> 2] = arguments[Me.length];
    if (0 > (We(c, g.uc | 0, a[e >> 2]) | 0)) {
      Ob(g.o | 0, (J = r, r += 4, a[J >> 2] = g.s | 0, J))
    } else {
      return r = e, a[c >> 2]
    }
    return S
  }

  function Ob(e) {
    var c = r;
    r += 4;
    a[c >> 2] = arguments[Ob.length];
    Bc(e, a[c >> 2], 0);
    wc(1)
  }

  function Uc(e) {
    var c = r;
    r += 4;
    a[c >> 2] = arguments[Uc.length];
    var c = a[c >> 2],
      b = 0 == (a[P.c >> 2] | 0) ? 0 : Mb(a[P.c >> 2]);
    Bc(e, c, b);
    wc(1)
  }

  function We(e, c, b) {
    var d = r;
    r += 136;
    var f = d + 4;
    a[d >> 2] = b;
    j[f] = j[d];
    j[f + 1] = j[d + 1];
    j[f + 2] = j[d + 2];
    j[f + 3] = j[d + 3];
    var b = d + 8 | 0,
      i = Ye(b, 128, c, a[d >> 2]);
    128 > (i | 0) ? (a[e >> 2] = xa(b), e = i) : (b = i + 1 | 0, i = mc(b), a[e >> 2] = i, e = Ye(i, b, c, a[f >> 2]));
    r = d;
    return e
  }

  function Ze(e, c, b, d) {
    var f, i = r;
    r += 52;
    var h = e & -257;
    if (255 == (e | 0)) {
      for (var h = i | 0, k = r, e = c + 8 | 0, c = N | 0;;) {
        var m = a[c >> 2];
        if (0 == (m | 0)) {
          f = g.wb | 0;
          break
        }
        if (0 != (Oa(a[c + 4 >> 2], a[e >> 2], Pa) | 0)) {
          c = c + 12 | 0
        } else {
          Yc(h, g.ra | 0, (J = r, r += 4, a[J >> 2] = m, J));
          f = h;
          break
        }
      }
      r = k;
      h = f
    } else {
      c = N | 0;
      for (f = c >> 2;;) {
        m = a[f];
        k = 0 == (m | 0);
        if (k | (m | 0) == (h | 0)) {
          break
        }
        c = c + 12 | 0;
        f = c >> 2
      }
      0 == (e & 256 | 0) ? h = a[f + 2] : (e = i | 0, k ? Yc(e, g.Tb | 0, (J = r, r += 4, a[J >> 2] = h, J)) : Ta(e, a[f + 1]), h = e)
    }
    f = ra(h) + 1 | 0;
    if (0 != (d | 0)) {
      if (f >>> 0 < d >>> 0) {
        Ta(b, h)
      } else {
        d = d - 1 | 0;
        k = U;
        for (c = 0; c < d; c++) {
          e = k ? 0 : j[h + c], j[b + c] = e, k = k || 0 == j[h + c]
        }
        j[b + d | 0] = 0
      }
    }
    r = i;
    return f
  }

  function Nb(e) {
    var c, b = e | 0;
    if (62053 == (a[b >> 2] | 0) && (e = a[e + 12 >> 2], c = e >> 2, 0 != (e | 0))) {
      var d = e | 0;
      53829 == (a[d >> 2] | 0) && (a[b >> 2] = 0, a[d >> 2] = 0, b = a[c + 1], 0 != (b | 0) && Z(b), b = a[c + 4], 0 != (b | 0) && Z(b), b = a[c + 5], 0 != (b | 0) && Z(b), b = a[c + 15], 0 != (b | 0) && Z(b), b = a[c + 17], 0 != (b | 0) && Z(b - 512 | 0), c = a[c + 18], 0 != (c | 0) && Z(c), Z(e))
    }
  }

  function Od(e, c, b) {
    var d, f, i, h, k, m = r;
    r += 112;
    k = m >> 2;
    var n = b & -129,
      I = 0 != (b & 1 | 0),
      p = 0 == (b & 16 | 0);
    do {
      if (p | I ^ 1) {
        if (0 == (b & 32 | 0)) {
          var g = ra(c)
        } else {
          var l = a[e + 8 >> 2];
          if (l >>> 0 < c >>> 0) {
            var v = 16;
            break
          }
          g = l - c | 0
        }
        var u = ia(351);
        h = u >> 2;
        var o = u;
        if (0 == (u | 0)) {
          v = 12
        } else {
          var t = 3 * (g >>> 1) + 1 | 0;
          a[k + 4] = t;
          var y = ia(t << 2);
          a[k + 3] = y;
          i = (m + 20 | 0) >> 2;
          a[i] = 0;
          if (0 == (y | 0)) {
            Z(u), v = 12
          } else {
            a[k + 7] = o;
            a[k] = c;
            a[k + 1] = c + g | 0;
            f = (m + 8 | 0) >> 2;
            a[f] = 0;
            a[k + 6] = 0;
            for (var A = u + 8 | 0, w = (m + 32 | 0) >> 2, s = w + 20; w < s; w++) {
              a[w] = 0
            }
            a[A >> 2] = 256;
            a[h + 4] = 0;
            a[h + 5] = 0;
            a[h + 3] = 0;
            a[h + 6] = n;
            var q = u + 40 | 0;
            a[q >> 2] = 0;
            a[h + 11] = 0;
            a[h + 12] = 0;
            a[h + 15] = 0;
            a[h + 16] = -1;
            var x = u + 68 | 0;
            d = x >> 2;
            var z = x,
              W = u + 72 | 0,
              F = u + 76 | 0,
              C = u + 80 | 0;
            a[d] = 0;
            a[d + 1] = 0;
            a[d + 2] = 0;
            a[d + 3] = 0;
            a[h + 13] = 1;
            a[h + 14] = u + 220 | 0;
            Da(u + 92 | 0, 256);
            a[h + 21] = 0;
            aa(m, 134217728, 0);
            a[h + 8] = a[i] - 1 | 0;
            if (I) {
              Wd(m, 128)
            } else {
              if (p) {
                Xd(m, 128, 128)
              } else {
                var B = m,
                  E = bb,
                  D = bb,
                  D = (B | 0) >> 2,
                  J = a[D],
                  E = (B + 4 | 0) >> 2,
                  G = a[E];
                if (J >>> 0 < G >>> 0) {
                  var M = J,
                    H = G
                } else {
                  K(B, 14), M = a[D], H = a[E]
                }
                var L = M >>> 0 < H >>> 0;
                a: do {
                  if (L) {
                    for (var N = M;;) {
                      a[D] = N + 1 | 0;
                      Cc(B, j[N] << 24 >> 24);
                      var O = a[D];
                      if (O >>> 0 >= a[E] >>> 0) {
                        break a
                      }
                      N = O
                    }
                  }
                } while (0)
              }
            }
            aa(m, 134217728, 0);
            a[h + 9] = a[i] - 1 | 0;
            var P = o,
              X = a[P + 56 >> 2],
              ba = 0 == (a[f] | 0);
            a: do {
              if (ba) {
                for (var ca = P + 52 | 0, Y = -128;;) {
                  var ea = X + Y | 0,
                    fa = 0 == j[ea] << 24 >> 24;
                  b: do {
                    var na;
                    if (na = fa) {
                      for (var ua = (a[P + 12 >> 2] + 7 | 0) / 8 & -1, la = Y & 255, oa = P + 8 | 0, pa = 0, Ea = a[P + 20 >> 2];;) {
                        if ((pa | 0) >= (ua | 0)) {
                          var ja = 0;
                          break
                        }
                        if (0 != j[Ea + la | 0] << 24 >> 24) {
                          ja = 1;
                          break
                        }
                        pa = pa + 1 | 0;
                        Ea = Ea + a[oa >> 2] | 0
                      }
                      na = 0 != (ja | 0)
                    }
                    if (na) {
                      var ya = a[ca >> 2];
                      a[ca >> 2] = ya + 1 | 0;
                      var va = ya & 255;
                      j[ea] = va;
                      var Ia = Y + 1 | 0;
                      if (128 > (Ia | 0)) {
                        for (var sa = Ia;;) {
                          var ta = X + sa | 0,
                            za;
                          if (za = 0 == j[ta] << 24 >> 24) {
                            for (var Aa = (a[P + 12 >> 2] + 7 | 0) / 8 & -1, Ka = Y & 255, La = sa & 255, Vc = P + 8 | 0, Ca = 0, wa = a[P + 20 >> 2];;) {
                              if ((Ca | 0) >= (Aa | 0)) {
                                var qa = 1;
                                break
                              }
                              if (j[wa + Ka | 0] << 24 >> 24 != j[wa + La | 0] << 24 >> 24) {
                                qa = 0;
                                break
                              }
                              Ca = Ca + 1 | 0;
                              wa = wa + a[Vc >> 2] | 0
                            }
                            za = 0 != (qa | 0)
                          }
                          za && (j[ta] = va);
                          var rc = sa + 1 | 0;
                          if (128 == (rc | 0)) {
                            break b
                          }
                          sa = rc
                        }
                      }
                    }
                  } while (0);
                  var Ma = Y + 1 | 0;
                  if (128 == (Ma | 0)) {
                    break a
                  }
                  Y = Ma
                }
              }
            } while (0);
            var Ga = m,
              Ja = o,
              Kb = Ga + 20 | 0;
            a[Ja + 28 >> 2] = a[Kb >> 2];
            var Qa = Ga + 12 | 0,
              Fa = ac(a[Qa >> 2], a[Kb >> 2] << 2),
              yb = Ja + 4 | 0;
            a[yb >> 2] = Fa;
            0 == (Fa | 0) && (K(Ga, 12), a[yb >> 2] = a[Qa >> 2]);
            $e(a[f], o);
            if (3 < (a[F >> 2] | 0)) {
              var Zb = o,
                xa = bb,
                Ba = bb,
                Oa = 0 == (a[f] | 0);
              a: do {
                if (Oa) {
                  var Na = ia(1028),
                    Ba = (Zb + 68 | 0) >> 2;
                  a[Ba] = Na;
                  if (0 != (Na | 0)) {
                    var Ra = Na + 512 | 0;
                    a[Ba] = Ra;
                    for (var xa = (Zb + 76 | 0) >> 2, Pa = -128, $a = Ra;;) {
                      a[$a + (Pa << 2) >> 2] = a[xa];
                      var sc = Pa + 1 | 0;
                      if (128 == (sc | 0)) {
                        break
                      }
                      Pa = sc;
                      $a = a[Ba]
                    }
                    var tc = a[xa];
                    if (0 < (tc | 0)) {
                      for (var db = Zb + 60 | 0, zb = 0, Wa = tc;;) {
                        a[a[Ba] + (j[a[db >> 2] + zb | 0] << 24 >> 24 << 2) >> 2] = Wa + (zb ^ -1) | 0;
                        var Sa = zb + 1 | 0,
                          Ta = a[xa];
                        if ((Sa | 0) >= (Ta | 0)) {
                          break a
                        }
                        zb = Sa;
                        Wa = Ta
                      }
                    }
                  }
                }
              } while (0);
              af(a[f], o);
              if (0 == (a[W >> 2] | 0)) {
                var sb = a[z >> 2];
                0 != (sb | 0) && (Z(sb), a[z >> 2] = 0)
              }
            }
            var Ua = a,
              Ib = h + 22,
              Va = a[f],
              tb = o;
            do {
              if (0 == (Va | 0)) {
                var hb = 0,
                  ib = 0,
                  Xa = a[tb + 4 >> 2];
                a: for (;;) {
                  var Ya = ib,
                    jb = Xa;
                  b: for (;;) {
                    for (var Za = jb;;) {
                      var cb = Za + 4 | 0,
                        Jb = a[cb >> 2] & -134217728;
                      if (1207959552 == (Jb | 0)) {
                        break
                      } else {
                        if (1342177280 == (Jb | 0)) {
                          break b
                        } else {
                          if (134217728 == (Jb | 0)) {
                            break a
                          } else {
                            Za = cb
                          }
                        }
                      }
                    }
                    Ya = Ya + 1 | 0;
                    jb = cb
                  }
                  hb = (Ya | 0) > (hb | 0) ? Ya : hb;
                  ib = Ya - 1 | 0;
                  Xa = cb
                }
                if (0 == (Ya | 0)) {
                  var pb = hb
                } else {
                  var xb = tb + 40 | 0;
                  a[xb >> 2] |= 4;
                  pb = hb
                }
              } else {
                pb = 0
              }
            } while (0);
            Ua[Ib] = pb;
            a[h] = 53829;
            a[e + 4 >> 2] = a[C >> 2];
            a[e + 12 >> 2] = o;
            a[e >> 2] = 62053;
            0 != (a[q >> 2] & 4 | 0) && K(m, 15);
            0 == (a[f] | 0) ? v = 0 : (Nb(e), v = a[f])
          }
        }
      } else {
        v = 16
      }
    } while (0);
    r = m;
    return v
  }

  function aa(e, c, b) {
    var d;
    if (0 == (a[e + 8 >> 2] | 0)) {
      d = (e + 20 | 0) >> 2;
      var f = a[d],
        i = a[e + 16 >> 2];
      (f | 0) < (i | 0) || (bf(e, 3 * ((i + 1 | 0) / 2 & -1) | 0), f = a[d]);
      a[d] = f + 1 | 0;
      a[a[e + 12 >> 2] + (f << 2) >> 2] = b | c
    }
  }

  function Wd(e, c) {
    var b, d;
    d = (e + 20 | 0) >> 2;
    b = (e | 0) >> 2;
    for (var f = e + 4 | 0, i = 1;;) {
      for (var h, k, m = a[d];;) {
        var n = a[b],
          I = a[f >> 2];
        if (n >>> 0 >= I >>> 0) {
          break
        }
        var p = j[n];
        if (!(124 != p << 24 >> 24 & (p << 24 >> 24 | 0) != (c | 0))) {
          break
        }
        cf(e)
      }
      if ((a[d] | 0) == (m | 0)) {
        K(e, 14);
        var p = a[b],
          g = a[f >> 2]
      } else {
        p = n, g = I
      } if (p >>> 0 >= g >>> 0) {
        break
      }
      if (124 != j[p] << 24 >> 24) {
        break
      }
      a[b] = p + 1 | 0;
      0 == (i | 0) ? i = k : (Ra(e, 2013265920, 1 - m + a[d] | 0, m), h = i = m);
      aa(e, -2147483648, a[d] - h | 0);
      h = a[d];
      Wa(e, i, h - i | 0);
      k = a[d];
      aa(e, -2013265920, 0);
      i = 0;
      h = h - 1 | 0
    }
    0 == (i | 0) && (Wa(e, k, a[d] - k | 0), aa(e, -1879048192, a[d] - h | 0))
  }

  function Xd(e, c, b) {
    var d, f;
    f = (e + 20 | 0) >> 2;
    var i = a[f];
    d = (e | 0) >> 2;
    var h = a[d],
      k = e + 4 | 0;
    if (h >>> 0 < a[k >> 2] >>> 0) {
      if (94 != j[h] << 24 >> 24) {
        var h = 0,
          m = 1
      } else {
        a[d] = h + 1 | 0, aa(e, 402653184, 0), h = e + 28 | 0, m = a[h >> 2] + 40 | 0, a[m >> 2] |= 1, h = a[h >> 2] + 44 | 0, a[h >> 2] = a[h >> 2] + 1 | 0, h = 0, m = 1
      }
    } else {
      h = 0, m = 1, __label__ = 5
    }
    a: for (;;) {
      var n = a[d],
        I = a[k >> 2];
      if (n >>> 0 >= I >>> 0) {
        break
      }
      var p = n + 1 | 0;
      do {
        if (p >>> 0 < I >>> 0 && (j[n] << 24 >> 24 | 0) == (c | 0) && (j[p] << 24 >> 24 | 0) == (b | 0)) {
          break a
        }
      } while (0);
      h = df(e, m);
      m = 0
    }
    0 != (h | 0) && (a[f] = a[f] - 1 | 0, aa(e, 536870912, 0), c = e + 28 | 0, b = a[c >> 2] + 40 | 0, a[b >> 2] |= 2, c = a[c >> 2] + 48 | 0, a[c >> 2] = a[c >> 2] + 1 | 0);
    (a[f] | 0) == (i | 0) && K(e, 14)
  }

  function xe(e) {
    Uc(g.o | 0, (J = r, r += 4, a[J >> 2] = e, J))
  }

  function Pd(e, c, b) {
    var d = r,
      b = Od(e, c, b);
    if (0 == (b | 0)) {
      e = 0
    } else {
      var f = Ze(b, e, 0, 0),
        i = mc(f);
      Ze(b, e, i, f);
      e = i
    }
    0 == (e | 0) ? r = d : Ob(g.Gb | 0, (J = r, r += 8, a[J >> 2] = c, a[J + 4 >> 2] = e, J))
  }

  function ze() {
    ef(g.nd | 0, 20, 1, a[ob >> 2]);
    wc(1)
  }

  function K(e, c) {
    var b = e + 8 | 0;
    0 == (a[b >> 2] | 0) && (a[b >> 2] = c);
    a[e >> 2] = Yd | 0;
    a[e + 4 >> 2] = Yd | 0
  }

  function $e(e, c) {
    var b, d, f, i = 0 == (e | 0);
    a: do {
      if (i) {
        b = a[c + 12 >> 2];
        d = 0 < (b | 0);
        b: do {
          if (d) {
            for (var h = a[c + 16 >> 2], k = 0, m = 0;;) {
              if (m = 0 == (a[h + (k << 4) + 12 >> 2] | 0) ? m : 1, k = k + 1 | 0, (k | 0) >= (b | 0)) {
                var n = m;
                break b
              }
            }
          } else {
            n = 0
          }
        } while (0);
        d = (c + 64 | 0) >> 2;
        a[d] = 0;
        b = (c + 76 | 0) >> 2;
        for (var h = 0 == (n | 0), I = a[c + 4 >> 2] + 4 | 0, p = k = 0, m = 0;;) {
          var g, l, v = I + 4 | 0,
            u = a[I >> 2],
            o = u & -134217728;
          b: do {
            if (268435456 == (o | 0)) {
              var t = v,
                y = l,
                A = 0 == (k | 0) ? I : g,
                w = k + 1 | 0,
                s = u,
                q = p,
                r = m;
              f = 33
            } else {
              if (1207959552 == (o | 0) || 1744830464 == (o | 0) || 1879048192 == (o | 0)) {
                t = v, y = l, A = g, w = k, s = u, q = p, r = m, f = 33
              } else {
                if (1476395008 == (o | 0) || 2013265920 == (o | 0)) {
                  for (var x = bd(v, p, n), z = I, F = u;;) {
                    if (z = ((F & 134217727) << 2) + z | 0, F = a[z >> 2], u = F & -134217728, 1610612736 == (u | 0) || -1879048192 == (u | 0)) {
                      f = 12;
                      break b
                    } else {
                      if (-2013265920 != (u | 0)) {
                        break
                      }
                    }
                  }
                  i = c + 40 | 0;
                  a[i >> 2] |= 4;
                  break a
                } else {
                  -1744830464 == (o | 0) || -1610612736 == (o | 0) || 402653184 == (o | 0) || 536870912 == (o | 0) || 1610612736 == (o | 0) || -1879048192 == (o | 0) || 134217728 == (o | 0) ? (z = v, F = u, x = p, f = 12) : (671088640 == (o | 0) ? ((k | 0) > (a[b] | 0) ? (a[b] = k, -1 < (p | 0) ? (t = m + p | 0, a[d] = t, y = g, q = k, r = t) : (a[d] = p, y = g, r = q = p)) : (y = l, q = (-1 < (p | 0) ? k : 0) + p | 0, r = m), t = v, A = g, w = 0, s = u, q = (q >>> 31 ^ 1) + q | 0) : 805306368 == (o | 0) ? ((k | 0) > (a[b] | 0) ? (a[b] = k, -1 < (p | 0) ? (t = m + p | 0, a[d] = t, y = g, q = k, r = t) : (a[d] = p, y = g, r = q = p)) : (y = l, q = (-1 < (p | 0) ? k : 0) + p | 0, r = m), t = v, A = g, w = 0, s = u, q = h ? (q >>> 31 ^ 1) + q | 0 : -1) : (k | 0) > (a[b] | 0) ? (a[b] = k, -1 < (p | 0) ? (r = m + p | 0, a[d] = r, t = v, A = y = g, w = 0, s = u, q = -1) : (a[d] = p, t = v, A = y = g, w = 0, s = u, q = -1, r = p)) : (t = v, y = l, A = g, w = 0, s = u, q = -1, r = m), f = 33)
                }
              }
            }
          } while (0);
          12 == f && ((k | 0) > (a[b] | 0) ? (a[b] = k, -1 < (x | 0) ? (r = m + x | 0, a[d] = r, t = z, A = y = g, w = 0, s = F, q = k) : (a[d] = x, t = z, A = y = g, w = 0, s = F, r = q = x)) : (t = z, y = l, A = g, w = 0, s = F, q = (-1 < (x | 0) ? k : 0) + x | 0, r = m));
          if (134217728 == (s & -134217728 | 0)) {
            break
          }
          I = t;
          l = y;
          g = A;
          k = w;
          p = q;
          m = r
        }
        h = a[b];
        if (0 == (h | 0)) {
          a[d] = -1
        } else {
          if (h = ia(h + 1 | 0), a[c + 60 >> 2] = h, 0 == (h | 0)) {
            a[b] = 0, a[d] = -1
          } else {
            b = a[b];
            d = 0 < (b | 0);
            b: do {
              if (d) {
                k = h + b | 0;
                m = h;
                for (u = y;;) {
                  for (;;) {
                    var C = u + 4 | 0,
                      B = a[u >> 2];
                    if (268435456 == (B & -134217728 | 0)) {
                      break
                    }
                    u = C
                  }
                  u = m + 1 | 0;
                  j[m] = B & 255;
                  if ((u | 0) == (k | 0)) {
                    var D = k;
                    break b
                  }
                  m = u;
                  u = C
                }
              } else {
                D = h
              }
            } while (0);
            j[D] = 0
          }
        }
      }
    } while (0)
  }

  function af(e, c) {
    var b, d, f;
    do {
      if (0 == (e | 0)) {
        f = (c + 76 | 0) >> 2;
        var i = ia(a[f] << 2);
        d = i >> 2;
        if (0 == (i | 0)) {
          a[c + 72 >> 2] = 0
        } else {
          var h = ia(a[f] << 2),
            k = h;
          b = (c + 72 | 0) >> 2;
          a[b] = k;
          if (0 != (h | 0)) {
            var h = a[f],
              m = 0 < (h | 0);
            a: do {
              if (m) {
                for (var n = 0, I = h, p = k;;) {
                  a[p + (n << 2) >> 2] = (I << 1) + (n ^ -1) | 0;
                  var n = n + 1 | 0,
                    g = a[f];
                  if ((n | 0) >= (g | 0)) {
                    break
                  }
                  I = g;
                  p = a[b]
                }
                if (0 < (g | 0)) {
                  n = c + 60 | 0;
                  for (I = p = g;;) {
                    I = I - 1 | 0;
                    for (a[(I << 2 >> 2) + d] = p;;) {
                      var l = a[f];
                      if ((p | 0) >= (l | 0)) {
                        break
                      }
                      var v = a[n >> 2];
                      if (j[v + I | 0] << 24 >> 24 == j[v + p | 0] << 24 >> 24) {
                        break
                      }
                      var v = (p << 2) + a[b] | 0,
                        u = a[v >> 2],
                        o = l - I - 1 | 0;
                      a[v >> 2] = (u | 0) < (o | 0) ? u : o;
                      p = a[(p << 2 >> 2) + d]
                    }
                    p = p - 1 | 0;
                    if (0 >= (I | 0)) {
                      t = p;
                      y = l;
                      break a
                    }
                  }
                } else {
                  var t = g,
                    y = g
                }
              } else {
                y = t = h
              }
            } while (0);
            k = 0 > (t | 0);
            a: do {
              if (k) {
                var A = t,
                  w = t,
                  q = y;
                __label__ = 19
              } else {
                h = t + 1 | 0;
                m = 0;
                for (p = y;;) {
                  n = (m << 2) + a[b] | 0;
                  I = a[n >> 2];
                  p = t - m + p | 0;
                  a[n >> 2] = (I | 0) < (p | 0) ? I : p;
                  m = m + 1 | 0;
                  n = a[f];
                  if ((m | 0) == (h | 0)) {
                    w = A = t;
                    q = n;
                    break a
                  }
                  p = n
                }
              }
            } while (0);
            a: for (;;) {
              k = a[(A << 2 >> 2) + d];
              h = w;
              for (m = q;;) {
                if ((h | 0) >= (m | 0)) {
                  break a
                }
                for (;;) {
                  var s = (h | 0) < (m | 0);
                  if (!((h | 0) <= (k | 0) & s)) {
                    break
                  }
                  n = (h << 2) + a[b] | 0;
                  I = a[n >> 2];
                  m = k - h + m | 0;
                  a[n >> 2] = (I | 0) < (m | 0) ? I : m;
                  h = h + 1 | 0;
                  m = a[f]
                }
                if (s) {
                  A = k;
                  w = h;
                  q = m;
                  continue a
                }
              }
            }
            Z(i)
          }
        }
      }
    } while (0)
  }

  function bd(e, c, b) {
    var d, f = -1 == (c | 0);
    a: do {
      if (f) {
        var i = -1
      } else {
        var i = 0 == (b | 0),
          h = e,
          k = 0;
        b: for (;;) {
          c: do {
            if (i) {
              for (var m = h, n = 0;;) {
                for (;;) {
                  var j = m + 4 | 0,
                    p = a[m >> 2],
                    g = p & -134217728;
                  if (1610612736 == (g | 0) || -1879048192 == (g | 0)) {
                    var l = n;
                    break b
                  } else {
                    if (-2147483648 == (g | 0)) {
                      var v = j,
                        u = n;
                      break c
                    } else {
                      if (1476395008 == (g | 0) || 2013265920 == (g | 0)) {
                        d = 9;
                        break
                      } else {
                        if (!(805306368 == (g | 0) || 268435456 == (g | 0) || 671088640 == (g | 0))) {
                          if (-1744830464 == (g | 0) || -1610612736 == (g | 0) || 1744830464 == (g | 0) || 1879048192 == (g | 0) || -2013265920 == (g | 0)) {
                            m = j;
                            continue
                          } else {
                            i = -1;
                            break a
                          }
                        }
                      }
                    }
                  }
                  var o = j,
                    t = n + 1 | 0;
                  d = 6;
                  break
                }
                if (9 == d) {
                  t = bd(j, n, 0);
                  if (-1 == (t | 0)) {
                    i = -1;
                    break a
                  }
                  o = m;
                  for (n = p;;) {
                    var y = n & 134217727,
                      n = (y << 2) + o | 0,
                      m = a[n >> 2],
                      g = m & -134217728;
                    if (1610612736 == (g | 0) || -1879048192 == (g | 0)) {
                      break
                    } else {
                      if (-2013265920 == (g | 0)) {
                        o = n, n = m
                      } else {
                        i = -1;
                        break a
                      }
                    }
                  }
                  o = (y + 1 << 2) + o | 0
                }
                if (-1 == (t | 0)) {
                  i = -1;
                  break a
                }
                m = o;
                n = t
              }
            } else {
              m = h;
              for (n = 0;;) {
                for (;;) {
                  var A = m + 4 | 0,
                    w = a[m >> 2],
                    g = w & -134217728;
                  if (1610612736 == (g | 0) || -1879048192 == (g | 0)) {
                    l = n;
                    break b
                  } else {
                    if (-2147483648 == (g | 0)) {
                      v = A;
                      u = n;
                      break c
                    } else {
                      if (1476395008 == (g | 0) || 2013265920 == (g | 0)) {
                        d = 15;
                        break
                      } else {
                        if (-2013265920 == (g | 0) || -1744830464 == (g | 0) || -1610612736 == (g | 0) || 1744830464 == (g | 0) || 1879048192 == (g | 0)) {
                          m = A;
                          continue
                        } else {
                          if (!(268435456 == (g | 0) || 671088640 == (g | 0))) {
                            i = -1;
                            break a
                          }
                        }
                      }
                    }
                  }
                  var q = A,
                    s = n + 1 | 0;
                  d = 19;
                  break
                }
                if (15 == d) {
                  s = bd(A, n, b);
                  if (-1 == (s | 0)) {
                    i = -1;
                    break a
                  }
                  q = m;
                  for (n = w;;) {
                    var r = n & 134217727,
                      n = (r << 2) + q | 0,
                      m = a[n >> 2],
                      g = m & -134217728;
                    if (1610612736 == (g | 0) || -1879048192 == (g | 0)) {
                      break
                    } else {
                      if (-2013265920 == (g | 0)) {
                        q = n, n = m
                      } else {
                        i = -1;
                        break a
                      }
                    }
                  }
                  q = (r + 1 << 2) + q | 0
                }
                if (-1 == (s | 0)) {
                  i = -1;
                  break a
                }
                m = q;
                n = s
              }
            }
          } while (0);
          h = v;
          k = (u | 0) > (k | 0) ? u : k
        }
        i = ((l | 0) > (k | 0) ? l : k) + c | 0
      }
    } while (0);
    return i
  }

  function bf(e, c) {
    var b = e + 16 | 0;
    if ((a[b >> 2] | 0) < (c | 0)) {
      var d = e + 12 | 0,
        f = ac(a[d >> 2], c << 2);
      0 == (f | 0) ? K(e, 12) : (a[d >> 2] = f, a[b >> 2] = c)
    }
  }

  function df(e, c) {
    var b, d, f;
    b = e >> 2;
    var i;
    f = (e + 20 | 0) >> 2;
    var h = a[f];
    d = (e | 0) >> 2;
    var k = a[d],
      m = k + 1 | 0;
    a[d] = m;
    var k = j[k],
      n = k << 24 >> 24;
    92 == k << 24 >> 24 ? (m >>> 0 < a[b + 1] >>> 0 || (K(e, 5), m = a[d]), a[d] = m + 1 | 0, m = j[m] << 24 >> 24 | 256) : m = n;
    a: do {
      if (46 == (m | 0)) {
        0 == (a[a[b + 7] + 24 >> 2] & 8 | 0) ? aa(e, 671088640, 0) : ff(e), i = 35
      } else {
        if (91 == (m | 0)) {
          Dc(e), i = 35
        } else {
          if (379 == (m | 0)) {
            K(e, 13), i = 35
          } else {
            if (296 == (m | 0)) {
              k = e + 28 | 0;
              n = a[k >> 2] + 80 | 0;
              a[n >> 2] = a[n >> 2] + 1 | 0;
              var n = a[a[k >> 2] + 80 >> 2],
                g = 10 > (n | 0);
              g && (a[((n << 2) + 32 >> 2) + b] = a[f]);
              aa(e, 1744830464, n);
              i = a[d];
              var k = e + 4 | 0,
                p = a[k >> 2],
                l = i >>> 0 < p >>> 0;
              b: do {
                if (l) {
                  var q = i + 1 | 0;
                  do {
                    if (q >>> 0 < p >>> 0 && 92 == j[i] << 24 >> 24 && 41 == j[q] << 24 >> 24) {
                      break b
                    }
                  } while (0);
                  Xd(e, 92, 41)
                }
              } while (0);
              g && (a[((n << 2) + 72 >> 2) + b] = a[f]);
              aa(e, 1879048192, n);
              n = a[d];
              k = a[k >> 2];
              do {
                if (n >>> 0 < k >>> 0 && (g = n + 1 | 0, g >>> 0 < k >>> 0 && 92 == j[n] << 24 >> 24 && 41 == j[g] << 24 >> 24)) {
                  a[d] = n + 2 | 0;
                  i = 35;
                  break a
                }
              } while (0);
              K(e, 8);
              i = 35
            } else {
              297 == (m | 0) || 381 == (m | 0) ? (K(e, 8), i = 35) : 305 == (m | 0) || 306 == (m | 0) || 307 == (m | 0) || 308 == (m | 0) || 309 == (m | 0) || 310 == (m | 0) || 311 == (m | 0) || 312 == (m | 0) || 313 == (m | 0) ? (k = (m & -257) - 48 | 0, n = (k << 2) + e + 72 | 0, 0 == (a[n >> 2] | 0) ? K(e, 6) : (aa(e, 939524096, k), Ec(e, a[((k << 2) + 32 >> 2) + b] + 1 | 0, a[n >> 2]), aa(e, 1073741824, k)), a[a[b + 7] + 84 >> 2] = 1, i = 35) : (42 == (m | 0) && 0 == (c | 0) && K(e, 13), i = 34)
            }
          }
        }
      }
    } while (0);
    34 == i && Cc(e, m << 24 >> 24);
    k = a[d];
    b = (e + 4 | 0) >> 2;
    n = a[b];
    g = k >>> 0 < n >>> 0;
    a: do {
      if (g) {
        if (i = j[k], p = k + 1 | 0, 42 == i << 24 >> 24) {
          a[d] = p, i = 1 - h | 0, Ra(e, 1207959552, i + a[f] | 0, h), aa(e, 1342177280, a[f] - h | 0), Ra(e, 1476395008, i + a[f] | 0, h), aa(e, 1610612736, a[f] - h | 0), i = 59
        } else {
          if (p >>> 0 < n >>> 0 & 92 == i << 24 >> 24) {
            if (123 != j[p] << 24 >> 24) {
              i = 58
            } else {
              a[d] = k + 2 | 0;
              i = cd(e);
              l = a[d];
              p = a[b];
              l >>> 0 < p >>> 0 ? 44 != j[l] << 24 >> 24 ? p = i : (l = l + 1 | 0, a[d] = l, l >>> 0 < p >>> 0 ? 10 > ((j[l] & 255) - 48 | 0) >>> 0 ? (p = cd(e), (i | 0) > (p | 0) && K(e, 10)) : p = 256 : p = 256) : p = i;
              dd(e, h, i, p);
              p = a[d];
              i = a[b];
              do {
                if (p >>> 0 < i >>> 0) {
                  l = p + 1 | 0;
                  if (l >>> 0 >= i >>> 0) {
                    l = p;
                    break
                  }
                  if (92 != j[p] << 24 >> 24) {
                    l = p;
                    break
                  }
                  if (125 != j[l] << 24 >> 24) {
                    l = p;
                    break
                  }
                  a[d] = p + 2 | 0;
                  i = 59;
                  break a
                }
                l = p
              } while (0);
              b: for (;;) {
                if (l >>> 0 >= i >>> 0) {
                  K(e, 9);
                  break
                }
                p = l + 1 | 0;
                do {
                  if (p >>> 0 < i >>> 0 && 92 == j[l] << 24 >> 24 && 125 == j[p] << 24 >> 24) {
                    break b
                  }
                } while (0);
                l = a[d] = p
              }
              K(e, 10);
              i = 59
            }
          } else {
            i = 58
          }
        }
      } else {
        i = 58
      }
    } while (0);
    if (58 == i) {
      if (36 == (m | 0)) {
        var v = 1;
        i = 60
      } else {
        i = 59
      }
    }
    59 == i && (v = 0);
    return v
  }

  function ff(e) {
    var c, b, d = r;
    r += 4;
    b = (e | 0) >> 2;
    var f = a[b];
    c = (e + 4 | 0) >> 2;
    var i = a[c],
      h = d | 0;
    a[b] = h;
    var k = d + 3 | 0;
    a[c] = k;
    j[h] = 94;
    j[d + 1 | 0] = 10;
    j[d + 2 | 0] = 93;
    j[k] = 0;
    Dc(e);
    a[b] = f;
    a[c] = i;
    r = d
  }

  function Dc(e) {
    var c, b, d, f, i, h, k = gf(e);
    i = k >> 2;
    f = (e | 0) >> 2;
    var m = a[f];
    d = (e + 4 | 0) >> 2;
    var n = a[d];
    (m + 5 | 0) >>> 0 < n >>> 0 ? 0 == (Oa(m, g.dc | 0, 6) | 0) ? (aa(e, -1744830464, 0), a[f] = a[f] + 6 | 0, h = 45) : 0 != (Oa(m, g.yb | 0, 6) | 0) ? h = 7 : (aa(e, -1610612736, 0), a[f] = a[f] + 6 | 0, h = 45) : h = 7;
    do {
      if (7 == h) {
        if (m >>> 0 < n >>> 0) {
          if (94 != j[m] << 24 >> 24) {
            var I = 0;
            h = m
          } else {
            h = m + 1 | 0, a[f] = h, I = 1
          }
        } else {
          I = 0, h = m
        }
        h >>> 0 < n >>> 0 && (b = j[h], 93 == b << 24 >> 24 ? (a[f] = h + 1 | 0, h = a[i] + 93 | 0, j[h] |= j[k + 4 | 0], h = k + 6 | 0, O[h >> 1] = O[h >> 1] + 93 & 65535) : 45 == b << 24 >> 24 && (a[f] = h + 1 | 0, h = a[i] + 45 | 0, j[h] |= j[k + 4 | 0], h = k + 6 | 0, O[h >> 1] = O[h >> 1] + 45 & 65535));
        a: for (;;) {
          c = a[f];
          h = a[d];
          if (c >>> 0 >= h >>> 0) {
            var p = c,
              l = h;
            break
          }
          b = j[c];
          if (93 == b << 24 >> 24) {
            p = c;
            l = h;
            break
          }
          c = c + 1 | 0;
          do {
            if (c >>> 0 < h >>> 0 & 45 == b << 24 >> 24 && 93 == j[c] << 24 >> 24) {
              a[f] = c;
              p = a[i] + 45 | 0;
              j[p] |= j[k + 4 | 0];
              p = k + 6 | 0;
              O[p >> 1] = O[p >> 1] + 45 & 65535;
              p = a[f];
              l = a[d];
              break a
            }
          } while (0);
          hf(e, k)
        }
        p >>> 0 < l >>> 0 ? (a[f] = p + 1 | 0, h = 93 == j[p] << 24 >> 24 ? 23 : 22) : h = 22;
        22 == h && K(e, 7);
        if (0 == (a[e + 8 >> 2] | 0)) {
          b = (e + 28 | 0) >> 2;
          c = a[b];
          var q = 0 == (a[c + 24 >> 2] & 2 | 0);
          a: do {
            if (!q) {
              var v = a[c + 8 >> 2];
              if (0 < (v | 0)) {
                for (var u = k | 0, o = k + 4 | 0, t = k + 6 | 0;;) {
                  v = v - 1 | 0;
                  if (0 != (j[o] & j[a[u >> 2] + (v & 255) | 0]) << 24 >> 24 && 0 != (yc(v) | 0)) {
                    var y = jf(v);
                    if ((y << 24 >> 24 | 0) != (v | 0)) {
                      var y = y & 255,
                        A = a[u >> 2] + y | 0;
                      j[A] |= j[o];
                      O[t >> 1] = (O[t >> 1] & 65535) + y & 65535
                    }
                  }
                  if (0 >= (v | 0)) {
                    break a
                  }
                }
              }
            }
          } while (0);
          if (0 != (I | 0)) {
            c = a[b];
            o = a[c + 8 >> 2];
            if (0 < (o | 0)) {
              q = k | 0;
              u = k + 4 | 0;
              for (c = (k + 6 | 0) >> 1; !(o = o - 1 | 0, t = o & 255, v = a[q >> 2] + t | 0, y = j[v], A = j[u], 0 == (A & y) << 24 >> 24 ? (j[v] = A | y, t = (O[c] & 65535) + t | 0) : (j[v] = y & (A ^ -1), t = (O[c] & 65535) - t | 0), O[c] = t & 65535, 0 >= (o | 0));) {}
              c = a[b]
            }
            0 != (a[c + 24 >> 2] & 8 | 0) && (c = a[i] + 10 | 0, j[c] &= j[k + 4 | 0] ^ -1, c = k + 6 | 0, O[c >> 1] = O[c >> 1] - 10 & 65535)
          }
          I = a[a[b] + 8 >> 2];
          b = 0 == (I | 0);
          a: do {
            if (b) {
              var w = 0
            } else {
              c = a[k >> 2];
              q = j[k + 4 | 0];
              for (o = u = 0;;) {
                if (o = (0 != (q & j[c + (u & 255) | 0]) << 24 >> 24 & 1) + o | 0, u = u + 1 | 0, (u | 0) == (I | 0)) {
                  w = o;
                  break a
                }
              }
            }
          } while (0);
          if (1 == (w | 0)) {
            b = k | 0;
            c = k + 4 | 0;
            for (q = 0;;) {
              if (q >>> 0 >= I >>> 0) {
                var s = 0;
                break
              }
              if (0 == (j[c] & j[a[b >> 2] + (q & 255) | 0]) << 24 >> 24) {
                q = q + 1 | 0
              } else {
                s = q << 24 >> 24;
                break
              }
            }
            Cc(e, s);
            kf(e, k)
          } else {
            aa(e, 805306368, lf(e, k))
          }
        }
      }
    } while (0)
  }

  function Ec(e, c, b) {
    var d;
    d = (e + 20 | 0) >> 2;
    var f = a[d],
      i = b - c | 0;
    (b | 0) != (c | 0) && (bf(e, a[e + 16 >> 2] + i | 0), e = a[e + 12 >> 2], oa((a[d] << 2) + e | 0, (c << 2) + e | 0, i << 2), a[d] = a[d] + i | 0);
    return f
  }

  function Cc(e, c) {
    var b, d = e + 28 | 0;
    b = a[d >> 2];
    var f = a[b + 56 >> 2],
      i = c & 255;
    if (0 != (a[b + 24 >> 2] & 2 | 0)) {
      if (0 == (yc(i) | 0)) {
        b = 6
      } else {
        if ((jf(c) << 24 >> 24 | 0) == (c | 0)) {
          b = 6
        } else {
          var h, k = r;
          r += 4;
          h = (e | 0) >> 2;
          var m = a[h];
          b = (e + 4 | 0) >> 2;
          var n = a[b],
            g = k | 0;
          a[h] = g;
          var p = k + 2 | 0;
          a[b] = p;
          j[g] = c & 255;
          j[k + 1 | 0] = 93;
          j[p] = 0;
          Dc(e);
          a[h] = m;
          a[b] = n;
          r = k;
          b = 8
        }
      }
    } else {
      b = 6
    }
    6 == b && (aa(e, 268435456, i), f = f + c | 0, 0 == j[f] << 24 >> 24 && (d = a[d >> 2] + 52 | 0, i = a[d >> 2], a[d >> 2] = i + 1 | 0, j[f] = i & 255))
  }

  function Ra(e, c, b, d) {
    if (0 == (a[e + 8 >> 2] | 0)) {
      var f = e + 20 | 0,
        i = a[f >> 2];
      aa(e, c, b);
      c = (e + 12 | 0) >> 2;
      i = a[a[c] + (i << 2) >> 2];
      for (b = 1;;) {
        var h = (b << 2) + e + 32 | 0,
          k = a[h >> 2];
        (k | 0) < (d | 0) || (a[h >> 2] = k + 1 | 0);
        h = (b << 2) + e + 72 | 0;
        k = a[h >> 2];
        (k | 0) < (d | 0) || (a[h >> 2] = k + 1 | 0);
        b = b + 1 | 0;
        if (10 == (b | 0)) {
          break
        }
      }
      e = a[c];
      md((d + 1 << 2) + e | 0, (d << 2) + e | 0, (a[f >> 2] - d << 2) - 4 | 0);
      a[a[c] + (d << 2) >> 2] = i
    }
  }

  function cd(e) {
    for (var c = e | 0, b = a[e + 4 >> 2], d = 0, f = 0, i = a[c >> 2]; i >>> 0 < b >>> 0 && 10 > ((j[i] & 255) - 48 | 0) >>> 0 & 256 > (f | 0);) {
      var h = i + 1 | 0;
      a[c >> 2] = h;
      d = d + 1 | 0;
      f = (j[i] << 24 >> 24) + (10 * f - 48) | 0;
      i = h
    }
    0 < (d | 0) & 256 > (f | 0) || K(e, 10);
    return f
  }

  function Wa(e, c, b) {
    0 == (a[e + 8 >> 2] | 0) && (e = (c << 2) + a[e + 12 >> 2] | 0, a[e >> 2] = a[e >> 2] & -134217728 | b)
  }

  function kf(e, c) {
    var b, d = e + 28 | 0;
    b = a[d >> 2] >> 2;
    var f = a[b + 3],
      i = a[b + 4];
    b = a[b + 2];
    var h = 0 == (b | 0);
    a: do {
      if (!h) {
        for (var k = c + 4 | 0, m = c | 0, n = c + 6 | 0, g = 0;;) {
          var p = g & 255,
            l = a[m >> 2] + p | 0;
          j[l] &= j[k] ^ -1;
          O[n >> 1] = (O[n >> 1] & 65535) - p & 65535;
          g = g + 1 | 0;
          if ((g | 0) == (b | 0)) {
            break a
          }
        }
      }
    } while (0);
    ((f - 1 << 4) + i | 0) == (c | 0) && (d = a[d >> 2] + 12 | 0, a[d >> 2] = a[d >> 2] - 1 | 0)
  }

  function dd(e, c, b, d) {
    var f, i;
    f = (e + 20 | 0) >> 2;
    var h = e + 8 | 0;
    a: for (;;) {
      var k = 2 > (d | 0),
        m = 256 == (d | 0) ? 3 : 2;
      b: do {
        if (k) {
          i = b;
          for (b = c;;) {
            c = a[f];
            if (0 != (a[h >> 2] | 0)) {
              break a
            }
            k = ((2 > (i | 0) ? i : 256 == (i | 0) ? 3 : 2) << 3) + d | 0;
            if (0 == (k | 0)) {
              break
            } else {
              if (1 == (k | 0) || 2 == (k | 0) || 3 == (k | 0)) {
                var n = b,
                  j = c;
                i = 14;
                break b
              } else {
                if (9 == (k | 0)) {
                  break a
                } else {
                  if (10 == (k | 0)) {
                    var p = b,
                      g = c;
                    i = 15;
                    break b
                  } else {
                    if (11 == (k | 0)) {
                      var l = b,
                        v = c;
                      i = 17;
                      break b
                    } else {
                      if (18 == (k | 0)) {
                        var u = b,
                          o = i,
                          t = c;
                        i = 18;
                        break b
                      } else {
                        if (19 != (k | 0)) {
                          i = 20;
                          break b
                        }
                      }
                    }
                  }
                }
              }
            }
            i = i - 1 | 0;
            b = Ec(e, b, c)
          }
          a[f] = b;
          break a
        }
        for (var y = b, A = c;;) {
          var w = a[f];
          if (0 != (a[h >> 2] | 0)) {
            break a
          }
          var q = m | (2 > (y | 0) ? y : 256 == (y | 0) ? 3 : 2) << 3;
          if (19 != (q | 0)) {
            18 == (q | 0) ? (u = A, o = y, t = w, i = 18) : 2 == (q | 0) || 3 == (q | 0) ? (n = A, j = w, i = 14) : 11 == (q | 0) ? (l = A, v = w, i = 17) : 10 == (q | 0) ? (p = A, g = w, i = 15) : i = 20;
            break b
          }
          y = y - 1 | 0;
          A = Ec(e, A, w)
        }
      } while (0);
      if (14 == i) {
        Ra(e, 2013265920, 1 - n + j | 0, n);
        dd(e, n + 1 | 0, 1, d);
        aa(e, -2147483648, a[f] - n | 0);
        Wa(e, n, a[f] - n | 0);
        aa(e, -2013265920, 0);
        Wa(e, a[f] - 1 | 0, 1);
        aa(e, -1879048192, 2);
        break
      } else {
        if (15 == i) {
          Ra(e, 2013265920, 1 - p + g | 0, p);
          aa(e, -2147483648, a[f] - p | 0);
          Wa(e, p, a[f] - p | 0);
          aa(e, -2013265920, 0);
          Wa(e, a[f] - 1 | 0, 1);
          aa(e, -1879048192, 2);
          var s = 1,
            r = Ec(e, p + 1 | 0, g + 1 | 0)
        } else {
          if (17 == i) {
            Ra(e, 1207959552, 1 - l + v | 0, l);
            aa(e, 1342177280, a[f] - l | 0);
            break
          } else {
            if (18 == i) {
              s = o - 1 | 0, r = Ec(e, u, t)
            } else {
              if (20 == i) {
                K(e, 15);
                break
              }
            }
          }
        }
      }
      d = d - 1 | 0;
      b = s;
      c = r
    }
  }

  function jf(a) {
    var c = a & 255;
    return (0 == ((65 <= c && 90 >= c) | 0) ? 0 == ((97 <= c && 122 >= c) | 0) ? a : 97 <= c && 122 >= c ? c - 97 + 65 : c : Zc(c)) & 255
  }

  function gf(e) {
    var c;
    c = (e + 28 | 0) >> 2;
    var b = a[c] + 12 | 0,
      d = a[b >> 2];
    a[b >> 2] = d + 1 | 0;
    var f = a[c],
      b = a[f + 8 >> 2],
      i = e + 24 | 0,
      h = a[i >> 2],
      k = (d | 0) < (h | 0);
    a: do {
      if (k) {
        var m = d
      } else {
        var n = h + 8 | 0;
        a[i >> 2] = n;
        var m = (n >>> 3) * b | 0,
          g = a[f + 16 >> 2],
          n = 0 == (g | 0) ? ia(n << 4) : ac(g, n << 4);
        a[a[c] + 16 >> 2] = n;
        n = a[a[c] + 20 >> 2];
        g = 0 == (n | 0);
        b: do {
          if (g) {
            var p = ia(m);
            a[a[c] + 20 >> 2] = p
          } else {
            if (p = ac(n, m), a[a[c] + 20 >> 2] = p, 0 < (d | 0)) {
              for (p = 0;;) {
                var l = a[c];
                a[a[l + 16 >> 2] + (p << 4) >> 2] = a[l + 20 >> 2] + ((p | 0) / 8 & -1) * b | 0;
                p = p + 1 | 0;
                if ((p | 0) == (d | 0)) {
                  break b
                }
              }
            }
          }
        } while (0);
        n = a[c];
        do {
          if (0 != (a[n + 16 >> 2] | 0) && (g = a[n + 20 >> 2], 0 != (g | 0))) {
            Da(g + (m - b) | 0, b);
            m = d;
            break a
          }
        } while (0);
        K(e, 12);
        m = 0
      }
    } while (0);
    e = a[c];
    c = a[e + 16 >> 2];
    d = (m << 4) + c | 0;
    a[d >> 2] = a[e + 20 >> 2] + ((m | 0) / 8 & -1) * b | 0;
    j[(m << 4) + c + 4 | 0] = 1 << (m & 7) & 255;
    O[c + (m << 4) + 6 >> 1] = 0;
    a[c + (m << 4) + 8 >> 2] = 0;
    a[c + (m << 4) + 12 >> 2] = 0;
    return d
  }

  function hf(e, c) {
    var b, d, f;
    d = (e | 0) >> 2;
    var i = a[d];
    b = (e + 4 | 0) >> 2;
    var h = a[b],
      k = i >>> 0 < h >>> 0;
    a: do {
      if (k) {
        if (f = j[i] << 24 >> 24, 91 == (f | 0)) {
          if (f = i + 1 | 0, f >>> 0 < h >>> 0) {
            if (f = j[f] << 24 >> 24, 58 == (f | 0)) {
              f = i + 2 | 0;
              a[d] = f;
              f >>> 0 < h >>> 0 || (K(e, 7), f = a[d]);
              f = j[f];
              (45 == f << 24 >> 24 || 93 == f << 24 >> 24) && K(e, 4);
              mf(e, c);
              f = a[d];
              var m = a[b];
              f >>> 0 < m >>> 0 || (K(e, 7), f = a[d], m = a[b]);
              do {
                if (f >>> 0 < m >>> 0) {
                  var n = f + 1 | 0;
                  if (n >>> 0 < m >>> 0 && 58 == j[f] << 24 >> 24 && 93 == j[n] << 24 >> 24) {
                    a[d] = f + 2 | 0;
                    f = 44;
                    break a
                  }
                }
              } while (0);
              K(e, 4);
              f = 44
            } else {
              if (61 == (f | 0)) {
                f = i + 2 | 0;
                a[d] = f;
                f >>> 0 < h >>> 0 || (K(e, 7), f = a[d]);
                f = j[f];
                (45 == f << 24 >> 24 || 93 == f << 24 >> 24) && K(e, 3);
                m = c;
                f = Zd(e, 61) & 255;
                n = a[m >> 2] + f | 0;
                j[n] |= j[m + 4 | 0];
                m = m + 6 | 0;
                O[m >> 1] = (O[m >> 1] & 65535) + f & 65535;
                f = a[d];
                m = a[b];
                f >>> 0 < m >>> 0 || (K(e, 7), f = a[d], m = a[b]);
                do {
                  if (f >>> 0 < m >>> 0 && (n = f + 1 | 0, n >>> 0 < m >>> 0 && 61 == j[f] << 24 >> 24 && 93 == j[n] << 24 >> 24)) {
                    a[d] = f + 2 | 0;
                    f = 44;
                    break a
                  }
                } while (0);
                K(e, 3);
                f = 44
              } else {
                f = 31
              }
            }
          } else {
            f = 31
          }
        } else {
          45 == (f | 0) ? (K(e, 11), f = 44) : f = 31
        }
      } else {
        f = 31
      }
    } while (0);
    a: do {
      if (31 == f) {
        if (h = nf(e), i = a[d], k = a[b], i >>> 0 < k >>> 0 ? 45 != j[i] << 24 >> 24 ? k = h : (m = i + 1 | 0, m >>> 0 < k >>> 0 ? 93 == j[m] << 24 >> 24 ? k = h : (a[d] = m, 45 == j[m] << 24 >> 24 ? (a[d] = i + 2 | 0, k = 45) : k = nf(e)) : k = h) : k = h, h << 24 >> 24 == k << 24 >> 24) {
          i = h & 255, h = a[c >> 2] + i | 0, j[h] |= j[c + 4 | 0], h = c + 6 | 0, O[h >> 1] = (O[h >> 1] & 65535) + i & 65535
        } else {
          if (i = k & 255, (h & 255) > (k & 255)) {
            K(e, 11)
          } else {
            k = c + 4 | 0;
            m = c | 0;
            n = c + 6 | 0;
            for (h &= 255;;) {
              var g = h & 255,
                p = a[m >> 2] + g | 0;
              j[p] |= j[k];
              O[n >> 1] = (O[n >> 1] & 65535) + g & 65535;
              h = h + 1 | 0;
              if ((h | 0) > (i | 0)) {
                break a
              }
            }
          }
        }
      }
    } while (0)
  }

  function lf(e, c) {
    var b, d = O[c + 6 >> 1],
      f = e + 28 | 0;
    b = a[f >> 2] >> 2;
    var i = a[b + 4],
      h = (a[b + 3] << 4) + i | 0;
    b = a[b + 2];
    var k = c | 0,
      m = c + 4 | 0,
      n = i;
    a: for (;;) {
      if (n >>> 0 >= h >>> 0) {
        var g = c,
          p = i;
        break
      }
      do {
        if (!(O[n + 6 >> 1] << 16 >> 16 != d << 16 >> 16 | (n | 0) == (c | 0))) {
          for (var l = n | 0, q = n + 4 | 0, v = 0; v >>> 0 < b >>> 0;) {
            var u = v & 255;
            if (0 != (j[q] & j[a[l >> 2] + u | 0]) << 24 >> 24 ^ 0 != (j[m] & j[a[k >> 2] + u | 0]) << 24 >> 24) {
              break
            }
            v = v + 1 | 0
          }
          if ((v | 0) == (b | 0)) {
            kf(e, c);
            g = n;
            p = a[a[f >> 2] + 16 >> 2];
            break a
          }
        }
      } while (0);
      n = n + 16 | 0
    }
    return g - p >> 4
  }

  function mf(e, c) {
    var b, d;
    b = (e | 0) >> 2;
    for (var f = a[b], i = e + 4 | 0, h = f;;) {
      if (h >>> 0 >= a[i >> 2] >>> 0) {
        var k = h;
        break
      }
      var m = a[b];
      if (0 == (yc(j[h] & 255) | 0)) {
        k = m;
        break
      }
      h = m + 1 | 0;
      a[b] = h
    }
    i = k - f | 0;
    for (b = za | 0;;) {
      k = a[b >> 2];
      if (0 == (k | 0)) {
        K(e, 4);
        d = 61;
        break
      }
      if (0 == (Oa(k, f, i) | 0) && 0 == j[k + i | 0] << 24 >> 24) {
        d = 12;
        break
      }
      b = b + 8 | 0
    }
    a: do {
      if (12 == d) {
        if (f = a[b + 4 >> 2], 0 == (f | 0)) {
          f = c + 4 | 0;
          i = c | 0;
          k = c + 6 | 0;
          for (h = -128;;) {
            m = h & 255;
            if (0 != (fa(m) | 0)) {
              var n = a[i >> 2] + m | 0;
              j[n] |= j[f];
              O[k >> 1] = (O[k >> 1] & 65535) + m & 65535
            }
            h = h + 1 | 0;
            if (128 == (h | 0)) {
              break a
            }
          }
        } else {
          if (1 == (f | 0)) {
            f = c + 4 | 0;
            i = c | 0;
            k = c + 6 | 0;
            for (h = -128;;) {
              if (m = h & 255, 0 != (yc(m) | 0) && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                break a
              }
            }
          } else {
            if (2 == (f | 0)) {
              f = c + 4 | 0;
              i = c | 0;
              k = c + 6 | 0;
              for (h = -128;;) {
                m = h & 255;
                if (0 != ((32 == m || 9 == m) | 0)) {
                  n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535
                }
                h = h + 1 | 0;
                if (128 == (h | 0)) {
                  break a
                }
              }
            } else {
              if (3 == (f | 0)) {
                f = c + 4 | 0;
                i = c | 0;
                k = c + 6 | 0;
                for (h = -128;;) {
                  m = h & 255;
                  if (0 != ((0 <= m && 31 >= m || 127 === m) | 0)) {
                    n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535
                  }
                  h = h + 1 | 0;
                  if (128 == (h | 0)) {
                    break a
                  }
                }
              } else {
                if (4 == (f | 0)) {
                  f = c + 4 | 0;
                  i = c | 0;
                  k = c + 6 | 0;
                  for (h = -128;;) {
                    if (m = h & 255, 10 > (m - 48 | 0) >>> 0 && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                      break a
                    }
                  }
                } else {
                  if (5 == (f | 0)) {
                    f = c + 4 | 0;
                    i = c | 0;
                    k = c + 6 | 0;
                    for (h = -128;;) {
                      if (m = h & 255, 0 != (Sf(m) | 0) && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                        break a
                      }
                    }
                  } else {
                    if (6 == (f | 0)) {
                      f = c + 4 | 0;
                      i = c | 0;
                      k = c + 6 | 0;
                      for (h = -128;;) {
                        if (m = h & 255, 0 != ((97 <= m && 122 >= m) | 0) && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                          break a
                        }
                      }
                    } else {
                      if (7 == (f | 0)) {
                        f = c + 4 | 0;
                        i = c | 0;
                        k = c + 6 | 0;
                        for (h = -128;;) {
                          if (m = h & 255, 0 != (of(m) | 0) && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                            break a
                          }
                        }
                      } else {
                        if (8 == (f | 0)) {
                          f = c + 4 | 0;
                          i = c | 0;
                          k = c + 6 | 0;
                          for (h = -128;;) {
                            m = h & 255;
                            if (0 != ((33 <= m && 47 >= m || 58 <= m && 64 >= m || 91 <= m && 96 >= m || 123 <= m && 126 >= m) | 0)) {
                              n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535
                            }
                            h = h + 1 | 0;
                            if (128 == (h | 0)) {
                              break a
                            }
                          }
                        } else {
                          if (9 == (f | 0)) {
                            f = c + 4 | 0;
                            i = c | 0;
                            k = c + 6 | 0;
                            for (h = -128;;) {
                              if (m = h & 255, 0 != (Qd(m) | 0) && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                                break a
                              }
                            }
                          } else {
                            if (10 == (f | 0)) {
                              f = c + 4 | 0;
                              i = c | 0;
                              k = c + 6 | 0;
                              for (h = -128;;) {
                                if (m = h & 255, 0 != ((65 <= m && 90 >= m) | 0) && (n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535), h = h + 1 | 0, 128 == (h | 0)) {
                                  break a
                                }
                              }
                            } else {
                              if (11 == (f | 0)) {
                                f = c + 4 | 0;
                                i = c | 0;
                                k = c + 6 | 0;
                                for (h = -128;;) {
                                  m = h & 255;
                                  if (0 != ((48 <= m && 57 >= m || 97 <= m && 102 >= m || 65 <= m && 70 >= m) | 0)) {
                                    n = a[i >> 2] + m | 0, j[n] |= j[f], O[k >> 1] = (O[k >> 1] & 65535) + m & 65535
                                  }
                                  h = h + 1 | 0;
                                  if (128 == (h | 0)) {
                                    break a
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } while (0)
  }

  function nf(e) {
    var c, b, d;
    b = (e | 0) >> 2;
    var f = a[b];
    c = (e + 4 | 0) >> 2;
    var i = a[c];
    if (f >>> 0 < i >>> 0) {
      var h = i
    } else {
      K(e, 7), f = a[b], h = a[c]
    }
    i = f + 1 | 0;
    h = f >>> 0 < h >>> 0 & i >>> 0 < h >>> 0;
    a: do {
      if (h) {
        if (91 != j[f] << 24 >> 24) {
          d = 8
        } else {
          if (46 != j[i] << 24 >> 24) {
            d = 8
          } else {
            a[b] = f + 2 | 0;
            var k = Zd(e, 46);
            d = a[b];
            var m = a[c];
            do {
              if (d >>> 0 < m >>> 0) {
                var n = d + 1 | 0;
                if (n >>> 0 < m >>> 0 && 46 == j[d] << 24 >> 24 && 93 == j[n] << 24 >> 24) {
                  a[b] = d + 2 | 0;
                  d = 14;
                  break a
                }
              }
            } while (0);
            K(e, 3);
            d = 14
          }
        }
      } else {
        d = 8
      }
    } while (0);
    8 == d && (a[b] = i, k = j[f]);
    return k
  }

  function Zd(e, c) {
    var b, d = e | 0,
      f = a[d >> 2],
      i = a[e + 4 >> 2],
      h = f;
    a: for (;;) {
      if (h >>> 0 >= i >>> 0) {
        K(e, 7);
        var k = 0;
        b = 18;
        break
      }
      var m = h + 1 | 0;
      do {
        if (m >>> 0 < i >>> 0 && (j[h] << 24 >> 24 | 0) == (c | 0) && 93 == j[m] << 24 >> 24) {
          b = 9;
          break a
        }
      } while (0);
      h = a[d >> 2] = m
    }
    a: do {
      if (9 == b) {
        d = h - f | 0;
        for (i = D;;) {
          if (m = a[i >> 2], 0 == (m | 0)) {
            if (1 == (d | 0)) {
              k = j[f];
              break a
            }
            K(e, 3);
            k = 0;
            break a
          } else {
            do {
              if (0 == (Oa(m, f, d) | 0) && 0 == j[m + d | 0] << 24 >> 24) {
                k = j[i + 4 | 0];
                break a
              }
            } while (0);
            i = i + 8 | 0
          }
        }
      }
    } while (0);
    return k
  }

  function cf(e) {
    var c, b, d, f;
    c = e >> 2;
    var i;
    f = (e | 0) >> 2;
    var h = a[f],
      k = h + 1 | 0;
    a[f] = k;
    d = (e + 20 | 0) >> 2;
    var m = a[d],
      h = j[h] << 24 >> 24;
    do {
      if (40 == (h | 0)) {
        b = (e + 4 | 0) >> 2;
        k >>> 0 < a[b] >>> 0 || K(e, 8);
        i = e + 28 | 0;
        var n = a[i >> 2] + 80 | 0;
        a[n >> 2] = a[n >> 2] + 1 | 0;
        var n = a[a[i >> 2] + 80 >> 2],
          g = 10 > (n | 0);
        g && (a[((n << 2) + 32 >> 2) + c] = a[d]);
        aa(e, 1744830464, n);
        i = a[f];
        i = i >>> 0 < a[b] >>> 0 ? 41 == j[i] << 24 >> 24 ? 10 : 9 : 9;
        9 == i && Wd(e, 41);
        g && (a[((n << 2) + 72 >> 2) + c] = a[d]);
        aa(e, 1879048192, n);
        i = a[f];
        if (i >>> 0 < a[b] >>> 0 && (a[f] = i + 1 | 0, 41 == j[i] << 24 >> 24)) {
          b = 0;
          i = 31;
          break
        }
        K(e, 8);
        b = 0;
        i = 31
      } else {
        41 == (h | 0) ? (K(e, 8), b = 0, i = 31) : 94 == (h | 0) ? (aa(e, 402653184, 0), b = e + 28 | 0, i = a[b >> 2] + 40 | 0, a[i >> 2] |= 1, b = a[b >> 2] + 44 | 0, a[b >> 2] = a[b >> 2] + 1 | 0, b = 1, i = 31) : 36 == (h | 0) ? (aa(e, 536870912, 0), b = e + 28 | 0, i = a[b >> 2] + 40 | 0, a[i >> 2] |= 2, b = a[b >> 2] + 48 | 0, a[b >> 2] = a[b >> 2] + 1 | 0, b = 0, i = 31) : 124 == (h | 0) ? (K(e, 14), b = 0, i = 31) : 42 == (h | 0) || 43 == (h | 0) || 63 == (h | 0) ? (K(e, 13), b = 0, i = 31) : 46 == (h | 0) ? (0 == (a[a[c + 7] + 24 >> 2] & 8 | 0) ? aa(e, 671088640, 0) : ff(e), b = 0, i = 31) : 91 == (h | 0) ? (Dc(e), b = 0, i = 31) : 92 == (h | 0) ? (k >>> 0 < a[c + 1] >>> 0 ? b = k : (K(e, 5), b = a[f]), a[f] = b + 1 | 0, Cc(e, j[b] << 24 >> 24), b = 0, i = 31) : (123 == (h | 0) && k >>> 0 < a[c + 1] >>> 0 && 10 > ((j[k] & 255) - 48 | 0) >>> 0 && K(e, 13), i = 30)
      }
    } while (0);
    30 == i && (Cc(e, h), b = 0);
    k = a[f];
    c = (e + 4 | 0) >> 2;
    h = a[c];
    do {
      if (k >>> 0 < h >>> 0) {
        n = j[k];
        i = n << 24 >> 24;
        if (!(42 == n << 24 >> 24 || 43 == n << 24 >> 24 || 63 == n << 24 >> 24)) {
          if (123 == n << 24 >> 24) {
            n = k + 1 | 0;
            if (n >>> 0 >= h >>> 0) {
              break
            }
            if (10 <= ((j[n] & 255) - 48 | 0) >>> 0) {
              break
            }
          } else {
            break
          }
        }
        a[f] = k + 1 | 0;
        0 == (b | 0) || K(e, 13);
        a: do {
          if (42 == (i | 0)) {
            n = 1 - m | 0, Ra(e, 1207959552, n + a[d] | 0, m), aa(e, 1342177280, a[d] - m | 0), Ra(e, 1476395008, n + a[d] | 0, m), aa(e, 1610612736, a[d] - m | 0)
          } else {
            if (43 == (i | 0)) {
              Ra(e, 1207959552, 1 - m + a[d] | 0, m), aa(e, 1342177280, a[d] - m | 0)
            } else {
              if (63 == (i | 0)) {
                Ra(e, 2013265920, 1 - m + a[d] | 0, m), aa(e, -2147483648, a[d] - m | 0), Wa(e, m, a[d] - m | 0), aa(e, -2013265920, 0), Wa(e, a[d] - 1 | 0, 1), aa(e, -1879048192, 2)
              } else {
                if (123 == (i | 0)) {
                  n = cd(e);
                  g = a[f];
                  g >>> 0 < a[c] >>> 0 ? 44 != j[g] << 24 >> 24 ? g = n : (g = g + 1 | 0, a[f] = g, 10 > ((j[g] & 255) - 48 | 0) >>> 0 ? (g = cd(e), (n | 0) > (g | 0) && K(e, 10)) : g = 256) : g = n;
                  dd(e, m, n, g);
                  g = a[f];
                  n = a[c];
                  do {
                    if (g >>> 0 < n >>> 0) {
                      if (125 != j[g] << 24 >> 24) {
                        var p = g;
                        break
                      }
                      a[f] = g + 1 | 0;
                      break a
                    }
                    p = g
                  } while (0);
                  for (;;) {
                    if (p >>> 0 >= n >>> 0) {
                      K(e, 9);
                      break
                    }
                    if (125 == j[p] << 24 >> 24) {
                      break
                    }
                    g = p + 1 | 0;
                    p = a[f] = g
                  }
                  K(e, 10)
                }
              }
            }
          }
        } while (0);
        n = a[f];
        i = a[c];
        if (n >>> 0 < i >>> 0) {
          g = j[n];
          if (!(42 == g << 24 >> 24 || 43 == g << 24 >> 24 || 63 == g << 24 >> 24)) {
            if (123 == g << 24 >> 24) {
              n = n + 1 | 0;
              if (n >>> 0 >= i >>> 0) {
                break
              }
              if (10 <= ((j[n] & 255) - 48 | 0) >>> 0) {
                break
              }
            } else {
              break
            }
          }
          K(e, 13)
        }
      }
    } while (0)
  }

  function vc(e, c, b, d, f, i) {
    62053 == (e | 0) ? 53829 != (a[c >> 2] | 0) ? c = 2 : 0 != (a[c + 40 >> 2] & 4 | 0) ? c = 2 : (e = i & 7, c = 33 > a[c + 28 >> 2] >>> 0 ? pf(c, b, d, f, e) : qf(c, b, d, f, e)) : c = 2;
    return c
  }

  function pf(e, c, b, d, f) {
    var i, h, k, m, n, g = d >> 2,
      p = e >> 2,
      l = r;
    r += 52;
    var q, v = a[p + 8] + 1 | 0,
      u = a[p + 9],
      b = 0 == (a[p + 6] & 4 | 0) ? b : 0;
    if (0 == (f & 4 | 0)) {
      var o = ra(c),
        t = c
    } else {
      o = a[g + 1], t = c + a[g] | 0
    }
    var o = c + o | 0,
      y = o >>> 0 < t >>> 0;
    a: do {
      if (y) {
        k = 16
      } else {
        k = a[p + 15];
        n = 0 == (k | 0);
        b: do {
          if (!n) {
            var A = a[p + 17];
            do {
              if (0 != (A | 0) && (m = a[p + 18], 0 != (m | 0))) {
                i = a[p + 19] - 1 | 0;
                n = k + i | 0;
                var w = k;
                i = t + i | 0;
                c: for (;;) {
                  if (i >>> 0 >= o >>> 0) {
                    var s = n,
                      x = i;
                    break
                  }
                  for (;;) {
                    if (i >>> 0 >= o >>> 0) {
                      s = n;
                      x = i;
                      break c
                    }
                    var z = a[A + (j[i] << 24 >> 24 << 2) >> 2];
                    if (0 == (z | 0)) {
                      var C = n,
                        W = i;
                      break
                    }
                    i = i + z | 0
                  }
                  for (;;) {
                    var F = W - 1 | 0,
                      B = j[F],
                      D = C - 1 | 0,
                      E = j[D];
                    if (B << 24 >> 24 != E << 24 >> 24 | (D | 0) == (k | 0)) {
                      break
                    }
                    C = D;
                    W = F
                  }
                  if (B << 24 >> 24 == E << 24 >> 24) {
                    s = D;
                    x = F;
                    break
                  }
                  i = a[m + (D - w << 2) >> 2];
                  z = a[A + (B << 24 >> 24 << 2) >> 2];
                  i = W + (((z | 0) < (i | 0) ? i : z) - 1) | 0
                }
                if ((s | 0) == (k | 0)) {
                  A = x;
                  break b
                }
                k = 1;
                break a
              }
            } while (0);
            A = o;
            m = e + 76 | 0;
            w = t;
            c: for (; w >>> 0 < o >>> 0;) {
              do {
                if (j[w] << 24 >> 24 == j[k] << 24 >> 24 && (i = a[m >> 2], (A - w | 0) >= (i | 0) && 0 == (bc(w, k, i) | 0))) {
                  break c
                }
              } while (0);
              w = w + 1 | 0
            }
            if ((w | 0) == (o | 0)) {
              k = 1;
              break a
            }
            A = w
          }
        } while (0);
        n = (l | 0) >> 2;
        a[n] = e;
        var J = l + 4 | 0;
        a[J >> 2] = f;
        m = (l + 8 | 0) >> 2;
        a[m] = 0;
        k = (l + 28 | 0) >> 2;
        a[k] = 0;
        w = l + 12 | 0;
        a[w >> 2] = c;
        a[l + 16 >> 2] = t;
        a[l + 20 >> 2] = o;
        i = (l + 36 | 0) >> 2;
        a[i] = 0;
        a[i + 1] = 0;
        a[i + 2] = 0;
        a[i + 3] = 0;
        i = a[p + 16];
        if (-1 < (i | 0)) {
          i = A + -i | 0;
          var G = i >>> 0 < t >>> 0 ? t : i
        } else {
          G = t
        }
        z = 0 == (b | 0);
        h = (e + 84 | 0) >> 2;
        i = (l + 24 | 0) >> 2;
        var K = 1 == (b | 0),
          M = e + 88 | 0;
        b: for (;;) {
          if (0 == (rf(l, G, o, v, u) | 0)) {
            k = 1;
            break a
          }
          if (z && 0 == (a[h] | 0)) {
            q = 61;
            break
          }
          q = va(l, a[i], o, v, u);
          G = 0 == (q | 0);
          c: do {
            if (G) {
              for (;;) {
                var H = a[i] + 1 | 0;
                a[i] = H;
                H = va(l, H, o, v, u);
                if (0 != (H | 0)) {
                  var L = H;
                  break c
                }
              }
            } else {
              L = q
            }
          } while (0);
          if (K && 0 == (a[h] | 0)) {
            var N = L;
            q = 54;
            break
          }
          q = a[m];
          if (0 == (q | 0)) {
            G = q = ia((a[a[n] + 80 >> 2] << 3) + 8 | 0);
            a[m] = G;
            if (0 == (q | 0)) {
              k = 12;
              break a
            }
            q = G
          }
          G = 0 == (a[a[n] + 80 >> 2] | 0);
          c: do {
            if (!G) {
              for (var H = 1, P = q;;) {
                a[P + (H << 3) + 4 >> 2] = -1;
                a[a[m] + (H << 3) >> 2] = -1;
                H = H + 1 | 0;
                if (H >>> 0 > a[a[n] + 80 >> 2] >>> 0) {
                  break c
                }
                P = a[m]
              }
            }
          } while (0);
          if (0 == (a[h] | 0)) {
            if (0 != (a[J >> 2] & 1024 | 0)) {
              q = 43
            } else {
              var O = Fc(l, a[i], L, v, u);
              q = 48
            }
          } else {
            q = 43
          } if (43 == q) {
            O = a[M >> 2];
            do {
              if (0 < (O | 0) && 0 == (a[k] | 0) && (G = ia((O << 2) + 4 | 0), a[k] = G, 0 < (a[M >> 2] | 0) & 0 == (G | 0))) {
                Z(a[m]);
                k = 12;
                break a
              }
            } while (0);
            O = Za(l, a[i], L, v, u, 0)
          }
          if (0 != (O | 0)) {
            N = L;
            q = 54;
            break
          }
          G = 0;
          for (H = L;;) {
            if (G) {
              N = H;
              q = 54;
              break b
            }
            G = a[i];
            if (H >>> 0 <= G >>> 0) {
              var X = G;
              break
            }
            H = va(l, G, H - 1 | 0, v, u);
            G = a[i];
            if (0 == (H | 0)) {
              X = G;
              break
            }
            G = 0 != (Za(l, G, H, v, u, 0) | 0)
          }
          G = X + 1 | 0
        }
        b: do {
          if (54 == q && !z && (J = a[w >> 2], a[g] = a[i] - J | 0, a[g + 1] = N - J | 0, 1 < b >>> 0)) {
            J = a[n] + 80 | 0;
            for (h = 1;;) {
              if (M = (h << 3) + d | 0, h >>> 0 > a[J >> 2] >>> 0 ? (a[M >> 2] = -1, a[((h << 3) + 4 >> 2) + g] = -1) : (K = (h << 3) + a[m] | 0, G = a[K + 4 >> 2], a[M >> 2] = a[K >> 2], a[M + 4 >> 2] = G), h = h + 1 | 0, (h | 0) == (b | 0)) {
                break b
              }
            }
          }
        } while (0);
        m = a[m];
        0 != (m | 0) && Z(m);
        k = a[k];
        0 != (k | 0) && Z(k);
        k = 0
      }
    } while (0);
    r = l;
    return k
  }

  function qf(e, c, b, d, f) {
    var i, h, k, m, n, g, p, l, q = d >> 2,
      v = e >> 2,
      u = r;
    r += 56;
    var o;
    l = u >> 2;
    var t = a[v + 8] + 1 | 0,
      y = a[v + 9],
      b = 0 == (a[v + 6] & 4 | 0) ? b : 0;
    if (0 == (f & 4 | 0)) {
      var A = ra(c),
        w = c
    } else {
      A = a[q + 1], w = c + a[q] | 0
    }
    var A = c + A | 0,
      s = A >>> 0 < w >>> 0;
    a: do {
      if (s) {
        m = 16
      } else {
        m = a[v + 15];
        g = 0 == (m | 0);
        b: do {
          if (!g) {
            var x = a[v + 17];
            do {
              if (0 != (x | 0) && (n = a[v + 18], 0 != (n | 0))) {
                var z = a[v + 19] - 1 | 0;
                g = m + z | 0;
                p = m;
                z = w + z | 0;
                c: for (;;) {
                  if (z >>> 0 >= A >>> 0) {
                    var C = g,
                      W = z;
                    break
                  }
                  for (;;) {
                    if (z >>> 0 >= A >>> 0) {
                      C = g;
                      W = z;
                      break c
                    }
                    i = a[x + (j[z] << 24 >> 24 << 2) >> 2];
                    if (0 == (i | 0)) {
                      var F = g,
                        D = z;
                      break
                    }
                    z = z + i | 0
                  }
                  for (;;) {
                    var B = D - 1 | 0,
                      E = j[B],
                      G = F - 1 | 0,
                      J = j[G];
                    if (E << 24 >> 24 != J << 24 >> 24 | (G | 0) == (m | 0)) {
                      break
                    }
                    F = G;
                    D = B
                  }
                  if (E << 24 >> 24 == J << 24 >> 24) {
                    C = G;
                    W = B;
                    break
                  }
                  z = a[n + (G - p << 2) >> 2];
                  i = a[x + (E << 24 >> 24 << 2) >> 2];
                  z = D + (((i | 0) < (z | 0) ? z : i) - 1) | 0
                }
                if ((C | 0) == (m | 0)) {
                  x = W;
                  break b
                }
                m = 1;
                break a
              }
            } while (0);
            x = A;
            n = e + 76 | 0;
            p = w;
            c: for (; p >>> 0 < A >>> 0;) {
              do {
                if (j[p] << 24 >> 24 == j[m] << 24 >> 24 && (z = a[n >> 2], (x - p | 0) >= (z | 0) && 0 == (bc(p, m, z) | 0))) {
                  break c
                }
              } while (0);
              p = p + 1 | 0
            }
            if ((p | 0) == (A | 0)) {
              m = 1;
              break a
            }
            x = p
          }
        } while (0);
        p = (u | 0) >> 2;
        a[p] = e;
        var H = u + 4 | 0;
        a[H >> 2] = f;
        g = (u + 8 | 0) >> 2;
        a[g] = 0;
        n = (u + 28 | 0) >> 2;
        a[n] = 0;
        z = u + 12 | 0;
        a[z >> 2] = c;
        a[l + 4] = w;
        a[l + 5] = A;
        h = ia(a[v + 7] << 2);
        m = (u + 36 | 0) >> 2;
        a[m] = h;
        if (0 == (h | 0)) {
          m = 12
        } else {
          k = (u + 32 | 0) >> 2;
          a[l + 10] = h;
          a[k] = 2;
          i = (a[p] + 28 | 0) >> 2;
          a[l + 11] = h + a[i] | 0;
          a[k] = 3;
          a[l + 12] = (a[i] << 1) + h | 0;
          a[k] = 4;
          k = h + 3 * a[i] | 0;
          a[l + 13] = k;
          Da(k, a[i]);
          i = a[v + 16];
          if (-1 < (i | 0)) {
            i = x + -i | 0;
            var M = i >>> 0 < w >>> 0 ? w : i
          } else {
            M = w
          }
          k = 0 == (b | 0);
          h = (e + 84 | 0) >> 2;
          i = (u + 24 | 0) >> 2;
          var K = 1 == (b | 0),
            L = e + 88 | 0;
          b: for (;;) {
            if (0 == (sf(u, M, A, t, y) | 0)) {
              Z(a[m]);
              m = 1;
              break a
            }
            if (k && 0 == (a[h] | 0)) {
              o = 64;
              break
            }
            o = La(u, a[i], A, t, y);
            M = 0 == (o | 0);
            c: do {
              if (M) {
                for (;;) {
                  var N = a[i] + 1 | 0;
                  a[i] = N;
                  N = La(u, N, A, t, y);
                  if (0 != (N | 0)) {
                    var O = N;
                    break c
                  }
                }
              } else {
                O = o
              }
            } while (0);
            if (K && 0 == (a[h] | 0)) {
              var P = O;
              o = 57;
              break
            }
            M = a[g];
            do {
              if (0 == (M | 0)) {
                M = o = ia((a[a[p] + 80 >> 2] << 3) + 8 | 0);
                a[g] = M;
                if (0 != (o | 0)) {
                  o = M;
                  break
                }
                Z(a[m]);
                m = 12;
                break a
              }
              o = M
            } while (0);
            M = 0 == (a[a[p] + 80 >> 2] | 0);
            c: do {
              if (!M) {
                for (var N = 1, X = o;;) {
                  a[X + (N << 3) + 4 >> 2] = -1;
                  a[a[g] + (N << 3) >> 2] = -1;
                  N = N + 1 | 0;
                  if (N >>> 0 > a[a[p] + 80 >> 2] >>> 0) {
                    break c
                  }
                  X = a[g]
                }
              }
            } while (0);
            if (0 == (a[h] | 0)) {
              if (0 != (a[H >> 2] & 1024 | 0)) {
                o = 46
              } else {
                var Y = Gc(u, a[i], O, t, y);
                o = 51
              }
            } else {
              o = 46
            } if (46 == o) {
              Y = a[L >> 2];
              do {
                if (0 < (Y | 0) && 0 == (a[n] | 0) && (M = ia((Y << 2) + 4 | 0), a[n] = M, 0 < (a[L >> 2] | 0) & 0 == (M | 0))) {
                  Z(a[g]);
                  Z(a[m]);
                  m = 12;
                  break a
                }
              } while (0);
              Y = Sa(u, a[i], O, t, y, 0)
            }
            if (0 != (Y | 0)) {
              P = O;
              o = 57;
              break
            }
            M = 0;
            for (N = O;;) {
              if (M) {
                P = N;
                o = 57;
                break b
              }
              M = a[i];
              if (N >>> 0 <= M >>> 0) {
                var aa = M;
                break
              }
              N = La(u, M, N - 1 | 0, t, y);
              M = a[i];
              if (0 == (N | 0)) {
                aa = M;
                break
              }
              M = 0 != (Sa(u, M, N, t, y, 0) | 0)
            }
            M = aa + 1 | 0
          }
          b: do {
            if (57 == o && !k && (H = a[z >> 2], a[q] = a[i] - H | 0, a[q + 1] = P - H | 0, 1 < b >>> 0)) {
              H = a[p] + 80 | 0;
              for (h = 1;;) {
                if (L = (h << 3) + d | 0, h >>> 0 > a[H >> 2] >>> 0 ? (a[L >> 2] = -1, a[((h << 3) + 4 >> 2) + q] = -1) : (K = (h << 3) + a[g] | 0, M = a[K + 4 >> 2], a[L >> 2] = a[K >> 2], a[L + 4 >> 2] = M), h = h + 1 | 0, (h | 0) == (b | 0)) {
                  break b
                }
              }
            }
          } while (0);
          g = a[g];
          0 != (g | 0) && Z(g);
          n = a[n];
          0 != (n | 0) && Z(n);
          Z(a[m]);
          m = 0
        }
      }
    } while (0);
    r = u;
    return m
  }

  function sf(e, c, b, d, f) {
    var i, h, k = e >> 2,
      m, n = a[k + 10],
      g = a[k + 11],
      p = a[k + 12],
      l = (a[k + 4] | 0) == (c | 0) ? 128 : j[c - 1 | 0] << 24 >> 24;
    h = (e | 0) >> 2;
    Da(n, a[a[h] + 28 >> 2]);
    j[n + d | 0] = 1;
    var q = kb(a[h], d, f, n, 132, n);
    oa(g, q, a[a[h] + 28 >> 2]);
    n = e + 20 | 0;
    e = e + 4 | 0;
    m = 0;
    for (var v = q;;) {
      var q = (c | 0) == (a[n >> 2] | 0) ? 128 : j[c] << 24 >> 24,
        u = a[h];
      i = u >> 2;
      var o = 0 == (bc(v, g, a[i + 7]) | 0) ? c : m;
      if (10 == (l | 0)) {
        if (0 == (a[i + 6] & 8 | 0)) {
          var t = 0,
            y = 0;
          m = 11
        } else {
          m = 10
        }
      } else {
        128 == (l | 0) ? 0 == (a[e >> 2] & 1 | 0) ? m = 10 : (y = t = 0, m = 11) : (y = t = 0, m = 11)
      }
      10 == m && (t = a[i + 11], y = 129);
      if (10 == (q | 0)) {
        if (0 == (a[i + 6] & 8 | 0)) {
          var A = t,
            w = y;
          m = 15
        } else {
          m = 14
        }
      } else {
        128 == (q | 0) ? 0 == (a[e >> 2] & 2 | 0) ? m = 14 : (A = t, w = y, m = 15) : (A = t, w = y, m = 15)
      }
      14 == m && (A = a[i + 12] + t | 0, w = 129 == (y | 0) ? 131 : 130);
      m = 0 < (A | 0);
      a: do {
        if (m) {
          i = A;
          for (var s = v, r = u;;) {
            s = kb(r, d, f, s, w, s);
            i = i - 1 | 0;
            if (0 >= (i | 0)) {
              var x = s;
              break a
            }
            r = a[h]
          }
        } else {
          x = v
        }
      } while (0);
      if (129 == (w | 0)) {
        if (128 == (q | 0)) {
          var z = 129;
          m = 23
        } else {
          m = 22
        }
      } else {
        if (128 == (l | 0)) {
          var W = w;
          m = 29
        } else {
          if (v = l & 255, 0 != (fa(v) | 0) | 95 == (l | 0) | 128 == (q | 0)) {
            var F = w,
              C = v;
            m = 25
          } else {
            m = 22
          }
        }
      }
      22 == m && (z = 0 != (fa(q & 255) | 0) | 95 == (q | 0) ? 133 : w, m = 23);
      23 == m && (128 == (l | 0) ? (W = z, m = 29) : (F = z, C = l & 255, m = 25));
      if (25 == m) {
        if (0 != (fa(C) | 0) | 95 == (l | 0)) {
          if (130 == (F | 0)) {
            var D = 134;
            m = 30
          } else {
            128 == (q | 0) ? (W = F, m = 29) : 0 != (fa(q & 255) | 0) | 95 == (q | 0) ? (W = F, m = 29) : (D = 134, m = 30)
          }
        } else {
          W = F, m = 29
        }
      }
      if (29 == m) {
        if (2 > (W - 133 | 0) >>> 0) {
          D = W, m = 30
        } else {
          var B = x;
          m = 31
        }
      }
      30 == m && (B = kb(a[h], d, f, x, D, x));
      u = B + f | 0;
      if (0 != j[u] << 24 >> 24 | (c | 0) == (b | 0)) {
        break
      }
      oa(p, B, a[a[h] + 28 >> 2]);
      oa(B, g, a[a[h] + 28 >> 2]);
      m = o;
      l = q;
      c = c + 1 | 0;
      v = kb(a[h], d, f, p, q, B)
    }
    a[k + 6] = o;
    return 0 == j[u] << 24 >> 24 ? 0 : c + 1 | 0
  }

  function La(e, c, b, d, f) {
    var i, h, k = a[e + 40 >> 2],
      m = a[e + 52 >> 2],
      n = a[e + 48 >> 2],
      g = (a[e + 16 >> 2] | 0) == (c | 0) ? 128 : j[c - 1 | 0] << 24 >> 24;
    i = (e | 0) >> 2;
    Da(k, a[a[i] + 28 >> 2]);
    j[k + d | 0] = 1;
    for (var p = e + 20 | 0, e = e + 4 | 0, l = 0, q = kb(a[i], d, f, k, 132, k);;) {
      k = (c | 0) == (a[p >> 2] | 0) ? 128 : j[c] << 24 >> 24;
      if (10 == (g | 0)) {
        if (h = a[i], 0 == (a[h + 24 >> 2] & 8 | 0)) {
          var v = 0,
            u = 0;
          h = 12
        } else {
          var o = h;
          h = 11
        }
      } else {
        128 == (g | 0) ? 0 != (a[e >> 2] & 1 | 0) ? (u = v = 0, h = 12) : (o = a[i], h = 11) : (u = v = 0, h = 12)
      }
      11 == h && (v = a[o + 44 >> 2], u = 129);
      if (10 == (k | 0)) {
        if (h = a[i], 0 == (a[h + 24 >> 2] & 8 | 0)) {
          var t = v,
            y = u;
          h = 17
        } else {
          var A = h;
          h = 16
        }
      } else {
        128 == (k | 0) ? 0 != (a[e >> 2] & 2 | 0) ? (t = v, y = u, h = 17) : (A = a[i], h = 16) : (t = v, y = u, h = 17)
      }
      16 == h && (t = a[A + 48 >> 2] + v | 0, y = 129 == (u | 0) ? 131 : 130);
      h = 0 < (t | 0);
      a: do {
        if (h) {
          for (var w = t, s = q;;) {
            if (s = kb(a[i], d, f, s, y, s), w = w - 1 | 0, 0 >= (w | 0)) {
              var r = s;
              break a
            }
          }
        } else {
          r = q
        }
      } while (0);
      if (129 == (y | 0)) {
        if (128 == (k | 0)) {
          var x = 129;
          h = 24
        } else {
          h = 23
        }
      } else {
        if (128 == (g | 0)) {
          var z = y;
          h = 30
        } else {
          if (q = g & 255, 0 != (fa(q) | 0) | 95 == (g | 0) | 128 == (k | 0)) {
            var W = y,
              F = q;
            h = 26
          } else {
            h = 23
          }
        }
      }
      23 == h && (x = 0 != (fa(k & 255) | 0) | 95 == (k | 0) ? 133 : y, h = 24);
      24 == h && (128 == (g | 0) ? (z = x, h = 30) : (W = x, F = g & 255, h = 26));
      if (26 == h) {
        if (0 != (fa(F) | 0) | 95 == (g | 0)) {
          if (130 == (W | 0)) {
            var B = 134;
            h = 31
          } else {
            128 == (k | 0) ? (z = W, h = 30) : 0 != (fa(k & 255) | 0) | 95 == (k | 0) ? (z = W, h = 30) : (B = 134, h = 31)
          }
        } else {
          z = W, h = 30
        }
      }
      if (30 == h) {
        if (2 > (z - 133 | 0) >>> 0) {
          B = z, h = 31
        } else {
          var D = r;
          h = 32
        }
      }
      31 == h && (D = kb(a[i], d, f, r, B, r));
      h = 0 == j[D + f | 0] << 24 >> 24 ? l : c;
      l = a[a[i] + 28 >> 2];
      if (0 == (bc(D, m, l) | 0) | (c | 0) == (b | 0)) {
        break
      }
      oa(n, D, l);
      oa(D, m, a[a[i] + 28 >> 2]);
      l = h;
      g = k;
      c = c + 1 | 0;
      q = kb(a[i], d, f, n, k, D)
    }
    return h
  }

  function Gc(e, c, b, d, f) {
    var i, h = (d | 0) < (f | 0);
    a: do {
      if (h) {
        i = (e | 0) >> 2;
        for (var k = e + 12 | 0, m = e + 8 | 0, n = c, g = d;;) {
          var j = a[a[i] + 4 >> 2],
            l = a[j + (g << 2) >> 2],
            q = l & -134217728;
          b: do {
            if (1207959552 == (q | 0) || 1476395008 == (q | 0)) {
              var v = (l & 134217727) + g | 0
            } else {
              if (2013265920 == (q | 0)) {
                for (var u = g, o = l;;) {
                  if (u = (o & 134217727) + u | 0, o = a[j + (u << 2) >> 2], -1879048192 == (o & -134217728 | 0)) {
                    v = u;
                    break b
                  }
                }
              } else {
                v = g
              }
            }
          } while (0);
          j = v + 1 | 0;
          do {
            if (1879048192 == (q | 0)) {
              a[a[m >> 2] + ((l & 134217727) << 3) + 4 >> 2] = n - a[k >> 2] | 0, u = n
            } else {
              if (268435456 == (q | 0)) {
                u = n + 1 | 0
              } else {
                if (1744830464 == (q | 0)) {
                  a[a[m >> 2] + ((l & 134217727) << 3) >> 2] = n - a[k >> 2] | 0, u = n
                } else {
                  if (2013265920 == (q | 0)) {
                    for (u = b;;) {
                      var t = La(e, n, u, g, j);
                      if ((La(e, t, b, j, f) | 0) == (b | 0)) {
                        break
                      }
                      u = t - 1 | 0
                    }
                    var u = g + 1 | 0,
                      o = g - 1 + (a[a[a[i] + 4 >> 2] + (g << 2) >> 2] & 134217727) | 0,
                      y = (La(e, n, t, u, o) | 0) == (t | 0);
                    b: do {
                      if (y) {
                        var A = u,
                          w = o
                      } else {
                        for (var s = o;;) {
                          var r = s + 1 | 0,
                            x = s + 2 | 0,
                            z = a[a[i] + 4 >> 2],
                            W = a[z + (r << 2) >> 2] & 134217727,
                            r = W + r | 0,
                            s = -2013265920 == (a[z + (r << 2) >> 2] & -134217728 | 0) ? W + s | 0 : r;
                          if ((La(e, n, t, x, s) | 0) == (t | 0)) {
                            A = x;
                            w = s;
                            break b
                          }
                        }
                      }
                    } while (0);
                    Gc(e, n, t, A, w);
                    u = t
                  } else {
                    if (1207959552 == (q | 0)) {
                      for (u = b;;) {
                        var F = La(e, n, u, g, j);
                        if ((La(e, F, b, j, f) | 0) == (b | 0)) {
                          break
                        }
                        u = F - 1 | 0
                      }
                      u = g + 1 | 0;
                      for (y = o = n;;) {
                        var D = La(e, y, F, u, v),
                          B = 0 == (D | 0);
                        if (B | (D | 0) == (y | 0)) {
                          break
                        }
                        o = y;
                        y = D
                      }
                      Gc(e, B ? o : y, B ? y : D, u, v);
                      u = F
                    } else {
                      if (1476395008 == (q | 0)) {
                        for (u = b;;) {
                          var C = La(e, n, u, g, j);
                          if ((La(e, C, b, j, f) | 0) == (b | 0)) {
                            break
                          }
                          u = C - 1 | 0
                        }
                        u = g + 1 | 0;
                        0 != (La(e, n, C, u, v) | 0) && Gc(e, n, C, u, v);
                        u = C
                      } else {
                        u = 671088640 == (q | 0) || 805306368 == (q | 0) ? n + 1 | 0 : n
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          if ((j | 0) >= (f | 0)) {
            var E = u;
            break a
          }
          n = u;
          g = j
        }
      } else {
        E = c
      }
    } while (0);
    return E
  }

  function Sa(e, c, b, d, f, i) {
    var h, k, m, n, l, p, q, s, v;
    s = (e | 0) >> 2;
    q = (e + 16 | 0) >> 2;
    p = (e + 4 | 0) >> 2;
    l = (e + 20 | 0) >> 2;
    n = (e + 8 | 0) >> 2;
    m = (e + 12 | 0) >> 2;
    var u = e + 28 | 0;
    a: for (;;) {
      h = 0;
      k = d;
      for (var o = c;;) {
        for (var t = h, y = k;;) {
          var A = 0 != (t | 0);
          if ((y | 0) < (f | 0) & (A ^ 1)) {
            v = 6;
            break
          }
          if (!A) {
            var w = (o | 0) == (b | 0) ? o : 0;
            v = 74;
            break a
          }
          var r = y - 1 | 0,
            x = a[a[s] + 4 >> 2],
            z = a[x + (r << 2) >> 2],
            A = z & -134217728;
          if (939524096 == (A | 0)) {
            v = 51;
            break
          } else {
            if (1476395008 == (A | 0)) {
              t = Sa(e, o, b, y, f, i);
              if (0 != (t | 0)) {
                w = t;
                v = 74;
                break a
              }
              t = 0;
              y = (z & 134217727) + y | 0
            } else {
              if (1207959552 == (A | 0)) {
                i = i + 1 | 0;
                a[a[u >> 2] + (i << 2) >> 2] = o;
                d = y;
                c = o;
                continue a
              } else {
                if (1342177280 == (A | 0)) {
                  d = (i << 2) + a[u >> 2] | 0;
                  if ((o | 0) == (a[d >> 2] | 0)) {
                    i = i - 1 | 0;
                    d = y;
                    c = o;
                    continue a
                  }
                  a[d >> 2] = o;
                  d = Sa(e, o, b, y - (z & 134217727) | 0, f, i);
                  if (0 != (d | 0)) {
                    w = d;
                    v = 74;
                    break a
                  }
                  i = i - 1 | 0;
                  d = y;
                  c = o;
                  continue a
                } else {
                  if (2013265920 == (A | 0)) {
                    v = 65
                  } else {
                    if (1744830464 == (A | 0)) {
                      v = z & 134217727;
                      l = (v << 3) + a[n] | 0;
                      w = a[l >> 2];
                      a[l >> 2] = o - a[m] | 0;
                      f = Sa(e, o, b, y, f, i);
                      if (0 != (f | 0)) {
                        w = f;
                        v = 74;
                        break a
                      }
                      a[a[n] + (v << 3) >> 2] = w;
                      w = 0
                    } else {
                      if (1879048192 == (A | 0)) {
                        v = z & 134217727;
                        l = (v << 3) + a[n] + 4 | 0;
                        w = a[l >> 2];
                        a[l >> 2] = o - a[m] | 0;
                        f = Sa(e, o, b, y, f, i);
                        if (0 != (f | 0)) {
                          w = f;
                          v = 74;
                          break a
                        }
                        a[a[n] + (v << 3) + 4 >> 2] = w;
                        w = 0
                      } else {
                        w = g.sa | 0
                      }
                    }
                    v = 74
                  }
                  break a
                }
              }
            }
          }
        }
        if (6 == v) {
          k = a[s] >> 2;
          h = a[k + 1] >> 2;
          var A = a[(y << 2 >> 2) + h],
            D = A & -134217728;
          b: do {
            if (268435456 == (D | 0)) {
              if ((o | 0) == (b | 0)) {
                w = 0;
                v = 74;
                break a
              }
              if ((j[o] << 24 >> 24 | 0) != (A << 24 >> 24 | 0)) {
                w = 0;
                v = 74;
                break a
              }
              var B = t,
                F = y,
                C = o + 1 | 0
            } else {
              if (671088640 == (D | 0)) {
                if ((o | 0) == (b | 0)) {
                  w = 0;
                  v = 74;
                  break a
                }
                B = t;
                F = y;
                C = o + 1 | 0
              } else {
                if (805306368 == (D | 0)) {
                  B = A & 134217727;
                  F = a[k + 4];
                  if ((o | 0) == (b | 0)) {
                    w = 0;
                    v = 74;
                    break a
                  }
                  if (0 == (j[(B << 4) + F + 4 | 0] & j[a[F + (B << 4) >> 2] + (j[o] & 255) | 0]) << 24 >> 24) {
                    w = 0;
                    v = 74;
                    break a
                  }
                  B = t;
                  F = y;
                  C = o + 1 | 0
                } else {
                  if (402653184 == (D | 0)) {
                    if (!((o | 0) == (a[q] | 0) && 0 == (a[p] & 1 | 0))) {
                      if (o >>> 0 >= a[l] >>> 0) {
                        w = 0;
                        v = 74;
                        break a
                      }
                      if (10 != j[o - 1 | 0] << 24 >> 24) {
                        w = 0;
                        v = 74;
                        break a
                      }
                      if (0 == (a[k + 6] & 8 | 0)) {
                        w = 0;
                        v = 74;
                        break a
                      }
                    }
                    B = t;
                    F = y;
                    C = o
                  } else {
                    if (536870912 == (D | 0)) {
                      B = a[l];
                      if (!((o | 0) == (B | 0) && 0 == (a[p] & 2 | 0))) {
                        if (o >>> 0 >= B >>> 0) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        if (10 != j[o] << 24 >> 24) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        if (0 == (a[k + 6] & 8 | 0)) {
                          w = 0;
                          v = 74;
                          break a
                        }
                      }
                      B = t;
                      F = y;
                      C = o
                    } else {
                      if (-1744830464 == (D | 0)) {
                        B = a[q];
                        v = (o | 0) == (B | 0) ? 0 == (a[p] & 1 | 0) ? 31 : 25 : 25;
                        c: do {
                          if (25 == v) {
                            do {
                              if (o >>> 0 < a[l] >>> 0 && 10 == j[o - 1 | 0] << 24 >> 24 && 0 != (a[k + 6] & 8 | 0)) {
                                break c
                              }
                            } while (0);
                            if (o >>> 0 <= B >>> 0) {
                              w = 0;
                              v = 74;
                              break a
                            }
                            F = o - 1 | 0;
                            if (0 != (fa(j[F] & 255) | 0)) {
                              w = 0;
                              v = 74;
                              break a
                            }
                            if (95 == j[F] << 24 >> 24) {
                              w = 0;
                              v = 74;
                              break a
                            }
                          }
                        } while (0);
                        if (o >>> 0 >= a[l] >>> 0) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        if (0 == (fa(j[o] & 255) | 0) && 95 != j[o] << 24 >> 24) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        B = t;
                        F = y;
                        C = o
                      } else {
                        if (-1610612736 == (D | 0)) {
                          B = a[l];
                          v = (o | 0) == (B | 0) ? 0 == (a[p] & 2 | 0) ? 41 : 36 : 36;
                          do {
                            if (36 == v) {
                              if (o >>> 0 >= B >>> 0) {
                                w = 0;
                                v = 74;
                                break a
                              }
                              F = j[o];
                              if (!(10 == F << 24 >> 24 && 0 != (a[k + 6] & 8 | 0))) {
                                if (0 != (fa(F & 255) | 0)) {
                                  w = 0;
                                  v = 74;
                                  break a
                                }
                                if (95 == j[o] << 24 >> 24) {
                                  w = 0;
                                  v = 74;
                                  break a
                                }
                              }
                            }
                          } while (0);
                          if (o >>> 0 <= a[q] >>> 0) {
                            w = 0;
                            v = 74;
                            break a
                          }
                          B = o - 1 | 0;
                          if (0 == (fa(j[B] & 255) | 0) && 95 != j[B] << 24 >> 24) {
                            w = 0;
                            v = 74;
                            break a
                          }
                          B = t;
                          F = y;
                          C = o
                        } else {
                          if (1610612736 == (D | 0)) {
                            B = t, F = y, C = o
                          } else {
                            if (-2147483648 == (D | 0)) {
                              for (var E = y + 1 | 0, G = a[(E << 2 >> 2) + h];;) {
                                if (E = (G & 134217727) + E | 0, G = a[(E << 2 >> 2) + h], -1879048192 == (G & -134217728 | 0)) {
                                  B = t;
                                  F = E;
                                  C = o;
                                  break b
                                }
                              }
                            } else {
                              B = 1, F = y, C = o
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          h = B;
          k = F + 1 | 0;
          o = C
        } else {
          if (51 == v) {
            h = z & 134217727;
            k = a[n];
            t = a[k + (h << 3) + 4 >> 2];
            if (-1 == (t | 0)) {
              w = 0;
              v = 74;
              break a
            }
            k = a[k + (h << 3) >> 2];
            t = t - k | 0;
            if (o >>> 0 > (b + -t | 0) >>> 0) {
              w = 0;
              v = 74;
              break a
            }
            if (0 != (bc(o, a[m] + k | 0, t) | 0)) {
              w = 0;
              v = 74;
              break a
            }
            h |= 1073741824;
            k = r;
            for (A = z;;) {
              var H = k + 1 | 0;
              if ((A | 0) == (h | 0)) {
                break
              }
              k = H;
              A = a[x + (H << 2) >> 2]
            }
            h = 0;
            k = H;
            o = o + t | 0
          }
        }
      }
    }
    a: do {
      if (65 == v) {
        n = y - 2 + (z & 134217727) | 0;
        for (f = y;;) {
          f = Sa(e, o, b, f, n, i);
          if (0 != (f | 0)) {
            w = f;
            break a
          }
          f = a[a[s] + 4 >> 2] >> 2;
          if (-1879048192 == (a[(n << 2 >> 2) + f] & -134217728 | 0)) {
            w = 0;
            break a
          }
          p = n + 1 | 0;
          m = n + 2 | 0;
          l = a[(p << 2 >> 2) + f] & 134217727;
          p = l + p | 0;
          n = -2013265920 != (a[(p << 2 >> 2) + f] & -134217728 | 0) ? p : l + n | 0;
          f = m
        }
      }
    } while (0);
    return w
  }

  function kb(e, c, b, d, f, i) {
    var h, k = (c | 0) == (b | 0);
    a: do {
      if (!k) {
        for (var m = e + 4 | 0, n = 2 > (f - 130 | 0) >>> 0, g = 133 == (f | 0), p = 134 == (f | 0), l = 127 < (f | 0), q = e + 16 | 0, v = f & 255, u = c, o = c;;) {
          h = a[m >> 2] >> 2;
          var t = a[(u << 2 >> 2) + h],
            y = t & -134217728;
          do {
            if (-1879048192 == (y | 0)) {
              var A = o + (i + 1) | 0;
              j[A] |= j[i + o | 0];
              var A = o,
                w = u
            } else {
              if (268435456 == (y | 0)) {
                (t << 24 >> 24 | 0) == (f | 0) && (A = o + (i + 1) | 0, j[A] |= j[d + o | 0]), A = o, w = u
              } else {
                if (402653184 == (y | 0)) {
                  if (131 == (f | 0) || 129 == (f | 0)) {
                    A = o + (i + 1) | 0, j[A] |= j[d + o | 0]
                  }
                  A = o;
                  w = u
                } else {
                  if (536870912 == (y | 0)) {
                    n && (A = o + (i + 1) | 0, j[A] |= j[d + o | 0]), A = o, w = u
                  } else {
                    if (-1744830464 == (y | 0)) {
                      g && (A = o + (i + 1) | 0, j[A] |= j[d + o | 0]), A = o, w = u
                    } else {
                      if (-1610612736 == (y | 0)) {
                        p && (A = o + (i + 1) | 0, j[A] |= j[d + o | 0]), A = o, w = u
                      } else {
                        if (671088640 == (y | 0)) {
                          l || (A = o + (i + 1) | 0, j[A] |= j[d + o | 0]), A = o, w = u
                        } else {
                          if (805306368 == (y | 0)) {
                            A = t & 134217727, w = a[q >> 2], !l && 0 != (j[(A << 4) + w + 4 | 0] & j[a[w + (A << 4) >> 2] + v | 0]) << 24 >> 24 && (A = o + (i + 1) | 0, j[A] |= j[d + o | 0]), A = o, w = u
                          } else {
                            if (939524096 == (y | 0) || 1073741824 == (y | 0)) {
                              A = o + (i + 1) | 0, j[A] |= j[i + o | 0], A = o, w = u
                            } else {
                              if (1207959552 == (y | 0)) {
                                A = o + (i + 1) | 0, j[A] |= j[i + o | 0], A = o, w = u
                              } else {
                                if (1342177280 == (y | 0)) {
                                  A = j[i + o | 0];
                                  w = o + (i + 1) | 0;
                                  j[w] |= A;
                                  var w = t & 134217727,
                                    s = i + (o - w) | 0,
                                    r = j[s],
                                    A = A | r;
                                  j[s] = A;
                                  0 != r << 24 >> 24 | 0 == A << 24 >> 24 ? (A = o, w = u) : A = w = u - 1 - w | 0
                                } else {
                                  if (1476395008 == (y | 0)) {
                                    A = j[i + o | 0], w = o + (i + 1) | 0, j[w] |= A, w = i + (t & 134217727) + o | 0, j[w] |= A
                                  } else {
                                    if (1610612736 == (y | 0)) {
                                      A = o + (i + 1) | 0, j[A] |= j[i + o | 0]
                                    } else {
                                      if (1744830464 == (y | 0) || 1879048192 == (y | 0)) {
                                        A = o + (i + 1) | 0, j[A] |= j[i + o | 0]
                                      } else {
                                        if (2013265920 == (y | 0)) {
                                          A = j[i + o | 0], w = o + (i + 1) | 0, j[w] |= A, w = i + (t & 134217727) + o | 0, j[w] |= A
                                        } else {
                                          if (-2147483648 == (y | 0)) {
                                            if (A = j[i + o | 0], 0 != A << 24 >> 24) {
                                              w = a[(u + 1 << 2 >> 2) + h];
                                              s = -1879048192 == (w & -134217728 | 0);
                                              b: do {
                                                if (s) {
                                                  var x = 1
                                                } else {
                                                  for (var r = 1, z = w;;) {
                                                    if (r = (z & 134217727) + r | 0, z = a[(r + u << 2 >> 2) + h], -1879048192 == (z & -134217728 | 0)) {
                                                      x = r;
                                                      break b
                                                    }
                                                  }
                                                }
                                              } while (0);
                                              w = i + x + o | 0;
                                              j[w] |= A
                                            }
                                          } else {
                                            -2013265920 == (y | 0) && (A = j[i + o | 0], w = o + (i + 1) | 0, j[w] |= A, w = t & 134217727, -1879048192 != (a[a[m >> 2] + (w + u << 2) >> 2] & -134217728 | 0) && (w = i + w + o | 0, j[w] |= A))
                                          }
                                        }
                                      }
                                    }
                                  }
                                  A = o;
                                  w = u
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          h = w + 1 | 0;
          if ((h | 0) == (b | 0)) {
            break a
          }
          u = h;
          o = A + 1 | 0
        }
      }
    } while (0);
    return i
  }

  function rf(e, c, b, d, f) {
    var i, h, k, m = (a[e + 16 >> 2] | 0) == (c | 0) ? 128 : j[c - 1 | 0] << 24 >> 24,
      n = 1 << d;
    h = (e | 0) >> 2;
    var g = a[h],
      n = eb(g, d, f, n, 132, n),
      p = e + 20 | 0,
      l = 1 << f,
      q = e + 4 | 0,
      v = 0,
      u = n,
      o = g;
    for (i = o >> 2;;) {
      var g = (c | 0) == (a[p >> 2] | 0) ? 128 : j[c] << 24 >> 24,
        t = (u | 0) == (n | 0) ? c : v;
      if (10 == (m | 0)) {
        if (0 == (a[i + 6] & 8 | 0)) {
          var y = 0,
            s = 0;
          k = 11
        } else {
          k = 10
        }
      } else {
        128 == (m | 0) ? 0 == (a[q >> 2] & 1 | 0) ? k = 10 : (s = y = 0, k = 11) : (s = y = 0, k = 11)
      }
      10 == k && (y = a[i + 11], s = 129);
      if (10 == (g | 0)) {
        if (0 == (a[i + 6] & 8 | 0)) {
          var w = y,
            r = s;
          k = 15
        } else {
          k = 14
        }
      } else {
        128 == (g | 0) ? 0 == (a[q >> 2] & 2 | 0) ? k = 14 : (w = y, r = s, k = 15) : (w = y, r = s, k = 15)
      }
      14 == k && (w = a[i + 12] + y | 0, r = 129 == (s | 0) ? 131 : 130);
      k = 0 < (w | 0);
      a: do {
        if (k) {
          v = w;
          for (i = u;;) {
            if (i = eb(o, d, f, i, r, i), v = v - 1 | 0, 0 >= (v | 0)) {
              var x = i;
              break a
            }
          }
        } else {
          x = u
        }
      } while (0);
      if (129 == (r | 0)) {
        if (128 == (g | 0)) {
          var z = 129;
          k = 22
        } else {
          k = 21
        }
      } else {
        if (128 == (m | 0)) {
          var B = r;
          k = 28
        } else {
          if (u = m & 255, 0 != (fa(u) | 0) | 95 == (m | 0) | 128 == (g | 0)) {
            var D = r,
              F = u;
            k = 24
          } else {
            k = 21
          }
        }
      }
      21 == k && (z = 0 != (fa(g & 255) | 0) | 95 == (g | 0) ? 133 : r, k = 22);
      22 == k && (128 == (m | 0) ? (B = z, k = 28) : (D = z, F = m & 255, k = 24));
      if (24 == k) {
        if (0 != (fa(F) | 0) | 95 == (m | 0)) {
          if (130 == (D | 0)) {
            var C = 134;
            k = 29
          } else {
            128 == (g | 0) ? (B = D, k = 28) : 0 != (fa(g & 255) | 0) | 95 == (g | 0) ? (B = D, k = 28) : (C = 134, k = 29)
          }
        } else {
          B = D, k = 28
        }
      }
      if (28 == k) {
        if (2 > (B - 133 | 0) >>> 0) {
          C = B, k = 29
        } else {
          var E = x;
          k = 30
        }
      }
      29 == k && (E = eb(a[h], d, f, x, C, x));
      k = 0 != (E & l | 0);
      if (k | (c | 0) == (b | 0)) {
        break
      }
      o = a[h];
      v = t;
      m = g;
      c = c + 1 | 0;
      u = eb(o, d, f, E, g, n);
      i = o >> 2
    }
    a[e + 24 >> 2] = t;
    return k ? c + 1 | 0 : 0
  }

  function va(e, c, b, d, f) {
    var i, h, k, m = a[e + 48 >> 2],
      n = (a[e + 16 >> 2] | 0) == (c | 0) ? 128 : j[c - 1 | 0] << 24 >> 24,
      g = 1 << d;
    h = (e | 0) >> 2;
    var p = a[h],
      l = e + 20 | 0,
      q = 1 << f,
      e = e + 4 | 0,
      v = 0,
      g = eb(p, d, f, g, 132, g),
      u = p;
    for (i = u >> 2;;) {
      p = (c | 0) == (a[l >> 2] | 0) ? 128 : j[c] << 24 >> 24;
      if (10 == (n | 0)) {
        if (0 == (a[i + 6] & 8 | 0)) {
          var o = 0,
            t = 0;
          k = 11
        } else {
          k = 10
        }
      } else {
        128 == (n | 0) ? 0 == (a[e >> 2] & 1 | 0) ? k = 10 : (t = o = 0, k = 11) : (t = o = 0, k = 11)
      }
      10 == k && (o = a[i + 11], t = 129);
      if (10 == (p | 0)) {
        if (0 == (a[i + 6] & 8 | 0)) {
          var y = o,
            s = t;
          k = 15
        } else {
          k = 14
        }
      } else {
        128 == (p | 0) ? 0 == (a[e >> 2] & 2 | 0) ? k = 14 : (y = o, s = t, k = 15) : (y = o, s = t, k = 15)
      }
      14 == k && (y = a[i + 12] + o | 0, s = 129 == (t | 0) ? 131 : 130);
      k = 0 < (y | 0);
      a: do {
        if (k) {
          i = y;
          for (var w = g;;) {
            if (w = eb(u, d, f, w, s, w), i = i - 1 | 0, 0 >= (i | 0)) {
              var r = w;
              break a
            }
          }
        } else {
          r = g
        }
      } while (0);
      if (129 == (s | 0)) {
        if (128 == (p | 0)) {
          var x = 129;
          k = 22
        } else {
          k = 21
        }
      } else {
        if (128 == (n | 0)) {
          var z = s;
          k = 28
        } else {
          if (g = n & 255, 0 != (fa(g) | 0) | 95 == (n | 0) | 128 == (p | 0)) {
            var B = s,
              D = g;
            k = 24
          } else {
            k = 21
          }
        }
      }
      21 == k && (x = 0 != (fa(p & 255) | 0) | 95 == (p | 0) ? 133 : s, k = 22);
      22 == k && (128 == (n | 0) ? (z = x, k = 28) : (B = x, D = n & 255, k = 24));
      if (24 == k) {
        if (0 != (fa(D) | 0) | 95 == (n | 0)) {
          if (130 == (B | 0)) {
            var F = 134;
            k = 29
          } else {
            128 == (p | 0) ? (z = B, k = 28) : 0 != (fa(p & 255) | 0) | 95 == (p | 0) ? (z = B, k = 28) : (F = 134, k = 29)
          }
        } else {
          z = B, k = 28
        }
      }
      if (28 == k) {
        if (2 > (z - 133 | 0) >>> 0) {
          F = z, k = 29
        } else {
          var C = r;
          k = 30
        }
      }
      29 == k && (C = eb(a[h], d, f, r, F, r));
      k = 0 == (C & q | 0) ? v : c;
      if ((C | 0) == (m | 0) | (c | 0) == (b | 0)) {
        break
      }
      u = a[h];
      v = k;
      n = p;
      c = c + 1 | 0;
      g = eb(u, d, f, C, p, m);
      i = u >> 2
    }
    return k
  }

  function Fc(e, c, b, d, f) {
    var i, h = (d | 0) < (f | 0);
    a: do {
      if (h) {
        i = (e | 0) >> 2;
        for (var k = e + 12 | 0, m = e + 8 | 0, g = c, j = d;;) {
          var p = a[a[i] + 4 >> 2],
            l = a[p + (j << 2) >> 2],
            q = l & -134217728;
          b: do {
            if (1207959552 == (q | 0) || 1476395008 == (q | 0)) {
              var v = (l & 134217727) + j | 0
            } else {
              if (2013265920 == (q | 0)) {
                for (var u = j, o = l;;) {
                  if (u = (o & 134217727) + u | 0, o = a[p + (u << 2) >> 2], -1879048192 == (o & -134217728 | 0)) {
                    v = u;
                    break b
                  }
                }
              } else {
                v = j
              }
            }
          } while (0);
          p = v + 1 | 0;
          do {
            if (1879048192 == (q | 0)) {
              a[a[m >> 2] + ((l & 134217727) << 3) + 4 >> 2] = g - a[k >> 2] | 0, u = g
            } else {
              if (268435456 == (q | 0)) {
                u = g + 1 | 0
              } else {
                if (1744830464 == (q | 0)) {
                  a[a[m >> 2] + ((l & 134217727) << 3) >> 2] = g - a[k >> 2] | 0, u = g
                } else {
                  if (2013265920 == (q | 0)) {
                    for (u = b;;) {
                      var t = va(e, g, u, j, p);
                      if ((va(e, t, b, p, f) | 0) == (b | 0)) {
                        break
                      }
                      u = t - 1 | 0
                    }
                    var u = j + 1 | 0,
                      o = j - 1 + (a[a[a[i] + 4 >> 2] + (j << 2) >> 2] & 134217727) | 0,
                      y = (va(e, g, t, u, o) | 0) == (t | 0);
                    b: do {
                      if (y) {
                        var s = u,
                          w = o
                      } else {
                        for (var r = o;;) {
                          var x = r + 1 | 0,
                            z = r + 2 | 0,
                            B = a[a[i] + 4 >> 2],
                            D = a[B + (x << 2) >> 2] & 134217727,
                            x = D + x | 0,
                            r = -2013265920 == (a[B + (x << 2) >> 2] & -134217728 | 0) ? D + r | 0 : x;
                          if ((va(e, g, t, z, r) | 0) == (t | 0)) {
                            s = z;
                            w = r;
                            break b
                          }
                        }
                      }
                    } while (0);
                    Fc(e, g, t, s, w);
                    u = t
                  } else {
                    if (1207959552 == (q | 0)) {
                      for (u = b;;) {
                        var F = va(e, g, u, j, p);
                        if ((va(e, F, b, p, f) | 0) == (b | 0)) {
                          break
                        }
                        u = F - 1 | 0
                      }
                      u = j + 1 | 0;
                      for (y = o = g;;) {
                        var C = va(e, y, F, u, v),
                          E = 0 == (C | 0);
                        if (E | (C | 0) == (y | 0)) {
                          break
                        }
                        o = y;
                        y = C
                      }
                      Fc(e, E ? o : y, E ? y : C, u, v);
                      u = F
                    } else {
                      if (1476395008 == (q | 0)) {
                        for (u = b;;) {
                          var G = va(e, g, u, j, p);
                          if ((va(e, G, b, p, f) | 0) == (b | 0)) {
                            break
                          }
                          u = G - 1 | 0
                        }
                        u = j + 1 | 0;
                        0 != (va(e, g, G, u, v) | 0) && Fc(e, g, G, u, v);
                        u = G
                      } else {
                        u = 671088640 == (q | 0) || 805306368 == (q | 0) ? g + 1 | 0 : g
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          if ((p | 0) >= (f | 0)) {
            var H = u;
            break a
          }
          g = u;
          j = p
        }
      } else {
        H = c
      }
    } while (0);
    return H
  }

  function eb(e, c, b, d, f, i) {
    var h, k = (c | 0) == (b | 0);
    a: do {
      if (k) {
        var m = i
      } else {
        h = a[e + 4 >> 2] >> 2;
        for (var g = 2 > (f - 130 | 0) >>> 0, l = 133 == (f | 0), p = 134 == (f | 0), q = 127 < (f | 0), s = e + 16 | 0, v = f & 255, u = i, o = c, t = 1 << c;;) {
          var y = a[(o << 2 >> 2) + h],
            A = y & -134217728;
          do {
            if (-1879048192 == (A | 0)) {
              var w = t,
                r = o,
                x = (t & u) << 1 | u
            } else {
              if (268435456 == (A | 0)) {
                (y << 24 >> 24 | 0) != (f | 0) ? (w = t, r = o, x = u) : (w = t, r = o, x = (t & d) << 1 | u)
              } else {
                if (402653184 == (A | 0)) {
                  131 == (f | 0) || 129 == (f | 0) ? (w = t, r = o, x = (t & d) << 1 | u) : (w = t, r = o, x = u)
                } else {
                  if (536870912 == (A | 0)) {
                    g ? (w = t, r = o, x = (t & d) << 1 | u) : (w = t, r = o, x = u)
                  } else {
                    if (-1744830464 == (A | 0)) {
                      l ? (w = t, r = o, x = (t & d) << 1 | u) : (w = t, r = o, x = u)
                    } else {
                      if (-1610612736 == (A | 0)) {
                        p ? (w = t, r = o, x = (t & d) << 1 | u) : (w = t, r = o, x = u)
                      } else {
                        if (671088640 == (A | 0)) {
                          q ? (w = t, r = o, x = u) : (w = t, r = o, x = (t & d) << 1 | u)
                        } else {
                          if (805306368 == (A | 0)) {
                            w = y & 134217727, r = a[s >> 2], q ? (w = t, r = o, x = u) : 0 == (j[(w << 4) + r + 4 | 0] & j[a[r + (w << 4) >> 2] + v | 0]) << 24 >> 24 ? (w = t, r = o, x = u) : (w = t, r = o, x = (t & d) << 1 | u)
                          } else {
                            if (939524096 == (A | 0) || 1073741824 == (A | 0)) {
                              w = t, r = o, x = (t & u) << 1 | u
                            } else {
                              if (1207959552 == (A | 0)) {
                                w = t, r = o, x = (t & u) << 1 | u
                              } else {
                                if (1342177280 == (A | 0)) {
                                  var w = (t & u) << 1 | u,
                                    r = y & 134217727,
                                    z = t >>> (r >>> 0),
                                    x = (w & t) >>> (r >>> 0) | w;
                                  0 != (z & w | 0) ? (w = t, r = o) : 0 == (x & z | 0) ? (w = t, r = o) : (r = o - 1 - r | 0, w = 1 << r)
                                } else {
                                  if (1476395008 == (A | 0)) {
                                    x = (t & u) << 1 | u, w = t, r = o, x |= (x & t) << (y & 134217727)
                                  } else {
                                    if (1610612736 == (A | 0)) {
                                      w = t, r = o, x = (t & u) << 1 | u
                                    } else {
                                      if (1744830464 == (A | 0) || 1879048192 == (A | 0)) {
                                        w = t, r = o, x = (t & u) << 1 | u
                                      } else {
                                        if (2013265920 == (A | 0)) {
                                          x = (t & u) << 1 | u, w = t, r = o, x |= (x & t) << (y & 134217727)
                                        } else {
                                          if (-2147483648 == (A | 0)) {
                                            if (x = t & u, 0 == (x | 0)) {
                                              w = t, r = o, x = u
                                            } else {
                                              w = a[(o + 1 << 2 >> 2) + h];
                                              r = -1879048192 == (w & -134217728 | 0);
                                              b: do {
                                                if (r) {
                                                  var B = 1
                                                } else {
                                                  for (var z = 1, D = w;;) {
                                                    if (z = (D & 134217727) + z | 0, D = a[(z + o << 2 >> 2) + h], -1879048192 == (D & -134217728 | 0)) {
                                                      B = z;
                                                      break b
                                                    }
                                                  }
                                                }
                                              } while (0);
                                              w = t;
                                              r = o;
                                              x = x << B | u
                                            }
                                          } else {
                                            -2013265920 == (A | 0) ? (x = (t & u) << 1 | u, z = y & 134217727, -1879048192 == (a[(z + o << 2 >> 2) + h] & -134217728 | 0) ? (w = t, r = o) : (w = t, r = o, x |= (x & t) << z)) : (w = t, r = o, x = u)
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          o = r + 1 | 0;
          if ((o | 0) == (b | 0)) {
            m = x;
            break a
          }
          u = x;
          t = w << 1
        }
      }
    } while (0);
    return m
  }

  function Za(e, c, b, d, f, i) {
    var h, k, m, n, l, p, q, s, v;
    s = (e | 0) >> 2;
    q = (e + 16 | 0) >> 2;
    p = (e + 4 | 0) >> 2;
    l = (e + 20 | 0) >> 2;
    n = (e + 8 | 0) >> 2;
    m = (e + 12 | 0) >> 2;
    var u = e + 28 | 0;
    a: for (;;) {
      h = 0;
      k = d;
      for (var o = c;;) {
        for (var t = h, y = k;;) {
          var r = 0 != (t | 0);
          if ((y | 0) < (f | 0) & (r ^ 1)) {
            v = 6;
            break
          }
          if (!r) {
            var w = (o | 0) == (b | 0) ? o : 0;
            v = 74;
            break a
          }
          var x = y - 1 | 0,
            z = a[a[s] + 4 >> 2],
            B = a[z + (x << 2) >> 2],
            r = B & -134217728;
          if (939524096 == (r | 0)) {
            v = 51;
            break
          } else {
            if (1476395008 == (r | 0)) {
              t = Za(e, o, b, y, f, i);
              if (0 != (t | 0)) {
                w = t;
                v = 74;
                break a
              }
              t = 0;
              y = (B & 134217727) + y | 0
            } else {
              if (1207959552 == (r | 0)) {
                i = i + 1 | 0;
                a[a[u >> 2] + (i << 2) >> 2] = o;
                d = y;
                c = o;
                continue a
              } else {
                if (1342177280 == (r | 0)) {
                  d = (i << 2) + a[u >> 2] | 0;
                  if ((o | 0) == (a[d >> 2] | 0)) {
                    i = i - 1 | 0;
                    d = y;
                    c = o;
                    continue a
                  }
                  a[d >> 2] = o;
                  d = Za(e, o, b, y - (B & 134217727) | 0, f, i);
                  if (0 != (d | 0)) {
                    w = d;
                    v = 74;
                    break a
                  }
                  i = i - 1 | 0;
                  d = y;
                  c = o;
                  continue a
                } else {
                  if (2013265920 == (r | 0)) {
                    v = 65
                  } else {
                    if (1744830464 == (r | 0)) {
                      v = B & 134217727;
                      l = (v << 3) + a[n] | 0;
                      w = a[l >> 2];
                      a[l >> 2] = o - a[m] | 0;
                      f = Za(e, o, b, y, f, i);
                      if (0 != (f | 0)) {
                        w = f;
                        v = 74;
                        break a
                      }
                      a[a[n] + (v << 3) >> 2] = w;
                      w = 0
                    } else {
                      if (1879048192 == (r | 0)) {
                        v = B & 134217727;
                        l = (v << 3) + a[n] + 4 | 0;
                        w = a[l >> 2];
                        a[l >> 2] = o - a[m] | 0;
                        f = Za(e, o, b, y, f, i);
                        if (0 != (f | 0)) {
                          w = f;
                          v = 74;
                          break a
                        }
                        a[a[n] + (v << 3) + 4 >> 2] = w;
                        w = 0
                      } else {
                        w = g.sa | 0
                      }
                    }
                    v = 74
                  }
                  break a
                }
              }
            }
          }
        }
        if (6 == v) {
          k = a[s] >> 2;
          h = a[k + 1] >> 2;
          var r = a[(y << 2 >> 2) + h],
            D = r & -134217728;
          b: do {
            if (268435456 == (D | 0)) {
              if ((o | 0) == (b | 0)) {
                w = 0;
                v = 74;
                break a
              }
              if ((j[o] << 24 >> 24 | 0) != (r << 24 >> 24 | 0)) {
                w = 0;
                v = 74;
                break a
              }
              var C = t,
                F = y,
                E = o + 1 | 0
            } else {
              if (671088640 == (D | 0)) {
                if ((o | 0) == (b | 0)) {
                  w = 0;
                  v = 74;
                  break a
                }
                C = t;
                F = y;
                E = o + 1 | 0
              } else {
                if (805306368 == (D | 0)) {
                  C = r & 134217727;
                  F = a[k + 4];
                  if ((o | 0) == (b | 0)) {
                    w = 0;
                    v = 74;
                    break a
                  }
                  if (0 == (j[(C << 4) + F + 4 | 0] & j[a[F + (C << 4) >> 2] + (j[o] & 255) | 0]) << 24 >> 24) {
                    w = 0;
                    v = 74;
                    break a
                  }
                  C = t;
                  F = y;
                  E = o + 1 | 0
                } else {
                  if (402653184 == (D | 0)) {
                    if (!((o | 0) == (a[q] | 0) && 0 == (a[p] & 1 | 0))) {
                      if (o >>> 0 >= a[l] >>> 0) {
                        w = 0;
                        v = 74;
                        break a
                      }
                      if (10 != j[o - 1 | 0] << 24 >> 24) {
                        w = 0;
                        v = 74;
                        break a
                      }
                      if (0 == (a[k + 6] & 8 | 0)) {
                        w = 0;
                        v = 74;
                        break a
                      }
                    }
                    C = t;
                    F = y;
                    E = o
                  } else {
                    if (536870912 == (D | 0)) {
                      C = a[l];
                      if (!((o | 0) == (C | 0) && 0 == (a[p] & 2 | 0))) {
                        if (o >>> 0 >= C >>> 0) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        if (10 != j[o] << 24 >> 24) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        if (0 == (a[k + 6] & 8 | 0)) {
                          w = 0;
                          v = 74;
                          break a
                        }
                      }
                      C = t;
                      F = y;
                      E = o
                    } else {
                      if (-1744830464 == (D | 0)) {
                        C = a[q];
                        v = (o | 0) == (C | 0) ? 0 == (a[p] & 1 | 0) ? 31 : 25 : 25;
                        c: do {
                          if (25 == v) {
                            do {
                              if (o >>> 0 < a[l] >>> 0 && 10 == j[o - 1 | 0] << 24 >> 24 && 0 != (a[k + 6] & 8 | 0)) {
                                break c
                              }
                            } while (0);
                            if (o >>> 0 <= C >>> 0) {
                              w = 0;
                              v = 74;
                              break a
                            }
                            F = o - 1 | 0;
                            if (0 != (fa(j[F] & 255) | 0)) {
                              w = 0;
                              v = 74;
                              break a
                            }
                            if (95 == j[F] << 24 >> 24) {
                              w = 0;
                              v = 74;
                              break a
                            }
                          }
                        } while (0);
                        if (o >>> 0 >= a[l] >>> 0) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        if (0 == (fa(j[o] & 255) | 0) && 95 != j[o] << 24 >> 24) {
                          w = 0;
                          v = 74;
                          break a
                        }
                        C = t;
                        F = y;
                        E = o
                      } else {
                        if (-1610612736 == (D | 0)) {
                          C = a[l];
                          v = (o | 0) == (C | 0) ? 0 == (a[p] & 2 | 0) ? 41 : 36 : 36;
                          do {
                            if (36 == v) {
                              if (o >>> 0 >= C >>> 0) {
                                w = 0;
                                v = 74;
                                break a
                              }
                              F = j[o];
                              if (!(10 == F << 24 >> 24 && 0 != (a[k + 6] & 8 | 0))) {
                                if (0 != (fa(F & 255) | 0)) {
                                  w = 0;
                                  v = 74;
                                  break a
                                }
                                if (95 == j[o] << 24 >> 24) {
                                  w = 0;
                                  v = 74;
                                  break a
                                }
                              }
                            }
                          } while (0);
                          if (o >>> 0 <= a[q] >>> 0) {
                            w = 0;
                            v = 74;
                            break a
                          }
                          C = o - 1 | 0;
                          if (0 == (fa(j[C] & 255) | 0) && 95 != j[C] << 24 >> 24) {
                            w = 0;
                            v = 74;
                            break a
                          }
                          C = t;
                          F = y;
                          E = o
                        } else {
                          if (1610612736 == (D | 0)) {
                            C = t, F = y, E = o
                          } else {
                            if (-2147483648 == (D | 0)) {
                              for (var G = y + 1 | 0, H = a[(G << 2 >> 2) + h];;) {
                                if (G = (H & 134217727) + G | 0, H = a[(G << 2 >> 2) + h], -1879048192 == (H & -134217728 | 0)) {
                                  C = t;
                                  F = G;
                                  E = o;
                                  break b
                                }
                              }
                            } else {
                              C = 1, F = y, E = o
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          h = C;
          k = F + 1 | 0;
          o = E
        } else {
          if (51 == v) {
            h = B & 134217727;
            k = a[n];
            t = a[k + (h << 3) + 4 >> 2];
            if (-1 == (t | 0)) {
              w = 0;
              v = 74;
              break a
            }
            k = a[k + (h << 3) >> 2];
            t = t - k | 0;
            if (o >>> 0 > (b + -t | 0) >>> 0) {
              w = 0;
              v = 74;
              break a
            }
            if (0 != (bc(o, a[m] + k | 0, t) | 0)) {
              w = 0;
              v = 74;
              break a
            }
            h |= 1073741824;
            k = x;
            for (r = B;;) {
              var J = k + 1 | 0;
              if ((r | 0) == (h | 0)) {
                break
              }
              k = J;
              r = a[z + (J << 2) >> 2]
            }
            h = 0;
            k = J;
            o = o + t | 0
          }
        }
      }
    }
    a: do {
      if (65 == v) {
        n = y - 2 + (B & 134217727) | 0;
        for (f = y;;) {
          f = Za(e, o, b, f, n, i);
          if (0 != (f | 0)) {
            w = f;
            break a
          }
          f = a[a[s] + 4 >> 2] >> 2;
          if (-1879048192 == (a[(n << 2 >> 2) + f] & -134217728 | 0)) {
            w = 0;
            break a
          }
          p = n + 1 | 0;
          m = n + 2 | 0;
          l = a[(p << 2 >> 2) + f] & 134217727;
          p = l + p | 0;
          n = -2013265920 != (a[(p << 2 >> 2) + f] & -134217728 | 0) ? p : l + n | 0;
          f = m
        }
      }
    } while (0);
    return w
  }

  function cc(e, c) {
    var b = c >> 1,
      d = 0 < (b | 0);
    a: do {
      if (d) {
        for (var f = c - 1 | 0, i = 0;;) {
          var h = (i << 2) + e | 0,
            k = a[h >> 2],
            m = (f - i << 2) + e | 0;
          a[h >> 2] = a[m >> 2];
          a[m >> 2] = k;
          i = i + 1 | 0;
          if ((i | 0) == (b | 0)) {
            break a
          }
        }
      }
    } while (0)
  }

  function ve(e, c, b) {
    var d, f, i = b >> 2,
      h = c >> 2,
      k = r,
      m = 0 == (e | 0) | 0 == (c | 0);
    a: do {
      if (m) {
        f = -1
      } else {
        f = (b + 4 | 0) >> 2;
        var n = a[f];
        if ((n | 0) < (e | 0)) {
          if (d = a[(n << 2 >> 2) + h], 0 == (d | 0)) {
            f = -1
          } else {
            if (0 == (Oa(d, g.ta | 0, Pa) | 0)) {
              a[f] = n + 1 | 0, f = -1
            } else {
              d = b + 16 | 0;
              if (0 == (n | 0)) {
                a[d >> 2] = 1;
                var l = a[f] = 1,
                  p = 1
              } else {
                l = n, p = a[d >> 2]
              }
              n = 0 != (Hc(g.Bb | 0) | 0);
              d = (b + 16 | 0) >> 2;
              do {
                if (1 == (p | 0)) {
                  var q = (l << 2) + c | 0,
                    s = a[q >> 2],
                    v = 0 == ((0 == (s | 0) ? 1 : 45 == j[s] << 24 >> 24 ? 1 : 0) | 0);
                  if (n) {
                    if (v) {
                      f = -1;
                      break a
                    }
                    s = q = 0;
                    v = l
                  } else {
                    b: do {
                      if (v) {
                        for (var u = 0, o = l;;) {
                          o = o + 1 | 0;
                          a[f] = o;
                          var u = u + 1 | 0,
                            t = a[(o << 2 >> 2) + h];
                          if (0 != ((0 == (t | 0) ? 1 : 45 == j[t] << 24 >> 24 ? 1 : 0) | 0)) {
                            var y = u,
                              x = t,
                              w = o;
                            break b
                          }
                        }
                      } else {
                        y = 0, x = s, w = l
                      }
                    } while (0);
                    if (0 == (x | 0)) {
                      a[f] = l;
                      f = -1;
                      break a
                    }
                    if (0 != (Oa(x, g.ta | 0, Pa) | 0)) {
                      q = l, s = y, v = w
                    } else {
                      i = q;
                      cc(i, y);
                      cc(i, 1 + y | 0);
                      cc(i, 1);
                      a[f] = l + 1 | 0;
                      f = -1;
                      break a
                    }
                  }
                } else {
                  s = q = 0, v = l
                }
              } while (0);
              o = (v << 2) + c | 0;
              t = a[o >> 2];
              u = j[t + p | 0] << 24 >> 24;
              l = qd(g.W | 0, u);
              if (0 == (l | 0)) {
                0 == (a[i + 2] | 0) ? (n = p, q = v) : ($d(a[Va >> 2], g.Lc | 0, (J = r, r += 8, a[J >> 2] = a[h], a[J + 4 >> 2] = u, J)), n = a[d], q = a[f]), n = n + 1 | 0, a[d] = n, 0 == j[a[(q << 2 >> 2) + h] + n | 0] << 24 >> 24 && (a[f] = q + 1 | 0, a[d] = 1), f = a[i + 3] = 63
              } else {
                if (58 == j[l + 1 | 0] << 24 >> 24) {
                  var z = 58 == j[l + 2 | 0] << 24 >> 24,
                    B = p + (t + 1) | 0,
                    o = j[l] << 24 >> 24,
                    u = b + 12 | 0;
                  a[u >> 2] = o;
                  p = 61 == j[B] << 24 >> 24 ? p + (t + 2) | 0 : B;
                  t = j[p];
                  if (z) {
                    a[i] = 0 != t << 24 >> 24 ? p : 0, a[d] = 1, d = 0
                  } else {
                    if (0 == t << 24 >> 24) {
                      p = v + 1 | 0;
                      if ((p | 0) >= (e | 0)) {
                        0 == (a[i + 2] | 0) ? i = v : ($d(a[Va >> 2], g.dd | 0, (J = r, r += 4, a[J >> 2] = a[h], J)), $d(a[Va >> 2], g.Dd | 0, (J = r, r += 4, a[J >> 2] = j[l] << 24 >> 24, J)), i = a[f]);
                        a[f] = i + 1 | 0;
                        f = a[u >> 2] = 58;
                        break
                      }
                      a[i] = a[(p << 2 >> 2) + h];
                      d = a[d] = 1
                    } else {
                      a[i] = p, a[d] = 1, d = 0
                    }
                  }
                  p = 1;
                  l = o
                } else {
                  l = j[l] << 24 >> 24, a[i + 3] = l, p = p + 1 | 0, a[d] = p, 0 == j[a[o >> 2] + p | 0] << 24 >> 24 && (p = a[d] = 1), d = a[i] = 0
                }
                do {
                  if (!n && !(1 != (p | 0) | 0 == (s | 0))) {
                    y = (q << 2) + c | 0;
                    e = s;
                    c = d + 1 | 0;
                    cc(y, e);
                    cc(y, c + e | 0);
                    cc(y, c);
                    a[f] = d + (q + 1) | 0;
                    f = a[i + 3];
                    break a
                  }
                } while (0);
                1 == (p | 0) && (a[f] = v + (d + 1) | 0);
                f = l
              }
            }
          }
        } else {
          f = -1
        }
      }
    } while (0);
    r = k;
    return f
  }

  function ia(e) {
    var c;
    if (245 > e >>> 0) {
      var b = 11 > e >>> 0 ? 16 : e + 11 & -8,
        d = b >>> 3,
        e = a[q >> 2],
        f = e >>> (d >>> 0);
      if (0 != (f & 3 | 0)) {
        var i = (f & 1 ^ 1) + d | 0;
        c = i << 1;
        var b = (c << 2) + q + 40 | 0,
          d = (c + 2 << 2) + q + 40 | 0,
          h = a[d >> 2];
        c = h + 8 | 0;
        f = a[c >> 2];
        (b | 0) == (f | 0) ? a[q >> 2] = e & (1 << i ^ -1) : f >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[d >> 2] = f, a[f + 12 >> 2] = b);
        i <<= 3;
        a[h + 4 >> 2] = i | 3;
        i = h + (i | 4) | 0;
        a[i >> 2] |= 1;
        h = c;
        c = 39
      } else {
        if (b >>> 0 > a[q + 8 >> 2] >>> 0) {
          if (0 != (f | 0)) {
            var h = 2 << d,
              h = f << d & (h | -h),
              d = (h & -h) - 1 | 0,
              h = d >>> 12 & 16,
              f = d >>> (h >>> 0),
              d = f >>> 5 & 8,
              k = f >>> (d >>> 0),
              f = k >>> 2 & 4,
              m = k >>> (f >>> 0),
              k = m >>> 1 & 2,
              m = m >>> (k >>> 0),
              g = m >>> 1 & 1,
              d = (d | h | f | k | g) + (m >>> (g >>> 0)) | 0,
              h = d << 1,
              k = (h << 2) + q + 40 | 0,
              m = (h + 2 << 2) + q + 40 | 0,
              f = a[m >> 2],
              h = f + 8 | 0,
              g = a[h >> 2];
            (k | 0) == (g | 0) ? a[q >> 2] = e & (1 << d ^ -1) : g >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[m >> 2] = g, a[g + 12 >> 2] = k);
            k = d << 3;
            e = k - b | 0;
            a[f + 4 >> 2] = b | 3;
            d = f + b | 0;
            a[f + (b | 4) >> 2] = e | 1;
            a[f + k >> 2] = e;
            g = a[q + 8 >> 2];
            0 != (g | 0) && (b = a[q + 20 >> 2], k = g >>> 2 & 1073741822, f = (k << 2) + q + 40 | 0, m = a[q >> 2], g = 1 << (g >>> 3), 0 == (m & g | 0) ? (a[q >> 2] = m | g, c = f, i = (k + 2 << 2) + q + 40 | 0) : (k = (k + 2 << 2) + q + 40 | 0, m = a[k >> 2], m >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (c = m, i = k)), a[i >> 2] = b, a[c + 12 >> 2] = b, a[b + 8 >> 2] = c, a[b + 12 >> 2] = f);
            a[q + 8 >> 2] = e;
            a[q + 20 >> 2] = d;
            c = 39
          } else {
            0 == (a[q + 4 >> 2] | 0) ? (j = b, c = 31) : (c = tf(b), 0 == (c | 0) ? (j = b, c = 31) : (h = c, c = 39))
          }
        } else {
          var j = b;
          c = 31
        }
      }
    } else {
      4294967231 < e >>> 0 ? (j = -1, c = 31) : (c = e + 11 & -8, 0 == (a[q + 4 >> 2] | 0) ? (j = c, c = 31) : (i = uf(c), 0 == (i | 0) ? (j = c, c = 31) : (h = i, c = 39)))
    }
    31 == c && (i = a[q + 8 >> 2], j >>> 0 > i >>> 0 ? (c = a[q + 12 >> 2], j >>> 0 < c >>> 0 ? (c = c - j | 0, a[q + 12 >> 2] = c, i = a[q + 24 >> 2], a[q + 24 >> 2] = i + j | 0, a[j + (i + 4) >> 2] = c | 1, a[i + 4 >> 2] = j | 3, h = i + 8 | 0) : h = vf(j)) : (e = i - j | 0, c = a[q + 20 >> 2], 15 < e >>> 0 ? (a[q + 20 >> 2] = c + j | 0, a[q + 8 >> 2] = e, a[j + (c + 4) >> 2] = e | 1, a[c + i >> 2] = e, a[c + 4 >> 2] = j | 3) : (a[q + 8 >> 2] = 0, a[q + 20 >> 2] = 0, a[c + 4 >> 2] = i | 3, j = i + (c + 4) | 0, a[j >> 2] |= 1), h = c + 8 | 0));
    return h
  }

  function tf(e) {
    var c, b, d = a[q + 4 >> 2],
      f = (d & -d) - 1 | 0,
      d = f >>> 12 & 16,
      i = f >>> (d >>> 0),
      f = i >>> 5 & 8;
    b = i >>> (f >>> 0);
    var i = b >>> 2 & 4,
      h = b >>> (i >>> 0);
    b = h >>> 1 & 2;
    var h = h >>> (b >>> 0),
      k = h >>> 1 & 1,
      d = i = f = a[q + ((f | d | i | b | k) + (h >>> (k >>> 0)) << 2) + 304 >> 2];
    b = d >> 2;
    for (f = (a[f + 4 >> 2] & -8) - e | 0;;) {
      h = a[i + 16 >> 2];
      if (0 == (h | 0)) {
        i = a[i + 20 >> 2];
        if (0 == (i | 0)) {
          break
        }
        b = i
      } else {
        b = h
      }
      h = (a[b + 4 >> 2] & -8) - e | 0;
      k = h >>> 0 < f >>> 0;
      i = b;
      d = k ? b : d;
      b = d >> 2;
      f = k ? h : f
    }
    var h = d,
      m = a[q + 16 >> 2];
    do {
      if (h >>> 0 >= m >>> 0 && (i = k = h + e | 0, h >>> 0 < k >>> 0)) {
        var k = a[b + 6],
          g = a[b + 3];
        do {
          if ((g | 0) == (d | 0)) {
            var j = d + 20 | 0,
              p = a[j >> 2];
            if (0 == (p | 0)) {
              if (j = d + 16 | 0, p = a[j >> 2], 0 == (p | 0)) {
                var l = 0;
                c = l >> 2;
                break
              }
            } else {
              __label__ = 14
            }
            for (;;) {
              var s = p + 20 | 0,
                v = a[s >> 2];
              if (0 == (v | 0) && (s = p + 16 | 0, v = a[s >> 2], 0 == (v | 0))) {
                break
              }
              j = s;
              p = v
            }
            j >>> 0 < m >>> 0 ? G() : (a[j >> 2] = 0, l = p, c = l >> 2)
          } else {
            j = a[b + 2], j >>> 0 < m >>> 0 ? G() : (a[j + 12 >> 2] = g, a[g + 8 >> 2] = j, l = g, c = l >> 2)
          }
        } while (0);
        m = 0 == (k | 0);
        a: do {
          if (!m) {
            g = d + 28 | 0;
            j = (a[g >> 2] << 2) + q + 304 | 0;
            do {
              if ((d | 0) == (a[j >> 2] | 0)) {
                a[j >> 2] = l;
                if (0 != (l | 0)) {
                  break
                }
                a[q + 4 >> 2] &= 1 << a[g >> 2] ^ -1;
                break a
              }
              if (k >>> 0 < a[q + 16 >> 2] >>> 0) {
                G()
              } else {
                if (p = k + 16 | 0, (a[p >> 2] | 0) == (d | 0) ? a[p >> 2] = l : a[k + 20 >> 2] = l, 0 == (l | 0)) {
                  break a
                }
              }
            } while (0);
            if (l >>> 0 < a[q + 16 >> 2] >>> 0) {
              G()
            } else {
              if (a[c + 6] = k, g = a[b + 4], 0 != (g | 0) && (g >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[c + 4] = g, a[g + 24 >> 2] = l)), g = a[b + 5], 0 != (g | 0)) {
                g >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[c + 5] = g, a[g + 24 >> 2] = l)
              }
            }
          }
        } while (0);
        if (16 > f >>> 0) {
          var u = f + e | 0;
          a[b + 1] = u | 3;
          u = u + (h + 4) | 0;
          a[u >> 2] |= 1
        } else {
          a[b + 1] = e | 3;
          a[e + (h + 4) >> 2] = f | 1;
          a[h + f + e >> 2] = f;
          h = a[q + 8 >> 2];
          if (0 != (h | 0)) {
            e = a[q + 20 >> 2];
            l = h >>> 2 & 1073741822;
            c = (l << 2) + q + 40 | 0;
            b = a[q >> 2];
            h = 1 << (h >>> 3);
            if (0 == (b & h | 0)) {
              a[q >> 2] = b | h;
              var u = c,
                o = (l + 2 << 2) + q + 40 | 0
            } else {
              l = (l + 2 << 2) + q + 40 | 0, b = a[l >> 2], b >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (u = b, o = l)
            }
            a[o >> 2] = e;
            a[u + 12 >> 2] = e;
            a[e + 8 >> 2] = u;
            a[e + 12 >> 2] = c
          }
          a[q + 8 >> 2] = f;
          a[q + 20 >> 2] = i
        }
        return d + 8 | 0
      }
    } while (0);
    G();
    return S
  }

  function uf(e) {
    var c, b, d, f, i, h = e >> 2,
      k, g = -e | 0,
      j = e >>> 8;
    if (0 == (j | 0)) {
      var l = 0
    } else {
      if (16777215 < e >>> 0) {
        l = 31
      } else {
        var p = (j + 1048320 | 0) >>> 16 & 8,
          s = j << p,
          r = (s + 520192 | 0) >>> 16 & 4,
          v = s << r,
          u = (v + 245760 | 0) >>> 16 & 2,
          o = 14 - (r | p | u) + (v << u >>> 15) | 0,
          l = e >>> ((o + 7 | 0) >>> 0) & 1 | o << 1
      }
    }
    var t = a[q + (l << 2) + 304 >> 2],
      y = 0 == (t | 0);
    a: do {
      if (y) {
        var x = 0,
          w = g,
          z = 0
      } else {
        var B = 31 == (l | 0) ? 0 : 25 - (l >>> 1) | 0,
          C = 0,
          D = g,
          E = t;
        i = E >> 2;
        for (var F = e << B, H = 0;;) {
          var J = a[i + 1] & -8,
            K = J - e | 0;
          if (K >>> 0 < D >>> 0) {
            if ((J | 0) == (e | 0)) {
              x = E;
              w = K;
              z = E;
              break a
            }
            var L = E,
              N = K
          } else {
            L = C, N = D
          }
          var O = a[i + 5],
            M = a[((F >>> 31 << 2) + 16 >> 2) + i],
            P = 0 == (O | 0) | (O | 0) == (M | 0) ? H : O;
          if (0 == (M | 0)) {
            x = L;
            w = N;
            z = P;
            break a
          }
          C = L;
          D = N;
          E = M;
          i = E >> 2;
          F <<= 1;
          H = P
        }
      }
    } while (0);
    if (0 == (z | 0) & 0 == (x | 0)) {
      var Y = 2 << l,
        Z = a[q + 4 >> 2] & (Y | -Y);
      if (0 == (Z | 0)) {
        var aa = 0;
        k = 80
      } else {
        var ca = (Z & -Z) - 1 | 0,
          X = ca >>> 12 & 16,
          ba = ca >>> (X >>> 0),
          ea = ba >>> 5 & 8,
          fa = ba >>> (ea >>> 0),
          ia = fa >>> 2 & 4,
          na = fa >>> (ia >>> 0),
          pa = na >>> 1 & 2,
          ra = na >>> (pa >>> 0),
          ua = ra >>> 1 & 1,
          sa = a[q + ((ea | X | ia | pa | ua) + (ra >>> (ua >>> 0)) << 2) + 304 >> 2];
        k = 15
      }
    } else {
      sa = z, k = 15
    }
    a: do {
      if (15 == k) {
        var la = 0 == (sa | 0);
        b: do {
          if (la) {
            var Ea = w,
              ja = x;
            f = ja >> 2
          } else {
            var oa = sa;
            d = oa >> 2;
            for (var ya = w, za = x;;) {
              var va = (a[d + 1] & -8) - e | 0,
                Ia = va >>> 0 < ya >>> 0,
                ta = Ia ? va : ya,
                wa = Ia ? oa : za,
                Ca = a[d + 4];
              if (0 != (Ca | 0)) {
                oa = Ca
              } else {
                var Ba = a[d + 5];
                if (0 == (Ba | 0)) {
                  Ea = ta;
                  ja = wa;
                  f = ja >> 2;
                  break b
                }
                oa = Ba
              }
              d = oa >> 2;
              ya = ta;
              za = wa
            }
          }
        } while (0);
        if (0 == (ja | 0)) {
          aa = 0
        } else {
          if (Ea >>> 0 < (a[q + 8 >> 2] - e | 0) >>> 0) {
            var Aa = ja;
            b = Aa >> 2;
            var xa = a[q + 16 >> 2];
            do {
              if (Aa >>> 0 >= xa >>> 0) {
                var Ka = Aa + e | 0,
                  La = Ka;
                if (Aa >>> 0 < Ka >>> 0) {
                  var qa = a[f + 6],
                    Ga = a[f + 3];
                  do {
                    if ((Ga | 0) == (ja | 0)) {
                      var Ma = ja + 20 | 0,
                        Na = a[Ma >> 2];
                      if (0 == (Na | 0)) {
                        var Da = ja + 16 | 0,
                          Qa = a[Da >> 2];
                        if (0 == (Qa | 0)) {
                          var Fa = 0;
                          c = Fa >> 2;
                          break
                        }
                        var yb = Da,
                          Ja = Qa
                      } else {
                        yb = Ma, Ja = Na, k = 28
                      }
                      for (;;) {
                        var Pa = Ja + 20 | 0,
                          Ra = a[Pa >> 2];
                        if (0 != (Ra | 0)) {
                          yb = Pa, Ja = Ra
                        } else {
                          var Oa = Ja + 16 | 0,
                            Wa = a[Oa >> 2];
                          if (0 == (Wa | 0)) {
                            break
                          }
                          yb = Oa;
                          Ja = Wa
                        }
                      }
                      yb >>> 0 < xa >>> 0 ? G() : (a[yb >> 2] = 0, Fa = Ja, c = Fa >> 2)
                    } else {
                      var Sa = a[f + 2];
                      Sa >>> 0 < xa >>> 0 ? G() : (a[Sa + 12 >> 2] = Ga, a[Ga + 8 >> 2] = Sa, Fa = Ga, c = Fa >> 2)
                    }
                  } while (0);
                  var Ta = 0 == (qa | 0);
                  b: do {
                    if (Ta) {
                      var $a = ja
                    } else {
                      var Za = ja + 28 | 0,
                        Ua = (a[Za >> 2] << 2) + q + 304 | 0;
                      do {
                        if ((ja | 0) == (a[Ua >> 2] | 0)) {
                          a[Ua >> 2] = Fa;
                          if (0 != (Fa | 0)) {
                            break
                          }
                          a[q + 4 >> 2] &= 1 << a[Za >> 2] ^ -1;
                          $a = ja;
                          break b
                        }
                        if (qa >>> 0 < a[q + 16 >> 2] >>> 0) {
                          G()
                        } else {
                          var db = qa + 16 | 0;
                          (a[db >> 2] | 0) == (ja | 0) ? a[db >> 2] = Fa : a[qa + 20 >> 2] = Fa;
                          if (0 == (Fa | 0)) {
                            $a = ja;
                            break b
                          }
                        }
                      } while (0);
                      if (Fa >>> 0 < a[q + 16 >> 2] >>> 0) {
                        G()
                      } else {
                        a[c + 6] = qa;
                        var zb = a[f + 4];
                        0 != (zb | 0) && (zb >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[c + 4] = zb, a[zb + 24 >> 2] = Fa));
                        var Va = a[f + 5];
                        0 == (Va | 0) ? $a = ja : Va >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[c + 5] = Va, a[Va + 24 >> 2] = Fa, $a = ja)
                      }
                    }
                  } while (0);
                  var kb = 16 > Ea >>> 0;
                  b: do {
                    if (kb) {
                      var eb = Ea + e | 0;
                      a[$a + 4 >> 2] = eb | 3;
                      var sb = eb + (Aa + 4) | 0;
                      a[sb >> 2] |= 1
                    } else {
                      if (a[$a + 4 >> 2] = e | 3, a[h + (b + 1)] = Ea | 1, a[(Ea >> 2) + b + h] = Ea, 256 > Ea >>> 0) {
                        var ab = Ea >>> 2 & 1073741822,
                          Ib = (ab << 2) + q + 40 | 0,
                          gb = a[q >> 2],
                          tb = 1 << (Ea >>> 3);
                        if (0 == (gb & tb | 0)) {
                          a[q >> 2] = gb | tb;
                          var hb = Ib,
                            ib = (ab + 2 << 2) + q + 40 | 0
                        } else {
                          var Xa = (ab + 2 << 2) + q + 40 | 0,
                            Ya = a[Xa >> 2];
                          Ya >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (hb = Ya, ib = Xa)
                        }
                        a[ib >> 2] = La;
                        a[hb + 12 >> 2] = La;
                        a[h + (b + 2)] = hb;
                        a[h + (b + 3)] = Ib
                      } else {
                        var jb = Ka,
                          fb = Ea >>> 8;
                        if (0 == (fb | 0)) {
                          var cb = 0
                        } else {
                          if (16777215 < Ea >>> 0) {
                            cb = 31
                          } else {
                            var Jb = (fb + 1048320 | 0) >>> 16 & 8,
                              pb = fb << Jb,
                              xb = (pb + 520192 | 0) >>> 16 & 4,
                              lb = pb << xb,
                              nb = (lb + 245760 | 0) >>> 16 & 2,
                              qb = 14 - (xb | Jb | nb) + (lb << nb >>> 15) | 0,
                              cb = Ea >>> ((qb + 7 | 0) >>> 0) & 1 | qb << 1
                          }
                        }
                        var ub = (cb << 2) + q + 304 | 0;
                        a[h + (b + 7)] = cb;
                        a[h + (b + 5)] = 0;
                        a[h + (b + 4)] = 0;
                        var Gb = a[q + 4 >> 2],
                          Ab = 1 << cb;
                        if (0 == (Gb & Ab | 0)) {
                          a[q + 4 >> 2] = Gb | Ab, a[ub >> 2] = jb, a[h + (b + 6)] = ub, a[h + (b + 3)] = jb, a[h + (b + 2)] = jb
                        } else {
                          for (var mb = Ea << (31 == (cb | 0) ? 0 : 25 - (cb >>> 1) | 0), vb = a[ub >> 2];;) {
                            if ((a[vb + 4 >> 2] & -8 | 0) == (Ea | 0)) {
                              var Hb = vb + 8 | 0,
                                ob = a[Hb >> 2],
                                wb = a[q + 16 >> 2];
                              do {
                                if (vb >>> 0 >= wb >>> 0 && ob >>> 0 >= wb >>> 0) {
                                  a[ob + 12 >> 2] = jb;
                                  a[Hb >> 2] = jb;
                                  a[h + (b + 2)] = ob;
                                  a[h + (b + 3)] = vb;
                                  a[h + (b + 6)] = 0;
                                  break b
                                }
                              } while (0);
                              G()
                            } else {
                              var rb = (mb >>> 31 << 2) + vb + 16 | 0,
                                Bb = a[rb >> 2];
                              if (0 != (Bb | 0)) {
                                mb <<= 1, vb = Bb
                              } else {
                                if (rb >>> 0 >= a[q + 16 >> 2] >>> 0) {
                                  a[rb >> 2] = jb;
                                  a[h + (b + 6)] = vb;
                                  a[h + (b + 3)] = jb;
                                  a[h + (b + 2)] = jb;
                                  break b
                                }
                                G()
                              }
                            }
                          }
                        }
                      }
                    }
                  } while (0);
                  aa = $a + 8 | 0;
                  break a
                }
              }
            } while (0);
            G()
          } else {
            aa = 0
          }
        }
      }
    } while (0);
    return aa
  }

  function vf(e) {
    var c, b;
    0 == (a[na >> 2] | 0) && wf();
    var d = 0 == (a[q + 440 >> 2] & 4 | 0);
    a: do {
      if (d) {
        b = a[q + 24 >> 2];
        if (0 != (b | 0)) {
          if (b = ae(b), 0 == (b | 0)) {
            b = 7
          } else {
            var f = a[na + 8 >> 2],
              f = e + 47 - a[q + 12 >> 2] + f & -f;
            if (2147483647 > f >>> 0) {
              var i = wa(f),
                h = (c = (i | 0) == (a[b >> 2] + a[b + 4 >> 2] | 0)) ? i : -1;
              c = c ? f : 0;
              var k = f;
              b = 14
            } else {
              var g = 0;
              b = 22
            }
          }
        } else {
          b = 7
        } if (7 == b) {
          if (b = wa(0), -1 == (b | 0)) {
            g = 0, b = 22
          } else {
            var f = a[na + 8 >> 2],
              f = f + (e + 47) & -f,
              j = b,
              l = a[na + 4 >> 2],
              p = l - 1 | 0,
              f = 0 == (p & j | 0) ? f : f - j + (p + j & -l) | 0;
            2147483647 > f >>> 0 ? (i = wa(f), h = (c = (i | 0) == (b | 0)) ? b : -1, c = c ? f : 0, k = f, b = 14) : (g = 0, b = 22)
          }
        }
        b: do {
          if (14 == b) {
            g = -k | 0;
            if (-1 != (h | 0)) {
              var s = c,
                r = h;
              b = 27;
              break a
            }
            do {
              if (-1 != (i | 0) & 2147483647 > k >>> 0) {
                if (k >>> 0 < (e + 48 | 0) >>> 0) {
                  if (b = a[na + 8 >> 2], b = e + 47 - k + b & -b, 2147483647 > b >>> 0) {
                    if (-1 == (wa(b) | 0)) {
                      wa(g);
                      g = c;
                      break b
                    }
                    b = b + k | 0
                  } else {
                    b = k
                  }
                } else {
                  b = k
                }
              } else {
                b = k
              }
            } while (0);
            if (-1 != (i | 0)) {
              s = b;
              r = i;
              b = 27;
              break a
            }
            a[q + 440 >> 2] |= 4;
            var v = c;
            b = 24;
            break a
          }
        } while (0);
        a[q + 440 >> 2] |= 4;
        v = g
      } else {
        v = 0
      }
      b = 24
    } while (0);
    24 == b && (d = a[na + 8 >> 2], d = d + (e + 47) & -d, 2147483647 > d >>> 0 ? (d = wa(d), h = wa(0), -1 != (h | 0) & -1 != (d | 0) & d >>> 0 < h >>> 0 ? (h = h - d | 0, d = (c = h >>> 0 > (e + 40 | 0) >>> 0) ? d : -1, -1 == (d | 0) ? b = 50 : (s = c ? h : v, r = d, b = 27)) : b = 50) : b = 50);
    a: do {
      if (27 == b) {
        v = a[q + 432 >> 2] + s | 0;
        a[q + 432 >> 2] = v;
        v >>> 0 > a[q + 436 >> 2] >>> 0 && (a[q + 436 >> 2] = v);
        v = a[q + 24 >> 2];
        d = 0 == (v | 0);
        b: do {
          if (d) {
            h = a[q + 16 >> 2];
            0 == (h | 0) | r >>> 0 < h >>> 0 && (a[q + 16 >> 2] = r);
            a[q + 444 >> 2] = r;
            a[q + 448 >> 2] = s;
            a[q + 456 >> 2] = 0;
            a[q + 36 >> 2] = a[na >> 2];
            a[q + 32 >> 2] = -1;
            for (h = 0; !(c = h << 1, k = (c << 2) + q + 40 | 0, a[q + (c + 3 << 2) + 40 >> 2] = k, a[q + (c + 2 << 2) + 40 >> 2] = k, h = h + 1 | 0, 32 == (h | 0));) {}
            ed(r, s - 40 | 0)
          } else {
            k = q + 444 | 0;
            for (c = k >> 2; 0 != (k | 0);) {
              h = a[c];
              k = k + 4 | 0;
              i = a[k >> 2];
              if ((r | 0) == (h + i | 0)) {
                if (0 != (a[c + 3] & 8 | 0)) {
                  break
                }
                c = v;
                if (!(c >>> 0 >= h >>> 0 & c >>> 0 < r >>> 0)) {
                  break
                }
                a[k >> 2] = i + s | 0;
                ed(a[q + 24 >> 2], a[q + 12 >> 2] + s | 0);
                break b
              }
              k = a[c + 2];
              c = k >> 2
            }
            r >>> 0 < a[q + 16 >> 2] >>> 0 && (a[q + 16 >> 2] = r);
            h = r + s | 0;
            for (c = q + 444 | 0; 0 != (c | 0);) {
              k = c | 0;
              if ((a[k >> 2] | 0) == (h | 0)) {
                if (0 != (a[c + 12 >> 2] & 8 | 0)) {
                  break
                }
                a[k >> 2] = r;
                var u = c + 4 | 0;
                a[u >> 2] = a[u >> 2] + s | 0;
                u = xf(r, h, e);
                b = 51;
                break a
              }
              c = a[c + 8 >> 2]
            }
            yf(r, s)
          }
        } while (0);
        v = a[q + 12 >> 2];
        v >>> 0 > e >>> 0 ? (u = v - e | 0, a[q + 12 >> 2] = u, d = v = a[q + 24 >> 2], a[q + 24 >> 2] = d + e | 0, a[e + (d + 4) >> 2] = u | 1, a[v + 4 >> 2] = e | 3, u = v + 8 | 0, b = 51) : b = 50
      }
    } while (0);
    50 == b && (a[P.c >> 2] = 12, u = 0);
    return u
  }

  function zf() {
    var e;
    0 == (a[na >> 2] | 0) && wf();
    var c = a[q + 24 >> 2],
      b = 0 == (c | 0);
    a: do {
      if (!b) {
        var d = a[q + 12 >> 2];
        do {
          if (40 < d >>> 0) {
            var f = a[na + 8 >> 2],
              i = (Math.floor(((d - 41 + f | 0) >>> 0) / (f >>> 0)) - 1) * f | 0,
              h = ae(c);
            if (0 == (a[h + 12 >> 2] & 8 | 0)) {
              var k = wa(0);
              e = (h + 4 | 0) >> 2;
              if ((k | 0) == (a[h >> 2] + a[e] | 0) && (i = wa(-(2147483646 < i >>> 0 ? -2147483648 - f | 0 : i) | 0), f = wa(0), -1 != (i | 0) & f >>> 0 < k >>> 0 && (i = k - f | 0, (k | 0) != (f | 0)))) {
                a[e] = a[e] - i | 0;
                a[q + 432 >> 2] = a[q + 432 >> 2] - i | 0;
                ed(a[q + 24 >> 2], a[q + 12 >> 2] - i | 0);
                break a
              }
            }
          }
        } while (0);
        a[q + 12 >> 2] >>> 0 > a[q + 28 >> 2] >>> 0 && (a[q + 28 >> 2] = -1)
      }
    } while (0)
  }

  function Z(e) {
    var c, b, d, f, i, h, k, g = e >> 2,
      j, l = 0 == (e | 0);
    a: do {
      if (!l) {
        var p = e - 8 | 0,
          s = p,
          r = a[q + 16 >> 2],
          v = p >>> 0 < r >>> 0;
        b: do {
          if (!v) {
            var u = a[e - 4 >> 2],
              o = u & 3;
            if (1 != (o | 0)) {
              var t = u & -8;
              k = t >> 2;
              var y = e + (t - 8) | 0,
                x = y,
                w = 0 == (u & 1 | 0);
              c: do {
                if (w) {
                  var z = a[p >> 2];
                  if (0 == (o | 0)) {
                    break a
                  }
                  var B = -8 - z | 0;
                  h = B >> 2;
                  var C = e + B | 0,
                    D = C,
                    E = z + t | 0;
                  if (C >>> 0 < r >>> 0) {
                    break b
                  }
                  if ((D | 0) == (a[q + 20 >> 2] | 0)) {
                    i = (e + (t - 4) | 0) >> 2;
                    if (3 != (a[i] & 3 | 0)) {
                      var F = D;
                      f = F >> 2;
                      var H = E;
                      break
                    }
                    a[q + 8 >> 2] = E;
                    a[i] &= -2;
                    a[h + (g + 1)] = E | 1;
                    a[y >> 2] = E;
                    break a
                  }
                  var J = z >>> 3;
                  if (256 > z >>> 0) {
                    var K = a[h + (g + 2)],
                      L = a[h + (g + 3)];
                    if ((K | 0) == (L | 0)) {
                      a[q >> 2] &= 1 << J ^ -1, F = D, f = F >> 2, H = E
                    } else {
                      var N = ((z >>> 2 & 1073741822) << 2) + q + 40 | 0;
                      do {
                        if (!((K | 0) != (N | 0) & K >>> 0 < r >>> 0) && (L | 0) == (N | 0) | L >>> 0 >= r >>> 0) {
                          a[K + 12 >> 2] = L;
                          a[L + 8 >> 2] = K;
                          F = D;
                          f = F >> 2;
                          H = E;
                          break c
                        }
                      } while (0);
                      G()
                    }
                  } else {
                    var O = C,
                      M = a[h + (g + 6)],
                      P = a[h + (g + 3)];
                    do {
                      if ((P | 0) == (O | 0)) {
                        var Y = B + (e + 20) | 0,
                          Z = a[Y >> 2];
                        if (0 == (Z | 0)) {
                          var aa = B + (e + 16) | 0,
                            ca = a[aa >> 2];
                          if (0 == (ca | 0)) {
                            var X = 0;
                            d = X >> 2;
                            break
                          }
                          var ba = aa,
                            ea = ca
                        } else {
                          ba = Y, ea = Z, j = 22
                        }
                        for (;;) {
                          var fa = ea + 20 | 0,
                            ia = a[fa >> 2];
                          if (0 != (ia | 0)) {
                            ba = fa, ea = ia
                          } else {
                            var na = ea + 16 | 0,
                              oa = a[na >> 2];
                            if (0 == (oa | 0)) {
                              break
                            }
                            ba = na;
                            ea = oa
                          }
                        }
                        ba >>> 0 < r >>> 0 ? G() : (a[ba >> 2] = 0, X = ea, d = X >> 2)
                      } else {
                        var pa = a[h + (g + 2)];
                        pa >>> 0 < r >>> 0 ? G() : (a[pa + 12 >> 2] = P, a[P + 8 >> 2] = pa, X = P, d = X >> 2)
                      }
                    } while (0);
                    if (0 == (M | 0)) {
                      F = D, f = F >> 2, H = E
                    } else {
                      var ra = B + (e + 28) | 0,
                        sa = (a[ra >> 2] << 2) + q + 304 | 0;
                      do {
                        if ((O | 0) == (a[sa >> 2] | 0)) {
                          a[sa >> 2] = X;
                          if (0 != (X | 0)) {
                            break
                          }
                          a[q + 4 >> 2] &= 1 << a[ra >> 2] ^ -1;
                          F = D;
                          f = F >> 2;
                          H = E;
                          break c
                        }
                        if (M >>> 0 < a[q + 16 >> 2] >>> 0) {
                          G()
                        } else {
                          var ua = M + 16 | 0;
                          (a[ua >> 2] | 0) == (O | 0) ? a[ua >> 2] = X : a[M + 20 >> 2] = X;
                          if (0 == (X | 0)) {
                            F = D;
                            f = F >> 2;
                            H = E;
                            break c
                          }
                        }
                      } while (0);
                      if (X >>> 0 < a[q + 16 >> 2] >>> 0) {
                        G()
                      } else {
                        a[d + 6] = M;
                        var Ea = a[h + (g + 4)];
                        0 != (Ea | 0) && (Ea >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[d + 4] = Ea, a[Ea + 24 >> 2] = X));
                        var ja = a[h + (g + 5)];
                        0 == (ja | 0) ? (F = D, f = F >> 2, H = E) : ja >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[d + 5] = ja, a[ja + 24 >> 2] = X, F = D, f = F >> 2, H = E)
                      }
                    }
                  }
                } else {
                  F = s, f = F >> 2, H = t
                }
              } while (0);
              var ya = F;
              b = ya >> 2;
              if (ya >>> 0 < y >>> 0) {
                var Aa = e + (t - 4) | 0,
                  la = a[Aa >> 2];
                if (0 != (la & 1 | 0)) {
                  do {
                    if (0 == (la & 2 | 0)) {
                      if ((x | 0) == (a[q + 24 >> 2] | 0)) {
                        var za = a[q + 12 >> 2] + H | 0;
                        a[q + 12 >> 2] = za;
                        a[q + 24 >> 2] = F;
                        a[f + 1] = za | 1;
                        (F | 0) == (a[q + 20 >> 2] | 0) && (a[q + 20 >> 2] = 0, a[q + 8 >> 2] = 0);
                        if (za >>> 0 <= a[q + 28 >> 2] >>> 0) {
                          break a
                        }
                        zf();
                        break a
                      }
                      if ((x | 0) == (a[q + 20 >> 2] | 0)) {
                        var va = a[q + 8 >> 2] + H | 0;
                        a[q + 8 >> 2] = va;
                        a[q + 20 >> 2] = F;
                        a[f + 1] = va | 1;
                        a[(va >> 2) + b] = va;
                        break a
                      }
                      var qa = (la & -8) + H | 0,
                        Ia = la >>> 3,
                        Ja = 256 > la >>> 0;
                      c: do {
                        if (Ja) {
                          var ta = a[g + k],
                            wa = a[((t | 4) >> 2) + g];
                          if ((ta | 0) == (wa | 0)) {
                            a[q >> 2] &= 1 << Ia ^ -1
                          } else {
                            var Ga = ((la >>> 2 & 1073741822) << 2) + q + 40 | 0;
                            j = (ta | 0) == (Ga | 0) ? 64 : ta >>> 0 < a[q + 16 >> 2] >>> 0 ? 67 : 64;
                            do {
                              if (64 == j && !((wa | 0) != (Ga | 0) && wa >>> 0 < a[q + 16 >> 2] >>> 0)) {
                                a[ta + 12 >> 2] = wa;
                                a[wa + 8 >> 2] = ta;
                                break c
                              }
                            } while (0);
                            G()
                          }
                        } else {
                          var Ca = y,
                            xa = a[k + (g + 4)],
                            Ba = a[((t | 4) >> 2) + g];
                          do {
                            if ((Ba | 0) == (Ca | 0)) {
                              var Ka = t + (e + 12) | 0,
                                La = a[Ka >> 2];
                              if (0 == (La | 0)) {
                                var Ma = t + (e + 8) | 0,
                                  Na = a[Ma >> 2];
                                if (0 == (Na | 0)) {
                                  var Qa = 0;
                                  c = Qa >> 2;
                                  break
                                }
                                var Fa = Ma,
                                  Da = Na
                              } else {
                                Fa = Ka, Da = La, j = 74
                              }
                              for (;;) {
                                var Pa = Da + 20 | 0,
                                  Ra = a[Pa >> 2];
                                if (0 != (Ra | 0)) {
                                  Fa = Pa, Da = Ra
                                } else {
                                  var Sa = Da + 16 | 0,
                                    Va = a[Sa >> 2];
                                  if (0 == (Va | 0)) {
                                    break
                                  }
                                  Fa = Sa;
                                  Da = Va
                                }
                              }
                              Fa >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[Fa >> 2] = 0, Qa = Da, c = Qa >> 2)
                            } else {
                              var Oa = a[g + k];
                              Oa >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[Oa + 12 >> 2] = Ba, a[Ba + 8 >> 2] = Oa, Qa = Ba, c = Qa >> 2)
                            }
                          } while (0);
                          if (0 != (xa | 0)) {
                            var Wa = t + (e + 20) | 0,
                              Za = (a[Wa >> 2] << 2) + q + 304 | 0;
                            do {
                              if ((Ca | 0) == (a[Za >> 2] | 0)) {
                                a[Za >> 2] = Qa;
                                if (0 != (Qa | 0)) {
                                  break
                                }
                                a[q + 4 >> 2] &= 1 << a[Wa >> 2] ^ -1;
                                break c
                              }
                              if (xa >>> 0 < a[q + 16 >> 2] >>> 0) {
                                G()
                              } else {
                                var $a = xa + 16 | 0;
                                (a[$a >> 2] | 0) == (Ca | 0) ? a[$a >> 2] = Qa : a[xa + 20 >> 2] = Qa;
                                if (0 == (Qa | 0)) {
                                  break c
                                }
                              }
                            } while (0);
                            if (Qa >>> 0 < a[q + 16 >> 2] >>> 0) {
                              G()
                            } else {
                              a[c + 6] = xa;
                              var Ta = a[k + (g + 2)];
                              0 != (Ta | 0) && (Ta >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[c + 4] = Ta, a[Ta + 24 >> 2] = Qa));
                              var Ua = a[k + (g + 3)];
                              0 != (Ua | 0) && (Ua >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[c + 5] = Ua, a[Ua + 24 >> 2] = Qa))
                            }
                          }
                        }
                      } while (0);
                      a[f + 1] = qa | 1;
                      a[(qa >> 2) + b] = qa;
                      if ((F | 0) != (a[q + 20 >> 2] | 0)) {
                        var db = qa
                      } else {
                        a[q + 8 >> 2] = qa;
                        break a
                      }
                    } else {
                      a[Aa >> 2] = la & -2, a[f + 1] = H | 1, db = a[(H >> 2) + b] = H
                    }
                  } while (0);
                  if (256 > db >>> 0) {
                    var ab = db >>> 2 & 1073741822,
                      eb = (ab << 2) + q + 40 | 0,
                      fb = a[q >> 2],
                      gb = 1 << (db >>> 3);
                    if (0 == (fb & gb | 0)) {
                      a[q >> 2] = fb | gb;
                      var sb = eb,
                        kb = (ab + 2 << 2) + q + 40 | 0
                    } else {
                      var lb = (ab + 2 << 2) + q + 40 | 0,
                        mb = a[lb >> 2];
                      mb >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (sb = mb, kb = lb)
                    }
                    a[kb >> 2] = F;
                    a[sb + 12 >> 2] = F;
                    a[f + 2] = sb;
                    a[f + 3] = eb;
                    break a
                  }
                  var tb = F,
                    hb = db >>> 8;
                  if (0 == (hb | 0)) {
                    var ib = 0
                  } else {
                    if (16777215 < db >>> 0) {
                      ib = 31
                    } else {
                      var Xa = (hb + 1048320 | 0) >>> 16 & 8,
                        Ya = hb << Xa,
                        jb = (Ya + 520192 | 0) >>> 16 & 4,
                        nb = Ya << jb,
                        cb = (nb + 245760 | 0) >>> 16 & 2,
                        ob = 14 - (jb | Xa | cb) + (nb << cb >>> 15) | 0,
                        ib = db >>> ((ob + 7 | 0) >>> 0) & 1 | ob << 1
                    }
                  }
                  var pb = (ib << 2) + q + 304 | 0;
                  a[f + 7] = ib;
                  a[f + 5] = 0;
                  a[f + 4] = 0;
                  var xb = a[q + 4 >> 2],
                    rb = 1 << ib,
                    wb = 0 == (xb & rb | 0);
                  c: do {
                    if (wb) {
                      a[q + 4 >> 2] = xb | rb, a[pb >> 2] = tb, a[f + 6] = pb, a[f + 3] = F, a[f + 2] = F
                    } else {
                      for (var qb = db << (31 == (ib | 0) ? 0 : 25 - (ib >>> 1) | 0), ub = a[pb >> 2];;) {
                        if ((a[ub + 4 >> 2] & -8 | 0) == (db | 0)) {
                          var Gb = ub + 8 | 0,
                            Ab = a[Gb >> 2],
                            Cb = a[q + 16 >> 2];
                          do {
                            if (ub >>> 0 >= Cb >>> 0 && Ab >>> 0 >= Cb >>> 0) {
                              a[Ab + 12 >> 2] = tb;
                              a[Gb >> 2] = tb;
                              a[f + 2] = Ab;
                              a[f + 3] = ub;
                              a[f + 6] = 0;
                              break c
                            }
                          } while (0);
                          G()
                        } else {
                          var vb = (qb >>> 31 << 2) + ub + 16 | 0,
                            Hb = a[vb >> 2];
                          if (0 != (Hb | 0)) {
                            qb <<= 1, ub = Hb
                          } else {
                            if (vb >>> 0 >= a[q + 16 >> 2] >>> 0) {
                              a[vb >> 2] = tb;
                              a[f + 6] = ub;
                              a[f + 3] = F;
                              a[f + 2] = F;
                              break c
                            }
                            G()
                          }
                        }
                      }
                    }
                  } while (0);
                  var Db = a[q + 32 >> 2] - 1 | 0;
                  a[q + 32 >> 2] = Db;
                  if (0 != (Db | 0)) {
                    break a
                  }
                  for (var Eb = q + 452 | 0;;) {
                    var Fb = a[Eb >> 2];
                    if (0 == (Fb | 0)) {
                      break
                    }
                    Eb = Fb + 8 | 0
                  }
                  a[q + 32 >> 2] = -1;
                  break a
                }
              }
            }
          }
        } while (0);
        G()
      }
    } while (0)
  }

  function ae(e) {
    var c, b = q + 444 | 0;
    for (c = b >> 2;;) {
      var d = a[c];
      if (d >>> 0 <= e >>> 0 && (d + a[c + 1] | 0) >>> 0 > e >>> 0) {
        var f = b;
        break
      }
      c = a[c + 2];
      if (0 == (c | 0)) {
        f = 0;
        break
      }
      b = c;
      c = b >> 2
    }
    return f
  }

  function ed(e, c) {
    var b = e + 8 | 0,
      b = 0 == (b & 7 | 0) ? 0 : -b & 7,
      d = c - b | 0;
    a[q + 24 >> 2] = e + b | 0;
    a[q + 12 >> 2] = d;
    a[b + (e + 4) >> 2] = d | 1;
    a[c + (e + 4) >> 2] = 40;
    a[q + 28 >> 2] = a[na + 16 >> 2]
  }

  function ac(a, c) {
    return 0 == (a | 0) ? ia(c) : Af(a, c)
  }

  function Af(e, c) {
    var b, d, f, i = 4294967231 < c >>> 0;
    a: do {
      if (i) {
        a[P.c >> 2] = 12;
        var h = 0
      } else {
        var k = e - 8 | 0;
        f = k;
        d = (e - 4 | 0) >> 2;
        var g = a[d],
          j = g & -8,
          l = j - 8 | 0,
          p = e + l | 0;
        do {
          if (k >>> 0 >= a[q + 16 >> 2] >>> 0) {
            var s = g & 3;
            if (1 != (s | 0) & -8 < (l | 0) && (b = (e + (j - 4) | 0) >> 2, 0 != (a[b] & 1 | 0))) {
              i = 11 > c >>> 0 ? 16 : c + 11 & -8;
              if (0 == (s | 0)) {
                var r = 0,
                  v, g = a[f + 4 >> 2] & -8;
                v = 256 > i >>> 0 ? 0 : g >>> 0 >= (i + 4 | 0) >>> 0 && (g - i | 0) >>> 0 <= a[na + 8 >> 2] << 1 >>> 0 ? f : 0;
                f = 18
              } else {
                j >>> 0 < i >>> 0 ? (p | 0) != (a[q + 24 >> 2] | 0) ? f = 22 : (b = a[q + 12 >> 2] + j | 0, b >>> 0 > i >>> 0 ? (r = b - i | 0, a[d] = i | g & 1 | 2, a[e + (i - 4) >> 2] = r | 1, a[q + 24 >> 2] = e + (i - 8) | 0, a[q + 12 >> 2] = r, r = 0, v = f, f = 18) : f = 22) : (r = j - i | 0, 15 < r >>> 0 ? (a[d] = i | g & 1 | 2, a[e + (i - 4) >> 2] = r | 3, a[b] |= 1, r = e + i | 0) : r = 0, v = f, f = 18)
              }
              do {
                if (18 == f && 0 != (v | 0)) {
                  0 != (r | 0) && Z(r);
                  h = v + 8 | 0;
                  break a
                }
              } while (0);
              f = ia(c);
              if (0 == (f | 0)) {
                h = 0;
                break a
              }
              d = j - (0 == (a[d] & 3 | 0) ? 8 : 4) | 0;
              oa(f, e, d >>> 0 < c >>> 0 ? d : c);
              Z(e);
              h = f;
              break a
            }
          }
        } while (0);
        G()
      }
    } while (0);
    return h
  }

  function wf() {
    if (0 == (a[na >> 2] | 0)) {
      var e = Tf();
      0 == (e - 1 & e | 0) ? (a[na + 8 >> 2] = e, a[na + 4 >> 2] = e, a[na + 12 >> 2] = -1, a[na + 16 >> 2] = 2097152, a[na + 20 >> 2] = 0, a[q + 440 >> 2] = 0, e = Wc(0) & -16 ^ 1431655768, a[na >> 2] = e) : G()
    }
  }

  function xf(e, c, b) {
    var d, f, i, h = c >> 2,
      k = e >> 2,
      g, j = e + 8 | 0,
      j = 0 == (j & 7 | 0) ? 0 : -j & 7;
    f = c + 8 | 0;
    var l = 0 == (f & 7 | 0) ? 0 : -f & 7;
    i = l >> 2;
    var p = c + l | 0,
      s = j + b | 0;
    f = s >> 2;
    var s = e + s | 0,
      r = p - (e + j) - b | 0;
    a[(j + 4 >> 2) + k] = b | 3;
    b = (p | 0) == (a[q + 24 >> 2] | 0);
    a: do {
      if (b) {
        var v = a[q + 12 >> 2] + r | 0;
        a[q + 12 >> 2] = v;
        a[q + 24 >> 2] = s;
        a[f + (k + 1)] = v | 1
      } else {
        if ((p | 0) == (a[q + 20 >> 2] | 0)) {
          v = a[q + 8 >> 2] + r | 0, a[q + 8 >> 2] = v, a[q + 20 >> 2] = s, a[f + (k + 1)] = v | 1, a[(v >> 2) + k + f] = v
        } else {
          var u = a[i + (h + 1)];
          if (1 == (u & 3 | 0)) {
            var v = u & -8,
              o = u >>> 3,
              t = 256 > u >>> 0;
            b: do {
              if (t) {
                var y = a[((l | 8) >> 2) + h],
                  x = a[i + (h + 3)];
                if ((y | 0) == (x | 0)) {
                  a[q >> 2] &= 1 << o ^ -1
                } else {
                  var w = ((u >>> 2 & 1073741822) << 2) + q + 40 | 0;
                  g = (y | 0) == (w | 0) ? 16 : y >>> 0 < a[q + 16 >> 2] >>> 0 ? 19 : 16;
                  do {
                    if (16 == g && !((x | 0) != (w | 0) && x >>> 0 < a[q + 16 >> 2] >>> 0)) {
                      a[y + 12 >> 2] = x;
                      a[x + 8 >> 2] = y;
                      break b
                    }
                  } while (0);
                  G()
                }
              } else {
                g = p;
                y = a[((l | 24) >> 2) + h];
                x = a[i + (h + 3)];
                do {
                  if ((x | 0) == (g | 0)) {
                    var w = l | 16,
                      z = w + (c + 4) | 0,
                      B = a[z >> 2];
                    if (0 == (B | 0)) {
                      if (w = c + w | 0, B = a[w >> 2], 0 == (B | 0)) {
                        var C = 0;
                        d = C >> 2;
                        break
                      }
                    } else {
                      w = z
                    }
                    for (;;) {
                      var z = B + 20 | 0,
                        D = a[z >> 2];
                      if (0 == (D | 0) && (z = B + 16 | 0, D = a[z >> 2], 0 == (D | 0))) {
                        break
                      }
                      w = z;
                      B = D
                    }
                    w >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[w >> 2] = 0, C = B, d = C >> 2)
                  } else {
                    w = a[((l | 8) >> 2) + h], w >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[w + 12 >> 2] = x, a[x + 8 >> 2] = w, C = x, d = C >> 2)
                  }
                } while (0);
                if (0 != (y | 0)) {
                  x = l + (c + 28) | 0;
                  w = (a[x >> 2] << 2) + q + 304 | 0;
                  do {
                    if ((g | 0) == (a[w >> 2] | 0)) {
                      a[w >> 2] = C;
                      if (0 != (C | 0)) {
                        break
                      }
                      a[q + 4 >> 2] &= 1 << a[x >> 2] ^ -1;
                      break b
                    }
                    if (y >>> 0 < a[q + 16 >> 2] >>> 0) {
                      G()
                    } else {
                      if (B = y + 16 | 0, (a[B >> 2] | 0) == (g | 0) ? a[B >> 2] = C : a[y + 20 >> 2] = C, 0 == (C | 0)) {
                        break b
                      }
                    }
                  } while (0);
                  if (C >>> 0 < a[q + 16 >> 2] >>> 0) {
                    G()
                  } else {
                    if (a[d + 6] = y, g = l | 16, y = a[(g >> 2) + h], 0 != (y | 0) && (y >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[d + 4] = y, a[y + 24 >> 2] = C)), g = a[(g + 4 >> 2) + h], 0 != (g | 0)) {
                      g >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (a[d + 5] = g, a[g + 24 >> 2] = C)
                    }
                  }
                }
              }
            } while (0);
            u = c + (v | l) | 0;
            v = v + r | 0
          } else {
            u = p, v = r
          }
          u = u + 4 | 0;
          a[u >> 2] &= -2;
          a[f + (k + 1)] = v | 1;
          a[(v >> 2) + k + f] = v;
          if (256 > v >>> 0) {
            o = v >>> 2 & 1073741822;
            u = (o << 2) + q + 40 | 0;
            t = a[q >> 2];
            v = 1 << (v >>> 3);
            if (0 == (t & v | 0)) {
              a[q >> 2] = t | v;
              var E = u,
                F = (o + 2 << 2) + q + 40 | 0
            } else {
              v = (o + 2 << 2) + q + 40 | 0, o = a[v >> 2], o >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (E = o, F = v)
            }
            a[F >> 2] = s;
            a[E + 12 >> 2] = s;
            a[f + (k + 2)] = E;
            a[f + (k + 3)] = u
          } else {
            if (u = s, t = v >>> 8, 0 == (t | 0) ? o = 0 : 16777215 < v >>> 0 ? o = 31 : (o = (t + 1048320 | 0) >>> 16 & 8, g = t << o, t = (g + 520192 | 0) >>> 16 & 4, g <<= t, y = (g + 245760 | 0) >>> 16 & 2, o = 14 - (t | o | y) + (g << y >>> 15) | 0, o = v >>> ((o + 7 | 0) >>> 0) & 1 | o << 1), t = (o << 2) + q + 304 | 0, a[f + (k + 7)] = o, a[f + (k + 5)] = 0, a[f + (k + 4)] = 0, g = a[q + 4 >> 2], y = 1 << o, 0 == (g & y | 0)) {
              a[q + 4 >> 2] = g | y, a[t >> 2] = u, a[f + (k + 6)] = t, a[f + (k + 3)] = u, a[f + (k + 2)] = u
            } else {
              o = v << (31 == (o | 0) ? 0 : 25 - (o >>> 1) | 0);
              for (t = a[t >> 2];;) {
                if ((a[t + 4 >> 2] & -8 | 0) == (v | 0)) {
                  g = t + 8 | 0;
                  y = a[g >> 2];
                  x = a[q + 16 >> 2];
                  do {
                    if (t >>> 0 >= x >>> 0 && y >>> 0 >= x >>> 0) {
                      a[y + 12 >> 2] = u;
                      a[g >> 2] = u;
                      a[f + (k + 2)] = y;
                      a[f + (k + 3)] = t;
                      a[f + (k + 6)] = 0;
                      break a
                    }
                  } while (0);
                  G()
                } else {
                  if (g = (o >>> 31 << 2) + t + 16 | 0, y = a[g >> 2], 0 != (y | 0)) {
                    o <<= 1, t = y
                  } else {
                    if (g >>> 0 >= a[q + 16 >> 2] >>> 0) {
                      a[g >> 2] = u;
                      a[f + (k + 6)] = t;
                      a[f + (k + 3)] = u;
                      a[f + (k + 2)] = u;
                      break a
                    }
                    G()
                  }
                }
              }
            }
          }
        }
      }
    } while (0);
    return e + (j | 8) | 0
  }

  function yf(e, c) {
    var b, d, f = a[q + 24 >> 2];
    d = f >> 2;
    var i = ae(f),
      h = a[i >> 2];
    b = a[i + 4 >> 2];
    var i = h + b | 0,
      g = h + (b - 39) | 0,
      h = h + (b - 47) + (0 == (g & 7 | 0) ? 0 : -g & 7) | 0,
      h = h >>> 0 < (f + 16 | 0) >>> 0 ? f : h,
      g = h + 8 | 0;
    b = g >> 2;
    ed(e, c - 40 | 0);
    a[h + 4 >> 2] = 27;
    a[b] = a[q + 444 >> 2];
    a[b + 1] = a[q + 448 >> 2];
    a[b + 2] = a[q + 452 >> 2];
    a[b + 3] = a[q + 456 >> 2];
    a[q + 444 >> 2] = e;
    a[q + 448 >> 2] = c;
    a[q + 456 >> 2] = 0;
    a[q + 452 >> 2] = g;
    b = h + 28 | 0;
    a[b >> 2] = 7;
    g = (h + 32 | 0) >>> 0 < i >>> 0;
    a: do {
      if (g) {
        for (var j = b;;) {
          var n = j + 4 | 0;
          a[n >> 2] = 7;
          if ((j + 8 | 0) >>> 0 >= i >>> 0) {
            break a
          }
          j = n
        }
      }
    } while (0);
    i = (h | 0) == (f | 0);
    a: do {
      if (!i) {
        if (b = h - f | 0, g = b + (f + 4) | 0, a[g >> 2] &= -2, a[d + 1] = b | 1, a[f + b >> 2] = b, 256 > b >>> 0) {
          j = b >>> 2 & 1073741822;
          g = (j << 2) + q + 40 | 0;
          n = a[q >> 2];
          b = 1 << (b >>> 3);
          if (0 == (n & b | 0)) {
            a[q >> 2] = n | b;
            var l = g,
              p = (j + 2 << 2) + q + 40 | 0
          } else {
            b = (j + 2 << 2) + q + 40 | 0, j = a[b >> 2], j >>> 0 < a[q + 16 >> 2] >>> 0 ? G() : (l = j, p = b)
          }
          a[p >> 2] = f;
          a[l + 12 >> 2] = f;
          a[d + 2] = l;
          a[d + 3] = g
        } else {
          g = f;
          n = b >>> 8;
          if (0 == (n | 0)) {
            j = 0
          } else {
            if (16777215 < b >>> 0) {
              j = 31
            } else {
              var j = (n + 1048320 | 0) >>> 16 & 8,
                s = n << j,
                n = (s + 520192 | 0) >>> 16 & 4,
                s = s << n,
                r = (s + 245760 | 0) >>> 16 & 2,
                j = 14 - (n | j | r) + (s << r >>> 15) | 0,
                j = b >>> ((j + 7 | 0) >>> 0) & 1 | j << 1
            }
          }
          n = (j << 2) + q + 304 | 0;
          a[d + 7] = j;
          a[d + 5] = 0;
          a[d + 4] = 0;
          s = a[q + 4 >> 2];
          r = 1 << j;
          if (0 == (s & r | 0)) {
            a[q + 4 >> 2] = s | r, a[n >> 2] = g, a[d + 6] = n, a[d + 3] = f, a[d + 2] = f
          } else {
            j = b << (31 == (j | 0) ? 0 : 25 - (j >>> 1) | 0);
            for (n = a[n >> 2];;) {
              if ((a[n + 4 >> 2] & -8 | 0) == (b | 0)) {
                var s = n + 8 | 0,
                  r = a[s >> 2],
                  v = a[q + 16 >> 2];
                do {
                  if (n >>> 0 >= v >>> 0 && r >>> 0 >= v >>> 0) {
                    a[r + 12 >> 2] = g;
                    a[s >> 2] = g;
                    a[d + 2] = r;
                    a[d + 3] = n;
                    a[d + 6] = 0;
                    break a
                  }
                } while (0);
                G()
              } else {
                if (s = (j >>> 31 << 2) + n + 16 | 0, r = a[s >> 2], 0 != (r | 0)) {
                  j <<= 1, n = r
                } else {
                  if (s >>> 0 >= a[q + 16 >> 2] >>> 0) {
                    a[s >> 2] = g;
                    a[d + 6] = n;
                    a[d + 3] = f;
                    a[d + 2] = f;
                    break a
                  }
                  G()
                }
              }
            }
          }
        }
      }
    } while (0)
  }

  function P(e) {
    P.c || (P.c = s([0], "i32", l));
    return a[P.c >> 2] = e
  }

  function Uf(a, c, b, d) {
    var f = B.a[a];
    if (!f || f.object.d) {
      return P(L.n), -1
    }
    if (f.p) {
      if (f.object.f) {
        return P(L.P), -1
      }
      if (0 > b || 0 > d) {
        return P(L.k), -1
      }
      for (a = 0; f.g.length && 0 < b;) {
        j[c++] = f.g.pop(), b--, a++
      }
      f = f.object.b;
      b = Math.min(f.length - d, b);
      if (f.subarray || f.slice) {
        for (var i = 0; i < b; i++) {
          j[c + i] = f[d + i]
        }
      } else {
        for (i = 0; i < b; i++) {
          j[c + i] = f.get(d + i)
        }
      }
      return a + b
    }
    P(L.h);
    return -1
  }

  function Be(a, c, b) {
    var d = B.a[a];
    if (d) {
      if (d.p) {
        if (0 > b) {
          return P(L.k), -1
        }
        if (d.object.d) {
          if (d.object.input) {
            for (a = 0; d.g.length && 0 < b;) {
              j[c++] = d.g.pop(), b--, a++
            }
            for (var f = 0; f < b; f++) {
              try {
                var i = d.object.input()
              } catch (h) {
                return P(L.r), -1
              }
              if (i === S || i === bb) {
                break
              }
              a++;
              j[c + f] = i
            }
            return a
          }
          P(L.oa);
          return -1
        }
        i = d.g.length;
        a = Uf(a, c, b, d.position); - 1 != a && (d.position += d.g.length - i + a);
        return a
      }
      P(L.h);
      return -1
    }
    P(L.n);
    return -1
  }

  function xd(a) {
    B.a[a] || P(L.n);
    B.a[a] ? (B.a[a].Ea && Z(B.a[a].Ea), B.a[a] = S, a = 0) : (P(L.n), a = -1);
    return a
  }

  function Mb(a) {
    Mb.buffer || (Mb.buffer = ia(256));
    var c = Mb.buffer;
    if (a in be) {
      if (255 < be[a].length) {
        P(L.$a)
      } else {
        for (var a = be[a], b = 0; b < a.length; b++) {
          j[c + b] = a.charCodeAt(b)
        }
        j[c + b] = 0
      }
    } else {
      P(L.k)
    }
    return Mb.buffer
  }

  function Qd(a) {
    return a in {
      32: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0
    }
  }

  function Pe(e, c) {
    for (var b = e; Qd(j[e]);) {
      e++
    }
    var d = 1;
    45 == j[e] ? (d = -1, e++) : 43 == j[e] && e++;
    for (var f, i = 0, h = U;;) {
      f = j[e];
      if (!(48 <= f && 57 >= f)) {
        break
      }
      h = Q;
      i = 10 * i + f - 48;
      e++
    }
    var g = U;
    if (46 == j[e]) {
      e++;
      for (var m = .1;;) {
        f = j[e];
        if (!(48 <= f && 57 >= f)) {
          break
        }
        g = Q;
        i += m * (f - 48);
        m /= 10;
        e++
      }
    }
    if (!h && !g) {
      return c && (a[c >> 2] = b), 0
    }
    f = j[e];
    if (101 == f || 69 == f) {
      e++;
      b = 0;
      h = U;
      f = j[e];
      45 == f ? (h = Q, e++) : 43 == f && e++;
      for (f = j[e]; 48 <= f && 57 >= f;) {
        b = 10 * b + f - 48, e++, f = j[e]
      }
      h && (b = -b);
      i *= Math.pow(10, b)
    }
    c && (a[c >> 2] = e);
    return i * d
  }

  function qd(a, c) {
    a--;
    do {
      a++;
      var b = j[a];
      if (b == c) {
        return a
      }
    } while (b);
    return 0
  }

  function Md(a, c, b) {
    for (var c = nd(c), d = 0; d < b; d++) {
      if (j[a] == c) {
        return a
      }
      a++
    }
    return 0
  }

  function Oe(a, c) {
    var b = 0,
      d;
    do {
      b || (d = a, b = c);
      var f = j[a++],
        i = j[b++];
      if (0 == i) {
        return d
      }
      i != f && (a = d + 1, b = 0)
    } while (f);
    return 0
  }

  function oa(e, c, b) {
    if (20 <= b && c % 2 == e % 2) {
      if (c % 4 == e % 4) {
        for (b = c + b; c % 4;) {
          j[e++] = j[c++]
        }
        for (var c = c >> 2, e = e >> 2, d = b >> 2; c < d;) {
          a[e++] = a[c++]
        }
        c <<= 2;
        for (e <<= 2; c < b;) {
          j[e++] = j[c++]
        }
      } else {
        b = c + b;
        c % 2 && (j[e++] = j[c++]);
        c >>= 1;
        e >>= 1;
        for (d = b >> 1; c < d;) {
          O[e++] = O[c++]
        }
        c <<= 1;
        e <<= 1;
        c < b && (j[e++] = j[c++])
      }
    } else {
      for (; b--;) {
        j[e++] = j[c++]
      }
    }
  }

  function Bf(e, c) {
    function b(e) {
      var b;
      "double" === e ? b = (ca[0] = a[c + f >> 2], ca[1] = a[c + (f + 4) >> 2], pa[0]) : "i64" == e ? b = [a[c + f >> 2], a[c + (f + 4) >> 2]] : (e = "i32", b = a[c + f >> 2]);
      f += H.Ja(e);
      return b
    }
    for (var d = e, f = 0, i = [], h, g;;) {
      var m = d;
      h = j[d];
      if (0 === h) {
        break
      }
      g = j[d + 1];
      if (37 == h) {
        var n = U,
          l = U,
          p = U,
          q = U;
        a: for (;;) {
          switch (g) {
            case 43:
              n = Q;
              break;
            case 45:
              l = Q;
              break;
            case 35:
              p = Q;
              break;
            case 48:
              if (q) {
                break a
              } else {
                q = Q;
                break
              };
            default:
              break a
          }
          d++;
          g = j[d + 1]
        }
        var s = 0;
        if (42 == g) {
          s = b("i32"), d++, g = j[d + 1]
        } else {
          for (; 48 <= g && 57 >= g;) {
            s = 10 * s + (g - 48), d++, g = j[d + 1]
          }
        }
        var v = U;
        if (46 == g) {
          var u = 0,
            v = Q;
          d++;
          g = j[d + 1];
          if (42 == g) {
            u = b("i32"), d++
          } else {
            for (;;) {
              g = j[d + 1];
              if (48 > g || 57 < g) {
                break
              }
              u = 10 * u + (g - 48);
              d++
            }
          }
          g = j[d + 1]
        } else {
          u = 6
        }
        var o;
        switch (String.fromCharCode(g)) {
          case "h":
            g = j[d + 2];
            104 == g ? (d++, o = 1) : o = 2;
            break;
          case "l":
            g = j[d + 2];
            108 == g ? (d++, o = 8) : o = 4;
            break;
          case "L":
            ;
          case "q":
            ;
          case "j":
            o = 8;
            break;
          case "z":
            ;
          case "t":
            ;
          case "I":
            o = 4;
            break;
          default:
            o = S
        }
        o && d++;
        g = j[d + 1];
        if (-1 != "diuoxXp".split("").indexOf(String.fromCharCode(g))) {
          m = 100 == g || 105 == g;
          o = o || 4;
          var t = h = b("i" + 8 * o),
            r;
          8 == o && (h = H.Te(h[0], h[1], 117 == g));
          4 >= o && (h = (m ? oe : nd)(h & Math.pow(256, o) - 1, 8 * o));
          var x = Math.abs(h),
            m = "";
          if (100 == g || 105 == g) {
            r = 8 == o && fd ? fd.stringify(t[0], t[1]) : oe(h, 8 * o).toString(10)
          } else {
            if (117 == g) {
              r = 8 == o && fd ? fd.stringify(t[0], t[1], Q) : nd(h, 8 * o).toString(10), h = Math.abs(h)
            } else {
              if (111 == g) {
                r = (p ? "0" : "") + x.toString(8)
              } else {
                if (120 == g || 88 == g) {
                  m = p ? "0x" : "";
                  if (0 > h) {
                    h = -h;
                    r = (x - 1).toString(16);
                    t = [];
                    for (p = 0; p < r.length; p++) {
                      t.push((15 - parseInt(r[p], 16)).toString(16))
                    }
                    for (r = t.join(""); r.length < 2 * o;) {
                      r = "f" + r
                    }
                  } else {
                    r = x.toString(16)
                  }
                  88 == g && (m = m.toUpperCase(), r = r.toUpperCase())
                } else {
                  112 == g && (0 === x ? r = "(nil)" : (m = "0x", r = x.toString(16)))
                }
              }
            }
          } if (v) {
            for (; r.length < u;) {
              r = "0" + r
            }
          }
          for (n && (m = 0 > h ? "-" + m : "+" + m); m.length + r.length < s;) {
            l ? r += " " : q ? r = "0" + r : m = " " + m
          }
          r = m + r;
          r.split("").forEach((function(a) {
            i.push(a.charCodeAt(0))
          }))
        } else {
          if (-1 != "fFeEgG".split("").indexOf(String.fromCharCode(g))) {
            h = b("double");
            if (isNaN(h)) {
              r = "nan", q = U
            } else {
              if (isFinite(h)) {
                v = U;
                o = Math.min(u, 20);
                if (103 == g || 71 == g) {
                  v = Q, u = u || 1, o = parseInt(h.toExponential(o).split("e")[1], 10), u > o && -4 <= o ? (g = (103 == g ? "f" : "F").charCodeAt(0), u -= o + 1) : (g = (103 == g ? "e" : "E").charCodeAt(0), u--), o = Math.min(u, 20)
                }
                if (101 == g || 69 == g) {
                  r = h.toExponential(o), /[eE][-+]\d$/.test(r) && (r = r.slice(0, -1) + "0" + r.slice(-1))
                } else {
                  if (102 == g || 70 == g) {
                    r = h.toFixed(o)
                  }
                }
                m = r.split("e");
                if (v && !p) {
                  for (; 1 < m[0].length && -1 != m[0].indexOf(".") && ("0" == m[0].slice(-1) || "." == m[0].slice(-1));) {
                    m[0] = m[0].slice(0, -1)
                  }
                } else {
                  for (p && -1 == r.indexOf(".") && (m[0] += "."); u > o++;) {
                    m[0] += "0"
                  }
                }
                r = m[0] + (1 < m.length ? "e" + m[1] : "");
                69 == g && (r = r.toUpperCase());
                n && 0 <= h && (r = "+" + r)
              } else {
                r = (0 > h ? "-" : "") + "inf", q = U
              }
            }
            for (; r.length < s;) {
              r = l ? r + " " : q && ("-" == r[0] || "+" == r[0]) ? r[0] + "0" + r.slice(1) : (q ? "0" : " ") + r
            }
            97 > g && (r = r.toUpperCase());
            r.split("").forEach((function(a) {
              i.push(a.charCodeAt(0))
            }))
          } else {
            if (115 == g) {
              n = b("i8*") || Vf;
              q = ra(n);
              v && (q = Math.min(q, u));
              if (!l) {
                for (; q < s--;) {
                  i.push(32)
                }
              }
              for (p = 0; p < q; p++) {
                i.push(Ia[n++])
              }
              if (l) {
                for (; q < s--;) {
                  i.push(32)
                }
              }
            } else {
              if (99 == g) {
                for (l && i.push(b("i8")); 0 < --s;) {
                  i.push(32)
                }
                l || i.push(b("i8"))
              } else {
                if (110 == g) {
                  l = b("i32*"), a[l >> 2] = i.length
                } else {
                  if (37 == g) {
                    i.push(h)
                  } else {
                    for (p = m; p < d + 2; p++) {
                      i.push(j[p])
                    }
                  }
                }
              }
            }
          }
        }
        d += 2
      } else {
        i.push(h), d += 1
      }
    }
    return i
  }

  function xc(a, c, b, d) {
    b = Bf(b, d);
    c = c === bb ? b.length : Math.min(b.length, c - 1);
    for (d = 0; d < c; d++) {
      j[a + d] = b[d]
    }
    j[a + d] = 0;
    return b.length
  }

  function Ke() {
    P(L.Xa);
    return -1
  }

  function wc(a) {
    function c() {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a
    }
    c.prototype = Error();
    Lc(ce);
    Cf.print();
    Ha(new c)
  }

  function Ee() {
    P(L.Za);
    return 0
  }

  function Vd(a, c, b) {
    var d = B.a[a];
    if (d) {
      if (d.q) {
        if (0 > b) {
          return P(L.k), -1
        }
        if (d.object.d) {
          if (d.object.j) {
            for (var f = 0; f < b; f++) {
              try {
                d.object.j(j[c + f])
              } catch (g) {
                return P(L.r), -1
              }
            }
            d.object.timestamp = Date.now();
            return f
          }
          P(L.oa);
          return -1
        }
        f = d.position;
        a = B.a[a];
        if (!a || a.object.d) {
          P(L.n), c = -1
        } else {
          if (a.q) {
            if (a.object.f) {
              P(L.P), c = -1
            } else {
              if (0 > b || 0 > f) {
                P(L.k), c = -1
              } else {
                for (var h = a.object.b; h.length < f;) {
                  h.push(0)
                }
                for (var k = 0; k < b; k++) {
                  h[f + k] = Ia[c + k]
                }
                a.object.timestamp = Date.now();
                c = k
              }
            }
          } else {
            P(L.h), c = -1
          }
        } - 1 != c && (d.position += c);
        return c
      }
      P(L.h);
      return -1
    }
    P(L.n);
    return -1
  }

  function Xb(a, c) {
    Vd(c, a, ra(a))
  }

  function Yb(a) {
    function c(a) {
      B.a[a] && B.a[a].object.j && (B.a[a].fa || B.a[a].object.j(S))
    }
    try {
      if (0 === a) {
        for (a = 0; a < B.a.length; a++) {
          B.a[a] && c(a)
        }
      } else {
        c(a)
      }
    } catch (b) {
      P(L.r)
    }
  }

  function Wc(e) {
    var c = Math.floor(Date.now() / 1e3);
    e && (a[e >> 2] = c);
    return c
  }

  function Zc(a) {
    return 65 <= a && 90 >= a ? a - 65 + 97 : a
  }

  function Ne(a, c, b) {
    for (var d = 0; d < b;) {
      var f = Zc(Ia[a + d]),
        g = Zc(Ia[c + d]);
      if (f == g && 0 == f) {
        break
      }
      if (0 == f) {
        return -1
      }
      if (0 == g) {
        return 1
      }
      if (f == g) {
        d++
      } else {
        return f > g ? 1 : -1
      }
    }
    return 0
  }

  function Oa(a, c, b) {
    for (var d = 0; d < b;) {
      var f = Ia[a + d],
        g = Ia[c + d];
      if (f == g && 0 == f) {
        break
      }
      if (0 == f) {
        return -1
      }
      if (0 == g) {
        return 1
      }
      if (f == g) {
        d++
      } else {
        return f > g ? 1 : -1
      }
    }
    return 0
  }

  function Se() {
    if (!gd) {
      Df = ia(4);
      a[Df >> 2] = 60 * -(new Date).getTimezoneOffset();
      Ef = ia(4);
      a[Ef >> 2] = Number((new Date(2e3, 0, 1)).getTimezoneOffset() != (new Date(2e3, 6, 1)).getTimezoneOffset());
      var e = s(Aa("GMT"), "i8", zc),
        c = s(Aa("GMT"), "i8", zc);
      gd = ia(8);
      a[gd >> 2] = e;
      a[gd + 4 >> 2] = c
    }
  }

  function Ta(a, c) {
    var b = 0;
    do {
      j[a + b] = j[c + b], b++
    } while (0 != j[c + (b - 1)])
  }

  function qa(e, c, b, d) {
    qa.whiteSpace || (qa.whiteSpace = {}, qa.whiteSpace[32] = 1, qa.whiteSpace[9] = 1, qa.whiteSpace[10] = 1, qa.whiteSpace[" "] = 1, qa.whiteSpace["\t"] = 1, qa.whiteSpace["\n"] = 1);
    var e = Sb(e),
      f = 0;
    if (0 <= e.indexOf("%n")) {
      var g = c,
        c = (function() {
          f++;
          return g()
        }),
        h = b,
        b = (function() {
          f--;
          return h()
        })
    }
    var k = 0,
      m = 0,
      n = 0,
      l;
    l = 1;
    k = 0;
    a: for (; k < e.length; k++) {
      for (;;) {
        l = c();
        if (0 == l) {
          return m
        }
        if (!(l in qa.whiteSpace)) {
          break
        }
      }
      b(l);
      if (0 >= l) {
        return m
      }
      l = c();
      if (0 >= l) {
        return m
      }
      if ("%" === e[k]) {
        k++;
        for (var p = k; 48 <= e[k].charCodeAt(0) && 57 >= e[k].charCodeAt(0);) {
          k++
        }
        var q;
        k != p && (q = parseInt(e.slice(p, k), 10));
        var r = U,
          s = U,
          u = U;
        "l" == e[k] ? (r = Q, k++, "l" == e[k] && (u = Q, k++)) : "h" == e[k] && (s = Q, k++);
        p = e[k];
        k++;
        var o = 0,
          t = [];
        if ("f" == p) {
          for (o = 0; 0 < l;) {
            t.push(String.fromCharCode(l)), /^[+-]?[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?$/.exec(t.join("")) && (o = t.length), l = c()
          }
          for (b(l); t.length > o;) {
            b(t.pop().charCodeAt(0))
          }
          l = c()
        } else {
          if ("n" != p) {
            for (var x = Q;
              (o < q || isNaN(q)) && 0 < l;) {
              if (!(l in qa.whiteSpace) && ("s" == p || ("d" === p || "u" == p || "i" == p) && (48 <= l && 57 >= l || x && 45 == l) || "x" === p && (48 <= l && 57 >= l || 97 <= l && 102 >= l || 65 <= l && 70 >= l)) && (k >= e.length || l !== e[k].charCodeAt(0))) {
                t.push(String.fromCharCode(l)), l = c(), o++
              } else {
                break
              }
              x = U
            }
          }
        } if (0 === t.length && "n" != p) {
          return 0
        }
        o = t.join("");
        t = a[d + n >> 2];
        n += H.Ja("void*");
        switch (p) {
          case "d":
            ;
          case "u":
            ;
          case "i":
            s ? O[t >> 1] = parseInt(o, 10) : u ? (Tb = [parseInt(o, 10) >>> 0, Math.min(Math.floor(parseInt(o, 10) / 4294967296), 4294967295)], a[t >> 2] = Tb[0], a[t + 4 >> 2] = Tb[1]) : a[t >> 2] = parseInt(o, 10);
            break;
          case "x":
            a[t >> 2] = parseInt(o, 16);
            break;
          case "f":
            r ? (pa[0] = parseFloat(o), a[t >> 2] = ca[0], a[t + 4 >> 2] = ca[1]) : Ub[t >> 2] = parseFloat(o);
            break;
          case "s":
            r = Aa(o);
            for (s = 0; s < r.length; s++) {
              j[t + s] = r[s]
            }
            break;
          case "n":
            a[t >> 2] = f - 1
        }
        "n" != p && m++;
        if (0 >= l) {
          break a
        }
      } else {
        if (e[k] in qa.whiteSpace) {
          for (; l in qa.whiteSpace;) {
            if (l = c(), 0 >= l) {
              break a
            }
          }
          b(l)
        } else {
          if (e[k].charCodeAt(0) !== l) {
            b(l);
            break a
          }
        }
      }
    }
    "%" == e[k - 1] && "n" == e[k] && (t = a[d + n >> 2], a[t >> 2] = f - 1);
    return m
  }

  function Rf(a, c, b) {
    var d = 0;
    return qa(c, (function() {
      return j[a + d++]
    }), (function() {
      d--
    }), b)
  }

  function Re(a, c) {
    for (var b, d = {};;) {
      b = j[c++];
      if (!b) {
        break
      }
      d[b] = 1
    }
    for (;;) {
      b = j[a];
      if (!b) {
        break
      }
      if (b in d) {
        return a
      }
      a++
    }
    return 0
  }

  function yc(a) {
    return 97 <= a && 122 >= a || 65 <= a && 90 >= a
  }

  function Yc(a, c, b) {
    return xc(a, bb, c, b)
  }

  function fa(a) {
    return 48 <= a && 57 >= a || 97 <= a && 122 >= a || 65 <= a && 90 >= a
  }

  function Da(e, c) {
    var b = 0;
    if (20 <= c) {
      for (var d = e + c; e % 4;) {
        j[e++] = b
      }
      0 > b && (b += 256);
      for (var f = e >> 2, g = d >> 2, h = b | b << 8 | b << 16 | b << 24; f < g;) {
        a[f++] = h
      }
      for (e = f << 2; e < d;) {
        j[e++] = b
      }
    } else {
      for (; c--;) {
        j[e++] = b
      }
    }
  }

  function Wf(e, c, b) {
    var d = a[b >> 2],
      f = c & 3,
      b = 0 != f,
      f = 1 != f,
      g = Boolean(c & 512),
      h = Boolean(c & 2048),
      k = Boolean(c & 1024),
      j = Boolean(c & 8),
      e = B.G(Sb(e));
    if (!e.N) {
      return P(e.error), -1
    }
    if (c = e.object || S) {
      if (g && h) {
        return P(L.ma), -1
      }
      if ((b || g || k) && c.f) {
        return P(L.P), -1
      }
      if (f && !c.ha || b && !c.write) {
        return P(L.h), -1
      }
      if (k && !c.d) {
        c.b = []
      } else {
        if (!B.Ke(c)) {
          return P(L.r), -1
        }
      }
      e = e.path
    } else {
      if (!g) {
        return P(L.Q), -1
      }
      if (!e.z.write) {
        return P(L.h), -1
      }
      c = B.t(e.z, e.name, [], d & 256, d & 128);
      e = e.ga + "/" + e.name
    }
    d = B.a.length;
    if (c.f) {
      b = 0;
      Ff && (b = ia(Ff.V));
      var f = [],
        l;
      for (l in c.b) {
        f.push(l)
      }
      B.a[d] = {
        path: e,
        object: c,
        position: -2,
        p: Q,
        q: U,
        M: U,
        error: U,
        v: U,
        g: [],
        b: f,
        Ea: b
      }
    } else {
      B.a[d] = {
        path: e,
        object: c,
        position: 0,
        p: f,
        q: b,
        M: j,
        error: U,
        v: U,
        g: []
      }
    }
    return d
  }

  function Cd(a, c) {
    var b, c = Sb(c);
    if ("r" == c[0]) {
      b = -1 != c.indexOf("+") ? 2 : 0
    } else {
      if ("w" == c[0]) {
        b = -1 != c.indexOf("+") ? 2 : 1, b |= 1536
      } else {
        if ("a" == c[0]) {
          b = -1 != c.indexOf("+") ? 2 : 1, b |= 512, b |= 8
        } else {
          return P(L.k), 0
        }
      }
    }
    b = Wf(a, b, s([511, 0, 0, 0], "i32", dc));
    return -1 == b ? 0 : b
  }

  function of(a) {
    return 31 < a && 127 > a
  }

  function bc(a, c, b) {
    for (var d = 0; d < b; d++) {
      var f = Ia[a + d],
        g = Ia[c + d];
      if (f != g) {
        return f > g ? 1 : -1
      }
    }
    return 0
  }

  function Hc(a) {
    if (0 === a) {
      return 0
    }
    a = Sb(a);
    if (!ab.hasOwnProperty(a)) {
      return 0
    }
    Hc.c && Z(Hc.c);
    Hc.c = s(Aa(ab[a]), "i8", zc);
    return Hc.c
  }

  function ef(a, c, b, d) {
    c *= b;
    0 != c && -1 == Vd(d, a, c) && B.a[d] && (B.a[d].error = Q)
  }

  function $d(a, c, b) {
    c = Bf(c, b);
    b = H.la();
    ef(s(c, "i8", dc), 1, c.length, a);
    H.Na(b)
  }

  function G() {
    Ha("abort() at " + Error().stack)
  }

  function Tf() {
    switch (8) {
      case 8:
        return Xf;
      case 54:
        ;
      case 56:
        ;
      case 21:
        ;
      case 61:
        ;
      case 63:
        ;
      case 22:
        ;
      case 67:
        ;
      case 23:
        ;
      case 24:
        ;
      case 25:
        ;
      case 26:
        ;
      case 27:
        ;
      case 69:
        ;
      case 28:
        ;
      case 101:
        ;
      case 70:
        ;
      case 71:
        ;
      case 29:
        ;
      case 30:
        ;
      case 199:
        ;
      case 75:
        ;
      case 76:
        ;
      case 32:
        ;
      case 43:
        ;
      case 44:
        ;
      case 80:
        ;
      case 46:
        ;
      case 47:
        ;
      case 45:
        ;
      case 48:
        ;
      case 49:
        ;
      case 42:
        ;
      case 82:
        ;
      case 33:
        ;
      case 7:
        ;
      case 108:
        ;
      case 109:
        ;
      case 107:
        ;
      case 112:
        ;
      case 119:
        ;
      case 121:
        return 200809;
      case 13:
        ;
      case 104:
        ;
      case 94:
        ;
      case 95:
        ;
      case 34:
        ;
      case 35:
        ;
      case 77:
        ;
      case 81:
        ;
      case 83:
        ;
      case 84:
        ;
      case 85:
        ;
      case 86:
        ;
      case 87:
        ;
      case 88:
        ;
      case 89:
        ;
      case 90:
        ;
      case 91:
        ;
      case 94:
        ;
      case 95:
        ;
      case 110:
        ;
      case 111:
        ;
      case 113:
        ;
      case 114:
        ;
      case 115:
        ;
      case 116:
        ;
      case 117:
        ;
      case 118:
        ;
      case 120:
        ;
      case 40:
        ;
      case 16:
        ;
      case 79:
        ;
      case 19:
        return -1;
      case 92:
        ;
      case 93:
        ;
      case 5:
        ;
      case 72:
        ;
      case 6:
        ;
      case 74:
        ;
      case 92:
        ;
      case 93:
        ;
      case 96:
        ;
      case 97:
        ;
      case 98:
        ;
      case 99:
        ;
      case 102:
        ;
      case 103:
        ;
      case 105:
        return 1;
      case 38:
        ;
      case 66:
        ;
      case 50:
        ;
      case 51:
        ;
      case 4:
        return 1024;
      case 15:
        ;
      case 64:
        ;
      case 41:
        return 32;
      case 55:
        ;
      case 37:
        ;
      case 17:
        return 2147483647;
      case 18:
        ;
      case 1:
        return 47839;
      case 59:
        ;
      case 57:
        return 99;
      case 68:
        ;
      case 58:
        return 2048;
      case 0:
        return 2097152;
      case 3:
        return 65536;
      case 14:
        return 32768;
      case 73:
        return 32767;
      case 39:
        return 16384;
      case 60:
        return 1e3;
      case 106:
        return 700;
      case 52:
        return 256;
      case 62:
        return 255;
      case 2:
        return 100;
      case 65:
        return 64;
      case 36:
        return 20;
      case 100:
        return 16;
      case 20:
        return 6;
      case 53:
        return 4
    }
    P(L.k);
    return -1
  }

  function wa(a) {
    var c = wa;
    c.Ce || (Ga = Ga + 4095 >> 12 << 12, c.Ce = Q, wa.lf = Ga);
    c = Ga;
    0 != a && H.Oa(a);
    return c
  }

  function Nc(a) {
    function c() {
      var b = 0;
      pe = Q;
      x._main && (Lc(Gf), b = x.Be(a), x.noExitRuntime || (Lc(ce), Cf.print()));
      if (x.postRun) {
        for ("function" == typeof x.postRun && (x.postRun = [x.postRun]); 0 < x.postRun.length;) {
          x.postRun.pop()()
        }
      }
      return b
    }
    a = a || x.arguments;
    if (0 < rb) {
      return x.m("run() called, but dependencies remain, so not running"), 0
    }
    if (x.preRun) {
      "function" == typeof x.preRun && (x.preRun = [x.preRun]);
      var b = x.preRun;
      x.preRun = [];
      for (var d = b.length - 1; 0 <= d; d--) {
        b[d]()
      }
      if (0 < rb) {
        return 0
      }
    }
    return x.setStatus ? (x.setStatus("Running..."), setTimeout((function() {
      setTimeout((function() {
        x.setStatus("")
      }), 1);
      c()
    }), 1), 0) : c()
  }
  var x = {
    noInitialRun: Q,
    arguments: ["-f", "/my_program.awk", "/my_input.txt"],
    af: (function() {
      x.Z = "";
      x.Y = ""
    }),
    preRun: (function() {
      B.t("/", "my_program.awk", Kc, Q, U);
      B.t("/", "my_input.txt", ie, Q, U)
    }),
    print: (function(a) {
      x.Z += a + "\n"
    }),
    printErr: (function(a) {
      console.log(a);
      x.Y += a + "\n"
    })
  };
  x.af();
  try {
    this.Module = x
  } catch (ag) {
    this.Module = x = {}
  }
  var de = "object" === typeof process,
    hd = "object" === typeof window,
    ec = "function" === typeof importScripts,
    Hf = !hd && !de && !ec;
  if (de) {
    x.print = (function(a) {
      process.stdout.write(a + "\n")
    });
    x.printErr = (function(a) {
      process.stderr.write(a + "\n")
    });
    var If = require("fs"),
      Jf = require("path");
    x.read = (function(a) {
      var a = Jf.normalize(a),
        c = If.readFileSync(a).toString();
      !c && a != Jf.resolve(a) && (a = path.join(__dirname, "..", "src", a), c = If.readFileSync(a).toString());
      return c
    });
    x.load = (function(a) {
      je(read(a))
    });
    x.arguments || (x.arguments = process.argv.slice(2))
  }
  Hf && (x.print = print, "undefined" != typeof printErr && (x.printErr = printErr), x.read = "undefined" != typeof read ? read : (function(a) {
    snarf(a)
  }), x.arguments || ("undefined" != typeof scriptArgs ? x.arguments = scriptArgs : "undefined" != typeof arguments && (x.arguments = arguments)));
  hd && !ec && (x.print || (x.print = (function(a) {
    console.log(a)
  })), x.printErr || (x.printErr = (function(a) {
    console.log(a)
  })));
  if (hd || ec) {
    x.read = (function(a) {
      var c = new XMLHttpRequest;
      c.open("GET", a, U);
      c.send(S);
      return c.responseText
    }), x.arguments || "undefined" != typeof arguments && (x.arguments = arguments)
  }
  ec && (x.print || (x.print = (function() {})), x.load = importScripts);
  !ec && !hd && !de && !Hf && Ha("Unknown runtime environment. Where are we?");
  "undefined" == !x.load && x.read && (x.load = (function(a) {
    je(x.read(a))
  }));
  x.print || (x.print = (function() {}));
  x.printErr || (x.printErr = x.print);
  x.arguments || (x.arguments = []);
  x.print = x.print;
  x.m = x.printErr;
  x.preRun || (x.preRun = []);
  x.postRun || (x.postRun = []);
  var H = {
      la: (function() {
        return r
      }),
      Na: (function(a) {
        r = a
      }),
      Jg: (function(a, c) {
        c = c || 4;
        if (c == 1) {
          return a
        }
        if (isNumber(a) && isNumber(c)) {
          return Math.ceil(a / c) * c
        }
        if (isNumber(c) && isPowerOfTwo(c)) {
          var b = log2(c);
          return "((((" + a + ")+" + (c - 1) + ")>>" + b + ")<<" + b + ")"
        }
        return "Math.ceil((" + a + ")/" + c + ")*" + c
      }),
      Oe: (function(a) {
        return a in H.bb || a in H.ab
      }),
      Pe: (function(a) {
        return a[a.length - 1] == "*"
      }),
      Re: (function(a) {
        return isPointerType(a) ? U : /^\[\d+\ x\ (.*)\]/.test(a) || /<?{ ?[^}]* ?}>?/.test(a) ? Q : a[0] == "%"
      }),
      bb: {
        i1: 0,
        i8: 0,
        i16: 0,
        i32: 0,
        i64: 0
      },
      ab: {
        "float": 0,
        "double": 0
      },
      Eg: (function(a, c, b, d) {
        var f = Math.pow(2, d) - 1;
        if (d < 32) {
          switch (b) {
            case "shl":
              return [a << d, c << d | (a & f << 32 - d) >>> 32 - d];
            case "ashr":
              return [(a >>> d | (c & f) << 32 - d) >> 0 >>> 0, c >> d >>> 0];
            case "lshr":
              return [(a >>> d | (c & f) << 32 - d) >>> 0, c >>> d]
          }
        } else {
          if (d == 32) {
            switch (b) {
              case "shl":
                return [0, a];
              case "ashr":
                return [c, (c | 0) < 0 ? f : 0];
              case "lshr":
                return [c, 0]
            }
          } else {
            switch (b) {
              case "shl":
                return [0, a << d - 32];
              case "ashr":
                return [c >> d - 32 >>> 0, (c | 0) < 0 ? f : 0];
              case "lshr":
                return [c >>> d - 32, 0]
            }
          }
        }
        Rb("unknown bitshift64 op: " + [value, b, d])
      }),
      Qg: (function(a, c) {
        return (a | 0 | c | 0) + (Math.round(a / 4294967296) | Math.round(c / 4294967296)) * 4294967296
      }),
      Dg: (function(a, c) {
        return ((a | 0) & (c | 0)) + (Math.round(a / 4294967296) & Math.round(c / 4294967296)) * 4294967296
      }),
      $g: (function(a, c) {
        return ((a | 0) ^ (c | 0)) + (Math.round(a / 4294967296) ^ Math.round(c / 4294967296)) * 4294967296
      }),
      da: (function(a) {
        if (H.B == 1) {
          return 1
        }
        var c = {
          "%i1": 1,
          "%i8": 1,
          "%i16": 2,
          "%i32": 4,
          "%i64": 8,
          "%float": 4,
          "%double": 8
        }["%" + a];
        if (!c) {
          if (a.charAt(a.length - 1) == "*") {
            c = H.B
          } else {
            if (a[0] == "i") {
              a = parseInt(a.substr(1));
              Ca(a % 8 == 0);
              c = a / 8
            }
          }
        }
        return c
      }),
      Ja: (function(a) {
        return Math.max(H.da(a), H.B)
      }),
      He: (function(a, c) {
        var b = {};
        return c ? a.filter((function(a) {
          if (b[a[c]]) {
            return U
          }
          return b[a[c]] = Q
        })) : a.filter((function(a) {
          if (b[a]) {
            return U
          }
          return b[a] = Q
        }))
      }),
      set: (function() {
        for (var a = typeof arguments[0] === "object" ? arguments[0] : arguments, c = {}, b = 0; b < a.length; b++) {
          c[a[b]] = 0
        }
        return c
      }),
      Ae: (function(a) {
        a.l = 0;
        a.F = 0;
        var c = [],
          b = -1;
        a.Ia = a.aa.map((function(d) {
          var f, g;
          if (H.Oe(d) || H.Pe(d)) {
            g = f = H.da(d)
          } else {
            if (H.Re(d)) {
              f = Types.types[d].l;
              g = Types.types[d].F
            } else {
              Ha("Unclear type in struct: " + d + ", in " + a.Ve + " :: " + dump(Types.types[a.Ve]))
            }
          }
          g = a.Rg ? 1 : Math.min(g, H.B);
          a.F = Math.max(a.F, g);
          d = H.D(a.l, g);
          a.l = d + f;
          b >= 0 && c.push(d - b);
          return b = d
        }));
        a.l = H.D(a.l, a.F);
        if (c.length == 0) {
          a.Ha = a.l
        } else {
          if (H.He(c).length == 1) {
            a.Ha = c[0]
          }
        }
        a.Og = a.Ha != 1;
        return a.Ia
      }),
      Le: (function(a, c, b) {
        var d, f;
        if (c) {
          b = b || 0;
          d = (typeof Types === "undefined" ? H.Xg : Types.types)[c];
          if (!d) {
            return S
          }
          if (d.aa.length != a.length) {
            printErr("Number of named fields must match the type for " + c + ": possibly duplicate struct names. Cannot return structInfo");
            return S
          }
          f = d.Ia
        } else {
          d = {
            aa: a.map((function(a) {
              return a[0]
            }))
          };
          f = H.Ae(d)
        }
        var g = {
          V: d.l
        };
        c ? a.forEach((function(a, c) {
          if (typeof a === "string") {
            g[a] = f[c] + b
          } else {
            var e, j;
            for (j in a) {
              e = j
            }
            g[e] = H.Le(a[e], d.aa[c], f[c])
          }
        })) : a.forEach((function(a, b) {
          g[a[1]] = f[b]
        }));
        return g
      }),
      Cg: (function(a) {
        var c = wb.length;
        wb.push(a);
        wb.push(0);
        return c
      }),
      A: (function(a) {
        if (!H.A.ja) {
          H.A.ja = {}
        }
        if (!H.A.ja[a]) {
          H.A.ja[a] = 1;
          x.m(a)
        }
      }),
      ca: {},
      Kg: (function(a) {
        H.ca[a] || (H.ca[a] = (function() {
          wb[a].apply(S, arguments)
        }));
        return H.ca[a]
      }),
      S: (function() {
        var a = [],
          c = 0;
        this.La = (function(b) {
          b = b & 255;
          if (c) {
            a.push(b);
            c--
          }
          if (a.length == 0) {
            if (b < 128) {
              return String.fromCharCode(b)
            }
            a.push(b);
            c = b > 191 && b < 224 ? 1 : 2;
            return ""
          }
          if (c > 0) {
            return ""
          }
          var b = a[0],
            d = a[1],
            f = a[2],
            b = b > 191 && b < 224 ? String.fromCharCode((b & 31) << 6 | d & 63) : String.fromCharCode((b & 15) << 12 | (d & 63) << 6 | f & 63);
          a.length = 0;
          return b
        });
        this.Ye = (function(a) {
          for (var a = unescape(encodeURIComponent(a)), c = [], e = 0; e < a.length; e++) {
            c.push(a.charCodeAt(e))
          }
          return c
        })
      }),
      ka: (function(a) {
        var c = r;
        r = r + a;
        r = r + 3 >> 2 << 2;
        return c
      }),
      Oa: (function(a) {
        var c = Ga;
        Ga = Ga + a;
        Ga = Ga + 3 >> 2 << 2;
        Ga >= Pa && Rb("Cannot enlarge memory arrays. Adjust TOTAL_MEMORY (currently " + Pa + ") or compile with ALLOW_MEMORY_GROWTH");
        return c
      }),
      D: (function(a, c) {
        return Math.ceil(a / (c ? c : 4)) * (c ? c : 4)
      }),
      Te: (function(a, c, b) {
        return b ? (a >>> 0) + (c >>> 0) * 4294967296 : (a >>> 0) + (c | 0) * 4294967296
      }),
      B: 4,
      Ag: 0
    },
    Cf = {
      cb: 0,
      Ba: 0,
      Vg: {},
      Pg: (function(a, c) {
        if (!c) {
          this.Ba++;
          this.Ba >= this.cb && Rb("\n\nToo many corrections!")
        }
      }),
      print: (function() {})
    },
    E = 0,
    J, Tb, Of = this;
  x.ccall = ke;
  x.cwrap = (function(a, c, b) {
    return (function() {
      return ke(a, c, b, Array.prototype.slice.call(arguments))
    })
  });
  x.setValue = ne;
  x.getValue = (function(e, c) {
    c = c || "i8";
    c.charAt(c.length - 1) === "*" && (c = "i32");
    switch (c) {
      case "i1":
        return j[e];
      case "i8":
        return j[e];
      case "i16":
        return O[e >> 1];
      case "i32":
        return a[e >> 2];
      case "i64":
        return a[e >> 2];
      case "float":
        return Ub[e >> 2];
      case "double":
        return ca[0] = a[e >> 2], ca[1] = a[e + 4 >> 2], pa[0];
      default:
        Rb("invalid type for setValue: " + c)
    }
    return S
  });
  var zc = 0,
    dc = 1,
    l = 2;
  x.ALLOC_NORMAL = zc;
  x.ALLOC_STACK = dc;
  x.ALLOC_STATIC = l;
  x.allocate = s;
  x.Pointer_stringify = Sb;
  x.Array_stringify = (function(a) {
    for (var c = "", b = 0; b < a.length; b++) {
      c = c + String.fromCharCode(a[b])
    }
    return c
  });
  var wb, Xf = 4096,
    j, Ia, O, Kf, a, Lf, Ub, ee, r, id, Ga, Yf = x.TOTAL_STACK || 5242880,
    Pa = x.TOTAL_MEMORY || 10485760;
  Ca(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
  var fb = new ArrayBuffer(Pa);
  j = new Int8Array(fb);
  O = new Int16Array(fb);
  a = new Int32Array(fb);
  Ia = new Uint8Array(fb);
  Kf = new Uint16Array(fb);
  Lf = new Uint32Array(fb);
  Ub = new Float32Array(fb);
  ee = new Float64Array(fb);
  a[0] = 255;
  Ca(255 === Ia[0] && 0 === Ia[3], "Typed arrays 2 must be run on a little-endian system");
  x.HEAP = bb;
  x.HEAP8 = j;
  x.HEAP16 = O;
  x.HEAP32 = a;
  x.HEAPU8 = Ia;
  x.HEAPU16 = Kf;
  x.HEAPU32 = Lf;
  x.HEAPF32 = Ub;
  x.HEAPF64 = ee;
  id = (r = H.D(1)) + Yf;
  var Ic = H.D(id, 8);
  j.subarray(Ic);
  var ca = a.subarray(Ic >> 2);
  Ub.subarray(Ic >> 2);
  var pa = ee.subarray(Ic >> 3);
  id = Ic + 8;
  Ga = id + 4095 >> 12 << 12;
  Ca(Ga < Pa);
  var Vf = s(Aa("(null)"), "i8", l),
    Mf = [],
    Gf = [],
    ce = [];
  x.String_len = ra;
  x.intArrayFromString = Aa;
  x.intArrayToString = (function(a) {
    for (var c = [], b = 0; b < a.length; b++) {
      var d = a[b];
      d > 255 && (d = d & 255);
      c.push(String.fromCharCode(d))
    }
    return c.join("")
  });
  x.writeStringToMemory = le;
  x.writeArrayToMemory = me;
  var g = [],
    rb = 0,
    hc = {},
    pe = U,
    ic = S;
  x.addRunDependency = od;
  x.removeRunDependency = Mc;
  x.preloadedImages = {};
  x.preloadedAudios = {};
  Vb.X = 1;
  rd.X = 1;
  x._main = td;
  td.X = 1;
  ta.X = 1;
  Ad.X = 1;
  Wb.X = 1;
  De.X = 1;
  Fd.X = 1;
  $b.X = 1;
  Nd.X = 1;
  Le.X = 1;
  $c.X = 1;
  ya.X = 1;
  Ba.X = 1;
  Ud.X = 1;
  re.X = 1;
  Bc.X = 1;
  Ma.X = 1;
  Nb.X = 1;
  Od.X = 1;
  Wd.X = 1;
  Xd.X = 1;
  $e.X = 1;
  af.X = 1;
  bd.X = 1;
  df.X = 1;
  Dc.X = 1;
  dd.X = 1;
  gf.X = 1;
  hf.X = 1;
  lf.X = 1;
  mf.X = 1;
  Zd.X = 1;
  cf.X = 1;
  pf.X = 1;
  qf.X = 1;
  sf.X = 1;
  La.X = 1;
  Gc.X = 1;
  Sa.X = 1;
  kb.X = 1;
  rf.X = 1;
  va.X = 1;
  Fc.X = 1;
  eb.X = 1;
  Za.X = 1;
  ve.X = 1;
  x._malloc = ia;
  ia.X = 1;
  tf.X = 1;
  uf.X = 1;
  vf.X = 1;
  zf.X = 1;
  x._free = Z;
  Z.X = 1;
  Af.X = 1;
  xf.X = 1;
  yf.X = 1;
  var fd = S,
    L = {
      mf: 7,
      h: 13,
      nf: 98,
      of: 99,
      pf: 97,
      qf: 11,
      rf: 114,
      n: 9,
      sf: 74,
      tf: 16,
      uf: 125,
      Xa: 10,
      vf: 103,
      wf: 111,
      xf: 104,
      yf: 35,
      zf: 89,
      Af: 33,
      Bf: 122,
      ma: 17,
      Cf: 14,
      Df: 27,
      Ef: 113,
      Ff: 43,
      Gf: 84,
      Hf: 115,
      If: 4,
      k: 22,
      r: 5,
      Jf: 106,
      P: 21,
      Ya: 40,
      Za: 24,
      Kf: 31,
      Lf: 90,
      Mf: 72,
      Nf: 36,
      Of: 100,
      Pf: 102,
      Qf: 101,
      Rf: 23,
      Sf: 105,
      Tf: 61,
      Uf: 19,
      Q: 2,
      Vf: 8,
      Wf: 37,
      Xf: 67,
      Yf: 12,
      Zf: 42,
      $f: 92,
      ag: 28,
      bg: 63,
      cg: 60,
      dg: 38,
      eg: 107,
      na: 20,
      fg: 39,
      gg: 131,
      hg: 88,
      ig: 95,
      jg: 25,
      oa: 6,
      kg: 75,
      lg: 130,
      mg: 1,
      ng: 32,
      og: 71,
      pg: 93,
      qg: 91,
      $a: 34,
      rg: 30,
      sg: 29,
      tg: 3,
      ug: 116,
      vg: 62,
      wg: 110,
      xg: 26,
      yg: 11,
      zg: 18
    },
    Lb = 0,
    ob = 0,
    Va = 0,
    B = {
      Ge: "/",
      We: 2,
      a: [S],
      Ka: Q,
      Se: (function(a, c) {
        for (var b = a[0], d = 1; d < a.length; d++) {
          b[b.length - 1] != "/" && (b = b + "/");
          b = b + a[d]
        }
        c && b[0] == "/" && (b = b.substr(1));
        return b
      }),
      za: (function(a, c) {
        if (typeof a !== "string") {
          return S
        }
        if (c === bb) {
          c = B.Ge
        }
        a && a[0] == "/" && (c = "");
        for (var b = (c + "/" + a).split("/").reverse(), d = [""]; b.length;) {
          var f = b.pop();
          f == "" || f == "." || (f == ".." ? d.length > 1 && d.pop() : d.push(f))
        }
        return d.length == 1 ? "/" : d.join("/")
      }),
      G: (function(a, c, b) {
        var d = {
            Qe: U,
            K: U,
            error: 0,
            name: S,
            path: S,
            object: S,
            N: U,
            ga: S,
            z: S
          },
          a = B.za(a);
        if (a == "/") {
          d.Qe = Q;
          d.K = d.N = Q;
          d.name = "/";
          d.path = d.ga = "/";
          d.object = d.z = B.root
        } else {
          if (a !== S) {
            for (var b = b || 0, a = a.slice(1).split("/"), f = B.root, g = [""]; a.length;) {
              if (a.length == 1 && f.f) {
                d.N = Q;
                d.ga = g.length == 1 ? "/" : g.join("/");
                d.z = f;
                d.name = a[0]
              }
              var h = a.shift();
              if (f.f) {
                if (f.ha) {
                  if (!f.b.hasOwnProperty(h)) {
                    d.error = L.Q;
                    break
                  }
                } else {
                  d.error = L.h;
                  break
                }
              } else {
                d.error = L.na;
                break
              }
              f = f.b[h];
              if (f.link && !(c && a.length == 0)) {
                if (b > 40) {
                  d.error = L.Ya;
                  break
                }
                d = B.za(f.link, g.join("/"));
                d = B.G([d].concat(a).join("/"), c, b + 1);
                break
              }
              g.push(h);
              if (a.length == 0) {
                d.K = Q;
                d.path = g.join("/");
                d.object = f
              }
            }
          }
        }
        return d
      }),
      Ga: (function(a, c) {
        B.Fa();
        var b = B.G(a, c);
        if (b.K) {
          return b.object
        }
        P(b.error);
        return S
      }),
      Ca: (function(a, c, b, d, f) {
        a || (a = "/");
        typeof a === "string" && (a = B.Ga(a));
        if (!a) {
          P(L.h);
          Ha(Error("Parent path must exist."))
        }
        if (!a.f) {
          P(L.na);
          Ha(Error("Parent must be a folder."))
        }
        if (!a.write && !B.Ka) {
          P(L.h);
          Ha(Error("Parent folder must be writeable."))
        }
        if (!c || c == "." || c == "..") {
          P(L.Q);
          Ha(Error("Name must not be empty."))
        }
        if (a.b.hasOwnProperty(c)) {
          P(L.ma);
          Ha(Error("Can't overwrite object."))
        }
        a.b[c] = {
          ha: d === bb ? Q : d,
          write: f === bb ? U : f,
          timestamp: Date.now(),
          Ne: B.We++
        };
        for (var g in b) {
          b.hasOwnProperty(g) && (a.b[c][g] = b[g])
        }
        return a.b[c]
      }),
      J: (function(a, c, b, d) {
        return B.Ca(a, c, {
          f: Q,
          d: U,
          b: {}
        }, b, d)
      }),
      Da: (function(a, c, b, d) {
        a = B.Ga(a);
        a === S && Ha(Error("Invalid parent."));
        for (c = c.split("/").reverse(); c.length;) {
          var f = c.pop();
          if (f) {
            a.b.hasOwnProperty(f) || B.J(a, f, b, d);
            a = a.b[f]
          }
        }
        return a
      }),
      I: (function(a, c, b, d, f) {
        b.f = U;
        return B.Ca(a, c, b, d, f)
      }),
      t: (function(a, c, b, d, f) {
        if (typeof b === "string") {
          for (var g = Array(b.length), h = 0, j = b.length; h < j; ++h) {
            g[h] = b.charCodeAt(h)
          }
          b = g
        }
        b = {
          d: U,
          b: b.subarray ? b.subarray(0) : b
        };
        return B.I(a, c, b, d, f)
      }),
      De: (function(a, c, b, d, f) {
        if (typeof XMLHttpRequest !== "undefined") {
          ec || Ha("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
          var g = (function(a, b) {
            this.length = b;
            this.Aa = a;
            this.H = []
          });
          g.prototype.get = (function(a) {
            if (!(a > this.length - 1 || a < 0)) {
              var b = a % n;
              return this.Me(Math.floor(a / n))[b]
            }
          });
          g.prototype.ef = (function(a) {
            this.Me = a
          });
          var h = new XMLHttpRequest;
          h.open("HEAD", b, U);
          h.send(S);
          h.status >= 200 && h.status < 300 || h.status === 304 || Ha(Error("Couldn't load " + b + ". Status: " + h.status));
          var j = Number(h.getResponseHeader("Content-length")),
            l, n = 1048576;
          if (!((l = h.getResponseHeader("Accept-Ranges")) && l === "bytes")) {
            n = j
          }
          var q = new g(n, j);
          q.ef((function(a) {
            var c = a * q.Aa,
              e = (a + 1) * q.Aa - 1,
              e = Math.min(e, j - 1);
            if (typeof q.H[a] === "undefined") {
              var d = q.H;
              c > e && Ha(Error("invalid range (" + c + ", " + e + ") or no bytes requested!"));
              e > j - 1 && Ha(Error("only " + j + " bytes available! programmer error!"));
              var f = new XMLHttpRequest;
              f.open("GET", b, U);
              j !== n && f.setRequestHeader("Range", "bytes=" + c + "-" + e);
              if (typeof Uint8Array != "undefined") {
                f.responseType = "arraybuffer"
              }
              f.overrideMimeType && f.overrideMimeType("text/plain; charset=x-user-defined");
              f.send(S);
              f.status >= 200 && f.status < 300 || f.status === 304 || Ha(Error("Couldn't load " + b + ". Status: " + f.status));
              c = f.response !== bb ? new Uint8Array(f.response || []) : Aa(f.responseText || "", Q);
              d[a] = c
            }
            typeof q.H[a] === "undefined" && Ha(Error("doXHR failed!"));
            return q.H[a]
          }));
          g = {
            d: U,
            b: q
          }
        } else {
          g = {
            d: U,
            url: b
          }
        }
        return B.I(a, c, g, d, f)
      }),
      Fe: (function(a, c, b, d, f, g, h, j) {
        function l(b) {
          function m(b) {
            j || B.t(a, c, b, d, f);
            g && g();
            Mc("cp " + n)
          }
          var q = U;
          x.preloadPlugins.forEach((function(a) {
            if (!q && a.canHandle(n)) {
              a.handle(b, n, m, (function() {
                h && h();
                Mc("cp " + n)
              }));
              q = Q
            }
          }));
          q || m(b)
        }
        ba.Ie();
        var n = B.Se([a, c], Q);
        od("cp " + n);
        typeof b == "string" ? ba.ze(b, (function(a) {
          l(a)
        }), h) : l(b)
      }),
      Ee: (function(a, c, b, d, f) {
        return B.I(a, c, {
          d: U,
          link: b
        }, d, f)
      }),
      u: (function(a, c, b, d) {
        !b && !d && Ha(Error("A device must have at least one callback defined."));
        return B.I(a, c, {
          d: Q,
          input: b,
          j: d
        }, Boolean(b), Boolean(d))
      }),
      Ke: (function(a) {
        if (a.d || a.f || a.link || a.b) {
          return Q
        }
        var c = Q;
        typeof XMLHttpRequest !== "undefined" && Ha(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));
        if (x.read) {
          try {
            a.b = Aa(x.read(a.url), Q)
          } catch (b) {
            c = U
          }
        } else {
          Ha(Error("Cannot load without read() or XMLHttpRequest."))
        }
        c || P(L.r);
        return c
      }),
      Fa: (function() {
        if (!B.root) {
          B.root = {
            ha: Q,
            write: Q,
            f: Q,
            d: U,
            timestamp: Date.now(),
            Ne: 1,
            b: {}
          }
        }
      }),
      w: (function(a, c, b) {
        function d(a) {
          if (a === S || a === 10) {
            c.O(c.buffer.join(""));
            c.buffer = []
          } else {
            c.buffer.push(j.La(a))
          }
        }
        Ca(!B.w.ea, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        B.w.ea = Q;
        B.Fa();
        var a = a || x.stdin,
          c = c || x.stdout,
          b = b || x.stderr,
          f = Q,
          g = Q,
          h = Q;
        if (!a) {
          f = U;
          a = (function() {
            if (!a.$ || !a.$.length) {
              var b;
              if (typeof window != "undefined" && typeof window.prompt == "function") {
                b = window.prompt("Input: ");
                b === S && (b = String.fromCharCode(0))
              } else {
                typeof readline == "function" && (b = readline())
              }
              b || (b = "");
              a.$ = Aa(b + "\n", Q)
            }
            return a.$.shift()
          })
        }
        var j = new H.S;
        if (!c) {
          g = U;
          c = d
        }
        if (!c.O) {
          c.O = x.print
        }
        if (!c.buffer) {
          c.buffer = []
        }
        if (!b) {
          h = U;
          b = d
        }
        if (!b.O) {
          b.O = x.print
        }
        if (!b.buffer) {
          b.buffer = []
        }
        try {
          B.J("/", "tmp", Q, Q)
        } catch (m) {}
        var n = B.J("/", "dev", Q, Q),
          q = B.u(n, "stdin", a),
          p = B.u(n, "stdout", S, c),
          b = B.u(n, "stderr", S, b);
        B.u(n, "tty", a, c);
        B.a[1] = {
          path: "/dev/stdin",
          object: q,
          position: 0,
          p: Q,
          q: U,
          M: U,
          fa: !f,
          error: U,
          v: U,
          g: []
        };
        B.a[2] = {
          path: "/dev/stdout",
          object: p,
          position: 0,
          p: U,
          q: Q,
          M: U,
          fa: !g,
          error: U,
          v: U,
          g: []
        };
        B.a[3] = {
          path: "/dev/stderr",
          object: b,
          position: 0,
          p: U,
          q: Q,
          M: U,
          fa: !h,
          error: U,
          v: U,
          g: []
        };
        Lb = s([1], "void*", dc);
        ob = s([2], "void*", dc);
        Va = s([3], "void*", dc);
        B.Da("/", "dev/shm/tmp", Q, Q);
        for (f = B.a.length; f < Math.max(Lb, ob, Va) + 4; f++) {
          B.a[f] = S
        }
        B.a[Lb] = B.a[1];
        B.a[ob] = B.a[2];
        B.a[Va] = B.a[3];
        s([s([0, 0, 0, 0, Lb, 0, 0, 0, ob, 0, 0, 0, Va, 0, 0, 0], "void*", l)], "void*", l)
      }),
      Ze: (function() {
        if (B.w.ea) {
          B.a[2] && B.a[2].object.j.buffer.length > 0 && B.a[2].object.j(10);
          B.a[3] && B.a[3].object.j.buffer.length > 0 && B.a[3].object.j(10)
        }
      }),
      Wg: (function(a) {
        a.substr(0, 2) == "./" && (a = a.substr(2));
        return a
      }),
      Hg: (function(a) {
        a = B.G(a);
        (!a.N || !a.K) && Ha("Invalid path " + a);
        delete a.z.b[a.name]
      })
    },
    be = {
      1: "Operation not permitted",
      2: "No such file or directory",
      3: "No such process",
      4: "Interrupted system call",
      5: "Input/output error",
      6: "No such device or address",
      8: "Exec format error",
      9: "Bad file descriptor",
      10: "No child processes",
      11: "Resource temporarily unavailable",
      12: "Cannot allocate memory",
      13: "Permission denied",
      14: "Bad address",
      16: "Device or resource busy",
      17: "File exists",
      18: "Invalid cross-device link",
      19: "No such device",
      20: "Not a directory",
      21: "Is a directory",
      22: "Invalid argument",
      23: "Too many open files in system",
      24: "Too many open files",
      25: "Inappropriate ioctl for device",
      26: "Text file busy",
      27: "File too large",
      28: "No space left on device",
      29: "Illegal seek",
      30: "Read-only file system",
      31: "Too many links",
      32: "Broken pipe",
      33: "Numerical argument out of domain",
      34: "Numerical result out of range",
      35: "Resource deadlock avoided",
      36: "File name too long",
      37: "No locks available",
      38: "Function not implemented",
      39: "Directory not empty",
      40: "Too many levels of symbolic links",
      42: "No message of desired type",
      43: "Identifier removed",
      60: "Device not a stream",
      61: "No data available",
      62: "Timer expired",
      63: "Out of streams resources",
      67: "Link has been severed",
      71: "Protocol error",
      72: "Multihop attempted",
      74: "Bad message",
      75: "Value too large for defined data type",
      84: "Invalid or incomplete multibyte or wide character",
      88: "Socket operation on non-socket",
      89: "Destination address required",
      90: "Message too long",
      91: "Protocol wrong type for socket",
      92: "Protocol not available",
      93: "Protocol not supported",
      95: "Operation not supported",
      97: "Address family not supported by protocol",
      98: "Address already in use",
      99: "Cannot assign requested address",
      100: "Network is down",
      101: "Network is unreachable",
      102: "Network dropped connection on reset",
      103: "Software caused connection abort",
      104: "Connection reset by peer",
      105: "No buffer space available",
      106: "Transport endpoint is already connected",
      107: "Transport endpoint is not connected",
      110: "Connection timed out",
      111: "Connection refused",
      113: "No route to host",
      114: "Operation already in progress",
      115: "Operation now in progress",
      116: "Stale NFS file handle",
      122: "Disk quota exceeded",
      125: "Operation canceled",
      130: "Owner died",
      131: "State not recoverable"
    },
    Sd = {
      V: 44,
      Ta: 0,
      Ra: 4,
      Pa: 8,
      Qa: 12,
      Sa: 16,
      Wa: 20,
      Ua: 24,
      Va: 28,
      gf: 32,
      ff: 36,
      hf: 40
    },
    Rd = 0,
    Td = {},
    gd = S,
    Ef = S,
    Df = S,
    Ff = S,
    Ye = xc,
    Sf = of,
    fe = S,
    ab = {},
    ba = {
      i: {
        df: S,
        Ma: U,
        paused: U,
        Sg: [],
        pause: (function() {
          ba.i.Ma = Q
        }),
        cf: (function() {
          if (ba.i.paused) {
            ba.i.paused = U;
            ba.i.df()
          }
          ba.i.Ma = U
        }),
        updateStatus: (function() {
          if (x.setStatus) {
            var a = x.statusMessage || "Please wait...",
              c = ba.i.Tg,
              b = ba.i.Ig;
            c ? c < b ? x.setStatus(a + " (" + (b - c) + "/" + b + ")") : x.setStatus(a) : x.setStatus("")
          }
        })
      },
      Xe: U,
      Ue: [],
      Zg: [],
      Ie: (function() {
        function a(b) {
          return {
            jpg: "image/jpeg",
            png: "image/png",
            bmp: "image/bmp",
            ogg: "audio/ogg",
            wav: "audio/wav",
            mp3: "audio/mpeg"
          }[b.substr(-3)]
        }
        if (!ba.Je) {
          ba.Je = Q;
          try {
            new Blob;
            ba.L = Q
          } catch (c) {
            ba.L = U;
            console.log("warning: no blob constructor, cannot create blobs with mimetypes")
          }
          ba.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !ba.L ? console.log("warning: no BlobBuilder") : S;
          ba.R = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : console.log("warning: cannot create object URLs");
          x.preloadPlugins || (x.preloadPlugins = []);
          x.preloadPlugins.push({
            canHandle: (function(a) {
              return a.substr(-4) in {
                ".jpg": 1,
                ".png": 1,
                ".bmp": 1
              }
            }),
            handle: (function(b, c, f, g) {
              var h = S;
              if (ba.L) {
                try {
                  h = new Blob([b], {
                    type: a(c)
                  })
                } catch (j) {
                  H.A("Blob constructor present but fails: " + j + "; falling back to blob builder")
                }
              }
              if (!h) {
                h = new ba.BlobBuilder;
                h.append((new Uint8Array(b)).buffer);
                h = h.getBlob()
              }
              var l = ba.R.createObjectURL(h);
              Ca(typeof l == "string", "createObjectURL must return a url as a string");
              var n = new Image;
              n.onload = (function() {
                Ca(n.complete, "Image " + c + " could not be decoded");
                var a = document.createElement("canvas");
                a.width = n.width;
                a.height = n.height;
                a.getContext("2d").drawImage(n, 0, 0);
                x.preloadedImages[c] = a;
                ba.R.revokeObjectURL(l);
                f && f(b)
              });
              n.onerror = (function() {
                console.log("Image " + l + " could not be decoded");
                g && g()
              });
              n.src = l
            })
          });
          x.preloadPlugins.push({
            canHandle: (function(a) {
              return a.substr(-4) in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
              }
            }),
            handle: (function(b, c, f, g) {
              function h(a) {
                if (!l) {
                  l = Q;
                  x.preloadedAudios[c] = a;
                  f && f(b)
                }
              }

              function j() {
                if (!l) {
                  l = Q;
                  x.preloadedAudios[c] = new Audio;
                  g && g()
                }
              }
              var l = U;
              if (ba.L) {
                try {
                  var n = new Blob([b], {
                    type: a(c)
                  })
                } catch (q) {
                  return j()
                }
                n = ba.R.createObjectURL(n);
                Ca(typeof n == "string", "createObjectURL must return a url as a string");
                var p = new Audio;
                p.addEventListener("canplaythrough", (function() {
                  h(p)
                }), U);
                p.onerror = (function() {
                  if (!l) {
                    console.log("warning: browser could not fully decode audio " + c + ", trying slower base64 approach");
                    for (var a = "", e = 0, f = 0, g = 0; g < b.length; g++) {
                      e = e << 8 | b[g];
                      for (f = f + 8; f >= 6;) {
                        var i = e >> f - 6 & 63,
                          f = f - 6,
                          a = a + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [i]
                      }
                    }
                    if (f == 2) {
                      a = a + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(e & 3) << 4];
                      a = a + "=="
                    } else {
                      if (f == 4) {
                        a = a + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(e & 15) << 2];
                        a = a + "="
                      }
                    }
                    p.src = "data:audio/x-" + c.substr(-3) + ";base64," + a;
                    h(p)
                  }
                });
                p.src = n;
                setTimeout((function() {
                  h(p)
                }), 1e4)
              } else {
                return j()
              }
            })
          })
        }
      }),
      Fg: (function(a, c, b) {
        try {
          var d = a.getContext(c ? "experimental-webgl" : "2d");
          d || Ha(":(")
        } catch (f) {
          x.print("Could not create canvas - " + f);
          return S
        }
        if (c) {
          a.style.backgroundColor = "black";
          a.addEventListener("webglcontextlost", (function() {
            alert("WebGL context lost. You will need to reload the page.")
          }), U)
        }
        if (b) {
          x.Gg = d;
          x.Yg = c;
          ba.Ue.forEach((function(a) {
            a()
          }))
        }
        return d
      }),
      ia: (function() {
        function a() {
          var c = U;
          if ((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement) === b) {
            b.$e = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock;
            b.$e();
            c = Q
          }
          if (x.onFullScreen) {
            x.onFullScreen(c)
          }
        }

        function c() {
          ba.Xe = document.pointerLockElement === b || document.mozPointerLockElement === b || document.webkitPointerLockElement === b
        }
        var b = x.canvas;
        document.addEventListener("fullscreenchange", a, U);
        document.addEventListener("mozfullscreenchange", a, U);
        document.addEventListener("webkitfullscreenchange", a, U);
        document.addEventListener("pointerlockchange", c, U);
        document.addEventListener("mozpointerlockchange", c, U);
        document.addEventListener("webkitpointerlockchange", c, U);
        b.ia = b.requestFullScreen || b.mozRequestFullScreen || (b.webkitRequestFullScreen ? (function() {
          b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }) : S);
        b.ia()
      }),
      requestAnimationFrame: (function(a) {
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout
        }
        window.requestAnimationFrame(a)
      }),
      Mg: (function(a) {
        return a.movementX || a.mozMovementX || a.webkitMovementX || 0
      }),
      Ng: (function(a) {
        return a.movementY || a.mozMovementY || a.webkitMovementY || 0
      }),
      kf: (function(a, c, b) {
        var d = new XMLHttpRequest;
        d.open("GET", a, Q);
        d.responseType = "arraybuffer";
        d.onload = (function() {
          d.status == 200 ? c(d.response) : b()
        });
        d.onerror = b;
        d.send(S)
      }),
      ze: (function(a, c, b) {
        ba.kf(a, (function(b) {
          Ca(b, 'Loading data file "' + a + '" failed (no arrayBuffer).');
          c(new Uint8Array(b));
          Mc("al " + a)
        }), (function() {
          b ? b() : Ha('Loading data file "' + a + '" failed.')
        }));
        od("al " + a)
      }),
      bf: [],
      jf: (function() {
        var a = x.canvas;
        ba.bf.forEach((function(c) {
          c(a.width, a.height)
        }))
      }),
      Ug: (function(a, c, b) {
        var d = x.canvas;
        d.width = a;
        d.height = c;
        b || ba.jf()
      })
    };
  Mf.unshift({
    ba: (function() {
      !x.noFSInit && !B.w.ea && B.w()
    })
  });
  Gf.push({
    ba: (function() {
      B.Ka = U
    })
  });
  ce.push({
    ba: (function() {
      B.Ze()
    })
  });
  x.FS_createFolder = B.J;
  x.FS_createPath = B.Da;
  x.FS_createDataFile = B.t;
  x.FS_createPreloadedFile = B.Fe;
  x.FS_createLazyFile = B.De;
  x.FS_createLink = B.Ee;
  x.FS_createDevice = B.u;
  P(0);
  var ge = ab,
    lb, Qb;
  fe === S ? (ab.USER = "root", ab.PATH = "/", ab.PWD = "/", ab.HOME = "/home/emscripten", ab.LANG = "en_US.UTF-8", ab._ = "./this.program", lb = s(1024, "i8", l), Qb = s(256, "i8*", l), a[Qb >> 2] = lb, fe = s([Qb], "i8**", l)) : (Qb = a[fe >> 2], lb = a[Qb >> 2]);
  var jd = [],
    he = 0,
    kd;
  for (kd in ge) {
    if ("string" === typeof ge[kd]) {
      var fc = kd + "=" + ge[kd];
      jd.push(fc);
      he += fc.length
    }
  }
  1024 < he && Ha(Error("Environment size exceeded TOTAL_ENV_SIZE!"));
  for (var ld = 0; ld < jd.length; ld++) {
    for (var fc = jd[ld], Jc = 0; Jc < fc.length; Jc++) {
      j[lb + Jc] = fc.charCodeAt(Jc)
    }
    j[lb + Jc] = 0;
    a[Qb + 4 * ld >> 2] = lb;
    lb += fc.length + 1
  }
  a[Qb + 4 * jd.length >> 2] = 0;
  x.requestFullScreen = (function() {
    ba.ia()
  });
  x.requestAnimationFrame = (function(a) {
    ba.requestAnimationFrame(a)
  });
  x.pauseMainLoop = (function() {
    ba.i.pause()
  });
  x.resumeMainLoop = (function() {
    ba.i.cf()
  });
  x.Be = (function(a) {
    function c() {
      for (var a = 0; a < 3; a++) {
        d.push(0)
      }
    }
    var b = a.length + 1,
      d = [s(Aa("/bin/this.program"), "i8", l)];
    c();
    for (var f = 0; f < b - 1; f = f + 1) {
      d.push(s(Aa(a[f]), "i8", l));
      c()
    }
    d.push(0);
    d = s(d, "i32", l);
    try {
      return td(b, d)
    } catch (g) {
      if (g.name == "ExitStatus") {
        return g.status
      }
      Ha(g)
    }
  });
  var z, C, Te, Ve, lc, N, Yd, D, za, uc, nc, Sc, ud, vd, wd, q, na;
  g.xe = s([67, 79, 78, 86, 70, 77, 84, 0, 79, 70, 77, 84, 0, 70, 83, 0, 42, 79, 70, 83, 0, 79, 82, 83, 0, 82, 83, 0, 42, 82, 84, 0, 70, 73, 76, 69, 78, 65, 77, 69, 0, 83, 85, 66, 83, 69, 80, 0, 36, 0, 42, 65, 82, 71, 73, 78, 68, 0, 65, 82, 71, 67, 0, 65, 82, 71, 86, 0, 69, 82, 82, 78, 79, 0, 70, 78, 82, 0, 78, 82, 0, 78, 70, 0, 42, 73, 71, 78, 79, 82, 69, 67, 65, 83, 69, 0, 42, 69, 78, 86, 73, 82, 79, 78, 0, 0, 0], "i8", l);
  g.ya = s([37, 46, 54, 103, 0, 37, 46, 54, 103, 0, 32, 0, 32, 0, 10, 0, 10, 0, 0, 0, 28, 0, 0, 255, 0], "i8", l);
  z = s(116, "i8", l);
  C = s(336, "i8", l);
  g.Zb = s([47, 100, 101, 118, 47, 115, 116, 100, 105, 110, 0], "i8", l);
  g.zc = s([47, 100, 101, 118, 47, 115, 116, 100, 111, 117, 116, 0], "i8", l);
  g.Yc = s([47, 100, 101, 118, 47, 115, 116, 100, 101, 114, 114, 0], "i8", l);
  g.jb = s([99, 109, 100, 46, 32, 108, 105, 110, 101, 0], "i8", l);
  g.xb = s([119, 97, 114, 110, 105, 110, 103, 58, 32, 111, 112, 116, 105, 111, 110, 32, 45, 87, 32, 105, 115, 32, 105, 103, 110, 111, 114, 101, 100, 0], "i8", l);
  g.Fb = s([97, 119, 107, 0], "i8", l);
  g.Qb = s([37, 115, 58, 37, 105, 58, 32, 37, 115, 0], "i8", l);
  g.Ub = s([10, 10, 0], "i8", l);
  g.ec = s([100, 105, 111, 117, 120, 88, 0], "i8", l);
  g.ic = s([101, 69, 102, 103, 71, 0], "i8", l);
  g.fb = s([73, 110, 118, 97, 108, 105, 100, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 114, 0], "i8", l);
  g.nc = s([112, 111, 112, 101, 110, 0], "i8", l);
  g.qc = s([97, 0], "i8", l);
  g.gb = s([78, 111, 116, 32, 97, 110, 32, 97, 114, 114, 97, 121, 0], "i8", l);
  g.qa = s([80, 111, 115, 115, 105, 98, 108, 101, 32, 115, 121, 110, 116, 97, 120, 32, 101, 114, 114, 111, 114, 0], "i8", l);
  g.ib = s([67, 97, 108, 108, 32, 116, 111, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0], "i8", l);
  g.T = s([77, 97, 116, 104, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 115, 32, 110, 111, 116, 32, 99, 111, 109, 112, 105, 108, 101, 100, 32, 105, 110, 0], "i8", l);
  g.uc = s([37, 115, 37, 115, 37, 115, 0], "i8", l);
  g.pa = s([68, 105, 118, 105, 115, 105, 111, 110, 32, 98, 121, 32, 122, 101, 114, 111, 0], "i8", l);
  g.hb = s([84, 111, 111, 32, 102, 101, 119, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 102, 111, 114, 32, 98, 117, 105, 108, 116, 105, 110, 0], "i8", l);
  g.Bg = s([37, 97, 32, 37, 98, 32, 37, 100, 32, 37, 72, 58, 37, 77, 58, 37, 83, 32, 37, 90, 32, 37, 89, 0], "i8", l);
  g.Ac = s([82, 83, 84, 65, 82, 84, 0], "i8", l);
  g.Dc = s([82, 76, 69, 78, 71, 84, 72, 0], "i8", l);
  g.Hc = s([37, 117, 32, 37, 117, 32, 37, 117, 32, 37, 117, 32, 37, 117, 32, 37, 117, 32, 37, 100, 0], "i8", l);
  g.eb = s([73, 110, 116, 101, 114, 110, 97, 108, 32, 101, 114, 114, 111, 114, 0], "i8", l);
  g.Mc = s([37, 42, 120, 32, 102, 111, 114, 109, 97, 116, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0], "i8", l);
  g.Pc = s([69, 109, 112, 116, 121, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0], "i8", l);
  g.C = s([85, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 116, 111, 107, 101, 110, 0], "i8", l);
  g.U = s([85, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 0], "i8", l);
  g.we = s([1, 40, 255, 1, 41, 255, 1, 47, 255, 2, 62, 62, 1, 62, 1, 124, 255, 2, 43, 43, 2, 45, 45, 255, 2, 43, 43, 2, 45, 45, 1, 36, 255, 2, 61, 61, 1, 61, 2, 43, 61, 2, 45, 61, 2, 42, 61, 2, 47, 61, 2, 37, 61, 2, 94, 61, 1, 43, 1, 45, 3, 42, 42, 61, 2, 42, 42, 1, 47, 1, 37, 1, 94, 1, 42, 2, 33, 61, 2, 62, 61, 2, 60, 61, 1, 62, 1, 60, 2, 33, 126, 1, 126, 2, 38, 38, 2, 124, 124, 1, 63, 1, 58, 255, 2, 105, 110, 255, 1, 44, 255, 1, 124, 255, 1, 43, 1, 45, 1, 33, 255, 1, 93, 255, 1, 123, 255, 1, 125, 255, 1, 59, 255, 1, 10, 255, 2, 105, 102, 2, 100, 111, 3, 102, 111, 114, 5, 98, 114, 101, 97, 107, 8, 99, 111, 110, 116, 105, 110, 117, 101, 6, 100, 101, 108, 101, 116, 101, 5, 112, 114, 105, 110, 116, 6, 112, 114, 105, 110, 116, 102, 4, 110, 101, 120, 116, 8, 110, 101, 120, 116, 102, 105, 108, 101, 6, 114, 101, 116, 117, 114, 110, 4, 101, 120, 105, 116, 255, 5, 119, 104, 105, 108, 101, 255, 4, 101, 108, 115, 101, 255, 3, 97, 110, 100, 5, 99, 111, 109, 112, 108, 6, 108, 115, 104, 105, 102, 116, 2, 111, 114, 6, 114, 115, 104, 105, 102, 116, 3, 120, 111, 114, 5, 99, 108, 111, 115, 101, 6, 115, 121, 115, 116, 101, 109, 6, 102, 102, 108, 117, 115, 104, 5, 97, 116, 97, 110, 50, 3, 99, 111, 115, 3, 101, 120, 112, 3, 105, 110, 116, 3, 108, 111, 103, 4, 114, 97, 110, 100, 3, 115, 105, 110, 4, 115, 113, 114, 116, 5, 115, 114, 97, 110, 100, 6, 103, 101, 110, 115, 117, 98, 4, 103, 115, 117, 98, 5, 105, 110, 100, 101, 120, 6, 108, 101, 110, 103, 116, 104, 5, 109, 97, 116, 99, 104, 5, 115, 112, 108, 105, 116, 7, 115, 112, 114, 105, 110, 116, 102, 3, 115, 117, 98, 6, 115, 117, 98, 115, 116, 114, 7, 115, 121, 115, 116, 105, 109, 101, 8, 115, 116, 114, 102, 116, 105, 109, 101, 6, 109, 107, 116, 105, 109, 101, 7, 116, 111, 108, 111, 119, 101, 114, 7, 116, 111, 117, 112, 112, 101, 114, 255, 7, 103, 101, 116, 108, 105, 110, 101, 255, 4, 102, 117, 110, 99, 8, 102, 117, 110, 99, 116, 105, 111, 110, 255, 5, 66, 69, 71, 73, 78, 255, 3, 69, 78, 68, 0], "i8", l);
  Te = s([0, 0, 0, 0, 0, 0, 0, 0, 8448, 0, 0, 0, 655457, 0, 0, 0, 655479, 0, 0, 0, 655484, 0, 0, 0, 151135856, 0, 0, 0, 151135853, 0, 0, 0, 151135824, 0, 0, 0, 151135821, 0, 0, 0, 84023040, 0, 0, 0, 654513157, 0, 0, 0, 1241718528, 0, 0, 0, 1242767915, 0, 0, 0, 1242767917, 0, 0, 0, 1242767914, 0, 0, 0, 1242767919, 0, 0, 0, 1242767909, 0, 0, 0, 1242767910, 0, 0, 0, 487788587, 0, 0, 0, 487788589, 0, 0, 0, 1242767910, 0, 0, 0, 252907558, 0, 0, 0, 420679727, 0, 0, 0, 420679717, 0, 0, 0, 252907558, 0, 0, 0, 420679722, 0, 0, 0, 654513156, 0, 0, 0, 654513155, 0, 0, 0, 654513152, 0, 0, 0, 654513153, 0, 0, 0, 654513154, 0, 0, 0, 755310113, 0, 0, 0, 755310206, 0, 0, 0, 922819584, 0, 0, 0, 989928704, 0, 0, 0, 1073816895, 0, 0, 0, 1124078138, 0, 0, 0, 822549248, 0, 0, 0, 1343165184, 0, 0, 0, 621223936, 0, 0, 0, 318907947, 0, 0, 0, 318907949, 0, 0, 0, 318907937, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12288, 0, 0, 0, 12544, 0, 0, 0, 12800, 0, 0, 0, 2048, 0, 0, 0, 2304, 0, 0, 0, 65792, 0, 0, 0, 1024, 0, 0, 0, 1280, 0, 0, 0, 2816, 0, 0, 0, 3072, 0, 0, 0, 74496, 0, 0, 0, 1116672, 0, 0, 0, 13056, 0, 0, 0, 0, 0, 0, 0, -2097147636, 0, 0, 0, 1090523405, 0, 0, 0, -2097147634, 0, 0, 0, -2097147633, 0, 0, 0, -2097147632, 0, 0, 0, -2097147631, 0, 0, 0, 333324, 0, 0, 0, 333322, 0, 0, 0, 333323, 0, 0, 0, -2097147648, 0, 0, 0, 1119746, 0, 0, 0, 1119747, 0, 0, 0, 1119744, 0, 0, 0, 1119748, 0, 0, 0, 5633, 0, 0, 0, 1119749, 0, 0, 0, 1119750, 0, 0, 0, 1119751, 0, 0, 0, -704638711, 0, 0, 0, -1241509622, 0, 0, 0, -1694494463, 0, 0, 0, 333321, 0, 0, 0, -1996484350, 0, 0, 0, -1962929917, 0, 0, 0, 9216, 0, 0, 0, -1241509621, 0, 0, 0, -1895821052, 0, 0, 0, 5640, 0, 0, 0, 184553733, 0, 0, 0, 184553734, 0, 0, 0, 1224741127, 0, 0, 0, 1224741128, 0, 0, 0, 465408, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], l);
  Ve = s([251, 0, 1021, 0, 4093, 0, 16381, 0, -15, 0], ["i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0], l);
  g.Kb = s([119, 0], "i8", l);
  g.Lb = s([99, 97, 110, 39, 116, 32, 111, 112, 101, 110, 32, 39, 37, 115, 39, 0], "i8", l);
  lc = s(12, "i8", l);
  g.s = s([111, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0], "i8", l);
  g.ve = s([115, 116, 97, 110, 100, 97, 114, 100, 32, 105, 110, 112, 117, 116, 0], "i8", l);
  g.e = s([97, 98, 101, 102, 110, 114, 116, 118, 92, 0, 7, 8, 27, 12, 10, 13, 9, 11, 92, 92], "i8", l);
  g.o = s([37, 115, 0], "i8", l);
  g.Eb = s([45, 0], "i8", l);
  g.Gb = s([98, 97, 100, 32, 114, 101, 103, 101, 120, 32, 39, 37, 115, 39, 58, 32, 37, 115, 0], "i8", l);
  g.ua = s([66, 117, 115, 121, 66, 111, 120, 65, 119, 107, 0], "i8", l);
  g.nd = s([40, 66, 117, 115, 121, 66, 111, 120, 32, 65, 87, 75, 32, 85, 115, 97, 103, 101, 41, 10, 0], "i8", l);
  g.W = s([70, 58, 118, 58, 102, 58, 87, 58, 0], "i8", l);
  g.Nd = s([105, 110, 116, 101, 114, 110, 97, 108, 32, 101, 114, 114, 111, 114, 32, 105, 110, 32, 102, 105, 120, 101, 100, 95, 103, 101, 116, 111, 112, 116, 51, 50, 0], "i8", l);
  g.Hb = s([105, 110, 118, 97, 108, 105, 100, 32, 99, 111, 109, 109, 97, 110, 100, 45, 108, 105, 110, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0], "i8", l);
  N = s([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], l);
  g.Tb = s([82, 69, 71, 95, 48, 120, 37, 120, 0], "i8", l);
  g.wb = s([48, 0], "i8", l);
  g.ra = s([37, 100, 0], "i8", l);
  g.Gc = s([82, 69, 71, 95, 78, 79, 77, 65, 84, 67, 72, 0], "i8", l);
  g.ad = s([114, 101, 103, 101, 120, 101, 99, 40, 41, 32, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 109, 97, 116, 99, 104, 0], "i8", l);
  g.od = s([82, 69, 71, 95, 66, 65, 68, 80, 65, 84, 0], "i8", l);
  g.Ad = s([105, 110, 118, 97, 108, 105, 100, 32, 114, 101, 103, 117, 108, 97, 114, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 0], "i8", l);
  g.Od = s([82, 69, 71, 95, 69, 67, 79, 76, 76, 65, 84, 69, 0], "i8", l);
  g.$d = s([105, 110, 118, 97, 108, 105, 100, 32, 99, 111, 108, 108, 97, 116, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 0], "i8", l);
  g.le = s([82, 69, 71, 95, 69, 67, 84, 89, 80, 69, 0], "i8", l);
  g.mb = s([105, 110, 118, 97, 108, 105, 100, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 99, 108, 97, 115, 115, 0], "i8", l);
  g.ub = s([82, 69, 71, 95, 69, 69, 83, 67, 65, 80, 69, 0], "i8", l);
  g.zb = s([116, 114, 97, 105, 108, 105, 110, 103, 32, 98, 97, 99, 107, 115, 108, 97, 115, 104, 32, 40, 92, 41, 0], "i8", l);
  g.Cb = s([82, 69, 71, 95, 69, 83, 85, 66, 82, 69, 71, 0], "i8", l);
  g.Ib = s([105, 110, 118, 97, 108, 105, 100, 32, 98, 97, 99, 107, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 110, 117, 109, 98, 101, 114, 0], "i8", l);
  g.Mb = s([82, 69, 71, 95, 69, 66, 82, 65, 67, 75, 0], "i8", l);
  g.Ob = s([98, 114, 97, 99, 107, 101, 116, 115, 32, 40, 91, 32, 93, 41, 32, 110, 111, 116, 32, 98, 97, 108, 97, 110, 99, 101, 100, 0], "i8", l);
  g.Rb = s([82, 69, 71, 95, 69, 80, 65, 82, 69, 78, 0], "i8", l);
  g.Vb = s([112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 32, 110, 111, 116, 32, 98, 97, 108, 97, 110, 99, 101, 100, 0], "i8", l);
  g.Xb = s([82, 69, 71, 95, 69, 66, 82, 65, 67, 69, 0], "i8", l);
  g.$b = s([98, 114, 97, 99, 101, 115, 32, 110, 111, 116, 32, 98, 97, 108, 97, 110, 99, 101, 100, 0], "i8", l);
  g.bc = s([82, 69, 71, 95, 66, 65, 68, 66, 82, 0], "i8", l);
  g.gc = s([105, 110, 118, 97, 108, 105, 100, 32, 114, 101, 112, 101, 116, 105, 116, 105, 111, 110, 32, 99, 111, 117, 110, 116, 40, 115, 41, 0], "i8", l);
  g.jc = s([82, 69, 71, 95, 69, 82, 65, 78, 71, 69, 0], "i8", l);
  g.lc = s([105, 110, 118, 97, 108, 105, 100, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 114, 97, 110, 103, 101, 0], "i8", l);
  g.oc = s([82, 69, 71, 95, 69, 83, 80, 65, 67, 69, 0], "i8", l);
  g.sc = s([82, 69, 71, 95, 66, 65, 68, 82, 80, 84, 0], "i8", l);
  g.vc = s([114, 101, 112, 101, 116, 105, 116, 105, 111, 110, 45, 111, 112, 101, 114, 97, 116, 111, 114, 32, 111, 112, 101, 114, 97, 110, 100, 32, 105, 110, 118, 97, 108, 105, 100, 0], "i8", l);
  g.xc = s([82, 69, 71, 95, 69, 77, 80, 84, 89, 0], "i8", l);
  g.Bc = s([101, 109, 112, 116, 121, 32, 40, 115, 117, 98, 41, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 0], "i8", l);
  g.Ec = s([82, 69, 71, 95, 65, 83, 83, 69, 82, 84, 0], "i8", l);
  g.Jc = s([34, 99, 97, 110, 39, 116, 32, 104, 97, 112, 112, 101, 110, 34, 32, 45, 45, 32, 121, 111, 117, 32, 102, 111, 117, 110, 100, 32, 97, 32, 98, 117, 103, 0], "i8", l);
  g.Nc = s([82, 69, 71, 95, 73, 78, 86, 65, 82, 71, 0], "i8", l);
  g.Qc = s([105, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 111, 32, 114, 101, 103, 101, 120, 32, 114, 111, 117, 116, 105, 110, 101, 0], "i8", l);
  g.Tc = s([42, 42, 42, 32, 117, 110, 107, 110, 111, 119, 110, 32, 114, 101, 103, 101, 120, 112, 32, 101, 114, 114, 111, 114, 32, 99, 111, 100, 101, 32, 42, 42, 42, 0], "i8", l);
  Yd = s(10, "i8", l);
  g.dc = s([91, 58, 60, 58, 93, 93, 0], "i8", l);
  g.yb = s([91, 58, 62, 58, 93, 93, 0], "i8", l);
  g.fc = s([78, 85, 76, 0], "i8", l);
  g.Ic = s([83, 79, 72, 0], "i8", l);
  g.bd = s([83, 84, 88, 0], "i8", l);
  g.qd = s([69, 84, 88, 0], "i8", l);
  g.Cd = s([69, 79, 84, 0], "i8", l);
  g.Qd = s([69, 78, 81, 0], "i8", l);
  g.be = s([65, 67, 75, 0], "i8", l);
  g.ne = s([66, 69, 76, 0], "i8", l);
  g.ob = s([97, 108, 101, 114, 116, 0], "i8", l);
  g.vb = s([66, 83, 0], "i8", l);
  g.Ab = s([98, 97, 99, 107, 115, 112, 97, 99, 101, 0], "i8", l);
  g.Db = s([72, 84, 0], "i8", l);
  g.Jb = s([116, 97, 98, 0], "i8", l);
  g.Nb = s([76, 70, 0], "i8", l);
  g.Pb = s([110, 101, 119, 108, 105, 110, 101, 0], "i8", l);
  g.Sb = s([86, 84, 0], "i8", l);
  g.Wb = s([118, 101, 114, 116, 105, 99, 97, 108, 45, 116, 97, 98, 0], "i8", l);
  g.Yb = s([70, 70, 0], "i8", l);
  g.ac = s([102, 111, 114, 109, 45, 102, 101, 101, 100, 0], "i8", l);
  g.cc = s([67, 82, 0], "i8", l);
  g.hc = s([99, 97, 114, 114, 105, 97, 103, 101, 45, 114, 101, 116, 117, 114, 110, 0], "i8", l);
  g.kc = s([83, 79, 0], "i8", l);
  g.mc = s([83, 73, 0], "i8", l);
  g.pc = s([68, 76, 69, 0], "i8", l);
  g.rc = s([68, 67, 49, 0], "i8", l);
  g.tc = s([68, 67, 50, 0], "i8", l);
  g.wc = s([68, 67, 51, 0], "i8", l);
  g.yc = s([68, 67, 52, 0], "i8", l);
  g.Cc = s([78, 65, 75, 0], "i8", l);
  g.Fc = s([83, 89, 78, 0], "i8", l);
  g.Kc = s([69, 84, 66, 0], "i8", l);
  g.Oc = s([67, 65, 78, 0], "i8", l);
  g.Rc = s([69, 77, 0], "i8", l);
  g.Sc = s([83, 85, 66, 0], "i8", l);
  g.Uc = s([69, 83, 67, 0], "i8", l);
  g.Vc = s([73, 83, 52, 0], "i8", l);
  g.Wc = s([70, 83, 0], "i8", l);
  g.Xc = s([73, 83, 51, 0], "i8", l);
  g.Zc = s([71, 83, 0], "i8", l);
  g.$c = s([73, 83, 50, 0], "i8", l);
  g.cd = s([82, 83, 0], "i8", l);
  g.ed = s([73, 83, 49, 0], "i8", l);
  g.fd = s([85, 83, 0], "i8", l);
  g.va = s([115, 112, 97, 99, 101, 0], "i8", l);
  g.gd = s([101, 120, 99, 108, 97, 109, 97, 116, 105, 111, 110, 45, 109, 97, 114, 107, 0], "i8", l);
  g.hd = s([113, 117, 111, 116, 97, 116, 105, 111, 110, 45, 109, 97, 114, 107, 0], "i8", l);
  g.jd = s([110, 117, 109, 98, 101, 114, 45, 115, 105, 103, 110, 0], "i8", l);
  g.kd = s([100, 111, 108, 108, 97, 114, 45, 115, 105, 103, 110, 0], "i8", l);
  g.ld = s([112, 101, 114, 99, 101, 110, 116, 45, 115, 105, 103, 110, 0], "i8", l);
  g.md = s([97, 109, 112, 101, 114, 115, 97, 110, 100, 0], "i8", l);
  g.pd = s([97, 112, 111, 115, 116, 114, 111, 112, 104, 101, 0], "i8", l);
  g.rd = s([108, 101, 102, 116, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 0], "i8", l);
  g.sd = s([114, 105, 103, 104, 116, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 0], "i8", l);
  g.td = s([97, 115, 116, 101, 114, 105, 115, 107, 0], "i8", l);
  g.ud = s([112, 108, 117, 115, 45, 115, 105, 103, 110, 0], "i8", l);
  g.vd = s([99, 111, 109, 109, 97, 0], "i8", l);
  g.wd = s([104, 121, 112, 104, 101, 110, 0], "i8", l);
  g.xd = s([104, 121, 112, 104, 101, 110, 45, 109, 105, 110, 117, 115, 0], "i8", l);
  g.yd = s([112, 101, 114, 105, 111, 100, 0], "i8", l);
  g.zd = s([102, 117, 108, 108, 45, 115, 116, 111, 112, 0], "i8", l);
  g.Bd = s([115, 108, 97, 115, 104, 0], "i8", l);
  g.Ed = s([115, 111, 108, 105, 100, 117, 115, 0], "i8", l);
  g.Fd = s([122, 101, 114, 111, 0], "i8", l);
  g.Gd = s([111, 110, 101, 0], "i8", l);
  g.Hd = s([116, 119, 111, 0], "i8", l);
  g.Id = s([116, 104, 114, 101, 101, 0], "i8", l);
  g.Jd = s([102, 111, 117, 114, 0], "i8", l);
  g.Kd = s([102, 105, 118, 101, 0], "i8", l);
  g.Ld = s([115, 105, 120, 0], "i8", l);
  g.Md = s([115, 101, 118, 101, 110, 0], "i8", l);
  g.Pd = s([101, 105, 103, 104, 116, 0], "i8", l);
  g.Rd = s([110, 105, 110, 101, 0], "i8", l);
  g.Sd = s([99, 111, 108, 111, 110, 0], "i8", l);
  g.Td = s([115, 101, 109, 105, 99, 111, 108, 111, 110, 0], "i8", l);
  g.Ud = s([108, 101, 115, 115, 45, 116, 104, 97, 110, 45, 115, 105, 103, 110, 0], "i8", l);
  g.Vd = s([101, 113, 117, 97, 108, 115, 45, 115, 105, 103, 110, 0], "i8", l);
  g.Wd = s([103, 114, 101, 97, 116, 101, 114, 45, 116, 104, 97, 110, 45, 115, 105, 103, 110, 0], "i8", l);
  g.Xd = s([113, 117, 101, 115, 116, 105, 111, 110, 45, 109, 97, 114, 107, 0], "i8", l);
  g.Yd = s([99, 111, 109, 109, 101, 114, 99, 105, 97, 108, 45, 97, 116, 0], "i8", l);
  g.Zd = s([108, 101, 102, 116, 45, 115, 113, 117, 97, 114, 101, 45, 98, 114, 97, 99, 107, 101, 116, 0], "i8", l);
  g.ae = s([98, 97, 99, 107, 115, 108, 97, 115, 104, 0], "i8", l);
  g.ce = s([114, 101, 118, 101, 114, 115, 101, 45, 115, 111, 108, 105, 100, 117, 115, 0], "i8", l);
  g.de = s([114, 105, 103, 104, 116, 45, 115, 113, 117, 97, 114, 101, 45, 98, 114, 97, 99, 107, 101, 116, 0], "i8", l);
  g.ee = s([99, 105, 114, 99, 117, 109, 102, 108, 101, 120, 0], "i8", l);
  g.fe = s([99, 105, 114, 99, 117, 109, 102, 108, 101, 120, 45, 97, 99, 99, 101, 110, 116, 0], "i8", l);
  g.ge = s([117, 110, 100, 101, 114, 115, 99, 111, 114, 101, 0], "i8", l);
  g.he = s([108, 111, 119, 45, 108, 105, 110, 101, 0], "i8", l);
  g.ie = s([103, 114, 97, 118, 101, 45, 97, 99, 99, 101, 110, 116, 0], "i8", l);
  g.je = s([108, 101, 102, 116, 45, 98, 114, 97, 99, 101, 0], "i8", l);
  g.ke = s([108, 101, 102, 116, 45, 99, 117, 114, 108, 121, 45, 98, 114, 97, 99, 107, 101, 116, 0], "i8", l);
  g.me = s([118, 101, 114, 116, 105, 99, 97, 108, 45, 108, 105, 110, 101, 0], "i8", l);
  g.oe = s([114, 105, 103, 104, 116, 45, 98, 114, 97, 99, 101, 0], "i8", l);
  g.pe = s([114, 105, 103, 104, 116, 45, 99, 117, 114, 108, 121, 45, 98, 114, 97, 99, 107, 101, 116, 0], "i8", l);
  g.qe = s([116, 105, 108, 100, 101, 0], "i8", l);
  g.re = s([68, 69, 76, 0], "i8", l);
  D = s([0, 0, 0, 0, 0, E, 0, 0, 0, 0, 0, 0, 1, E, 0, 0, 0, 0, 0, 0, 2, E, 0, 0, 0, 0, 0, 0, 3, E, 0, 0, 0, 0, 0, 0, 4, E, 0, 0, 0, 0, 0, 0, 5, E, 0, 0, 0, 0, 0, 0, 6, E, 0, 0, 0, 0, 0, 0, 7, E, 0, 0, 0, 0, 0, 0, 7, E, 0, 0, 0, 0, 0, 0, 8, E, 0, 0, 0, 0, 0, 0, 8, E, 0, 0, 0, 0, 0, 0, 9, E, 0, 0, 0, 0, 0, 0, 9, E, 0, 0, 0, 0, 0, 0, 10, E, 0, 0, 0, 0, 0, 0, 10, E, 0, 0, 0, 0, 0, 0, 11, E, 0, 0, 0, 0, 0, 0, 11, E, 0, 0, 0, 0, 0, 0, 12, E, 0, 0, 0, 0, 0, 0, 12, E, 0, 0, 0, 0, 0, 0, 13, E, 0, 0, 0, 0, 0, 0, 13, E, 0, 0, 0, 0, 0, 0, 14, E, 0, 0, 0, 0, 0, 0, 15, E, 0, 0, 0, 0, 0, 0, 16, E, 0, 0, 0, 0, 0, 0, 17, E, 0, 0, 0, 0, 0, 0, 18, E, 0, 0, 0, 0, 0, 0, 19, E, 0, 0, 0, 0, 0, 0, 20, E, 0, 0, 0, 0, 0, 0, 21, E, 0, 0, 0, 0, 0, 0, 22, E, 0, 0, 0, 0, 0, 0, 23, E, 0, 0, 0, 0, 0, 0, 24, E, 0, 0, 0, 0, 0, 0, 25, E, 0, 0, 0, 0, 0, 0, 26, E, 0, 0, 0, 0, 0, 0, 27, E, 0, 0, 0, 0, 0, 0, 28, E, 0, 0, 0, 0, 0, 0, 28, E, 0, 0, 0, 0, 0, 0, 29, E, 0, 0, 0, 0, 0, 0, 29, E, 0, 0, 0, 0, 0, 0, 30, E, 0, 0, 0, 0, 0, 0, 30, E, 0, 0, 0, 0, 0, 0, 31, E, 0, 0, 0, 0, 0, 0, 31, E, 0, 0, 0, 0, 0, 0, 32, E, 0, 0, 0, 0, 0, 0, 33, E, 0, 0, 0, 0, 0, 0, 34, E, 0, 0, 0, 0, 0, 0, 35, E, 0, 0, 0, 0, 0, 0, 36, E, 0, 0, 0, 0, 0, 0, 37, E, 0, 0, 0, 0, 0, 0, 38, E, 0, 0, 0, 0, 0, 0, 39, E, 0, 0, 0, 0, 0, 0, 40, E, 0, 0, 0, 0, 0, 0, 41, E, 0, 0, 0, 0, 0, 0, 42, E, 0, 0, 0, 0, 0, 0, 43, E, 0, 0, 0, 0, 0, 0, 44, E, 0, 0, 0, 0, 0, 0, 45, E, 0, 0, 0, 0, 0, 0, 45, E, 0, 0, 0, 0, 0, 0, 46, E, 0, 0, 0, 0, 0, 0, 46, E, 0, 0, 0, 0, 0, 0, 47, E, 0, 0, 0, 0, 0, 0, 47, E, 0, 0, 0, 0, 0, 0, 48, E, 0, 0, 0, 0, 0, 0, 49, E, 0, 0, 0, 0, 0, 0, 50, E, 0, 0, 0, 0, 0, 0, 51, E, 0, 0, 0, 0, 0, 0, 52, E, 0, 0, 0, 0, 0, 0, 53, E, 0, 0, 0, 0, 0, 0, 54, E, 0, 0, 0, 0, 0, 0, 55, E, 0, 0, 0, 0, 0, 0, 56, E, 0, 0, 0, 0, 0, 0, 57, E, 0, 0, 0, 0, 0, 0, 58, E, 0, 0, 0, 0, 0, 0, 59, E, 0, 0, 0, 0, 0, 0, 60, E, 0, 0, 0, 0, 0, 0, 61, E, 0, 0, 0, 0, 0, 0, 62, E, 0, 0, 0, 0, 0, 0, 63, E, 0, 0, 0, 0, 0, 0, 64, E, 0, 0, 0, 0, 0, 0, 91, E, 0, 0, 0, 0, 0, 0, 92, E, 0, 0, 0, 0, 0, 0, 92, E, 0, 0, 0, 0, 0, 0, 93, E, 0, 0, 0, 0, 0, 0, 94, E, 0, 0, 0, 0, 0, 0, 94, E, 0, 0, 0, 0, 0, 0, 95, E, 0, 0, 0, 0, 0, 0, 95, E, 0, 0, 0, 0, 0, 0, 96, E, 0, 0, 0, 0, 0, 0, 123, E, 0, 0, 0, 0, 0, 0, 123, E, 0, 0, 0, 0, 0, 0, 124, E, 0, 0, 0, 0, 0, 0, 125, E, 0, 0, 0, 0, 0, 0, 125, E, 0, 0, 0, 0, 0, 0, 126, E, 0, 0, 0, 0, 0, 0, 127, E, 0, 0, 0, 0, 0, 0, 0, E, 0, 0], ["*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8", "*", 0, 0, 0, "i8", "i8", "i8", "i8"], l);
  za = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0], l);
  g.se = s([97, 108, 110, 117, 109, 0], "i8", l);
  g.te = s([97, 108, 112, 104, 97, 0], "i8", l);
  g.ue = s([98, 108, 97, 110, 107, 0], "i8", l);
  g.kb = s([99, 110, 116, 114, 108, 0], "i8", l);
  g.lb = s([100, 105, 103, 105, 116, 0], "i8", l);
  g.nb = s([103, 114, 97, 112, 104, 0], "i8", l);
  g.pb = s([108, 111, 119, 101, 114, 0], "i8", l);
  g.qb = s([112, 114, 105, 110, 116, 0], "i8", l);
  g.rb = s([112, 117, 110, 99, 116, 0], "i8", l);
  g.sb = s([117, 112, 112, 101, 114, 0], "i8", l);
  g.tb = s([120, 100, 105, 103, 105, 116, 0], "i8", l);
  g.sa = s([115, 104, 117, 116, 32, 117, 112, 32, 103, 99, 99, 0], "i8", l);
  uc = s(1, "i8", l);
  g.wa = s([114, 0], "i8", l);
  g.xa = s([10, 0], "i8", l);
  nc = s(4, "i8", l);
  Sc = s(4, "i8", l);
  ud = s([1], ["i32", 0, 0, 0], l);
  vd = s([63], ["i32", 0, 0, 0], l);
  wd = s(4, "i8", l);
  g.ta = s([45, 45, 0], "i8", l);
  g.Bb = s([80, 79, 83, 73, 88, 76, 89, 95, 67, 79, 82, 82, 69, 67, 84, 0], "i8", l);
  g.Lc = s([37, 115, 58, 32, 105, 110, 118, 97, 108, 105, 100, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 96, 45, 37, 99, 39, 10, 0], "i8", l);
  g.dd = s([37, 115, 58, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 114, 101, 113, 117, 105, 114, 101, 100, 32, 102, 111, 114, 32, 111, 112, 116, 105, 111, 110, 32, 96, 0], "i8", l);
  g.Dd = s([45, 37, 99, 39, 10, 0], "i8", l);
  q = s(468, "i8", l);
  na = s(24, "i8", l);
  a[N + 4 >> 2] = g.Gc | 0;
  a[N + 8 >> 2] = g.ad | 0;
  a[N + 16 >> 2] = g.od | 0;
  a[N + 20 >> 2] = g.Ad | 0;
  a[N + 28 >> 2] = g.Od | 0;
  a[N + 32 >> 2] = g.$d | 0;
  a[N + 40 >> 2] = g.le | 0;
  a[N + 44 >> 2] = g.mb | 0;
  a[N + 52 >> 2] = g.ub | 0;
  a[N + 56 >> 2] = g.zb | 0;
  a[N + 64 >> 2] = g.Cb | 0;
  a[N + 68 >> 2] = g.Ib | 0;
  a[N + 76 >> 2] = g.Mb | 0;
  a[N + 80 >> 2] = g.Ob | 0;
  a[N + 88 >> 2] = g.Rb | 0;
  a[N + 92 >> 2] = g.Vb | 0;
  a[N + 100 >> 2] = g.Xb | 0;
  a[N + 104 >> 2] = g.$b | 0;
  a[N + 112 >> 2] = g.bc | 0;
  a[N + 116 >> 2] = g.gc | 0;
  a[N + 124 >> 2] = g.jc | 0;
  a[N + 128 >> 2] = g.lc | 0;
  a[N + 136 >> 2] = g.oc | 0;
  a[N + 140 >> 2] = g.s | 0;
  a[N + 148 >> 2] = g.sc | 0;
  a[N + 152 >> 2] = g.vc | 0;
  a[N + 160 >> 2] = g.xc | 0;
  a[N + 164 >> 2] = g.Bc | 0;
  a[N + 172 >> 2] = g.Ec | 0;
  a[N + 176 >> 2] = g.Jc | 0;
  a[N + 184 >> 2] = g.Nc | 0;
  a[N + 188 >> 2] = g.Qc | 0;
  a[N + 196 >> 2] = uc | 0;
  a[N + 200 >> 2] = g.Tc | 0;
  a[D >> 2] = g.fc | 0;
  a[D + 8 >> 2] = g.Ic | 0;
  a[D + 16 >> 2] = g.bd | 0;
  a[D + 24 >> 2] = g.qd | 0;
  a[D + 32 >> 2] = g.Cd | 0;
  a[D + 40 >> 2] = g.Qd | 0;
  a[D + 48 >> 2] = g.be | 0;
  a[D + 56 >> 2] = g.ne | 0;
  a[D + 64 >> 2] = g.ob | 0;
  a[D + 72 >> 2] = g.vb | 0;
  a[D + 80 >> 2] = g.Ab | 0;
  a[D + 88 >> 2] = g.Db | 0;
  a[D + 96 >> 2] = g.Jb | 0;
  a[D + 104 >> 2] = g.Nb | 0;
  a[D + 112 >> 2] = g.Pb | 0;
  a[D + 120 >> 2] = g.Sb | 0;
  a[D + 128 >> 2] = g.Wb | 0;
  a[D + 136 >> 2] = g.Yb | 0;
  a[D + 144 >> 2] = g.ac | 0;
  a[D + 152 >> 2] = g.cc | 0;
  a[D + 160 >> 2] = g.hc | 0;
  a[D + 168 >> 2] = g.kc | 0;
  a[D + 176 >> 2] = g.mc | 0;
  a[D + 184 >> 2] = g.pc | 0;
  a[D + 192 >> 2] = g.rc | 0;
  a[D + 200 >> 2] = g.tc | 0;
  a[D + 208 >> 2] = g.wc | 0;
  a[D + 216 >> 2] = g.yc | 0;
  a[D + 224 >> 2] = g.Cc | 0;
  a[D + 232 >> 2] = g.Fc | 0;
  a[D + 240 >> 2] = g.Kc | 0;
  a[D + 248 >> 2] = g.Oc | 0;
  a[D + 256 >> 2] = g.Rc | 0;
  a[D + 264 >> 2] = g.Sc | 0;
  a[D + 272 >> 2] = g.Uc | 0;
  a[D + 280 >> 2] = g.Vc | 0;
  a[D + 288 >> 2] = g.Wc | 0;
  a[D + 296 >> 2] = g.Xc | 0;
  a[D + 304 >> 2] = g.Zc | 0;
  a[D + 312 >> 2] = g.$c | 0;
  a[D + 320 >> 2] = g.cd | 0;
  a[D + 328 >> 2] = g.ed | 0;
  a[D + 336 >> 2] = g.fd | 0;
  a[D + 344 >> 2] = g.va | 0;
  a[D + 352 >> 2] = g.gd | 0;
  a[D + 360 >> 2] = g.hd | 0;
  a[D + 368 >> 2] = g.jd | 0;
  a[D + 376 >> 2] = g.kd | 0;
  a[D + 384 >> 2] = g.ld | 0;
  a[D + 392 >> 2] = g.md | 0;
  a[D + 400 >> 2] = g.pd | 0;
  a[D + 408 >> 2] = g.rd | 0;
  a[D + 416 >> 2] = g.sd | 0;
  a[D + 424 >> 2] = g.td | 0;
  a[D + 432 >> 2] = g.ud | 0;
  a[D + 440 >> 2] = g.vd | 0;
  a[D + 448 >> 2] = g.wd | 0;
  a[D + 456 >> 2] = g.xd | 0;
  a[D + 464 >> 2] = g.yd | 0;
  a[D + 472 >> 2] = g.zd | 0;
  a[D + 480 >> 2] = g.Bd | 0;
  a[D + 488 >> 2] = g.Ed | 0;
  a[D + 496 >> 2] = g.Fd | 0;
  a[D + 504 >> 2] = g.Gd | 0;
  a[D + 512 >> 2] = g.Hd | 0;
  a[D + 520 >> 2] = g.Id | 0;
  a[D + 528 >> 2] = g.Jd | 0;
  a[D + 536 >> 2] = g.Kd | 0;
  a[D + 544 >> 2] = g.Ld | 0;
  a[D + 552 >> 2] = g.Md | 0;
  a[D + 560 >> 2] = g.Pd | 0;
  a[D + 568 >> 2] = g.Rd | 0;
  a[D + 576 >> 2] = g.Sd | 0;
  a[D + 584 >> 2] = g.Td | 0;
  a[D + 592 >> 2] = g.Ud | 0;
  a[D + 600 >> 2] = g.Vd | 0;
  a[D + 608 >> 2] = g.Wd | 0;
  a[D + 616 >> 2] = g.Xd | 0;
  a[D + 624 >> 2] = g.Yd | 0;
  a[D + 632 >> 2] = g.Zd | 0;
  a[D + 640 >> 2] = g.ae | 0;
  a[D + 648 >> 2] = g.ce | 0;
  a[D + 656 >> 2] = g.de | 0;
  a[D + 664 >> 2] = g.ee | 0;
  a[D + 672 >> 2] = g.fe | 0;
  a[D + 680 >> 2] = g.ge | 0;
  a[D + 688 >> 2] = g.he | 0;
  a[D + 696 >> 2] = g.ie | 0;
  a[D + 704 >> 2] = g.je | 0;
  a[D + 712 >> 2] = g.ke | 0;
  a[D + 720 >> 2] = g.me | 0;
  a[D + 728 >> 2] = g.oe | 0;
  a[D + 736 >> 2] = g.pe | 0;
  a[D + 744 >> 2] = g.qe | 0;
  a[D + 752 >> 2] = g.re | 0;
  a[za >> 2] = g.se | 0;
  a[za + 8 >> 2] = g.te | 0;
  a[za + 16 >> 2] = g.ue | 0;
  a[za + 24 >> 2] = g.kb | 0;
  a[za + 32 >> 2] = g.lb | 0;
  a[za + 40 >> 2] = g.nb | 0;
  a[za + 48 >> 2] = g.pb | 0;
  a[za + 56 >> 2] = g.qb | 0;
  a[za + 64 >> 2] = g.rb | 0;
  a[za + 72 >> 2] = g.va | 0;
  a[za + 80 >> 2] = g.sb | 0;
  a[za + 88 >> 2] = g.tb | 0;
  wb = [0, 0];
  x.FUNCTION_TABLE = wb;
  x.run = Nc;
  if (x.preInit) {
    for ("function" == typeof x.preInit && (x.preInit = [x.preInit]); 0 < x.preInit.length;) {
      x.preInit.pop()()
    }
  }
  Lc(Mf);
  var Nf = Q;
  x.noInitialRun && (Nf = U);
  if (Nf) {
    var Zf = Nc();
    x.print("Exit Status: " + Zf)
  }
  x.__run__ = Nc;
  var $f = (0, x.__run__)(),
    gc = {};
  gc.exit_code = $f;
  gc.stderr = x.Y;
  gc.stdout = x.Z;
  gc.input = ie;
  gc.program = Kc;
  return gc
};

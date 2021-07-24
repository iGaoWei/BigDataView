/* jQuery Flot Animator version 1.0.

Flot Animator is a free jQuery Plugin that will add fluid animations to Flot charts.

Copyright (c) 2012-2013 Chtiwi Malek
http://www.codicode.com/art/jquery_flot_animator.aspx

Licensed under Creative Commons Attribution 3.0 Unported License.
*/
$.extend({
    plotAnimator: function (e, t, n) {
        function h() {
            var e = o[0][0];
            var t = o[o.length - 1][0];
            var n = (t - e) / a;
            var r = [];
            r.push(o[0]);
            var i = 1;
            lPoint = o[0];
            nPoint = o[i];
            for (var s = e + n; s < t + n; s += n) {
                if (s > t) {
                    s = t
                }
                $("#m2").html(s);
                while (s > nPoint[0]) {
                    lPoint = nPoint;
                    nPoint = o[i++]
                }
                if (s == nPoint[0]) {
                    r.push([s, nPoint[1]]);
                    lPoint = nPoint;
                    nPoint = o[i++]
                } else {
                    var u = (nPoint[1] - lPoint[1]) / (nPoint[0] - lPoint[0]);
                    curV = u * s + (lPoint[1] - u * lPoint[0]);
                    r.push([s, curV])
                }
            }
            return r
        }

        function v() {
            var n = [];
            p++;
            switch (c) {
            case "left":
                n = d.slice(-1 * p);
                break;
            case "center":
                n = d.slice(d.length / 2 - p / 2, d.length / 2 + p / 2);
                break;
            default:
                n = d.slice(0, p);
                break
            }
            if (!u) {
                inV = n[0][0];
                laV = n[n.length - 1][0];
                n = [];
                for (var i = 0; i < o.length; i++) {
                    if (o[i][0] >= inV && o[i][0] <= laV) {
                        n.push(o[i])
                    }
                }
            }
            t[r].data = p < a ? n : o;
            g.setData(t);
            g.draw();
            if (p < a) {
                setTimeout(v, f / a)
            } else {
                e.trigger("animatorComplete")
            }
        }

        function m(i) {
            var s = [];
            s.push([i[0][0], Math.max.apply(Math, i.map(function (e) {
                return e[1]
            }))]);
            s.push([i[0][0], null]);
            s.push([i[0][0], Math.min.apply(Math, i.map(function (e) {
                return e[1]
            }))]);
            for (var o = 0; o < i.length; o++) {
                s.push([i[o][0], null])
            }
            t[r].data = s;
            return $.plot(e, t, n)
        }
        var r = 0;
        for (var i = 0; i < t.length; i++) {
            if (t[i].animator) {
                r = i
            }
        }
        var s = t[r];
        var o = s.data;
        var u = t[r].lines ? true : false;
        var a = t[r].animator && t[r].animator.steps || 135;
        var f = t[r].animator && t[r].animator.duration || 1e3;
        var l = t[r].animator && t[r].animator.start || 0;
        var c = t[r].animator && t[r].animator.direction || "right";
        var p = 0;
        var d = h();
        var g = m(o);
        setTimeout(v, l);
        return g
    }
})
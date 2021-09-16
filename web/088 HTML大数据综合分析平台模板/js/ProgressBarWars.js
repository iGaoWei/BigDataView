$.fn.extend({
    ProgressBarWars: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 6px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars1: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space1"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars2: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space2"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars3: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space3"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars4: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space4"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars5: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space5"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars6: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space6"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars7: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space7"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars8: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space8"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars9: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space9"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
$.fn.extend({
    ProgressBarWars10: function(a) {
        var b = this;
        var e = $(b).attr("id");
        var d = Date.now();
        var c = "";
        defaults = {
            porcentaje: "100",
            tiempo: 1000,
            color: "",
            estilo: "yoda",
            tamanio: "30%",
            alto: "6px"
        };
        var a = $.extend({}, defaults, a);
        if (a.color != "") {
            c = "<style>.color" + d + "{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ", 0 0 1px " + a.color + ";background-color: #fff;}</style>";
            a.estilo = "color" + d
        }
        $(b).before(c);
        if (a.flag) {
            $(b).append('<span class="barControl" style="width:' + a.tamanio + ';"><div class="barContro_space10"><span class="' + a.estilo + '" style="height: ' + a.alto + ';"  id="bar' + e + '"></span></div></span>')
        }
        $("#bar" + e).animate({
            width: a.porcentaje + "%"
        }, a.tiempo);
        this.mover = function(f) {
            $("#bar" + $(this).attr("id")).animate({
                width: f + "%"
            }, a.tiempo)
        };
        return this
    }
});
(function(a) {
    a.fn.extend({
        Scroll: function(k, g) {
            if (!k) {
                var k = {}
            }
            var c = a("#" + k.up);
            var b = a("#" + k.down);
            var n;
            var d = this.eq(0).find("ul:first");
            var j = d.find("li:first").height(),
                h = k.line ? parseInt(k.line, 10) : parseInt(this.height() / j, 10),
                m = k.speed ? parseInt(k.speed, 10) : 500;
            timer = k.timer;
            if (h == 0) {
                h = 1
            }
            var o = 0 - h * j;
            var l = function() {
                c.unbind("click", l);
                d.animate({
                    marginTop: o
                }, m, function() {
                    for (i = 1; i <= h; i++) {
                        d.find("li:first").appendTo(d)
                    }
                    d.css({
                        marginTop: 0
                    });
                    c.bind("click", l)
                })
            };
            var e = function() {
                if (timer) {
                    n = window.setInterval(l, timer)
                }
            };
            var f = function() {
                if (timer) {
                    window.clearInterval(n)
                }
            };
            d.hover(f, e).mouseout();
            c.css("cursor", "pointer").click(l).hover(f, e);
            b.css("cursor", "pointer").click(scrollDown).hover(f, e)
        }
    })
})(jQuery);
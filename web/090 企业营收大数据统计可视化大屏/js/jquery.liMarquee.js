(function(a) {
    var b = {
        init: function(c) {
            var d = {
                direction: "left",
                loop: -1,
                scrolldelay: 0,
                scrollamount: 50,
                circular: true,
                drag: true,
                runshort: true,
                hoverstop: true,
                inverthover: false,
                xml: false
            };
            if (c) {
                a.extend(d, c)
            }
            return this.each(function() {
                var f = "mouseenter";
                var j = "mouseleave";
                if (d.inverthover) {
                    f = "mouseleave";
                    j = "mouseenter"
                }
                var k = d.loop,
                    n = a(this).addClass("str_wrap").data({
                        scrollamount: d.scrollamount
                    }),
                    g = false;
                var o = n.attr("style");
                if (o) {
                    var q = o.split(";");
                    var l = false;
                    for (var h = 0; h < q.length; h++) {
                        var m = a.trim(q[h]);
                        var p = m.search(/^height/g);
                        if (p != -1) {
                            l = parseFloat(n.css("height"))
                        }
                    }
                }
                var e = function() {
                    n.off("mouseleave");
                    n.off("mouseenter");
                    n.off("mousemove");
                    n.off("mousedown");
                    n.off("mouseup");
                    if (!a(".str_move", n).length) {
                        n.wrapInner(a("<div>").addClass("str_move"))
                    }
                    var y = a(".str_move", n).addClass("str_origin"),
                        z = y.clone().removeClass("str_origin").addClass("str_move_clone"),
                        B = 0;
                    if (!d.hoverstop) {
                        n.addClass("noStop")
                    }
                    var i = function() {
                        z.clone().css({
                            left: "100%",
                            right: "auto",
                            width: y.width()
                        }).appendTo(y);
                        z.css({
                            right: "100%",
                            left: "auto",
                            width: y.width()
                        }).appendTo(y)
                    };
                    var r = function() {
                        z.clone().css({
                            top: "100%",
                            bottom: "auto",
                            height: y.height()
                        }).appendTo(y);
                        z.css({
                            bottom: "100%",
                            top: "auto",
                            height: y.height()
                        }).appendTo(y)
                    };
                    if (d.direction == "left") {
                        n.height(y.outerHeight());
                        if (y.width() > n.width()) {
                            var u = -y.width();
                            if (d.circular) {
                                if (!d.xml) {
                                    i();
                                    u = -(y.width() + (y.width() - n.width()))
                                }
                            }
                            if (d.xml) {
                                y.css({
                                    left: n.width()
                                })
                            }
                            var A = n.width(),
                                s = 0,
                                D = function() {
                                    var F = Math.abs(u),
                                        G = (F / n.data("scrollamount")) * 1000;
                                    if (parseFloat(y.css("left")) != 0) {
                                        F = (F + n.width());
                                        G = (F - (n.width() - parseFloat(y.css("left")))) / n.data("scrollamount") * 1000
                                    }
                                    return G
                                },
                                x = false,
                                w = function() {
                                    if (k != 0) {
                                        y.stop(true).animate({
                                            left: u
                                        }, D(), "linear", function() {
                                            a(this).css({
                                                left: n.width()
                                            });
                                            if (k == -1) {
                                                x = setTimeout(w, d.scrolldelay)
                                            } else {
                                                k--;
                                                x = setTimeout(w, d.scrolldelay)
                                            }
                                        })
                                    }
                                };
                            n.data({
                                moveId: x,
                                moveF: w
                            });
                            if (!d.inverthover) {
                                w()
                            }
                            if (d.hoverstop) {
                                n.on(f, function() {
                                    a(this).addClass("str_active");
                                    clearTimeout(x);
                                    y.stop(true)
                                }).on(j, function() {
                                    a(this).removeClass("str_active");
                                    a(this).off("mousemove");
                                    w()
                                });
                                if (d.drag) {
                                    n.on("mousedown", function(H) {
                                        if (d.inverthover) {
                                            y.stop(true)
                                        }
                                        var G;
                                        var F = 1;
                                        var I;
                                        var J = H.clientX;
                                        A = y.position().left;
                                        s = A - (H.clientX - n.offset().left);
                                        a(this).on("mousemove", function(K) {
                                            g = true;
                                            I = K.clientX;
                                            if (I > J) {
                                                F = 1
                                            } else {
                                                F = -1
                                            }
                                            J = I;
                                            G = s + (K.clientX - n.offset().left);
                                            if (!d.circular) {
                                                if (G < -y.width() && F < 0) {
                                                    G = n.width();
                                                    A = y.position().left;
                                                    s = A - (K.clientX - n.offset().left)
                                                }
                                                if (G > n.width() && F > 0) {
                                                    G = -y.width();
                                                    A = y.position().left;
                                                    s = A - (K.clientX - n.offset().left)
                                                }
                                            } else {
                                                if (G < -y.width() && F < 0) {
                                                    G = 0;
                                                    A = y.position().left;
                                                    s = A - (K.clientX - n.offset().left)
                                                }
                                                if (G > 0 && F > 0) {
                                                    G = -y.width();
                                                    A = y.position().left;
                                                    s = A - (K.clientX - n.offset().left)
                                                }
                                            }
                                            y.stop(true).css({
                                                left: G
                                            })
                                        }).on("mouseup", function() {
                                            a(this).off("mousemove");
                                            if (d.inverthover) {
                                                y.trigger("mouseenter")
                                            }
                                            setTimeout(function() {
                                                g = false
                                            }, 50)
                                        });
                                        return false
                                    }).on("click", function() {
                                        if (g) {
                                            return false
                                        }
                                    })
                                } else {
                                    n.addClass("no_drag")
                                }
                            }
                        } else {
                            if (d.runshort) {
                                y.css({
                                    left: n.width()
                                });
                                var A = n.width(),
                                    s = 0,
                                    C = function() {
                                        B = (y.width() + y.position().left) / n.data("scrollamount") * 1000;
                                        return B
                                    };
                                var v = function() {
                                    var F = -y.width();
                                    y.animate({
                                        left: F
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            left: n.width()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                };
                                n.data({
                                    moveF: v
                                });
                                if (!d.inverthover) {
                                    v()
                                }
                                if (d.hoverstop) {
                                    n.on(f, function() {
                                        a(this).addClass("str_active");
                                        y.stop(true)
                                    }).on(j, function() {
                                        a(this).removeClass("str_active");
                                        a(this).off("mousemove");
                                        v()
                                    });
                                    if (d.drag) {
                                        n.on("mousedown", function(H) {
                                            if (d.inverthover) {
                                                y.stop(true)
                                            }
                                            var G;
                                            var F = 1;
                                            var I;
                                            var J = H.clientX;
                                            A = y.position().left;
                                            s = A - (H.clientX - n.offset().left);
                                            a(this).on("mousemove", function(K) {
                                                g = true;
                                                I = K.clientX;
                                                if (I > J) {
                                                    F = 1
                                                } else {
                                                    F = -1
                                                }
                                                J = I;
                                                G = s + (K.clientX - n.offset().left);
                                                if (G < -y.width() && F < 0) {
                                                    G = n.width();
                                                    A = y.position().left;
                                                    s = A - (K.clientX - n.offset().left)
                                                }
                                                if (G > n.width() && F > 0) {
                                                    G = -y.width();
                                                    A = y.position().left;
                                                    s = A - (K.clientX - n.offset().left)
                                                }
                                                y.stop(true).css({
                                                    left: G
                                                })
                                            }).on("mouseup", function() {
                                                if (d.inverthover) {
                                                    y.trigger("mouseenter")
                                                }
                                                a(this).off("mousemove");
                                                setTimeout(function() {
                                                    g = false
                                                }, 50)
                                            });
                                            return false
                                        }).on("click", function() {
                                            if (g) {
                                                return false
                                            }
                                        })
                                    } else {
                                        n.addClass("no_drag")
                                    }
                                }
                            } else {
                                n.addClass("str_static")
                            }
                        }
                    }
                    if (d.direction == "right") {
                        n.height(y.outerHeight());
                        n.addClass("str_right");
                        y.css({
                            left: -y.width(),
                            right: "auto"
                        });
                        if (y.width() > n.width()) {
                            var u = n.width();
                            y.css({
                                left: 0
                            });
                            if (d.circular) {
                                if (!d.xml) {
                                    i();
                                    u = y.width()
                                }
                            }
                            var t = 0;
                            C = function() {
                                var F = n.width(),
                                    G = (F / n.data("scrollamount")) * 1000;
                                if (parseFloat(y.css("left")) != 0) {
                                    F = (y.width() + n.width());
                                    G = (F - (y.width() + parseFloat(y.css("left")))) / n.data("scrollamount") * 1000
                                }
                                return G
                            };
                            var v = function() {
                                if (k != 0) {
                                    y.animate({
                                        left: u
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            left: -y.width()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                }
                            };
                            n.data({
                                moveF: v
                            });
                            if (!d.inverthover) {
                                v()
                            }
                            if (d.hoverstop) {
                                n.on(f, function() {
                                    a(this).addClass("str_active");
                                    y.stop(true)
                                }).on(j, function() {
                                    a(this).removeClass("str_active");
                                    a(this).off("mousemove");
                                    v()
                                });
                                if (d.drag) {
                                    n.on("mousedown", function(H) {
                                        if (d.inverthover) {
                                            y.stop(true)
                                        }
                                        var G;
                                        var F = 1;
                                        var I;
                                        var J = H.clientX;
                                        A = y.position().left;
                                        t = A - (H.clientX - n.offset().left);
                                        a(this).on("mousemove", function(K) {
                                            g = true;
                                            I = K.clientX;
                                            if (I > J) {
                                                F = 1
                                            } else {
                                                F = -1
                                            }
                                            J = I;
                                            G = t + (K.clientX - n.offset().left);
                                            if (!d.circular) {
                                                if (G < -y.width() && F < 0) {
                                                    G = n.width();
                                                    A = y.position().left;
                                                    t = A - (K.clientX - n.offset().left)
                                                }
                                                if (G > n.width() && F > 0) {
                                                    G = -y.width();
                                                    A = y.position().left;
                                                    t = A - (K.clientX - n.offset().left)
                                                }
                                            } else {
                                                if (G < -y.width() && F < 0) {
                                                    G = 0;
                                                    A = y.position().left;
                                                    t = A - (K.clientX - n.offset().left)
                                                }
                                                if (G > 0 && F > 0) {
                                                    G = -y.width();
                                                    A = y.position().left;
                                                    t = A - (K.clientX - n.offset().left)
                                                }
                                            }
                                            y.stop(true).css({
                                                left: G
                                            })
                                        }).on("mouseup", function() {
                                            if (d.inverthover) {
                                                y.trigger("mouseenter")
                                            }
                                            a(this).off("mousemove");
                                            setTimeout(function() {
                                                g = false
                                            }, 50)
                                        });
                                        return false
                                    }).on("click", function() {
                                        if (g) {
                                            return false
                                        }
                                    })
                                } else {
                                    n.addClass("no_drag")
                                }
                            }
                        } else {
                            if (d.runshort) {
                                var t = 0;
                                var C = function() {
                                    B = (n.width() - y.position().left) / n.data("scrollamount") * 1000;
                                    return B
                                };
                                var v = function() {
                                    var F = n.width();
                                    y.animate({
                                        left: F
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            left: -y.width()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                };
                                n.data({
                                    moveF: v
                                });
                                if (!d.inverthover) {
                                    v()
                                }
                                if (d.hoverstop) {
                                    n.on(f, function() {
                                        a(this).addClass("str_active");
                                        y.stop(true)
                                    }).on(j, function() {
                                        a(this).removeClass("str_active");
                                        a(this).off("mousemove");
                                        v()
                                    });
                                    if (d.drag) {
                                        n.on("mousedown", function(H) {
                                            if (d.inverthover) {
                                                y.stop(true)
                                            }
                                            var G;
                                            var F = 1;
                                            var I;
                                            var J = H.clientX;
                                            A = y.position().left;
                                            t = A - (H.clientX - n.offset().left);
                                            a(this).on("mousemove", function(K) {
                                                g = true;
                                                I = K.clientX;
                                                if (I > J) {
                                                    F = 1
                                                } else {
                                                    F = -1
                                                }
                                                J = I;
                                                G = t + (K.clientX - n.offset().left);
                                                if (G < -y.width() && F < 0) {
                                                    G = n.width();
                                                    A = y.position().left;
                                                    t = A - (K.clientX - n.offset().left)
                                                }
                                                if (G > n.width() && F > 0) {
                                                    G = -y.width();
                                                    A = y.position().left;
                                                    t = A - (K.clientX - n.offset().left)
                                                }
                                                y.stop(true).css({
                                                    left: G
                                                })
                                            }).on("mouseup", function() {
                                                if (d.inverthover) {
                                                    y.trigger("mouseenter")
                                                }
                                                a(this).off("mousemove");
                                                setTimeout(function() {
                                                    g = false
                                                }, 50)
                                            });
                                            return false
                                        }).on("click", function() {
                                            if (g) {
                                                return false
                                            }
                                        })
                                    } else {
                                        n.addClass("no_drag")
                                    }
                                }
                            } else {
                                n.addClass("str_static")
                            }
                        }
                    }
                    if (d.direction == "up") {
                        n.addClass("str_vertical");
                        if (y.height() > n.height()) {
                            var E = -y.height();
                            if (d.circular) {
                                if (!d.xml) {
                                    r();
                                    E = -(y.height() + (y.height() - n.height()))
                                }
                            }
                            if (d.xml) {
                                y.css({
                                    top: n.height()
                                })
                            }
                            var t = 0;
                            C = function() {
                                var F = Math.abs(E),
                                    G = (F / n.data("scrollamount")) * 1000;
                                if (parseFloat(y.css("top")) != 0) {
                                    F = (F + n.height());
                                    G = (F - (n.height() - parseFloat(y.css("top")))) / n.data("scrollamount") * 1000
                                }
                                return G
                            };
                            var v = function() {
                                if (k != 0) {
                                    y.animate({
                                        top: E
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            top: n.height()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                }
                            };
                            n.data({
                                moveF: v
                            });
                            if (!d.inverthover) {
                                v()
                            }
                            if (d.hoverstop) {
                                n.on(f, function() {
                                    a(this).addClass("str_active");
                                    y.stop(true)
                                }).on(j, function() {
                                    a(this).removeClass("str_active");
                                    a(this).off("mousemove");
                                    v()
                                });
                                if (d.drag) {
                                    n.on("mousedown", function(H) {
                                        if (d.inverthover) {
                                            y.stop(true)
                                        }
                                        var G;
                                        var F = 1;
                                        var I;
                                        var J = H.clientY;
                                        strMoveTop = y.position().top;
                                        t = strMoveTop - (H.clientY - n.offset().top);
                                        a(this).on("mousemove", function(K) {
                                            g = true;
                                            I = K.clientY;
                                            if (I > J) {
                                                F = 1
                                            } else {
                                                if (I < J) {
                                                    F = -1
                                                }
                                            }
                                            J = I;
                                            G = t + K.clientY - n.offset().top;
                                            if (!d.circular) {
                                                if (G < -y.height() && F < 0) {
                                                    G = n.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                if (G > n.height() && F > 0) {
                                                    G = -y.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                            } else {
                                                if (G < -y.height() && F < 0) {
                                                    G = 0;
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                if (G > 0 && F > 0) {
                                                    G = -y.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                            }
                                            y.stop(true).css({
                                                top: G
                                            })
                                        }).on("mouseup", function() {
                                            if (d.inverthover) {
                                                y.trigger("mouseenter")
                                            }
                                            a(this).off("mousemove");
                                            setTimeout(function() {
                                                g = false
                                            }, 50)
                                        });
                                        return false
                                    }).on("click", function() {
                                        if (g) {
                                            return false
                                        }
                                    })
                                } else {
                                    n.addClass("no_drag")
                                }
                            }
                        } else {
                            if (d.runshort) {
                                y.css({
                                    top: n.height()
                                });
                                var t = 0;
                                var C = function() {
                                    B = (y.height() + y.position().top) / n.data("scrollamount") * 1000;
                                    return B
                                };
                                var v = function() {
                                    var F = -y.height();
                                    y.animate({
                                        top: F
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            top: n.height()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                };
                                n.data({
                                    moveF: v
                                });
                                if (!d.inverthover) {
                                    v()
                                }
                                if (d.hoverstop) {
                                    n.on(f, function() {
                                        a(this).addClass("str_active");
                                        y.stop(true)
                                    }).on(j, function() {
                                        a(this).removeClass("str_active");
                                        a(this).off("mousemove");
                                        v()
                                    });
                                    if (d.drag) {
                                        n.on("mousedown", function(H) {
                                            if (d.inverthover) {
                                                y.stop(true)
                                            }
                                            var G;
                                            var F = 1;
                                            var I;
                                            var J = H.clientY;
                                            strMoveTop = y.position().top;
                                            t = strMoveTop - (H.clientY - n.offset().top);
                                            a(this).on("mousemove", function(K) {
                                                g = true;
                                                I = K.clientY;
                                                if (I > J) {
                                                    F = 1
                                                } else {
                                                    if (I < J) {
                                                        F = -1
                                                    }
                                                }
                                                J = I;
                                                G = t + K.clientY - n.offset().top;
                                                if (G < -y.height() && F < 0) {
                                                    G = n.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                if (G > n.height() && F > 0) {
                                                    G = -y.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                y.stop(true).css({
                                                    top: G
                                                })
                                            }).on("mouseup", function() {
                                                if (d.inverthover) {
                                                    y.trigger("mouseenter")
                                                }
                                                a(this).off("mousemove");
                                                setTimeout(function() {
                                                    g = false
                                                }, 50)
                                            });
                                            return false
                                        }).on("click", function() {
                                            if (g) {
                                                return false
                                            }
                                        })
                                    } else {
                                        n.addClass("no_drag")
                                    }
                                }
                            } else {
                                n.addClass("str_static")
                            }
                        }
                    }
                    if (d.direction == "down") {
                        n.addClass("str_vertical").addClass("str_down");
                        y.css({
                            top: -y.height(),
                            bottom: "auto"
                        });
                        if (y.height() > n.height()) {
                            var E = n.height();
                            if (d.circular) {
                                if (!d.xml) {
                                    r();
                                    E = y.height()
                                }
                            }
                            if (d.xml) {
                                y.css({
                                    top: -y.height()
                                })
                            }
                            var t = 0;
                            C = function() {
                                var F = n.height(),
                                    G = (F / n.data("scrollamount")) * 1000;
                                if (parseFloat(y.css("top")) != 0) {
                                    F = (y.height() + n.height());
                                    G = (F - (y.height() + parseFloat(y.css("top")))) / n.data("scrollamount") * 1000
                                }
                                return G
                            };
                            var v = function() {
                                if (k != 0) {
                                    y.animate({
                                        top: E
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            top: -y.height()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                }
                            };
                            n.data({
                                moveF: v
                            });
                            if (!d.inverthover) {
                                v()
                            }
                            if (d.hoverstop) {
                                n.on(f, function() {
                                    a(this).addClass("str_active");
                                    y.stop(true)
                                }).on(j, function() {
                                    a(this).removeClass("str_active");
                                    a(this).off("mousemove");
                                    v()
                                });
                                if (d.drag) {
                                    n.on("mousedown", function(H) {
                                        if (d.inverthover) {
                                            y.stop(true)
                                        }
                                        var G;
                                        var F = 1;
                                        var I;
                                        var J = H.clientY;
                                        strMoveTop = y.position().top;
                                        t = strMoveTop - (H.clientY - n.offset().top);
                                        a(this).on("mousemove", function(K) {
                                            g = true;
                                            I = K.clientY;
                                            if (I > J) {
                                                F = 1
                                            } else {
                                                if (I < J) {
                                                    F = -1
                                                }
                                            }
                                            J = I;
                                            G = t + K.clientY - n.offset().top;
                                            if (!d.circular) {
                                                if (G < -y.height() && F < 0) {
                                                    G = n.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                if (G > n.height() && F > 0) {
                                                    G = -y.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                            } else {
                                                if (G < -y.height() && F < 0) {
                                                    G = 0;
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                if (G > 0 && F > 0) {
                                                    G = -y.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                            }
                                            y.stop(true).css({
                                                top: G
                                            })
                                        }).on("mouseup", function() {
                                            if (d.inverthover) {
                                                y.trigger("mouseenter")
                                            }
                                            a(this).off("mousemove");
                                            setTimeout(function() {
                                                g = false
                                            }, 50)
                                        });
                                        return false
                                    }).on("click", function() {
                                        if (g) {
                                            return false
                                        }
                                    })
                                } else {
                                    n.addClass("no_drag")
                                }
                            }
                        } else {
                            if (d.runshort) {
                                var t = 0;
                                var C = function() {
                                    B = (n.height() - y.position().top) / n.data("scrollamount") * 1000;
                                    return B
                                };
                                var v = function() {
                                    var F = n.height();
                                    y.animate({
                                        top: F
                                    }, C(), "linear", function() {
                                        a(this).css({
                                            top: -y.height()
                                        });
                                        if (k == -1) {
                                            setTimeout(v, d.scrolldelay)
                                        } else {
                                            k--;
                                            setTimeout(v, d.scrolldelay)
                                        }
                                    })
                                };
                                n.data({
                                    moveF: v
                                });
                                if (!d.inverthover) {
                                    v()
                                }
                                if (d.hoverstop) {
                                    n.on(f, function() {
                                        a(this).addClass("str_active");
                                        y.stop(true)
                                    }).on(j, function() {
                                        a(this).removeClass("str_active");
                                        a(this).off("mousemove");
                                        v()
                                    });
                                    if (d.drag) {
                                        n.on("mousedown", function(H) {
                                            if (d.inverthover) {
                                                y.stop(true)
                                            }
                                            var G;
                                            var F = 1;
                                            var I;
                                            var J = H.clientY;
                                            strMoveTop = y.position().top;
                                            t = strMoveTop - (H.clientY - n.offset().top);
                                            a(this).on("mousemove", function(K) {
                                                g = true;
                                                I = K.clientY;
                                                if (I > J) {
                                                    F = 1
                                                } else {
                                                    if (I < J) {
                                                        F = -1
                                                    }
                                                }
                                                J = I;
                                                G = t + K.clientY - n.offset().top;
                                                if (G < -y.height() && F < 0) {
                                                    G = n.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                if (G > n.height() && F > 0) {
                                                    G = -y.height();
                                                    strMoveTop = y.position().top;
                                                    t = strMoveTop - (K.clientY - n.offset().top)
                                                }
                                                y.stop(true).css({
                                                    top: G
                                                })
                                            }).on("mouseup", function() {
                                                if (d.inverthover) {
                                                    y.trigger("mouseenter")
                                                }
                                                a(this).off("mousemove");
                                                setTimeout(function() {
                                                    g = false
                                                }, 50)
                                            });
                                            return false
                                        }).on("click", function() {
                                            if (g) {
                                                return false
                                            }
                                        })
                                    } else {
                                        n.addClass("no_drag")
                                    }
                                }
                            } else {
                                n.addClass("str_static")
                            }
                        }
                    }
                };
                if (d.xml) {
                    a.ajax({
                        url: d.xml,
                        dataType: "xml",
                        success: function(s) {
                            var w = a(s).find("text");
                            var x = w.length;
                            for (var r = 0; r < x; r++) {
                                var t = w.eq(r);
                                var u = t.text();
                                var v = a("<span>").text(u).appendTo(n);
                                if (d.direction == "left" || d.direction == "right") {
                                    v.css({
                                        display: "inline-block",
                                        textAlign: "right"
                                    });
                                    if (r > 0) {
                                        v.css({
                                            width: n.width() + v.width()
                                        })
                                    }
                                }
                                if (d.direction == "down" || d.direction == "up") {
                                    v.css({
                                        display: "block",
                                        textAlign: "left"
                                    });
                                    if (r > 0) {
                                        v.css({
                                            paddingTop: n.height()
                                        })
                                    }
                                }
                            }
                            e()
                        }
                    })
                } else {
                    e()
                }
                n.data({
                    ini: e,
                    startheight: l
                })
            })
        },
        update: function() {
            var c = a(this);
            var e = a(".str_origin", c);
            var d = a(".str_move_clone", c);
            e.stop(true);
            d.remove();
            c.data("ini")()
        },
        destroy: function() {
            var d = a(this);
            var e = a(".str_move", d);
            var k = d.data("startheight");
            a(".str_move_clone", d).remove();
            d.off("mouseenter");
            d.off("mousedown");
            d.off("mouseup");
            d.off("mouseleave");
            d.off("mousemove");
            d.removeClass("noStop").removeClass("str_vertical").removeClass("str_active").removeClass("no_drag").removeClass("str_static").removeClass("str_right").removeClass("str_down");
            var f = d.attr("style");
            if (f) {
                var m = f.split(";");
                for (var g = 0; g < m.length; g++) {
                    var l = a.trim(m[g]);
                    var n = l.search(/^height/g);
                    if (n != -1) {
                        m[g] = ""
                    }
                }
                var h = m.join(";");
                var j = h.replace(/;+/g, ";");
                if (j == ";") {
                    d.removeAttr("style")
                } else {
                    d.attr("style", j)
                }
                if (k) {
                    d.css({
                        height: k
                    })
                }
            }
            e.stop(true);
            if (e.length) {
                var c = e.html();
                e.remove();
                d.html(c)
            }
        },
        pause: function() {
            var c = a(this);
            var d = a(".str_move", c);
            d.stop(true)
        },
        play: function() {
            var c = a(this);
            a(this).off("mousemove");
            c.data("moveF")()
        }
    };
    a.fn.liMarquee = function(c) {
        if (b[c]) {
            return b[c].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof c === "object" || !c) {
                return b.init.apply(this, arguments)
            } else {
                a.error("Метод " + c + " в jQuery.liMarquee не существует")
            }
        }
    }
})(jQuery);
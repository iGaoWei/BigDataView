(function($) {
	$.fn.leoweather = function(opts) {
		var defaults = {
			city: '',
			format: '\u5c0a\u656c\u7684\u4f1a\u5458\uff0c\u007b\u65f6\u6bb5\u007d\u597d\uff01\u0020\u73b0\u5728\u662f\uff1a\u007b\u5e74\u007d\u002f\u007b\u6708\u007d\u002f\u007b\u65e5\u007d\u0020\u007b\u65f6\u007d\u003a\u007b\u5206\u007d\u003a\u007b\u79d2\u007d\u0020\u661f\u671f\u007b\u5468\u007d\u0020\u60a8\u6240\u5728\u7684\u57ce\u5e02\uff1a\u007b\u57ce\u5e02\u007d\u0020\u4eca\u5929\u007b\u663c\u591c\u007d\u7684\u5929\u6c14\u662f\uff1a\u007b\u5929\u6c14\u007d\u0020\u6c14\u6e29\uff1a\u007b\u6c14\u6e29\u007d\u0020\u98ce\u5411\uff1a\u007b\u98ce\u5411\u007d\u0020\u98ce\u7ea7\uff1a\u007b\u98ce\u7ea7\u007d\u0020\u56fe\u6807\uff1a\u007b\u56fe\u6807\u007d'
		};
		var options = $.extend(defaults, opts);
		return this.each(function() {
			var obj = $(this),
			weather = new Array(),
			format = UC8F6C6362(options.format),
			url = '\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0070\u0068\u0070\u002e\u0077\u0065\u0061\u0074\u0068\u0065\u0072\u002e\u0073\u0069\u006e\u0061\u002e\u0063\u006f\u006d\u002e\u0063\u006e\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u002f\u0069\u006e\u0064\u0065\u0078\u002f\u0077\u005f\u0063\u006c\u002e\u0070\u0068\u0070\u003f\u0063\u006f\u0064\u0065\u003d\u006a\u0073\u0026\u0064\u0061\u0079\u003d\u0030\u0026\u0063\u0069\u0074\u0079\u003d';
			var model = format.match(/\{.*?\}/g),
			action = new Array();
			for (var i = 0; model.length > i; i++) {
				action[i] = 'UC' + escape(model[i]).replace(/%u/g, '').replace(/%7B/g, '').replace(/%7D/g, '')
			};
			var valid = action.toString();
			if (valid.indexOf('UC57CE5E02') > 0 || valid.indexOf('UC59296C14') > 0 || valid.indexOf('UC6C146E29') > 0 || valid.indexOf('UC98CE5411') > 0 || valid.indexOf('UC98CE7EA7') > 0 || valid.indexOf('UC57CE5E02') > 0 || valid.indexOf('UC56FE6807') > 0) {
				$.ajax({
					url: UC7F515740(url, options.city),
					dataType: "script",
					success: function() {
						for (s in SWther.w) {
							var data = SWther.w[s][0];
							weather['name'] = s;
							weather['d1'] = data['d1'];
							weather['p1'] = data['p1'];
							weather['s1'] = data['s1'];
							weather['t1'] = data['t1'];
							weather['f1'] = data['f1'];
							weather['d2'] = data['d2'];
							weather['p2'] = data['p2'];
							weather['s2'] = data['s2'];
							weather['t2'] = data['t2'];
							weather['f2'] = data['f2']
						};
						getcontent(obj, weather)
					}
				})
			} else {
				getcontent(obj, '')
			};
			function getcontent(o, w) {
				var d = new Date(),
				timer = 0;
				for (var i = 0; action.length > i; i++) {
					str = format.replace(/\{(.*?)\}/g,
					function(a, b) {
						var fun = 'UC' + escape(b).replace(/%u/g, '').replace(/%7B/g, '').replace(/%7D/g, '');
						return eval(fun + '(d,w)')
					})
				};
				if (action.toString().indexOf('UC65F6') > 0) {
					timer = 1000 * 60 * 60
				};
				if (action.toString().indexOf('UC5206') > 0) {
					timer = 1000 * 60
				};
				if (action.toString().indexOf('UC79D2') > 0) {
					timer = 1000
				};
				o.html(str);
				if (timer > 0) {
					var ClockTimer = setInterval(UC66F465B0SJ, timer)
				}
			}
			function UC66F465B0SJ() {
				var today = new Date();
				YY = today.getYear();
				if (YY < 1900) YY = YY + 1900;
				var MM = today.getMonth() + 1;
				if (MM < 10) MM = '0' + MM;
				var DD = today.getDate();
				if (DD < 10) DD = '0' + DD;
				var hh = today.getHours();
				if (hh < 10) hh = '0' + hh;
				var mm = today.getMinutes();
				if (mm < 10) mm = '0' + mm;
				var ss = today.getSeconds();
				if (ss < 10) ss = '0' + ss;
				var ww = today.getDay();
				if (ww == 0) ww = UC8F6C6362('\u65e5');
				if (ww == 1) ww = UC8F6C6362('\u4e00');
				if (ww == 2) ww = UC8F6C6362('\u4e8c');
				if (ww == 3) ww = UC8F6C6362('\u4e09');
				if (ww == 4) ww = UC8F6C6362('\u56db');
				if (ww == 5) ww = UC8F6C6362('\u4e94');
				if (ww == 6) ww = UC8F6C6362('\u516d');
				if (hh < 06) {
					xx = UC8F6C6362('\u51cc\u6668')
				} else if (hh < 09) {
					xx = UC8F6C6362('\u65e9\u4e0a')
				} else if (hh < 12) {
					xx = UC8F6C6362('\u4e0a\u5348')
				} else if (hh < 14) {
					xx = UC8F6C6362('\u4e2d\u5348')
				} else if (hh < 17) {
					xx = UC8F6C6362('\u4e0b\u5348')
				} else if (hh < 19) {
					xx = UC8F6C6362('\u508d\u665a')
				} else {
					xx = UC8F6C6362('\u665a\u4e0a')
				};
				$('#weather_YY').html(YY);
				$('#weather_MM').html(MM);
				$('#weather_DD').html(DD);
				$('#weather_hh').html(hh);
				$('#weather_mm').html(mm);
				$('#weather_ss').html(ss);
				$('#weather_ww').html(ww);
				$('#weather_xx').html(xx)
			}
			function UC5E74(today, weather) {
				YY = today.getYear();
				if (YY < 1900) YY = YY + 1900;
				return '<span id="weather_YY">' + YY + '</span>'
			}
			function UC6708(today, weather) {
				var MM = today.getMonth() + 1;
				if (MM < 10) MM = '0' + MM;
				return '<span id="weather_MM">' + MM + '</span>'
			}
			function UC65E5(today, weather) {
				var DD = today.getDate();
				if (DD < 10) DD = '0' + DD;
				return '<span id="weather_DD">' + DD + '</span>'
			}
			function UC65F6(today, weather) {
				var hh = today.getHours();
				if (hh < 10) hh = '0' + hh;
				return '<span id="weather_hh">' + hh + '</span>'
			}
			function UC5206(today, weather) {
				var mm = today.getMinutes();
				if (mm < 10) mm = '0' + mm;
				return '<span id="weather_mm">' + mm + '</span>'
			}
			function UC79D2(today, weather) {
				var ss = today.getSeconds();
				if (ss < 10) ss = '0' + ss;
				return '<span id="weather_ss">' + ss + '</span>'
			}
			function UC5468(today, weather) {
				var ww = today.getDay();
				if (ww == 0) ww = UC8F6C6362('\u65e5');
				if (ww == 1) ww = UC8F6C6362('\u4e00');
				if (ww == 2) ww = UC8F6C6362('\u4e8c');
				if (ww == 3) ww = UC8F6C6362('\u4e09');
				if (ww == 4) ww = UC8F6C6362('\u56db');
				if (ww == 5) ww = UC8F6C6362('\u4e94');
				if (ww == 6) ww = UC8F6C6362('\u516d');
				return '<span id="weather_ww">' + ww + '</span>'
			}
			function UC65F66BB5(today, weather) {
				var hh = today.getHours();
				if (hh < 06) {
					xx = UC8F6C6362('\u51cc\u6668')
				} else if (hh < 09) {
					xx = UC8F6C6362('\u65e9\u4e0a')
				} else if (hh < 12) {
					xx = UC8F6C6362('\u4e0a\u5348')
				} else if (hh < 14) {
					xx = UC8F6C6362('\u4e2d\u5348')
				} else if (hh < 17) {
					xx = UC8F6C6362('\u4e0b\u5348')
				} else if (hh < 19) {
					xx = UC8F6C6362('\u508d\u665a')
				} else {
					xx = UC8F6C6362('\u665a\u4e0a')
				};
				return '<span id="weather_xx">' + xx + '</span>'
			}
			function UC57CE5E02(today, weather) {
				return weather['name']
			}
			function UC59296C14(today, weather) {
				if (today.getHours() > 18 && today.getHours() < 8) {
					return UC591C95F459296C14(today, weather)
				} else {
					return UC767D592959296C14(today, weather)
				}
			}
			function UC767D592959296C14(today, weather) {
				return weather['s1']
			}
			function UC591C95F459296C14(today, weather) {
				return weather['s2']
			}
			function UC6C146E29(today, weather) {
				if (today.getHours() > 18 && today.getHours() < 8) {
					return UC591C95F46C146E29(today, weather)
				} else {
					return UC767D59296C146E29(today, weather)
				}
			}
			function UC767D59296C146E29(today, weather) {
				return weather['t1']
			}
			function UC591C95F46C146E29(today, weather) {
				return weather['t2']
			}
			function UC98CE5411(today, weather) {
				if (today.getHours() > 18 && today.getHours() < 8) {
					return UC591C95F498CE5411(today, weather)
				} else {
					return UC767D592998CE5411(today, weather)
				}
			}
			function UC767D592998CE5411(today, weather) {
				return weather['d1']
			}
			function UC591C95F498CE5411(today, weather) {
				return weather['d2']
			}
			function UC98CE7EA7(today, weather) {
				if (today.getHours() > 18 && today.getHours() < 8) {
					return UC591C95F498CE7EA7(today, weather)
				} else {
					return UC767D592998CE7EA7(today, weather)
				}
			}
			function UC767D592998CE7EA7(today, weather) {
				return weather['p1']
			}
			function UC591C95F498CE7EA7(today, weather) {
				return weather['p2']
			}
			function UC56FE6807(today, weather) {
				if (today.getHours() > 18 && today.getHours() < 8) {
					return UC591C95F456FE6807(today, weather)
				} else {
					return UC767D592956FE6807(today, weather)
				}
			}
			function UC767D592956FE6807(today, weather) {
				return weather['f1']
			}
			function UC591C95F456FE6807(today, weather) {
				return weather['f2']
			}
			function UC663C591C(today, weather) {
				if (today.getHours() > 18 && today.getHours() < 8) {
					return UC8F6C6362('\u591c\u95f4')
				} else {
					return UC8F6C6362('\u767d\u5929')
				}
			}
			function UC8F6C6362(string) {
				return unescape(string.replace(/\u/g, "%u"))
			}
			function UC7F515740(url, city) {
				return UC8F6C6362(url) + city + UC8F6C6362('\u0026\u0064\u0066\u0063\u003d\u0031\u0026\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038').replace(/\%/g, '')
			}
		})
	}
})(jQuery);
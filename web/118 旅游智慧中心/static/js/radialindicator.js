;
(function($, window, document) {
	"use strict";
	var circ = Math.PI * 2,
		quart = Math.PI / 2;

	function hexToRgb(hex) {
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
		});
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
	}

	function getPropVal(curShift, perShift, bottomRange, topRange) {
		return Math.round(bottomRange + ((topRange - bottomRange) * curShift / perShift));
	}

	function getCurrentColor(curPer, bottomVal, topVal, bottomColor, topColor) {
		var rgbAryTop = topColor.indexOf('#') != -1 ? hexToRgb(topColor) : topColor.match(/\d+/g),
			rgbAryBottom = bottomColor.indexOf('#') != -1 ? hexToRgb(bottomColor) : bottomColor.match(/\d+/g),
			perShift = topVal - bottomVal,
			curShift = curPer - bottomVal;
		if(!rgbAryTop || !rgbAryBottom) return null;
		return 'rgb(' + getPropVal(curShift, perShift, rgbAryBottom[0], rgbAryTop[0]) + ',' + getPropVal(curShift, perShift, rgbAryBottom[1], rgbAryTop[1]) + ',' + getPropVal(curShift, perShift, rgbAryBottom[2], rgbAryTop[2]) + ')';
	}

	function merge() {
		var arg = arguments,
			target = arg[0];
		for(var i = 1, ln = arg.length; i < ln; i++) {
			var obj = arg[i];
			for(var k in obj) {
				if(obj.hasOwnProperty(k)) {
					target[k] = obj[k];
				}
			}
		}
		return target;
	}

	function formatter(pattern) {
		return function(num) {
			if(!pattern) return num.toString();
			num = num || 0
			var numRev = num.toString().split('').reverse(),
				output = pattern.split("").reverse(),
				i = 0,
				lastHashReplaced = 0;
			for(var ln = output.length; i < ln; i++) {
				if(!numRev.length) break;
				if(output[i] == "#") {
					lastHashReplaced = i;
					output[i] = numRev.shift();
				}
			}
			output.splice(lastHashReplaced + 1, output.lastIndexOf('#') - lastHashReplaced, numRev.reverse().join(""));
			return output.reverse().join('');
		}
	}

	function Indicator(container, indOption) {
		indOption = indOption || {};
		indOption = merge({}, radialIndicator.defaults, indOption);
		this.indOption = indOption;
		if(typeof container == "string")
			container = document.querySelector(container);
		if(container.length)
			container = container[0];
		this.container = container;
		var canElm = document.createElement("canvas");
		container.appendChild(canElm);
		this.canElm = canElm;
		this.ctx = canElm.getContext('2d');
		this.current_value = indOption.initValue || indOption.minValue || 0;
	}
	Indicator.prototype = {
		constructor: radialIndicator,
		init: function() {
			var indOption = this.indOption,
				canElm = this.canElm,
				ctx = this.ctx,
				dim = (indOption.radius + indOption.barWidth) * 2,
				center = dim / 2;
			this.formatter = typeof indOption.format == "function" ? indOption.format : formatter(indOption.format);
			this.maxLength = indOption.percentage ? 4 : this.formatter(indOption.maxValue).length;
			canElm.width = dim;
			canElm.height = dim;
			ctx.strokeStyle = indOption.barBgColor;
			ctx.lineWidth = indOption.barWidth;
			ctx.beginPath();
			ctx.arc(center, center, indOption.radius, 0, 2 * Math.PI);
			ctx.stroke();
			this.imgData = ctx.getImageData(0, 0, dim, dim);
			this.value(this.current_value);
			return this;
		},
		value: function(val) {
			if(val === undefined || isNaN(val)) {
				return this.current_value;
			}
			val = parseInt(val);
			var ctx = this.ctx,
				indOption = this.indOption,
				curColor = indOption.barColor,
				dim = (indOption.radius + indOption.barWidth) * 2,
				minVal = indOption.minValue,
				maxVal = indOption.maxValue,
				center = dim / 2;
			val = val < minVal ? minVal : val > maxVal ? maxVal : val;
			var perVal = Math.round(((val - minVal) * 100 / (maxVal - minVal)) * 100) / 100,
				dispVal = indOption.percentage ? perVal + '%' : this.formatter(val);
			this.current_value = val;
			ctx.putImageData(this.imgData, 0, 0);
			if(typeof curColor == "object") {
				var range = Object.keys(curColor);
				for(var i = 1, ln = range.length; i < ln; i++) {
					var bottomVal = range[i - 1],
						topVal = range[i],
						bottomColor = curColor[bottomVal],
						topColor = curColor[topVal],
						newColor = val == bottomVal ? bottomColor : val == topVal ? topColor : val > bottomVal && val < topVal ? indOption.interpolate ? getCurrentColor(val, bottomVal, topVal, bottomColor, topColor) : topColor : false;
					if(newColor != false) {
						curColor = newColor;
						break;
					}
				}
			}
			ctx.strokeStyle = curColor;
			if(indOption.roundCorner) ctx.lineCap = "round";
			ctx.beginPath();
			ctx.arc(center, center, indOption.radius, -(quart), ((circ) * perVal / 100) - quart, false);
			ctx.stroke();
			if(indOption.displayNumber) {
				var cFont = ctx.font.split(' '),
					weight = indOption.fontWeight,
					fontSize = indOption.fontSize || (dim / (this.maxLength - (Math.floor(this.maxLength * 1.4 / 4) - 1)));
				cFont = indOption.fontFamily || cFont[cFont.length - 1];
				ctx.fillStyle = indOption.fontColor || curColor;
				ctx.font = weight + " " + fontSize + "px " + cFont;
				ctx.textAlign = "center";
				ctx.textBaseline = 'middle';
				ctx.fillText(dispVal, center, center);
			}
			return this;
		},
		animate: function(val) {
			var indOption = this.indOption,
				counter = this.current_value || indOption.minValue,
				self = this,
				incBy = Math.ceil((indOption.maxValue - indOption.minValue) / (indOption.frameNum || (indOption.percentage ? 100 : 500))),
				back = val < counter;
			if(this.intvFunc) clearInterval(this.intvFunc);
			this.intvFunc = setInterval(function() {
				if((!back && counter >= val) || (back && counter <= val)) {
					if(self.current_value == counter) {
						clearInterval(self.intvFunc);
						return;
					} else {
						counter = val;
					}
				}
				self.value(counter);
				if(counter != val) {
					counter = counter + (back ? -incBy : incBy)
				};
			}, indOption.frameTime);
			return this;
		},
		option: function(key, val) {
			if(val === undefined) return this.option[key];
			if(['radius', 'barWidth', 'barBgColor', 'format', 'maxValue', 'percentage'].indexOf(key) != -1) {
				this.indOption[key] = val;
				this.init().value(this.current_value);
			}
			this.indOption[key] = val;
		}
	};

	function radialIndicator(container, options) {
		var progObj = new Indicator(container, options);
		progObj.init();
		return progObj;
	}
	radialIndicator.defaults = {
		radius: 50,
		barWidth: 8,
		barBgColor: '#2C384E',
		barColor: '#99CC33',
		format: null,
		frameTime: 10,
		frameNum: null,
		fontColor: null,
		fontFamily: null,
		fontWeight: 'bold',
		fontSize: null,
		interpolate: true,
		percentage: false,
		displayNumber: true,
		roundCorner: false,
		minValue: 0,
		maxValue: 100,
		initValue: 0
	};
	window.radialIndicator = radialIndicator;
	if($) {
		$.fn.radialIndicator = function(options) {
			return this.each(function() {
				var newPCObj = radialIndicator(this, options);
				$.data(this, 'radialIndicator', newPCObj);
			});
		};
	}
}(window.jQuery, window, document, void 0));
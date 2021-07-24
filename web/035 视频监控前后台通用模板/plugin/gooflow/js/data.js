jsondata = {
	"title": "10086网状流程",
	"nodes": {
		"demo_node_9": {
			"name": "桂中区",
			"left": 10,
			"top": 10,
			"type": "start round",
			"width": 24,
			"height": 24,
			"alt": true
		},
		//alt表示在编辑模式下是否被用户变更过,默认都是undefined未变更//exportAlter
		"demo_node_10": {
			"name": "桂北区",
			"left": 10,
			"top": 81,
			"type": "start round",
			"width": 24,
			"height": 24,
			"alt": true
		},
		"demo_node_11": {
			"name": "桂西区",
			"left": 9,
			"top": 143,
			"type": "start round",
			"width": 24,
			"height": 24,
			"alt": true
		},
		"demo_node_12": {
			"name": "桂北区",
			"left": 11,
			"top": 290,
			"type": "start round",
			"width": 24,
			"height": 24,
			"alt": true
		},
		"demo_node_14": {
			"name": "桂东区",
			"left": 7,
			"top": 339,
			"type": "start round",
			"width": 24,
			"height": 24,
			"alt": true
		},
		"demo_node_2": {
			"name": "问候语2",
			"left": 232,
			"top": 104,
			"type": "chat",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_3": {
			"name": "问候语3",
			"left": 220,
			"top": 260,
			"type": "chat",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_4": {
			"name": "问候语4",
			"left": 222,
			"top": 327,
			"type": "chat",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_5": {
			"name": "停机判断",
			"left": 107,
			"top": 47,
			"type": "fork",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_13": {
			"name": "停机判断2",
			"left": 103,
			"top": 289,
			"type": "fork",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_20": {
			"name": "停机菜单",
			"left": 355,
			"top": 12,
			"type": "join",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_21": {
			"name": "正常菜单",
			"left": 368,
			"top": 362,
			"type": "join",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_27": {
			"name": "延时停机",
			"left": 492,
			"top": 13,
			"type": "node",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_28": {
			"name": "开机",
			"left": 491,
			"top": 62,
			"type": "node",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_29": {
			"name": "缴费",
			"left": 466,
			"top": 162,
			"type": "node",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_30": {
			"name": "历史话费查询",
			"left": 591,
			"top": 116,
			"type": "node",
			"width": 111,
			"height": 24,
			"alt": true
		},
		"demo_node_1": {
			"name": "问候语1",
			"left": 228,
			"top": 42,
			"type": "chat",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_38": {
			"name": "积分查询",
			"left": 506,
			"top": 261,
			"type": "recombination",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_39": {
			"name": "剩余资源查询",
			"left": 499,
			"top": 312,
			"type": "recombination",
			"width": 107,
			"height": 24,
			"alt": true
		},
		"demo_node_40": {
			"name": "常用业务办理",
			"left": 491,
			"top": 356,
			"type": "recombination",
			"width": 110,
			"height": 24,
			"alt": true
		},
		"demo_node_42": {
			"name": "网络服务",
			"left": 492,
			"top": 397,
			"type": "recombination",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_43": {
			"name": "转人工服务",
			"left": 479,
			"top": 457,
			"type": "state",
			"width": 91,
			"height": 24,
			"alt": true
		},
		"demo_node_44": {
			"name": "话费查询",
			"left": 477,
			"top": 213,
			"type": "state",
			"width": 86,
			"height": 24,
			"alt": true
		},
		"demo_node_52": {
			"name": "实时话费查询",
			"left": 609,
			"top": 212,
			"type": "node",
			"width": 107,
			"height": 24,
			"alt": true
		},
		"demo_node_54": {
			"name": "网络专区投诉",
			"left": 639,
			"top": 399,
			"type": "task",
			"width": 106,
			"height": 24,
			"alt": true
		},
		"demo_node_55": {
			"name": "普通转人工",
			"left": 641,
			"top": 456,
			"type": "task",
			"width": 109,
			"height": 24,
			"alt": true
		},
		"demo_node_59": {
			"name": "10088",
			"left": 500,
			"top": 514,
			"type": "task",
			"width": 86,
			"height": 24,
			"alt": true
		}
	},
	"lines": {
		"demo_line_6": {
			"type": "lr",
			"M": 81.5,
			"from": "demo_node_9",
			"to": "demo_node_5",
			"name": ""
		},
		"demo_line_7": {
			"type": "lr",
			"M": 81.5,
			"from": "demo_node_10",
			"to": "demo_node_5",
			"name": ""
		},
		"demo_line_9": {
			"type": "lr",
			"M": 81.5,
			"from": "demo_node_11",
			"to": "demo_node_5",
			"name": ""
		},
		"demo_line_14": {
			"type": "sl",
			"from": "demo_node_12",
			"to": "demo_node_13",
			"name": ""
		},
		"demo_line_15": {
			"type": "lr",
			"M": 78.5,
			"from": "demo_node_14",
			"to": "demo_node_13",
			"name": ""
		},
		"demo_line_17": {
			"type": "tb",
			"M": 152,
			"from": "demo_node_5",
			"to": "demo_node_2",
			"name": "F"
		},
		"demo_line_18": {
			"type": "tb",
			"M": 239,
			"from": "demo_node_13",
			"to": "demo_node_3",
			"name": "T"
		},
		"demo_line_19": {
			"type": "tb",
			"M": 383.5,
			"from": "demo_node_13",
			"to": "demo_node_4",
			"name": "F"
		},
		"demo_line_22": {
			"type": "lr",
			"M": 339,
			"from": "demo_node_4",
			"to": "demo_node_21",
			"name": ""
		},
		"demo_line_23": {
			"type": "lr",
			"M": 337.5,
			"from": "demo_node_2",
			"to": "demo_node_21",
			"name": ""
		},
		"demo_line_26": {
			"type": "lr",
			"M": 366.5,
			"from": "demo_node_3",
			"to": "demo_node_20",
			"name": ""
		},
		"demo_line_31": {
			"type": "tb",
			"M": 176.5,
			"from": "demo_node_20",
			"to": "demo_node_29",
			"name": "4"
		},
		"demo_line_32": {
			"type": "tb",
			"M": 25.5,
			"from": "demo_node_20",
			"to": "demo_node_27",
			"name": "1"
		},
		"demo_line_33": {
			"type": "tb",
			"M": 128,
			"from": "demo_node_20",
			"to": "demo_node_30",
			"name": "3"
		},
		"demo_line_34": {
			"type": "tb",
			"M": 74.5,
			"from": "demo_node_20",
			"to": "demo_node_28",
			"name": "2"
		},
		"demo_line_36": {
			"type": "tb",
			"M": 21.5,
			"from": "demo_node_5",
			"to": "demo_node_1",
			"name": "T"
		},
		"demo_line_37": {
			"type": "lr",
			"M": 367,
			"from": "demo_node_1",
			"to": "demo_node_20",
			"name": ""
		},
		"demo_line_45": {
			"type": "tb",
			"M": 225,
			"from": "demo_node_21",
			"to": "demo_node_44",
			"name": "1"
		},
		"demo_line_46": {
			"type": "tb",
			"M": 274.5,
			"from": "demo_node_21",
			"to": "demo_node_38",
			"name": "2"
		},
		"demo_line_47": {
			"type": "tb",
			"M": 325.5,
			"from": "demo_node_21",
			"to": "demo_node_39",
			"name": "3"
		},
		"demo_line_48": {
			"type": "sl",
			"from": "demo_node_21",
			"to": "demo_node_40",
			"name": "4"
		},
		"demo_line_49": {
			"type": "tb",
			"M": 411.5,
			"from": "demo_node_21",
			"to": "demo_node_42",
			"name": "5"
		},
		"demo_line_50": {
			"type": "tb",
			"M": 470.5,
			"from": "demo_node_21",
			"to": "demo_node_43",
			"name": "0"
		},
		"demo_line_51": {
			"type": "sl",
			"from": "demo_node_44",
			"to": "demo_node_30",
			"name": "2"
		},
		"demo_line_53": {
			"type": "sl",
			"from": "demo_node_44",
			"to": "demo_node_52",
			"name": "1"
		},
		"demo_line_56": {
			"type": "sl",
			"from": "demo_node_43",
			"to": "demo_node_55",
			"name": "0"
		},
		"demo_line_57": {
			"type": "sl",
			"from": "demo_node_43",
			"to": "demo_node_54",
			"name": "1"
		},
		"demo_line_58": {
			"type": "sl",
			"from": "demo_node_42",
			"to": "demo_node_54",
			"name": "0"
		},
		"demo_line_60": {
			"type": "sl",
			"from": "demo_node_43",
			"to": "demo_node_59",
			"name": "2",
			"alt": true
		}
	},
	"areas": {
		"goolflow_area_61": {
			"alt": true,
			"color": "yellow",
			"height": 553,
			"left": 0,
			"name": "area_61",
			"top": 0,
			"width": 788
		}
	},
	"initNum": 61
};
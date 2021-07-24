// 柱形图

var bar = echarts.init(document.getElementById('bar'));
var num = 4;
// 将天数灌入数组
var dayData = [{
    "datetime": "2017-03-14",
    "cnt": "20"
  },
  {
    "datetime": "2017-03-15",
    "cnt": "12"
  },
  {
    "datetime": "2017-03-16",
    "cnt": "4"
  },
  {
    "datetime": "2017-03-17",
    "cnt": "12"
  },
  {
    "datetime": "2017-03-18",
    "cnt": "6"
  },
  {
    "datetime": "2017-03-19",
    "cnt": "2"
  },
  {
    "datetime": "2017-03-20",
    "cnt": "13"
  },
  {
    "datetime": "2017-03-21",
    "cnt": "9"
  },
  {
    "datetime": "2017-03-22",
    "cnt": "4"
  },
  {
    "datetime": "2017-03-23",
    "cnt": "6"
  },
  {
    "datetime": "2017-03-24",
    "cnt": "9"
  },
  {
    "datetime": "2017-03-25",
    "cnt": "2"
  },
  {
    "datetime": "2017-03-26",
    "cnt": "1"
  },
  {
    "datetime": "2017-03-27",
    "cnt": "11"
  },
  {
    "datetime": "2017-03-28",
    "cnt": "2"
  },
  {
    "datetime": "2017-03-29",
    "cnt": "62"
  },
  {
    "datetime": "2017-03-30",
    "cnt": "8"
  },
  {
    "datetime": "2017-03-31",
    "cnt": "4"
  },
  {
    "datetime": "2017-04-01",
    "cnt": "6"
  },
  {
    "datetime": "2017-04-02",
    "cnt": "6"
  },
  {
    "datetime": "2017-04-03",
    "cnt": "2"
  },
  {
    "datetime": "2017-04-04",
    "cnt": "1"
  },
  {
    "datetime": "2017-04-05",
    "cnt": "22"
  },
  {
    "datetime": "2017-04-06",
    "cnt": "8"
  },
  {
    "datetime": "2017-04-07",
    "cnt": "8"
  },
  {
    "datetime": "2017-04-08",
    "cnt": "8"
  },
  {
    "datetime": "2017-04-09",
    "cnt": "1"
  },
  {
    "datetime": "2017-04-10",
    "cnt": "1"
  },
  {
    "datetime": "2017-04-11",
    "cnt": "4"
  },
  {
    "datetime": "2017-04-12",
    "cnt": "10"
  },
  {
    "datetime": "2017-04-13",
    "cnt": "8"
  },
  {
    "datetime": "2017-04-14",
    "cnt": "7"
  },
  {
    "datetime": "2017-04-15",
    "cnt": "3"
  },
  {
    "datetime": "2017-04-17",
    "cnt": "4"
  },
  {
    "datetime": "2017-04-18",
    "cnt": "3"
  },
  {
    "datetime": "2017-04-19",
    "cnt": "11"
  },
  {
    "datetime": "2017-04-20",
    "cnt": "8"
  },
  {
    "datetime": "2017-04-21",
    "cnt": "7"
  },
  {
    "datetime": "2017-04-22",
    "cnt": "4"
  },
  {
    "datetime": "2017-04-23",
    "cnt": "1"
  },
  {
    "datetime": "2017-04-24",
    "cnt": "4"
  },
  {
    "datetime": "2017-04-25",
    "cnt": "8"
  },
  {
    "datetime": "2017-04-26",
    "cnt": "2"
  },
  {
    "datetime": "2017-04-27",
    "cnt": "10"
  },
  {
    "datetime": "2017-04-28",
    "cnt": "6"
  },
  {
    "datetime": "2017-04-30",
    "cnt": "3"
  },
  {
    "datetime": "2017-05-01",
    "cnt": "2"
  },
  {
    "datetime": "2017-05-02",
    "cnt": "6"
  },
  {
    "datetime": "2017-05-03",
    "cnt": "8"
  },
  {
    "datetime": "2017-05-04",
    "cnt": "8"
  },
  {
    "datetime": "2017-05-05",
    "cnt": "9"
  },
  {
    "datetime": "2017-05-06",
    "cnt": "4"
  },
  {
    "datetime": "2017-05-07",
    "cnt": "1"
  },
  {
    "datetime": "2017-05-08",
    "cnt": "7"
  },
  {
    "datetime": "2017-05-09",
    "cnt": "8"
  },
  {
    "datetime": "2017-05-10",
    "cnt": "9"
  },
  {
    "datetime": "2017-05-11",
    "cnt": "3"
  },
  {
    "datetime": "2017-05-12",
    "cnt": "148"
  },
  {
    "datetime": "2017-05-14",
    "cnt": "3"
  },
  {
    "datetime": "2017-05-16",
    "cnt": "87"
  },
  {
    "datetime": "2017-05-17",
    "cnt": "228"
  },
  {
    "datetime": "2017-05-18",
    "cnt": "16"
  },
  {
    "datetime": "2017-05-19",
    "cnt": "8"
  },
  {
    "datetime": "2017-05-20",
    "cnt": "2"
  },
  {
    "datetime": "2017-05-21",
    "cnt": "2"
  },
  {
    "datetime": "2017-05-22",
    "cnt": "18"
  },
  {
    "datetime": "2017-05-23",
    "cnt": "14"
  },
  {
    "datetime": "2017-05-24",
    "cnt": "12"
  },
  {
    "datetime": "2017-05-25",
    "cnt": "13"
  },
  {
    "datetime": "2017-05-26",
    "cnt": "9"
  },
  {
    "datetime": "2017-05-27",
    "cnt": "15"
  },
  {
    "datetime": "2017-05-28",
    "cnt": "1"
  },
  {
    "datetime": "2017-05-29",
    "cnt": "1"
  },
  {
    "datetime": "2017-05-30",
    "cnt": "1"
  },
  {
    "datetime": "2017-05-31",
    "cnt": "19"
  },
  {
    "datetime": "2017-06-01",
    "cnt": "4"
  },
  {
    "datetime": "2017-06-02",
    "cnt": "20"
  },
  {
    "datetime": "2017-06-03",
    "cnt": "2"
  },
  {
    "datetime": "2017-06-04",
    "cnt": "2"
  },
  {
    "datetime": "2017-06-05",
    "cnt": "17"
  },
  {
    "datetime": "2017-06-06",
    "cnt": "6"
  },
  {
    "datetime": "2017-06-07",
    "cnt": "18"
  },
  {
    "datetime": "2017-06-08",
    "cnt": "18"
  },
  {
    "datetime": "2017-06-09",
    "cnt": "15"
  },
  {
    "datetime": "2017-06-10",
    "cnt": "3"
  },
  {
    "datetime": "2017-06-11",
    "cnt": "1"
  },
  {
    "datetime": "2017-06-12",
    "cnt": "10"
  },
  {
    "datetime": "2017-06-13",
    "cnt": "15"
  },
  {
    "datetime": "2017-06-14",
    "cnt": "4"
  },
  {
    "datetime": "2017-06-15",
    "cnt": "56"
  },
  {
    "datetime": "2017-06-16",
    "cnt": "23"
  },
  {
    "datetime": "2017-06-17",
    "cnt": "4"
  },
  {
    "datetime": "2017-06-18",
    "cnt": "1"
  },
  {
    "datetime": "2017-06-19",
    "cnt": "16"
  },
  {
    "datetime": "2017-06-20",
    "cnt": "17"
  },
  {
    "datetime": "2017-06-21",
    "cnt": "6"
  },
  {
    "datetime": "2017-06-22",
    "cnt": "23"
  },
  {
    "datetime": "2017-06-23",
    "cnt": "12"
  },
  {
    "datetime": "2017-06-24",
    "cnt": "3"
  },
  {
    "datetime": "2017-06-26",
    "cnt": "6"
  },
  {
    "datetime": "2017-06-27",
    "cnt": "13"
  },
  {
    "datetime": "2017-06-28",
    "cnt": "6"
  },
  {
    "datetime": "2017-06-29",
    "cnt": "7"
  },
  {
    "datetime": "2017-06-30",
    "cnt": "35"
  },
  {
    "datetime": "2017-07-01",
    "cnt": "5"
  },
  {
    "datetime": "2017-07-03",
    "cnt": "6"
  },
  {
    "datetime": "2017-07-04",
    "cnt": "29"
  },
  {
    "datetime": "2017-07-05",
    "cnt": "19"
  },
  {
    "datetime": "2017-07-06",
    "cnt": "19"
  },
  {
    "datetime": "2017-07-07",
    "cnt": "9"
  },
  {
    "datetime": "2017-07-08",
    "cnt": "5"
  },
  {
    "datetime": "2017-07-09",
    "cnt": "1"
  },
  {
    "datetime": "2017-07-10",
    "cnt": "24"
  },
  {
    "datetime": "2017-07-11",
    "cnt": "17"
  },
  {
    "datetime": "2017-07-12",
    "cnt": "15"
  },
  {
    "datetime": "2017-07-13",
    "cnt": "15"
  },
  {
    "datetime": "2017-07-14",
    "cnt": "14"
  },
  {
    "datetime": "2017-07-15",
    "cnt": "3"
  },
  {
    "datetime": "2017-07-16",
    "cnt": "1"
  },
  {
    "datetime": "2017-07-17",
    "cnt": "13"
  },
  {
    "datetime": "2017-07-18",
    "cnt": "7"
  },
  {
    "datetime": "2017-07-19",
    "cnt": "33"
  },
  {
    "datetime": "2017-07-20",
    "cnt": "19"
  },
  {
    "datetime": "2017-07-21",
    "cnt": "3"
  },
  {
    "datetime": "2017-07-22",
    "cnt": "3"
  },
  {
    "datetime": "2017-07-23",
    "cnt": "1"
  },
  {
    "datetime": "2017-07-24",
    "cnt": "26"
  },
  {
    "datetime": "2017-07-25",
    "cnt": "13"
  },
  {
    "datetime": "2017-07-26",
    "cnt": "20"
  },
  {
    "datetime": "2017-07-27",
    "cnt": "7"
  },
  {
    "datetime": "2017-07-28",
    "cnt": "28"
  },
  {
    "datetime": "2017-07-29",
    "cnt": "2"
  },
  {
    "datetime": "2017-07-30",
    "cnt": "1"
  },
  {
    "datetime": "2017-07-31",
    "cnt": "2"
  },
  {
    "datetime": "2017-08-01",
    "cnt": "4"
  },
  {
    "datetime": "2017-08-02",
    "cnt": "6"
  },
  {
    "datetime": "2017-08-03",
    "cnt": "4"
  },
  {
    "datetime": "2017-08-04",
    "cnt": "6"
  },
  {
    "datetime": "2017-08-05",
    "cnt": "5"
  },
  {
    "datetime": "2017-08-06",
    "cnt": "33"
  },
  {
    "datetime": "2017-08-07",
    "cnt": "3"
  },
  {
    "datetime": "2017-08-08",
    "cnt": "54"
  },
  {
    "datetime": "2017-08-09",
    "cnt": "6"
  },
  {
    "datetime": "2017-08-10",
    "cnt": "33"
  },
  {
    "datetime": "2017-08-11",
    "cnt": "17"
  },
  {
    "datetime": "2017-08-12",
    "cnt": "4"
  },
  {
    "datetime": "2017-08-13",
    "cnt": "1"
  },
  {
    "datetime": "2017-08-14",
    "cnt": "18"
  },
  {
    "datetime": "2017-08-15",
    "cnt": "15"
  },
  {
    "datetime": "2017-08-16",
    "cnt": "7"
  },
  {
    "datetime": "2017-08-17",
    "cnt": "46"
  },
  {
    "datetime": "2017-08-18",
    "cnt": "19"
  },
  {
    "datetime": "2017-08-19",
    "cnt": "6"
  },
  {
    "datetime": "2017-08-20",
    "cnt": "1"
  },
  {
    "datetime": "2017-08-21",
    "cnt": "17"
  },
  {
    "datetime": "2017-08-22",
    "cnt": "27"
  },
  {
    "datetime": "2017-08-23",
    "cnt": "17"
  },
  {
    "datetime": "2017-08-24",
    "cnt": "21"
  },
  {
    "datetime": "2017-08-25",
    "cnt": "16"
  },
  {
    "datetime": "2017-08-28",
    "cnt": "10"
  },
  {
    "datetime": "2017-08-29",
    "cnt": "15"
  },
  {
    "datetime": "2017-08-30",
    "cnt": "15"
  },
  {
    "datetime": "2017-08-31",
    "cnt": "9"
  },
  {
    "datetime": "2017-09-01",
    "cnt": "35"
  },
  {
    "datetime": "2017-09-02",
    "cnt": "23"
  },
  {
    "datetime": "2017-09-03",
    "cnt": "1"
  },
  {
    "datetime": "2017-09-04",
    "cnt": "23"
  },
  {
    "datetime": "2017-09-05",
    "cnt": "24"
  },
  {
    "datetime": "2017-09-06",
    "cnt": "16"
  },
  {
    "datetime": "2017-09-07",
    "cnt": "9"
  },
  {
    "datetime": "2017-09-08",
    "cnt": "18"
  },
  {
    "datetime": "2017-09-09",
    "cnt": "5"
  },
  {
    "datetime": "2017-09-11",
    "cnt": "38"
  },
  {
    "datetime": "2017-09-12",
    "cnt": "17"
  },
  {
    "datetime": "2017-09-13",
    "cnt": "20"
  },
  {
    "datetime": "2017-09-14",
    "cnt": "35"
  },
  {
    "datetime": "2017-09-15",
    "cnt": "6"
  },
  {
    "datetime": "2017-09-16",
    "cnt": "3"
  },
  {
    "datetime": "2017-09-18",
    "cnt": "117"
  },
  {
    "datetime": "2017-09-19",
    "cnt": "35"
  },
  {
    "datetime": "2017-09-20",
    "cnt": "35"
  },
  {
    "datetime": "2017-09-21",
    "cnt": "14"
  },
  {
    "datetime": "2017-09-22",
    "cnt": "7"
  },
  {
    "datetime": "2017-09-23",
    "cnt": "9"
  },
  {
    "datetime": "2017-09-25",
    "cnt": "24"
  },
  {
    "datetime": "2017-09-26",
    "cnt": "34"
  },
  {
    "datetime": "2017-09-27",
    "cnt": "42"
  },
  {
    "datetime": "2017-09-28",
    "cnt": "6"
  },
  {
    "datetime": "2017-09-29",
    "cnt": "16"
  },
  {
    "datetime": "2017-09-30",
    "cnt": "12"
  },
  {
    "datetime": "2017-10-01",
    "cnt": "3"
  },
  {
    "datetime": "2017-10-02",
    "cnt": "1"
  },
  {
    "datetime": "2017-10-03",
    "cnt": "1"
  },
  {
    "datetime": "2017-10-04",
    "cnt": "2"
  },
  {
    "datetime": "2017-10-05",
    "cnt": "1"
  },
  {
    "datetime": "2017-10-06",
    "cnt": "1"
  },
  {
    "datetime": "2017-10-07",
    "cnt": "2"
  },
  {
    "datetime": "2017-10-08",
    "cnt": "1"
  },
  {
    "datetime": "2017-10-09",
    "cnt": "50"
  },
  {
    "datetime": "2017-10-10",
    "cnt": "22"
  },
  {
    "datetime": "2017-10-11",
    "cnt": "18"
  },
  {
    "datetime": "2017-10-12",
    "cnt": "8"
  },
  {
    "datetime": "2017-10-15",
    "cnt": "14"
  },
  {
    "datetime": "2017-10-16",
    "cnt": "8"
  },
  {
    "datetime": "2017-10-17",
    "cnt": "1"
  },
  {
    "datetime": "2017-10-18",
    "cnt": "49"
  },
  {
    "datetime": "2017-10-19",
    "cnt": "11"
  },
  {
    "datetime": "2017-10-20",
    "cnt": "19"
  },
  {
    "datetime": "2017-10-21",
    "cnt": "4"
  },
  {
    "datetime": "2017-10-22",
    "cnt": "2"
  },
  {
    "datetime": "2017-10-23",
    "cnt": "18"
  },
  {
    "datetime": "2017-10-24",
    "cnt": "22"
  },
  {
    "datetime": "2017-10-25",
    "cnt": "14"
  },
  {
    "datetime": "2017-10-26",
    "cnt": "19"
  },
  {
    "datetime": "2017-10-27",
    "cnt": "15"
  },
  {
    "datetime": "2017-10-28",
    "cnt": "6"
  },
  {
    "datetime": "2017-10-30",
    "cnt": "34"
  },
  {
    "datetime": "2017-10-31",
    "cnt": "25"
  },
  {
    "datetime": "2017-11-01",
    "cnt": "23"
  },
  {
    "datetime": "2017-11-02",
    "cnt": "18"
  },
  {
    "datetime": "2017-11-03",
    "cnt": "23"
  },
  {
    "datetime": "2017-11-04",
    "cnt": "6"
  },
  {
    "datetime": "2017-11-05",
    "cnt": "1"
  },
  {
    "datetime": "2017-11-06",
    "cnt": "18"
  },
  {
    "datetime": "2017-11-07",
    "cnt": "16"
  },
  {
    "datetime": "2017-11-08",
    "cnt": "16"
  },
  {
    "datetime": "2017-11-09",
    "cnt": "13"
  },
  {
    "datetime": "2017-11-10",
    "cnt": "32"
  },
  {
    "datetime": "2017-11-11",
    "cnt": "7"
  },
  {
    "datetime": "2017-11-12",
    "cnt": "2"
  },
  {
    "datetime": "2017-11-13",
    "cnt": "17"
  },
  {
    "datetime": "2017-11-14",
    "cnt": "31"
  },
  {
    "datetime": "2017-11-15",
    "cnt": "17"
  },
  {
    "datetime": "2017-11-16",
    "cnt": "5"
  },
  {
    "datetime": "2017-11-17",
    "cnt": "6"
  },
  {
    "datetime": "2017-11-18",
    "cnt": "2"
  },
  {
    "datetime": "2017-11-19",
    "cnt": "2"
  },
  {
    "datetime": "2017-11-20",
    "cnt": "65"
  },
  {
    "datetime": "2017-11-21",
    "cnt": "22"
  },
  {
    "datetime": "2017-11-22",
    "cnt": "32"
  },
  {
    "datetime": "2017-11-23",
    "cnt": "20"
  },
  {
    "datetime": "2017-11-24",
    "cnt": "22"
  },
  {
    "datetime": "2017-11-25",
    "cnt": "6"
  },
  {
    "datetime": "2017-11-27",
    "cnt": "21"
  },
  {
    "datetime": "2017-11-28",
    "cnt": "20"
  },
  {
    "datetime": "2017-11-29",
    "cnt": "20"
  },
  {
    "datetime": "2017-11-30",
    "cnt": "23"
  },
  {
    "datetime": "2017-12-01",
    "cnt": "18"
  },
  {
    "datetime": "2017-12-02",
    "cnt": "3"
  },
  {
    "datetime": "2017-12-04",
    "cnt": "28"
  },
  {
    "datetime": "2017-12-05",
    "cnt": "12"
  },
  {
    "datetime": "2017-12-06",
    "cnt": "29"
  },
  {
    "datetime": "2017-12-07",
    "cnt": "18"
  },
  {
    "datetime": "2017-12-08",
    "cnt": "17"
  },
  {
    "datetime": "2017-12-09",
    "cnt": "7"
  },
  {
    "datetime": "2017-12-10",
    "cnt": "1"
  },
  {
    "datetime": "2017-12-11",
    "cnt": "22"
  },
  {
    "datetime": "2017-12-12",
    "cnt": "18"
  },
  {
    "datetime": "2017-12-13",
    "cnt": "23"
  },
  {
    "datetime": "2017-12-14",
    "cnt": "21"
  },
  {
    "datetime": "2017-12-15",
    "cnt": "12"
  },
  {
    "datetime": "2017-12-16",
    "cnt": "17"
  },
  {
    "datetime": "2017-12-17",
    "cnt": "1"
  },
  {
    "datetime": "2017-12-18",
    "cnt": "23"
  },
  {
    "datetime": "2017-12-19",
    "cnt": "20"
  },
  {
    "datetime": "2017-12-20",
    "cnt": "13"
  },
  {
    "datetime": "2017-12-21",
    "cnt": "7"
  },
  {
    "datetime": "2017-12-22",
    "cnt": "54"
  },
  {
    "datetime": "2017-12-23",
    "cnt": "5"
  },
  {
    "datetime": "2017-12-24",
    "cnt": "2"
  },
  {
    "datetime": "2017-12-25",
    "cnt": "18"
  },
  {
    "datetime": "2017-12-26",
    "cnt": "36"
  },
  {
    "datetime": "2017-12-27",
    "cnt": "12"
  },
  {
    "datetime": "2017-12-28",
    "cnt": "25"
  },
  {
    "datetime": "2017-12-29",
    "cnt": "12"
  },
  {
    "datetime": "2017-12-30",
    "cnt": "6"
  },
  {
    "datetime": "2017-12-31",
    "cnt": "3"
  },
  {
    "datetime": "2018-01-01",
    "cnt": "1"
  },
  {
    "datetime": "2018-01-02",
    "cnt": "23"
  },
  {
    "datetime": "2018-01-03",
    "cnt": "63"
  },
  {
    "datetime": "2018-01-04",
    "cnt": "36"
  },
  {
    "datetime": "2018-01-05",
    "cnt": "11"
  },
  {
    "datetime": "2018-01-06",
    "cnt": "7"
  },
  {
    "datetime": "2018-01-07",
    "cnt": "2"
  },
  {
    "datetime": "2018-01-08",
    "cnt": "59"
  },
  {
    "datetime": "2018-01-09",
    "cnt": "27"
  },
  {
    "datetime": "2018-01-10",
    "cnt": "24"
  },
  {
    "datetime": "2018-01-11",
    "cnt": "27"
  },
  {
    "datetime": "2018-01-12",
    "cnt": "19"
  },
  {
    "datetime": "2018-01-13",
    "cnt": "10"
  },
  {
    "datetime": "2018-01-14",
    "cnt": "1"
  },
  {
    "datetime": "2018-01-15",
    "cnt": "22"
  },
  {
    "datetime": "2018-01-16",
    "cnt": "40"
  },
  {
    "datetime": "2018-01-17",
    "cnt": "38"
  },
  {
    "datetime": "2018-01-18",
    "cnt": "49"
  },
  {
    "datetime": "2018-01-19",
    "cnt": "40"
  },
  {
    "datetime": "2018-01-20",
    "cnt": "2"
  },
  {
    "datetime": "2018-01-21",
    "cnt": "2"
  },
  {
    "datetime": "2018-01-22",
    "cnt": "8"
  },
  {
    "datetime": "2018-01-23",
    "cnt": "61"
  },
  {
    "datetime": "2018-01-24",
    "cnt": "14"
  },
  {
    "datetime": "2018-01-25",
    "cnt": "1062"
  },
  {
    "datetime": "2018-01-26",
    "cnt": "147"
  },
  {
    "datetime": "2018-01-27",
    "cnt": "7"
  },
  {
    "datetime": "2018-01-28",
    "cnt": "2"
  },
  {
    "datetime": "2018-01-29",
    "cnt": "56"
  },
  {
    "datetime": "2018-01-30",
    "cnt": "127"
  },
  {
    "datetime": "2018-01-31",
    "cnt": "263"
  },
  {
    "datetime": "2018-02-01",
    "cnt": "97"
  },
  {
    "datetime": "2018-02-02",
    "cnt": "117"
  },
  {
    "datetime": "2018-02-03",
    "cnt": "6"
  },
  {
    "datetime": "2018-02-04",
    "cnt": "2"
  },
  {
    "datetime": "2018-02-05",
    "cnt": "133"
  },
  {
    "datetime": "2018-02-06",
    "cnt": "165"
  },
  {
    "datetime": "2018-02-07",
    "cnt": "72"
  },
  {
    "datetime": "2018-02-08",
    "cnt": "54"
  },
  {
    "datetime": "2018-02-09",
    "cnt": "34"
  },
  {
    "datetime": "2018-02-10",
    "cnt": "3"
  },
  {
    "datetime": "2018-02-11",
    "cnt": "92"
  },
  {
    "datetime": "2018-02-12",
    "cnt": "4"
  },
  {
    "datetime": "2018-02-13",
    "cnt": "2"
  },
  {
    "datetime": "2018-02-14",
    "cnt": "2"
  },
  {
    "datetime": "2018-02-15",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-16",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-17",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-18",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-19",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-20",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-21",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-22",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-23",
    "cnt": "207"
  },
  {
    "datetime": "2018-02-24",
    "cnt": "63"
  },
  {
    "datetime": "2018-02-25",
    "cnt": "1"
  },
  {
    "datetime": "2018-02-26",
    "cnt": "6"
  },
  {
    "datetime": "2018-02-27",
    "cnt": "95"
  },
  {
    "datetime": "2018-02-28",
    "cnt": "12"
  },
  {
    "datetime": "2018-03-01",
    "cnt": "186"
  },
  {
    "datetime": "2018-03-02",
    "cnt": "167"
  },
  {
    "datetime": "2018-03-03",
    "cnt": "3"
  },
  {
    "datetime": "2018-03-05",
    "cnt": "32"
  },
  {
    "datetime": "2018-03-06",
    "cnt": "140"
  },
  {
    "datetime": "2018-03-07",
    "cnt": "104"
  },
  {
    "datetime": "2018-03-08",
    "cnt": "97"
  },
  {
    "datetime": "2018-03-09",
    "cnt": "186"
  },
  {
    "datetime": "2018-03-10",
    "cnt": "9"
  },
  {
    "datetime": "2018-03-11",
    "cnt": "2"
  },
  {
    "datetime": "2018-03-12",
    "cnt": "68"
  },
  {
    "datetime": "2018-03-13",
    "cnt": "22"
  }
]

var optionBar = {
  grid: {
    top: 50,
    bottom: '20%',
  },
  legend: {
    data: ['交易量'],
    right: '5%',
    itemWidth: 18,
    itemHeight: 12,
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: [{
    data: (function () {
      var tt = [];
      for (var i = 0; i < num; i++) {
        tt.push(dayData[i]["datetime"]);
      }
      return tt;
    })(),
    axisLine: {
      show: false,
      lineStyle: {
        color: '#07bffb'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0
    }
  }],
  yAxis: [{
    name: "批次",
    axisLine: {
      show: false,
      lineStyle: {
        color: '#07bffb'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    // interval:10,
    min: 0,
    max: 100,
    position: 'left'
  }],
  series: [{
    name: '交易量',
    type: 'bar',
    label: {
      normal: {
        show: true,
        position: 'top',
        color: '#fff'
      }
    },
    barWidth: '40%',
    barGap: 1,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#00fecc'
        }, {
          offset: 0.8,
          color: '#2690cf'
        }], false)
      }
    },
    data: (function () {
      var tt = [];
      for (var i = 0; i < num; i++) {
        tt.push(dayData[i]["cnt"])
      }
      return tt;
    })(),
  }]
}

bar.setOption(optionBar);

setInterval(function () {
  // debugger
  num++;
  if (num > 365) {
    num = 6;
  }
  var data0 = optionBar.series[0].data;
  data0.shift();
  data0.push(dayData[num]["cnt"]);

  optionBar.xAxis[0].data.shift();
  optionBar.xAxis[0].data.push(dayData[num]["datetime"]);

  bar.setOption(optionBar);
}, 2100);

// 馆藏行高和动效

var lineH = $('.book-collection li').height();
$('.book-collection li').css('line-height', lineH + 'px');

var pressNum = -1;

var rankbUl = $('.book-collection ul');
var rankbLen = rankbUl.children().length;
setInterval(function () {
  pressNum++;
  if (pressNum >= 8) {
    $('.book-collection li:lt(8)').hide();
  }
  if (pressNum > rankbLen) {
    pressNum = -1;
    $('.book-collection li:lt(8)').show();
  }
  var curLi = rankbUl.children().eq(pressNum);
  curLi.children('.book-rank').addClass('briRotate');
  curLi.siblings().children('.book-rank').removeClass('briRotate');
}, 1000);

// 网络舆情切换
var yuNum = -1;
var yuLen = $('.public-opinion ul:eq(0) li').length;

setInterval(function () {
  yuNum++;
  if (yuNum >= yuLen) {
    yuNum = 0;
  }

  $('.public-opinion ul:eq(0) li').eq(yuNum).show();
  $('.public-opinion ul:eq(0) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(1) li').eq(yuNum).show();
  $('.public-opinion ul:eq(1) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(2) li').eq(yuNum).show();
  $('.public-opinion ul:eq(2) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(3) li').eq(yuNum).show();
  $('.public-opinion ul:eq(3) li').eq(yuNum).siblings().hide();

}, 2000);

// 物流信息
var logistLen = $('.logistics .con-in').length;
var logNum = -1;
setInterval(function () {
  logNum++;
  if (logNum >= logistLen) {
    logNum = 0;
  }

  $('.logistics .con-in').eq(logNum).show();
  $('.logistics .con-in').eq(logNum).siblings().hide();

}, 4000);
var appIndex = new Vue({
  el: '#appIndex',
  data: {
    datalist: {},
    year: '',
    month: '',
    date: '',
    hour: '',
    minute: '',
    second: '',
    strDate: '',
    weather_curr: '',
    weather_icon: ''
  },
  methods: {
    getWeath: function() {
      var _this = this
      $.ajax({
        url:
          'http://api.k780.com:88/?app=weather.today&weaid=101160101&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=?',
        dataType: 'jsonp',
        type: 'Post',
        jsonpCallback: 'jsonpCallback',
        success: function(data) {
          _this.weather_icon = data.result.weather_icon
          _this.weather_curr = data.result.weather_curr
          console.log(data)
        }
      })
    },
    timeFormate: function(timeStamp) {
      var today
      var strDate
      today = new Date()
      var n_day = today.getDay()
      switch (n_day) {
        case 0:
          {
            strDate = '星期日'
          }
          break
        case 1:
          {
            strDate = '星期一'
          }
          break
        case 2:
          {
            strDate = '星期二'
          }
          break
        case 3:
          {
            strDate = '星期三'
          }
          break
        case 4:
          {
            strDate = '星期四'
          }
          break
        case 5:
          {
            strDate = '星期五'
          }
          break
        case 6:
          {
            strDate = '星期六'
          }
          break
        case 7:
          {
            strDate = '星期日'
          }
          break
      }
      var year = new Date(timeStamp).getFullYear()
      var month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? '0' + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1
      var date =
        new Date(timeStamp).getDate() < 10
          ? '0' + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate()
      var hour =
        new Date(timeStamp).getHours() < 10
          ? '0' + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours()
      var minute =
        new Date(timeStamp).getMinutes() < 10
          ? '0' + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes()
      var second =
        new Date(timeStamp).getSeconds() < 10
          ? '0' + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds()
      this.year = year
      this.month = month
      this.date = date
      this.hour = hour
      this.minute = minute
      this.second = second
      this.strDate = strDate
    }
  },
  mounted() {
    var _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      //   _this.date = new Date() // 修改数据date
      _this.timeFormate(new Date())
    }, 1000)
    console.log(666, this.datalist)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  },
  created: function() {
   // this.getWeath()
    // this.init()
    // console.log(this.datalist)
  }
})
$(function() {
  $('#FontScroll').FontScroll({ time: 2000, num: 1 })
  $('.timer').countTo({
    lastSymbol: '', //显示在最后的字符
    from: 0, // 开始时的数字
    speed: 2000, // 总时间
    refreshInterval: 10, // 刷新一次的时间
    beforeSize: 0, //小数点前最小显示位数，不足的话用0代替
    decimals: 0, // 小数点后的位数，小数做四舍五入
    onUpdate: function() {}, // 更新时回调函数
    onComplete: function() {
      for (i in arguments) {
        console.log(arguments[i])
      }
    }
  })
  $('.wbfgl').countTo({
    lastSymbol: '%', //显示在最后的字符
    from: 0, // 开始时的数字
    speed: 2000, // 总时间
    refreshInterval: 10, // 刷新一次的时间
    beforeSize: 0, //小数点前最小显示位数，不足的话用0代替
    decimals: 0, // 小数点后的位数，小数做四舍五入
    onUpdate: function() {}, // 更新时回调函数
    onComplete: function() {
      for (i in arguments) {
        console.log(arguments[i])
      }
    }
  })
  sbxanim()
  function sbxanim() {
    $('.sbxanim').countTo({
      lastSymbol: '', //显示在最后的字符
      from: 15, // 开始时的数字
      speed: 1000, // 总时间
      refreshInterval: 100, // 刷新一次的时间
      beforeSize: 0, //小数点前最小显示位数，不足的话用0代替
      decimals: 0, // 小数点后的位数，小数做四舍五入
      onUpdate: function() {
      }, // 更新时回调函数
      onComplete: function() {
        $('.sbxanim').text("35");
        $('.sbwxtext').text("设备维修");
        setTimeout(function() {
          sbxanim2()
        }, 3000)
      }
    })
  }
  function sbxanim2() {
    $('.sbxanim').countTo({
      lastSymbol: '', //显示在最后的字符
      from: 25, // 开始时的数字
      speed: 1000, // 总时间
      refreshInterval: 100, // 刷新一次的时间
      beforeSize: 0, //小数点前最小显示位数，不足的话用0代替
      decimals: 0, // 小数点后的位数，小数做四舍五入
      onUpdate: function() {
      }, // 更新时回调函数
      onComplete: function() {
        $('.sbxanim').text("69");
        $('.sbwxtext').text("维护保养");
        setTimeout(function() {
          sbxanim()
        }, 3000)
      }
    })
  }
})

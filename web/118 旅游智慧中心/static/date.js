class CurrentDate {
    constructor() {

    }
    getDate() {
        var date = new Date() // 获取时间
        var year = date.getFullYear() // 获取年
        var month = date.getMonth() + 1 // 获取月
        var strDate = date.getDate() // 获取日
        // var day = date.getDate() //
        var day = '日一二三四五六'.charAt(new Date().getDay()) // 周一返回的是1，周六是6，但是周日是0
        var hour = date.getHours() // 获取小时
        var minute = date.getMinutes() // 获取分钟
        var second = date.getSeconds() // 获取秒
        // 由于部分业务处理 是需要月份日份前面有0 故新增一个函数
        // this.getNum()
        $('.week').html('星期' + day)
        $('.date').html(year +
            '-' +
            this.getNum(month) +
            '-' +
            this.getNum(strDate) +
            ' ' +
            this.getNum(hour) +
            ':' +
            this.getNum(minute) +
            ':' +
            this.getNum(second))
    }
    getNum(i) {
        return i < 10 ? '0' + i : i
    }
    // 再加一个定时器每秒获取
    getTime() {
        this.getDate()
        setInterval(() => {
            this.getDate()
        }, 1000)
    }
}
var b = 0,a = 1;
switch(a){
  case 1 :
     b = 3
     break;
  case 2:
     console.log("12")
     break;
}
console.log(b)


function parent(name) {
  this.name = name
  this.age = 12

}
function children(name) { 
  this.children = parent
  this.children(name)
  this.getName = function(){
    console.log(this.name)
    console.log(this.age)
  }
}
var fu = new children("shuliqi")
console.log(fu.getName())




function paren() { 
  this.name = "shuliqi"
 
}
function children(name){
  this.getName = function () {
    console.log(this.name)
  }

}


var ch = new children('shuliqi')
paren.apply(ch,[1,2])
console.log(ch.getName())

var a
console.log(typeof a)


console.log([1,2,3] == true)

var foo = "get-element-by-id"
var arr = foo.split("-")
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1,arr[i].length)
  
}
console.log(arr.join(''))

var numberArray = [3, 6, 2, 4, 1, 5];
// 倒序
var str1 = numberArray.reverse()
console.log(str1)


var str2 = numberArray.sort((a,b) =>{
  return a - b
})
console.log(str2)

var str3 = numberArray.sort((a,b) =>{
  return b-a
})
console.log(str3)



var arr = ['c','B','A','a','e']
var str4 = arr.sort((a,b) =>{
  return a.toLowerCase() > b.toLowerCase() ? 1:-1
})

console.log(str4)




var date = new Date()
var year = date.getFullYear()
var month = date.getMonth() + 1
month = month < 10 ? '0' + month:month
var dt = date.getDate()
dt = dt < 10 ? '0' + dt : dt
console.log(year + '-' + month + '-' + dt)


var str = ' < tr > < td > {$id} < /td><td>{$name}</td > < /tr>'

var stt = str.replace(/{\$id}/g,'tony')
console.log(str)

function escapeHtml(str){
  return str.replace(/[<>&"]/g,function (a) { 
    switch(a){
      case '<':
         return "1";
         break;
      case '>':
         return "2";
         break;
      case '&':
         return "3";
         break;
      case '\"':
         return '4';  
         break;
    }
  })
}
console.log(escapeHtml('dhfdf>sdfhj<sdfhdjsf"sjsdhfdsf&sdgdfg'))


function random(start,end){
  var choise = end - start 
  return Math.floor(Math.random() * choise + start)
}
var flag = true
var result = []
while (flag) {
  var ran = random(10, 100)
  
  if(result.indexOf(ran) === -1) {
   
    result.push(ran)
  }
  if(result.length == 10){
    flag = false
  }

}
console.log(result.sort())

var array1 = ['a', 'b', 'c'];
var bArray = ['d', 'e', 'f'];
var a = array1.concat(bArray)
var shu = a.splice(1,1)
console.log(a)


var str = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e'
function shu(str) { 
  var arr = str.split('?')[1].split('&')
  var result = {}
  for (let i = 0; i < arr.length; i++) {
    var map = arr[i].split("=")
    result[map[0]] = map[1]
  }
  return result
 }
 console.log(shu(str))



for (var i = 1; i <= 3; i++) {

  setTimeout((function (a) {
    console.log(a);
  })(i), 0);
};
var str = "   skdhdh   sdhfd  "
function trim(str){
    return str.replace(/\s/g,'')
}
console.log(trim(str))
console.log(str)




function clone(obj){
  var result
  if(obj instanceof Array){
    var len = obj.length
    result = []
    var j = len
    while(j--){
      result[j] = clone(obj[j])
    }
    
  }
  else if(obj instanceof Object){
    result = {}
    for (const key in obj) {
       result[key] = clone(obj[key])
    }
  }
  else{
    return obj
  }
  return result
}
console.log(clone({name:"shuliqi",age:12}))



function obj() { 
  this.wow = function(){
    alert("wow")
  }
  this.yelp = function(){
    this.wow()
  }
 }


4
5
6
7
8
9
10
11
12
13
14
15


2
3
4
5
6
7
8
function Dog() {
  this.wow = function () {
    alert('Wow');
  }
  this.yelp = function () {
    this.wow();
  }
}
function MadDog() {
  this.yelp = function () {
    var self = this;
    setInterval(function () {
      self.wow();
    }, 500);
  }
}
MadDog.prototype = new Dog();

//for test
var dog = new Dog();
dog.yelp();
// var madDog = new MadDog();
// madDog.yelp();
/*大屏*/
// Các bạn có thể thay đổi giá trị các biến môi trường ở đây:
var radius = 240; // Độ rộng vòng xoay
var autoRotate = true; // Tự động xoay hay không
var rotateSpeed = -60; // đơn vị: giây/vòng. thời gian để xoay hết 1 vòng, dấu trừ để xoay ngược lại
var imgWidth = 120; // độ rộng ảnh (tính theo px)
var imgHeight = 170; // độ cao ảnh (tính theo px)


/*
        CHÚ Ý:
            + imgWidth, imgHeight sẽ dùng được cho cả video -> <video> cũng sẽ được thu nhỏ cho bằng <img>
            + nếu imgWidth, imgHeight đủ nhỏ, có thể <video> sẽ không hiện nút play/pause
            + Link nhạc lấy từ: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HoangTran&playlist=2&song=8&background=3
            + https://api.soundcloud.com/tracks/191576787/stream?client_id=587aa2d384f7333a886010d5f52f302a
            + Phiên bản 1 file .html duy nhất: https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

        Author: Hoang Tran, custom from code in tiktok video 
                https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
    */


// ===================== start =======================
setTimeout(init, 100);

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // gộp 2 mảng lại

// chỉnh độ lớn ảnh
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// chỉnh độ lớn ground - theo radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Không cho góc xoay phương Y ra ngoài khoảng 0-180
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Áp dụng góc xoay
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// tự động xoay
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// cài đặt events
if (mobilecheck()) {
  // ==================== Touch Events ====================
  document.ontouchstart = function(e) {
    clearInterval(obox.timer);
    e = e || window.event;
    var sX = e.touches[0].clientX,
        sY = e.touches[0].clientY;

    this.ontouchmove = function(e) {
      e = e || window.event;
      var nX = e.touches[0].clientX,
          nY = e.touches[0].clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      sX = nX;
      sY = nY;
    }

    this.ontouchend = function(e) {
      this.ontouchmove = this.ontouchend = null;
      obox.timer = setInterval(function() {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(obox);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(obox.timer);
          playSpin(true);
        }
      }, 17);
    }

    // return false;
  }
} else {
  // ==================== Mouse Events ====================
  document.onmousedown = function(e) {
    clearInterval(obox.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;

    this.onmousemove = function(e) {
      e = e || window.event;
      var nX = e.clientX,
          nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      sX = nX;
      sY = nY;
    }

    this.onmouseup = function(e) {
      this.onmousemove = this.onmouseup = null;
      obox.timer = setInterval(function() {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(obox);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(obox.timer);
          playSpin(true);
        }
      }, 13);
    }

    return false;
  }
  document.onmousewheel = function(e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };
}

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function mobilecheck() {
  var check = false;
  (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
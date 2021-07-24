(function () {
     var parent = $('#list');
    var child1 = document.getElementById('rowup');
    var child2 = document.getElementById('rowupcope');
    child2.innerHTML = child1.innerHTML;
    var i=0;
    setInterval(function () {
       if(parent.scrollTop() >= child1.scrollHeight) {
           i=0;
           parent.scrollTop(i);
       } else {
           i++;
           parent.scrollTop(i);
       }
    }, 60);
})()
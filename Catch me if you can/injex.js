
var x=window.innerHeight;
var y=window.innerWidth;
console.log(x,y);

$(".box").mouseenter(function(){
var left=Math.random();
left=(left*1180)+1;
left=Math.floor(left);
var top=Math.random();
top=(top*421)+1;
top=Math.floor(top);
$(this).css({
left:left,
top:top
});

});

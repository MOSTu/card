// var str = "";
// var str2 = "";
// document.getElementById("out").onkeypress = function(event){
// 	console.log(event);
// 	var key = event.key;
// 	str += key;
// 	console.log(str);

// 	var random = Math.round( Math.random() * (125 - 65) + 65 );
// 	console.log(random);
// 	str2 += String.fromCharCode(random);
// 	console.log(str2);
// 	this.value = str2;
// 	return false;
// }
// var box = document.getElementById("box")
// var i360 = 0;
// var x = 0;
// var y = 0;
// var rad = 25;
// function round(){
// 	i360 = (i360 + 0.02)%360;
// 	x = Math.sin(i360)*rad;
// 	y = Math.cos(i360)*rad;

// 	box.style.marginLeft = x + "px";
// 	box.style.marginTop = y + "px";
// }
// setInterval(round,1);

// var box2 = document.getElementById("box2");
// document.onmousemove = function(event){
// 	console.log(event);
// 	var ox = event.offsetX;
// 	var oy = event.offsetY;
// 	console.log(ox , oy);

// 	box2.style.marginLeft = ox + "px";
// 	box2.style.marginTop = oy + "px";
// }
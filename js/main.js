window.onload = function () {
	currentTime();   
};

var currentTime = function () {
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
	    seconds = date.getSeconds();

	var hour = document.querySelector("#hour"),
		minute = document.querySelector("#minute"),
		second = document.querySelector("#second");

	hour.innerHTML = hours;
	minute.innerHTML = minutes;	
	second.innerHTML = seconds;
};

setInterval(currentTime, 1000);



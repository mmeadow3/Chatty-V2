"use strict";
var $ajax = $.ajax({
		url: "initialMessages.json"
	}).done(renderinDOM) 

//console.log($ajax) /////gives jQuery object

function renderinDOM (data){    ///////passes in an argument to parse info from JSON file
	// console.log(data.firstMessages)
	for (var i = 0; i < data.firstMessages.length; i++) {
	$('#output').append("<h6>" + data.firstMessages[i].user + ": " + data.firstMessages[i].message + " (" + data.firstMessages[i].timestamp + ") " + "</h6>");
}
};
////////Data appended to DOM///////////










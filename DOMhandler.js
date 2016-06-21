"use strict";

//////targets the button and changes the body class "light" to "dark"-defined in the CSS////////
$("#darkTheme").click(function(){
$(".light").toggleClass("dark")});
///////////////////////////////////////////////////
/////targets the text and changes it to the CSS class .largetext/////////
$("#largeText").click(function(){
$("#output").toggleClass("enlargeText")});
///////////////////////////////////////////
/////////clear button functionality//////////
$("#clearMessages").click(function(){
	$("#output h6").remove();   ///////removes the h6 child of the output/////////!!!! notice the spacing!!!!!!
})
/////////////////////////////////////////
// $('.inputBox').keypress(function (keypress) {
//   if (keypress.which == 13) {
//  	//console.log("working") ////////// enter button is firing correctly
//  	$('#output').append("<h6>" + $('.inputBox').val() + "</h6>"); /////sucessfully outputs into output box///////////
//  	////////need input box to clear after pressing enter///////////////////////
//  	event.preventDefault();
//     event.currentTarget.value = ""; /////////This works, but not exactly using jQuery//////////////
//   }
// });
/////////need to be able to select what user you are to add message////////////
///will need to use :checked selector///////

	
$( ".radio input" ).click(function() {
	// console.log("fired"); //////// Click event is working ///////
	// console.log($('input[name=person]:checked').val()); ///////shows the person whos is being clicked
	})
$('.inputBox').keypress(function (keypress) {
  if (keypress.which == 13) {
 	//console.log("working") ////////// enter button is firing correctly
 	$('#output').append("<h6>" + $('input[name=person]:checked').val() + ": " + $('.inputBox').val() + "</h6>"); /////sucessfully outputs into output box///////////
 	////////need input box to clear after pressing enter///////////////////////
 	event.preventDefault();
    event.currentTarget.value = ""; /////////This works, but not exactly using jQuery//////////////
  } 
}); ///////function works perfectly now//////////

///////Need to add delete and edit buttons//////////
////////This is dynamically created button/////////
var $button = $('<button/>', {
  type: 'button',
  'class': 'dynBtn',
  id: 'mike',
  text: 'Here!',
  click: function() {
    window.alert('Hello! My id is '+ this.id);
  }
});

$button.appendTo('#output');
////////////////////////////////////////////








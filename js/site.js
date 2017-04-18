//Teel jQuery to give up the dollar sign
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

//js to test username and password
var BackgroundColor="RED"; 
var error = 'error';
var showError = false;
window.currentUser = "";
window.currentPassword = "";

$('#un').on('keyup focus blur', function(){
    window.currentUser = $(this).val();
});

$('#pass').on('keyup focus blur', function(){
    window.currentPassword = $(this).val();
});

 $('#form').on('submit', function(event) {
 	event.preventDefault();
   if (currentUser=="admin" &&  currentPassword=="admin") {
    var newURL = window.location= "class-schedule/index.html";
    $('#form')[0].reset();
    window.location.href = (newURL);

    document.body.style.backgroundColor=BackgroundColor //changing bg color
      }
   else{
      if (!showError) {
         $('#list').append($('<li></li>', { class: error, text : 'Username/password combination not found'}));
         showError=true;
      }
}

});

function submitRowAsForm(idRow) {
  form = document.createElement("form"); // CREATE A NEW FORM TO DUMP ELEMENTS INTO FOR SUBMISSION
  form.method = "post"; // CHOOSE FORM SUBMISSION METHOD, "GET" OR "POST"
  form.action = ""; // TELL THE FORM WHAT PAGE TO SUBMIT TO
  $("#"+idRow+" td").children().each(function() { // GRAB ALL CHILD ELEMENTS OF <TD>'S IN THE ROW IDENTIFIED BY idRow, CLONE THEM, AND DUMP THEM IN OUR FORM
        if(this.type.substring(0,6) == "select") { // JQUERY DOESN'T CLONE <SELECT> ELEMENTS PROPERLY, SO HANDLE THAT
            input = document.createElement("input"); // CREATE AN ELEMENT TO COPY VALUES TO
            input.type = "hidden";
            input.name = this.name; // GIVE ELEMENT SAME NAME AS THE <SELECT>
            input.value = this.value; // ASSIGN THE VALUE FROM THE <SELECT>
            form.appendChild(input);
        } else { // IF IT'S NOT A SELECT ELEMENT, JUST CLONE IT.
            $(this).clone().appendTo(form);
        }

    });
  form.submit(); // NOW SUBMIT THE FORM THAT WE'VE JUST CREATED AND POPULATED
}

$('#logout').click(function(event){
alert('You have been succesfully logged out.');
   $('#form')[0].reset();
   window.location = "../index.html";
   event.preventDefault();
});


$('.fall2016').hide();
$('.spring2017').hide();
$('.fall2017').hide();
$( "#back").hide();

$('#f16').click(function(){
  $( ".fall2016").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#s17').click(function(){
  $( ".spring2017").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#f17').click(function(){
  $( ".fall2017").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#back').click(function(){
  $( ".term").show();
  $( "#back").hide();
  $( "table").hide();
});

});



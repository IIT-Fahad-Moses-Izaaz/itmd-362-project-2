$.noConflict();

jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  //testing username and password 
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
});
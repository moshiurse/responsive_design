$(document).ready(function(){

var price = $("#price").val();
var quantity = $("#quantity").val();
var total = $("#total").val();

$("input").on("keypress", function(){
	var value = price*quantity;
	$("#total").val(value);



});
});
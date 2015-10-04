$("form").on("submit", function(event) {
	event.preventDefault();

	var mil = $("select#mil").val();
	var cen = $("select#centena").val();
	var dec = $("select#decena").val();
	var uni = $("select#unidad").val();
	var mil2= ["M", "MM", "MMM"];
	var cen2= ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	var dec2= ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	var uni2= ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

	var total = ((mil*100) + (cen*10) + (dec*1) + (uni));

	$("#tabla").fadeIn();
	$("#resultados").append("<tr> <td>" + total + "</td> <td>" + mil2[(mil-1)] + cen2[(cen-1)] + dec2[(dec-1)] + uni2[(uni-1)] + " </td> </tr>");
})

$("#empezar").on("click", function() {
	$("#todo").fadeIn();
})

$("#finalizar").on("click", function() {
	$("#todo").fadeOut();
})

$("#borrar").on("click", function() {
	$("#resultados").empty();
})
$("form").on("submit", function(event) {
	event.preventDefault();

	var numero = $("#ingreso").val();
	var digitos = numero.split("");

	var mil2= ["M", "MM", "MMM"];
	var cen2= ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	var dec2= ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	var uni2= ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

	if (numero < 0 || numero > 3999) {
		$("#advertencia").text("Ingresa un numero entre 1 y 3999");
	} else  if (digitos.length === 4){
		$("#tabla").fadeIn();
		$("#advertencia").empty();
		var mil = digitos[0]
		var cen = digitos[1]
		var dec = digitos[2]
		var uni = digitos[3]
		$("#resultados").append("<tr> <td>" + numero + "</td> <td>" + mil2[(mil-1)] + cen2[(cen-1)] + dec2[(dec-1)] + uni2[(uni-1)] + " </td> </tr>");

		} else  if (digitos.length === 3){
			$("#tabla").fadeIn();
			$("#advertencia").empty();
			var cen = digitos[0]
			var dec = digitos[1]
			var uni = digitos[2]
				$("#resultados").append("<tr> <td>" + numero + "</td> <td>" + cen2[(cen-1)] + dec2[(dec-1)] + uni2[(uni-1)] + " </td> </tr>");

			} else  if (digitos.length === 2){
				$("#tabla").fadeIn();
				$("#advertencia").empty();
				var dec = digitos[0]
				var uni = digitos[1]
				$("#resultados").append("<tr> <td>" + numero + "</td> <td>" + dec2[(dec-1)] + uni2[(uni-1)] + " </td> </tr>");

				} else  if (digitos.length === 1){
					$("#tabla").fadeIn();
					$("#advertencia").empty();
					var uni = digitos[0]
					$("#resultados").append("<tr> <td>" + numero + "</td> <td>" + uni2[(uni-1)] + " </td> </tr>");
					}
})

$("#empezar").on("click", function() {
	$("#todo").fadeIn();
})

$("#finalizar").on("click", function() {
	$("#tabla").fadeOut();
	$("#resultados").children().empty();
	$("#todo").fadeOut();
	$("#ingreso").val("");
})

$("#borrar").on("click", function() {
	$("#tabla").fadeOut();
	$("#resultados").children().empty();
})
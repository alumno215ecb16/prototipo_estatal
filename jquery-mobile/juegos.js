// JavaScript Document
function inicio(){
	var numero_1 = Math.floor((Math.random() * 10) + 1);
	var numero_2 = Math.floor((Math.random() * 10) + 1);
	var solucion1 = numero_1 * numero_1;
	var solucion2 = (numero_1 * numero_2) * 2; 
	var solucion3 = numero_2 * numero_2;
	document.getElementById("problema").innerHTML ="(" + numero_1 + "a + " + numero_2 + "b)";
	document.getElementById("cuadro_respuesta1").innerHTML = "";
	document.getElementById("cuadro_respuesta2").innerHTML = "";
	document.getElementById("cuadro_respuesta3").innerHTML = "";
	document.getElementById("resultado").innerHTML = "";
	document.getElementById("felicitación").innerHTML = "";
	
	for (i = 0; i < 3; i++) { 
	var respuesta_boton = Math.floor((Math.random() * 10) + 1);
	if (respuesta_boton < 6 && i == 0){
		document.getElementById("cuadro_opcion1").innerHTML = solucion1 + "a^2";
		document.getElementById("cuadro_opcion4").innerHTML = Math.floor((Math.random() * 100) + 1) + "a^2";
	}
	else if (respuesta_boton >= 6 && i == 0){
		document.getElementById("cuadro_opcion4").innerHTML = solucion1 + "a^2";
		document.getElementById("cuadro_opcion1").innerHTML = Math.floor((Math.random() * 100) + 1) + "a^2";
	}
	if (respuesta_boton < 6 && i == 1){
		document.getElementById("cuadro_opcion2").innerHTML = solucion2 + "ab";
		document.getElementById("cuadro_opcion5").innerHTML = Math.floor((Math.random() * 100) + 1) + "ab";
	}
	else if (respuesta_boton >= 6 && i == 1){
		document.getElementById("cuadro_opcion5").innerHTML = solucion2 + "ab";
		document.getElementById("cuadro_opcion2").innerHTML = Math.floor((Math.random() * 100) + 1) + "ab";
	}
	if (respuesta_boton < 6 && i == 2){
		document.getElementById("cuadro_opcion3").innerHTML = solucion3 + "b^2";
		document.getElementById("cuadro_opcion6").innerHTML = Math.floor((Math.random() * 100) + 1) + "b^2";
	}
	else if (respuesta_boton >= 6 && i == 2) {
		document.getElementById("cuadro_opcion6").innerHTML = solucion3 + "b^2";
		document.getElementById("cuadro_opcion3").innerHTML = Math.floor((Math.random() * 100) + 1) + "b^2";
	}
	document.getElementById("correcto1").innerHTML = solucion1;
	document.getElementById("correcto2").innerHTML = solucion2;
	document.getElementById("correcto3").innerHTML = solucion3;
	}
}
	
    function elegir(a , b){
	var respuesta = a.innerHTML;
	document.getElementById("cuadro_respuesta" + b).innerHTML = respuesta;
	}
	
	function comprobar(){
	var respuesta = 0;
		if (document.getElementById("cuadro_respuesta1").innerHTML == "", document.getElementById("cuadro_respuesta2").innerHTML == "", document.getElementById("cuadro_respuesta3").innerHTML == ""){
document.getElementById("resultado").innerHTML = "Primero llena todos los campos";
		}
		else {
				if (document.getElementById("cuadro_respuesta1").innerHTML == document.getElementById("correcto1").innerHTML + "a^2"){
			var respuesta = respuesta + 1;
				}
				else {
			var respuesta = respuesta + 0;
				}
				if (document.getElementById("cuadro_respuesta2").innerHTML == document.getElementById("correcto2").innerHTML + "ab"){
			var respuesta = respuesta + 1;
				}
				else {
			var respuesta = respuesta + 0;
				}
				if (document.getElementById("cuadro_respuesta3").innerHTML == document.getElementById("correcto3").innerHTML + "b^2"){
			var respuesta = respuesta + 1;
				}
				else {
			var respuesta = respuesta + 0;
				}
			document.getElementById("resultado").innerHTML = "Tienes " + respuesta + " respuestas correctas"
				if (respuesta == 3) {
			document.getElementById("felicitación").innerHTML = "¡CORRECTO!"
				}
			else {
			document.getElementById("felicitación").innerHTML = ""
				}
		}
	}

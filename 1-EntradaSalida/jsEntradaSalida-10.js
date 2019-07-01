/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado; 
    var descuento;

    importe = parseInt(document.getElementById("importe").value);

    descuento = importe * 0.25;
    resultado = importe - descuento;

    document.getElementById("resultado").value = resultado

    alert("El importe ingresado es " + importe + " pesos " + "va tener un descuento de " + descuento + " pesos " + ", el importe ingresado menos el descuento es " + resultado + " pesos" );
	
}

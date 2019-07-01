/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var sumar;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    sumar = num1 + num2;
    alert("La suma es " + sumar);
}

function restar()
{
    var num1;
    var num2;
    var resta;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    resta = num1 - num2;
    alert("La resta es " + resta);
}

function multiplicar()
{ 
	var num1;
    var num2;
    var multi;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    multi = num1 * num2;
    alert("La multiplicacion es " + multi);
}

function dividir()
{
	var num1;
    var num2;
    var div;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    div = num1 / num2;
    alert("La divicion es " + div);
}


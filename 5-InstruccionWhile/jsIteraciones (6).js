function mostrar()
{

	var contador = 0;
	var suma = 0;
	var numero = 1;
	var suma;
	var promedio;
	
	while (contador < 5)
	{
		numero =  parseInt(prompt("Por favor ingrese un numero"))
		contador++;
		suma = suma + numero;

	}
		promedio = suma / 5;



document.getElementById('suma').value= suma;
document.getElementById('promedio').value= promedio;

}//FIN DE LA FUNCIÓN
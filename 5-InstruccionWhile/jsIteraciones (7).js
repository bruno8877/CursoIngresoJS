function mostrar()
{

	var contador=0;
	var suma=0;
	var respuesta="si";
	var promedio;
	var numero;
		
	do
		{
			numero = parseInt(prompt("Por favor ingrese un numero"));
			while(isNaN(numero))
			{
				numero = parseInt(prompt("Error, re-ingrese un numero"));
			}
			respuesta = prompt("Quiere continuar?(ponga si o no)");
			while(!(respuesta == "si" && respuesta == "no"))
			{
				respuesta= prompt("Error, por favor re-ingrese si o no..")
			}
			contador++;
			suma += numero;
		}

	while(respuesta == "si");
	promedio = suma / contador;


document.getElementById('suma').value = suma;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN
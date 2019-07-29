function mostrar()
{
	var contadorNeg = 0;
	var positivo=0;
	var negativo=0;
	var numero;
	var respuesta='si';
	var flag = 0;
	var multNeg;
	do
		{
			numero = parseInt(prompt("Por favor ingrese un numero"));
			while(isNaN(numero))
			{
				numero = parseInt(prompt("Error, re-ingrese un numero"));
			}
			respuesta = prompt("Quiere continuar?(ponga si o no)");
			while(respuesta != "si" && respuesta != "no")
			{
				respuesta= prompt("Error, por favor re-ingrese si o no..")
			}
				
			if (numero >= 0)
			{
				positivo += numero;

			}

			else if (numero < 0 || flag == 0)
			{
				negativo += numero;
				flag = 1;
				contadorNeg++;
			}
		}
		while (respuesta == "si");
		multNeg = negativo * contadorNeg ;

		document.getElementById('suma').value=positivo;	
	document.getElementById('producto').value=multNeg;

}//FIN DE LA FUNCIÓN
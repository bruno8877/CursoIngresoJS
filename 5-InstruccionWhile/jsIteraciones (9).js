function mostrar()
{
	var numero;
	var contador = 0;
	var respuesta='si';
	var numeroMax;
	var numeroMin;
	var flag = 0;
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
	
			if (numero > numeroMax || flag == 0)
			{
				numeroMax = numero;

				
			}
			if (numero < numeroMin || flag == 0)
			{
				numeroMin = numero;
				flag = 1;
			}
			
	}

	while(respuesta == "si");

	document.getElementById("maximo").value = numeroMax;
	document.getElementById("minimo").value = numeroMin;




}//FIN DE LA FUNCIÓN
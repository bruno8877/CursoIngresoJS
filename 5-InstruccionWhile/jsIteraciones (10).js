function mostrar()
{

	var contadorPos= 0;
	var contadorNeg= 0;
	var contadorCeros= 0;
	var respuesta="no";
	var numero;
	var contadorPares = 0;
	var promedioPos;
	var promedioNeg;
	var resta;
	var positivo = 0;
	var negativo = 0;
	
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
			
			if (numero > 0 )
			{
				positivo+= numero;
				contadorPos++;
			}
			else if (numero < 0 )
			{
				negativo+= numero;
				contadorNeg++;
		
			}
			else
			{
				contadorCeros++;
			}		
			
			if (numero % 2 == 0)
			{
				contadorPares++;
			}

	}
	while(respuesta =="si");
	promedioNeg = negativo / contadorNeg;
	promedioPos = positivo / contadorPos;
	if (isNaN(promedioNeg) )
	{
		promedioNeg = 0;
	
	}
	if(isNaN(promedioPos))
	{
		promedioPos = 0;
	}
	resta = positivo - negativo;

document.write("1-La suma de los negativos es " + negativo + "<br>" + 
" 2-La suma de los positivos es " + positivo + "<br>" + 
" 3-La cantidad de positivos es " + contadorPos + "<br>" +  
" 4- La cantidad de negativos es " + contadorNeg + "<br>" + 
" 5-La cantidad de ceros es " + contadorCeros + "<br>" + 
" 6-La cantidad de números pares es " + contadorPares + "<br>" + 
" 7- El promedio de positivos es " + promedioPos.toFixed(2) + "<br>" + 
" 8- El promedios de negativos es " + promedioNeg.toFixed(2) + "<br>" + 
" 9- Diferencia entre positivos y negativos " + resta );


}//FIN DE LA FUNCIÓN
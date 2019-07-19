function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var numero;
	var respuesta='si';
	var flag = 0;
	do
		{
			numero = parseInt(prompt("Por favor ingrese un numero"));
			respuesta = prompt("Quiere continuar?(ponga si o no)");
				
			if (numero >= 0)
			{
				positivo = numero + positivo;
			}

			else
			{
				negativo = numero + negativo;
				flag = 1;
			}
		}

	
	while (respuesta == "si");
	document.getElementById('suma').value=positivo;	
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
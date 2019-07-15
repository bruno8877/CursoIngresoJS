function mostrar()
{
	var nota = Math.floor(Math.random() * 10 + 1);

	if(nota >=9)
	{
		alert("Excelente");
	}

	else if (nota >=4)
	{
		alert("Aprobo");
	}

	else 
	{
		alert("Vamos, la proxima se puede");
	}

	console.log(nota);
	
}//FIN DE LA FUNCIÓN
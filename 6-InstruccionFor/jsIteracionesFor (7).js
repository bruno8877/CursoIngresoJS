function mostrar()
{
    var numero;
    var contDiv = 0;

    numero = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numero) || numero < 0)
    {
        numero = parseInt(prompt("Error, por favor re-ingrese un numero: "));
    }

    for(var i = 1 ; i <= numero ; i++)
    {
        if(numero % i == 0)
        {
            contDiv++;
            console.log("Los numero divisores son: " + i);
        }
    }console.log("Los numeros divisores ingresados son: " + contDiv);

}//FIN DE LA FUNCIÓN
function mostrar()
{
    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("Ingrese un numero: "))
    while(isNaN(numero) || numero < 0)
    {
        numero = parseInt(prompt("Error, por favor re-ingrese un numero: "))
    }
    
    for(var i = 1 ; i <= numero ; i++)
    {
        if(i % 2 == 0)
        {
            contadorPares++;
            console.log(i);
        }
    }   console.log("Cantidad de numeros pares ingresados: " + contadorPares);



}//FIN DE LA FUNCIÓN
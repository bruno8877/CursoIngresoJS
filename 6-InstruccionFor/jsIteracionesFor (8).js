function mostrar()
{
    var numero;
    var cont = 0;
    var mensaje;

    numero = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numero) || numero < 0)
    {
        numero = parseInt(prompt("Error, por favor re-ingrese un numero: "));
    }

    for(var i = 1 ; i <= numero ; i++)
    {
        if(numero % i == 0)
        {
            cont++;
            console.log("El numero ingresado es divisible por: " + i);
        }

    } 

    if (cont == 2)
    {
       mensaje = "El numero ingresado " + numero + " es primo";
    }
    
    else 
    {
        mensaje =  "El numero ingresado " + numero + " no es primo";
    }

    console.log(mensaje);



}//FIN DE LA FUNCIÓN
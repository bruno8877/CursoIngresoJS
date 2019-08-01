function mostrar()
{
    var numero;
    for (; ;) 
    {
        numero = parseInt(prompt("Ingrese un numero:"));
        while (isNaN(numero) || numero < 0) 
        {
            numero = parseInt(prompt("Error. Ingrese un numero:"));
        }
        
        if (numero == 9) 
        {
            break;
        }
    }

}//FIN DE LA FUNCIÓN
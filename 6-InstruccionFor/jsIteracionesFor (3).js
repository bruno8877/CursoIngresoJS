function mostrar()
{

    var repetciones = parseInt(prompt("ingrese el número de repeticiones"));
        while(repetciones <= 0)
        {
            repetciones = parseInt(prompt("Error, por favor re-ingrese el número de repeticiones"));
        }

    for (var i = 1 ; i <= repetciones ; i++)
    {
        console.log(i + ")" + "Hola UTN FRA");
    }


}//FIN DE LA FUNCIÓN
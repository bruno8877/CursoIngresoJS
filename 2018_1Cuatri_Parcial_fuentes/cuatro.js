function mostrar()
{
    var numero1 = parseInt(prompt("Ingrese un numero: "));
    var numero2 = parseInt(prompt("Ingrese otro numero: "));
    var mensaje;
    var resta;
    var suma;

    if(numero1 == numero2)
    {
        mensaje = "El resultado es " + numero1 + " y " + numero2;
    }

    else if(numero1 > numero2)
    {
        resta = numero1 - numero2;
        mensaje = "La resta es " + resta;
    }

    else
    {
        suma = numero1 + numero2;
        mensaje = "La suma es " + suma;
        if(suma > 10)
        {
            mensaje = "La suma es " + suma + " y supero el 10";
        }
    }

    alert(mensaje);
}

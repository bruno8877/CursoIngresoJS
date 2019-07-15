function mostrar()
{
    var edad;

    edad = document.getElementById("edad").value;

    if (edad >= 18)
    {
        alert("Usted es mayor de 18 años..");
    }
 
    else if (edad <= 17 && edad >= 13)
    {
        alert("Usted es adolecente..");
    }

    else 
    {
        alert("Es menor de 13 años..")
    }



}//FIN DE LA FUNCIÓN
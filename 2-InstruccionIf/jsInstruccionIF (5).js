function mostrar()
{
    var edad;

    edad = document.getElementById("edad").value;

    if (edad >= 18)
    {
        alert("Usted no es adolecente..");
    }
 
    else if (edad <= 17 && edad >= 13)
    {
        alert("Usted es adolecente..");
    }

    else 
    {
        alert("Usted es adolecente..")
    }



}//FIN DE LA FUNCIÓN
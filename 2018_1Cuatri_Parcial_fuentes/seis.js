function mostrar()
{
    var hora = parseInt(document.getElementById("laHora").value);

    var mensaje;

    switch(hora)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:    
        case 11:
            mensaje = "Es de mañana";
            break;
        
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje = "Es de tarde";
            break;
        
        default:
            if(hora >= 20 && hora <= 24 || hora >= 1 && hora <= 5)
            {
                mensaje= "Es de noche y es hora de dormir";

            }
            else
            {
                mensaje = "La hora ingresada no es valida";
            }
            

    }alert(mensaje);
}

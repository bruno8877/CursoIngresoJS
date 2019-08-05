function mostrar()
{
    var planeta = prompt("Ingrese un planeta del sistema solar ");
    var mensaje = "El planeta ingresado no es valido";


    switch(planeta)
    {
        case "tierra":
                mensaje = "acá vivimos";
                break
        
        case "mercurio":
        case "venus":
        case "marte":
        case "jupiter":
                mensaje = "acá hace más calor";
                break
        
        case "saturno":
        case "urano":
        case "neptuno":
                mensaje = "acá hace más frio";
                break
    }alert(mensaje);

}

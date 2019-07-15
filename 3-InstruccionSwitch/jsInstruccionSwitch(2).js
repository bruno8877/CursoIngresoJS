function mostrar()
{
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {   
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break 

        case "Julio":
        case "Agosto":
        alert("Abrigate que hace frio.")
        break
        
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Abril":
        case "Mayo":
        case "Junio":
        alert("Falta para el invierno.")
        break
        
    }


}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Enero":
        case "Marzo":
        case "Diciembre":
        case "Julio":
        case "Agosto":
        case "Mayo":
        alert("Tiene 31 dias");
        break
        
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Abril":
        case "Junio":
        alert("Tiene 30 dias")
        break

        case "Febrero":
        alert("Tiene 29 dias")
        break
    }

}//FIN DE LA FUNCIÓN
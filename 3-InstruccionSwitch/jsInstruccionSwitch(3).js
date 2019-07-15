function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
{
    
    case "Febrero":
    alert("Este mes no tiene más de 29 días");
    break
    
    case "Enero":
    case "Marzo":
    case "Diciembre":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Este mes tiene 30 o más días");
    break

}
	
	


}//FIN DE LA FUNCIÓN
function mostrar()
{
     
    var laHora = document.getElementById("hora").value;

    switch(laHora)
    {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        alert("Es de madrugada..");
        break
        
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
        alert("Es de mañana..");
        break

        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
        alert("Es de tarde..");
        break

        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
        alert("Es de noche..");
        break
        
        default:
            alert("La hora ingresada es incorrecta..")
            break
    }

}
//FIN DE LA FUNCIÓN

/*if(laHora >= 7 && laHora <= 11)
{
    alert("Es de mañana..");
}
else if (laHora >=12 && laHora <= 19)
{
    alert("Es de tarde..");    
}
else if (laHora >= 20 && laHora <= 24)
{
    alert("Es de noche..");
}*/
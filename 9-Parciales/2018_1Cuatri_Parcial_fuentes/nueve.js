function mostrar()
{   
    var peso;
    var marca;
    var temperatura;
    var respuesta;
    var tempPar = 0;
    var pesoMAX;
    var pesoMIN;
    var flag = 0;
    var marcaMAX;
    var tempMenor = 0;
    var suma = 0;
    var acumulador = 0;
    var promedio;

    do
    {
        marca = prompt("Ingrese la marca del producto: ");
        while(!(isNaN(marca)))
        {
            marca = prompt("Error, por favor re-ingrese la marca del producto: ");
        }
        
        peso = parseInt(prompt("Ingrese el peso: "));
        while(isNaN(peso) || peso < 1 || peso >100)
        {
            peso = parseInt(prompt("Error, por favor re-ingrese el peso: "));
        }
        
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento: "));
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30 )
        {
            temperatura= parseInt(prompt("Error, por favor re-ingrese la temperatura de almacenamiento"))
        }
        
        respuesta = prompt("Quiere continuar?(ponga si o no)");
        while(respuesta != "si" && respuesta != "no")
        {
            respuesta = prompt("Error, por favor re-ingrese si o no...");
        }
        
        if(temperatura % 2 == 0)
        {
            tempPar++;
        }
        
        if(peso > pesoMAX || flag == 0 )
        {
            pesoMAX = peso;
            marcaMAX = marca;
        }

        if(peso < pesoMIN || flag == 0 )
        {
            pesoMIN= peso;
            flag = 1;
        }
        
        if(temperatura < 0)
        {
            tempMenor++;
        }
  
        suma+= peso;
        acumulador++;

    }while(respuesta == "si");

    promedio = suma / acumulador;

    document.write("a) La cantidad de temperaturas pares es: " + tempPar + "<br>" + 
    "b) La marca del producto más pesado es: " + marcaMAX + "<br>" + 
    "c) La cantidad de productos que se conservan a menos de 0 grados son: " + tempMenor + "<br>" +
    "d) El promedio del peso de todos los productos es: " + promedio + "<br>" +	
    "f) El peso máximo y el mínimo es: " + pesoMAX + " y " + pesoMIN);
}
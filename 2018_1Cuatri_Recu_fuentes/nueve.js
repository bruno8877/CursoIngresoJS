function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var respuesta;
    var contPar = 0;
    var pesoMax;
    var nombreMax;
    var tempMax;
    var flag = 0;
    var pesoMin;
    var contTempMenor = 0;
    var acumuladorPeso = 0;
    var suma =0;
    var promedio;
    var pesoMaxTemp;

    do
    {
        nombre= prompt("Ingrese el nombre del animal: ");
        while(!(isNaN(nombre)))
        {
            nombre= prompt("Error, por favor re-ingrese el nombre del animal: ");
        }
    
        peso = parseInt(prompt("Ingrese el peso del animal: "));
        while(isNaN(peso) || peso < 1 || peso > 1000)
        {
            peso = parseInt(prompt("Error, por favor re-ingrese el peso del animal: "));
        }
    
        temperatura = parseInt(prompt("Ingrese la temperatura del habitat: "));
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = parseInt(prompt("Error, por favor re-ingrese la temperatura del habitat: "));
        }
        
        respuesta = prompt("Quiere continuar? (ponga si o no)");
        while(respuesta != "si" && respuesta != "no")
        {
            respuesta = prompt("Error, ingrese si o no");
        }

        if(temperatura % 2 == 0)
        {
            contPar++;
        }

        if(peso > pesoMax || flag == 0 )
        {
            pesoMax = peso;
            nombreMax = nombre;
            tempMax = temperatura;
            flag = 1;
            
        }
     
        if(temperatura < 0 )
        {
            contTempMenor++;
            pesoMaxTemp = peso;
            pesoMin = peso;
            
        }
    
        suma += peso;
        acumuladorPeso++;
    }while(respuesta == "si");
    promedio = suma / acumuladorPeso;

    document.write("a) La cantidad de temperaturas pares " + contPar + "<br>" + 
    "b) El nombre y temperatura del animal más pesado " + nombreMax  + tempMax + "<br>" + 
    "c) La cantidad de animales que viven a menos de 0 grados " + contTempMenor + "<br>" +
    "d) El promedio del peso de todos los animales " + promedio + "<br>" +
    "f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero " + pesoMaxTemp + pesoMin );

}

function mostrar()
{
    var numero;
    var letra;
    var contPar = 0;
    var contImpar = 0;
    var contCeros= 0;
    var PromedioPos;
    var numeroMax;
    var letraMax;
    var numeroMin;
    var letraMin;
    var respuesta;
    var negativo = 0;
    var positivo = 0;
    var flag = 0;
    var contPos = 0;

    do  
    {
        numero = parseInt(prompt("Por favor Ingrese un numero: "));
        while(isNaN(numero) || numero < -100 || numero > 100)
        {
            numero = parseInt(prompt("Error, por favor re-ingrese un numero: "));
        }

        letra = prompt("Por favor ingrese una letra:");
        while(!(isNaN(letra)))
        {
            letra = prompt("Error, por favor re-ingrese una letra:");
        }

        respuesta = prompt("Quiere continuar?(ponga si o no)");
        while(respuesta != "si" && respuesta != "no")
        {
            respuesta= prompt("Error, por favor re-ingrese si o no..")
        }
        
        if(numero == 0)
        {
            contCeros++;
        }
        else if (numero % 2== 0)
        {
            contPar++;
        }
        else 
        {
            contImpar++;
        }
        if(numero > 0)
        {
            positivo += numero;
            contPos++;
        }
        else if(numero < 0)
        {
            negativo += numero;
        }
        
        
        if(numero > numeroMax || flag ==0)
        {
            numeroMax = numero;
            letraMax = letra;
        }
        
        if (numero < numeroMin || flag == 0)
        {
            numeroMin = numero;
            letraMin = letra;
            flag = 1
        }


        
    }while(respuesta == "si");
    PromedioPos = positivo / contPos;
    document.write("a) La cantidad de números pares es " + contPar + "<br>" +
    "b) La cantidad de números impares " + contImpar + "<br>" +
    "c) La cantidad de ceros " + contCeros +  "<br>" +
    "d) El promedio de todos los números positivos ingresados " + PromedioPos + "<br>" +
    "e)La suma de todos los números negativos " + negativo  + "<br>"+
    "f)El número y la letra del máximo es " + numeroMax + letraMax + ", y el minimo " + numeroMin + letraMin );
}

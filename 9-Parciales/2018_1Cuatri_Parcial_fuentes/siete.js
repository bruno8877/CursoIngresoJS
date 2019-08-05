function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var notaBaja;
    var sexoMin;
    var contaVar = 0;
    var flag = 0;
    var contNotas = 0;


    for(var i = 1; i <= 5; i++)
    {
        nota = parseInt(prompt("Ingrese la nota: "));
        while(isNaN(nota) || nota < 0)
        {
            nota = parseInt(prompt("Error, por favor re-ingrese la nota: "))
        }

        sexo = prompt("Ingrese el sexo (f o m): ");
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Error, por favor re-ingrese el sexo (f o m): ");
        }
    
    
       if(nota < notaBaja || flag == 0 )
       {
            notaBaja = nota;
            sexoMin = sexo;  
            flag = 1;
        }     

       if(nota >= 6 && sexo == "m")
       {
           contaVar++;
       }
       
       contNotas+= nota;

    }

        promedio = contNotas / 5;

        alert("a) El promedio de las notas totales es " + promedio +
        " b) La nota más baja y el sexo de esa persona es " + notaBaja + sexoMin +
        " c) La cantidad de varones que su nota haya sido mayor o igual a 6 es " + contaVar);

}

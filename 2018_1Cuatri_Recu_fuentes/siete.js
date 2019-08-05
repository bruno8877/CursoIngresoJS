function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var sumaNotas= 0;
    var notaBaja;
    var sexoBajo;
    var flag = 0;
    var contVar = 0;

    for(var i = 0; i < 5; i++)
    {
        nota = parseInt(prompt("Ingrese un nota: "));
        while(isNaN (nota) || nota < 0 || nota > 10)
        {
            nota = parseInt(prompt("Error, por favor re-ingrese un nota: "));
        }
        
        sexo = prompt("Ingrese el sexo: (f o m)");
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Error, por favor ingrese f o m..");
        }
        sumaNotas += nota;
        
        if(nota < notaBaja || flag == 0)
        {
            notaBaja = nota;
            sexoBajo = sexo;
        }

        if (sexo == "m" && nota >= 6)
        {
            contVar++;
        }
    }
        promedio = sumaNotas / 5;
    document.write("a) El promedio de las notas totales es " + promedio + "<br>" + 
    "b) La nota más baja y el sexo de esa persona es " + notaBaja + sexoBajo + "<br>" +
    "c) La cantidad de varones que su nota haya sido mayor o igual a 6 es " + contVar);
}

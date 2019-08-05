
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = parseInt(prompt("Ingrese el largo del rectangulo: "));
    ancho = parseInt(prompt("Ingrese el ancho del rectangulo: "));
    perimetro = (largo + ancho) * 2;
    alert("El perimetro del rectangulo es: " + perimetro);
}

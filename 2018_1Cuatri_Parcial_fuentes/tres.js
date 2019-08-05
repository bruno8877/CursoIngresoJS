function mostrar()
{
    var precio = parseInt(prompt("Ingrese el precio: "));
    var porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento: "));
    var descuento;
    var precioFinal;

    descuento = precio * porcentaje / 100;

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal.toFixed(2);
}

function confirmarEdad() {
    let confirmacion = confirm("�Eres mayor de 18 a�os?");
    if (confirmacion) {
        document.getElementById("confirmacion-edad").style.display = "none";
        document.getElementById("contenido-principal").style.display = "block";
    } else {
        alert("No puedes acceder al contenido.");
    }
}

// Saldo original de los vendedores (esto es solo un ejemplo, puede ser dinámico en un sistema real)
let saldoVendedores = {
    "Vendedor 1": 50,
    "Vendedor 2": 100,
    // Agrega más vendedores según sea necesario
};

// Función para iniciar el chat con un vendedor
function iniciarChat(vendedor) {
    vendedorActivo = vendedor; // Guardamos el vendedor activo
    document.getElementById("chatWindow").style.display = "block"; // Mostramos la ventana de chat
    document.getElementById("chatTitle").innerText = "Chat con " + vendedor; // Actualizamos el título del chat
}

// Función para cerrar el chat
function cerrarChat() {
    document.getElementById("chatWindow").style.display = "none"; // Ocultamos la ventana de chat
}

// Función para enviar el mensaje
function enviarMensaje() {
    const mensaje = document.getElementById("chatInput").value; // Obtenemos el mensaje del cliente

    if (mensaje.trim() === "") {
        alert("Por favor, escribe un mensaje.");
        return;
    }

    // Mostrar el mensaje en la ventana de chat
    const mensajeCliente = document.createElement("div");
    mensajeCliente.classList.add("mensaje-cliente");
    mensajeCliente.innerText = "Cliente: " + mensaje;
    document.getElementById("chatMessages").appendChild(mensajeCliente);

    // Limpiar el área de entrada
    document.getElementById("chatInput").value = "";

    // Simular una respuesta del vendedor
    setTimeout(() => {
        const mensajeVendedor = document.createElement("div");
        mensajeVendedor.classList.add("mensaje-vendedor");
        mensajeVendedor.innerText = vendedorActivo + ": ¡Hola! ¿Cómo puedo ayudarte?";
        document.getElementById("chatMessages").appendChild(mensajeVendedor);
    }, 1000); // Respuesta después de 1 segundo
}

// Función para mostrar el saldo después de aplicar el descuento del 30%
function mostrarSaldo(vendedor) {
    let saldoOriginal = saldoVendedores[vendedor];
    let saldoConDescuento = saldoOriginal - (saldoOriginal * 0.30);
    
    alert(`El saldo disponible de ${vendedor} es: R$ ${saldoConDescuento}`);
    
    // Mostrar el saldo actualizado en el HTML (eliminando el 30% de comisión)
    document.getElementById(`saldo${vendedor === 'Vendedor 1' ? 1 : 2}`).innerText = saldoConDescuento.toFixed(2);
}
// Variable global para el vendedor con el que se está chateando
let vendedorActivo = "";

// Función para iniciar el chat con un vendedor
function iniciarChat(vendedor) {
    vendedorActivo = vendedor; // Guardamos el vendedor activo
    document.getElementById("chatWindow").style.display = "block"; // Mostramos la ventana de chat
    document.getElementById("chatTitle").innerText = "Chat con " + vendedor; // Actualizamos el título del chat
}

// Función para cerrar el chat
function cerrarChat() {
    document.getElementById("chatWindow").style.display = "none"; // Ocultamos la ventana de chat
}

// Función para enviar el mensaje
function enviarMensaje() {
    const mensaje = document.getElementById("chatInput").value; // Obtenemos el mensaje del cliente

    if (mensaje.trim() === "") {
        alert("Por favor, escribe un mensaje.");
        return;
    }

    // Mostrar el mensaje en la ventana de chat
    const mensajeCliente = document.createElement("div");
    mensajeCliente.classList.add("mensaje-cliente");
    mensajeCliente.innerText = "Cliente: " + mensaje;
    document.getElementById("chatMessages").appendChild(mensajeCliente);

    // Limpiar el área de entrada
    document.getElementById("chatInput").value = "";

    // Simular una respuesta del vendedor
    setTimeout(() => {
        const mensajeVendedor = document.createElement("div");
        mensajeVendedor.classList.add("mensaje-vendedor");
        mensajeVendedor.innerText = vendedorActivo + ": ¡Hola! ¿Cómo puedo ayudarte?";
        document.getElementById("chatMessages").appendChild(mensajeVendedor);
    }, 1000); // Respuesta después de 1 segundo
}
function iniciarChat(vendedor) {
    alert('Iniciando chat con ' + vendedor); // Simplemente muestra una alerta por ahora
}
document.querySelectorAll('.vendedor button').forEach((button, index) => {
    button.addEventListener('click', function() {
        if (index % 2 === 0) {
            alert("Iniciando chat con el vendedor...");
        } else {
            alert("Iniciando videollamada con el vendedor...");
        }
    });
});
// Manejo del formulario de registro de vendedor
document.getElementById("form-registro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const foto = document.getElementById("foto").files[0];
    const video = document.getElementById("video").files[0];

    if (foto && video) {
        // Aquí puedes agregar lógica para subir las fotos y videos a un servidor
        alert(`Vendedor Registrado: ${nombre}`);
        alert(`Descripción: ${descripcion}`);
        alert(`Foto y Video cargados correctamente`);
        
        // Limpiar el formulario después del registro
        document.getElementById("form-registro").reset();
    } else {
        alert("Por favor, carga una foto y un video.");
    }
});// Función para calcular el costo y generar código de pago
document.getElementById("form-pago").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const tiempo = parseInt(document.getElementById("tiempo").value);
    let costo;
    
    // Calculando el costo según el tiempo
    if (tiempo <= 3) {
        costo = 5;
    } else if (tiempo <= 5) {
        costo = 8;
    } else if (tiempo <= 10) {
        costo = 30;
    } else if (tiempo <= 15) {
        costo = 45;
    } else {
        alert("El tiempo máximo permitido es 15 minutos.");
        return;
    }
    
    // Generando un código único para el pago
    const codigoPago = "COD-" + Math.floor(Math.random() * 1000000);
    
    // Detalles de la cuenta bancaria (esto sería dinámico en una integración real)
    const cuentaBanco = "Cuenta Bancaria: 1234-5678-90";
    
    // Mostramos los detalles del pago
    document.getElementById("costo").innerText = `Costo por ${tiempo} minutos: R$ ${costo}`;
    document.getElementById("codigo-pago").innerText = `Código de Pago: ${codigoPago}`;
    document.getElementById("cuenta-banco").innerText = cuentaBanco;
    
    // Mostramos la sección de pago
    document.getElementById("detalles-pago").style.display = "block";
});
let pagosRealizados = [];

document.getElementById("form-pago").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const tiempo = parseInt(document.getElementById("tiempo").value);
    let costo;
    
    if (tiempo <= 3) {
        costo = 5;
    } else if (tiempo <= 5) {
        costo = 8;
    } else if (tiempo <= 10) {
        costo = 30;
    } else if (tiempo <= 15) {
        costo = 45;
    } else {
        alert("El tiempo máximo permitido es 15 minutos.");
        return;
    }
    
    const codigoPago = "COD-" + Math.floor(Math.random() * 1000000);
    const cuentaBanco = "Cuenta Bancaria: 1234-5678-90";
    
    // Guardar el pago realizado
    pagosRealizados.push({
        codigo: codigoPago,
        costo: costo,
        tiempo: tiempo
    });
    
    // Mostrar detalles del pago
    document.getElementById("costo").innerText = `Costo por ${tiempo} minutos: R$ ${costo}`;
    document.getElementById("codigo-pago").innerText = `Código de Pago: ${codigoPago}`;
    document.getElementById("cuenta-banco").innerText = cuentaBanco;
    document.getElementById("detalles-pago").style.display = "block";
    
    // Actualizar el panel de administrador
    actualizarPanelAdmin();
});

// Función para actualizar el panel de administrador
function actualizarPanelAdmin() {
    const listaPagos = document.getElementById("lista-pagos");
    listaPagos.innerHTML = "";  // Limpiar la lista
    
    pagosRealizados.forEach(pago => {
        const li = document.createElement("li");
        li.innerText = `Código: ${pago.codigo}, Duración: ${pago.tiempo} min, Costo: R$ ${pago.costo}`;
        listaPagos.appendChild(li);
    });
    
    // Mostrar el panel de administrador
    document.getElementById("panel-admin").style.display = "block";
}

<script src="scripts.js"></script>
function iniciarChat(vendedor) {
    document.getElementById("chatWindow").style.display = "block";
    document.getElementById("chatTitle").innerText = `Chat con ${vendedor}`;
}

function cerrarChat() {
    document.getElementById("chatWindow").style.display = "none";
}

function enviarMensaje() {
    const mensaje = document.getElementById("chatInput").value;
    const mensajesDiv = document.getElementById("chatMessages");
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.textContent = mensaje;
    mensajesDiv.appendChild(mensajeDiv);
    document.getElementById("chatInput").value = ""; // Limpiar el campo de texto
}function iniciarVideollamada(vendedor) {
    document.getElementById("videollamada").style.display = "block";
    document.getElementById("nombreVendedor").innerText = vendedor;

    // Aquí deberías integrar WebRTC o algún servicio de videollamada como Twilio, Agora, etc.
    // El código WebRTC básico implica configurar las conexiones de señalización y video.
}

function terminarVideollamada() {
    document.getElementById("videollamada").style.display = "none";
    // Detener los stream de video y cerrar la conexión WebRTC.
}

document.getElementById("form-pago").addEventListener("submit", function(e) {
    e.preventDefault();

    const tiempo = document.getElementById("tiempo").value;
    let costo = 0;

    if (tiempo == 3) {
        costo = 5;
    } else if (tiempo == 5) {
        costo = 8;
    } else if (tiempo == 10) {
        costo = 30;
    } else if (tiempo == 15) {
        costo = 45;
    }

    document.getElementById("costo").textContent = `Costo: R$ ${costo}`;
    document.getElementById("codigo-pago").textContent = `Código QR: [Código PIX generado aquí]`;
    document.getElementById("cuenta-banco").textContent = `Cuenta para el pago: 12345-6 (Banco SARAX)`;

    document.getElementById("detalles-pago").style.display = "block";
});


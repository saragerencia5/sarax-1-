// Saldo original de los vendedores (esto es solo un ejemplo, puede ser din�mico en un sistema real)
let saldoVendedores = {
    "Vendedor 1": 50,
    "Vendedor 2": 100,
    // Agrega m�s vendedores seg�n sea necesario
};

// Funci�n para iniciar el chat con un vendedor
function iniciarChat(vendedor) {
    vendedorActivo = vendedor; // Guardamos el vendedor activo
    document.getElementById("chatWindow").style.display = "block"; // Mostramos la ventana de chat
    document.getElementById("chatTitle").innerText = "Chat con " + vendedor; // Actualizamos el t�tulo del chat
}

// Funci�n para cerrar el chat
function cerrarChat() {
    document.getElementById("chatWindow").style.display = "none"; // Ocultamos la ventana de chat
}

// Funci�n para enviar el mensaje
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

    // Limpiar el �rea de entrada
    document.getElementById("chatInput").value = "";

    // Simular una respuesta del vendedor
    setTimeout(() => {
        const mensajeVendedor = document.createElement("div");
        mensajeVendedor.classList.add("mensaje-vendedor");
        mensajeVendedor.innerText = vendedorActivo + ": �Hola! �C�mo puedo ayudarte?";
        document.getElementById("chatMessages").appendChild(mensajeVendedor);
    }, 1000); // Respuesta despu�s de 1 segundo
}

// Funci�n para mostrar el saldo despu�s de aplicar el descuento del 30%
function mostrarSaldo(vendedor) {
    let saldoOriginal = saldoVendedores[vendedor];
    let saldoConDescuento = saldoOriginal - (saldoOriginal * 0.30);
    
    alert(`El saldo disponible de ${vendedor} es: R$ ${saldoConDescuento}`);
    
    // Mostrar el saldo actualizado en el HTML (eliminando el 30% de comisi�n)
    document.getElementById(`saldo${vendedor === 'Vendedor 1' ? 1 : 2}`).innerText = saldoConDescuento.toFixed(2);
}
// Variable global para el vendedor con el que se est� chateando
let vendedorActivo = "";

// Funci�n para iniciar el chat con un vendedor
function iniciarChat(vendedor) {
    vendedorActivo = vendedor; // Guardamos el vendedor activo
    document.getElementById("chatWindow").style.display = "block"; // Mostramos la ventana de chat
    document.getElementById("chatTitle").innerText = "Chat con " + vendedor; // Actualizamos el t�tulo del chat
}

// Funci�n para cerrar el chat
function cerrarChat() {
    document.getElementById("chatWindow").style.display = "none"; // Ocultamos la ventana de chat
}

// Funci�n para enviar el mensaje
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

    // Limpiar el �rea de entrada
    document.getElementById("chatInput").value = "";

    // Simular una respuesta del vendedor
    setTimeout(() => {
        const mensajeVendedor = document.createElement("div");
        mensajeVendedor.classList.add("mensaje-vendedor");
        mensajeVendedor.innerText = vendedorActivo + ": �Hola! �C�mo puedo ayudarte?";
        document.getElementById("chatMessages").appendChild(mensajeVendedor);
    }, 1000); // Respuesta despu�s de 1 segundo
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
        // Aqu� puedes agregar l�gica para subir las fotos y videos a un servidor
        alert(`Vendedor Registrado: ${nombre}`);
        alert(`Descripci�n: ${descripcion}`);
        alert(`Foto y Video cargados correctamente`);
        
        // Limpiar el formulario despu�s del registro
        document.getElementById("form-registro").reset();
    } else {
        alert("Por favor, carga una foto y un video.");
    }
});// Funci�n para calcular el costo y generar c�digo de pago
document.getElementById("form-pago").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const tiempo = parseInt(document.getElementById("tiempo").value);
    let costo;
    
    // Calculando el costo seg�n el tiempo
    if (tiempo <= 3) {
        costo = 5;
    } else if (tiempo <= 5) {
        costo = 8;
    } else if (tiempo <= 10) {
        costo = 30;
    } else if (tiempo <= 15) {
        costo = 45;
    } else {
        alert("El tiempo m�ximo permitido es 15 minutos.");
        return;
    }
    
    // Generando un c�digo �nico para el pago
    const codigoPago = "COD-" + Math.floor(Math.random() * 1000000);
    
    // Detalles de la cuenta bancaria (esto ser�a din�mico en una integraci�n real)
    const cuentaBanco = "Cuenta Bancaria: 1234-5678-90";
    
    // Mostramos los detalles del pago
    document.getElementById("costo").innerText = `Costo por ${tiempo} minutos: R$ ${costo}`;
    document.getElementById("codigo-pago").innerText = `C�digo de Pago: ${codigoPago}`;
    document.getElementById("cuenta-banco").innerText = cuentaBanco;
    
    // Mostramos la secci�n de pago
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
        alert("El tiempo m�ximo permitido es 15 minutos.");
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
    document.getElementById("codigo-pago").innerText = `C�digo de Pago: ${codigoPago}`;
    document.getElementById("cuenta-banco").innerText = cuentaBanco;
    document.getElementById("detalles-pago").style.display = "block";
    
    // Actualizar el panel de administrador
    actualizarPanelAdmin();
});

// Funci�n para actualizar el panel de administrador
function actualizarPanelAdmin() {
    const listaPagos = document.getElementById("lista-pagos");
    listaPagos.innerHTML = "";  // Limpiar la lista
    
    pagosRealizados.forEach(pago => {
        const li = document.createElement("li");
        li.innerText = `C�digo: ${pago.codigo}, Duraci�n: ${pago.tiempo} min, Costo: R$ ${pago.costo}`;
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

    // Aqu� deber�as integrar WebRTC o alg�n servicio de videollamada como Twilio, Agora, etc.
    // El c�digo WebRTC b�sico implica configurar las conexiones de se�alizaci�n y video.
}

function terminarVideollamada() {
    document.getElementById("videollamada").style.display = "none";
    // Detener los stream de video y cerrar la conexi�n WebRTC.
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
    document.getElementById("codigo-pago").textContent = `C�digo QR: [C�digo PIX generado aqu�]`;
    document.getElementById("cuenta-banco").textContent = `Cuenta para el pago: 12345-6 (Banco SARAX)`;

    document.getElementById("detalles-pago").style.display = "block";
});


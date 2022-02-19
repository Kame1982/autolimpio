document.getElementById("login-form").addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const administrador       = document.getElementById("usuario").value;
    const contrasena          = document.getElementById("contrasena").value;

    if( administrador == 'admin' && contrasena == 'admin') {
        accederAdministracion();
    }
      else   {mostrarMensajeError();
         }

   });

function accederAdministracion() {
    window.location = "private.html";
}

function mostrarMensajeError() {
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "El usuario o contraseña no es/son correctos!";
    mensajes.classList.remove("d-none");
}
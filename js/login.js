document.getElementById("login-form").addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const plata       = document.getElementById("usuario").value;
    const oro         = document.getElementById("usuario").value;
    const diamante    = document.getElementById("usuario").value;
    const contrasena  = document.getElementById("contrasena").value;

    if( plata == 'silver' && contrasena == 'silvercoin') {
        accederAdministracion();
    }
        else if ( oro == 'gold' && contrasena == 'goldcoin') 
        {
            accederAdministracion();
        }
            else if ( diamante == 'diamond' && contrasena == 'diamondcoin') 
            {
                accederAdministracion();
            }
        else   {mostrarMensajeError();
         }

   });

function accederAdministracion() {
    window.location = "miembros.html";
}

function mostrarMensajeError() {
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "El usuario o contraseña no es/son correctos!";
    mensajes.classList.remove("d-none");
}
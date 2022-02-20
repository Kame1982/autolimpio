//validador de nombre
document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtNombre = input.value;
  
    const feedbackNombre = document.getElementById("feedback-nombre");
    expr = /^[a-zA-Z]{1,30}$/;
    if (!expr.test(txtNombre)) {
      feedbackNombre.innerHTML = "El nombre es muy corto o contiene numeros o caracteres no reconocidos.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackNombre.className = "invalid-feedback";
    } else {
      feedbackNombre.innerHTML = "El nombre es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackNombre.className = "valid-feedback";
    }
  });
//validador de apellido
document.getElementById("apellido").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtApellido = input.value;
  
    const feedbackApellido = document.getElementById("feedback-apellido");
    expr = /^[a-z A-Z]{1,30}$/;
    if (!expr.test(txtApellido)) {
      feedbackApellido.innerHTML = "Solo debe contener letras o el tamaño no es el definido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackApellido.className = "invalid-feedback";
    } else {
      feedbackApellido.innerHTML = "El apellido es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackApellido.className = "valid-feedback";
    }
  });
//Validador de rut
document.getElementById("rut").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtrut = input.value;
    
    const feedbackrut = document.getElementById("feedback-rut");
    expr = /^[0-9]{7,8}$/;
    if (!expr.test(txtrut)) {
    feedbackrut.innerHTML = "Solo debe tener Numeros y debe tener entre 7 y 8 caracteres.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackrut.className = "invalid-feedback";
    } else {
    feedbackrut.innerHTML = "El Rut es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackrut.className = "valid-feedback";
    }
    });

    //Validador de digito verificador
document.getElementById("dverificador").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtdv = input.value;
    
    const feedbackdverificador = document.getElementById("feedback-dverificacion");
    expr = /^[k-k K-K 0-9]{1}$/;
    if (!expr.test(txtdv)) {
    feedbackdverificador.innerHTML = "Solo debe tener Numeros o k.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackdverificador.className = "invalid-feedback";
    } else {
    feedbackdverificador.innerHTML = "consistente";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackdverificador.className = "valid-feedback";
    }
    });

//validador de correo
document.getElementById("email").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtEmail = input.value;
    
    const feedbackEmail = document.getElementById("feedback-email");

    if( txtEmail.length < 5 ) {        
        feedbackEmail.innerHTML = "Favor de ingresar mas caracteres.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackEmail.className = "invalid-feedback";
    } else {        
        feedbackEmail.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackEmail.className = "valid-feedback";
    }
});
//validador de telefono
document.getElementById("telefono").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtTelefono = input.value;
    
    const feedbackTelefono = document.getElementById("feedback-telefono");

    expr = /^[0-9]{9,10}$/;
    if(!expr.test(txtTelefono)) {        
        feedbackTelefono.innerHTML = "Favor de ingresar un numero valido.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackTelefono.className = "invalid-feedback";
    } else {        
        feedbackTelefono.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackTelefono.className = "valid-feedback";
    }
});

// validador de direccion
document.getElementById("direccion").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtdireccion = input.value;
  
    const feedbackdireccion = document.getElementById("feedback-direccion");
    expr = /^[a-z A-Z]{1,80}$/;
    if (!expr.test(txtdireccion)) {
      feedbackdireccion.innerHTML = "Solo debe contener letras o el tamaño no es el definido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackdireccion.className = "invalid-feedback";
    } else {
      feedbackdireccion.innerHTML = "El apellido es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackdireccion.className = "valid-feedback";
    }
  });
// validador de numero de casa
document.getElementById("ncasa").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtncasa = input.value;
    
    // let o const - formas recomendadas de variables o constantes
    const feedbackncasa = document.getElementById("feedback-ncasa");
    expr = /^[0-9]{3,4}$/;
    if(!expr.test(txtncasa)) {        
        feedbackncasa.innerHTML = "Cantidad de digitos erronea.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackncasa.className = "invalid-feedback";
    } else {        
        feedbackncasa.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackncasa.className = "valid-feedback";
    }
});

//validador de marca vehiculo
document.getElementById("marca").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtmarca = input.value;
  
    const feedbackmarca = document.getElementById("feedback-marca");
    expr = /^[a-z A-Z]{1,20}$/;
    if (!expr.test(txtdireccion)) {
      feedbackmarca.innerHTML = "Solo debe contener letras o el tamaño no es el definido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackmarca.className = "invalid-feedback";
    } else {
      feedbackmarca.innerHTML = "La Marca es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackmarca.className = "valid-feedback";
    }
  });

//validador de modelo
document.getElementById("modelo").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtmodelo = input.value;
  
    const feedbackmodelo = document.getElementById("feedback-modelo");
    expr = /^[a-z A-Z]{1,20}$/;
    if (!expr.test(txtmodelo)) {
      feedbackmodelo.innerHTML = "Solo debe contener letras o el tamaño no es el definido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackmodelo.className = "invalid-feedback";
    } else {
      feedbackmodelo.innerHTML = "El apellido es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackmodelo.className = "valid-feedback";
    }
  });

// validador de año
document.getElementById("ano").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtano = input.value;
    
    // let o const - formas recomendadas de variables o constantes
    const feedbackano = document.getElementById("feedback-ano");
    expr = /^[0-9]{4,5}$/;
    if(!expr.test(txtano)) {        
        feedbackano.innerHTML = "Cantidad de digitos erronea.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackano.className = "invalid-feedback";
    } else {        
        feedbackano.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackano.className = "valid-feedback";
    }
});



// calculo de costos
const botoncal = document.getElementById("btnCalcular");
  botoncal.addEventListener("click", () => {
      // reviso si están checkeados los servicios
      const lavadoExterior    = $("#lavadoExterior").prop("checked");
      const lavadoMotor       = $("#lavadoMotor").prop("checked");
  
      // creo variable para hacer cálculo
      let montoNeto           = 0;
  
      if( lavadoExterior ) {
          montoNeto = montoNeto + 7000;
      }
  
      if( lavadoMotor ) {
          montoNeto = montoNeto + 5000;
      }
  
      // cálculo impuesto y total 
      const impuesto  = montoNeto * 0.19;
      const total     = montoNeto + impuesto;
  
      // cargo los datos a pantalla 
      
      const vneto= document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
      const viva= document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
      const vtotal= document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
  
    });
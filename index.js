alert("Bienvenido a nuestro gestor de deudas");

const claveGuardada = "123";
let contraseñaCorrecta = false; 

for (let i = 0; i < 3; i++) {
  let clave = prompt("Ingresa tu clave (es 123)");
  if (clave === claveGuardada) {
    console.log("Contraseña correcta");
    contraseñaCorrecta = true;
    break;
  } else {
    console.log("Contraseña incorrecta");
  }
}

if (!contraseñaCorrecta) { 
  alert("Has ingresado una contraseña incorrecta 3 veces. La sesión se cerrará.");
} else {
  function Amigo(nombre, deuda) {
    this.nombre = nombre;
    this.deuda = deuda;
  
    this.decirDeuda = function() {
      return "Tu deuda con " + this.nombre + " es de " + this.deuda;
    }
  }

  function pagarDeuda(amigos, saldo) {
    let amigoAPagar = prompt("Ingrese el nombre del amigo al que desea pagarle la deuda:");
  
    let amigoEncontrado = amigos.find(function(amigo) {
      return amigo.nombre === amigoAPagar;
    });
  
    if (amigoEncontrado) {
      let cantidadAPagar = parseFloat(prompt("Ingrese la cantidad que desea pagar a " + amigoAPagar + ". Tu saldo actual es: " + saldo));
  
      while (isNaN(cantidadAPagar) || cantidadAPagar <= 0 || cantidadAPagar > saldo || cantidadAPagar > amigoEncontrado.deuda) {
        if (isNaN(cantidadAPagar) || cantidadAPagar <= 0) {
          alert("La cantidad a pagar debe ser un número mayor que 0.");
        } else if (cantidadAPagar > saldo) {
          alert("No tienes suficiente saldo para realizar esta operación.");
        } else {
          alert("La cantidad a pagar no puede ser mayor que la deuda actual de " + amigoAPagar + ".");
        }
        cantidadAPagar = parseFloat(prompt("Ingrese la cantidad que desea pagar a " + amigoAPagar));
      }
  
      amigoEncontrado.deuda -= cantidadAPagar;
      saldo -= cantidadAPagar;
      console.log("Has pagado " + cantidadAPagar + " a " + amigoAPagar + ". La nueva deuda es de " + amigoEncontrado.deuda);
      console.log("Tu nuevo saldo es: " + saldo);
    } else {
      alert("El amigo ingresado no corresponde a ningún contacto.");
    }
  
    return saldo;
  }

  let saldo = 1000;
  let amigos = [];
  let opcion = prompt("Ingresa opción \na - Saldo \nb - Deposito \nc - Pagar deudas \nd - Ver amigos \ne - Agregar amigos \nf - Editar amigos \ng - Salir");
  while (opcion !== "g") {
    switch (opcion) {
      case "a":
        alert("Tu saldo es: " + saldo);
        break;
        case "b":
          let deposito = parseFloat(prompt("Ingresa cuanto quieres depositar"))
          if (deposito >=0) {
            saldo += deposito
            alert("tu nuevo saldo es " + saldo);
          }else{
            alert("no puedes depositar menos de 0")
          }
      case "c":
        saldo = pagarDeuda(amigos, saldo);
        break;
      case "d":
            console.log("Amigos creados:");
            amigos.forEach(function(amigo) {
              console.log(amigo);
              console.log(amigo.decirDeuda());
            });
        break;
      case "e":
            let agregarOtroAmigo = true;
            while (agregarOtroAmigo) {
              let nombre = prompt("Ingrese el nombre del amigo:");
              let deuda = parseFloat(prompt("Ingrese la deuda de " + nombre));

              while (deuda < 0 || isNaN(deuda)) {
                alert("La deuda debe ser un número positivo.");
                deuda = parseFloat(prompt("Ingrese la deuda de " + nombre + " (debe ser un número positivo):"));
              }

              amigos.push(new Amigo(nombre, deuda));

              let respuesta = prompt("¿Quiere agregar otro amigo? (si/no)");
              if (respuesta.toLowerCase() !== "si") {
                agregarOtroAmigo = false;
              }
            }
        break;
      case "f":
     let opcionEditar = prompt("Seleccione una opción:\n a - Editar deudas \n b - Borrar amigo");

     switch (opcionEditar) {
       case "a":
         let amigoEditar = prompt("Ingrese el nombre del amigo cuya deuda desea editar:");

         let amigoEncontrado = amigos.find(function(amigo) {
           return amigo.nombre === amigoEditar;
         });

         if (amigoEncontrado) {
           let nuevaDeuda = parseFloat(prompt("Ingrese la nueva deuda para " + amigoEditar));

           while (nuevaDeuda < 0 || isNaN(nuevaDeuda)) {
             alert("La deuda debe ser un número positivo.");
             nuevaDeuda = parseFloat(prompt("Ingrese la nueva deuda para " + amigoEditar + " (debe ser un número positivo):"));
           }

           amigos.forEach(function(amigo) {
             if (amigo.nombre === amigoEditar) {
               amigo.deuda = nuevaDeuda;
             }
           });
         } else {
           alert("El amigo ingresado no corresponde a ningún contacto.");
         }

         break;
       case "b":
         let amigoBorrar = prompt("Ingrese el nombre del amigo que desea borrar:");

         let amigoAEliminar = amigos.findIndex(function(amigo) {
           return amigo.nombre === amigoBorrar;
         });

         if (amigoAEliminar !== -1) {
           amigos.splice(amigoAEliminar, 1);
         } else {
           alert("El amigo ingresado no corresponde a ningún contacto.");
         }

         break;
       default:
         alert("Opción no válida");
         break;
     }
     break;
      default:
        alert("Opción no válida");
        break;
    }
    opcion = prompt("Ingresa opción \na - Saldo \nb - Deposito \nc - Pagar deudas \nd - Ver amigos \ne - Agregar amigos \nf - Editar amigos \ng - Salir");  }

  console.log("Cerrando...");
}
alert("Para iniciar de vuelta, refresca la página");

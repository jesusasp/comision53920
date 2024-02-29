//alert("Bienvenido a nuestra tienda de ropa");
alert("Bienvenido a nuestro cajero automatico");

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
  // let opcion = prompt("Ingresa opción a - ver ropa de hombre, b - ver ropa de mujer, c - ver carrito de compras, d - salir");
  let saldo = 10

  let opcion = prompt("Ingresa opción \na - saldo, \nb - retiro, \nc - deposito, \nd - salir");
  while (opcion !== "d") {
    switch (opcion) {
      case "a":
        alert("Tu saldo es: " + saldo);
        break;
      case "b":
        let retiro = parseFloat(prompt("Cuanto deseas retirar?"))
        if (retiro >= 0) {
          if (retiro <= saldo) {
            saldo -= retiro;
            alert("Retiro exitoso. Tu nuevo saldo es: " + saldo);
          } else {
            alert("No tienes suficiente saldo para realizar este retiro");
          }
        } else {
          alert("No puedes retirar una cantidad negativa");
        }
        break;
      case "c":
        let deposito = parseFloat(prompt("Ingresa cuanto quieres depositar"))
        if (deposito >=0) {
          saldo += deposito
          alert("tu nuevo saldo es " + saldo);
        }else{
          alert("no puedes depositar menos de 0")
        }
        break;
      default:
        alert("Opción no válida");
        break;
    }
    opcion = prompt("Ingresa opción \na - saldo, \nb - retiro, \nc - deposito, \nd - salir");
  }

  console.log("Cerrando...");
}
alert("Para iniciar de vuelta, refresca la página");

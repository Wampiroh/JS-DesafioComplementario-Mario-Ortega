let nombre = prompt("Ingresa tu nombre por favors");
//let producto;
//let zapaUrbana = 15000;
//let zapaRunnig = 20000;
//llamo a la funcion saludar

function saludar() {
  prompt(
    "Bienvenido a mi proyecto " +
      nombre +
      " a continuacion podra escojer productos de la tienda"
  );
}
// declaro la funcion comprar producto
//function comprarProducto() {
//producto = prompt(
//     "elija uno de nuestros productos \n 1: zapatilla urbana  \n 2: zapatilla basquet \n 3: zapatilla runnig"
//   );

//   if (producto === "1") {
//     alert(" elegiste zapatilla urbana para tu compra");
//   } else if (producto === "2") {
//     alert(" elegiste zapatilla basquet para tu compra");
//   } else if (producto === "3") {
//     alert(" elegiste zapatilla runnig  para tu compra");
//   }
//aca vuelvo a preguntar por el prompt de opcion para terminar el proceso
//   opcion = prompt(
//     "vuelva a ingresar una opcion \n 2: mostrar precios finales  \n 3: terminar"
//   );
// }
// // declaro la funcion finalizar compra
// function finalizarCompra() {
//   if (producto === "1") {
//     alert(
//       "usted eligio zapatilla urbana por un monto  final de " +
//         zapaUrbana * 1.21
//     );
//   } else if (producto === "2") {
//     alert(
//       "usted eligio zapatilla basquet  por un monto  final de " +
//         zapaBasquet * 1.21
//     );
//   } else if (producto == "3") {
//     alert(
//       "usted eligio zapatilla runnig por un monto  final de " +
//         zapaRunnig * 1.21
//     );
//   }
// }

// main
//declaro variables

// saludar();
// let opcion = prompt(
//   "ingrese una opcion: \n 1: comprar zapatilla \n 2: finalizar compra  \n 3: terminar  "
// );
// //agrego bucle while, mientras la opcion no sea 3...
// while (opcion !== "3") {
//   if (opcion === "1") {
//     comprarProducto();
//   }
//   if (opcion === "2") {
//     //si ingreso la opcion dos, llamo a la funcion finalizarCompra
//     //y le asigno el "3" a opcion para que corte el bucle
//     finalizarCompra();
//     opcion = "3";
//   }
// }

// alert("gracias por su compra");

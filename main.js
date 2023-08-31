
let seleccion = parseInt(
  prompt(
    "selecciona:\n 1. tabla de multiplicar. \n 2. para operacion matematica.  \n 3. para salir."
  )
);

while (seleccion !== 3) {
  if (seleccion === 1) {
    let numero = parseInt(
      prompt("seleccione el numero de la tabla que desea elegir")
    );
    for (let index = 0; index < 10; index++) {
      const resultado = numero * index;
      console.log(`${numero} x ${index} = ${resultado}`);
    }
  }
  if (seleccion === 2) {
    let opcion = parseInt(prompt("digite la opcion:\n 1. para sumar \n 2. para restar \n 3. para multiplicar \n 4. para dividir"));
    if( opcion === 1){
      let numero1 = parseFloat(prompt('digite el primer numero'));
      let numero2 = parseFloat(prompt('digite el segundo numero'));
      let resultado = numero1 + numero2;

      console.log(`${numero1} + ${numero2} = ${resultado} `)
    }
    if( opcion === 2){
      let numero1 = parseFloat(prompt('digite el primer numero'));
      let numero2 = parseFloat(prompt('digite el segundo numero'));
        let resultado = numero1 - numero2; 
        console.log(`${numero1} - ${numero2} = ${resultado} `)
    }
    if( opcion === 3){
      let numero1 = parseFloat(prompt('digite el primer numero'));
      let numero2 = parseFloat(prompt('digite el segundo numero'));
      let resultado = numero1 * numero2;

      console.log(`${numero1} * ${numero2} = ${resultado} `)
    }
    if( opcion === 4){
      let numero1 = parseFloat(prompt('digite el primer numero'));
      let numero2 = parseFloat(prompt('digite el segundo numero'));
      let resultado = numero1 / numero2;

      console.log(`${numero1} / ${numero2} = ${resultado} `)
    }
  }
  if(seleccion !== 1 && seleccion !== 2 && seleccion !== 3 ){
    console.log('la opcion que elegiste es invalida')
  }
  seleccion = parseInt(
    prompt(
      "selecciona:\n 1. tabla de multiplicar. \n 2. para operacion matematica. \n 3. para salir."
    )
  );
  console.clear();
}

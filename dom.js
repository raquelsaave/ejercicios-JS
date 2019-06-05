// Para todos los ejercicios, si no se especifica que se espera que haga un listener
// asuman que debe imprimir algo
window.onload = () => {
  // Agrega contenido a div1 (ejemplo: 'I am a div!')
  let element1 = document.querySelector('#div1');
  element1.innerHTML = 'I am a div!';
  // Agrega contenido al span de div2 (ejemplo: 'I am a span!')
  let element2 = document.querySelector('#div2 .a-span');
  element2.innerText = 'I am a span!';
  // Agrega un listener de click al boton de div3, el listener debe imprimir algo 
  // (ejemplo: 'I was clicked')
  let element3 = document.querySelector('#div3 .a-button');
  element3.addEventListener('click', () => console.log('I was clicked'));
  // Agrega un listener de click al boton de div4, no dejes que haga el submit e 
  // imprime 'Default prevented'
  let element4 = document.querySelector('#div4 .a-button');
  element4.addEventListener('click', (event) => { event.preventDefault(); console.log('Deafult Prevented') });
  // Agrega un listener de click a div5, imprime el target del evento
  let element5 = document.querySelector('#div5');
  element5.addEventListener('click', (event) => { console.log(event.target) });
  // Agrega un listener de click al span de div6 y a la div6, imprime el target del 
  // evento en ambos y si es el listener de div o de span
  let element6 = document.querySelector('#div6');
  let element7 = document.querySelector('#div6 .a-span');
  element6.addEventListener('click', (event) => { console.log(`listener de div ${event.target}`) });
  element7.addEventListener('click', (event) => { console.log(`listener de span ${event.target}`) });
  // Agrega un listener de click al span de div7 y a la div7, imprime el target del
  // evento en ambos y si es el listener de div o de span, evita que el click del span se propague
  let element8 = document.querySelector('#div7');
  let element9 = document.querySelector('#div7 .a-span');
  element8.addEventListener('click', (event) => { console.log(`listener de div ${event.target}`) });
  element9.addEventListener('click', (event) => { event.stopPropagation(); console.log(`listener de span ${event.target}`) });
  // Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)
  let element10 = document.querySelectorAll('#div8 .a-span');
  element10.forEach((v, i) => { v.innerHTML = i + 1; })
  // Agrega un listener de click al primer y ultimo span de div9
  let element11 = document.querySelector('#div9 .a-span');
  let element12 = document.querySelector('#div9 .a-span:last-of-type');
  element11.addEventListener('click', () => console.log('I was clicked; primer span'));
  element12.addEventListener('click', () => console.log('I was clicked; ultimo span'));
  // Agrega un listener de click a los spans impares de div10 (1, 3, 5)
  let element13 = document.querySelectorAll('#div10 .a-span');
  element13.forEach((v, i) => {
    i++;
    if (i % 2 != 0) {
      v.addEventListener('click', () => console.log('I was clicked; Impar'));
    }
  });
  // Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido
  let element14 = document.createElement('span');
  element14.className = 'not-a-span';
  element14.innerText = 'Not a span!';
  document.querySelector('#div11').appendChild(element14);
  // Cambia el src de la imagen de div12 a dogge.jpg (adjunto)
  let element15 = document.querySelector('#div12 img').src = "puppy-3.png";
  // Pon 'THE-span' como id del span de div13
  let element16 = document.querySelector('#div13 span').id = "THE-span";
  /**
   * Agrega listeners a los 3 inputs de div14.
   * change para changeInput
   * blur para blurInput
   * ambos para bothInput
   *
   * Los listeners deben imprimir el nombre del target del evento
   */
  /*let element17 = document.querySelectorAll('#div14 input');
  element17[0].addEventListener('change', (event) => { console.log(event.target.name) });
  element17[1].addEventListener('blur', (event) => { console.log(event.target.name) });
  element17[2].addEventListener('change', (event) => { console.log(event.target.name)});
  element17[2].addEventListener('blur', (event) => { console.log(event.target.name)});*/
  //Listener para change
  document.querySelector('#div14 input').addEventListener('change', (event) => { console.log(event.target.name) });
  //Listener para blur
  document.querySelector('#div14 input:nth-of-type(2)').addEventListener('blur', (event) => { console.log(event.target.name) });
  //Listener para ambos
  document.querySelector('#div14 input:last-of-type').addEventListener('change', (event) => { console.log(event.target.name) });
  document.querySelector('#div14 input:last-of-type').addEventListener('blur', (event) => { console.log(event.target.name) });
  /**
   *
   * Agrega un listener al span de div15 que, cuando el mouse pase por encima,
   * cambie el texto a 'I am being hovered'.
   * Debe volver al texto original cuando el mouse deje de estar encima.
   */
  let element18 = document.querySelector('#div15 .a-span')
  element18.addEventListener('mouseover', (event) => { element18.innerText = 'I am being hovered' });
  element18.addEventListener('mouseout', (event) => { element18.innerText = 'I am not being hovered' });
  /**
   * Agrega un listener de scroll a la div16.
   * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella.
   * Se recomienda NO usar alert para este ejercicio.
   */
  let element19 = document.querySelector('#div16')
  element19.addEventListener('scroll', (event) => { console.log('I was scrolled') });
};
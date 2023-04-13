
const notes = ["A Eólico Bordon dedo 4", "A Dórico Bordon dedo 4", "A Frigio Bordon dedo 4", "A Pentatónica menor Bordon dedo 4",
"A Blues menor Bordon dedo 4", "A Eólico Bordon posicion cerrada dedo 1", "A Dórico Bordon posicion cerrada dedo 1", "A Frigio Bordon posicion cerrada dedo 1",
"A Pentatónico menor Bordon posicion cerrada dedo 1", "A Blues menor Bordon posicion cerrada dedo 1", "A Eólico Bordon posicion abierta dedo 1",
"A Dórico Bordon posicion abierta dedo 1", "A Frigio Bordon posicion abierta dedo 1", "A Pentatónica menor Bordon posicion abierta dedo 1", 
"A Blues menor Bordon posicion abierta dedo 1", "D Eólico Quinta (5) cuerda dedo 4 ", "D Dórico Quinta (5) cuerda dedo 4", "D Frigio Quinta (5) cuerda dedo 4", 
"D Blues menor Quinta (5) cuerda dedo 4", "D Pentatonico menor Quinta (5) cuerda dedo 4", "D Eólico Quinta (5) cuerda dedo 1 posicion cerrada",
"D Dorico Quinta (5) cuerda dedo 1 posicion cerrada", "D Frigio Quinta (5) cuerda dedo 1 posicion cerrada", "D Pentatónica menor Quinta (5) cuerda dedo 1 posicion cerrada",
"D Blues menor Quinta (5) cuerda dedo 1 posicion cerrada", "D Eólico Quinta cuerda posición abierta dedo 1", "D Dórico Quinta cuerda posición abierta dedo 1",
"D Frigio Quinta cuerda posición abierta dedo 1", "D Pentatónica menor Quinta cuerda posición abierta dedo 1", "D Blues menor Quinta cuerda posición abierta dedo 1", 
"A Jónico bordon dedo cuatro (4)", "A Lidio bordon dedo cuatro (4)", "A Mixolidio bordon dedo cuatro (4)", "A Pentatónica mayor bordon dedo cuatro (4)",
"A Blues mayor bordon dedo cuatro (4)", "A Jónico bordon dedo dos (2)", "A Lidio bordon dedo dos (2)", "A Mixolidio bordon dedo dos (2)",
"A Pentatónica mayor bordon dedo dos (2)", "A blues mayor bordon dedo dos (2)", "A Jónico bordon dedo uno (1)", "A Lidio bordon dedo uno (1)",
"A Mixolidio bordon dedo uno (1)", "A Pentatónica mayor bordon dedo uno (1)", "A Blues mayor bordon dedo uno (1)", "D Jónico Quinta (5) dedo 4",
"D Lidio Quinta (5) dedo 4", "D Mixolidio Quinta (5) dedo 4", "D Pentatónica mayor Quinta (5) dedo 4", "D Blues mayor Quinta (5) dedo 4", 
"D Jónico Quinta (5) dedo 2", "D Lidio Quinta (5) dedo 2", "D Mixolidio Quinta (5) dedo 2", "D Pentatónico mayor Quinta (5) dedo 2",
"D Blues mayor Quinta (5) dedo 2", "D Jónico Quinta (5) dedo 1", "D Lidio Quinta (5) dedo 1", "D Mixolidio Quinta (5) dedo 1",
"D Pentatónica mayor Quinta (5) dedo 1", "D Blues mayor Quinta (5) dedo 1"];

const showNoteButton = document.getElementById("showNoteButton");
const noteContainer = document.getElementById("noteContainer");

showNoteButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * notes.length);
  const randomNote = notes[randomIndex];
  noteContainer.innerText = randomNote;

});VB      


  const hamburgerButton = document.getElementById("hamburgerButton");
  const navLinks = document.querySelector(".nav-links");

  hamburgerButton.addEventListener("click", function() {
  navLinks.classList.toggle("show-nav-links");
});






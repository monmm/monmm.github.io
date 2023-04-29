let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Mi superpoder es el codigo, cual es el tuyo?')
  .pauseFor(200)
  .deleteChars(10)
  .start();

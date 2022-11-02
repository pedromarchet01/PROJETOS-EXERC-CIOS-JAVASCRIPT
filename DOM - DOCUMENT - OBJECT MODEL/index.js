let contador = 0;
let saida = document.getElementById('saida');

function clicou() {
  
  contador ++;

  saida.innerHTML = `<p> ${contador} cliques </p>`

}
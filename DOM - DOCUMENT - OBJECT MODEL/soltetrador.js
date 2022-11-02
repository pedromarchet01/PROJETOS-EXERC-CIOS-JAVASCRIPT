function clicou() {
  
let nome = document.getElementById('inome');
let nomeValue = nome.value;
let nomeLetras = Number(nomeValue.replace(' ', '').length) ;
let soletrar = nomeValue.split('');

let saida = document.getElementById('saida');

if (nome.value.length == 0) {
  alert('PREENCHA O CAMPO ABAIXO!')
}
else{
  saida.innerHTML = `<p>Seu nome é<mark> ${nomeValue}</mark> <br>
  <br>
  <mark>${nomeValue}</mark> tem <mark>${nomeLetras}</mark> letras <br>
  <br>
   Seu nome soletrado fica <br>
   <mark>${soletrar}</mark> 
  </p>`
}

}
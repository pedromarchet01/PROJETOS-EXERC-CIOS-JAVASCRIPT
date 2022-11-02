function checou() {
  
  let nome = document.getElementById('inome');
  let valorNome = nome.value;
  let valor = Number(valorNome.replace(' ', '').length) ;
 


  let saida = document.getElementById('saida');

  if (nome.value.length == 0 || nome.value.length == null) {
    alert('NOME INVÁLIDO!');
  }
  else if(nome.value.length != 0 || nome.value.length != null){
   saida.innerHTML = `<p> O seu nome é <strong><mark>${valorNome}</mark>
   </strong> e ele tem <strong><mark>${valor} letras</mark></strong>`;
  }
  
}

function resetou() {
  
  document.location.reload();

}
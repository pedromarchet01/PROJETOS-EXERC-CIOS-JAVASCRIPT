let inicio = document.getElementById('txti');
let fim = document.getElementById('txtf');
let passo = document.getElementById('txtp');

let saida = document.getElementById('res');


function clicou() {
  let i = Number(inicio.value);
  let f = Number(fim.value);
  let p = Number(passo.vallue);


  if (inicio.value.length ==  0 && fim.value.length ==  0 && passo.value.length ==  0) {
    alert('PREENCHA OS CAMPOS CORRETAMENTE!');
  }

  if (inicio.value.length != 0 && fim.value.length ==  0 && passo.value.length ==  0) {
    alert('PREENCHA CORRETAMENTE OS DADOS DE FIM E PASSO !');
  } 

  if (inicio.value.length ==  0 && fim.value.length !=  0 && passo.value.length ==  0) {
     alert('PREENCHA CORRETAMENTE OS DADOS DE INÍCIO E PASSO !');
  }

  if (inicio.value.length ==  0 && fim.value.length ==  0 && passo.value.length !=  0) {
     alert('PREENCHA CORRETAMENTE OS DADOS DE FIM E INÍCIO !');
  }

  if (inicio.value.length !=  0 && fim.value.length !=  0 && passo.value.length ==  0) {
     alert('PREENCHA CORRETAMENTE OS DADOS DE PASSO !');
  }

  if (inicio.value.length !=  0 && fim.value.length ==  0 && passo.value.length !=  0) {
     alert('PREENCHA CORRETAMENTE OS DADOS DE FIM !');
  }

if (inicio.value.length ==  0 && fim.value.length !=  0 && passo.value.length !=  0) {
     alert('PREENCHA CORRETAMENTE OS DADOS DE INÍCIO !');
}


else{
  saida.innerHTML = `Contando : <br>`;
  let i = Number(inicio.value);
  let f = Number(fim.value);
  let p = Number(passo.value);

  if (i < f) {
    
    for (let c = i; c <= f; c+= p) {
      saida.innerHTML += `${c} \u{1f449}`;
    }
    saida.innerHTML += `\u{1f3c1}`;
  }
  
  else{
    for (let c = i; c >= f; c -= p){
    saida.innerHTML += `${c} \u{1f449}`;
  }
  saida.innerHTML += `\u{1f3c1}`;
}

}

}

function resetou() {
  
  document.location.reload()
}


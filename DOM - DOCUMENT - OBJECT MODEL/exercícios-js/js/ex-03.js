let num = document.getElementById('inumber');
let tabuada = document.getElementById('itabuada');

function CLICOU () {
  
  if (num.value.length == 0) {
    alert('VALOR INVÁLIDO !');
  }
  else{
    let n = Number(num.value);
    let c = 1;
    tabuada.innerHTML = '';
    while (c <= 10) {
      let item = document.createElement('option');
      item.text = `${n} x ${c} = ${n*c}`;
      tabuada.appendChild(item);
      c++;
    }
  }
}
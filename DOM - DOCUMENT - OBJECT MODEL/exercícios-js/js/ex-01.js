function calcular() {

  let valor1 = document.getElementById("ivalor1");
  let valor1Value = Number(valor1.value);

  let valor2 = document.getElementById("ivalor2");
  let valor2Value = Number(valor2.value);



  let soma = valor1Value + valor2Value;
  let subtração = valor1Value - valor2Value;
  let multiplicação = valor1Value * valor2Value;
  let divisão = valor1Value / valor2Value;

  let opções = document.getElementsByName('op');

  if (opções[0].checked) {
    
    let saida = document.getElementById('saida');
    saida.innerText = `O resultado é ${soma}`;
  }
  else if (opções[1].checked) {
    
    let saida = document.getElementById('saida');
    saida.innerText = `O resultado é ${subtração}`;
  }
  else if (opções[2].checked) {
    
    let saida = document.getElementById('saida');
    saida.innerText = `O resultado é ${multiplicação}`;
  }
  else if (opções[3].checked) {
    
    let saida = document.getElementById('saida');
    saida.innerText = `O resultado é ${divisão}`;
  }
  else if (valor1Value == 0 && valor2Value == 0) {
   alert('PREENCHA OS CAMPOS!')
  }
  
 
}

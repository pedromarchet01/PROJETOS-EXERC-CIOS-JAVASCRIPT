//DOCUMENT OBJECT MODEL - DOM

//Conjunto de objetos dentro do navegador que vai dar acesso aos componentes internos do site
//Não funciona no NODE.JS
//DOM funciona quando o Java Script está rodando no Navegador

window.document.write('OLÁ MUNDO!');
 
window.document.write(window.document.charset);
window.document.write(window.navigator);
window.document.write(window.document.url); 



//Seleção por marca - TAG NAME
//getElementsByTagName();

let p1 = window.document.getElementsByTagName('p')[0];
window.document.write(' <br> Está escrito assim ' + p1.innerText);
p1.style.color = 'crimson';

let p2  = window.document.getElementsByTagName('p')[1];
window.document.write('<br>' + p2.innerText + ' KEK!');
//ADICIONAR/CRIAR NOVO PARÁGRAFO

p2.innerHTML = 'KEK!';
//SUBSTITUIR/REESCREVER PARÁGRAFO


let corpo = window.document.body;
corpo.style.backgroundColor = 'black';




//Seleção por ID
//getElementsById();






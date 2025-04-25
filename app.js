/* versao simples
alert('Bem vindo ao Jogo de Adivinhar o numero');
let NumeroLimite = 10;
let numeroSecreto = parseInt(Math.random() * NumeroLimite + 1);
let chute;
let tentativas = 1;
console.log(numeroSecreto);

while(chute != numeroSecreto){
  chute = parseInt(prompt('Chute o número Secreto:'));

  if( chute == numeroSecreto){
    break;

  }else{

    if(chute > numeroSecreto){
      alert(`O número Secreto é menor que ${chute}`);
    }else{
      alert(`O número Secreto é maior que ${chute}`)
    }
    tentativas++

  }
}
*/



//versao Aprimorada
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// código omitido. 

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
      campo.innerHTML = texto;
      //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function exibirMensagemInicial() {
  exibirTextoNaTela ('h1', 'Jogo do número secreto');
      exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++
    limparCampo()
  }
};


function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }


  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();

  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
};

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  exibirMensagemInicial()
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*Desafios Interessantes
//calcular IMC
function calcularImc(){
  let peso = 93;
  let altura = 1.70;
  let imc = peso / Math.pow(altura, 2);

  return imc;
}

//console.log(calcularImc().toFixed(2));


//Calcular valor fatorial
function fatorialRecursivo(n) {
  if (n < 0) {
      return "O fatorial não é definido para números negativos.";
  }
  return (n === 0 || n === 1) ? 1 : n * fatorialRecursivo(n - 1);
}

// Exemplo de uso:
//console.log(fatorialRecursivo(5)); // Saída: 120


//ConverterDolar
function converterDolar(){
  let dolar = 5;
  let valorEmReal = dolar * 4.80;
  return valorEmReal;
}

console.log(converterDolar())


//Calcular sala
function calcularSala(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`Área: ${area} m²`);
  console.log(`Perímetro: ${perimetro} m`);
}

// Exemplo de uso:
calcularSala(5, 10); // Saída: Área: 50 m², Perímetro: 30 m


function calcularSalaCircular(raio) {
  let pi = 3.14;
  let area = pi * (raio ** 2); // Fórmula da área: π * r²
  let perimetro = 2 * pi * raio; // Fórmula do perímetro: 2 * π * r

  console.log(`Área: ${area.toFixed(2)} m²`);
  console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

// Exemplo de uso:
calcularSalaCircular(5); // Saída: Área: 78.50 m², Perímetro: 31.40 m


function mostrarTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Exemplo de uso:
mostrarTabuada(7);



// Criando uma lista vazia
let listaGenerica = [];

// Criando uma lista de linguagens de programação
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Adicionando mais elementos à lista
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

console.log(linguagensDeProgramacao); // Exibe a lista atualizada

// Criando uma lista com 3 nomes e exibindo o primeiro elemento
let listaNomes1 = ['Ana', 'Bruno', 'Carla'];
console.log(listaNomes1[0]); // Saída: Ana

// Criando uma lista com 3 nomes e exibindo o segundo elemento
let listaNomes2 = ['Daniel', 'Eduarda', 'Fernando'];
console.log(listaNomes2[1]); // Saída: Eduarda

// Criando uma lista com 3 nomes e exibindo o último elemento
let listaNomes3 = ['Gabriel', 'Helena', 'Isabela'];
console.log(listaNomes3[listaNomes3.length - 1]); // Saída: Isabela
*/
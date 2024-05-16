alert("Bem vindo ao jogo Secret Number!");

let numeroSecreto = 7;
console.log(numeroSecreto);

let chute;
console.log(chute);

//while = enquanto
// enquanto o chute não for igual ao número secreto...
while (chute != numeroSecreto) {
  chute = prompt("Digite um número entre 1 e 30");
  if (chute == numeroSecreto) {
    alert(`Parabéns! Você acertou o,, número secreto ${numeroSecreto}! :D`);
  } else {
    if(chute == null) {
        alert('Você não digitou nenhum número, volte e informe.');
      } else if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}...`);
    } else {
      alert(`O numero secreto é maior que ${chute}...`);
    }
  }
}

//if = se
//else = senão

//Se o chute for igual ao numero secreto retorne a mensagem 'Você descobriu o Secret Number (29)' Se não vai aparecer um alert com a mensagem: 'Você errou o número :('

   

console.log(chute);

// == Usamamos dois == para comparações;

// Desafio:

// alert('Boas vindas ao nosso site!');
// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// alert('Erro preencha todos os campos');
// let mensagemDeErro = 'Erro preencha todos os campos';
// alert(mensagemDeErro);

// nome = prompt('Qual seu nome?');
// idade = prompt('Quantos anos você tem?');

// if(idade >= 18) {
//     alert('Pode tirar habilitação!');
// }

// console.log(nome);
// console.log(idade);

// Desafio 2:

// alert('Olá, Seja bem vindo(a)!')

// let dia = 'domingo';

// dia = prompt('Poderia me dizer que dia da semana é hoje?');

//     if(dia == 'domingo' || dia == 'sabado') {
//         alert('Bom fim de semana!');
//     } else {
//         alert('Boa semana!');
//     }

// console.log(dia);

// Desafio 3:

// let numeroInformado = prompt('Informe um número para descobrir');
// if(numeroInformado > 0){
//     alert('O número é positivo');
// } else {
//     alert('O número é negativo');
// }

// Desafio 4:

// alert('Seja bem vindo ao banco, aqui você pode consultar o seu saldo!');
// saldo = prompt('Digite quanto você gostaria de depositar.')

// if(saldo == null) {
//     alert('Você não depositou nenhum valor!')
//     saldo = 0 + 'R$';
// }

// alert(`Você tem disponivel na conta um valor de ${saldo} R$.`);

// console.log(saldo);

// Desafio 5:

// alert('Olá, poderia se idenficar por favor? Como devo chama-lo(a)?');

// nome = prompt('Digite seu nome por gentileza!');

//     if(nome == null) {
//     alert('Você não me informou seu nome :(')
//     }  else {
//     alert(`Oh! Entendi! Então seja bem vindo(a) ${nome}.`);
//     };

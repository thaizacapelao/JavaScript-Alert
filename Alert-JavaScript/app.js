alert("Bem vindo ao jogo Secret Number!");

let numeroSecreto = 7;
console.log(numeroSecreto);

let chute;
let tentativas = 1;
console.log(chute);

//while = enquanto
// enquanto o chute não for igual ao número secreto...
while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 1 e 30");
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute == null) {
      alert("Você não digitou nenhum número, volte e informe.");
    } else if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}...`);
    } else {
      alert(`O numero secreto é maior que ${chute}...`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
  }
}

    if (tentativas > 1) {
      alert(`Parabéns! Você acertou o,, número secreto ${numeroSecreto}, com ${tentativas} tentativas! :D`);
    } else {
    alert(`Parabéns! Você acertou o,, número secreto ${numeroSecreto}, com ${tentativas} tentativa! :D`);
    }


console.log(tentativas);

//if = se
//else = senão

//Se o chute for igual ao numero secreto retorne a mensagem 'Você descobriu o Secret Number (29)' Se não vai aparecer um alert com a mensagem: 'Você errou o número :('

console.log(chute);

// == Usamamos dois == para comparações;
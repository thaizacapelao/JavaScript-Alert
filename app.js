alert("Bem vindo ao jogo Secret Number!");

let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 0;
console.log(chute);

//while = enquanto
// enquanto o chute não for igual ao número secreto...
while (chute != numeroSecreto) {
  chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);

  if (chute === null) {
    alert("Você não digitou nenhum número, volte e informe.");
    continue; // Pula para a próxima iteração do loop sem incrementar tentativas
  }

  chute = Number(chute); // Converte o chute para número

  if (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
    alert(`Por favor, digite um número válido entre 1 e ${numeroMaximo}`);
    continue; // Pula para a próxima iteração do loop sem incrementar tentativas
  }

// tentativas = tentativa + 1;
  tentativas++;

  if (chute == numeroSecreto) {
    document
      .querySelectorAll(".success")
      .forEach((el) => el.classList.remove("hidden"));
    break;
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}...`);
  } else {
    alert(`O número secreto é maior que ${chute}...`);
  }
}
// Operador Ternario
let palavraTentativa = tentativas > 1 ? "tentativas! :D" : "tentativa! :D";

alert(
  `Parabéns! Você acertou o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`
);

console.log(tentativas);

//if = se
//else = senão

//Se o chute for igual ao numero secreto retorne a mensagem 'Você descobriu o Secret Number (29)' Se não vai aparecer um alert com a mensagem: 'Você errou o número :('

console.log(chute);

// == Usamamos dois == para comparações;

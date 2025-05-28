let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");
  const botao = document.getElementById("enviarBtn");

  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto}! 🎉`;
    botao.disabled = true;
  } else {
    if (tentativas >= 3) {
      mensagem.textContent = `Você errou 3 vezes. O número era ${numeroSecreto}. 😢`;
      botao.disabled = true;
    } else {
      mensagem.textContent = `Errado! Você tem ${3 - tentativas} tentativa(s) restante(s).`;
    }
  }
}

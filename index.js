// Projeto 2 - Jokenpô
// O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
// Pedra ganha da tesoura, mas perde para o papel;
// Tesoura ganha do papel, mas perde para a pedra;
// Papel ganha da pedra, mas perde para a tesoura.
// E para esse projeto você deve desenvolver um programa capaz de:
// Receber o elemento escolhido pelo usuário;
// Escolher um elemento aleatório para o computador;
// Comparar os dois elementos e declarar um vencedor.
// Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).

// Requisitos
// Para esse projeto, os requisitos fundamentais serão:
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
// Decidir de forma aleatória a decisão do computador;
// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

console.clear()
const prompt = require('prompt-sync')();

let possibleChoices = ['pedra', 'papel', 'tesoura'];

let turns = '';

let pcVictories= 0;
let userVictories= 0;

let playAgain = true;


while (playAgain){

  do {
    turns = prompt('Quantas rodadas de Jokenpô você deseja jogar? R: ');
    
    let each=[]

    for (const i of turns){
      each.push(i)
    }

    console.log(each)

    if (each in ['0','1','2','3','4','5','6','7','8','9']) {
      turns= parseInt(turns)
      console.log(typeof turns)
    } else {
      console.log('Escolha inválida! Por favor insira apenas numeros.');
      each.pop();
      console.log()
    }
  } while(typeof turns !== 'number')
  


  for (let i = 0; i < turns; i++) {
    let pcChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    let userChoice = '';

    do {
      console.log()
      console.log('Jokenpo?!')
      userChoice = prompt('Informe sua escolha (pedra, papel ou tesoura?) R: ').toLowerCase();
      if (!possibleChoices.includes(userChoice)) {
        console.log('Escolha inválida! Por favor insira um valor permitido...')
      }
    } while(!possibleChoices.includes(userChoice))
    
    console.log(`Você escolheu ${userChoice} e eu escolhi ${pcChoice}`)
    console.log()

    if(userChoice === pcChoice) {
      console.log(`Empatamos!`);
    }

    if (userChoice === 'pedra' && pcChoice === 'tesoura'){
      console.log(`Você venceu a ${i+1}ª partida!`);
      userVictories++
    } else if (pcChoice === 'pedra' && userChoice === 'tesoura'){
      console.log(`Você perdeu ${i+1}ª partida!`)
      pcVictories++};

    if (userChoice === 'tesoura' && pcChoice === 'papel'){
      console.log(`Você venceu a ${i+1}ª partida!`);
      userVictories++
    } else if (pcChoice === 'tesoura' && userChoice === 'papel'){
      console.log(`Você perdeu a ${i+1}ª partida!`);
      pcVictories++};

    if (userChoice === 'papel' && pcChoice === 'pedra'){
      console.log(`Você venceu a ${i+1}ª partida!`);
      userVictories++
    } else if (pcChoice === 'papel' && userChoice === 'pedra'){
      console.log(`Você perdeu a ${i+1}ª partida!`);
      pcVictories++
    }

    console.log(i)
  } 

  console.log()
  console.log(`Você ganhou ${userVictories} rodadas e eu ganhei ${pcVictories} rodadas.`)

  if (pcVictories > userVictories){
    console.log('Você Perdeu! Eu sou o grande campeão')
  } else if (userVictories > pcVictories) {
    console.log('Parabéns! Você é o grande campeão')
  } else {
    console.log('Deu empate!')
  }

  console.log();

  playAgain = prompt('Deseja jogar Novamente? [sim/nao] R: ').toLowerCase();

  console.log();

  if (playAgain === 'nao' || playAgain === 'não' ){
    playAgain = false
  };
} 
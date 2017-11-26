'use strict';
(function(){

  const winnerNotficiationDOM = document.getElementById('winner_notification')

  const user   = new userModule.User();
  const computer = new computerModule.Computer();
  const toolComparator = new toolComparatorModule.ToolComparator();

  const match = new matchModule.Match(user, computer, toolComparator)

  const gameReseter = new gameResetModule.GameReseter(user, computer);

  const app = new appModule.App(user, computer, toolComparator, match , gameReseter);
  app.start();
//   const POINTS_TO_WON = 3;
// function isGameOver()
// {
//   return (player.score === POINTS_TO_WON  || computer.score === POINTS_TO_WON)
// }
// const playerScoreDOM = document.getElementById('player_score')
// const computerScoreDOM = document.getElementById('computer_score')
// function updateScore()
// {
//   playerScoreDOM.textContent = player.score;
//   computerScoreDOM.textContent = computer.score;
// }
// function showMatchWinner()
// {
//   const matchWinner = player.score > computer.score ? 'Player' : 'Computer';
//   winnerNotficiationDOM.textContent =`${matchWinner} has won!`;
//
// }
// function showRoundResult(roundResultText)
// {
//   winnerNotficiationDOM.textContent = roundResultText;
// }
// function hideWinner()
// {
//   winnerNotficiationDOM.textContent = '';
// }
//
// const computerChoosenDOM = document.getElementById('computer_choosen');
// function startDuel()
// {
//   if(!player.lastPickedTool || !player.lastPickedTool.dataset)
// {
//   return false;
// }
//   createPlayersTools();
//
//   computer.updateChoosenImage(computerChoosenDOM, {
//     className: 'tool--show',
//     targetToolName : computer.tool.name
//   });
//
//   const duelResult = toolComparator.compare(player.tool, computer.tool);
//   console.log(duelResult)
//    showRoundResult(duelResult.roundResult);
//
//    computer.score += duelResult.computerPoints;
//    player.score   += duelResult.playerPoints;
//
//
//     updateScore();
//     if(isGameOver())
//     {
//     showMatchWinner();
//     fightButtonDOM.textContent = `Reset Game`
//     isMatchEnd = true;
//     }
//
// }
// function createPlayersTools()
// {
//   const playerToolName = player.lastPickedTool.dataset.tool;
//   const playerTool = new toolModule.Tool(playerToolName)
//   player.setTool(playerTool);
//
//   const computerToolName = getRandomToolName();
//   const computerTool = new toolModule.Tool(computerToolName);
//   computer.setTool(computerTool)
// }
//
// const playerChoosenDOM = document.getElementById('player_choosen');
// function onPlayerToolClicked(e)
// {
//   if(e.target && e.target.matches('.tool'))
//   {
//     player.updateChoosenImage(playerChoosenDOM, {
//       className: 'tool--show',
//       targetToolName : e.target.dataset.tool
//     });
//
//
//     computer.hideChoosenImage();
//
//     winnerNotficiationDOM.textContent = ''
//   }
// }
// const playerToolsDOM = document.getElementById('player_tools')
// playerToolsDOM.addEventListener('click', onPlayerToolClicked, false);
//
//
// const fightButtonDOM = document.getElementById('fight-btn');
// let isMatchEnd = false;
//
// fightButtonDOM.addEventListener('click',() => {
//     if(isMatchEnd === false)
//     {
//       startDuel();
//     }
//     else
//     {
//       gameReseter.resetGame()
//       updateScore();
//
//       isMatchEnd = false;
//       fightButtonDOM.textContent = `Fight!`;
//       hideWinner();
//     }
//
// }, false);
//
//
//
//
})();

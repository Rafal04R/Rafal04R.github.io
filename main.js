'use strict';
(function(){

function getRandomToolName()
{
  const toolNames = ['paper','rock','scissor'];
  const randomIndex = Math.floor(Math.random() * toolNames.length);
  return toolNames[randomIndex];
}
const POINTS_TO_WON = 3;
function isGameOver()
{
  return (player.score === POINTS_TO_WON  || computer.score === POINTS_TO_WON)
}
function resetGame()
{
  resetScore();
  updateScore();
  resetChoosensImages()
  resetPlayersProperties();
}
function resetScore()
{
  player.score   = 0;
  computer.score = 0;
}

const playerScoreDOM = document.getElementById('player_score')
const computerScoreDOM = document.getElementById('computer_score')
function updateScore()
{
  playerScoreDOM.textContent = player.score;
  computerScoreDOM.textContent = computer.score;
}
function resetChoosensImages()
{
  if(player.lastPickedTool.classList.contains('tool--show'))
  {
    player.lastPickedTool.classList.remove('tool--show')
  }

  if(computer.lastPickedTool.classList.contains('tool--show'))
  {
    computer.lastPickedTool.classList.remove('tool--show')
  }
}
function resetPlayersProperties()
{
  player.tool = null;
  player.lastPickedTool = null;

  computer.tool = null;
  computer.lastPickedTool = null;

}
function showMatchWinner()
{
  const matchWinner = player.score > computer.score ? 'Player' : 'Computer';
  winnerNotficiationDOM.textContent =`${matchWinner} has won!`;

}
function showRoundResult(roundResultText)
{
  winnerNotficiationDOM.textContent = roundResultText;
}
function hideWinner()
{
  winnerNotficiationDOM.textContent = '';
}

const computerChoosenDOM = document.getElementById('computer_choosen');
function startDuel()
{
  if(!player.lastPickedTool || !player.lastPickedTool.dataset)
{
  return false;
}
  createPlayersTools();

  computer.updateChoosenImage(computerChoosenDOM, {
    className: 'tool--show',
    targetToolName : computer.tool.name
  });

  const duelResult = toolComparator.compare(player.tool, computer.tool);


   showRoundResult(duelResult.roundResult);

   computer.score += duelResult.computerPoints;
   player.score   += duelResult.playerPoints;


    updateScore();
    if(isGameOver())
    {
    showMatchWinner();
    fightButtonDOM.textContent = `Reset Game`
    isMatchEnd = true;
    }

}
function createPlayersTools()
{
  const playerToolName = player.lastPickedTool.dataset.tool;
  const playerTool = new Tool(playerToolName)
  player.setTool(playerTool);

  const computerToolName = getRandomToolName();
  const computerTool = new Tool(computerToolName);
  computer.setTool(computerTool)
}

const playerChoosenDOM = document.getElementById('player_choosen');
function onPlayerToolClicked(e)
{
  if(e.target && e.target.matches('.tool'))
  {
    player.updateChoosenImage(playerChoosenDOM, {
      className: 'tool--show',
      targetToolName : e.target.dataset.tool
    });


    computer.hideChoosenImage();

    winnerNotficiationDOM.textContent = ''
  }
}
const playerToolsDOM = document.getElementById('player_tools');

playerToolsDOM.addEventListener('click', onPlayerToolClicked, false);


const winnerNotficiationDOM = document.getElementById('winner_notification')



const fightButtonDOM = document.getElementById('fight-btn');
let isMatchEnd = false;

fightButtonDOM.addEventListener('click',() => {
    if(isMatchEnd === false)
    {
      startDuel();
    }
    else
    {
      resetGame()
      isMatchEnd = false;
      fightButtonDOM.textContent = `Fight!`;
    }

}, false);



class Tool {
  constructor(name, options){
    this.name = name;
  }
}
class Player {

  constructor()
  {
    this.tool = null;
    this.score = 0;
    this.lastPickedTool = null;
  }
  setTool(tool = null)
  {
    this.tool = tool;
  }
  hideChoosenImage()
  {
    if(this.lastPickedTool && this.lastPickedTool.classList.contains('tool--show'))
    {
      this.lastPickedTool.classList.remove('tool--show');
    }
  }
  updateChoosenImage(DOMnode, options)
  {
      if(!DOMnode.children)
      {
        return false
      };

      if(this.lastPickedTool && this.lastPickedTool.classList.contains(options.className))
      {
        this.lastPickedTool.classList.remove(options.className);
      }

      for (let j = 0; j < DOMnode.children.length; j++) {
        const current = DOMnode.children[j]
        if(current.matches('.tool') && current.dataset.tool === options.targetToolName)
        {
          current.classList.add(options.className);
          this.lastPickedTool = current;
          return true;
        }
      }
    }
}

class ToolComparator {
  constructor()
  {
    this.BEATS = {
      paper : {
        beats : ['rock']
      },
      rock : {
        beats : ['scissor']
      },
      scissor : {
        beats : ['paper']
      }
    }
  }
  compare(playerTool, computerTool)
  {
    if(playerTool.name === computerTool.name)
    {
      return {playerPoints : 0, computerPoints : 0, roundResult: 'Draw!'};
    }
    const playerBeatsArray = this.BEATS[playerTool.name].beats;
    const computerBeatsArray = this.BEATS[computerTool.name].beats;

      playerBeatsArray.forEach(function(currentBeat){
        if(currentBeat === computerTool.name)
        {
          return {playerPoints : 1, computerPoints : 0, roundResult : 'Player wins!'};
        }
      });
      return {playerPoints : 0, computerPoints : 1, roundResult : 'Computer wins!'};
}
}
const player   = new Player();
const computer = new Player();
const toolComparator = new ToolComparator();

})();

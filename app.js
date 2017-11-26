
const appModule = (function(){

  class App {
    constructor(user, computer, toolComparator, match, gameReseter)
    {
      this.user   = user;
      this.computer = computer;
      this.toolComparator = toolComparator;

      this.match = match;

      this.gameReseter = gameReseter;

      this.POINTS_TO_WON = 3;

      this.playerScoreDOM = document.getElementById('player_score')
      this.computerScoreDOM = document.getElementById('computer_score')

      this.winnerNotficiationDOM = document.getElementById('winner_notification')



      this.playerToolsDOM = document.getElementById('player_tools')

      this.fightButtonDOM = document.getElementById('fight-btn');


    }
    start()
    {
      this.processEvents();
    }
    processEvents()
    {
      this.playerToolsDOM.addEventListener('click', (e) => {this.onUserToolClicked(e)} , false);
      this.fightButtonDOM.addEventListener('click', (e) => {this.onFightButtonClicked(e)}, false);
    }
    onUserToolClicked(e)
    {
        if(e.target && e.target.matches('.tool'))
        {
          this.user.updateChoosenImage({
            className: 'tool--show',
            targetToolName : e.target.dataset.tool
          });

          this.computer.hideChoosenImage();

          this.winnerNotficiationDOM.textContent = ''
        }
    }
    onFightButtonClicked()
    {
      if(!this.isGameOver())
      {
        this.match.executeRound();
        this.updateScore();

        if(this.isGameOver())
        {
            this.fightButtonDOM.textContent = `Reset Game`
        }
      }
      else
      {
        this.gameReseter.resetGame()
        this.updateScore();

        this.match.isEnd = false;
        this.fightButtonDOM.textContent = `Fight!`;
        this.hideWinner();
      }

    }
    isGameOver()
    {
      return (this.user.score === this.POINTS_TO_WON  || this.computer.score === this.POINTS_TO_WON)
    }
    updateScore()
    {
      this.playerScoreDOM.textContent   = this.user.score;
      this.computerScoreDOM.textContent = this.computer.score;
    }
    showMatchWinner()
    {
      const matchWinner = this.user.score > this.computer.score ? 'Player' : 'Computer';
      this.winnerNotficiationDOM.textContent =`${matchWinner} has won!`;

    }
    showRoundResult(roundResultText)
    {
      this.winnerNotficiationDOM.textContent = roundResultText;
    }
    hideWinner()
    {
      this.winnerNotficiationDOM.textContent = '';
    }
  }
  return {
    App
  }
})();

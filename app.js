
const appModule = (function(){

  class App {
    constructor(user, computer, toolComparator, match, gameReseter)
    {
      this.user   = user;
      this.computer = computer;
      this.toolComparator = toolComparator;

      this.match = match;

      this.gameReseter = gameReseter;

      this.playerScoreDOM = document.getElementById('player_score')
      this.computerScoreDOM = document.getElementById('computer_score')

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
        }
    }
    onFightButtonClicked()
    {
      if(this.match.isEnd(this.user, this.computer) === false)
      {
        this.match.executeRound(this.user, this.computer, this.toolComparator);
        this.updateScore();

        if(this.match.isEnd(this.user, this.computer) === true)
        {
            this.fightButtonDOM.textContent = `Reset Game`
        }
      }
      else
      {
        this.gameReseter.resetGame()
        this.updateScore();

        this.fightButtonDOM.textContent = `Fight!`;
        this.match.hideWinner();
      }
    }
    updateScore()
    {
      this.playerScoreDOM.textContent   = this.user.score;
      this.computerScoreDOM.textContent = this.computer.score;
    }
  }
  return {
    App
  }
})();

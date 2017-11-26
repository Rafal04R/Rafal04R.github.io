const matchModule = (function(){


  class Match {
    constructor(user, computer, toolComparator)
    {
      this.POINTS_TO_WON = 3;
      this.winnerNotficiationDOM = document.getElementById('winner_notification')
    }
    isEnd(user, computer)
    {
      return this.isGameOver(user, computer);
    }
    executeRound(user, computer, toolComparator)
    {
      user.createTool();
      computer.createTool();
      if(user.tool && computer.tool && toolComparator)
      {
      const round = new roundModule.Round(user.tool, computer.tool, toolComparator);
      const roundResult = round.execute();

      computer.updateChoosenImage({
        className: 'tool--show',
        targetToolName : computer.tool.name
      });


      user.score     += roundResult.userPoints;
      computer.score += roundResult.computerPoints;

      this.showRoundResult(roundResult.result)

      if(this.isGameOver(user, computer))
      {
        this.showWinner(user, computer);
      }

      }
    }
    isGameOver(user, computer)
    {
      return (user.score === this.POINTS_TO_WON  || computer.score === this.POINTS_TO_WON)
    }
    showWinner(user, computer)
    {
      const matchWinner = user.score > computer.score ? 'Player' : 'Computer';
      this.winnerNotficiationDOM.textContent =`${matchWinner} has won!`;
    }
    hideWinner()
    {
      this.winnerNotficiationDOM.textContent = '';
    }
    showRoundResult(roundResultText)
    {
      this.winnerNotficiationDOM.textContent = roundResultText;
    }
  }
  return {
    Match
  }
})();

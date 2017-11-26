const matchModule = (function(){


  class Match {
    constructor(player, computer, toolComparator)
    {
      this.player   = player;
      this.computer = computer;
      this.toolComparator = toolComparator
      this.winner = '';
    }
    startDuel()
    {
      const round = roundModule.Round(this.player, this.computer, this.toolComparator);
      const roundResult = round.execute();

      this.player.score   += roundResult.playerScore;
      this.computer.score += roundResult.computerScore;

      
    }
  }
})();

const matchModule = (function(){


  class Match {
    constructor(user, computer, toolComparator)
    {
      this.user   = user;
      this.computer = computer;
      this.toolComparator = toolComparator
      this.winner = '';
      this.isEnd = false;
    }
    executeRound()
    {
      this.user.createTool();
      this.computer.createTool();

      if(this.user.tool && this.computer.tool)
      {
      const round = new roundModule.Round(this.user, this.computer, this.toolComparator);
      const roundResult = round.execute();

      const computerToolName = this.computer.tool.name;
      this.computer.updateChoosenImage({
        className: 'tool--show',
        targetToolName : computerToolName
      });
      console.log(roundResult)
      this.user.score   += roundResult.userPoints;
      this.computer.score += roundResult.computerPoints;


      }
    }
  }
  return {
    Match
  }
})();

const gameResetModule = (function(){

class GameReseter {
  constructor(player, computer)
  {
    this.player = player;
    this.computer = computer;

  }
  resetGame()
  {
      this.resetScore();
      this.resetChoosensImages()
      this.resetPlayersProperties();
  }
  resetScore()
  {
      this.player.score   = 0;
      this.computer.score = 0;
  }
  resetChoosensImages()
  {
    if(this.player.lastPickedTool.classList.contains('tool--show'))
    {
        this.player.lastPickedTool.classList.remove('tool--show')
    }

    if(this.computer.lastPickedTool.classList.contains('tool--show'))
    {
      this.computer.lastPickedTool.classList.remove('tool--show')
    }
   }
  resetPlayersProperties()
  {

      this.player.tool = null;
      this.player.lastPickedTool = null;

      this.computer.tool = null;
      this.computer.lastPickedTool = null;

  }

}

return {
  GameReseter
}

})();

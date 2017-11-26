const roundModule = (function(){

class Round {
  constructor(player, computer, toolComparator)
  {
    this.player = player;
    this.computer = computer;

    this.toolComparator = toolComparator;

  }
  execute()
  {
    return this.toolComparator.compare(player.tool, computer.tool);

  }

}
return {
  Round
}

})();

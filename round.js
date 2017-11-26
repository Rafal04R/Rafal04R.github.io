const roundModule = (function(){

class Round {
  constructor(user, computer, toolComparator)
  {
    this.user = user;
    this.computer = computer;

    this.toolComparator = toolComparator;

  }
  execute()
  {
    return this.toolComparator.compare(this.user.tool, this.computer.tool);
  }

}
return {
  Round
}

})();

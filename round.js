const roundModule = (function(){

class Round {
  constructor(userTool, computerTool, toolComparator)
  {
    this.userTool = userTool;
    this.computerTool = computerTool;

    this.toolComparator = toolComparator;

  }
  execute()
  {
    return this.toolComparator.compare(this.userTool, this.computerTool);
  }
}
return {
  Round
}

})();

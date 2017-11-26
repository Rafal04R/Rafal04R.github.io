const userModule = (function(){

  class User extends playerModule.Player
  {
    constructor()
    {
      super();

    }
    createTool()
    {
      const toolName = player.lastPickedTool.dataset.tool;
      const tool = new toolModule.Tool(ToolName)
      if(this.tool)
      this.tool = tool;
    }
  }
})();

const userModule = (function(){

  class User extends playerModule.Player
  {
    constructor()
    {
      super();
      this.choosenDOM = document.getElementById('player_choosen');

    }
    createTool()
    {
      const toolName = this.lastPickedTool.dataset.tool;
      const tool = new toolModule.Tool(toolName)
      if(tool)
      {
        this.tool = tool;
      }
    }
  }
  return {
    User
  }
})();

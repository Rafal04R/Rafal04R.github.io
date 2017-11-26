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
      if(this.lastPickedTool && this.lastPickedTool.dataset)
      {

        const toolName = this.lastPickedTool.dataset.tool;
        const tool = new toolModule.Tool(toolName)
        this.tool = tool;
      }
    }
  }
  return {
    User
  }
})();

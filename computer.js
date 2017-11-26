const computerModule = (function(){

const helpers = helpersModule;

  class Computer extends playerModule.Player
  {
    constructor()
    {
      super();
      this.choosenDOM = document.getElementById('computer_choosen');

    }
    createTool()
    {
      const toolName = helpers.getRandomToolName();
      const tool = new toolModule.Tool(toolName);
      if(tool)
      {
        this.tool = tool;
      }
    }
  }
  return {
    Computer
  }
})();


const playerModule = (function(){

  class Player {

    constructor()
    {
      this.score = 0;
      this.choosenDOM = null;
      this.tool = null;
      this.lastPickedTool = null;
    }
    setTool(tool = null)
    {
      this.tool = tool;
    }
    hideChoosenImage()
    {
      if(this.lastPickedTool && this.lastPickedTool.classList.contains('tool--show'))
      {
        this.lastPickedTool.classList.remove('tool--show');
      }
    }
    updateChoosenImage(options)
    {
        if(!this.choosenDOM.children)
        {
          return false
        }

        if(this.lastPickedTool && this.lastPickedTool.classList.contains(options.className))
        {
          this.lastPickedTool.classList.remove(options.className);
        }

        for (let j = 0; j < this.choosenDOM.children.length; j++) {
          const current = this.choosenDOM.children[j]
          if(current.matches('.tool') && current.dataset.tool === options.targetToolName)
          {
            current.classList.add(options.className);
            this.lastPickedTool = current;
            return true;
          }
        }
      }
  }

  return {
    Player
  }
})()


const toolComparatorModule = (function(){

  class ToolComparator {
    constructor()
    {
      this.BEATS = {
        paper : {
          beats : ['rock']
        },
        rock : {
          beats : ['scissor']
        },
        scissor : {
          beats : ['paper']
        }
      }
    }
    compare(playerTool, computerTool)
    {

      if(playerTool.name === computerTool.name)
      {
        return {userPoints : 0, computerPoints : 0, result: 'Draw!'};
      }
      const playerBeatsArray = this.BEATS[playerTool.name].beats;
      const computerBeatsArray = this.BEATS[computerTool.name].beats;

      for(let i = 0 ; i < playerBeatsArray.length ; ++i)
      {
        const currentBeat = playerBeatsArray[i];
        if(currentBeat === computerTool.name)
        {
          return {userPoints : 1, computerPoints : 0, result : 'Player wins!'};
        }
       }
       return {userPoints : 0, computerPoints : 1, result : 'Computer wins!'};

     }

  }
  return {
    ToolComparator
  }

})()

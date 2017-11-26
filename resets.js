const gameResetModule = (function(){

let player = null;
let computer = null;
function _constructor(_player, _computer)
{
  player   = _player;
  computer = _computer;
}
function resetGame()
{
  resetScore();
  resetChoosensImages()
  resetPlayersProperties();
}
function resetScore()
{
  player.score   = 0;
  computer.score = 0;
}
function resetChoosensImages()
{
  if(player.lastPickedTool.classList.contains('tool--show'))
  {
    player.lastPickedTool.classList.remove('tool--show')
  }

  if(computer.lastPickedTool.classList.contains('tool--show'))
  {
    computer.lastPickedTool.classList.remove('tool--show')
  }
}
function resetPlayersProperties()
{

  player.tool = null;
  player.lastPickedTool = null;

  computer.tool = null;
  computer.lastPickedTool = null;

}

return {
  _constructor,
  resetGame,
  resetScore,
  resetChoosensImages,
  resetPlayersProperties,
}

})()

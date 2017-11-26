const helpersModule = (function(){

  function getRandomToolName()
  {
    const toolNames = ['paper','rock','scissor'];
    const randomIndex = Math.floor(Math.random() * toolNames.length);
    return toolNames[randomIndex];
  }
  return {
    getRandomToolName
  }
})();

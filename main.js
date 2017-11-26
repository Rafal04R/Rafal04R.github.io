'use strict';
(function(){


  const user   = new userModule.User();
  const computer = new computerModule.Computer();
  const toolComparator = new toolComparatorModule.ToolComparator();

  const match = new matchModule.Match(user, computer, toolComparator)

  const gameReseter = new gameResetModule.GameReseter(user, computer);

  const app = new appModule.App(user, computer, toolComparator, match , gameReseter);
  app.start();

})();

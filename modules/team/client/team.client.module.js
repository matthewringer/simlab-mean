(function (app) {
  'use strict';

  app.registerModule('team', ['core']);
  app.registerModule('team.routes', ['ui.router', 'core.routes']);
  // app.registerModule('team');
}(ApplicationConfiguration));

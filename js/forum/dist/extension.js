'use strict';

System.register('flagrow/passport/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('flagrow-passport', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('flagrow-passport', m(
            LogInButton,
            {
              className: 'Button LogInButton--passport',
              icon: 'id-card-o',
              path: '/auth/passport' },
            app.forum.attribute('flagrow.passport.loginTitle')
          ));
        });
      });
    }
  };
});
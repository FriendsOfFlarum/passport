import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('flagrow-passport', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('flagrow-passport',
      <LogInButton
        className="Button LogInButton--passport"
        icon="id-card-o"
        path="/auth/passport">
        put configured text here
      </LogInButton>
    );
  });
});

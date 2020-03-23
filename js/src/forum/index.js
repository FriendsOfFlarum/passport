import {extend} from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('fof-passport', () => {
    extend(LogInButtons.prototype, 'items', function (items) {
        items.add('fof-passport', LogInButton.component({
            className: 'Button LogInButton--passport',
            icon: app.forum.attribute('fof-passport.loginIcon'),
            path: '/auth/passport',
            children: app.forum.attribute('fof-passport.loginTitle'),
        }));
    });
});

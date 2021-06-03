import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import LogInButtons from 'flarum/forum/components/LogInButtons';
import LogInButton from 'flarum/forum/components/LogInButton';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('fof-passport', () => {
    extend(LogInButtons.prototype, 'items', function (items: ItemList) {
        items.add(
            'fof-passport',
            LogInButton.component(
                {
                    className: 'Button LogInButton--passport',
                    icon: app.forum.attribute('fof-passport.loginIcon'),
                    path: '/auth/passport',
                },
                app.forum.attribute('fof-passport.loginTitle')
            )
        );
    });
});

import app from 'flarum/app';
import { settings } from '@fof-components';

const {
    SettingsModal,
    items: { StringItem },
} = settings;

app.initializers.add('fof-passport', app => {
    app.extensionSettings['fof-passport'] = () => app.modal.show(
        SettingsModal, {
            title: app.translator.trans('fof-passport.admin.popup.title'),
            type: 'medium',
            items: s => [
                <StringItem setting={s} name='fof-passport.app_auth_url' placeholder='https://example.com/oauth/authorize'>
                    {app.translator.trans('fof-passport.admin.popup.field.app-auth-url')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.app_token_url' placeholder='https://example.com/oauth/token'>
                    {app.translator.trans('fof-passport.admin.popup.field.app-token-url')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.app_user_url' placeholder='https://example.com/api/user'>
                    {app.translator.trans('fof-passport.admin.popup.field.app-user-url')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.app_id' placeholder='123'>
                    {app.translator.trans('fof-passport.admin.popup.field.app-id')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.app_secret' placeholder='abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ'>
                    {app.translator.trans('fof-passport.admin.popup.field.app-secret')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.app_oauth_scopes'>
                    {app.translator.trans('fof-passport.admin.popup.field.app-scopes')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.button_title' placeholder={app.translator.trans('fof-passport.admin.popup.field.button-title-placeholder')}>
                    {app.translator.trans('fof-passport.admin.popup.field.button-title')}
                </StringItem>,
                <StringItem setting={s} name='fof-passport.button_icon' placeholder='far fa-id-card'>
                    {app.translator.trans('fof-passport.admin.popup.field.button-icon')}
                </StringItem>
            ]
        }
    );
});

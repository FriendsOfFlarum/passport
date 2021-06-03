import app from 'flarum/admin/app';

app.initializers.add('fof-passport', function () {
    app.extensionData
        .for('fof-passport')
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.app-auth-url'),
            setting: 'fof-passport.app_auth_url',
            type: 'text',
            placeholder: 'https://example.com/oauth/authorize',
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.app-token-url'),
            setting: 'fof-passport.app_token_url',
            type: 'text',
            placeholder: 'https://example.com/oauth/token',
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.app-user-url'),
            setting: 'fof-passport.app_user_url',
            type: 'text',
            placeholder: 'https://example.com/api/user',
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.app-id'),
            setting: 'fof-passport.app_id',
            type: 'text',
            placeholder: '123',
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.app-secret'),
            setting: 'fof-passport.app_secret',
            type: 'text',
            placeholder: 'abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ',
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.app-scopes'),
            setting: 'fof-passport.app_oauth_scopes',
            type: 'text',
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.button-title'),
            setting: 'fof-passport.button_title',
            type: 'text',
            placeholder: app.translator.trans('fof-passport.admin.popup.field.button-title-placeholder'),
        })
        .registerSetting({
            label: app.translator.trans('fof-passport.admin.popup.field.button-icon'),
            setting: 'fof-passport.button_icon',
            type: 'text',
            placeholder: 'far fa-id-card',
        });
});

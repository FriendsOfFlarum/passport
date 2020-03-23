import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

export default class PassportSettingsModal extends SettingsModal {
    title() {
        return app.translator.trans('fof-passport.admin.popup.title');
    }

    form() {
        return [
            m('.Form-group', [
                m('label', {for: 'passport-app-auth-url'}, app.translator.trans('fof-passport.admin.popup.field.app-auth-url')),
                m('input.FormControl', {
                    id: 'passport-app-auth-url',
                    bidi: this.setting('fof-passport.app_auth_url'),
                    placeholder: 'https://example.com/oauth/authorize',
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-app-token-url'}, app.translator.trans('fof-passport.admin.popup.field.app-token-url')),
                m('input.FormControl', {
                    id: 'passport-app-token-url',
                    bidi: this.setting('fof-passport.app_token_url'),
                    placeholder: 'https://example.com/oauth/token',
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-app-user-url'}, app.translator.trans('fof-passport.admin.popup.field.app-user-url')),
                m('input.FormControl', {
                    id: 'passport-app-user-url',
                    bidi: this.setting('fof-passport.app_user_url'),
                    placeholder: 'https://example.com/api/user',
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-app-id'}, app.translator.trans('fof-passport.admin.popup.field.app-id')),
                m('input.FormControl', {
                    id: 'passport-app-key',
                    bidi: this.setting('fof-passport.app_id'),
                    placeholder: '123',
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-app-secret'}, app.translator.trans('fof-passport.admin.popup.field.app-secret')),
                m('input.FormControl', {
                    id: 'passport-app-secret',
                    bidi: this.setting('fof-passport.app_secret'),
                    placeholder: 'abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ',
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-app-scopes'}, app.translator.trans('fof-passport.admin.popup.field.app-scopes')),
                m('input.FormControl', {
                    id: 'passport-app-scopes',
                    bidi: this.setting('fof-passport.app_oauth_scopes'),
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-button-title'}, app.translator.trans('fof-passport.admin.popup.field.button-title')),
                m('input.FormControl', {
                    id: 'passport-button-title',
                    bidi: this.setting('fof-passport.button_title'),
                    placeholder: app.translator.trans('fof-passport.admin.popup.field.button-title-placeholder'),
                }),
            ]),
            m('.Form-group', [
                m('label', {for: 'passport-button-icon'}, app.translator.trans('fof-passport.admin.popup.field.button-icon')),
                m('input.FormControl', {
                    id: 'passport-button-icon',
                    bidi: this.setting('fof-passport.button_icon'),
                    placeholder: 'far fa-id-card',
                }),
            ]),
        ];
    }
}

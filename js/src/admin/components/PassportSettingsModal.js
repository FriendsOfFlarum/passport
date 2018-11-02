import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

export default class PassportSettingsModal extends SettingsModal {

    title() {
        return app.translator.trans('flagrow-passport.admin.popup.title');
    }

    form() {
        return [
            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-app-auth-url'}, app.translator.trans('flagrow-passport.admin.popup.field.app-auth-url')),
                m('input', {
                    id: 'passport-app-auth-url',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.app_auth_url')
                })
            ]),
            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-app-token-url'}, app.translator.trans('flagrow-passport.admin.popup.field.app-token-url')),
                m('input', {
                    id: 'passport-app-token-url',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.app_token_url')
                })
            ]),
            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-app-user-url'}, app.translator.trans('flagrow-passport.admin.popup.field.app-user-url')),
                m('input', {
                    id: 'passport-app-user-url',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.app_user_url')
                })
            ]),
            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-app-id'}, app.translator.trans('flagrow-passport.admin.popup.field.app-id')),
                m('input', {
                    id: 'passport-app-key',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.app_id')
                })
            ]),
            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-app-secret'}, app.translator.trans('flagrow-passport.admin.popup.field.app-secret')),
                m('input', {
                    id: 'passport-app-secret',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.app_secret')
                })
            ]),

            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-app-scopes'}, app.translator.trans('flagrow-passport.admin.popup.field.app-scopes')),
                m('input', {
                    id: 'passport-app-scopes',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.app_oauth_scopes')
                })
            ]),

            m('div', {className: 'Form-group'}, [
                m('label', {for: 'passport-button-title'}, app.translator.trans('flagrow-passport.admin.popup.field.button-title')),
                m('input', {
                    id: 'passport-button-title',
                    className: 'FormControl',
                    bidi: this.setting('flagrow.passport.button_title')
                })
            ]),
        ];
    }
}

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PassportSettingsModal from 'flagrow/passport/components/PassportSettingsModal';

app.initializers.add('flagrow-passport', app => {
    app.extensionSettings['flagrow-passport'] = () => app.modal.show(new PassportSettingsModal());
});

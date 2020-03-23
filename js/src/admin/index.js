import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PassportSettingsModal from './components/PassportSettingsModal';

app.initializers.add('fof-passport', app => {
    app.extensionSettings['fof-passport'] = () => app.modal.show(new PassportSettingsModal());
});

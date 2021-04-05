<?php

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        foreach ([
                     'app_auth_url',
                     'app_token_url',
                     'app_user_url',
                     'app_id',
                     'app_secret',
                     'app_oauth_scopes',
                     'button_title',
                 ] as $key) {
            $value = $settings->get('flagrow.passport.' . $key);

            if (!is_null($value)) {
                $settings->set('fof-passport.' . $key, $value);
                $settings->delete('flagrow.passport.' . $key);
            }
        }
    },
    'down' => function (Builder $schema) {
        // Not doing anything but `down` has to be defined
    },
];

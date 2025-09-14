<?php

/*
 * This file is part of fof/passport.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        // Initialize new user field mapping settings with default values
        $defaultFieldMappings = [
            'user_id_field' => 'id',
            'user_email_field' => 'email',
            'user_name_field' => 'name',
        ];

        foreach ($defaultFieldMappings as $key => $defaultValue) {
            $settingKey = 'fof-passport.' . $key;
            
            // Only set if the setting doesn't already exist
            if (is_null($settings->get($settingKey))) {
                $settings->set($settingKey, $defaultValue);
            }
        }
    },
    'down' => function (Builder $schema) {
        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        // Remove the user field mapping settings
        $settings->delete('fof-passport.user_id_field');
        $settings->delete('fof-passport.user_email_field');
        $settings->delete('fof-passport.user_name_field');
    },
];
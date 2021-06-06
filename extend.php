<?php

/*
 * This file is part of fof/passport.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Passport;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('forum'))
        ->get('/auth/passport', 'auth.passport', Controllers\PassportController::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(Extenders\ForumAttributes::class),
];

<?php

/*
 * This file is part of fof/passport.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Passport\Events;

class ParsingResourceOwner
{
    /**
     * @var array
     */
    public $response;

    public function __construct(array &$response)
    {
        $this->response = &$response;
    }
}

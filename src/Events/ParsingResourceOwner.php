<?php

namespace Flagrow\Passport\Events;

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

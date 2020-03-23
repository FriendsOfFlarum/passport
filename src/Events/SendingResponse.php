<?php

namespace FoF\Passport\Events;

use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use Psr\Http\Message\ResponseInterface;

class SendingResponse
{
    /**
     * @var ResponseInterface
     */
    public $response;
    /**
     * @var ResourceOwnerInterface
     */
    public $user;
    /**
     * @var string
     */
    public $token;

    public function __construct(ResponseInterface &$response, ResourceOwnerInterface $user, string $token)
    {
        $this->response = &$response;
        $this->user = $user;
        $this->token = $token;
    }
}

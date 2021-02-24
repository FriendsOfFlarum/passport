<?php

namespace FoF\Passport;

use Illuminate\Support\Arr;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use League\OAuth2\Client\Tool\ArrayAccessorTrait;

class ResourceOwner implements ResourceOwnerInterface
{
    use ArrayAccessorTrait;
    /**
     * @var array
     */
    private $response;

    private static $fields = [];

    function __construct(array $response = [])
    {
        $this->response = $response;
    }

    /**
     * Returns the identifier of the authorized resource owner.
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->getValueByKey(
            $this->response,
            Arr::get(static::$fields, 'id', 'id')
        );
    }

    /**
     * Get resource owner email
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->getValueByKey(
            $this->response,
            Arr::get(static::$fields, 'email', 'email')
        );
    }

    /**
     * Get resource owner name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->getValueByKey(
            $this->response,
            Arr::get(static::$fields, 'name', 'name')
        );
    }

    /**
     * Return all of the owner details available as an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->response;
    }

    public static function setFields(array $fields = [])
    {
        static::$fields = $fields;
    }
}

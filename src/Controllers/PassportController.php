<?php

namespace Flagrow\Passport\Controllers;

use Flagrow\Passport\Providers\PassportProvider;
use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class PassportController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * @param string $redirectUri
     * @return \League\OAuth2\Client\Provider\AbstractProvider
     */
    protected function getProvider($redirectUri)
    {
        return new PassportProvider([
            'clientId' => $this->settings->get('flagrow.passport.app_id'),
            'clientSecret' => $this->settings->get('flagrow.passport.app_secret'),
            'redirectUri' => $redirectUri,
            'settings' => $this->settings
        ]);
    }

    /**
     * @return array
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => implode(' ', $this->settings->get('flagrow.app_oauth_scopes.app_scopes', []))];
    }

    /**
     * @param ResourceOwnerInterface $resourceOwner
     * @return array
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => $resourceOwner->getEmail()
        ];
    }

    /**
     * @param ResourceOwnerInterface $resourceOwner
     * @return array
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [];
    }
}

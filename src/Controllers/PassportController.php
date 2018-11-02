<?php

namespace Flagrow\Passport\Controllers;

use Exception;
use Flagrow\Passport\Providers\PassportProvider;
use Flagrow\Passport\ResourceOwner;
use Flarum\Forum\Auth\Registration;
use Flarum\Forum\Auth\ResponseFactory;
use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\RedirectResponse;

class PassportController implements RequestHandlerInterface
{
    protected $settings;
    protected $response;


    public function __construct(ResponseFactory $response, SettingsRepositoryInterface $settings)
    {
        $this->response = $response;
        $this->settings = $settings;
    }

    protected function getProvider($redirectUri)
    {
        return new PassportProvider([
            'clientId'     => $this->settings->get('flagrow.passport.app_id'),
            'clientSecret' => $this->settings->get('flagrow.passport.app_secret'),
            'redirectUri'  => $redirectUri,
            'settings'     => $this->settings
        ]);
    }

    /**
     * @return array
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => implode(' ', $this->settings->get('flagrow.app_oauth_scopes.app_scopes', []))];
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $redirectUri = (string)$request->getAttribute('originalUri', $request->getUri())->withQuery('');

        $provider = $this->getProvider($redirectUri);

        $session     = $request->getAttribute('session');
        $queryParams = $request->getQueryParams();

        $code = array_get($queryParams, 'code');

        if (!$code) {
            $authUrl = $provider->getAuthorizationUrl($this->getAuthorizationUrlOptions());
            $session->put('oauth2state', $provider->getState());

            return new RedirectResponse($authUrl);
        }

        $state = array_get($queryParams, 'state');

        if (!$state || $state !== $session->get('oauth2state')) {
            $session->remove('oauth2state');
            throw new Exception('Invalid state');
        }

        $token = $provider->getAccessToken('authorization_code', compact('code'));
        $user  = $provider->getResourceOwner($token);

        return $this->response->make(
            'passport', $user->getId(),
            function (Registration $registration) use ($user, $provider, $token) {
                $registration
                    ->provideTrustedEmail($user->getEmail())
                    ->setPayload($user->toArray());
            }
        );
    }
}

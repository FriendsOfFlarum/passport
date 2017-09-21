# Passport by ![Flagrow logo](https://avatars0.githubusercontent.com/u/16413865?v=3&s=20) [Flagrow](https://discuss.flarum.org/d/1832-flagrow-extension-developer-group), a project of [Gravure](https://gravure.io/)

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/flagrow/passport/blob/master/LICENSE.md) [![Latest Stable Version](https://img.shields.io/packagist/v/flagrow/passport.svg)](https://packagist.org/packages/flagrow/passport) [![Total Downloads](https://img.shields.io/packagist/dt/flagrow/passport.svg)](https://packagist.org/packages/flagrow/passport) [![Donate](https://img.shields.io/badge/patreon-support-yellow.svg)](https://www.patreon.com/flagrow) [![Join our Discord server](https://discordapp.com/api/guilds/240489109041315840/embed.png)](https://flagrow.io/join-discord)

The [Laravel Passport](https://laravel.com/docs/5.4/passport) compatible oauth extension.

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually:

    composer require flagrow/passport

## Configuration

In the extension settings, you have to fill the following data:

Setting | Example | Description
--- | --- | ---
OAuth authorization url | `https://example.com/oauth/authorize` | `<your laravel install>/oauth/authorize`
OAuth token url | `https://example.com/oauth/token` | `<your laravel install>/oauth/token`
Api URL providing user details when authenticated | `https://example.com/api/user` | Default Laravel installs have an `/api/user` route, otherwise point to a route returning the current user data (protected by the `passport` driver)
OAuth application id | `1` | The integer *Client ID* you've made in the Laravel app or via `artisan passport:client`
OAuth application secret | `abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ` | The *Client secret* provided by Laravel once you created the OAuth client
OAuth scopes to request | | Optional additional scopes to request during authorization, perhaps you want to protect the user url with a scope or add additional functionality
Label for login button | Login with Example | Label to place on the login button

**Hint:** When creating the OAuth client in your Laravel app, don't forget to set the `redirect` value to `<your flarum install>/auth/passport` or you might encounter `invalid_client` errors.

## Support our work

We prefer to keep our work available to everyone.
In order to do so we rely on voluntary contributions on [Patreon](https://www.patreon.com/flagrow).

## Security

If you discover a security vulnerability within Passport, please send an email to the Gravure team at security@gravure.io. All security vulnerabilities will be promptly addressed.

Please include as many details as possible. You can use `php flarum info` to get the PHP, Flarum and extension versions installed.

## Links

- [Flarum Discuss post](https://discuss.flarum.org/d/5203-flagrow-passport-the-laravel-passport-oauth-extension)
- [Source code on GitHub](https://github.com/flagrow/passport)
- [Report an issue](https://github.com/flagrow/passport/issues)
- [Download via Packagist](https://packagist.org/packages/flagrow/passport)

An extension by [Flagrow](https://flagrow.io/), a project of [Gravure](https://gravure.io/).

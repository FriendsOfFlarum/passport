# Flagrow Passport, a project of [Gravure](https://gravure.io/)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](license.md)
[![Latest Stable Version](https://img.shields.io/packagist/v/flagrow/passport.svg)](https://packagist.org/packages/flagrow/passport)
[![Total Downloads](https://img.shields.io/packagist/dt/flagrow/passport.svg)](https://packagist.org/packages/flagrow/passport)

The [Laravel Passport](https://laravel.com/docs/5.4/passport) compatible oauth extension.

## Installation

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

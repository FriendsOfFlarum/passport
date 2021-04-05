<?php

namespace FoF\Passport\Extenders;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributes
{
    /**
     * @var Translator
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(Translator $translator, SettingsRepositoryInterface $settings)
    {
        $this->translator = $translator;
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $attributes['fof-passport.loginTitle'] = $this->settings->get('fof-passport.button_title') ?: $this->translator->trans('fof-passport.api.default-login-button-title');
        $attributes['fof-passport.loginIcon'] = $this->settings->get('fof-passport.button_icon') ?: 'far fa-id-card';

        return $attributes;
    }
}

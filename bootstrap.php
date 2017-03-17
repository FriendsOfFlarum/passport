<?php

namespace Flagrow\Passport;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
   $events->subscribe(Listeners\AddClientAssets::class);
   $events->subscribe(Listeners\AddAuthRoute::class);
};

<?php

if (!defined('ABSPATH')) {
    exit();
}

/*
|--------------------------------------------------------------------------
| WordPress REST API configuration
|--------------------------------------------------------------------------
|
| Here is where you can set up the WordPress REST API features.
|
*/

return [

    // embed wp-json-server
    'wp' => [
        'require_authentication' => false, // will affect all routes.
    ],

    // your custom rest api
    'custom' => [
        'path' => '/api',
        'enabled' => true,
    ],

    // authentication
    'auth' => [
        // Embedded HTTP Basic Auth handler. OFF by default: when on, the framework hooks
        // `determine_current_user` for EVERY request, not only REST calls, and accepts a username
        // and password in each request's headers (cleartext without HTTPS). Turn it on only for a
        // plugin whose API really needs it; Application Passwords (core since 5.6) usually do.
        'basic' => false
    ]
];

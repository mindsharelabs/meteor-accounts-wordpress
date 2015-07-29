#INSTRUCTIONS

This package is for authenticating with a self-hosted wordpress server that's using the commercial OAuth2 plugin available at wp-oauth.com. 
It is not for authenticating with wordpress.com.


Make sure Grant Type 'Authorization Code' is supported under Wordpress's Settings / Oauth Server / Advanced Configuration

Make sure Permalinks are not default


## Hosting

    To use it set up a wordpress site on your webhost.
    1. Make sure it's an https:// site. You'll want your own certificate,
    but there is a way to disable this in the plugin (at your own risk).

    2. Install and configure the commercial WP Oauth Server plugin.
      a. 

    Set up a wordpress install on your webhost an dinstal
    Configure your Wordpress client:


## Configuring

1. Configure via popup screen that appears when server is first run



2. Configure programatically 

TODO XXX DOUBLE CHECK

    ServiceConfiguration.configurations.remove({
      service: 'wordpress';
    });
    
    ServiceConfiguration.configurations.insert({
      service: 'wordpress',
      clientId: 'CLIENT_ID',
      secret: 'SECRET',
      authServerURL: 'https://example.com'
    });

Manually setting 

TODO
====
- [x] Support OAuth2 via wp-oauth.com's OAuth Server Plugin
- [ ] Support OAuth1 via WP API v1 or v2


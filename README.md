#INSTRUCTIONS

This package is for authenticating with a self-hosted wordpress server that's using the commercial OAuth2 plugin available at wp-oauth.com. 
It is not for authenticating with wordpress.com.


Make sure Grant Type 'Authorization Code' is supported under Wordpress's Settings / Oauth Server / Advanced Configuration

Make sure Permalinks are not default


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


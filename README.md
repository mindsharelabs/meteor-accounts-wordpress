Meteor Login Service for self-hosted WordPress accounts
=======================================================

This package is for authenticating with self-hosted wordpress sites using the commercial WP OAuth Server plugin from <a href ="https://wp-oauth.com/" target="_blank">https://wp-oauth.com/</a>. It is not for authenticating using wordpress.com.

Setting up
----------

1. Go to your self hosted wordpress page. Log in to the admin panel, then install and activate the "WP OAuth Server" plugin (license required).

2. Make sure Grant Type 'Authorization Code' is supported under Settings / Oauth Server / Advanced Configuration

3. Make sure WordPress Permalinks are NOT default. Anything other than the "/?p=123" option works.

3. Add a new client under under Settings / OAuth Server / Clients.
 
4. Enter http://your-app.meteor.com/_oauth/wordpress as the redirect URI.

5. Note the Client ID and Secret. Enter these in the config popup when you first run your meteor app. Alternately you can configure this programatically by running this code on the server:

```javascript

	ServiceConfiguration.configurations.remove({
		service: 'wordpress'
	});
	
	ServiceConfiguration.configurations.insert({
		service: 'wordpress',
		clientId: 'CLIENT_ID',
		secret: 'SECRET',
		authServerURL: 'AUTH_SERVER'
	});
	
```

6. Make sure your server supports SSL. Without a valid SSL certificate your authentication will fail. You can disable this check (e.g. in development) by adding the following to Meteor.settings: 

    { wp_oauth_accept_invalid_certs : true}
    
## Debugging Locally

You may run into trouble with a local WordPress server (e.g. unusuable client config box).

The OAuth server needs a public URL for redirection. You can use a service like http://ngrok.com/ to expose your localhost. You'll need to set the ROOT_URL="https://YOUR_SUBDOMAIN_HERE.ngrok.io" environment variable. You may also need to access your localhost site via this ngrok domain rather than localhost. 


TODO
====
- [x] Support OAuth2 via wp-oauth.com's OAuth Server Plugin
- [x] Support WP API
- [ ] Support OAuth1 via WP API v1 or v2


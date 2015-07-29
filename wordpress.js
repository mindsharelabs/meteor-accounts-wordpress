if (typeof Wordpress === 'undefined') {
  Wordpress = {};
}

Accounts.oauth.registerService('wordpress');


Wordpress.authServer = function () {
  // Retrieve URL from ServiceConfiguration. Should be stored when client is first run.

  var wpConfig = ServiceConfiguration.configurations.findOne({service: 'wordpress'});
  if (wpConfig && wpConfig.hasOwnProperty('authServerURL')) {
    var serverUrl = wpConfig.authServerURL;
    var schemaPos = serverUrl.indexOf('://');

    // Confirm schema is https:// and insert schema if it's missing
    if (schemaPos > -1) {
      if (serverUrl.substring(0, schemaPos).toLowerCase() !== 'https') {
        var errMsg = "Auth server isn't SSL - " + serverUrl;
        if (Meteor.isClient) {
          alert (errMsg);
        }
        throw new Error(errMsg);
      }
      return serverUrl;
    }
    return 'https://' + serverUrl;

  } else {
    // authServerUrl is not configured
    throw new ServiceConfiguration.ConfigError();
  }
};


if (Meteor.isClient) {
  Meteor.loginWithWordpress = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Wordpress.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.wordpress'],
    forOtherUsers: [
      'services.wordpress.id',
      'services.wordpress.display_name'
    ]
  });
}

if (typeof Wordpress === 'undefined') {
  Wordpress = {};
}

Accounts.oauth.registerService('wordpress');


Wordpress.authServer = function () {
  // Retrieve URL from ServiceConfiguration. Should be stored when client is first run.

  var wpConfig = ServiceConfiguration.configurations.findOne({service: 'wordpress'});
  if (wpConfig && wpConfig.hasOwnProperty('authServerURL')) {
    return wpConfig.authServerURL;
  } else {
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

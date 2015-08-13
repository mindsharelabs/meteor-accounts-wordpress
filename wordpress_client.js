if(typeof WordPress === 'undefined') {
    WordPress = {};
}

WordPress.requestCredential = function(options, credentialRequestCompleteCallback) {
    if(!credentialRequestCompleteCallback && typeof options === 'function') {
        credentialRequestCompleteCallback = options;
        options = {};
    }

    var config = ServiceConfiguration.configurations.findOne({ service: 'wordpress' });
    if(!config) {
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(
            new ServiceConfiguration.ConfigError());
        return;
    }
    var credentialToken = Random.secret();
    var loginStyle = OAuth._loginStyle('wordpress', config, options);

    var loginUrl =
        WordPress.authServer() + '/oauth/authorize/' +
        '?client_id=' + config.clientId +
        '&response_type=code' +
        '&redirect_uri=' + OAuth._redirectUri('wordpress', config) +
        '&state=' + OAuth._stateParam(loginStyle, credentialToken);

    OAuth.launchLogin({
        loginService: "wordpress"
        , loginStyle: loginStyle
        , loginUrl: loginUrl
        , credentialRequestCompleteCallback: credentialRequestCompleteCallback
        , credentialToken: credentialToken
    });
};

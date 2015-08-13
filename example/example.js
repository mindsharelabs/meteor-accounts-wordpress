if(Meteor.isClient) {

}

if(Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup

        // WARNING - Do NOT copy paste into production code
        //
        // The following setting ignores SSL errors and makes your connections insecure.
        // It's only intended for testing against servers that do not have a valid SSL cert.

        _.extend(Meteor.settings, { wp_oauth_accept_invalid_certs: true });

    });
}

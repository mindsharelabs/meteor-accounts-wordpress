Template.configureLoginServiceDialogForWordPress.helpers({
    siteUrl: function() {
        return Meteor.absoluteUrl();
    }
});

Template.configureLoginServiceDialogForWordPress.fields = function() {
    return [
        { property: 'clientId', label: 'Client Id' },
        { property: 'secret', label: 'Client Secret' },
        { property: 'authServerURL', label: 'Auth Server URL - https://' }
    ];
};

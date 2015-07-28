Template.configureLoginServiceDialogForWordpress.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForWordpress.fields = function () {
  return [
    {property: 'clientId', label: 'Client Id'},
    {property: 'secret', label: 'Client Secret'},
    {property: 'authServerURL', label:'Auth Server URL (SSL)'}
  ];
};

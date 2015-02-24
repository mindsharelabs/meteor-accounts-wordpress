Package.describe({
	name: 'mindshare:accounts-wordpress',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Login service for self-hosted WordPress accounts',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/mindsharestudios/accounts-wordpress.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.3.1');
	api.addFiles('mindshare:accounts-wordpress.js');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('mindshare:accounts-wordpress');
	api.addFiles('mindshare:accounts-wordpress-tests.js');
});

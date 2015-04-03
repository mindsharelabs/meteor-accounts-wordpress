Package.describe({
	name: 'mindshare:accounts-wordpress',
	version: '0.0.1',
	summary: 'Login service for self-hosted WordPress accounts',
	git: 'https://github.com/mindsharestudios/meteor-accounts-wordpress.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.use('accounts-base', [ 'client', 'server' ]);
	// Export Accounts (etc) to packages using this one.
	api.imply('accounts-base', [ 'client', 'server' ]);
	api.use('accounts-oauth', [ 'client', 'server' ]);
	api.use('mindshare:wordpress', [ 'client', 'server' ]);
	//api.versionsFrom('1.0.3.2');
	api.addFiles('mindshare:accounts-wordpress.js');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('mindshare:accounts-wordpress');
	api.addFiles('mindshare:accounts-wordpress-tests.js');

});

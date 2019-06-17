// Imports
const Log = require('../utils/Log');
const ConfigGit = require('../config/ConfigGit');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Handler
exports.handler = async () => {

	// Log installing npm packages
	Log.spaced('Initialising git...', 'info');

	// Install npm packages
	const { stdout, stderr } = await exec('git init');

	// Check for error
	if (stderr) {
		Log.standard('Error initialising git', 'error');
		throw stderr;
	} else {
		Log.standard('Git initialised', 'success');
	}

	// Switch git config - this makes sure we have the correct active config and repo
	await ConfigGit.activate(null, true);

};

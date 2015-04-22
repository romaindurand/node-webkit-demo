(function() {
	'use strict';
	var nw = require("nw.gui");
	var os = require('os-utils');
	var win = nw.Window.get();

	initWindow();
	setInterval(function() {
		free_memory_span.textContent = (os.freememPercentage() * 100).toFixed(2) + "%";
	}, 1000);

	function initWindow() {
		win.showDevTools();
	}
})();
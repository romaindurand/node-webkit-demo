(function() {
	'use strict';
	var nw = require("nw.gui");
	var os = require('os-utils');
	var win = nw.Window.get();

	initWindow();
	initBindings();

	function initWindow() {
		win.showDevTools();
		win.setTransparent(true);
	}

	function initBindings() {
		setInterval(function() {
			free_memory_span.textContent = (os.freememPercentage() * 100).toFixed(2) + "%";
		}, 1000);

		toggle_dev_tools.addEventListener('click', toggleDevTools);
	}

	function toggleDevTools() {
		if (win.isDevToolsOpen()) {
			win.closeDevTools();
		} else {
			win.showDevTools();
		}
	}
})();
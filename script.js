(function() {
	'use strict';
	var nw = require("nw.gui");
	var os = require('os-utils');
	var win = nw.Window.get();
	var tray;

	initWindow();
	initBindings();
	initTray();

	function initWindow() {
		win.setTransparent(true);
		win.setShowInTaskbar(false);
		win.setAlwaysOnTop(true);

		win.width = 250;
		win.height = 330;
	}

	function initBindings() {
		setInterval(function() {
			free_memory_span.textContent = (os.freememPercentage() * 100).toFixed(2) + "%";
		}, 1000);

		toggle_dev_tools.addEventListener('click', toggleDevTools);
		toggle_tray.addEventListener('click', toggleTray);
	}

	function initTray() {
		tray = new nw.Tray({
			title: 'Tray',
			icon: '001_.png'
		});

		var menu = new nw.Menu();
		menu.append(new nw.MenuItem({label: 'Item A'}));
		menu.append(new nw.MenuItem({label: 'Item B'}));
		menu.append(new nw.MenuItem({type: 'separator'}));
		menu.append(new nw.MenuItem({label: 'Item C'}));

		menu.append(new nw.MenuItem({
			label: 'Quitter',
			click: function() {
				win.close();
			}
		}));

		tray.menu = menu;
	}

	function toggleDevTools() {
		if (win.isDevToolsOpen()) {
			win.closeDevTools();
		} else {
			win.showDevTools();
		}
	}

	function toggleTray() {
		if (tray) {
			tray.remove();
			tray = null;
			win.setShowInTaskbar(true);
		} else {
			initTray();
			win.setShowInTaskbar(false);
		}
	}
})();
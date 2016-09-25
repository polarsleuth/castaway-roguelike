//	***************************************************************************
//	*	game.js
//	*		version 
//	*			0x0001	--	Transfer window.onload() to game.js.
//	*			0x0002	--	Create Game{} class and Game.init(), getDisplay(),
//	*						and switchScreen() functions.
//	*					--	Transfer display.drawText calls to screen.js.


var Game = {
	_display: null,
	_currentScreen: null,
	
	init: function() {
		this._display = new ROT.Display({width: 96, height: 40, fg: "#FFFF00", bg: "#000000"});
	},
	
	getDisplay: function() {
		return this._display;
	},
	
	switchScreen: function(screen) {
		if (this._currentScreen !== null) {
			this._currentScreen.exit();
		};
		this.getDisplay().clear();
		this._currentScreen = screen;
		if (this._currentScreen !== null) {
			this._currentScreen.enter();
			this._currentScreen.render(this._display);
		}
	}
};

window.onload = function() {
	if (!ROT.isSupported()) {
		alert("The rot.js library isn't supported by your browser.");
	} else {
		Game.init();
		var display = Game.getDisplay();
		var container = display.getContainer();
		// Add the container to the HTML page.
		document.body.appendChild(container);
		Game.switchScreen(Game.Screen.TitleScreen);
	}
};
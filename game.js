var Game = {
	_display: null,
	_currentScreen: null,
	_screenWidth: 80,
	_screenHeight: 24,
	
	init: function() {
		//	Initialize to the browser's screen size (assumes a 2:1 pixel ratio)
		this._screenHeight = Math.floor(screen.height / 15) - 1;
		this._screenWidth = Math.floor(screen.width / 10);
		this._display = new ROT.Display({width: this._screenWidth,
										 height: this._screenHeight} + 1);
		var game = this;
		var bindEventToScreen = function(event) {
			window.addEventListener(eventType, function(e) {
				if (game._currentScreen !== null) {
					game._currentScreen.handleInput(eventType, e);
				};
			});
		};
		
		bindEventToScreen('keydown');
		bindEventToScreen('keypress');
	},
	
	getDisplay: function() {
		return this._display;
	},
	
	getScreenHeight: function() {
		return this._screenHeight;
	},
	
	getScreenWidth: function() {
		return this._screenWidth;
	},
	
	refresh: function() {
		this._display.clear();
		this._currentScreen.render(this._display);
	},
	
	switchScreen: function(screen) {
		if (this._currentScreen !== null) {
			this._currentScreen.exit();
		};
		this.getDisplay().clear();
		this._currentScreen = screen;
		if (!this._currentScreen !== null) {
			this._currentScreen.enter();
			this.refresh();
		};
	},
};

window.onload = function() {
	if (!ROT.isSupported()) {
		alert("The rot.js library isn't supported by your browser.");
	} else {
		Game.init();
		document.body.appendChild(Game.getDisplay().getContainer());
		Game.switchScreen(Game.Screen.titleScreen);
	};
};

//	***************************************************************************
//	*	Game.Screen (screen.js)
//	***************************************************************************
//	*	Version 
//	*		0x0003	--	Transfer display.drawText calls from game.js.
//	*				--	Create Game.Screen{} and Game.Screen.TitleScreen{}
//	*					classes along with enter() and render() functions.
//	*		0x0004	--	Strip hardcoded values from render() function and moved
//	*					into Game.Screen.TitleScreen{} data.
//	*				--	Use math to "center" name and actionString on title
//	*					screen; note our eyes lower the true center which
//	*					requires a bit of compensation.
//	*		0x0100	--	Add Main Menu Screen and handleInput() to Title Screen.


Game.Screen = {};

Game.Screen.MenuScreen = {
		_offsetX: Math.ceil((Game.getScreenWidth() - Game.getNameLength()) / 2),
		_offsetY: Math.floor(Game.getScreenHeight() / 2),
		_menu: ["a) New Game", "b) Reuse Seed", "c) Load Prior Game",
				"d) Morgue File", "e) Credits", "f) Tutorial", "g) Quit"],
		
		enter: function() {
			console.log("enter(): menu screen.");
		},
		
		exit: function() {
			console.log("exit(): menu screen.")
		},
		
		render: function (display) {
			display.drawText(this._offsetX, 2, Game.getName());
			for (i = 0; i < 7; i++) {
				display.drawText(this._offsetX, this._offsetY - 3 + i, this._menu[i]);
			};
		},
};

Game.Screen.TitleScreen = {
    _actionString: "Press [Enter] to start!",
    // center the _actionString on the screen
	_offsetX: Math.ceil((Game.getScreenWidth() - Game.getNameLength()) / 2),
	_offsetY: Math.floor(Game.getScreenHeight() / 2),
	
	enter: function() {
		console.log("enter(): title screen.");
	},
	
	exit: function() {
		console.log("exit(): title screen.")
	},
	
	render: function (display) {
		// Our eyes expect center to be above true center, so the game's name
		// goes above true verticle center.
		display.drawText(this._offsetX, (this._offsetY - 2), Game.getName());
		display.drawText(this._offsetX, this._offsetY, this._actionString);
	},
	
	handleInput: function (inputType, inputData) {
		if (inputType === 'keydown') {
			if (inputData.keyCode === ROT.VK_RETURN) {
				Game.switchScreen(Game.Screen.MenuScreen);
			};
		};
	}
};
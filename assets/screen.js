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
//	*		0x0101	--	Removed hardcoded values from
//	*					Game.Screen.MenuScreen.render() function.
//	*				--	Added MenuScreen.handleInput() function - no
//	*					functionality.


Game.Screen = {};

Game.Screen.MenuScreen = {
	_offsetX: Math.ceil((Game.getScreenWidth() - Game.getNameLength()) / 2),
	_offsetY: Math.floor(Game.getScreenHeight() / 2),
	_menu: ["[a] New Game", "[b] Reuse Seed", "[c] Load Prior Game",
			"[d] Morgue File", "[e] Credits", "[f] Tutorial", "[g] Quit"],
	_menuItems: 7,
	
	enter: function() {
		console.log("enter(): menu screen.");
	},
	
	exit: function() {
		console.log("exit(): menu screen.")
	},
	
	render: function (display) {
		display.drawText(this._offsetX, 2, Game.getName());
		var vOffset = this._offsetY - Math.floor(this._menuItems / 2);
		var hOffset = this._offsetX + 2;
		for (i = 0; i < this._menuItems; i++) {
			display.drawText(hOffset, vOffset + i, this._menu[i]);
		};
	},
	
	handleInput: function (inputType, inputData) {
		if (inputType === 'keydown') {
			switch (inputData.keyCode) {
				case ROT.VK_A:
					Game.switchScreen(Game.Screen.PlayScreen);
					break;
			};
		};
	}
};

Game.Screen.PlayScreen = {
	_offsetX: 2 * Math.floor(Game.getScreenWidth() / 3) + 1,
	_atName: '...?...',
	_atRace: '...?...',
	_atBreed: '...?...',
	_atClass: '...?...',
	_atLevel: 0,
	
	enter: function () {
		console.log("enter(): play screen.");
	},
	
	exit: function () {
		console.log("exit(): play screen.");
	},
	
	render: function (display) {
		display.drawText(this._offsetX, 2, "Name:  " + this._atName);
		display.drawText(this._offsetX, 3, "Race:  " + this._atBreed + " " +
			this._atRace);
		display.drawText(this._offsetX, 4, "Class: " + this._atClass + " +" +
			this._atLevel);
	},
	
	handleInput: function (inputType, inputData) {
		// nothing yet
	}
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

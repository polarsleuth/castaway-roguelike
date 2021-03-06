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
//	*		0x0310	--	Added New Game Screen skeleton to initialize
//	*					Game.Player{} for a new game. Provides text description
//	*					of waking situation.


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
					Game.switchScreen(Game.Screen.NewGameScreen);
					break;
			};
		};
	}
};

Game.Screen.NewGameScreen = {
	enter: function () {
		console.log("enter(): new game screen.");
		var player = Game.Player.init();
	},
	
	exit: function () {
		console.log("exit(): new game screen.");
	},
	
	render: function (display) {
		var intro = "Waves roll up the beach and over your prone, unconscious body. \n \n Nightmares of drowning burst from your lungs as panic forces crazed action. Your body scrambles up and forward beyond the reach of the waves. \n \n Some evil spirit within the waves demands your fear, and you have worshipped it enough. \n \n You stare about unfamiliar surroundings. Odd plants grow upon the cliffs above you to indicate you are far from home -- wherever that might be. Even the sun is strange and baleful. \n \n After a few moments, it sinks in -- the evil in the water demanded more than your fear. It claimed your memories too! \n \n Having feasted upon your fear and your memories, the rising waves seem ready for more. \n \n Press [Enter] to start!";
		display.drawText(10, 2, "The Beach.");
		display.drawText(10, 4, intro, (Game.getScreenWidth() - 20));
	},
	
	handleInput: function (inputType, inputData) {
		if (inputType === 'keydown') {
			if (inputData.keyCode === ROT.VK_RETURN) {
				Game.switchScreen(Game.Screen.PlayScreen);
			};
		};
	}
};

Game.Screen.PlayScreen = {
	_offsetX: Game.getScreenWidth() - 35,
	
	enter: function () {
		console.log("enter(): play screen.");
	},
	
	exit: function () {
		console.log("exit(): play screen.");
	},
	
	render: function (display) {
		display.drawText(this._offsetX, 2, "HEALTH:  " + Game.Player.getHealthBar());
		display.drawText(this._offsetX, 3, "K.O.:    " + Game.Player.getStunBar());
		display.drawText(this._offsetX, 4, "Fatigue: " + Game.Player.getFatigueBar());
		display.drawText(this._offsetX, 5, "Mana:    " + Game.Player.getManaBar());
		display.drawText(this._offsetX, 7, "Name:  " + Game.Player.getName());
		display.drawText(this._offsetX, 8, "Race:  " + Game.Player.getRaceString());
		display.drawText(this._offsetX, 9, "Class: " + Game.Player.getClassString());
		
		display.drawText(this._offsetX, 11, "Strength: " + Game.Player.getStrength());
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

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
//	*					Game.Player{} for a new game.


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

Game.Screen.NewGameScreen = {
	enter: function () {
		console.log("enter(): new game screen.");
		var player = Game.Player.init({
			strength: {curr: 18, max:18, maxima: 28},
			dexterity: {curr: 11, max: 11, maxima: 21},
			constitution: {curr: 13, max: 13, maxima: 23},
			intelligence: {curr: 10, max: 10, maxima: 20},
			ego: {curr: 10, max: 10, maxima: 20},
			presense: {curr: 15, max: 25, maxima: 25},
			ocv: {curr: 4, max: 4, maxima: 9},
			dcv: {curr: 4, max: 4, maxima: 9},
			pd: {curr: 4, max: 4, maxima: 10},
			ed: {curr: 3, max: 3, maxima: 9},
			recovery: {curr: 7, max: 7, maxima: 13},
			speed: {curr: 3, max: 3, maxima: 5},
			running: {curr: 8, max: 8, maxima: 12},
			leaping: {curr: 5, max: 5, maxima: 8},
			swimming: {curr: 0, max: 3, maxima: 6},
			body: {curr: 3, max: 13, maxima: 23},
			stun: {curr: 7, max: 29, maxima: 59},
			endurance: {curr: 7, max: 26, maxima: 56},
			mana: {curr: 1, max: 20, maxima: 50}
		});
	},
	
	exit: function () {
		console.log("exit(): new game screen.");
	},
	
	render: function (display) {
		
	},
	
	handleInput: function (inputType, inputData) {
		
	}
};

Game.Screen.PlayScreen = {
	_offsetX: Game.getScreenWidth() - 35,
	
	enter: function () {
		console.log("enter(): play screen.");
		Game.Player.init({

			body: {curr: 3, max: 13, maxima: 23},
			stun: {curr: 7, max: 29, maxima: 59},
			endurance: {curr: 7, max: 26, maxima: 56},
			mana: {curr: 1, max: 20, maxima: 50},
			
			strength: {curr: 18, max:18, maxima: 28},
			dexterity: {curr: 11, max: 11, maxima: 21},
			constitution: {curr: 13, max: 13, maxima: 23},
			intelligence: {curr: 10, max: 10, maxima: 20},
			ego: {curr: 10, max: 10, maxima: 20},
			presense: {curr: 15, max: 25, maxima: 25},
			ocv: {curr: 4, max: 4, maxima: 9},
			dcv: {curr: 4, max: 4, maxima: 9},
			pd: {curr: 4, max: 4, maxima: 10},
			ed: {curr: 3, max: 3, maxima: 9},
			recovery: {curr: 7, max: 7, maxima: 13},
			speed: {curr: 3, max: 3, maxima: 5},
			running: {curr: 8, max: 8, maxima: 12},
			leaping: {curr: 5, max: 5, maxima: 8},
			swimming: {curr: 0, max: 3, maxima: 6}
		});
	},
	
	exit: function () {
		console.log("exit(): play screen.");
	},
	
	render: function (display) {
		console.log("render(): play screen.");
		display.drawText(this._offsetX, 2, "HEALTH:  " + Game.Player.getHealthBar());
		display.drawText(this._offsetX, 3, "K.O.:    " + Game.Player.getStunBar());
		display.drawText(this._offsetX, 4, "Fatigue: " + Game.Player.getFatigueBar());
		display.drawText(this._offsetX, 5, "Mana:    " + Game.Player.getManaBar());
		display.drawText(this._offsetX, 7, "Name:  " + Game.Player.getName());
		display.drawText(this._offsetX, 8, "Race:  " + Game.Player.getRaceString());
		display.drawText(this._offsetX, 9, "Class: " + Game.Player.getClassString());
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

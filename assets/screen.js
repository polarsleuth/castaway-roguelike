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
//	*					screen; note our eyes lower center which requires a bit
//	*					of compensation.


Game.Screen = {};

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
	
	render: function(display) {
		// Our eyes expect center to be above true center, so the game's name
		// goes above true verticle center.
		display.drawText(this._offsetX, (this._offsetY - 2), Game.getName());
		display.drawText(this._offsetX, this._offsetY, this._actionString);
	}
};
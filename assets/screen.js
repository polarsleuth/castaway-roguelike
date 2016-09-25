//	***************************************************************************
//	*	screen.js
//	*		version 
//	*			0x0002	--	Transfer display.drawText calls from game.js.
//	*					--	Create Game.Screen{} and Game.Screen.TitleScreen{}
//	*						classes along with enter() and render() functions.


Game.Screen = {};

Game.Screen.TitleScreen = {
	
	enter: function() {
		console.log("enter(): title screen.");
	},
	
	exit: function() {
		console.log("exit(): title screen.")
	},
	
	render: function(display) {
		display.drawText(37, 18, "\u{03A9}m e g a   R o g\u{028A}e");
		display.drawText(37, 20, "Press [Enter] to start!");
	}
};
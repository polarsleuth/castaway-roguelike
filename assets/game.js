//	***************************************************************************
//	*	game.js
//	*		version 
//	*			0x0001	--	Transfer window.onload() to game.js.


window.onload = function() {
	if (!ROT.isSupported()) {
		alert("The rot.js library isn't supported by your browser.");
	} else {
		var display = new ROT.Display({width: 96, height: 40, fg: "#FFFF00", bg: "#000000"});
		var container = display.getContainer();
		// Add the container to the HTML page.
		document.body.appendChild(container);
		display.drawText(37, 18, "\u{03A9}m e g a   R o g\u{028A}e");
		display.drawText(37, 20, "Press [Enter] to start!");
	}
};
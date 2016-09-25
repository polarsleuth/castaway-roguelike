//	***************************************************************************
//	*	Game (game.js)
//	***************************************************************************
//	*	Version 
//	*		0x0002	--	Transfer window.onload() to game.js.
//	*		0x0003	--	Create Game{} class and Game.init(), getDisplay(), and
//	*					switchScreen() functions.
//	*				--	Transfer display.drawText calls to screen.js.
//	*		0x0004	--	Add display _options with default values.
//	*				--	All hardcoded values removed from functions.

var font = {
    size: 15,
    height: 19,
    width: 10,
    family: 'monospace',
    style: 'bold',
};

var Game = {
    _name: String.fromCharCode(0x03A9) + " m e g a   R o g " + String.fromCharCode(0x028A) + " e",
    _nameLength: 22,
	_options: {
		width: Math.floor(screen.width / font.width) + 1,
		height: Math.floor(screen.height / font.height)+ 1,
		fontSize: font.size,
		fontFamily: font.family,
		fontStyle: font.style,
		fg: '#FFFF00',
		bg:	'#000000',
		spacing: 1,
		border: 0,
	},
	_display: null,
	_currentScreen: null,
	
	init: function() {
		var game = this;
        var bindEventToScreen = function(event) {
            window.addEventListener(event, function(data) {
                // When an event is received, send it to the current screen (if
                // there is one).
                if (game._currentScreen !== null) {
                    game._currentScreen.handleInput(event, data);
                };
            });
        };
		this._display = new ROT.Display(this._options);
        // Bind basic keyboard inputs; some keys trigger a keydown event while
        // others trigger a keypress event.
        bindEventToScreen('keydown');
        bindEventToScreen('keypress');
	},
	
	getDisplay: function() {
		return this._display;
	},
	
	getName: function() {
		return this._name;
	},
	
	getNameLength: function() {
		// If escaped characters or fromCharCode or fromCodePoint characters
		// are used in the title, javascript stops being able to detenmine the
		// length of the title string. While methods do exist to correct
		// the underlying problems, it is easier to manually count a single,
		// simple string.
		return this._nameLength;
	},
	
	getScreenHeight: function() {
	    return this._options.height;
	},
	
	getScreenWidth: function() {
	    return this._options.width;
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
//	***************************************************************************
//	*	Game.Player (player.js)
//	***************************************************************************
//	*	Version
//	*		0x00.0301	--	Moved the Character information out of
//	*						Game.Screen{} class.
//	*		0x00.0302	--	Added get...() Functions and status bar functions.
//	*		0x00.0303	--	Provided for attributes to have current & max
//	*						values.
//	*		0x00.0304	--	Added current & max values to the status bars.
//	*		0x00.0305	--	Status bars are now functionally proportional for
//	*						fixed values.
//	*		0x00.0306	--	Added other attributes.
//	***************************************************************************
//	*	Road Map
//	*		0x00.0307	--	init() function which provides random starting
//	*						values for the damage bar attributes (body, stun,
//	*						end, and mana).
//	*		0x00.0308 +	--	skills, racial bonus/penalty functions, class
//	*						adjustment functions, leveling functions, sense
//	*						radii, ...
//	*					--	separate out attribute{} class and functions
//	*					--	separate out actor{} class and functions for future
//	*						monsters and NPCs

Game.Attribute = {
	curr:   10,
	max:    10,
	maxima: 20
};

Game.Player = {
	
	init: function () {
		
		var player = Game.Class.Barbarian.Warrior.init();
		
		this._name  = player._name;
		this._race  = player._race;
		this._breed = player._breed;
		this._class = player._class;
		this._level = player._level;
		
		this._body = player._body || {curr: ROT.RNG.getUniformInt(1, 10), max: 10, maxima: 20};
		this._stun = player._stun || {curr: ROT.RNG.getUniformInt(1, 20), max: 20, maxima: 50};
		this._end  = player._end  || this._stun;
		this._mana = player._mana || {curr: ROT.RNG.getUniformInt(1, 20), max: 20, maxima: 50};
		
		this._str = player._str || Game.Attribute;
		this._dex = player._dex || Game.Attribute;
		this._con = player._con || Game.Attribute;
		this._int = player._int || Game.Attribute;
		this._ego = player._ego || Game.Attribute;
		this._pre = player._pre || Game.Attribute;
		
		this._spd = player._spd || {curr: 2, max: 2, maxima:  4};
		this._ocv = player._ocv || {curr: 3, max: 3, maxima:  8};
		this._dcv = player._dcv || {curr: 3, max: 3, maxima:  8};
		this._pd  = player._pd  || {curr: 2, max: 2, maxima:  8};
		this._ed  = player._ed  || {curr: 2, max: 2, maxima:  8};
		this._rec = player._rec || {curr: 4, max: 4, maxima: 10};
		
		this._run = player._run  || {curr: 6, max: 6, maxima: 10};
		this._swm = player._swim || {curr: 0, max: 2, maxima:  5};
		this._jmp = player._leap || {curr: 2, max: 2, maxima:  5};
	},
	
	getName: function () {
		if (this._name.isKnown) {
			return this._name.desc;
		} else {
			return "...?...";
		};
	},
	
	getRaceString: function () {
		if (this._breed.isKnown) {
			if (this._race.isKnown) {
				return (this._breed.desc + " " + this._race.desc);
			}
			return (this._breed.desc + " ...?...");
		} else if (this._race.isKnown) {
			return ("...?... " + this._race.desc);
		} else {
			return "...?... ...?...";
		};
	},
	
	getClassString: function () {
		if (this._class.isKnown) {
			return (this._class.desc + " +" + this._level);
		} else {
			return ("...?... (...?...) +" + this._level);
		};
	},
	
	getHealthBar: function () {
		var health = this._body.curr;
		var bar = "%b{red}";
		var max = this._body.max;
		var inc = 20 / max;
		var fill = Math.round(health * inc);
		for (i = 0; i < fill; i++) {
			bar = bar + "_";
		};
		if (fill < 19) {
			bar = bar + "%b{}";
			for (i = fill; i < 20; i++) {
				bar = bar + "_";
			};
		};
		bar = bar + "%b{}" + health + "/" + this._body.max;
		return bar;
	},
	
	getStunBar: function () {
		var KO = this._stun.curr;
		var bar = "%b{yellow}";
		var max = this._stun.max;
		var inc = 20 / max;
		var fill = Math.round(KO * inc);
		for (i = 0; i < fill; i++) {
			bar = bar + "_";
		};
		if (fill < 19) {
			bar = bar + "%b{}";
			for (i = fill; i < 20; i++) {
				bar = bar + "_";
			};
		};
		bar = bar + "%b{}" + KO + "/" + this._stun.max;
		return bar;
	},
	
	getFatigueBar: function () {
		var end = this._end.curr;
		var bar = "%b{green}";
		var max = this._end.max;
		var inc = 20 / max;
		var fill = Math.round(end * inc);
		for (i = 0; i < fill; i++) {
			bar = bar + "_";
		};
		if (fill < 19) {
			bar = bar + "%b{}";
			for (i = fill; i < 20; i++) {
				bar = bar + "_";
			};
		};
		bar = bar + "%b{}" + end + "/" + this._end.max;
		return bar;
	},
	
	getManaBar: function () {
		var mana = this._mana.curr;
		var bar = "%b{blue}";
		var max = this._mana.max;
		var inc = 20 / max;
		var fill = Math.round(mana * inc);
		for (i = 0; i < fill; i++) {
			bar = bar + "_";
		};
		if (fill < 19) {
			bar = bar + "%b{}";
			for (i = fill; i < 20; i++) {
				bar = bar + "_";
			};
		};
		bar = bar + "%b{}" + mana + "/" + this._mana.max;
		return bar;
	},
};
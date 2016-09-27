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

Game.Player = {
	_name: '...?...',
	_race: '...?...',
	_breed: '...?...',
	_class: '...?...',
	_level: 0,
	
	_body: {curr: 3, max: 10, maxima: 20},
	_stun: {curr: 7, max: 20, maxima: 50},
	_end:  {curr: 7, max: 20, maxima: 50},
	_mana: {curr: 1, max: 20, maxima: 50},
	
	_str: {curr: 10, max: 10, maxima: 20},
	_dex: {curr: 10, max: 10, maxima: 20},
	_con: {curr: 10, max: 10, maxima: 20},
	_int: {curr: 10, max: 10, maxima: 20},
	_ego: {curr: 10, max: 10, maxima: 20},
	_pre: {curr: 10, max: 10, maxima: 20},
	
	_ocv: {curr: 2, max: 2, maxima: 8},
	_dcv: {curr: 2, max: 2, maxima: 8},
	_pd:  {curr: 2, max: 2, maxima: 8},
	_ed:  {curr: 2, max: 2, maxima: 8},
	
	_rec: {curr: 4, max: 4, maxima: 10},
	
	_speed: {curr: 2, max: 2, maxima: 4},
	_run:   {curr: 6, max: 6, maxima: 10},
	_swim:  {curr: 2, max: 2, maxima: 5},
	_leap:  {curr: 2, max: 2, maxima: 5},
	
	getName: function () {
		return this._name;
	},
	
	getRaceString: function () {
		return (this._breed + " " + this._race);
	},
	
	getClassString: function () {
		return (this._class + " +" + this._level);
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
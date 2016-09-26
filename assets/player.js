//	***************************************************************************
//	*	Game.Player (player.js)
//	***************************************************************************
//	*	Version
//	*		0x00.0301	--	Moved the Character information out of
//							Game.Screen{} class.
//	*		0x00.0302	--	Added get...() Functions and status bar functions.
//	*		0x00.0303	--	Provided for attributes to have current & max
//	*						values.

Game.Player = {
	_name: '...?...',
	_race: '...?...',
	_breed: '...?...',
	_class: '...?...',
	_level: 0,
	_stun: {curr: 20, max: 20},
	_body: {curr: 10, max: 10},
	_end:  {curr: 20, max: 20},
	_mana: {curr: 10, max: 10},
	
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
		for (i = 0; i < health; i++) {
			bar = bar + "__";
		};
		return bar;
	},
	
	getStunBar: function () {
		var KO = this._stun.curr;
		var bar = "%b{yellow}";
		for (i = 0; i < KO; i++) {
			bar = bar + "_";
		};
		return bar;
	},
	
	getFatigueBar: function () {
		var end = this._end.curr;
		var bar = "%b{green}";
		for (i = 0; i < end; i++) {
			bar = bar + "_";
		};
		return bar;
	},
	
	getManaBar: function () {
		var mana = this._mana.curr;
		var bar = "%b{blue}";
		for (i = 0; i < mana; i++) {
			bar = bar + "__";
		};
		return bar;
	},
};
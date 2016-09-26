//	***************************************************************************
//	*	Game.Player (player.js)
//	***************************************************************************
//	*	Version
//	*		0x00.0301	--	Moved the Character information out of Game.Screen{} class.

Game.Player = {
	_name: '...?...',
	_race: '...?...',
	_breed: '...?...',
	_class: '...?...',
	_level: 0,
	_stun: 20,
	_body: 10,
	_end: 20,
	_mana: 10,
	
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
		var health = this._body;
		var bar = "%b{red}";
		for (i = 0; i < health; i++) {
			bar = bar + "__";
		};
		return bar;
	},
	
	getStunBar: function () {
		var KO = this._stun;
		var bar = "%b{yellow}";
		for (i = 0; i < KO; i++) {
			bar = bar + "_";
		};
		return bar;
	},
	
	getFatigueBar: function () {
		var end = this._end;
		var bar = "%b{green}";
		for (i = 0; i < end; i++) {
			bar = bar + "_";
		};
		return bar;
	},
	
	getManaBar: function () {
		var mana = this._mana;
		var bar = "%b{blue}";
		for (i = 0; i < mana; i++) {
			bar = bar + "__";
		};
		return bar;
	},
};
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
	
	getName: function () {
		return this._name;
	},
	
	getRaceString: function () {
		return (this._breed + " " + this._race);
	},
	
	getClassString: function () {
		return (this._class + " +" + this._level);
	},
};
// somewhat: 8-12; definitely: 13-15; very: 16-18; extremely: 19-21; incredibly: 22-24;

Game.Class = {};

Game.Class.Barbarian = {};

Game.Class.Barbarian.Warrior = {
	name: {id: "Barbarian (Warrior)", isKnown: false},
	
	init: function () {
		var player = {};
		var temp = 0;
		
		player._name = '...?...';
		player._race = '...?...';
		player._breed = '...?...';
		player._class = '...?... (...?...)';
		player._level = 0;
		
		temp = ROT.RNG.getUniformInt(1, 6);
		
		player._body = {curr: ROT.RNG.getUniformInt(1, 6), max: 13, maxima: 23};
		player._stun = {curr: temp, max: 29, maxima: 59};
		player._end  = {curr: temp, max: 26, maxima: 56};
		player._mana = {curr: ROT.RNG.getUniformInt(1, 10), max: 20, maxima: 50};
		
		player._str = {curr: 18, max: 18, maxima: 28, isKnown: false, adjective: "mighty strong"};
		player._dex = {curr: 11, max: 11, maxima: 21, isKnown: false, adjective: "somewhat agile"};
		player._con = {curr: 13, max: 13, maxima: 23, isKnown: false, adjective: "solid stamina"};
		player._int = {curr: 10, max: 10, maxima: 20, isKnown: false, adjective: "somewhat intelligent"};
		player._ego = {curr: 10, max: 10, maxima: 20, isKnown: false, adjective: "somewhat strong willed"};
		player._pre = {curr: 15, max: 25, maxima: 25, isKnown: false, adjective: "intense presense"};
		player._ocv = {curr:  4, max:  4, maxima:  9, isKnown: false, adjective: "somewhat skilled in bashing"};
		player._dcv = {curr:  6, max:  6, maxima: 11, isKnown: false, adjective: "very slippery in combat"};
		player._pd  = {curr:  4, max:  4, maxima: 10, isKnown: false, adjective: "thick skinned"};
		player._ed  = {curr:  3, max:  3, maxima:  9, isKnown: false, adjective: "somewhat heat tolerant"};
		player._rec = {curr:  7, max:  7, maxima: 13, isKnown: false, adjective: ""};
		player._spd = {curr:  3, max:  3, maxima:  5, isKnown: false, adjective: "nimble"};
		player._run = {curr:  8, max:  8, maxima: 12, isKnown: false, adjective: "fleet of foot"};
		player._leap = {curr: 5, max:  5, maxima:  8, isKnown: false, adjective: "strong jumper"};
		player._swim = {curr: 0, max:  3, maxima:  6, isKnown: false, adjective: "strong swimmer"};
		
		//	player skills	--	requires special consideration; mostly these rolls will happen behind the scenes without
		//						the player choosing to use any skill.
		//					--	perhaps a successful roll allows new onscreen information, new movement options, or
		//						the advantage of surprise
		
		//					--	environmental skills -- to be defined by present location or defined prior to amnesia?
		//							player._survival{??} = 2;			//	how does this work?
		//							player._environmentalMovement = 4;	//	could be move than one environment
		
		player._climbing = 1;
		player._concealment = 1;
		player._riding = 2;			//	Riding is HARD to do in computer games....
		player._stealth = 1;
		player._tracking = 1;
		
		//	weapon familiarities
		
		player._armorLight = 0;
		player._shield = 0;
		player._weaponCommonMelee = 0;
		player._weaponCommonMissile = 0;
		player._weaponUncommonMelee = 0;
		player._weaponMountedMelee = 0;
		player._weaponMountedMissile = 0;
		
		//	combat skill levels	--	usually, a player would have the option as to where to place these levels
		//						--	perhaps the placement of the levels are based on 'fighting style' of the character?
		//								"wild" - random placement;
		//								"direct" - primarily offensive 'to hit' and to damage
		//								"manipulative" - ocv to blocking otherwise to defensive;
		//								"deceptive" - levels against levels or against perception
		//								"protracted" - levels against damage, add to perception, add to block
		
		temp = ROT.RNG.getUniformInt(1, 4);
		
		switch (temp) {
			case 1:
				player._combatAll = 2;
				break;
			case 2:
				player._combatDCV = 2;
				player._combatWeaponType = 2;
				break;
			case 3:
				player._combatAll = 1;
				player._combatWeaponType = 2;
				break;
			case 4:
				player._combatPenaltyRange = 4;
				player._combatPenaltySightRange = 4;
				player._perceptionSight = 2;
				break;
		};
		
		player.combatMountedAll = 1;
		
		//	character descriptions -- to give clues but not give away the whole mystery as to who the character is
		
		
		//	character customization options -- randomly assigned as they happened prior to amnesia.
		
		return player;
	},
};

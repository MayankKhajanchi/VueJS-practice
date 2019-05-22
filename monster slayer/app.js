new Vue({
	el: '#app',
	data: {
		startGame: false,
		myCurrentAttack: '',
		monsterCurrentAttack: '',
		turns: [],
		myHealth: 100,
		monsterHealth: 100,
	},
	methods:{
		start(){
			this.startGame = !this.startGame
		},
		attack(){
			var min=1;
			var max=11;
			var myAttack = this.calculateDamage(1,11);
			var monsterAttack = this.calculateDamage(1,11);
			this.myHealth = this.myHealth - monsterAttack;
			this.monsterHealth = this.monsterHealth - myAttack;
			this.turns.unshift({
				isPlayer: true,
				text: 'You hit Monster ' + myAttack
			})
			this.turns.unshift({
				isPlayer: false,
				text: 'Enemy hits You ' + monsterAttack
			})
		},
		specialAttack(){
			var min=11;
			var max=21;
			var mySpecialAttack = this.calculateDamage(11,21);
			var monsterSpecialAttack = this.calculateDamage(11,21);
			this.myHealth = this.myHealth - monsterSpecialAttack;
			this.monsterHealth = this.monsterHealth - mySpecialAttack;
			this.turns.unshift({
				isPlayer: true,
				text: 'You hit Monster ' + mySpecialAttack + ' with Special Attack'
			})
			this.turns.unshift({
				isPlayer: false,
				text: 'Enemy hits You ' + monsterSpecialAttack + ' with Special Attack'
			})
		},
		heal(){
			var min=1;
			var max=21;
			var myHeal = this.calculateDamage(1,21);
			var monsterHeal = this.calculateDamage(1,21);
			this.myHealth = this.myHealth + myHeal;
			this.monsterHealth = this.monsterHealth + monsterHeal;
			this.turns.unshift({
				isPlayer: true,
				text: 'You healed ' + myHeal
			})
			this.turns.unshift({
				isPlayer: false,
				text: 'Enemy healed ' + monsterHeal
			})
		},
		giveUp(){
			alert('You gave up. You lost');
			this.restoreHealth();
		},
		calculateDamage(min, max){
			return Math.floor(Math.random() * (+max - +min)) + +min;
		},
		restoreHealth(){
			this.myHealth = 100;
			this.monsterHealth = 100;
			this.startGame = false;
			this.turns = [];
		}
	},
	watch:{
		myHealth(val){
			if(this.myHealth <= 0 && this.monsterHealth > 0){
				alert('Enemy won');
				this.restoreHealth();
			}
			else if(this.monsterHealth <= 0 && this.myHealth > 0){
				alert('You won');
				this.restoreHealth();
			}else if(this.monsterHealth <= 0 && this.myHealth <= 0){
				alert('Both Died');
				this.restoreHealth();
			}
		}
	}
})
new Vue({
	el: '#app',
	data: {
		names: [
			'James Ackley',
			'Lauren Berndt',
			'Bill Clifford',
			'Andrew Clinton',
			'Brittney Dahmer',
			'Courtney Freeland',
			'Jeff Gieske',
			'Jacob Gilmore',
			'Emma Hardesty',
			'Don Herre',
			'Corey Hivner',
			'Jan Humphries',
			'Matthew Metzger',
			'Anthony Musolino',
			'Mark Oxier',
			'Jonathan Poma',
			'Aaron Smith',
			'Scott Stadt',
			'Michael Sweeney'
		],
		personOne: '',
		personTwo: '',
		personThree: ''
	},
	methods: {
		generateNames: function() {
			Array.prototype.shuffle = function() {
				var input = this;

				for (var i = input.length - 1; i >= 0; i--) {
					var randomIndex = Math.floor(Math.random() * (i + 1));
					var itemAtIndex = input[randomIndex];

					input[randomIndex] = input[i];
					input[i] = itemAtIndex;
				}
				return input;
			};
			this.names.shuffle();
			this.personOne = this.names[0];
			this.personTwo = this.names[1];
			this.personThree = this.names[2];
		}
	}
});

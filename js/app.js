App = Ember.Application.create();

App.calculatorController = Ember.Object.create({
	balance: 1000,
	interest: 0,
	payment: 100,

	timeToPay: function() {
		var months = null;
		var remainingBalance = this.get('balance');
		var interest = this.get('interest');
		var payment = this.get('payment');

		while(remainingBalance > 0)
		{
			remainingBalance -= payment;
			remainingBalance += (remainingBalance * interest);
			months++;
		}
		return months;
	}.property('balance', 'payment', 'interest'),

	totalInterest: function (){
		var remainingBalance = this.get('balance');
		var interest = this.get('interest');
		var payment = this.get('payment');
		var interestTotal = null;

		while(remainingBalance > 0)
		{
			remainingBalance -= payment;
			interestTotal += (remainingBalance * interest);
			remainingBalance += (remainingBalance * interest);
		}
		return interestTotal;
	}.property('balance', 'payment', 'interest'),
});

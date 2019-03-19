function Contact(name, intialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}
// /****************************************
//  1. Object Literals / Static Objects
var bankAccount = {
    holder: '',
    balance: 0,
    withdraw: function (amount)

    amount = amount > 0 ? 0 : amount;
        return this.balance += amount;
    },
    deposit: function (amount) {
      amount = amount < 0 ? 0 : amount;
  return this.balance += amount;
}
};
var myAccount = bankAccount;
myAccount.holder = 'sean';

// /****************************************
//  2. Constructed Objects / Instantiated Objects

 options = options || {};

  //immutable balance value
  var _balance = 0;

  return {
      holder: options.holder || '',
      balance: function () {
          return _balance;
      },
      withdraw: function (amount) {

          //we need this amount to be less than 0
          amount = amount > 0 ? 0 : amount;
          return _balance += amount;
      },
      deposit: function (amount) {

          //we need this amount to be greater than 0
          amount = amount < 0 ? 0 : amount;
          return _balance += amount;
      }
  };
};

var myAccount = new BankAccount({
  holder: 'sean'
});

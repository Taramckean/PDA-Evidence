var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add numbers together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can subtract a number from another number', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('can divide a number by another number', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  it('can click multiple buttons', function(){
    calculator.numberClick(7);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=')
  assert.equal(calculator.runningTotal, 7);
  });

  it('can chain multiple operations together', function(){
    calculator.numberClick(7);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 99)
  });

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.numberClick(6);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 20);
  });

});

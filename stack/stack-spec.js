var assert = require('chai').assert;
var expect = require('chai').expect;

var Stack = require('./stack');


describe('Stack', function() {

  beforeEach(function() {
    myStack = new Stack();
    myStack.push('First line of data');
    myStack.push('Second line of data');
  });

  afterEach(function() {
    myStack = null;
  });

  it('should have a default size of 0', function() {
    var firstStack = new Stack();
    var actual = firstStack._size;
    var expected = 0;
    expect(expected).to.equal(actual);
  });

  describe("Push", function() {

    it("should increment the size of the stack when adding data", function() {
      var expected = 2;
      var actual = myStack._size;

      expect(expected).to.equal(actual);
    });

    it("should retain the order of data as its added", function() {

      var expected = 'First line of data';
      var actual = myStack._storage[1];

      expect(expected).to.equal(actual);

    });

  });


  describe("Pop", function() {

    it("should use a stacks current size to get most recent data", function() {
      myStack.push('Third line of data');
      var currSize = myStack._size;
      var expected = myStack._storage[currSize];
      var actual = myStack.pop();

      expect(expected).to.equal(actual);

    });


    it("should delete most recently added data", function() {

      var beforeDeletedActual = myStack._storage[2];
      var beforeDeleteExpected = 'Second line of data';

      expect(beforeDeleteExpected).to.equal(beforeDeletedActual);

      myStack.pop();
      var actual = myStack._storage[2];
      var expected = undefined;

      expect(expected).to.equal(actual);

    });

    it("should decrement size by one", function() {
      myStack.pop();
      var actual = myStack._size;
      var expected = 1; 

      expect(expected).to.equal(actual);

    });

    it("should return most recently deleted item", function() {
      var actual = myStack.pop();
      var expected = 'Second line of data';

      expect(expected).to.equal(actual);
   
    });



  });

});

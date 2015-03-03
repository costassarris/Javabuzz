describe("Javabuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should know when a number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });

  it("should know when a number is NOT divisible", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
  });

  it("should know when a number is divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it("should know when a number is NOT divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
  });

  it("should know when a number is divisible by 15", function() {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  });

  it("should know when a number is NOT divisible by 15", function() {
    expect(fizzbuzz.isDivisibleByFifteen(16)).toBe(false);
  });

  describe("when playing, says", function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

    it("the number if it is not divisible by 3 or 5", function() {
      expect(fizzbuzz.says(4)).toEqual(4);
    });

  });

});
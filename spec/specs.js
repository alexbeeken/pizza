describe('Pizza', function() {
  describe('price', function() {
    it("returns $1.25 for a 1 inch pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.size = 1;
      test_pizza.hasPepperoni = true;
      expect(test_pizza.price()).to.equal("$1.25");
    });
  });

  describe('slices', function() {
    it("returns the number of slices in a 12'' pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.size = 12;
      expect(test_pizza.slices()).to.equal("8 slices");
    });

    it("returns correct grammar for size, 1 and 2 slices", function() {
      var test_pizza1 = Object.create(Pizza);
      test_pizza1.size = 1;
      var test_pizza2 = Object.create(Pizza);
      test_pizza2.size = 5;
      var test_pizza3 = Object.create(Pizza);
      test_pizza3.size = 4;
      expect(test_pizza1.slices()).to.equal("1 tiny slice")
      expect(test_pizza2.slices()).to.equal("2 slices")
      expect(test_pizza3.slices()).to.equal("1 slice")
    })
  });
});

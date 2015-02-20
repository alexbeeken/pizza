describe('pizzaPrice', function() {
  it("returns $1.25 for a 1 inch pizza", function() {
    expect(pizzaPrice(1, true)).to.equal("$1.25");
  });
});

describe('sliceCalculate', function() {
  it("returns the number of slices in a 12'' pizza", function() {
    expect(slicer(12)).to.equal("8");
  });

  it("concatenates an adjective to the end of the outut string if size is less than 3", function() {
    expect(slicer(1))
  })
})

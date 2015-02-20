describe('pizzaPrice', function() {
  it("returns $1.25 for a 1 inch pizza", function() {
    expect(pizzaPrice(1, true)).to.equal("$1.25");
  });
});

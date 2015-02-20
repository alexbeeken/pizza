var pizzaPrice = function(size, hasPepperoni) {

  var price = 0.00;

  if (hasPepperoni){
    price += 0.25 * size;
  }

  if (size < 10) {
    price += size;
  } else {
    price += (size * 1.25);
  }

  return ("$" + price.toFixed(2).toString());

}

$(document).ready(function() {
  $("#formOrder").submit(function(event) {
    event.preventDefault();
    var size = parseInt($("#size").val());
    var addPepperoni = ($("#addPepperoni")[0].checked);
    $("#price").text(pizzaPrice(size, addPepperoni));
    $("#priceShow").show();
  });
})

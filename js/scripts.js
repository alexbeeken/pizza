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

var slicer = function(size) {
  var area = (3.14 * Math.pow(size/2, 2));
  rawOutput = (area/15);
  var output = Math.ceil(rawOutput).toString();

  console.log(rawOutput + " " + output + " " + area);

  if (size < 3) {
    if (rawOutput < 1) {
      var end = " tiny slice";
    } else {
      var end = " tiny slices";
    }
  } else if (output === '1'){
    var end = " slice";
  } else {
    var end = " slices";
  }

  return (output + end);


}

$(document).ready(function() {
  $("#formOrder").submit(function(event) {
    event.preventDefault();
    var size = parseInt($("#size").val());
    var addPepperoni = ($("#addPepperoni")[0].checked);
    $("#price").text(pizzaPrice(size, addPepperoni));
    $("#slices").text(slicer(size));
    $("#priceShow").show();
  });
})

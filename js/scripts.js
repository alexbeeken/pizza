var Pizza = {
  size: 0,

  hasPepperoni: false,

  price: function() {

    var price = 0.00;

    if (this.hasPepperoni){
      price += 0.25 * this.size;
    }

    if (this.size < 10) {
      price += this.size;
    } else {
      price += (this.size * 1.25);
    }

    return ("$" + price.toFixed(2).toString());
  },

  slices: function() {
    var area = (3.14 * Math.pow(this.size/2, 2));
    var rawOutput = (area/15);
    var output = Math.ceil(rawOutput).toString();

    if (this.size < 3) {
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

}

$(document).ready(function() {
  $("#formOrder").submit(function(event) {
    event.preventDefault();
    var pizza = Object.create(Pizza);
    pizza.size = parseInt($("#size").val());
    pizza.hasPepperoni = ($("#addPepperoni")[0].checked);
    $("#price").text(pizza.price);
    $("#slices").text(pizza.slices);
    $("#priceShow").show();
  });
})

function calculate() {
    var billTotal = parseFloat(document.getElementById("bill-total").value);
    var splitCount = parseInt(document.getElementById("split-count").value);
    if (billTotal > 0 && splitCount > 0) {
        var each = billTotal / splitCount;
        document.getElementById("results").innerHTML = "Each person owes " + each.toFixed(2);
    } else {
        document.getElementById("results").innerHTML = "Please enter valid values.";
    }
}

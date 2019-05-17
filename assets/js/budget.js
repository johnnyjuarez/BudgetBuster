let input = 0;
let deduction1 = 0;
let total = 0;
let numberData = [];
let $boxvalue = $(".num");
let li = document.querySelector("li");
let inputAmount = document.getElementById("inputAmount");

// test math and form clearing
// *************************FIX THIS*******************************
$(".calculateBtn").on("click", function(e) {
  getNumbers($boxvalue);
  input = Number(inputAmount.value);
  // function sum for the containing array
  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  // store the result into a variable
  let sum = arrSum(numberData);
  // set total to input minus sum
  total = input - sum;
  // set the html of our total to total
  $(".total").html(total);
  // resets our input data
  $("input[type='text']").val("");
  numberData = [];
});

//  create a deduction input
$(".newDeduct").on("click", function() {
  $("ul").append(
    "<li><input class='num' type='text' placeholder='$00.00' /><span>X</span></li>"
  );
});
// delete inputs that we don't need
$("ul").on("click", "span", function() {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});
// function to store deductions into an array
function getNumbers(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value >= 0) {
      numberData.push(Number(inputs[i].value));
      console.log(numberData);
    }
  }
}

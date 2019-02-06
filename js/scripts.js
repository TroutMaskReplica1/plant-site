//
// $(document).ready(function(){
//   function() {
//     $('.collapse').collapse();
//
//   });
//   });

$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var interestInput = parseInt($("select#interests").val());
    var devInput = parseInt($("select#dev").val());
    var timeInput = parseInt($("select#time").val());
    var total = interestInput + devInput + timeInput;

    if (total <= 10) {
      $("#r1").show()
      $("#r2").hide()
      $("#r3").hide()
    }
    else if (total > 11 && total <= 15 ) {
      $("#r2").show()
      $("#r1").hide()
      $("#r3").hide()

    }
    else if (total > 15 && total <= 20) {
      $("#r3").show()
      $("#r1").hide()
      $("#r2").hide()
    } else {
      alert("please fill in the question")
    }
  });
});

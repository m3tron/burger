$(function() {
  /*  $(".eat-it").on("click", e => {
    var id = $(this).data("id");
    var devouredState = $(this).data("devoured");

    var newDevouredState = {
      devoured: devouredState
    };
  }); */

  $("#newBurgerButton").on("click", e => {
    e.preventDefault();
    console.log("clicked");
    var newBurger = {
      burger_name: $("#newBurger")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(data => {
      console.log(`New burger added: ${data}`);
      location.reload();
    });
  });
});

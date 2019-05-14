$(function() {
  $(".eatIt").on("click", function(e) {
    //e.preventDefault();
    var id = $(this).data("id");

    console.log(id);

    $.ajax("/api/burgers/" + id, {
      method: "PUT"
    }).then(data => {
      console.log(data);
      location.reload();
    });
  });

  $("#newBurgerButton").on("click", e => {
    e.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(data => {
      console.log(`New burger added: ${newBurger}`);
      location.reload();
    });
  });
});

$(function() {
  //updates burger to devoured on clicking the burger
  $(".eatIt").on("click", function(e) {
    //id of burger button associated to burger_name
    var id = $(this).data("id");

    //ajax request to api
    $.ajax("/api/burgers/" + id, {
      method: "PUT"
    }).then(data => {
      location.reload();
    });
  });

  //creates new burger by clicking add burger button
  $("#newBurgerButton").on("click", e => {
    e.preventDefault();

    //new burger name from form
    var newBurger = {
      burger_name: $("#newBurger")
        .val()
        .trim()
    };

    //ajax request to create new burger
    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(data => {
      console.log(`New burger added: ${newBurger}`);
      location.reload();
    });
  });
});

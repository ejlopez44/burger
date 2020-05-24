// create on click functions that performs PUT to update status from devoured false to true

$(function () {

    // on click to devour burgers
    $('.devour-it').on('click', function (event) {
        event.preventDefault();
        let id = $(this).data('id')
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("devoured that burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );


    })

    // form submission to add new burgers

    $(".create-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


})



// create form that takes the name of a burger and POST to database
// create on click functions that performs PUT to update status from devoured false to true

$(function () {
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
})



// create form that takes the name of a burger and POST to database
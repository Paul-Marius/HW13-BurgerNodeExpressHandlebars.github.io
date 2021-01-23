$(document).ready(function () {

    // Delete Button
    $(".delete-button").on("click", function (event) {
        event.preventDefault();

        let id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "burger/create" + id
        })
            .then(location.reload());

    });


});


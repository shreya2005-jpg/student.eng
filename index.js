$(document).ready(function() {
    $(".gallery-item").fadeIn(); // Display all images initially

    $(".filter-btn").click(function() {
        let filter = $(this).attr("data-filter");

        if (filter === "all") {
            $(".gallery-item").fadeIn();
        } else {
            $(".gallery-item").fadeOut();
            $("." + filter).fadeIn();
        }
    });
});
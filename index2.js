$(document).ready(function() {
    // Handle form submission
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault();

        // Get form data
        const name = $("#name").val();
        const email = $("#email").val();
        const role = $("#role").val();

        // Add new row to the table
        $("#userTable").append(`
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${role}</td>
            </tr>
        `);

        // Clear form inputs
        $(this)[0].reset();
    });

    // Handle sorting
    $(".sort-btn").click(function() {
        const column = $(this).data("column");
        const rows = $("#userTable tr").get();

        rows.sort((a, b) => {
            const valA = $(a).find(`td:contains('${column}')`).text().toLowerCase();
            const valB = $(b).find(`td:contains('${column}')`).text().toLowerCase();
            return valA > valB ? 1 : -1;
        });

        $("#userTable").empty().append(rows);
    });

    // Handle filtering
    $("#searchInput").on("keyup", function() {
        const query = $(this).val().toLowerCase();
        $("#userTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1);
        });
    });
});
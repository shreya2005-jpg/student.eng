$(document).ready(function() {
    // Add registration data to table
    $("#registrationForm").submit(function(event) {
        event.preventDefault();
        
        let name = $("#name").val();
        let email = $("#email").val();
        let role = $("#role").val();
        
        let newRow = `<tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${role}</td>
        </tr>`;
        
        $("#userTable").append(newRow);
        $("#registrationForm")[0].reset();
    });

    // Implement search filter
    $("#searchInput").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#userTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

// Sorting function
function sortTable(columnIndex) {
    let rows = $("#userTable tr").get();
    rows.sort(function(a, b) {
        let A = $(a).children("td").eq(columnIndex).text().toUpperCase();
        let B = $(b).children("td").eq(columnIndex).text().toUpperCase();
        
        return A < B ? -1 : A > B ? 1 : 0;
    });

    $.each(rows, function(index, row) {
        $("#userTable").append(row);
    });
}
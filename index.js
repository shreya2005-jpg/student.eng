document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get task details
    const task = document.getElementById('task').value;
    const priority = document.getElementById('priority').value;
    
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = task;
    
    // Add priority-specific styling
    if (priority === 'high') {
        listItem.classList.add('high-priority');
    } else if (priority === 'medium') {
        listItem.classList.add('medium-priority');
    } else {
        listItem.classList.add('low-priority');
    }
    
    // Add the list item to the list
    document.getElementById('todoList').appendChild(listItem);
    
    // Clear form inputs
    document.getElementById('task').value = '';
    document.getElementById('priority').value = 'high';
});
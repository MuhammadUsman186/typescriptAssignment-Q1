var current_users = ['John', 'Bob', 'James', 'Max', 'Paul'];
var new_users = ['John', 'Alice', 'Jack', 'Matthew', 'Mark'];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("Username ".concat(new_users[i], " is already taken. Please choose a different username."));
    }
    else {
        console.log("Username ".concat(new_users[i], " is available."));
    }
}

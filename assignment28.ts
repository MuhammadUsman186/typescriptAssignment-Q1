let current_users: string[] = ['John', 'Bob', 'James', 'Max', 'Paul'];
let new_users: string[] = ['John', 'Alice', 'Jack', 'Matthew', 'Mark'];

for (let i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i])) {
    console.log(`Username ${new_users[i]} is already taken. Please choose a different username.`);
  } else {
    console.log(`Username ${new_users[i]} is available.`);
  }
}
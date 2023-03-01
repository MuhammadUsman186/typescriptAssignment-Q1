var message = "Muhammad Usman";
var result = message.toLowerCase();
var result1 = message.toUpperCase();
function titleCase(message) {
    message = message.toLowerCase().split(' ');
    for (var i = 0; i < message.length; i++) {
        message[i] = message[i].charAt(0).toUpperCase() + message[i].slice(1);
    }
    return message.join(' ');
}
console.log(result);
console.log(result1);
console.log(titleCase(message));

function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " shirt with the message \"").concat(message, "\" will be printed."));
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "Happy Coding!");

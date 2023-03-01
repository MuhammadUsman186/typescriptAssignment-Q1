var magiciain = ["David Copperfield", "Dynamo", "David Blaine", "Criss Angel"];
function show_magicians1(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great1(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}
show_magicians1(magiciain);
var great_magicians = make_great1(magiciain);
show_magicians1(great_magicians);

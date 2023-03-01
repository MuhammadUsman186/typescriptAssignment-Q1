var magician = ["David Copperfield", "Harry Houdini", "Dynamo"];
function make_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        magician_names[i] = magician_names[i] + " the Great";
    }
}
function show_magicians(magician_names) {
    for (var _i = 0, magician_names_1 = magician_names; _i < magician_names_1.length; _i++) {
        var name_1 = magician_names_1[_i];
        console.log(name_1);
    }
}
make_great(magician);
show_magicians(magician);

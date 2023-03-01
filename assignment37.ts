let magician: string[] = ["David Copperfield", "Harry Houdini", "Dynamo"];

function make_great(magician_names: string[]) {
    for(let i=0; i<magician_names.length; i++) {
        magician_names[i] = magician_names[i] + " the Great";
    }
}

function show_magicians(magician_names: string[]) {
    for(let name of magician_names) {
        console.log(name);
    }
}

make_great(magician);
show_magicians(magician);
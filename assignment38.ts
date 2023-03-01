
let magiciain: string[] = ["David Copperfield", "Dynamo", "David Blaine", "Criss Angel"];


function show_magicians1(magicians: string[]){
  for(let magician of magicians){
    console.log(magician);
  }
}


function make_great1(magicians: string[]){
  let great_magicians: string[] = [];
  for(let magician of magicians){
    great_magicians.push(magician + " the Great");
  }
  return great_magicians;
}

show_magicians1(magiciain);


let great_magicians = make_great1(magiciain);

show_magicians1(great_magicians);
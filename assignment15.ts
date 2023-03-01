var guestlist=['Hassan','Asad','Saad'];
for(var i=0;i<guestlist.length;i++){
    console.log('I would like to invite '+' '+guestlist[i]+' '+'to dinner!');
}
console.log(guestlist[1]+' '+'is not coming to dinner');

guestlist[1]='Usama';
for(var i=0;i<guestlist.length;i++){
    console.log('I would like to invite '+' '+guestlist[i]+' '+'to dinner!');
}
console.log(guestlist.length);
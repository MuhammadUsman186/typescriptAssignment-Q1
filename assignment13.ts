var guestlist=['Hassan','Asad','Saad'];
for(var i=0;i<guestlist.length;i++){
    console.log('I would like to invite '+' '+guestlist[i]+' '+'to dinner!');
}
console.log(guestlist[1]+' '+'is not coming to dinner');

guestlist[1]='Usama';
for(var i=0;i<guestlist.length;i++){
    console.log('I would like to invite '+' '+guestlist[i]+' '+'to dinner!');
}
console.log('I have found a bigger table for dinner');

guestlist.unshift('ebad');
guestlist.splice(2,0,'Fasih');
guestlist.push('raza');
for(var i=0;i<guestlist.length;i++){
    console.log('I would like to invite '+' '+guestlist[i]+' '+'to dinner!');
}
console.log('The dinner has not arrived so only 2 people can come to dinner');

    console.log('Sorry i can not invite '+' '+guestlist[5]+' '+'to dinner!');
    guestlist.pop();
    console.log('Sorry i can not invite '+' '+guestlist[4]+' '+'to dinner!');
    guestlist.pop();
    console.log('Sorry i can not invite '+' '+guestlist[3]+' '+'to dinner!');
    guestlist.pop();
    console.log('Sorry i can not invite '+' '+guestlist[2]+' '+'to dinner!');
    guestlist.pop();

for(var i=0;i<guestlist.length;i++){
    console.log('I would still like to invite '+' '+guestlist[i]+' '+'to dinner!');
}
console.log('Sorry i can not invite '+' '+guestlist[1]+' '+'to dinner!');
guestlist.pop();
console.log('Sorry i can not invite '+' '+guestlist[0]+' '+'to dinner!');
guestlist.pop();
console.log(guestlist);
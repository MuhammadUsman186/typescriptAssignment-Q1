var username=['admin','user1','user2','user3','user4'];
for(var i=0;i<username.length;i++){
    if(username[i]=='admin'){
        console.log('Hello admin, would you like to see a status report?');
    }else{
        console.log(' Hello '+username[i]+' '+', thank you for logging in again');
    }
}
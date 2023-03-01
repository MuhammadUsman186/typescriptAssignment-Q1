function make_album(artistName, albumTitle, numberOfTracks) {
    var albumObject = {
        artist: artistName,
        title: albumTitle
    };
    if (numberOfTracks != undefined) {
        albumObject['numberOfTracks'] = numberOfTracks;
    }
    return albumObject;
}
var album1 = make_album('Michael Jackson', 'Thriller');
var album2 = make_album('The Rolling Stones', 'Let it Bleed', 10);
var album3 = make_album('AC/DC', 'Highway to Hell', 9);
console.log(album1);
console.log(album2);
console.log(album3);


function make_album(artistName: string, albumTitle: string, numberOfTracks?: number): object {
    let albumObject: object = {
        artist: artistName,
        title: albumTitle
    }

    if (numberOfTracks != undefined) {
        albumObject['numberOfTracks'] = numberOfTracks;
    }

    return albumObject;
}

let album1 = make_album('Michael Jackson', 'Thriller');
let album2 = make_album('The Rolling Stones', 'Let it Bleed', 10);
let album3 = make_album('AC/DC', 'Highway to Hell', 9);

console.log(album1);
console.log(album2);
console.log(album3);
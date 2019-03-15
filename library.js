class Library {
    constructor(name, creator) {
        this.name = name,
        this.creator = creator,
        this.playlists = []
    }

    addPlaylist(newPlaylist) {
        this.playlists.push(newPlaylist);
    }
}

class Playlist {
    constructor(name) {
        this.name = name,
        this.tracks = []
    }

    addTracks(newTrack) {
        this.tracks.push(newTrack);
    }

    overallRating() {
        //Average rating of all tracks in playlist.
        let totalRating = 0;
        this.tracks.forEach(track => {
            totalRating += track.length;
        })
        console.log(`Average rating of all tracks in ${this.name} is ${(totalRating / this.tracks.length)}`)
    }

    totalDuration() {
        //Total duration of all tracks in playlist.
        let totalLength = 0;
        this.tracks.forEach(track => {
            totalLength += track.length;     
        })
        console.log(`Total duration of all tracks in ${this.name} is ${totalLength}.`);
    }
}

class Track {
    constructor(title, rating, length) {
        this.title = title,
        this.rating = rating,
        this.length = length
    }
}

let myJams = new Library("Connor\'s Sick Beats", "C-Money");
let bestPlaylist = new Playlist("Reggae for the boys");
let newTrack = new Track("Steel Drums I guess", 5, 145);
let newTrack2 = new Track("More Steel drums.. Sorry", 2, 85);

bestPlaylist.addTracks(newTrack);
bestPlaylist.addTracks(newTrack2);
myJams.addPlaylist(bestPlaylist);
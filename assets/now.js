document.addEventListener("DOMContentLoaded", async () => {
    get_now();
    get_recent_tracks();
});

async function get_now() {
    // Get top artists from last.fm
    let response = await fetch(
        "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=kaangiray26&period=7day&limit=5&api_key=a71442723a9101d641ecb76a6bd077b3&format=json",
    ).then((res) => res.json());

    // Parse artists to HTML
    let html = response.topartists.artist.map((artist) => {
        return `<li><a href="${artist.url}">${artist.name}</a></li>`;
    });

    // Load the template
    document.querySelector("#top-artists").innerHTML = html.join("");
}

async function get_recent_tracks() {
    // Get top artists from last.fm
    let response = await fetch(
        "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kaangiray26&limit=5&api_key=a71442723a9101d641ecb76a6bd077b3&format=json",
    ).then((res) => res.json());

    // Parse tracks to HTML
    let html = response.recenttracks.track.map((track) => {
        return `<li><img src="${track.image[3]["#text"]}" alt="${track.name} by ${track.artist["#text"]}"><a href="${track.url}">${track.name}</a><span>${track.artist["#text"]}</span></li>`;
    });

    // Load the template
    document.querySelector("#last-songs").innerHTML = html.join("");
}

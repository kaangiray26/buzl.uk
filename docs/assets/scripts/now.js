window.addEventListener("load", async () => {
    get_now();
    get_recent_tracks();
});

async function get_now() {
    // Get top artists from last.fm
    const response = await fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=kaangiray26&period=7day&limit=5&api_key=a71442723a9101d641ecb76a6bd077b3&format=json",
    ).then((res) => res.json());

    // Parse artists to HTML
    const list = document.querySelector("#top-artists");
    response.topartists.artist.forEach((artist) => {
        list.innerHTML += `
            <li>
                <a href="${artist.url}" target="_blank">
                    ${artist.name}
                </a>
            </li>
        `
    });
}

async function get_recent_tracks() {
    // Get top artists from last.fm
    const response = await fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kaangiray26&limit=5&api_key=a71442723a9101d641ecb76a6bd077b3&format=json",
    ).then((res) => res.json());

    // Add song item to #last-songs
    const list = document.querySelector("#last-songs");
    for (let i = 0; i < 5; i++) {
        let track = response.recenttracks.track[i];
        list.innerHTML += `
            <li>
                <a href="${track.url}" target="_blank">
                    <span class="index">${i + 1}</span>
                    <img src="${track.image[2]["#text"]}" alt="Album cover">
                    <p>
                        <span class="name">${track.name}</span>
                        <span class="artist">${track.artist["#text"]}</span>
                    </p>
                </a>
            </li>
        `;
    }
}
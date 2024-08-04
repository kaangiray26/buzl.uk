async function toggle_dithering(item) {
    // Get img
    const img = item.querySelector(".gallery-image");
    if (img.getAttribute("data-dither") === "false") {
        return;
    }

    // Get variables
    const dither_img = item.querySelector(".dither");
    const ext = img.getAttribute("data-ext");
    const data_src = img.getAttribute("data-src");
    const dithered = img.getAttribute("data-dithered");

    // Toggle dithering
    if (dithered === "true") {
        img.setAttribute("data-dithered", "false");
        img.src =
            "https://kaangiray26.github.io/images/" + data_src + "." + ext;
        dither_img.hidden = true;
        return;
    }
    img.setAttribute("data-dithered", "true");
    img.src =
        "https://kaangiray26.github.io/images/" + data_src + "-dithered.png";
    dither_img.hidden = false;
}

async function scroll_to_top() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

async function search() {
    var documents = [
        {
            name: "Lunr",
            text: "Like Solr, but much smaller, and not as bright.",
        },
        {
            name: "React",
            text: "A JavaScript library for building user interfaces.",
        },
        {
            name: "Lodash",
            text: "A modern JavaScript utility library delivering modularity, performance & extras.",
        },
    ];

    var idx = lunr(function () {
        this.ref("name");
        this.field("text");

        documents.forEach(function (doc) {
            this.add(doc);
        }, this);
    });

    var results = idx.search("bright");
    console.log("Results:", results);
}

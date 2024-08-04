async function get_results() {
    // Get index
    const docs = await fetch("/index.json").then((res) => res.json());

    // Get query
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");

    // Set query to search input
    document.querySelector("#search-query").textContent = query;

    // Get results
    const fuse = new Fuse(docs, {
        threshold: 0.3,
        ignoreLocation: true,
        findAllMatches: true,
        keys: ["title", "excerpt", "tags", "date"],
    });
    const results = fuse.search(query, {
        limit: 10,
    });

    // Display results
    const results_ul = document.querySelector("#search-results");
    results.map((res) => {
        // Create elements
        let li = document.createElement("li");
        let a = document.createElement("a");
        let br = document.createElement("br");
        let small = document.createElement("small");
        let p = document.createElement("p");

        // Set data
        a.href = res.item.url;
        a.textContent = res.item.title;
        small.textContent = res.item.date;
        p.textContent = res.item.excerpt;

        // Append elements
        li.appendChild(a);
        li.appendChild(br);
        li.appendChild(small);
        li.appendChild(p);

        // Append to ul
        results_ul.appendChild(li);
    });
}
get_results();

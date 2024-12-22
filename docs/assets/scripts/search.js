window.addEventListener("load", ()=>{
    get_results();
})

async function get_results() {
    // Get query
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");

    // Set query to search input
    document.querySelector("#search-query").textContent = query;

    // Get index
    const docs = await fetch("/index.json").then((res) => res.json());

    // Get results
    const fuse = new Fuse(docs, {
        threshold: 0.3,
        includeMatches: true,
        ignoreLocation: true,
        findAllMatches: true,
        useExtendedSearch: true,
        keys: ["title", "excerpt", "tags", "date"],
    });

    const results = fuse.search(`'${query}`, {
        limit: 10,
    });

    // Display results
    const results_ul = document.querySelector("#search-results");
    if (!results.length) {
        results_ul.innerHTML = `
            <li>No results found.</li>
        `;
        return;
    }

    // Add results to the list
    results.map((res) => {
        // Set data
        let html = `
            <li>
                <a href="${res.item.url}">
                    <span>${res.item.title}</span   >
                </a>
                <time>${res.item.date}</time>
                <p>${res.item.tags.map((tag) => `<span>#${tag}</span>`).join(" ")}</p>
                <p>${res.item.excerpt}</p>
            </li>
        `;

        // Highlight matches
        res.matches.forEach((match) => {
            // Take the value
            let match_text = match.value.substring(
                match.indices[0][0],
                match.indices[0][1] + 1,
            );
            let match_html = `<match>${match_text}</match>`;
            html = html.replace(match_text, match_html);
        });

        // Append to ul
        results_ul.innerHTML += html;
    });
}
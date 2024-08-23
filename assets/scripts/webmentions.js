const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function format_date(dt) {
    // Example: 2024-05-17T20:49:17-07:00
    // Return format: 21 Aug 2024
    const date = new Date(dt);

    let day = ("0" + date.getDate()).slice(-2);
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

document.addEventListener("DOMContentLoaded", async () => {
    const webmentions = document.querySelector("webmentions");
    const response = await fetch(
        `https://webmention.io/api/mentions.jf2?target=https://www.buzl.uk${window.location.pathname}`,
    ).then((res) => res.json());

    // Parse the response
    if (!response.children.length) return;

    // Create a list of webmentions
    const webmentionsList = document.createElement("ul");
    response.children.forEach((mention) => {
        const listItem = document.createElement("li");

        // Get the mention details
        let url = mention.url;
        let date = format_date(mention["wm-received"]);

        // Get author details
        let author = mention.author.name
            ? "by " + mention.author.name
            : "on " + mention["wm-source"];
        let avatar = mention.author.photo
            ? mention.author.photo
            : "/assets/person.svg";

        // Create the list item
        listItem.innerHTML = `
        <img src="${avatar}" alt="avatar" />
        <div>
            <time>${date}</time>
            <a href="${url}">mentioned ${author}</a>
        </div>
        `;
        webmentionsList.appendChild(listItem);
    });

    // Append the list to the webmentions element
    webmentions.appendChild(webmentionsList);

    // Make the webmentions visible
    webmentions.style.display = "block";
});

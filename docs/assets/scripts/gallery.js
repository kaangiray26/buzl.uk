async function toggle_dithering(item) {
    // Get img
    const img = item.querySelector("img");

    // Get variables
    const ext = img.getAttribute("data-ext");
    const data_src = img.getAttribute("data-src");
    const dithered = img.getAttribute("data-dithered");

    // Disable dithering
    if (dithered === "true") {
        img.setAttribute("data-dithered", "false");
        img.src =
            "https://kaangiray26.github.io/images/" + data_src + "." + ext;
        return;
    }

    // Enable dithering
    img.setAttribute("data-dithered", "true");
    img.src =
        "https://kaangiray26.github.io/images/" + data_src + "-dithered.png";
}
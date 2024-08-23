document.addEventListener("DOMContentLoaded", async () => {
    console.log("404.js");
    await add_chars("Hey, what are you doing here?");
    await wait(1000);
    await add_chars("Are you lost?");
    await wait(1000);
    await add_chars("...");
    await wait(1000);
    await add_chars("Don't worry, I'll help you find your way back.");
    await wait(1500);
    await add_chars("Are you still there?");
    await wait(1000);
    await add_chars(
        "Just press this button to go back to the main page, okay?",
    );
    await wait(300);
    const button = document.createElement("button");
    button.innerHTML = "Go back";
    button.addEventListener("click", () => {
        window.location.href = "/";
    });
    document.querySelector("terminal").appendChild(button);
});

async function add_chars(texts) {
    const terminal = document.querySelector("terminal");
    let text = terminal.innerHTML;
    text += "<br>";
    for (let i = 0; i < texts.length; i++) {
        text += texts[i];
        terminal.innerHTML = text;
        await new Promise((resolve) => setTimeout(resolve, random_sleep(100)));
    }
}

function random_sleep(limit = 100) {
    return Math.ceil(Math.random() * limit);
}

async function wait(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

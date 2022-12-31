<template>
    <div class="container pb-4">
        <div class="card rounded border" @click="focusTerminal">
            <div class="card-body border-0">
                <div class="input-group mb-4" style="border-style: none;border-color: var(--background-color);">
                    <span class="input-group-text font-monospace"
                        style="background: var(--background-color);color: var(--text-general);border-style: none;border-top-style: none;border-right-style: none;border-bottom-style: none;border-left-style: none;">></span>
                    <input ref="terminal_input" class="terminal_input font-monospace d-flex flex-fill" type="text"
                        style="background: var(--background-color);color: var(--text-general);border-style: none;"
                        autocomplete="off" @keyup.enter="evaluate" aria-label="Terminal Input" />
                </div>
                <p ref="splash_text" class="mb-2" style="margin: 0px;"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from '/router';

const terminal_input = ref(null);
const splash_text = ref(null);

const type_index = ref(0);
const line = ref("");
const timeout_id = ref(0);

async function splashText() {
    let response = await get_lines();
    let lines = response.split(/\r?\n/);
    clearTimeout(timeout_id.value);
    type_index.value = 0;
    line.value = "";
    typeQuote(lines[Math.floor(Math.random() * lines.length)]);
}

function typeQuote(text) {
    if (type_index.value < text.length) {
        line.value += text.charAt(type_index.value);
        splash_text.value.innerHTML = line.value;
        type_index.value++;
        timeout_id.value = setTimeout(typeQuote, 50, text);
    }
}

function get_lines() {
    let response = fetch("https://raw.githubusercontent.com/kaangiray26/archive/main/lines", {
        method: "GET"
    }).then((data) => {
        return data.text();
    });
    return response;
}

async function keyPress(event) {
    if (event.ctrlKey && event.key == 'k') {
        event.preventDefault();
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        terminal_input.value.focus({ preventScroll: true });
        return;
    }
}

async function type(text) {
    clearTimeout(timeout_id.value);
    type_index.value = 0;
    line.value = "";
    typeQuote(text);
}

async function evaluate() {
    let command = terminal_input.value.value;
    if (command.length != 0) {
        terminal_input.value.value = null;

        if (command == 'home') {
            router.push('/');
        }

        if (command == 'projects') {
            router.push('/projects');
        }

        if (command == 'contact') {
            router.push('/contact');
        }

        if (command == 'github') {
            window.location.replace("https://github.com/kaangiray26");
        }

        if (command == 'arg') {
            window.location.replace("https://arg.buzl.uk");
        }

        if (command == 'baba') {
            window.location.replace("https://ahmetmelih.buzl.uk");
        }

        if (command == 'help') {
            type("Available commands: <br>$ home <br>$ projects <br>$ contact <br>$ help <br>$ nightmode <br>$ lightmode");
            return
        }

        if (command == 'whoami') {
            type("Kaan Giray Buzluk");
            return
        }

        if (command == 'uname') {
            type(navigator.platform);
            return
        }

        if (command == 'uname -a') {
            type(navigator.userAgent);
            return
        }

        if (command == 'date +%s') {
            type(Math.floor(Date.now() / 1000).toString());
            return
        }

        if (command == 'pwd') {
            type("/home/buzl.uk");
            return
        }

        if (command == 'ls') {
            type("README.txt");
            return
        }

        if (command.startsWith('cd')) {
            let parameter = command.substring('3');
            if (parameter.length != 0) {
                type("cd: no such file or directory: " + parameter);
            }
            return
        }

        if (command == 'cat README.txt') {
            type("Aren't you trying too hard?");
            return
        }

        if (command == 'clear') {
            type(" ");
            return
        }

        if (command == 'exit') {
            await type("The child process exited normally with status 0.");
            window.location.replace("https://google.com");
        }

        if (command == 'top') {
            window.scrollTo(0, 0);
            return
        }

        if (command == 'email') {
            type("kaangiray26@protonmail.com");
            return
        }

        if (command == 'quote') {
            splashText();
            return
        }
    }
}

async function focusTerminal() {
    terminal_input.value.focus({ preventScroll: true });
}

defineExpose({
    show: () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        terminal_input.value.focus({ preventScroll: true });
    },
})

onMounted(() => {
    let mode = localStorage.getItem('display');
    if (mode === 'lightmode') {
        set_lightmode();
    }

    document.addEventListener('keydown', keyPress);
    splashText();
});
</script>
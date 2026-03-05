// Simple Python syntax highlighter mimicking IDLE
function highlightCode(codeStr) {
    let escapedCode = codeStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    escapedCode = escapedCode.replace(/(&quot;.*?&quot;|&#39;.*?&#39;|".*?"|'.*?')/g, '<span class="string">$1</span>');
    escapedCode = escapedCode.replace(/(#.*)/g, '<span class="comment">$1</span>');
    escapedCode = escapedCode.replace(/\b(def|class)\s+([a-zA-Z_]\w*)/g, function (match, kw, name) {
        return '<span class="keyword">' + kw + '</span> <span class="definition">' + name + '</span>';
    });

    const keywords = [
        "and", "as", "assert", "break", "continue",
        "del", "elif", "else", "except", "False", "finally",
        "for", "from", "global", "if", "import", "in", "is",
        "lambda", "None", "nonlocal", "not", "or", "pass",
        "raise", "return", "True", "try", "while", "with", "yield"
    ];
    const keywordRegex = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'g');

    function applyRegexSafely(text, regex, replacement) {
        let parts = text.split(/(<[^>]+>)/g);
        for (let i = 0; i < parts.length; i++) {
            if (!parts[i].startsWith('<')) {
                parts[i] = parts[i].replace(regex, replacement);
            }
        }
        return parts.join('');
    }

    escapedCode = applyRegexSafely(escapedCode, keywordRegex, '<span class="keyword">$1</span>');

    const builtins = [
        "print", "input", "sum", "len", "max", "list", "int", "float", "type", "math",
        "range", "abs", "dict", "set", "str", "tuple", "open", "round", "min"
    ];
    const builtinRegex = new RegExp('\\b(' + builtins.join('|') + ')\\b', 'g');

    escapedCode = applyRegexSafely(escapedCode, builtinRegex, '<span class="builtin">$1</span>');

    return escapedCode;
}

// Retractable sections toggle logic
function toggleSection(sectionId, iconId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        icon.innerHTML = '&#9660;'; // Down arrow
    } else {
        section.classList.add('hidden');
        icon.innerHTML = '&#9658;'; // Right arrow
    }
}


// Load the selected program into the Cheat Panel
function loadProgram(id) {
    const program = programsData.find(p => p.id === id);
    const contentDiv = document.getElementById("cheat-content");

    if (!program) return;

    let htmlContent = '';

    // Title / Warning
    htmlContent += '<h3 style="margin-bottom: 20px;">Program ' + id + '</h3>';

    // Aim
    let formattedAim = program.aim.replace(/\n/g, '<br>');
    htmlContent += '<div class="section-header" onclick="toggleSection(\'aim-content\', \'aim-icon\')"><span id="aim-icon" class="toggle-icon">&#9660;</span>Aim:</div>';
    htmlContent += '<div id="aim-content" class="section-content normal-text">' + formattedAim + '</div>\n';

    // Algorithm
    let formattedAlgo = program.algorithm.replace(/\n/g, '<br>');
    htmlContent += '<div class="section-header" onclick="toggleSection(\'algo-content\', \'algo-icon\')"><span id="algo-icon" class="toggle-icon">&#9660;</span>Algorithm:</div>';
    htmlContent += '<div id="algo-content" class="section-content normal-text" style="line-height: 1.6;">' + formattedAlgo + '</div>\n';

    // Program Code
    htmlContent += '<div class="section-header" onclick="toggleSection(\'prog-content\', \'prog-icon\')"><span id="prog-icon" class="toggle-icon">&#9660;</span>Program:</div>';
    htmlContent += '<div id="prog-content" class="section-content normal-text" style="white-space: pre-wrap; font-family: \'Courier New\', Courier, monospace; margin-top: 10px;">' + highlightCode(program.code) + '</div>\n';

    // Output
    if (program.output) {
        htmlContent += '<div class="section-header" onclick="toggleSection(\'out-content\', \'out-icon\')"><span id="out-icon" class="toggle-icon">&#9660;</span>Output:</div>';
        htmlContent += '<div id="out-content" class="section-content output-text" style="white-space: pre-wrap; font-family: \'Courier New\', Courier, monospace; margin-top: 10px;">' + program.output.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div>';
    }

    // Direct Docx Link
    if (program.doc_url) {
        htmlContent += '<div class="normal-text" style="margin-top: 20px;"><a href="' + program.doc_url + '" target="_blank" style="color: blue; text-decoration: underline;">Open original .docx file</a></div>\n';
    }

    contentDiv.innerHTML = htmlContent;
}


// ---------------------------------------------------------
// IDLE WINDOW CONTROLS (Minimize/Maximize)
// ---------------------------------------------------------
const idleWindow = document.getElementById("idle-window");
const btnMinimize = document.querySelector(".control-btn.minimize");
const btnMaximize = document.querySelector(".control-btn.maximize");
const btnClose = document.querySelector(".control-btn.close");
const taskbarIcon = document.getElementById("taskbar-idle");

let isMaximized = false;

// Maximize logic
btnMaximize.addEventListener('click', function () {
    isMaximized = !isMaximized;
    if (isMaximized) {
        idleWindow.classList.add('maximized');
        btnMaximize.innerHTML = '&#x25A2;'; // Change icon to restore down
    } else {
        idleWindow.classList.remove('maximized');
        btnMaximize.innerHTML = '&#x25A1;'; // Change icon back to square
    }
});

// Minimize logic
btnMinimize.addEventListener('click', function () {
    idleWindow.classList.add('minimized');
    taskbarIcon.classList.remove('active');

    // If cheat panel was open, auto hide it for safety
    if (cheatPanel.style.display === 'flex') {
        cheatPanel.style.display = 'none';
        keySequence = [];
    }
});

// Close logic - same as minimize in this context or completely hide
btnClose.addEventListener('click', function () {
    idleWindow.classList.add('minimized');
    taskbarIcon.classList.remove('active');

    if (cheatPanel.style.display === 'flex') {
        cheatPanel.style.display = 'none';
        keySequence = [];
    }
});

// Restore from taskbar
taskbarIcon.addEventListener('click', function () {
    if (idleWindow.classList.contains('minimized')) {
        idleWindow.classList.remove('minimized');
        taskbarIcon.classList.add('active');
    } else {
        // Toggle minimize if already active (Windows standard behavior)
        idleWindow.classList.add('minimized');
        taskbarIcon.classList.remove('active');

        if (cheatPanel.style.display === 'flex') {
            cheatPanel.style.display = 'none';
            keySequence = [];
        }
    }
});


// ---------------------------------------------------------
// KEYBOARD SHORTCUTS ENGINE
// ---------------------------------------------------------
let keySequence = [];
const SECRET_SEQUENCE = ['ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
const cheatPanel = document.getElementById('cheat-panel');

document.addEventListener('keydown', function (event) {
    // Only process if the IDLE window is NOT minimized
    if (idleWindow.classList.contains('minimized')) return;

    const isPanelVisible = cheatPanel.style.display === 'flex';

    if (event.key === 'Backspace' && isPanelVisible) {
        cheatPanel.style.display = 'none';
        keySequence = [];
        return;
    }

    if (!isPanelVisible && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        keySequence.push(event.key);
        if (keySequence.length > SECRET_SEQUENCE.length) {
            keySequence.shift();
        }

        let isMatch = keySequence.length === SECRET_SEQUENCE.length &&
            keySequence.every((val, index) => val === SECRET_SEQUENCE[index]);

        if (isMatch) {
            cheatPanel.style.display = 'flex';
            keySequence = [];
        }
    } else {
        if (!isPanelVisible) {
            keySequence = [];
        }
    }

    if (isPanelVisible) {
        let programId = null;

        if (event.key >= '1' && event.key <= '9') {
            programId = parseInt(event.key);
        } else if (event.key === '0') {
            programId = 10;
        }

        if (programId !== null) {
            event.preventDefault();
            loadProgram(programId);
        }
    }
});

const editor = document.getElementById("editor");
editor.addEventListener('click', function () {
    editor.focus();
});


// ---------------------------------------------------------
// WINDOWS 10 SIMULATOR SCRIPTS
// ---------------------------------------------------------
// Initialize DragSelect
new DragSelect({
    selectables: document.querySelectorAll('.apps'),
    callback: e => console.log(e)
});

// Time and date functionality
function updateTime() {
    var rightNow = new Date();
    // format date as dd/mm/yyyy
    var res = ("0" + rightNow.getDate()).slice(-2) + "/" + ("0" + (rightNow.getMonth() + 1)).slice(-2) + "/" + rightNow.getFullYear();
    document.getElementById("date").innerHTML = res;

    var hours = rightNow.getHours();
    var mins = ('0' + rightNow.getMinutes()).slice(-2);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 hour should be 12

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins + " " + ampm;
}
setInterval(updateTime, 60000);
updateTime();

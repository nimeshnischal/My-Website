setTheme(localStorage.mode || '');

const themeDots = document.getElementsByClassName("theme-dot");
const contactForm = document.getElementById("contact-form");

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        const mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    let themeFile = '';
    switch (mode) {
        case 'light':
            themeFile = 'default.css';
            break;
        case 'blue':
            themeFile = 'blue.css';
            break;
        case 'green':
            themeFile = 'green.css';
            break;
        case 'purple':
            themeFile = 'purple.css';
            break;
        default: themeFile = 'default.css';
    }
    localStorage.mode = mode;
    document.getElementById('theme-style').href = themeFile;
}
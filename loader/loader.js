const Loader = {
    init() {
        this.hideTimeout = null;

        this.el = document.createElement('div');
        this.el.className = 'loader';
        document.body.appendChild(this.el);
    },
    show() {
        this.el.className = 'loader loader--visible';
    },
    hide() {
        this.el.classList.remove('loader--visible');
    }
};

document.addEventListener('DOMContentLoaded', () => Loader.init());
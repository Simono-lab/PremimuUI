/*=========================================================
    APP.JS
    Premium UI Demo
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    PremiumApp.init();

});

const PremiumApp = {

    init() {

        this.cache();

        this.events();

        this.showToast();

        this.startClock();

        this.animateCounters();

    },

    cache() {

        this.playButton =
            document.getElementById("playButton");

        this.themeToggle =
            document.getElementById("themeToggle");

        this.fab =
            document.getElementById("fabButton");

        this.modal =
            document.getElementById("premiumModal");

        this.closeModal =
            document.getElementById("closeModal");

        this.toast =
            document.getElementById("toast");

        this.progress =
            document.getElementById("progress");

    },

    events() {

        if (this.playButton) {

            this.playButton.addEventListener(

                "click",

                () => this.togglePlayer()

            );

        }

        if (this.themeToggle) {

            this.themeToggle.addEventListener(

                "click",

                () => this.toggleTheme()

            );

        }

        if (this.fab) {

            this.fab.addEventListener(

                "click",

                () => this.openModal()

            );

        }

        if (this.closeModal) {

            this.closeModal.addEventListener(

                "click",

                () => this.closePremium()

            );

        }

    },

    togglePlayer() {

        const playing =

            this.playButton.classList.toggle("playing");

        this.playButton.innerHTML =

            playing ? "❚❚" : "▶";

    },

    toggleTheme() {

        document.body.classList.toggle("theme-dark");

        document.body.classList.toggle("theme-light");

        this.themeToggle.classList.toggle("active");

    },

    openModal() {

        this.modal.classList.add("active");

    },

    closePremium() {

        this.modal.classList.remove("active");

    },

    showToast() {

        if (!this.toast) return;

        setTimeout(() => {

            this.toast.style.display = "block";

            this.toast.classList.add("fade-in");

        }, 1000);

        setTimeout(() => {

            this.toast.style.display = "none";

        }, 4500);

    },

    animateCounters() {

        document

            .querySelectorAll(".stat-value")

            .forEach((el) => {

                el.style.opacity = "0";

                setTimeout(() => {

                    el.style.opacity = "1";

                    el.classList.add("zoom-in");

                }, 500);

            });

    },

    startClock() {

        setInterval(() => {

            if (!this.progress) return;

            let width =

                parseFloat(this.progress.style.width) || 64;

            width += 0.2;

            if (width > 100) width = 0;

            this.progress.style.width = width + "%";

        }, 120);

    }

};

/*=========================================================
    ANIMATIONS.JS
    Premium Animations Engine
=========================================================*/

const Animations = {

    init() {

        this.revealOnScroll();
        this.parallaxBackground();
        this.animateCards();
        this.floatHero();
        this.pulseButtons();

    },

    /*=========================================
      REVEAL ON SCROLL
    =========================================*/

    revealOnScroll() {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        }, {

            threshold: 0.15

        });

        document
            .querySelectorAll(".panel,.card,.hero-card,.music-player,.profile-card,.notification")
            .forEach(el => {

                el.classList.add("reveal");

                observer.observe(el);

            });

    },

    /*=========================================
      PARALLAX
    =========================================*/

    parallaxBackground() {

        window.addEventListener("scroll", () => {

            const y = window.scrollY;

            document.body.style.backgroundPosition =
                `center ${y * 0.15}px`;

        });

    },

    /*=========================================
      FLOATING CARDS
    =========================================*/

    animateCards() {

        const cards = document.querySelectorAll(".card,.panel");

        cards.forEach((card, index) => {

            card.animate([
                {
                    transform: "translateY(0px)"
                },
                {
                    transform: "translateY(-6px)"
                },
                {
                    transform: "translateY(0px)"
                }

            ], {

                duration: 3500 + (index * 300),

                iterations: Infinity,

                easing: "ease-in-out"

            });

        });

    },

    /*=========================================
      HERO LIGHT
    =========================================*/

    floatHero() {

        const hero = document.querySelector(".hero-card");

        if (!hero) return;

        let angle = 0;

        setInterval(() => {

            angle += 0.5;

            hero.style.backgroundPosition =

                `${Math.sin(angle * Math.PI / 180) * 40}px center`;

        }, 30);

    },

    /*=========================================
      BUTTON PULSE
    =========================================*/

    pulseButtons() {

        document
            .querySelectorAll(".btn-premium,.fab")

            .forEach(button => {

                setInterval(() => {

                    button.animate([

                        {

                            transform: "scale(1)"

                        },

                        {

                            transform: "scale(1.05)"

                        },

                        {

                            transform: "scale(1)"

                        }

                    ], {

                        duration: 1800,

                        easing: "ease-in-out"

                    });

                }, 4000);

            });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Animations.init();

});

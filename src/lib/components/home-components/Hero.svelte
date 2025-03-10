<script>
    // export let subtitle = "With over 30 years of industry experience across seven states - <br />we're your trusted restoration partner, available 24/7.";
    export let backgroundImage = "/img/palm_auto.webp";
</script>

<section class="hero" style="background-image: url('{backgroundImage}'); background-position: 50%;">
    <div class="hero-overlay"></div>
    <div class="hero-content-wrapper">
        <div class="perspective text-center rounded-lg">
            <div class="slogan-container">
                <h2 class="outlined-text font-montserrat revive-text font-normal tracking-wide">
                REVIVE
                </h2>
                <h2 class="outlined-text font-montserrat restore-text font-medium tracking-wide">
                RESTORE
                </h2>
                <h2 class="outlined-text font-montserrat renew-text font-semibold tracking-wide">
                RENEW
                </h2>
            </div>
            <div class="hero-container rounded-lg">
                <p class="mt-8 rounded-lg leading-relaxed text-white/90 hero-subtitle">
                    From minor repairs to major disasters, we're your restoration partner every step of the way. Available 24/7.
                </p>
                <div class="hero-buttons">
                    <a href="/contact/quote" class="btn btn-accent">Get a Free Estimate</a>
                    <a href="/contact/emergency" class="btn btn-emergency">
                        <i class="fas fa-phone-alt"></i> Emergency Response
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* ===== Layout & Structure ===== */
    .hero {
        background-size: cover;
        background-position: center right;
        height: 100vh;
        min-height: 600px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--neutral-white);
        padding: 0;
        position: relative;
    }

    .hero-content-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 2;
    }

    .perspective {
        perspective: 1000px;
        max-width: 90%;
        margin: 0 auto;
    }

    .slogan-container {
        margin-bottom: 2rem;
    }

    .hero-container {
        padding: 2rem;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        background-color: rgba(0, 0, 0, 0.3);
        max-width: 89%;
        margin: 0 auto;
    }


    /* ===== Overlay & Background Styles ===== */
    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(81, 0, 255, 0.1); /* Adjust opacity here (0.25 = 25%) */
        z-index: 1;
    }

    /* ===== Typography Styles ===== */
    .outlined-text {
        color: transparent;
        background: linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%);
        background-clip: text;
        -webkit-background-clip: text;
        text-shadow:
        0px 1px 0px rgba(255, 255, 255, 0.3),
        0px 2px 0px rgba(255, 255, 255, 0.2),
        0px 3px 8px rgba(0, 0, 0, 0.18),
        0px 6px 13px rgba(0, 0, 0, 0.1);
        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
        letter-spacing: 0.02em;
    }

    .hero-subtitle {
        font-weight: 200;
        font-size: 1.3rem;
        margin-bottom: 2rem;
        line-height: 1.2;
        opacity: 0.95;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
    }

    .revive-text {
        font-size: clamp(2rem, 5vw, 3.2rem);
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: 0.025em;
    }

    .restore-text {
        font-size: clamp(2.2rem, 5.5vw, 3.5rem);
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: 0.025em;
    }

    .renew-text {
        font-size: clamp(3rem, 7vw, 5.5rem);
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: 0.025em;
        padding-bottom: 1.5rem;
    }

    /* ===== Button Styles ===== */
    .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }

    .btn-emergency {
        display: flex;
        align-items: center;
        background-color: var(--accent-alt);
        border: 2px solid var(--accent-alt);
        gap: 0.5rem;
    }

    /* ===== Media Queries ===== */
    @media (min-width: 1024px) {
        .hero {
            background-position: center 30%;
        }

        .perspective {
            width: 700px;
            position: absolute;
            left: 5%;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            max-width: none;
            text-align: center;
        }

        .hero-content-wrapper {
            position: static;
        }

        .slogan-container {
            margin-bottom: 1rem;
        }

        .hero-container {
            background-color: rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(1px);
            border-radius: 8px;
            padding: 1.5rem 2rem;
        }

        .revive-text {
            font-size: 3.2rem;
            margin-top: -1.9rem;
            margin-bottom: -1.9rem;
        }

        .restore-text {
            font-size: 3.5rem;
            margin-top: -0.4rem;
            margin-bottom: -0.4rem;
        }

        .renew-text {
            font-size: 5.5rem;
            margin-top: -2.9rem;
            margin-bottom: -2.9rem;
            padding-bottom: 3rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1023px) {
        .perspective {
            max-width: 80%;
        }

        .revive-text {
            margin-top: -1.4rem;
            margin-bottom: -1.4rem;

        }

        .restore-text {
            margin-top: -0.4rem;
            margin-bottom: -0.4rem;
        }

        .renew-text {
            margin-top: -2.4rem;
            margin-bottom: -2.3rem;
            padding-bottom: 0.5rem;
            font-size: 5rem
        }
    }

    @media (max-width: 768px) {
        .hero {
            min-height: 500px;
            height: auto;
            padding: 5rem 1rem;
        }

        .hero-buttons {
            flex-direction: column;
            width: 100%;
        }

        .slogan-container {
            margin-bottom: 1rem;
        }

        .hero-container {
            padding: 1.5rem;
        }

        .revive-text {
            margin-top: -1.1rem;
            margin-bottom: -1.1rem;
        }

        .restore-text {
            margin-top: -0.4rem;
            margin-bottom: -0.4rem;
        }

        .renew-text {
            margin-top: -2rem;
            margin-bottom: -2.4rem;
            padding-bottom: 0.5rem;
            font-size: 4rem
        }


    }

    @media (max-width: 480px) {
        .hero {
            min-height: 450px;
            padding: 3rem 0.5rem;
        }

        .hero-container {
            padding: 1rem;
            max-width: 95%;
        }

        .slogan-container {
            margin-bottom: 0.5rem;
        }

        .renew-text {
            padding-bottom: 1rem;
        }

        .hero-subtitle {
            margin-bottom: 1rem;
            max-width: 95%;
        }

        .hero-buttons {
            gap: 1rem;
        }

        .btn {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
        }
    }
</style>

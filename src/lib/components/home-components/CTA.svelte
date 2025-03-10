<script>
    export let title = "Need Emergency Restoration Services?";
    export let subtitle = "With over 30 years of expertise and IICRC-certified technicians serving seven states, our team is standing by 24/7 to respond to your restoration needs.";
    export let phoneNumber = "+18882455155";
    export let phoneDisplay = "(888) 245-5155";
</script>

<section id="cta" class="section emergency-bg">
    <div class="container">
        <div class="cta-content">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div class="cta-buttons">
                <a href="tel:{phoneNumber}" class="btn btn-emergency">
                    <i class="fas fa-phone-alt"></i> Call Now: {phoneDisplay}
                </a>
                <a href="/contact/quote" class="btn btn-outline-light">Request a Free Estimate</a>
            </div>
        </div>
    </div>
</section>

<style>
    .emergency-bg {
        background: linear-gradient(to right, rgba(244, 67, 54, 0.9), rgba(222, 38, 38, 0.9)),
            url('https://images.unsplash.com/photo-1587814672352-a155e9ae8a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        color: var(--neutral-white);
    }

    .cta-content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    .cta-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .cta-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-emergency {
        background-color: var(--neutral-white);
        color: var(--accent-alt);
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-emergency:hover {
        background-color: rgba(255, 255, 255, 0.9);
        transform: translateY(-3px);
    }

    .btn-outline-light {
        background-color: transparent;
        color: var(--neutral-white);
        border: 2px solid var(--neutral-white);
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .btn-outline-light:hover {
        background-color: var(--neutral-white);
        color: var(--primary);
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        .cta-content h2 {
            font-size: 2rem;
        }

        .cta-content p {
            font-size: 1.1rem;
        }

        .cta-buttons {
            flex-direction: column;
            width: 100%;
        }
    }
</style>

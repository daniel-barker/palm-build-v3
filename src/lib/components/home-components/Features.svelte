<script>
    // Define the features data
    export let features = [
        {
            icon: "fas fa-history",
            title: "30+ Years of Excellence",
            description: "Three decades of proven experience and industry leadership in the restoration field."
        },
        {
            icon: "fas fa-certificate",
            title: "IICRC-Certified Professionals",
            description: "Our technicians hold industry-leading certifications, ensuring expert handling of every project."
        },
        {
            icon: "fas fa-clock",
            title: "24/7 Emergency Response",
            description: "Professional support available around the clock when disaster strikes, ensuring rapid response when it matters most."
        },
        {
            icon: "fas fa-map-marked-alt",
            title: "Multi-State Service Areas",
            description: "Serving communities across Florida, North Carolina, South Carolina, Georgia, Texas, Tennessee, and New Jersey."
        },
        {
            icon: "fas fa-tools",
            title: "Comprehensive Solutions",
            description: "From initial assessment to complete reconstruction, we handle every aspect of your restoration project."
        },
        {
            icon: "fas fa-shield-alt",
            title: "Trusted Industry Leader",
            description: "A reputation built on reliability, quality workmanship, and exceptional customer satisfaction."
        }
    ];
</script>

<section id="why-us" class="section navy-bg">
    <div class="container">
        <div class="section-header light">
            <h2>Why Choose <span class="accent-text">Palm Build</span></h2>
            <p>
                Your trusted restoration partner with decades of experience and a commitment to excellence in every project.
            </p>
        </div>

        <div class="features-grid">
            {#each features as feature}
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="{feature.icon}"></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .navy-bg {
        background-color: var(--primary);
        color: var(--neutral-white);
    }

    .section-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .section-header h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .section-header p {
        font-size: 1.1rem;
        max-width: 700px;
        margin: 0 auto;
    }

    .light {
        color: var(--neutral-white);
    }

    .accent-text {
        color: var(--accent);
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .feature-item {
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        transition: transform 0.3s ease;
    }

    .feature-item:hover {
        transform: translateY(-5px);
    }

    .feature-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background-color: rgba(78, 125, 241, 0.1);
        border-radius: 50%;
        margin: 0 auto 1.5rem;
    }

    .feature-icon i {
        font-size: 2rem;
        color: var(--accent);
    }

    .feature-item h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .feature-item p {
        opacity: 0.9;
    }

    @media (max-width: 992px) {
        .features-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .features-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

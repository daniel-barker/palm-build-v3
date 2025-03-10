<script>
    // Define the services data
    export let services = [
        {
            icon: "fas fa-fire",
            title: "Fire & Smoke Restoration",
            description: "Expert fire and smoke damage restoration by IICRC-certified professionals, returning your property to pre-loss condition with care and precision.",
            link: "/services/fire-damage",
            image: "/img/services/fire.jpeg"
        },
        {
            icon: "fas fa-water",
            title: "Water Restoration",
            description: "Professional water damage mitigation with 30+ years industry experience, preventing secondary damage and restoring your property quickly and thoroughly.",
            link: "/services/water-damage",
            image: "/img/services/water-restoration.jpg"
        },
        {
            icon: "fas fa-broom",
            title: "Crawl-Space Muck-Outs",
            description: "Comprehensive crawl space cleaning and restoration, removing water, mold, and debris to protect your property's structural integrity.",
            link: "/services/crawlspace-cleanouts",
            image: "/img/services/crawl-space.jpg"
        },
        {
            icon: "fas fa-seedling",
            title: "Mold Remediation",
            description: "Complete mold identification, containment, and remediation by certified technicians, ensuring your property is safe and healthy.",
            link: "/services/mold-remediation",
            image: "/img/services/mold-remediation.jpg"
        },
        {
            icon: "fas fa-mask",
            title: "Asbestos Abatement & Testing",
            description: "Safe, compliant asbestos testing and removal by certified specialists, protecting your health and meeting all regulatory requirements.",
            link: "/services/asbestos-abatement",
            image: "/img/services/asbestos.jpg"
        },
        {
            icon: "fas fa-tools",
            title: "Complete Reconstruction",
            description: "Full-service property reconstruction and restoration, from minor repairs to complete rebuilds, bringing your property back to life.",
            link: "/services/reconstruction",
            image: "/img/services/reconstruction.jpg"
        }
    ];
</script>

<section id="services" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Our Restoration <span class="accent-text">Services</span></h2>
            <p>Comprehensive restoration solutions delivered with care and expertise across seven states.</p>
        </div>

        <div class="services-grid">
            {#each services as service}
                <div class="service-card">
                    <div class="service-image">
                        <img src="{service.image}" alt="{service.title}" />
                        <div class="service-overlay">
                            <div class="service-icon">
                                <i class="{service.icon}"></i>
                            </div>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href="{service.link}" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
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

    .accent-text {
        color: var(--accent);
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
    }

    .service-card {
        background-color: var(--neutral-white);
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, 0.05);
        position: relative;
    }

    .service-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12), 0 6px 10px rgba(0, 0, 0, 0.08);
        border-color: rgba(var(--accent-rgb), 0.2);
    }

    .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent), var(--accent-light));
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .service-card:hover::before {
        opacity: 1;
    }

    .service-image {
        position: relative;
        height: 200px;
        overflow: hidden;
    }

    .service-image::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
        pointer-events: none;
    }

    .service-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .service-card:hover .service-image img {
        transform: scale(1.05);
    }

    .service-overlay {
        position: absolute;
        bottom: -25px;
        right: 20px;
        transition: all 0.3s ease;
        z-index: 2;
    }

    .service-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: var(--accent);
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }

    .service-icon i {
        font-size: 1.4rem;
        color: white;
    }

    .service-content {
        padding: 1.8rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        background-color: var(--neutral-white);
    }

    .service-card h3 {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
        color: var(--text-dark);
        position: relative;
    }

    .service-card p {
        color: var(--text-light);
        margin-bottom: 1rem;
        flex-grow: 1;
        line-height: 1.6;
    }

    .service-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--accent);
        font-weight: 600;
        text-decoration: none;
        margin-top: auto;
        transition: all 0.3s ease;
        align-self: flex-start;
        padding: 0.5rem 0;
    }

    .service-link:hover {
        gap: 0.8rem;
        color: var(--accent-dark);
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .services-grid {
            grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        }

        .service-image {
            height: 180px;
        }
    }
</style>

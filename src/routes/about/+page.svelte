<script>
    import SectionHeader from '../../lib/components/home-components/SectionHeader.svelte';
    import EmergencyButton from '../../lib/components/home-components/EmergencyButton.svelte';

    // Company values
    const values = [
        {
            title: "Client Advocacy",
            description: "We represent your interests throughout the restoration and insurance process, ensuring you receive fair treatment and maximum coverage.",
            icon: '<i class="fas fa-handshake"></i>'
        },
        {
            title: "Technical Excellence",
            description: "Our certified technicians use industry-leading methods and equipment to deliver superior restoration results.",
            icon: '<i class="fas fa-certificate"></i>'
        },
        {
            title: "Rapid Response",
            description: "Our 24/7 emergency teams deploy quickly to minimize damage and begin the restoration process immediately.",
            icon: '<i class="fas fa-bolt"></i>'
        },
        {
            title: "Transparency",
            description: "We provide detailed documentation, clear pricing, and regular updates throughout your restoration project.",
            icon: '<i class="fas fa-search-dollar"></i>'
        }
    ];

    // Leadership team
    const leadership = [
        {
            name: "Michael Carr",
            title: "Co-Founder",
            bio: "With over 15 years of experience in insurance claims advocacy, Michael brings unparalleled knowledge of the claims process to every restoration project.",
            image: "/img/MichaelCarrBest.webp"
        },
        {
            name: "Wyatt Hoke",
            title: "Co-Founder",
            bio: "Wyatt's background in construction management and restoration technology ensures PALM BUILD delivers the highest quality restoration services in the industry.",
            image: "/img/wyatt-hoke-min.webp"
        }
    ];

    // Timeline milestones
    const milestones = [
        {
            year: "2010-2018",
            title: "Pre-PALM BUILD",
            description: "Founders work representing clients in complex insurance claims, identifying the need for a restoration company with insurance expertise."
        },
        {
            year: "2019",
            title: "PALM BUILD Founded",
            description: "Michael Carr and Wyatt Hoke launch PALM BUILD with a mission to transform the restoration industry."
        },
        {
            year: "2020",
            title: "Expansion to 3 States",
            description: "Rapid growth allows expansion of services across three states, with headquarters established in Florida."
        },
        {
            year: "2021",
            title: "IICRC Certification",
            description: "All technicians achieve IICRC certification, establishing PALM BUILD as a leader in technical excellence."
        },
        {
            year: "2022-Present",
            title: "7-State Coverage",
            description: "Continued expansion brings PALM BUILD's unique restoration approach to clients across seven states."
        }
    ];
</script>

<svelte:head>
    <title>About PALM BUILD | Restoration Excellence</title>
    <meta name="description" content="Learn about PALM BUILD's unique approach to restoration excellence, founded by insurance claims experts Michael Carr and Wyatt Hoke." />
</svelte:head>

<!-- Hero Section -->
<section class="about-hero">
    <div class="container">
        <h1>Our Commitment to Restoration Excellence</h1>
        <div class="accent-underline"></div>
    </div>
</section>

<!-- Our Story Section -->
<section class="section">
    <div class="container">
        <div class="about-content">
            <h2>From Insurance Advocacy to Hands-On Restoration</h2>
            <p>
                Founders Michael Carr and Wyatt Hoke spent decades representing clients in
                complex insurance claims before launching PALM BUILD. This unique
                perspective shapes our approach: we combine technical expertise with deep
                insurance process knowledge.
            </p>
            <p>
                Our journey began with a simple observation: restoration clients were often caught between
                insurance adjusters and restoration contractors, neither fully advocating for the client's best interest.
                We created PALM BUILD to bridge this gap, offering a restoration service that truly represents your needs.
            </p>
            <p>
                Today, PALM BUILD stands as an industry leader in comprehensive restoration services,
                known for our technical excellence, insurance expertise, and unwavering client advocacy.
            </p>
        </div>
    </div>
</section>

<!-- Why We're Different Section -->
<section class="section gray-bg">
    <div class="container">
        <SectionHeader
            title="Why We're Different"
            subtitle="Our unique approach combines restoration expertise with deep insurance knowledge, setting us apart from traditional restoration companies."
        />

        <div class="differentiators">
            <div class="differentiator-card">
                <div class="check-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h3>Dual expertise in restoration & insurance processes</h3>
                <p>We understand both the technical aspects of restoration and the complexities of insurance claims.</p>
            </div>

            <div class="differentiator-card">
                <div class="check-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h3>24/7 Emergency Response Teams</h3>
                <p>Our teams are strategically located across 7 states for rapid deployment when you need help most.</p>
            </div>

            <div class="differentiator-card">
                <div class="check-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h3>IICRC Certified Technicians</h3>
                <p>All our technicians maintain the highest industry certifications and ongoing training.</p>
            </div>

            <div class="differentiator-card">
                <div class="check-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h3>Multi-State Service Coverage</h3>
                <p>We provide consistent, high-quality service across all 7 states we serve.</p>
            </div>
        </div>
    </div>
</section>

<!-- By the Numbers Section -->
<section class="section">
    <div class="container">
        <SectionHeader
            title="By the Numbers"
            subtitle="Our proven track record of success demonstrates our commitment to excellence in restoration services."
        />

        <div class="stats-container">
            <div class="stat-card">
                <h2 class="stat-number">30+</h2>
                <p class="stat-label">Years Combined Experience</p>
            </div>

            <div class="stat-card">
                <h2 class="stat-number">7</h2>
                <p class="stat-label">States Served</p>
            </div>

            <div class="stat-card">
                <h2 class="stat-number">24/7</h2>
                <p class="stat-label">Emergency Response</p>
            </div>

            <div class="stat-card">
                <h2 class="stat-number">100%</h2>
                <p class="stat-label">Client Satisfaction</p>
            </div>
        </div>
    </div>
</section>

<!-- Company Values Section -->
<section class="section navy-bg">
    <div class="container">
        <SectionHeader
            title="Our Core Values"
            subtitle="These principles guide everything we do at PALM BUILD."
            light={true}
        />

        <div class="values-grid">
            {#each values as value}
                <div class="value-card">
                    <div class="value-icon">
                        {@html value.icon}
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Leadership Team Section -->
<section class="section">
    <div class="container">
        <SectionHeader
            title="Our Leadership"
            subtitle="Meet the founders who bring a unique perspective to the restoration industry."
        />

        <div class="leadership-grid">
            {#each leadership as leader}
                <div class="leader-card">
                    <div class="leader-image-container">
                        <img src={leader.image} alt={leader.name} class="leader-image" />
                    </div>
                    <div class="leader-info">
                        <h3>{leader.name}</h3>
                        <p class="leader-title">{leader.title}</p>
                        <p>{leader.bio}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Timeline Section -->
<section class="section gray-bg">
    <div class="container">
        <SectionHeader
            title="Our Journey"
            subtitle="The evolution of PALM BUILD from concept to industry leader."
        />

        <div class="timeline">
            {#each milestones as milestone, index}
                <div class="timeline-item {index % 2 === 0 ? 'left' : 'right'}">
                    <div class="timeline-content">
                        <div class="timeline-year">{milestone.year}</div>
                        <h3>{milestone.title}</h3>
                        <p>{milestone.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Insurance Coordination Section -->
<section class="section">
    <div class="container">
        <SectionHeader
            title="Seamless Insurance Coordination"
            subtitle="Our insurance expertise simplifies the claims process for our clients."
        />

        <div class="insurance-options-grid">
            <div class="insurance-option-card">
                <h3>Direct Billing</h3>
                <ul class="insurance-features">
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Claims documentation handled
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Adjuster communication managed
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Detailed scope of work provided
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Progress updates and reporting
                    </li>
                </ul>
            </div>

            <div class="insurance-option-card">
                <h3>Client-Pay Options</h3>
                <ul class="insurance-features">
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Transparent pricing
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Flexible payment plans
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        Detailed cost breakdowns
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i>
                        No hidden fees
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Certifications Section -->
<section class="section gray-bg">
    <div class="container">
        <SectionHeader
            title="Certifications"
            subtitle="We maintain the highest industry standards and certifications."
        />

        <div class="certifications-container">
            <div class="certification">
                <h3>IICRC Certified</h3>
                <p>Institute of Inspection Cleaning and Restoration Certification</p>
            </div>
            <div class="certification">
                <h3>OSHA Compliant</h3>
                <p>Occupational Safety and Health Administration</p>
            </div>
            <div class="certification">
                <h3>BBB Accredited</h3>
                <p>Better Business Bureau A+ Rating</p>
            </div>
        </div>
    </div>
</section>

<!-- Emergency CTA Section -->
<section class="section navy-bg emergency-cta">
    <div class="container">
        <div class="emergency-container">
            <div>
                <h2>24/7 Emergency Response</h2>
                <p>Our teams are strategically located across 7 states for rapid deployment.</p>
            </div>
            <EmergencyButton buttonText="Call Now: (888) 245-5155" icon={true} className="large-btn" />
        </div>
    </div>
</section>

<style>
    /* Hero Section */
    .about-hero {
        background-image: linear-gradient(rgba(10, 16, 31, 0.7), rgba(10, 16, 31, 0.9));
        background-size: cover;
        background-position: center;
        color: var(--neutral-white);
        padding: 6rem 0;
        text-align: center;
    }

    .about-hero h1 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }

    .accent-underline {
        height: 4px;
        width: 10rem;
        background-color: var(--accent);
        margin: 0 auto;
    }

    /* About Content */
    .about-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .about-content h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    /* Differentiators */
    .differentiators {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .differentiator-card {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .check-icon {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(69, 111, 215, 0.1);
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    .check-icon i {
        color: var(--accent);
        font-size: 1.2rem;
    }

    /* Stats */
    .stats-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        text-align: center;
    }

    .stat-card {
        background-color: #f8f9fc;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .stat-number {
        font-size: 3rem;
        color: var(--accent);
        margin-bottom: 0.5rem;
    }

    .stat-label {
        font-size: 1.1rem;
        color: var(--primary);
    }

    /* Values */
    .values-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    .value-card {
        background-color: rgba(255, 255, 255, 0.05);
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
    }

    .value-icon {
        font-size: 2.5rem;
        color: var(--accent);
        margin-bottom: 1rem;
    }

    .value-card h3 {
        color: var(--neutral-white);
    }

    .value-card p {
        color: var(--neutral-gray);
    }

    /* Leadership */
    .leadership-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    .leader-card {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1.5rem;
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .leader-image-container {
        align-self: center;
    }

    .leader-image {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .leader-info {
        text-align: left;
    }

    .leader-title {
        color: var(--accent);
        font-weight: 600;
        margin-bottom: 1rem;
    }

    /* Timeline */
    .timeline {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
    }

    .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: var(--accent);
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    .timeline-item {
        padding: 10px 40px;
        position: relative;
        width: 50%;
        box-sizing: border-box;
    }

    .timeline-item::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: white;
        border: 4px solid var(--accent);
        border-radius: 50%;
        top: 15px;
        z-index: 1;
    }

    .left {
        left: 0;
    }

    .right {
        left: 50%;
    }

    .left::after {
        right: -17px;
    }

    .right::after {
        left: -17px;
    }

    .timeline-content {
        padding: 20px 30px;
        background-color: white;
        position: relative;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .timeline-year {
        display: inline-block;
        font-weight: 700;
        color: var(--accent);
        margin-bottom: 0.5rem;
    }

    /* Insurance Options */
    .insurance-options-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    .insurance-option-card {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .insurance-features {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0 0 0;
    }

    .insurance-features li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }

    .insurance-features i {
        color: var(--accent);
        margin-right: 1rem;
    }

    /* Certifications */
    .certifications-container {
        display: flex;
        justify-content: center;
        gap: 4rem;
        margin-top: 2rem;
    }

    .certification {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        text-align: center;
        flex: 1;
        max-width: 300px;
    }

    .certification h3 {
        color: var(--accent);
        margin-bottom: 0.5rem;
    }

    /* Emergency CTA */
    .emergency-cta {
        padding: 3rem 0;
    }

    .emergency-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .emergency-container h2 {
        color: var(--neutral-white);
        margin-bottom: 0.5rem;
    }

    .emergency-container p {
        color: var(--neutral-gray);
        font-size: 1.1rem;
    }

    .large-btn {
        padding: 1rem 2rem;
        font-size: 1.2rem;
    }

    /* Responsive Styles */
    @media (max-width: 992px) {
        .about-content {
            max-width: 100%;
        }

        .leadership-grid {
            grid-template-columns: 1fr;
        }

        .leader-card {
            grid-template-columns: 1fr;
        }

        .leader-image-container {
            max-width: 250px;
            margin: 0 auto 1.5rem;
        }

        .leader-info {
            text-align: center;
        }

        .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }

        .timeline::after {
            left: 31px;
        }

        .right {
            left: 0%;
        }

        .left::after, .right::after {
            left: 15px;
        }

        .emergency-container {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        .about-hero h1 {
            font-size: 2.5rem;
        }

        .values-grid {
            grid-template-columns: 1fr;
        }

        .stats-container {
            grid-template-columns: 1fr;
        }

        .certifications-container {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .certification {
            max-width: 100%;
        }
    }
</style>

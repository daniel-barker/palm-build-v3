<script>
  export let service;
  export let processSteps;
  export let advantages;
  export let ctaText = "Contact Us Now";
  export let ctaDescription = "Need our services? Contact us for immediate assistance.";
</script>

<div class="service-template">
  <!-- Hero Banner with Overlay -->
  <div class="hero-banner">
    <img
      src={service.image}
      alt={service.title}
      class="hero-image"
    />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="container">
        <h1 class="hero-title">{service.title}</h1>
        <div class="accent-line"></div>
        <p class="hero-description">
            {service.description}
          </p>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container service-content">
    <div class="service-grid">
      <!-- Left Column -->
      <div class="service-column">
        <div class="service-intro">
          <h2 class="section-title">Industry-Leading {service.title} Services</h2>
          <div class="service-description">
            <slot name="service-description">
              We provide professional {service.title.toLowerCase()} services with certified technicians and industry-leading equipment.
            </slot>
          </div>
        </div>

        <div class="process-card">
          <h3 class="card-title">Our Proven Process</h3>
          <ul class="process-steps">
            {#each processSteps as step, index}
              <li class="process-step">
                <div class="step-number">{index + 1}</div>
                <span class="step-text">{step}</span>
              </li>
            {/each}
          </ul>
        </div>

        <slot name="additional-content-left" />
      </div>

      <!-- Right Column -->
      <div class="service-column">
        <div class="advantages-card">
          <h3 class="card-title">The PALM BUILD Advantage</h3>
          <ul class="advantages-list">
            {#each advantages as advantage}
              <li class="advantage-item">
                <div class="check-icon">
                  <svg class="check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="advantage-text">{advantage}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="cta-card">
          <h3 class="cta-title">{ctaText}</h3>
          <p class="cta-description">{ctaDescription}</p>
          <div class="cta-buttons">
            <a href="/contact/emergency" class="btn-primary">Emergency Assistance</a>
            <a href="/contact/quote" class="btn-secondary">Get a Free Quote</a>
          </div>
        </div>

        <slot name="additional-content-right" />
      </div>
    </div>
  </div>
</div>

<style>
  /* Hero Section */
  .hero-banner {
    position: relative;
    height: 400px;
    margin-bottom: 4rem;
    overflow: hidden;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(10, 16, 31, 0.9), rgba(10, 16, 31, 0.7));
  }

  .hero-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
  }

  .accent-line {
    width: 8rem;
    height: 0.5rem;
    background-color: var(--accent, #456fd7);
    border-radius: 9999px;
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: 1.5rem;
    color: #f5f7fa;
    font-weight: 300;
    max-width: 36rem;
  }

  /* Main Content */
  .service-content {
    padding-bottom: 6rem;
  }

  .service-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0a101f;
    margin-bottom: 2rem;
  }

  .service-description {
    font-size: 1.125rem;
    color: #1a202c;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  /* Cards */
  .process-card, .advantages-card, .cta-card {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin-bottom: 2rem;
  }

  .process-card:hover, .advantages-card:hover, .cta-card:hover {
    transform: scale(1.02);
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0a101f;
    margin-bottom: 1.5rem;
  }

  /* Process Steps */
  .process-steps {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .process-step {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .step-number {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent, #456fd7);
    color: white;
    border-radius: 9999px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .step-text {
    font-size: 1.125rem;
    color: #1a202c;
    padding-top: 0.25rem;
  }

  /* Advantages */
  .advantages-card {
    background: linear-gradient(to bottom right, #EEF2FF, #E0F2FE);
  }

  .advantages-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .advantage-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .check-icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(69, 111, 215, 0.1);
    border-radius: 9999px;
    flex-shrink: 0;
  }

  .check {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--accent, #456fd7);
  }

  .advantage-text {
    font-size: 1.125rem;
    color: #1a202c;
    padding-top: 0.25rem;
  }

  /* CTA */
  .cta-card {
    background-color: #0a101f;
    color: white;
  }

  .cta-title {
    color: white;
    margin-bottom: 1rem;
  }

  .cta-description {
    color: #cbd5e0;
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }

  .cta-buttons {
    display: grid;
    gap: 1rem;
  }

  .btn-primary {
    display: block;
    width: 100%;
    text-align: center;
    background-color: var(--accent, #456fd7);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #3c5cb9;
  }

  .btn-secondary {
    display: block;
    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  /* Responsive */
  @media (min-width: 1024px) {
    .service-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Container utility */
  .container {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

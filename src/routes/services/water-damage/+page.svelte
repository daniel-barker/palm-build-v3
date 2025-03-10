<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Water Restoration');

  const processSteps = [
    'Emergency Response & Assessment',
    'Water Extraction & Removal',
    'Structural Drying & Dehumidification',
    'Sanitization & Odor Removal',
    'Restoration & Reconstruction'
  ];

  const processDetails = [
    'Our teams arrive within 60 minutes of your call to assess the damage and create a detailed restoration plan.',
    'Using commercial-grade extractors, we remove standing water to prevent further damage to your property.',
    'Industrial air movers and dehumidifiers strategically placed to remove moisture from structural materials.',
    'EPA-registered antimicrobials eliminate bacteria while deodorizers remove any lingering odors.',
    'From basic repairs to complete reconstruction, we restore your property to pre-loss condition.'
  ];

  const advantages = [
    '24/7 Emergency Response',
    'IICRC Certified Technicians',
    'Advanced Equipment & Techniques',
    'Direct Insurance Billing'
  ];

  const waterCategories = [
    {
      title: 'Category 1 (Clean Water)',
      description: 'Water from clean sources like broken water supply lines or faucets. While initially clean, it can quickly degrade if left untreated.'
    },
    {
      title: 'Category 2 (Gray Water)',
      description: 'Water containing significant contamination. Sources include dishwasher or washing machine overflow, toilet overflow with urine but no feces.'
    },
    {
      title: 'Category 3 (Black Water)',
      description: 'Highly unsanitary water containing pathogens. Sources include sewage backup, flooding from rivers/streams, or standing water supporting microbial growth.'
    }
  ];

  const commonCauses = [
    'Plumbing failures (burst pipes, leaking fixtures)',
    'Appliance malfunctions (water heaters, dishwashers, washing machines)',
    'Storm damage and flooding',
    'Roof leaks or ice dams',
    'Foundation cracks allowing water seepage',
    'HVAC system issues (condensation or drain problems)'
  ];

  const faqItems = [
    {
      question: 'How quickly should water damage be addressed?',
      answer: 'Water damage should be addressed immediately. Within 24-48 hours, mold can begin to grow, and structural materials can become permanently damaged. Our emergency response teams are available 24/7 to minimize damage.'
    },
    {
      question: 'Will my insurance cover water damage?',
      answer: 'Most homeowner policies cover sudden and accidental water damage, but not damage from long-term leaks or flooding. We work directly with insurance companies and can help you navigate the claims process.'
    },
    {
      question: 'How long does the water damage restoration process take?',
      answer: 'The timeline varies based on the extent of damage and the affected materials. Minor water damage may be resolved in 3-5 days, while major damage can take 1-2 weeks or longer for complete drying and restoration.'
    },
    {
      question: 'Do I need to move out during the restoration process?',
      answer: 'This depends on the extent of damage. For minor incidents, you may be able to stay in your home. For extensive damage or Category 2/3 water damage, temporary relocation may be necessary for health and safety reasons.'
    }
  ];

  const estimatedTimelines = {
    assessment: '1-2 hours',
    extraction: '2-8 hours (depending on volume)',
    drying: '3-5 days (varies based on materials and extent)',
    sanitizing: '1-2 days',
    restoration: '1 day to several weeks (depending on extent of repairs needed)'
  };
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Need Emergency Service?"
  ctaDescription="Our teams are ready to respond 24/7 to minimize water damage to your property."
>
  <p slot="service-description">
    When water damage strikes, quick response is crucial. Our certified technicians are available 24/7 to minimize damage and begin the restoration process immediately. We use advanced equipment and proven techniques to restore your property to its pre-loss condition.
  </p>

  <div slot="additional-content-left">
    <div class="info-card">
      <h3 class="card-title">Understanding Water Damage Categories</h3>
      <div class="categories-grid">
        {#each waterCategories as category}
          <div class="category-item">
            <h4 class="category-title">{category.title}</h4>
            <p class="category-description">{category.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="info-card">
      <h3 class="card-title">Common Causes of Water Damage</h3>
      <ul class="causes-list">
        {#each commonCauses as cause}
          <li class="cause-item">{cause}</li>
        {/each}
      </ul>
    </div>

    <div class="info-card">
      <h3 class="card-title">Our Detailed Process</h3>
      <div class="detailed-process">
        {#each processSteps as step, index}
          <div class="detailed-step">
            <div class="step-header">
              <div class="step-number">{index + 1}</div>
              <h4 class="step-title">{step}</h4>
            </div>
            <p class="step-detail">{processDetails[index]}</p>
            {#if index === 0}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.assessment}</p>
            {:else if index === 1}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.extraction}</p>
            {:else if index === 2}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.drying}</p>
            {:else if index === 3}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.sanitizing}</p>
            {:else if index === 4}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.restoration}</p>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div slot="additional-content-right">
    <div class="info-card">
      <h3 class="card-title">Frequently Asked Questions</h3>
      <div class="faq-accordion">
        {#each faqItems as item}
          <div class="faq-item">
            <h4 class="faq-question">{item.question}</h4>
            <p class="faq-answer">{item.answer}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="testimonial-card">
      <h3 class="card-title">Client Testimonial</h3>
      <div class="testimonial">
        <p class="testimonial-text">
          "PALM BUILD responded within 30 minutes of our call when we discovered a burst pipe in our basement. Their team was professional, thorough, and kept us informed throughout the entire process. Our home was back to normal in less than a week!"
        </p>
        <p class="testimonial-author">— James & Sarah Rodriguez, Homeowners</p>
      </div>
    </div>
  </div>
</ServiceTemplate>

<style>
  .info-card {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .categories-grid {
    display: grid;
    gap: 1.5rem;
  }

  .category-item {
    border-left: 4px solid var(--accent, #456fd7);
    padding-left: 1rem;
  }

  .category-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #0a101f;
  }

  .category-description {
    font-size: 1rem;
    color: #4a5568;
  }

  .causes-list {
    padding-left: 1.5rem;
  }

  .cause-item {
    margin-bottom: 0.75rem;
    color: #4a5568;
  }

  .detailed-process {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .detailed-step {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #f8fafc;
  }

  .step-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    gap: 1rem;
  }

  .step-number {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent, #456fd7);
    color: white;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 1.25rem;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .step-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: #0a101f;
  }

  .step-detail {
    color: #4a5568;
    margin-bottom: 0.75rem;
    padding-left: 3.5rem;
  }

  .timeline {
    font-size: 0.875rem;
    color: #718096;
    padding-left: 3.5rem;
  }

  .faq-accordion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .faq-item {
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 1rem;
  }

  .faq-question {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #0a101f;
  }

  .faq-answer {
    color: #4a5568;
  }

  .testimonial-card {
    background: linear-gradient(to bottom right, #f8fafc, #edf2f7);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .testimonial-text {
    font-style: italic;
    color: #4a5568;
    margin-bottom: 1rem;
    position: relative;
    padding: 0 1rem;
  }

  .testimonial-text::before,
  .testimonial-text::after {
    content: '"';
    font-size: 1.5rem;
    color: var(--accent, #456fd7);
    position: absolute;
  }

  .testimonial-text::before {
    left: 0;
    top: -0.5rem;
  }

  .testimonial-text::after {
    right: 0;
    bottom: -0.5rem;
  }

  .testimonial-author {
    font-weight: 600;
    text-align: right;
    color: #0a101f;
  }
</style>

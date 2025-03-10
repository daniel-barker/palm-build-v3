<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Crawl Space Cleanouts');

  const processSteps = [
    'Initial Inspection & Assessment',
    'Moisture Remediation',
    'Debris & Contamination Removal',
    'Structural Repairs',
    'Encapsulation & Prevention'
  ];

  const processDetails = [
    'Our technicians perform a comprehensive inspection to assess moisture levels, structural issues, contamination, and pest activity.',
    'We address the source of moisture problems and use commercial dehumidifiers and drying equipment to reduce humidity levels.',
    'All contaminated insulation, debris, animal waste, and other hazardous materials are safely removed and properly disposed of.',
    'We repair damaged structural elements, address wood rot, and reinforce compromised floor joists and support beams.',
    'The crawl space is encapsulated with vapor barriers, proper insulation is installed, and preventative measures are implemented.'
  ];

  const advantages = [
    'IICRC S500 Standard Compliant',
    'Complete Contamination Removal',
    'Structural Reinforcement',
    'Long-term Moisture Control'
  ];

  const crawlspaceIssues = [
    {
      title: 'Moisture & Water Intrusion',
      description: 'Standing water, high humidity, and condensation that can damage structural elements and create ideal conditions for mold growth.'
    },
    {
      title: 'Mold & Mildew',
      description: 'Fungal growth that thrives in dark, damp conditions and can affect indoor air quality and cause structural wood rot.'
    },
    {
      title: 'Pest Infestations',
      description: 'Rodents, insects, and other pests that seek shelter in crawl spaces, leaving behind waste and creating entry points into the home.'
    },
    {
      title: 'Structural Damage',
      description: 'Compromised floor joists, support beams, and foundation elements due to moisture damage, wood rot, or termite activity.'
    }
  ];

  const healthConcerns = [
    'Poor indoor air quality (up to 50% of indoor air comes from the crawl space)',
    'Mold spores and allergens entering living spaces',
    'Respiratory issues from exposure to contaminants',
    'Unpleasant odors throughout the home',
    'Pest-borne diseases and allergens',
    'Increased energy costs due to poor insulation'
  ];

  const faqItems = [
    {
      question: 'How do I know if my crawl space needs professional cleaning?',
      answer: 'Signs that indicate your crawl space needs attention include musty odors throughout your home, high humidity levels, visible mold growth, sagging floors, increased energy bills, or pest activity. Our free inspection can identify these and other hidden issues.'
    },
    {
      question: 'How often should crawl spaces be inspected and cleaned?',
      answer: 'We recommend annual inspections to catch potential problems early. After professional cleaning and encapsulation, maintenance inspections every 2-3 years are typically sufficient unless you notice warning signs.'
    },
    {
      question: 'What is crawl space encapsulation?',
      answer: 'Encapsulation involves sealing the crawl space from outside elements using heavy-duty vapor barriers on floors and walls, sealing vents, installing proper insulation, and often adding a dehumidification system. This creates a clean, dry environment that improves energy efficiency and indoor air quality.'
    },
    {
      question: 'How long does crawl space cleanup take?',
      answer: 'The timeline varies based on the size of the crawl space and the extent of contamination or damage. Basic cleanouts typically take 1-2 days, while more extensive projects involving structural repairs and full encapsulation may take 3-5 days.'
    }
  ];

  const estimatedTimelines = {
    inspection: '1-2 hours',
    moisture: '1-2 days',
    removal: '1-2 days',
    repairs: '1-3 days (if needed)',
    encapsulation: '1-2 days'
  };
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Schedule a Free Inspection"
  ctaDescription="Concerned about what's lurking in your crawl space? Contact us for a thorough inspection."
>
  <p slot="service-description">
    Crawl spaces are often neglected areas that can harbor moisture, mold, and structural issues. Our comprehensive cleanout services address these problems at their source, improving your home's air quality, structural integrity, and energy efficiency.
  </p>

  <div slot="additional-content-left">
    <div class="info-card">
      <h3 class="card-title">Common Crawl Space Issues</h3>
      <div class="categories-grid">
        {#each crawlspaceIssues as issue}
          <div class="category-item">
            <h4 class="category-title">{issue.title}</h4>
            <p class="category-description">{issue.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="info-card">
      <h3 class="card-title">Health & Home Concerns</h3>
      <ul class="causes-list">
        {#each healthConcerns as concern}
          <li class="cause-item">{concern}</li>
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
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.inspection}</p>
            {:else if index === 1}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.moisture}</p>
            {:else if index === 2}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.removal}</p>
            {:else if index === 3}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.repairs}</p>
            {:else if index === 4}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.encapsulation}</p>
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
          "After years of musty odors and high energy bills, we finally had PALM BUILD inspect our crawl space. They discovered standing water, mold, and damaged insulation. Their team transformed our neglected crawl space into a clean, dry area. The difference in our home's air quality and comfort is remarkable, and our energy bills have decreased significantly."
        </p>
        <p class="testimonial-author">— Thomas & Karen Reynolds, Homeowners</p>
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

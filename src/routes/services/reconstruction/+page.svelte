<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Reconstruction');

  const processSteps = [
    'Comprehensive Damage Assessment',
    'Detailed Project Planning',
    'Demolition & Preparation',
    'Structural Reconstruction',
    'Finishing & Restoration'
  ];

  const processDetails = [
    'Our experts thoroughly assess the damage to create a complete scope of work, identifying all areas requiring reconstruction.',
    'We develop detailed plans and specifications, select appropriate materials, obtain necessary permits, and coordinate with insurance.',
    'Damaged materials are safely removed, the area is prepared for reconstruction, and the underlying structure is inspected.',
    'Our skilled craftsmen rebuild damaged structural elements including framing, roofing, flooring, and wall systems.',
    'Interior and exterior finishes are completed, including drywall, painting, flooring, fixtures, and final touches to match pre-loss condition.'
  ];

  const advantages = [
    'Licensed General Contractors',
    'Seamless Restoration Process',
    'Material & Craftsmanship Warranty',
    'Insurance Claim Coordination'
  ];

  const projectTypes = [
    {
      title: 'Fire Damage Rebuilds',
      description: 'Complete reconstruction of fire-damaged structures, from structural framing to finishing details, including smoke odor elimination and modernization opportunities.'
    },
    {
      title: 'Water Damage Restoration',
      description: 'Rebuilding after severe water damage, including flood-damaged floors, walls, electrical systems, and finishes with moisture-resistant materials.'
    },
    {
      title: 'Storm & Disaster Recovery',
      description: 'Comprehensive rebuilding services after storm, wind, or natural disaster damage, including roof reconstruction, structural repairs, and exterior restoration.'
    },
    {
      title: 'Remodeling & Improvements',
      description: 'Taking advantage of necessary repairs to upgrade and modernize your property with improved layouts, energy efficiency, and aesthetic enhancements.'
    }
  ];

  const reconstructionServices = [
    'Structural framing and carpentry',
    'Roof replacement and repair',
    'Drywall installation and finishing',
    'Electrical, plumbing, and HVAC systems',
    'Flooring installation (hardwood, tile, carpet, etc.)',
    'Cabinet and countertop installation',
    'Interior and exterior painting',
    'Window and door replacement',
    'Siding and exterior finishing'
  ];

  const faqItems = [
    {
      question: 'Can you work directly with my insurance company?',
      answer: 'Yes, we have extensive experience working with insurance companies and adjusters. We document all damage thoroughly, provide detailed estimates, help interpret policy coverage, and work directly with your insurer to ensure you receive proper compensation for covered damages.'
    },
    {
      question: 'How long will my reconstruction project take?',
      answer: 'The timeline varies based on the scope of the project. Minor reconstruction might take 1-2 weeks, while extensive rebuilds following major damage can take several months. We provide detailed timelines during the planning phase and keep you informed of progress throughout the project.'
    },
    {
      question: 'Can you match existing finishes and materials?',
      answer: 'We specialize in matching existing finishes, textures, and materials to ensure seamless integration between original and reconstructed areas. Our skilled craftsmen can match everything from custom trim and cabinetry to specialized paint finishes and unique flooring.'
    },
    {
      question: 'Do you provide warranties on reconstruction work?',
      answer: 'Yes, we stand behind our work with a comprehensive warranty. All workmanship is covered for a minimum of one year, and many installed materials carry manufacturer warranties of 5-30 years. Complete warranty information is provided in writing before project commencement.'
    }
  ];

  const estimatedTimelines = {
    assessment: '1-3 days',
    planning: '3-7 days',
    demolition: '2-5 days',
    structural: '1-4 weeks (depending on scope)',
    finishing: '1-3 weeks'
  };
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Schedule a Consultation"
  ctaDescription="Need rebuilding services? Contact us for expert reconstruction and restoration."
>
  <p slot="service-description">
    After disaster strikes, our skilled reconstruction team steps in to rebuild and restore your property to its pre-loss condition or better. From structural repairs to finishing touches, we provide comprehensive rebuilding services with quality craftsmanship and attention to detail.
  </p>

  <div slot="additional-content-left">
    <div class="info-card">
      <h3 class="card-title">Types of Reconstruction Projects</h3>
      <div class="categories-grid">
        {#each projectTypes as type}
          <div class="category-item">
            <h4 class="category-title">{type.title}</h4>
            <p class="category-description">{type.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="info-card">
      <h3 class="card-title">Our Reconstruction Services</h3>
      <ul class="causes-list">
        {#each reconstructionServices as service}
          <li class="cause-item">{service}</li>
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
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.planning}</p>
            {:else if index === 2}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.demolition}</p>
            {:else if index === 3}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.structural}</p>
            {:else if index === 4}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.finishing}</p>
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
          "After a devastating house fire, PALM BUILD handled both the initial cleanup and complete reconstruction of our home. They guided us through every step of the process, from planning and permitting to the final walk-through. Their attention to detail was impressive, and they even helped us incorporate some updates we'd always wanted. Our rebuilt home is now more beautiful and functional than before the fire."
        </p>
        <p class="testimonial-author">— Mark & Julia Martinez, Homeowners</p>
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

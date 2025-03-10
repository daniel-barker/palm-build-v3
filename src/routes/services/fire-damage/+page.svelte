<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Fire & Smoke Cleanup');

  const processSteps = [
    'Emergency Response & Assessment',
    'Smoke & Soot Removal',
    'Water Damage Mitigation',
    'Odor Neutralization',
    'Structural Cleaning & Restoration'
  ];

  const processDetails = [
    'Our team responds immediately to secure your property, assess the damage, and develop a comprehensive restoration plan.',
    'Specialized equipment and techniques are used to remove smoke residue and soot from all surfaces before they cause permanent damage.',
    'We address water damage from firefighting efforts using commercial extractors and drying equipment to prevent secondary damage.',
    'Advanced deodorization processes including thermal fogging and ozone treatment eliminate smoke odors at the molecular level.',
    'Our reconstruction experts repair and restore damaged structural elements, including walls, floors, and roofing.'
  ];

  const advantages = [
    'IICRC Fire & Smoke Certified',
    'Advanced Deodorization Methods',
    'Content Cleaning & Restoration',
    'Insurance Claim Assistance'
  ];

  const damageTypes = [
    {
      title: 'Protein Fire Residue',
      description: 'Caused by kitchen fires involving food. Nearly invisible but produces strong odors. Requires special cleaning techniques to remove.'
    },
    {
      title: 'Wet Smoke Residue',
      description: 'Results from slow-burning, low-heat fires. Creates sticky, smearing residues with pungent odors that can deeply penetrate materials.'
    },
    {
      title: 'Dry Smoke Residue',
      description: 'Results from fast-burning, high-temperature fires. Produces dry, powdery residue that is easier to clean but can settle into cracks.'
    },
    {
      title: 'Fuel Oil Soot',
      description: 'Occurs when furnaces malfunction or puff back. Creates thick, black residue that requires specialized cleaning methods.'
    }
  ];

  const commonEffects = [
    'Structural damage to building materials',
    'Smoke damage to walls, ceilings, and contents',
    'Water damage from firefighting efforts',
    'Corrosion of metal surfaces from acidic smoke residue',
    'Lingering smoke odors throughout the property',
    'Damaged electrical systems and potential hazards'
  ];

  const faqItems = [
    {
      question: 'Is it safe to remain in a home after a fire?',
      answer: 'Even after a small fire, it\'s often unsafe to remain in the home due to structural damage, electrical hazards, air quality concerns, and potential slip hazards from water used to extinguish the fire. Our professionals can determine when it\'s safe to return.'
    },
    {
      question: 'Can items with smoke damage be saved?',
      answer: 'Many items can be restored after smoke damage. The success depends on factors like the type of material, extent of damage, and how quickly restoration begins. We use specialized content cleaning techniques for clothing, furniture, electronics, and more.'
    },
    {
      question: 'How long does fire damage restoration take?',
      answer: 'The timeline varies based on the extent of damage. Minor smoke damage might be addressed in a few days, while severe structural damage could take weeks or months to fully restore. We work efficiently to restore your property as quickly as possible.'
    },
    {
      question: 'Will my insurance cover fire damage restoration?',
      answer: 'Most homeowner policies cover fire damage restoration, including smoke damage. Our team works directly with insurance companies, documenting damage, providing detailed estimates, and helping you navigate the claims process for maximum coverage.'
    }
  ];

  const estimatedTimelines = {
    assessment: '2-4 hours',
    sootRemoval: '1-3 days',
    waterMitigation: '2-5 days',
    odorTreatment: '1-2 days',
    restoration: '1-6 weeks (depending on severity)'
  };
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Emergency Fire Damage Help"
  ctaDescription="Fire damage requires immediate attention. Contact us for rapid response and professional restoration."
>
  <p slot="service-description">
    After a fire, quick action is essential to minimize damage and begin the recovery process. Our certified technicians use advanced techniques and specialized equipment to remove soot, eliminate odors, and restore your property to its pre-loss condition.
  </p>

  <div slot="additional-content-left">
    <div class="info-card">
      <h3 class="card-title">Types of Fire & Smoke Damage</h3>
      <div class="categories-grid">
        {#each damageTypes as type}
          <div class="category-item">
            <h4 class="category-title">{type.title}</h4>
            <p class="category-description">{type.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="info-card">
      <h3 class="card-title">Common Effects of Fire Damage</h3>
      <ul class="causes-list">
        {#each commonEffects as effect}
          <li class="cause-item">{effect}</li>
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
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.sootRemoval}</p>
            {:else if index === 2}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.waterMitigation}</p>
            {:else if index === 3}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.odorTreatment}</p>
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
          "When a kitchen fire damaged our home, PALM BUILD arrived within an hour of our call. Their team was compassionate and professional throughout the entire restoration process. They salvaged items we thought were lost and returned our home to better condition than before the fire."
        </p>
        <p class="testimonial-author">— David & Samantha Wilson, Homeowners</p>
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

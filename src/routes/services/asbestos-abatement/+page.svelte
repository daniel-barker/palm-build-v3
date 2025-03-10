<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Asbestos Abatement');

  const processSteps = [
    'Initial Site Inspection',
    'Testing & Analysis',
    'Containment Setup',
    'Safe Asbestos Removal',
    'Final Clearance Testing'
  ];

  const processDetails = [
    'Our certified inspectors thoroughly examine your property to identify all potential asbestos-containing materials (ACMs).',
    'We collect samples of suspected materials and send them to an accredited laboratory for analysis to confirm asbestos presence and concentration.',
    'The work area is completely sealed with negative air pressure systems and HEPA filtration to prevent fiber release during removal.',
    'Certified technicians wearing specialized PPE remove and carefully package all ACMs following strict EPA and OSHA protocols.',
    'Independent testing is conducted after removal to verify that asbestos fiber levels are below regulatory standards before clearance.'
  ];

  const advantages = [
    'EPA & State Licensed',
    'Advanced Safety Protocols',
    'Complete Documentation',
    'Certified Disposal Methods'
  ];

  const commonLocations = [
    {
      title: 'Insulation Materials',
      description: 'Pipe insulation, boiler insulation, attic/wall insulation (vermiculite), and HVAC duct insulation manufactured before 1980.'
    },
    {
      title: 'Flooring Products',
      description: 'Vinyl floor tiles, vinyl sheet flooring, and the adhesives used to install them, especially those produced between 1950-1980.'
    },
    {
      title: 'Ceiling Materials',
      description: 'Popcorn ceilings, acoustic ceiling tiles, and spray-applied ceiling treatments common in homes built before 1980.'
    },
    {
      title: 'Other Building Materials',
      description: 'Cement siding (transite), roofing materials, textured paints, joint compounds, and some plaster materials.'
    }
  ];

  const healthRisks = [
    'Mesothelioma (cancer affecting the lining of the lungs and abdomen)',
    'Lung cancer (particularly when combined with smoking)',
    'Asbestosis (scarring of lung tissue causing restricted breathing)',
    'Pleural thickening (thickening of the lung lining that restricts breathing)',
    'Pleural plaques (calcified patches on the lung lining)',
    'Increased risk of other cancers (larynx, ovarian, colorectal)'
  ];

  const faqItems = [
    {
      question: 'How do I know if I have asbestos in my home?',
      answer: 'Homes built before 1980 are likely to contain asbestos in various materials. However, you cannot identify asbestos by visual inspection alone. Professional testing is the only reliable way to confirm its presence. We offer comprehensive testing services using accredited laboratories.'
    },
    {
      question: 'Is asbestos dangerous if left undisturbed?',
      answer: 'Intact and undisturbed asbestos generally poses minimal risk. However, when materials containing asbestos are damaged or deteriorate over time, they can release fibers into the air. Any renovation, remodeling, or demolition work can disturb these materials and create a hazard.'
    },
    {
      question: 'How long does asbestos abatement take?',
      answer: 'The timeline varies based on the size of the area and amount of material being removed. Small projects might take 1-2 days, while larger projects can take a week or more. Testing results typically require 24-48 hours for laboratory analysis.'
    },
    {
      question: 'Can I stay in my home during asbestos removal?',
      answer: 'For most residential abatement projects, we recommend temporary relocation during the active removal process. While our containment procedures are thorough, temporary relocation provides an extra layer of safety, especially for sensitive individuals.'
    }
  ];

  const estimatedTimelines = {
    inspection: '2-4 hours',
    testing: '24-48 hours for lab results',
    setup: '4-8 hours',
    removal: '1-5 days (depending on scope)',
    clearance: '24-48 hours for final test results'
  };
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Schedule an Inspection"
  ctaDescription="Concerned about asbestos? Contact us for professional testing and safe removal services."
>
  <p slot="service-description">
    Asbestos removal requires specialized expertise and strict safety protocols. Our licensed technicians follow all EPA guidelines and regulations to ensure safe, complete removal and disposal of asbestos-containing materials from your property.
  </p>

  <div slot="additional-content-left">
    <div class="info-card">
      <h3 class="card-title">Common Asbestos Locations</h3>
      <div class="categories-grid">
        {#each commonLocations as location}
          <div class="category-item">
            <h4 class="category-title">{location.title}</h4>
            <p class="category-description">{location.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="info-card">
      <h3 class="card-title">Health Risks of Asbestos Exposure</h3>
      <ul class="causes-list">
        {#each healthRisks as risk}
          <li class="cause-item">{risk}</li>
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
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.testing}</p>
            {:else if index === 2}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.setup}</p>
            {:else if index === 3}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.removal}</p>
            {:else if index === 4}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.clearance}</p>
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
          "When we discovered our popcorn ceiling contained asbestos during a home renovation, we were terrified. PALM BUILD handled everything professionally from testing to complete removal. Their containment procedures were impressive, and they provided thorough documentation for our records. We can now proceed with our renovation with peace of mind."
        </p>
        <p class="testimonial-author">— Robert & Jennifer Adams, Homeowners</p>
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

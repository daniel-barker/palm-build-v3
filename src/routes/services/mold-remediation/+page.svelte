<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Mold Remediation');

  const processSteps = [
    'Comprehensive Mold Inspection',
    'Containment & Air Filtration',
    'Safe Mold Removal',
    'Structural Cleaning & Treatment',
    'Prevention & Moisture Control'
  ];

  const processDetails = [
    'We conduct thorough visual inspections, air quality testing, and moisture readings to identify all affected areas and mold types.',
    'Our team creates negative air pressure zones with HEPA filtration to prevent cross-contamination during remediation.',
    'Using specialized techniques and antimicrobial solutions, we safely remove mold from affected surfaces while minimizing spore dispersal.',
    'All affected structural elements are thoroughly cleaned, sanitized, and treated with EPA-registered products to eliminate residual mold.',
    'We identify and address moisture sources, apply preventative treatments, and provide recommendations to prevent future growth.'
  ];

  const advantages = [
    'IICRC S520 Standard Compliant',
    'Advanced Containment Methods',
    'EPA Registered Products',
    'Comprehensive Documentation'
  ];

  const moldTypes = [
    {
      title: 'Aspergillus',
      description: 'Commonly found in homes and buildings, can cause respiratory infections and allergic reactions in people with weakened immune systems.'
    },
    {
      title: 'Stachybotrys (Black Mold)',
      description: 'Dark green or black mold that grows on materials with high cellulose content. Associated with serious health concerns including respiratory issues and neurological effects.'
    },
    {
      title: 'Cladosporium',
      description: 'Olive-green to brown or black mold that grows in both cool and warm areas. Can cause allergic reactions and asthma symptoms.'
    },
    {
      title: 'Penicillium',
      description: 'Blue or green mold commonly found in water-damaged buildings. Can cause allergic reactions and is particularly concerning for people with compromised immune systems.'
    }
  ];

  const healthImpacts = [
    'Respiratory Issues (coughing, wheezing, throat irritation)',
    'Allergic Reactions (sneezing, red eyes, skin rash)',
    'Asthma Triggers and Attacks',
    'Chronic Sinus Infections',
    'Fatigue and Headaches',
    'Neurological Problems (in severe exposures)'
  ];

  const faqItems = [
    {
      question: 'How do I know if I have mold in my home?',
      answer: 'Signs of mold include visible growth (often appearing as discoloration on walls or ceilings), musty odors, water stains, and health symptoms that improve when away from home. Professional testing can confirm mold presence even when not visible.'
    },
    {
      question: 'Can I remove mold myself?',
      answer: 'Small areas of mold (less than 10 square feet) may be addressed by homeowners with proper protection. However, larger infestations, hidden mold, or black mold should be handled by certified professionals to ensure proper containment and complete removal.'
    },
    {
      question: 'How long does professional mold remediation take?',
      answer: 'The timeline varies based on the extent of contamination. Small to medium remediations typically take 3-7 days from inspection to completion. Larger or more complex projects may require 1-2 weeks or longer.'
    },
    {
      question: 'Will mold come back after remediation?',
      answer: 'If the underlying moisture issue is properly addressed and recommendations for prevention are followed, mold should not return. Our process includes identifying and addressing moisture sources to prevent recurrence.'
    }
  ];

  const estimatedTimelines = {
    inspection: '2-4 hours',
    containment: '4-8 hours',
    removal: '1-3 days (depending on severity)',
    cleaning: '1-2 days',
    prevention: '1 day plus ongoing monitoring'
  };
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Schedule an Inspection"
  ctaDescription="Don't let mold compromise your health and property. Contact us for a thorough inspection."
>
  <p slot="service-description">
    Mold can pose serious health risks and compromise your property's structural integrity. Our certified technicians use industry-leading techniques and equipment to safely remove mold and prevent future growth, ensuring your environment is healthy and safe.
  </p>

  <div slot="additional-content-left">
    <div class="info-card">
      <h3 class="card-title">Common Types of Mold</h3>
      <div class="categories-grid">
        {#each moldTypes as type}
          <div class="category-item">
            <h4 class="category-title">{type.title}</h4>
            <p class="category-description">{type.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="info-card">
      <h3 class="card-title">Health Impacts of Mold Exposure</h3>
      <ul class="causes-list">
        {#each healthImpacts as impact}
          <li class="cause-item">{impact}</li>
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
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.containment}</p>
            {:else if index === 2}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.removal}</p>
            {:else if index === 3}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.cleaning}</p>
            {:else if index === 4}
              <p class="timeline"><strong>Estimated Time:</strong> {estimatedTimelines.prevention}</p>
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
          "After discovering black mold in our basement, we were concerned about our family's health. PALM BUILD's team not only removed all traces of mold but also identified and fixed the moisture source that caused it. Their thorough approach and attention to detail made all the difference."
        </p>
        <p class="testimonial-author">— Michael & Lisa Thompson, Homeowners</p>
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

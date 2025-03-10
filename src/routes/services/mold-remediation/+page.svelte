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

  const advantages = [
    'IICRC S520 Standard Compliant',
    'Advanced Containment Methods',
    'EPA Registered Products',
    'Comprehensive Documentation'
  ];
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
</ServiceTemplate>

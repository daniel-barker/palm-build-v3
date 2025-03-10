<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Crawl Space Cleanouts');

  const processSteps = [
    'Initial Inspection & Assessment',
    'Water Extraction & Drying',
    'Debris Removal & Cleaning',
    'Sanitization & Treatment',
    'Preventive Measures Installation'
  ];

  const advantages = [
    'IICRC S500 Standard Certified',
    'Advanced Moisture Detection',
    'Complete Debris Removal',
    'Preventive Solutions'
  ];
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Schedule a Crawl Space Inspection"
  ctaDescription="Don't let crawl space issues compromise your home's foundation. Contact us for a thorough inspection."
>
  <p slot="service-description">
    A clean, dry crawl space is essential for your home's structural integrity and indoor air quality. Our certified technicians provide comprehensive crawl space cleanout services, addressing moisture issues, removing debris, and implementing preventive measures to protect your home.
  </p>
</ServiceTemplate>

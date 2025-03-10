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

  const advantages = [
    'IICRC Fire & Smoke Certified',
    'Advanced Deodorization Methods',
    'Content Cleaning & Restoration',
    'Insurance Claim Assistance'
  ];
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
</ServiceTemplate>

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

  const advantages = [
    '24/7 Emergency Response',
    'IICRC Certified Technicians',
    'Advanced Equipment & Techniques',
    'Direct Insurance Billing'
  ];
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
</ServiceTemplate>

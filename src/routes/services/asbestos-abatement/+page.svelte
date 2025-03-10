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

  const advantages = [
    'EPA & State Licensed',
    'Advanced Safety Protocols',
    'Complete Documentation',
    'Certified Disposal Methods'
  ];
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
</ServiceTemplate>

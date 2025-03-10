<script>
  import { services } from '$lib/data/services';
  import ServiceTemplate from '$lib/components/ServiceTemplate.svelte';

  const service = services.find(s => s.title === 'Reconstruction');

  const processSteps = [
    'Damage Assessment',
    'Project Planning',
    'Structural Repairs',
    'Interior Finishing',
    'Final Inspection & Walkthrough'
  ];

  const advantages = [
    'Licensed & Insured Contractors',
    'Comprehensive Project Management',
    'Quality Materials & Craftsmanship',
    'Timely Project Completion'
  ];
</script>

<ServiceTemplate
  {service}
  {processSteps}
  {advantages}
  ctaText="Start Your Reconstruction Project"
  ctaDescription="Ready to rebuild? Contact us for expert reconstruction services that restore your property to its pre-loss condition."
>
  <p slot="service-description">
    From structural repairs to final finishes, our reconstruction services provide complete property restoration. Our experienced team manages every aspect of the rebuild process, ensuring quality workmanship and attention to detail at every step.
  </p>
</ServiceTemplate>

<script>
  const logos = [
    { src: '/logos/google.png', alt: 'Google' },
    { src: '/logos/fapia.png', alt: 'FAPIA' },
    { src: '/logos/capia.png', alt: 'CAPIA' },
    { src: '/logos/act.png', alt: 'ACT' },
    { src: '/logos/osha.svg', alt: 'OSHA' },
    { src: '/logos/cmr.jpg', alt: 'CMR' },
    { src: '/logos/iicrc.svg', alt: 'IICRC' },
    { src: '/logos/bbb.svg', alt: 'BBB' }
  ];
</script>

<div class="w-full logo-strip">
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 px-4">
    {#each logos as logo}
      <div class="flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          class="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .logo-strip {
    padding-top: 1rem;
  }
</style>
